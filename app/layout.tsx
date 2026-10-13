import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

// Display font: headlines, with the italic used for the accent word.
const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
});

// Body + UI font: text, prices, buttons, eyebrows. Variable font, so no weights needed.
const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

// TODO: final title/description copy from Kai
export const metadata: Metadata = {
  title: { default: "Sanctishell", template: "%s · Sanctishell" },
  description: "Handcrafted mother-of-pearl and olive wood pieces from Beit Sahour, Bethlehem.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${manrope.variable} h-full antialiased`}
    >
      {/* suppressHydrationWarning: browser extensions (e.g. ColorZilla's
          cz-shortcut-listen) add attributes to <body> before React loads.
          Only affects <body>'s own attributes, not its children. */}
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
