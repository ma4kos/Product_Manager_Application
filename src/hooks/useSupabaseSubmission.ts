import { useState } from 'react';
import { supabase } from '../lib/supabase';
import type { FormData } from '../types/form';
import type { Database } from '../types/database';

type CandidateSubmission = Database['public']['Tables']['candidate_submissions']['Insert'];

export const useSupabaseSubmission = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitToSupabase = async (formData: FormData): Promise<{ success: boolean; submissionId?: string }> => {
    setIsSubmitting(true);
    setError(null);

    try {
      // Ensure we're using the anon key for public submissions
      console.log('🔑 Submitting as anonymous user...');
      
      // Convert FormData to Supabase format
      const submissionData: CandidateSubmission = {
        // Personal Information
        full_name: formData.fullName,
        email: formData.email,
        
        // Section 1: Excellence & Accountability
        role1_company: formData.role1_company || null,
        role1_title: formData.role1_title || null,
        role1_duration: formData.role1_duration || null,
        role1_scope: formData.role1_scope || null,
        role1_rating: formData.role1_rating,
        role1_supervisor: formData.role1_supervisor || null,
        
        role2_company: formData.role2_company || null,
        role2_title: formData.role2_title || null,
        role2_duration: formData.role2_duration || null,
        role2_scope: formData.role2_scope || null,
        role2_rating: formData.role2_rating,
        role2_supervisor: formData.role2_supervisor || null,
        
        role3_company: formData.role3_company || null,
        role3_title: formData.role3_title || null,
        role3_duration: formData.role3_duration || null,
        role3_scope: formData.role3_scope || null,
        role3_rating: formData.role3_rating,
        role3_supervisor: formData.role3_supervisor || null,
        
        reference_check_consent: formData.reference_check_consent || null,
        reference_check_explanation: formData.reference_check_explanation || null,
        
        // Section 2: Technical & Domain Expertise
        ai_arch_rating: formData.ai_arch_rating,
        ai_arch_recent_experience: formData.ai_arch_recent_experience || null,
        ai_arch_models_frameworks: formData.ai_arch_models_frameworks || null,
        
        b2c_growth_rating: formData.b2c_growth_rating,
        b2c_growth_best_achievement: formData.b2c_growth_best_achievement || null,
        b2c_growth_largest_userbase: formData.b2c_growth_largest_userbase || null,
        
        mobile_rating: formData.mobile_rating,
        mobile_apps_launched: formData.mobile_apps_launched,
        mobile_downloads: formData.mobile_downloads || null,
        
        privacy_rating: formData.privacy_rating,
        privacy_challenge: formData.privacy_challenge || null,
        privacy_compliance_experience: formData.privacy_compliance_experience || null,
        
        // Section 3: Execution & Impact
        beta_product: formData.beta_product || null,
        beta_company: formData.beta_company || null,
        beta_participants: formData.beta_participants,
        beta_metrics: formData.beta_metrics || null,
        beta_pivot: formData.beta_pivot || null,
        beta_involvement: formData.beta_involvement || null,
        
        prioritization_privacy: formData.prioritization_privacy,
        prioritization_ai: formData.prioritization_ai,
        prioritization_ux: formData.prioritization_ux,
        prioritization_growth: formData.prioritization_growth,
        prioritization_revenue: formData.prioritization_revenue,
        prioritization_explanation: formData.prioritization_explanation || null,
        
        scenario_response: formData.scenario_response || null,
        
        // Section 4: Vision Alignment
        transformative_thinking: formData.transformative_thinking || null,
        sovereignty_philosophy: formData.sovereignty_philosophy || null,
        competitive_differentiation: formData.competitive_differentiation || null,
        
        // Section 5: Practical Assessment
        impact_plan_1: formData.impact_plan_1 || null,
        impact_plan_2: formData.impact_plan_2 || null,
        impact_plan_3: formData.impact_plan_3 || null,
        critical_q1: formData.critical_q1 || null,
        critical_q2: formData.critical_q2 || null,
        critical_q3: formData.critical_q3 || null,
        
        // Section 6: Logistics & Commitment
        employment_status: formData.employment_status || null,
        notice_period: formData.notice_period || null,
        available_by_july15: formData.available_by_july15,
        contract_to_hire: formData.contract_to_hire,
        comp_alignment: formData.comp_alignment || null,
        remote_work_excellence: formData.remote_work_excellence || null,
        
        // Section 7: The Differentiator
        unique_edge: formData.unique_edge || null,
        evidence_link1: formData.evidence_link1 || null,
        evidence_link2: formData.evidence_link2 || null,
        evidence_link3: formData.evidence_link3 || null,
        
        // Section 8: Vendor Management
        vendor_experience: formData.vendor_experience || null,
        vendor_metrics: formData.vendor_metrics || null,
        vendor_escalation: formData.vendor_escalation || null,
        
        // Section 9: Final Declaration
        declaration_accurate: formData.declaration_accurate,
        declaration_excited: formData.declaration_excited,
        declaration_understands_excellence: formData.declaration_understands_excellence,
        declaration_accountable: formData.declaration_accountable,
        digital_signature: formData.digital_signature || null,
        
        // Metadata
        submission_date: new Date().toISOString()
      };

      console.log('📝 Attempting to insert submission data...');
      
      const { data, error: supabaseError } = await supabase
        .from('candidate_submissions')
        .insert(submissionData)
        .select('id')
        .single();

      if (supabaseError) {
        console.error('❌ Supabase submission error:', supabaseError);
        console.error('Error details:', {
          code: supabaseError.code,
          message: supabaseError.message,
          details: supabaseError.details,
          hint: supabaseError.hint
        });
        setError(`Database error: ${supabaseError.message}`);
        return { success: false };
      }

      console.log('✅ Successfully saved to Supabase with ID:', data.id);
      return { success: true, submissionId: data.id };

    } catch (err) {
      console.error('❌ Unexpected submission error:', err);
      setError(err instanceof Error ? err.message : 'An unexpected error occurred');
      return { success: false };
    } finally {
      setIsSubmitting(false);
    }
  };

  const sendEmailNotification = async (email: string, fullName: string): Promise<boolean> => {
    try {
      // Send only email notification data to Zapier
      const emailData = {
        Email: email,
        'Full Name': fullName,
        Timestamp: new Date().toISOString()
      };

      const response = await fetch('https://hooks.zapier.com/hooks/catch/9605678/ubh1cjn/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData)
      });

      if (response.ok) {
        console.log('✅ Email notification sent successfully');
        return true;
      } else {
        console.warn('⚠️ Email notification failed, but submission was saved to database');
        return false;
      }
    } catch (error) {
      console.warn('⚠️ Email notification error:', error);
      return false;
    }
  };

  return {
    submitToSupabase,
    sendEmailNotification,
    isSubmitting,
    error
  };
};