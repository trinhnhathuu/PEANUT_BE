'use strict'

const StatusCode ={
    OK: 200,
    CREATED:201
}
const ReasonStatusCode ={
    OK: 'Created!',
    CREATED:'Success'
}
class SuccessResponse { 
    constructor(message, status = StatusCode.OK, reasonStatusCode = ReasonStatusCode.OK, metadata = {}) {
        this.message = !message ? StatusCode.OK : message
        this.status = status
        this.reasonStatusCode = reasonStatusCode
        this.metadata = metadata
        
    }

    send(res, headers = {}) {
        return res.status(this.status).json(
            this
        )
    }
   
}

class OK extends SuccessResponse{
    constructor({ message, metadata }) {
        super({message, metadata})
    }
}

class CREATED extends SuccessResponse{
    constructor({ options={},message, statusCode = StatusCode.CREATED,reasonStatusCode = ReasonStatusCode.CREATED, metadata}) {
        super({ message, statusCode, reasonStatusCode, metadata }),
            this.options = options
    }
}

module.exports = {
    OK, CREATED,SuccessResponse
}