<template>
<div class="Contact">
  <navbar/>
  <div class="contactus-showcase flex flex-cols justify-center items-center">
    <div class="image">
      <img src="../assets/contactus2.svg" alt="">
    </div>
    <div class="content ml-12">
      <p class="text-2xl ">Contact Us</p>
      <p>Mail Us Your Orders and Queries at </p>
      <a href="mailto: CasualStiches@gmail.com">CasualStiches@gmail.com</a>
    </div>
  </div>
  <FOOTER/>
</div>
</template>


<script>

export default {
    name:'Contact',
    
}
</script>

<style scoped>
.contactus-showcase{
  min-height:80vh;
}

.image{
  width:400px;
  /* height:200px; */
}
</style>