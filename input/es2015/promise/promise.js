// Promise
const timer = number => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(number * 2)
        }, 1000)
    })
}

timer(100)
    .then(timer)
    .then(timer)
    .then(timer)
    .then(timer)
    .then(value => {
        console.log(value)
    })