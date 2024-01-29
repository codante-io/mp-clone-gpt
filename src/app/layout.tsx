import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clone GPT",
  description:
    "Mini Projeto do clone do chatGPT desenvolvido com Next, Tailwind e a API da OpenAI",
  icons: "/images/bot.svg",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-background-light w-full h-full`}>
        {children}
      </body>
    </html>
  );
}
