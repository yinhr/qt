<template>
  <div class="w-full md:w-2/3 p-5 border">
    <form action="" class="text-left">
      <label for="" >ユーザー名</label>
      <div class="flex item-stretch mb-4">
        <input type="text" class="w-full border p-1" placeholder="50文字以内">
      </div>
      <label for="" >アカウント名</label>
      <div class="flex item-stretch mb-4">
        <input type="text" class="w-full border p-1" placeholder="15文字以内">
      </div>
      <label for="" >メールアドレス</label>
      <div class="flex item-stretch mb-4">
        <input type="text" class="w-full border p-1">
      </div>
      <label for="" >自己紹介</label>
      <div class="flex item-stretch mb-4">
        <textarea class="w-full h-32 p-2 resize-none border" placeholder="200文字以内"></textarea>
      </div>
      <button class="px-4 py-2 text-white rounded font-semibold bg-blue">変更</button>
    </form>
  </div>
</template>

<script>
export default {
  mounted: function() {
    this.$emit('sendTabId', this.tabId)
  },
  data: function() {
    return {
      tabId: 1
    }
  }
}
</script>
