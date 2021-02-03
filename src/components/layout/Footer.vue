<template>
  <v-footer>
    <v-row no-gutters>
      <v-col class="title pt-8" cols="12">
        Got inspired? Copied the theme? Or do you just like the website? No problem, just buy me a beer and make me
        happy!
      </v-col>
      <v-col cols="12" @click="donate()" class="pt-4">
        <h1>
          <span>D</span>
          <span>O</span>
          <span>N</span>
          <span>A</span>
          <span>T</span>
          <span>E</span>
        </h1>
      </v-col>
      <v-col cols="12">
        <v-card-text class="title font-weight-bold pb-2 pt-8">Follow me on:</v-card-text>
        <template v-for="item in socialIcons">
          <img
            @click="socialRedirections(item.link,item.name)"
            :src="'/static/image/icons/' + item.name + '.png'"
            :key="item.name"
            class="pa-2 ma-1"
            style="width: 40px; height: auto"
          />
        </template>
      </v-col>
      <v-col cols="12" class="pb-12 pt-2">@2021 CheeWeiChoy</v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: 'appFooter',
  props: {},
  data: () => ({
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
  }),
  watch: {},
  methods: {
    donate() {
      this.$gtag.event('donate', {
        value: 1,
      })
      window.open('https://www.paypal.com/paypalme/cheeweichoy', '_self')
    },
    socialRedirections(path,name) {
      this.$gtag.event('footer_social-' + name, {
        value: 1,
      })
      window.open(path, '_blank')
    },
  },
}
</script>

<style lang="scss" scoped>
.v-footer {
  background-color: #434242 !important;
  color: white;
  text-align: center;
  img {
    background-color: rgba(119, 121, 243, 0.5);
    width: 40px;
    height: auto;
    border-radius: 50%;
  }
}
html,
body {
  width: 100%;
  height: 100%;
  background: #ff7777;
  -webkit-font-smoothing: antialiased;
  display: flex;
  justify-content: center;
  align-items: center;
}

h1 {
  height: 50px;
  cursor: pointer;
}

h1 span {
  position: relative;
  top: 5px;
  display: inline-block;
  animation: bounce 0.3s ease infinite alternate;
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

@keyframes bounce {
  100% {
    top: -5px;
    text-shadow: 0 1px 0 #ccc, 0 2px 0 #ccc, 0 3px 0 #ccc, 0 4px 0 #ccc, 0 5px 0 #ccc, 0 6px 0 #ccc, 0 7px 0 #ccc,
      0 8px 0 #ccc, 0 9px 0 #ccc, 0 50px 25px rgba(0, 0, 0, 0.2);
  }
}
</style>
