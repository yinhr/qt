<template>
  <div class="mx-auto mt-4 px-6 py-4 max-w-xl text-left">
    <h2 class="mb-3"><span class="mr-3"><font-awesome-icon icon="stream" class="text-2xl"/></span>タイムライン</h2>
    <div class="my-1 px-4 py-4 m-auto rounded bg-white overflow-hidden flex">
      <div class="mr-3">
        <img class="w-10 h-10 rounded-full" src="https://tailwindcss.com/img/jonathan.jpg" alt="Avatar of Jonathan Reinink">
      </div>
      <div class="flex-1">
        <router-link to="/post" class="no-underline font-bold text-xl text-black hover:text-blue">
          <div class="mb-2">Long Long Long Long Long Long long long Title of the Content</div>
        </router-link>
        <div class="font-semibold text-sm mb-1">
          <span class="inline-block bg-orange-lighter rounded-full px-3 py-1 mr-1 mb-1">
            #rails
          </span>
          <span class="inline-block bg-orange-lighter rounded-full px-3 py-1 mr-1 mb-1">
            #Vue.js
          </span>
        </div>
        <div class="text-sm flex flex-wrap">
          <div class="mr-3">Jonathan Reinink</div>
          <div class="mr-3">2019 Apr 4</div>
          <div class="mr-3">いいね 188</div>
        </div>
      </div>
    </div>
    <div class="my-1 px-4 py-4 m-auto rounded bg-white overflow-hidden flex">
      <div class="mr-3">
        <img class="w-10 h-10 rounded-full" src="https://tailwindcss.com/img/jonathan.jpg" alt="Avatar of Jonathan Reinink">
      </div>
      <div class="flex-1">
        <router-link to="/post" class="no-underline font-bold text-xl text-black hover:text-blue">
          <div class="mb-2">Long Long Long Long Long Long long long Title of the Content</div>
        </router-link>
        <div class="font-semibold text-sm mb-1">
          <span class="inline-block bg-orange-lighter rounded-full px-3 py-1 mr-1 mb-1">
            #rails
          </span>
          <span class="inline-block bg-orange-lighter rounded-full px-3 py-1 mr-1 mb-1">
            #Vue.js
          </span>
        </div>
        <div class="text-sm flex flex-wrap">
          <div class="mr-3">Jonathan Reinink</div>
          <div class="mr-3">2019 Apr 4</div>
          <div class="mr-3">いいね 188</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>
