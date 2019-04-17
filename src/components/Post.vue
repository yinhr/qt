<template>
  <div class="w-full max-w-3xl self-center">
    <div class="lg:flex lg:mt-8 text-sm">
      <div class="hidden lg:block lg:w-1/10 lg:sticky lg:pin-t lg:self-start">
        <div class="py-3 font-semibold text-blue">123</div>
        <button class="hover:bg-blue-lightest border-2 border-blue shadow w-16 h-16 rounded-full"><font-awesome-icon icon="thumbs-up" class="text-3xl"/></button>
      </div>
      <div class="px-6 py-4 text-left w-full lg:w-7/10 border">
        <div class="py-1 flex flex-wrap">
          <img class="w-10 h-10 rounded-full" src="https://tailwindcss.com/img/jonathan.jpg" alt="Avatar of Jonathan Reinink">
          <div class="px-3 self-center text-base">@Jonathan Reinink</div>
          <div class="px-3 self-center text-base">Updated on 2019 Apr 4</div>
        </div>
        <h1 class="py-2">Long Long Long Long Long Long long long Title of the Content</h1>
        <div class="font-semibold pt-2 pb-5">
          <span class="inline-block bg-orange-lighter rounded-full px-3 py-1 mr-1 mb-1">
            #rails
          </span>
          <span class="inline-block bg-orange-lighter rounded-full px-3 py-1 mr-1 mb-1">
            #Vue.js
          </span>
        </div>
        <div class="text-center lg:hidden">
          <button class="border-2 border-blue rounded w-64 h-10 sticky"><font-awesome-icon icon="thumbs-up" class="text-md"/><span class="px-3">123</span></button>
        </div>
       <div id="compiledPost" v-html="compiledHTML"></div>
      </div>
      <div class="hidden lg:block lg:w-2/10 px-2">記事見出しリンクを作成予定</div>
    </div>
    <div class="w-full max-w-3xl mt-10 px-6 lg:px-0 border-t">
      <div class="flex">
        <div class="hidden lg:block lg:w-1/10"></div>
        <div class="w-full lg:w-7/10">
          <div class="w-full my-4 text-left">
            <div class="flex px-2 py-3">
              <img class="w-10 h-10 rounded-full" src="https://tailwindcss.com/img/jonathan.jpg" alt="Avatar of Jonathan Reinink">
              <div class="px-2 text-sm self-center">
                <div class="pb-1">@JonathanReinink</div>
                <div>2019-04-20 09:23</div>
              </div>
            </div>
            <div class="p-4 border comment">
              ccommentcommentcommentcommentcommentcommentcommentcommentcommentcommentcommentcommentcommentcommentcommentcommentcommentcommentomment
            </div>
          </div>
          <div class="w-full my-4 text-left">
            <div class="flex px-2 py-3">
              <img class="w-10 h-10 rounded-full" src="https://tailwindcss.com/img/jonathan.jpg" alt="Avatar of Jonathan Reinink">
              <div class="px-2 text-sm self-center">
                <div class="pb-1">@JonathanReinink</div>
                <div>2019-04-20 09:23</div>
              </div>
            </div>
            <div class="p-4 border comment">
              ccommentcommentcommentcommentcommentcommentcommentcommentcommentcommentcommentcommentcommentcommentcommentcommentcommentcommentomment
            </div>
          </div>
          <div class="py-8">
            <textarea  class="text-sm p-4 w-full h-32 resize-none border rounded" placeholder="コメントを投稿"></textarea>
          </div>
        </div>
        <div class="hidden lg:block lg:w-2/10"></div>
      </div>
    </div>
  </div>
</template>

<script>
import marked from 'marked';
import hljs from 'highlightjs';
import _ from 'lodash';

export default {
  data() {
    return {
      input: '# hello'
    }
  },
  created() {
  },
  mounted() {
  },
  computed: {
    compiledHTML: function() {
      const renderer = new marked.Renderer();

      renderer.code = function(code, infostring, escaped) {
        var lang = (infostring || '').match(/\S*/)[0];
        if (this.options.highlight) {
          var out = this.options.highlight(code, lang);
          if (out != null && out !== code) {
            escaped = true;
            code = out;
          }
        }

        if (!lang) {
          return '<pre><code class="hljs mb-5 px-4 py-4">'
            + (escaped ? code : escape(code, true))
            + '</code></pre>';
        }

        return '<pre><code class="hljs mb-5 px-4 py-4 '
          + this.options.langPrefix
          + escape(lang, true)
          + '">'
          + (escaped ? code : escape(code, true))
          + '</code></pre>\n';
      };

      renderer.blockquote = function(quote) {
        return '<blockquote class="px-5 border-gray border-l-4">\n' + quote + '</blockquote>\n';
      };

      renderer.heading = function(text, level) {
        if (level == 1) {
          return '<h' + level + ' class="border-b border-grey my-5">' + text + '</h' + level + '>\n'; 
        } else {
          return '<h' + level + ' class="my-5">' + text + '</h' + level + '>\n'; 
        }
      };

      renderer.list = function(body, ordered, start) {
        const type = ordered ? 'ol' : 'ul';
        const startatt = (ordered && start !== 1) ? (' start="' + start + '"') : '';
        return '<' + type + startatt + ' class="mb-4">\n' + body + '</' + type + '>\n';
      };

      renderer.listitem = function(text) {
        return '<li class="mb-2">' + text + '</li>\n';
      };

      renderer.paragraph = function(text) {
        return '<p class="text-black mb-5">' + text + '</p>\n';
      };

      renderer.table = function(header, body) {
        if (body) body = '<tbody>' + body + '</tbody>';
        return '<table class="table-auto border border-collapse mb-5">\n'
          + '<thead>\n'
          + header
          + '</thead>\n'
          + body
          + '</table>\n';
      };

      renderer.tablerow = function(content) {
        return '<tr>\n' + content + '</tr>\n'; 
      };

      renderer.tablecell = function(content, flags) {
        const type = flags.header ? 'th' : 'td';
        const tag = flags.align
          ? '<' + type + ' class="border px-3 py-2" align="' + flags.align + '">'
          : '<' + type + ' class="border px-3 py-2" >';
        return tag + content + '</' + type + '>\n';
      };

      renderer.codespan = function(text) {
        return '<code class="text-blue-dark">' + text + '</code>';
      };

      return marked(this.input, { 
        sanitize: true,
        highlight: function(code, lang) {
          return hljs.highlightAuto(code, [lang]).value;
        },
        renderer: renderer
      })
    }
  },
  methods: {
    update: _.debounce(function (e) {
      this.input = e.target.value
    }, 300)
  }
}
</script>

<style>
@import url("../../node_modules/highlightjs/styles/zenburn.css");

#compiledPost table tbody tr:nth-child(odd) {
  background-color: #f1f5f8;
}

#compiledPost a {
  text-decoration: none;
  margin-right: 3px;
  margin-left: 3px;
}

.comment {
  @apply relative;
}

.comment::before {
  @apply absolute;
  content: "";
  top: -20px;
  left: 1rem;
  border-top: 10px solid transparent;
  border-right: 10px solid transparent;
  border-left: 10px solid transparent;
  border-bottom: 10px solid #dae1e7;
  @apply rounded;
}

.comment::after {
  @apply absolute;
  content: "";
  top: -19px;
  left: 1rem;
  border: 10px solid transparent;
  border-bottom: 10px solid #fff;
}

</style>
