import AboutSection from './AboutSection';
import ContactSession from './ContactSession';
import ProjectsSection from './ProjectsSection';
import SkillsSection from './SkillsSection';
import WelcomeSection from './WelcomeSection';
export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <main className=" py-8 max-md:py-12">
        <WelcomeSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSession />
      </main>
    </div>
  );
}
