<template>
  <div class="w-full md:flex md:mx-auto md:max-w-2xl md:mt-8">
    <div class="w-full md:w-1/3 md:mr-5 bg-white border self-start">
      <ul class="menulist text-left list-reset p-5">
        <li class="py-2 border-b">
          <router-link to="/yinhr/settings/profile" v-bind:class="[ activetab === 1 ? 'activetab' : '' ]">
            アカウント
          </router-link>
        </li>
        <li class="py-2 border-b">
          <router-link to="/yinhr/settings/password" v-bind:class="[ activetab === 2 ? 'activetab' : '' ]">
            パスワード
          </router-link>
        </li>
      </ul>
    </div>
    <router-view v-on:sendTabId="setTabId"></router-view>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      activetab: 1
    }
  },
  methods: {
    setTabId: function(tabId) {
      this.activetab = tabId
    }
  }
}
</script>

<style>
.menulist a {
  text-decoration: none;
  color: #3490dc;
}

.menulist a:hover {
  color: #f6993f;
}

.menulist .activetab {
  color: #f6993f;
  font-weight: bold;
}
</style>
