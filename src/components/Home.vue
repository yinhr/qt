<template>
  <div class="mx-auto mt-4 px-6 py-4 max-w-xl text-left">
    <h2 class="mb-3"><span class="mr-3"><font-awesome-icon icon="stream" class="text-2xl"/></span>タイムライン</h2>
    <PostList v-bind:posts="posts"></PostList>
  </div>
</template>

<script>
import PostList from '@/components/PostList.vue'

export default {
  components: {
    PostList
  },
  data: function() {
    return {
      posts: [
        { 
          id: 1,
          title: "Very very very very very Long Long Long Long Long Long long long Title of the Content",
          author: "Jonathan Reinink",
          createdOn: "2019 Apr 4",
          numberOfLike: 108,
          tags: [ 
            { id: 1, name: "Rails" },
            { id: 2, name: "Vue" },
            { id: 3, name: "HTTP" },
            { id: 4, name: "Mac" },
            { id: 5, name: "CSS" },
          ],
          imgSrc: "https://tailwindcss.com/img/jonathan.jpg"
        },
        { 
          id: 2,
          title: "【私的最強alias32選】忘れやすいコマンドは、『辞書化＆ショートカット化』しちゃえばいい",
          author: "Jonathan Reinink",
          createdOn: "2019 Apr 10",
          numberOfLike: 18,
          tags: [ 
            { id: 1, name: "Rails" },
            { id: 2, name: "Vue" },
            { id: 3, name: "HTTP" },
            { id: 4, name: "Mac" },
            { id: 5, name: "CSS" },
            { id: 6, name: "LongLongLongTitleOfTag" },
            { id: 7, name: "Linux" },
            { id: 8, name: "AWS" },
            { id: 9, name: "Firebase" },
            { id: 10, name: "Larabel" },
          ],
          imgSrc: "https://tailwindcss.com/img/jonathan.jpg"
        },
      ]
    }
  }
}
</script>
