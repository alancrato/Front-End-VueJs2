
export default {

    template: `

        <nav>
            <ul>
                <li v-for="o in menus">
                    <a href="#" @click.prevent="showView(o.id)">{{ o.name }}</a>
                </li>
            </ul>
        </nav>
        
    `,

    data() {

        return {

            menus: [
                {id: 0, name: 'Listar Contas'},
                {id: 1, name: 'Criar Conta'}
            ],

        }

    },

    methods: {
        showView(id){
            this.$parent.activedView = id;
            if(id == 1){
                this.$parent.formType = 'insert';
            }
        }
    }

}