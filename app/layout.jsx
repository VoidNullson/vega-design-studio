import './globals.css';

export const metadata = { title: 'Vega Design Studio', description: 'Where Creativity Meets Intelligence' };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
