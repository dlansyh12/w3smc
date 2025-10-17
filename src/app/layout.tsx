import type { Metadata } from 'next';
import './globals.css';
import SmoothScrollProvider from './providers/SmoothScrollProvider'; 

export const metadata: Metadata = {
  title: 'W3SMC',
  description: 'Web3 Social Media Community',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* ✅ Smooth scroll aktif untuk seluruh halaman */}
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}

