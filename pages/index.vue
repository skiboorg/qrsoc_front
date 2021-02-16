<template>
  <div id="1top" >
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
    <section class="video-block" >
      <div class="container">
        <div class="video-block__wrapper">
          <div class="video-block__content">
            <div class="video-block__user">
              <img class="video-block__user--avatar" :src="streamers[0].avatar" alt="">
              <p class="video-block__user--name">{{streamers[0].fio}}</p>
              <p class="video-block__user--nickname">@{{streamers[0].nickname}}</p>
              <img class="video-block__user--icon"  src="/girl_rating_icon.png" alt="">
              <p class="video-block__user--rating">{{streamers[0].streamer_rating}}</p>
              <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.4733 8.65897C11.1269 8.13352 11.604 7.41297 11.8382 6.59756C12.0723 5.78216 12.0519 4.91245 11.7799 4.10943C11.5078 3.30641 10.9975 2.61002 10.32 2.11713C9.64259 1.62424 8.83163 1.35938 8 1.35938C7.16836 1.35937 6.35741 1.62424 5.67995 2.11713C5.0025 2.61002 4.49223 3.30641 4.22014 4.10943C3.94805 4.91245 3.92767 5.78216 4.16184 6.59756C4.396 7.41297 4.87307 8.13352 5.52666 8.65897C4.40672 9.11746 3.42952 9.87791 2.69926 10.8592C1.969 11.8406 1.51304 13.006 1.38 14.2313C1.37037 14.3208 1.37808 14.4113 1.40268 14.4977C1.42729 14.5841 1.46831 14.6648 1.52341 14.735C1.63468 14.8768 1.79652 14.9676 1.97333 14.9875C2.15014 15.0074 2.32744 14.9546 2.46621 14.841C2.60499 14.7272 2.69388 14.5619 2.71333 14.3812C2.85972 13.0496 3.48112 11.8197 4.45881 10.9266C5.4365 10.0335 6.70193 9.5398 8.01333 9.5398C9.32473 9.5398 10.5902 10.0335 11.5679 10.9266C12.5455 11.8197 13.1669 13.0496 13.3133 14.3812C13.3315 14.5486 13.4096 14.7032 13.5327 14.8151C13.6559 14.9271 13.8152 14.9885 13.98 14.9875H14.0533C14.2281 14.9669 14.3878 14.8766 14.4977 14.7363C14.6076 14.5959 14.6587 14.4169 14.64 14.2381C14.5063 13.0094 14.0479 11.8409 13.3139 10.8581C12.5799 9.87523 11.5979 9.11503 10.4733 8.65897ZM8 8.1753C7.47258 8.1753 6.95701 8.01549 6.51848 7.71608C6.07995 7.41667 5.73815 6.9911 5.53632 6.49319C5.33449 5.99529 5.28168 5.44741 5.38457 4.91883C5.48746 4.39026 5.74144 3.90473 6.11438 3.52365C6.48732 3.14257 6.96248 2.88305 7.47976 2.77791C7.99704 2.67277 8.53322 2.72674 9.02049 2.93297C9.50776 3.13921 9.92423 3.48847 10.2173 3.93657C10.5103 4.38467 10.6667 4.9115 10.6667 5.45043C10.6667 6.17311 10.3857 6.86619 9.88562 7.37721C9.38552 7.88822 8.70724 8.1753 8 8.1753Z" fill="#383845"/>
              </svg>
              <p>888</p>

            </div>
            <video autoplay loop muted>
              <source src="/vid.mp4" type="video/mp4">
              Your browser does not support HTML video.
            </video>
          </div>
          <div class="video-block__banners">
            <img src="/video_block/banner.jpg" alt="">
            <img src="/video_block/banner-1.jpg" alt="">
            <img src="/video_block/banner-2.jpg" alt="">
          </div>
        </div>
      </div>
    </section>
    <section class="slider-girls">
      <div class="container">
        <h3 class="section-title"> <nuxt-link to="/girls">我们的星星</nuxt-link> </h3>

      </div>
      <client-only>
        <swiper class="slider-girls__wrapper"  :options="swiperOption">
          <div class="swiper-pagination" slot="pagination"></div>
          <swiper-slide v-for="streamer in streamers" :key="streamer.id">
            <GirlCard :nickname="streamer.nickname"
                      :avatar="streamer.avatar"
                      :fio="streamer.fio"
                      :rating="streamer.streamer_rating"
                      :is_online="streamer.is_online"/>
          </swiper-slide>
        </swiper>
        <div class="swiper-pagination" slot="pagination"></div>
      </client-only>

    </section>
    <section class="streams-block">
      <div class="container">
        <div class="streams-block__wrapper">
          <div class="streams-block__left">
            <h3 class="section-title">现在在网站上</h3>
            <div class="streams-block__items">
              <div class="streams-block__item" v-for="stream in streams" :key="stream.id">
                <el-image  :src="stream.image" lazy fit="cover"></el-image>
                <div class="streams-block__item--bottom">
                  <p >{{stream.name}}</p>
                  <div class="streams-block__item--bottom-inner">
                    <p >{{new Date (stream.date).toLocaleDateString()}}</p>
                  </div>
                </div>
                <div class="streams-block__item--bottom">
                  <p class="text-grey">@{{stream.streamer.nickname}}</p>
                  <div class="streams-block__item--bottom-inner">
                    <img src="/girl_rating_icon.png" alt="">
                    <p class="font-bold">{{stream.streamer.streamer_rating}}</p>
                  </div>
                </div>

              </div>


            </div>
          </div>
          <div class="streams-block__right">
            <div class="streams-block__right--tabs">
              <div class="streams-block__right--tabs__item tabItemActive">
                <p>女孩的等级</p>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.29 12.8135C9.247 12.8593 9.20692 12.9076 9.17 12.9581C9.13216 13.0119 9.10189 13.0703 9.08 13.1317C9.05117 13.1863 9.03095 13.2448 9.02 13.3052C9.01509 13.3694 9.01509 13.4339 9.02 13.4981C9.01662 13.6245 9.04402 13.75 9.1 13.8644C9.14492 13.9841 9.21657 14.0928 9.30989 14.1827C9.40321 14.2727 9.51591 14.3418 9.64 14.3851C9.7597 14.4361 9.88913 14.4624 10.02 14.4624C10.1509 14.4624 10.2803 14.4361 10.4 14.3851C10.5241 14.3418 10.6368 14.2727 10.7301 14.1827C10.8234 14.0928 10.8951 13.9841 10.94 13.8644C10.9844 13.7472 11.0048 13.6228 11 13.4981C11.0008 13.3712 10.9755 13.2454 10.9258 13.1279C10.876 13.0105 10.8027 12.9036 10.71 12.8135C10.617 12.7232 10.5064 12.6514 10.3846 12.6025C10.2627 12.5535 10.132 12.5283 10 12.5283C9.86799 12.5283 9.73729 12.5535 9.61543 12.6025C9.49357 12.6514 9.38297 12.7232 9.29 12.8135ZM10 0C8.02219 0 6.08879 0.565463 4.4443 1.62488C2.79981 2.6843 1.51809 4.19009 0.761209 5.95184C0.00433284 7.71359 -0.1937 9.65217 0.192152 11.5224C0.578004 13.3927 1.53041 15.1106 2.92894 16.459C4.32746 17.8074 6.10929 18.7257 8.0491 19.0977C9.98891 19.4697 11.9996 19.2788 13.8268 18.549C15.6541 17.8193 17.2159 16.5835 18.3147 14.998C19.4135 13.4125 20 11.5484 20 9.64148C20 8.37534 19.7413 7.1216 19.2388 5.95184C18.7362 4.78209 17.9997 3.71922 17.0711 2.82392C16.1425 1.92863 15.0401 1.21844 13.8268 0.733914C12.6136 0.249384 11.3132 0 10 0ZM10 17.3547C8.41775 17.3547 6.87103 16.9023 5.55544 16.0548C4.23985 15.2072 3.21447 14.0026 2.60897 12.5932C2.00347 11.1838 1.84504 9.63292 2.15372 8.13671C2.4624 6.6405 3.22433 5.26614 4.34315 4.18743C5.46197 3.10873 6.88743 2.37412 8.43928 2.0765C9.99113 1.77889 11.5997 1.93163 13.0615 2.51543C14.5233 3.09922 15.7727 4.08784 16.6518 5.35626C17.5308 6.62469 18 8.11595 18 9.64148C18 11.6871 17.1571 13.649 15.6569 15.0955C14.1566 16.542 12.1217 17.3547 10 17.3547ZM10 4.82074C9.47307 4.82041 8.95534 4.95391 8.49891 5.20779C8.04249 5.46167 7.66347 5.82698 7.4 6.26696C7.32765 6.3767 7.27907 6.49941 7.25718 6.62772C7.23529 6.75603 7.24054 6.88728 7.27263 7.01358C7.30472 7.13988 7.36297 7.25862 7.44389 7.36265C7.5248 7.46668 7.62671 7.55386 7.74347 7.61893C7.86024 7.68401 7.98945 7.72563 8.12334 7.74131C8.25722 7.75699 8.39301 7.7464 8.52254 7.71017C8.65207 7.67394 8.77266 7.61282 8.87705 7.53049C8.98145 7.44817 9.06749 7.34633 9.13 7.23111C9.21811 7.08397 9.34497 6.9619 9.49775 6.87724C9.65053 6.79259 9.82379 6.74836 10 6.74903C10.2652 6.74903 10.5196 6.85061 10.7071 7.03143C10.8946 7.21224 11 7.45747 11 7.71318C11 7.96889 10.8946 8.21412 10.7071 8.39494C10.5196 8.57575 10.2652 8.67733 10 8.67733C9.73479 8.67733 9.48043 8.77891 9.2929 8.95972C9.10536 9.14053 9 9.38577 9 9.64148V10.6056C9 10.8613 9.10536 11.1066 9.2929 11.2874C9.48043 11.4682 9.73479 11.5698 10 11.5698C10.2652 11.5698 10.5196 11.4682 10.7071 11.2874C10.8946 11.1066 11 10.8613 11 10.6056V10.4321C11.6614 10.2007 12.2174 9.75257 12.5708 9.16603C12.9242 8.57948 13.0525 7.89183 12.9334 7.22329C12.8143 6.55475 12.4552 5.94784 11.919 5.50867C11.3828 5.0695 10.7035 4.826 10 4.82074Z" fill="#CECFDF"/>
                </svg>
              </div>
              <div class="streams-block__right--tabs__item">
                <p>女孩的等级</p>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.29 12.8135C9.247 12.8593 9.20692 12.9076 9.17 12.9581C9.13216 13.0119 9.10189 13.0703 9.08 13.1317C9.05117 13.1863 9.03095 13.2448 9.02 13.3052C9.01509 13.3694 9.01509 13.4339 9.02 13.4981C9.01662 13.6245 9.04402 13.75 9.1 13.8644C9.14492 13.9841 9.21657 14.0928 9.30989 14.1827C9.40321 14.2727 9.51591 14.3418 9.64 14.3851C9.7597 14.4361 9.88913 14.4624 10.02 14.4624C10.1509 14.4624 10.2803 14.4361 10.4 14.3851C10.5241 14.3418 10.6368 14.2727 10.7301 14.1827C10.8234 14.0928 10.8951 13.9841 10.94 13.8644C10.9844 13.7472 11.0048 13.6228 11 13.4981C11.0008 13.3712 10.9755 13.2454 10.9258 13.1279C10.876 13.0105 10.8027 12.9036 10.71 12.8135C10.617 12.7232 10.5064 12.6514 10.3846 12.6025C10.2627 12.5535 10.132 12.5283 10 12.5283C9.86799 12.5283 9.73729 12.5535 9.61543 12.6025C9.49357 12.6514 9.38297 12.7232 9.29 12.8135ZM10 0C8.02219 0 6.08879 0.565463 4.4443 1.62488C2.79981 2.6843 1.51809 4.19009 0.761209 5.95184C0.00433284 7.71359 -0.1937 9.65217 0.192152 11.5224C0.578004 13.3927 1.53041 15.1106 2.92894 16.459C4.32746 17.8074 6.10929 18.7257 8.0491 19.0977C9.98891 19.4697 11.9996 19.2788 13.8268 18.549C15.6541 17.8193 17.2159 16.5835 18.3147 14.998C19.4135 13.4125 20 11.5484 20 9.64148C20 8.37534 19.7413 7.1216 19.2388 5.95184C18.7362 4.78209 17.9997 3.71922 17.0711 2.82392C16.1425 1.92863 15.0401 1.21844 13.8268 0.733914C12.6136 0.249384 11.3132 0 10 0ZM10 17.3547C8.41775 17.3547 6.87103 16.9023 5.55544 16.0548C4.23985 15.2072 3.21447 14.0026 2.60897 12.5932C2.00347 11.1838 1.84504 9.63292 2.15372 8.13671C2.4624 6.6405 3.22433 5.26614 4.34315 4.18743C5.46197 3.10873 6.88743 2.37412 8.43928 2.0765C9.99113 1.77889 11.5997 1.93163 13.0615 2.51543C14.5233 3.09922 15.7727 4.08784 16.6518 5.35626C17.5308 6.62469 18 8.11595 18 9.64148C18 11.6871 17.1571 13.649 15.6569 15.0955C14.1566 16.542 12.1217 17.3547 10 17.3547ZM10 4.82074C9.47307 4.82041 8.95534 4.95391 8.49891 5.20779C8.04249 5.46167 7.66347 5.82698 7.4 6.26696C7.32765 6.3767 7.27907 6.49941 7.25718 6.62772C7.23529 6.75603 7.24054 6.88728 7.27263 7.01358C7.30472 7.13988 7.36297 7.25862 7.44389 7.36265C7.5248 7.46668 7.62671 7.55386 7.74347 7.61893C7.86024 7.68401 7.98945 7.72563 8.12334 7.74131C8.25722 7.75699 8.39301 7.7464 8.52254 7.71017C8.65207 7.67394 8.77266 7.61282 8.87705 7.53049C8.98145 7.44817 9.06749 7.34633 9.13 7.23111C9.21811 7.08397 9.34497 6.9619 9.49775 6.87724C9.65053 6.79259 9.82379 6.74836 10 6.74903C10.2652 6.74903 10.5196 6.85061 10.7071 7.03143C10.8946 7.21224 11 7.45747 11 7.71318C11 7.96889 10.8946 8.21412 10.7071 8.39494C10.5196 8.57575 10.2652 8.67733 10 8.67733C9.73479 8.67733 9.48043 8.77891 9.2929 8.95972C9.10536 9.14053 9 9.38577 9 9.64148V10.6056C9 10.8613 9.10536 11.1066 9.2929 11.2874C9.48043 11.4682 9.73479 11.5698 10 11.5698C10.2652 11.5698 10.5196 11.4682 10.7071 11.2874C10.8946 11.1066 11 10.8613 11 10.6056V10.4321C11.6614 10.2007 12.2174 9.75257 12.5708 9.16603C12.9242 8.57948 13.0525 7.89183 12.9334 7.22329C12.8143 6.55475 12.4552 5.94784 11.919 5.50867C11.3828 5.0695 10.7035 4.826 10 4.82074Z" fill="#CECFDF"/>
                </svg>
              </div>
            </div>
            <div class="streams-block__right--tab">
              <div @click="$router.push(`/profile/${girl.nickname}`)" class="best-girls-item indexMode" v-for="(girl,index) in top_streamers" :key="girl.id">
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
    </section>

    <section class="features-block">
      <div class="container ">
        <div class="features-block__top">
          <p @click="featuresActiveTab=!featuresActiveTab"
             :class="{'linkActive':!featuresActiveTab}" class="features-block__top--link ">平台功能</p>
          <p @click="featuresActiveTab=!featuresActiveTab"
             :class="{'linkActive':featuresActiveTab}" class="features-block__top--link">这个怎么运作?</p>
        </div>
      </div>
      <div class="features-block__bg">
        <div class="container">
          <div v-if="!featuresActiveTab" class="features-block__inner grid">
            <el-image src="/features/1.jpg" lazy></el-image>
            <el-image src="/features/2.jpg" lazy></el-image>
            <el-image src="/features/3.jpg" lazy></el-image>
            <el-image src="/features/4.jpg" lazy></el-image>
            <el-image src="/features/5.jpg" lazy></el-image>
            <el-image src="/features/6.jpg" lazy></el-image>
          </div>
          <div v-else class="features-block__inner">

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
              <p class="pricing-item__info"><img src="/check-mark.svg" alt="">VIP俱乐部您的广播和专辑</p>
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
          <div class="pricing-payments">
            <div class="pricing-payment">
              <el-image src="/payments/vip.png" lazy></el-image>
            </div>
            <div class="pricing-payment">
              <el-image src="/payments/a-p.png" lazy></el-image>
            </div>
            <div class="pricing-payment">
              <el-image src="/payments/w-p.png" lazy></el-image>
            </div>
            <p class="btn btn-l-blue btn-outline">更多</p>
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
      featuresActiveTab:false,
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
        {id:6,question:'我如何查看您平台的功能？',answer:'<a href="/info/guide">您可以在此处查看平台的全部功能</a> <br>' +
              '<a href="/info/vip-introduction">这里介绍了VIP功能</a>。'},
        {id:7,question:'我如何查看您平台的功能？',answer:'<a href="/info/guide">您可以在此处查看平台的全部功能</a> <br>' +
              '<a href="/info/vip-introduction">这里介绍了VIP功能</a>。'},
      ],
      accordeonActive:0,
      swiperOption: {
        //slidesPerView: 5,
        spaceBetween: 0,
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
            //centeredSlides: true,
            slidesPerView: 7,
            spaceBetween: 20
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



