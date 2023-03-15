<template>
  <div class="select__wrapper">
    <label>Choose item</label>
    <div
      class="select__input"
      @click="toggleSelect">
      <span>{{ selectedOption }}</span>
      <span v-if="showList" class="select__input-chevron--up">&#10094;</span>
      <span v-else class="select__input-chevron--down">&#10094;</span>
    </div>
    <ul 
      v-if="showList"
      class="select__options">
      <li
        v-for="item in users"
        :key="item.id"
        :value="item.name"
        :class="selectedOption === item.name ? 'selected' : ''"
        @click="selectItem(item.name)">
        <span>{{ item.name }}</span>
        <span v-if="selectedOption === item.name">&#10003;</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'BaseSelect',
  data() {
    return {
      showList: false,
      selectedOption: 'Select',
    }
  },
  inject: ['users'],
  methods: {
    selectItem(name) {
      this.selectedOption = name
      this.showList = false
    },
    toggleSelect() {
      this.showList = !this.showList
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables.scss';

.select__wrapper {
  max-width: 265px;
  position: relative;
  margin-bottom: 20px;
  label {
    display: block;
    width: fit-content;
    font-size: 13px;
    font-weight: 400;
    line-height: 14px;
    margin-bottom: 6px;
  }

  .select__input {
    border: 1px solid $dark-grey;
    border-radius: 2px;
    background-color: $white;
    font-size: 13px;
    font-weight: 400;
    height: 32px;
    cursor: pointer;
    padding: 5px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &-chevron--up {
      transform: rotate(90deg);
      color: $dark-grey;
    }
    &-chevron--down {
      transform: rotate(270deg);
      color: $dark-grey;
    }
  }

  .select__options {
    cursor: pointer;
    position: absolute;
    z-index: 9999;
    width: 100%;
    list-style: none;
    padding: 0;
    box-shadow: 0px 6px 15px $light-grey;
    li {
      background-color: $white;
      padding: 5px 12px;
      font-size: 13px;
      font-weight: 400;
      display: flex;
      justify-content: space-between;
      align-items: center;
      &:hover {
        background-color: $light-grey;
      }
    }
    .selected {
      background-color: $light-grey;
    }
  }
}
</style>