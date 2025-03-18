
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Download, Share2, Printer, Copy, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { Progress } from "@/components/ui/progress";

type RenachConfirmationStepProps = {
  onNext: (data: any) => void;
  formData: Record<string, any>;
};

const RenachConfirmationStep = ({ onNext, formData }: RenachConfirmationStepProps) => {
  const [isGenerating, setIsGenerating] = useState(true);
  const [progress, setProgress] = useState(0);
  const [renachNumber, setRenachNumber] = useState("");

  useEffect(() => {
    // Simulate RENACH number generation
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsGenerating(false);
          
          // Generate a fake RENACH number for demonstration
          const state = formData.birthState ? formData.birthState.toUpperCase() : "SP";
          const randomNumber = Math.floor(10000000000 + Math.random() * 90000000000);
          setRenachNumber(`${state}${randomNumber}`);
          
          return 100;
        }
        return prev + 10;
      });
    }, 300);
    
    return () => clearInterval(interval);
  }, [formData]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(renachNumber).then(() => {
      toast.success("Número RENACH copiado para a área de transferência!");
    }).catch((error) => {
      console.error("Failed to copy: ", error);
      toast.error("Não foi possível copiar o número. Tente novamente.");
    });
  };

  return (
    <div className="space-y-6">
      {isGenerating ? (
        <div className="space-y-4">
          <div className="flex justify-between items-center mb-1 text-sm">
            <span>Gerando RENACH...</span>
            <span>{progress}%</span>
          </div>
          <Progress value={progress} className="h-2" />
          <p className="text-sm text-muted-foreground">
            Estamos gerando seu número RENACH. Aguarde, por favor...
          </p>
        </div>
      ) : (
        <>
          <div className="flex justify-center">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
              <CheckCircle2 size={32} className="text-green-600" />
            </div>
          </div>
          
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-green-700">RENACH Gerado com Sucesso!</h3>
            <p className="text-muted-foreground">
              Seu número RENACH foi gerado e está pronto para uso.
            </p>
          </div>
          
          <Card className="mb-6 overflow-hidden">
            <div className="bg-primary/80 text-white p-3 text-center">
              <h4 className="font-semibold">Seu Número RENACH</h4>
            </div>
            <CardContent className="p-6">
              <div className="bg-primary/10 p-4 rounded-md flex justify-between items-center mb-4">
                <span className="text-xl font-mono font-bold tracking-wider">{renachNumber}</span>
                <Button size="sm" variant="ghost" onClick={copyToClipboard} className="h-8 w-8 p-0">
                  <Copy size={16} />
                </Button>
              </div>
              
              <div className="text-sm text-muted-foreground space-y-2">
                <p>
                  <Check size={16} className="inline mr-2 text-green-600" />
                  Guarde este número para acompanhar seu processo
                </p>
                <p>
                  <Check size={16} className="inline mr-2 text-green-600" />
                  Apresente-o no centro de formação de condutores (CFC)
                </p>
                <p>
                  <Check size={16} className="inline mr-2 text-green-600" />
                  Utilize para consultas no DETRAN
                </p>
              </div>
            </CardContent>
          </Card>
          
          <div className="flex flex-wrap gap-2 justify-center">
            <Button variant="outline" className="gap-2">
              <Download size={16} /> Salvar comprovante
            </Button>
            <Button variant="outline" className="gap-2">
              <Printer size={16} /> Imprimir
            </Button>
            <Button variant="outline" className="gap-2">
              <Share2 size={16} /> Compartilhar
            </Button>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Próximos passos: Dirija-se a um Centro de Formação de Condutores (CFC) 
              para iniciar suas aulas teóricas e práticas.
            </p>
            
            <Button onClick={() => window.location.href = "/"} className="gap-2">
              Concluir processo
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default RenachConfirmationStep;
