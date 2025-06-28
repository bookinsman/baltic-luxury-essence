import React, { useState, useEffect, useContext } from 'react';
import { AlertTriangle } from 'lucide-react';
import { LanguageContext } from '@/App';

const content = {
  lt: {
    deniedTitle: "Prieiga negalima",
    deniedMessage: "Atsiprašome, turite būti bent 20 metų, kad galėtumėte naršyti šioje svetainėje.",
    verificationHeader: "Amžiaus patvirtinimas",
    promptTitle: "Turite patvirtinti amžių",
    promptMessage: "Alkoholinius gėrimus gali įsigyti tik asmenys, kuriems yra ne mažiau kaip 20 metų.",
    confirmButton: "Man yra 20 metų",
    denyButton: "Man nėra 20 metų"
  },
  en: {
    deniedTitle: "Access Denied",
    deniedMessage: "Sorry, you must be at least 20 years old to browse this site.",
    verificationHeader: "Age Verification",
    promptTitle: "You Must Verify Your Age",
    promptMessage: "Alcoholic beverages can only be purchased by persons who are at least 20 years old.",
    confirmButton: "I am 20 years old",
    denyButton: "I am not 20 years old"
  }
};

const AgeVerification = () => {
  const [isVerified, setIsVerified] = useState(true);
  const [isDenied, setIsDenied] = useState(false);
  const { language } = useContext(LanguageContext);

  const text = content[language as keyof typeof content] || content.lt;

  useEffect(() => {
    if (localStorage.getItem('ageVerified') === 'true') {
      setIsVerified(true);
    } else {
      setIsVerified(false);
    }
  }, []);

  const handleConfirm = () => {
    localStorage.setItem('ageVerified', 'true');
    setIsVerified(true);
  };

  const handleDeny = () => {
    setIsDenied(true);
  };

  if (isVerified) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/80 backdrop-blur-md animate-fade-in">
      <div className="bg-pearl text-charcoal rounded-lg shadow-2xl p-8 max-w-md w-full mx-4 text-center transform transition-all">
        {isDenied ? (
          <>
            <AlertTriangle className="mx-auto h-12 w-12 text-rich-gold mb-4" />
            <h2 className="text-2xl font-bold font-display mb-2">{text.deniedTitle}</h2>
            <p className="text-charcoal/80">
              {text.deniedMessage}
            </p>
          </>
        ) : (
          <>
            <h1 className="text-xl font-bold font-display mb-4 border-b border-rich-gold/20 pb-4 text-left">{text.verificationHeader}</h1>
            <div className="py-6">
                <AlertTriangle className="mx-auto h-12 w-12 text-rich-gold mb-4" />
                <h2 className="text-2xl font-bold font-display mb-2">{text.promptTitle}</h2>
                <p className="text-charcoal/80 text-sm">
                  {text.promptMessage}
                </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={handleConfirm}
                className="bg-rich-gold text-charcoal font-bold py-3 px-6 rounded-md hover:bg-rich-gold/90 transition-colors uppercase text-sm tracking-wider"
              >
                {text.confirmButton}
              </button>
              <button
                onClick={handleDeny}
                className="bg-transparent text-rich-gold font-bold py-3 px-6 rounded-md border border-rich-gold hover:bg-rich-gold/10 transition-colors uppercase text-sm tracking-wider"
              >
                {text.denyButton}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AgeVerification; 