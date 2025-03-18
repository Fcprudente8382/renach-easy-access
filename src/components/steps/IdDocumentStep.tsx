
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
import { Upload, FileText } from "lucide-react";

const formSchema = z.object({
  idDocumentImage: z.string().min(1, { message: "Imagem do documento é obrigatória" }),
});

type IdDocumentStepProps = {
  onNext: (data: any) => void;
  formData: Record<string, any>;
};

const IdDocumentStep = ({ onNext, formData }: IdDocumentStepProps) => {
  const [documentImage, setDocumentImage] = useState(formData.idDocumentImage || "");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      idDocumentImage: formData.idDocumentImage || "",
    },
  });

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      setDocumentImage(base64);
      form.setValue("idDocumentImage", base64);
    };
    reader.readAsDataURL(file);
  };

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    onNext(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="mb-4 p-3 bg-blue-50 rounded-md text-sm text-blue-700 border border-blue-200">
          <p>Envie uma foto do seu documento de identificação (RG ou CNH). A imagem deve estar legível, com todos os dados visíveis.</p>
        </div>

        <FormField
          control={form.control}
          name="idDocumentImage"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Documento de identificação</FormLabel>
              <FormControl>
                <div className="relative">
                  <input 
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="absolute inset-0 opacity-0 cursor-pointer z-10 h-full w-full"
                    id="file-document"
                  />
                  
                  {documentImage ? (
                    <div className="relative group">
                      <img 
                        src={documentImage} 
                        alt="Documento"
                        className="w-full h-64 object-cover rounded-md border border-input" 
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-md">
                        <Button variant="outline" size="sm" className="bg-white">
                          <Upload size={16} className="mr-2" /> Trocar imagem
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="border border-dashed border-input rounded-md p-8 flex flex-col items-center justify-center h-64 bg-white/50 cursor-pointer hover:bg-white/80 transition-colors">
                      <FileText size={32} className="text-primary/70 mb-2" />
                      <p className="text-sm text-muted-foreground">Clique para fazer upload do documento</p>
                      <p className="text-xs text-muted-foreground mt-1">JPG, PNG ou GIF (max. 5MB)</p>
                    </div>
                  )}
                  
                  <input 
                    type="hidden"
                    {...field}
                    id={field.name}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full mt-4">
          Próximo
        </Button>
      </form>
    </Form>
  );
};

export default IdDocumentStep;
