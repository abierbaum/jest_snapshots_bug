
export function decTest(selector) {
   return function testDec(proto, name) {
      console.log('testing: ', proto.constructor.name, name, selector);
   };
}

class TestClass {
   @decTest('testing') value = '';
}
const inst = new TestClass();

test('snaps', () => {
   expect('value').toMatchInlineSnapshot(`"value"`);
})
