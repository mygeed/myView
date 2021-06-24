<p align="center">
    <a href="http://canbego.com/myview">
        <img width="168" src="http://smatem.com/images/mygeedLogo.png">
        Power by 深圳市美吉达科技有限公司
    </a>
</p>
<h1></h1>

<h1>
MyView
<h3>The high quality UI Toolkit built on Vue3.</h3>
</h1>

## Docs

** [1.0.x](http://canbego.com/myview/dev-doc-zh)

## Features

- Dozens of useful and beautiful components.
- Friendly API. It's made for people with any skill level.
- Extensive documentation and demos.
- It is quite beautiful.
- Supports Vue3

## Who's using myView

- [美吉达云平台](http://cloud.mygeed.com/) Cloud control platform for everything!

> If your company or products use myView, welcome to click [here](https://gitee.com/mygeed/myView/issues/new) to leave a message.

### Install myView

Using npm:
```
npm install myView --save
```

## Usage

Attention: All of the components name use camel style

```vue
<template>
  <mySilder v-model="value" range />
</template>
<script>
  export default {
    data () {
      return {
          value: [20, 50]
      }
    }
  }
</script>
```

Using css via `import`:

```css
import 'myView/lib/myView.css';
```

## Compatibility

- Supports Vue.js 3.x

## Major Contributors
|Name|Avatar|Name|Avatar|Name|Avatar|
|---|---|---|---|---|---|
|[Ethan](https://github.com/mygeed) |  <img width="40" src="http://smatem.com/images/mygeedLogo.png"/>

## Ecosystem Links

- [MyView Developer](https://canbego.com/myview)

## License
[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2021-present, mygeed.com
