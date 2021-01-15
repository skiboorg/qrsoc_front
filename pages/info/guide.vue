<template>
  <section  class="info-page">
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
         <p id="a1" class="info-title">1.客户的个人账户</p>
<p class="info-subtitle">-填写有关您自己的信息</p><p>
  <br />不要忘记指出您居住的城市，学习或工作的城市！<br />-选择头像和背景<br />尝试为您的头像选择最美丽的照片！<br />-添加标签与您的爱好<br />从标签列表中选择您的爱好，告诉我们您的兴趣和爱好！</p>
          <br>
          <img src="https://media.discordapp.net/attachments/525021707027873822/799604453870665748/1.png?width=882&height=523" alt="">
          <br>
          <p id="a2" class="info-title">2.货币体系-&ldquo;水晶&rdquo;</p>
<p class="info-subtitle">-这是做什么用的</p><p><br />我们的网站拥有内部货币系统-&ldquo;水晶&rdquo;。有了它，您可以为自己的个人资料购买各种视觉产品，以及吸引女孩注意：赠送礼物并将请求发送给女孩！<br />- 怎么获得<br />付款时，您会自动收到+ 350个晶体（对于VIP帐户+ 1000个晶体）。您也可以随时在相应标签中的个人帐户中充值！<br />-女孩如何得到它<br />收到礼物或给女孩的请求，她就会收到您的水晶，随后可以将其提取到真实货币中并用于培训！</p>
<br>
          <p id="a3" class="info-title">3.女孩的个人资料</p>
<p class="info-subtitle">-有关该女孩的个人资料和信息</p><p><br />在注册时，每个女孩都要填写自己的个人资料：她谈论自己的兴趣爱好，学习地点和兴趣，这样您就可以找到与她交流的共同主题！<br />-相册和照片（+ VIP）<br />我们的女孩会定期更新他们的照片和相册。我们特地将它们分为VIP和常规，并为您的专辑主题制作了签名！<br />-帖子和帖子+评论<br />这些女孩定期与您分享他们的新闻和事件。不要忘记喜欢并发表评论！<br />-粉丝和粉丝评分<br />每个女孩都有自己的评分：女孩的整体评分和溪流的评分。女孩为此获得的奖励是什么-我们在下面写道。在排行榜上提升您最喜欢的女孩！<br />-预定广播<br />在此选项卡中，您可以看到该女孩的广播目录。如果流是活动的，并且流的时间到了，则可以转到流页面。下面介绍如何使用广播。</p>
<br>
          <p id="a4" class="info-title">4.广播和聊天</p>
<p class="info-subtitle">-聊天</p><p><br />要开始聊天，请从girls目录的页面或她的页面写信给该女孩！在聊天中，您可以发送她的贴纸，写消息并接收女孩的回复，甚至还可以是照片！<br />-沟通规则<br />有礼貌和有文化！不要忘记，女孩们只是在学习美妙的中国文化和语言，可能不懂一切，因为她们使用翻译！不要要求女孩提供不可能的东西，要当心-俄罗斯女孩非常脆弱！<br />- 贴纸<br />您可以发送女士贴纸以显示您的情绪和心情！如果您是VIP，则可以使用特殊的明亮VIP贴纸<br />-广播（+ VIP）<br />您可以转到广播目录页面，查看哪个女孩计划播放什么内容！流的名称在那里显示。直播的开始日期显示在中国时间的右上角（GMT +5）<br />-即时通讯规则<br />创建普通聊天是为了交流意见并相互交流！不要忘了要有礼貌，并遵守所有常规的聊天规则！<br />-广播中的礼物<br />您可以在播放过程中注意女孩！给她送礼物并写下您的想法或建议，这个女孩一定会回答您的要求！该消息流的所有用户也会看到此消息，所以要体面！</p>
          <br>
          <img src="https://media.discordapp.net/attachments/525021707027873822/799605262914027520/4.png?width=882&height=420" alt="">
          <br>
          <img src="https://media.discordapp.net/attachments/525021707027873822/799604872268873738/2.png?width=882&height=498" alt="">
          <br>
          <p id="a5" class="info-title">5.礼物和礼节</p>
<p class="info-subtitle">-给女孩的礼物</p><p><br />从她的个人帐户页面给女孩礼物！礼物越漂亮，您收到的用户评价就越高，女孩获得的评价就越高，您得到的响应就越好！<br />-礼物要求<br />询问女孩对您感兴趣的主题的要求：请他们为您画一幅画或为您照相！她将通过聊天回答您，向您发送电子邮件或执行您的要求！</p>
<br>
          <img src="https://media.discordapp.net/attachments/525021707027873822/799605030134611968/3.png" alt="">
          <br>
          <p id="a6" class="info-title">6.对女孩的评价</p>
<p class="info-subtitle">-女孩的评价-中国之行</p><p><br />根据女孩的总体评价，我们每六个月就会确定TOP-3最佳女孩，并派他们去中国旅行并在上海继续学习！您可以在那里与他们见面并结识他们！<br />-广播收视率-奖金抽奖<br />根据流媒体评级，我们每个月都会在本月的TOP-5女孩中举行抽奖活动！每个月都会重置等级，以便新的项目参与者也能获得奖品！<br />-增加一个有趣的女孩的收视率</p>
<br>
          <p id="a7" class="info-title">7.你的愿望</p>
          <p>在联系方式部分将您的所有愿望写给我们！ 我们很高兴阅读信息并通过电子邮件答复您</p>
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
      curAnhor:1,
      anhors:[
        {id:1,name:'客户的个人账户'},
        {id:2,name:'货币体系-“水晶”'},
        {id:3,name:'女孩的个人资料'},
        {id:4,name:'广播和聊天'},
        {id:5,name:'礼物和礼节'},
        {id:6,name:'对女孩的评价'},
        {id:7,name:'你的愿望'},

      ]
    }
  },
  methods:{


  }
};
</script>
