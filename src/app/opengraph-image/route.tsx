import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';
 
export const runtime = 'edge';
 
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get('title') || 'بيت التلال للمقاولات';
 
    return new ImageResponse(
      (
        <div
          style={{
            display: 'flex',
            fontSize: 60,
            color: 'white',
            background: 'linear-gradient(to right, #4CAF50, #2196F3)',
            width: '100%',
            height: '100%',
            textAlign: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            padding: 50,
          }}
        >
          <div style={{ fontWeight: 'bold', marginBottom: 20 }}>
            {title}
          </div>
          <div style={{ fontSize: 30 }}>
            متخصصون في البناء الحديث منذ 2019
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    );
  } catch (e) {
    console.log(`${e}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
