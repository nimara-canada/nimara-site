import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import Index from "./pages/Index";
import Consultants from "./pages/Consultants";
import Company from "./pages/Company";
import BookACall from "./pages/BookACall";
import SignIn from "./pages/SignIn";
import SampleBrief from "./pages/SampleBrief";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Accessibility from "./pages/Accessibility";
import Trust from "./pages/Trust";
import NotFound from "./pages/NotFound";
import AIMasterclass from "./pages/AIMasterclass";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnnouncementBar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/nonprofits" element={<Index />} />
          <Route path="/for-nonprofits" element={<Index />} />
          <Route path="/consultants" element={<Consultants />} />
          <Route path="/company" element={<Company />} />
          <Route path="/book-a-call" element={<BookACall />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/sample-brief" element={<SampleBrief />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/accessibility" element={<Accessibility />} />
          <Route path="/trust" element={<Trust />} />
          <Route path="/ai-masterclass" element={<AIMasterclass />} />
          
          {/* Redirects for removed pages */}
          <Route path="/funders" element={<Navigate to="/company" replace />} />
          <Route path="/resources" element={<Navigate to="/company" replace />} />
          <Route path="/ux-pilot" element={<Navigate to="/company" replace />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
