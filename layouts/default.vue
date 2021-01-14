<template>
  <div class="main-wrapper">
    <PageTop/>
    <Header/>
    <Nuxt />
    <Footer/>
  </div>
</template>

<script>
    import Header from '@/components/header';
    import Footer from '@/components/footer';
    import PageTop from '@/components/PageTop';
    export default {
        data:function(){
            return{

            }
        },
        components:{
            Header,
            Footer,
          PageTop

        },
        methods: {

        },
    }
</script>

