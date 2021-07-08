/**
 * 脚本'./build/devBuild.js' 文件自动生成
 */
import {App} from 'vue'
// 导入组件（用于注册所有组件）
import myBtn from './myBtn';
import myIcon from './myIcon';
import myTime from './myTime';
import myUtil from './myUtil';

// 定义组件列表
const components: any[] = [
  myBtn,
  myIcon,
  myTime,
  myUtil
];

const plugins: any[] = [];

const install = (app: App): void => {

  components.forEach(component => {
    component.name && app.component(component.name, component)
  });
  plugins.forEach(plugin => {
    app.use(plugin)
  })
};

// @ts-ignore
if (typeof window !== 'undefined' && window.Vue) {
  // @ts-ignore
  install(window.Vue);
}

export default {
  version: '3.0.1',
  // 导出的对象必须具有 install 方法，才能被 Vue.use() 方法安装
  install
};

// 具名导出
export {
  myBtn,
  myIcon,
  myTime,
  myUtil,
}
