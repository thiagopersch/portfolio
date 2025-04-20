import AnimatedSection from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { FileTextIcon } from 'lucide-react';
import Link from 'next/link';

const WelcomeSection = () => {
  return (
    <section
      id="welcome"
      className="py-24 max-md:py-24 lg:py-32 flex flex-col items-center text-center"
    >
      <AnimatedSection>
        <div className="mx-auto flex max-w-full flex-col items-center space-y-4">
          <h1 className="font-bold text-7xl max-md:text-3xl typewriter overflow-hidden">
            Olá, eu sou <span className="text-primary">Tiago Persch!</span>
          </h1>
          <p className="max-w-full leading-normal text-muted-foreground max-sm:text-xl max-sm:leading-8">
            Desenvolvedor Web Full Stack apaixonado por criar experiências
            digitais incríveis.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild>
              <Link href="#contato">Entre em contato</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="#" className="flex items-center gap-2">
                <FileTextIcon className="h-4 w-4" />
                Baixar CV
              </Link>
            </Button>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default WelcomeSection;
