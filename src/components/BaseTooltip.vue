<template>
    <div class="tooltip__wrapper">
      <div 
        v-for="item in buttons" 
        :key="item.buttonText"
        class="tooltip">
        <button type="button">{{ item.buttonText }}</button>
        <span 
          class="tooltip__text"
          :class="
            item.buttonText === 'Top' ? 'tooltip__text-top' :
            item.buttonText === 'Bottom' ? 'tooltip__text-bottom' :
            item.buttonText === 'Right' ? 'tooltip__text-right' : 'tooltip__text-left'">
          {{ item.tooltipText }}
        </span>
      </div>
  </div>
</template>

<script>
export default {
  name: 'BaseTooltip',
  inject: ['buttons']
}
</script>

<style lang="scss">
@import '../assets/styles/variables.scss';

.tooltip__wrapper {
  display: flex;
  column-gap: 20px;
  @media screen and (max-width: 630px) {
    flex-direction: column;
    row-gap: 40px;
  }
}

.tooltip {
  position: relative;
  width: fit-content;
  &:hover {
    .tooltip__text {
      display: block;
    }
  }
  button {
    border: 1px solid $primary;
    border-radius: 2px;
    background-color: $white;
    color: $primary;
    font-size: 13px;
    font-weight: 400;
    line-height: 15px;
    text-align: center;
    padding: 8px 16px;
    min-width: 100px;
    cursor: pointer;
    transition: .3s all;
    &:hover {
      background-color: $primary;
      color: $white;
    }
  }
  &__text {
    display: none;
    position: absolute;
    text-align: center;
    z-index: 10;
    padding: 9px;
    font-size: 12px;
    font-weight: 300;
    line-height: 14px;
    width: 140px;
    border: 1px solid $light-grey;
    background-color: $white;
    box-shadow: 0px 6px 15px $light-grey;
    &-top {
      top: -38px;
      left: -20px;
    }
    &-bottom {
      bottom: -38px;
      left: -20px;
    }
    &-right {
      top: 0;
      left: 105px;
    }
    &-left {
      top: 0;
      right: 105px;
    }
    &-top,
    &-left,
    &-right {
      @media screen and (max-width: 630px) {
        top: auto;
        bottom: -38px;
        left: -20px;
      }
    }
  }
}
</style>