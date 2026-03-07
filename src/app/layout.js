import './globals.css';
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: 'Parth Hotel and Restaurant',
  description: 'Experience luxury and comfort at Parth Hotel and Restaurant',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics/>
      </body>
    </html>
  );
}