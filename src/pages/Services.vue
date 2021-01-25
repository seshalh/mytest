<template>
<div  slot="raw-content" class="table-responsive">
   <card>
    <div v-if="!isLoading">
     <template v-for="(item, index) in getPopularShows.results" >
         <ListItem :item="item" :key="index" :showMore='$root.settings.Settings.Services.showMoreDetails'/>
     </template>
    </div>
    <template v-else>
       <b-loading :is-full-page="isFullPage" v-model="isLoading" ></b-loading>
    </template>
   </card>
</div>
</template>
<script>
import 'vue-select/dist/vue-select.css';
import { mapActions, mapGetters } from 'vuex';
import ListItem from '@/components/ListItem.vue';

import axios from 'axios';

export default {
    name:"services",
    components:{
      ListItem
    },
    data() {
      return {
        isLoading: false,
        showMore: true,
        isFullPage: true
      };
    },
    computed: {
        ...mapGetters(['getPopularShows']),
    },

    async mounted() {
      if (this.getPopularShows.length === 0) {
        this.isLoading = true
        await this.fetchPopularShows()
        this.isLoading = false
      }
    },

    methods: {
      ...mapActions(['fetchPopularShows']),
    },
}
</script>
<style>
body{
  padding:5px;
}

.row .col{
  box-sizing:border-box;
  flex:0 0 calc(25% - 4px);
  border:1px solid lightgrey;
  box-shadow:0 0 3px rgba(0,0,0,0.1);
  margin: 0 1px;
  padding:8px 5px;
}
</style>
