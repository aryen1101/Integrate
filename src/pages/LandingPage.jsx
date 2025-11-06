import React, { useState } from "react";
import { Sparkles, Zap, CheckCircle, RefreshCw, Bot, Gauge, BarChart3, Code2, Repeat, Rocket } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const [activeTab, setActiveTab] = useState('backend');
  const navigate = useNavigate();

  return (
    <div className="font-sans bg-gray-950 text-gray-100 min-h-screen">
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-gray-950/80 backdrop-blur-lg border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <div className="flex items-center gap-12">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Integrate
            </h1>
            <div className="hidden md:flex gap-8 text-sm font-medium">
              <a href="#features" className="text-gray-400 hover:text-emerald-400 transition">Features</a>
              <a href="#how" className="text-gray-400 hover:text-emerald-400 transition">How it Works</a>
              <a href="#developers" className="text-gray-400 hover:text-emerald-400 transition">Developers</a>
            </div>
          </div>
          <div className="flex gap-4">
            <button onClick={()=>{navigate("/login")}} className="text-gray-400 hover:text-emerald-400 transition px-4 py-2 font-medium">
              Sign In
            </button>
            <button onClick={()=>{navigate("/register")}} className="bg-emerald-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-emerald-500 transition">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-950/50 border border-red-900/50 rounded-full text-red-400 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              40% time wasted on integration bugs
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Stop Breaking<br/>
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Each Other's Code
              </span>
            </h1>
            
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Contract-first collaboration for teams. AI-powered contracts, instant mocks, real-time validation.
            </p>

            <button onClick={()=>{navigate("/register")}} className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-500 transition text-lg">
              Start Building Free →
            </button>
          </div>

          <div className="relative">
            <div className="bg-gray-900/50 backdrop-blur rounded-2xl border border-gray-800 p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-4 text-sm text-gray-500 font-mono">contract-validator</span>
              </div>
              <div className="bg-black/50 rounded-lg p-6 font-mono text-sm">
                <div className="text-gray-500">// Backend saves code</div>
                <div className="text-green-400 mt-2">✓ Validating against contract...</div>
                <div className="text-green-400">✓ Response schema matches</div>
                <div className="text-green-400">✓ Status updated: Ready</div>
                <div className="text-gray-500 mt-4">// Frontend auto-switches</div>
                <div className="text-cyan-400 mt-2">→ Routing to production API</div>
                <div className="text-emerald-400 mt-1">⚡ Integration complete</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-12 px-6 bg-gradient-to-r from-emerald-950/50 to-cyan-950/50 border-y border-gray-800">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-emerald-400 mb-2">5 min</div>
            <div className="text-gray-400 text-sm">Setup time</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-emerald-400 mb-2">0</div>
            <div className="text-gray-400 text-sm">Integration bugs</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-emerald-400 mb-2">100%</div>
            <div className="text-gray-400 text-sm">Contract coverage</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-emerald-400 mb-2">Real-time</div>
            <div className="text-gray-400 text-sm">Validation</div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-gray-400">From idea to integrated app in 4 steps</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { num: "01", title: "Generate Contract", desc: "Describe your API in plain English. AI generates OpenAPI spec.", Icon: Bot },
              { num: "02", title: "Parallel Development", desc: "Frontend uses mock server. Backend builds real API.", Icon: Zap },
              { num: "03", title: "Real-time Validation", desc: "VS Code extension validates on save. Instant feedback.", Icon: CheckCircle },
              { num: "04", title: "Auto Integration", desc: "Backend deploys. Proxy auto-routes to production.", Icon: RefreshCw }
            ].map((step, idx) => (
              <div key={idx} className="relative">
                <div className="bg-gray-900/50 backdrop-blur border border-gray-800 rounded-2xl p-6 h-full hover:border-emerald-600/50 transition">
                  <step.Icon className="w-10 h-10 text-emerald-400 mb-4" />
                  <div className="text-xs font-bold mb-2 text-emerald-400">STEP {step.num}</div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-800"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOR DEVELOPERS */}
      <section id="developers" className="py-20 px-6 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Built for Developers</h2>
            <p className="text-xl text-gray-400">Tools that fit your workflow</p>
          </div>

          <div className="flex justify-center gap-4 mb-8">
            <button 
              onClick={() => setActiveTab('backend')}
              className={`px-6 py-3 rounded-lg font-semibold transition ${activeTab === 'backend' ? 'bg-emerald-600 text-white' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}
            >
              Backend Developer
            </button>
            <button 
              onClick={() => setActiveTab('frontend')}
              className={`px-6 py-3 rounded-lg font-semibold transition ${activeTab === 'frontend' ? 'bg-emerald-600 text-white' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}
            >
              Frontend Developer
            </button>
          </div>

          <div className="bg-gray-900/50 backdrop-blur rounded-2xl p-8 border border-gray-800">
            {activeTab === 'backend' ? (
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Live Validation in VS Code</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold mb-1">Instant Feedback</div>
                        <div className="text-gray-400 text-sm">See ✅ or ❌ next to route handlers on every save</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold mb-1">Contract Compliance</div>
                        <div className="text-gray-400 text-sm">Automatic validation against OpenAPI schema</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold mb-1">Auto Dashboard Update</div>
                        <div className="text-gray-400 text-sm">Team sees your progress in real-time</div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="bg-black/50 rounded-xl border border-gray-800 p-6">
                  <div className="flex items-center gap-2 mb-4 pb-4 border-b border-gray-800">
                    <span className="text-sm font-mono text-gray-400">routes/auth.js</span>
                  </div>
                  <div className="font-mono text-sm space-y-2">
                    <div className="text-gray-500">// POST /api/login</div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-400">✓</span>
                      <span className="text-gray-300">router.post('/login', ...)</span>
                    </div>
                    <div className="text-emerald-400 text-xs ml-4">Status: Locally Validated</div>
                    <div className="text-gray-500 mt-4">// GET /api/user</div>
                    <div className="flex items-center gap-2">
                      <span className="text-red-400">✗</span>
                      <span className="text-gray-300">router.get('/user', ...)</span>
                    </div>
                    <div className="text-red-400 text-xs ml-4">Missing required field: email</div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Smart Proxy & Auto-Routing</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold mb-1">Zero Config Changes</div>
                        <div className="text-gray-400 text-sm">Code once, proxy handles routing automatically</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold mb-1">Intelligent Switching</div>
                        <div className="text-gray-400 text-sm">Mock data → Production API when ready</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold mb-1">Contract Preview</div>
                        <div className="text-gray-400 text-sm">Hover to see schema and status</div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="bg-black/50 rounded-xl border border-gray-800 p-6">
                  <div className="flex items-center gap-2 mb-4 pb-4 border-b border-gray-800">
                    <span className="text-sm font-mono text-gray-400">App.jsx</span>
                  </div>
                  <div className="font-mono text-sm space-y-3">
                    <div className="text-gray-500">// Your code stays the same</div>
                    <div className="text-gray-300">fetch('api.myapp.com/user')</div>
                    <div className="border-t border-gray-800 pt-3 mt-3"></div>
                    <div className="text-gray-500">// Extension handles routing:</div>
                    <div className="text-cyan-400 text-xs">→ Checking status...</div>
                    <div className="text-orange-400 text-xs">→ Backend not ready</div>
                    <div className="text-emerald-400 text-xs">✓ Routing to mock server</div>
                    <div className="mt-4 p-3 bg-emerald-950/50 border border-emerald-900/50 rounded text-emerald-400 text-xs">
                      💡 Notified when production is ready
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Everything You Need</h2>
            <p className="text-xl text-gray-400">Complete contract-first development platform</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { Icon: Bot, title: "AI Contract Generator", desc: "Natural language to OpenAPI in seconds" },
              { Icon: Zap, title: "Instant Mock Server", desc: "Public mock APIs with realistic data" },
              { Icon: BarChart3, title: "Live Dashboard", desc: "Real-time WebSocket status updates" },
              { Icon: Code2, title: "VS Code Extension", desc: "In-editor validation and proxying" },
              { Icon: Repeat, title: "Smart Proxy", desc: "Auto-route between mock and production" },
              { Icon: Rocket, title: "CI/CD Integration", desc: "GitHub Actions contract testing" }
            ].map((feature, idx) => (
              <div key={idx} className="bg-gray-900/50 backdrop-blur rounded-xl p-6 border border-gray-800 hover:border-emerald-600/50 transition">
                <feature.Icon className="w-10 h-10 text-emerald-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-emerald-950/50 to-cyan-950/50 border-y border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Build Without Breaking?
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Join developers who've eliminated integration chaos
          </p>
          <button onClick={()=>{navigate("/register")}} className="bg-emerald-600 text-white px-10 py-5 rounded-lg font-bold text-xl hover:bg-emerald-500 transition">
            Start Your First Project →
          </button>
 
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-6 text-gray-500 text-center text-sm">
        <div className="max-w-7xl mx-auto">
          <div className="font-semibold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-2">Integrate</div>
          <div>Contract-first collaboration for developers</div>
        </div>
      </footer>
    </div>
  );
}