import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ApsPage from "./pages/topics/ApsPage";
import CostsPage from "./pages/topics/CostsPage";
import OpportunityCardPage from "./pages/topics/OpportunityCardPage";
import StudyInGermanyPage from "./pages/topics/StudyInGermanyPage";

const queryClient = new QueryClient();

export const routerBasename =
  import.meta.env.BASE_URL === "/" ? "/" : import.meta.env.BASE_URL.replace(/\/$/, "");

/**
 * Providers + routes, deliberately without a router.
 *
 * The router is supplied by whoever renders this: `BrowserRouter` in the browser
 * (below) and `StaticRouter` during the build-time prerender
 * (`src/entry-server.tsx`). Keeping them apart is what lets the same tree be
 * rendered to static HTML — see scripts/prerender.mjs.
 */
export const AppShell = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        {/*
          Topic routes — docs/SEO-CONTENT-PLAN.md. Adding one here is only step 1
          of 4: it also needs an entry in scripts/prerender.mjs (with its own
          title/description/canonical, or it inherits the homepage <head>), a
          <loc> in public/sitemap.xml, and an internal link in Footer.tsx.
        */}
        <Route path="/study-in-germany-from-india" element={<StudyInGermanyPage />} />
        <Route path="/aps-certificate-india" element={<ApsPage />} />
        <Route path="/cost-of-studying-in-germany" element={<CostsPage />} />
        <Route path="/opportunity-card-chancenkarte" element={<OpportunityCardPage />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  </QueryClientProvider>
);

const App = () => (
  <BrowserRouter basename={routerBasename}>
    <AppShell />
  </BrowserRouter>
);

export default App;
