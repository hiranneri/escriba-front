<template>
    <Menu :rotas="router"/>
    <Vaga/>
    <Footer/>
</template>
<script>
import Menu from '../components/shared/Menu'
import Vaga from '../components/Vaga'
import Footer from '../components/shared/Footer'
export default {
    name:'Home',
    components:{
        Menu,
        Vaga,
        Footer
    },
    data(){
        return{
            router: this.$router.options.routes
        }
    },


}
</script>