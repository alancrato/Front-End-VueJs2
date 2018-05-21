import Vue from 'vue';

Vue.filter('statusGeneral', (value) => {
    if(value === false){
        return "No account is registered";
    }
    if(!value){
        return "No account to pay";
    }else{
        return "There are "+value+" accounts to be paid.";
    }

});

Vue.filter('doneLabel', (value) => value == 0 ? "No Pay": "Pay");
