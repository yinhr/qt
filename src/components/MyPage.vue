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
      <ul class="list-reset md:flex">
        <li class="border-b-2 border-orange-light">
          <a class="no-underline inline-block py-2 px-4 text-orange font-semibold" href="#">投稿一覧</a>
        </li>
        <li class="border-b-2 hover:border-orange-light">
          <a class="no-underline inline-block py-2 px-4 text-blue hover:text-orange font-semibold" href="#">フォロータグ</a>
        </li>
        <li class="border-b-2 hover:border-orange-light">
          <a class="no-underline inline-block py-2 px-4 text-blue hover:text-orange font-semibold" href="#">フォロー</a>
        </li>
        <li class="border-b-2 hover:border-orange-light">
          <a class="no-underline inline-block py-2 px-4 text-blue hover:text-orange font-semibold" href="#">フォロワー</a>
        </li>
      </ul>
      <Cards v-bind:cards="cards"></Cards>
    </div>
  </div>
</template>

<script>
import Cards from '@/components/Cards.vue'

export default {
  components: {
    Cards
  },
  data: function() {
    return {
      cards: [
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
