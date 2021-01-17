<template>
        <div v-if="!is_vip" @click="openStream(is_vip,url)"
             class="slide-stream"
             :class="[!this.$auth.loggedIn ? 'card-disabled':'']"
             :style="'background: url(' + stream_img + ') no-repeat center'">
          <p class="slide-stream__date">{{ new Date (stream_date).toLocaleDateString()}} {{ new Date (stream_date).toLocaleTimeString()}}</p>
              <p class="slide-stream__name">{{name}}</p>
              <div class="slide-stream__link">
                <img :src="avatar" alt="">
                <p class="">{{nickname}}</p>
              </div>
        </div>
  <div v-else @click="openStream(is_vip,url)"
             class="slide-stream slide-stream-vip"
            :class="[!this.$auth.loggedIn ? 'card-disabled':'',this.$auth.user.is_vip ? 'vipOpened' : '']"
             :style="'background: url(' + stream_img + ') no-repeat center'">
          <p class="slide-stream__date">{{ new Date (stream_date).toLocaleDateString()}} {{ new Date (stream_date).toLocaleTimeString()}}</p>
              <p class="slide-stream__name">{{name}}</p>
              <div class="slide-stream__link">
                <img :src="avatar" alt="">
                <p class="">{{nickname}}</p>
              </div>
        </div>


</template>
<script>
  export default {
    props:['name','avatar','stream_img','nickname','is_vip','url','stream_date'],

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


