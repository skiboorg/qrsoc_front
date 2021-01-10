<template>
  <section  class="info-page">
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
          <p class="user-profile-block__title" id="a1">1.参与者的个人资料</p>
          <p><br></p>
          <p>每个成员都有自己的个人资料！它在配置文件设置中填写。尽可能多地写下有关您自己的信息，这将帮助您找到志趣相投的朋友！</p>
          <p><br></p>
          <p>您可以为自己定制：选择化身（图1），选择背景（图2）</p>
          <p><br></p>
          <p>女孩会像您一样看到您的个人资料！</p>
          <p><br></p>
          <img src="/guide1.jpg" alt="">
          <p><br></p>
          <p class="user-profile-block__title" id="a2">2.女生订阅</p>
          <p><br></p>
          <p>您可以订阅感兴趣的女孩，并跟踪她的记录和广播！订阅的工作方式有两种：如果您对女孩感兴趣，那么她也会订阅您！</p>
          <p><br></p>
          <img src="/guide2.jpg" alt="">
          <p><br></p>
          <p class="user-profile-block__title" id="a3">3.聊天和对话</p>
          <p><br></p>
          <p>您可以与喜欢的女孩开始对话！她一定会回答您的，但是如果您想优先交流，那么请获取一个VIP帐户</p>
        </div>
      </div>

    </div>

  </section>
</template>

<script>

export default {
  layout: 'info',
  scrollToTop: false,
  auth: false,
  data(){
    return {
      curAnhor:1,
      anhors:[
        {id:1,name:'参与者的个人资料'},
        {id:2,name:'女生订阅'},
        {id:3,name:'聊天和对话'},
        {id:999,name:'TOP'},
      ]
    }
  },
  methods:{


  }
};
</script>
