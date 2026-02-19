import { fibsRec } from "./fibsRec";

describe('fibsRec', () => {
  test('test fibonacci with 5', () => {
    expect(fibsRec(5)).toEqual([0,1,1,2,3]);
  });

  test.skip('test fibonacci with 12', () => {
    expect(fibsRec(12)).toEqual([0,1,1,2,3,5,8,13,21,34,55,89]);
  });

  test.skip('test fibonacci with 1', () => {
    expect(fibsRec(1)).toEqual([0]);
  });
});
