class ApiResponse {
    constructor(statusCode, data, message = "Succes") {
        this.statusCode = statusCode,
            this.data = data,
            this.message = message,
            this.succes = statusCode
    }
}

export {ApiResponse}