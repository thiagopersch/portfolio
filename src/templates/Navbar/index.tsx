import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Github, Linkedin, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import Link from 'next/link';

const Navbar = () => {
  const { setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-40 w-full px-4 border-b bg-background/60 backdrop-blur-[2px] dark:backdrop-blur-[1rem] dark:text-white">
      <div className="flex h-16 items-center justify-between">
        <Link href="#welcome" className="font-bold text-xl pl-4">
          Tiago Persch
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link
            href="#sobre"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Sobre
          </Link>
          <Link
            href="#habilidades"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Habilidades
          </Link>
          <Link
            href="#projetos"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Projetos
          </Link>
          <Link
            href="#contato"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Contato
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" asChild>
            <Link href="https://github.com/thiagopersch" target="_blank">
              <Github className="h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="icon">
            <Link
              href="https://www.linkedin.com/in/tiago-persch-81ba8a150/"
              target="_blank"
            >
              <Linkedin className="h-4 w-4" />
            </Link>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Mudar tema</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme('light')}>
                Claro
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('dark')}>
                Escuro
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('system')}>
                Sistema
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
