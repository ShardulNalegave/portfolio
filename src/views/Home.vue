<template>
  <v-app>
    <v-img :src="`${publicPath}images/home_background.jpg`" style="position: fixed; max-width: 100%; max-height: 100%; top: 0; left: 0; right: 0; bottom: 0;" cover></v-img>
    <v-content style="padding: 40px;" id="desktopPage">
      <div style="width: 100%; border-radius: 15px; padding: 50px;" class="elevation-5 white">
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
            <a :href="user.html_url" target="_blank" style="text-decoration: none;">
              <v-icon style="border-radius: 10px; padding: 8px; background: #212121; color: #FFFFFF; margin: 5px;">
                fa-github
              </v-icon>
            </a>
            <a href="https://www.instagram.com/shardul_nalegave/" target="_blank" style="text-decoration: none;">
              <v-icon style="border-radius: 10px; padding: 8px; background: #212121; color: #FFFFFF; margin: 5px;">
                fa-instagram
              </v-icon>
            </a>
            <a href="https://medium.com/@nalegaveshardul40" target="_blank" style="text-decoration: none;">
              <v-icon style="border-radius: 10px; padding: 8px; background: #212121; color: #FFFFFF; margin: 5px;">
                fa-medium
              </v-icon>
            </a>
            <a href="https://www.linkedin.com/in/shardul-nalegave-370156154/" target="_blank" style="text-decoration: none;">
              <v-icon style="border-radius: 10px; padding: 8px; background: #212121; color: #FFFFFF; margin: 5px;">
                fa-linkedin
              </v-icon>
            </a>
            <a href="mailto:nalegaveshardul40@gmail.com" target="_blank" style="text-decoration: none;">
              <v-icon style="border-radius: 10px; padding: 8px; background: #212121; color: #FFFFFF; margin: 5px;">
                fa-envelope
              </v-icon>
            </a>
            <div style="height: 30px;"></div>
            <div>
              <h1 class="headline" style="display: inline-block; font-family: 'Nunito', sans-serif !important;">I am a</h1>
              <div style="width: 10px; display: inline-block;"></div>
              <h1 class="headline" style="display: inline-block; font-family: 'Overpass Mono', monospace !important; border-bottom: 1px dashed #424242; padding-right: 5px;" :style="`border-right: ${borderVisible ? '5px solid #424242' : 'none'};`">{{ typingWord }}</h1>
            </div>
            <div style="height: 30px;"></div>
            <v-btn outlined color="grey darken-4" x-large @click="$vuetify.goTo('#aboutSection', {})">About Me</v-btn>
          </v-col>
          <v-col cols="5" style="height: 100%;">
            <h1 class="display-1">My Projects</h1>
            <div style="height: 20px;"></div>
            <div style="overflow-y: auto !important;">
              <div class="elevation-2 grey darken-4 white--text" v-for="repo in repos" v-bind:key="repo.id" style="padding: 20px; margin: 10px; border-radius: 8px;">
                <h1 class="title" style="font-family: 'Overpass Mono', monospace !important;">{{ repo.name }}</h1>
                <i><h1 class="caption" style="font-family: 'Overpass Mono', monospace !important;">{{ repo.full_name }}</h1></i>
                <div style="height: 10px;"></div>
                <a :href="repo.html_url" target="_blank" style="text-decoration:none;">
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
            <a :href="user.html_url" target="_blank" style="text-decoration: none;">
              <v-btn block outlined color="grey darken-4">
                More
                <v-icon right>arrow_right_alt</v-icon>
              </v-btn>
            </a>
          </v-col>
        </v-row>
      </div>
      <div style="height: 60px;"></div>
      <div style="border-radius: 15px; padding: 50px; text-align: center;" class="elevation-5 white" id="aboutSection">
        <h1 class="display-2" style="font-family: 'Quicksand', 'Nunito', sans-serif !important; border-bottom: 2px dashed #424242; display: inline-block; padding-left: 15px; padding-right: 15px; padding-bottom: 10px;">About Me</h1>
        <div style="height: 30px;"></div>
        <h1 class="body-1" style="margin-left: 120px; margin-right: 120px;">
          I am a student in <b>S.B. Patil Public School in Ravet, Pune</b> and I currently study in 9th grade. I was born and brought up in India. I have several hobbies like studying Quantum Physics, Chemistry, listening to music <em>(I love K-POP)</em> and most importantly coding.
        </h1>
        <div style="height: 15px;"></div>
        <h1 class="body-1" style="margin-left: 120px; margin-right: 120px;">
          I started out as a <b>Web Developer</b> but as I dug deeper in the world of programming I became interested in other technologies too. I have mastered <b>Javascript</b>, <b>Python</b> and <b>Dart</b> Programming Language. Currently I like using <b>Flutter</b>, <b>Vue.js</b>, etc for my projects. I can build <b>Web</b>, <b>Desktop</b>, <b>Android</b> and <b>Command Line</b> apps. I mostly like to use Flutter for building apps. I am currently learning <b>Machine Learning</b>  and <b>AI</b> concepts using frameworks like <b>Tensorflow</b> and <b>Pytorch</b>.
        </h1>
      </div>
      <div style="height: 60px;"></div>
      <div style="border-radius: 15px; padding: 50px; text-align: center;" class="elevation-5 white">
        <h1 class="display-2" style="font-family: 'Quicksand', 'Nunito', sans-serif !important; border-bottom: 2px dashed #424242; display: inline-block; padding-left: 15px; padding-right: 15px; padding-bottom: 10px;">Achievements</h1>
        <div style="height: 30px;"></div>
        <v-row no-gutters>
          <v-col align-self="center">
            <div class="elevation-2 grey darken-4 white--text" style="padding: 30px; margin: 10px; border-radius: 8px; text-align: start;">
              <h1 class="headline" style="font-family: 'Overpass Mono', monospace !important;">Winner Of State Level CBSE Science Exhibition</h1>
              <div style="height: 10px;"></div>
              <h1 class="body-2 text--grey text--lighten-3" style="font-family: 'Overpass Mono', monospace !important;">I secured first rank in the state level of CBSE Science Exhibition in the Transport and Communication category. I was qualified for the Nationals and went till the final round but was unsuccessful due to some last minute technical problems.</h1>
            </div>
            <div class="elevation-2 grey darken-4 white--text" style="padding: 30px; margin: 10px; border-radius: 8px; text-align: start;">
              <h1 class="headline" style="font-family: 'Overpass Mono', monospace !important;">Winner of Regionals of RCJ (Robo-Cup Junior) </h1>
              <div style="height: 10px;"></div>
              <h1 class="body-2 text--grey text--lighten-3" style="font-family: 'Overpass Mono', monospace !important;">I had also won the regionals of RCJ Robotics Competition held in Bangalore (as the regionals were for whole South India) with my team. We had qualified for the Nationals but our robot had some structural issues which led to us not winning.</h1>
            </div>
          </v-col>
          <v-col style="padding-left: 30px; padding-right: 30px;" align-self="center">
            <div class="grey darken-4 white--text elevation-8" style="padding: 30px; border-radius: 8px;">
              <h1 class="display-1" style="font-family: 'OverpassMono', monospace !important;">Audible Reality</h1>
              <div style="height: 25px;"></div>
              <h1 class="body-2 text--grey text--lighten-3" style="font-family: 'Overpass Mono', monospace !important;">
                <b>Audible Reality</b> is my flagship project. It is a helper app with a personal assistant for visually challenged people. Visually challenged people are deprived of several privileges like they cannot use the amazing features given to us by the developing technology! So I decided to make an app for them so that they can access those features and at the same time it converts the Virtual Reality to Audible Reality thus, <b>Audible Reality</b>.
                <br><br>
                I had originally built it for CBSE Science Exhibition with little hope that it will be so successful. But its widespread recognition made me think about it seriously, and, of course, I recieved first rank in the exhibition because of this project. Till now it has been presented in several exhibitions and has a streak of never losing. I hope that I can have my own startup with this project soon!
              </h1>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-content>
    <v-content style="padding: 20px;" id="mobilePage">
      <div style="border-radius: 15px; padding: 40px; text-align: center;" class="elevation-5 white">
        <v-avatar size="80">
          <img :src="user.avatar_url" alt="Shardul">
        </v-avatar>
        <div style="height: 15px;"></div>
        <h1 class="title" style="font-family: 'Nunito', sans-serif !important;">Hello, I am</h1>
        <h1 class="display-1" style="font-family: 'Quicksand', 'Nunito', sans-serif !important; font-size: 30px !important; font-weight: bold;">{{ user.name }}</h1>
        <div style="height: 10px;"></div>
          <h1 class="subtitle-1" style="font-family: 'Overpass Mono', monospace !important; font-size: 13px !important;">
            {{ user.location }}
          </h1>
          <div style="height: 20px;"></div>
          <a :href="user.html_url" target="_blank" style="text-decoration: none;">
            <v-icon style="border-radius: 10px; padding: 6px; background: #212121; color: #FFFFFF; margin: 2px;">
              fa-github
            </v-icon>
          </a>
          <a href="https://www.instagram.com/shardul_nalegave/" target="_blank" style="text-decoration: none;">
            <v-icon style="border-radius: 10px; padding: 6px; background: #212121; color: #FFFFFF; margin: 2px;">
              fa-instagram
            </v-icon>
          </a>
          <a href="https://medium.com/@nalegaveshardul40" target="_blank" style="text-decoration: none;">
            <v-icon style="border-radius: 10px; padding: 6px; background: #212121; color: #FFFFFF; margin: 2px;">
              fa-medium
            </v-icon>
          </a>
          <a href="https://www.linkedin.com/in/shardul-nalegave-370156154/" target="_blank" style="text-decoration: none;">
            <v-icon style="border-radius: 10px; padding: 6px; background: #212121; color: #FFFFFF; margin: 2px;">
              fa-linkedin
            </v-icon>
          </a>
          <a href="mailto:nalegaveshardul40@gmail.com" target="_blank" style="text-decoration: none;">
            <v-icon style="border-radius: 10px; padding: 6px; background: #212121; color: #FFFFFF; margin: 2px;">
              fa-envelope
            </v-icon>
          </a>
      </div>
      <div style="height: 60px;"></div>
      <div style="border-radius: 15px; padding: 30px; text-align: center;" class="elevation-5 white">
        <h1 class="headline" style="font-family: 'Quicksand', 'Nunito', sans-serif !important; border-bottom: 2px dashed #424242; display: inline-block; padding-left: 15px; padding-right: 15px; padding-bottom: 10px; font-weight: bold;">About Me</h1>
        <div style="height: 30px;"></div>
        <h1 class="body-2" style="">
          I am a student in <b>S.B. Patil Public School in Ravet, Pune</b> and I currently study in 9th grade. I was born and brought up in India. I have several hobbies like studying Quantum Physics, Chemistry, listening to music <em>(I love K-POP)</em> and most importantly coding.
        </h1>
        <div style="height: 15px;"></div>
        <h1 class="body-2" style="">
          I started out as a <b>Web Developer</b> but as I dug deeper in the world of programming I became interested in other technologies too. I have mastered <b>Javascript</b>, <b>Python</b> and <b>Dart</b> Programming Language. Currently I like using <b>Flutter</b>, <b>Vue.js</b>, etc for my projects. I can build <b>Web</b>, <b>Desktop</b>, <b>Android</b> and <b>Command Line</b> apps. I mostly like to use Flutter for building apps. I am currently learning <b>Machine Learning</b>  and <b>AI</b> concepts using frameworks like <b>Tensorflow</b> and <b>Pytorch</b>.
        </h1>
      </div>
      <div style="height: 60px;"></div>
      <div style="border-radius: 15px; padding: 30px;" class="elevation-5 white">
        <div class="elevation-2 grey darken-4 white--text" v-for="repo in repos" v-bind:key="repo.id" style="padding: 20px; margin: 10px; border-radius: 8px;">
          <h1 class="title" style="font-family: 'Overpass Mono', monospace !important;">{{ repo.name }}</h1>
          <i><h1 class="caption" style="font-family: 'Overpass Mono', monospace !important; font-size: 8px !important;">{{ repo.full_name }}</h1></i>
          <div style="height: 10px;"></div>
          <a :href="repo.html_url" target="_blank" style="text-decoration:none;">
            <v-icon style="border-radius: 8px; padding: 8px; background: #FFFFFF; color: #212121; font-size: 18px;">
              keyboard_arrow_right
            </v-icon>
          </a>
        </div>
        <div style="height: 20px;"></div>
        <a :href="user.html_url" target="_blank" style="text-decoration: none;">
          <v-btn block outlined color="grey darken-4">
            More
            <v-icon right>arrow_right_alt</v-icon>
          </v-btn>
        </a>
      </div>
      <div style="height: 60px;"></div>
      <div style="border-radius: 15px; padding: 15px; text-align: center;" class="elevation-5 white">
        <div style="height: 20px;"></div>
        <h1 class="headline" style="font-family: 'Quicksand', 'Nunito', sans-serif !important; border-bottom: 2px dashed #424242; display: inline-block; padding-left: 15px; padding-right: 15px; padding-bottom: 10px; font-weight: bold;">Achievements</h1>
        <div style="height: 30px;"></div>
        <div class="elevation-2 grey darken-4 white--text" style="padding: 30px; margin: 10px; border-radius: 8px;">
          <h1 class="title" style="font-family: 'Overpass Mono', monospace !important;">Winner Of State Level CBSE Science Exhibition</h1>
          <div style="height: 10px;"></div>
          <h1 class="subtitle-2 text--grey text--lighten-3" style="font-family: 'Overpass Mono', monospace !important;">I secured first rank in the state level of CBSE Science Exhibition in the Transport and Communication category. I was qualified for the Nationals and went till the final round but was unsuccessful due to some last minute technical problems.</h1>
        </div>
        <div class="elevation-2 grey darken-4 white--text" style="padding: 30px; margin: 10px; border-radius: 8px;">
          <h1 class="title" style="font-family: 'Overpass Mono', monospace !important;">Winner of Regionals of RCJ (Robo-Cup Junior) </h1>
          <div style="height: 10px;"></div>
          <h1 class="subtitle-2 text--grey text--lighten-3" style="font-family: 'Overpass Mono', monospace !important;">I had also won the regionals of RCJ Robotics Competition held in Bangalore (as the regionals were for whole South India) with my team. We had qualified for the Nationals but our robot had some structural issues which led to us not winning.</h1>
        </div>
      </div>
      <div style="height: 60px;"></div>
      <div style="border-radius: 15px; padding: 40px; text-align: center;" class="elevation-5 white">
        <div style="height: 10px;"></div>
        <h1 class="headline" style="font-family: 'Quicksand', 'Nunito', sans-serif !important; border-bottom: 2px dashed #424242; display: inline-block; padding-left: 15px; padding-right: 15px; padding-bottom: 10px; font-weight: bold;">Audible Reality</h1>
        <div style="height: 40px;"></div>
        <h1 class="body-2 text--grey text--lighten-3" style="font-family: 'Overpass Mono', monospace !important;">
          <b>Audible Reality</b> is my flagship project. It is a helper app with a personal assistant for visually challenged people. Visually challenged people are deprived of several privileges like they cannot use the amazing features given to us by the developing technology! So I decided to make an app for them so that they can access those features and at the same time it converts the Virtual Reality to Audible Reality thus, <b>Audible Reality</b>.
          <br><br>
          I had originally built it for CBSE Science Exhibition with little hope that it will be so successful. But its widespread recognition made me think about it seriously, and, of course, I recieved first rank in the exhibition because of this project. Till now it has been presented in several exhibitions and has a streak of never losing. I hope that I can have my own startup with this project soon!
        </h1>
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
      isLoading: true
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

<style scoped>

*::selection {
  background: #212121;
  color: #FFFFFF;
}

#desktopPage {
  display: none;
}
#mobilePage {
  display: none;
}

@media only screen and (max-width: 1000px) {
  #desktopPage {
    display: none;
  }
  #mobilePage {
    display: flex;
  }
}

@media only screen and (min-width: 1000px) {
  #desktopPage {
    display: flex;
  }
  #mobilePage {
    display: none;
  }
}

</style>
