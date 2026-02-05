import { GeistMono } from "geist/font/mono"
import { GeistSans } from "geist/font/sans"
import {
  Noto_Sans_Arabic as FontNotoSansArabic,
  Noto_Sans_Hebrew as FontNotoSansHebrew,
  Inter,
} from "next/font/google"

import { cn } from "@/lib/utils"

// Use local Geist fonts (no network requests)
const fontSans = GeistSans

const fontMono = GeistMono

const fontInter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const fontNotoSansArabic = FontNotoSansArabic({
  subsets: ["latin"],
  variable: "--font-ar",
})

const fontNotoSansHebrew = FontNotoSansHebrew({
  subsets: ["latin"],
  variable: "--font-he",
})

export const fontVariables = cn(
  fontSans.variable,
  fontMono.variable,
  fontInter.variable,
  fontNotoSansArabic.variable,
  fontNotoSansHebrew.variable
)
