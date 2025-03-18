
import { useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import AnimatedCard from './AnimatedCard';

const formSchema = z.object({
  name: z.string().min(2, { message: "Nome deve ter pelo menos 2 caracteres" }),
  cpf: z.string().min(11, { message: "CPF inválido" }).max(14),
  birthDate: z.string().min(1, { message: "Data de nascimento é obrigatória" }),
  motherName: z.string().min(2, { message: "Nome da mãe deve ter pelo menos 2 caracteres" }),
  state: z.string().min(1, { message: "Selecione um estado" }),
});

const RenachForm = () => {
  const [loading, setLoading] = useState(false);
  const [renachNumber, setRenachNumber] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      cpf: "",
      birthDate: "",
      motherName: "",
      state: "",
    },
  });

  const normalizeField = (value: string, field: string) => {
    if (field === 'cpf') {
      // Format CPF: 000.000.000-00
      return value
        .replace(/\D/g, '')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})/, '$1-$2')
        .replace(/(-\d{2})\d+?$/, '$1');
    }
    if (field === 'birthDate') {
      // Format date: dd/mm/yyyy
      return value
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '$1/$2')
        .replace(/(\d{2})(\d)/, '$1/$2')
        .replace(/(\d{4})\d+?$/, '$1');
    }
    return value;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    const normalizedValue = normalizeField(e.target.value, field);
    form.setValue(field as keyof z.infer<typeof formSchema>, normalizedValue);
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Generate a fake RENACH number for demonstration
      const randomRenach = "SP" + 
        values.state.substring(0, 2).toUpperCase() + 
        Math.floor(Math.random() * 10000000000).toString().padStart(10, '0');
      
      setRenachNumber(randomRenach);
      toast.success("Número RENACH gerado com sucesso!", {
        description: "Você já pode visualizá-lo abaixo."
      });
    } catch (error) {
      toast.error("Erro ao gerar o número RENACH", {
        description: "Por favor, tente novamente mais tarde."
      });
      console.error(error);
    } finally {
      setLoading(false);
    }
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

  return (
    <div className="w-full">
      <AnimatedCard 
        animation="slide-up" 
        className="w-full max-w-lg mx-auto glass-card rounded-xl"
      >
        <Card className="bg-transparent border-0 shadow-none">
          <CardHeader className="pb-2">
            <div className="w-full flex justify-center mb-2">
              <div className="h-12 w-12 rounded-full bg-primary/5 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M7 20h10"/><path d="M10 20c5.5-2.5.8-6.4 3-10"/><path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.6.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"/><path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"/></svg>
              </div>
            </div>
            <CardTitle className="text-xl text-center">Obtenha seu número RENACH</CardTitle>
            <CardDescription className="text-center">
              Preencha os dados abaixo para gerar seu número de Registro Nacional de Carteira de Habilitação
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome completo</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Digite seu nome completo" 
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
                  name="cpf"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>CPF</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="000.000.000-00" 
                          {...field} 
                          onChange={(e) => handleInputChange(e, 'cpf')}
                          className="bg-white/50"
                          maxLength={14}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="birthDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Data de nascimento</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="DD/MM/AAAA" 
                          {...field} 
                          onChange={(e) => handleInputChange(e, 'birthDate')}
                          className="bg-white/50"
                          maxLength={10}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="motherName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome da mãe</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Digite o nome completo da sua mãe" 
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
                  name="state"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Estado</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-white/50">
                            <SelectValue placeholder="Selecione seu estado" />
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
                <Button 
                  type="submit" 
                  className="w-full mt-6" 
                  disabled={loading}
                >
                  {loading ? "Processando..." : "Gerar RENACH"}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </AnimatedCard>

      {renachNumber && (
        <AnimatedCard 
          animation="scale" 
          delay={300} 
          className="mt-8 w-full max-w-lg mx-auto"
        >
          <Card className="bg-primary/5 border border-primary/10">
            <CardHeader className="pb-2">
              <CardTitle className="text-center text-lg">Seu número RENACH</CardTitle>
              <CardDescription className="text-center">
                Guarde este número para referência futura
              </CardDescription>
            </CardHeader>
            <CardContent className="pb-6">
              <div className="bg-white rounded-lg p-4 text-center">
                <p className="text-2xl font-semibold tracking-wider text-primary">{renachNumber}</p>
              </div>
              <p className="text-center text-sm mt-4 text-muted-foreground">
                Este número é importante para acompanhar o processo da sua primeira habilitação
              </p>
            </CardContent>
          </Card>
        </AnimatedCard>
      )}
    </div>
  );
};

export default RenachForm;
