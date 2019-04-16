<template>
  <div class="md:flex max-w-2xl mx-auto md:mt-8">
    <div class="bg-white p-3 md:w-1/4 self-start">
      <div class="py-1">
        <img class="w-32 h-32 rounded-full" src="https://tailwindcss.com/img/jonathan.jpg" alt="Avatar of Jonathan Reinink">
      </div>
      <div class="py-1">Jonathan Reinink</div>
      <div class="py-1">@JonathanReinink</div>
      <div class="py-2">
        <button class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-2 rounded text-xs">
            <font-awesome-icon icon="plus" class="text-xs"/>
            <font-awesome-icon icon="user" class="text-xs mr-1"/>フォロー
        </button>
      </div>
      <div class="py-2">
        <router-link to="/yinhr/settings" class="text-sm text-grey-dark hover:text-grey no-underline">
          <font-awesome-icon icon="cog" class="text-xs mr-1"/>プロフィールを編集する
        </router-link>
      </div>
      <div class="text-left">
        <p>Lorem doloremque accusamus libero quam sed architecto! Fugiat delectus esse vitae ab ab consequatur? Quidem corporis molestiae esse dolor ab Suscipit exercitationem aperiam earum suscipit aperiam velit. Modi blanditiis consectetur.</p>
      </div>
    </div>
    <div class="w-full md:w-3/4 md:px-2 text-sm">
      <ul class="list-reset md:flex md:flex-wrap menutab">
        <li>
          <router-link to="/yinhr/posts" v-bind:class="[ activetab === 1 ? 'activetab' : '' ]">
            <font-awesome-icon icon="clone" class="text-xs mr-1"/>投稿 100
          </router-link>
        </li>
        <li>
          <router-link to="/yinhr/tags" v-bind:class="[ activetab === 2 ? 'activetab' : '' ]">
            <font-awesome-icon icon="tags" class="text-xs mr-1"/>フォロータグ 21
          </router-link>
        </li>
        <li>
          <router-link to="/yinhr/followings" v-bind:class="[ activetab === 3 ? 'activetab' : '' ]">
            <font-awesome-icon icon="user-friends" class="text-xs mr-1"/>フォロー 321
          </router-link>
        </li>
        <li>
          <router-link to="/yinhr/followers" v-bind:class="[ activetab === 4 ? 'activetab' : '' ]">
            <font-awesome-icon icon="users" class="text-xs mr-1"/>フォロワー 5431
          </router-link>
        </li>
        <li>
          <router-link to="/yinhr/like" v-bind:class="[ activetab === 5 ? 'activetab' : '' ]">
            <font-awesome-icon icon="thumbs-up" class="text-xs mr-1"/>いいね 99 
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
