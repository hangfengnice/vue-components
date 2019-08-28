# components

## 1 阿里单色与多色组件

- **单色组件**
  - [阿里巴巴矢量图官网](https://www.iconfont.cn/)
    - 注册账号 挑选图标到自己的项目
  - 项目中有 `Unicode` `Font class` `Symbol` 三种模式
    - 初次进入有 `暂无代码 点此生成` 字段, 点击生成代码
  - 选泽 `Font class`, 复制到 `index.html` 文件

```html
<!-- html文件 -->
<!-- 下面 href 输入自己的链接地址 -->
<link rel="stylesheet" href="//at.alicdn.com/t/font_1370482_tpbspxmkse.css" />
```

- 子组件

```html
<template>
  <!--  -->
  <i :class="classes" :style="styles"></i>
</template>

<script>
  export default {
    name: "iconfont",
    props: {
      icon: {
        type: String,
        default: ""
      },
      color: {
        type: String,
        default: "#515a6e"
      },
      size: {
        type: Number,
        default: 12
      }
    },
    computed: {
      classes() {
        return ["iconfont", `${this.icon}`];
      },
      styles() {
        return {
          color: this.color,
          fontSize: `${this.size}px`
        };
      }
    }
  };
</script>

<style lang="scss" scoped>
  /* 默认样式 可以自己修改 */
  .iconfont {
    font-family: "iconfont";
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
```

- 父组件调用

```html
<!-- 传参数即可 -->
<icon-font
  color="rgb(204, 193, 93)"
  icon="icon-Real-timeCompute-orange"
  :size="40"
></icon-font>
```

- **多色组件**
  - 选泽 `Symbol` 中的生成代码, 复制到 `index.html` 文件

```html
<!-- html文件 -->
<!-- 注意下面 src 输入自己的链接地址 -->
<script src="//at.alicdn.com/t/font_1370482_tpbspxmkse.js"></script>
```

- 其他与单色组件一致

## 2 递归组件

- 组件位置 /src/views/resub-menu/resub-menu.vue
  - 要有终止值
  - 递归组件要有自己的组件名
