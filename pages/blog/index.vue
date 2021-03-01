<template>
  <div>
    <PageTopBanner :title="'123'" :bg_image="'/girl_page_top.png'"/>
  <section class="girls-page">

    <div class="container">

        <div class="block-w-header">
          <div class="block-w-header__header">
            <div class="block-w-header__header-title">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.7 16.5H7.5V14.5H9.5L9.7 15.25C9.85 15.9 9.35 16.5 8.7 16.5Z" fill="#90CAF9"/>
                    <path d="M18.5 18C18.5 18 12.6 14.5 9.5 14.5V7.5C12.4 7.5 18.5 4 18.5 4V18Z" fill="#90CAF9"/>
                    <path d="M4.5 13.5C5.88071 13.5 7 12.3807 7 11C7 9.61929 5.88071 8.5 4.5 8.5C3.11929 8.5 2 9.61929 2 11C2 12.3807 3.11929 13.5 4.5 13.5Z" fill="#283593"/>
                    <path d="M20 9.5H18.5V12.5H20C20.85 12.5 21.5 11.85 21.5 11C21.5 10.15 20.85 9.5 20 9.5Z" fill="#283593"/>
                    <path d="M9.3001 20.5999C8.8501 20.8999 8.0501 21.1999 7.0001 21.2999C6.7001 21.3499 6.4001 21.1499 6.3001 20.7999L4.1001 13.9499C4.1001 13.9499 8.5001 10.8499 8.5001 14.4999C8.5001 17.2499 9.2501 18.6999 9.6001 19.2499C9.8501 19.5999 9.8501 20.0499 9.6001 20.3999C9.5001 20.4999 9.4001 20.5499 9.3001 20.5999Z" fill="#283593"/>
                    <path d="M4.5 14.5H9.5V7.5H4.5C3.95 7.5 3.5 7.95 3.5 8.5V13.5C3.5 14.05 3.95 14.5 4.5 14.5Z" fill="#3F51B5"/>
                    <path d="M19 19C18.45 19 18 18.55 18 18V4C18 3.45 18.45 3 19 3C19.55 3 20 3.45 20 4V18C20 18.55 19.55 19 19 19Z" fill="#42A5F5"/>
                  </svg>

                  <h3>公告和新闻</h3>
                </div>

          </div>
          <div class="block-w-header__content">

<div class="news__items blog">
                  <div @click="$router.push(`/blog/${item.name_slug}`)" v-for="item in news" :key="item.id" class="news__item">
                    <el-image  :src="item.image"  lazy fit="cover"></el-image>
                                  <h3>{{item.name}}</h3>
  <p>{{item.short_description}}</p>
                  </div>





                </div>

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
         const response_news = await $axios.get(`/api/v1/blog/get_items`)
      const news = response_news.data
        return {news}
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


