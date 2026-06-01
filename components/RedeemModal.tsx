"use client";

import React, { useState, useEffect } from "react";
import { useAppContext } from "./AppContext";

export default function RedeemModal() {
  const { isRedeemModalOpen, setIsRedeemModalOpen, setIsDiscountActive, setIsLoggedIn } = useAppContext();
  
  const [isLoginMode, setIsLoginMode] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    code: "",
    password: "",
  });
  
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [settings, setSettings] = useState({ code: "Yobro2026", percentage: 10 });

  useEffect(() => {
    if (isRedeemModalOpen) {
      fetch('/api/settings')
        .then(res => res.json())
        .then(data => {
          if (data.discountSettings) setSettings(data.discountSettings);
        });
    }
  }, [isRedeemModalOpen]);

  if (!isRedeemModalOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMsg("");
    setErrorMsg("");

    if (isLoginMode) {
      if (!formData.email || !formData.password) {
        setErrorMsg("Please enter email and password.");
        return;
      }
      
      try {
        const res = await fetch('/api/user-login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: formData.email, password: formData.password })
        });
        
        if (res.ok) {
          const data = await res.json();
          setIsLoggedIn(true);
          
          if (data.hasDiscount) {
            setIsDiscountActive(true);
            setSuccessMsg(`Logged in! ${settings.percentage}% Discount Restored.`);
          } else {
            setIsDiscountActive(false);
            setSuccessMsg("Logged in successfully.");
          }
          
          setTimeout(() => {
            setIsRedeemModalOpen(false);
            setSuccessMsg("");
            setFormData({ name: "", email: "", contact: "", code: "", password: "" });
          }, 2000);
        } else {
          const data = await res.json();
          setErrorMsg(data.error || "Login failed.");
        }
      } catch (err) {
        setErrorMsg("Server error during login.");
      }
    } else {
      // Registration mode
      if (!formData.name || !formData.email || !formData.contact || !formData.password) {
        setErrorMsg("Please fill in all required fields.");
        return;
      }

      // Save lead to database
      try {
        await fetch('/api/leads', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
      } catch (err) {
        console.error("Failed to save lead");
      }

      setIsLoggedIn(true);

      if (formData.code && formData.code.trim().toLowerCase() === settings.code.trim().toLowerCase()) {
        setIsDiscountActive(true);
        setSuccessMsg(`Registration Successful! ${settings.percentage}% Discount Applied.`);
      } else if (formData.code) {
        setIsDiscountActive(false);
        setErrorMsg("Invalid code, but registered successfully.");
      } else {
        setIsDiscountActive(false);
        setSuccessMsg("Registration successful.");
      }

      setTimeout(() => {
        setIsRedeemModalOpen(false);
        setSuccessMsg("");
        setErrorMsg("");
        setFormData({ name: "", email: "", contact: "", code: "", password: "" });
      }, 3000);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-pure-black/80 backdrop-blur-md p-4">
      <div className="bg-surface-container border border-glass-stroke rounded-2xl w-full max-w-md p-8 relative shadow-2xl">
        <button
          onClick={() => setIsRedeemModalOpen(false)}
          className="absolute top-4 right-4 text-on-surface-variant hover:text-crisp-white transition-colors"
        >
          <span className="material-symbols-outlined">close</span>
        </button>
        
        <h2 className="font-headline-lg text-2xl text-crisp-white mb-2 text-center font-bold">
          {isLoginMode ? "Welcome Back" : "Create an Account"}
        </h2>
        <p className="font-body-md text-on-surface-variant text-center mb-6">
          {isLoginMode 
            ? "Log in to access your dashboard." 
            : "Register now and enter your special code for discounts."}
        </p>

        {successMsg && (
          <div className="bg-primary/20 border border-primary/50 text-primary px-4 py-3 rounded-lg mb-4 text-sm font-bold text-center">
            {successMsg}
          </div>
        )}

        {errorMsg && (
          <div className="bg-red-500/20 border border-red-500/50 text-red-400 px-4 py-3 rounded-lg mb-4 text-sm font-bold text-center">
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {!isLoginMode && (
            <div>
              <label className="block font-label-bold text-sm text-on-surface-variant mb-1">Name *</label>
              <input
                type="text"
                name="name"
                required={!isLoginMode}
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-surface-container-high border border-glass-stroke rounded-lg px-4 py-3 text-crisp-white outline-none focus:border-primary transition-colors"
                placeholder="John Doe"
              />
            </div>
          )}
          
          <div>
            <label className="block font-label-bold text-sm text-on-surface-variant mb-1">Email *</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-surface-container-high border border-glass-stroke rounded-lg px-4 py-3 text-crisp-white outline-none focus:border-primary transition-colors"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label className="block font-label-bold text-sm text-on-surface-variant mb-1">Password *</label>
            <input
              type="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              className="w-full bg-surface-container-high border border-glass-stroke rounded-lg px-4 py-3 text-crisp-white outline-none focus:border-primary transition-colors"
              placeholder="••••••••"
            />
          </div>

          {!isLoginMode && (
            <>
              <div>
                <label className="block font-label-bold text-sm text-on-surface-variant mb-1">Contact Number *</label>
                <input
                  type="tel"
                  name="contact"
                  required={!isLoginMode}
                  value={formData.contact}
                  onChange={handleChange}
                  className="w-full bg-surface-container-high border border-glass-stroke rounded-lg px-4 py-3 text-crisp-white outline-none focus:border-primary transition-colors"
                  placeholder="+91 1234567890"
                />
              </div>
              <div>
                <label className="block font-label-bold text-sm text-on-surface-variant mb-1">Special Code (Optional)</label>
                <input
                  type="text"
                  name="code"
                  value={formData.code}
                  onChange={handleChange}
                  className="w-full bg-surface-container-high border border-primary/50 rounded-lg px-4 py-3 text-crisp-white outline-none focus:border-primary transition-colors focus:shadow-[0_0_10px_rgba(255,146,28,0.2)]"
                  placeholder="Enter special code"
                />
              </div>
            </>
          )}
          
          <button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-pure-black font-bold py-3 rounded-lg mt-2 transition-all duration-300 shadow-[0_0_15px_rgba(255,146,28,0.4)]"
          >
            {isLoginMode ? "Log In" : "Register & Apply Code"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-on-surface-variant text-sm">
            {isLoginMode ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              type="button"
              onClick={() => {
                setIsLoginMode(!isLoginMode);
                setErrorMsg("");
                setSuccessMsg("");
              }}
              className="text-primary hover:underline font-bold"
            >
              {isLoginMode ? "Register" : "Log In"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
