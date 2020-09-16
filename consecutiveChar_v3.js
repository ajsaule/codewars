function longestRepetition(str) {
    // first splitting the test string into an array 
    let strArr = str.split("")
    let tempChar = ''
    let tempCount = 1 
    let longestConsecutive = ['a', 0]

    strArr.forEach(char => {
        console.log(strArr)
        if (char === tempChar) {
            console.log(char)
            tempCount++
            console.log(tempCount)
            console.log(longestConsecutive)
        }
        if (tempCount > longestConsecutive[1]) {
            longestConsecutive = [tempChar, tempCount]
        } else {
            tempCount = 1
        }
        tempChar = char
    })

    return longestConsecutive
}

console.log(longestRepetition('hz05p6uqkl4zijznz1cxvdfgqiqkg7yw88epg7j2fj3mi2zrgvf8v5lbwm7nind0ywd0xbi0okofwzeuv19h0hwkpwqrp0d59odl6dd2e0kajb6jidgl9py11imkw76vl197tzd6pjwmukcrbents3agt2pddzdxhpmxmw3ys2qptnlm73zujan1n6p6da32o7eaqixvad50lxb7z3105hn7fctwxrqeqe3nagibll36rpsefi2hoozplse5lezv7xohzj5jigazdbyaqoqn192s4acczsgcp4fdw9pd8w81tlb2thnetohb4dvx2vx1t1z7nuu49skp5xiylf1vjc4ipnb33d8vpw48rg2ggo3i8cjj5tgtuznqm91uen4jxkcqeskvxqdqxzzh6v0dzn296fqvqhsh0zljayozxyva1w5aiduvf2qkd8n8fss3jrwnlw9xwv5wj2qgcy5l618ka04z8swo9pcfw1otsbhbj8hh6zue'))
