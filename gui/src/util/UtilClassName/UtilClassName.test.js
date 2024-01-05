import '@testing-library/jest-dom'
import { bemWithExtraClass } from './UtilClassName'

test('bemWithExtraClass() without extraClass', () => {
  expect(bemWithExtraClass({ bemBase: 'test' })).toEqual('test')
})

test('bemWithExtraClass() extraClass is provided', () => {
  expect(bemWithExtraClass({ bemBase: 'test', extraClass: 'new-class' })).toEqual('test test--new-class')
})

test('bemWithExtraClass() extraClass is empty string', () => {
  expect(bemWithExtraClass({ bemBase: 'test', extraClass: '' })).toEqual('test')
})
