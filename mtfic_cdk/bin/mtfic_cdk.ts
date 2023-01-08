import * as cdk from 'aws-cdk-lib';

import { MtficEcsStack } from '../lib/ecs-stack';

const app = new cdk.App();

// new MtficEcsStack(app, 'mtficECSStack');


const loadBalancedFargateService = new MtficEcsStack(app, 'mtficECSStack');
