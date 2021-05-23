<template>
    <div class="conteiner">
        <section>
            <h2>TRABALHE CONOSCO</h2>
            <p>
                Venha trabalhar na maior desenvolvedora de softwares para cartórios extrajudiciais do Brasil e fazer parte de um grande time.<br> 
                Buscamos talentos motivados, que adoram desafios e estão determinados a prover inovação através da tecnologia para os cartórios. <br><br>
                Temos 30 anos de história e a ética e boas práticas estão no nosso DNA.

                A Escriba acredita e valoriza a diversidade. <br>Respeitamos a pluralidade e aceitamos as pessoas como elas se reconhecem e são. <br>
                Por isso, nossas vagas são para todos, sem distinção. 
            </p>
        </section>
        <div class="container-vagas">
            <h3>SELECIONE UMA ÁREA:</h3>
            <div class="filtroVagas">
                <button @click="filtrarVagas(1)">
                    <img src="../assets/img/administrativo.png" alt="Botão Filtrar Vagas Administrativas" class="icone-filtrovagas">
                </button>
                <button @click="filtrarVagas(2)">
                    <img src="../assets/img/negocios.png" alt="Botão Filtrar Vagas de Negócios" class="icone-filtrovagas">
                </button>
                <button @click="filtrarVagas(3)">
                    <img src="../assets/img/suporte.png" alt="Botão Filtrar Vagas de Suporte" class="icone-filtrovagas" >
                </button>
                <button @click="filtrarVagas(4)">
                    <img src="../assets/img/escriba-vagas.png" alt="Botão para mostrar todas as vagas" class="icone-filtrovagas icone-filtroescriba">
                </button>
            </div>
            <h4>Vagas Disponíveis</h4>
            <div v-if="loading === true">
                <Loader class="loader"/>
            </div>
            <ListaVaga ref="vaga" @update="mostrarVagas"/>
           
        </div>
    </div>
</template>
<script>
import ListaVaga from './ListaVaga'
import Loader from './Loader'
export default {
    name:'Vaga',
    data(){
        return {
            vagas: [],
            vagasFiltradas:[],
            loading:true
        }
    },
    components:{
        ListaVaga, 
        Loader
    },
    methods:{
        filtrarVagas(setor){
            this.$refs.vaga.filtrarVagas(setor);
        },
        mostrarVagas(carregado){
            this.loading = carregado
        }
    }
}
</script>
<style scoped>
    .conteiner{
         font-family: 'Roboto', sans-serif;
        font-size: 20px;
        box-sizing: border-box;
       
    }
    section{
        background-image: url('../assets/img/trabalhe-conosco.jpg');
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: 100%;
        width: 100%;
        height: 450px;

    }
    h2{
        
        color: white;
        padding-top: 70px;
        padding-bottom: 40px;
        font-size: 80px;
        text-align: center;

    }
    .trabalhe-conosco{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        text-align: center;
    }
    p{     
        text-align: center;
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
       font-size: 40px;
   }
   .filtroVagas{
       text-align: center;
   }
   .icone-filtroescriba{
       border-radius: 10%;
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
       width: 100%;
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
       color: #51514d;
       font-size: 80px;
   }
   .loader{
       position: absolute;
       left: 50%;
   }
   @media (max-width: 600px){
       section{
            
            background-size: 100%;
            width: 100%;
            height: 780px;
            background-repeat: no-repeat;
            background-attachment: fixed;
            background:url('../assets/img/trabalhe-conosco.jpg')


       }  

        H2{
            font-size: 55px;
            
        }
        p{
            margin-left: 20px;
            margin-right: 20px;
        }
        .filtroVagas{
            margin-left: 8px;
        }
        button{
            width: 35%;
            height: 120px;
            margin-bottom: 10%;
            margin-right:5%;
            margin-left: 0;
            
        }
        .icone-filtrovagas{
            width: 75%;
        }
        .img-escriba{
            width: 70%;
            height: 70px;
            border-radius: 5px;
        }
        h4{
            font-size: 55px;
        }

   }

</style>