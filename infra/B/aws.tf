terraform {
  required_version = "1.3.7"
}

provider "aws" {
  profile = "default"
  region  = "ap-northeast-1"
}