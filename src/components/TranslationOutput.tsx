import React from 'react';

interface TranslationOutputProps {
  text: string;
}

export function TranslationOutput({ text }: TranslationOutputProps) {
  if (!text) return null;

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        English Translation
      </label>
      <div className="w-full min-h-20 p-2 bg-white border border-gray-300 rounded-lg whitespace-pre-wrap">
        {text}
      </div>
    </div>
  );
}