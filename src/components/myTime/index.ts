import myTime from './myTime.vue';

// 提供 install 方法
// 这里提供一次 install 是为了便于单独引入组件时进行注册
myTime.install = function (Vue: any) {
  Vue.component(myTime.name, myTime);
};

// 默认导出方式导出
export default myTime;
