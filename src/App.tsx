import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";

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
