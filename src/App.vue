<template>
  <v-app>
    <layout-master></layout-master>
  </v-app>
</template>

<script>
import { SHARED } from '@/constants/constants'
export default {
  name: 'App',
  created() {
    //this.browserDetec()
    //this.initilizePageLanguage()
  },
  methods: {},
}
</script>

<style lang="scss">
html {
  scroll-behavior: smooth;
  overflow-y: scroll !important;
}
* {
  word-break: normal;
  scroll-behavior: smooth;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

*::-webkit-scrollbar {
  display: none;
}


.page {
  background-color: #2e2e2e;
}

.full-width {
  width: 100%;
}

.full-height,
html,
body,
#app,
.page {
  height: 100%;
}
.dialog-card {
  overflow-x: hidden;
}
/* Pagination Css */
.v-pagination {
  margin: 15px 0px;
  li {
    button {
      margin: 0px;
      border-radius: 0px !important;
      box-shadow: none !important;
      border-top: 1px solid;
      border-bottom: 1px solid;
      border-left: 1px solid;
      border-color: var(--v-base_2-base);
      min-height: 40px;
      min-width: 40px !important;
      font-size: 16px;
    }
    &:last-child {
      button {
        border-right: 1px solid;
        border-color: var(--v-base_2-base);
        border-top-right-radius: 10px !important;
        border-bottom-right-radius: 10px !important;
      }
    }
    &:first-child {
      button {
        border-top-left-radius: 10px !important;
        border-bottom-left-radius: 10px !important;
      }
    }
  }
}

/* Table CSS */
.v-data-table__wrapper {
  table {
    .v-data-table-header-mobile {
      display: none;
    }
    .v-data-table-header {
      tr {
        background-color: var(--v-base_3-base);
        th {
          span {
            color: var(--v-base-base);
          }
        }
      }
    }
    tbody {
      tr:nth-child(2n) {
        background-color: var(--v-base_3-base);
      }
    }
    td,
    th {
      border-bottom: 0px !important;
    }
  }
}

/* Pagination Css */
.v-pagination {
  margin: 15px 0px;
  li {
    button {
      margin: 0px;
      border-radius: 0px !important;
      box-shadow: none !important;
      border-top: 1px solid;
      border-bottom: 1px solid;
      border-left: 1px solid;
      border-color: var(--v-base_2-base);
      min-height: 40px;
      min-width: 40px !important;
      font-size: 16px;
    }
    &:last-child {
      button {
        border-right: 1px solid;
        border-color: var(--v-base_2-base);
        border-top-right-radius: 10px !important;
        border-bottom-right-radius: 10px !important;
      }
    }
    &:first-child {
      button {
        border-top-left-radius: 10px !important;
        border-bottom-left-radius: 10px !important;
      }
    }
  }
}
</style>
