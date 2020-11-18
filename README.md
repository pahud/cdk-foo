# cdk-foo

A demo CDK construct library built with Projen.

# Sample

```ts
const app = new cdk.App();

const stack = new cdk.Stack(app, 'my-demo-stack');

const myFoo = new foo.Foo(stack, 'MyFoo');

new cdk.CfnOutput(stack, 'EndpointURI', { value: myFoo.endpointUri });
```

