import {App} from 'vue'
import {InstallOptions, setConfig} from './utils/config'
import {t} from './utils/myLocale'
import myTime from './myTime'
const defaultInstallOpt: InstallOptions = {
  size: '',
  zIndex: 2000
}

const components = [
  myTime
]

const plugins = [];

const install = (app: App, opt: InstallOptions): void => {
  const option = Object.assign(defaultInstallOpt, opt);
  app.config.globalProperties.$MYVIEW = option;
  setConfig(option);

  components.forEach(component => {
    app.component(component.name, component)
  });

  plugins.forEach(plugin => {
    app.use(plugin)
  })
};

export {
  install,
  myTime
}

export default {
  install,
  t
}
