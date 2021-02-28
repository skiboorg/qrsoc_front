<template>
  <div>
    <PageTopBanner :title="'123'" :bg_image="'/girl_page_top.png'"/>
  <section class="girls-page">

    <div class="container">

        <div class="block-w-header">
          <div class="block-w-header__header">
            <div class="block-w-header__header-title">


              <h3>{{item.name}}</h3>

            </div>

          </div>
          <div class="block-w-header__content">

 <div v-html="item.description"></div>

          </div>
        </div>



    </div>
  </section>
  </div>

</template>
<script>


  export default {

    auth: false,
    async asyncData({$axios,params}){

     try{
        const get_item = await $axios.get(`/api/v1/blog/get_item?name_slug=${params.news_item_slug}`)
        const item = get_item.data
        return {item}
     }catch (e) {
        const err = 404
        return {err}

     }

    },
    data(){
      return {


      }
    },

  }
</script>


