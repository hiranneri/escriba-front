<template>
    <header>
        <router-link to="/" id="logoEscriba"> 
            <img src="../../assets/img/escriba.png" alt="Logotipo Escriba" id="imgEscriba" >
        </router-link>

        <nav class="navegacao">
            <button v-on:click="toogleMenu" v-on:touchstart="toogleMenu" class="botao-mobile">Menu
                <span class="icone-hamburger"></span>
            </button>

            <ul class="menu">
                <li v-for="rota in rotas" :key="rota.name">
                    <router-link :to="rota.path ? rota.path : '/'" class="item-menu"> 
                        <p>{{ rota.name }}</p>
                    </router-link>
                </li>
            </ul>
        </nav>        
    </header>
</template>
<script>
export default {
    name:'Menu',
    props:['rotas'],
    methods:{
        toogleMenu(event){
            if(event==='touchstart') event.preventDefault();
            let menuNav = document.querySelector('.navegacao');
            menuNav.classList.toggle('active')
        }
    }

}
</script>
<style scoped>
    header{
        box-sizing: border-box;
        display: flex;
        background-color: black;
        font-family: 'Roboto', sans-serif;
        font-size: 20px;
        font-weight: bold;
        align-items: center;
        height: 70px;
        padding: 1rem;
        justify-content: space-between;
        padding-top: 40px;
        padding-bottom: 50px ;
    }
    #imgEscriba{
        width: 90%;
        height: 50px;
    }
    .item-menu{
        text-decoration: none;
        color: white; 
        display: block;
        padding: .5rem;

    }
    .item-menu:hover{
        color: yellow;
    }
    .menu{
        display: flex;
        list-style: none;
        gap: .8rem;
    }
    .botao-mobile{
        display: none;
    }

    @media (max-width: 600px){
        .botao-mobile{
            display: flex;
            padding: .5rem .1rem;
            font-size: 1rem;
            border:none;
            background: none;
            cursor: pointer;
            gap: .5rem;
            color: yellow;
        }
        .icone-hamburger{
            color: yellow;
            border-top: 2px solid;
            width: 20px;
        }
        .menu{
            display: block;
            position: absolute;
            width: 100%;
            top: 70px;
            right: 0;
            background: black;
            height: 0;
            z-index: 1000;
            transition: .3s;
            visibility: hidden;
            overflow-y: auto;
        }
        .navegacao.active .menu{ 
            height: 70vh;
            visibility: visible;
        }
        .item-menu{
            padding: 1rem 0;
            margin-left: 0 1rem;
            border-bottom: 2px solid rgba(235, 235, 141, 0.681);
        }
        .icone-hamburger::after, .icone-hamburger::before{
            content: '';
            display: block;
            width: 20px;
            height: 2px;
            margin-top: 5px;
            background: currentColor;
            transition: .3s;
            position: relative;
        }
        .navegacao.active .icone-hamburger{
            border-top-color: transparent;   
        }
        nav.active .icone-hamburger::before{
            transform: rotate(135deg);
        }
        nav.active .icone-hamburger::after{
            transform: rotate(-135deg);
            top: -7px;
        }
    }

</style>