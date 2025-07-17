import "./globals.css";
import { ReactNode } from "react";
import Providers from "@/providers/Providers";

export const metadata = {
  title: "Your App",
  description: "Your description",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
