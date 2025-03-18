
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedCard from '@/components/AnimatedCard';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const teamMembers = [
    {
      name: "Ana Silva",
      role: "Fundadora e CEO",
      description: "Com mais de 15 anos de experiência no setor de trânsito, Ana fundou a Renach Fácil para simplificar os processos de primeira habilitação."
    },
    {
      name: "Carlos Oliveira",
      role: "Desenvolvedor Chefe",
      description: "Especialista em sistemas, Carlos lidera a equipe de desenvolvimento para garantir uma plataforma segura e intuitiva."
    },
    {
      name: "Mariana Costa",
      role: "Especialista em Legislação",
      description: "Advogada especializada em direito de trânsito, Mariana garante que nossos processos estejam sempre em conformidade com as leis vigentes."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-transparent z-0 pointer-events-none" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <AnimatedCard animation="slide-up">
              <div className="text-center max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Sobre o Renach Fácil</h1>
                <p className="text-xl text-muted-foreground">
                  Conheça nossa história e nossa missão de facilitar o acesso à primeira habilitação
                </p>
              </div>
            </AnimatedCard>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <AnimatedCard animation="slide-up" className="order-2 md:order-1">
                <div className="relative">
                  <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-primary/20 to-primary/40 opacity-70 blur-xl"></div>
                  <div className="glass-card relative rounded-xl overflow-hidden border border-primary/10 p-6">
                    <h3 className="text-2xl font-semibold mb-4">Nossa História</h3>
                    <div className="space-y-4">
                      <p>
                        Fundada em 2020, a Renach Fácil nasceu da percepção de que muitas pessoas enfrentavam dificuldades no processo de obtenção da primeira habilitação, especialmente no momento inicial de conseguir o número RENACH.
                      </p>
                      <p>
                        Identificamos que o processo burocrático e a falta de informações claras eram grandes obstáculos para os candidatos, e decidimos criar uma solução que tornasse essa etapa mais acessível e transparente.
                      </p>
                      <p>
                        Desde então, já ajudamos mais de mil pessoas a iniciar seu processo de habilitação com tranquilidade e confiança.
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedCard>
              <AnimatedCard animation="slide-up" delay={200} className="order-1 md:order-2">
                <div>
                  <h2 className="text-3xl font-bold tracking-tighter mb-6">Facilitando o primeiro passo para sua habilitação</h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Nossa plataforma foi criada para tornar o processo de obtenção da CNH mais simples e acessível para todos os brasileiros.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      </div>
                      <p>Processamento rápido e eficiente de dados</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      </div>
                      <p>Integração com sistemas oficiais de trânsito</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      </div>
                      <p>Suporte especializado durante todo o processo</p>
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            </div>
          </div>
        </section>

        {/* Mission and Values */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-transparent to-secondary/20">
          <div className="container mx-auto px-4 md:px-6">
            <AnimatedCard animation="fade">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl font-bold tracking-tighter mb-4">Nossa Missão e Valores</h2>
                <p className="text-lg text-muted-foreground">
                  O que nos motiva e guia no nosso trabalho diário
                </p>
              </div>
            </AnimatedCard>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              <AnimatedCard animation="slide-up" delay={100} className="glass-card rounded-xl p-6 hover-lift">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Missão</h3>
                <p className="text-muted-foreground">
                  Democratizar o acesso à primeira habilitação, tornando o processo mais transparente, acessível e eficiente para todos os brasileiros.
                </p>
              </AnimatedCard>

              <AnimatedCard animation="slide-up" delay={200} className="glass-card rounded-xl p-6 hover-lift">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Visão</h3>
                <p className="text-muted-foreground">
                  Ser a principal referência no Brasil quando o assunto é facilitar o acesso à primeira habilitação, reduzindo barreiras burocráticas.
                </p>
              </AnimatedCard>

              <AnimatedCard animation="slide-up" delay={300} className="glass-card rounded-xl p-6 hover-lift">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path></svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Valores</h3>
                <p className="text-muted-foreground">
                  Transparência, acessibilidade, inovação, respeito ao tempo do usuário e compromisso com a segurança dos dados.
                </p>
              </AnimatedCard>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <AnimatedCard animation="fade">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl font-bold tracking-tighter mb-4">Nossa Equipe</h2>
                <p className="text-lg text-muted-foreground">
                  Conheça os profissionais dedicados que fazem o Renach Fácil acontecer
                </p>
              </div>
            </AnimatedCard>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {teamMembers.map((member, index) => (
                <AnimatedCard 
                  key={index} 
                  delay={index * 150} 
                  animation="slide-up"
                  className="glass-card rounded-xl p-6 hover-lift text-center"
                >
                  <div className="mx-auto h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary mb-3">{member.role}</p>
                  <p className="text-muted-foreground">{member.description}</p>
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
                    Comece hoje mesmo
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                    Junte-se a milhares de brasileiros que já simplificaram o processo de obtenção da primeira habilitação.
                  </p>
                  <a 
                    href="/" 
                    className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-3 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:ring-offset-2"
                  >
                    Voltar para o início
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

export default About;
