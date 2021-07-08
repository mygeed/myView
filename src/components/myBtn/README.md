#myBtn 按钮
常用的操作按钮。

## 代码演示

### 颜色

使用`color`属性来定义按钮的颜色，默认白色背景，黑色字。
- `primary`: 主要按钮
- `secondary`: 次要按钮
- `success`: 成功按钮，绿色背景
- `warning`: 警告按钮，黄色背景
- `info`: 信息按钮，蓝色背景
- `error`: 危险按钮，红色背景

:::demo
```html
<template>
  <myBtn>默认按钮</myBtn>
  <myBtn color="primary">主要按钮</myBtn>
  <myBtn color="secondary">次要按钮</myBtn>
  <myBtn color="success">成功按钮</myBtn>
  <myBtn color="warning">警告按钮</myBtn>
  <myBtn color="info">信息按钮</myBtn>
  <myBtn color="error">危险按钮</myBtn>
</template>
```
:::

### 按钮样式

使用`stylus`属性来定义 Button 的样式，默认值`contained`。
- `text`: 文本按钮（低强调），无背景，无边框，鼠标悬浮显示背景色
- `outlined`: 轮廓按钮（中等强调），无背景，字体和边框同色，悬浮显示背景色
- `contained`: 包含按钮（高强调），含背景色
- `toggle`: 切换按钮，按钮之间没有间隙，挨在一起

:::demo
```html
<template>
  <myBtn>默认按钮</myBtn>
  <myBtn stylus="text">文本按钮</myBtn>
  <myBtn stylus="outlined">轮廓按钮</myBtn>
  <myBtn stylus="contained">包含按钮</myBtn>
  <myBtn stylus="toggle">切换按钮</myBtn>
</template>
```
:::

### 按钮类型

使用`type`属性来定义 Button 的样式，默认为浮动按钮。
- `flat`: 扁平按钮
- `fab`: 浮动操作按钮

:::demo
```html
<template>
  <myBtn>浮动按钮</myBtn>
  <myBtn type="flat">扁平按钮</myBtn>
  <myBtn type="fab">浮动操作按钮</myBtn>
</template>
```
:::

### 块状按钮

::: demo
```html
<template>
  <myBtn block>默认按钮</myBtn>
</template>
```
:::

## API

### Props
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ------ | ------ |
| block | 是否是块状按钮 | _boolean_ | — | `false` |
| color | 颜色 | _string_ | primary / secondary / info /  success /warning / error | — |
| disabled | 是否禁用 | _boolean_ | — | `false` |
| native-type | 原生 type 属性 | _string_ | button / submit / reset | `button` |
| ripple | 点击是否有波纹效果 | _boolean_ | —  | `true` |
| round | 是否是圆角按钮 | _boolean_ | — | `false` |
| small | 是否是小尺寸按钮 | _boolean_ | — | `false` |
| stylus | 样式 | _string_ | text / icon / outlined / contained / toggle | `contained` |
| type | 类型 | _string_ | flat / fab | — |

### Slots
| 插槽名称  | 说明      |
| --------- | --------- |
| default   | 按钮内容  |

### Events
| 事件名称  | 说明      | 回调参数  |
| --------- | --------- | --------- |
| click     | 点击按钮时的回调  | *event: Event*   |
