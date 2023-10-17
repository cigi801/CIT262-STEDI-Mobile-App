import {sayHello, userName} from '../utils/helloworld.mjs';
//to use 'assert', must install mocha. npm install mocha
import assert from 'assert';

it("Should say Hello", ()=>{
    const hello = sayHello();
    console.log(hello);
    assert.equal(hello, "Hello");

});

// Automated Unit Tests
it( "Should say Cigi", () => {
    const name = userName();
    console.log(name);
    expect(name).toBe("Cigi");
} );