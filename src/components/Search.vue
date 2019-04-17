<template>
  <div class="md:flex w-full self-center mt-4 md:mt-8 max-w-2xl text-left">
    <div class="w-full md:w-2/3 text-center">
      <form class="w-full">
        <div class="flex items-stretch px-1">
          <input type="text" class="border appearance-none p-1 w-full">
          <button class="w-32 bg-blue border rounded ml-3 text-white hover:bg-blue-dark"><font-awesome-icon icon="search" class="text-sm text-white hover:text-blue-light mr-1"/>検索</button>
        </div>
      </form>
      <div class="text-right mt-3">
        <button class="border bg-white rounded px-2 py-1"><font-awesome-icon icon="sort-amount-down" class="mx-1 text-sm"/>日付順</button>
      </div>
      <PostList v-bind:posts="posts"></PostList>
      <paginate
        v-bind:page-count="pageCount"
        :page-range="1"
        :prev-text="'prev'"
        :next-text="'next'"
        :container-class="'pagination list-reset inline-flex my-3 font-semibold bg-white text-blue'"
        :page-class="'border-t border-b border-r hover:bg-blue-lightest'"
        :page-link-class="'block text-center align-middle p-2'"
        :prev-class="'border rounded-l hover:bg-blue-lightest'"
        :prev-link-class="'block w-14 text-center align-middle p-2'"
        :next-class="'border-t border-b border-r rounded-r hover:bg-blue-lightest'"
        :next-link-class="'block w-14 text-center align-middle p-2'"
      >
      </paginate>
    </div>
    <div class="w-full md:w-1/3 px-2">
      <div class="w-full h-64 text-center p-5">
        <div class="break-words h-24 flex justify-center items-center">
          <div class="break-words w-full">
            <h3>Rails</h3>
          </div>
        </div>
        <div class="flex py-3">
          <div class="w-1/2 border-r">
            <p>123</p>
            <p class="text-sm py-1">記事</p>
          </div>
          <div class="w-1/2">
            <p>123</p>
            <p class="text-sm py-1">フォロワー</p>
          </div>
        </div>
        <div class="py-3">
          <button class="text-xs text-white font-semibold px-1 py-2 bg-blue rounded w-24">
            <font-awesome-icon icon="plus" class="text-xs"/>
            <font-awesome-icon icon="tag" class="text-xs mr-1"/>フォロー
          </button>
        </div>
      </div>
      <div class="mt-3 p-3 border w-full h-64">
        <div class="text-sm"><font-awesome-icon icon="search" class="text-sm"/>検索オプション</div>
      </div>
    </div>
  </div>
</template>

<script>
import PostList from '@/components/PostList.vue'

export default {
  components: {
    PostList
  },
  computed: {
    pageCount: function() {
      return Math.ceil(this.totalPostsCount / this.postsPerPage)
    }
  },
  mounted: function() {
    this.$emit('sendTabId', this.tabId)
  },
  data: function() {
    return {
      tabId: 1,
      totalPostsCount: 136,
      postsPerPage: 10,
      posts: [
        { 
          id: 1,
          title: "VeryveryveryveryveryLongLongLongLongLongLonglong long Title of the Content",
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
            { id: 6, name: "CSS" },
            { id: 7, name: "Linux" },
            { id: 8, name: "AWS" },
            { id: 9, name: "Firebase" },
            { id: 10, name: "Larabel" },
          ],
          imgSrc: "https://tailwindcss.com/img/jonathan.jpg"
        },
        { 
          id: 3,
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
          id: 4,
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
          id: 5,
          title: "very very Long Long Long Long Long Long long long Title of the Content",
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
          id: 6,
          title: "very very Long Long Long Long Long Long long long Title of the Content",
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
          id: 7,
          title: "very very Long Long Long Long Long Long long long Title of the Content",
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
          id: 8,
          title: "very very Long Long Long Long Long Long long long Title of the Content",
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
          id: 9,
          title: "very very Long Long Long Long Long Long long long Title of the Content",
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
          id: 10,
          title: "very very Long Long Long Long Long Long long long Title of the Content",
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
      ]
    }
  }
}
</script>

<style>
.pagination li.disabled {
  color: #b8c2cc;
}

.pagination li.active {
  color: #ffffff;
  background-color: #3490dc;
}

.pagination li.disabled a {
  pointer-events: none;
}

.pagination li.active a {
  pointer-events: none;
}
</style>
