<template>
  <div class="main-wrapper">
   <PageTop/>
    <Header/>
    <section class="faq-page">
      <div class="container">

        <div class="faq-page__wrapper">
          <div class="faq-page__menu">
            <div class="user-profile-menu side-menu faq-menu">
              <nuxt-link class="user-profile-menu__item--wrapper"  to="/faq" >
                <div  class="user-profile-menu__item" :class="{'profileMenuActive':$route.path==='/faq'}">
                  <p>隐私权保护政策</p>
                </div>
              </nuxt-link>
              <nuxt-link class="user-profile-menu__item--wrapper"  to="/faq/faq1" >
                <div  class="user-profile-menu__item" :class="{'profileMenuActive':$route.path==='/faq/faq1'}">
                  <p>用户注册协议</p>
                </div>
              </nuxt-link>
              <nuxt-link class="user-profile-menu__item--wrapper"  to="/faq/faq2" >
                <div  class="user-profile-menu__item" :class="{'profileMenuActive':$route.path==='/faq/faq2'}">
                  <p>侵权投诉指引</p>
                </div>
              </nuxt-link>
              <nuxt-link class="user-profile-menu__item--wrapper"  to="/faq/faq3" >
                <div  class="user-profile-menu__item" :class="{'profileMenuActive':$route.path==='/faq/faq3'}">
                  <p>侵权投诉指引</p>
                </div>
              </nuxt-link>
            </div>
          </div>
          <div class="faq-page__content user-profile-block">
            <el-select class="faq-page__select" v-model="value" placeholder="Select" >
              <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
              </el-option>
            </el-select>
            <Nuxt/>
          </div>
        </div>

      </div>

    </section>
    <Footer/>

  </div>

</template>

<script>
import Header from '@/components/header';
import Footer from '@/components/footer';
 import PageTop from '@/components/PageTop';
export default {

  transition: "default",
  head: {
    title: `常问问题`,
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Home page description'
      }
    ],
  },
  data(){
    return{
      options: [
        {
          value: '/faq',
          label: '隐私权保护政策'
        }, {
          value: '/faq/faq1',
          label: '用户注册协议'
        }, {
          value: '/faq/faq2',
          label: '侵权投诉指引'
        }, {
          value: '/faq/faq3',
          label: '侵权投诉指引'
        }
      ],
      value: '/faq'

    }
  },
  watch:{
    value(val){
      this.$router.push(val)
    }
  },
  components:{
    Header,
    Footer,
    PageTop
  },


}
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  transition-duration: 200ms;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
