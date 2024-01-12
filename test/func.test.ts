import hello from '../src/func'

describe('Basic tests', () => {
    test('hello should work', () => {
        expect(hello()).toEqual("hello");
    });
});
