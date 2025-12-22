-- Create a table for tool/integration requests
CREATE TABLE public.tool_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  tool_name TEXT NOT NULL,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.tool_requests ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (public form)
CREATE POLICY "Anyone can submit tool requests" 
ON public.tool_requests 
FOR INSERT 
WITH CHECK (true);

-- Only allow reading via service role (admin only)
CREATE POLICY "Service role can read tool requests" 
ON public.tool_requests 
FOR SELECT 
USING (false);