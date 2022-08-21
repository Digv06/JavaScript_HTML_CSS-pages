async function apicall( val1, val2, callback){

    setTimeout(()=> {callback( val1+val2)}, 1)

}

const result = callbackToPromise(funcWithCallback)

result(1,2).then(([value])=> console.log(value))
