import Vue from 'vue'

new Vue({

  el: '#app',

  data: {

    title: 'Contas a Pagar',

    menus: [
        {id: 0, name: 'Listar Contas'},
        {id: 1, name: 'Criar Contas'}
    ],

    activedView: 0,

    bills: [
        {date_due: '20/08/2018', name: 'Conta de Luz', value: 70.99, done: 1},
        {date_due: '21/08/2018', name: 'Conta de água', value: 50.99, done: 1},
        {date_due: '22/08/2018', name: 'Conta de Telefone', value: 55.70, done: 1},
        {date_due: '23/08/2018', name: 'Supermercado', value: 625.00, done: 1},
        {date_due: '24/08/2018', name: 'Cartão de Créditos', value: 1500.99, done: 1},
        {date_due: '25/08/2018', name: 'Empréstimos', value: 2000.99, done: 1},
        {date_due: '26/08/2018', name: 'Gasolina', value: 200, done: 1},
    ]

  },

  computed: {

    status: function () {
        var count = 0;
        for(var i in this.bills){
            if(!this.bills[i].done){
              count++;
            }
        }
        return !count?"Nenhuma conta a ser paga":"Existem "+ count+" a serem pagas";
    }

  },

  methods: {

    showView: function (id) {
        this.activedView = id;
    }

  }

});
