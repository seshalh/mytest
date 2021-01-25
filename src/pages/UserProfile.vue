<template>
  <div class="row">
    <div class="col-12">
      <card :title="table1.title" :subTitle="table1.subTitle">
        <div slot="raw-content" class="table-responsive">
          <user-table :data="table1.data" :columns="table1.columns">
          </user-table>
        </div>
      </card>
    </div>
  </div>
</template>
<script>
import { UserTable } from "@/components";
const tableColumns = ["Id", "FirstName", "LastName", "Country"];
import tableFileData from "../users.json";
const tableData1 = JSON.parse(JSON.stringify(tableFileData));
const tableData  = tableData1.users;

// const tableData = [
//   {
//     id: 1,
//     firstname: "Dakota ",
//     lastname: "Rice",
//     country: "Niger",
//   },
//   {
//     id: 2,
//     firstname: "Minerva",
//     lastname: "Hooper",
//     country: "Curaçao",
//   },
//   {
//     id: 3,
//     firstname: "Sage",
//     lastname: "Rodriguez",
//     country: "Netherlands",
//   },
//   {
//     id: 4,
//     firstname: "Philip",
//     lastname: "Chaney",
//     country: "Korea, South",
//   },
//   {
//     id: 5,
//     firstname: "Doris",
//     lastname: "Greene",
//     country: "Malawi",
//   },
// ];
export default {
  components: {
    UserTable,
  },
  data() {
    return {
      table1: {
        title: "User's List",
        subTitle: "",
        columns: [...tableColumns],
        data: [...tableData],
      },
    };
  },
};
</script>
<style>
</style>
