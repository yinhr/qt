<template>
  <div class="w-full md:w-2/3 p-5 border">
    <form action="" class="text-left">
      <label for="" >現在のパスワード</label>
      <div class="flex item-stretch">
        <input type="password" class="w-full border">
      </div>
      <label for="" >新しいパスワード</label>
      <div class="flex item-stretch">
        <input type="password" class="w-full border">
      </div>
      <label for="" >新しいパスワード（確認）</label>
      <div class="flex item-stretch">
        <input type="password" class="w-full border">
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
      tabId: 2
    }
  }
}
</script>
