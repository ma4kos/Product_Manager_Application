import React from 'react';
import { Check } from 'lucide-react';

interface ProgressTrackerProps {
  currentSection: number;
  totalSections: number;
  completedSections: boolean[];
}

export const ProgressTracker: React.FC<ProgressTrackerProps> = ({
  currentSection,
  totalSections,
  completedSections
}) => {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-white">
          Section {currentSection} of {totalSections}
        </h3>
        <div className="text-sm text-gray-400">
          {completedSections.filter(Boolean).length}/{totalSections} completed
        </div>
      </div>
      
      <div className="flex space-x-2">
        {Array.from({ length: totalSections }).map((_, index) => {
          const sectionNum = index + 1;
          const isCompleted = completedSections[index];
          const isCurrent = sectionNum === currentSection;
          
          return (
            <div
              key={sectionNum}
              className={`flex-1 h-3 rounded-full transition-all duration-300 ${
                isCompleted
                  ? 'bg-green-500'
                  : isCurrent
                  ? 'bg-purple-500'
                  : 'bg-gray-700'
              }`}
            >
              {isCompleted && (
                <div className="flex items-center justify-center h-full">
                  <Check className="w-3 h-3 text-white" />
                </div>
              )}
            </div>
          );
        })}
      </div>
      
      <div className="flex justify-between mt-2">
        {Array.from({ length: totalSections }).map((_, index) => (
          <span
            key={index}
            className={`text-xs ${
              completedSections[index]
                ? 'text-green-400'
                : index + 1 === currentSection
                ? 'text-purple-400'
                : 'text-gray-500'
            }`}
          >
            {index + 1}
          </span>
        ))}
      </div>
    </div>
  );
};