<template>
  <div class="w-full md:w-2/3 p-5 border">
    <form action="" class="text-left">
      <label for="" class="">現在のパスワード</label>
      <div class="flex item-stretch mb-4">
        <input type="password" class="w-full border p-1">
      </div>
      <label for="" >新しいパスワード</label>
      <div class="flex item-stretch mb-4">
        <input type="password" class="w-full border p-1">
      </div>
      <label for="" >新しいパスワード（確認）</label>
      <div class="flex item-stretch mb-4">
        <input type="password" class="w-full border p-1">
      </div>
      <button class="border px-4 py-2 bg-blue rounded text-white font-semibold">変更</button>
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
      tabId: 2
    }
  }
}
</script>
