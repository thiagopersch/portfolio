import AnimatedSection from '@/components/AnimatedSection';
import SkillBadge from '@/components/SkillBadge';
import { skillsData } from '../types';

const SkillsSection = () => {
  return (
    <section
      id="habilidades"
      className="py-40 max-md:py-24 max-lg:py-64 bg-muted/50 dark:bg-muted/90"
    >
      <div className="mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-3xl font-bold mb-8 text-center">
            Minhas Habilidades
          </h2>
        </AnimatedSection>
        <div className="grid grid-cols-4 gap-2 max-md:grid-cols-2">
          {skillsData.map((skill, index) => (
            <AnimatedSection key={index} delay={0.4}>
              <div
                key={index}
                className="bg-card p-6 rounded-lg shadow-sm h-full"
              >
                <div className="mb-4">
                  <h3 className="text-xl max-md:text-base font-bold mb-1">
                    {skill.stack}
                  </h3>
                  <hr />
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.skills.map((skillName, index) => (
                    <SkillBadge key={index} name={skillName} />
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
