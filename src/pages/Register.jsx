import React, { useState } from "react";
import { User, Mail, Lock, ArrowRight, CheckCircle } from "lucide-react";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords don't match";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        // Store registered user data in localStorage
        localStorage.setItem('registeredUser', JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password
        }));
        
        // Store pre-fill data for login page
        localStorage.setItem('loginPreFill', JSON.stringify({
          email: formData.email,
          password: formData.password
        }));
        
        // Navigate to login page (replace with your router navigation)
        window.location.href = '/login';
        // For React Router: navigate('/login', { state: { fromRegister: true } });
      }, 1000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const navigateToLogin = () => {
    window.location.href = '/login';
    // For React Router: navigate('/login');
  };

  const navigateToHome = () => {
    window.location.href = '/';
    // For React Router: navigate('/');
  };

  return (
    <div className="font-sans bg-gray-950 text-gray-100 min-h-screen">
      {/* Navbar */}
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
              onClick={navigateToLogin}
              className="text-gray-400 hover:text-emerald-400 transition px-4 py-2 font-medium"
            >
              Sign In
            </button>
          </div>
        </div>
      </nav>

      <div className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Info */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Join thousands of<br/>
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                developers building faster
              </span>
            </h1>
            
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Contract-first collaboration eliminates integration bugs and saves hours of debugging.
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

          {/* Right Side - Form */}
          <div className="bg-gray-900/50 backdrop-blur rounded-2xl p-8 border border-gray-800">
            <h2 className="text-2xl font-bold mb-6">Create your account</h2>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name Field */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full bg-gray-950 border ${errors.name ? 'border-red-500' : 'border-gray-800'} rounded-lg pl-11 pr-4 py-3 focus:outline-none focus:border-emerald-500 transition text-white`}
                    placeholder="John Doe"
                  />
                </div>
                {errors.name && (
                  <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email Field */}
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

              {/* Password Field */}
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
                    className={`w-full bg-gray-950 border ${errors.password ? 'border-red-500' : 'border-gray-800'} rounded-lg pl-11 pr-4 py-3 focus:outline-none focus:border-emerald-500 transition text-white`}
                    placeholder="••••••••"
                  />
                </div>
                {errors.password && (
                  <p className="text-red-400 text-sm mt-1">{errors.password}</p>
                )}
              </div>

              {/* Confirm Password Field */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className={`w-full bg-gray-950 border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-800'} rounded-lg pl-11 pr-4 py-3 focus:outline-none focus:border-emerald-500 transition text-white`}
                    placeholder="••••••••"
                  />
                </div>
                {errors.confirmPassword && (
                  <p className="text-red-400 text-sm mt-1">{errors.confirmPassword}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-500 transition flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Creating account...
                  </>
                ) : (
                  <>
                    Create Account
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-4 my-6">
              <div className="flex-1 h-px bg-gray-800"></div>
              <span className="text-gray-500 text-sm">or</span>
              <div className="flex-1 h-px bg-gray-800"></div>
            </div>

            {/* Sign In Link */}
            <div className="text-center">
              <p className="text-gray-400 text-sm">
                Already have an account?{" "}
                <button
                  onClick={navigateToLogin}
                  className="text-emerald-400 font-semibold hover:text-emerald-300 transition"
                >
                  Sign In
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}