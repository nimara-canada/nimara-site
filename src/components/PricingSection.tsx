import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface PricingSectionProps {
  onOpenPackagesWaitlist?: () => void;
}

export const PricingSection = ({ onOpenPackagesWaitlist }: PricingSectionProps) => {
  return (
    <section id="pricing" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Pricing (simple & transparent)
          </h2>
          
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Quotes are free. If you start a project, your proposal shows one extra line for Nimara platform & PM oversight so delivery is clear and auditable.
          </p>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-2xl">Single-category (PM oversight included)</CardTitle>
              <CardDescription className="text-base">
                Typical: <span className="font-semibold text-foreground">22–28%</span> Nimara platform & PM oversight
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Minimum</p>
                  <p className="text-xl font-semibold">$1,250</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Cap</p>
                  <p className="text-xl font-semibold">$9,000</p>
                </div>
              </div>

              <div>
                <p className="text-sm font-medium mb-2">Covers:</p>
                <p className="text-sm text-muted-foreground">
                  Brief & matching, PM (light), acceptance, secure records, payments ops
                </p>
              </div>

              <Alert className="bg-muted/50 border-muted">
                <AlertDescription className="text-sm">
                  <span className="font-medium">Example:</span> $12,000 project → Nimara $3,000 (25%), Consultant $9,000.
                </AlertDescription>
              </Alert>

              <Alert className="bg-accent/10 border-accent">
                <AlertDescription className="text-sm font-medium">
                  If we deliver fewer than 2 proposals within 3 days after your brief is finalized, you get a $500 credit toward your first project.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          <div className="text-center text-sm text-muted-foreground">
            <p className="mb-2">
              Need more than one area? Packages launch Nov 1, 2025. Pricing will be announced at launch.
            </p>
            <button
              onClick={onOpenPackagesWaitlist}
              className="text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
            >
              Join the packages waitlist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
