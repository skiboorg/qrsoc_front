<template>
  <div @click="openStream(is_vip,url)"
       class="streams-block__item"
       :class="[!this.$auth.loggedIn ? 'card-disabled':this.$auth.user.is_vip ? 'vipOpened' : '', is_vip ? 'slide-stream-vip':'']">
    <el-image  :src="stream_img" lazy fit="cover"></el-image>
    <div class="streams-block__item--bottom">
      <p >{{name}}</p>
      <div class="streams-block__item--bottom-inner">
<!--        {{ new Date (stream_date).toLocaleTimeString()}}-->
        <p >{{ new Date (stream_date).toLocaleDateString()}} </p>
      </div>
    </div>
    <div class="streams-block__item--bottom">
      <p class="text-grey">@{{nickname}}</p>
      <div class="streams-block__item--bottom-inner">
        <img src="/girl_rating_icon.png" alt="">
        <p class="font-bold">{{rating}}</p>
      </div>
    </div>
  </div>


</template>
<script>
export default {
  props:['name','avatar','stream_img','nickname','is_vip','url','stream_date','rating'],

  data() {
    return {
    };
  },

  watch: {

  },
  mounted() {


  },
  methods: {
    openStream(vip,url){
      if (vip){
        this.$auth.user.is_vip ? this.$router.push(`/stream/${url}`) : null
      }
      else{
        this.$router.push(`/stream/${url}`)
      }

    }


  }
}
</script>


