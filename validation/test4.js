var promise = new Promise(function(resolve,reject){
    resolve('gaga')
})
function callback(data){
    console.log(data)
}

promise
       .then(function(data){
            return data
       })
       .then(callback)
