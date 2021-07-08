import myBtn from './myBtn.vue';
import myBtnGroup from './myBtnGroup.vue';

// 提供 install 方法
// 这里提供一次 install 是为了便于单独引入组件时进行注册
myBtn.install = function (Vue: any) {
  Vue.component(myBtn.name, myBtn);
};
myBtn.Group = myBtnGroup;
// 默认导出方式导出
export default myBtn;
