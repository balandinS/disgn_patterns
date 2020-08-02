class DataBase {

    constructor(data) {
        if(DataBase.exist){
            return DataBase.instance
        }
        DataBase.instance = this
        DataBase.exist = true
        this.data = data
    }

    getData(){
        return this.data
    }

}

const mongoDB = new DataBase('mongoDB');
console.log(mongoDB.getData());

const mysql = new DataBase('mysql');
console.log(mongoDB.getData());