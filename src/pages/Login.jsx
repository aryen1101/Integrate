import React, { useState, useEffect } from "react";
import { Mail, Lock, ArrowRight, CheckCircle } from "lucide-react";
import { login } from "../apiCalls/authCalls";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const preFillData = localStorage.getItem('loginPreFill');
    if (preFillData) {
      const { email, password } = JSON.parse(preFillData);
      setFormData({ email, password });
      localStorage.removeItem('loginPreFill');
    }
  }, []);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    
    if (!formData.password) {
      newErrors.password = "Password is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validateForm()) return;

  setIsSubmitting(true);
  try {
    const response = await login(formData);
    alert(response.message || "Login successful!");

    // Optionally store token or user info
    localStorage.setItem("currentUser", JSON.stringify(response.user));

    // Navigate to dashboard or homepage
    window.location.href = "/dashboard";
  } catch (error) {
    const msg = error?.message || "Invalid email or password";
    setErrors({ password: msg });
  } finally {
    setIsSubmitting(false);
  }
};


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const navigateToRegister = () => {
    window.location.href = '/register';
  };

  const navigateToHome = () => {
    window.location.href = '/';
  };

  return (
    <div className="font-sans bg-gray-950 text-gray-100 min-h-screen">
      <nav className="fixed top-0 w-full z-50 bg-gray-950/80 backdrop-blur-lg border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <button 
            onClick={navigateToHome}
            className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"
          >
            Integrate
          </button>
          <div className="flex gap-4">
            <button 
              onClick={navigateToRegister}
              className="bg-emerald-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-emerald-500 transition"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      <div className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Welcome back to<br/>
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                seamless integration
              </span>
            </h1>
            
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Continue building with contract-first collaboration and eliminate integration chaos.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-white">AI-Powered Contracts</div>
                  <div className="text-gray-400 text-sm">Generate OpenAPI specs from plain English</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-white">Instant Mock Servers</div>
                  <div className="text-gray-400 text-sm">Frontend and backend work in parallel</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-white">Real-time Validation</div>
                  <div className="text-gray-400 text-sm">See contract compliance as you code</div>
                </div>
              </div>
            </div>

          </div>

          <div className="bg-gray-900/50 backdrop-blur rounded-2xl p-8 border border-gray-800">
            <h2 className="text-2xl font-bold mb-6">Sign in to your account</h2>
            
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full bg-gray-950 border ${errors.email ? 'border-red-500' : 'border-gray-800'} rounded-lg pl-11 pr-4 py-3 focus:outline-none focus:border-emerald-500 transition text-white`}
                    placeholder="you@example.com"
                  />
                </div>
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    onKeyDown={(e) => e.key === 'Enter' && handleSubmit(e)}
                    className={`w-full bg-gray-950 border ${errors.password ? 'border-red-500' : 'border-gray-800'} rounded-lg pl-11 pr-4 py-3 focus:outline-none focus:border-emerald-500 transition text-white`}
                    placeholder="••••••••"
                  />
                </div>
                {errors.password && (
                  <p className="text-red-400 text-sm mt-1">{errors.password}</p>
                )}
              </div>

    

              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-500 transition flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Signing in...
                  </>
                ) : (
                  <>
                    Sign In
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>

            <div className="flex items-center gap-4 my-6">
              <div className="flex-1 h-px bg-gray-800"></div>
              <span className="text-gray-500 text-sm">or</span>
              <div className="flex-1 h-px bg-gray-800"></div>
            </div>

            <div className="text-center">
              <p className="text-gray-400 text-sm">
                Don't have an account?{" "}
                <button
                  onClick={navigateToRegister}
                  className="text-emerald-400 font-semibold hover:text-emerald-300 transition"
                >
                  Get Started
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}