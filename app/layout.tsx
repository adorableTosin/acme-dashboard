import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

export const metadata = {
  title: "Acme Dashoard App",
  description: "Tosin's first Next.js app",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}