<template>
  <div class="md:flex max-w-2xl mx-auto mt-8">
    <div class="bg-white shadow p-3 mx-auto max-w-xs md:w-1/4 self-start">
      <div class="py-1">
        <img class="w-32 h-32 rounded-full" src="https://tailwindcss.com/img/jonathan.jpg" alt="Avatar of Jonathan Reinink">
      </div>
      <div class="py-1">Jonathan Reinink</div>
      <div class="py-1">@JonathanReinink</div>
      <div class="py-3">
        <button class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-2 rounded">
            <font-awesome-icon icon="plus" class="text-xs mx-1"/>
            <font-awesome-icon icon="user" class="text-xs mr-1"/>フォロー
        </button>
      </div>
      <div class="text-left">
        <p>Lorem doloremque accusamus libero quam sed architecto! Fugiat delectus esse vitae ab ab consequatur? Quidem corporis molestiae esse dolor ab Suscipit exercitationem aperiam earum suscipit aperiam velit. Modi blanditiis consectetur.</p>
      </div>
    </div>
    <div class="w-full md:w-3/4 md:px-2 text-sm">
      <ul class="list-reset md:flex menutab">
        <li>
          <router-link to="/mypage/posts" v-bind:class="[ activetab === 1 ? 'activetab' : '' ]">
            投稿一覧
          </router-link>
        </li>
        <li>
          <router-link to="/mypage/tags" v-bind:class="[ activetab === 2 ? 'activetab' : '' ]">
            フォロータグ
          </router-link>
        </li>
        <li>
          <router-link to="/mypage/followings" v-bind:class="[ activetab === 3 ? 'activetab' : '' ]">
            フォロー
          </router-link>
        </li>
        <li>
          <router-link to="/mypage/followers" v-bind:class="[ activetab === 4 ? 'activetab' : '' ]">
            フォロワー
          </router-link>
        </li>
      </ul>
      <router-view v-on:sendTabId="setTabId"></router-view>
    </div>
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
