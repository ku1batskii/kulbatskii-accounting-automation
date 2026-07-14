import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const ogImage = `${protocol}://${host}/og-no-glow-v2.png`;
  const title = "Автоматизация бухгалтерии · KULBATSKII";
  const description = "Gulf Bridge: аудит стоимости бухгалтерской рутины, подготовка к e-invoicing 2027 и рост клиентского портфеля без пропорционального найма.";

  return {
    title,
    description,
    icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
    openGraph: { title, description, type: "website", locale: "ru_RU", images: [{ url: ogImage, width: 1200, height: 630, alt: "Gulf Bridge — аудит стоимости бухгалтерской рутины" }] },
    twitter: { card: "summary_large_image", title, description, images: [ogImage] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><body>{children}</body></html>;
}
