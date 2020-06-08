<template>
  <div class="FOOTER">
      <section class="footer text-custom2 px-8 py-8 flex flex-row items-center justify-center">
        <div class="footer-img">
          <img src="../assets/logo.png" alt="">
        </div>
        <div class="footer-content flex flex-row justify-around w-full  ml-16">
          <ul class="mx-3">
            <li class="font-bold text-lg">Quick LInks</li>
            <li><router-link to="/Services" class="hover:text-gray-600">Services</router-link></li>
            <li><router-link to="/about" class="hover:text-gray-600">About</router-link></li>
            <li><router-link to="/contact" class="hover:text-gray-600">Contact</router-link></li>
          </ul>

          <ul class="mx-3">
            <li class="font-bold text-lg">Contact Us</li>
            <li>Phone : 03098384323</li>
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
   name:'FOOTER'
}
</script>

<style>

</style>