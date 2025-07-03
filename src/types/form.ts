export interface FormData {
  // Personal Info
  fullName: string;
  email: string;
  
  // Section 1: Excellence & Accountability
  role1_company: string;
  role1_title: string;
  role1_duration: string;
  role1_rating: number;
  role1_supervisor: string;
  role1_scope: string;
  
  role2_company: string;
  role2_title: string;
  role2_duration: string;
  role2_scope: string;
  role2_rating: number;
  role2_supervisor: string;
  
  role3_company: string;
  role3_title: string;
  role3_duration: string;
  role3_rating: number;
  role3_supervisor: string;
  role3_scope: string;
  
  reference_check_consent: string;
  reference_check_explanation: string;
  
  // Section 2: Technical & Domain Expertise
  ai_arch_rating: number;
  ai_arch_recent_experience: string;
  ai_arch_models_frameworks: string;
  
  b2c_growth_rating: number;
  b2c_growth_best_achievement: string;
  b2c_growth_largest_userbase: string;
  
  mobile_rating: number;
  mobile_apps_launched: number;
  mobile_downloads: string;
  
  privacy_rating: number;
  privacy_challenge: string;
  privacy_compliance_experience: string;
  
  // Section 3: Execution & Impact
  beta_product: string;
  beta_company: string;
  beta_participants: number;
  beta_metrics: string;
  beta_pivot: string;
  beta_involvement: string;
  
  prioritization_privacy: number;
  prioritization_ai: number;
  prioritization_ux: number;
  prioritization_growth: number;
  prioritization_revenue: number;
  prioritization_explanation: string;
  
  scenario_response: string;
  
  // Section 4: Vision Alignment
  transformative_thinking: string;
  sovereignty_philosophy: string;
  competitive_differentiation: string;
  
  // Section 5: Practical Assessment
  impact_plan_1: string;
  impact_plan_2: string;
  impact_plan_3: string;
  critical_q1: string;
  critical_q2: string;
  critical_q3: string;
  
  // Section 6: Logistics & Commitment
  employment_status: string;
  notice_period: string;
  available_by_july15: boolean;
  contract_to_hire: boolean;
  comp_alignment: string;
  remote_work_excellence: string;
  
  // Section 7: The Differentiator
  unique_edge: string;
  evidence_link1: string;
  evidence_link2: string;
  evidence_link3: string;
  
  // Section 8: Vendor Management
  vendor_experience: string;
  vendor_metrics: string;
  vendor_escalation: string;
  
  // Final Declaration
  declaration_accurate: boolean;
  declaration_excited: boolean;
  declaration_understands_excellence: boolean;
  declaration_accountable: boolean;
  digital_signature: string;
  submission_date: string;
  
  // Additional fields for Zapier integration
  email_for_notification: string;
}

export interface FormErrors {
  [key: string]: string;
}

export interface SectionInfo {
  id: number;
  title: string;
  description: string;
  fields: string[];
}