<template>
  <div class="page-not-found-page">
    <div class="page-content">
      <v-row no-gutters class="page-content-header">
        <label class="title pa-3 ma-0 text-center white--text text-capitalize d-block full-width font-weight-bold">{{ $t('label.error404') }}</label>
      </v-row>
      <v-row no-gutters class="page-content-body">
        <v-col cols="12">
          <div class="mb-2">
            <p class="font-weight-bold subtitle-1 mb-1">{{ $t('message.errorPageMessage') }}</p>
            <p class="error-page-error-code ma-1">404</p>
            <p class="body-2 mb-0">{{ $t('message.error404_1') }}</p>
            <p class="body-2 mb-0">{{ $t('message.error404_2') }}</p>
          </div>
          <v-row>
            <v-col cols="6">
              <div class="game-selection">
                <v-btn link text tile height="auto" width="100%" :to="{ name: routeName.SPORTSBOOK }">{{ $t('label.sb') }}</v-btn>
              </div>
            </v-col>
            <v-col cols="6">
              <div class="game-selection">
                <v-btn link text tile height="auto" width="100%" :to="{ name: routeName.CASINO }">{{ $t('label.ld') }}</v-btn>
              </div>
            </v-col>
            <v-col cols="6">
              <div class="game-selection">
                <v-btn link text tile height="auto" width="100%" :to="{ name: routeName.SLOT }">{{ $t('label.rng') }}</v-btn>
              </div>
            </v-col>
            <v-col cols="6">
              <div class="game-selection">
                <v-btn link text tile height="auto" width="100%" :to="{ name: routeName.FISHING }">{{ $t('label.fishing') }}</v-btn>
              </div>
            </v-col>
          </v-row>
          <div class="mb-2">
            <app-button :title="'在线客服'" :action="openLiveChat"></app-button>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
<script>
import { ROUTE_NAME } from '@/constants/route.constants'
export default {
  name: 'errorPageNotFound',
  data: () => ({
    routeName: ROUTE_NAME
  }),
  methods: {
    openLiveChat() {
      window.open('https://tawk.to/chat/5edf223c9e5f694422902dcb/default', 'Live Chat', 'width=350,height=600')
    }
  }
}
</script>
<style lang="scss">
.page-not-found-page {
  .page-content {
    text-align: center;
    position: absolute;
    max-width: 600px;
    width: 90%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .page-content-header {
      border-top-left-radius: 10px !important;
      border-top-right-radius: 10px !important;
      background-image: linear-gradient(to left, var(--v-primary-base), var(--v-primary_3-base));
      position: relative;
    }
    .page-content-body {
      padding: 20px;
      background-color: white;
      border-bottom-left-radius: 10px !important;
      border-bottom-right-radius: 10px !important;
      .error-page-error-code {
        font-size: 75px;
        font-weight: bold;
        color: var(--v-primary-base);
      }
    }

    .game-selection {
      background-color: var(--v-base_3-base);

      .v-btn__content {
        font-size: 22px;
        padding: 25px 0px;
        font-weight: bolder;
        color: var(--v-secondary-base);
      }
    }
  }
}

@media (max-width: 599px) {
  .page-not-found-page .page-content .game-selection .v-btn__content {
    font-size: 20px;
    padding: 20px 0px;
  }
}
@media (max-width: 425px) {
  .page-not-found-page .page-content .game-selection .v-btn__content {
    font-size: 16px;
    padding: 15px 0px;
  }
}
</style>
