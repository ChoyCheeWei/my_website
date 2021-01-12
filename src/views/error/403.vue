<template>
  <div class="ip-restriction-page">
    <div class="page-content">
      <v-row no-gutters class="page-content-header">
        <label class="title pa-3 ma-0 text-center white--text text-capitalize d-block full-width font-weight-bold">地区限制</label>
      </v-row>
      <v-row no-gutters class="page-content-body">
        <v-col cols="12">
          <div class="mb-2">
            <p class="font-weight-bold subtitle-1 mb-1">地区限制</p>
            <p class="body-2">抱歉！您所在地区受到限制，无法正常游览我们的网站哦。若有不便之处，请多多原谅。若您有任何疑问，请联系我们的在线客服。 或发邮件至 info@VJBET.com 或联系在线客服</p>
          </div>
          <div class="mb-2">
            <p class="font-weight-bold subtitle-1 mb-1">Area Restricted</p>
            <p class="body-2">
              The page that you are trying to access has been restricted in this location. We apologize for any inconvenience that this may have caused. Should you have any inquiries, please contact
              our customer service centre at info@VJBET.com or Contact Customer Service
            </p>
          </div>
          <div class="mb-2">
            <app-button :title="'在线客服'" :action="openLiveChat"></app-button>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
<script>
export default {
  name: 'errorIpRestriction',
  methods: {
    openLiveChat() {
      window.open('https://tawk.to/chat/5edf223c9e5f694422902dcb/default', 'Live Chat', 'width=350,height=600')
    }
  }
}
</script>
<style lang="scss">
.ip-restriction-page {
  .page-content {
    position: absolute;
    max-width: 800px;
    width: 80%;
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
    }
  }
}
</style>
