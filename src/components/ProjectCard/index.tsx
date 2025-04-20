import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
  delay?: number;
  type: 'public' | 'private';
  className?: string;
};

export default function ProjectCard({
  title,
  description,
  tags,
  imageUrl,
  demoUrl = '',
  githubUrl = '',
  type = 'public',
}: ProjectCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="aspect-video w-full h-full overflow-hidden">
        <Image
          src={imageUrl || '/github-project.webp'}
          width={1024}
          height={1024}
          priority
          quality={100}
          alt={title}
          className="h-full w-full object-cover transition-all hover:scale-125"
        />
      </div>
      <CardHeader className="grid grid-cols-1 justify-between min-w-full">
        <div className="flex justify-between">
          <CardTitle>{title}</CardTitle>
          <Badge key={type} variant="secondary" className="text-xs font-medium">
            {type === 'private' ? 'Privado' : 'Público'}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      {(githubUrl || demoUrl) && (
        <CardFooter className="flex justify-between">
          {githubUrl && (
            <Button variant="outline" size="sm" asChild>
              <Link
                href={githubUrl}
                target="_blank"
                className="flex items-center gap-2"
              >
                <Github className="h-4 w-4" />
                Código
              </Link>
            </Button>
          )}
          {demoUrl && (
            <Button size="sm" asChild>
              <Link
                href={demoUrl}
                target="_blank"
                className="flex items-center gap-2"
              >
                <ExternalLink className="h-4 w-4" />
                Demo
              </Link>
            </Button>
          )}
        </CardFooter>
      )}
    </Card>
  );
}
