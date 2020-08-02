class Server {
    constructor(ip, port) {
        this.ip = ip;
        this.port = port;
    }

    get url() {
        return `https://${this.ip}:${this.port}`
    }
}

function aws(server){
    server.isAws = true;
    server.getInfo = function(){
        return server.url
    }

    return server;
}

const s1 = aws(new Server('10.23.45.32', '80'));
console.log(s1);