<template>
  <div>
       <PageTopBanner :title="'相册'" :bg_image="'/streams_page_top.png'"/>
  <section class="streams-page">
    <div class="container">
      <div class="streams-page-wrapper">
        <StreamCard
          v-for="stream in streams"
          :key="stream.id"
          :name="stream.name"
          :avatar="stream.streamer.avatar"
          :stream_img="stream.image"
          :nickname="stream.streamer.nickname"
          :is_vip="stream.is_vip" :url="stream.url"/>
      </div>

    </div>
  </section>
  </div>

</template>

<script>
  import StreamCard from '@/components/StreamCard'
  export default {
    components: {
      StreamCard
    },
    auth: false,
    async asyncData({$axios,params}){
      console.log(params)
      try{

        const get_streams = await $axios.get(`/api/v1/stream/get_streams_for_home_page`)

        const streams = get_streams.data
        console.log(streams)
        return {streams}
      }catch (e) {
        const err = 404
        return {err}
      }
    },
    data(){
      return {



      }
    },
    methods:{


    }
  };
</script>
