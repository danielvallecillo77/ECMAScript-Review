


const greeting = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Hello world!'), 2000)
            : reject(new Error('Something was wrong!'))
    });
}

const greatingAsync = async () => {  
    try {
        const res = await greeting()
        console.log(res)
    } catch (error) {
        console.log(error)
    }
}
greatingAsync()





