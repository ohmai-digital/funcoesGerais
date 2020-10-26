const ohmaiGeral = {
    init: function () {
        console.log('inicializacao de ohmai-geral');
    },
    methods: {
        currency: {
            /*
                Transforma um valor inteiro em uma string formatada em formato de BRL 
                EX: 30000 -> R$ 300,00
            */
            formatCurrency: function (value = 0) {
                const val = (value / 100).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
                return `R$ ${val}`;
            }
        }
    },

};