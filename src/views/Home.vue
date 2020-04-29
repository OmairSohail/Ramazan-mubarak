<template>
  <div class="home">
      
      <section class="showcase" id="section-showcase">
         <navbar/>
         <div class="heading-container flex flex-column items-center justify-center">
           <div class="headings">
            <h2 class="text-6xl font-bold text-gray-100 text-center">Ramazan Mubarak</h2>
            <h3 class="text-2xl font-bold text-gray-100 text-center">From Omair Sohail</h3>
           <today/>
           </div>
          
         </div>
      </section>
      <section class="calender" id="section-calender">
          <h2 class="text-4xl py-4 shadow-lg font-bold tracking-wider text-center text-gray-900">Ramazan Calender</h2> 
          <div class="ramazan-table p-4 flex flex-col justify-center">
        
              <table class="table-auto ">
                  <thead class="">
                    <tr class="text-gray-200" style="background-color:var(--primary);">
                      <th class="px-4 py-2">Day</th>
                      <th class="px-4 py-2">Iftar Time</th>
                      <th class="px-4 py-2">Sehr Time</th>
                      <th class="px-4 py-2">Date</th>
                      
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="t in times" :key="t.day" class="table-rows text-center text-xl">
                      <td class=" px-4 py-2">{{t.day}}</td>
                      <td class=" px-4 py-2">{{t.iftar}}</td>
                      <td class=" px-4 py-2">{{t.sehri}}</td>
                      <td class=" px-4 py-2">{{t.date}}</td>
                    </tr>
                  </tbody>
              </table>
    
                
              
              
          
                    
          </div>
      </section>
     <section class="guidelines" id="section-guidelines">
       <h2 class="text-5xl text-gray-100 font-bold antialiased tracking-wider text-center shadow-xl py-2">Ramazan Guidelines</h2>
       <div class="tidbids-container w-full py-4 px-8 grid gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div class="tidbids">
            <div class="max-w-sm rounded overflow-hidden shadow-2xl">    
                <div class="px-6 py-4 text-gray-400">
                  <div class="heading font-bold text-2xl mb-2"><i class="fas fa-quran px-2"></i>Read Quran Daily</div>
                  <p class="para text-xl">
                    “The month of ramadan in which was revealed the Quran, a guidance for mankind and clear proofs for guidance and the criterion.”<br>(2:185)
                    <br>
                     It is said that the angel Jibreel used to meet the Prophet (pbuh) every night in ramadan and study the Quran with him. The Prophet (pbuh) also told us that whoever reads a letter from the Quran will have a reward multiplied by 10. What better incentives and role models do we have for reading the Quran this month?!
                    Ramadan is the perfect opportunity for us to develop a routine, so why not make reading the Holy Quran part of our daily lifestyle choices and why not start in this month?
                  </p>
                </div>
              
            </div>
         </div>
          <div class="tidbids">
            <div class="max-w-sm rounded overflow-hidden shadow-lg ">    
                <div class="px-6 py-4 text-gray-400">
                  <div class="heading font-bold text-2xl mb-2"><i class="fas fa-praying-hands px-2"></i>Increase your remembrance of Allah</div>
                  <p class="para text-xl">
                    “O You who believe! Remember Allah with much remembrance”
                    {Surat Al-‘Aĥzāb33: Verse 41}
                    <br><br> 
                    
                    “In every day and every night, during the month of Ramadan, there are people to whom Allah grants freedom from the Fire, and there is for every Muslim a supplication which he can make and will be granted.” <br>(Ahmad and Ibn Majah)
                    <br>
                    The Prophet (pbuh) also informed us that there is a time this month where our duaa is accepted
                    
                  </p>
                </div>
              
            </div>
         </div>
          <div class="tidbids">
            <div class="max-w-sm rounded overflow-hidden shadow-lg">    
                <div class="px-6 py-4 text-gray-400">
                  <div class="heading font-bold text-2xl mb-2"><i class="fas fa-hand-holding-usd px-2"></i>Give extra charity</div>
                  <p class="para text-xl">
                    The Prophet PBUH said: <br>
                    “Shield yourselves from Hell fire even by giving half a date in charity”
                    <br>
                    The giving of charity is even more virtuous during Ramadan, a month in which the rewards for deeds are multiplied. The Prophet (pbuh) was the most generous person and even more generous during this month. 
                    In addition to your Zakaat (obligatory charity) you should find a way every day to help poors in these hard times. Feed a hungry child or family either by yourself or by donating to foundations like <a href="http://jdcwelfare.org/" class="hover:underline">JDC</a>; give away some of your clothes to needy people; or even help an elderly person cross the road.
                  </p>
                </div>
              
            </div>
         </div>
          <div class="tidbids">
            <div class="max-w-sm rounded overflow-hidden shadow-lg ">    
                <div class="px-6 py-4 text-gray-400">
                  <div class="heading font-bold text-2xl mb-2"><i class="fas fa-pray px-2"></i> Attend prayers at the Home</div>
                  <p class="para text-xl">
                    “Allah (swt) has made Ramadan fasting obligatory. I have made the night prayer (taraweh) sunnah. He who fasts and observes night prayers believing the virtues and seeking his reward from Allah (swt), He will be saved from his sins as a newborn baby.” (Nasai)
                    <br>
                    Praying alone in peace and quiet is great, while God does not want you to pray shoulder-to-shoulder with other Muslims in mosque in times of corona virus as it is too dangerous. God forbids that ,God sees your intentions even in your home.
                  </p>
                </div>
              
            </div>
         </div>
          <div class="tidbids">
            <div class="max-w-sm rounded overflow-hidden shadow-lg">    
                <div class="px-6 py-4 text-gray-400">
                  <div class="heading font-bold text-2xl mb-2"><i class="fas fa-laptop px-2"></i>Attend Islamic lectures and events Online</div>
                  <p class="para text-xl">
                 "Whoever travels a path in search of knowledge, Allah makes easy for him a path to Paradise."
                 <br>
                 [Sahih Muslim 2699, Grade: Sahih]
                 <br><br>
                    In lockdown , there is a great oppurtunity for listening <a href="https://www.youtube.com/results?search_query=dr+israr+ahmed+bayan+ul+quran" class="hover:underline">Bayan-ul-quran</a> and Different Lectures on islam
                    </p>
                </div>
              
            </div>
         </div>
          <div class="tidbids">
            <div class="max-w-sm rounded overflow-hidden shadow-lg ">    
                <div class="px-6 py-4 text-gray-400">
                  <div class="heading font-bold text-2xl mb-2"><i class="fas fa-star-and-crescent px-2"></i>Complete The Fasts</div>
                  <p class="para text-xl">
                    O you, who believe. Fasting is prescribed for you as it was prescribed for those before you, that you may become Al-Muttaqun (the pious). (Fasting) for a fixed number of days, but if any of you is ill or on a journey, the same number (should be made up) from other days. And as for those who can fast with difficulty, (i.e. an old man, etc.), they have (a choice either to fast or) to feed a poor person (for every day). But whoever does good of his own accord, it is better for him. And that you fast, it is better for you if only you know.” (Qur’an, 2:183-84)
                  </p>
                </div>
              
            </div>
         </div>
          <div class="tidbids">
            <div class="max-w-sm rounded overflow-hidden shadow-lg ">    
                <div class="px-6 py-4 text-gray-400">
                  <div class="heading font-bold text-2xl mb-2"><i class="far fa-star px-2"></i>Try To Get Taqwa</div>
                  <p class="para text-xl">
                   “O you who believe, fasting has been prescribed for you as it has been prescribed for people before you so that you attain Taqwa.” (2:183).
                   <br>
                   To attain ‘Taqwa’ is to become ‘God-fearing’ or ‘God-conscious’. Therefore, although ramadan can bring many benefits, it can be a time to improve relationships and it is also a reminder of those less fortunate, the specific purpose of this act has been clearly laid out and this is what should be at the forefront of our minds for us to achieve.
                  </p>
                </div>
              
            </div>
         </div>
          <div class="tidbids">
            <div class="max-w-sm rounded overflow-hidden shadow-lg ">    
                <div class="px-6 py-4 text-gray-400">
                  <div class="heading font-bold text-2xl mb-2"><i class="fas fa-sun px-2"></i>Seek Forgiveness</div>
                  <p class="para text-xl">
                    “The time between the five prayers, two consecutive Friday Prayers, and two consecutive Ramadan are expiations for all that has happened during that period, provided that one has avoided the grave (major) sins.” (Hadith, Muslim)
                    <br>
                    Ramadan is also a month of seeking the mercy and forgiveness of Allah (swt).

                    The period between one Ramadan and next, all of those sins committed and accumulated where we have wronged ourselves, these sins can be forgiven and we can ask Allah (swt) for his forgiveness and for a fresh page:
                  </p>
                </div>
              
            </div>
         </div>
       </div>
     </section>

     <section class="astrain" style="background-color:var(--golden);" id="section-abstrain">
      <h2 class="text-5xl font-bold antialiased tracking-wider text-center shadow-xl py-2 capitalize" style="color:var(--primary);"><i class="fas fa-ban px-2"></i>Dont</h2>
        <div class="tidbids-container w-full py-4 px-8 grid gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div class="tidbids">
            <div class="max-w-sm rounded overflow-hidden shadow-lg">    
                <div class="px-6 py-4 text-gray-400">
                  <div class="font-bold text-2xl mb-2"><i class="far fa-moon px-2"></i>Arguing over the Hilal or moonsighting</div>
                  <p class="para text-xl">
                   
                     Many Muslims spend hours arguing whether Ramadan started or ended based on which criteria, often with minimal knowledge of the topic. Don’t waste time arguing about this issue. Leave it to the experts. Instead, focus on starting your month on a strong footing. Set certain achievable goals for you and your family. Learn something that may benefit yourself and your community and avoid the unnecessary knowledge.
                  </p>
                </div>
              
            </div>
         </div>
          <div class="tidbids">
            <div class="max-w-sm rounded overflow-hidden shadow-lg ">    
                <div class="px-6 py-4 text-gray-400">
                  <div class="font-bold text-2xl mb-2"><i class="fas fa-hamburger px-2"></i>Overeating and indulging in food, drinks, and sweets.</div>
                  <p class="para text-xl">
                    Fasting should teach us self-control and discipline over our bodies and over what we consume. We should eat in moderation after breaking the fast and try to lose some weight. Focus on nutritious, not junk, fatty, or high calorie food. Eat local, seasonal, Halal, wholesome and green.

                    Learn how to cook and eat healthy. Exercise after Iftar. A brisk walk is good exercise even for 30 minutes every night.
                  </p>
                </div>
              
            </div>
         </div>
          <div class="tidbids">
            <div class="max-w-sm rounded overflow-hidden shadow-lg ">    
                <div class="px-6 py-4 text-gray-400">
                  <div class="font-bold text-2xl mb-2"><i class="far fa-hand-paper px-2"></i> Doing what is harmful</div>
                  <p class="para text-xl">
                   The concept of sin, or Haram, in Islam includes all what can harm self, family, community, or nature. In general, actions are permissible unless there is credible and corroborated evidence of otherwise. Intentional eating and drinking will definitely nullify the physical part of fasting, but there are other deeds and behaviors that will undermine the essence of fasting rendering the physical part meaningless.
                  </p>
                </div>
              
            </div>
         </div>
          <div class="tidbids">
            <div class="max-w-sm rounded overflow-hidden shadow-lg ">    
                <div class="px-6 py-4 text-gray-400">
                  <div class="font-bold text-2xl mb-2"><i class="fas fa-bug px-2"></i> Cheating, lying, backbiting, gossiping etc</div>
                  <p class="para text-xl">
                   Social media has made it easy to spread all kind of rumors and falsehoods. Quitting the pleasure of tasting food and water is the minimum of fasting, but what is more important is quitting what may ruin relationships and weaken ties within your family and the community. Those who lie and hurt other people while fasting gain nothing but thirst and hunger. Backstabbing, gossiping, and spreading falsehood is likened to the eating of flesh of a cadaver in the Quran.
                  </p>
                </div>
              
            </div>
         </div>
          <div class="tidbids">
            <div class="max-w-sm rounded overflow-hidden shadow-lg ">    
                <div class="px-6 py-4 text-gray-400">
                  <div class="font-bold text-2xl mb-2"><i class="fas fa-file-invoice-dollar px-2"></i>Increased consumption, waste, and overspending</div>
                  <p class="para text-xl">
                    Fasting is not an excuse for wasting too much food or overspending. If anything, it is a time for saving on your meals and spending on others’ meals. Feed the poor and the refugees, invite relatives and friends, but do not show off or compete in overspending. As it turns out, we waste an incredible amount of food - an estimated 27 percent of food available for consumption - and it happens at the supermarket, in restaurants, in cafeterias, and in our very own kitchens. 
                  </p>
                </div>
              
            </div>
         </div>
          <div class="tidbids">
            <div class="max-w-sm rounded overflow-hidden shadow-lg ">    
                <div class="px-6 py-4 text-gray-400">
                  <div class="font-bold text-2xl mb-2"><i class="fas fa-bed px-2"></i>Laziness and oversleeping</div>
                  <p class="para text-xl">
                   Fasting is not meant to disrupt work or change your circadian rhythm. Some people use fasting for not working, and they don’t feel motivated to perform their daily routines.Wasting time by watching TV, playing video games, and browsing social media. Social media has became the new addiction. We spend an average of four-and-a-half hours every day watching TV. Teenagers in the Pakistan devote about 10 hours and 39 minutes each day for sleep or to consume media , including our tablets, smartphones, personal computers, multimedia devices, video games, radios, DVDs, DVRs and TVs.
                  </p>
                </div>
              
            </div>
         </div>
          <div class="tidbids">
            <div class="max-w-sm rounded overflow-hidden shadow-lg ">    
                <div class="px-6 py-4 text-gray-400">
                  <div class="font-bold text-2xl mb-2"><i class="fas fa-hand-holding px-2"></i>Forgetting the poor</div>
                  <p class="para text-xl">
                   Ramadan is not an excuse for inviting the wealthy while ignoring the poor. One of the main purposes of fasting is to identify with those who don’t have the means to have three meals or even one meal daily. One billion people on earth suffer from hunger and about 50 million people in the US suffer from food insecurity- a five-fold jump since the late 1960s. When you plan Iftars, remember to invite those who are usually forgotten.Invite the less privileged among your family members, neighbors, and the refugees. Volunteer to feed the homeless in your city's soup kitchens. Make a plan to visit a few refugee families in Ramadan.
                  </p>
                </div>
              
            </div>
         </div>
          <div class="tidbids">
            <div class="max-w-sm rounded overflow-hidden shadow-lg ">    
                <div class="px-6 py-4 text-gray-400">
                  <div class="font-bold text-2xl mb-2"><i class="fas fa-book-open px-2"></i>Reading of the Quran without understanding</div>
                  <p class="para text-xl">
                   Like other Divine texts, it has to be comprehended before it can be implemented. Recent trends in Masjids and Islamic schools are to focus on recitation and memorization of the Quran at the expense of proper knowledge. Proper understanding requires mastery of the Arabic language, its grammar and metaphors, the reasons and purposes of certain verses, their historical context and order, how the Prophet and his Companions reacted to the revelation, and how they applied it in their lives. It is also important to know what is abrogated and what is not, what is general and what is specific, or what is termed the sciences of Quran.
                  </p>
                </div>
              
            </div>
         </div>
       </div>
     </section> 

     <section class="prayers" id="section-prayers">
        <h2 class="text-5xl font-bold antialiased tracking-wider text-center shadow-xl py-2 capitalize" style="color:var(--primary);">Prayers</h2>
        <h2 class="text-center text-5xl my-3">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</h2>
        <div class="dua-section grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 px-3 pb-2">
          <div class="dua-card p-4 rounded-lg text-center" style="background-color:var(--golden);">
                         <h2 class="text-xl font-bold">Commencement of Fast</h2>
                          <h2 class="text-lg font-bold">To be recited at the time of Dawn (Suhoor)</h2>
                          <div class="px-4"> 
                          <p class=" text-4xl">
                            وَبِصَوْمِ غَدٍ نَّوَيْتُ مِنْ شَهْرِ رَمَضَانَ.
                          </p>
                         
                          <p>
                           "I Intend to keep the fast for month of Ramadan"
                          </p>
                          </div>
          </div>
          <div class="dua-card p-4 rounded-lg text-center" style="background-color:var(--primary); color:var(--golden);">
                         <h2 class="text-xl font-bold">Opening of Fast</h2>
                          <h2 class="text-lg font-bold">To be recited at the time of Sunset (iftar)</h2>
                          <div class="px-4"> 
                          <p class=" text-4xl">
                          اللَّهُمَّ لَكَ صُمْتُ وَ عَلَى رِزْقِكَ أَفْطَرْتُ وَ عَلَيْكَ تَوَكَّلْتُ                            
                          </p>
                         
                          <p>
                           "O my Allah, for Thee, I fast, and with the food Thou gives me I break the fast, and I rely on Thee."
                          </p>
                          </div>
          </div>
           <div class="dua-card p-4 rounded-lg text-center" style="background-color:var(--primary); color:var(--golden);">
                         <h2 class="text-xl font-bold">Opening of Fast</h2>
                          <h2 class="text-lg font-bold">To be recited on breaking the fast (iftar)</h2>
                          <div class="px-4"> 
                          <p class=" text-4xl">
                            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ يَا وَاسِعَ الْمَغْفِرَةِ اغْفِرْ لِ
                          </p>
                         
                          <p>
                           "In the name of Allah, the Beneficient, the Merciful, O He whose indulgence is boundless, forgive me"
                          </p>
                          </div>
          </div>
          <div class="dua-card p-4 rounded-lg text-center" style="background-color:var(--golden);">
                         <h2 class="text-xl font-bold">Opening of Fast</h2>
                          <h2 class="text-lg font-bold">To be recited after breaking the fast (iftar)</h2>
                          <div class="px-4"> 
                          <p class="text-4xl">
                            ذَهَبَ الظَّمَأُ وَابْتَلَّتِ الْعُرُوقُ وَثَبَتَ الأَجْرُ إِنْ شَاءَ اللَّهُ
                          </p>
                         
                          <p>
                          "Thirst has gone, the arteries are moist, and the reward is sure, if Allah wills"                          </p>
                          </div>
          </div>
           <div class="dua-card p-4 rounded-lg text-center" style="background-color:var(--golden);">
                         <h2 class="text-xl font-bold">Last 10 Days of Ramazan</h2>
                          <h2 class="text-lg font-bold">To be recited on last 10 of ramazan</h2>
                          <div class="px-4"> 
                          <p class=" text-4xl">اللَّهُمَّ إِنَّكَ عَفُوٌ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي 
                          </p>
                         
                          <p>
                          "O Allah, You are Most Forgiving, and You love forgiveness; so forgive me  "                        </p>
                          </div>
          </div>
           <div class="dua-card p-4 rounded-lg text-center" style="background-color:var(--primary); color:var(--golden);">
                         <h2 class="text-xl font-bold">For The Best of Both World</h2>
                          <h2 class="text-lg font-bold">To be recited anytime</h2>
                          <div class="px-4"> 
                          <p class="text-4xl">
                            رَبَّنَا آتِنَا فِىْ الدُّنْيَا حَسَنَةً وَفِىْ الآخِرَةِ حَسَنَةً وَّقِنَا عَذَابَ النَّارِ
                          </p>
                         
                          <p>
                            "Our Lord! Give us in this world [that which is] good and in the Hereafter [that which is] good and protect us from the punishment of the Fire"
                          </p>
                          </div>
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
import today from '../components/today'
import timings from '../assets/timings.json'


export default {
    name:'home',
    components:{
      today,
       
    },
    data(){
      return{
         times:timings,
         
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

.calender{
  min-height:100vh;
  background-color:var(--golden);
}

.calender .ramazan-table {
}

.headings h2,h3{
 font-family: 'Kaushan Script', cursive;
}

.heading-container{
  height:80vh;
}

.table-rows
{
    box-shadow: -2px -2px 8px rgba(189, 151, 86,1),
                -2px -2px 12px rgba(189, 151, 86,0.5),
               inset 2px 2px 4px rgba(189, 151, 86,0.5),
               2px 2px 8px rgba(117, 71, 16,0.15);
}

.table-rows:hover{
  box-shadow: inset -2px -2px 8px rgba(189, 151, 86,1),
               inset -2px -2px 12px rgba(189, 151, 86,0.5),
               inset 2px 2px 4px rgba(189, 151, 86,0.5),
              inset  2px 2px 8px rgba(117, 71, 16,0.15);
}

.guidelines{
  background-color:var(--primary);
}



.guidelines .tidbids .heading{
  background-color:var(--golden);
  color:var(--primary);
  padding:1rem;
  border-radius: 10px;
}

.astrain .tidbids {
  background-color:var(--primary);
  border-radius: 15px;
}

section.prayers{
  min-height:100vh;
}

section.footer{
  min-height:30vh;
  background-color:var(--primary);
}
</style>