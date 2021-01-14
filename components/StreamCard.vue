<template>
        <div @click="$router.push(`/stream/${url}`)" class="slide-stream"
             :class="[is_vip?'slide-stream-vip':'',!this.$auth.loggedIn?'card-disabled':'']"
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


    }
  }
</script>


