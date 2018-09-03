<template>
  <div id="app">
    <Main/>
    <div class="source">
      <footer>
        <p>Source code is available on
          <a href="https://github.com/Auralcat/v-calculator">GitHub</a>
        </p>
      </footer>
    </div>
  </div>
</template>

<script>
  import Main from './components/Main.vue'

  export default {
    name: 'app',
    components: {
      Main
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  footer {
    margin-top: 4rem;
  }
</style>
