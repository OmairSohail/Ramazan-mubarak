<template>
  <div class="navbar">
     <nav class="flex items-center bg-gray-100 border-b-2 border-custom1 justify-between flex-wrap p-6">
            <div class="flex items-center flex-shrink-0 text-white mr-6">
                <img class="mr-2" src="../assets/logo.png" style="" alt="" width="100" height="50">       
            </div>
            <div class="block lg:hidden">
                <button class="flex items-center px-3 py-2 border rounded text-custom1 border-custom1 hover:border-custom2" @click="isToggled = !isToggled">
                <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                <!-- <img src="../assets/cross.png" alt="" width="20" height="20"> -->
                </button>
            </div>
            <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto" :class="{'hidden': !isToggled}">
                <div class="navbar-nav text-md lg:flex-grow">
                <a href="#section-showcase" class="block mt-4 lg:inline-block lg:mt-0  text-custom2 mr-4" :class="{'hover:bg-custom1 rounded p-2 mr-0 font-bold text-center':isToggled}">
                   Home
                </a>
                 <a href="#section-calender" class="block mt-4 lg:inline-block lg:mt-0  text-custom2 mr-4" :class="{'hover:bg-custom1 rounded p-2 mr-0 font-bold text-center':isToggled}">
                   Services
                </a>
                <a href="#section-guidelines" class="block mt-4 lg:inline-block lg:mt-0  text-custom2 mr-4" :class="{'hover:bg-custom1 rounded p-2 mr-0 font-bold text-center':isToggled}">
                   Schedule
                </a>
                <a href="#section-abstrain" class="block mt-4 lg:inline-block lg:mt-0  text-custom2 mr-4" :class="{'hover:bg-custom1 rounded p-2 mr-0 font-bold text-center':isToggled}">
                   About
                </a>
                <a href="#section-prayers" class="block mt-4 lg:inline-block lg:mt-0  text-custom2 mr-4" :class="{'hover:bg-custom1 rounded p-2 mr-0 font-bold text-center':isToggled}">
                   Contact
                </a>
                </div>
                
            </div>
    </nav>
  </div>
</template>

<script>
export default {
    name:'navbar',
    data(){
       return{
          isToggled:false
       }
    }
}
</script>

<style>
.navbar{
   z-index:10000;
}

.navbar nav{
   
}

</style>