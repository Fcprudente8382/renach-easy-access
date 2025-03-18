
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Card } from "@/components/ui/card";
import { 
  CheckCircle2, 
  CreditCard,
  FileText,
  Download
} from "lucide-react";

type ValidationPaymentStepProps = {
  onNext: (data: any) => void;
  formData: Record<string, any>;
};

const ValidationPaymentStep = ({ onNext, formData }: ValidationPaymentStepProps) => {
  const [generatePayment, setGeneratePayment] = useState(false);
  const [paymentUrl, setPaymentUrl] = useState("");

  // Simulate immediate validation success without actual validation
  useEffect(() => {
    // Show success toast for automatic validation
    toast.success("Documentos validados automaticamente!", {
      description: "Todos os documentos foram considerados válidos."
    });
  }, []);

  const generatePaymentBoleto = () => {
    setGeneratePayment(true);
    
    // Simulate generating a payment
    setTimeout(() => {
      const fakePaymentUrl = "https://example.com/boleto/123456789";
      setPaymentUrl(fakePaymentUrl);
      
      toast.success("Boleto gerado com sucesso!", {
        description: "O boleto está disponível para download."
      });
    }, 2000);
  };

  const proceedToRenach = () => {
    onNext({ 
      validationStatus: "approved",
      paymentStatus: "completed" 
    });
  };

  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2">Validação de Documentos</h3>
        
        <div className="p-4 bg-green-50 border border-green-200 rounded-md mb-4 flex items-start">
          <CheckCircle2 className="text-green-500 mt-0.5 mr-2 shrink-0" />
          <div>
            <p className="font-medium text-green-800">Validação concluída com sucesso!</p>
            <p className="text-sm text-green-700 mt-1">
              Todos os seus documentos foram validados automaticamente. Agora você precisa gerar o boleto para 
              pagamento das taxas e prosseguir com a emissão do RENACH.
            </p>
          </div>
        </div>
        
        {!generatePayment && (
          <Button onClick={generatePaymentBoleto} className="w-full gap-2">
            <CreditCard size={16} /> Gerar boleto para pagamento
          </Button>
        )}
      </div>
      
      {generatePayment && (
        <div className="mt-6">
          <Card className="p-4 border border-primary/20 bg-primary/5">
            <div className="flex items-start gap-3 mb-4">
              <FileText className="text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-medium">Boleto para pagamento</h3>
                <p className="text-sm text-muted-foreground">
                  O pagamento é necessário para a emissão do seu RENACH.
                </p>
              </div>
            </div>
            
            {paymentUrl ? (
              <>
                <div className="bg-primary/10 p-3 rounded-md text-sm font-mono mb-4 break-all">
                  {paymentUrl}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button variant="outline" className="gap-2 flex-1">
                    <Download size={16} /> Baixar boleto
                  </Button>
                  <Button className="gap-2 flex-1" onClick={proceedToRenach}>
                    <CheckCircle2 size={16} /> Confirmar pagamento
                  </Button>
                </div>
                
                <p className="text-xs text-muted-foreground mt-4">
                  * Para fins de demonstração, clique em "Confirmar pagamento" para simular o pagamento e prosseguir.
                </p>
              </>
            ) : (
              <div className="flex justify-center p-4">
                <div className="animate-pulse flex space-x-4 items-center">
                  <div className="h-3 w-3 bg-primary rounded-full animate-bounce" />
                  <div className="h-3 w-3 bg-primary rounded-full animate-bounce [animation-delay:-.3s]" />
                  <div className="h-3 w-3 bg-primary rounded-full animate-bounce [animation-delay:-.5s]" />
                </div>
              </div>
            )}
          </Card>
        </div>
      )}
    </div>
  );
};

export default ValidationPaymentStep;
