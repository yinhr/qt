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
import Like from './components/Like.vue'
import Drafts from './components/Drafts.vue'
import NewPost from './components/NewPost.vue'
import Settings from './components/Settings.vue'
import Profile from './components/Profile.vue'
import Password from './components/Password.vue'

import Test from './components/TestComponent.vue'

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
      path: '/test',
      component: Test
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
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/:id',
      redirect: '/:id/posts',
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
        },
        {
          path: 'like',
          component: Like
        },
      ]
    },
    {
      path: '/:id/drafts',
      component: Drafts,
    },
    {
      path: '/:id/drafts/new',
      component: NewPost
    },
    {
      path: '/:id/settings',
      component: Settings,
      redirect: '/:id/settings/profile',
      children: [
        {
          path: '/:id/settings/profile',
          component: Profile
        },
        {
          path: '/:id/settings/password',
          component: Password
        },
      ]
    },
  ]
})
