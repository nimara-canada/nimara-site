import "./i18n";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
import NextSteps from "./pages/NextSteps";
import FreeResources from "./pages/FreeResources";

const queryClient = new QueryClient();

const App = () => (
  <I18nextProvider i18n={i18n}>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/consultants" element={<Consultants />} />
            <Route path="/company" element={<Company />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/book-a-call" element={<BookACall />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/accessibility" element={<Accessibility />} />
            <Route path="/trust" element={<Trust />} />
            <Route path="/sample-brief" element={<SampleBrief />} />
            <Route path="/ai-masterclass" element={<AIMasterclass />} />
            <Route path="/next-steps" element={<NextSteps />} />
            <Route path="/free-resources" element={<FreeResources />} />
            
            {/* Redirects for old routes */}
            <Route path="/for-nonprofits" element={<Navigate to="/" replace />} />
            <Route path="/for-consultants" element={<Navigate to="/consultants" replace />} />
            <Route path="/about" element={<Navigate to="/company" replace />} />
            
            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </I18nextProvider>
);

export default App;
