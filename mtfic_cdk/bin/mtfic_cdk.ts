import * as cdk from 'aws-cdk-lib';

import { S3BucketStack } from '../lib/s3-bucket-test-stack';

const app = new cdk.App();

// Creating an S3 bucket stack
new S3BucketStack(app, 'mtficBucketStack');

