import { Playfair_Display, Open_Sans, Roboto } from "next/font/google";

export const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

export const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});
