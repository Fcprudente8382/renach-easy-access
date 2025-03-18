
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";
import { 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  Clock, 
  CreditCard,
  FileText,
  Download
} from "lucide-react";

type ValidationPaymentStepProps = {
  onNext: (data: any) => void;
  formData: Record<string, any>;
};

const ValidationPaymentStep = ({ onNext, formData }: ValidationPaymentStepProps) => {
  const [validationProgress, setValidationProgress] = useState(0);
  const [validationStatus, setValidationStatus] = useState<"pending" | "validating" | "success" | "failed">("pending");
  const [validationResults, setValidationResults] = useState<Array<{item: string, status: "success" | "error" | "warning" | "pending"}>>([]);
  const [generatePayment, setGeneratePayment] = useState(false);
  const [paymentUrl, setPaymentUrl] = useState("");

  // Simulate validation process
  useEffect(() => {
    if (validationStatus === "pending") {
      setValidationStatus("validating");
      
      const validationItems = [
        "Dados pessoais",
        "Impressões digitais",
        "Biometria facial",
        "Documento de identificação",
        "Endereço e categoria"
      ];
      
      let progress = 0;
      const interval = setInterval(() => {
        if (progress < 100) {
          progress += 5;
          setValidationProgress(progress);
          
          // Add validation results as they're "completed"
          if (progress === 30) {
            setValidationResults([
              { item: validationItems[0], status: "success" }
            ]);
          } else if (progress === 50) {
            setValidationResults(prev => [
              ...prev,
              { item: validationItems[1], status: Math.random() > 0.3 ? "success" : "warning" }
            ]);
          } else if (progress === 70) {
            setValidationResults(prev => [
              ...prev,
              { item: validationItems[2], status: "success" }
            ]);
          } else if (progress === 85) {
            setValidationResults(prev => [
              ...prev,
              { item: validationItems[3], status: "success" }
            ]);
          } else if (progress === 95) {
            setValidationResults(prev => [
              ...prev,
              { item: validationItems[4], status: "success" }
            ]);
          }
        } else {
          clearInterval(interval);
          setValidationStatus("success");
        }
      }, 150);
      
      return () => clearInterval(interval);
    }
  }, [validationStatus]);

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

  const renderStatusIcon = (status: "success" | "error" | "warning" | "pending") => {
    switch (status) {
      case "success":
        return <CheckCircle2 className="text-green-500" />;
      case "error":
        return <XCircle className="text-red-500" />;
      case "warning":
        return <AlertTriangle className="text-amber-500" />;
      case "pending":
        return <Clock className="text-slate-400" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2">Validação de Documentos</h3>
        
        {validationStatus === "validating" && (
          <div className="space-y-4">
            <div className="flex justify-between items-center mb-1 text-sm">
              <span>Validando...</span>
              <span>{validationProgress}%</span>
            </div>
            <Progress value={validationProgress} className="h-2" />
            <p className="text-sm text-muted-foreground mt-2">
              Aguarde enquanto validamos seus documentos e biometrias...
            </p>
          </div>
        )}
        
        {validationResults.length > 0 && (
          <div className="space-y-2 mt-4">
            {validationResults.map((result, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-white rounded-md border">
                <span>{result.item}</span>
                {renderStatusIcon(result.status)}
              </div>
            ))}
          </div>
        )}
        
        {validationStatus === "success" && !generatePayment && (
          <div className="mt-6">
            <div className="p-4 bg-green-50 border border-green-200 rounded-md mb-4 flex items-start">
              <CheckCircle2 className="text-green-500 mt-0.5 mr-2 shrink-0" />
              <div>
                <p className="font-medium text-green-800">Validação concluída com sucesso!</p>
                <p className="text-sm text-green-700 mt-1">
                  Seus documentos foram validados. Agora você precisa gerar o boleto para 
                  pagamento das taxas e prosseguir com a emissão do RENACH.
                </p>
              </div>
            </div>
            
            <Button onClick={generatePaymentBoleto} className="w-full gap-2">
              <CreditCard size={16} /> Gerar boleto para pagamento
            </Button>
          </div>
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
