import { Shield } from "lucide-react";
import { useTranslation } from "react-i18next";

export const ExpertsSection = () => {
  const { t } = useTranslation();
  
  const expertTypes = [
    t('experts.types.ed'),
    t('experts.types.cpa'),
    t('experts.types.evaluator'),
    t('experts.types.crm'),
    t('experts.types.fundraising'),
    t('experts.types.privacy'),
  ];

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="flex justify-center">
            <div className="p-3 bg-primary/10 rounded-xl">
              <Shield className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold">
            {t('experts.title')}
          </h2>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {expertTypes.map((type, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-accent/50 text-accent-foreground rounded-full text-sm font-medium"
              >
                {type}
              </span>
            ))}
          </div>
          <p className="text-muted-foreground text-lg">
            {t('experts.subtitle')}
          </p>
        </div>
      </div>
    </section>
  );
};
