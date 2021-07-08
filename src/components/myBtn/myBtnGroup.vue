<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>
<script>
  import myUtil from '../myUtil';
  const prefixCls = 'ivu-btn-group';
  import {defineComponent, ref} from 'vue'

  export default defineComponent({
    name: 'ButtonGroup',
    props: {
      size: {
        validator(value) {
          return myUtil.oneOf(value, ['small', 'large', 'default']);
        },
        default() {
          return !this.$IVIEW || this.$IVIEW.size === '' ? 'default' : this.$IVIEW.size;
        }
      },
      shape: {
        validator(value) {
          return myUtil.oneOf(value, ['circle', 'circle-outline']);
        }
      },
      vertical: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      classes() {
        return [
          `${prefixCls}`,
          {
            [`${prefixCls}-${this.size}`]: !!this.size,
            [`${prefixCls}-${this.shape}`]: !!this.shape,
            [`${prefixCls}-vertical`]: this.vertical
          }
        ];
      }
    }
  })
</script>
