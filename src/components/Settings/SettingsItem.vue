<template>
  <div class="d-flex flex-column">
    <div class="d-flex justify-content-between mb-4">
        <div>
          <h4 class="card-title">{{ item.name }}</h4>
          <p class="card-category">{{ item.description }}</p>
        </div>
        <label class="switch">
          <input
            type="checkbox"
            :id="`checkbox${item.name}`"
            v-model="$root.settings.Settings[item.name]['show']"
          />
          <div class="slider round"></div>
        </label>
      </div>
      <div class="options_list">
      <div v-if="item.name === 'Features'" :class="!$root.settings.Settings['Features']['show'] ? 'disable-options' : '' ">
        <div class="d-flex justify-content-between mb-4 child-options">
        <div>
          <p class="card-title">{{ 'Search'}}</p>
        </div>
        <label class="switch">
          <input
            type="checkbox"
            :id="`checkbox_search${item.search}`"
            v-model="item.search"
          />
          <div class="slider round"></div>
        </label>
      </div>
     </div>

       <div v-if="item.name === 'Dashboard'" :class="!$root.settings.Settings['Dashboard']['show'] ? 'disable-options' : '' ">

         <div class="d-flex justify-content-between mb-4 child-options">
              <div>
                <p class="card-title">{{ 'Add Dashboard Item'}}</p>
              </div>
              <label class="switch">
                <input
                  type="checkbox"
                  :id="`checkbox_dashboard${item.addDashboardItem}`"
                  v-model="$root.settings.Settings['Dashboard'].addDashboardItem"
                />
                <div class="slider round"></div>
              </label>
        </div>

          <div class="d-flex justify-content-between mb-4 child-options">
              <div>
                <p class="card-title">{{ 'Show Capacity'}}</p>
              </div>
              <label class="switch">
                <input
                  type="checkbox"
                  :id="`checkbox_capacity${item.showCapacity}`"
                  v-model="$root.settings.Settings['Dashboard'].showCapacity"
                />
                <div class="slider round"></div>
              </label>
        </div>
        <div class="d-flex justify-content-between mb-4 child-options">
              <div>
                <p class="card-title">{{ 'Show Revenue'}}</p>
              </div>
              <label class="switch">
                <input
                  type="checkbox"
                  :id="`checkbox_revenue${item.showRevenue}`"
                  v-model="$root.settings.Settings['Dashboard'].showRevenue"
                />
                <div class="slider round"></div>
              </label>
        </div>
        <div class="d-flex justify-content-between mb-4 child-options">
              <div>
                <p class="card-title">{{ 'Show Errors'}}</p>
              </div>
              <label class="switch">
                <input
                  type="checkbox"
                  :id="`checkbox_err${item.showErrors}`"
                  v-model="$root.settings.Settings['Dashboard'].showErrors"
                />
                <div class="slider round"></div>
              </label>
        </div>
        <div class="d-flex justify-content-between mb-4 child-options">
              <div>
                <p class="card-title">{{ 'Show Followers'}}</p>
              </div>
              <label class="switch">
                <input
                  type="checkbox"
                  :id="`checkbox_followers${item.showFollowers}`"
                  v-model="$root.settings.Settings['Dashboard'].showFollowers"
                />
                <div class="slider round"></div>
              </label>
        </div>
     </div> 

     <div v-if="item.name === 'Services'" :class="!$root.settings.Settings['Services']['show'] ? 'disable-options' : '' ">
        <div class="d-flex justify-content-between mb-4 child-options">
        <div>
          <p class="card-title">{{ 'Show More Details'}}</p>
        </div>
        <label class="switch">
          <input
            type="checkbox"
            :id="`checkbox_service${item.showMoreDetails}`"
            v-model="$root.settings.Settings['Services'].showMoreDetails"
          />
          <div class="slider round"></div>
        </label>
      </div>
     </div> 

      <div v-if="item.name === 'Users'" :class="!$root.settings.Settings['Users']['show'] ? 'disable-options' : '' ">
        <div class="d-flex justify-content-between mb-4 child-options">
        <div>
          <p class="card-title">{{ 'Add User'}}</p>
        </div>
        <label class="switch">
          <input
            type="checkbox"
            :id="`checkbox${item.addUser}`"
            v-model="$root.settings.Settings['Users']['addUser']"
          />
          <div class="slider round"></div>
        </label>
      </div>
       <div class="d-flex justify-content-between mb-4 child-options">
        <div>
          <p class="card-title">{{ 'Edit User'}}</p>
        </div>
        <label class="switch">
          <input
            type="checkbox"
            :id="`checkbox${item.editUser}`"
            v-model="$root.settings.Settings['Users']['editUser']"
          />
          <div class="slider round"></div>
        </label>
      </div>
      <div class="d-flex justify-content-between mb-4 child-options">
        <div>
          <p class="card-title">{{ 'Delete User'}}</p>
        </div>
        <label class="switch">
          <input
            type="checkbox"
            :id="`checkbox${item.deleteUser}`"
            v-model="$root.settings.Settings['Users']['deleteUser']"
          />
          <div class="slider round"></div>
        </label>
      </div>
     </div> 
   </div>
  </div>

  
</template>

<script>
export default {
  name: "SettingsItem",
  props: {
    item: {
      type: Object,
    },
  },
  data() {
    return {
      itemData: this.item,
    };
  },
};
</script>

<style lang="scss" scoped>
.switch {
  border-radius: 999px;
  display: inline-block;
  height: 1rem;
  position: relative;
  width: 2.5rem;
  box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
}
.switch input {
  display: none;
}
.slider {
  bottom: 0;
  cursor: pointer;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: 0.4s;
  background-color: rgba(203, 213, 224, 1);
}
.slider:before {
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  background-color: #fff;
  bottom: -4px;
  content: "";
  height: 26px;
  left: -2px;
  position: absolute;
  transition: 0.4s;
  width: 26px;
}
input:checked + .slider:before {
  background-color: #66bb6a;
}
input:checked + .slider:before {
  transform: translateX(20px);
}
.slider.round {
  border-radius: 34px;
}
.slider.round:before {
  border-radius: 50%;
}
.d-flex.justify-content-between.mb-4.child-options{padding: 10px 0px 10px 3px !important; padding: 0 0px;background: rgba(204, 204, 204, 0.24);}
.d-flex.justify-content-between.mb-4.child-options:first-child{margin-top: -10px !important}
.d-flex.justify-content-between.mb-4.child-options:last-child{margin-bottom: 30px !important}
.disable-options{pointer-events: none;}
.disable-options .card-title{color: #999}
.disable-options input:checked + .slider:before, .disable-options input + .slider:before{background-color: #ccc}
</style>