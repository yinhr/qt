import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Signin from './components/Signin.vue'
import Signup from './components/Signup.vue'
import Post from './components/Post.vue'
import Search from './components/Search.vue'
import MyPage from './components/MyPage.vue'
import MyPosts from './components/MyPosts.vue'
import MyTags from './components/MyTags.vue'
import MyFollowings from './components/MyFollowings.vue'
import MyFollowers from './components/MyFollowers.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/signin',
      name: 'signin',
      component: Signin
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/post',
      name: 'post',
      component: Post
    },
    {
      path: '/sarch',
      name: 'search',
      component: Search
    },
    {
      path: '/mypage',
      redirect: '/mypage/posts',
      name: 'mypage',
      component: MyPage,
      children: [
        {
          path: 'posts',
          component: MyPosts
        },
        {
          path: 'tags',
          component: MyTags
        },
        {
          path: 'followings',
          component: MyFollowings
        },
        {
          path: 'followers',
          component: MyFollowers
        }
      ]
    }
  ]
})
