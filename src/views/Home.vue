<template>
  <div class="home">
         <navbar/>
      <section class="showcase">
        <div class="heading-container flex flex-column items-center justify-end">
           <div class="headings max-w-2xl pr-8 mt-20">
            <h2 class="text-5xl font-bold text-custom2 text-center sm:text-center md:text-right lg:text-right xl:text-right pl-8">Altering & Tailoring Women's Clothing into Works of Art.</h2>
            <h3 class="text-xl text-custom2 text-justify sm:text-justify md:text-right lg:text-right xl:text-right mt-4 pl-8">We have been altering tailored clothing for fashion connoisseurs for over 30 years, and we employ the best alteration tailors.</h3> 
            <a class="float-right px-8 py-3 mt-4 block mr-32 sm:mr-0 md:mr-0 lg:mr-0 xl:mr-0 bg-custom1 text-custom2 font-semibold transition-transform duration-300 ease-out transform hover:scale-95 cursor-pointer">Book Order</a>   
           </div>
         </div>
      </section>
      
      <section class="benefits py-5 pl-12 grid grid-cols-3 justify-center items-center">
         <div class="card max-w-sm rounded overflow-hidden shadow-lg">
            <div class="icon flex flex-row items-center justify-center py-5">
                <img src="../assets/icon1.png" alt="" width="122" height="128" class="rounded-full bg-custom1">
            </div>
            <div class="px-6 py-4 text-custom2">
              <div class="font-bold text-xl mb-2 text-center">Trusted Tailoring</div>
              <p class="text-gray-700 text- text-center px-4">
                We care how you look and would like to build a relationship with you, as your trusted source for all your custom alteration needs.              </p>
            </div>
         </div>
          <div class="card max-w-sm rounded overflow-hidden shadow-lg">
            <div class="icon flex flex-row items-center justify-center py-5">
                <i class="fas fa-cut fa-3x rounded-full text-custom2 bg-custom1 p-10"></i>
            </div>
            <div class="px-6 py-4 text-custom2">
              <div class="font-bold text-xl mb-2 text-center">Trusted Tailoring</div>
              <p class="text-gray-700 text- text-center px-4">
                We care how you look and would like to build a relationship with you, as your trusted source for all your custom alteration needs.              </p>
            </div>
           
         </div>
          <div class="card max-w-sm rounded overflow-hidden shadow-lg">
             <div class="icon flex flex-row items-center justify-center py-5">
                <img src="../assets/Sewing-Machine.png" alt="" class="rounded-full bg-custom1 px-8 py-12">
            </div>
            <div class="px-6 py-4 text-custom2">
              <div class="font-bold text-xl mb-2 text-center">Trusted Tailoring</div>
              <p class="text-gray-700 text- text-center px-4">
                We care how you look and would like to build a relationship with you, as your trusted source for all your custom alteration needs.              </p>
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
  position:relative;
  min-height:100vh;
  background-image:url('../assets/showcase.jpg');
  background-size:cover;
  background-position: center center;
} 



.showcase::after{
  content:'';
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background-color:rgba(0,0,0,0.1);
  pointer-events: none;
  z-index:0;
}

section.benefits{
  min-height:70vh;
}

</style>