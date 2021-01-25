<template>
<div>
    <form @submit="submit($event)">
        <div class="field">
            <label class="label">First Name</label>
            <div class="control">
                <input class="input" v-model="customer.first_name" type="text" placeholder="First Name" required>
            </div>
        </div>
        <div class="field">
            <label class="label">Last Name</label>
            <div class="control">
                <input class="input" v-model="customer.last_name" type="text" placeholder="Last Name" required>
            </div>
        </div>
        <div class="field">
            <label class="label">Country</label>
            <div class="control">
                <!-- <input class="input" v-model="currentDate" type="text" disabled> -->
                 <input class="input" v-model="customer.country" type="text" placeholder="Country" required>
            </div>
        </div>
        
        <div class="field-body">
            <div class="field is-narrow">
            <label class="label">Gender</label>    
            <div class="control">
                <label class="radio">
                <input type="radio" v-model="customer.gender" value="Male" name='gender' required>
                Male
                </label>
                <label class="radio">
                <input type="radio" v-model="customer.gender" value="Female" name='gender'>
                Female
                </label>
            </div>
            </div>
        </div>

        <div class="field is-grouped" style="margin-top:20px">
            <div class="control">
                <button class="button is-link">{{editAddText}} User</button>
            </div>
        </div>
    </form>
</div>
</template>

<script>
export default {
    name:'CustomerInputForm',
    props:['editId'],
    data(){
        return {
            customer:{
                first_name:'',
                last_name:'',
                gender:'',
                country:'Nederlands',
            }
        }
    },
    watch:{
 
        editId(val){
            
            
            if(val){
                let current = this.$store.state.customers.filter(i => {
                    if(i.id==val) return true;
                    else false;
                })[0]

                this.customer.first_name = current.first_name;
                this.customer.last_name = current.last_name;
                this.customer.gender = current.gender;
                this.customer.country=current.country;
            }else{
                this.resetFormData()
            }
        }
    },
    computed:{
        
        editAddText(){

            this.updateEditValue;
            return this.editId ? "Edit":"Add";
        },
        updateEditValue()
        {
             if(this.editId){
                let current = this.$store.state.customers.filter(i => {
                    if(i.id==this.editId) return true;
                    else false;
                })[0]

                this.customer.first_name = current.first_name;
                this.customer.last_name = current.last_name;
                this.customer.gender = current.gender;
                this.customer.country=current.country;
            }else{
                this.resetFormData()
            }

        },
    },
    methods:{
        resetFormData() {

                this.customer = {
                first_name:'',
                last_name:'',
                country:'Nederlands',
                gender:'',
                }
        },
        submit(event){
            event.preventDefault();  
            var payload = this.customer;
            // payload['date'] = this.currentDate;
            
            if(!this.editId){
                payload['id'] =  this.$store.state.customers.length!=0? Math.max(...this.$store.state.customers.map(i => i.id)) + 1 : 0;
                const customer = {...payload};
                this.$store.dispatch('addCustomer',customer);
                this.resetFormData()
            }else{
                payload['id'] =   this.editId;
                const customer = {...payload}
                this.$store.dispatch('editCustomer',customer);                
            }
            this.$emit('closeModal');
            
        }
    }
}
</script>