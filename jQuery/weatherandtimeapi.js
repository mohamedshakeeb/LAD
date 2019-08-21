function CurentTime() {

	var months, days,now,year1,thismonth,dayName,year,month1,month,day1,day,date,newday,tempreture,desc,result,finall;
	
	months    = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
	days = new Array(7);
        days[0] = "Sun";
        days[1] = "Mon";
        days[2] = "Tue";
        days[3] = "Wed";
        days[4] = "Thu";
        days[5] = "Fri";
        days[6] = "Sat";
	
	    now = new Date();
	    year1 = now.getFullYear();
	    thisMonth = months[now.getMonth()];
	    dayName = days[now.getDay()];
	    year =year1.toString();
	    month1 =now.getMonth()+1;
	    month= month1.toString();
	    day1 = now.getDate();
	    day= day1.toString();
	    date = year+" " + month+" " + day;
  	
  	if(day < 10) {
		var newday = "0"+day;
		document.getElementById("numericday").innerHTML = newday;
		
	} else
		document.getElementById("numericday").innerHTML = day;
		
		$(".ress-day").append('<span id="day">'+dayName+'</span><span id="year">'+thisMonth+' '+year+'</span>');
		
	//document.getElementById("day").innerHTML = dayName;
	//document.getElementById("year").innerHTML = thisMonth;
	//document.getElementById("yearinnumber").innerHTML = year;
			
	getData("https://api.openweathermap.org/data/2.5/weather?q=Dubai&units=imperial&appid=ab85ba57bbbb423fb62bfb8201126ede").then(function (data) {
		
		$.each(data.main, function (index, val) {
	   		 tempreture = data.main.temp;
			 desc = data.weather[0].description;
			 result = (tempreture - 32)*5/9;
			 finall = Math.round(result);
			
			$("#weather").text(finall);
			$("#weatherdesc").text(desc);
			$("#weather2").text(finall);
			$("#weatherdesc2").text(desc);
		});
	}, function (err) {
		console.log('Error in Operation');
	});
};
