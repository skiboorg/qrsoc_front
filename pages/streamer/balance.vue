<template>
  <div  class="user-profile-tab">
    <div class="user-profile-block">
      <h3 class="user-profile-block__title">Баланс</h3>
      <p class="user-profile-block__balance">Ваш баланс: {{this.$auth.user.balance}} <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0)">
<path d="M17 6.12L13.847 0.75L8.34017 0L3.13846 0.75L0 6.045L8.48547 14.88L17 6.12Z" fill="#337DFF"/>
<path d="M0 6.07503L0.0145299 6.09003L5.46325 6.64503L3.12393 0.780029L0 6.07503Z" fill="#4D94FF"/>
<path d="M8.42578 2.12989L13.86 0.764893L11.5061 6.59989L8.42578 2.12989Z" fill="#81D1FF"/>
<path d="M8.42842 2.12989L3.125 0.764893L5.43526 6.64489L8.42842 2.12989Z" fill="#64C6FF"/>
<path d="M17.1603 6.08188L11.668 6.51688L14.0218 0.681885L17.1603 6.08188Z" fill="#A1DCFF"/>
<path d="M0.015625 6.09009L8.53016 15.0001L5.43528 6.64509L0.015625 6.09009Z" fill="#275EFF"/>
<path d="M16.9994 6.16504L8.54297 14.925L11.4925 6.60004L16.9994 6.16504Z" fill="#ABC9FF"/>
<path d="M3.125 0.78L8.42842 2.145L13.8771 0.78L8.32671 0L3.125 0.78Z" fill="#BFE7FF"/>
<path d="M5.43359 6.64513L8.42676 2.13013L11.5071 6.60013L5.43359 6.64513Z" fill="#5C95FF"/>
</g>
<defs>
<clipPath id="clip0">
<rect width="17" height="15" fill="white"/>
</clipPath>
</defs>
</svg></p>
      <div class="user-profile-block__withdraw-form">
        <div class="user-profile-block__withdraw-form--inputs">
          <el-input placeholder="введите число кристаллов" v-model.number="cristall" ></el-input>
        <el-input disabled placeholder="получите в рублях" v-model="rub"></el-input>
        </div>
        <div class="user-profile-block__withdraw-form--radios">
           <el-radio class="mb-10" v-model="payType" label="Вывести на карту (VISA\MasterCard)"></el-radio>
        <el-radio  v-model="payType" label="Вывести на кошелек (QIWI)"></el-radio>
        </div>
        <p class="btn btn-l-blue">Вывести</p>



      </div>
    </div>

  </div>
</template>

<script>
  export default {
    layout: 'streamer_lk',
    scrollToTop: false,
    auth: true,

    data() {
      return {
         payType:null,
          cristall:'',
          rub:'',
      };
    },
    watch: {
      cristall(val){
        console.log(val)
        this.rub = val * 0.7
      }
    },
    mounted() {
    },
    methods: {
    }
    ,

  }
</script>


