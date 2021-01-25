<template>
  <div
    class="sidebar"
    :data-background-color="backgroundColor"
    :data-active-color="activeColor"
  >
    <!--
            Tip 1: you can change the color of the sidebar's background using: data-background-color="white | black | darkblue"
            Tip 2: you can change the color of the active button using the data-active-color="primary | info | success | warning | danger"
        -->

    <div class="sidebar-wrapper" id="style-3">
      <div
        v-if="$root.settings.Settings.SideMenuLogo.show"
        class="sidebar-header"
        :class="{
          'd-none': !$sidebar.showLogo,
          'd-block': $sidebar.showLogo,
        }"
      >
        <a href="#" class="simple-text">
          <img class="pl-3" id="srcimg" src="@/assets/img/vue-logo2.jpg" alt="" />

          <span class="title navi-title">
            {{ title }}
          </span>
        </a>
      </div>
      <slot> </slot>
      <ul class="nav">
        <slot name="links">
          <sidebar-link
            v-for="(link, index) in sidebarLinks"
            :key="index"
            :to="link.path"
            :name="link.name"
            :icon="link.icon"
          >
          </sidebar-link>
        </slot>
      </ul>
    </div>
  </div>
</template>
<script>
import SidebarLink from "./SidebarLink";
export default {
  props: {
    title: {
      type: String,
      default: "Feature Toggle",
    },
    backgroundColor: {
      type: String,
      default: "black",
      validator: (value) => {
        let acceptedValues = ["white", "black", "darkblue"];
        return acceptedValues.indexOf(value) !== -1;
      },
    },
    activeColor: {
      type: String,
      default: "success",
      validator: (value) => {
        let acceptedValues = [
          "primary",
          "info",
          "success",
          "warning",
          "danger",
        ];
        return acceptedValues.indexOf(value) !== -1;
      },
    },
    sidebarLinks: {
      type: Array,
      default: () => [],
    },
    autoClose: {
      type: Boolean,
      default: true,
    },
  },
  provide() {
    return {
      autoClose: this.autoClose,
      addLink: this.addLink,
      removeLink: this.removeLink,
    };
  },
  components: {
    SidebarLink,
  },
  computed: {
    /**
     * Styles to animate the arrow near the current active sidebar link
     * @returns {{transform: string}}
     */
    arrowMovePx() {
      return this.linkHeight * this.activeLinkIndex;
    },
  },
  data() {
    return {
      linkHeight: 65,
      activeLinkIndex: 0,
      windowWidth: 0,
      isWindows: false,
      hasAutoHeight: false,
      links: [],
    };
  },
  methods: {
    findActiveLink() {
      this.links.forEach((link, index) => {
        if (link.isActive()) {
          this.activeLinkIndex = index;
        }
      });
    },
    addLink(link) {
      const index = this.$slots.links.indexOf(link.$vnode);
      this.links.splice(index, 0, link);
    },
    removeLink(link) {
      const index = this.links.indexOf(link);
      if (index > -1) {
        this.links.splice(index, 1);
      }
    },
  },
  mounted() {
    this.$watch("$route", this.findActiveLink, {
      immediate: true,
    });
  },
};
</script>
<style>
#srcimg {
 max-width: 60px;
  height: auto;
}
.title {
  color: rgb(230, 21, 21);
}

.title.navi-title{
  font-size: 16px;
   color: rgb(230, 21, 21);
}
</style>
