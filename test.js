let User = function(data){
    this.data = data;
    this.error = [];
};

User.prototype = {
    changeData : function(){
        this.data = "habib";
    },
    keepData : function(){
        this.data = "tuhin";
    }
};

let habib = new User("habib");

habib.keepData();

let tuhin = new User("tuhin");

console.log(habib.data + " " + tuhin.data);