console.log(palindrome('! racecar   !')) // true
console.log(palindrome('table')) // false

function palindrome(str) {
    console.log(str)
    let start = 0;
    let end = str.length - 1;
    while(start < end) {
        // isLetter
        if (str[start].toLowerCase() === str[start].toUpperCase()) {
            start += 1
            continue
        }
         // isLetter
        if (str[end].toLowerCase() === str[end].toUpperCase()) {
            end -= 1
            continue
        }
        
        if (str[start].toLowerCase() !== str[end].toLowerCase()) {
            return false
        }
        start += 1
        end -= 1
    }
    return true
}