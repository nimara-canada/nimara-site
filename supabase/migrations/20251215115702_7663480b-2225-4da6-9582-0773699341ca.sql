-- Create a table for resource waitlist signups
CREATE TABLE public.resource_waitlist (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  source TEXT DEFAULT 'resources_page'
);

-- Enable RLS
ALTER TABLE public.resource_waitlist ENABLE ROW LEVEL SECURITY;

-- Allow inserts from anyone (public signup form)
CREATE POLICY "Anyone can subscribe to waitlist"
ON public.resource_waitlist
FOR INSERT
WITH CHECK (true);

-- Only service role can read (for admin/export purposes)
CREATE POLICY "Service role can read waitlist"
ON public.resource_waitlist
FOR SELECT
USING (false);

-- Create index on email for faster lookups
CREATE INDEX idx_resource_waitlist_email ON public.resource_waitlist (email);