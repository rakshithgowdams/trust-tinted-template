/*
  # Create admin authentication tables

  ## Summary
  Adds OTP-based admin login support. Two new tables store short-lived
  one-time passwords and session tokens that are validated entirely
  through edge functions using the service-role key — no direct client
  access is ever needed.

  ## New Tables

  ### admin_otps
  - `id` (uuid, PK) — unique identifier
  - `otp_hash` (text) — SHA-256 hash of the 6-digit OTP (never stored in plain text)
  - `expires_at` (timestamptz) — OTP becomes invalid after this time (10 min)
  - `used` (boolean) — true once the OTP has been consumed
  - `created_at` (timestamptz) — creation timestamp

  ### admin_sessions
  - `id` (uuid, PK) — unique identifier
  - `token_hash` (text, UNIQUE) — SHA-256 hash of the session token
  - `expires_at` (timestamptz) — session becomes invalid after 24 hours
  - `created_at` (timestamptz) — creation timestamp

  ## Security
  - RLS enabled on both tables
  - No public policies — tables are only accessible via the service-role key
    from edge functions; direct anon/authenticated client access is blocked
*/

CREATE TABLE IF NOT EXISTS admin_otps (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  otp_hash text NOT NULL,
  expires_at timestamptz NOT NULL,
  used boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE admin_otps ENABLE ROW LEVEL SECURITY;

CREATE TABLE IF NOT EXISTS admin_sessions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  token_hash text NOT NULL UNIQUE,
  expires_at timestamptz NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE admin_sessions ENABLE ROW LEVEL SECURITY;
