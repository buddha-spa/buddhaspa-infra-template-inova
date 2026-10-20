import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Template Next.js",
  description: "Ponto de partida para projetos Next.js da Buddha Spa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
