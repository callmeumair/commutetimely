import { NextRequest, NextResponse } from 'next/server';

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

    // Here you would typically:
    // 1. Save to database
    // 2. Send to email service (Mailchimp, ConvertKit, etc.)
    // 3. Send confirmation email
    // 4. Log the submission

    // For now, we'll log to console and return success
    console.log('Early Access Request:', {
      email,
      name,
      useCase,
      location,
      commuteChallenge,
      device,
      timestamp: new Date().toISOString()
    });

    // TODO: Implement actual email storage/processing
    // Example: Save to database, send to email service, etc.

    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for joining our early access list!' 
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
