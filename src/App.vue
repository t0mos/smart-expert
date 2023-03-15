<template>
  <div id="app">
    <section class="wrapper">
      <h1>Test task</h1>
      <div class="container">
        <div class="container__head">
          <Tabs :links="links" />
        </div>
        <div class="container__body">
          <router-view></router-view>
        </div>
      </div>
    </section>
  </div>
</template>

<!-- 
  todo:
    1. add triangle to tooltip
    2. add animation???
    3. optimize css files
-->

<script>
import { computed } from 'vue'
import Tabs from './components/Tabs.vue'

export default {
  name: 'App',
  components: {
    Tabs
  },
  data() {
    return {
      users: [],
      links: [
        {
          name: 'Component: BaseSelect',
          path: '/',
        },
        {
          name: 'Component: BaseTooltip',
          path: '/tooltip',
        },
      ],
    }
  },
  provide() {
    return {
      users: computed(() => this.users),
      buttons: [
        {
          buttonText: 'Top',
          tooltipText: 'Top tooltip text',
        },
        {
          buttonText: 'Right',
          tooltipText: 'Right tooltip text',
        },
        {
          buttonText: 'Bottom',
          tooltipText: 'Bottom tooltip text',
        },
        {
          buttonText: 'Left',
          tooltipText: 'Left tooltip text',
        }
      ]
    }
  },
  mounted() {
    this.loadData()
  },
  methods: {
    async loadData() {
      const url = "https://60de1565878c890017fa2d5f.mockapi.io/api/v1/users"
      const res = await fetch(url)
      const finalRes = await res.json()
      this.users = finalRes
    }
  }
}
</script>

<style lang="scss">
@import './assets/styles/main.scss';

.wrapper {
  max-width: 1080px;
  margin: 50px auto;
  padding: 0 20px;
  h1 {
    margin-bottom: 15px;
    font-weight: 500;
    font-size: 18px;
    line-height: 20px;
  }
}

.container {
  padding: 32px 43px;
  min-height: 300px;
  box-shadow: 0px 2px 6px rgba(0, 44, 92, 0.1);
  @media screen and (max-width: 425px) {
    padding: 20px;
  }
  &__head {
    margin-bottom: 60px;
  }
}
</style>
