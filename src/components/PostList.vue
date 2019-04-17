<template>
  <div class="mx-auto py-1">
    <div v-for="post in posts" v-bind:key="post.id" class="mb-1 rounded p-2 flex">
      <div class="p-1 w-1/7 md:w-1/10">
        <img class="w-4/5 rounded-full self-center" v-bind:src="post.imgSrc" alt="default avatar">
      </div>
      <div class="p-1 w-6/7 md:w-9/10">
        <div class="text-left pb-1">
          <router-link to="/post" class="no-underline font-bold text-lg text-black hover:text-blue">
            {{ post.title }}
          </router-link>
        </div>
        <div class="font-semibold text-xs text-left pb-1">
          <span v-for="tag in post.tags" v-bind:key="tag.id" class="inline-block bg-orange-lighter rounded-full px-2 py-1 mr-1 mb-1">
            <font-awesome-icon icon="tag" class="text-xs mr-1"/>
            {{ tag.name }}
          </span>
        </div>
        <div class="text-xs text-left">
          <p>
          <span class="mr-3 inline-block">{{ post.author }}</span>
          <span class="mr-3 inline-block">{{ post.createdOn }}</span>
            <span class="inline-block"><font-awesome-icon icon="thumbs-up" class="mr-1"/>
                {{ post.numberOfLike }}
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: { 
    posts: {
      type: Array
    }
  }
}
</script>
