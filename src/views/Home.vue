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
 
      <section class="footer bg-gray-800 px-8 py-8">
          <h2 class="text-3xl font-bold text-gray-200 py-3 text-center"><i class="fas fa-praying-hands px-2"></i>Pray For Me</h2>
          <h2 class="text-lg text-gray-200 text-center">All Rights Reserved <i class="far fa-copyright"></i>, A Simple Project For Ramadan As A Virtue</h2>
          <h2 class="text-md italic text-gray-200 text-center">Note: Iftar and Sehr timings displayed are for karachi only</h2>

      </section>
    
  </div>
</template>

<script>
export default {
    name:'home',
    components:{
     
       
    },
    data(){
      return{
         
         
      }
    },
    
}
</script>

<style>
.showcase{
  min-height:100vh;
  background-image:url('../assets/showcase.jpg');
  background-size:cover;
  background-position: center center;
} 

</style>