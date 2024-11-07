import React, { useState, useEffect } from 'react';
import { Languages } from 'lucide-react';
import { TranslationInput } from './components/TranslationInput';
import { TranslationOutput } from './components/TranslationOutput';
import { TranslateButton } from './components/TranslateButton';
import { translateText } from './services/translation';
import { storage } from './services/storage';

function App() {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleTranslate = async () => {
    if (!inputText.trim()) return;

    setIsLoading(true);
    setError('');

    try {
      const result = await translateText(inputText);
      setTranslatedText(result);
      
      await storage.set({
        input: inputText,
        output: result,
        timestamp: new Date().toISOString()
      });
    } catch (err) {
      setError('Translation failed. Please try again.');
      console.error('Translation error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const loadLastTranslation = async () => {
      try {
        const lastTranslation = await storage.get();
        if (lastTranslation) {
          setInputText(lastTranslation.input);
          setTranslatedText(lastTranslation.output);
        }
      } catch (err) {
        console.error('Failed to load last translation:', err);
      }
    };

    loadLastTranslation();
  }, []);

  return (
    <div className="w-[400px] min-h-[300px] bg-gray-50">
      <div className="sticky top-0 bg-white border-b border-gray-200 px-4 py-3 flex items-center gap-2">
        <Languages className="w-5 h-5 text-blue-600" />
        <h1 className="text-lg font-semibold text-gray-800">GLM Translator</h1>
      </div>

      <div className="p-4 space-y-4">
        <TranslationInput value={inputText} onChange={setInputText} />
        
        <TranslateButton 
          onClick={handleTranslate}
          isLoading={isLoading}
          disabled={!inputText.trim()}
        />

        {error && (
          <div className="text-red-500 text-sm p-2 bg-red-50 rounded-lg">
            {error}
          </div>
        )}

        <TranslationOutput text={translatedText} />

        <div className="text-xs text-gray-500 text-center">
          Powered by GLM-4 Translation API
        </div>
      </div>
    </div>
  );
}

export default App;