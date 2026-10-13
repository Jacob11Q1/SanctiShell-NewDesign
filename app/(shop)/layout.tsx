import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { MotionProvider } from "@/components/motion/motion-provider";

// Layout for every public storefront page: header, page content, footer.
// The header is fixed and transparent at the top, so pages decide their own
// top spacing (full-bleed heroes can sit behind it).
export default function ShopLayout({ children }: LayoutProps<"/">) {
  return (
    <MotionProvider>
      <SiteHeader />
      <main id="main" className="flex-1">
        {children}
      </main>
      <SiteFooter />
    </MotionProvider>
  );
}
