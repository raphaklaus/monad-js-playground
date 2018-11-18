import { Maybe } from 'monet'

class User {
  constructor (
    public name: string,
    public age: number,
    public info?: { // just say its optional, it gives no clue about possible exceptions
      city: string
    }
  ) { }
}

const user1 = new User('Raphael', 28)

const user2 = new User('John', 32, {
  city: 'Rio'
})

// const getCity = (user: User) => { // problem! exception! lint says: possible undefined, forcing to put an if
//   return user.info.city
// }

const getCityV2 = (user: any) => {
  if (!user && !user.info && !user.info.city) {
    return 'City not found'
  }

  return user.info.city

  // if (user && user.info) { // problem! if-ish coding
  // } else if (!user.info) {
  // }
}

const getCityV3 = (user: any): string => {
  return Maybe.fromNull(user)
    .flatMap(x => Maybe.fromNull(x.info))
    .flatMap(x => Maybe.fromNull(x.city))
    .orSome('No city found')
}

console.log(getCityV3(user1))

// console.log(getCityV2(user1))

// console.log(getCity(user1))

// get users
// get plans
// map plans(user)
