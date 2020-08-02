class OldCalc {
    operation(t1, t2, operator) {
        switch (operator) {
            case 'add' : return t1 + t2 ;
            case 'sub' : return t1 - t2 ;
            default: return NaN;
        }
    }
}


class NewCalc {

    add(t1, t2) {
        return t1 + t2 ;
    }

    sub(t1, t2) {
        return t1 - t2 ;
    }
}

class AdapterCalc {
    constructor() {
       this.instance  = new NewCalc();
    }

    operation(t1, t2, operator) {
        switch (operator) {
            case 'add' : return  this.instance.add(t1 , t2) ;
            case 'sub' :  return this.instance.sub(t1 , t2) ;
            default: return NaN;
        }
    }

}

const adapter = new AdapterCalc();

console.log(adapter.operation(2, 2, 'add'))