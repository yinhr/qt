<template>
  <div class="m-auto my-4 px-6 py-4 max-w-lg text-left bg-white">
    <div class="mb-4 flex">
      <img class="w-10 h-10 rounded-full" src="https://tailwindcss.com/img/jonathan.jpg" alt="Avatar of Jonathan Reinink">
      <div class="mx-3 my-auto text-sm">@Jonathan Reinink</div>
      <div class="mx-3 my-auto text-xs">Updated on 2019 Apr 4</div>
    </div>
    <div class="font-semibold text-sm mb-3">
      <span class="inline-block bg-orange-lighter rounded-full px-3 py-1 mr-1 mb-1">
        #rails
      </span>
      <span class="inline-block bg-orange-lighter rounded-full px-3 py-1 mr-1 mb-1">
        #Vue.js
      </span>
    </div>
    <h1 class="my-6">Long Long Long Long Long Long long long Title of the Content</h1>
   <div v-html="converedContent"></div>
  </div>
</template>

<script>
import marked from 'marked'
marked.setOptions({
  sanitize: true
})
export default {
  data() {
    return {
      markedContent: '',
      converedContent: ''
    }
  },
  created() {
    this.markedContent = `
# Markedjsを使った簡易エディタ

[markedjs](https://github.com/evilstreak/markdown-js)を使ってマークダウン記法でHTMLに変換できるフォームを作成しました。

## テーブルのサンプル

| Tables   |      Are      |  Cool |
|----------|:-------------:|------:|
| col 1 is |  left-aligned | $1600 |
| col 2 is |    centered   |   $12 |
| col 3 is | right-aligned |    $1 |

## コードのサンプル
`;
  },
  mounted() {
    this.converedContent = marked(this.markedContent);
  }
}
</script>
