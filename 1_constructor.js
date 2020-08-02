//old versions
function Server(name, ip) {
    this.name = name
    this.ip = ip
}


Server.prototype.getUrl = function(){
    return `https://${this.ip}:80`
}

const aws = new Server('aws', '10.20.30.20')

console.log(aws.getUrl())


//class version

class Server1 {
    constructor(name, ip) {
        this.name = name
        this.ip = ip
    }

    getUrl(){
        return `https://${this.ip}:80`
    }
}

const aws1 = new Server('aws', '10.20.30.20')

console.log(aws.getUrl())