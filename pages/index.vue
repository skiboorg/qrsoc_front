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
              <svg width="25" height="25" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.4733 8.65897C11.1269 8.13352 11.604 7.41297 11.8382 6.59756C12.0723 5.78216 12.0519 4.91245 11.7799 4.10943C11.5078 3.30641 10.9975 2.61002 10.32 2.11713C9.64259 1.62424 8.83163 1.35938 8 1.35938C7.16836 1.35937 6.35741 1.62424 5.67995 2.11713C5.0025 2.61002 4.49223 3.30641 4.22014 4.10943C3.94805 4.91245 3.92767 5.78216 4.16184 6.59756C4.396 7.41297 4.87307 8.13352 5.52666 8.65897C4.40672 9.11746 3.42952 9.87791 2.69926 10.8592C1.969 11.8406 1.51304 13.006 1.38 14.2313C1.37037 14.3208 1.37808 14.4113 1.40268 14.4977C1.42729 14.5841 1.46831 14.6648 1.52341 14.735C1.63468 14.8768 1.79652 14.9676 1.97333 14.9875C2.15014 15.0074 2.32744 14.9546 2.46621 14.841C2.60499 14.7272 2.69388 14.5619 2.71333 14.3812C2.85972 13.0496 3.48112 11.8197 4.45881 10.9266C5.4365 10.0335 6.70193 9.5398 8.01333 9.5398C9.32473 9.5398 10.5902 10.0335 11.5679 10.9266C12.5455 11.8197 13.1669 13.0496 13.3133 14.3812C13.3315 14.5486 13.4096 14.7032 13.5327 14.8151C13.6559 14.9271 13.8152 14.9885 13.98 14.9875H14.0533C14.2281 14.9669 14.3878 14.8766 14.4977 14.7363C14.6076 14.5959 14.6587 14.4169 14.64 14.2381C14.5063 13.0094 14.0479 11.8409 13.3139 10.8581C12.5799 9.87523 11.5979 9.11503 10.4733 8.65897ZM8 8.1753C7.47258 8.1753 6.95701 8.01549 6.51848 7.71608C6.07995 7.41667 5.73815 6.9911 5.53632 6.49319C5.33449 5.99529 5.28168 5.44741 5.38457 4.91883C5.48746 4.39026 5.74144 3.90473 6.11438 3.52365C6.48732 3.14257 6.96248 2.88305 7.47976 2.77791C7.99704 2.67277 8.53322 2.72674 9.02049 2.93297C9.50776 3.13921 9.92423 3.48847 10.2173 3.93657C10.5103 4.38467 10.6667 4.9115 10.6667 5.45043C10.6667 6.17311 10.3857 6.86619 9.88562 7.37721C9.38552 7.88822 8.70724 8.1753 8 8.1753Z" fill="#383845"/>
              </svg>
              <p>{{streamers[0].own_friend_list[0].friend_list.length}}</p>

            </div>
            <video autoplay controls loop >
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

    <section class="page-block">
      <div class="container">
        <div class="block-w-header">
          <div class="block-w-header__header">
            <div class="block-w-header__header-title">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.75 17.5C8.75 17.5 7.5 17.5 7.5 16.25C7.5 15 8.75 11.25 13.75 11.25C18.75 11.25 20 15 20 16.25C20 17.5 18.75 17.5 18.75 17.5H8.75ZM13.75 10C14.7446 10 15.6984 9.60491 16.4017 8.90165C17.1049 8.19839 17.5 7.24456 17.5 6.25C17.5 5.25544 17.1049 4.30161 16.4017 3.59835C15.6984 2.89509 14.7446 2.5 13.75 2.5C12.7554 2.5 11.8016 2.89509 11.0983 3.59835C10.3951 4.30161 10 5.25544 10 6.25C10 7.24456 10.3951 8.19839 11.0983 8.90165C11.8016 9.60491 12.7554 10 13.75 10Z" fill="black"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.52 17.5005C6.33469 17.1103 6.24228 16.6825 6.25 16.2505C6.25 14.5568 7.1 12.813 8.67 11.6005C7.88636 11.3591 7.06994 11.241 6.25 11.2505C1.25 11.2505 0 15.0005 0 16.2505C0 17.5005 1.25 17.5005 1.25 17.5005H6.52Z" fill="black"/>
                <path d="M5.625 10C6.4538 10 7.24866 9.67076 7.83471 9.08471C8.42076 8.49866 8.75 7.7038 8.75 6.875C8.75 6.0462 8.42076 5.25134 7.83471 4.66529C7.24866 4.07924 6.4538 3.75 5.625 3.75C4.7962 3.75 4.00134 4.07924 3.41529 4.66529C2.82924 5.25134 2.5 6.0462 2.5 6.875C2.5 7.7038 2.82924 8.49866 3.41529 9.08471C4.00134 9.67076 4.7962 10 5.625 10Z" fill="black"/>
              </svg>
              <h3>现在在网站上</h3>

            </div>
            <div class="block-w-header__header-link">
              <p>现在在网站上</p>
            </div>
          </div>
          <div class="block-w-header__content">
            <div class="girls-grid">
              <GirlCard v-for="streamer in streamers" :key="streamer.id"
                        :nickname="streamer.nickname"
                        :avatar="streamer.avatar"
                        :fio="streamer.fio"
                        :rating="streamer.streamer_rating"
                        :is_online="streamer.is_online"
                        :friends="streamer.own_friend_list[0].friend_list.length"/>
            </div>


          </div>
        </div>
      </div>
    </section>
    <section class="streams-block">
      <div class="container">
        <div class="streams-block__wrapper">
          <div class="streams-block__left">
            <div class="block-w-header">
              <div class="block-w-header__header">
                <div class="block-w-header__header-title">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.75 17.5C8.75 17.5 7.5 17.5 7.5 16.25C7.5 15 8.75 11.25 13.75 11.25C18.75 11.25 20 15 20 16.25C20 17.5 18.75 17.5 18.75 17.5H8.75ZM13.75 10C14.7446 10 15.6984 9.60491 16.4017 8.90165C17.1049 8.19839 17.5 7.24456 17.5 6.25C17.5 5.25544 17.1049 4.30161 16.4017 3.59835C15.6984 2.89509 14.7446 2.5 13.75 2.5C12.7554 2.5 11.8016 2.89509 11.0983 3.59835C10.3951 4.30161 10 5.25544 10 6.25C10 7.24456 10.3951 8.19839 11.0983 8.90165C11.8016 9.60491 12.7554 10 13.75 10Z" fill="black"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.52 17.5005C6.33469 17.1103 6.24228 16.6825 6.25 16.2505C6.25 14.5568 7.1 12.813 8.67 11.6005C7.88636 11.3591 7.06994 11.241 6.25 11.2505C1.25 11.2505 0 15.0005 0 16.2505C0 17.5005 1.25 17.5005 1.25 17.5005H6.52Z" fill="black"/>
                    <path d="M5.625 10C6.4538 10 7.24866 9.67076 7.83471 9.08471C8.42076 8.49866 8.75 7.7038 8.75 6.875C8.75 6.0462 8.42076 5.25134 7.83471 4.66529C7.24866 4.07924 6.4538 3.75 5.625 3.75C4.7962 3.75 4.00134 4.07924 3.41529 4.66529C2.82924 5.25134 2.5 6.0462 2.5 6.875C2.5 7.7038 2.82924 8.49866 3.41529 9.08471C4.00134 9.67076 4.7962 10 5.625 10Z" fill="black"/>
                  </svg>
                  <h3>现在在网站上</h3>

                </div>
                <div class="block-w-header__header-link">
                  <p>现在在网站上</p>

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

          <div class="streams-block__right">
            <div class="block-w-header">
              <div class="block-w-header__header">
                <div class="block-w-header__header-title">
                  <h3>现在在网站上</h3>
                </div>
                <div class="block-w-header__header-link">
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
        </div>

      </div>
    </section>
    <section class="news">
      <div class="container">
        <div class="news__wrapper">
          <div class="news__left">
            <div class="block-w-header">
              <div class="block-w-header__header">
                <div class="block-w-header__header-title">现在在网站上</div>
                <div class="block-w-header__header-link"><p>现在在网站上</p></div>
              </div>
              <div class="block-w-header__content">
                <div class="news__items">
                  <img src="http://placehold.it/700x245" alt="">
                  <img src="http://placehold.it/336x120" alt="">
                  <img src="http://placehold.it/336x120" alt="">
                  <img src="http://placehold.it/336x120" alt="">
                  <img src="http://placehold.it/336x120" alt="">




                </div>
              </div>
            </div>
          </div>
          <div class="news__right">
            <div class="block-w-header">
              <div class="block-w-header__header">
                <div class="block-w-header__header-title">
                  <h3>现在在网站上</h3>
                </div>
                <div class="block-w-header__header-link">
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
        </div>
      </div>
    </section>
    <div class="features-block__bg">
      <div class="container">
        <div class="block-w-header">
          <div class="block-w-header__header">
            <div class="block-w-header__header-title">现在在网站上</div>
            <div class="block-w-header__header-buttons">
              <div @click="featuresActiveTab='tab1'" :class="{'tabButtonActive':featuresActiveTab==='tab1'}" class="block-w-header__header-button">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.25 4.66602L8.33334 5.83268L7.16667 3.74935L8.33334 1.66602L6.25 2.83268L4.16667 1.66602L5.33334 3.74935L4.16667 5.83268L6.25 4.66602ZM16.25 12.8327L14.1667 11.666L15.3333 13.7493L14.1667 15.8327L16.25 14.666L18.3333 15.8327L17.1667 13.7493L18.3333 11.666L16.25 12.8327ZM18.3333 1.66602L16.25 2.83268L14.1667 1.66602L15.3333 3.74935L14.1667 5.83268L16.25 4.66602L18.3333 5.83268L17.1667 3.74935L18.3333 1.66602ZM11.975 6.07435C11.8979 5.9971 11.8063 5.93581 11.7055 5.89399C11.6047 5.85217 11.4966 5.83065 11.3875 5.83065C11.2784 5.83065 11.1703 5.85217 11.0695 5.89399C10.9687 5.93581 10.8771 5.9971 10.8 6.07435L1.075 15.7993C0.997749 15.8764 0.93646 15.968 0.894642 16.0688C0.852824 16.1696 0.831299 16.2777 0.831299 16.3869C0.831299 16.496 0.852824 16.6041 0.894642 16.7049C0.93646 16.8057 0.997749 16.8973 1.075 16.9743L3.025 18.9243C3.35 19.2493 3.875 19.2493 4.2 18.9243L13.9167 9.20768C13.9939 9.13059 14.0552 9.03901 14.097 8.9382C14.1388 8.83739 14.1604 8.72932 14.1604 8.62018C14.1604 8.51104 14.1388 8.40297 14.097 8.30216C14.0552 8.20135 13.9939 8.10978 13.9167 8.03268L11.975 6.07435ZM11.1167 10.6493L9.35 8.88268L11.3833 6.84935L13.15 8.61602L11.1167 10.6493Z" />
                </svg>
                <p>平台功能</p>
              </div>
              <div @click="featuresActiveTab='tab2'" :class="{'tabButtonActive':featuresActiveTab==='tab2'}" class="block-w-header__header-button">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 0C8.69231 0 7.69231 1 7.69231 2.30769V6.92308C7.69231 8.23077 8.69231 9.23077 10 9.23077H14.6154L17.6923 12.3077V9.23077C19 9.23077 20 8.23077 20 6.92308V2.30769C20 1 19 0 17.6923 0H10ZM13.2215 2.30769H14.5431L15.8415 6.92308H14.6877L14.3746 5.76923H13.2208L12.9331 6.92308H11.9231L13.2215 2.30769ZM13.8462 3.07692C13.7692 3.38462 13.6831 3.76 13.6054 3.99077L13.39 5H14.3031L14.0862 3.99C13.9331 3.76 13.8462 3.38462 13.8462 3.07692ZM2.30769 7.69231C1 7.69231 0 8.69231 0 10V14.6154C0 15.9231 1 16.9231 2.30769 16.9231V20L5.38462 16.9231H10C11.3077 16.9231 12.3077 15.9231 12.3077 14.6154V10H10C8.53846 10 7.38 9 6.99538 7.69231H2.30769ZM5.84154 9.92769C7.14923 9.92769 7.76462 11.0046 7.76462 12.2354C7.76462 13.3123 7.39462 13.9954 6.77923 14.3031C7.08692 14.4569 7.45154 14.5385 7.83615 14.6154L7.54846 15.3846C7.01 15.2308 6.45154 14.9908 5.91308 14.7592C5.83615 14.6823 5.70154 14.6877 5.62462 14.6877C4.70154 14.6108 3.84615 13.8462 3.84615 12.3077C3.84615 11 4.61077 9.92769 5.84154 9.92769ZM5.84154 10.7692C5.22615 10.7692 4.92769 11.4615 4.92769 12.3077C4.92769 13.2308 5.22615 13.8462 5.84154 13.8462C6.45692 13.8462 6.77846 13.1538 6.77846 12.3077C6.77846 11.4615 6.45692 10.7692 5.84154 10.7692Z" />
                </svg>
                <p>这个怎么运作?</p>
              </div>
              <div @click="featuresActiveTab='tab3'" :class="{'tabButtonActive':featuresActiveTab==='tab3'}" class="block-w-header__header-button">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.4925 2.33453C14.4926 2.0418 14.3764 1.76102 14.1695 1.55397C13.9625 1.34692 13.6818 1.23055 13.3891 1.23047C13.2441 1.23043 13.1006 1.25894 12.9667 1.31437C12.8328 1.3698 12.7111 1.45107 12.6085 1.55353C12.4015 1.76046 12.2851 2.04117 12.285 2.33391C12.285 2.94328 13.3888 5.00078 13.3888 5.00078C13.3888 5.00078 14.4925 2.94328 14.4925 2.33391V2.33453ZM12.8613 2.33453C12.8588 2.26377 12.8706 2.19324 12.896 2.12714C12.9213 2.06104 12.9597 2.00071 13.0089 1.94977C13.058 1.89882 13.117 1.85829 13.1821 1.8306C13.2473 1.8029 13.3173 1.78861 13.3881 1.78857C13.4589 1.78852 13.529 1.80274 13.5942 1.83035C13.6594 1.85797 13.7184 1.89843 13.7676 1.94932C13.8168 2.00021 13.8553 2.06048 13.8807 2.12656C13.9062 2.19263 13.918 2.26315 13.9157 2.33391C13.911 2.47059 13.8535 2.60013 13.7552 2.69521C13.6569 2.79029 13.5255 2.84349 13.3888 2.84357C13.252 2.84365 13.1206 2.79061 13.0222 2.69565C12.9237 2.60068 12.8661 2.47121 12.8613 2.33453ZM15.8007 11.5595C15.4507 11.5595 15.115 11.5889 14.8069 11.6364L6.93753 8.73516C7.06253 8.62266 7.13253 8.49766 7.13253 8.36641C7.13092 8.29722 7.11202 8.22953 7.07753 8.16953L12.3338 6.77078C12.6213 6.85641 12.9732 6.90828 13.3625 6.90828C14.3125 6.90828 15.0813 6.60578 15.0813 6.23203C15.0813 5.85703 14.3125 5.55516 13.3625 5.55516C12.4125 5.55516 11.6438 5.85828 11.6438 6.23203C11.6438 6.27578 11.6563 6.31766 11.6775 6.35828L6.18503 7.62516C5.72452 7.49524 5.24787 7.43148 4.7694 7.43578C3.46503 7.43578 2.4069 7.85266 2.4069 8.36703C2.4069 8.88141 3.46503 9.29828 4.7694 9.29828C5.12815 9.29828 5.46315 9.26391 5.76815 9.20766L13.2619 12.2489C13.1432 12.3689 13.0707 12.4989 13.0707 12.6383C13.0707 12.757 13.1307 12.8658 13.2182 12.9714L5.4344 15.8845C5.33565 15.8814 5.2369 15.8783 5.13628 15.8783C3.11128 15.8783 1.46753 16.5258 1.46753 17.322C1.46753 18.1202 3.11128 18.7677 5.13628 18.7677C7.16128 18.7677 8.80503 18.1214 8.80503 17.3227C8.80503 17.1852 8.75315 17.0527 8.66128 16.927L15.0775 13.6683C15.3088 13.6933 15.5482 13.7089 15.7994 13.7089C17.3075 13.7089 18.5307 13.2277 18.5307 12.632C18.5307 12.042 17.3075 11.5595 15.7994 11.5595H15.8007Z" />
                </svg>

                <p>这个怎么运作?</p>
              </div>
              <div @click="featuresActiveTab='tab4'" :class="{'tabButtonActive':featuresActiveTab==='tab4'}" class="block-w-header__header-button">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.215 5.21773C12.215 4.62696 11.9803 4.06039 11.5626 3.64265C11.1449 3.22492 10.5783 2.99023 9.98751 2.99023C9.39674 2.99023 8.83017 3.22492 8.41243 3.64265C7.99469 4.06039 7.76001 4.62696 7.76001 5.21773C7.76001 5.8085 7.99469 6.37508 8.41243 6.79281C8.83017 7.21055 9.39674 7.44523 9.98751 7.44523C10.5783 7.44523 11.1449 7.21055 11.5626 6.79281C11.9803 6.37508 12.215 5.8085 12.215 5.21773Z" />
                  <path d="M2.51685 12.0006H5.50585V9.01465L5.51385 8.83465C5.53985 8.53765 5.63185 8.25965 5.77385 8.01465H3.01685L2.89985 8.02165C2.65659 8.05031 2.43232 8.16724 2.26956 8.35028C2.1068 8.53331 2.01688 8.76972 2.01685 9.01465V11.5006C2.01685 11.6333 2.06952 11.7604 2.16329 11.8542C2.25706 11.948 2.38424 12.0006 2.51685 12.0006Z" />
                  <path d="M17.9901 11.5006C17.9901 11.6333 17.9374 11.7604 17.8436 11.8542C17.7498 11.948 17.6227 12.0006 17.4901 12.0006H14.4741V9.01465L14.4681 8.86565C14.4462 8.56581 14.3566 8.27484 14.2061 8.01465H16.9901C17.2351 8.01471 17.4717 8.10477 17.6547 8.26774C17.8378 8.4307 17.9546 8.65522 17.9831 8.89865L17.9901 9.01465V11.5006Z" />
                  <path d="M13.467 8.89865C13.4386 8.65505 13.3216 8.43039 13.1383 8.2674C12.955 8.10442 12.7183 8.01446 12.473 8.01465H7.505L7.388 8.02165C7.14475 8.05031 6.92048 8.16724 6.75772 8.35028C6.59496 8.53331 6.50504 8.76972 6.505 9.01465V12.0006H13.473V9.01465L13.467 8.89865Z" />
                  <path d="M14.975 3.61719C15.4825 3.61719 15.9692 3.81879 16.3281 4.17764C16.6869 4.53649 16.8885 5.0232 16.8885 5.53069C16.8885 6.03818 16.6869 6.52489 16.3281 6.88374C15.9692 7.24259 15.4825 7.44419 14.975 7.44419C14.4675 7.44419 13.9808 7.24259 13.622 6.88374C13.2631 6.52489 13.0615 6.03818 13.0615 5.53069C13.0615 5.0232 13.2631 4.53649 13.622 4.17764C13.9808 3.81879 14.4675 3.61719 14.975 3.61719Z" />
                  <path d="M6.93003 5.53069C6.93003 5.0232 6.72843 4.53649 6.36958 4.17764C6.01073 3.81879 5.52402 3.61719 5.01653 3.61719C4.50904 3.61719 4.02233 3.81879 3.66348 4.17764C3.30463 4.53649 3.10303 5.0232 3.10303 5.53069C3.10303 6.03805 3.30458 6.52463 3.66333 6.88338C4.02209 7.24214 4.50867 7.44369 5.01603 7.44369C5.52339 7.44369 6.00997 7.24214 6.36872 6.88338C6.72748 6.52463 6.92903 6.03805 6.92903 5.53069H6.93003Z" />
                  <path d="M2.5 13.001C2.36739 13.001 2.24021 13.0537 2.14645 13.1474C2.05268 13.2412 2 13.3684 2 13.501V14.501C2 15.164 2.26339 15.7999 2.73223 16.2687C3.20107 16.7376 3.83696 17.001 4.5 17.001H15.5C16.163 17.001 16.7989 16.7376 17.2678 16.2687C17.7366 15.7999 18 15.164 18 14.501V13.501C18 13.3684 17.9473 13.2412 17.8536 13.1474C17.7598 13.0537 17.6326 13.001 17.5 13.001H2.5Z" />
                </svg>

                <p>这个怎么运作?</p>
              </div>
            </div>
          </div>
          <div v-if="featuresActiveTab==='tab1'" class="block-w-header__content">
            <div class="features-block__inner grid">
              <el-image src="/features/1.jpg" lazy></el-image>
              <el-image src="/features/2.jpg" lazy></el-image>
              <el-image src="/features/3.jpg" lazy></el-image>
              <el-image src="/features/4.jpg" lazy></el-image>
              <el-image src="/features/5.jpg" lazy></el-image>
              <el-image src="/features/6.jpg" lazy></el-image>
            </div>
          </div>
           <div v-if="featuresActiveTab==='tab2'" class="block-w-header__content">
            <div class="features-block__inner ">
               <div class="faq-items">
              <div class="faq-item" v-for="(faq,index) in faqs" :key="faq.id" :class="{'faqItemActive':accordeonActive===index}">
                <div class="faq-item__top" @click="accordeonActive=index">
                  <p>{{faq.question}}</p>
                  <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="17" cy="17" r="16.5" fill="white" stroke="#CECFDF"/>
                    <path d="M17 21L13.5359 15L20.4641 15L17 21Z" />
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
          <div v-if="featuresActiveTab==='tab3'" class="block-w-header__content">
            <div class="features-block__inner ">
              <img src="/roadmap.jpg" alt="">
            </div>
          </div>
          <div v-if="featuresActiveTab==='tab4'" class="block-w-header__content">
            <div class="features-block__inner ">
             4
            </div>
          </div>

        </div>
      </div>
    </div>



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
      featuresActiveTab:'tab1',
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
            slidesPerView: 9,
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



