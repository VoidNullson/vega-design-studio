import './globals.css';
import { Analytics } from '@vercel/analytics/react';

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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Vega Design Studio",
    "url": "https://your-domain.com",
    "logo": "https://your-domain.com/logos/logo-vega-wordmark.svg",
    "sameAs": ["https://www.linkedin.com/company/your-handle"]
  };
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className="bg-black text-white">{children}</body>
//     </html>
//   );
// }
