<template>
  <div id="app">
  
  <header>
		<nav id="nav">
			<ul>
				<li><router-link to="/">Home</router-link> | </li>
				<li><router-link to="/about">About</router-link> | </li>
				<li><router-link to="/images">Images</router-link> | </li>
				<li><router-link to="/calendar">Calendar</router-link></li>
			</ul>
		</nav>
  </header>

    <section> 
      <router-view/>
    </section> 
    
    <footer>
      <pwa-alert/>
    </footer>

  </div>
</template>

<script>
export default {
  components: {
    PwaAlert: () =>
            import ('./components/PwaAlert.vue')
  }
}
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  a {
    text-decoration: none;
    font-weight: bold;
    color: #2c3e50; 
    transition: .2s;
    &.router-link-exact-active {
      color: #42b983;
    }
    &:hover {
      color: cyan; 
    }
    &:active {
      color: green; 
    }
  }

  ul {
    list-style-type: none;
    li {
      display: inline; 
    }
  }
}


</style>
