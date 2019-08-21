function NamazTimes () {
	
	getData("https://api.aladhan.com/timingsByAddress/currentDate?address=AE").then(function (data) {        
        var fajr,dhuhr,asr,maghrib,isha,timings,fajr1,dhuhr1,asr1,maghrib1,isha1, fajr2,dhuhr2,asr2,maghrib2,isha2,
        fajrdata,dhuhrdata,asrdata,maghribdata,ishadata,sunsetdata,sunrisedata,H2,h2,ampm,h3,H3,H4,H5,h4,h5,hh,mm,sunrise,sunset;
        var prayer =['Fajr','Dhuhr','Asr','Maghrib','Isha','Sunrise','Sunset'];
        
		
		timings=data.data.timings
		//console.log(timings);
		fajrdata = timings.Fajr;
		dhuhrdata = timings.Dhuhr;
		asrdata = timings.Asr;
		maghribdata = timings.Maghrib;
		ishadata = timings.Isha; 
		sunsetdata = timings.Sunset;
		sunrisedata = timings.Sunrise; 
		
		//Methid to convert 24 hr format to 12 hr for asr prayer//
		H2 = +asrdata .substr(0, 2);
		h2 = (H2 % 12) || 12;
		ampm = H2 < 12 ? "AM" : "PM";
		asrdata = h2 + asrdata .substr(2, 3) + ampm;
		
		//Methid to convert 24 hr format to 12 hr for maghrib prayer//
		
		H3 = +maghribdata.substr(0, 2);
		h3 = (H3 % 12) || 12;
		ampm = H3 < 12 ? "AM" : "PM";
		maghribdata = h3 + maghribdata.substr(2, 3) + ampm;
		
		//Methid to convert 24 hr format to 12 hr for isha prayer//
		H4 = +ishadata.substr(0, 2);
		h4 = (H4 % 12) || 12;
		ampm = H4 < 12 ? "AM" : "PM";
		ishadata = h4 + ishadata.substr(2, 3) + ampm;
		
		//Methid to convert 24 hr format to 12 hr for sunset prayer//
		
		H5 = +sunsetdata .substr(0, 2);
		h5 = (H5 % 12) || 12;
		ampm = H5 < 12 ? "AM" : "PM";
		sunsetdata = h5 + sunsetdata.substr(2, 3) + ampm;
		var timing = ['04:29AM','12:28PM','03:45PM','07:15PM','08:26PM','05:41AM','07:15PM'];
		$.each(prayer, function(i,val){//console.log(val);
		$(".td1").append('<tr><td>'+val+'</td></tr>');
	
		});
		$.each(timing, function(index,val2){
		$(".td2").append('<tr><td>'+val2+'</td></tr>');
		});
		

		$("#dropfajr").text(fajrdata+"AM");
		$("#dropsunrise").text(sunrisedata+"AM");
		$("#dropdhuhr").text(dhuhrdata+"PM");
		$("#dropasr").text(asrdata);
		$("#dropmaghrib").text(maghribdata);
		$("#dropisha").text(ishadata);
		$("#dropsunset").text(sunsetdata);
		
	    hh = new Date().getHours();
	    mm = new Date().getMinutes();
		
		fajr=timings.Fajr;
	    sunrise = timings.Sunrise;
	    sunset = timings.Sunset;
		
		fajr1 = fajr.substring(0,2);
		fajr2 = fajr.substring(3,5);
		
		dhuhr=timings.Dhuhr;
		dhuhr1=dhuhr.substring(0,2);
		dhuhr2=dhuhr.substring(3,5);
		asr=timings.Asr;
		asr1=asr.substring(0,2);
		asr2=asr.substring(3,5);
		maghrib=timings.Maghrib;
		maghrib1=maghrib.substring(0,2);
		maghrib2=maghrib.substring(3,5);
		isha=timings.Isha;
		isha1=isha.substring(0,2);
		isha2=isha.substring(3,5);
		
		//var arr = [isha, maghrib, asr ,dhuhr,fajr];
		var arrdata = [ishadata,maghribdata,asrdata,dhuhrdata,fajrdata];
		var arr1 = [isha1, maghrib1, asr1 ,dhuhr1,fajr1];
		var arrM = [isha2, maghrib2, asr2 ,dhuhr2,fajr2];
		if((hh <= arr1[0])&&(hh > arr1[1])) { 
			if(mm <= arrM[0]) {
				$("#prayer,#prayer1").html("UPCOMING PRAYER - ISHA:" +arrdata[0]);
			}
			else {
				$("#prayer,#prayer1").html("UPCOMING PRAYER - FAJR:" +arrdata[4]);
				$("#sunrise,#sunrise").text("Sunrise: "+sunrise);
			}    
		}
		if((hh <= arr1[1])&&(hh > arr1[2])) { 
			if(mm <= arrM[1]) {
				$("#prayer,#prayer1").html("UPCOMING PRAYER - MAGHRIB:" +arrdata[1]);
				$("#sunset,#sunset1").html("Sunset: "+sunset);
		    } else {
		    	$("#prayer,#prayer1").html("UPCOMING PRAYER - ISHA:" +arrdata[0]);}    
			}
			
			if((hh <= arr1[2])&&(hh > arr1[3])) { 
				if(mm <= arrM[2]) {
				$("#prayer,#prayer1").html("UPCOMING PRAYER - ASR:" +arrdata[2]);
			} else {
				$("#prayer,#prayer1").html("UPCOMING PRAYER - MAGHRIB:" +arrdata[1]);
				$("#sunset,#sunset").html("Sunset: "+sunset);
			}         
		}
		
		if((hh <= arr1[3])&&(hh > arr1[4])) { 
			if(mm <= arrM[2]) {
				$("#prayer,#prayer1").html("UPCOMING PRAYER - DHUHR:" +arrdata[3]);
				$("#sunrise,#sunrise1").html("Sunrise: "+sunrise);
			} else {
				$("#prayer,#prayer1").html("UPCOMING PRAYER - ASR: "+arrdata[2]);
				// $("#sunrise,#sunrise1").html("Sunrise: "+sunrise);
			}      
		}
		
		if((hh <= arr1[4])||(hh > arr1[0])) { 
			if(mm <= arrM[4]) {
				$("#prayer,#prayer1").html("UPCOMING PRAYER - FAJR: "+arrdata[4]);
				$("#sunrise").html(sunrise);
				$("#sunrise1,#sunrise").html("Sunrise: "+sunrise);
			}
			else {
				$("#prayer,#prayer1").html("UPCOMING PRAYER - DHUHR:" +arrdata[3]);
			}               
		}
	}, function (err) {
	     console.log("Error in getting prayer time", err);
	});
};
