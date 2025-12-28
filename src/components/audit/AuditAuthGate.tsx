import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Lock, Shield } from "lucide-react";
import { verifyPassword, isAuthenticated, clearStoredPassword } from "@/lib/auditApi";
import { useToast } from "@/hooks/use-toast";

interface AuditAuthGateProps {
  children: React.ReactNode;
}

export function AuditAuthGate({ children }: AuditAuthGateProps) {
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthed, setIsAuthed] = useState(isAuthenticated());
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const valid = await verifyPassword(password);
      if (valid) {
        setIsAuthed(true);
        toast({
          title: "Access granted",
          description: "Welcome to the Privacy Audit tool.",
        });
      } else {
        toast({
          title: "Access denied",
          description: "Invalid password. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to verify password. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
      setPassword("");
    }
  };

  const handleLogout = () => {
    clearStoredPassword();
    setIsAuthed(false);
  };

  if (isAuthed) {
    return (
      <div className="relative">
        <Button
          variant="ghost"
          size="sm"
          onClick={handleLogout}
          className="absolute top-4 right-4 z-10"
        >
          <Lock className="h-4 w-4 mr-2" />
          Lock
        </Button>
        {children}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            <Shield className="h-6 w-6 text-primary" />
          </div>
          <CardTitle>Privacy Audit Tool</CardTitle>
          <CardDescription>
            Enter the admin password to access the PIPEDA compliance audit tool.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="password"
              placeholder="Enter admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
              autoFocus
            />
            <Button type="submit" className="w-full" disabled={isLoading || !password}>
              {isLoading ? "Verifying..." : "Access Audit Tool"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
