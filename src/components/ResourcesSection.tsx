
import { Button } from "@/components/ui/button";
import { BookOpen, Video, FileText, Download, Calendar, Users } from "lucide-react";

const ResourcesSection = () => {
  const resourceCategories = [
    {
      icon: BookOpen,
      title: "Documentation",
      description: "Comprehensive guides and API documentation",
      items: ["Getting Started Guide", "API Reference", "Best Practices", "Troubleshooting"]
    },
    {
      icon: Video,
      title: "Video Tutorials",
      description: "Step-by-step video guides and demos",
      items: ["Platform Walkthrough", "Setup Tutorial", "Advanced Features", "Use Cases"]
    },
    {
      icon: FileText,
      title: "Whitepapers",
      description: "Industry insights and research reports",
      items: ["AI in Customer Service", "ROI Calculator", "Industry Benchmarks", "Future Trends"]
    }
  ];

  const quickLinks = [
    {
      icon: Download,
      title: "Download Center",
      description: "Get the latest resources and tools"
    },
    {
      icon: Calendar,
      title: "Webinars",
      description: "Join our live training sessions"
    },
    {
      icon: Users,
      title: "Community",
      description: "Connect with other FibrWorks users"
    }
  ];

  return (
    <section id="resources" className="py-20 navy-section text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary-light mb-6">
            Everything you need to succeed
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Access our comprehensive resource library to get the most out of FibrWorks
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {resourceCategories.map((category, index) => (
            <div key={index} className="floating-card bg-white/10 backdrop-blur-sm border border-white/20 p-6">
              <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center mb-4">
                <category.icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {category.title}
              </h3>
              <p className="text-gray-300 mb-4">
                {category.description}
              </p>
              <ul className="space-y-2">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-sm text-gray-300 flex items-center">
                    <div className="w-1 h-1 bg-primary-light rounded-full mr-2"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {quickLinks.map((link, index) => (
            <div key={index} className="bg-white/5 border border-white/10 rounded-lg p-6 text-center hover:bg-white/10 transition-all cursor-pointer">
              <link.icon className="w-8 h-8 text-primary-light mx-auto mb-3" />
              <h4 className="font-semibold text-white mb-2">{link.title}</h4>
              <p className="text-sm text-gray-300">{link.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-primary hover:bg-primary-dark text-white font-medium px-6 py-3 rounded-lg transition-all duration-200 hover:shadow-lg">
              Browse all resources
            </Button>
            <Button className="border-2 border-white/30 text-white hover:bg-white hover:text-gray-900 font-medium px-6 py-3 rounded-lg transition-all duration-200">
              Contact support
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
