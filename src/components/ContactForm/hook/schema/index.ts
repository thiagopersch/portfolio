import { z } from 'zod';

export const schema = z.object({
  name: z
    .string()
    .min(3, { message: 'O nome deve ter pelo menos 3 caracteres' })
    .max(50, {
      message: 'O nome deve ter entre 3 e 50 caracteres',
    }),
  email: z.string().email({ message: 'Email inválido' }),
  subject: z
    .string()
    .min(3, {
      message: 'O assunto deve ter pelo menos 3 caracteres',
    })
    .max(100, {
      message: 'O assunto deve ter no máximo 100 caracteres',
    }),
  message: z
    .string()
    .min(10, { message: 'A mensagem deve ter pelo menos 10 caracteres' })
    .max(500, { message: 'A mensagem deve ter no máximo 500 caracteres' }),
});
