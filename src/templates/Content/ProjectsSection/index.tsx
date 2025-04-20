import AnimatedSection from '@/components/AnimatedSection';
import ProjectCard from '@/components/ProjectCard';
import { projectData } from '../types';

const ProjectsSection = () => {
  return (
    <section id="projetos" className="py-12 max-md:py-24 max-lg:py-32">
      <div className="mx-auto px-10">
        <AnimatedSection>
          <h2 className="text-3xl font-bold mb-8 text-center">Meus Projetos</h2>
        </AnimatedSection>
        <div className="grid grid-cols-3 max-md:grid-cols-1 max-lg:grid-cols-4 gap-6">
          {projectData().map((project, index) => (
            <AnimatedSection
              key={index}
              delay={project.delay}
              direction={index % 2 === 0 ? 'left' : 'right'}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                tags={project.tags}
                imageUrl={project.imageUrl}
                githubUrl={project.githubUrl}
                demoUrl={project.demoUrl}
                delay={project.delay}
                type={project.type}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
