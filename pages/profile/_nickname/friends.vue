<template>
  <div class="user-profile-tab">
    <div class="user-profile-block">
      <div v-if="this.$store.getters['girl_profile/getUser'].own_friend_list[0].friend_list.length > 0"
           class="user-profile-friends-wrapper girl-profile-friends-wrapper">
        <FriendCard v-for="friend in this.$store.getters['girl_profile/getUser'].own_friend_list[0].friend_list"
                    :key="friend.id"
                    :nickname="friend.nickname"
                    :avatar="friend.avatar"
                    :fio="friend.fio"/>
      </div>
      <p v-else>用户还没有朋友</p>
    </div>

  </div>
</template>

<script>
  export default {
    layout: 'girl_profile',
    scrollToTop: false,
    auth: true,
    async fetch({store,params}){
      await store.dispatch('girl_profile/fetchGirl',params.nickname)
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


