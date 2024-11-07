import React from 'react';

interface TranslationInputProps {
  value: string;
  onChange: (value: string) => void;
}

export function TranslationInput({ value, onChange }: TranslationInputProps) {
  return (
    <div>
      <label htmlFor="input" className="block text-sm font-medium text-gray-700 mb-1">
        Chinese Text
      </label>
      <textarea
        id="input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-20 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
        placeholder="输入中文文本..."
      />
    </div>
  );
}