
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 gradient-mint rounded-lg flex items-center justify-center">
              <Globe className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">FibrWorks</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-primary font-medium transition-colors">Products</a>
            <a href="#" className="text-gray-700 hover:text-primary font-medium transition-colors">Platform</a>
            <a href="#" className="text-gray-700 hover:text-primary font-medium transition-colors">Resources</a>
            <a href="#" className="text-gray-700 hover:text-primary font-medium transition-colors">Pricing</a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="hidden md:inline-flex border-gray-300 text-gray-700 hover:bg-gray-50">
              Demo
            </Button>
            <Button className="btn-secondary">
              Try it free
            </Button>
            <Button variant="ghost" className="text-gray-700 hover:text-gray-900">
              Login
            </Button>
            <Globe className="w-5 h-5 text-gray-500" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
