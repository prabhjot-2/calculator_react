function add(a,b){
    let sum= a+b;
    return sum;
}

function sub(a,b){
    let sub=a-b;
    return sub;
}

function mult(a,b){
    return a*b;
}

function div(a,b){
    let div=a/b;
    div.toFixed(2);
    return div;
}

export {add, sub, mult, div};