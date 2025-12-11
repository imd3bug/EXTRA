const { useState, useEffect } = React;

// Lucide React Icons (simplified versions)
const DollarSign = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="12" y1="1" x2="12" y2="23"></line>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
    </svg>
);

const Mail = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
);

const TrendingUp = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
        <polyline points="17 6 23 6 23 12"></polyline>
    </svg>
);

const Gift = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="20 12 20 22 4 22 4 12"></polyline>
        <rect x="2" y="7" width="20" height="5"></rect>
        <line x1="12" y1="22" x2="12" y2="7"></line>
        <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
        <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
    </svg>
);

const ChevronDown = ({ className }) => (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
);

function CashRewardsLanding() {
  const [openFaq, setOpenFaq] = useState(null);
  const [snowflakes, setSnowflakes] = useState([]);

  useEffect(() => {
    const flakes = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      animationDuration: 5 + Math.random() * 10,
      animationDelay: Math.random() * 5,
      size: 2 + Math.random() * 4,
      opacity: 0.3 + Math.random() * 0.7
    }));
    setSnowflakes(flakes);
  }, []);

  const faqs = [
    {
      question: "How long do tasks typically take?",
      answer: "Most tasks take between 2-5 minutes to complete. We value your time and keep things quick and simple."
    },
    {
      question: "What kind of tasks will I be doing?",
      answer: "Tasks include surveys, app trials, watching videos, and completing offers from our trusted partners."
    },
    {
      question: "When will I receive my rewards?",
      answer: "Rewards are processed instantly upon task completion and can be withdrawn once you reach the minimum threshold."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white pb-8 relative overflow-hidden">
      {/* Falling Snowflakes */}
      <div className="fixed inset-0 pointer-events-none z-50">
        {snowflakes.map((flake) => (
          <div
            key={flake.id}
            className="absolute rounded-full bg-white animate-fall"
            style={{
              left: `${flake.left}%`,
              width: `${flake.size}px`,
              height: `${flake.size}px`,
              opacity: flake.opacity,
              animationDuration: `${flake.animationDuration}s`,
              animationDelay: `${flake.animationDelay}s`
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes fall {
          0% {
            transform: translateY(-10vh) translateX(0);
          }
          100% {
            transform: translateY(110vh) translateX(20px);
          }
        }
        .animate-fall {
          animation: fall linear infinite;
        }
      `}</style>
      
      {/* Hero Section */}
      <div className="px-4 pt-8 pb-6">
        <div className="max-w-2xl mx-auto">
          {/* Hero Image */}
          <div className="mb-6 rounded-3xl overflow-hidden">
            <img 
              src="cashimage.png" 
              alt="$750 Cash" 
              className="w-full h-auto"
            />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-3 text-center bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent leading-tight">
            Earn Extra Cash
          </h1>
          <p className="text-base text-gray-400 mb-8 text-center px-4">
            Complete simple tasks and get rewarded instantly
          </p>

          {/* CTA Button */}
          <a href="https://CBkJIMJvUJJW.myfunnelish.com/dsifnhiensn" className="block w-full bg-gradient-to-r from-green-500 to-emerald-500 text-black font-bold py-4 px-6 rounded-full text-lg shadow-lg shadow-green-500/40 active:scale-95 transition-transform duration-150 mb-3 text-center">
            Start Earning Now →
          </a>

          <p className="text-green-400 text-sm text-center flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
            1k+ users already earning
          </p>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">How It Works</h2>
          
          <div className="space-y-3">
            {[
              {
                icon: Mail,
                title: "Provide a valid email address",
                description: "For notifications and rewards",
                color: "bg-green-500"
              },
              {
                icon: DollarSign,
                title: "Complete 2-3 deals",
                description: "The more you do, the more you earn",
                color: "bg-emerald-500"
              },
              {
                icon: Gift,
                title: "Claim Reward & Repeat",
                description: "Enjoy your reward",
                color: "bg-green-400"
              }
            ].map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-4 border border-gray-800 active:scale-98 transition-transform">
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 ${step.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                      <Icon />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold mb-0.5 leading-tight">{step.title}</h3>
                      <p className="text-sm text-gray-400 leading-snug">{step.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-800 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-4 text-left active:bg-gray-800/50 transition-colors"
                >
                  <span className="text-base font-semibold pr-3 leading-snug">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-green-400 transition-transform flex-shrink-0 ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-40' : 'max-h-0'}`}>
                  <div className="px-4 pb-4 text-sm text-gray-400 leading-relaxed border-t border-gray-800/50 pt-3">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-4 pt-8">
        <div className="max-w-2xl mx-auto text-center text-gray-600 text-xs border-t border-gray-900 pt-6">
          <p>© 2024 Cash Rewards. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<CashRewardsLanding />, document.getElementById('root'));
