import _ from 'lodash'

import { spaceVer, sr, ar } from '../src/rnStyle';

test('module test', () => {
  // expect(spaceVer(700, 360)).toBe(10);
  expect(33).toBe(33);
});


// test('Immutable test', () => {
//   console.log('Immutable test ..... log __________  __________  __________');
//   const ini = {
//     first: { inside: 'first', arr: ['array', 3, { key: 'obj' }] },
//     second: 'second object is string',
//   };
//   const stt2 = update(ini, { first: { inside: { $set: 'changed' } } });
//   // console.log(stt2);
//   expect(stt2).toEqual({ ...ini, first: { ...ini.first, inside: 'changed' } });

//   const stt3 = update(ini, { first: { arr: { $push: [4] } } });
//   expect(stt3).toEqual({ ...ini, first: { ...ini.first,
//     arr: ['array', 3, { key: 'obj' }, 4] } });
// });

// test('Splice test', () => {
//   console.log('Immutable splice test ..... log __________  __________  __________');
//   const ini = {
//     arr: [1, 2, 3, 4, 5],
//   };
//   const stt2 = update(ini, { arr: { $splice: [[1, 2, 'a', 'b']] } });
//   // console.log(stt2);
//   expect(stt2).toEqual({ arr: [1, 'a', 'b', 4, 5] });
// });

// test('Merge test', () => {
//   // console.log('Immutable Merge 기존 값 대체, merge __________  __________  __________');
//   const ini = { a: 0, b: 11 };
//   const stt2 = update(ini, { $merge: { b: 33, c: 99, d: 'end' } });
//   // console.log(stt2);
//   expect(stt2).toEqual({ a: 0, b: 33, c: 99, d: 'end' });
// });
