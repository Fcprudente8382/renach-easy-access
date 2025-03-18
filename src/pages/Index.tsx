
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RenachStepperForm from '@/components/RenachStepperForm';
import InfoSection from '@/components/InfoSection';
import AnimatedCard from '@/components/AnimatedCard';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const processSteps = [
    {
      title: "Registro",
      description: "Cadastre seus dados pessoais para obter seu número de registro RENACH.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><line x1="12" x2="12" y1="8" y2="16"></line><line x1="8" x2="16" y1="12" y2="12"></line></svg>
      )
    },
    {
      title: "Exames Médicos",
      description: "Realize os exames médicos e psicológicos necessários para a habilitação.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
      )
    },
    {
      title: "Aulas Teóricas",
      description: "Participe das aulas teóricas obrigatórias para conhecer as leis de trânsito.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path></svg>
      )
    },
    {
      title: "Exame Teórico",
      description: "Realize a prova teórica para testar seus conhecimentos sobre legislação de trânsito.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4"></path><path d="M12 18v4"></path><path d="m4.93 4.93 2.83 2.83"></path><path d="m16.24 16.24 2.83 2.83"></path><path d="M2 12h4"></path><path d="M18 12h4"></path><path d="m4.93 19.07 2.83-2.83"></path><path d="m16.24 7.76 2.83-2.83"></path></svg>
      )
    },
    {
      title: "Aulas Práticas",
      description: "Participe das aulas práticas de direção com um instrutor credenciado.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="16" y2="12"></line><line x1="12" x2="12.01" y1="8" y2="8"></line></svg>
      )
    },
    {
      title: "Exame Prático",
      description: "Realize o exame prático de direção para comprovar suas habilidades ao volante.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.5 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.6-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C1.4 11.3 1 12.1 1 13v3c0 .6.4 1 1 1h2"></path><circle cx="7" cy="17" r="2"></circle><path d="M9 17h6"></path><circle cx="17" cy="17" r="2"></circle></svg>
      )
    }
  ];

  const benefitsSection = {
    title: "Por que usar o Renach Fácil?",
    description: "Conheça os benefícios de utilizar nossa plataforma para obter seu número RENACH",
    steps: [
      {
        title: "Praticidade",
        description: "Obtenha seu número RENACH de forma online, sem precisar sair de casa.",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
        )
      },
      {
        title: "Rapidez",
        description: "Processo rápido e eficiente, com geração imediata do número RENACH.",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
        )
      },
      {
        title: "Segurança",
        description: "Seus dados são tratados com total segurança e confidencialidade.",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
        )
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-transparent z-0 pointer-events-none" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <AnimatedCard animation="slide-up">
                  <span className="inline-block bg-primary/10 text-primary rounded-full px-3 py-1 text-sm font-medium mb-4">
                    Primeira Habilitação
                  </span>
                </AnimatedCard>
                <AnimatedCard animation="slide-up" delay={100}>
                  <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                    Obtenha seu número RENACH <span className="text-primary">de forma simples</span>
                  </h1>
                </AnimatedCard>
                <AnimatedCard animation="slide-up" delay={200}>
                  <p className="text-xl text-muted-foreground mb-6">
                    Facilitamos o processo de obtenção do número RENACH para você iniciar sua primeira habilitação com tranquilidade.
                  </p>
                </AnimatedCard>
                <AnimatedCard animation="slide-up" delay={300}>
                  <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 mb-8">
                    <a 
                      href="#obter-renach" 
                      className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-3 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:ring-offset-2"
                    >
                      Obter RENACH agora
                    </a>
                    <a 
                      href="#como-funciona" 
                      className="inline-flex items-center justify-center rounded-lg border border-input bg-background px-5 py-3 text-base font-medium transition-colors hover:bg-secondary/80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    >
                      Como funciona
                    </a>
                  </div>
                </AnimatedCard>
                <AnimatedCard animation="fade" delay={400}>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center border border-background">
                          <span className="text-xs text-primary">{'U'}</span>
                        </div>
                      ))}
                    </div>
                    <span>+1.000 usuários já conseguiram seu RENACH</span>
                  </div>
                </AnimatedCard>
              </div>
              <AnimatedCard animation="scale" delay={300} className="lg:justify-self-end">
                <div className="relative">
                  <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-primary/20 to-primary/40 opacity-70 blur-xl"></div>
                  <div className="glass-card relative rounded-xl overflow-hidden border border-primary/10 p-8">
                    <div className="mb-6 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-center mb-2">Sistema confiável</h3>
                    <p className="text-muted-foreground text-center mb-6">
                      Nosso sistema é integrado com os órgãos oficiais para garantir a autenticidade das informações.
                    </p>
                    <div className="space-y-4">
                      {['Rápido', 'Seguro', 'Oficial'].map((item, i) => (
                        <div key={i} className="flex items-center space-x-3">
                          <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><polyline points="20 6 9 17 4 12"></polyline></svg>
                          </div>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <InfoSection 
          title={benefitsSection.title}
          description={benefitsSection.description}
          steps={benefitsSection.steps}
          className="bg-gradient-to-b from-transparent to-secondary/20"
        />

        {/* Get RENACH Section */}
        <section id="obter-renach" className="py-16 md:py-24 scroll-mt-24">
          <div className="container mx-auto px-4 md:px-6">
            <AnimatedCard animation="fade">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl font-bold tracking-tighter mb-4">Obtenha seu número RENACH</h2>
                <p className="text-lg text-muted-foreground">
                  Siga as etapas abaixo para gerar seu número RENACH
                </p>
              </div>
            </AnimatedCard>

            <RenachStepperForm />
          </div>
        </section>

        {/* Process Section */}
        <section id="como-funciona" className="py-16 md:py-24 bg-gradient-to-b from-transparent to-secondary/30 scroll-mt-24">
          <div className="container mx-auto px-4 md:px-6">
            <AnimatedCard animation="fade">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl font-bold tracking-tighter mb-4">Como funciona o processo</h2>
                <p className="text-lg text-muted-foreground">
                  Entenda todas as etapas para obter sua primeira habilitação
                </p>
              </div>
            </AnimatedCard>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {processSteps.map((step, index) => (
                <AnimatedCard 
                  key={index} 
                  delay={index * 150} 
                  animation="slide-up"
                  className="glass-card rounded-xl p-6 hover-lift"
                >
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <AnimatedCard animation="scale">
              <div className="relative rounded-xl overflow-hidden">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-primary/50 opacity-70 blur-xl"></div>
                <div className="relative glass-container rounded-xl px-6 py-12 md:p-12 text-center">
                  <h2 className="text-3xl font-bold tracking-tighter mb-4">
                    Pronto para iniciar sua primeira habilitação?
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                    Obtenha seu número RENACH agora e comece sua jornada rumo à primeira habilitação com o apoio que você precisa.
                  </p>
                  <a 
                    href="#obter-renach" 
                    className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-3 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:ring-offset-2"
                  >
                    Obter RENACH agora
                  </a>
                </div>
              </div>
            </AnimatedCard>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
