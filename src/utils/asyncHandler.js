const asyncHanlder = (requestHanlder)=>{
    return (req,res,next)=>{
        Promise.resolve(requestHanlder(req,res,next)).catch((error)=>next(error))
    }
}

export {asyncHanlder}