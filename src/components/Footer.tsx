
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-white font-semibold text-sm">D</span>
              </div>
              <span className="font-semibold text-lg">Druu Renach</span>
            </Link>
            <p className="text-muted-foreground max-w-sm">
              Facilitando o acesso ao seu número RENACH para que você possa iniciar seu processo de primeira habilitação com tranquilidade.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-medium text-sm tracking-wider text-muted-foreground mb-4 uppercase">Links rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Início</Link>
              </li>
              <li>
                <Link to="/sobre" className="text-muted-foreground hover:text-primary transition-colors">Sobre</Link>
              </li>
              <li>
                <Link to="/duvidas" className="text-muted-foreground hover:text-primary transition-colors">Perguntas frequentes</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-sm tracking-wider text-muted-foreground mb-4 uppercase">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 text-muted-foreground"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                <span className="text-muted-foreground">(11) 9999-9999</span>
              </li>
              <li className="flex items-start space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 text-muted-foreground"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                <span className="text-muted-foreground">contato@druurenach.com.br</span>
              </li>
              <li className="flex items-start space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 text-muted-foreground"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <span className="text-muted-foreground">São Paulo, SP</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Druu Renach. Todos os direitos reservados.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link to="/termos" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Termos de uso
            </Link>
            <Link to="/privacidade" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Política de privacidade
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
