<template>
    <div>
        <img src="../assets/img/trabalhe-conosco.jpg" alt="Imagem de aperto de maõs entre duas pessoas" class="imagem-trabalhe">  
            <div class="trabalhe-conosco">
                <p>
                    <span>TRABALHE CONOSCO </span><br><br>
                    Venha trabalhar na maior desenvolvedora de softwares para cartórios extrajudiciais do Brasil.Faça parte de um grande time que 
                    <br>contribui para a segurança jurídica do país, onde a ética e as boas práticas fazem parte do nosso DNA.
                    <br><br>
                    Buscamos talentos motivados que adoram desafios e estão determinados a prover inovação através da tecnologia 
                    para os cartórios.
                    <br><br>
                    Se você é assim e compartilha desses mesmos princípios, venha trabalhar conosco.         
                </p>
            </div>
    </div>
    <div class="container-vagas">
        <h3>SELECIONE UMA ÁREA:</h3>
        <div class="filtroVagas">
            <button @click="filtrarVagas(1)">
                <img src="../assets/img/administrativo.png" alt="Botão Filtrar Vagas Administrativas">
            </button>
            <button @click="filtrarVagas(2)">
                <img src="../assets/img/negocios.png" alt="Botão Filtrar Vagas de Negócios">
            </button>
            <button @click="filtrarVagas(3)">
                <img src="../assets/img/suporte.png" alt="Botão Filtrar Vagas de Suporte">
            </button>
            <button @click="filtrarVagas(4)">
                <img src="../assets/img/escriba-vagas.png" alt="Botão para mostrar todas as vagas" class="img-escriba">
            </button>
        </div>
        <h4>Vagas Disponíveis</h4>
        <ListaVaga ref="vaga"/>
    </div>
</template>
<script>
import ListaVaga from './ListaVaga'
export default {
    name:'Vaga',
    data(){
        return {
            vagas: [],
            vagasFiltradas:[]
        }
    },
    components:{
        ListaVaga, 

    },
    methods:{
        filtrarVagas(setor){
            this.$refs.vaga.filtrarVagas(setor);
        }
    }
}
</script>
<style scoped>
    .imagem-trabalhe{
       
        height: 300px;
        width: 100%;
    }
    .trabalhe-conosco{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        text-align: center;
        background-color: green;
    }
    p{
        position: absolute;
        margin-top: -250px;       
        color: white;
        font-weight: bolder;
       
    }
   span{
       font-size: 40px;
       font-family: Verdana, Geneva, Tahoma, sans-serif;
   }
   .container-vagas{
       background-color: #6a68681f;
   }
   h3{
       padding: 20px;
       text-align: center;
       color: #51514d;
       font-size: 28px;
   }
   .filtroVagas{
       text-align: center;
   }
   button{
        margin: 40px;
        height: 165px;
        width: 190px;
        background-color: yellow;
        border: none;
        border-radius: 10px;
        
   }
   .img-escriba{
       width: 130px;
       height: 145px;
       border-radius: 10px;
   }
   button:focus{
       background-color: transparent;
   }
   h4{
       text-align: center;
       font-size: 35px;
       padding-top: 20px;
       padding-bottom: 40px;
   }

</style>