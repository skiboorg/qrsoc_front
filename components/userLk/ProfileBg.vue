<template>
  <div class="">
    <section  class="user-profile-bg":style="'background: url(' + userData.bg_image +') no-repeat center'">

      <div class="container">
        <div class="user-profile-bg__wrapper">
          <div v-if="is_own_profile" class="user-profile-bg__top">
            <p @click="bgDialogVisible=true" class="user-profile-bg__change"><svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 8C18.7348 8 18.4804 8.10536 18.2929 8.29289C18.1054 8.48043 18 8.73478 18 9V16C18 16.2652 17.8946 16.5196 17.7071 16.7071C17.5196 16.8946 17.2652 17 17 17H3C2.73478 17 2.48043 16.8946 2.29289 16.7071C2.10536 16.5196 2 16.2652 2 16V8C2 7.73478 2.10536 7.48043 2.29289 7.29289C2.48043 7.10536 2.73478 7 3 7H5C5.21807 7.01138 5.43386 6.95107 5.61443 6.82829C5.795 6.7055 5.93042 6.52698 6 6.32L6.54 4.68C6.60709 4.48138 6.7349 4.30887 6.90537 4.18684C7.07584 4.06482 7.28036 3.99946 7.49 4H13C13.2652 4 13.5196 3.89464 13.7071 3.70711C13.8946 3.51957 14 3.26522 14 3C14 2.73478 13.8946 2.48043 13.7071 2.29289C13.5196 2.10536 13.2652 2 13 2H7.44C6.81155 2.00118 6.19933 2.19968 5.68977 2.56751C5.1802 2.93533 4.79901 3.45389 4.6 4.05L4.28 5.05H3C2.20435 5.05 1.44129 5.36607 0.87868 5.92868C0.31607 6.49129 0 7.25435 0 8.05V16.05C0 16.8456 0.31607 17.6087 0.87868 18.1713C1.44129 18.7339 2.20435 19.05 3 19.05H17C17.7956 19.05 18.5587 18.7339 19.1213 18.1713C19.6839 17.6087 20 16.8456 20 16.05V9.05C20.0068 8.91453 19.9859 8.7791 19.9387 8.65194C19.8915 8.52479 19.8189 8.40856 19.7254 8.31034C19.6318 8.21212 19.5193 8.13396 19.3946 8.08061C19.2699 8.02726 19.1356 7.99983 19 8ZM10 7C9.20887 7 8.43552 7.2346 7.77772 7.67412C7.11992 8.11365 6.60723 8.73836 6.30448 9.46927C6.00173 10.2002 5.92252 11.0044 6.07686 11.7804C6.2312 12.5563 6.61216 13.269 7.17157 13.8284C7.73098 14.3878 8.44372 14.7688 9.21964 14.9231C9.99556 15.0775 10.7998 14.9983 11.5307 14.6955C12.2616 14.3928 12.8864 13.8801 13.3259 13.2223C13.7654 12.5645 14 11.7911 14 11C14 9.93913 13.5786 8.92172 12.8284 8.17157C12.0783 7.42143 11.0609 7 10 7ZM10 13C9.60444 13 9.21776 12.8827 8.88886 12.6629C8.55996 12.4432 8.30362 12.1308 8.15224 11.7654C8.00087 11.3999 7.96126 10.9978 8.03843 10.6098C8.1156 10.2219 8.30608 9.86549 8.58579 9.58579C8.86549 9.30608 9.22186 9.1156 9.60982 9.03843C9.99778 8.96126 10.3999 9.00087 10.7654 9.15224C11.1308 9.30362 11.4432 9.55996 11.6629 9.88886C11.8827 10.2178 12 10.6044 12 11C12 11.5304 11.7893 12.0391 11.4142 12.4142C11.0391 12.7893 10.5304 13 10 13ZM21 2H20V1C20 0.734784 19.8946 0.48043 19.7071 0.292893C19.5196 0.105357 19.2652 0 19 0C18.7348 0 18.4804 0.105357 18.2929 0.292893C18.1054 0.48043 18 0.734784 18 1V2H17C16.7348 2 16.4804 2.10536 16.2929 2.29289C16.1054 2.48043 16 2.73478 16 3C16 3.26522 16.1054 3.51957 16.2929 3.70711C16.4804 3.89464 16.7348 4 17 4H18V5C18 5.26522 18.1054 5.51957 18.2929 5.70711C18.4804 5.89464 18.7348 6 19 6C19.2652 6 19.5196 5.89464 19.7071 5.70711C19.8946 5.51957 20 5.26522 20 5V4H21C21.2652 4 21.5196 3.89464 21.7071 3.70711C21.8946 3.51957 22 3.26522 22 3C22 2.73478 21.8946 2.48043 21.7071 2.29289C21.5196 2.10536 21.2652 2 21 2Z" fill="white"/>
            </svg>
              <span>{{this.$auth.user.is_streamer ? 'Изменить' : '编辑封面图片'}} </span>
            </p>
          </div>
          <div v-else></div>
          <!--          <div class="user-profile-bg__top">-->
          <!--            <el-upload v-if="is_own_profile" class="avatar-uploader mb-25" action="" :show-file-list="false" :on-success="handleBgSuccess">-->
          <!--              <p class="user-profile-bg__change"><svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">-->
          <!--                <path d="M19 8C18.7348 8 18.4804 8.10536 18.2929 8.29289C18.1054 8.48043 18 8.73478 18 9V16C18 16.2652 17.8946 16.5196 17.7071 16.7071C17.5196 16.8946 17.2652 17 17 17H3C2.73478 17 2.48043 16.8946 2.29289 16.7071C2.10536 16.5196 2 16.2652 2 16V8C2 7.73478 2.10536 7.48043 2.29289 7.29289C2.48043 7.10536 2.73478 7 3 7H5C5.21807 7.01138 5.43386 6.95107 5.61443 6.82829C5.795 6.7055 5.93042 6.52698 6 6.32L6.54 4.68C6.60709 4.48138 6.7349 4.30887 6.90537 4.18684C7.07584 4.06482 7.28036 3.99946 7.49 4H13C13.2652 4 13.5196 3.89464 13.7071 3.70711C13.8946 3.51957 14 3.26522 14 3C14 2.73478 13.8946 2.48043 13.7071 2.29289C13.5196 2.10536 13.2652 2 13 2H7.44C6.81155 2.00118 6.19933 2.19968 5.68977 2.56751C5.1802 2.93533 4.79901 3.45389 4.6 4.05L4.28 5.05H3C2.20435 5.05 1.44129 5.36607 0.87868 5.92868C0.31607 6.49129 0 7.25435 0 8.05V16.05C0 16.8456 0.31607 17.6087 0.87868 18.1713C1.44129 18.7339 2.20435 19.05 3 19.05H17C17.7956 19.05 18.5587 18.7339 19.1213 18.1713C19.6839 17.6087 20 16.8456 20 16.05V9.05C20.0068 8.91453 19.9859 8.7791 19.9387 8.65194C19.8915 8.52479 19.8189 8.40856 19.7254 8.31034C19.6318 8.21212 19.5193 8.13396 19.3946 8.08061C19.2699 8.02726 19.1356 7.99983 19 8ZM10 7C9.20887 7 8.43552 7.2346 7.77772 7.67412C7.11992 8.11365 6.60723 8.73836 6.30448 9.46927C6.00173 10.2002 5.92252 11.0044 6.07686 11.7804C6.2312 12.5563 6.61216 13.269 7.17157 13.8284C7.73098 14.3878 8.44372 14.7688 9.21964 14.9231C9.99556 15.0775 10.7998 14.9983 11.5307 14.6955C12.2616 14.3928 12.8864 13.8801 13.3259 13.2223C13.7654 12.5645 14 11.7911 14 11C14 9.93913 13.5786 8.92172 12.8284 8.17157C12.0783 7.42143 11.0609 7 10 7ZM10 13C9.60444 13 9.21776 12.8827 8.88886 12.6629C8.55996 12.4432 8.30362 12.1308 8.15224 11.7654C8.00087 11.3999 7.96126 10.9978 8.03843 10.6098C8.1156 10.2219 8.30608 9.86549 8.58579 9.58579C8.86549 9.30608 9.22186 9.1156 9.60982 9.03843C9.99778 8.96126 10.3999 9.00087 10.7654 9.15224C11.1308 9.30362 11.4432 9.55996 11.6629 9.88886C11.8827 10.2178 12 10.6044 12 11C12 11.5304 11.7893 12.0391 11.4142 12.4142C11.0391 12.7893 10.5304 13 10 13ZM21 2H20V1C20 0.734784 19.8946 0.48043 19.7071 0.292893C19.5196 0.105357 19.2652 0 19 0C18.7348 0 18.4804 0.105357 18.2929 0.292893C18.1054 0.48043 18 0.734784 18 1V2H17C16.7348 2 16.4804 2.10536 16.2929 2.29289C16.1054 2.48043 16 2.73478 16 3C16 3.26522 16.1054 3.51957 16.2929 3.70711C16.4804 3.89464 16.7348 4 17 4H18V5C18 5.26522 18.1054 5.51957 18.2929 5.70711C18.4804 5.89464 18.7348 6 19 6C19.2652 6 19.5196 5.89464 19.7071 5.70711C19.8946 5.51957 20 5.26522 20 5V4H21C21.2652 4 21.5196 3.89464 21.7071 3.70711C21.8946 3.51957 22 3.26522 22 3C22 2.73478 21.8946 2.48043 21.7071 2.29289C21.5196 2.10536 21.2652 2 21 2Z" fill="white"/>-->
          <!--              </svg>-->
          <!--                <span>{{this.$auth.user.is_streamer ? 'Изменить' : '编辑封面图片'}} </span>-->
          <!--              </p>-->
          <!--            </el-upload>-->
          <!--          </div>-->
          <div v-if="!is_own_profile && $auth.loggedIn" class="user-profile-bg__bottom">
            <p class="btn btn-l-blue" @click="friendAction">找出联络人</p>
            <p class="btn btn-l-blue" @click="$router.push(`/lk/chats#${$store.getters['girl_profile/getUser'].nickname}`)">写一条消息</p>
          </div>
        </div>

      </div>
    </section>
    <el-dialog class="selectBg" title="更换封面" :visible.sync="bgDialogVisible" >

      <div class="user-bg__wrapper block-custom-scrollbar">
        <el-tabs class="chat-stikersTabs" v-model="activeBgGroup" >
          <el-tab-pane v-for="(group,index) in user_bg"
                       :disabled="!$auth.user.is_vip && group.is_for_vip ||  $auth.user.vip_level < group.is_for_vip_level "
                       :label="group.name" :key="group.id" :name="`tab${index}`">
            <div style="max-height: 150px" class="stiker-wrapper block-custom-scrollbar">
              <div class="user-bg__item"  v-for="image in group.backgrounds" :key="image.id" >
                <img @click="changeUserBg(image.id,image.image)" :src="image.image" alt="">
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>

      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  props:['is_own_profile'],
  data() {
    return {
      bgDialogVisible:false,
      activeBgGroup:'tab0',
      user_bg: this.$store.getters['user_bg/getUserBg'],
      userData:{
        bg_image: this.is_own_profile ? this.$auth.user.bg_image : this.$store.getters['girl_profile/getUser'].bg_image,
        password1:null,
        password2:null
      },
      bg_image:null,
    };
  },

  watch: {

  },
  mounted() {

  },
  methods: {
    notify(title,message,type){
      //показать уведомление пользователю
      this.$notify({
        title: title,
        message: message,
        type: type
      });
    },
    handleBgSuccess(res, file) {
      this.userData.bg_image = URL.createObjectURL(file.raw);
      this.bg_image = file.raw
      this.updateUser()
    },
    async changeUserBg(image_id,url){
      console.log('update bg')
      const response = await this.$axios.post('/api/v1/user/update_bg',{image_id:image_id})
      this.$auth.fetchUser()
      this.userData.bg_image=url
      this.bgDialogVisible = false

    },
    async updateUser(){

      let formData = new FormData()
      formData.set('userData', JSON.stringify(this.userData))

      formData.set('bg_image',this.bg_image)

      await this.$axios({
        method: 'post',
        headers:{
          'content-type': 'multipart/form-data'
        },
        url: '/api/v1/user/update/',
        data: formData
      }).then((response) => {
        this.notify('Успешно','Данные обновлены','success')
        this.$auth.fetchUser()
      })
          .catch(function (error) {
            // handle error
          })
          .then(function () {
            // always executed
          });
    },
    async friendAction(){
      let nickname = this.$store.getters['girl_profile/getUser'].nickname
      let checkFriendList = this.$auth.user.own_friend_list[0].friend_list.filter(x => x.nickname === nickname)
      console.log(checkFriendList)
      if (checkFriendList.length > 0){

        await this.$axios.post('/api/v1/friend/add_or_delete_friend_by_nickname',{nickname:nickname,action:'delete'})
        this.notify('从收藏夹中删除','该用户已从您的书签中删除','success')
      }else {
        await this.$axios.post('/api/v1/friend/add_or_delete_friend_by_nickname',{nickname:nickname,action:'add'})

        this.notify('添加到收藏夹','书签中的用户','success')
      }
      await this.$auth.fetchUser()
    }

  },
}
</script>


