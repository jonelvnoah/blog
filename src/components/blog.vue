<template>
  <div class="container">
    <h2>
      <span>About me </span>
    </h2>
    <p>I'm a web developer</p>
    <h2>
      <span>Featured</span>
    </h2>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
    </ul>
    <h2>
      <span>Posts</span>
    </h2>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
    </ul>
    <h2>
      <span>skills</span>
    </h2>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
    </ul>
    <h2>
      <span>talks</span>
    </h2>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
    </ul>
    <h2>
      <span>contact</span>
    </h2>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
    </ul>



  </div>
</template>

<script>
    export default {
        name: "blog"
    }
</script>

<style lang="scss">
  $gray:#A7ADBA;
  .container{
    width: 640px;
    margin: 0 auto;
  }

  h2{
    height: 0;
    text-transform: uppercase;
    border-bottom: 1px solid $gray;
    text-align: center;
    line-height: 0;
    font-size:16px;
    margin-top: 3em;
    margin-bottom: 1.2em;
    span{
      background-color: #ffffff;
      padding: 0 10px 0 10px;
      color: $gray;
    }
  }

  ul{
    padding: 0;
    li{
      list-style: none;
    }
  }
</style>
