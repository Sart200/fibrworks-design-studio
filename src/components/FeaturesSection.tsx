
import { Button } from "@/components/ui/button";
import { MessageSquare, Zap, Users, BarChart3 } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      title: "Overview",
      active: true
    },
    {
      title: "Freddy AI",
      active: false
    },
    {
      title: "Capabilities", 
      active: false
    },
    {
      title: "Testimonials",
      active: false
    },
    {
      title: "Resources",
      active: false
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Navigation Tabs */}
        <div className="flex justify-center mb-16">
          <div className="flex bg-gray-100 rounded-full p-1">
            {features.map((feature, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  feature.active 
                    ? 'bg-white text-gray-900 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {feature.title}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Seamless support. Smarter agents. Faster resolutions.
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Unify every channel, cut the noise, and give agents an easy-to-use platform to resolve requests without missing a beat. 
            With FibrWorks, you don't just keep up, you stay ahead.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Chat Interface */}
          <div className="relative">
            <div className="floating-card p-6 max-w-md">
              <div className="flex items-center space-x-2 mb-4">
                <MessageSquare className="w-5 h-5 text-primary" />
                <span className="font-semibold">Where's my order?</span>
              </div>
              
              <div className="space-y-4">
                <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-6 h-6 bg-yellow-400 rounded-full"></div>
                    <span className="font-medium text-sm">John Miller via portal</span>
                  </div>
                  <p className="text-sm text-gray-700">
                    Hello, I'm reaching out about my package which was supposed to be delivered 
                    yesterday, but I haven't received it yet. I'm travelling in two days, and need it to 
                    be delivered before that.
                  </p>
                  <p className="text-sm text-gray-700 mt-2">Can I get an update on this?</p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-primary rounded-full"></div>
                  </div>
                  <div className="space-y-1">
                    <div className="h-3 bg-gradient-to-r from-green-300 to-purple-300 rounded-full w-3/4"></div>
                    <div className="h-3 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full w-1/2"></div>
                    <div className="h-3 bg-gradient-to-r from-green-300 to-orange-300 rounded-full w-2/3"></div>
                    <div className="h-3 bg-gradient-to-r from-pink-300 to-orange-300 rounded-full w-1/3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Feature Description */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">
                Turn email tickets into instant resolutions
              </h3>
              
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Auto-resolve issues with conversational AI agents
                  </h4>
                  <p className="text-gray-600">
                    AI agents go beyond suggestions. They take action. From resolving 
                    routine queries to updating records and processing requests, these 
                    digital teammates handle the busywork. No waiting, no hand-holding. 
                    Just automated resolutions, 24/7.
                  </p>
                </div>

                <div className="space-y-4 text-gray-600">
                  <h4 className="text-lg font-semibold text-gray-900">
                    Empower support teams with intelligent assistance
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
