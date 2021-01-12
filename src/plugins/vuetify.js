import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'mdi'
  },
  theme: {
    dark: false,
    themes: {
      light: {
        base: '#333333', //darkslategray
        base_2: '#D5D5D5', //lightgray
        base_3: '#F2F2F2', //whitesmoke
        base_4: '#fafafa', //snow
        primary: '#00A09F', //darkcyan
        primary_2: '#00C991', //lightseagree
        primary_3: '#53E88C', //mediumaquamarine
        secondary: '#0B5376', //teal
        secondary_2: '#ff0000', //red
        secondary_3: '#0B5376', //gainsboro,
        buttonPrimary: '#0B5376', //darkcyan
        buttonHover: '#3c7591', //steelblue
        buttonPressed: '#093a52', //darkslategray,
        buttonDisabled: '#d5d5d5', //lightgray
        buttonWhite: '#ffffff'
      },
      dark: {
        base_4: '#333333', //darkslategray
        base_3: '#D5D5D5', //lightgray
        base_2: '#F2F2F2', //whitesmoke
        base: '#fafafa', //snow
        primary: '#00A09F', //darkcyan
        primary_2: '#00C991', //lightseagree
        primary_3: '#53E88C', //mediumaquamarine
        secondary: '#0B5376', //teal
        secondary_2: '#ff0000', //red
        secondary_3: '#0B5376', //gainsboro,
        buttonPrimary: '#0B5376', //darkcyan
        buttonHover: '#3c7591', //steelblue
        buttonPressed: '#093a52', //darkslategray,
        buttonDisabled: '#d5d5d5' //lightgray
      }
    },
    options: {
      customProperties: true
    }
  },
  breakpoint: {
    thresholds: {
      xs: 600,
      sm: 850,
      md: 1024,
      lg: 1350,
      xl: 1650
    },
    scrollBarWidth: 15
  }
})
