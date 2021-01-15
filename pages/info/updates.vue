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
          <div class="faq-page__content ">
            <div :id="`a${faq.id}`" class="faq-item" v-for="(faq,index) in faqs" :key="faq.id" :class="{'faqItemActive':accordeonActive===index}">
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
</template>

<script>

  export default {
    layout: 'info',

    auth: false,
    data(){
      return {
        accordeonActive:0,
        curAnhor:1,
         faqs:[
        {id:1,question:'开发中-01.02.20(在发展中)',answer:'-贴纸店和背景<br>' +
              '-私人电话<br>' +
              '- 使用规则和信息注册文件<br>' +
              '- 高级用户自定义选项'},
        {id:2,question:'网站的Alpha版本（当前）',answer:'+为女孩增加了礼物<br>' +
              '+添加了在线广播<br>' +
              '+视觉编辑<br>' +
              '+添加了贴纸和贴纸包'},
        {id:3,question:'网站的Beta版',answer:'网站的第一次迭代！ 创建了公司标识，阐明了想法并奠定了技术部分。'},

      ],
        anhors:[
          {id:1,name:'开发中-01.02.20'},
          {id:2,name:'网站的Alpha版本（当前'},
          {id:3,name:'网站的Beta版'},

        ]
      }
    },
    methods:{


    }
  };
</script>
