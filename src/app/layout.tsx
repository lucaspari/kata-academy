import "./globals.css";
import Navbar from "@/components/navbar";
import { Providers } from "./providers";
export const metadata = {
  title: "Kata Academy",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="dark" suppressHydrationWarning lang="en">
      <body>
        <Providers>
          <Navbar></Navbar>
          {children}
        </Providers>
      </body>
    </html>
  );
}
