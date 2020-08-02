class SimpleMember {
    constructor(name) {
        this.name = name
        this.cost = 50
    }
}

class StandardMember {
    constructor(name) {
        this.name = name
        this.cost = 50
    }
}

class PremiumMember {
    constructor(name) {
        this.name = name
        this.cost = 50
    }
}

class Factory{
    static list = {
        simple : SimpleMember,
        standard : StandardMember,
        premium : PremiumMember
    }

    create(name, type = 'simple') {
        const MemberShip = Factory.list[type] || Factory.list.simple
        const member = new MemberShip(name)
        member.type = type
        member.define= function (){
            return `User: ${member.name} Subscribe: ${member.cost} ${member.type}`
        }

        return member
    }
}

const factory = new Factory();

const members = [
    factory.create("Sergey", 'simple'),
    factory.create('Ilona', 'premium'),
    factory.create('Edik', 'standard')
]

for(let member of members){
    console.log(member.define())
}