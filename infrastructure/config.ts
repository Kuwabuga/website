export const AWS_REGION = process.env.AWS_REGION || "us-east-1";
export const AWS_TERRAFORM_BUCKET = process.env.AWS_TERRAFORM_BUCKET;
export const ENVIRONMENT = process.env.ENVIRONMENT || "development";
export const SERVICE_NAME = process.env.SERVICE_NAME;
export const IS_PRODUCTION = ENVIRONMENT == "production" || ENVIRONMENT == "prod";

export const DEFAULTS = {
  comment: "Managed by Terraform CDK",
  tags: undefined
};

export const BACKEND = {
  bucket: AWS_TERRAFORM_BUCKET,
  baseKey: `${ENVIRONMENT}/${SERVICE_NAME}`,
  region: AWS_REGION,
  acl: "bucket-owner-full-control"
};

const config: { [index: string]: { subdomain: string, domain: string }; } = {
  "development": {
    subdomain: "development",
    domain: "kuwabuga.com"
  },
  "production": {
    subdomain: "www",
    domain: "kuwabuga.com"
  }
};

export const subdomain = config[ENVIRONMENT].subdomain;
export const domain = config[ENVIRONMENT].domain;