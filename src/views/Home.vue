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

      <!-- <section class="consultation grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 items-center justify-center">
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
                <textarea name="" id="" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" rows="5" placeholder="Your Message"></textarea>
                
              </div>
            </div>
             <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-full px-3 mb-6 md:mb-0">
                 <button class="px-8 py-2 bg-custom1 float-right bg-custom1 text-custom2 font-semibold transition-transform duration-300 ease-out transform hover:scale-95">Submit</button>
              </div>
             
            </div>
          </form>
         </div>
      </section> -->

      <section class="categories1 flex flex-col justify-center" id="services">
        <div class="max-w-2xl pl-4">
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

      <section class="footer text-custom2 px-8 py-8 flex flex-row items-center justify-center">
        <div class="footer-img">
          <img src="../assets/logo.png" alt="">
        </div>
        <div class="footer-content flex flex-row justify-around w-full  ml-16">
          <ul class="mx-3">
            <li class="font-bold text-lg">Quick LInks</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>

          <ul class="mx-3">
            <li class="font-bold text-lg">Contact Us</li>
            <li>Address : Gulistan-e-Johar , Block-17 , Noman Grand City , C-34</li>
            <li>Phone : 03204175870</li>
            <li>Email : casualstiches@gmail.com</li>
          </ul>
        </div>
      </section>
      <section class="copyrights bg-gray-900 text-gray-200 p-4">
         <p class="text-center">© Casual Stiches , All Rights Reserved 2020</p>
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