let myPromise=new Promise((resolve,reject)=>{
    let isSuccess=true
    if(isSuccess)
        resolve("it is suceess")
    else
        reject("it is fail")
})
myPromise.then((resolve)=>console.log(resolve))
.catch((reject)=>console.log(reject))
.finally(()=>console.log('promise worked'))