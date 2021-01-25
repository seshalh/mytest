<template>
  <div class="row">
    <div class="w-100">
      <card :title="product.title" :subTitle="product.subTitle">
        <div slot="raw-content" class="d-block p-4">
          <v-select :options="product.data" :value="product.data[0]" :searchable="$root.settings.Settings['Features']['search']"></v-select>
        </div>
      </card>
    </div>
  </div>
</template>
<script>
import 'vue-select/dist/vue-select.css';
const productData = ['Dell Inspiron','HTC One X','HTC Wildfire S','HTC Sense','HTC Sensation XE','IPhone 4S','Samsung Galaxy Note 800','Samsung Galaxy S20','MacBookAir'];
export default {
  data() {
    return {
      product: {
        title: "Products",
        data: [...productData],
      },
    };
  },
};
</script>
<style>
.vs__dropdown-menu {
    margin: 0 !important;
   list-style:none;
}

</style>
