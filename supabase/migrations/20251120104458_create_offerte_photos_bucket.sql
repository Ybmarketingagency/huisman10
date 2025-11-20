/*
  # Create storage bucket for offerte photos

  1. Bucket Creation
    - Creates a public bucket named 'offerte-photos' for storing uploaded floor plans and photos
    - Public access enabled so URLs can be easily shared in emails
    - File size limit set to 10MB
    - Allowed MIME types: images (JPEG, PNG, WEBP) and PDFs

  2. Security
    - Enable RLS on storage.objects
    - Allow authenticated and anonymous users to insert photos
    - Allow public read access to all photos
*/

-- Create the bucket for offerte photos
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'offerte-photos',
  'offerte-photos',
  true,
  10485760, -- 10MB in bytes
  ARRAY['image/jpeg', 'image/png', 'image/webp', 'application/pdf']
)
ON CONFLICT (id) DO NOTHING;

-- Allow anyone to upload photos
CREATE POLICY "Anyone can upload offerte photos"
  ON storage.objects FOR INSERT
  WITH CHECK (bucket_id = 'offerte-photos');

-- Allow public read access to all photos
CREATE POLICY "Public read access to offerte photos"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'offerte-photos');