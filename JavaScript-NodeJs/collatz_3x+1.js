/**
 * Hello world! This is a simple function to show how the 3x+1 conjecture works. (not to prove anything at all).
 * inspired by @Veritasium https://www.youtube.com/watch?v=094y1Z2wpJg  
 */

function collatz(n) {
    let resp = n
    let last = n.slice(-1)[0]
    if (JSON.stringify(resp.slice(-3)) !== JSON.stringify([4, 2, 1])) {
        if (last % 2 === 0) {
            resp.push(last / 2)
        } else if (last % 2 !== 0) {
            resp.push((last * 3) + 1)
        }
        return collatz(resp)
    }
    return resp
}
//Your can use any number you want and see how it works. (remember the limits of the languages)
console.log(JSON.stringify(collatz([9999999999999999])))