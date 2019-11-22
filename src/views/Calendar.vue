
<template>
  <div class="calendar">
    <h1>Calendar</h1>
    <Month/>
  </div>
</template>

<script>
export default {
  name: 'Calendar',
  components: {
    Month: () => import(/* webpackChunkName: "month" */ '@/components/Month.vue')
  }
}
</script>

<style lang="scss" scoped> 
</style>