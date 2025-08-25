
import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle } from "lucide-react";
import FloatingChatBubbles from "./FloatingChatBubbles";

const HeroSection = () => {
  return (
    <section className="hero-section min-h-[700px] relative overflow-hidden">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                The agentic AI solution for{" "}
                <span className="text-balance">modern customer service</span>
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed max-w-2xl">
                With FibrWorks, AI agents and human agents work as one—resolving every 
                issue, instantly and intelligently.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-secondary text-lg px-8 py-4">
                Try it free
              </Button>
              <Button variant="outline" className="btn-outline text-lg px-8 py-4 group">
                Book a demo
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Right Content - Floating Chat Interface */}
          <div className="relative">
            <FloatingChatBubbles />
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-primary-light/20 rounded-full blur-2xl"></div>
    </section>
  );
};

export default HeroSection;
