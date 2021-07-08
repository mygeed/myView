/*
import { ref, computed, defineComponent } from "vue";

export default defineComponent({
  props: {
    to: {
      type: [Object, String]
    },
    replace: {
      type: Boolean,
      default: false
    },
    target: {
      type: String,
      validator (value: string) {
        return ['_blank', '_self', '_parent', '_top'].indexOf(value) && true
      },
      default: '_self'
    },
    append: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  setup(props) {
    const linkUrl = computed(() => {
      const type = typeof props.to;
      if (type !== 'string') {
        return null;
      }
      if (props.to.includes('//')) {
        /!* Absolute URL, we do not need to route this *!/
        return props.to;
      }
      const router = this.$router;
      if (router) {
        const current = this.$route;
        const route = router.resolve(props.to, current, props.append);
        return route ? route.href : props.to;
      }
      return props.to;
    });

    function handleClick (new_window = false) {
      const router = this.$router;
      if (new_window) {
        let to = this.to;
        if (router) {
          const current = this.$route;
          const route = router.resolve(this.to, current, this.append);
          to = route ? route.href : this.to;
        }
        window.open(to);
      } else {
        if (router) {
          this.replace ? this.$router.replace(this.to) : this.$router.push(this.to);
        } else {
          window.location.href = this.to;
        }
      }
    }
    function handleCheckClick (event, new_window = false) {
      if (this.to) {
        if (this.target === '_blank') {
          return false;
        } else {
          event.preventDefault();
          this.handleClick(new_window);
        }
      }
    }
    return {
      linkUrl, handleClick, handleCheckClick
    }
  }

})
*/
