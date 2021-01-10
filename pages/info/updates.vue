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
            <p id="a1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda at aut culpa cumque cupiditate dolor dolore eos, ipsam ipsum iste iusto magnam nesciunt perferendis praesentium repellat reprehenderit soluta ut! Aut cupiditate delectus dicta error facere libero officia quaerat ut! Ad commodi distinctio eaque eius, error labore maxime, nostrum quaerat quis recusandae sit, tenetur voluptatibus! Aperiam dicta dignissimos voluptatem? Architecto commodi consectetur consequuntur dolorum esse ex facere illum ipsum labore, laboriosam minus nostrum, odio porro ratione tempore totam voluptatem. Amet aspernatur assumenda cupiditate doloremque enim, excepturi libero magnam magni nam natus officiis praesentium provident quidem totam voluptatibus? Cupiditate deleniti deserunt eius esse, impedit ipsam obcaecati quam quas quasi quis quos sint vitae! Aliquam amet asperiores assumenda blanditiis consequuntur culpa cumque, debitis dolore dolores ex excepturi, fugit laudantium magni molestiae nemo odio perferendis perspiciatis qui quidem, ullam ut veniam voluptates voluptatibus. Aliquam cupiditate dolores eius nisi omnis optio sequi! Cumque est nobis possimus reprehenderit ullam! Accusamus consequuntur dolor error, expedita labore mollitia, nihil non perferendis porro quis quisquam sequi suscipit veritatis. Dolorum eaque exercitationem facilis hic labore magni modi omnis quia sunt suscipit. A ab adipisci amet asperiores aspernatur assumenda beatae cumque dignissimos doloribus eaque esse et ex explicabo facilis iste itaque iure iusto maiores maxime molestiae molestias nulla provident quas quia quod repellendus sed, similique sint suscipit, tempore vitae voluptatem voluptates voluptatum! A ab amet, aspernatur commodi consequuntur est ex excepturi exercitationem hic id illum in laudantium natus, nisi odit porro, reiciendis rem sunt suscipit tempore? Amet atque beatae blanditiis deleniti eos esse impedit nihil numquam obcaecati odio pariatur perferendis quaerat qui quis quisquam, recusandae, reiciendis sed, sequi voluptatibus voluptatum! Ad alias cumque delectus ducimus fugiat fugit ipsum labore magnam, minima molestias necessitatibus nisi nobis nostrum omnis quo recusandae repellat repellendus unde vitae voluptatem? Eaque neque non nostrum officia rem soluta. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, blanditiis cumque dicta eius enim eos fuga illo itaque laborum laudantium molestiae nam nisi officiis pariatur quam repudiandae saepe sit, tenetur veritatis voluptate. Eius hic incidunt perferendis quidem. Alias, architecto assumenda commodi doloribus earum expedita facilis hic, nobis quod, similique velit?</p>
            <p id="a2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, blanditiis cumque dicta eius enim eos fuga illo itaque laborum laudantium molestiae nam nisi officiis pariatur quam repudiandae saepe sit, tenetur veritatis voluptate. Eius hic incidunt perferendis quidem. Alias, architecto assumenda commodi doloribus earum expedita facilis hic, nobis quod, similique velit?</p>
            <p id="a3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, blanditiis cumque dicta eius enim eos fuga illo itaque laborum laudantium molestiae nam nisi officiis pariatur quam repudiandae saepe sit, tenetur veritatis voluptate. Eius hic incidunt perferendis quidem. Alias, architecto assumenda commodi doloribus earum expedita facilis hic, nobis quod, similique velit?</p>
            <p id="a4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, blanditiis cumque dicta eius enim eos fuga illo itaque laborum laudantium molestiae nam nisi officiis pariatur quam repudiandae saepe sit, tenetur veritatis voluptate. Eius hic incidunt perferendis quidem. Alias, architecto assumenda commodi doloribus earum expedita facilis hic, nobis quod, similique velit?</p>

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
          {id:1,name:'a1'},
          {id:2,name:'a2'},
          {id:3,name:'a3'},
          {id:4,name:'a4'},
        ]
      }
    },
    methods:{


    }
  };
</script>
