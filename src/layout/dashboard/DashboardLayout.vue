<template>
  <div class="wrapper">
      <side-bar
      :background-color="$root.settings.Settings.DarkSideMenu.show ? 'black' : 'white'"
      v-if="$root.settings.Settings.SideMenu.show"
    >
         <template slot="links">
        <sidebar-link to="/dashboard" name="Dashboard" icon="ti-panel" v-if="$root.settings.Settings.Dashboard.show"/>
         <sidebar-link
          to="/features"
          name="Features"
          icon="ti-widget-alt"
          v-if="$root.settings.Settings.Features.show"
        />
      <sidebar-link
          to="/services"
          name="Services"
          icon="ti-server"
          v-if="$root.settings.Settings.Services.show"
        />
        <sidebar-link
          to="/users"
          name="Users"
          icon="ti-user"
          v-if="$root.settings.Settings.Users.show"
        /> 

         <!--<sidebar-link
          to="/gallery"
          name="Gallery"
          icon="ti-image"
          v-if="$root.settings.gallery.status"
        />
        <sidebar-link
          to="/weather"
          name="Weather"
          icon="ti-shine"
          v-if="$root.settings.weather.status"
        /> -->
       </template>
    
    </side-bar>
    <div class="main-panel d-flex flex-column">
      <top-navbar></top-navbar>

      <dashboard-content
        @click.native="toggleSidebar"
        class="d-flex flex-grow-1"
      >
      </dashboard-content>
    </div>
  </div>
</template>
<style lang="scss">
</style>
<script>
import TopNavbar from "./TopNavbar.vue";
import DashboardContent from "./Content.vue";

export default {
  components: {
    TopNavbar,
    DashboardContent,
    
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    },
  },
};
</script>
