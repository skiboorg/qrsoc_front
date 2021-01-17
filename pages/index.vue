<template>
  <div id="1top" >
<!--    <section class="banner_slider">-->
<!--      <client-only>-->
<!--        <swiper class="banner_slider__wrapper"  :options="swiperOptionBanner">-->
<!--          <div class="swiper-pagination" slot="pagination"></div>-->
<!--          <swiper-slide v-for="banner in banners" :key="banner.id">-->
<!--            <img :src="banner.image" alt="">-->
<!--          </swiper-slide>-->
<!--        </swiper>-->
<!--          <div class="swiper-button-prev"></div>-->
<!--    <div class="swiper-button-next"></div>-->
<!--        <div class="swiper-pagination" slot="pagination"></div>-->
<!--      </client-only>-->
<!--    </section>-->
    <section class="banner">
          <div style="display: none" class="banner-inner">
            <h1 class="section-title text-white text-center">来自俄罗斯的美丽女孩在我们的网站上见面并交流！</h1>
            <div class="banner-checks">
              <p class="banner-check">
                <img src="/check-mark.svg" alt="">
                闲聊
              </p>
              <p class="banner-check">
                <img src="/check-mark.svg" alt="">
                每日流
              </p>
              <p class="banner-check">
                <img src="/check-mark.svg" alt="">
                闲聊
              </p>
              <p class="banner-check">
                <img src="/check-mark.svg" alt="">
                每日流
              </p>
            </div>
            <div class="banner-btn text-center">
              <p class="btn btn-l-blue">开始聊天</p>
            </div>

            <img class="banner-decor" src="/banner-decor.png" alt="">
          </div>
        </section>
    <section class="mb-40">
      <div class="container">
        <h3 class="section-title mb-30"><nuxt-link to="/streams">在我们的<span>平台上如</span>何播放？</nuxt-link> </h3>
        <p class="mb-40">我们众多广播之一的摘录！ 来找我们，我们有很多有趣的事情</p>
        <div class=" stream-video ">
          <div class="stream-video__top">
            <div  class="stream-video__top--user">
              <img :src="streamers[0].avatar" alt="">
              <div class="stream-video__top--user--info">
                <p>{{streamers[0].fio}}</p>
                <p>@{{streamers[0].nickname}}</p>
              </div>
            </div>
            <p style="font-size: 24px;font-weight: bold">我与最喜欢的观众交流</p>
            <div class="stream-video__top--stats">
              <img src="/girl_rating_icon.png" alt="">
              <div class="user-profile-about__girl-stats--item--info">
                <p>{{streamers[0].streamer_rating}}</p>
                <p>广播评级</p>
              </div>
            </div>
          </div>
          <div class="stream-video__content mb-10">
            <video style="width: 100%;height: 100%" controls loop>
              <source src="/vid.mp4" type="video/mp4">
              Your browser does not support HTML video.
            </video>
          </div>
        </div>
      </div>
    </section>
    <section class="slider-streams">
      <div class="container">
        <h3 class="section-title"><nuxt-link to="/streams">与女孩预<span>定的广播</span> </nuxt-link> </h3>
      </div>
      <client-only>
        <swiper class="slider-streams__wrapper"  :options="swiperOption">
          <div class="swiper-pagination" slot="pagination"></div>
          <swiper-slide v-for="stream in streams"
                        :key="stream.id">
            <StreamCard :name="stream.name"
                        :avatar="stream.streamer.avatar"
                        :stream_img="stream.image"
                        :nickname="stream.streamer.nickname"
                        :stream_date="stream.date"
                        :is_vip="stream.is_vip" :url="stream.url"/>
          </swiper-slide>
        </swiper>
        <div class="swiper-pagination" slot="pagination"></div>
      </client-only>

    </section>
    <section class="features">
      <div class="container">
        <div class="features-wrapper">
          <h3 class="section-title">您将在我 <span>们的平台</span>上 获得什么？</h3>
          <div class="features-items">
            <div class="features-item">
              <div class="features-item__img">
                <img src="/feature-img1.png" alt="">
              </div>
              <p class="features-item__title">与俄罗斯姑娘交流24/7</p>
              <p class="features-item__text">与女孩见面并交流：全天候私人聊天或社交团体中！ 交流您的思想和心情，帮助俄罗斯姑娘学习有趣的汉语和迷人的中国文化！</p>
            </div>
            <div class="features-item">
              <div class="features-item__img">
                <img src="/feature-img2.png" alt="">
              </div>
              <p class="features-item__title">参加视频广播</p>
              <p class="features-item__text">参与开发：我们的女孩不断为您播报各种主题！<br>
                共同学习中国语言和文化<br>
                棋盘游戏或电脑游戏<br>
                做运动和瑜伽<br>
                各种爱好：烹饪，绘画或卡拉OK</p>
            </div>
            <div class="features-item">
              <div class="features-item__img">
                <img src="/feature-img3.png" alt="">
              </div>
              <p class="features-item__title">通过评级促进女孩</p>
              <p class="features-item__text">评分最高的女孩将前往中国学习和发展文化！ 在那里我们可以与他们见面并在特别会议上现场聊天！<br>
向女孩们提问，观看广播，赠送礼物并表现出关注的迹象-所有这些都促进了您对评级感兴趣的女孩</p>
            </div>
            <div class="features-item">
              <div class="features-item__img">
                <img src="/feature-img4.png" alt="">
              </div>
              <p class="features-item__title">无限的可能性</p>
              <p class="features-item__text">我们的平台使用内部货币“水晶”，您可以为此：<br>
-亲自向女孩购买商品（签名，绘画，带有祝贺和笑话的视频）<br>
-吸引注意并向选定的女孩赠送礼物和贴纸，同时提升她们的等级</p>
            </div>
          </div>
        </div>
      </div>

    </section>
    <section class="slider-girls">
      <div class="container">
        <h3 class="section-title"> <nuxt-link to="/girls"><span>我们的女孩</span>正在等你！</nuxt-link> </h3>
        <p>只有在我们的门户网站上注册后，您才能打开该女孩的个人资料！ 加入并开始与这些真实的女孩聊天</p>
      </div>
      <client-only>
        <swiper class="slider-girls__wrapper"  :options="swiperOption">
          <div class="swiper-pagination" slot="pagination"></div>
          <swiper-slide v-for="streamer in streamers" :key="streamer.id">
            <GirlCard :nickname="streamer.nickname" :avatar="streamer.avatar" :fio="streamer.fio"/>
          </swiper-slide>
        </swiper>
        <div class="swiper-pagination" slot="pagination"></div>
      </client-only>

    </section>
    <section class="steps">
      <div class="container">
        <h3 class="section-title">女孩<span>如何使用</span>我们的平台？</h3>
        <div class="steps-wrapper">
          <div class="steps__items">
            <div @click="selectedStep=index" class="steps-item" v-for="(step,index) in steps"
                 :key="step.id" :class="{'stepItemActive':selectedStep===index}">
              <p class="steps-item__num" v-html="step.num"></p>
              <div class="steps-item__group">
                <p class="steps-item__group--top" v-html="step.title"></p>
                <p class="steps-item__group--bottom" v-html="step.text"></p>
              </div>
            </div>

          </div>
          <div class="steps-item__image">
            <el-image  :src="steps[selectedStep].img">
              <div style="width: 100%;height: 100%" slot="placeholder" v-loading="true" class="image-slot">
              </div>
            </el-image>
          </div>


        </div>
      </div>
    </section>
    <section class="pricing">
      <div class="container">
        <h3 class="section-title">我们的房价</h3>
        <div class="pricing-wrapper">
          <div class="pricing-item">
            <div class="pricing-item__decor decor-one">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.59 13.41L13.42 20.58C13.2343 20.766 13.0137 20.9135 12.7709 21.0141C12.5281 21.1148 12.2678 21.1666 12.005 21.1666C11.7422 21.1666 11.4819 21.1148 11.2391 21.0141C10.9963 20.9135 10.7757 20.766 10.59 20.58L2 12V2H12L20.59 10.59C20.9625 10.9647 21.1716 11.4716 21.1716 12C21.1716 12.5284 20.9625 13.0353 20.59 13.41V13.41Z" stroke="#f64953" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7 7H7.01" stroke="#f64953" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <p class="pricing-item__name price-one">每月固定费用</p>
            <p class="pricing-item__price">124.00 <span>Y</span></p>
            <div class="pricing-item__infos">
              <p class="pricing-item__info"><img src="/check-mark.svg" alt="">一般聊天中的交流</p>
              <p class="pricing-item__info"><img src="/check-mark.svg" alt="">使用相机</p>
              <p class="pricing-item__info"><img src="/check-mark.svg" alt="">送礼物的能力</p>
            </div>
            <p @click="openModalBtn_click" class="btn btn-l-blue">成为参与者</p>
          </div>
          <div class="pricing-item  price-vip">
            <div class="pricing-item__decor decor-two">
              <div class="crown">
                <svg  width="44" height="31" viewBox="0 0 44 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.62891 9.28153C1.62891 10.6181 2.68545 11.7191 3.99736 11.7339L9.64951 28.9924L9.80662 29.4721L10.2848 29.3104C13.9659 28.0658 17.9097 27.3842 21.9999 27.3842C26.09 27.3842 30.0339 28.0658 33.7149 29.3104L34.1939 29.4724L34.3505 28.9917L39.9734 11.7339C41.314 11.719 42.3412 10.6183 42.3412 9.31157C42.3412 7.95565 41.2602 6.88909 39.9459 6.88909C38.592 6.88909 37.5506 7.99595 37.5506 9.31157C37.5506 10.0461 37.8664 10.7022 38.3755 11.1448C37.3876 12.1879 35.9111 13.6753 34.3919 14.9643C33.5193 15.7047 32.644 16.3698 31.8473 16.8471C31.0324 17.3353 30.3708 17.5829 29.9068 17.5829C29.0076 17.5829 28.1738 17.1536 27.3926 16.3778C26.6085 15.599 25.9112 14.5025 25.3033 13.2565C24.1791 10.952 23.4065 8.23278 22.9472 6.33608C23.7848 5.95499 24.3656 5.09883 24.3656 4.11486C24.3656 2.75894 23.2845 1.69238 21.9703 1.69238C20.6163 1.69238 19.575 2.79925 19.575 4.11486C19.575 5.09883 20.1558 5.95499 20.9933 6.33608C20.5341 8.23278 19.7614 10.952 18.6372 13.2565C18.0294 14.5025 17.3321 15.599 16.5479 16.3778C15.7667 17.1536 14.9329 17.5829 14.0337 17.5829C13.5697 17.5829 12.9081 17.3353 12.0932 16.8471C11.2965 16.3698 10.4212 15.7047 9.54864 14.9643C8.02938 13.6753 6.55293 12.1879 5.56506 11.1448C6.07411 10.7022 6.38988 10.0461 6.38988 9.31157C6.38988 7.95565 5.30883 6.88909 3.99459 6.88909C2.67526 6.88909 1.62891 7.96077 1.62891 9.28153Z" fill="#FFB800" stroke="#FF7A00"/>
                </svg>
              </div>
              <svg width="41" height="19" viewBox="0 0 41 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.0312 0.847656L10.7266 19H6.35547L0.132812 0.847656H4.30469L8.23047 13.6797C8.42578 14.3125 8.54688 14.9102 8.59375 15.4727H8.66406C8.72656 14.8945 8.85938 14.2812 9.0625 13.6328L12.9883 0.847656H17.0312ZM23.1133 0.847656V19H19.2461V0.847656H23.1133ZM31.1875 12.6719V19H27.3203V0.847656H33.5664C38.082 0.847656 40.3398 2.76172 40.3398 6.58984C40.3398 8.44922 39.6562 9.94141 38.2891 11.0664C36.9297 12.1836 35.2266 12.7188 33.1797 12.6719H31.1875ZM31.1875 3.84766V9.70703H32.8633C35.1367 9.70703 36.2734 8.71875 36.2734 6.74219C36.2734 4.8125 35.1484 3.84766 32.8984 3.84766H31.1875Z" fill="white"/>
              </svg>
            </div>
            <p class="pricing-item__name price-two">VIP费是最好的</p>
            <p class="pricing-item__price">999.00 <span>Y</span></p>
            <div class="pricing-item__infos">
              <p class="pricing-item__info"><img src="/check-mark.svg" alt="">一般聊天中的交流</p>
              <p class="pricing-item__info"><img src="/check-mark.svg" alt="">使用相机</p>
              <p class="pricing-item__info"><img src="/check-mark.svg" alt="">送礼物的能力</p>
              <p class="pricing-item__info"><img src="/check-mark.svg" alt="">获得VIP功能</p>
              <p class="pricing-item__info"><img src="/check-mark.svg" alt="">VIP俱乐部：您的广播和专辑</p>
            </div>
            <p @click="openModalBtn_click" class="btn btn-l-blue">成为参与者</p>
            <p>
               <nuxt-link to="/info/vip-introduction" class="pricing-item__small-text">
              有关VIP功能的更多信息
            </nuxt-link>
            </p>


          </div>
          <div class="pricing-item">
            <div class="pricing-item__decor decor-one">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 2L19 4M19 4L22 7L18.5 10.5L15.5 7.5M19 4L15.5 7.5M11.39 11.61C11.9064 12.1195 12.3168 12.726 12.5978 13.3948C12.8787 14.0635 13.0246 14.7813 13.0271 15.5066C13.0295 16.232 12.8884 16.9507 12.6119 17.6213C12.3355 18.2919 11.9291 18.9012 11.4162 19.4141C10.9033 19.9271 10.294 20.3334 9.62333 20.6099C8.95271 20.8864 8.23403 21.0275 7.50866 21.025C6.7833 21.0226 6.06557 20.8767 5.39682 20.5958C4.72807 20.3148 4.1215 19.9043 3.61203 19.388C2.61016 18.3507 2.05579 16.9614 2.06832 15.5193C2.08085 14.0772 2.65928 12.6977 3.67903 11.678C4.69877 10.6583 6.07824 10.0798 7.52032 10.0673C8.96241 10.0548 10.3517 10.6091 11.389 11.611L11.39 11.61ZM11.39 11.61L15.5 7.5" stroke="#FFB800" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>

            </div>
            <p class="pricing-item__name price-three">每月固定费用</p>
            <p class="pricing-item__price">355.00 <span>Y</span></p>
            <div class="pricing-item__infos">
              <p class="pricing-item__info"><img src="/check-mark.svg" alt="">一般聊天中的交流</p>
              <p class="pricing-item__info"><img src="/check-mark.svg" alt="">使用相机</p>
              <p class="pricing-item__info"><img src="/check-mark.svg" alt="">送礼物的能力</p>
            </div>
            <p @click="openModalBtn_click" class="btn btn-l-blue">成为参与者</p>
          </div>
        </div>
      </div>
    </section>
    <section class="why-we">
      <div class="container">
        <h3 class="section-title"><span>我们平台</span>的功能</h3>
        <div class="why-we-wrapper">
          <div class="why-we-item">
            <img src="/why-img-1.png" alt="">
            <p>美丽的俄罗斯 姑娘的海洋</p>
          </div>
          <div class="why-we-item">
            <img src="/why-img-2.png" alt="">
            <p>交流的机会：聊天和广播</p>
          </div>
          <div class="why-we-item">
            <img src="/why-img-3.png" alt="">
            <p>通过兴趣和 爱好互相寻找</p>
          </div>
          <div class="why-we-item">
            <img src="/why-img-4.png" alt="">
            <p>开放：在个人资 料中谈论自己</p>
          </div>
        </div>
      </div>
    </section>
    <section class="road-map">
      <div class="container">
        <h3 class="section-title">在我们平台上发展女<span>孩的路线图</span></h3>
      </div>
      <div class="road-map__inner">
        <div class="container">
          <div data-num="1" class="road-map__item num  road-map__item--first">
            <img src="/road_map_1.png" alt="">
            <p>女孩开始交流，向我们注册</p>
          </div>
          <div data-num="2" class="road-map__item num  road-map__item--second">
            <img src="/road_map_2.png" alt="">
            <p>学习中国 语言和文化</p>
          </div>
          <div data-num="3" class="road-map__item num  road-map__item--third">
            <img src="/road_map_3.png" alt="">
            <p>通过捐赠和捐 赠提高其评分</p>
          </div>
          <div data-text="决赛" class="road-map__item text  road-map__item--four">
            <img src="/road_map_4.png" alt="">
            <p>每六个月，获得TOP3评级的女孩实现他们的梦想-前往上海学习</p>
          </div>

        </div>
      </div>

    </section>
    <section class="faq">
      <div class="container">
        <div class="faq-wrapper">
          <h3 class="section-title">
            有关我们 <span>平台的问</span> 题的答案
          </h3>
          <div class="faq-items">
            <div class="faq-item" v-for="(faq,index) in faqs" :key="faq.id" :class="{'faqItemActive':accordeonActive===index}">
              <div class="faq-item__top" @click="accordeonActive=index">
                <p>{{faq.question}}</p>
                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="17" cy="17" r="16.5" fill="white" stroke="#CECFDF"/>
                  <path d="M17 21L13.5359 15L20.4641 15L17 21Z" fill="#CECFDF"/>
                </svg>
              </div>
              <div class="faq-item__content">
                <div class="faq-item__content--inner">
                  <p v-html="faq.answer"></p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
    <section class="best-users ">
      <div class="container">
        <h3 class="section-title mb-30">评分<span>最高的参与</span>者委员会</h3>
        <p class="mb-30">增加您的评分-聊天并送礼物，结识女孩并送礼物！</p>
        <div class="best-users-first">
          <div class="best-user-item user-gold user-top">
            <nuxt-link to="/">
              <div data-num="4" class="best-user-item__img">
                <img src="/temp/chin1.jpg" alt="">
              </div>
              <p class="best-user-item__name">Hei Pi Jey</p>
              <p class="best-user-item__score">捐赠了7320颗水晶</p>

            </nuxt-link>
          </div>
          <div class="best-user-item user-sliver user-top">
            <nuxt-link to="/">
              <div data-num="4" class="best-user-item__img">
                <img src="/temp/chin2.jpg" alt="">
              </div>
              <p class="best-user-item__name">Hei Pi Jey</p>
              <p class="best-user-item__score">捐赠了7320颗水晶</p>

            </nuxt-link>
          </div>
          <div class="best-user-item user-bronze user-top">
            <nuxt-link to="/">
              <div data-num="4" class="best-user-item__img">
                <img src="/temp/chin3.png" alt="">
              </div>
              <p class="best-user-item__name">Hei Pi Jey</p>
              <p class="best-user-item__score">捐赠了7320颗水晶</p>

            </nuxt-link>
          </div>
        </div>
        <div class="best-users-second">
          <div class="best-user-item">
            <nuxt-link to="/">
              <div data-num="4" class="best-user-item__img">
                <img src="/temp/chin8.jpg" alt="">
              </div>
              <p class="best-user-item__name">Hei Pi Jey</p>
              <p class="best-user-item__score">捐赠了7320颗水晶</p>

            </nuxt-link>
          </div>
          <div class="best-user-item">
            <nuxt-link to="/">
              <div data-num="5" class="best-user-item__img">
                <img src="/temp/chin14.jpg" alt="">
              </div>
              <p class="best-user-item__name">Hei Pi Jey</p>
              <p class="best-user-item__score">捐赠了7320颗水晶</p>

            </nuxt-link>
          </div>
          <div class="best-user-item">
            <nuxt-link to="/">
              <div data-num="6" class="best-user-item__img">
                <img src="/temp/chin15.jpg" alt="">
              </div>
              <p class="best-user-item__name">Hei Pi Jey</p>
              <p class="best-user-item__score">捐赠了7320颗水晶</p>

            </nuxt-link>
          </div>
        </div>

      </div>
    </section>
    <section class="best-girls">
      <div class="container">
        <h3 class="section-title "><span>我们女孩的</span>最高评价</h3>
        <p class="mb-30">在这里，您可以看到我们所有女孩的评分！ 将您的女友提升到令人垂涎的中国之行的顶部！</p>
        <div class="best-girls-wrapper">
          <div @click="$router.push(`/profile/${girl.nickname}`)" class="best-girls-item" v-for="(girl,index) in top_streamers" :key="girl.id">
            <div class="best-girls-item__num">{{index+1}}</div>
            <div class="best-girls-item__img">
              <img :src="girl.avatar" alt="">
            </div>
            <div class="best-girls-item__score"><img src="/girl_rating_icon.png" alt="">{{girl.streamer_rating}}</div>
            <div class="best-girls-item__name">{{girl.fio}}</div>
            <div class="best-girls-item__link">@{{girl.nickname}}</div>

          </div>

        </div>
      </div>
    </section>

  </div>
</template>
<script>
import GirlCard from '@/components/GirlCard'
import StreamCard from '@/components/StreamCard'
export default {
  components: {
    GirlCard,
    StreamCard
  },
  async fetch({store}){
    await store.dispatch('user_bg/fetchUserBg')
  },
  async asyncData({$axios,params}){
    console.log(params)
    try{
      const get_streamers = await $axios.get(`/api/v1/user/get_streamers?at_home=true`)
      const get_top_streamers = await $axios.get(`/api/v1/user/get_streamers?top5=true`)
      const get_streams = await $axios.get(`/api/v1/stream/get_streams_for_home_page`)
      //const get_banners = await $axios.get(`/api/v1/gallery/get_banners`)
      //const response_donaters = await $axios.get(`/api/v1/gift/get_user_top10_donaters`)
      const streamers = get_streamers.data
      const top_streamers = get_top_streamers.data
      const streams = get_streams.data
      //const banners = get_banners.data
      //const top_donaters = response_donaters.data
      console.log('streams',streams)
      return {streamers,streams,top_streamers}//,top_donaters,banners
    }catch (e) {
      const err = 404
      return {err}
    }
  },
  data(){
    return {
      steps:[
        {id:1,num:'01',title:'个人资料',text:'每个女孩都填写自己的个人资料：她的兴趣，喜欢的电影和音乐类型，书籍和兴趣爱好',img:'/step1.png'},
        {id:2,num:'02',title:'通讯与广播',text:'女孩为您启动广播并等待响应！ 给她的每条信息，每一份礼物和关注都很重要。 您越活跃，女孩的评价就越高',img:'/step2.png'},
        {id:3,num:'03',title:'学习语言和文化',text:'在交流过程中，女孩学习汉语和中国文化，学习有关这个美丽国家的信息，并准备搬家',img:'/step3.png'},
        {id:4,num:'决<br>赛',title:'计算收视率和中国之行',text:'在六个月的最后，我们将计算出评分最高的女孩，并派她们去中国学习和旅行！ 您将能够与他们见面并聊天，参加常规活动并享有独特的体验！',img:'/step4.png'},
      ],
      selectedStep:0,
      faqs:[
        {id:1,question:'如何使用我们的平台？',answer:'在该网站上注册，填写您的个人资料，并放置头像。 然后，您可以充分利用我们的服务：与女孩见面并聊天，观看广播并参加小组讨论，提供礼物并从女孩那里购买商品！'},
        {id:2,question:'为什么要付费访问？',answer:'与来自俄罗斯的女孩交流的经验是一个非常有趣的话题。 我们仅对真正感兴趣的交流对象提供对该网站的访问权限，因为否则，这些女孩将无法应付想要使用我们服务的大量人流！'},
        {id:3,question:'什么是水晶，我该如何使用它们？',answer:'水晶是我们平台上的本地货币。 有了它，您可以方便快捷地向女孩赠送礼物并表现出关注的迹象，成为女孩的粉丝，为女孩自己订购女孩和商品的私人礼物，以及请求个人广播！\n' +
              '\n' +
              '每月使用我们的平台，您将以常规价格获得300个晶体，以VIP速率获得1200个晶体。 如果您没有足够的货币，您总是可以立即从您的个人账户充值水晶的余额！'},
        {id:4,question:'我对您的平台有任何疑问或建议！ 我该如何联系您？',answer:'从网站的标题或网站的页脚转到“联系人”部分，并向您写下您的问题，对我们工作的反馈或对我们平台开发的希望！'},
        {id:5,question:'我如何查看您平台的功能？',answer:'<a href="/info/guide">您可以在此处查看平台的全部功能</a> <br>' +
              '<a href="/info/vip-introduction">这里介绍了VIP功能</a>。'},
      ],
      accordeonActive:0,
      swiperOption: {
        //slidesPerView: 5,
        spaceBetween: 20,
        //centeredSlides: true,
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true
        },
        breakpoints: {
          // when window width is >= 320px
          320: {
            centeredSlides: true,
            slidesPerView: 1,
            spaceBetween: 20
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 1,
            spaceBetween: 30
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 5,
            spaceBetween: 40
          }
        }
      },
      swiperOptionBanner: {
        //slidesPerView: 5,

        //centeredSlides: true,
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          // when window width is >= 320px
          320: {
            centeredSlides: true,
            slidesPerView: 1,
            spaceBetween: 20
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 1,
            spaceBetween: 30
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 1,
            spaceBetween: 40
          }
        }
      },
    }
  },
  methods:{
    openModalBtn_click(){
      document.getElementById('openModalBtn').click()
    }
  }
}
</script>



