const timer = (number, callback) => {
    setTimeout(() => {
        callback(number * 2)
    }, 1000)
}

timer(100, number => {
    timer(number, number => {
        timer(number, number => {
            timer(number, number => {
                timer(number, number => {
                    console.log(number)
                })
            })
        })
    })
})