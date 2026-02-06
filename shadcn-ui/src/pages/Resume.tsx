import { resumeData } from "@/data/resume";
import { ExperienceCard } from "@/components/ExperienceCard";
import { EducationCard } from "@/components/EducationCard";
import { SkillsCard } from "@/components/SkillsCard";
import { CareerTimeline } from "@/components/CareerTimeline";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Resume() {
  return (
    <div className="min-h-screen bg-zinc-950 py-20 px-4">
      <div className="container mx-auto max-w-4xl space-y-12">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-zinc-800 pb-8"
        >
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">Resume</h1>
            <p className="text-zinc-400 max-w-xl">
              A comprehensive overview of my professional experience, academic background, and technical skillset.
            </p>
          </div>
          <Button variant="outline" className="border-zinc-700 text-zinc-300 hover:text-white hover:bg-zinc-800">
            <Download className="mr-2 h-4 w-4" /> Download PDF
          </Button>
        </motion.div>

        {/* Experience Section */}
        <section>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="bg-blue-600 w-2 h-8 mr-4 rounded-sm"></span>
              Professional Experience
            </h2>
            
            {/* Timeline Visualization */}
            <CareerTimeline />

            <div className="space-y-6">
              {resumeData.experience.map((exp, index) => (
                <ExperienceCard key={index} {...exp} />
              ))}
            </div>
          </motion.div>
        </section>

        {/* Education Section */}
        <section>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="bg-violet-600 w-2 h-8 mr-4 rounded-sm"></span>
              Education
            </h2>
            <div className="space-y-6">
              {resumeData.education.map((edu, index) => (
                <EducationCard key={index} {...edu} />
              ))}
            </div>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="bg-emerald-600 w-2 h-8 mr-4 rounded-sm"></span>
              Technical Skills
            </h2>
            <SkillsCard skills={resumeData.skills} />
          </motion.div>
        </section>

      </div>
    </div>
  );
}