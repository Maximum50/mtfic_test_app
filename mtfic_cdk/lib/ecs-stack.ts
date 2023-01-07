import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as ecs from 'aws-cdk-lib/aws-ecs';
import * as ecsp from 'aws-cdk-lib/aws-ecs-patterns';


export class MtficEcsStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new ecsp.ApplicationLoadBalancedFargateService(this, 'MtficDjangoApp', {
      cpu: 256,
      desiredCount: 1,      
      taskImageOptions: {
        // image: ecs.ContainerImage.fromRegistry('amazon/amazon-ecs-sample'),
        image: ecs.ContainerImage.fromAsset("../code/"),
        containerPort: 8000,   
      },
      publicLoadBalancer: true
    }); 
  }
}