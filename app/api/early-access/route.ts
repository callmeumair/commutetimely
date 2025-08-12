import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const { email, name, useCase, location, commuteChallenge, device } = await request.json();

    // Basic validation
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      );
    }

    // Check if Supabase is configured
    if (!supabase) {
      console.error('Supabase not configured - missing environment variables');
      return NextResponse.json(
        { error: 'Database not configured. Please contact support.' },
        { status: 500 }
      );
    }

    // Check if email already exists
    const { data: existingUser, error: checkError } = await supabase
      .from('early_access_users')
      .select('email')
      .eq('email', email)
      .single();

    if (checkError && checkError.code !== 'PGRST116') { // PGRST116 = no rows returned
      console.error('Error checking existing user:', checkError);
      return NextResponse.json(
        { error: 'Failed to check existing user' },
        { status: 500 }
      );
    }

    if (existingUser) {
      return NextResponse.json(
        { error: 'Email already registered for early access' },
        { status: 409 }
      );
    }

    // Insert new user into database
    const { data: newUser, error: insertError } = await supabase
      .from('early_access_users')
      .insert([
        {
          email,
          name: name || null,
          use_case: useCase || null,
          location: location || null,
          commute_challenge: commuteChallenge || null,
          device: device || null,
        }
      ])
      .select()
      .single();

    if (insertError) {
      console.error('Error inserting user:', insertError);
      return NextResponse.json(
        { error: 'Failed to save user data' },
        { status: 500 }
      );
    }

    // Log successful submission
    console.log('Early Access User Saved:', {
      id: newUser.id,
      email: newUser.email,
      timestamp: new Date().toISOString()
    });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for joining our early access list!',
        userId: newUser.id
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Early access API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
