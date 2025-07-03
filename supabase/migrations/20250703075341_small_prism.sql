/*
  # Fix RLS policy for anonymous submissions

  1. Security Updates
    - Drop existing INSERT policy that may be incorrectly configured
    - Create new INSERT policy that properly allows anonymous submissions
    - Ensure the policy condition is correctly set to allow all anonymous inserts

  2. Policy Details
    - Allow anonymous (anon) role to insert candidate submissions
    - No restrictions on the insert operation for anonymous users
    - Maintains security while enabling public form submissions
*/

-- Drop the existing INSERT policy if it exists
DROP POLICY IF EXISTS "Allow anonymous submissions" ON candidate_submissions;

-- Create a new INSERT policy that properly allows anonymous submissions
CREATE POLICY "Enable anonymous submissions"
  ON candidate_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Ensure the table has RLS enabled (should already be enabled)
ALTER TABLE candidate_submissions ENABLE ROW LEVEL SECURITY;