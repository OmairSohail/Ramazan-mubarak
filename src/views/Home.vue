<template>
  <div class="home">
      
      <section class="showcase">
         <navbar/>
         <div class="heading-container flex flex-column items-center justify-center">
           <div class="headings">
            <h2 class="text-6xl font-bold text-gray-100 text-center">Ramazan Mubarak</h2>
            <h3 class="text-2xl font-bold text-gray-100 text-center">From Omair Sohail</h3>
           <today/>
           </div>
          
         </div>
      </section>
  </div>
</template>

<script>
import today from '../components/today'

export default {
    name:'home',
    components:{
      today
    },
    data(){
      return{
        
      }
    }
}
</script>

<style>
.showcase{
  min-height:100vh;
  background-image:url('../assets/showcase.jpg');
  background-size:cover;
  background-position: center center;
} 

.headings h2,h3{
 font-family: 'Kaushan Script', cursive;
}

.heading-container{
  height:80vh;
}
</style>