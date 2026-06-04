/*
  # Create enquiries table

  ## Summary
  Stores all contact form submissions from the RS Medical website.

  ## New Tables
  - `enquiries`
    - `id` (uuid, primary key) - unique identifier
    - `name` (text) - sender's full name
    - `email` (text) - sender's email address
    - `phone` (text) - sender's phone number
    - `message` (text) - enquiry message body
    - `created_at` (timestamptz) - submission timestamp

  ## Security
  - RLS enabled — table is locked down by default
  - INSERT policy: allows anonymous users to submit enquiries (public contact form)
  - SELECT policy: restricted to authenticated (admin) users only
*/

CREATE TABLE IF NOT EXISTS enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE enquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit an enquiry"
  ON enquiries
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view enquiries"
  ON enquiries
  FOR SELECT
  TO authenticated
  USING (true);
