

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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

          {/* Right Content - Static Chat Interface */}
          <div className="relative">
            <div className="relative w-full h-[500px]">
              {/* Main Chat Window */}
              <div className="absolute top-20 right-0 floating-card p-6 max-w-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="font-semibold text-gray-800">Support Chat</span>
                  </div>
                  <div className="flex space-x-1 items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Online</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-gray-600 rounded-full"></div>
                    </div>
                    <div className="bg-gray-100 p-3 rounded-2xl rounded-tl-sm max-w-xs">
                      <p className="text-sm text-gray-800">Hi! My account's loyalty points not reflecting after purchase. Need immediate help!</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 justify-end">
                    <div className="bg-primary p-3 rounded-2xl rounded-tr-sm max-w-xs">
                      <p className="text-sm text-white">I understand your concern. Let me check your account details right away. Could you please share your order ID?</p>
                    </div>
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Smaller Chat Bubbles */}
              <div className="absolute top-0 left-20 floating-card p-4 max-w-xs">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-4 h-4 bg-red-500 rounded"></div>
                  <span className="text-sm font-medium">Ana Rodriguez</span>
                </div>
                <p className="text-sm text-gray-700">My gift card isn't working online. Can you help to activate it?</p>
              </div>

              <div className="absolute bottom-32 left-0 floating-card p-4 max-w-xs">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-4 h-4 bg-pink-500 rounded"></div>
                  <span className="text-sm font-medium">Michael Johnson</span>
                </div>
                <p className="text-sm text-gray-700">Do you have this dress in size medium in your store in Berlin?</p>
              </div>

              <div className="absolute bottom-0 right-32 floating-card p-4 max-w-xs">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-4 h-4 bg-gray-800 rounded"></div>
                  <span className="text-sm font-medium">Sofia Keller</span>
                </div>
                <p className="text-sm text-gray-700">Hello! I just placed an order, but I'm traveling and need it delivered before that.</p>
              </div>
            </div>
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

