<template>
  <header>
    <div class="bg-blue-dark py-2 px-4">
      <div class="max-w-2xl m-auto flex flex-wrap items-center justify-between">
        <div class="flex items-center">
          <router-link to="/" class="link-grey">
            <svg width="75" height="46" view-box="0 0 75 46">
              <path d="M48,23 A18,18 0 1 0 38,40" fill="none" stroke="#eff8ff" stroke-width="7"/>
              <path d="M34,23 C60 50, 50 46, 68 15 C63 46, 70 40 75 40" fill="none" stroke="#eff8ff" stroke-width="7"/>
              <line x1="55" y1="23" x2="75" y2="23" stroke="#eff8ff" stroke-width="7"/>
            </svg>
          </router-link>
        </div>
        <div class="flex items-center">
          <router-link to="/search" class="no-underline">
            <div class="p-2">
              <font-awesome-icon icon="search" class="text-xl text-white hover:text-blue-light"/>
            </div>
          </router-link>
          <router-link to="/signup" class="no-underline">
            <div class="mr-1 p-1 text-white font-bold hover:text-blue-light">
              <p class="text-sm">新規登録</p>
            </div>
          </router-link>
          <router-link to="/signin" class="no-underline">
            <div class="mr-1 p-1 text-white font-bold hover:text-blue-light">
              <p class="text-sm">ログイン</p>
            </div>
          </router-link>
          <div class="p-1 relative" @click="isActive = !isActive">
            <font-awesome-icon icon="th" class="text-xl text-white cursor-pointer hover:text-blue-light"/>
            <transition>
              <div v-if="isActive" class="w-48 absolute z-20 pin-r my-5 bg-white shadow-md rounded text-left text-sm">
                <router-link to="/mypage" class="no-underline">
                  <div class="mx-2 p-2 border-b">
                    <p class="text-black hover:text-blue">
                      <span class="mr-2"><font-awesome-icon icon="user"/></span>
                      マイページ
                    </p>
                  </div>
                </router-link>
                <router-link to="/" class="no-underline">
                  <div class="mx-2 p-2">
                    <p class="text-black hover:text-blue">
                      <span class="mr-2"><font-awesome-icon icon="edit"/></span>
                      新規投稿
                    </p>
                  </div>
                </router-link>
                <router-link to="/" class="no-underline">
                  <div class="mx-2 p-2">
                    <p class="text-black hover:text-blue">
                      <span class="mr-2"><font-awesome-icon icon="list"/></span>
                      下書き一覧
                    </p>
                  </div>
                </router-link>
                <router-link to="/" class="no-underline">
                  <div class="mx-2 p-2 border-b">
                    <p class="text-black hover:text-blue">
                      <span class="mr-2"><font-awesome-icon icon="thumbs-up"/></span>
                      いいね一覧
                    </p>
                  </div>
                </router-link>
                <router-link to="/" class="no-underline">
                  <div class="mx-2 p-2">
                    <p class="text-black hover:text-blue">
                      <span class="mr-2"><font-awesome-icon icon="cog"/></span>
                      設定
                    </p>
                  </div>
                </router-link>
                <router-link to="/about" class="no-underline">
                  <div class="mx-2 p-2 border-b">
                    <p class="text-black hover:text-blue">
                      <span class="mr-2"><font-awesome-icon icon="file"/></span>
                      Qtについて
                    </p>
                  </div>
                </router-link>
                <router-link to="/about" class="no-underline">
                  <div class="mx-2 p-2">
                    <p class="text-black hover:text-blue">
                      <span class="mr-2"><font-awesome-icon icon="sign-out-alt"/></span>
                      ログアウト
                    </p>
                  </div>
                </router-link>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
    <div class="w-screen h-screen absolute pin z-10" @click="isActive = false" v-if="isActive"></div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isActive: false
    }
  }
}
</script>

<style>
.v-enter-active, .v-leave-active {
  transition: all 0.3s;
}

.v-enter {
  transform: translateY(15px);
}

.v-enter, .v-leave-to {
  opacity: 0
}
</style>
