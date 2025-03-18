
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedCard from '@/components/AnimatedCard';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqItems = [
    {
      question: "O que é RENACH?",
      answer: "RENACH significa Registro Nacional de Carteira de Habilitação. É um número de cadastro único e pessoal, atribuído a cada candidato a motorista ou condutor habilitado."
    },
    {
      question: "Por que preciso do número RENACH?",
      answer: "O número RENACH é essencial para iniciar o processo de habilitação. Ele serve como identificador em todas as etapas do processo, desde os exames médicos até a emissão da CNH definitiva."
    },
    {
      question: "Como posso obter meu número RENACH?",
      answer: "Você pode obter seu número RENACH através do nosso sistema, preenchendo o formulário com seus dados pessoais. Após a validação, o número é gerado automaticamente."
    },
    {
      question: "Quanto tempo leva para receber o número RENACH?",
      answer: "Através do nosso sistema, o número RENACH é gerado instantaneamente após o preenchimento e validação dos seus dados."
    },
    {
      question: "O número RENACH tem validade?",
      answer: "Sim, o número RENACH tem validade de 12 meses. Se você não concluir todas as etapas para a obtenção da CNH dentro desse período, precisará iniciar o processo novamente."
    },
    {
      question: "Posso iniciar as aulas teóricas sem o número RENACH?",
      answer: "Não. O número RENACH é pré-requisito para iniciar todas as etapas do processo de habilitação, incluindo as aulas teóricas."
    },
    {
      question: "Quanto custa obter o número RENACH pelo Renach Fácil?",
      answer: "Nosso serviço de geração do número RENACH é totalmente gratuito. No entanto, você precisará pagar as taxas oficiais do DETRAN para dar continuidade ao processo de habilitação."
    },
    {
      question: "Posso consultar o andamento do meu processo pelo número RENACH?",
      answer: "Sim, o número RENACH permite consultar o andamento do seu processo de habilitação junto ao DETRAN do seu estado."
    },
    {
      question: "Se eu mudar de estado, preciso de um novo RENACH?",
      answer: "Sim, caso você inicie o processo em um estado e precise transferir para outro, será necessário obter um novo número RENACH no estado de destino."
    },
    {
      question: "O que acontece se eu perder meu número RENACH?",
      answer: "Não se preocupe. Você pode recuperar seu número RENACH através do nosso sistema ou diretamente no DETRAN de seu estado, usando seus dados pessoais."
    },
    {
      question: "Quais documentos são necessários para obter o número RENACH?",
      answer: "Para obter o número RENACH, você precisará informar dados como nome completo, CPF, data de nascimento e nome da mãe. Estes dados devem corresponder aos documentos oficiais que você apresentará nas etapas seguintes."
    },
    {
      question: "Posso fazer todo o processo de habilitação online?",
      answer: "Embora a obtenção do número RENACH possa ser feita online através do nosso sistema, as outras etapas do processo, como exames médicos, aulas teóricas e práticas, e provas, ainda precisam ser realizadas presencialmente."
    }
  ];

  const categories = [
    {
      name: "Sobre o RENACH",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path></svg>
      )
    },
    {
      name: "Processo de Habilitação",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 22h14"></path><path d="M19 10v12"></path><path d="M5 10v12"></path><path d="M3 10h18"></path><path d="M7 2h10"></path><path d="M17 2v8"></path><path d="M7 2v8"></path></svg>
      )
    },
    {
      name: "Taxas e Pagamentos",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="16"></line><line x1="8" x2="16" y1="12" y2="12"></line></svg>
      )
    },
    {
      name: "Prazos e Validade",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
      )
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
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Perguntas Frequentes</h1>
                <p className="text-xl text-muted-foreground">
                  Encontre respostas para as dúvidas mais comuns sobre o processo de habilitação
                </p>
              </div>
            </AnimatedCard>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {categories.map((category, index) => (
                <AnimatedCard
                  key={index}
                  delay={index * 100}
                  animation="scale"
                  className="glass-card rounded-xl p-4 hover-lift"
                >
                  <a href={`#${category.name.toLowerCase().replace(/\s+/g, '-')}`} className="flex flex-col items-center text-center">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-3 text-primary">
                      {category.icon}
                    </div>
                    <span className="font-medium">{category.name}</span>
                  </a>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Accordion Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <AnimatedCard animation="slide-up" className="glass-card rounded-xl p-6 md:p-8">
              <Accordion type="single" collapsible className="space-y-4">
                {faqItems.map((item, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="border border-gray-200 rounded-md overflow-hidden"
                  >
                    <AccordionTrigger className="px-4 py-3 hover:bg-secondary/50 transition-colors">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-3 pt-1">
                      <p className="text-muted-foreground">{item.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </AnimatedCard>
          </div>
        </section>

        {/* Still Have Questions Section */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-transparent to-secondary/20">
          <div className="container mx-auto px-4 md:px-6">
            <AnimatedCard animation="scale">
              <div className="glass-card rounded-xl p-6 md:p-8 text-center max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold mb-4">Ainda tem dúvidas?</h2>
                <p className="text-muted-foreground mb-6">
                  Se você não encontrou a resposta que procurava, entre em contato conosco. Estamos prontos para ajudar!
                </p>
                <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                  <a 
                    href="mailto:contato@renachfacil.com.br" 
                    className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-3 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:ring-offset-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                    Enviar e-mail
                  </a>
                  <a 
                    href="tel:+551199999999" 
                    className="inline-flex items-center justify-center rounded-lg border border-input bg-background px-5 py-3 text-base font-medium transition-colors hover:bg-secondary/80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    Ligar agora
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

export default FAQ;
