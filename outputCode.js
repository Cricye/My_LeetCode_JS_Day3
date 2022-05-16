// 改造下方代码，使之输出0-9，写出你能想到的2种解法。

/** 需被改造的代码
 
for(var i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000)
}

 */


//方法1
for(let i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000)
}

//方法2
for(var i = 0; i < 10; i++) {
    ((i) => {
        setTimeout(() => {
            console.log(i);
        }, 1000)
    })
(i)}