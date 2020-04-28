<template>
  
     <div class="today bg-white rounded-lg p-6">
        <h2 class="text-xl text-center"><i class="fas fa-moon fa-2x"></i>{{iftarorsehr}} Timing for today</h2>
        <div class="mt-4">
            <div class="flex flex-row items-center justify-between mb-3">
                <p class="text-xl font-bold tracking-widest inline-block">{{date}}</p>
                <digital-clock :blink="false" :displaySeconds="true" :twelveHour="true" class="text-xl font-bold tracking-widest"/>
            </div>
            <hr>
            <p v-if="!fastpast" class="text-xl text-center p-4 rounded uppercase font-bold" style="background-color:var(--primary); color:var(--golden)">Iftar Time : {{todayRoza()}}</p>
            <p v-if="fastpast" class="text-xl text-center p-4 rounded uppercase font-bold" style="background-color:var(--primary); color:var(--golden)">Sehr Time : {{sehrtime()}}</p>
       </div>
    </div>
  
</template>

<script>
import DigitalClock from "vue-digital-clock";
import timings from '../assets/timings.json';
export default {
    name:'today',
    components:{
        DigitalClock
    },
    data(){
        return{
            date:new Date().toDateString(),
            nextdate:null,
            times:timings,
            fastpast:false,
            iftarorsehr:'iftar'
        }
    },
    computed:{
        fast(){
            const todayDate = new Date();
            var day = todayDate.getDate();
            var month = todayDate.getMonth();
            var year = todayDate.getFullYear();
            
            if(month === 3)
            {
              month = 'april'
            }
            if(month == 4)
            {
              month = 'may'
            }
            
            return `${day} ${month} ${year}`
        },
    },
    methods:{
        todayRoza()
        {
            var value = this.times.filter(x => x.date == this.fast)
            
                var date = new Date();
                var h = date.getHours(); // 0 - 23
                var m = date.getMinutes(); // 0 - 59
                var s = date.getSeconds(); // 0 - 59
                var session = "AM";
                
                if(h == 0){
                    h = 12;
                }
                
                if(h > 12){
                    h = h - 12;
                    session = "PM";
                }
                
                h = (h < 10) ? "0" + h : h;
                m = (m < 10) ? "0" + m : m;
                s = (s < 10) ? "0" + s : s;
                
                var time = h + ":" + m + ":" + s + " " + session;
                
                var iftartime1 = value[0].iftar.split(' ');
                var midday = iftartime1[1];
                var iftartime2 = iftartime1[0].split(':');
                var iftarhours = 0 + iftartime2[0];
                var iftarminutes = iftartime2[1];
               
                if(h > iftarhours && session == midday)
                {
                   
                     this.fastpast = true;
                     this.iftarorsehr = 'sehr'
                     const tday = new Date();
                     tday.setDate(new Date().getDate()+1);
                     this.date = tday.toDateString();
                    
                }
                 
            return value[0].iftar;
        },
        sehrtime()
        {    if(this.fastpast)
             {
               var valid = new Date(this.fast)
               valid.setDate(new Date().getDate()+1)
              

                var day = valid.getDate();
                var month = valid.getMonth();
                var year = valid.getFullYear();
                
                if(month === 3)
                {
                month = 'april'
                }
                if(month == 4)
                {
                month = 'may'
                }
                
               const dstring =  `${day} ${month} ${year}`;
               var shr = this.times.filter(x => x.date == dstring)
               return shr[0].sehri;
             }
              else{
               var shr = this.times.filter(x => x.date == this.fast)
               return shr[0].sehri; 
             }
            
            
        }

    }
   
}
</script>

<style>

</style>