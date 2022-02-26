<template>
  <main>
    <Hero/>
    <Incomes />
  </main>
</template>

<script>
import Hero from "@/components/Hero";
import Incomes from "@/components/Incomes";

export default {
  name: 'App',
  components: {Hero, Incomes},
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
