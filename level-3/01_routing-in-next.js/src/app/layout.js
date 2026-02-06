import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <div>I am Rafikul here</div>
        {children}
      </body>
    </html>
  );
}
