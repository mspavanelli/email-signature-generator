import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { Signature } from "@/components/Signature";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string(),
  jobTitle: z.string(),
  phone: z.string(),
  email: z.string().email(),
  linkedin: z.string(),
});

export function App() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      jobTitle: "",
      linkedin: "",
      phone: "",
    },
  });

  const values = form.watch();

  async function copy() {
    const element = document.getElementById("signature");
    const range = document.createRange();
    range.selectNode(element);
    const selection = window.getSelection();
    selection?.removeAllRanges();
    selection?.addRange(range);

    try {
      const success = document.execCommand("copy");
      if (!success) {
        return toast.error("Falha ao copiar o elemento");
      }
      toast("Assinatura copiada!");
    } catch (err) {
      toast.error("Erro ao copiar o elemento");
    }

    selection?.removeAllRanges();
  }

  return (
    <>
      <div className="flex h-screen items-center justify-center bg-slate-50">
        <Card className="max-w-2xl rounded-none">
          <CardHeader>
            <CardTitle>Gerador de assinatura</CardTitle>
            <CardDescription>Insira seus dados</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form className="space-y-2">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="jobTitle"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Cargo</FormLabel>
                      <FormControl>
                        <Input placeholder="Comercial" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Telefone</FormLabel>
                      <FormControl>
                        <Input placeholder="+55 11 95555 1234" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>E-mail</FormLabel>
                      <FormControl>
                        <Input placeholder="nome@mail.com" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="linkedin"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>LinkedIn</FormLabel>
                      <FormControl>
                        <Input placeholder="in/username" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </form>
            </Form>
          </CardContent>
          <Separator />
          <CardFooter className="flex flex-col items-start">
            <div id="signature">
              <Signature
                email={values.email}
                jobTitle={values.jobTitle}
                name={values.name}
                linkedin={values.linkedin}
                phone={values.phone}
              />
            </div>

            <Separator />

            <div className="mt-4 flex w-full justify-between">
              <Button className="w-28" onClick={copy}>
                Copiar
              </Button>
              <Button
                variant="secondary"
                className="w-28"
                onClick={() => form.reset()}
              >
                Apagar
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
      <Toaster position="top-center" />
    </>
  );
}
