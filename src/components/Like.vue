<template>
  <div>
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
      :prev-link-class="'block w-12 text-center align-middle p-2'"
      :next-class="'border-t border-b border-r rounded-r hover:bg-blue-lightest'"
      :next-link-class="'block w-12 text-center align-middle p-2'"
    >
    </paginate>
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
      tabId: 5,
      totalPostsCount: 99,
      postsPerPage: 10,
      posts: [
        { 
          id: 1,
          title: "VeryveryveryveryveryLongLongLongLongLong Long long long Title of the Content",
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
