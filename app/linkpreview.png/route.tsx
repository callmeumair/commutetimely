import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET() {
  const width = 1200
  const height = 630

  return new ImageResponse(
    (
      <div
        style={{
          width: `${width}px`,
          height: `${height}px`,
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#0ea5e9',
          color: '#ffffff',
          position: 'relative',
          fontFamily:
            'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial',
        }}
      >
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 24, padding: '64px 80px 0 80px' }}>
          {/* Icon */}
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: 16,
              backgroundColor: '#0284c7',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            aria-hidden
          >
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="24" cy="24" r="17" stroke="white" strokeWidth="4" />
              <line x1="24" y1="24" x2="24" y2="13" stroke="white" strokeWidth="4" strokeLinecap="round" />
              <line x1="24" y1="24" x2="33" y2="33" stroke="white" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </div>

          <div style={{ fontSize: 56, fontWeight: 800, letterSpacing: -1 }}>CommuteTimely</div>
        </div>

        {/* Tagline */}
        <div style={{ padding: '24px 80px', fontSize: 72, fontWeight: 800, lineHeight: 1.1 }}>
          <div>Know exactly</div>
          <div>when to leave</div>
        </div>

        {/* Right-side pin */}
        <div style={{ position: 'absolute', right: 120, top: 160 }} aria-hidden>
          <svg width="260" height="260" viewBox="0 0 200 260" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="100" cy="240" rx="70" ry="18" fill="#0284c7" opacity="0.3" />
            <path d="M100 0 C45 0 0 45 0 100 C0 160 100 230 100 230 C100 230 200 160 200 100 C200 45 155 0 100 0Z" fill="white" />
            <circle cx="100" cy="100" r="58" fill="none" stroke="#0ea5e9" strokeWidth="8" />
            <line x1="100" y1="100" x2="100" y2="72" stroke="#0ea5e9" strokeWidth="8" strokeLinecap="round" />
            <line x1="100" y1="100" x2="124" y2="124" stroke="#0ea5e9" strokeWidth="8" strokeLinecap="round" />
            <circle cx="100" cy="100" r="6" fill="#0ea5e9" />
          </svg>
        </div>
      </div>
    ),
    {
      width,
      height,
      headers: {
        'content-type': 'image/png',
        // Cache for 1 day at the edge; revalidate frequently in dev
        'cache-control': process.env.NODE_ENV === 'development'
          ? 'no-store'
          : 'public, max-age=86400, s-maxage=86400, immutable',
      },
    }
  )
}
