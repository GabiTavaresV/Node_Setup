import { User } from '@models/User'

test('it should be OK', () => {
  const user = new User()

  user.name = 'gabi'

  expect(user.name)
})
function expect (_name: string) {
  throw new Error('Function not implemented.')
}
