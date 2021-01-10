<template>
  <div>
    <PageTopBanner :title="'相册'" :bg_image="'http://placehold.it/1920x250'"/>
  <section class="girls-page">

    <div class="container">

      <div class="user-profile-friends-wrapper">
        <FriendCard v-for="streamer in streamers"
                  :key="streamer.id"
                  :nickname="streamer.nickname"
                  :avatar="streamer.avatar"
                  :fio="streamer.fio"/>
      </div>


    </div>
  </section>
  </div>

</template>
<script>
  import FriendCard from '@/components/FriendCard'

  export default {
    components: {
      FriendCard

    },
    auth: false,
    async asyncData({$axios,params}){

     try{
        const get_streamers = await $axios.get(`/api/v1/user/get_streamers?at_home=false`)
        const streamers = get_streamers.data
        return {streamers}
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


