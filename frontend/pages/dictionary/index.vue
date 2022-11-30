<template>
  <div class="dictionary">
    <div class="main" v-for="(item, i) in dictionary" :key="i">
      <div>Слово: {{item.word}}</div>
      <div>Перевод: {{item.translation}}</div>
      <div>Транскрипция: {{item.transcription}}</div>
      <div>Уровень: {{item.cefr}}</div>
      <div>Категория: {{item.category}}</div>
      <div>Правильный глагол: {{item.regular ? 'Да' : 'Нет'}}</div>
      <div>Глагол состояния: {{item.stative ? 'Да' : 'Нет'}}</div>
    </div>

    <div class="main-form">
      <v-text-field
        class="main-form__word-input"
        label="Слово" v-model="word.word"
        outlined
      ></v-text-field>
      <v-text-field
        class="main-form__word-translation"
        label="Перевод"
        v-model="word.translation"
        outlined
      ></v-text-field>
      <v-select
        :label="'Часть речи'"
        v-model="word.partOfSpeech"
        :items="partsOfSpeech"
        outlined
      ></v-select>
      <div class="main-form__verbs"
           v-if="word.partOfSpeech === 'Verb'"
      >
        <v-checkbox
          label="Правильный глагол"
          v-model="word.regular"
        ></v-checkbox>
        <v-checkbox
          label="Глагол состояния"
          v-model="word.stative"
        ></v-checkbox>
      </div>
      <v-select
        :label="'Категория'"
        v-model="word.category"
        :items="categories"
        outlined
      ></v-select>
      <v-btn class="main-form__add-btn" @click="createVerb">Добавить слово</v-btn>
      <v-btn @click="changeTheme">Изменить тему</v-btn>
    </div>
    <div>{{partsOfSpeech}}</div>
  </div>
</template>

<script>
export default {
  name: 'dictionary',
  async asyncData({$axios}) {
    const dictionary = (await $axios.get('http://localhost:3001/dictionary/getAll')).data
    const partsOfSpeech = (await $axios.get('http://localhost:3001/parts-of-speech/getAll')).data
    const categories = (await $axios.get('http://localhost:3001/category/getAll')).data.map(item => {
      return item.category
    })
    return {
      dictionary,
      partsOfSpeech,
      categories
    }
  },
  data: () => {
    return {
      word: {
        word: null,
        translation: null,
        partOfSpeech: null,
        transcription: null,
        preference: 1,
        cefr: null,
        category: null,
        form: null,
        regular: 1,
        stative: 0
      }
    }
  },
  methods: {
    changeTheme() {
      this.$vuetify.theme.themes['light'] = {
        primary: '#0f5257',
        secondary: '#0b3142',
        accent: '#9c92a3',
        success: '#c6b9cd',
        warning: '#d6d3f0',
        info: '#17a2b8',
        danger: '#dc3545',
        background: '#000000'
      }
    },
    async createVerb() {
      try {
        let word = {}
        word = Object.assign(word, this.word)
        console.log(word);
        word.transcription = (await this.$axios.post('http://localhost:3001/dictionary', this.word, {headers: {"Access-Control-Allow-Origin": "*"}})).data
        this.dictionary.push(word)
        this.word.word = null
        this.word.translation = null
      } catch(e) {
        console.log(e);
      }
    },
  }
}
</script>

<style lang="scss">
.main {
  display: inline-flex;
  flex-flow: column wrap;
  border: 16px solid black;
  border-image:  url('~/static/love.png');
  border-image-repeat: repeat;
}

.main-form {
  max-width: 500px;
  &__word-input {
  }

  &__word-translation {
  }

  &__add-btn {
  }
}

</style>
