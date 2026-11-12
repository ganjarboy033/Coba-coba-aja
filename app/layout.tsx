import type { Metadata, Viewport } from "next";
import "./globals.css";
import { PWARegister } from "@/components/PWARegister";

export const metadata: Metadata = {
  title: "XIYU GITHUB UPLOADER",
  description: "A little space for your GitHub projects. Upload, commit, and create with love.",
  applicationName: "XIYU",
  icons: {
    icon: [{ url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" }],
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180" }]
  },
  appleWebApp: { capable: true, title: "XIYU", statusBarStyle: "default" }
};

export const viewport: Viewport = {
  themeColor: "#292426",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}<PWARegister /></body></html>;
}
