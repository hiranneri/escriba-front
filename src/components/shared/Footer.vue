<template>
    <footer>
        <div class="rodape-header">
            <router-link to="/" id="logoEscriba"> 
                <img src="../../assets/img/escriba.png" alt="Logotipo Escriba" id="imgEscriba" >
            </router-link>
            <nav>
                <ul>
                    <li>
                        <img src="../../assets/img/pequeno-principe.jpg" alt="Pequeno Príncipe"> 
                    </li>
                    <li>
                        <img src="../../assets/img/anoreg-fgv.jpg" alt="Anoreg Partner"> 
                    </li>
                    <li>
                        <img src="../../assets/img/cert-abs.jpg" alt="Certificado ABS"> 
                    </li>
                    <li>
                        <img src="../../assets/img/acbr.jpg" alt="ACBR"> 
                    </li>
                    <li>
                        <img src="../../assets/img/ac-notarial.jpg" alt="AC Notarial"> 
                    </li>
                </ul>
            </nav>
        </div> 
        <div class="rodape-atendimento">
            <p>Central de Atendimento: <br> <span>[41] 2106-1212</span>  </p>
        </div>
    </footer>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    footer{
        background-color: #1e1e20;
        position: relative;
        max-width: 100%;
    }  
    .rodape-header{
        padding: 20px;
        width: 940px;
        position: relative;
        margin:0 auto;
    }
    nav ul li{
        display: inline-block;
    }
    .rodape-atendimento{
        text-align: center;
        color: rgba(255, 255, 255, 0.557);
        background-color: black;
        padding: 30px;
         font-family: 'Roboto', sans-serif;
        font-size: 30px;
        font-weight: bold;
    }
    span{
        color: white;
        font-weight: bold;
    }
    nav{
        position: absolute;
        right: 0;
        top: 15px;
    }
    @media (max-width: 600px){
        #imgEscriba{
            padding: 30px;
            margin-left: 20px;
        }
        nav{
            position: static;
            max-width: 300px;
            margin: 0 auto;
        }
        ul{
            text-align: center;
        }
 
        li{
            display: inline-block;
        }
        footer{
            max-width: 400px;
        }
        .rodape-header{
            max-width: 320px;
            margin: 0;
            padding: 0;
        }
        .rodape-atendimento{
            max-width: 320px;
        }
    
    }
</style>