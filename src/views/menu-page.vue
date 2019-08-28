<template>
  <div class="menupage">
    <!-- <menu>
      <menu-item>11</menu-item>
      <menu-item>22</menu-item>
      <sub-menu>
        <div slot='title'>33</div>
        <menu-item>33-11</menu-item>
        <menu-item>33-22</menu-item>
      </sub-menu>
    </menu> -->
    <menu>
      <template v-for="(item, index) in list">
        <menu-item v-if='!item.children' :key='index'>{{item.title}}</menu-item>
        <re-sub-menu v-else :key='index' :parent='item'></re-sub-menu>
      </template>
    </menu>
  </div>
</template>

<script>
import ReSubMenu from './resub-menu/resub-menu'
import menuComponents from "../components/menu-page";
const { Menu, MenuItem, SubMenu } = menuComponents;

export default {
  name: "MenuPage",
  components: {
    Menu,
    MenuItem,
    SubMenu,
    ReSubMenu
  },
  props: {},
  data() {
    return {
      list: [
        {
          title: "title第一级 "
        },
        {
          title: "title第一级"
        },
        {
          title: "title第一级",
          children: [
            {
              title: "title第二级"
            },
            {
              title: "title第二级",
              children: [
                {
                  title: "title第三级"
                },
                {
                  title: "title第三级",
                  children: [
                    {
                      title: 'title第四级'
                    },
                    {
                      title: 'title第四级'
                    }
                  ]
                },
              ]
            },
          ]
        },

      ]
    };
  }
};
</script>

<style lang='scss' scoped>
.menupage {
  width: 300px;
  height: 400px;
}
</style>