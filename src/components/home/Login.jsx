import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, User, ArrowLeft, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

// 1. Ro'yxatdan o'tish komponenti
function Register({ onSwitch }) {
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = () => {
    console.log('Register:', formData);
    onSwitch('verification');
  };

  return (
    <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-yellow-400 rounded-full mx-auto mb-4 flex items-center justify-center">
          <User className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-2xl font-medium text-gray-900">{t('login.register.title')}</h2>
        <p className="text-gray-500 mt-1 text-sm">{t('login.register.subtitle')}</p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">{t('login.register.name')}</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
            placeholder={t('login.register.namePlaceholder')}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">{t('login.register.email')}</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
            placeholder="email@example.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">{t('login.register.password')}</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              placeholder="••••••••"
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">{t('login.register.confirmPassword')}</label>
          <input
            type="password"
            value={formData.confirmPassword}
            onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
            placeholder="••••••••"
          />
        </div>

        <button
          onClick={handleSubmit}
          className="w-full bg-yellow-400 text-gray-900 py-2.5 rounded-lg font-medium hover:bg-yellow-500 transition-colors"
        >
          {t('login.register.button')}
        </button>
      </div>

      <p className="text-center mt-6 text-sm text-gray-600">
        {t('login.register.haveAccount')}{' '}
        <button onClick={() => onSwitch('login')} className="text-yellow-600 font-medium hover:underline">
          {t('login.register.loginLink')}
        </button>
      </p>
    </div>
  );
}

// 2. Login komponenti
function Login({ onSwitch }) {
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleSubmit = () => {
    console.log('Login:', formData);
  };

  return (
    <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-yellow-400 rounded-full mx-auto mb-4 flex items-center justify-center">
          <Lock className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-2xl font-medium text-gray-900">{t('login.login.title')}</h2>
        <p className="text-gray-500 mt-1 text-sm">{t('login.login.subtitle')}</p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">{t('login.login.email')}</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
            placeholder="email@example.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">{t('login.login.password')}</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              placeholder="••••••••"
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center">
            <input type="checkbox" className="w-4 h-4 border-gray-300 rounded text-yellow-400 focus:ring-yellow-400" />
            <span className="ml-2 text-gray-600">{t('login.login.remember')}</span>
          </label>
          <button
            onClick={() => onSwitch('forgot')}
            className="text-yellow-600 hover:underline"
          >
            {t('login.login.forgotPassword')}
          </button>
        </div>

        <button
          onClick={handleSubmit}
          className="w-full bg-yellow-400 text-gray-900 py-2.5 rounded-lg font-medium hover:bg-yellow-500 transition-colors"
        >
          {t('login.login.button')}
        </button>
      </div>

      <p className="text-center mt-6 text-sm text-gray-600">
        {t('login.login.noAccount')}{' '}
        <button onClick={() => onSwitch('register')} className="text-yellow-600 font-medium hover:underline">
          {t('login.login.registerLink')}
        </button>
      </p>
    </div>
  );
}

// 3. Parolni tiklash komponenti
function ForgotPassword({ onSwitch }) {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    setSent(true);
    console.log('Reset password for:', email);
  };

  return (
    <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-sm border border-gray-100">
      <button
        onClick={() => onSwitch('login')}
        className="flex items-center text-gray-600 hover:text-gray-900 mb-6 text-sm"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        {t('login.forgot.back')}
      </button>

      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-yellow-400 rounded-full mx-auto mb-4 flex items-center justify-center">
          <Mail className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-2xl font-medium text-gray-900">{t('login.forgot.title')}</h2>
        <p className="text-gray-500 mt-1 text-sm">{t('login.forgot.subtitle')}</p>
      </div>

      {!sent ? (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">{t('login.forgot.email')}</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              placeholder="email@example.com"
            />
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-yellow-400 text-gray-900 py-2.5 rounded-lg font-medium hover:bg-yellow-500 transition-colors"
          >
            {t('login.forgot.button')}
          </button>
        </div>
      ) : (
        <div className="text-center py-4">
          <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <p className="text-gray-700 mb-2">{t('login.forgot.sent')}</p>
          <p className="text-sm text-gray-500">{t('login.forgot.checkEmail')}</p>
        </div>
      )}
    </div>
  );
}

// 4. Tasdiqlash komponenti
function Verification({ onSwitch }) {
  const { t } = useTranslation();
  const [code, setCode] = useState(['', '', '', '', '', '']);

  const handleChange = (index, value) => {
    if (value.length <= 1) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);
      
      if (value && index < 5) {
        const nextInput = document.getElementById(`code-${index + 1}`);
        if (nextInput) nextInput.focus();
      }
    }
  };

  const handleSubmit = () => {
    console.log('Verification code:', code.join(''));
    onSwitch('login');
  };

  return (
    <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-yellow-400 rounded-full mx-auto mb-4 flex items-center justify-center">
          <CheckCircle className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-2xl font-medium text-gray-900">{t('login.verify.title')}</h2>
        <p className="text-gray-500 mt-1 text-sm">{t('login.verify.subtitle')}</p>
      </div>

      <div className="space-y-6">
        <div className="flex justify-center gap-2">
          {code.map((digit, index) => (
            <input
              key={index}
              id={`code-${index}`}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              className="w-12 h-12 text-center text-lg font-medium border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
            />
          ))}
        </div>

        <button
          onClick={handleSubmit}
          className="w-full bg-yellow-400 text-gray-900 py-2.5 rounded-lg font-medium hover:bg-yellow-500 transition-colors"
        >
          {t('login.verify.button')}
        </button>

        <p className="text-center text-sm text-gray-600">
          {t('login.verify.noCode')}{' '}
          <button className="text-yellow-600 font-medium hover:underline">
            {t('login.verify.resend')}
          </button>
        </p>
      </div>
    </div>
  );
}

// Asosiy LoginMenu komponenti
export default function LoginMenu() {
  const [currentView, setCurrentView] = useState('login');

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      {currentView === 'register' && <Register onSwitch={setCurrentView} />}
      {currentView === 'login' && <Login onSwitch={setCurrentView} />}
      {currentView === 'forgot' && <ForgotPassword onSwitch={setCurrentView} />}
      {currentView === 'verification' && <Verification onSwitch={setCurrentView} />}
    </div>
  );
}