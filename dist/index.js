"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var monet_1 = require("monet");
var User = /** @class */ (function () {
    function User(name, age, info) {
        this.name = name;
        this.age = age;
        this.info = info;
    }
    return User;
}());
var user1 = new User('Raphael', 28);
var user2 = new User('John', 32, {
    city: 'Rio'
});
// const getCity = (user: User) => { // problem! exception! lint says: possible undefined, forcing to put an if
//   return user.info.city
// }
var getCityV2 = function (user) {
    if (!user && !user.info && !user.info.city) {
        return 'City not found';
    }
    return user.info.city;
    // if (user && user.info) { // problem! if-ish coding
    // } else if (!user.info) {
    // }
};
var getCityV3 = function (user) {
    return monet_1.Maybe.fromNull(user)
        .flatMap(function (x) { return monet_1.Maybe.fromNull(x.info); })
        .flatMap(function (x) { return monet_1.Maybe.fromNull(x.city); })
        .orSome('No city found!!');
};
console.log('show');
console.log(getCityV3(user1));
// console.log(getCityV2(user1))
// console.log(getCity(user1))
// get users
// get plans
// map plans(user)
