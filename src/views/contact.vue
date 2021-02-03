<template>
  <v-row no-gutters>
    <v-col cols="12">
      <v-card-text class="display-2 text-center font-weight-bold">Get In Touch</v-card-text>
      <v-card-text class="text-center subtitle-1 desc">
        {{ desc }}
      </v-card-text>
    </v-col>
    <v-col class="mt-12 text-center">
      <v-btn color="primary" rounded height="50px" :href="'mailto:123choy123@gmail.com'" class="say-hi-button font-weight-bold">Say Hello</v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'contact',

  data: () => ({
    desc: "Need help? Want to hire me as a freelancer for your work? Feel free to contact me and I would be happy to help!, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
  }),
}
</script>

<style>
.desc{
    max-width: 800px;
    margin: auto;
}

.say-hi-button {
  width: 200px;
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
  transform: scale(1);
  animation: pulse 2s infinite;
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
</style>