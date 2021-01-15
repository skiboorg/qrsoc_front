<template>
  <div class="login-page">
    <div class="login-page__tabs">
      <el-tabs  v-model="activeTab" :stretch="true">

        <el-tab-pane label="Вход" name="loginTab">
          <el-input class="mb-10 mt-40" v-model="userData.wechatid" placeholder="ID"></el-input>
          <el-input class="mb-20" v-model="userData.password" show-password placeholder="pass"></el-input>
          <p class="btn btn-l-blue text-f-14 mb-15" @click="userLogin">Войти</p>
        </el-tab-pane>

        <el-tab-pane label="Регистрация" name="regTab">
          <el-steps   class="login-page__tabs--steps"  :active="activeStep" finish-status="success" simple>
            <el-step  title="Правила"></el-step>
            <el-step  title="Данные"></el-step>
            <el-step title="Завершение"></el-step>
          </el-steps>

          <div v-if="activeStep===0" class="">
            <h3>Правила</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid atque consequatur dolor itaque, neque quam ratione tenetur voluptates! Aspernatur ducimus error iste laborum modi obcaecati quidem saepe! Consequatur, veniam.</p>
            <el-collapse class="mb-20" v-model="activeAccordion" accordion>
              <el-collapse-item title="Как работать на нашей платформе" name="1">
                <p>Первый шаг - регистрация и заполнение профиля. <br>
                  Расскажите о себе как можно больше информации, это привлекает внимание к вам!<br><br>

                  Далее - добавьте альбомы.<br>
                  Для обычных пользователей - обычные альбомы с повседневными фото, для VIP - с более пикантными.<br><br>

                  Второй шаг - настройте программу для ведения трансляции. Инструкции находятся у вас в профиле<br><br>

                  Третий шаг - планируете трансляцию и запускаете ее!</p>
              </el-collapse-item>
              <el-collapse-item title="Монетизация" name="2">
                <p>
                  Монетизация на сайте работает за счет получения вами виртуальной валюты - "Кристаллов" - и ее конвертации в рубли по курсу.<br><br>
                  Вы получаете подарки и донаты за "Кристаллы", а затем их выводите!<br><br>

                  Клиенты так же могут у вас покупать подарки-запросы (вам потребуется записать для них видео или сделать фото), важно сделать это в срок!<br><br>

                  Крайне важно - максимальное внимание VIP клиентам, вы ОБЯЗАНЫ им отвечать в чате и писать сообщения!
                </p>
              </el-collapse-item>
              <el-collapse-item title="Правила платформы" name="3">
                Ниже вы видите лишь самые основные правила платформы. По ссылке ниже прочитайте и ознакомьтесь с полным списком всех правил.<br><br>

                А) Основные моменты<br>
                - обязательно отвечать VIP<br>
                - читать все чаты<br>
                - отвечать на каждый подарок и запрос!<br><br>

                Б) Стрим<br>
                - запрещена нагота<br>
                - запрещается нецензурная брань<br>
                - запрещается пускать гостей
              </el-collapse-item>

            </el-collapse>
            <el-checkbox class="mb-20" v-model="agree">Прочитал и согласен с <a style="text-decoration: underline;color: inherit" href="http://localhost:8000/media/p.docx">договором-офертой</a></el-checkbox>
            <el-checkbox class="mb-20" v-model="agree1">Прочитал и согласен с <a style="text-decoration: underline;color: inherit" href="http://localhost:8000/media/p.docx">правилами платформы</a></el-checkbox>

            <p @click="activeStep+=1" :class="{'btnDisabled':!agree || !agree1}" class="btn btn-l-blue">Далее</p>
          </div>

          <div v-if="activeStep===1" class="">
            <h3>Данные</h3>
            <el-input class="mb-10" v-model="registerData.fio" placeholder="ФИО"></el-input>
            <el-input class="mb-10" v-model="registerData.nickname" placeholder="Nickname"></el-input>
            <el-input class="mb-10 " v-model="registerData.wechatid" placeholder="Логин"></el-input>
            <el-input class="mb-10" v-model="registerData.email" placeholder="Email"></el-input>
            <el-input class="mb-10" v-model="registerData.password1"  placeholder="Пароль" show-password></el-input>
            <el-input class="mb-10" v-model="registerData.password2" placeholder="Пароль повтор" show-password></el-input>
            <p style="font-size: 12px">Пароль должен состоять минимум из 8 символов</p>

            <div style="display: flex; align-items: center;justify-content: space-between">
              <p @click="activeStep-=1" class="btn btn-l-blue">Назад</p>
              <p @click="activeStep+=1" class="btn btn-l-blue " :class="{'btnDisabled':!is_valid}">Далее</p>
            </div>
          </div>

          <div v-if="activeStep===2" class="">
            <h3>Завершение регистрации</h3>
            <p>После нажатии на кнопку "Завершить регистрацию" ваши данные будут проверены, мы с вами свяжемся и активируем вашего пользователя. После завершения регистрации не забудьте наполнить ваш профиль информацией!</p>

            <div style="display: flex; align-items: center;justify-content: space-between">
              <p @click="activeStep-=1" class="btn btn-l-blue">Назад</p>
              <p style="width: 250px" class="btn btn-l-blue text-f-14 mb-15" @click="userRegister">Завершить регистрацию</p>
            </div>
          </div>

        </el-tab-pane>
      </el-tabs>
    </div>

  </div>
</template>
<script>
export default {
  layout: 'login',
  auth: false,
  data() {
    return {
      activeTab:'loginTab',
      activeAccordion: [],
      activeStep:0,
      agree:false,
      agree1:false,
      userData:{
        email:null,
        password:null,
        agree:null,
      },
      registerData:{
        fio:null,
        nickname:null,
        email:null,
        wechatid:null,
        password1:null,
        password2:null,
        agree:null,
        subscribe_type:'1',
      },

    };
  },

  watch: {

  },
  mounted() {

  },
  computed:{
    is_valid(){
      return this.registerData.fio && this.registerData.nickname && this.registerData.email && this.registerData.wechatid &&
          this.registerData.password1 && this.registerData.password2 && this.registerData.password1 === this.registerData.password2 &&
          this.registerData.password1.length >= 8
    }
  },
  methods: {
    notify(title,message,type){
      this.$notify({
        title: title,
        message: message,
        type: type
      });
    },
    async userLogin() {
      console.log('dsfd')
      try {
        let response = await this.$auth.loginWith('local', { data: this.userData })
        this.$router.push(`/`)
      } catch (error) {
        this.notify('Ошибка','Аккаунт еще не активирован или введены неверные данные','error')
      }
    },

    async userRegister() {
      try {
        let response = await this.$axios.post('/auth/users/', {
          email: this.registerData.email,
          password: this.registerData.password2,
          fio: this.registerData.fio,
          wechatid: this.registerData.wechatid,
          nickname: this.registerData.nickname,
          //is_streamer:true
        })
        this.$router.push(`/lk`)
      } catch (error) {

        this.notify('Ошибка','Введеные не верные данные','error')
      }
    }

  }
}
</script>


