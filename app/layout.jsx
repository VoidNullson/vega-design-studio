import './globals.css';

export const metadata = {
  title: 'Vega Design Studio',
  description: 'Guided by Vega — Where Creativity Meets Intelligence',
  icons: { icon: '/logo-vega-agent.png' },
  // openGraph: {
  //   title: 'Vega Design Studio',
  //   description: 'Guided by Vega — Where Creativity Meets Intelligence',
  //   images: ['/og-image.png'],
  //   type: 'website',
  //   url: 'https://vegadesign.studio'
  // },
  // twitter: {
  //   card: 'summary_large_image',
  //   title: 'Vega Design Studio',
  //   description: 'Guided by Vega — Where Creativity Meets Intelligence',
  //   images: ['/og-image.png']
  // }
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
