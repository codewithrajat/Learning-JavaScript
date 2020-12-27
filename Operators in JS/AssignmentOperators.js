function Operators(){
    var a = 10 ;
    var b = a ;
    b += 1;
    a -= 2;
    console.log(a," & ",b);
    b *= 1;
    a /= 2;
    console.log(a," & ",b);
    b %= a; // Remainder
    console.log(b)
}

Operators();