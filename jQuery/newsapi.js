
function newsmethod() {

	getData("https://newsapi.org/v2/top-headlines?country=ae&apiKey=f050dab218334bcd89ebbbd4156bc60f").then(function(data){
		
		var news = [];
		var x ,i;
		$.each(data.articles, function (index, val) {
	
			news.push(val.title);
		    x = document.getElementById('news');
		   var i = 0;
	
			(function loop() {
				$("#news").html('<span>'+news[i].substr(0,70)+'...</span><span class="ress-readmore">Read More</span>');
				$("#news2").html('<span>'+news[i].substr(0,70)+'...</span><span class="ress-readmore">Read More</span>');

				if (++i < news.length) {
					setTimeout(loop, 10000);
				}
			})();
		});
	},  
	function(err){
	  		
		console.log('Error in Operation',err);
	});
};
