import diff from '../diff';

test('check diff for adding character', () => {
  expect(diff()).toBe(1);
});
