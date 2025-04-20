import emailjs from '@emailjs/browser';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';
import { schema } from './schema';

type Schema = z.infer<typeof schema>;

export default function useContactForm() {
  const form = useForm<Schema>({
    mode: 'all',
    criteriaMode: 'all',
    reValidateMode: 'onChange',
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (data: Schema) => {
    try {
      // Enviar email usando EmailJS
      const result = await emailjs.send(
        'YOUR_SERVICE_ID', // Substitua por seu Service ID
        'YOUR_TEMPLATE_ID', // Substitua por seu Template ID
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
        },
        'YOUR_PUBLIC_KEY', // Substitua por sua Public Key
      );

      console.log('Email enviado:', result.text);
      toast.success('Mensagem enviada!', {
        description: 'Obrigado pelo contato. Responderei em breve.',
      });

      // Limpar formulário
      form.reset();
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      toast.error('Erro ao enviar mensagem', {
        description: 'Tente novamente mais tarde.',
      });
    }
  };

  return {
    form,
    onSubmit,
  };
}
