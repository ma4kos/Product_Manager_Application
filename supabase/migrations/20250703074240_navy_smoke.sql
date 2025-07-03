/*
  # Create candidate submissions table

  1. New Tables
    - `candidate_submissions`
      - `id` (uuid, primary key)
      - `full_name` (text)
      - `email` (text)
      - All form fields matching the screening form
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `candidate_submissions` table
    - Add policy for public insert (since this is a public form)
    - Add policy for authenticated admin access to read submissions
*/

CREATE TABLE IF NOT EXISTS candidate_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  
  -- Personal Information
  full_name text NOT NULL,
  email text NOT NULL,
  
  -- Section 1: Excellence & Accountability
  role1_company text,
  role1_title text,
  role1_duration text,
  role1_scope text,
  role1_rating integer DEFAULT 1,
  role1_supervisor text,
  
  role2_company text,
  role2_title text,
  role2_duration text,
  role2_scope text,
  role2_rating integer DEFAULT 1,
  role2_supervisor text,
  
  role3_company text,
  role3_title text,
  role3_duration text,
  role3_scope text,
  role3_rating integer DEFAULT 1,
  role3_supervisor text,
  
  reference_check_consent text,
  reference_check_explanation text,
  
  -- Section 2: Technical & Domain Expertise
  ai_arch_rating integer DEFAULT 1,
  ai_arch_recent_experience text,
  ai_arch_models_frameworks text,
  
  b2c_growth_rating integer DEFAULT 1,
  b2c_growth_best_achievement text,
  b2c_growth_largest_userbase text,
  
  mobile_rating integer DEFAULT 1,
  mobile_apps_launched integer DEFAULT 0,
  mobile_downloads text,
  
  privacy_rating integer DEFAULT 1,
  privacy_challenge text,
  privacy_compliance_experience text,
  
  -- Section 3: Execution & Impact
  beta_product text,
  beta_company text,
  beta_participants integer DEFAULT 0,
  beta_metrics text,
  beta_pivot text,
  beta_involvement text,
  
  prioritization_privacy integer DEFAULT 0,
  prioritization_ai integer DEFAULT 0,
  prioritization_ux integer DEFAULT 0,
  prioritization_growth integer DEFAULT 0,
  prioritization_revenue integer DEFAULT 0,
  prioritization_explanation text,
  
  scenario_response text,
  
  -- Section 4: Vision Alignment
  transformative_thinking text,
  sovereignty_philosophy text,
  competitive_differentiation text,
  
  -- Section 5: Practical Assessment
  impact_plan_1 text,
  impact_plan_2 text,
  impact_plan_3 text,
  critical_q1 text,
  critical_q2 text,
  critical_q3 text,
  
  -- Section 6: Logistics & Commitment
  employment_status text,
  notice_period text,
  available_by_july15 boolean DEFAULT false,
  contract_to_hire boolean DEFAULT false,
  comp_alignment text,
  remote_work_excellence text,
  
  -- Section 7: The Differentiator
  unique_edge text,
  evidence_link1 text,
  evidence_link2 text,
  evidence_link3 text,
  
  -- Section 8: Vendor Management
  vendor_experience text,
  vendor_metrics text,
  vendor_escalation text,
  
  -- Section 9: Final Declaration
  declaration_accurate boolean DEFAULT false,
  declaration_excited boolean DEFAULT false,
  declaration_understands_excellence boolean DEFAULT false,
  declaration_accountable boolean DEFAULT false,
  digital_signature text,
  
  -- Metadata
  submission_date timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE candidate_submissions ENABLE ROW LEVEL SECURITY;

-- Policy for public submissions (anyone can insert)
CREATE POLICY "Anyone can submit applications"
  ON candidate_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Policy for authenticated users to read all submissions (for admin access)
CREATE POLICY "Authenticated users can read all submissions"
  ON candidate_submissions
  FOR SELECT
  TO authenticated
  USING (true);

-- Policy for authenticated users to update submissions (for admin purposes)
CREATE POLICY "Authenticated users can update submissions"
  ON candidate_submissions
  FOR UPDATE
  TO authenticated
  USING (true);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_candidate_submissions_email ON candidate_submissions(email);
CREATE INDEX IF NOT EXISTS idx_candidate_submissions_created_at ON candidate_submissions(created_at);
CREATE INDEX IF NOT EXISTS idx_candidate_submissions_full_name ON candidate_submissions(full_name);

-- Function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger to automatically update updated_at
CREATE TRIGGER update_candidate_submissions_updated_at
  BEFORE UPDATE ON candidate_submissions
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();