# HelloWorld

This project demonstrates an IntelliJ Bug: When you run the "Find Usages" feature on the Observable `abc$` in the `Hello1Service`, the usage in the `Hello1ContainerComponent` is not found. But the usage of the Observable `abc` in the same service and component is recognised.

In the folder `hello2` wen can see that the usage of the `abcTwo$` Observable in the `Hello2Service` is recognised (it is used in the `hello2.component.html` file).

What can be observed is that the usage of an observable is not recognised when the observable is used in an Angular inline-template and when the name of the variable ends with a dollar-sign.

In our company we work with the container-component pattern (also known as smart/dumb or impure/pure components pattern). All our container components are single-file components, i.e. they use an inline template. We use the widespread naming convention that observable variable names need to end with a dollar sign. Thus in the whole project we suffer from the fact that the observable usages are not recognised in the containers.
