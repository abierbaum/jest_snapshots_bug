import 'reflect-metadata';

export function decTest(selector: string): Function {
   return function testDec(proto: Function, name: string): void {
      console.log('testing: ', proto.constructor.name, name, selector);
   };
}

class TestClass {
   @decTest('testing') value: string = '';
}
const inst = new TestClass();

test('snaps', () => {
   expect('value').toMatchInlineSnapshot(`"value"`);
})
