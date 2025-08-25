
import { Button } from "@/components/ui/button";

const AnalyticsSection = () => {
  return (
    <section className="py-20 hero-section">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            The full customer service experience
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto">
            Everything you need to support customers and empower teams—all in one place, available out of the box
          </p>
        </div>

        {/* Feature Tabs */}
        <div className="flex justify-center mb-16">
          <div className="flex flex-wrap justify-center gap-4">
            {["Chat and voice", "Self-service", "Unified context", "Advanced workflows", "Analytics and insights"].map((feature, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  index === 4 
                    ? 'bg-accent text-white' 
                    : 'text-gray-600 hover:text-gray-900 bg-white/50'
                }`}
              >
                {feature}
              </button>
            ))}
          </div>
        </div>

        {/* Analytics Dashboard */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">
                Turn data into better decisions
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Track key metrics like CSAT, response times, and ticket trends. Spot 
                bottlenecks, monitor team performance, and turn insights into action.
              </p>
            </div>

            <Button className="btn-outline">
              Learn more
            </Button>
          </div>

          {/* Right Side - Dashboard Mockup */}
          <div className="floating-card p-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Total tickets</p>
                <p className="text-2xl font-bold text-gray-900">448</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Reopened tickets</p>
                <div className="flex items-center">
                  <p className="text-2xl font-bold text-gray-900">98</p>
                  <span className="text-sm text-green-600 ml-2">↑ 0.05%</span>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Unresolved tickets</p>
                <div className="flex items-center">
                  <p className="text-2xl font-bold text-gray-900">09</p>
                  <span className="text-sm text-red-600 ml-2">↑ 1.2%</span>
                </div>
              </div>
            </div>

            {/* Charts */}
            <div className="grid grid-cols-2 gap-6">
              {/* Pie Chart */}
              <div>
                <p className="font-semibold text-gray-900 mb-4">Total tickets grouped by Priority</p>
                <div className="relative w-32 h-32 mx-auto">
                  <div className="w-32 h-32 rounded-full border-8 border-blue-500" style={{
                    background: `conic-gradient(#3b82f6 0deg 180deg, #60a5fa 180deg 270deg, #f97316 270deg 320deg, #fbbf24 320deg 360deg)`
                  }}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-lg font-bold">448</span>
                  </div>
                </div>
                <div className="flex justify-center mt-2 space-x-4 text-xs">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-500 rounded mr-1"></div>
                    <span>Low</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-400 rounded mr-1"></div>
                    <span>High</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-orange-500 rounded mr-1"></div>
                    <span>Medium</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-yellow-400 rounded mr-1"></div>
                    <span>Urgent</span>
                  </div>
                </div>
              </div>

              {/* Bar Chart */}
              <div>
                <p className="font-semibold text-gray-900 mb-4">Total tickets grouped by Source</p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Email</span>
                    <span className="text-sm font-medium">400</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-6">
                    <div className="bg-blue-500 h-6 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Portal</span>
                    <span className="text-sm font-medium">300</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-6">
                    <div className="bg-blue-600 h-6 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                </div>
                <p className="text-center text-sm text-gray-600 mt-2">Source</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsSection;
