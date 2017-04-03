const { spy, match, assert } = require('sinon');

describe('When I pass an object with an error and another property to a spy', () => {
    const object = {
        err: new Error('WTF?'),
        foo: 'bar'
    };
    let mySpy;
    beforeEach(() => {
        mySpy = spy();
        mySpy(object);
    });
    describe('the spy', () => {
        it('is called with an object matching the foo property', () => assert.calledWith(mySpy, match({
            foo: 'bar'
        })));
        it('is called with an object matching the error', () => assert.calledWith(mySpy, match({
            err: new Error('WTF?')
        })));
    });
});
