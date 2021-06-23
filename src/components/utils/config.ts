export interface InstallOptions {
  size: any
  zIndex: number
  locale?: any
  i18n?: (...args: any[]) => string
}

let $MYVIEW = { } as InstallOptions

const setConfig = (option: InstallOptions): void => {
  $MYVIEW = option
}

const getConfig = (key: keyof InstallOptions): unknown => {
  return $MYVIEW[key]
}

export {
  getConfig,
  setConfig
}
