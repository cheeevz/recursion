import { fibs } from "./fibs";

describe('fibs', () => {
  test('test fibonacci with 5', () => {
    expect(fibs(5)).toEqual([0,1,1,2,3]);
  });

  test('test fibonacci with 12', () => {
    expect(fibs(12)).toEqual([0,1,1,2,3,5,8,13,21,34,55,89]);
  });

  test('test fibonacci with 1', () => {
    expect(fibs(1)).toEqual([0]);
  });
});

