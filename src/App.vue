<template>
  <div id="app">
    <header>
      <div class="profile" v-for="me in meItem">
        <div class="avatar"></div>
        <div class="name">
          <p>{{ me.name }}</p>
        </div>
        <div class="brief">
          <p>{{ me.brief }}</p>
        </div>
      </div>
      <div class="navBar">
        <ul>
          <router-link to="/">blog</router-link>
          <router-link to="timeLine">Timeline</router-link>
          <router-link to="music">Music</router-link>
          <router-link to="RSS">RSS</router-link>
        </ul>
      </div>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data (){
    return{
      meItem:[{
        url:'../static/images/avatar.png',
        name: 'Junhao Wang',
        brief:'This is simple template!'
      }]
    }
  },
  methods:{

  }
}
</script>

<style lang="scss">
  #app{
    header{
      margin-top: 5em;
      .profile{
        text-align: center;
        .avatar{
          background-image: url("../static/images/avatar.png");
          width: 128px;
          height: 128px;
          background-size: cover;
          border-radius: 50%;
          margin: 0 auto;
        }
      }
      .navBar{
        text-align: center;
        ul{
          padding: 0;
          a{
            display: inline-block;
            padding: 0 10px 0 10px;
            cursor: pointer;
            text-decoration: none;
            color: #000000;
            font-size: 14px;
          }
        }
      }
    }
  }
</style>
