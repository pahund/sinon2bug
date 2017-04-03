# sinon2bug

This little demo app shows a bug in Sinon 2. Using match to determine if a spy has been called
with an object that has a property with an error object as value does not work. 

    npm install
    npm test

Console output:

```
When I pass an object with an error and another property to a spy
    the spy
        ✓ is called with an object matching the foo property
        1) is called with an object matching the error

1 passing (12ms)
1 failing

1) When I pass an object with an error and another property to a spy the spy is called with an object matching the error:
   AssertError: expected spy to be called with arguments
{ err: Error: WTF?, foo: "bar" } match(err: Error: WTF?)
    at Object.fail (node_modules/sinon/lib/sinon/assert.js:96:21)
    at failAssertion (node_modules/sinon/lib/sinon/assert.js:55:16)
    at Object.assert.(anonymous function) [as calledWith] (node_modules/sinon/lib/sinon/assert.js:80:13)
    at Context.it (test/test.js:17:72)
```

If you checkout the branch `sinon1`, which uses the old sinon module, both tests will succeed.

