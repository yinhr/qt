<template>
  <div class="w-full md:w-2/3 p-5 bg-white border">
    <form action="" class="text-left">
      <label for="" >ユーザー名</label>
      <div class="flex item-stretch">
        <input type="text" class="w-full border" placeholder="50文字以内">
      </div>
      <label for="" >アカウント名</label>
      <div class="flex item-stretch">
        <input type="text" class="w-full border" placeholder="15文字以内">
      </div>
      <label for="" >メールアドレス</label>
      <div class="flex item-stretch">
        <input type="text" class="w-full border">
      </div>
      <label for="" >自己紹介</label>
      <div class="flex item-stretch">
        <textarea class="w-full resize-none border" placeholder="200文字以内"></textarea>
      </div>
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
