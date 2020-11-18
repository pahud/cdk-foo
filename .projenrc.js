const { AwsCdkConstructLibrary } = require('projen');

const project = new AwsCdkConstructLibrary({
  authorAddress: "pahudnet@gmail.com",
  authorName: "Pahud",
  cdkVersion: "1.73.0",
  name: "cdk-foo",
  repository: "https://github.com/pahudnet/cdk-foo.git",
  cdkDependencies: [
    '@aws-cdk/core',
    '@aws-cdk/aws-ec2',
    '@aws-cdk/aws-ecs',
    '@aws-cdk/aws-ecs-patterns',
  ],
  releaseBranches: ['main'],
  python: {
    distName: 'cdk-foo',
    module: 'cdk_foo',
  },
});


const common_exclude = ['cdk.out', 'cdk.context.json', 'yarn-error.log'];
project.npmignore.exclude(...common_exclude, 'bin', '.devcontainer');
project.gitignore.exclude(...common_exclude);


project.synth();
