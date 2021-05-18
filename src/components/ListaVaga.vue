<template>
    <div class="lista-vagas">
        <ul class="vagas">
            <li v-for="vaga of vagasFiltradas" :key="vaga.descricao">
                <div class="data-vaga">{{ vaga.datapublicacao }}</div>
                <div class="info-vaga">
                    <div class="cargo-vaga">
                        {{ vaga.descricao }}
                    </div>
                    <div class="atividades-vaga">
                        {{ vaga.atividades }}
                    </div>
                    <div class="setor-vaga">
                        {{ vaga.nomesetor }}  
                    </div>
                </div>
                <div class="detalhes-vaga">
                    VER DETALHES DA VAGA
                </div>
            
            </li>

 
        </ul>
    </div>
    
</template>
<script>
import Vagas from '../services/vagas'
export default {

    data(){
        return {
            vagas: [],
            vagasFiltradas:[]
        }
    },

    mounted(){
        Vagas.listar().then((results)=>{
            
            this.vagas = this.formatarDataVaga(results.data);
            this.vagasFiltradas = this.vagas;
        })
    },
    methods:{
        formatarDataVaga(vagas){
            for(let vaga of vagas){
                let dataVagaBanco = vaga.datapublicacao;
                let data = new Date(dataVagaBanco);
                let mesExtenso = this.formatarMesExtenso(data.getUTCMonth()+1)

                let dataFormatada = `${data.getUTCDate()}, ${mesExtenso} ,${data.getUTCFullYear()}`;
                vaga.datapublicacao = dataFormatada
            }
            return vagas;
        },
        formatarMesExtenso(mes){
            const mesExtenso = {
                1:'Janeiro',
                2:'Fevereiro',
                3:'Março',
                4:'Abril',
                5:'Maio',
                6:'Junho',
                7:'Julho',
                8:'Agosto',
                9:'Setembro',
                10:'Outubro',
                11:'Novembro',
                12:'Dezembro'
            }
            return mesExtenso[mes];
        },
        filtrarVagas(setor){
            this.vagasFiltradas = this.vagas;
            switch (setor) {
                case 1:                
                this.vagasFiltradas = this.vagas.filter(vaga => vaga.nomesetor === 'Administrativas')
                break;                
                case 2:
                this.vagasFiltradas = this.vagas.filter(vaga => vaga.nomesetor === 'Comerciais')
                break;
                case 3:
                this.vagasFiltradas = this.vagas.filter(vaga => vaga.nomesetor === 'Técnicas')
                break;
                default:
                return this.vagasFiltradas = this.vagas;
            }
        }
        
    }
}
</script>
<style scoped>
    .lista-vagas{
        padding-bottom: 100px;
    }
    .vagas{
        width: 940px;
        margin:0 auto;
    }
    .vagas li{
        display: inline-block;
        list-style: none;
        width: 30%;
        margin:0 1.5%;
        margin-bottom: 20px;
    }
    .data-vaga{
        background-color: yellow;
        color: black;
        font-size: 13px;
        font-weight: bold;
        padding: 10px;
        
    }
    .info-vaga{
        background-color: white;
        
    }
    .cargo-vaga{
        color: black;
        font-size: 18px;
        padding: 15px;
        font-weight:bold;
    }
    .atividades-vaga{
        font-size: 15px;
        padding-bottom: 15px;
        margin-left: 10px;
        margin-right: 10px;
        text-align: justify;
    }
    .setor-vaga{
        font-size: 12px;
        margin-left: 10px;
    }
    .detalhes-vaga{
        background-color: yellow;
        color: black;
        text-align: center;
        font-size: 13px;
        padding: 15px;
    }
    .detalhes-vaga:hover{
        background-color: black;
        color: white;
    }
</style>