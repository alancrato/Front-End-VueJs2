
export default {

    template: `
        <h3 :class="{'gray': status === false, 'green': status === 0, 'red': status > 0}">
            {{ status | statusGeneral }}
        </h3>
    `,

    data(){
        return {

        }
    },

    computed: {

        status () {
            if(!this.$parent.bills.length){
                return false;
            }

            let count = 0;
            for(let i in this.$parent.bills){
                if(!this.$parent.bills[i].done){
                    count++;
                }
            }
            return count;
        }

    }

}