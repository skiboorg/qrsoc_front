<template>
  <div>
       <PageTopBanner :title="'我们的广播'" :bg_image="'/streams_page_top.png'"/>
  <section class="streams-page">
    <div class="container">
        <div class="block-w-header">
              <div class="block-w-header__header">
                <div class="block-w-header__header-title">
                  <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 4C20 4 6 3 4 3C2 3 1 4 1 6C1 8 2 18 2 18C2 19.1 2.9 20 4 20H8V21C8 21.55 8.45 22 9 22H15C15.55 22 16 21.55 16 21V20H20C21.1 20 21.99 19.1 21.99 18L22 6C22 4.9 21.1 4 20 4ZM20 18H4V6H20V18Z" fill="url(#paint0_linear)"/>
                    <rect x="3" y="5" width="18" height="14" rx="1" fill="url(#paint1_linear)"/>
                    <path d="M9.5 9.32953V14.6695C9.5 15.4595 10.38 15.9395 11.04 15.5095L15.19 12.8395C15.3303 12.7489 15.4457 12.6245 15.5256 12.4778C15.6055 12.331 15.6474 12.1666 15.6474 11.9995C15.6474 11.8324 15.6055 11.668 15.5256 11.5213C15.4457 11.3746 15.3303 11.2502 15.19 11.1595L11.04 8.48953C10.38 8.05953 9.5 8.53953 9.5 9.32953Z" fill="white"/>
                    <rect x="8" y="1.5957" width="1" height="4" transform="rotate(-36.5161 8 1.5957)" fill="#1D9FE9"/>
                    <rect x="14.3752" y="1" width="1" height="4" transform="rotate(36.4272 14.3752 1)" fill="#1D9FE9"/>
                    <path d="M9.5 1.13281C9.5 1.6851 9.05228 2.13281 8.5 2.13281C7.94772 2.13281 7.5 1.6851 7.5 1.13281C7.5 0.580528 7.94772 0.132812 8.5 0.132812C9.05228 0.132812 9.5 0.580528 9.5 1.13281Z" fill="#5EC4FF"/>
                    <path d="M15.7745 1.13281C15.7745 1.6851 15.3267 2.13281 14.7745 2.13281C14.2222 2.13281 13.7745 1.6851 13.7745 1.13281C13.7745 0.580528 14.2222 0.132812 14.7745 0.132812C15.3267 0.132812 15.7745 0.580528 15.7745 1.13281Z" fill="#5EC4FF"/>
                    <defs>
                      <linearGradient id="paint0_linear" x1="12" y1="4" x2="12" y2="22" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#1D9FE9"/>
                        <stop offset="1" stop-color="#175EC9"/>
                      </linearGradient>
                      <linearGradient id="paint1_linear" x1="8.5" y1="8" x2="21.5" y2="20" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FFD600"/>
                        <stop offset="1" stop-color="#F35F0B"/>
                      </linearGradient>
                    </defs>
                  </svg>

                  <h3>流广播</h3>

                </div>

              </div>
              <div class="block-w-header__content">
                <div class="streams-block__items">
                  <StreamCard v-for="stream in streams" :key="stream.id"
                              :name="stream.name"
                              :avatar="stream.streamer.avatar"
                              :stream_img="stream.image"
                              :nickname="stream.streamer.nickname"
                              :stream_date="stream.date"
                              :rating="stream.streamer.streamer_rating"
                              :is_vip="stream.is_vip"
                              :url="stream.url"/>
                </div>


              </div>
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
