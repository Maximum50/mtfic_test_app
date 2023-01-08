import * as cdk from 'aws-cdk-lib';

// import { S3BucketStack } from '../lib/s3-bucket-test-stack';

import { MtficEcsStack } from '../lib/ecs-stack';

const app = new cdk.App();

// // Creating an S3 bucket stack
// new S3BucketStack(app, 'mtficBucketStack');

// new MtficEcsStack(app, 'mtficECSStack');


const loadBalancedFargateService = new MtficEcsStack(app, 'mtficECSStack');
