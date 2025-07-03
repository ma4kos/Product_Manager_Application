/*
  # Fix RLS policy for candidate submissions

  1. Security Updates
    - Drop existing INSERT policy that may be misconfigured
    - Create new INSERT policy for anonymous users with proper permissions
    - Ensure anonymous users can submit applications without authentication

  2. Policy Details
    - Allow INSERT operations for 'anon' role (anonymous users)
    - No restrictions on data insertion for public form submissions
    - Maintain existing SELECT and UPDATE policies for authenticated users
*/

-- Drop the existing INSERT policy if it exists
DROP POLICY IF EXISTS "Anyone can submit applications" ON candidate_submissions;

-- Create a new INSERT policy that explicitly allows anonymous submissions
CREATE POLICY "Allow anonymous submissions"
  ON candidate_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Ensure the table has RLS enabled (should already be enabled)
ALTER TABLE candidate_submissions ENABLE ROW LEVEL SECURITY;