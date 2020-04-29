<template>
  <div class="navbar">
     <nav class="flex items-center justify-between flex-wrap p-6">
            <div class="flex items-center flex-shrink-0 text-white mr-6">
                <img class="rounded-full mr-2" src="../assets/logo.png" style="background-color:var(--golden);" alt="" width="50" height="50">
                <span class="font-semibold text-xl tracking-tight">Ramazan Mubarak</span>
            </div>
            <div class="block lg:hidden">
                <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white" @click="isToggled = !isToggled">
                <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto" :class="{'hidden': !isToggled}">
                <div class="text-sm lg:flex-grow">
                <a href="#section-showcase" class="block mt-4 lg:inline-block lg:mt-0  text-gray-100 mr-4" :class="{'hover:bg-gray-700 rounded p-2 mr-0 font-bold text-center':isToggled}">
                   Home
                </a>
                 <a href="#section-calender" class="block mt-4 lg:inline-block lg:mt-0  text-gray-100 mr-4" :class="{'hover:bg-gray-700 rounded p-2 mr-0 font-bold text-center':isToggled}">
                   Calendar
                </a>
                <a href="#section-guidelines" class="block mt-4 lg:inline-block lg:mt-0  text-gray-100 mr-4" :class="{'hover:bg-gray-700 rounded p-2 mr-0 font-bold text-center':isToggled}">
                   Guidelines
                </a>
                <a href="#section-abstrain" class="block mt-4 lg:inline-block lg:mt-0  text-gray-100 mr-4" :class="{'hover:bg-gray-700 rounded p-2 mr-0 font-bold text-center':isToggled}">
                   Dont's
                </a>
                <a href="#section-prayers" class="block mt-4 lg:inline-block lg:mt-0  text-gray-100 mr-4" :class="{'hover:bg-gray-700 rounded p-2 mr-0 font-bold text-center':isToggled}">
                   Prayers
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
.navbar nav{
   background-color:var(--primary);
}

</style>