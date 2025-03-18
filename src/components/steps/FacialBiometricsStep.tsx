
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
import { Camera, Upload, RefreshCw } from "lucide-react";

const formSchema = z.object({
  facialImage: z.string().min(1, { message: "Imagem facial é obrigatória" }),
});

type FacialBiometricsStepProps = {
  onNext: (data: any) => void;
  formData: Record<string, any>;
};

const FacialBiometricsStep = ({ onNext, formData }: FacialBiometricsStepProps) => {
  const [facialImage, setFacialImage] = useState(formData.facialImage || "");
  const [isCapturing, setIsCapturing] = useState(false);
  const [stream, setStream] = useState<MediaStream | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      facialImage: formData.facialImage || "",
    },
  });

  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: "user", width: 640, height: 480 } 
      });
      setStream(mediaStream);
      setIsCapturing(true);
      
      const videoElement = document.getElementById("camera-preview") as HTMLVideoElement;
      if (videoElement) {
        videoElement.srcObject = mediaStream;
        videoElement.play();
      }
    } catch (error) {
      toast.error("Erro ao acessar a câmera. Verifique as permissões.");
      console.error("Error accessing camera:", error);
    }
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
    }
    setIsCapturing(false);
  };

  const captureImage = () => {
    const videoElement = document.getElementById("camera-preview") as HTMLVideoElement;
    const canvas = document.createElement("canvas");
    canvas.width = videoElement.videoWidth;
    canvas.height = videoElement.videoHeight;
    
    const context = canvas.getContext("2d");
    if (context) {
      context.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
      const imageDataUrl = canvas.toDataURL("image/png");
      setFacialImage(imageDataUrl);
      form.setValue("facialImage", imageDataUrl);
      stopCamera();
    }
  };

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
      setFacialImage(base64);
      form.setValue("facialImage", base64);
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
          <p>Capture uma foto facial frontal, com boa iluminação e sem acessórios que cubram o rosto (óculos escuros, bonés, etc).</p>
        </div>

        <FormField
          control={form.control}
          name="facialImage"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Foto para biometria facial</FormLabel>
              <FormControl>
                <div className="w-full">
                  {isCapturing ? (
                    <div className="relative">
                      <video 
                        id="camera-preview" 
                        className="w-full h-64 object-cover rounded-md border border-input bg-black"
                      />
                      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
                        <Button 
                          type="button" 
                          onClick={captureImage}
                          className="bg-white text-primary hover:bg-white/90"
                        >
                          <Camera size={16} className="mr-2" /> Capturar
                        </Button>
                        <Button 
                          type="button" 
                          onClick={stopCamera}
                          variant="outline"
                          className="bg-white"
                        >
                          Cancelar
                        </Button>
                      </div>
                    </div>
                  ) : facialImage ? (
                    <div className="relative group">
                      <img 
                        src={facialImage} 
                        alt="Biometria facial"
                        className="w-full h-64 object-cover rounded-md border border-input" 
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-md">
                        <div className="flex gap-2">
                          <Button 
                            type="button" 
                            variant="outline" 
                            size="sm" 
                            className="bg-white"
                            onClick={startCamera}
                          >
                            <Camera size={16} className="mr-2" /> Nova foto
                          </Button>
                          <label htmlFor="upload-facial" className="cursor-pointer">
                            <Button variant="outline" size="sm" className="bg-white" type="button">
                              <Upload size={16} className="mr-2" /> Fazer upload
                            </Button>
                          </label>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="border border-dashed border-input rounded-md p-8 flex flex-col items-center justify-center h-64 bg-white/50">
                      <div className="flex space-x-3 mb-4">
                        <Button 
                          type="button" 
                          onClick={startCamera}
                          className="bg-primary/90 hover:bg-primary"
                        >
                          <Camera size={16} className="mr-2" /> Usar câmera
                        </Button>
                        <div className="relative">
                          <input 
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="absolute inset-0 opacity-0 cursor-pointer z-10 h-full w-full"
                            id="upload-facial"
                          />
                          <Button variant="outline" type="button">
                            <Upload size={16} className="mr-2" /> Fazer upload
                          </Button>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground">JPG, PNG ou GIF (max. 5MB)</p>
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

export default FacialBiometricsStep;
