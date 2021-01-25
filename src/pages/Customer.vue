<template> 
<div class="columns">
    <div class="column">
        <a class="button is-small is-primary addnewbtn" :class="!$root.settings.Settings.Users.addUser ? 'disable': ''" @click.prevent="addCustomer(); showModal = !showModal" title="Add New User">Add New User</a>
         <p-modal
      :close="handleModalClose"
      v-if="showModal"
      title="Add a new user"
    >
      
        <CustomerInputForm @closeModal="handleModalClose" :editId="editId"></CustomerInputForm>
    </p-modal>
    <div class="table-responsive">
        <table v-if="data.length!=0" class="table">
            <thead>
                <tr>
                    <!-- <th v-for="(column,index) in columns" :key="index">{{column}}</th>
                    <th>#</th> -->
                    <th v-for="title in columnTitles" :key="title">{{ title }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(row,index_row) in data" :key="index_row" v-bind:class="{ editing: editId === row.id }" >
                    <td v-for="(column,index) in columns" :key="index"> {{row[column]}} </td>    
                    <td>
                        <p class="buttons">
                        <!-- <a class="button is-small is-primary" @click="addNewCustomer(row)" title="Edit"> <img src="../assets/icons/edit-user.svg" alt="Edit User" /></a> -->
                           
                            <a class="button is-small is-primary tablebtn" @click.prevent="editCustomer(row); showEditModal = !showEditModal" title="Edit" :class="!$root.settings.Settings.Users.editUser ? 'disable': ''"> <img src="../assets/icons/edit-user.svg" alt="Edit User"  /></a>
                           
                          
                            <p-modal
                                :close="handleEditModalClose"
                                v-if="showEditModal"
                                title="Edit user"
                                
                            >
                            
                                 
                                <CustomerInputForm @closeModal="handleEditModalClose" :editId="editId"></CustomerInputForm>
                            </p-modal>
                            <a class="button is-small is-danger tablebtn" @click="deleteCustomer(row.id)" title="Delete" :class="!$root.settings.Settings.Users.deleteUser ? 'disable': ''"><img src="../assets/icons/delete-user.svg" alt="Delete User" /></a>
                        </p>
                    </td>   
                </tr>
            </tbody>
        </table> 
        <div v-else class="notification is-danger">
            Warning !<strong> No Data to Show</strong>
        </div>
    </div>
    </div>
    
</div>    
 
</template>

<script>

import CustomerInputForm from '../components/CustomerInputForm.vue';
const tableColumns = ["Id", "FirstName", "LastName", "Country","Gender", "Edit/Delete"];


export default {
    name:'Customer',
    components:{
        CustomerInputForm,
    },
    data() {
            return {
                showModal: false,
                showEditModal: false,
                showAdd:true,
                columnTitles: [...tableColumns],
                editId:'',
            }
        },
    computed:{
            data(){
                return this.$store.state.customers;
            },
            columns(){
                return this.$store.state.customers.length>0 ?
                       Object.keys(this.$store.state.customers[0]) : []
            }
        },
    methods:{
            handleModalClose() {
                this.showModal = false;                
            },
            handleEditModalClose(){
                this.showEditModal = false;
            },
            editCustomer(customer){
                this.editId = customer.id;
               // this.showAdd = false;
            },
            addCustomer(){
                this.editId = "";
                //this.showAdd = true;
            },
            deleteCustomer(customer){
                this.$swal({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Yes, delete it!'
                    }).then((result) => {
                    if (result.value) {
                        
                        this.$store.dispatch('removeCustomer',customer).then((res)=>{
                            if(res) this.$swal(
                                    'Deleted!',
                                    'Record has been deleted.',
                                    'success'
                                    )
                            else this.$swal(
                                    'Fail!',
                                    'Fail to delete record.',
                                    'error'
                                    )                                 
                        });
                    }
                    })
            }
           
        }        
}
</script>
<style>
.editing {
    background-color: #fff8db;
}
.buttons .tablebtn{
    width:40px;
}
.buttons img{
   max-width:90%;   
}
.table tr th:last-child, .table tr td:last-child{
    min-width:115px;
}
.addnewbtn{
    float:right;
    margin-bottom:10px;
}
.radio{
    padding-left:0 !important;
}
.radio input{
    display:inline-block !important;
    vertical-align:-1px !important;
}

table{
    font-size:12px;
}

table th{
    text-transform: capitalize;
}

.table label.radio{
width:auto;
}
a.button.is-small.tablebtn.disable {
    pointer-events: none;
    background: #ccc;
}
a.button.is-small.is-primary.addnewbtn.disable {
    color: #363636;
    pointer-events: none;
    background: #ccc;
    opacity: 0.7;
}
</style>
