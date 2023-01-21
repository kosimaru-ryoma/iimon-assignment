resource "aws_s3_bucket" "sample" {
  bucket = "sample-buket-iimon-20230122"
}

resource "aws_s3_bucket_acl" "sample" {
  bucket = aws_s3_bucket.sample.id
  acl    = "private"
}

resource "aws_s3_object" "upload" {
  bucket = aws_s3_bucket.sample.id
  key    = "sample.txt"
  source = "sample.txt"
}