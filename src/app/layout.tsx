// app/layout.tsx
import "./globals.css";
import type { ReactNode } from "react";
import ClientLayout from "@/app/components/ClientLayout";

export const metadata = {
  title: "My App",
  description: "Your description here",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
