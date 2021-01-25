<template>
<div >
<div v-for="(image,index) in img" :key="index" class="grid">
<img :src="image.download_url" class="image" />
</div>
</div>
</template>

<script>
import axios from 'axios';
export default {
name:"Gallery",
data(){
return{
img:[]
}
},
created(){
axios.get('https://picsum.photos/v2/list?page=2&limit=50').then(res=>{
this.img=res.data;
console.log("result from axios",res.data)
})
console.log("imges array",this.img)
}
}
</script>

<style scoped>
.grid{
width: 250px;
border-radius: 10px;
border:1px solid #f1f1f1;
margin:25px;
float: left;
height: 300px;
}
.image{
width: 250px;
border-radius: 10px;
border:1px solid #f1f1f1;
float: left;
height: 300px;
}
.image:hover {
transform: scale(1.5);
}
</style>