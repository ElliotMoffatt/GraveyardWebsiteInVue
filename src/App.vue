<template>
    <HeroSection></HeroSection>
    <NavBar></NavBar>
    
    <div class="container">
        <router-view />
    </div>
 
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-bottom: 10rem;
  position:relative;
}
</style>

<script>
    import HeroSection from './components/HeroSection.vue'
    import NavBar from './components/NavBar.vue'
    export default {
        components: {
            HeroSection,
            NavBar
        }
    }
</script>