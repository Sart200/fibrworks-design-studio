
import { Button } from "@/components/ui/button";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Head of Customer Success",
      company: "TechFlow Inc",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      content: "FibrWorks transformed our customer support. Response times dropped by 80% and our CSAT scores hit an all-time high. The AI agents handle routine queries flawlessly."
    },
    {
      name: "Michael Rodriguez",
      role: "VP of Operations", 
      company: "Global Retail Co",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      content: "The seamless integration across all channels is incredible. Our team can now focus on complex issues while AI handles the rest. It's like having a 24/7 support superhero."
    },
    {
      name: "Emily Watson",
      role: "Customer Experience Director",
      company: "FinanceFirst",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      content: "Implementation was smooth and the results were immediate. Our customers love the instant responses and our agents love the intelligent assistance. It's a win-win."
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Trusted by industry leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how companies are transforming their customer support with FibrWorks
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="floating-card p-8 text-center">
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <Quote className="w-8 h-8 text-primary mx-auto mb-4 opacity-50" />
              
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center justify-center space-x-3">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-primary font-medium">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="btn-secondary">
            Read more success stories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
