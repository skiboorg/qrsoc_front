<template>
  <div class="main-wrapper">
     <PageTop/>
    <Header/>
    <ProfileBg :is_own_profile="true"/>
    <section class="user-profile-content">
      <div class="container">
        <div class="user-profile-wrapper">
          <div class="user-profile-right">
            <UserMenu :is_streamer_menu="this.$auth.user.is_streamer"
                      :class="'user-profile-menu side-menu'"
                      :show_home_link="false"
                      :show_top="false"/>
          </div>
          <div class="user-profile-left">
            <UserAbout :avatar="this.$auth.user.avatar"
                       :level="this.$auth.user.level"
                       :fio="this.$auth.user.fio"
                       :is_own_profile="true"
                       :nickname="this.$auth.user.nickname"
                       :balance="this.$auth.user.balance"
                       :is_streamer="this.$auth.user.is_streamer"/>
            <Nuxt />
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
import UserMenu from '@/components/UserMenu';
import ProfileBg from '@/components/userLk/ProfileBg';
 import PageTop from '@/components/PageTop';
export default {
  transition: "default",
  head: {
    title: '我的个人帐号',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Home page description'
      }
    ],
  },
  data:function(){
    return{

    }
  },
  components:{
    Header,
    Footer,
    UserMenu,
    ProfileBg,
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
