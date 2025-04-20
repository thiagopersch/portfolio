import AnimatedSection from '@/components/AnimatedSection';
import ContactForm from '@/components/ContactForm';
import { Github, Linkedin, Mail } from 'lucide-react';

const ContactSession = () => {
  return (
    <section id="contato" className="py-12 bg-muted/50">
      <div className="mx-auto px-12">
        <AnimatedSection>
          <h2 className="text-3xl font-bold mb-8 text-center">
            Entre em Contato
          </h2>
        </AnimatedSection>
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-12">
          <AnimatedSection direction="left" delay={0.2}>
            <div className="">
              <p className="text-base mb-6">
                Estou interessado em oportunidades de freelance, projetos
                desafiadores e colaborações criativas. Se você tem um projeto
                que gostaria de discutir, não hesite em entrar em contato!
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>thiagopersch@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="h-5 w-5 text-primary" />
                  <span>linkedin.com/in/tiago-persch</span>
                </div>
                <div className="flex items-center gap-3">
                  <Github className="h-5 w-5 text-primary" />
                  <span>github.com/thiagopersch</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection direction="right" delay={0.4}>
            <ContactForm />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSession;
