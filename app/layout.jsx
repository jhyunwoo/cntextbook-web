import "./globals.css";
import { AnalyticsWrapper } from "./components/analytics";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-orange-50">
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-E4L9BS3C6C"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-E4L9BS3C6C');
        </script>
      <head />
      <body>
        {children}
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
