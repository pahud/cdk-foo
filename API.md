# API Reference

**Classes**

Name|Description
----|-----------
[Foo](#cdk-foo-foo)|*No description*


**Structs**

Name|Description
----|-----------
[FooProps](#cdk-foo-fooprops)|*No description*



## class Foo  <a id="cdk-foo-foo"></a>



__Implements__: [IConstruct](#constructs-iconstruct), [IConstruct](#aws-cdk-core-iconstruct), [IConstruct](#constructs-iconstruct), [IDependable](#aws-cdk-core-idependable)
__Extends__: [Construct](#aws-cdk-core-construct)

### Initializer




```ts
new Foo(scope: Construct, id: string, props?: FooProps)
```

* **scope** (<code>[Construct](#aws-cdk-core-construct)</code>)  *No description*
* **id** (<code>string</code>)  *No description*
* **props** (<code>[FooProps](#cdk-foo-fooprops)</code>)  *No description*
  * **vpc** (<code>[IVpc](#aws-cdk-aws-ec2-ivpc)</code>)  *No description* __*Optional*__



### Properties


Name | Type | Description 
-----|------|-------------
**endpointUri** | <code>string</code> | <span></span>



## struct FooProps  <a id="cdk-foo-fooprops"></a>






Name | Type | Description 
-----|------|-------------
**vpc**? | <code>[IVpc](#aws-cdk-aws-ec2-ivpc)</code> | __*Optional*__



