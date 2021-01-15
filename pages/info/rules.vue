<template>
  <section class="info-page">
    <div class="container">

      <div class="faq-page__wrapper">
        <div class="faq-page__menu">
          <div class="user-profile-menu side-menu faq-menu">
            <a @click="curAnhor=anhor.id" href="#" v-scroll-to="`#a${anhor.id}`" class="user-profile-menu__item--wrapper" v-for="anhor in anhors" :key="anhor.id"  >
              <div class="user-profile-menu__item" :class="{'profileMenuActive':curAnhor===anhor.id}">
                <p>{{anhor.name}}</p>
              </div>
            </a>
          </div>
        </div>
        <div class="faq-page__content user-profile-block">
          <p class="user-profile-block__title" id="a1">1.一般规则</p>
          <p>1.1禁止违反中国和俄罗斯联邦的法律</p>
          <p>1.2禁止违反这些州的法律和法律条款</p>
          <p id="a2">2.行为准则
          <p>2.1禁止煽动种族冲突</p>
          <p>2.2禁止侮辱和侮辱人</p>
          <p>2.3禁止欺凌</p>
          <p>2.4禁止写淫秽的表情</p>
          <p>2.5禁止要求和暗示淫秽事物和不雅行为</p>
          <p id="d3">3.流中的交流规则</p>
          <p>3.1你可以送礼物</p>
          <p>3.2我们建议写些愉快的话</p>
          <p>3.3你不能得罪任何人</p>
        </div>
      </div>

    </div>

  </section>
</template>

<script>

export default {
  layout: 'info',

  auth: false,
  data(){
    return {
      curAnhor:1,
      anhors:[
        {id:1,name:'般规则'},
        {id:2,name:'行为准则'},
        {id:3,name:'流中的交流规则'},
        {id:999,name:'TOP'},
      ]
    }
  },
  methods:{


  }
};
</script>
