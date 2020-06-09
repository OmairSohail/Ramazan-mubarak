<template>
  <div class="home">
         <navbar/>
      <section class="showcase">
        <div class="heading-container flex flex-column items-center justify-end">
           <div class="headings max-w-2xl pr-8 mt-20">
            <h2 class="text-5xl font-bold text-custom2 text-center sm:text-center md:text-right lg:text-right xl:text-right pl-8">Altering & Tailoring Women's Clothing into Works of Art.</h2>
            <h3 class="text-xl text-custom2 text-justify sm:text-justify md:text-right lg:text-right xl:text-right mt-4 pl-8">We have been altering tailored clothing for fashion connoisseurs for over 30 years, and we employ the best alteration tailors.</h3> 
            <router-link to="/about" class="float-right px-8 py-3 mt-4 block mr-32 sm:mr-0 md:mr-0 lg:mr-0 xl:mr-0 bg-custom1 text-custom2 font-semibold transition-transform duration-300 ease-out transform hover:scale-95 cursor-pointer">Know More About Us</router-link>   
           </div>
         </div>
      </section>
      
      <section class="benefits py-5 pl-12 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-center items-center">
         <div class="card max-w-sm mx-auto rounded overflow-hidden shadow-lg">
            <div class="icon flex flex-row items-center justify-center py-5">
               <img src="../assets/mission.png" alt="" width="100" height="50">
            </div>
            <div class="px-6 py-4 text-custom2">
              <div class="font-bold text-xl mb-2 text-center">Our Mission</div>
              <p class="text-gray-700 text- text-center px-4 pb-3">
                We care how you look and would like to build a relationship with you, as your trusted source for all your custom alteration needs.</p>
            </div>
         </div>
          <div class="card max-w-sm mx-auto rounded overflow-hidden shadow-lg">
            <div class="icon flex flex-row items-center justify-center py-5">
                <img src="../assets/promise.png" alt="" width="100" height="50">
            </div>
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2 text-center text-custom2">Our Promise</div>
              <p class="text-gray-700 text- text-center px-4 pb-3">
                Our work is always top quality, and behind that promise we want you to know that we back our work with a satisfaction guarantee.</p>
            </div>
           
         </div>
          <div class="card max-w-sm mx-auto rounded overflow-hidden shadow-lg">
             <div class="icon flex flex-row items-center justify-center py-5">
               <img src="../assets/women-suit.png" alt="" width="100" height="50">
             </div>
            <div class="px-6 py-4 text-custom2">
              <div class="font-bold text-xl mb-2 text-center">Custom Suits</div>
              <p class="text-gray-700 text- text-center px-4 pb-3">
                Tailoring custom suits & alterations for different body types is our forte we provide clients with a variety of designs on modern trend.</p>
              </div>
            
         </div>
      </section>

      <section class="categories1 flex flex-col justify-center" id="services">
        <div class="max-w-2xl">
            <div class="max-w-sm w-full lg:max-w-full lg:flex my-3 rounded-full">
              <div class="card-img1 h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"  title="Woman holding a mug">
                </div>
                <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                  <div class="mb-8">
                  <p class="text-sm text-gray-600 flex items-center">
                    <!-- <svg class="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                    </svg>
                    Members only -->
                  </p>
                  <div class="text-gray-900 font-bold text-xl mb-2">Neck Designs</div>
                  <p class="text-gray-700 text-base capitalize">halter neck , simple neck , pattern designs with buttons , with and without piping & all kinds of neck designs are available.</p>
                </div>
                <!-- <div class="flex items-center">
                  <img class="w-10 h-10 rounded-full mr-4" src="/img/jonathan.jpg" alt="Avatar of Jonathan Reinink">
                  <div class="text-sm">
                    <p class="text-gray-900 leading-none">Jonathan Reinink</p>
                    <p class="text-gray-600">Aug 18</p>
                  </div>
                </div> -->
              </div>
            </div>
            <div class="max-w-sm w-full lg:max-w-full lg:flex my-3 rounded-full">
                  <div class="card-img2 h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" title="Woman holding a mug">
                  </div>
                  <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <div class="mb-8">
                      <p class="text-sm text-gray-600 flex items-center">
                        <!-- <svg class="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                        </svg>
                        Members only -->
                      </p>
                      <div class="text-gray-900 font-bold text-xl mb-2">Sleeve Designs</div>
                      <p class="text-gray-700 text-base capitalize">flounce sleeve , butterfly sleeve , umbrella sleeve , straight sleeve with center , with piping & other demanded styles are available.</p>
                    </div>
                    <!-- <div class="flex items-center">
                      <img class="w-10 h-10 rounded-full mr-4" src="/img/jonathan.jpg" alt="Avatar of Jonathan Reinink">
                      <div class="text-sm">
                        <p class="text-gray-900 leading-none">Jonathan Reinink</p>
                        <p class="text-gray-600">Aug 18</p>
                      </div>
                    </div> -->
                  </div>
            </div>
        </div>
          <!-- <div class="max-w-sm w-full lg:max-w-full lg:flex">
              <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style="background-image: url('/img/card-left.jpg')" title="Woman holding a mug">
              </div>
              <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div class="mb-8">
                  <p class="text-sm text-gray-600 flex items-center">
                    <svg class="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                    </svg>
                    Members only
                  </p>
                  <div class="text-gray-900 font-bold text-xl mb-2">Can coffee make you a better developer?</div>
                  <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
                </div>
                <div class="flex items-center">
                  <img class="w-10 h-10 rounded-full mr-4" src="/img/jonathan.jpg" alt="Avatar of Jonathan Reinink">
                  <div class="text-sm">
                    <p class="text-gray-900 leading-none">Jonathan Reinink</p>
                    <p class="text-gray-600">Aug 18</p>
                  </div>
                </div>
              </div>
         </div>
          <div class="max-w-sm w-full lg:max-w-full lg:flex">
              <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style="background-image: url('/img/card-left.jpg')" title="Woman holding a mug">
              </div>
              <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div class="mb-8">
                  <p class="text-sm text-gray-600 flex items-center">
                    <svg class="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                    </svg>
                    Members only
                  </p>
                  <div class="text-gray-900 font-bold text-xl mb-2">Can coffee make you a better developer?</div>
                  <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
                </div>
                <div class="flex items-center">
                  <img class="w-10 h-10 rounded-full mr-4" src="/img/jonathan.jpg" alt="Avatar of Jonathan Reinink">
                  <div class="text-sm">
                    <p class="text-gray-900 leading-none">Jonathan Reinink</p>
                    <p class="text-gray-600">Aug 18</p>
                  </div>
                </div>
              </div>
         </div> -->
      </section>
      
      <section class="categories2 flex flex-col justify-center">
        <div class="max-w-2xl ml-auto pr-4">
            <div class="max-w-sm w-full lg:max-w-full lg:flex my-3 rounded-full">
              <div class="card-img3 h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"  title="Woman holding a mug">
              </div>
              <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div class="mb-8">
                  <p class="text-sm text-gray-600 flex items-center">
                    <!-- <svg class="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                    </svg>
                    Members only -->
                  </p>
                  <div class="text-gray-900 font-bold text-xl mb-2">Collar Designs</div>
                  <p class="text-gray-700 text-base capitalize">tshirt collar, long collar , round collar , sherwani collar , shawl collor , with or without piping & all other designs are available.</p>
                </div>
                <!-- <div class="flex items-center">
                  <img class="w-10 h-10 rounded-full mr-4" src="/img/jonathan.jpg" alt="Avatar of Jonathan Reinink">
                  <div class="text-sm">
                    <p class="text-gray-900 leading-none">Jonathan Reinink</p>
                    <p class="text-gray-600">Aug 18</p>
                  </div>
                </div> -->
              </div>
            </div>
         <div class="max-w-sm w-full lg:max-w-full lg:flex my-3 rounded-full">
              <div class="card-img4 h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" title="Woman holding a mug">
              </div>
              <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div class="mb-8">
                  <p class="text-sm text-gray-600 flex items-center">
                    <!-- <svg class="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                    </svg>
                    Members only -->
                  </p>
                  <div class="text-gray-900 font-bold text-xl mb-2">Trouser Designs</div>
                  <p class="text-gray-700 text-base">Umbrella , patyalla , capri , cigratte , pent & all other designs are available.</p>
                </div>
                <!-- <div class="flex items-center">
                  <img class="w-10 h-10 rounded-full mr-4" src="/img/jonathan.jpg" alt="Avatar of Jonathan Reinink">
                  <div class="text-sm">
                    <p class="text-gray-900 leading-none">Jonathan Reinink</p>
                    <p class="text-gray-600">Aug 18</p>
                  </div>
                </div> -->
              </div>
         </div>
        </div>
          <!-- <div class="max-w-sm w-full lg:max-w-full lg:flex">
              <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style="background-image: url('/img/card-left.jpg')" title="Woman holding a mug">
              </div>
              <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div class="mb-8">
                  <p class="text-sm text-gray-600 flex items-center">
                    <svg class="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                    </svg>
                    Members only
                  </p>
                  <div class="text-gray-900 font-bold text-xl mb-2">Can coffee make you a better developer?</div>
                  <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
                </div>
                <div class="flex items-center">
                  <img class="w-10 h-10 rounded-full mr-4" src="/img/jonathan.jpg" alt="Avatar of Jonathan Reinink">
                  <div class="text-sm">
                    <p class="text-gray-900 leading-none">Jonathan Reinink</p>
                    <p class="text-gray-600">Aug 18</p>
                  </div>
                </div>
              </div>
         </div>
          <div class="max-w-sm w-full lg:max-w-full lg:flex">
              <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style="background-image: url('/img/card-left.jpg')" title="Woman holding a mug">
              </div>
              <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div class="mb-8">
                  <p class="text-sm text-gray-600 flex items-center">
                    <svg class="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                    </svg>
                    Members only
                  </p>
                  <div class="text-gray-900 font-bold text-xl mb-2">Can coffee make you a better developer?</div>
                  <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
                </div>
                <div class="flex items-center">
                  <img class="w-10 h-10 rounded-full mr-4" src="/img/jonathan.jpg" alt="Avatar of Jonathan Reinink">
                  <div class="text-sm">
                    <p class="text-gray-900 leading-none">Jonathan Reinink</p>
                    <p class="text-gray-600">Aug 18</p>
                  </div>
                </div>
              </div>
         </div> -->
      </section>

      <FOOTER/>
  </div>
</template>

<script>

export default {
    name:'home',
    components:{
                  
                 
    },
    data(){
      return{
         formData:{
           name:null,
           email:null,
           phone:null,
           subject:null,
           message:null
         }
         
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
section.categories1{
  min-height: 100vh;
  background-image:url('../assets/clothes.jpg');
  background-position: center center;
  background-size:cover;
}

section.categories2{
  min-height: 100vh;
  background-image:url('../assets/clothes2.jpg');
  background-position: center center;
  background-size:cover;

}

.card-img1 {
  background-image: url('../assets/neck.jpg');
  background-position: center center;
  background-size: cover;
}
.card-img2 {
  background-image: url('../assets/sleeve.jpg');
  background-position: center center;
  background-size: cover;
}
.card-img3{
  background-image: url('../assets/colar.jpg');
  background-position: center center;
  background-size: cover;
}

.card-img4{
  background-image: url('../assets/trouser.jpg');
  background-position: center center;
  background-size: cover;
}
</style>