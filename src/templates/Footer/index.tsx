import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="border-t px-6 py-6">
      <div className="flex flex-row items-center justify-between gap-4 max-md:flex-col">
        <p className="text-center text-sm leading-loose text-muted-foreground max-md:text-left">
          © {new Date().getFullYear()} Tiago Persch. Todos os direitos
          reservados.
        </p>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Link href="https://github.com/thiagopersch" target="_blank">
              <Github className="h-4 w-4" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon">
            <Link
              href="https://www.linkedin.com/in/tiago-persch-81ba8a150/"
              target="_blank"
            >
              <Linkedin className="h-4 w-4" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon">
            <Link href="mailto:thiagopersch@gmail.com">
              <Mail className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
