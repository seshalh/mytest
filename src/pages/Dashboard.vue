<template>
  <div>
    <div class="row">
      <div class="col-12 d-flex justify-content-end mb-4 mt-1">
          <a
          role="button"
          @click.prevent="showModal = !showModal"
          class="vertical-align-middle color-teal"
          :class="!$root.settings.Settings.Dashboard.addDashboardItem ? 'disable': ''"
        >
         
          <i class="ti-plus"></i>
          Add Dashboard Item
        </a>

      </div>
    </div>
    <!--Stats cards-->
    <div class="row">
      <template
        class=""
        v-for="stats in statsCards"
      >
      <template v-if="stats.title === 'Capacity' && $root.settings.Settings.Dashboard.showCapacity">
        <div class="col-md-6 col-xl-3">
            <stats-card>
              <div
                class="icon-big text-center"
                :class="`icon-${stats.type}`"
                slot="header"
              >
                <i :class="stats.icon"></i>
              </div>
              <div class="numbers" slot="content">
                <p>{{ stats.title }}</p>
                {{ stats.value }}
              </div>
              <div
                v-if="stats.footerIcon && stats.footerText"
                class="stats"
                slot="footer"
              >
                <i :class="stats.footerIcon"></i> {{ stats.footerText }}
              </div>
            </stats-card>
        </div>
       
      </template>
      <template v-else-if="stats.title === 'Revenue' && $root.settings.Settings.Dashboard.showRevenue">
         <div class="col-md-6 col-xl-3">
          <stats-card>
            <div
              class="icon-big text-center"
              :class="`icon-${stats.type}`"
              slot="header"
            >
              <i :class="stats.icon"></i>
            </div>
            <div class="numbers" slot="content">
              <p>{{ stats.title }}</p>
              {{ stats.value }}
            </div>
            <div
              v-if="stats.footerIcon && stats.footerText"
              class="stats"
              slot="footer"
            >
              <i :class="stats.footerIcon"></i> {{ stats.footerText }}
            </div>
          </stats-card>
      </div>
      </template>
      <template v-else-if="stats.title === 'Errors' && $root.settings.Settings.Dashboard.showErrors">
       <div class="col-md-6 col-xl-3">
          <stats-card>
          <div
            class="icon-big text-center"
            :class="`icon-${stats.type}`"
            slot="header"
          >
            <i :class="stats.icon"></i>
          </div>
          <div class="numbers" slot="content">
            <p>{{ stats.title }}</p>
            {{ stats.value }}
          </div>
          <div
            v-if="stats.footerIcon && stats.footerText"
            class="stats"
            slot="footer"
          >
            <i :class="stats.footerIcon"></i> {{ stats.footerText }}
          </div>
        </stats-card>
       </div>
        
      </template>
       <template v-else-if="stats.title === 'Followers' && $root.settings.Settings.Dashboard.showFollowers">
        <div class="col-md-6 col-xl-3">
           <stats-card>
          <div
            class="icon-big text-center"
            :class="`icon-${stats.type}`"
            slot="header"
          >
            <i :class="stats.icon"></i>
          </div>
          <div class="numbers" slot="content">
            <p>{{ stats.title }}</p>
            {{ stats.value }}
          </div>
          <div
            v-if="stats.footerIcon && stats.footerText"
            class="stats"
            slot="footer"
          >
            <i :class="stats.footerIcon"></i> {{ stats.footerText }}
          </div>
        </stats-card>
        </div>
      </template>
       
        
      </template>
      <!-- <div class="col-md-6 col-xl-4">
        <a
          role="button"
          @click.prevent="showModal = !showModal"
          class="d-block"
        >
          <stats-card>
            <div class="icon-big text-center icon-success" slot="header">
              <i class="ti-plus"></i>
            </div>
            <div class="numbers" slot="content">
              <p>New</p>
              Statistics
            </div>
          </stats-card>
        </a>
      </div> -->
    </div>
    <p-modal
      :close="handleModalClose"
      v-if="showModal"
      title="Add a new Statistics Card"
    >
      <add-stats-card :submit="addNewStat" />
    </p-modal>
   </div>
</template>
<script>
import { StatsCard, AddStatsCard } from "@/components/index";
export default {
  name: "Dashboard",
  components: {
    StatsCard,
    AddStatsCard,
  },
  data() {
    return {
      showModal: false,

      statsCards: [
        {
          id: 1,
          type: "warning",
          icon: "ti-server",
          title: "Capacity",
          value: "105GB",
          footerText: "Updated now",
          footerIcon: "ti-reload",
        },
        {
          id: 2,
          type: "success",
          icon: "ti-wallet",
          title: "Revenue",
          value: "$1,345",
          footerText: "Last day",
          footerIcon: "ti-calendar",
        },
        {
          id: 3,
          type: "danger",
          icon: "ti-pulse",
          title: "Errors",
          value: "23",
          footerText: "In the last hour",
          footerIcon: "ti-timer",
        },
        {
          id: 4,
          type: "info",
          icon: "ti-twitter-alt",
          title: "Followers",
          value: "+45",
          footerText: "Updated now",
          footerIcon: "ti-reload",
        }
      ]
    }
  },
  methods: {
    addNewStat(data) {
      // this.statsCards.push(
      //   Object.assign({ id: this.statsCards.length + 1 }, data)
      // );
      this.showModal = false;
    },
    handleModalClose() {
      this.showModal = false;
    }
  }
}
</script>
<style>
.color-teal{
  color:#41B883;
  font-weight:600;
}
.color-teal.disable{color: #ccc;pointer-events: none;}
</style>