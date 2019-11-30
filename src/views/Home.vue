<template>
  <v-app>
    <v-img :src="`${publicPath}images/home_background.jpg`" style="position: absolute; max-width: 100%; max-height: 100%;" cover></v-img>
    <v-content style="padding: 50px;">
      <div style="height: 100%; width: 100%; border-radius: 15px; padding: 50px;" class="elevation-5 white">
        <v-avatar size="100">
          <img :src="`${publicPath}images/myPic.jpg`" alt="Shardul">
        </v-avatar>
        <div style="height: 30px;"></div>
        <h1 class="headline" style="font-family: 'Nunito', sans-serif !important;">Hello, I am</h1>
        <h1 class="display-3" style="font-family: 'Quicksand', 'Nunito', sans-serif !important;">Shardul Nalegave</h1>
        <div style="height: 30px;"></div>
        <div>
          <h1 class="display-1" style="display: inline-block; font-family: 'Nunito', sans-serif !important;">I am a</h1>
          <div style="width: 10px; display: inline-block;"></div>
          <h1 class="display-1" style="display: inline-block; font-family: 'Overpass Mono', monospace !important; border-bottom: 1px dashed #424242; padding-right: 5px;" :style="`border-right: ${borderVisible ? '5px solid #424242' : 'none'};`">{{ typingWord }}</h1>
        </div>
      </div>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      publicPath: process.env.BASE_URL,
      typingWord: "",
      wordIndex: 0,
      letterIndex: 0,
      words: [ "Developer", "Tech Enthusiast" ],
      typingMode: 1,
      borderVisible: true,
    };
  },
  created() {
    this.wordIndex = 0;
    this.letterIndex = 0;
    setInterval(() => {
      if (this.typingMode == 1) {
        this.borderVisible = !this.borderVisible
      } else this.borderVisible = true
    }, 200)
    setInterval(() => {
      let word = this.words[this.wordIndex]
      if (this.typingMode == 1) {
        if (this.letterIndex < word.length) {
          this.typingWord += word[this.letterIndex]
          this.letterIndex += 1
        } else {
          this.typingMode = -1;
        }
      } else {
        if (this.letterIndex > 0) {
          this.typingWord = word.slice(0, this.letterIndex -1)
          this.letterIndex -= 1
        } else {
          if (this.words.length - 1 > this.wordIndex) {
            this.wordIndex += 1;
          } else {
            this.wordIndex -= 1;
          }
          this.typingMode = 1;
        }
      }
    }, 500)
  },
}
</script>
