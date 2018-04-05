var user = {
  firstName: 'foo',
  lastName: 'bar',
  get name () {
    return this.firstName + ' ' + this.lastName
  },
  set name (name) {
    name = name.split(' ')
    this.firstName = name[0]
    this.lastName = name[1]
  }
}

console.log(user.name)

user.name = 'baz qux'
console.log(user.name)