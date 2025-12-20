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
    <section className="py-20 lg:py-28 bg-muted" aria-labelledby="benefits-heading">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <span className="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-primary">
              What You Get
            </span>
            <h2 id="benefits-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter leading-[1.1]">
              {t('benefits.title')}
            </h2>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <article
                  key={index}
                  className="bg-card border border-border rounded-xl p-8 text-center transition-all duration-200 hover:shadow-md hover:border-border/80"
                >
                  <div className="flex justify-center mb-5">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <IconComponent className="h-5 w-5 text-primary" aria-hidden="true" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg tracking-tight">{benefit.title}</h3>
                </article>
              );
            })}
          </div>

          {/* Data Note */}
          <div className="bg-accent/20 border border-accent/30 rounded-xl p-5 text-center">
            <p className="text-sm text-body">
              <span className="font-semibold text-foreground">{t('benefits.dataNote')}</span>{' '}
              {t('benefits.recordsNote')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
