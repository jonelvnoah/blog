import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Blog from '@/components/blog'
import TimeLine from '@/components/timeLine'
import Music from '@/components/music'
import Rss from '@/components/rss'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/timeLine',
      name: 'TimeLine',
      component: TimeLine
    },
    {
      path: '/music',
      name: 'Music',
      component: Music
    },
    {
      path: '/RSS',
      name: 'Rss',
      component: Rss
    }
  ]
})
