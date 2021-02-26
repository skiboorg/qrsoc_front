<template>
  <header id="top" class="header" >
    <div class="header-wrapper">

      <div class="header-logo">

        <nuxt-link to="/">

          <img src="/logo.png" alt="">
        </nuxt-link>
        <p style="display: none"> {{$config.ws_url}}</p>

      </div>
      <div class="header-nav">
        <ul>
          <li v-for="item in $auth.loggedIn ? navItemsAuth : navItemsNotAuth" :key="item.id"><nuxt-link :to="item.link">{{item.name}}</nuxt-link></li>
        </ul>
      </div>

      <div v-if="this.$auth.loggedIn" class="header-btn">
        <div class="header-logo-mobile">
          <nuxt-link to="/">
            <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <circle cx="22.5" cy="22.5" r="22.5" fill="white"/>
              <rect x="12" y="8" width="28" height="28" fill="url(#pattern0)"/>
              <defs>
                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use xlink:href="#image0" transform="scale(0.0277778)"/>
                </pattern>
                <image id="image0" width="36" height="36" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAALEgAACxIB0t1+/AAAABl0RVh0U29mdHdhcmUAcGFpbnQubmV0IDQuMC4yMfEgaZUAAAUgSURBVFhHtZjbbhtFHMb7CH0EHqVK7LUTfNi1uWiBUC7aqtyFJ0i4ACFRqQEeIBEgoV7Q0F4iga8q9a5C3CHFm7OT2M42tuuopxm+b047G5w4x7/06f/N2J7/TzO7s7O+JqVUYryaqoeH0/XFw2L99mHx5geq84rD1ncc1vSLH90AkLQaTtebw6narPndlYUPQzkzmKovEGRQrEl4qEYwAS1f5Wz5MJQzAPlLgRRrwua+gXtVrDe5jGaMSw0fhnKmP1VvQLKPmekBhDCQglLSs/YwCcPrZqxLCR+GcqZfrDd6hUgQpgcowij/fzVbxfDSltCHoZzpEchAHChF4qAQAcBA4jP0qc9aQVXGE6U5M+aFwoehnHlZjBoshgxpKOuZbRuQYh+gq7myXMtX4viCs+XDUM4QCBIawBMAoGwbuTP3tVwjVK6SbBbK594efBjKmaQQNRI1I5FgVkJxSIEwmz5+R75+9lxufXpHrucrSpv58uJ5ri0fhnImwTVkAAAEAAPE5SEEsxX73/79j+z99kRuAGYjBymoStwKojNtDz4M5cw+liwtGuochAL9Goxefy5efnYPP5GyD6BNwAAkFdtB5aGpNzZsfStnUKjRRcEuCqtMAaYLOHqCWH/4+Cl+IuXe/Vm5la/Kbdx1zFs2a8WnWUJb38qZjgLSBZEFwdAnO6avE4TwkRw8+AFf17GNGdk2QL7ntkCx3QoqJ24PGCYjZ1BwmcW1CKJh2mwbuOSLL+X7wQBf19GeuSdbKLrjQbDNzD7VD1DkF8fNFobJyJm9IFxi8YwAYoG6M3flu51dfDWNwU+/yl0UpVh8F7NoQeh1m1l9J9kbccFjmIyc2SuEi5AEmFI7qArr92fuiqMwDNEfyHb0sSqovut+b9pGBHNt1PFnC8Nk5Ax+tKQGzCsQQc+BulimUTA2Dv/4085mNh/t8/pxKcT2IY0hMnKmBSA9tXra6dtYJv+aOS660SfumnMZ4+i27dP96Q0SLowFMiBiF7PUOWaZ/HiDzZF3Hfeq9A496v0+KwX4+4lAu4Xqor1jqCGW4qR4t9I0myjuPm6e2N3TduqV8HmmXYjixFxHGCojZ+wM8Zbdm7mDrvHBR4p+6I5+3vGhbNtW6Mcz8xQXNYG4uWHfEPt4ko+L4YMfNQyK6KOJOw04sd8K7SQJwtBwuMBQGTmzla8sQWrb38FTfFwMv/pWnSxZTB3gzNG3h6OuOdA54Qy1cNzRF0Nl5MxmUFniw1FDVeTAPK9GxeufH9kztzpr8xyetj2P5eHrlak9MjBcRs44oFxZMLfCW+Jta/Rd9uaXR+nrks2eDgq1BHfTqQ5tGC4jZzbz1UV1ptFAgn4rvCX7j5/I99iRbQjsS8Pb9/ULJWBUJgg8b2dsgMtnOahhyIycWQcQzjIChy0FY7XO8031puzMfyO6330v2jVugnrD466LnV2dg3BqjDdy4YnLMyp8GMoZgMyt44y8gRkiBDxy2WQFprOCRJ/JPFND8/E539d8GMoZDspDOwvpw3sq22cgCcE3DrYb8Y3TL8+o8GEoZ1BkTr3aqIJlYV5zVNv1T5bMZ5iVoHIpr9Y+DOXMWq6kgFZRNEam0Barkyqn/ZOlhfMuz6jwYShn4onyrAVBUZHK9OVKL6AzX7TjwoehnEHRKgGakyXZBEQTECpPlpM49+GV/U/kw1DO4OK8Dqj9FQBRhMGMXPiiHRc+DJUaBIuv5Erz/05Mf05A1XnF4cNIKa/9B6HRJTrORfq+AAAAAElFTkSuQmCC"/>
              </defs>
            </svg>
          </nuxt-link>
        </div>
        <div class="header-btn__balance">
          <div class="header-btn__balance--img">
            <img src="/diamond.svg" alt="">
          </div>
          <p>{{this.$auth.user.balance}}</p>
        </div>
        <div class="header-btn__notify">
          <div class="header-btn__notify--img">
            <div v-if="false" class="header-btn__notify--img--num"><p>2</p></div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M13.7295 21C13.5537 21.3031 13.3014 21.5547 12.9978 21.7295C12.6941 21.9044 12.3499 21.9965 11.9995 21.9965C11.6492 21.9965 11.3049 21.9044 11.0013 21.7295C10.6977 21.5547 10.4453 21.3031 10.2695 21"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

          </div>
        </div>
        <div @click="$router.push($auth.user.is_streamer ? '/streamer' : '/lk')" class="header-btn__user">
          <img :src="this.$auth.user.avatar" alt="">
          <div  class="header-btn__user--name">
            <p>{{this.$auth.user.fio.length > 5 ? this.$auth.user.fio.slice(0,5) + '...' : this.$auth.user.fio }}</p>
            <p>@{{this.$auth.user.nickname}}</p>
          </div>
          <div class="header-btn__user--arrow">
            <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6L0.535898 6.52533e-07L7.4641 4.68497e-08L4 6Z" fill="#B4B4B4"/>
            </svg>
          </div>
          <div   class="header-btn__user--dropdown" :class="{'dropdownActive':hovered}">
            <div @click="logOut" class="header-btn__user--dropdown__inner">
              <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.92 6.62C15.8724 6.49725 15.801 6.3851 15.71 6.29L12.71 3.29C12.5217 3.1017 12.2663 2.99591 12 2.99591C11.7337 2.99591 11.4783 3.1017 11.29 3.29C11.1017 3.4783 10.9959 3.7337 10.9959 4C10.9959 4.2663 11.1017 4.5217 11.29 4.71L12.59 6H3C2.73478 6 2.48043 5.89464 2.29289 5.70711C2.10536 5.51957 2 5.26522 2 5V1C2 0.734784 1.89464 0.48043 1.70711 0.292893C1.51957 0.105357 1.26522 0 1 0C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1V5C0 5.79565 0.316071 6.55871 0.87868 7.12132C1.44129 7.68393 2.20435 8 3 8H12.59L11.29 9.29C11.1963 9.38296 11.1219 9.49356 11.0711 9.61542C11.0203 9.73728 10.9942 9.86799 10.9942 10C10.9942 10.132 11.0203 10.2627 11.0711 10.3846C11.1219 10.5064 11.1963 10.617 11.29 10.71C11.383 10.8037 11.4936 10.8781 11.6154 10.9289C11.7373 10.9797 11.868 11.0058 12 11.0058C12.132 11.0058 12.2627 10.9797 12.3846 10.9289C12.5064 10.8781 12.617 10.8037 12.71 10.71L15.71 7.71C15.801 7.6149 15.8724 7.50275 15.92 7.38C16.02 7.13654 16.02 6.86346 15.92 6.62Z" fill="#383845"/>
              </svg>
              <p>登出帐户</p>

            </div>

          </div>
        </div>
        <div @click="mobileNavActive=false,userMenuActive  = !userMenuActive" class="header-btn__user-menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="6" r="2" />
            <circle cx="12" cy="12" r="2" />
            <circle cx="12" cy="18" r="2" />
          </svg>

        </div>
        <div class="header-user-menu" :class="{'userMenuActive':userMenuActive}">
          <UserMenu :is_streamer_menu="this.$auth.user.is_streamer"
                    :show_top="false"
                    :show_home_link="true"
                    :menu_class="'user-profile-menu header-user-menu'"/>
        </div>
      </div>
      <div v-else class="header-btn">
        <div class="header-logo-mobile">
          <nuxt-link to="/">
            <img src="/mobile-logo.png" alt="">
          </nuxt-link>
        </div>
        <div class="header-btn-w-icon has-dropdown-menu">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 1.875C9.30937 1.875 8.75 2.43437 8.75 3.125C8.75 3.17875 8.7625 3.23 8.76937 3.28125C6.60875 3.83312 5 5.79562 5 8.125V13.75C5 14.1038 4.72875 14.375 4.375 14.375H3.75V15.625H8.2425C8.16743 15.825 8.12767 16.0364 8.125 16.25C8.125 17.2781 8.97188 18.125 10 18.125C11.0281 18.125 11.875 17.2781 11.875 16.25C11.8723 16.0364 11.8326 15.825 11.7575 15.625H16.25V14.375H15.625C15.2712 14.375 15 14.1038 15 13.75V8.30062C15 5.95188 13.43 3.85687 11.2306 3.28125C11.2375 3.23 11.25 3.17875 11.25 3.125C11.25 2.43437 10.6906 1.875 10 1.875ZM9.72625 4.375C9.81687 4.3675 9.9075 4.375 10 4.375H10.1175C12.1581 4.43625 13.75 6.225 13.75 8.30062V13.75C13.75 13.97 13.7962 14.1775 13.8675 14.375H6.13312C6.20798 14.175 6.24753 13.9635 6.25 13.75V8.125C6.24822 7.17621 6.60585 6.26196 7.25093 5.5662C7.89601 4.87045 8.78066 4.44483 9.72687 4.375H9.72625ZM10 15.625C10.3519 15.625 10.625 15.8988 10.625 16.25C10.625 16.6019 10.3513 16.875 10 16.875C9.64813 16.875 9.375 16.6012 9.375 16.25C9.375 15.8981 9.64875 15.625 10 15.625Z" />
          </svg>
          <p>通知事项</p>
          <div class="header-btn-w-icon__dropdown header-btn-dropdownActive">
            <div class="header-btn-w-icon__dropdown-inner">
              <img src="http://placehold.it/45" alt="">
              <p>通知事项</p>
            </div>
          </div>

        </div>
         <div @click="activeTab = 'loginTab',authModal=true" class="header-btn-w-icon">
<svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 1.8C7.05701 1.8 6.15264 2.17928 5.48584 2.85442C4.81905 3.52955 4.44444 4.44522 4.44444 5.4C4.44444 6.35478 4.81905 7.27045 5.48584 7.94558C6.15264 8.62072 7.05701 9 8 9C8.94299 9 9.84736 8.62072 10.5142 7.94558C11.181 7.27045 11.5556 6.35478 11.5556 5.4C11.5556 4.44522 11.181 3.52955 10.5142 2.85442C9.84736 2.17928 8.94299 1.8 8 1.8ZM2.66667 5.4C2.66667 3.96783 3.22857 2.59432 4.22876 1.58162C5.22896 0.568927 6.58551 0 8 0C9.41449 0 10.771 0.568927 11.7712 1.58162C12.7714 2.59432 13.3333 3.96783 13.3333 5.4C13.3333 6.83217 12.7714 8.20568 11.7712 9.21838C10.771 10.2311 9.41449 10.8 8 10.8C6.58551 10.8 5.22896 10.2311 4.22876 9.21838C3.22857 8.20568 2.66667 6.83217 2.66667 5.4ZM4.44444 14.4C3.7372 14.4 3.05892 14.6845 2.55883 15.1908C2.05873 15.6972 1.77778 16.3839 1.77778 17.1C1.77778 17.3387 1.68413 17.5676 1.51743 17.7364C1.35073 17.9052 1.12464 18 0.888889 18C0.653141 18 0.427048 17.9052 0.260349 17.7364C0.0936505 17.5676 0 17.3387 0 17.1C0 15.9065 0.468253 14.7619 1.30175 13.918C2.13524 13.0741 3.2657 12.6 4.44444 12.6H11.5556C12.7343 12.6 13.8648 13.0741 14.6983 13.918C15.5317 14.7619 16 15.9065 16 17.1C16 17.3387 15.9064 17.5676 15.7397 17.7364C15.573 17.9052 15.3469 18 15.1111 18C14.8754 18 14.6493 17.9052 14.4826 17.7364C14.3159 17.5676 14.2222 17.3387 14.2222 17.1C14.2222 16.3839 13.9413 15.6972 13.4412 15.1908C12.9411 14.6845 12.2628 14.4 11.5556 14.4H4.44444Z" />
</svg>

          <p>登录</p>

        </div>
         <div class="header-btn-w-icon">
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.99997 1.32812L9.43372 2.6175L7.40247 7.1675L2.44122 7.69562L1.03497 7.85187L2.08997 8.78937L5.78122 12.1287L4.74622 17.0119L4.4531 18.3787L5.68372 17.6756L9.99997 15.1756L14.3162 17.6756L15.5468 18.3787L15.2537 17.0119L14.2187 12.1287L17.91 8.78937L18.965 7.85187L17.5587 7.69562L12.5975 7.16813L10.5662 2.6175L9.99997 1.32812ZM9.99997 4.39438L11.6018 8.00812L11.7581 8.33938L12.1093 8.37875L16.035 8.78875L13.1056 11.4262L12.8318 11.6794L12.91 12.0312L13.7306 15.8787L10.3125 13.9256L9.99997 13.7306L9.68747 13.9256L6.26935 15.8787L7.08997 12.0312L7.1681 11.6794L6.89435 11.4256L3.96497 8.78937L7.8906 8.37875L8.24247 8.34L8.39872 8.00812L9.99997 4.39438Z" />
</svg>

          <p>收藏</p>

        </div>
         <div @click="activeTab = 'loginTab',authModal=true" class="header-btn-w-icon header-btn-w-icon__red">
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.91001 6.72037L3.98167 15.8329H16.0183L17.09 6.72037L13.7483 8.94787L10 3.70037L6.25167 8.94787L2.91001 6.72037ZM2.33417 4.33287L5.83334 6.66621L9.32167 1.78287C9.39876 1.67485 9.50053 1.58679 9.61852 1.52604C9.73651 1.46529 9.8673 1.43359 10 1.43359C10.1327 1.43359 10.2635 1.46529 10.3815 1.52604C10.4995 1.58679 10.6013 1.67485 10.6783 1.78287L14.1667 6.66621L17.6667 4.33287C17.7991 4.24475 17.9541 4.19638 18.1131 4.19349C18.2722 4.1906 18.4288 4.2333 18.5644 4.31656C18.6999 4.39981 18.8088 4.52014 18.8782 4.66332C18.9476 4.8065 18.9745 4.96654 18.9558 5.12454L17.5867 16.7637C17.5628 16.9664 17.4653 17.1533 17.3128 17.2889C17.1603 17.4246 16.9633 17.4995 16.7592 17.4995H3.24084C3.03673 17.4995 2.83973 17.4246 2.6872 17.2889C2.53467 17.1533 2.43722 16.9664 2.41334 16.7637L1.04417 5.12371C1.02567 4.96578 1.05274 4.80585 1.12219 4.6628C1.19164 4.51976 1.30056 4.39957 1.4361 4.31642C1.57164 4.23328 1.72814 4.19064 1.88712 4.19356C2.04611 4.19647 2.20094 4.24481 2.33334 4.33287H2.33417ZM10 12.4995C9.55798 12.4995 9.13406 12.3239 8.8215 12.0114C8.50893 11.6988 8.33334 11.2749 8.33334 10.8329C8.33334 10.3908 8.50893 9.96692 8.8215 9.65436C9.13406 9.3418 9.55798 9.16621 10 9.16621C10.442 9.16621 10.866 9.3418 11.1785 9.65436C11.4911 9.96692 11.6667 10.3908 11.6667 10.8329C11.6667 11.2749 11.4911 11.6988 11.1785 12.0114C10.866 12.3239 10.442 12.4995 10 12.4995Z" />
</svg>

          <p>开通会员</p>

        </div>

      </div>

      <div @click="userMenuActive=false,mobileNavActive  = !mobileNavActive" class="header-nav-mobile__toggle"
           :class="{'mobileNavToggleActive':mobileNavActive}">
        <transition name="home">
          <svg v-if="!mobileNavActive" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 18H21" stroke="#CECFDF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3 12H21" stroke="#CECFDF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3 6H21" stroke="#CECFDF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#CECFDF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M15 9L9 15" stroke="#CECFDF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9 9L15 15" stroke="#CECFDF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </transition>

      </div>
      <div class="header-nav-mobile" :class="{'mobileNavActive':mobileNavActive}">
        <ul>
          <li v-for="item in $auth.loggedIn ? navItemsAuth : navItemsNotAuth" :key="item.id"><nuxt-link :to="item.link">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 21L12 16L5 21V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H17C17.5304 3 18.0391 3.21071 18.4142 3.58579C18.7893 3.96086 19 4.46957 19 5V21Z"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            {{item.name}}
          </nuxt-link></li>
        </ul>
      </div>
    </div>

    <el-dialog class="authModal" :visible.sync="authModal"  >
      <el-tabs  v-model="activeTab" :stretch="true">
        <el-tab-pane label="登录帐号" name="loginTab">
          <el-input class="mb-10 mt-40" v-model="userData.wechatid" placeholder="您的微信号码"></el-input>
          <el-input class="mb-20" v-model="userData.password" show-password placeholder="输入密码"></el-input>
          <div class="authModal-group mb-20">
            <el-checkbox class="text-f-14" v-model="userData.agree">让我签名</el-checkbox>
            <p class="text-f-14  c-pointer" > <nuxt-link class="text-l-green" to="/contacts">忘记密码了?</nuxt-link> </p>
          </div>
          <p class="btn btn-l-blue text-f-14 mb-15" @click="userLogin">登录</p>
          <p class="text-center text-f-14" @click="activeTab='regTab'"><span class="text-l-green c-pointer">还没有帐号？ 现在注册 </span></p>
        </el-tab-pane>
        <el-tab-pane label="报到" name="regTab">
          <p class="text-center mb-15">付款后，您的注册确认信将发送到您的邮件中。付款时，请在付款说明中注明您的昵称和姓名</p>
          <div v-if="register_step===1">
            <el-input class="mb-10" v-model="registerData.fio" placeholder="您的名字和姓氏"></el-input>
            <el-input class="mb-10 " v-model="registerData.wechatid" placeholder="您的微信号码"></el-input>
            <el-input class="mb-10" v-model="registerData.email" placeholder="你的邮件"></el-input>
            <el-input class="mb-10" v-model="registerData.password1" placeholder="输入密码" show-password></el-input>
            <el-input class="mb-10" v-model="registerData.password2" placeholder="再次输入密码" show-password></el-input>
            <el-checkbox class="text-f-14 mb-20" v-model="registerData.agree">让我签名</el-checkbox>
            <p class="btn btn-l-blue text-f-14 mb-15" @click="register_step=2">进一步</p>
            <p class="text-center text-f-14" @click="activeTab='loginTab'"><span class="text-l-green c-pointer">已经有一个帐户?</span></p>

          </div>
          <div v-if="register_step===2">
            <el-input class="mb-20 mt-40" v-model="registerData.nickname" placeholder="输入你的昵称"></el-input>
            <div class="authModal-group">
              <div class="">
                <p class="text-f-14 text-grey mb-20">选择关税</p>
                <div class="authModal-group__radio">
                  <el-radio class="mb-40 text-f-14" v-model="registerData.subscribe_type" label="1">1个月费用 <span class="text-l-green">175¥</span></el-radio>
                  <el-radio class="mb-40 text-f-14" v-model="registerData.subscribe_type" label="2">6个月费用 <span class="text-l-green">350¥</span></el-radio>
                  <el-radio v-model="registerData.subscribe_type" label="3">12个月费用 <span class="text-l-green">700¥</span></el-radio>
                </div>
              </div>
              <div class="">
                <p class="mb-15">付款后，您的注册确认信将发送到您的邮件</p>
                <img src="/qr.png" alt="">
              </div>

            </div>
            <div class="authModal-buttons">
              <p class="btn btn-l-blue text-f-14 mb-15" @click="register_step=1">背部</p>
              <p class="btn btn-l-blue text-f-14 mb-15" @click="userRegister">在网站上注册</p>
            </div>

          </div>
        </el-tab-pane>
      </el-tabs>
    </el-dialog>

  </header>
</template>

<script>
import UserMenu from '@/components/UserMenu';

export default {
  components: {
    UserMenu

  },
  transition: 'home',
  data() {
    return {
      hovered:false,
      authModal:false,
      activeTab:'loginTab',
      logInDialogVisible:false,
      registerDialogVisible:false,
      mobileNavActive:false,
      userMenuActive:false,
      ws_url:'',
      register_step:1,
      navItemsAuth:[
        {id:1,name:'首页',link:'/'},
        {id:2,name:'个人专区',link:'/lk'},
        {id:3,name:'直播',link:'/stream'},
        {id:4,name:'女孩们',link:'/girls'},
        {id:5,name:'帮助中心',link:'/info/rules'},
        {id:6,name:'联系我们',link:'/contacts'},
        // {id:7,name:'ВХОД ДЛЯ ДЕВУШЕК',link:'/login'},
      ],
      navItemsNotAuth:[
        {id:1,name:'首页',link:'/'},
        {id:3,name:'直播',link:'/stream'},
        {id:4,name:'女孩们',link:'/girls'},
        {id:5,name:'帮助中心',link:'/info/rules'},
        {id:6,name:'联系我们',link:'/contacts'},
        // {id:7,name:'ВХОД ДЛЯ ДЕВУШЕК',link:'/login'},
      ],
      userData:{
        email:null,
        password:null,
        agree:null,
      },
      registerData:{
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
    '$route.path': function(val) {
      this.mobileNavActive = false
      this.userMenuActive = false
    }
  },
  mounted() {
    this.$auth.user ? this.ws_connect() : null
  },
  methods: {
    ws_connect(){
      this.socket = new WebSocket(this.$config.ws_url+'/ws/user/online/')
      this.socket.onopen = () => {
        console.log('ws connected')
        this.socket.send(JSON.stringify({'user_id':this.$auth.user.id,'message':'user online'}))
      }
      this.socket.onmessage = (res) =>{
        let data = JSON.parse(res.data)
        console.log('socket.onmessage', data)
      }
    },
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
        console.log(response)
        this.authModal=false
        this.ws_connect()
      } catch (error) {
        this.notify('错误','检查输入的数据！','error')
      }
    },
    logOut(){
      this.socket.send(JSON.stringify({'logout_id':this.$auth.user.id}))
      this.$auth.logout()
    },
    async userRegister(){
      try{
        let response =  this.$axios.post('/auth/users/', {
          email:this.registerData.email,
          password:this.registerData.password2,
          fio:this.registerData.fio,
          wechatid:this.registerData.wechatid,
          nickname:this.registerData.nickname,
        })
        console.log(await response)
        this.notify('您已经成功注册了！','我们将在12小时内激活您的帐户','success')
        this.$router.push('/')
      }catch (e) {
        this.notify('错误','检查输入的数据！','error')
      }


    }

  }
}
</script>


<style>
.home-enter-active, .home-leave-active { transition: opacity .5s; }
.home-enter, .home-leave-active { opacity: 0; }
</style>
