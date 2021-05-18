<template>
    <header>
        <div class="menu">
            <router-link to="/" id="logoEscriba"> 
                <img src="../../assets/img/escriba.png" alt="Logotipo Escriba" id="imgEscriba" >
            </router-link>
            <nav>
                <ul>
                    <li v-for="rota in rotas" :key="rota.name">
                        <router-link :to="rota.path ? rota.path : '/'" class="item"> 
                            <p>{{ rota.name }}</p>
                        </router-link>
                    </li>
                </ul>
            </nav>
        </div>   
    </header>
</template>
<script>
export default {
    name:'Menu',
    props:['rotas']

}
</script>
<style scoped>
    header{
        background-color: black;
        padding: 20px 0;
        font-family: 'Roboto', sans-serif;
        font-size: 20px;
        font-weight: bold;
    }
    .menu{
       
        width: 940px;
        position: relative;
        margin: 0 auto;
    }
    nav{
        position: absolute;
        top:20px;
        right: 0;         
    }
    li{
        list-style: none;
        color: white;
        text-decoration: none;
    }
    p{
        text-transform: uppercase;
        color: white;
    }
    .item{
        display: inline-block;
        text-decoration: none;
        margin-left: 50px;
    }
    p:hover{
        color: yellow;
    }

</style>