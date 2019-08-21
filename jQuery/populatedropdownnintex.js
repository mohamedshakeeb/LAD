//code for populate nintex dropdown curency values//
getData("https://intranet.louvreabudhabi.ae/sites/eServices/_api/web/lists/getbytitle('International_Currency_List')/items").then(function (res) {
foo = "0 - Not applicable";
$(".dropID option:contains(" + foo +")").remove();
for (var i = 0; i <res.d.results.length; i++) {
console.log("re",res.d.results[i].Title);
$(".dropID1").append("<option value='"+ res.d.results[i].Alphabetic_x0020_Code +"' data-nfchoicevalue='"+ res.d.results[i].Alphabetic_x0020_Code +"'>"+ res.d.results[i].Alphabetic_x0020_Code +"</option>");
                     


}
$(".dropID1").change(function(){
var dropVal=  $(".dropID1").val();
console.log("dv",dropVal);
$(".textDropClass").val(dropVal);
});                           
}, function (err) {
console.log('Error on disclaimer',err);
});
 
            
//end of code//
