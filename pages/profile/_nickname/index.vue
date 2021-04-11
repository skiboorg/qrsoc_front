<template>
  <div  class="user-profile-tab">
    <div class="user-profile-block">
      <h3 class="user-profile-block__title">简要信息</h3>
      <div class="user-profile-block__info-grid">
        <p>已加入</p>
        <p>
          {{ new Date(this.$store.getters['girl_profile/getUser'].date_joined).getFullYear()}}年
          {{ new Date(this.$store.getters['girl_profile/getUser'].date_joined).getMonth()}}月
          {{ new Date(this.$store.getters['girl_profile/getUser'].date_joined).getDay()}}
        </p>
      </div>
      <div class="user-profile-block__info-grid">
        <p>市</p>
        <p>{{this.$store.getters['girl_profile/getUser'].city}}</p>
      </div>
      <div class="user-profile-block__info-grid">
        <p>工作的地方</p>
        <p>{{this.$store.getters['girl_profile/getUser'].work_place}}</p>
      </div>
      <div class="user-profile-block__info-grid">
        <p>教育</p>
        <p>{{this.$store.getters['girl_profile/getUser'].education}}</p>
      </div>
      <div v-if="this.$store.getters['girl_profile/getUser'].birthday" class="user-profile-block__info-grid">
        <p>年龄</p>
        <p>{{this.$store.getters['girl_profile/getUser'].years}}</p>
      </div>
      <div class="user-profile-block__info-grid">
        <p>关于我</p>
        <p>{{this.$store.getters['girl_profile/getUser'].about}}</p>
      </div>
       <div class="user-profile-block__tags">
        <p v-if="$store.getters['girl_profile/getUser'].tags.includes(tag.id)" class="user-profile-block__tag" v-for="tag in tags" :key="tag.id">{{tag.name}}</p>
      </div>
    </div>
    <div class="user-profile-block">
      <h3 class="user-profile-block__title">我的兴趣</h3>
      <div class="user-profile-block__info-grid">
        <p>我的兴趣</p>
        <p>{{this.$store.getters['girl_profile/getUser'].interests}}</p>
      </div>
      <div class="user-profile-block__info-grid">
        <p>我对艺术的兴趣</p>
        <p>{{this.$store.getters['girl_profile/getUser'].interests_additional}}</p>
      </div>

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
  async asyncData({$axios,$auth,params}){
    console.log(params)
    try{
      const user_tags = await $axios.get(`/api/v1/user/get_user_tags`)
      const tags = user_tags.data
      return {tags}
    }catch (e) {
      const err = 404
      return {err}

    }

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


