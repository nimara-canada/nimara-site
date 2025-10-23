import { UserCheck, FileText, FolderCheck } from "lucide-react";
import { useTranslation } from "react-i18next";

export const BenefitsSection = () => {
  const { t } = useTranslation();
  
  const benefits = [
    {
      icon: UserCheck,
      title: t('benefits.items.pm'),
    },
    {
      icon: FileText,
      title: t('benefits.items.templates'),
    },
    {
      icon: FolderCheck,
      title: t('benefits.items.evidence'),
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-secondary" aria-labelledby="benefits-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 id="benefits-heading" className="text-3xl sm:text-4xl font-bold text-center">
            {t('benefits.title')}
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <article
                key={index}
                className="bg-card border border-border rounded-2xl p-6 space-y-4 text-center"
              >
                <div className="flex justify-center">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <benefit.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                </div>
                <h3 className="font-semibold text-lg">{benefit.title}</h3>
              </article>
            ))}
          </div>

          <div className="bg-accent/30 border border-accent rounded-xl p-4 text-center">
            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">{t('benefits.dataNote')}</span> {t('benefits.recordsNote')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
