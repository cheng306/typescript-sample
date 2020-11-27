function f(a,b) {
    console.log("f(): evaluated");
    // return function (
    //   target,
    //   propertyKey: string,
    //   descriptor: PropertyDescriptor
    // ) {
    //   console.log("f(): called");
    // };
  }
  
  function g(a,b) {
    console.log("g(): evaluated");
    // return function (
    //   target,
    //   propertyKey: string,
    //   descriptor: PropertyDescriptor
    // ) {
    //   console.log("g(): called");
    // };
  }
  
  class C {
    @f
    @g
    method() {}
  }