import BillPayMenuComponent from './bill-pay-menu.component';
import StatusComponent from './status.component';

export default {

    components: {
        'bill-pay-menu-component': BillPayMenuComponent,
        'status-component': StatusComponent
    },

    template: `
    
    <div>
    
        <h1>{{ title }}</h1>
    
        <bill-pay-menu-component></bill-pay-menu-component>
        
        <status-component></status-component>
        
        <div v-show="activedView == 0">
               <table border="1" cellpadding="10">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Vencimento</th>
                    <th>Nome</th>
                    <th>Valor</th>
                    <th>Paga ?</th>
                    <th>Ações</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(o,index) in bills">
                    <td>{{ index +1 }}</td>
                    <td>{{ o.date_due }}</td>
                    <td>{{ o.name }}</td>
                    <td>R$ {{ o.value }}</td>
                    <td class="done" :class="{'pago': o.done, 'nao-pago': !o.done}">
                        {{ o.done | doneLabel }}
                    </td>
                    <td>
                        <a href="#" @click.prevent="loadBill(o)">Edit</a>
                        <a href="#" @click.prevent="deleteBill(index)">Delete</a>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
        
        <div v-show="activedView == 1">
           <form name="form" @submit.prevent="submit">
              <label>Vencimento:</label>
                <input type="text" v-model="bill.date_due"/>
                <br/><br/>
              <label>Nome:</label>
                 <select v-model="bill.name">
                    <option v-for="o in names" :value="o">
                       {{ o }}
                    </option>
                 </select>
                 <br/><br/>
              <label>Valor:</label>
                 <input type="text" v-model="bill.value"/>
                 <br/><br/>
              <label>Pago?</label>
                 <input type="checkbox" v-model="bill.done"/>
                 <br/><br/>
              <input type="submit" value="Enviar">
            </form>
        </div>
  
    </div>
    
    `,

    data(){
        return {

            title: 'Contas a Pagar',

            activedView: 0,

            formType: 'insert',

            bill: {
                date_due: '',
                name: '',
                value: 0,
                done: false
            },

            names: [
                'Conta de Luz',
                'Conta de água',
                'Conta de Telefone',
                'Supermercado',
                'Cartão de Créditos',
                'Empréstimos',
                'Gasolina'
            ],

            bills: [
                {date_due: '20/08/2018', name: 'Conta de Luz', value: 70.99, done: true},
                {date_due: '21/08/2018', name: 'Conta de água', value: 50.99, done: false},
                {date_due: '22/08/2018', name: 'Conta de Telefone', value: 55.70, done: false},
                {date_due: '23/08/2018', name: 'Supermercado', value: 625.00, done: false},
                {date_due: '24/08/2018', name: 'Cartão de Créditos', value: 1500.99, done: false},
                {date_due: '25/08/2018', name: 'Empréstimos', value: 2000.99, done: false},
                {date_due: '26/08/2018', name: 'Gasolina', value: 200, done: false},
            ]
        }
    },

    methods: {

        submit(){

            if(this.formType == 'insert'){
                this.bills.push(this.bill);
            }

            this.bill = {
                date_due: '',
                name: '',
                value: 0,
                done: false
            };

            this.activedView = 0;

        },

        loadBill(bill){
            this.bill = bill;
            this.activedView = 1;
            this.formType = 'update';
        },

        deleteBill (index) {
            if(confirm('Deseja exluir esta conta?')) {
                this.bills.splice(index, 1);
            }
        }

    }

}