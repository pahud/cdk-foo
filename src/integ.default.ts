import * as cdk from '@aws-cdk/core';
import * as foo from './index';

export class IntegTesting {
  readonly stack: cdk.Stack[];

  constructor() {
    const app = new cdk.App();

    const env = {
      region: process.env.CDK_DEFAULT_REGION,
      account: process.env.CDK_DEFAULT_ACCOUNT,
    };

    const stack = new cdk.Stack(app, 'my-demo-stack', { env });

    const myFoo = new foo.Foo(stack, 'MyFoo');

    new cdk.CfnOutput(stack, 'EndpointURI', { value: myFoo.endpointUri });
    this.stack = [stack];
  }
}

new IntegTesting();


