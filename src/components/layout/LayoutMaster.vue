<template>
  <div>
    <div class="header" :style="drawer ? 'height:100vh' : ''">
      <v-toolbar class="elevation-2">
        <v-row no-gutters>
          <v-col v-if="this.height != 'xs'" class="text-right">
            <v-hover v-slot="{ hover }" v-for="data in headerData" :key="data.name">
              <a :href="goTo">
                <span
                  class="font-weight-bold subtitle-2 px-3"
                  @click="navigation(data.path)"
                  :class="{ 'on-hover': hover }"
                >
                  {{ data.name }}
                </span>
              </a>
            </v-hover>
          </v-col>
          <v-col v-else>
            <v-btn v-if="this.height == 'xs'" @click.stop="drawer = !drawer" dark icon color="black">
              <v-icon>menu</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-toolbar>
      <v-navigation-drawer v-model="drawer" absolute bottom temporary>
        <v-list expand rounded dense>
          <a :href="goTo">
            <v-list-item v-for="(item, index) in headerData" :key="index">
              <v-list-item-title class="font-weight-bold" @click="navigation(item.path)">
                {{ item.name }}
              </v-list-item-title>
            </v-list-item>
          </a>
        </v-list>
      </v-navigation-drawer>
    </div>

    <div class="body">
      <router-view></router-view>
    </div>

    <app-footer></app-footer>
  </div>
</template>
<script>
import { ROUTE_NAME } from '@/constants/route.constants'
import AppFooter from '@/components/layout/Footer.vue'

export default {
  name: 'layoutMaster',
  components: {
    AppFooter,
  },

  data: () => ({
    goTo: '',
    drawer: false,
    headerData: [
      {
        name: 'EXPERIENCES',
        path: 'experiences',
      },
      {
        name: 'SKILLS',
        path: 'skills',
      },
      {
        name: 'ACHIEVEMENTS',
        path: 'achievements',
      },
      {
        name: 'CONTACT',
        path: 'contact',
      },
      {
        name: 'RESUME',
        path: ROUTE_NAME.RESUME,
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
  watch: {
    drawer() {
      if (this.drawer) {
        this.$gtag.event('hambuger', {
          value: 1,
        })
      }
    },
  },
  created() {
    this.setGoogleAnalyticUserId()
  },
  methods: {
    navigation(path) {
      if (path == ROUTE_NAME.RESUME) {
        var pdf = '/static/documents/resume.pdf'
        window.open(pdf)
      } else {
        this.goTo = '#' + path
      }

      this.$gtag.event('nav-' + path, {
        value: 1,
      })
    },
    setGoogleAnalyticUserId() {
      // let uri = window.location.search.substring(1)
      // let params = new URLSearchParams(uri)
      // let param = params.get('param')

      this.$gtag.event('visited', { value: 1 })

      // if (param != null && param != undefined && param != '') {
      //   this.$gtag.event('source_' + param, { value: 1 })
      // }
    },
  },
}
</script>
<style lang="scss">
.on-hover {
  color: #3385ff;
  cursor: pointer;
  // border-bottom: solid 1px #3385ff;
  // border-radius: 20%;
  // padding-bottom: 10px;
}

.v-application--wrap {
  > div {
    height: 100%;
    background-color: white;
  }
}

.header {
  position: fixed;
  width: 100%;
  z-index: 3;
}

.body {
  padding-top: 60px;
  height: auto;
  min-height: 100%;
}

.header-toolbar {
  height: 68px !important;
}

header {
  .v-toolbar__content {
    height: 100% !important;
    padding-left: 0;
  }
}

.v-navigation-drawer__content {
  .theme--light.v-list {
    background: #fff !important;
  }
}

@media (max-width: 1350px) {
  .header-toolbar {
    height: 70px !important;
  }
  header {
    height: 55px !important;
  }
  .body {
    padding-top: 50px;
  }
}

@media (max-width: 1263px) {
  .header-toolbar {
    height: 65px !important;
  }
  header {
    height: 50px !important;
  }
}
@media (max-width: 1024px) {
}

@media (max-width: 959px) {
  .body {
    padding-top: 50px;
  }

  .header {
    height: 50px;
    padding: 0 0px;
  }

  .theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled) {
    color: black;
  }
}

@media (max-width: 599px) {
  .header {
    padding: 0;
    .v-btn__content {
      font-size: 16px;
    }
  }
}
@media (max-width: 425px) {
  .header {
    .v-btn__content {
      font-size: 14px;
    }
  }
}
</style>
