<template>
  <div class="Services">
      <navbar/>
      <div class="bg-indigo-900 text-center py-4 lg:px-4">
        <div class="p-2 bg-indigo-800 items-center text-indigo-100 leading-none rounded-full flex inline-flex" role="alert">
          <span class="font-semibold text-center px-4 py-2 flex-auto">Our Services</span>
        </div>
      </div>
      <section class="services grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div class="max-w-sm mx-auto rounded m-4 overflow-hidden shadow-lg flex flex-col items-center">
            <img class="w-full card-img" src="../assets/neck.png" alt="Neck Design">
            <div class="px-6 py-4 text-center">
              <div class="font-bold text-xl mb-2">Neck Design Stiching</div>
              <p class="text-gray-700 text-base">
                Halter Neck , Simple Neck , Pattern Designs With Buttons , With And Without Piping & All Kinds Of Neck Designs Are Available.
              </p>
            </div>
        </div>
        <div class="max-w-sm mx-auto rounded m-4 overflow-hidden shadow-lg flex flex-col items-center">
            <img class="w-full card-img" src="../assets/collar.png" alt="Collar Design">
            <div class="px-6 py-4 text-center">
              <div class="font-bold text-xl mb-2">Collar Design Stiching</div>
              <p class="text-gray-700 text-base">
            Tshirt Collar, Long Collar , Round Collar , Sherwani Collar , Shawl Collor , With Or Without Piping & All Other Designs Are Available.              </p>
            </div>
        </div>
        <div class="max-w-sm mx-auto rounded m-4 overflow-hidden shadow-lg flex flex-col items-center">
            <img class="w-full card-img" src="../assets/long-sleeve.png" alt="Sleeves Design">
            <div class="px-6 py-4 text-center">
              <div class="font-bold text-xl mb-2">Sleeves Design Stiching</div>
              <p class="text-gray-700 text-base">
                Flounce Sleeve , Butterfly Sleeve , Umbrella Sleeve , Straight Sleeve With Center , With Piping & Other Demanded Styles Are Available.
              </p>
            </div>
        </div>
         <div class="max-w-sm mx-auto rounded m-4 overflow-hidden shadow-lg flex flex-col items-center">
            <img class="w-full card-img" src="../assets/trousers.png" alt="Sleeves Design">
            <div class="px-6 py-4 text-center">
              <div class="font-bold text-xl mb-2">Trousers Design Stiching</div>
              <p class="text-gray-700 text-base">
                Flounce Sleeve , Butterfly Sleeve , Umbrella Sleeve , Straight Sleeve With Center , With Piping & Other Demanded Styles Are Available.
              </p>
            </div>
        </div>
      </section>
      <div class="bg-custom1 text-center py-4 lg:px-4">
        <div class="p-2 bg-custom2 items-center text-indigo-100 leading-none rounded-full flex inline-flex" role="alert">
          <span class="font-semibold text-center px-4 py-2 flex-auto">We Are ...</span>
        </div>
      </div>
      <section class="info grid col-gap-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
        <div class="section-image col-span-1 mx-auto my-auto">
           <img src="../assets/sewing-machine.jpg" alt="">
        </div>
        <div class="section-content col-span-2  my-auto ">
            <h2 class="font-semibold text-3xl text-custom2 mb-5">Homemade Sewing Service</h2>
            <p class="text-base text-gray-800">At Casual Stiches, we have tailored our livelihoods on Altering and Tailoring people’s clothing into works of art. Our Company is Home based alteration company focusing exclusively on altering garments for women. Our tailors have significant experience transforming a wide range of fabrics and garments, We care how you look and would love to build a relationship with you as your trusted source for all your alteration needs. From the simple to the complex we’ve experienced it all and can assist you every step of the way. No job is too small or too big for our knowledgeable staff. We’ve happily done it all for over 15 years now! There is a big difference between a seamstress or tailor who can simply perform an alteration for you and an experienced, skilled, and professionally trained seamstress or tailor who can guide you on proper garment fit. </p>
        </div>
      </section>

      <FOOTER/>
  </div>
</template>

<script>
export default {
   name:'Services'
}
</script>

<style>
section.services{
  width:100%;
  min-height:80vh;
}

section.services .card-img{
  width:250px;
}

section.info{
  width:100%;
  min-height:80vh;
}
</style>