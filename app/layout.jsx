import "./globals.css";
import { AnalyticsWrapper } from "./components/analytics";
import Script from "next/script";
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-orange-50">
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-E4L9BS3C6C"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-E4L9BS3C6C');
        `}
      </Script>
      <head />
      <body>
        {children}
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
