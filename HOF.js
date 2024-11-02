function createMultiple(factor){
    return function(number){
        return factor * number
    }
}
let c=createMultiple(6)
console.log(c(5));
