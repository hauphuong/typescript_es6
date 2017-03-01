var employee ={
    id: 1,
    greet:function(){
        // var selt = this;
        // //console.log(this.id);
        // setTimeout(function() {
        //     console.log(selt.id);
        // }, 1000);
        setTimeout(() =>console.log(this.id), 1000);
    }
}

employee.greet();