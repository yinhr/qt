<template>
  <div class="md:flex max-w-2xl mx-auto mt-8">
    <div class="w-full md:w-1/4 px-2">
      <div class="mb-3">
        <img class="w-32 h-32 rounded-full" src="https://tailwindcss.com/img/jonathan.jpg" alt="Avatar of Jonathan Reinink">
      </div>
      <div class="mb-3">Jonathan Reinink</div>
      <div class="mb-3">@JonathanReinink</div>
      <div class="mb-3"><button>フォローする</button></div>
      <div class="mb-3 text-left">
        <p>Lorem doloremque accusamus libero quam sed architecto! Fugiat delectus esse vitae ab ab consequatur? Quidem corporis molestiae esse dolor ab Suscipit exercitationem aperiam earum suscipit aperiam velit. Modi blanditiis consectetur.</p>
      </div>
    </div>
    <div class="w-full md:w-3/4 px-2 text-sm">
      <ul class="list-reset md:flex menutab">
        <li>
          <a @click="activetab=1" v-bind:class="[ activetab === 1 ? 'activetab' : '' ]" href="#">投稿一覧</a>
        </li>
        <li>
          <a @click="activetab=2" v-bind:class="[ activetab === 2 ? 'activetab' : '' ]" href="#">フォロータグ</a>
        </li>
        <li>
          <a @click="activetab=3" v-bind:class="[ activetab === 3 ? 'activetab' : '' ]" href="#">フォロー</a>
        </li>
        <li>
          <a @click="activetab=4" v-bind:class="[ activetab === 4 ? 'activetab' : '' ]" href="#">フォロワー</a>
        </li>
      </ul>
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
  data: function() {
    return {
      totalPostsCount: 136,
      postsPerPage: 10,
      activetab: 1,
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

.menutab a {
  display: inline-block;
  text-decoration: none;
  padding: 0.5rem 1rem;
  color: #3490dc;
  font-weight: 600;
}

.menutab a:hover {
  color: #f6993f;
}

.menutab .activetab {
  color: #f6993f;
}
</style>
