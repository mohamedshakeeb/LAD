var site = window.location.href;
console.log(site);	
 //document.getElementById("demo2").innerHTML = site;
var res = site.substr(112, 116);
console.log(res);
 $(".cntrl_sample").val(res);

