import type {Metadata} from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "2024 PyCon JP Registration",
  description: "2024 PyCon JP Registration Desk Tool",
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="ja">
    <body>
    {children}
    </body>
    </html>
  );
}
