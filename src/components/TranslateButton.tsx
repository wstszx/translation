import React from 'react';
import { ArrowRightLeft } from 'lucide-react';

interface TranslateButtonProps {
  onClick: () => void;
  isLoading: boolean;
  disabled: boolean;
}

export function TranslateButton({ onClick, isLoading, disabled }: TranslateButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`
        w-full py-2 px-4 rounded-lg font-medium
        flex items-center justify-center gap-2
        transition-colors duration-200
        ${disabled || isLoading
          ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
          : 'bg-blue-600 text-white hover:bg-blue-700'
        }
      `}
    >
      {isLoading ? (
        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
      ) : (
        <>
          <ArrowRightLeft className="w-4 h-4" />
          Translate
        </>
      )}
    </button>
  );
}