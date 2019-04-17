<template>
   <div class="flex-grow flex flex-col overflow-hidden">
     <div id="postTitle" class="p-1 flex-no-grow">
       <input class="border border-black px-3 rounded text-lg leading-loose w-full" placeholder="タイトル"></input>
     </div>
     <div id="postTags" class="px-1 pb-1 flex-no-grow">
       <input class="border border-black px-3 rounded leading-normal w-full" placeholder="タグを空白区切りで５つまで入力"></input>
     </div>
     <div class="flex px-1 pb-1 flex-grow">
       <div class="border rounded" v-bind:class="leftPanelClass">
         <textarea :value="inputMarkdown" @input="update" class="text-sm p-3 w-full h-full resize-none border border-black rounded" placeholder="Markdown記法で記事を作成"></textarea>
       </div>
       <div id="compiledPost" v-html="compiledHTML" class="overflow-y-scroll p-3 text-left h-full bg-white border rounded" v-bind:class="rightSideClass">compiledPost</div>
     </div>
     <div class="w-full h-8 flex-no-grow flex flex-row-reverse items-stretch px-1">
       <div class="border relative w-8 bg-blue hover:bg-blue-dark rounded-r" @click="isActive = !isActive">
         <font-awesome-icon icon="caret-up" class="h-full text-sm text-white"/>
         <ul v-if="isActive" class="text-sm text-left list-reset w-48 border rounded absolute z-20 pin-r pin-b mb-10">
           <li class="p-2 hover:bg-blue-lighter" @click="buttonNumber = 3"><font-awesome-icon icon="save" class="text-sm mr-2"/>下書き保存</li>
           <li class="p-2 hover:bg-blue-lighter" @click="buttonNumber = 2"><font-awesome-icon icon="lock" class="text-sm mr-2"/>非公開投稿</li>
           <li class="p-2 hover:bg-blue-lighter" @click="buttonNumber = 1"><font-awesome-icon icon="upload" class="text-sm mr-2"/>投稿</li>
         </ul>
       </div>
       <button v-if="buttonNumber === 3" class="rounded-l bg-blue hover:bg-blue-dark text-white font-bold w-32 border"><font-awesome-icon icon="save" class="text-sm mr-2"/>下書き保存</button>
       <button v-if="buttonNumber === 2" class="rounded-l bg-blue hover:bg-blue-dark text-white font-bold w-32 border"><font-awesome-icon icon="lock" class="text-sm mr-2"/>非公開投稿</button>
       <button v-if="buttonNumber === 1" class="rounded-l bg-blue hover:bg-blue-dark text-white font-bold w-32 border"><font-awesome-icon icon="upload" class="text-sm mr-2"/>投稿</button>
       <div class="inline-flex mr-1">
         <button @click="panelNumber = 1" class="w-8 rounded-l bg-blue hover:bg-blue-dark"><font-awesome-icon icon="caret-left" class="h-full text-sm text-white"/></button>
         <button @click="panelNumber = 2" class="w-8 bg-blue hover:bg-blue-dark"><font-awesome-icon icon="clone" class="h-full text-sm text-white"/></button>
         <button @click="panelNumber = 3" class="w-8 rounded-r bg-blue hover:bg-blue-dark"><font-awesome-icon icon="caret-right" class="h-full text-sm text-white"/></button>
       </div>
     </div>
     <div class="w-screen h-screen absolute pin z-10" @click="isActive = false" v-if="isActive"></div>
   </div>
</template>

<script>
import marked from 'marked';
import hljs from 'highlightjs';
import _ from 'lodash';

export default {
  data() {
    return {
      inputMarkdown: '',
      isActive: false,
      buttonNumber: 1,
      panelNumber: 2,
    }
  },
  computed: {
    leftPanelClass: function() {
      return {
        'hidden': this.isMatched(1),
        'w-1/2': this.isMatched(2),
        'w-full': this.isMatched(3),
      }
    },
    rightSideClass: function() {
      return {
        'hidden': this.isMatched(3),
        'w-1/2': this.isMatched(2),
        'w-full': this.isMatched(1),
      }
    },
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

      return marked(this.inputMarkdown, { 
        sanitize: true,
        highlight: function(code, lang) {
          return hljs.highlightAuto(code, [lang]).value;
        },
        renderer: renderer
      })
    }
  },
  methods: {
    isMatched: function(num) {
      return this.panelNumber === num
    },
    update: _.debounce(function (e) {
      this.inputMarkdown = e.target.value
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
</style>
