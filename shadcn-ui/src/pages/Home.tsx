import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { Link } from "react-router-dom";
import { ArrowRight, Brain, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BrainParticles } from "@/components/BrainParticles";

const content = [
  {
    title: "Mathematical Engineering Foundation",
    description:
      "My journey began with rigorous training in mathematical modeling and complex systems at Universidad de Chile. This strong analytical foundation allows me to deconstruct problems into their fundamental components and build robust, scalable solutions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Brain className="h-20 w-20" />
      </div>
    ),
  },
  {
    title: "Impact in Education",
    description:
      "At MIDE UC and DEMRE, I applied these skills to the real world of educational assessment. I developed systems that ensure fairness and accuracy in high-stakes testing, impacting thousands of students across Chile.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <GraduationCap className="h-20 w-20" />
      </div>
    ),
  },
  {
    title: "Research in Cognition & AI",
    description:
      "My trajectory includes significant research in cognition, bridging the gap between human learning and machine intelligence. I leverage state-of-the-art Machine Learning models to analyze complex behavioral data, such as eye-tracking patterns, to uncover insights that traditional methods miss.",
    content: (
      <div className="h-full w-full bg-zinc-950 flex items-center justify-center overflow-hidden">
        <BrainParticles />
      </div>
    ),
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Hero Section */}
      <section className="h-[70vh] flex flex-col items-center justify-center relative overflow-hidden px-4 pt-10">
        <div className="absolute inset-0 w-full h-full bg-zinc-950">
           <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center space-y-6 max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
            Gabriel Ortega Hernández
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto">
            Bridging the gap between <span className="text-blue-500 font-semibold">Machine Learning</span> and <span className="text-violet-500 font-semibold">Educational Assessment</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link to="/portfolio">
              <Button size="lg" className="bg-white text-black hover:bg-zinc-200">
                View Portfolio <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/resume">
              <Button variant="outline" size="lg" className="border-zinc-700 text-zinc-300 hover:text-white hover:bg-zinc-800">
                Check Resume
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Scrollytelling Section */}
      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">The Journey</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              A path defined by analytical rigor and social impact.
            </p>
          </motion.div>
          
          <StickyScroll content={content} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-zinc-950 to-zinc-900 border-t border-zinc-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to collaborate?
          </h2>
          <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
            I'm always interested in hearing about new projects and opportunities in ML Engineering and EdTech.
          </p>
          <Link to="/resume">
             <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
               Get in Touch
             </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}