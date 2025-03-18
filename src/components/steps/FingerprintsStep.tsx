
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import { Fingerprint, X, Check, Upload } from "lucide-react";

const formSchema = z.object({
  leftIndexFinger: z.string().min(1, { message: "Imagem do dedo indicador esquerdo é obrigatória" }),
  rightIndexFinger: z.string().min(1, { message: "Imagem do dedo indicador direito é obrigatória" }),
  bothThumbs: z.string().min(1, { message: "Imagem dos polegares é obrigatória" }),
});

type FingerprintsStepProps = {
  onNext: (data: any) => void;
  formData: Record<string, any>;
};

const FingerprintsStep = ({ onNext, formData }: FingerprintsStepProps) => {
  const [fingerImages, setFingerImages] = useState({
    leftIndexFinger: formData.leftIndexFinger || "",
    rightIndexFinger: formData.rightIndexFinger || "",
    bothThumbs: formData.bothThumbs || "",
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      leftIndexFinger: formData.leftIndexFinger || "",
      rightIndexFinger: formData.rightIndexFinger || "",
      bothThumbs: formData.bothThumbs || "",
    },
  });

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, fieldName: string) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Check if the file is an image
    if (!file.type.startsWith("image/")) {
      toast.error("Por favor, envie apenas arquivos de imagem");
      return;
    }

    // Check file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast.error("O tamanho máximo da imagem é 5MB");
      return;
    }

    // Convert to base64 for preview
    const reader = new FileReader();
    reader.onload = (event) => {
      const base64 = event.target?.result as string;
      setFingerImages(prev => ({ ...prev, [fieldName]: base64 }));
      form.setValue(fieldName as keyof z.infer<typeof formSchema>, base64);
    };
    reader.readAsDataURL(file);
  };

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    onNext(values);
  };

  const renderFingerPrintUploader = (title: string, fieldName: keyof z.infer<typeof formSchema>, icon: React.ReactNode) => (
    <FormField
      control={form.control}
      name={fieldName}
      render={({ field }) => (
        <FormItem className="mb-6">
          <FormLabel>{title}</FormLabel>
          <FormControl>
            <div className="relative">
              <input 
                type="file"
                accept="image/*"
                onChange={(e) => handleImageUpload(e, fieldName)}
                className="absolute inset-0 opacity-0 cursor-pointer z-10 h-full w-full"
                id={`file-${fieldName}`}
              />
              
              {fingerImages[fieldName] ? (
                <div className="relative group">
                  <img 
                    src={fingerImages[fieldName]} 
                    alt={title}
                    className="w-full h-48 object-cover rounded-md border border-input" 
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-md">
                    <Button variant="outline" size="sm" className="bg-white">
                      <Upload size={16} className="mr-2" /> Trocar imagem
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="border border-dashed border-input rounded-md p-8 flex flex-col items-center justify-center h-48 bg-white/50 cursor-pointer hover:bg-white/80 transition-colors">
                  {icon}
                  <p className="mt-2 text-sm text-muted-foreground">Clique para fazer upload</p>
                  <p className="text-xs text-muted-foreground mt-1">JPG, PNG ou GIF (max. 5MB)</p>
                </div>
              )}
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="mb-4 p-3 bg-blue-50 rounded-md text-sm text-blue-700 border border-blue-200">
          <p>As impressões digitais devem ser claras e nítidas. Posicione o dedo no centro da câmera e aguarde a captura.</p>
        </div>
        
        {renderFingerPrintUploader(
          "Impressão digital do dedo indicador esquerdo", 
          "leftIndexFinger",
          <Fingerprint size={32} className="text-primary/70" />
        )}
        
        {renderFingerPrintUploader(
          "Impressão digital do dedo indicador direito", 
          "rightIndexFinger",
          <Fingerprint size={32} className="text-primary/70" />
        )}
        
        {renderFingerPrintUploader(
          "Impressão digital dos polegares (juntos)", 
          "bothThumbs",
          <Fingerprint size={32} className="text-primary/70" />
        )}

        <Button type="submit" className="w-full">
          Próximo
        </Button>
      </form>
    </Form>
  );
};

export default FingerprintsStep;
