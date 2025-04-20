import AnimatedSection from '@/components/AnimatedSection';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section id="sobre" className="py-32 max-md:py-24 max-lg:py-64">
      <div className="mx-auto px-32 max-md:px-10 text-justify">
        <AnimatedSection>
          <h2 className="text-3xl font-bold mb-8 text-center">Sobre Mim</h2>
        </AnimatedSection>
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-12 items-center">
          <AnimatedSection direction="left" delay={0.2}>
            <div className="flex justify-center">
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary">
                <Image
                  src="/storage/photo.webp"
                  width={512}
                  height={512}
                  priority
                  quality={100}
                  alt="Foto de perfil"
                  className="object-cover w-full h-full pointer-events-none"
                />
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection direction="right" delay={0.4}>
            <div>
              <p className="text-lg mb-4">
                Olá! Sou um desenvolvedor web apaixonado por criar soluções
                digitais inovadoras e funcionais. Com experiência em
                desenvolvimento front-end e back-end, estou sempre buscando
                aprender novas tecnologias e aprimorar minhas habilidades.
              </p>
              <p className="text-lg mb-4">
                Minha jornada na programação começou há{' '}
                {new Date().getFullYear() - 2010} anos, e desde então tenho
                trabalhado em diversos projetos que me permitiram desenvolver um
                conjunto diversificado de habilidades técnicas e criativas.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
