import * as cdk from 'aws-cdk-lib';
import * as ec2 from "aws-cdk-lib/aws-ec2";
import * as ecs from "aws-cdk-lib/aws-ecs";
import * as ecs_patterns from "aws-cdk-lib/aws-ecs-patterns";
import { Construct } from 'constructs';

// import { S3BucketStack } from '../lib/s3-bucket-test-stack';

const app = new cdk.App();

// // Creating an S3 bucket stack
// new S3BucketStack(app, 'mtficBucketStack');



declare const cluster: ecs.Cluster;
const loadBalancedFargateService = new ecs_patterns.ApplicationMultipleTargetGroupsFargateService(app, 'Service', {
  cluster,
  memoryLimitMiB: 1024,
  cpu: 512,
  taskImageOptions: {
    image: ecs.ContainerImage.fromRegistry("amazon/amazon-ecs-sample"),
  },
  targetGroups: [
    {
      containerPort: 80,
    },
    {
      containerPort: 90,
      pathPattern: '/rabbits',
      priority: 10,
    },
  ],
});