
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const formSchema = z.object({
  address: z.string().min(5, { message: "Endereço deve ter pelo menos 5 caracteres" }),
  birthCity: z.string().min(2, { message: "Cidade de nascimento é obrigatória" }),
  birthState: z.string().min(2, { message: "Estado de nascimento é obrigatório" }),
  licenseType: z.string().min(1, { message: "Selecione um tipo de habilitação" }),
});

type AddressLicenseStepProps = {
  onNext: (data: any) => void;
  formData: Record<string, any>;
};

const AddressLicenseStep = ({ onNext, formData }: AddressLicenseStepProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      address: formData.address || "",
      birthCity: formData.birthCity || "",
      birthState: formData.birthState || "",
      licenseType: formData.licenseType || "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    onNext(values);
  };

  const states = [
    { value: "ac", label: "Acre" },
    { value: "al", label: "Alagoas" },
    { value: "ap", label: "Amapá" },
    { value: "am", label: "Amazonas" },
    { value: "ba", label: "Bahia" },
    { value: "ce", label: "Ceará" },
    { value: "df", label: "Distrito Federal" },
    { value: "es", label: "Espírito Santo" },
    { value: "go", label: "Goiás" },
    { value: "ma", label: "Maranhão" },
    { value: "mt", label: "Mato Grosso" },
    { value: "ms", label: "Mato Grosso do Sul" },
    { value: "mg", label: "Minas Gerais" },
    { value: "pa", label: "Pará" },
    { value: "pb", label: "Paraíba" },
    { value: "pr", label: "Paraná" },
    { value: "pe", label: "Pernambuco" },
    { value: "pi", label: "Piauí" },
    { value: "rj", label: "Rio de Janeiro" },
    { value: "rn", label: "Rio Grande do Norte" },
    { value: "rs", label: "Rio Grande do Sul" },
    { value: "ro", label: "Rondônia" },
    { value: "rr", label: "Roraima" },
    { value: "sc", label: "Santa Catarina" },
    { value: "sp", label: "São Paulo" },
    { value: "se", label: "Sergipe" },
    { value: "to", label: "Tocantins" },
  ];

  const licenseTypes = [
    { value: "A", description: "Motocicletas, motonetas, ciclomotores" },
    { value: "B", description: "Carros de passeio" },
    { value: "AB", description: "Combinação das categorias A e B" },
    { value: "C", description: "Veículos de carga acima de 3.500 kg" },
    { value: "D", description: "Veículos com mais de 8 passageiros" },
    { value: "E", description: "Combinação de veículos" },
  ];

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Endereço completo</FormLabel>
              <FormControl>
                <Input 
                  placeholder="Rua, número, bairro, complemento, CEP" 
                  {...field} 
                  className="bg-white/50"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="birthCity"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Cidade de nascimento</FormLabel>
              <FormControl>
                <Input 
                  placeholder="Digite a cidade onde nasceu" 
                  {...field} 
                  className="bg-white/50"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="birthState"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Estado de nascimento</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="bg-white/50">
                    <SelectValue placeholder="Selecione o estado onde nasceu" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {states.map((state) => (
                    <SelectItem key={state.value} value={state.value}>
                      {state.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="licenseType"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Tipo de habilitação</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="space-y-3"
                >
                  {licenseTypes.map((type) => (
                    <div key={type.value} className="flex items-start space-x-3 bg-white/50 p-3 rounded-md border border-input hover:border-primary/50 transition-colors">
                      <RadioGroupItem value={type.value} id={`license-${type.value}`} />
                      <div className="space-y-1">
                        <Label htmlFor={`license-${type.value}`} className="font-semibold">
                          Categoria {type.value}
                        </Label>
                        <p className="text-sm text-muted-foreground">{type.description}</p>
                      </div>
                    </div>
                  ))}
                </RadioGroup>
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

export default AddressLicenseStep;
