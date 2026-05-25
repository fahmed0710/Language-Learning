import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'BengaLing',
  description: 'Learn the letters of the Bengali alphabet'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex flex-col min-h-screen overflow-hidden">
        <nav className="flex items-center justify-between p-4">
          <div className="text-lg font-semibold"> Logo </div>
          <ul className="flex space-x-6">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Letters</a>
            </li>
            <li>
              <a href="#">Changelog</a>
            </li>
          </ul>
        </nav>

        <main>{children}</main>

        <div className="flex justify-center">
          <footer className="absolute bottom-0 p-4 text-center">
            © 2026 BengaLing
          </footer>
        </div>
      </body>
    </html>
  );
}
