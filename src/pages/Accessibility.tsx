import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Accessibility = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold mb-8">Accessibility Statement</h1>
        <div className="prose max-w-none">
          <p className="text-muted-foreground">Accessibility statement content coming soon.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Accessibility;
