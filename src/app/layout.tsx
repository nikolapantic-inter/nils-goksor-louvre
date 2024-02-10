import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from "./StoreProvider";
import Link from "next/link";
import { Navbar, NavbarContent, NavbarItem } from "@nextui-org/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Louvre",
  description: "A digital gallery",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={inter.className}>
          <Navbar>
            <NavbarContent>
              <NavbarItem>
                <Link href="/">My galleries</Link>
              </NavbarItem>
              <NavbarItem>
                <Link href="/create-gallery">Create gallery</Link>
              </NavbarItem>
            </NavbarContent>
          </Navbar>
          <main className="m-4">{children}</main>
        </body>
      </html>
    </StoreProvider>
  );
}
