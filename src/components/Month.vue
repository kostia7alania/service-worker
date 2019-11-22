<template>
  <div class="month">
    <span class="day" v-for="day of days" :key="day">
      {{ dateComputed }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'Month',
  data() {
    return {
      days: new Array(1000).fill().map((e,i) => i+1),
      date: new Date()
    };
  },
  mounted() { 
    this.updateSeconds()
  },
  computed: {
    dateComputed() {
      const d = this.date
      return `${d.getSeconds('ru')}:${d.getMilliseconds()}` 
    }
  },
  methods: {
    updateSeconds() {
      window.setInterval(()=>{
        this.date = new Date()
      },10)
    }
  }
};
</script>

<style lang="scss" scoped>
.month {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  .day {
    border: red 1px dotted; 
    margin: 1px 1px;
    min-width: 50px;
    text-align: left;
    cursor: pointer;
    transition: .1s;
    &:hover {
      color: red;
      transform: scale(1.1);
    }
    &:active {
      color: green;
      transform: scale(0.9);
    }
  } 
}
</style>