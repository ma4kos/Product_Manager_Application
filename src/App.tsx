import React, { useState, useEffect } from 'react';
import { Shield, CheckCircle } from 'lucide-react';
import { FormSection } from './components/FormSection';
import { ProgressTracker } from './components/ProgressTracker';
import { NavigationButtons } from './components/NavigationButtons';
import { useFormValidation } from './hooks/useFormValidation';
import { useLocalStorage } from './hooks/useLocalStorage';
import { useSupabaseSubmission } from './hooks/useSupabaseSubmission';
import type { FormData } from './types/form';
import { runBackgroundTest } from './utils/testSubmission';

const SECTIONS = [
  { id: 1, title: 'Excellence & Accountability', icon: Shield },
  { id: 2, title: 'Technical & Domain Expertise', icon: Shield },
  { id: 3, title: 'Execution & Impact', icon: Shield },
  { id: 4, title: 'Vision Alignment', icon: Shield },
  { id: 5, title: 'Practical Assessment', icon: Shield },
  { id: 6, title: 'Logistics & Commitment', icon: Shield },
  { id: 7, title: 'The Differentiator', icon: Shield },
  { id: 8, title: 'Vendor Management', icon: Shield },
  { id: 9, title: 'Final Declaration', icon: Shield }
];

const getInitialFormData = (): FormData => ({
  fullName: '',
  email: '',
  role1_company: '',
  role1_title: '',
  role1_duration: '',
  role1_rating: 1,
  role1_supervisor: '',
  role1_scope: '',
  role2_company: '',
  role2_title: '',
  role2_duration: '',
  role2_scope: '',
  role2_rating: 1,
  role2_supervisor: '',
  role3_company: '',
  role3_title: '',
  role3_duration: '',
  role3_rating: 1,
  role3_supervisor: '',
  role3_scope: '',
  reference_check_consent: '',
  reference_check_explanation: '',
  ai_arch_rating: 1,
  ai_arch_recent_experience: '',
  ai_arch_models_frameworks: '',
  b2c_growth_rating: 1,
  b2c_growth_best_achievement: '',
  b2c_growth_largest_userbase: '',
  mobile_rating: 1,
  mobile_apps_launched: 0,
  mobile_downloads: '',
  privacy_rating: 1,
  privacy_challenge: '',
  privacy_compliance_experience: '',
  beta_product: '',
  beta_company: '',
  beta_participants: 0,
  beta_metrics: '',
  beta_pivot: '',
  beta_involvement: '',
  prioritization_privacy: 0,
  prioritization_ai: 0,
  prioritization_ux: 0,
  prioritization_growth: 0,
  prioritization_revenue: 0,
  prioritization_explanation: '',
  scenario_response: '',
  transformative_thinking: '',
  sovereignty_philosophy: '',
  competitive_differentiation: '',
  impact_plan_1: '',
  impact_plan_2: '',
  impact_plan_3: '',
  critical_q1: '',
  critical_q2: '',
  critical_q3: '',
  employment_status: '',
  notice_period: '',
  available_by_july15: false,
  contract_to_hire: false,
  comp_alignment: '',
  remote_work_excellence: '',
  unique_edge: '',
  evidence_link1: '',
  evidence_link2: '',
  evidence_link3: '',
  vendor_experience: '',
  vendor_metrics: '',
  vendor_escalation: '',
  declaration_accurate: false,
  declaration_excited: false,
  declaration_understands_excellence: false,
  declaration_accountable: false,
  digital_signature: '',
  submission_date: '',
  email_for_notification: ''
});

function App() {
  const [currentSection, setCurrentSection] = useState(1);
  const [formData, setFormData] = useLocalStorage<FormData>('myvault-screening-draft', getInitialFormData());
  const [completedSections, setCompletedSections] = useState<boolean[]>(new Array(9).fill(false));
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionId, setSubmissionId] = useState<string | null>(null);
  
  const { errors, validateSection, validateAllSections } = useFormValidation();
  const { submitToSupabase, sendEmailNotification, isSubmitting, error: submissionError } = useSupabaseSubmission();

  const hasValidationErrors = (sectionNumber: number): boolean => {
    // This would need to be implemented based on your validation logic
    return false;
  };

  const canProceed = !hasValidationErrors(currentSection);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : 
              type === 'number' ? Number(value) : 
              value
    }));
  };

  const handleNext = () => {
    if (validateSection(currentSection, formData)) {
      setCompletedSections(prev => {
        const newCompleted = [...prev];
        newCompleted[currentSection - 1] = true;
        return newCompleted;
      });
      setCurrentSection(prev => prev + 1);
      // Scroll to top when moving to next section
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevious = () => {
    if (currentSection > 1) {
      setCurrentSection(prev => prev - 1);
      // Scroll to top when moving to previous section
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSaveDraft = () => {
    alert('Draft saved successfully!');
  };



  const handleSubmit = async () => {
    if (!validateAllSections(formData)) {
      alert('Please complete all required fields before submitting.');
      return;
    }

    try {
      // Step 1: Save to Supabase database
      console.log('📝 Saving submission to database...');
      const { success, submissionId: newSubmissionId } = await submitToSupabase(formData);
      
      if (!success) {
        alert(submissionError || 'Failed to save your application. Please try again.');
        return;
      }

      // Step 2: Send email notification via Zapier
      console.log('📧 Sending email notification...');
      const emailSent = await sendEmailNotification(formData.email, formData.fullName);
      
      if (!emailSent) {
        console.warn('Email notification failed, but submission was saved successfully');
      }

      // Step 3: Mark as submitted and clean up
      if (newSubmissionId) {
        setSubmissionId(newSubmissionId);
      }
      
      setIsSubmitted(true);
      localStorage.removeItem('myvault-screening-draft');
      
      console.log('🎉 Application submitted successfully!');
      
    } catch (error) {
      console.error('Submission error:', error);
      alert('There was an error submitting your application. Please try again.');
    }
  };

  // Show error message if there's a submission error
  useEffect(() => {
    if (submissionError) {
      console.error('Submission error:', submissionError);
    }
  }, [submissionError]);

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 flex items-center justify-center p-4">
        <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 max-w-2xl w-full text-center">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-4">Application Submitted Successfully!</h1>
          <p className="text-gray-300 mb-6">
            Thank you for your interest in the Product Manager position at MyVault. 
            Your application has been received and will be processed within 3 working days.
          </p>
          {submissionId && (
            <p className="text-gray-400 text-sm mb-4">
              Reference ID: <span className="font-mono text-purple-400">{submissionId}</span>
            </p>
          )}
          <p className="text-gray-400 text-sm">
            Should you meet the criteria for the role, we will be in touch to arrange an initial 45-minute interview. 
            5 finalists will be selected following this for in-depth interviews and selection/offers.
          </p>
        </div>
      </div>
    );
  }

  const prioritizationTotal = formData.prioritization_privacy + 
                             formData.prioritization_ai + 
                             formData.prioritization_ux + 
                             formData.prioritization_growth + 
                             formData.prioritization_revenue;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <header className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <Shield className="w-12 h-12 text-purple-400 mr-4" />
            <h1 className="text-4xl font-bold text-white">MyVault PM Candidate Excellence Portal</h1>
          </div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Position: Product Manager – AI-Powered Privacy Platform
          </p>
          <p className="text-gray-400 mt-4 max-w-3xl mx-auto">
            This comprehensive screening evaluates your excellence, technical expertise, and alignment with MyVault's mission 
            to build transformative AI-powered privacy solutions. Complete all sections thoughtfully and accurately.
          </p>
        </header>

        {submissionError && (
          <div className="mb-6 p-4 bg-red-900 border border-red-700 rounded-lg">
            <p className="text-red-300">
              <strong>Submission Error:</strong> {submissionError}
            </p>
          </div>
        )}

        <ProgressTracker 
          currentSection={currentSection}
          totalSections={SECTIONS.length}
          completedSections={completedSections}
        />

        <form className="space-y-8">
          <FormSection
            title={SECTIONS[currentSection - 1]?.title || ''}
            description=""
            isActive={true}
            currentSection={currentSection}
            formData={formData}
            onChange={handleInputChange}
            errors={errors}
            prioritizationTotal={prioritizationTotal}
          />
          
          <NavigationButtons
            currentSection={currentSection}
            totalSections={SECTIONS.length}
            onPrevious={handlePrevious}
            onNext={handleNext}
            onSaveDraft={handleSaveDraft}
            onSubmit={handleSubmit}
            isSubmitting={isSubmitting}
            canProceed={canProceed}
          />
        </form>
      </div>
    </div>
  );
}

export default App;