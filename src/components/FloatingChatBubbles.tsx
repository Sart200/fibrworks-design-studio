
import { MessageCircle, User, Bot, Phone, Mail, Instagram, X } from "lucide-react";

const FloatingChatBubbles = () => {
  return (
    <div className="relative w-full h-[500px] animate-slide-up">
      {/* Main Chat Window */}
      <div className="absolute top-20 right-0 floating-card p-6 max-w-sm animate-float">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <MessageCircle className="w-5 h-5 text-primary" />
            <span className="font-semibold text-gray-800">Support Chat</span>
          </div>
          <div className="flex space-x-1">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-sm text-gray-600">Online</span>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-gray-600" />
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
              <Bot className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Smaller Chat Bubbles */}
      <div className="absolute top-0 left-20 floating-card p-4 max-w-xs animate-float" style={{ animationDelay: '1s' }}>
        <div className="flex items-center space-x-2 mb-2">
          <Mail className="w-4 h-4 text-red-500" />
          <span className="text-sm font-medium">Ana Rodriguez</span>
        </div>
        <p className="text-sm text-gray-700">My gift card isn't working online. Can you help to activate it?</p>
      </div>

      <div className="absolute bottom-32 left-0 floating-card p-4 max-w-xs animate-float" style={{ animationDelay: '2s' }}>
        <div className="flex items-center space-x-2 mb-2">
          <Instagram className="w-4 h-4 text-pink-500" />
          <span className="text-sm font-medium">Michael Johnson</span>
        </div>
        <p className="text-sm text-gray-700">Do you have this dress in size medium in your store in Berlin?</p>
      </div>

      <div className="absolute bottom-0 right-32 floating-card p-4 max-w-xs animate-float" style={{ animationDelay: '0.5s' }}>
        <div className="flex items-center space-x-2 mb-2">
          <X className="w-4 h-4 text-gray-800" />
          <span className="text-sm font-medium">Sofia Keller</span>
        </div>
        <p className="text-sm text-gray-700">Hello! I just placed an order, but I'm traveling and need it delivered before that.</p>
      </div>

      {/* Play Button Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 bg-gray-900/80 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-900 transition-colors animate-pulse">
          <div className="w-0 h-0 border-l-[8px] border-l-white border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-1"></div>
        </div>
      </div>
    </div>
  );
};

export default FloatingChatBubbles;
