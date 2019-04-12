<template>
  <div>
    <div class="mx-auto py-1 flex flex-wrap">
      <div
        v-for="following in followings" 
        v-bind:key="following.id"
        class="rounded bg-white p-3 h-64 w-full md:w-1/3 border"
      >
        <div class="flex">
          <div class="w-2/5">
            <img class="w-12 h-12 rounded-full" v-bind:src="following.imgSrc" alt="default avatar">
          </div>
          <div class="w-3/5 self-center">
            <button class="bg-blue hover:bg-blue-dark text-white font-semibold py-2 px-2 rounded text-xs">
                <font-awesome-icon icon="plus" class="text-xs"/>
                <font-awesome-icon icon="user" class="text-xs mr-1"/>フォロー
            </button>
          </div>
        </div>
        <div class="text-left pt-2 text-sm font-semibold">{{ following.userName }}</div>
        <div class="h-32 text-left pt-2 leading-tight text-sm break-words overflow-hidden">{{ following.description }}</div>
      </div>
    </div>
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
const followings = [
  { 
    id: 1,
    imgSrc: "https://tailwindcss.com/img/jonathan.jpg",
    userName: "UserName",
    description: "User Description",
  },
  { 
    id: 2,
    imgSrc: "https://tailwindcss.com/img/jonathan.jpg",
    userName: "UserName",
    description: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  },
  { 
    id: 3,
    imgSrc: "https://tailwindcss.com/img/jonathan.jpg",
    userName: "UserName",
    description: "ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ"
  },
  { 
    id: 4,
    imgSrc: "https://tailwindcss.com/img/jonathan.jpg",
    userName: "UserName",
    description: 'SitporroametdolorespossimuslaudantiumRepudiandaeeumquas consequuntur itaque iste Alias tenetur aliquid quam esse magnam mollitia Iure saepe nesciunt aspernatur harum vitae. Aliquam aut earum autem similique.'
  },
  { 
    id: 5,
    imgSrc: "https://tailwindcss.com/img/jonathan.jpg",
    userName: "UserName",
    description: 'SitporroametdolorespossimuslaudantiumRepudiandaeeumquas consequuntur itaque iste Alias tenetur aliquid quam esse magnam mollitia Iure saepe nesciunt aspernatur harum vitae. Aliquam aut earum autem similique.'
  },
  { 
    id: 6,
    imgSrc: "https://tailwindcss.com/img/jonathan.jpg",
    userName: "UserName",
    description: 'SitporroametdolorespossimuslaudantiumRepudiandaeeumquas consequuntur itaque iste Alias tenetur aliquid quam esse magnam mollitia Iure saepe nesciunt aspernatur harum vitae. Aliquam aut earum autem similique.'
  }
]

export default {
  mounted: function() {
    this.$emit('sendTabId', this.tabId)
  },
  data: function() {
    return {
      tabId: 3,
      totalCount: 321,
      perPage: 10,
      followings: followings
    }
  },
  computed: {
    pageCount: function() {
      return Math.ceil(this.totalCount / this.perPage)
    }
  }
}
</script>
