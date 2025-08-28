
import { Button } from "@/components/ui/button";
import { Zap, Shield, Globe, Clock, Users, BarChart3 } from "lucide-react";

const CapabilitiesSection = () => {
  const capabilities = [
    {
      icon: Zap,
      title: "Lightning-Fast Response",
      description: "Respond to customer queries in seconds with AI-powered automation and smart routing."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with end-to-end encryption and compliance with global standards."
    },
    {
      icon: Globe,
      title: "Multi-Channel Support",
      description: "Unify email, chat, phone, and social media into one seamless experience."
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Never miss a customer query with round-the-clock AI agents and support."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Enable seamless collaboration between AI agents and human support teams."
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Get deep insights into customer satisfaction, response times, and team performance."
    }
  ];

  return (
    <section id="capabilities" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Powerful capabilities for modern support
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to deliver exceptional customer experiences, powered by advanced AI and built for scale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <div key={index} className="floating-card p-6 text-center group hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-gradient-mint rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <capability.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                {capability.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-center">
                {capability.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="btn-secondary">
            Explore all capabilities
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
