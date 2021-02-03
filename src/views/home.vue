<template>
  <div>
    <v-row class="banner" no-gutters>
      <v-col>
        <img
          v-if="this.height == 'xs' || this.height == 'sm'"
          style="height: 475px"
          width="100%"
          src="/static/image/banner/banner-mob.jpg"
          alt="I can do this all day"
        />
        <img
          v-else
          style="height: 500px"
          width="100%"
          src="/static/image/banner/banner.jpg"
          alt="I can do this all day"
        />

        <h1 class="bannerText">
          <template v-for="(item, i) in title">
            <span
              @click="buttonClicked('coding')"
              :key="i"
              :class="i == 0 || i == 3 || i == 9 || i == 12 ? 'mr-4' : ''"
            >
              {{ item }}
            </span>
          </template>
        </h1>
      </v-col>
    </v-row>

    <div class="text-center mt-n1">
      <a @click="buttonClicked('profile')" class="pt-6" href="#profile">
        <v-icon class="arrow bounce" color="black" size="80px">keyboard_arrow_down</v-icon>
      </a>
    </div>

    <div class="profile pt-12" id="profile">
      <v-card-text data-aos="fade-left" class="display-1 pt-6 pb-4 font-weight-bold">Profile</v-card-text>
      <v-card-text data-aos="fade-right" class="title pb-8">I'm a Frontend Developer</v-card-text>
      <hr />

      <v-row class="pt-8">
        <v-col data-aos="fade-right" lg="4" md="4" sm="4" cols="12">
          <v-card-text
            class="font-weight-bold display headline text-lg-left text-md-left text-sm-left text-xs-center px-2"
          >
            About Me
          </v-card-text>
          <v-card-text class="pt-4 px-2 body-1 text-lg-left text-md-left text-sm-left">
            I'm a Frontend Developer. I studied Bachelor of Science with Honours (Information Technology) ,majored in
            Software Engineer at University Utara Malaysia(UUM) and graduated on 2020. I love spending time on fixing
            little details and optimizing web and mobile application. And as my profile picture shown, yes I love
            Tealive xD.
          </v-card-text>
        </v-col>

        <v-col lg="4" md="4" sm="4" cols="12">
          <img
            @click="buttonClicked('Profile Picture')"
            data-aos="rotate-social"
            data-aos-easing="ease-in-quad"
            src="/static/image/personal/aboutMe.jpg"
            alt="chee wei choy"
          />
        </v-col>

        <v-col data-aos="fade-left" class="text-lg-left text-md-left text-sm-left" lg="4" md="4" sm="4" cols="12">
          <v-card-text class="headline font-weight-bold">Details</v-card-text>
          <v-card-text class="font-weight-bold pt-2 subtitle-1">Name:</v-card-text>
          <v-card-text>Choy Chee Wei</v-card-text>
          <v-card-text class="font-weight-bold subtitle-1">Age:</v-card-text>
          <v-card-text>
            25 years
            <!-- show number of days and years and months using animation js -->
          </v-card-text>
          <v-card-text class="font-weight-bold subtitle-1">Location:</v-card-text>
          <v-card-text>Kuala Lumpur, Malaysia</v-card-text>
        </v-col>

        <!-- social icons -->
        <v-col data-aos="zoom-out" class="pb-12" cols="12">
          <template v-for="item in socialIcons">
            <img
              data-aos="rotate-social"
              data-aos-easing="ease-in-quad"
              @click="socialRedirections(item.link, item.name)"
              :src="'/static/image/icons/' + item.name + '.png'"
              :key="item.name"
              class="pa-2 ma-1"
              style="background: #3385ff; width: 40px; height: auto"
            />
          </template>
          <!-- <v-card-text class="pb-2 headline font-weight-bold">Follow</v-card-text> -->
        </v-col>
      </v-row>
    </div>

    <!-- Experiences -->
    <v-row id="experiences" class="py-12" style="background: #f4f4f4">
      <v-col cols="12">
        <v-card-text class="text-center display-2 font-weight-bold">Experiences</v-card-text>
      </v-col>
      <v-col cols="12" class="text-center">
        <v-row no-gutters>
          <!-- add 1 more clip path -->
          <v-col v-if="this.height == 'xs'" cols="12" class="text-center">
            <img data-aos="flip-left" width="180px" height="auto" src="/static/image/others/web.png" alt="" />
            <v-card-text data-aos="flip-up" class="title font-weight-bold">Web Development</v-card-text>
          </v-col>
          <v-col data-aos="zoom-out-left" xl="5" lg="5" md="8" sm="9" class="text-left">
            <div class="web_left_desc py-4">
              <v-badge dot left inline color="black">
                <v-card-text class="pl-1 py-0 subtitle-1">Develop responsive e-commerce website</v-card-text>
              </v-badge>
              <v-badge dot left inline color="black">
                <v-card-text class="pl-1 py-0 subtitle-1">
                  Develop responsive landing page for display info purpose
                </v-card-text>
              </v-badge>
              <v-badge dot left inline color="black">
                <v-card-text class="pl-1 py-0 subtitle-1">Develop download page for android and ios app</v-card-text>
              </v-badge>
              <v-badge dot left inline color="black">
                <v-card-text class="pl-1 py-0 subtitle-1">
                  Develop CMS(content management system) for CS to easier their work
                </v-card-text>
              </v-badge>
              <v-badge dot left inline color="black">
                <v-card-text class="pl-1 py-0 subtitle-1">
                  Develop functions, modules, maintenance and bugs fix for existing system products.
                </v-card-text>
              </v-badge>
            </div>
          </v-col>
          <v-col v-if="this.height != 'xs'" xl="2" lg="2" md="4" sm="3" class="text-center">
            <img data-aos="flip-left" width="180px" height="auto" src="/static/image/others/web.png" alt="" />
            <v-card-text data-aos="flip-up" class="title font-weight-bold">Web Development</v-card-text>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" class="text-center">
        <v-row no-gutters>
          <v-col v-if="this.width >= '1264'" cols="5"></v-col>
          <v-col v-if="this.height == 'xs'" xl="2" lg="2" md="3" sm="3" cols="12" class="text-center mt-n12">
            <img data-aos="flip-right" width="220px" height="auto" src="/static/image/others/android.png" alt="" />
            <v-card-text data-aos="flip-up" class="title font-weight-bold">Android Development</v-card-text>
          </v-col>
          <v-col v-else xl="2" lg="2" md="3" sm="3" cols="12" class="text-center mt-n12">
            <img data-aos="flip-right" width="220px" height="auto" src="/static/image/others/android.png" alt="" />
            <v-card-text data-aos="flip-up" class="title font-weight-bold">Android Development</v-card-text>
          </v-col>
          <v-col xl="5" lg="5" md="9" sm="9" cols="12" class="text-left">
            <div data-aos="zoom-out-right" class="web_right_desc py-4">
              <v-badge dot left inline color="black">
                <v-card-text class="pl-1 py-0 subtitle-1">
                  Responsible for developing functions, modules, maintenance and bugs fix for existing system products.
                </v-card-text>
              </v-badge>
              <v-badge dot left inline color="black">
                <v-card-text class="pl-1 py-0 subtitle-1">
                  Develop a E-waste Recycling application (CRUD) for my Final Year Proect
                </v-card-text>
              </v-badge>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <!-- skills -->
    <v-row id="skills" class="py-12" no-gutters>
      <v-col cols="12">
        <v-card-text class="text-center font-weight-bold py-12 display-1">My Skills</v-card-text>
      </v-col>

      <v-col
        v-for="(item, index) in skillIcons"
        :key="item.name"
        class="pt-12"
        :xl="item.newRow ? 4 : 6"
        :lg="item.newRow ? 4 : 6"
        :md="item.newRow ? 4 : 6"
        sm="6"
        cols="12"
      >
        <v-row class="skills" no-gutters>
          <v-col
            class="ml-xl-0 ml-lg-0 ml-md-0 ml-sm-16"
            :xl="index == 1 || index == 6 || index == 8 ? 4 : item.newRow ? '' : 8"
            :lg="index == 1 || index == 6 || index == 8 ? 4 : item.newRow ? '' : 8"
            :md="index == 1 || index == 6 || index == 8 ? 4 : item.newRow ? '' : 8"
            sm="4"
            cols="6"
          >
            <img
              data-aos="rotate-social"
              :src="'/static/image/skills/' + item.name + '.png'"
              style="width: 125px; height: 125px"
            />
          </v-col>
          <v-col
            :data-aos="index % 2 == 0 ? 'fade-right' : 'fade-left'"
            :xl="index == 1 || index == 6 || index == 8 ? 8 : item.newRow ? '' : 4"
            :lg="index == 1 || index == 6 || index == 8 ? 8 : item.newRow ? '' : 4"
            :md="index == 1 || index == 6 || index == 8 ? 8 : item.newRow ? '' : 4"
            sm="4"
            cols="6"
            class="text-xl-left text-lg-left text-md-left text-sm-left; pl-2"
          >
            <div style="display: inline-block" class="text-center">
              <v-card-text class="pr-0 pb-0 pt-0 font-weight-bold title text-center">{{ item.text }}</v-card-text>
              <v-progress-circular class="ml-4" :rotate="90" :size="90" :width="10" :value="item.level" color="blue">
                {{ item.level }}
              </v-progress-circular>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <!-- Awards and Achievements -->
    <div id="achievements" style="background: #e3e1ff">
      <v-row style="max-width: 1000px" class="mx-auto">
        <v-col cols="12" class="text-center">
          <v-card-text data-aos="flip-up" class="font-weight-bold pt-12 display-1 text-center">
            Awards and Achievements
          </v-card-text>
          <img
            :style="this.height != 'xs' ? 'width: 600px' : 'max-width: 360px'"
            src="/static/image/others/achievements.png"
            alt=""
          />
        </v-col>
        <v-col cols="12">
          <v-list class="achievementsDesc">
            <v-list-item>
              <v-list-item-content v-for="(item, i) in achievementsInfo" :key="i">
                <v-list-item-title data-aos="zoom-in-right" class="font-weight-bold headline pb-2">
                  {{ item.title }}
                </v-list-item-title>
                <v-list-item-subtitle data-aos="zoom-in-left" class="title pt-1" v-for="desc in item.desc" :key="desc">
                  <v-badge dot inline left color="black">
                    <label style="line-height: 1.4" class="px-1 pt-1" color="black">
                      {{ desc }}
                    </label>
                  </v-badge>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </div>

    <!-- Contact -->
    <v-row id="contact">
      <v-col cols="12">
        <v-card-text class="display-2 text-center font-weight-bold pt-12">Get In Touch</v-card-text>
        <v-card-text data-aos="zoom-in-down" class="text-center title desc">
          {{ desc }}
        </v-card-text>
      </v-col>
      <v-col cols="12" class="my-12 text-center">
        <v-btn
          @click="buttonClicked('say-hello')"
          
          rounded
          height="50px"
          :href="'mailto:123choy123@gmail.com'"
          class="say-hi-button font-weight-bold"
          data-aos="zoom-in-up"
        >
          Say Hello
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import AOS from 'aos'

export default {
  name: 'Home',
  data: () => ({
    width: window.innerWidth,
    title: ['I', 'C', 'a', 'n', 'C', 'o', 'd', 'i', 'n', 'g', 'A', 'l', 'l', 'D', 'a', 'y'],
    desc:
      "Need help? Want to hire me as a freelancer for your work? Feel free to contact me and I would be happy to help! My inbox is always open. Whether you have a question or just want to say hi. I'll try my best to get back to you!",
    socialIcons: [
      {
        name: 'fb',
        link: 'https://www.facebook.com/cheeweichoy96/',
      },
      {
        name: 'instagram',
        link: 'https://www.instagram.com/cheewei96/',
      },
      {
        name: 'linkedin',
        link: 'https://www.linkedin.com/in/cheeweichoy',
      },
      {
        name: 'email',
        link: 'mailto:123choy123@gmail.com',
      },
      {
        name: 'github',
        link: 'https://github.com/ChoyCheeWei',
      },
      {
        name: 'skype',
        link: 'https://join.skype.com/invite/Vk9acCe4h8V0',
      },
    ],
    skillIcons: [
      {
        name: 'vue',
        text: 'Vue.js',
        newRow: false,
        level: 70,
      },
      {
        name: 'vuetify',
        text: 'Vuetify',
        newRow: false,
        level: 60,
      },
      {
        name: 'html',
        text: 'Html',
        newRow: true,
        level: 80,
      },
      {
        name: 'js',
        text: 'Javascript',
        newRow: true,
        level: 50,
      },
      {
        name: 'css',
        text: 'Css',
        newRow: true,
        level: 75,
      },
      {
        name: 'android',
        text: 'Android',
        newRow: false,
        level: 50,
      },
      {
        name: 'java',
        text: 'Java',
        newRow: false,
        level: 40,
      },
      {
        name: 'csharp',
        text: 'C#',
        newRow: false,
        level: 40,
      },
      {
        name: 'aspnet',
        text: 'Asp.net',
        newRow: false,
        level: 40,
      },
    ],
    achievementsInfo: [
      {
        title: 'First Class (1st Class)',
        desc: [
          'CGPA / Class of Degree - 3.68/4.00, Bachelor of Science with Honours (Information Technology).',
          'Universiti Utara Malaysia (Northern University of Malaysia)',
        ],
      },
      {
        title: 'Innovative Research, Invention and Application Exhibition (I-RIA) 2019',
        desc: [
          'I won a gold medal in I-RIA 2019 with my Final Year Project--E-Waste Recycling mobile application',
          'Apr 2019, Computing(SOC), Northern University Malaysia(UUM)',
          '"Nurturing Creativity, Humanizing Technology", Organized by SOC, UUM. Has been awarded the GOLD MEDAL for invention E-Waste Recycling mobile application.',
        ],
      },
    ],
  }),
  computed: {
    height() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 'xs'
        case 'sm':
          return 'sm'
        case 'md':
          return 'md'
        case 'lg':
          return 'lg'
        case 'xl':
          return 'xl'
      }
    },
  },
  created() {
    AOS.init({
      duration: 1250,
    })
  },
  methods: {
    buttonClicked(action) {
      this.$gtag.event(action, {
        value: 1,
      })
    },
    socialRedirections(path, name) {
      this.buttonClicked('profile_social-' + name)
      window.open(path, '_blank')
    },
  },
}
</script>
<style lang="scss">
html {
  scroll-behavior: smooth;
}

a {
  text-decoration: none;
}

.bannerText {
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  top: 480px;
  color: white;
  text-align: center;
}

h1 {
  height: 20px;
}

h1 span {
  position: relative;
  top: 5px;
  display: inline-block;
  animation: bounce 2.5s ease infinite alternate;
  font-family: 'Titan One', cursive;
  font-size: 32px;
  text-shadow: 0 1px 0 #ccc, 0 2px 0 #ccc, 0 3px 0 #ccc, 0 4px 0 #ccc, 0 5px 0 #ccc, 0 6px 0 transparent,
    0 7px 0 transparent, 0 8px 0 transparent, 0 9px 0 transparent, 0 10px 10px rgba(0, 0, 0, 0.4);
}

h1 span:nth-child(2) {
  animation-delay: 0.1s;
}
h1 span:nth-child(3) {
  animation-delay: 0.2s;
}
h1 span:nth-child(4) {
  animation-delay: 0.3s;
}
h1 span:nth-child(5) {
  animation-delay: 0.4s;
}
h1 span:nth-child(6) {
  animation-delay: 0.5s;
}
h1 span:nth-child(7) {
  animation-delay: 0.6s;
}
h1 span:nth-child(8) {
  animation-delay: 0.7s;
}
h1 span:nth-child(9) {
  animation-delay: 0.8s;
}
h1 span:nth-child(10) {
  animation-delay: 0.9s;
}
h1 span:nth-child(11) {
  animation-delay: 1s;
}
h1 span:nth-child(12) {
  animation-delay: 1.1s;
}
h1 span:nth-child(13) {
  animation-delay: 1.2s;
}
h1 span:nth-child(14) {
  animation-delay: 1.3s;
}
h1 span:nth-child(15) {
  animation-delay: 1.4s;
}
h1 span:nth-child(16) {
  animation-delay: 1.5s;
}
h1 span:nth-child(17) {
  animation-delay: 1.6s;
}
h1 span:nth-child(18) {
  animation-delay: 1.7s;
}
h1 span:nth-child(19) {
  animation-delay: 1.8s;
}

@keyframes bounce {
  100% {
    top: -5px;
    text-shadow: 0 1px 0 #ccc, 0 2px 0 #ccc, 0 3px 0 #ccc, 0 4px 0 #ccc, 0 5px 0 #ccc, 0 6px 0 #ccc, 0 7px 0 #ccc,
      0 8px 0 #ccc, 0 9px 0 #ccc, 0 50px 25px rgba(0, 0, 0, 0.2);
  }
}

.profile {
  max-width: 800px;
  margin: auto;
  text-align: center;
  .v-card__text {
    padding: 0;
  }
}

.web_left_desc {
  clip-path: polygon(90% 0, 100% 50%, 90% 100%, 0 100%, 0 0);
  max-width: 100%;
  height: auto;
  margin: 0 0 0 32px;
  background: white;
  display: inline-block;
  -moz-box-shadow: inset 0 0 10px #000000;
  -webkit-box-shadow: inset 0 0 10px #000000;
  box-shadow: inset 0 0 10px #000000;
  .v-card__text {
    line-height: 1.2 !important;
  }
}

.web_right_desc {
  // clip-path: polygon(5% 0, 100% 0%, 100% 100%, 5% 100%, 5% 43%, 0 32%, 5% 17%);
  clip-path: polygon(100% 0, 100% 100%, 10% 100%, 0 50%, 10% 0);
  max-width: 100%;
  height: auto;
  padding: 0 0 0 32px;
  margin-right: 32px;
  background: white;
  display: inline-block;
  -moz-box-shadow: inset 0 0 10px #000000;
  -webkit-box-shadow: inset 0 0 10px #000000;
  box-shadow: inset 0 0 10px #000000;
  .v-card__text {
    line-height: 1.2 !important;
  }
}

#aboutMe {
  img {
    width: 150px;
    height: auto;
    border-radius: 50%;
  }
}

#profile {
  img {
    width: 200px;
    height: auto;
    border-radius: 50%;
  }
}

.v-list-item {
  display: block !important;
}

.v-list-item__title,
.v-list-item__subtitle {
  white-space: unset !important;
}

.theme--light.v-list {
  background: #e3e1ff !important;
  color: black i !important;
}

.theme--light.v-list-item .v-list-item__subtitle,
.theme--light.v-list-item .v-list-item__action-text {
  color: black !important;
}

.skills div > img {
  width: 100px !important;
  height: 100px !important;
}

.skills > .col-6:nth-child(2) {
  margin-top: -16px;
}

.skills .col-6:nth-child(1) {
  text-align: right !important;
}
.achievementsDesc {
  max-width: 900px;
  margin: auto;
}

.desc {
  max-width: 800px;
  margin: auto;
}

.say-hi-button {
  width: 200px;
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
  transform: scale(1);
  animation: pulse 2s infinite;
  background-image: linear-gradient(to right,#1CD8D2,#93EDC7) !important;
}

@keyframes pulse {
  0% {
    transform: scale(0.75);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 0 30px rgba(0, 0, 0, 0);
  }

  100% {
    transform: scale(0.75);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
}

//animation
@-moz-keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    -moz-transform: translateY(0);
    transform: translateY(0);
  }
  40% {
    -moz-transform: translateY(-30px);
    transform: translateY(-30px);
  }
  60% {
    -moz-transform: translateY(-15px);
    transform: translateY(-15px);
  }
}
@-webkit-keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  40% {
    -webkit-transform: translateY(-30px);
    transform: translateY(-30px);
  }
  60% {
    -webkit-transform: translateY(-15px);
    transform: translateY(-15px);
  }
}
@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  40% {
    -moz-transform: translateY(-30px);
    -ms-transform: translateY(-30px);
    -webkit-transform: translateY(-30px);
    transform: translateY(-30px);
  }
  60% {
    -moz-transform: translateY(-15px);
    -ms-transform: translateY(-15px);
    -webkit-transform: translateY(-15px);
    transform: translateY(-15px);
  }
}
.bounce {
  -moz-animation: bounce 2s infinite;
  -webkit-animation: bounce 2s infinite;
  animation: bounce 2s infinite;
}

[data-aos='rotate-social'] {
  transform: rotate(360deg) scale(0.5);
  opacity: 0;
  transition-property: transform, opacity;
  &.aos-animate {
    transform: rotate(0) scale(1);
    opacity: 1;
  }
}

//end of animations

/* The typing effect */
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: white;
  }
}

@media (max-width: 1650px) {
}
@media (max-width: 1500px) {
}
@media (max-width: 1350px) {
}
@media (max-width: 1263px) {
}
@media (max-width: 1024px) {
}
@media (max-width: 959px) {
}
@media (max-width: 600px) {
  .web_left_desc {
    clip-path: polygon(100% 10%, 100% 100%, 0 100%, 0 10%, 50% 0);
    margin: 0 8px 0 8px;
  }

  .web_right_desc {
    clip-path: polygon(100% 10%, 100% 100%, 0 100%, 0 10%, 50% 0);
    padding: 0;
    margin: 0 8px 0 8px;
  }
  .bannerText {
    top: 460px;
  }
  h1 span {
    font-size: 26px;
  }
}
@media (max-width: 425px) {
}
</style>
