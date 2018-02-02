import path from 'path';
import apply from '../apply';
import loadExpects from './_util';

const expects = loadExpects(path.join(__dirname, 'fixture'));

test('apply difference to add character', () => {
  expect(apply(expects.asis.typeCharacter, {
    from: {
      row: 1,
      col: 4,
    },
    to: {
      row: 1,
      col: 4,
    },
    text: 'a',
  })).toBe(expects.tobe.typeCharacter);
});

test('apply difference to add linebreak', () => {
  expect(apply(expects.asis.linebreak, {
    from: {
      row: 1,
      col: 3,
    },
    to: {
      row: 1,
      col: 3,
    },
    text: '\n',
  })).toBe(expects.tobe.linebreak);
});

test('apply difference to add two linebreak', () => {
  expect(apply(expects.asis.twoLinebreak, {
    from: {
      row: 1,
      col: 3,
    },
    to: {
      row: 1,
      col: 3,
    },
    text: '\n\n',
  })).toBe(expects.tobe.twoLinebreak);
});

test('apply difference to add words include linebreak', () => {
  expect(apply(expects.asis.pasteToAddWords, {
    from: {
      row: 0,
      col: 3,
    },
    to: {
      row: 0,
      col: 3,
    },
    text: 'aaaa\nbbb',
  })).toBe(expects.tobe.pasteToAddWords);
});

test('apply difference to replace words include linebreak', () => {
  expect(apply(expects.asis.pasteToReplace, {
    from: {
      row: 0,
      col: 0,
    },
    to: {
      row: 1,
      col: 1,
    },
    text: 'aaaa\nbbb',
  })).toBe(expects.tobe.pasteToReplace);
});

test('apply difference to replace words include two linebreak', () => {
  expect(apply(expects.asis.pasteToReplaceTwoLB, {
    from: {
      row: 1,
      col: 1,
    },
    to: {
      row: 3,
      col: 3,
    },
    text: 'aaaa\nbbb',
  })).toBe(expects.tobe.pasteToReplaceTwoLB);
});

test('apply difference to delete character', () => {
  expect(apply(expects.asis.deleteCharacter, {
    from: {
      row: 0,
      col: 1,
    },
    to: {
      row: 0,
      col: 2,
    },
    text: '',
  })).toBe(expects.tobe.deleteCharacter);
});

test('apply difference to delete line', () => {
  expect(apply(expects.asis.deleteLine, {
    from: {
      row: 0,
      col: 0,
    },
    to: {
      row: 1,
      col: 0,
    },
    text: '',
  })).toBe(expects.tobe.deleteLine);
});
