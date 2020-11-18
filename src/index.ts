import * as ec2 from '@aws-cdk/aws-ec2';
import * as ecs from '@aws-cdk/aws-ecs';
import * as patterns from '@aws-cdk/aws-ecs-patterns';
import * as cdk from '@aws-cdk/core';


export interface FooProps {
  readonly vpc?: ec2.IVpc;
}

export class Foo extends cdk.Construct {
  readonly endpointUri: string;
  constructor(scope: cdk.Construct, id: string, props: FooProps = {}) {
    super(scope, id);

    const vpc = props.vpc ?? this._createVpc();
    const cluster = new ecs.Cluster(this, 'Cluster', { vpc });
    const task = new ecs.FargateTaskDefinition(this, 'Task', {
      cpu: 256,
      memoryLimitMiB: 512,
    });
    task.addContainer('Flask', {
      image: ecs.ContainerImage.fromRegistry('pahud/flask-docker-sample:latest'),
    }).addPortMappings({ containerPort: 80 });

    const svc = new patterns.ApplicationLoadBalancedFargateService(this, 'Service', {
      cluster,
      taskDefinition: task,
    });

    this.endpointUri = `http://${svc.loadBalancer.loadBalancerDnsName}`;
  }

  private _createVpc(): ec2.Vpc {
    return new ec2.Vpc(this, 'Vpc', { natGateways: 1 });
  }
}


