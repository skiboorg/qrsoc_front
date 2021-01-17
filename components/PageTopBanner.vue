<template>
     <div class="page-top-banner" :style="'background: url('+bg_image+')'">
       <div class="container page-top-banner__inner">
         <h3>{{title}}</h3>
         <p><nuxt-link to="/">回到主页面?</nuxt-link></p>
       </div>
     </div>
</template>
<script>
  export default {
    props:['title','bg_image'],
    data() {
      return {
      };
    },
  }
</script>


