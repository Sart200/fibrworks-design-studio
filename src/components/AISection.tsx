import { Button } from "@/components/ui/button";
import { Bot, MessageCircle } from "lucide-react";

const AISection = () => {
  return (
    <section id="freddy-ai" className="navy-section py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Chat Interface Mockup */}
          <div className="relative">
            <div className="floating-card text-gray-900 p-6 max-w-md">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <MessageCircle className="w-5 h-5 text-primary" />
                  <span className="font-semibold">Where's my order?</span>
                </div>
                <div className="flex space-x-2">
                  <button className="w-6 h-6 bg-gray-100 rounded hover:bg-gray-200"></button>
                  <button className="w-6 h-6 bg-gray-100 rounded hover:bg-gray-200"></button>
                  <button className="w-6 h-6 bg-gray-100 rounded hover:bg-gray-200"></button>
                </div>
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

                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="space-y-1 flex-1">
                    <div className="h-2 bg-gradient-to-r from-green-300 to-purple-300 rounded-full"></div>
                    <div className="h-2 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full w-3/4"></div>
                    <div className="h-2 bg-gradient-to-r from-green-300 to-orange-300 rounded-full w-1/2"></div>
                  </div>
                </div>

                <div className="text-xs text-gray-500 flex items-center space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                  <span>Fetches update</span>
                  <div className="flex space-x-1">
                    <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                    <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                    <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-primary-light">
                Meet Freddy AI
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                From AI agents that resolve routine queries instantly to AI-powered 
                assistance for human agents, Freddy AI combines automation and 
                intelligence to help your team work more efficiently, scale effortlessly, and 
                deliver great experiences across every channel.
              </p>
            </div>

            <Button className="bg-primary hover:bg-primary-dark text-white font-medium px-6 py-3 rounded-lg transition-all duration-200 hover:shadow-lg">
              Learn more
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISection;
