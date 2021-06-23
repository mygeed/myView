import md5 from './md5.min';
export type TranslatePair = {
  [key: string]: string | string[] | TranslatePair
}
const appKey = "请到美吉达云平台cloud.mygeed.com创建项目秘钥appKey"
const projectId = 'mygeed'

/**
 * 设置缓存数据
 * @param key
 * @param val
 */
const set = (key: string, val: {}): void => {
  localStorage.setItem(key, JSON.stringify(val))
}
/**
 * 获取缓存数据
 * @param key
 */
const get = (key: string): any => {
  const a = localStorage.getItem(key)
  return a ? JSON.parse(a) : a
}

export const t = (...args: any[]): string => {
  const [key, pid = projectId] = args, trans = get(pid + 'MyLocaleContent'),
    unTrans = get(pid + 'MyLocaleUpload') || {}, hash = md5(key);
  if(!trans || !trans[hash]){
    unTrans[hash] = key
    set(pid + 'MyLocaleUpload', unTrans)
  }
  return key
}

export default { t }
