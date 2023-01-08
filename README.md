# mtfic_test_app

## Useful commands
        cdk deploy - deploy this stack to your default AWS account/region
        cdk diff - compare deployed stack with current state
        cdk synth - emits the synthesized CloudFormation template

## Docker commands
        docker-compose up --build
        docker-compose down

Directory ./code : Contains Django code & dockerfiles

Directory ./mtfic_cdk: Contains IaC using cdk typescript


## Future work/ Alterations that can be done
* Instead of using ApplicationLoadBalancedFargateService construct, we could modularize with different resource constructs such as vpc, ECS stack, security groups for increased flexibility
* health checks - https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_elasticloadbalancingv2.HealthCheck.html
        Still checking the reason why it's unavailable

        ** https://github.com/aws/aws-cdk/issues/2359
        const server = new ApplicationLoadBalancedFargateService(...)
        server.targetGroup.configureHealthCheck({
              path: "/health",
              interval: Duration.seconds(120),
              unhealthyThresholdCount: 5,
              ... etc
        }); 

* python venv when building
* SSL enable
* Integrate OpenID connect to github actions to authenticate
