<template>
  <aside class="al-sidebar">
    <ul class="al-sidebar-list">
      <li class="al-sidebar-list-item " v-for="(item, index) in routeConfig"
          :class="{'with-sub-menu':item.subMenu,'selected':item.path===sidebar.selected,'ba-sidebar-item-expanded':item.expanded}">
        <router-link :to="item.path" class="al-sidebar-list-link" v-if="!item.subMenu">
          <i :class="item.sidebarMeta.icon"></i><span>{{item.name}}</span>
        </router-link>
        <a class="al-sidebar-list-link" v-if="item.subMenu" @click="setExpanded({index:index, expanded:!item.expanded})">
          <i :class="item.sidebarMeta.icon"></i><span>{{item.name}}</span>
          <b class="fa" :class="{'fa-angle-up': item.expanded, 'fa-angle-down': !item.expanded}" ></b>
        </a>
        <ul class="al-sidebar-sublist" v-if="item.subMenu" :class="{'slide-right': item.slideRight,'expanded': item.expanded}">
          <li class="ba-sidebar-sublist-item"  v-for="(subitem, subIndex) in item.subMenu"
              :class="{'with-sub-menu':subitem.subMenu,'selected':subitem.path===sidebar.selected,'ba-sidebar-item-expanded':subitem.expanded}">
            <a class="al-sidebar-list-link subitem-submenu-link" v-if="subitem.subMenu"
                         @click="setExpanded({index:index, subIndex:subIndex, expanded:!subitem.expanded})">
              <span>{{subitem.name}}</span>
              <b class="fa" :class="{'fa-angle-up': subitem.expanded, 'fa-angle-down': !subitem.expanded}"></b>
            </a>
            <ul v-if="subitem.subMenu" class="al-sidebar-sublist subitem-submenu-list" :class="{expanded: subitem.expanded, 'slide-right': subitem.slideRight}">
              <li v-for="subSubitem in subitem.subMenu" :class="{'with-sub-menu':subSubitem.subMenu,'selected':subSubitem.path===sidebar.selected}">
                <a v-if="subSubitem.disabled" class="al-sidebar-list-link">
                  {{ subSubitem.name }}
                </a>
                <router-link :to="subSubitem.path">
                  {{ subSubitem.name }}
                </router-link>
              </li>
            </ul>
            <router-link :to="subitem.path" v-if="!subitem.subMenu" class="al-sidebar-list-link">
              {{ subitem.name }}
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
  </aside>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import 'font-awesome/scss/font-awesome.scss'
  export default {
    name: 'vueSidebar',
    computed: mapGetters({
      routeConfig: 'routeConfig',
      sidebar: 'sidebar'
    }),
    methods: {
      show (obj) {
//        console.log(data, typeof (data))
        console.log(obj.index, typeof (obj.index))
        console.log(obj.subIndex, typeof (obj.subIndex))
      },
      ...mapActions([
        'setExpanded'
      ])
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../sass/theme/conf/colorScheme/blur";
  a.al-sidebar-list-link:hover{
    color: $primary;
  }
</style>
