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
         <section class="faq">
      <div class="container">



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
                  <p>{{faq.answer}}</p>
                </div>
              </div>
            </div>



      </div>
    </section>
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
        accordeonActive:0,
        curAnhor:1,
         faqs:[
        {id:1,question:'如何使用我们的平台？',answer:'在该网站上注册，填写您的个人资料，并放置头像。 然后，您可以充分利用我们的服务：与女孩见面并聊天，观看广播并参加小组讨论，提供礼物并从女孩那里购买商品！'},
        {id:2,question:'为什么要付费访问？',answer:'与来自俄罗斯的女孩交流的经验是一个非常有趣的话题。 我们仅对真正感兴趣的交流对象提供对该网站的访问权限，因为否则，这些女孩将无法应付想要使用我们服务的大量人流！'},
        {id:3,question:'什么是水晶，我该如何使用它们？',answer:'水晶是我们平台上的本地货币。 有了它，您可以方便快捷地向女孩赠送礼物并表现出关注的迹象，成为女孩的粉丝，为女孩自己订购女孩和商品的私人礼物，以及请求个人广播！\n' +
              '\n' +
              '每月使用我们的平台，您将以常规价格获得300个晶体，以VIP速率获得1200个晶体。 如果您没有足够的货币，您总是可以立即从您的个人账户充值水晶的余额！'},
        {id:4,question:'我对您的平台有任何疑问或建议！ 我该如何联系您？',answer:'从网站的标题或网站的页脚转到“联系人”部分，并向您写下您的问题，对我们工作的反馈或对我们平台开发的希望！'},
        {id:5,question:'我如何查看您平台的功能？',answer:'您可以在此处查看平台的全部功能。\n' +
              '这里介绍了VIP功能。'},
      ],
        anhors:[
          {id:999,name:'TOP'},

        ]
      }
    },
    methods:{


    }
  };
</script>
