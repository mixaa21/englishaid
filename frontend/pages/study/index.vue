<template>
  <div class="study">
    <v-card class="cards" :color="this.answer === 'Правильно' ? 'success' : this.answer === 'Неправильно' ? 'error' : ''">
      <div class="word">{{word[randomLang ? 'translation' : 'word']}}</div>
      <v-text-field
        :label="'Перевод'"
        v-model="translation"
        v-on:keyup.enter="$refs.check.$el.click()"
        ref="input"
        outlined
      ></v-text-field>
      <div v-if="toggle && answer === 'Неправильно'">
        <div>Правильный ответ: {{word[!randomLang ? 'translation' : 'word']}}</div>
      </div>
      <v-btn
        @click="check"
        v-if="!toggle"
        ref="check"
        :disabled="translation === ''"
      >Проверить</v-btn>
      <v-btn
        @click="next"
        v-if="toggle"
        ref="next"
      >Далее</v-btn>
      <div>{{answer}}</div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "study",
  async asyncData({$axios}) {
    const dictionary = (await $axios.get('http://localhost:3001/dictionary/getAll')).data
    const randomWord = Math.floor(Math.random() * dictionary.length)
    const randomLang = Math.floor(Math.random() * 2)
    return {
      dictionary,
      randomLang,
      word: dictionary[randomWord]
    }
  },
  data: () => {
    return {
      randomLang: null,
      translation: '',
      answer: null,
      toggle: false
    }
  },
  methods: {
    start() {

    },
    check() {
      this.translation.toLowerCase() === this.word[!this.randomLang ? 'translation' : 'word'] ? this.answer = 'Правильно' : this.answer = 'Неправильно'
      this.toggle = true
      console.log(this.$refs.next);
      setTimeout(() => {
        console.log(this.$refs.next.$el);
        this.$refs.next.$el.focus()
      })
    },
    next() {
      this.word = this.dictionary[Math.floor(Math.random() * this.dictionary.length)]
      this.answer = ''
      this.translation = ''
      this.toggle = false
      this.randomLang = Math.floor(Math.random() * 2)
      setTimeout(() => {
        this.$refs.check.$el.disable = true
      })
      setTimeout(() => {
        this.$refs.input.focus()
      })
    }
  }
}
</script>

<style lang="scss">


</style>
