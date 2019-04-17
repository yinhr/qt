<template>
  <div class="mx-auto py-4 max-w-2xl text-left">
    <h2 class="pl-3 mb-3"><span class="mr-3"><font-awesome-icon icon="list" class="text-2xl"/></span>下書き一覧</h2>
    <div v-for="draft in drafts" v-bind:key="draft.id" class="mb-1 rounded p-3">
      <div class="text-left pb-1">
        <router-link to="/post" class="no-underline font-bold text-lg text-black hover:text-blue">
          {{ draft.title }}
        </router-link>
      </div>
      <div class="text-xs text-left">
        <p><span class="mr-3 inline-block">{{ draft.updatedOn }}</span></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      drafts: [
        { 
          id: 1,
          title: "[タイトル未設定]",
          updatedOn: "2019 Apr 4 99:99:99",
        },
        { 
          id: 2,
          title: "Very very very very very Long Long Long Long Long Long long long Title of the Content",
          updatedOn: "2019 Apr 4 99:99:99",
        },
        { 
          id: 3,
          title: "[タイトル未設定]",
          updatedOn: "2019 Apr 4 99:99:99",
        },
        { 
          id: 4,
          title: "Very very very very very Long Long Long Long Long Long long long Title of the Content",
          updatedOn: "2019 Apr 4 99:99:99",
        },
        { 
          id: 5,
          title: "[タイトル未設定]",
          updatedOn: "2019 Apr 4 99:99:99",
        },
      ]
    }
  }
}
</script>
