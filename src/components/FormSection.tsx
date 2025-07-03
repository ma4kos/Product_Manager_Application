import React from 'react';
import type { FormData, FormErrors } from '../types/form';

interface FormSectionProps {
  title: string;
  description?: string;
  isActive: boolean;
  currentSection: number;
  formData: FormData;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  errors: FormErrors;
  prioritizationTotal: number;
}

export const FormSection: React.FC<FormSectionProps> = ({
  title,
  description,
  isActive,
  currentSection,
  formData,
  onChange,
  errors,
  prioritizationTotal
}) => {
  if (!isActive) return null;

  const renderSection = () => {
    switch (currentSection) {
      case 1:
        return (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <InputField
                label="Full Name"
                name="fullName"
                value={formData.fullName}
                onChange={onChange}
                error={errors.fullName}
                required
              />
              <InputField
                label="Email Address"
                type="email"
                name="email"
                value={formData.email}
                onChange={onChange}
                error={errors.email}
                required
              />
            </div>

            {/* Most Recent Role */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">Most Recent Role</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField
                  label="Company"
                  name="role1_company"
                  value={formData.role1_company}
                  onChange={onChange}
                  error={errors.role1_company}
                  required
                />
                <InputField
                  label="Title"
                  name="role1_title"
                  value={formData.role1_title}
                  onChange={onChange}
                  error={errors.role1_title}
                  required
                />
                <InputField
                  label="Duration"
                  name="role1_duration"
                  value={formData.role1_duration}
                  onChange={onChange}
                  error={errors.role1_duration}
                  placeholder="e.g., 2021-2023"
                  required
                />
                <InputField
                  label="Direct Supervisor Name & Title"
                  name="role1_supervisor"
                  value={formData.role1_supervisor}
                  onChange={onChange}
                  error={errors.role1_supervisor}
                  required
                />
              </div>
              <div className="mt-4">
                <InputField
                  label="Brief Scope Description"
                  type="textarea"
                  name="role1_scope"
                  value={formData.role1_scope}
                  onChange={onChange}
                  error={errors.role1_scope}
                  maxLength={500}
                  rows={3}
                  placeholder="Describe your key responsibilities and scope in 50 words or less"
                />
              </div>
              <div className="mt-4">
                <RatingField
                  label="Self-assessed Performance Rating"
                  name="role1_rating"
                  value={formData.role1_rating}
                  onChange={onChange}
                  error={errors.role1_rating}
                  required
                />
              </div>
            </div>

            {/* 2nd Most Recent Role */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">2nd Most Recent Role</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField
                  label="Company"
                  name="role2_company"
                  value={formData.role2_company}
                  onChange={onChange}
                  error={errors.role2_company}
                />
                <InputField
                  label="Title"
                  name="role2_title"
                  value={formData.role2_title}
                  onChange={onChange}
                  error={errors.role2_title}
                />
                <InputField
                  label="Duration"
                  name="role2_duration"
                  value={formData.role2_duration}
                  onChange={onChange}
                  error={errors.role2_duration}
                  placeholder="e.g., 2019-2021"
                />
                <InputField
                  label="Direct Supervisor Name & Title"
                  name="role2_supervisor"
                  value={formData.role2_supervisor}
                  onChange={onChange}
                  error={errors.role2_supervisor}
                />
              </div>
              <div className="mt-4">
                <InputField
                  label="Brief Scope Description"
                  type="textarea"
                  name="role2_scope"
                  value={formData.role2_scope}
                  onChange={onChange}
                  error={errors.role2_scope}
                  maxLength={500}
                  rows={3}
                  placeholder="Describe your key responsibilities and scope in 50 words or less"
                />
              </div>
              <div className="mt-4">
                <RatingField
                  label="Self-assessed Performance Rating"
                  name="role2_rating"
                  value={formData.role2_rating}
                  onChange={onChange}
                  error={errors.role2_rating}
                />
              </div>
            </div>

            {/* 3rd Most Recent Role */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">3rd Most Recent Role</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField
                  label="Company"
                  name="role3_company"
                  value={formData.role3_company}
                  onChange={onChange}
                  error={errors.role3_company}
                />
                <InputField
                  label="Title"
                  name="role3_title"
                  value={formData.role3_title}
                  onChange={onChange}
                  error={errors.role3_title}
                />
                <InputField
                  label="Duration"
                  name="role3_duration"
                  value={formData.role3_duration}
                  onChange={onChange}
                  error={errors.role3_duration}
                  placeholder="e.g., 2017-2019"
                />
                <InputField
                  label="Direct Supervisor Name & Title"
                  name="role3_supervisor"
                  value={formData.role3_supervisor}
                  onChange={onChange}
                  error={errors.role3_supervisor}
                />
              </div>
              <div className="mt-4">
                <InputField
                  label="Brief Scope Description"
                  type="textarea"
                  name="role3_scope"
                  value={formData.role3_scope}
                  onChange={onChange}
                  error={errors.role3_scope}
                  maxLength={500}
                  rows={3}
                  placeholder="Describe your key responsibilities and scope in 50 words or less"
                />
              </div>
              <div className="mt-4">
                <RatingField
                  label="Self-assessed Performance Rating"
                  name="role3_rating"
                  value={formData.role3_rating}
                  onChange={onChange}
                  error={errors.role3_rating}
                />
              </div>
            </div>

            {/* Reference Check Consent */}
            <div className="mb-6">
              <InputField
                label="Reference Check Consent"
                type="select"
                name="reference_check_consent"
                value={formData.reference_check_consent}
                onChange={onChange}
                error={errors.reference_check_consent}
                options={[
                  { label: 'Yes, all three', value: 'Yes, all three' },
                  { label: 'Yes, two of three', value: 'Yes, two of three' },
                  { label: 'Yes, one of three', value: 'Yes, one of three' },
                  { label: 'No, but can explain why', value: 'No, but can explain why' }
                ]}
                required
              />
            </div>

            {formData.reference_check_consent !== 'Yes, all three' && formData.reference_check_consent && (
              <InputField
                label="Explanation for Limited Reference Availability"
                type="textarea"
                name="reference_check_explanation"
                value={formData.reference_check_explanation}
                onChange={onChange}
                error={errors.reference_check_explanation}
                rows={3}
              />
            )}
          </div>
        );

      case 2:
        return (
          <div className="space-y-8">
            {/* AI Application Architecture */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">AI Application Architecture</h3>
              <RatingField
                label="Self-rating"
                name="ai_arch_rating"
                value={formData.ai_arch_rating}
                onChange={onChange}
                error={errors.ai_arch_rating}
                required
              />
              <div className="mt-4">
                <InputField
                  label="Most Recent Hands-on Experience"
                  name="ai_arch_recent_experience"
                  value={formData.ai_arch_recent_experience}
                  onChange={onChange}
                  error={errors.ai_arch_recent_experience}
                  placeholder="Project name and date"
                  required
                />
              </div>
              <div className="mt-4">
                <InputField
                  label="AI Models/Frameworks Shipped"
                  name="ai_arch_models_frameworks"
                  value={formData.ai_arch_models_frameworks}
                  onChange={onChange}
                  error={errors.ai_arch_models_frameworks}
                  placeholder="e.g., OpenAI GPT-4, TensorFlow, PyTorch"
                />
              </div>
            </div>

            {/* B2C Growth & Scale */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">B2C Growth & Scale</h3>
              <RatingField
                label="Self-rating"
                name="b2c_growth_rating"
                value={formData.b2c_growth_rating}
                onChange={onChange}
                error={errors.b2c_growth_rating}
                required
              />
              <div className="mt-4">
                <InputField
                  label="Best Scaling Achievement"
                  name="b2c_growth_best_achievement"
                  value={formData.b2c_growth_best_achievement}
                  onChange={onChange}
                  error={errors.b2c_growth_best_achievement}
                  placeholder="Include specific metrics"
                />
              </div>
              <div className="mt-4">
                <InputField
                  label="Largest User Base Managed"
                  name="b2c_growth_largest_userbase"
                  value={formData.b2c_growth_largest_userbase}
                  onChange={onChange}
                  error={errors.b2c_growth_largest_userbase}
                  placeholder="Number of users"
                />
              </div>
            </div>

            {/* Mobile Product Excellence */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">Mobile Product Excellence</h3>
              <RatingField
                label="Self-rating"
                name="mobile_rating"
                value={formData.mobile_rating}
                onChange={onChange}
                error={errors.mobile_rating}
                required
              />
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField
                  label="Number of Mobile Apps Launched"
                  type="number"
                  name="mobile_apps_launched"
                  value={formData.mobile_apps_launched}
                  onChange={onChange}
                  error={errors.mobile_apps_launched}
                  min={0}
                />
                <InputField
                  label="Combined Downloads"
                  name="mobile_downloads"
                  value={formData.mobile_downloads}
                  onChange={onChange}
                  error={errors.mobile_downloads}
                  placeholder="Numeric or range"
                />
              </div>
            </div>

            {/* Privacy & Security Architecture */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">Privacy & Security Architecture</h3>
              <RatingField
                label="Self-rating"
                name="privacy_rating"
                value={formData.privacy_rating}
                onChange={onChange}
                error={errors.privacy_rating}
                required
              />
              <div className="mt-4">
                <InputField
                  label="Most Complex Privacy Challenge Solved"
                  type="textarea"
                  name="privacy_challenge"
                  value={formData.privacy_challenge}
                  onChange={onChange}
                  error={errors.privacy_challenge}
                  rows={3}
                />
              </div>
              <div className="mt-4">
                <InputField
                  label="Security & Privacy Certifications/Frameworks Experience"
                  name="privacy_compliance_experience"
                  value={formData.privacy_compliance_experience}
                  onChange={onChange}
                  error={errors.privacy_compliance_experience}
                  placeholder="e.g., SOC2, GDPR, ISO27001"
                />
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-8">
            {/* Beta Program Management */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">Beta Program Management</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField
                  label="Product Name"
                  name="beta_product"
                  value={formData.beta_product}
                  onChange={onChange}
                  error={errors.beta_product}
                  required
                />
                <InputField
                  label="Company"
                  name="beta_company"
                  value={formData.beta_company}
                  onChange={onChange}
                  error={errors.beta_company}
                  required
                />
                <InputField
                  label="Beta Participants Recruited"
                  type="number"
                  name="beta_participants"
                  value={formData.beta_participants}
                  onChange={onChange}
                  error={errors.beta_participants}
                  min={0}
                  required
                />
                <InputField
                  label="Top 10 Metrics Tracked"
                  name="beta_metrics"
                  value={formData.beta_metrics}
                  onChange={onChange}
                  error={errors.beta_metrics}
                  placeholder="e.g., DAU, Retention, NPS"
                />
              </div>
              <div className="mt-4">
                <InputField
                  label="Major Pivot/Improvement from Feedback"
                  type="textarea"
                  name="beta_pivot"
                  value={formData.beta_pivot}
                  onChange={onChange}
                  error={errors.beta_pivot}
                  rows={3}
                />
              </div>
              <div className="mt-4">
                <InputField
                  label="Description of Involvement, Team, Structure"
                  type="textarea"
                  name="beta_involvement"
                  value={formData.beta_involvement}
                  onChange={onChange}
                  error={errors.beta_involvement}
                  rows={3}
                />
              </div>
            </div>

            {/* Feature Prioritization */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">Feature Prioritization (100 Points Total)</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <InputField
                  label="User Privacy/Security"
                  type="number"
                  name="prioritization_privacy"
                  value={formData.prioritization_privacy}
                  onChange={onChange}
                  error={errors.prioritization_privacy}
                  min={0}
                  max={100}
                  required
                />
                <InputField
                  label="AI Intelligence/Capability"
                  type="number"
                  name="prioritization_ai"
                  value={formData.prioritization_ai}
                  onChange={onChange}
                  error={errors.prioritization_ai}
                  min={0}
                  max={100}
                  required
                />
                <InputField
                  label="User Experience/Delight"
                  type="number"
                  name="prioritization_ux"
                  value={formData.prioritization_ux}
                  onChange={onChange}
                  error={errors.prioritization_ux}
                  min={0}
                  max={100}
                  required
                />
                <InputField
                  label="Growth/Virality Features"
                  type="number"
                  name="prioritization_growth"
                  value={formData.prioritization_growth}
                  onChange={onChange}
                  error={errors.prioritization_growth}
                  min={0}
                  max={100}
                  required
                />
                <InputField
                  label="Revenue Generation"
                  type="number"
                  name="prioritization_revenue"
                  value={formData.prioritization_revenue}
                  onChange={onChange}
                  error={errors.prioritization_revenue}
                  min={0}
                  max={100}
                  required
                />
              </div>
              <div className="mt-4 text-center">
                <span className={`text-lg font-semibold ${prioritizationTotal === 100 ? 'text-green-400' : 'text-red-400'}`}>
                  Total: {prioritizationTotal}/100
                </span>
                {prioritizationTotal !== 100 && (
                  <p className="text-red-400 text-sm mt-1">Values must sum to exactly 100 points</p>
                )}
              </div>
              <div className="mt-4">
                <InputField
                  label="Written Explanation"
                  type="textarea"
                  name="prioritization_explanation"
                  value={formData.prioritization_explanation}
                  onChange={onChange}
                  error={errors.prioritization_explanation}
                  maxLength={1000}
                  rows={4}
                  placeholder="Explain your prioritization rationale (100 words max)"
                />
              </div>
            </div>

            {/* Decision Analysis/Prototyping */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">Decision Analysis/Prototyping</h3>
              <InputField
                label="Scenario Response"
                type="textarea"
                name="scenario_response"
                value={formData.scenario_response}
                onChange={onChange}
                error={errors.scenario_response}
                maxLength={1500}
                rows={5}
                placeholder="Describe your approach to a complex product decision scenario (150 words max)"
                required
              />
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <InputField
              label={`Transformative Thinking: Complete this statement: "The future of personal AI isn't about _______, it's about _______"`}
              type="textarea"
              name="transformative_thinking"
              value={formData.transformative_thinking}
              onChange={onChange}
              error={errors.transformative_thinking}
              rows={3}
              required
            />
            
            <InputField
              label='User Sovereignty Philosophy: Define in 100 words: "Your data, your rules, your intelligence"'
              type="textarea"
              name="sovereignty_philosophy"
              value={formData.sovereignty_philosophy}
              onChange={onChange}
              error={errors.sovereignty_philosophy}
              maxLength={1000}
              rows={4}
              required
            />
            
            <InputField
              label="Competitive Differentiation: 100-word pitch: Why will MyVault succeed where others have failed?"
              type="textarea"
              name="competitive_differentiation"
              value={formData.competitive_differentiation}
              onChange={onChange}
              error={errors.competitive_differentiation}
              maxLength={1000}
              rows={4}
              required
            />
          </div>
        );

      case 5:
        return (
          <div className="space-y-8">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">30-Day Impact Plan</h3>
              <div className="space-y-4">
                <InputField
                  label="Top Deliverable #1"
                  name="impact_plan_1"
                  value={formData.impact_plan_1}
                  onChange={onChange}
                  error={errors.impact_plan_1}
                  required
                />
                <InputField
                  label="Top Deliverable #2"
                  name="impact_plan_2"
                  value={formData.impact_plan_2}
                  onChange={onChange}
                  error={errors.impact_plan_2}
                  required
                />
                <InputField
                  label="Top Deliverable #3"
                  name="impact_plan_3"
                  value={formData.impact_plan_3}
                  onChange={onChange}
                  error={errors.impact_plan_3}
                  required
                />
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">Critical Question Generation</h3>
              <div className="space-y-4">
                <InputField
                  label="Most Important Question for CEO/CTO #1"
                  name="critical_q1"
                  value={formData.critical_q1}
                  onChange={onChange}
                  error={errors.critical_q1}
                  required
                />
                <InputField
                  label="Most Important Question for CEO/CTO #2"
                  name="critical_q2"
                  value={formData.critical_q2}
                  onChange={onChange}
                  error={errors.critical_q2}
                  required
                />
                <InputField
                  label="Most Important Question for CEO/CTO #3"
                  name="critical_q3"
                  value={formData.critical_q3}
                  onChange={onChange}
                  error={errors.critical_q3}
                  required
                />
              </div>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField
                label="Current Employment Status"
                name="employment_status"
                value={formData.employment_status}
                onChange={onChange}
                error={errors.employment_status}
                required
              />
              <InputField
                label="Notice Period"
                name="notice_period"
                value={formData.notice_period}
                onChange={onChange}
                error={errors.notice_period}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField
                label="Available by July 15, 2025?"
                type="checkbox"
                name="available_by_july15"
                value={formData.available_by_july15}
                onChange={onChange}
                error={errors.available_by_july15}
              />
              <InputField
                label="Open to Contract-to-Hire?"
                type="checkbox"
                name="contract_to_hire"
                value={formData.contract_to_hire}
                onChange={onChange}
                error={errors.contract_to_hire}
              />
            </div>

            <InputField
              label="Compensation Alignment"
              type="select"
              name="comp_alignment"
              value={formData.comp_alignment}
              onChange={onChange}
              error={errors.comp_alignment}
              options={[
                { label: 'Aligns with my expectations', value: 'Aligns with my expectations' },
                { label: 'Would like to discuss further', value: 'Would like to discuss further' },
                { label: "Doesn't meet my requirements", value: "Doesn't meet my requirements" }
              ]}
              required
            />

            <InputField
              label="Remote Work Excellence (75 words)"
              type="textarea"
              name="remote_work_excellence"
              value={formData.remote_work_excellence}
              onChange={onChange}
              error={errors.remote_work_excellence}
              maxLength={750}
              rows={4}
              placeholder="Describe your remote/distributed work setup and success"
              required
            />
          </div>
        );

      case 7:
        return (
          <div className="space-y-6">
            <InputField
              label="Unique Edge: What makes you not just qualified, but uniquely positioned? (150 words)"
              type="textarea"
              name="unique_edge"
              value={formData.unique_edge}
              onChange={onChange}
              error={errors.unique_edge}
              maxLength={1500}
              rows={5}
              required
            />

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Links & Evidence (Optional)</h3>
              <InputField
                label="Evidence Link #1"
                type="url"
                name="evidence_link1"
                value={formData.evidence_link1}
                onChange={onChange}
                error={errors.evidence_link1}
                placeholder="https://..."
              />
              <InputField
                label="Evidence Link #2"
                type="url"
                name="evidence_link2"
                value={formData.evidence_link2}
                onChange={onChange}
                error={errors.evidence_link2}
                placeholder="https://..."
              />
              <InputField
                label="Evidence Link #3"
                type="url"
                name="evidence_link3"
                value={formData.evidence_link3}
                onChange={onChange}
                error={errors.evidence_link3}
                placeholder="https://..."
              />
            </div>
          </div>
        );

      case 8:
        return (
          <div className="space-y-6">
            <InputField
              label="Experience with Outsourced Teams"
              type="textarea"
              name="vendor_experience"
              value={formData.vendor_experience}
              onChange={onChange}
              error={errors.vendor_experience}
              rows={4}
              required
            />

            <InputField
              label="Vendor Metrics/Outputs to Monitor"
              type="textarea"
              name="vendor_metrics"
              value={formData.vendor_metrics}
              onChange={onChange}
              error={errors.vendor_metrics}
              rows={3}
              placeholder="What metrics do you track to ensure vendor performance?"
            />

            <InputField
              label="Escalation Experience with Outsourced Dev"
              type="textarea"
              name="vendor_escalation"
              value={formData.vendor_escalation}
              onChange={onChange}
              error={errors.vendor_escalation}
              rows={3}
              placeholder="Describe a time you had to escalate issues with an outsourced team"
            />
          </div>
        );

      case 9:
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <InputField
                label="All information provided is accurate and verifiable"
                type="checkbox"
                name="declaration_accurate"
                value={formData.declaration_accurate}
                onChange={onChange}
                error={errors.declaration_accurate}
                required
              />
              <InputField
                label="I am genuinely excited about AI sovereignty and MyVault's mission"
                type="checkbox"
                name="declaration_excited"
                value={formData.declaration_excited}
                onChange={onChange}
                error={errors.declaration_excited}
                required
              />
              <InputField
                label="I understand this role demands excellence and continuous learning"
                type="checkbox"
                name="declaration_understands_excellence"
                value={formData.declaration_understands_excellence}
                onChange={onChange}
                error={errors.declaration_understands_excellence}
                required
              />
              <InputField
                label="I am ready to be held accountable for measurable results"
                type="checkbox"
                name="declaration_accountable"
                value={formData.declaration_accountable}
                onChange={onChange}
                error={errors.declaration_accountable}
                required
              />
            </div>

            <InputField
              label="Digital Signature (Type your full name)"
              name="digital_signature"
              value={formData.digital_signature}
              onChange={onChange}
              error={errors.digital_signature}
              required
            />

            <div className="text-center text-gray-400 text-sm">
              <p>By submitting this application, you confirm that all information provided is accurate and complete.</p>
            </div>
          </div>
        );

      default:
        return <div>Section not found</div>;
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
        {description && (
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">{description}</p>
        )}
      </div>
      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        {renderSection()}
      </div>
    </div>
  );
};

interface InputFieldProps {
  label: string;
  type?: string;
  name: string;
  value: string | number | boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  error?: string;
  required?: boolean;
  placeholder?: string;
  maxLength?: number;
  rows?: number;
  options?: Array<{ label: string; value: string }>;
  min?: number;
  max?: number;
  step?: number;
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  error,
  required = false,
  placeholder,
  maxLength,
  rows,
  options,
  min,
  max,
  step
}) => {
  const baseClasses = "w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200";
  const errorClasses = error ? "border-red-500 ring-1 ring-red-500" : "";

  const renderInput = () => {
    if (type === "textarea") {
      return (
        <textarea
          name={name}
          value={value as string}
          onChange={onChange}
          placeholder={placeholder}
          maxLength={maxLength}
          rows={rows || 4}
          className={`${baseClasses} ${errorClasses} resize-none`}
          required={required}
        />
      );
    }

    if (type === "select") {
      return (
        <select
          name={name}
          value={value as string}
          onChange={onChange}
          className={`${baseClasses} ${errorClasses}`}
          required={required}
        >
          <option value="">Select an option</option>
          {options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      );
    }

    if (type === "checkbox") {
      return (
        <div className="flex items-center">
          <input
            type="checkbox"
            name={name}
            checked={value as boolean}
            onChange={onChange}
            className="w-5 h-5 text-purple-600 bg-gray-900 border-gray-600 rounded focus:ring-purple-500 focus:ring-2"
            required={required}
          />
          <label className="ml-3 text-gray-300">{label}</label>
        </div>
      );
    }

    return (
      <input
        type={type}
        name={name}
        value={value as string | number}
        onChange={onChange}
        placeholder={placeholder}
        maxLength={maxLength}
        min={min}
        max={max}
        step={step}
        className={`${baseClasses} ${errorClasses}`}
        required={required}
      />
    );
  };

  if (type === "checkbox") {
    return (
      <div className="space-y-1">
        {renderInput()}
        {error && <p className="text-red-400 text-sm">{error}</p>}
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-300">
        {label}
        {required && <span className="text-red-400 ml-1">*</span>}
      </label>
      {renderInput()}
      {maxLength && type === "textarea" && (
        <p className="text-xs text-gray-500 text-right">
          {(value as string).length}/{maxLength}
        </p>
      )}
      {error && <p className="text-red-400 text-sm">{error}</p>}
    </div>
  );
};

interface RatingFieldProps {
  label: string;
  name: string;
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
}

export const RatingField: React.FC<RatingFieldProps> = ({
  label,
  name,
  value,
  onChange,
  error,
  required = false
}) => {
  return (
    <div className="space-y-3">
      <label className="block text-sm font-medium text-gray-300">
        {label}
        {required && <span className="text-red-400 ml-1">*</span>}
      </label>
      <div className="flex items-center space-x-4">
        <span className="text-sm text-gray-400">1</span>
        <div className="flex-1">
          <input
            type="range"
            name={name}
            min="1"
            max="10"
            value={value}
            onChange={onChange}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
            required={required}
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
              <span key={num}>{num}</span>
            ))}
          </div>
        </div>
        <span className="text-sm text-gray-400">10</span>
        <div className="bg-purple-600 text-white px-3 py-1 rounded-lg font-semibold min-w-[3rem] text-center">
          {value}
        </div>
      </div>
      {error && <p className="text-red-400 text-sm">{error}</p>}
    </div>
  );
};