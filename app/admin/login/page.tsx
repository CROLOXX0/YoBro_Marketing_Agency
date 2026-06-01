"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) {
        router.push("/admin");
      } else {
        const data = await res.json();
        setError(data.error || "Invalid credentials");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-pure-black relative overflow-hidden">
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-primary-container rounded-full blur-[150px] opacity-10 pointer-events-none"></div>
      
      <div className="bg-surface-container border border-glass-stroke rounded-2xl w-full max-w-md p-8 relative shadow-2xl z-10">
        <h2 className="font-headline-lg text-2xl text-crisp-white mb-2 text-center font-bold">Admin Portal</h2>
        <p className="font-body-md text-on-surface-variant text-center mb-8">
          Sign in to manage YoBro Marketing
        </p>

        {error && (
          <div className="bg-red-500/20 border border-red-500/50 text-red-400 px-4 py-3 rounded-lg mb-6 text-sm font-bold text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="flex flex-col gap-5">
          <div>
            <label className="block font-label-bold text-sm text-on-surface-variant mb-1">Username</label>
            <input
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-surface-container-high border border-glass-stroke rounded-lg px-4 py-3 text-crisp-white outline-none focus:border-primary transition-colors"
              placeholder="Enter username"
            />
          </div>
          <div>
            <label className="block font-label-bold text-sm text-on-surface-variant mb-1">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-surface-container-high border border-glass-stroke rounded-lg px-4 py-3 text-crisp-white outline-none focus:border-primary transition-colors"
              placeholder="Enter password"
            />
          </div>
          
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary hover:bg-primary/90 text-pure-black font-bold py-3 rounded-lg mt-2 transition-all duration-300 shadow-[0_0_15px_rgba(255,146,28,0.4)] disabled:opacity-50"
          >
            {loading ? "Authenticating..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
