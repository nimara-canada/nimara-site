import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Check, Download, Play, FileText, ChevronRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export interface ResourceAssets {
  excel_url: string;
  pdf_url: string;
  youtube_url: string;
}

export interface ResourceSectionProps {
  title: string;
  tag: string;
  description: string;
  bullets: string[];
  assets: ResourceAssets;
  resource_id: string;
  webhook_url: string;
}

const ROLE_OPTIONS = [
  { value: "executive-director", label: "Executive Director" },
  { value: "finance", label: "Finance" },
  { value: "program-lead", label: "Program Lead" },
  { value: "operations", label: "Operations" },
  { value: "other", label: "Other" },
];

export function ResourceSection({
  title,
  tag,
  description,
  bullets,
  assets,
  resource_id,
  webhook_url,
}: ResourceSectionProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [email, setEmail] = useState("");
  const [orgName, setOrgName] = useState("");
  const [role, setRole] = useState("");
  const [consent, setConsent] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      toast({
        title: "Please add a valid email",
        variant: "destructive",
      });
      return;
    }

    if (!consent) {
      toast({
        title: "Please agree to receive the resources",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(webhook_url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        mode: "no-cors",
        body: JSON.stringify({
          email,
          org_name: orgName || null,
          role: role || null,
          consent: true,
          resource_id,
        }),
      });

      setIsSuccess(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSuccess(false);
    setEmail("");
    setOrgName("");
    setRole("");
    setConsent(false);
    setIsModalOpen(false);
  };

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Resource Card - Left */}
          <div className="bg-card rounded-2xl p-8 md:p-10 border border-border/50 shadow-soft">
            {/* Tag */}
            <span className="inline-flex items-center px-3 py-1.5 text-xs font-semibold tracking-wide uppercase rounded-full bg-primary/10 text-primary mb-6">
              {tag}
            </span>

            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 leading-tight">
              {title}
            </h2>

            {/* Description */}
            <p className="text-body-muted text-base md:text-lg mb-6 leading-relaxed">
              {description}
            </p>

            {/* Benefits Bullets */}
            <ul className="space-y-3 mb-8" role="list" aria-label="Benefits">
              {bullets.map((bullet, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-primary" aria-hidden="true" />
                  </span>
                  <span className="text-foreground/80 text-sm md:text-base">{bullet}</span>
                </li>
              ))}
            </ul>

            {/* What You Get */}
            <div className="border-t border-border/50 pt-6 mb-8">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-4">
                What you get
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <FileText className="w-4 h-4 text-primary" aria-hidden="true" />
                  <span className="text-sm text-foreground/80">Excel tracker (download)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Download className="w-4 h-4 text-primary" aria-hidden="true" />
                  <span className="text-sm text-foreground/80">Step-by-step guide (PDF)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Play className="w-4 h-4 text-primary" aria-hidden="true" />
                  <span className="text-sm text-foreground/80">5-minute video walkthrough</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-4">
              <Button
                onClick={() => setIsModalOpen(true)}
                className="w-full h-12 text-base font-semibold"
                size="lg"
              >
                Get the free tracker
                <ChevronRight className="w-4 h-4 ml-2" aria-hidden="true" />
              </Button>
              
              <a
                href={assets.youtube_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors py-2"
              >
                <Play className="w-4 h-4" aria-hidden="true" />
                Watch the 5-minute video
              </a>
            </div>

            {/* Disclaimer */}
            <p className="text-xs text-muted-foreground mt-6 text-center">
              Self-reported. Always follow your funding agreement.
            </p>
          </div>

          {/* Video Preview - Right */}
          <div className="space-y-4">
            <div className="aspect-video rounded-2xl overflow-hidden bg-muted border border-border/50 shadow-soft">
              <iframe
                src={assets.youtube_url.replace("watch?v=", "embed/")}
                title={`${title} - Video walkthrough`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p className="text-center text-sm text-muted-foreground">
              5-minute setup walkthrough
            </p>
            <p className="text-center">
              <a
                href={assets.pdf_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:text-primary/80 transition-colors underline underline-offset-4"
              >
                Prefer text? Download the guide.
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Email Gate Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-md">
          {!isSuccess ? (
            <>
              <DialogHeader>
                <DialogTitle className="text-xl font-bold">Get instant access</DialogTitle>
              </DialogHeader>
              
              <p className="text-sm text-muted-foreground mb-6">
                Enter your email and we'll send you the tracker, guide, and video link right away.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">
                    Email <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@organization.ca"
                    required
                    className="h-11"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="org-name" className="text-sm font-medium">
                    Organization name <span className="text-muted-foreground">(optional)</span>
                  </Label>
                  <Input
                    id="org-name"
                    type="text"
                    value={orgName}
                    onChange={(e) => setOrgName(e.target.value)}
                    placeholder="Your nonprofit"
                    className="h-11"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="role" className="text-sm font-medium">
                    Role <span className="text-muted-foreground">(optional)</span>
                  </Label>
                  <Select value={role} onValueChange={setRole}>
                    <SelectTrigger className="h-11">
                      <SelectValue placeholder="Select your role" />
                    </SelectTrigger>
                    <SelectContent>
                      {ROLE_OPTIONS.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-start gap-3">
                  <Checkbox
                    id="consent"
                    checked={consent}
                    onCheckedChange={(checked) => setConsent(checked as boolean)}
                    className="mt-1"
                  />
                  <Label htmlFor="consent" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                    Yes, email me the resources and occasional updates from Nimara. You can unsubscribe anytime.
                  </Label>
                </div>

                <Button
                  type="submit"
                  className="w-full h-12 text-base font-semibold"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send me the resources"}
                </Button>
              </form>
            </>
          ) : (
            <div className="text-center py-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8 text-primary" aria-hidden="true" />
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-2">You're in.</h3>
              <p className="text-sm text-muted-foreground mb-8">
                Check your inbox. You can also access the links below right now.
              </p>

              <div className="space-y-3 mb-6">
                <Button
                  asChild
                  variant="outline"
                  className="w-full h-11 justify-start gap-3"
                >
                  <a href={assets.excel_url} target="_blank" rel="noopener noreferrer">
                    <FileText className="w-4 h-4" aria-hidden="true" />
                    Download Excel Tracker
                  </a>
                </Button>
                
                <Button
                  asChild
                  variant="outline"
                  className="w-full h-11 justify-start gap-3"
                >
                  <a href={assets.pdf_url} target="_blank" rel="noopener noreferrer">
                    <Download className="w-4 h-4" aria-hidden="true" />
                    Download Guide (PDF)
                  </a>
                </Button>
                
                <Button
                  asChild
                  variant="outline"
                  className="w-full h-11 justify-start gap-3"
                >
                  <a href={assets.youtube_url} target="_blank" rel="noopener noreferrer">
                    <Play className="w-4 h-4" aria-hidden="true" />
                    Watch Video
                  </a>
                </Button>
              </div>

              <p className="text-xs text-muted-foreground">
                Didn't get the email? Check spam or{" "}
                <button
                  onClick={handleReset}
                  className="text-primary hover:underline"
                >
                  try again
                </button>
                .
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
