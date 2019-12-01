<template>
  <v-app>
    <v-img :src="`${publicPath}images/home_background.jpg`" style="position: fixed; max-width: 100%; max-height: 100%;" cover></v-img>
    <v-content style="padding: 40px;">
      <div style="height: 100%; width: 100%; border-radius: 15px; padding: 50px;" class="elevation-5 white">
        <v-row no-gutters style="height: 95%;" v-if="!isLoading">
          <v-col cols="7" align-self="center" style="padding: 30px;">
            <v-avatar size="100">
              <img :src="user.avatar_url" alt="Shardul">
            </v-avatar>
            <div style="height: 30px;"></div>
            <h1 class="headline" style="font-family: 'Nunito', sans-serif !important;">Hello, I am</h1>
            <h1 class="display-3" style="font-family: 'Quicksand', 'Nunito', sans-serif !important;">{{ user.name }}</h1>
            <div style="height: 10px;"></div>
            <h1 class="subtitle-1" style="font-family: 'Overpass Mono', monospace !important;">
              <v-icon left>my_location</v-icon>
              {{ user.location }}
            </h1>
            <div style="height: 20px;"></div>
            <a :href="user.html_url" target="_blank">
              <v-icon style="border-radius: 10px; padding: 8px; background: #212121; color: #FFFFFF; margin: 5px;">
                fa-github
              </v-icon>
            </a>
            <a href="https://www.instagram.com/shardul_nalegave/" target="_blank">
              <v-icon style="border-radius: 10px; padding: 8px; background: #212121; color: #FFFFFF; margin: 5px;">
                fa-instagram
              </v-icon>
            </a>
            <a href="https://medium.com/@nalegaveshardul40" target="_blank">
              <v-icon style="border-radius: 10px; padding: 8px; background: #212121; color: #FFFFFF; margin: 5px;">
                fa-medium
              </v-icon>
            </a>
            <a href="https://www.linkedin.com/in/shardul-nalegave-370156154/" target="_blank">
              <v-icon style="border-radius: 10px; padding: 8px; background: #212121; color: #FFFFFF; margin: 5px;">
                fa-linkedin
              </v-icon>
            </a>
            <div style="height: 30px;"></div>
            <div>
              <h1 class="headline" style="display: inline-block; font-family: 'Nunito', sans-serif !important;">I am a</h1>
              <div style="width: 10px; display: inline-block;"></div>
              <h1 class="headline" style="display: inline-block; font-family: 'Overpass Mono', monospace !important; border-bottom: 1px dashed #424242; padding-right: 5px;" :style="`border-right: ${borderVisible ? '5px solid #424242' : 'none'};`">{{ typingWord }}</h1>
            </div>
          </v-col>
          <v-col cols="5" style="height: 100%;">
            <h1 class="display-1">My Projects</h1>
            <div style="height: 20px;"></div>
            <div style="overflow-y: auto !important;">
              <div class="elevation-2 grey darken-4 white--text" v-for="repo in repos" v-bind:key="repo.id" style="padding: 20px; margin: 10px; border-radius: 8px;">
                <h1 class="title" style="font-family: 'Overpass Mono', monospace !important;">{{ repo.name }}</h1>
                <i><h1 class="caption" style="font-family: 'Overpass Mono', monospace !important;">{{ repo.full_name }}</h1></i>
                <div style="height: 10px;"></div>
                <a :href="repo.html_url" target="_blank">
                  <v-icon style="border-radius: 8px; padding: 8px; background: #FFFFFF; color: #212121; font-size: 18px;">
                    keyboard_arrow_right
                  </v-icon>
                </a>
              </div>
            </div>
          </v-col>
        </v-row>
        <v-row no-gutters style="height: 5%;" v-if="!isLoading">
          <v-col cols="7"></v-col>
          <v-col cols="5">
            <v-btn block outlined color="grey darken-4">
              More
              <v-icon right>arrow_right_alt</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </div>
    </v-content>
  </v-app>
</template>

<script>
import axios from "axios"
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
      user: {},
      repos: [],
      isLoading: true,
    };
  },
  created() {
    this.isLoading = true;
    this.wordIndex = 0;
    this.letterIndex = 0;
    axios.get("https://api.github.com/users/ShardulNalegave")
      .then(res => {
        let userData = res.data;
        this.user = userData;
        axios.get(userData.repos_url)
          .then((res) => {
            let data = res.data;
            data.sort((a, b) => a.stargazers_count - b.stargazers_count)
            data.reverse()
            this.repos = data.slice(0, 3)
            this.isLoading = false;
          })
      })
    setInterval(() => {
      if (this.typingMode == 1) {
        this.borderVisible = !this.borderVisible
      } else this.borderVisible = true
    }, 400)
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
