class ApiError extends Error {
    constructor(statuscode,
       message = "something went wrong",
       stack,
       errors = []
   ) {
       super(message)
       this.errors = errors
       this.message = message
       this.succes = false
       this.data = null
       this.statuscode = statuscode

       if(stack){
           this.stack = stack
       }else{
           Error.captureStackTrace(this,this.constructor)
       }
   }
}

export { ApiError }