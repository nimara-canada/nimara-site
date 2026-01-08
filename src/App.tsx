import "./i18n";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CALENDLY_BOOKING_URL, TYPEFORM_HEALTH_CHECK_URL } from "@/constants/urls";
import Index from "./pages/Index";
import Consultants from "./pages/Consultants";
import Partners from "./pages/Partners";
import Company from "./pages/Company";
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
import Resources from "./pages/Resources";
import ResourceDetail from "./pages/ResourceDetail";
import Integrations from "./pages/Integrations";
import HowNimaraWorks from "./pages/HowNimaraWorks";
import StartHere from "./pages/StartHere";
import GrantSetup from "./pages/GrantSetup";
import OrganizationCheck from "./pages/OrganizationCheck";
import CapacityBuildout from "./pages/CapacityBuildout";
import ThanksCapacityCall from "./pages/ThanksCapacityCall";
import ThanksNohc from "./pages/ThanksNohc";
import ThanksProofTracker from "./pages/ThanksProofTracker";
import ThanksBooked from "./pages/ThanksBooked";

import PathA from "./pages/PathA";
import PathB from "./pages/PathB";
import PrivacyAuditDashboard from "./pages/admin/PrivacyAuditDashboard";
import PrivacyAuditWizard from "./pages/admin/PrivacyAuditWizard";
import PrivacyAuditFindings from "./pages/admin/PrivacyAuditFindings";
import PrivacyAuditTemplates from "./pages/admin/PrivacyAuditTemplates";

// Redirect component for external URLs
const ExternalRedirect = ({ to }: { to: string }) => {
  window.location.href = to;
  return null;
};

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
            <Route path="/partners" element={<Partners />} />
            <Route path="/company" element={<Company />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/book-a-call" element={<ExternalRedirect to={CALENDLY_BOOKING_URL} />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/accessibility" element={<Accessibility />} />
            <Route path="/trust" element={<Trust />} />
            <Route path="/sample-brief" element={<SampleBrief />} />
            <Route path="/ai-masterclass" element={<AIMasterclass />} />
            <Route path="/next-steps" element={<NextSteps />} />
            <Route path="/free-resources" element={<FreeResources />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/resources/:slug" element={<ResourceDetail />} />
            <Route path="/integrations" element={<Integrations />} />
            <Route path="/how-nimara-works" element={<HowNimaraWorks />} />
            <Route path="/start-here" element={<StartHere />} />
            <Route path="/grant-setup" element={<GrantSetup />} />
            <Route path="/organization-check" element={<OrganizationCheck />} />
            <Route path="/capacity-buildout" element={<CapacityBuildout />} />
            <Route path="/thanks-capacity-call" element={<ThanksCapacityCall />} />
            <Route path="/thanks-nohc" element={<ThanksNohc />} />
            <Route path="/thanks-proof-tracker" element={<ThanksProofTracker />} />
            <Route path="/thanks-booked" element={<ThanksBooked />} />
            <Route path="/organizational-health-check" element={<ExternalRedirect to={TYPEFORM_HEALTH_CHECK_URL} />} />
            <Route path="/health-score" element={<ExternalRedirect to={TYPEFORM_HEALTH_CHECK_URL} />} />
            <Route path="/path-a" element={<PathA />} />
            <Route path="/path-b" element={<PathB />} />
            <Route path="/check" element={<ExternalRedirect to={TYPEFORM_HEALTH_CHECK_URL} />} />
            <Route path="/free-check" element={<ExternalRedirect to={TYPEFORM_HEALTH_CHECK_URL} />} />
            
            {/* Admin routes */}
            <Route path="/admin/privacy-audit" element={<PrivacyAuditDashboard />} />
            <Route path="/admin/privacy-audit/wizard" element={<PrivacyAuditWizard />} />
            <Route path="/admin/privacy-audit/findings" element={<PrivacyAuditFindings />} />
            <Route path="/admin/privacy-audit/templates" element={<PrivacyAuditTemplates />} />
            
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
