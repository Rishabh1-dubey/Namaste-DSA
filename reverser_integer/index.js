/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    
    let xCopy=x;
    x = Math.abs(x)

    let rev =0;
    while(x>0){
        let last = x%10
        rev=10*rev+last;
        x=Math.floor(x/10)
    }
     // check overflow (32-bit signed integer range)
    if (rev < -(2 ** 31) || rev > (2 ** 31 - 1)) {
        return 0;
    }
    
    if(xCopy<0){
        return -rev;
    }else{
        return rev;
    }
};

console.log(reverse(-125))