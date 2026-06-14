import React, { useState } from 'react';
import { LogIn, UserPlus, Briefcase, Lock, Mail, CheckCircle2 } from 'lucide-react';
import { Page } from '../types';

interface LoginProps {
  setCurrentPage: (page: Page) => void;
  onLoginSuccess: (user: { email: string; isDealer: boolean }) => void;
}

export default function Login({ setCurrentPage, onLoginSuccess }: LoginProps) {
  // Login State
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [isDealerLogin, setIsDealerLogin] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);

  // Register State
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [isDealerRegister, setIsDealerRegister] = useState(false);
  const [registerSuccess, setRegisterSuccess] = useState(false);

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginEmail.trim() && loginPassword.trim()) {
      setLoginSuccess(true);
      setTimeout(() => {
        onLoginSuccess({
          email: loginEmail,
          isDealer: isDealerLogin
        });
        setCurrentPage('home');
      }, 1500);
    }
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (registerEmail.trim() && registerPassword.trim()) {
      setRegisterSuccess(true);
      setTimeout(() => {
        onLoginSuccess({
          email: registerEmail,
          isDealer: isDealerRegister
        });
        setCurrentPage('home');
      }, 1500);
    }
  };

  return (
    <div id="account-login-view" className="max-w-7xl mx-auto w-full px-4 py-8 flex flex-col gap-10 bg-white">
      {/* Title */}
      <div id="login-header-section" className="text-center max-w-2xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-widest text-primary">
          Authorized Portal Access
        </span>
        <h1 id="account-title" className="text-2xl md:text-3xl font-black text-brand-deepblue tracking-tight leading-tight mt-1">
          My Account — Access Console
        </h1>
        <p id="account-subtitle" className="text-xs text-brand-lightgray font-bold uppercase mt-1 tracking-wider">
          Enterprise login for Dealers, Builders, Architects and Customers
        </p>
      </div>

      <div id="login-forms-layout" className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start max-w-4xl mx-auto w-full">
        
        {/* Form 1: LOGIN */}
        <div id="login-form-box" className="p-6 md:p-8 bg-white border border-gray-150 rounded-lg shadow-xs flex flex-col gap-4">
          <h2 id="login-card-title" className="text-base font-extrabold text-brand-deepblue border-b border-gray-150 pb-2.5 flex items-center gap-2">
            <LogIn className="w-4.5 h-4.5 text-primary" />
            <span>Sign In</span>
          </h2>

          <form id="sign-in-form" onSubmit={handleLoginSubmit} className="flex flex-col gap-4">
            
            {/* Field: Username or Email */}
            <div id="wrap-login-email" className="flex flex-col gap-1">
              <label className="text-[10px] font-bold text-brand-deepblue uppercase tracking-wider">
                Username or email address *
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-lightgray w-4 h-4" />
                <input
                  id="login-email-input"
                  type="text"
                  required
                  placeholder="Enter email / username"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 bg-gray-50 border border-gray-200 rounded text-xs text-brand-darkgray focus:outline-none focus:border-primary focus:bg-white"
                />
              </div>
            </div>

            {/* Field: Password */}
            <div id="wrap-login-pass" className="flex flex-col gap-1">
              <label className="text-[10px] font-bold text-brand-deepblue uppercase tracking-wider">
                Password *
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-lightgray w-4 h-4" />
                <input
                  id="login-password-input"
                  type="password"
                  required
                  placeholder="••••••••"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 bg-gray-50 border border-gray-200 rounded text-xs text-brand-darkgray focus:outline-none focus:border-primary focus:bg-white"
                />
              </div>
            </div>

            {/* Selection checkbox */}
            <div id="wrap-login-options" className="flex items-center justify-between text-xs font-semibold">
              <label id="lbl-remember-me" className="flex items-center gap-2 text-brand-darkgray cursor-pointer">
                <input
                  id="login-chk-remember"
                  type="checkbox"
                  className="rounded border-gray-300 text-primary focus:ring-primary/20 cursor-pointer"
                />
                <span>Remember me</span>
              </label>
              <button
                id="login-lost-pwd"
                type="button"
                onClick={() => alert("An email to reset password has been dispatched to your verified username.")}
                className="text-primary hover:underline cursor-pointer"
              >
                Lost your password?
              </button>
            </div>

            {/* Select Role option */}
            <div id="wrap-login-role" className="p-2.5 bg-brand-lightblue/35 border border-brand-lightblue rounded flex items-center justify-between text-xs mt-1">
              <span className="font-bold text-brand-deepblue text-[11px] uppercase tracking-wide">Login as Neycer Dealer?</span>
              <button
                id="login-role-toggle"
                type="button"
                onClick={() => setIsDealerLogin(!isDealerLogin)}
                className={`px-3 py-1 rounded text-[11px] font-bold cursor-pointer transition ${
                  isDealerLogin ? 'bg-primary text-white' : 'bg-white text-brand-deepblue border border-gray-200'
                }`}
              >
                {isDealerLogin ? 'Dealer Mode: ON' : 'Dealer Mode: OFF'}
              </button>
            </div>

            {/* Submit */}
            <button
              id="login-form-submit-btn"
              type="submit"
              className="bg-primary hover:bg-brand-darkblue text-white font-bold text-xs py-2.5 rounded transition cursor-pointer flex items-center justify-center gap-2 mt-2"
            >
              <LogIn className="w-3.5 h-3.5" />
              <span>Log In</span>
            </button>
          </form>

          {loginSuccess && (
            <div id="login-ok-alert" className="bg-emerald-50 text-emerald-800 border border-emerald-100 text-xs p-3 rounded flex items-center gap-2 animate-fadeIn">
              <CheckCircle2 className="w-4.5 h-4.5 text-emerald-600" />
              <span>Login successful. Redirecting to console...</span>
            </div>
          )}
        </div>

        {/* Form 2: REGISTER */}
        <div id="register-form-box" className="p-6 md:p-8 bg-white border border-gray-150 rounded-lg shadow-xs flex flex-col gap-4">
          <h2 id="register-card-title" className="text-base font-extrabold text-brand-deepblue border-b border-gray-150 pb-2.5 flex items-center gap-2">
            <UserPlus className="w-4.5 h-4.5 text-primary" />
            <span>Register Account</span>
          </h2>

          <form id="register-new-form" onSubmit={handleRegisterSubmit} className="flex flex-col gap-4">
            
            {/* Field: Email */}
            <div id="wrap-register-email" className="flex flex-col gap-1">
              <label className="text-[10px] font-bold text-brand-deepblue uppercase tracking-wider">
                Email address *
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-lightgray w-4 h-4" />
                <input
                  id="register-email-input"
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={registerEmail}
                  onChange={(e) => setRegisterEmail(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 bg-gray-50 border border-gray-200 rounded text-xs text-brand-darkgray focus:outline-none focus:border-primary focus:bg-white"
                />
              </div>
            </div>

            {/* Field: Password */}
            <div id="wrap-register-pass" className="flex flex-col gap-1">
              <label className="text-[10px] font-bold text-brand-deepblue uppercase tracking-wider">
                Password *
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-lightgray w-4 h-4" />
                <input
                  id="register-password-input"
                  type="password"
                  required
                  placeholder="••••••••"
                  value={registerPassword}
                  onChange={(e) => setRegisterPassword(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 bg-gray-50 border border-gray-200 rounded text-xs text-brand-darkgray focus:outline-none focus:border-primary focus:bg-white"
                />
              </div>
            </div>

            {/* Dealer toggle */}
            <button
              id="dealer-onboarding-link"
              type="button"
              onClick={() => {
                setIsDealerRegister(!isDealerRegister);
                // Also redirect to Associate Advantage page optionally
                setCurrentPage('business-associate');
              }}
              className="text-primary hover:underline text-xs font-bold text-left cursor-pointer flex items-center gap-1.5 self-start"
            >
              <Briefcase className="w-4 h-4 text-primary" />
              <span>Register as a Neycer dealer? Click Here</span>
            </button>

            {/* Submit */}
            <button
              id="register-form-submit-btn"
              type="submit"
              className="bg-primary hover:bg-brand-darkblue text-white font-bold text-xs py-2.5 rounded transition cursor-pointer flex items-center justify-center gap-2 mt-4"
            >
              <UserPlus className="w-3.5 h-3.5" />
              <span>Register</span>
            </button>
          </form>

          {registerSuccess && (
            <div id="register-ok-alert" className="bg-emerald-50 text-emerald-800 border border-emerald-100 text-xs p-3 rounded flex items-center gap-2 animate-fadeIn">
              <CheckCircle2 className="w-4.5 h-4.5 text-emerald-600" />
              <span>Registration successful. Establishing account session...</span>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
