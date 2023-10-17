import sayHello from '../utils/helloworld.mjs';
//to use 'assert', must install mocha. npm install mocha --save
import assert from 'assert';

it("Hello World", ()=>{
    
    const hello = sayHello();

    assert.equal(hello, "hello");

});