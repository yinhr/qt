<template>
  <div class="md:flex md:mt-8 mx-auto max-w-2xl text-sm">
    <div class="hidden xl:block px-5">
      <div class="py-3 sticky like">123</div>
      <button class="hover:bg-blue-lightest border-2 border-blue shadow like-button bg-white w-16 h-16 rounded-full sticky"><font-awesome-icon icon="thumbs-up" class="text-3xl"/></button>
    </div>
    <div class="px-6 py-4 text-left bg-white">
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
     <div id="compiledPost" v-html="compiledHTML"></div>
     <div id="editor">
       <textarea :value="input" @input="update"></textarea>
     </div>
    </div>
    <div class="hidden md:block">
      some
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
      markedContent: '',
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

.like {
  top: 20vh;
}

.like-button {
  top: 27vh;
}

textarea, #editor div {
  display: inline-block;
  width: 100%;
  height: 500px;
  vertical-align: top;
  box-sizing: border-box;
  padding: 0 20px;
}

textarea {
  border: none;
  border-right: 1px solid #ccc;
  resize: none;
  outline: none;
  background-color: #f6f6f6;
  font-size: 14px;
  font-family: 'Monaco', courier, monospace;
  padding: 20px;
}

#compiledPost table tbody tr:nth-child(odd) {
  background-color: #f1f5f8;
}

#compiledPost a {
  text-decoration: none;
  margin-right: 3px;
  margin-left: 3px;
}
</style>
