<template>
  <header>
    <div class="bg-blue-dark py-2 px-4">
      <div class="container m-auto flex flex-wrap items-center justify-between">
        <div class="flex">
          <router-link to="/" class="link-grey">
            <svg width="80" height="46" view-box="0 0 80 46">
              <path d="M48,23 A18,18 0 1 0 38,40" fill="none" stroke="#eff8ff" stroke-width="7"/>
              <path d="M34,23 C60 50, 50 46, 68 15 C63 46, 70 40 75 40" fill="none" stroke="#eff8ff" stroke-width="7"/>
              <line x1="55" y1="23" x2="75" y2="23" stroke="#eff8ff" stroke-width="7"/>
            </svg>
          </router-link>
          <form class="max-w-sm">
            <div class="mx-4 mt-5 border-b-2">
              <input type="text" class="text-grey-lightest appearance-none bg-transparent focus:outline-none" placeholder="">
                <button class="text-white hover:text-blue-lighter text-sm rounded" type="button">Search</button>
            </div>
          </form>
        </div>
        <div class="flex">
          <router-link to="/signup" class="no-underline">
            <div class="mx-2 p-2 border-blue-light border-2 rounded-lg hover:bg-blue-light">
              <p class="text-white font-bold">Sign up</p>
            </div>
          </router-link>
          <router-link to="/signin" class="no-underline">
            <div class="mx-2 p-2 border-blue-light border-2 rounded-lg hover:bg-blue-light">
              <p class="text-white font-bold">Sign in</p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
</script>
