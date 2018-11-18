let fluture = require('fluture')
const Future = fluture.Future

const delay = () => {
  return new Promise((resolve, reject) => {
    return setTimeout(() => {
      return resolve('acabou')
    }, 2000)
  })
}

// delay().then(a => console.log(a))

Future(delay())
// Future.of('a').fork(console.log, console.log)
// Future.resolve(delay()).fork(console.log, console.log)
// Future.of(delay()).fork(console.log, console.log)
