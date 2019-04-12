<template>
  <div>
    <div v-for="tag in tags" v-bind:key="tag.id" class="w-full">
      <div class="flex justify-between bg-white h-16 border">
        <div class="pl-3 self-center truncate">
          {{ tag.tagName }}
        </div>
        <div class="pr-3 self-center">
          <button class="text-xs text-white font-semibold px-1 py-2 bg-blue rounded w-24">
            <font-awesome-icon icon="plus" class="text-xs"/>
            <font-awesome-icon icon="tag" class="text-xs mr-1"/>フォロー
          </button>
        </div>
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
const tags = [
  { id: 1, tagName: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" },
  { id: 2, tagName: "あいうえおかきくけこさしすせそたちつてとはひひへほ" },
  { id: 3, tagName: "tag3" },
  { id: 4, tagName: "tag4" },
  { id: 5, tagName: "tag5" },
  { id: 6, tagName: "tag6" },
  { id: 7, tagName: "tag7" },
  { id: 8, tagName: "tag8" },
  { id: 9, tagName: "tag9" },
  { id: 10, tagName: "tag10" },
  { id: 11, tagName: "tag11" },
  { id: 12, tagName: "tag12" },
  { id: 13, tagName: "tag13" },
  { id: 14, tagName: "tag14" },
  { id: 15, tagName: "tag15" },
  { id: 16, tagName: "tag16" },
  { id: 17, tagName: "tag17" },
  { id: 18, tagName: "tag18" },
  { id: 19, tagName: "tag19" },
  { id: 20, tagName: "tag20" },
]

export default {
  mounted: function() {
    this.$emit('sendTabId', this.tabId)
  },
  data: function() {
    return {
      tabId: 2,
      totalCount: 52,
      perPage: 21,
      tags: tags
    }
  },
  computed: {
    pageCount: function() {
      return Math.ceil(this.totalCount / this.perPage)
    }
  }
}
</script>
