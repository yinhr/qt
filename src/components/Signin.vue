<template>
  <div class="w-full max-w-sm self-center my-4 p-2 border-grey-darker shadow-md rounded">
    <h1 class="mb-5 text-grey-darker">Sign In</h1>
    <form action="">
      <div class="mb-5">
        <label for="email" class="label"></label>
        <input type="email" class="appearance-none bg-transparent border-b-2 w-2/3 leading-loose focus:outline-none" id="email" placeholder="Your email">
      </div>
      <div class="mb-5">
        <label for="password" class="label"></label>
        <input type="password" class="appearance-none bg-transparent border-b-2 w-2/3 leading-loose focus:outline-none" id="password" placeholder="Password">
      </div>
      <button type="submit" class="m-auto font-bold px-4 rounded cursor-pointer no-underline bg-blue hover:bg-blue-dark block w-2/3 py-4 text-white items-center justify-center">Sign In</button>
      <div class="my-5">
        <router-link to="/signup" class="no-underline font-bold text-sm text-blue hover:text-blue-darker">Sign up</router-link>
      </div>
      <div class="mb-5">
        <router-link to="/" class="no-underline font-bold text-sm text-blue hover:text-blue-darker">Forgot your password?</router-link>
      </div>
    </form>
  </div>
</template>

<script>
</script>

<style>
</style>
