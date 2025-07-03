import { useState, useCallback } from 'react';
import type { FormData, FormErrors } from '../types/form';

const REQUIRED_FIELDS = {
  1: ['fullName', 'email', 'role1_company', 'role1_title', 'role1_duration', 'role1_rating', 'role1_supervisor', 'reference_check_consent'],
  2: ['ai_arch_rating', 'ai_arch_recent_experience', 'b2c_growth_rating', 'mobile_rating', 'privacy_rating'],
  3: ['beta_product', 'beta_company', 'beta_participants', 'prioritization_privacy', 'prioritization_ai', 'prioritization_ux', 'prioritization_growth', 'prioritization_revenue', 'scenario_response'],
  4: ['transformative_thinking', 'sovereignty_philosophy', 'competitive_differentiation'],
  5: ['impact_plan_1', 'impact_plan_2', 'impact_plan_3', 'critical_q1', 'critical_q2', 'critical_q3'],
  6: ['employment_status', 'notice_period', 'comp_alignment', 'remote_work_excellence'],
  7: ['unique_edge'],
  8: ['vendor_experience'],
  9: ['declaration_accurate', 'declaration_excited', 'declaration_understands_excellence', 'declaration_accountable', 'digital_signature']
};

export const useFormValidation = () => {
  const [errors, setErrors] = useState<FormErrors>({});

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePrioritization = (formData: FormData): boolean => {
    const total = formData.prioritization_privacy + 
                  formData.prioritization_ai + 
                  formData.prioritization_ux + 
                  formData.prioritization_growth + 
                  formData.prioritization_revenue;
    return total === 100;
  };

  const validateSection = useCallback((sectionNumber: number, formData: FormData): boolean => {
    const newErrors: FormErrors = {};
    const requiredFields = REQUIRED_FIELDS[sectionNumber as keyof typeof REQUIRED_FIELDS] || [];

    // Clear previous errors for this section
    const currentErrors = { ...errors };
    requiredFields.forEach(field => {
      delete currentErrors[field];
    });

    // Validate required fields
    requiredFields.forEach(field => {
      const value = formData[field as keyof FormData];
      if (value === '' || value === null || value === undefined || 
          (typeof value === 'boolean' && !value && field.startsWith('declaration')) ||
          (typeof value === 'number' && value === 0 && field.includes('rating'))) {
        newErrors[field] = 'This field is required';
      }
    });

    // Email validation
    if (formData.email && !validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Prioritization validation (Section 3)
    if (sectionNumber === 3 && !validatePrioritization(formData)) {
      newErrors.prioritization_total = 'Prioritization values must sum to exactly 100 points';
    }

    // Word count validations
    const wordLimits = {
      role2_scope: 50,
      prioritization_explanation: 100,
      scenario_response: 150,
      sovereignty_philosophy: 100,
      competitive_differentiation: 100,
      remote_work_excellence: 75,
      unique_edge: 150
    };

    Object.entries(wordLimits).forEach(([field, limit]) => {
      const value = formData[field as keyof FormData] as string;
      if (value && value.trim().split(/\s+/).length > limit) {
        newErrors[field] = `Must be ${limit} words or less`;
      }
    });

    setErrors({ ...currentErrors, ...newErrors });
    return Object.keys(newErrors).length === 0;
  }, []);

  const validateAllSections = useCallback((formData: FormData): boolean => {
    let isValid = true;
    for (let i = 1; i <= 9; i++) {
      if (!validateSection(i, formData)) {
        isValid = false;
      }
    }
    return isValid;
  }, [validateSection]);

  return {
    errors,
    setErrors,
    validateSection,
    validateAllSections
  };
};