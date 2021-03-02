<template>
  <div>
     <PageTopBanner :title="'我们的女孩'" :bg_image="'/girl_page_top.png'"/>
  <section>
    <div class="container">
      <div class="rating-wrapper">
         <div class="streams-block__right">
            <div class="block-w-header">
              <div class="block-w-header__header">
                <div class="block-w-header__header-title">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5C6.20101 1.5 1.5 6.20101 1.5 12C1.5 17.799 6.20101 22.5 12 22.5Z" fill="#F44336"/>
                    <path d="M12 5.5L13.95 9.45L18.3 10.1L15.15 13.15L15.9 17.5L12 15.45L8.09995 17.5L8.84995 13.15L5.69995 10.1L10.05 9.45L12 5.5Z" fill="#FFCA28"/>
                  </svg>

                  <h3>女生评分</h3>
                </div>
                <div class="block-w-header__header-question">
                  <p>现在在网站上</p>

                </div>
              </div>
              <div class="block-w-header__content">
                <div  class="best-girl-item"
                      @click="$router.push(`/profile/${girl.nickname}`)"
                      v-for="(girl,index) in top_streamers" :key="girl.id"
                      :class="[index>0 && index<=2? 'girlInline' : '', ]">
                  <div v-if="index<=2">
                    <div :data-num="index+1" class="best-girl-item__avatar"
                         :class="[index===0 ? 'girl-gold' : '', index===1 ? 'girl-silver' : '',index===2 ? 'girl-bronze' : '',]"
                    > <img :src="girl.avatar" alt=""></div>
                    <div class="best-girl-item__info">
                      <div class="best-girl-item__info-rating">
                        <img src="/girl_rating_icon.png" alt="">
                        <p>{{girl.streamer_rating}}</p>
                      </div>
                      <p class="best-girl-item__info-name">{{girl.fio}}</p>
                      <p class="best-girl-item__info-link">@{{girl.nickname}}</p>
                    </div>
                  </div>
                  <div v-else class="best-girls-item indexMode">
                    <div class="best-girls-item__num">{{index+1}}</div>
                    <div class="best-girls-item__img" :class="[index < 3 ? `girlStatus${index+1}` : '']">
                      <img :src="girl.avatar" alt="">
                    </div>
                    <div class="best-girls-item__name font-bold">{{girl.fio}}</div>
                    <div class="best-girls-item__link">@{{girl.nickname}}</div>
                    <div class="best-girls-item__score font-bold"><img src="/girl_rating_icon.png" alt="">{{girl.streamer_rating}}</div>

                  </div>


                </div>










              </div>
            </div>
          </div>
         <div class="block-w-header">
              <div class="block-w-header__header">
                <div class="block-w-header__header-title">
                  <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0)">
                      <path d="M22 7.752L17.9197 0.95L10.7932 0L4.06154 0.95L0 7.657L10.9812 18.848L22 7.752Z" fill="#337DFF"/>
                      <path d="M0 7.69528L0.0188034 7.71428L7.07009 8.41728L4.04274 0.988281L0 7.69528Z" fill="#4D94FF"/>
                      <path d="M10.906 2.69775L17.9385 0.96875L14.8923 8.35975L10.906 2.69775Z" fill="#81D1FF"/>
                      <path d="M10.906 2.69775L4.04272 0.96875L7.03247 8.41675L10.906 2.69775Z" fill="#64C6FF"/>
                      <path d="M22.2057 7.70328L15.098 8.25428L18.1442 0.863281L22.2057 7.70328Z" fill="#A1DCFF"/>
                      <path d="M0.0187988 7.71387L11.0376 18.9999L7.03248 8.41687L0.0187988 7.71387Z" fill="#275EFF"/>
                      <path d="M22 7.80859L11.0564 18.9046L14.8735 8.35959L22 7.80859Z" fill="#ABC9FF"/>
                      <path d="M4.04272 0.988L10.906 2.717L17.9573 0.988L10.7743 0L4.04272 0.988Z" fill="#BFE7FF"/>
                      <path d="M7.03247 8.41724L10.906 2.69824L14.8923 8.36024L7.03247 8.41724Z" fill="#5C95FF"/>
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect width="22" height="19" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>

                  <h3>现在在网站上</h3>
                </div>
                <div class="block-w-header__header-link">
                  <p>现在在网站上</p>

                </div>
              </div>
              <div class="block-w-header__content">
                <!--                {{top_donaters}}-->
                <div  class="best-girl-item"
                      @click="$router.push(`/profile/${user.from_user.nickname}`)"
                      v-for="(user,index) in top_donaters" :key="user.id"
                      :class="[index>0 && index<=2? 'girlInline' : '', ]">
                  <div v-if="index<=2">
                    <div :data-num="index+1" class="best-girl-item__avatar"
                         :class="[index===0 ? 'girl-gold' : '', index===1 ? 'girl-silver' : '',index===2 ? 'girl-bronze' : '',]"
                    > <img :src="user.from_user.avatar" alt=""></div>
                    <div class="best-girl-item__info">
                      <div class="best-girl-item__info-rating">
                        <!--                        <img src="/girl_rating_icon.png" alt="">-->
                        <!--                        <p>{{user}}</p>-->
                      </div>
                      <p class="best-girl-item__info-name">{{user.from_user.fio}}</p>
<!--                      <p class="best-girl-item__info-link">@{{user.from_user.nickname}}</p>-->

                      <p class="best-girl-item__info-summ">消費 <img src="/diamond.svg" alt=""> {{user.summ}}鑽</p>
                    </div>
                  </div>
                  <div v-else class="best-girls-item indexMode">
                    <div class="best-girls-item__num">{{index+1}}</div>
                    <div class="best-girls-item__img" :class="[index < 3 ? `girlStatus${index+1}` : '']">
                      <!--                      <img :src="user.from_user.avatar" alt="">-->
                    </div>
                    <div class="best-girls-item__name font-bold">{{user.from_user.fio}}</div>
                    <div class="best-girls-item__link">@{{user.from_user.nickname}}</div>
                    <!--                    <div class="best-girls-item__score font-bold"><img src="/girl_rating_icon.png" alt="">{{user}}</div>-->

                  </div>


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
    scrollToTop: false,

    async asyncData({$axios,params}){
    console.log(params)
    try{
      const get_top_streamers = await $axios.get(`/api/v1/user/get_streamers?top5=true`)
      const response_donaters = await $axios.get(`/api/v1/gift/get_user_top10_donaters`)
      const top_streamers = get_top_streamers.data
      const top_donaters = response_donaters.data
      return {top_streamers,top_donaters}//,top_donaters,banners
    }catch (e) {
      const err = 404
      return {err}
    }
  },
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


