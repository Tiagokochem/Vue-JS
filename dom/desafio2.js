new Vue({
    el: '#desafio',
    data: {
        valor:''
    },
    methods: {
        alerta(){
            alert('Alerta teste')
        },
        alterarValor(event){
            this.valor = event.target.value
        }
    }
})