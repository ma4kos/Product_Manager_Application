/*
  # Fix RLS policy for anonymous submissions

  1. Security Changes
    - Drop existing INSERT policy that was missing proper syntax
    - Create new INSERT policy with correct PostgreSQL syntax (INSERT policies only use WITH CHECK, not USING)
    - Ensure RLS is enabled on candidate_submissions table

  The error occurred because INSERT policies in PostgreSQL only accept WITH CHECK expressions, not USING expressions.
  USING is for SELECT, UPDATE, and DELETE operations, while WITH CHECK is for INSERT and UPDATE operations.
*/

-- Drop the existing INSERT policy if it exists
DROP POLICY IF EXISTS "Enable anonymous submissions" ON candidate_submissions;

-- Create a new INSERT policy with only WITH CHECK clause (correct syntax for INSERT)
CREATE POLICY "Enable anonymous submissions"
  ON candidate_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Ensure the table has RLS enabled
ALTER TABLE candidate_submissions ENABLE ROW LEVEL SECURITY;