<template>
  <div class="tabs">
    <router-link 
      v-for="item, index in links"
      :key="index"
      :to="item.path">
      {{ item.name }}
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Tabs',
  props: ['links'],
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables.scss';

.tabs {
  display: flex;
  column-gap: 20px;
  a {
    font-size: 18px;
    font-weight: 500;
    line-height: 20px;
    color: $dark-grey;
    text-decoration: none;
    ::v-deep {
        &.active {
        color: $primary;
      }
    }
  }
}
</style>