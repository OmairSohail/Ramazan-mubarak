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
      
      <section class="benefits py-5 pl-12 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-center items-center">
         <div class="card max-w-sm rounded overflow-hidden shadow-lg">
            <div class="icon flex flex-row items-center justify-center py-5">
               <i class="fas fa-mobile-alt fa-3x text-custom2"></i>
            </div>
            <div class="px-6 py-4 text-custom2">
              <div class="font-bold text-xl mb-2 text-center">Trusted Tailoring</div>
              <p class="text-gray-700 text- text-center px-4 pb-3">
                We care how you look and would like to build a relationship with you, as your trusted source for all your custom alteration needs.              </p>
            </div>
         </div>
          <div class="card max-w-sm rounded overflow-hidden shadow-lg">
            <div class="icon flex flex-row items-center justify-center py-5">
                <i class="fas fa-cut fa-3x text-custom2"></i>
            </div>
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2 text-center text-custom2">Trusted Tailoring</div>
              <p class="text-gray-700 text- text-center px-4 pb-3">
                We care how you look and would like to build a relationship with you, as your trusted source for all your custom alteration needs.              </p>
            </div>
           
         </div>
          <div class="card max-w-sm rounded overflow-hidden shadow-lg">
             <div class="icon flex flex-row items-center justify-center py-5">
               <i class="fas fa-headset fa-3x text-custom2"></i>
            </div>
            <div class="px-6 py-4 text-custom2">
              <div class="font-bold text-xl mb-2 text-center">Trusted Tailoring</div>
              <p class="text-gray-700 text- text-center px-4 pb-3">
                We care how you look and would like to build a relationship with you, as your trusted source for all your custom alteration needs.              </p>
            </div>
            
         </div>
      </section>

      <section class="consultation grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 items-center justify-center">
         <div class="content text-left px-16 text-custom2">
           <h2 class="text-3xl mb-4"><i class="fas fa-handshake mr-3"></i>Customer Consultation</h2>
           <p class="text-base">We've got all your needs covered: from recuts, reshapes and repairs and everything in between. Don't hesitate to ask us a question or inquire as to why a certain process has to take place. All of our staff are friendly and knowledgeable because we know what it feels like. We want you to know just how special you and your merchandise are to us, so we do our very best to ensure that you and your needs always come first. We even have a complimentary estimate when you come out to us!</p>
         </div>
         <div class="form px-16">
           <form class="w-full max-w-lg">
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                  Name
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-first-name" type="text" placeholder="Name">
              </div>
              <div class="w-full md:w-1/2 px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                  Email
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="email" placeholder="Email">
              </div>
            </div>
             <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                  Phone
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-first-name" type="number" placeholder="Phone">
                
              </div>
              <div class="w-full md:w-1/2 px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                  Subject
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Subject">
              </div>
            </div>
             <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-full px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                 Message
                </label>
                <textarea name="" id="" class="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" rows="5" placeholder="Your Message"></textarea>
                
              </div>
            </div>
          </form>
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

section.consultation{
  min-height:70vh;
}
</style>