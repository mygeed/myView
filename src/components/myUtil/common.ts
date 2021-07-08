const common = {
  isServer: typeof window === 'undefined',
  oneOf: (value, validList) => {
    for (let i = 0; i < validList.length; i++) {
      if (value === validList[i]) {
        return true
      }
    }
    return false
  }
};
export default common
