import React from 'react';
import { ChevronLeft, ChevronRight, Save, Send } from 'lucide-react';

interface NavigationButtonsProps {
  currentSection: number;
  totalSections: number;
  onPrevious: () => void;
  onNext: () => void;
  onSaveDraft: () => void;
  onSubmit: () => void;
  isSubmitting: boolean;
  canProceed: boolean;
}

export const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  currentSection,
  totalSections,
  onPrevious,
  onNext,
  onSaveDraft,
  onSubmit,
  isSubmitting,
  canProceed
}) => {
  const isLastSection = currentSection === totalSections;
  const isFirstSection = currentSection === 1;

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mt-12 pt-8 border-t border-gray-700">
      <div className="flex gap-3">
        {!isFirstSection && (
          <button
            type="button"
            onClick={onPrevious}
            className="flex items-center gap-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors duration-200"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </button>
        )}
        
        <button
          type="button"
          onClick={onSaveDraft}
          className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
        >
          <Save className="w-4 h-4" />
          Save Draft
        </button>
      </div>

      <div className="flex gap-3">
        {isLastSection ? (
          <button
            type="button"
            onClick={onSubmit}
            disabled={!canProceed || isSubmitting}
            className="flex items-center gap-2 px-8 py-3 bg-green-600 hover:bg-green-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white rounded-lg transition-colors duration-200 font-semibold"
          >
            <Send className="w-4 h-4" />
            {isSubmitting ? 'Submitting...' : 'Submit Application'}
          </button>
        ) : (
          <button
            type="button"
            onClick={onNext}
            disabled={!canProceed}
            className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white rounded-lg transition-colors duration-200"
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};