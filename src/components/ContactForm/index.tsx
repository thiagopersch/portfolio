'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send } from 'lucide-react';
import Column from '../Column';
import CTA from '../CTA';
import Loader from '../Loader';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import useContactForm from './hook/useContactForm';

export default function ContactForm() {
  const { form, onSubmit } = useContactForm();

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="flex flex-col gap-4">
          <Column cols={2}>
            <FormField
              control={form.control}
              name="name"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      error={fieldState.error?.message}
                      disabled={form.formState.isSubmitting}
                      placeholder="Seu nome"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>E-mail</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      error={fieldState.error?.message}
                      disabled={form.formState.isSubmitting}
                      placeholder="seuemail@email.com"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </Column>
        </div>
        <Column>
          <FormField
            control={form.control}
            name="subject"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel>Assunto</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    error={fieldState.error?.message}
                    disabled={form.formState.isSubmitting}
                    placeholder="Assunto da mensagem"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </Column>
        <Column>
          <FormField
            control={form.control}
            name="message"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel>Nome</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    error={fieldState.error?.message}
                    disabled={form.formState.isSubmitting}
                    rows={10}
                    cols={30}
                    placeholder="Sua mensagem..."
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </Column>
        <CTA>
          <Button
            type="submit"
            variant="default"
            size="lg"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? (
              <Loader />
            ) : (
              <>
                <Send /> Enviar mensagem
              </>
            )}
          </Button>
        </CTA>
      </form>
    </Form>
  );
}
