$(document).ready(function(){

var today = new Date();
  var year1 = today.getFullYear();
  var year =year1.toString();
  var month1 =today.getMonth()+1;
  var month= month1.toString();
  var day1 = today.getDate();
  var day= day1.toString();
  var date =year + month + day;
  var hours = today.getHours();
  var hour = hours.toString();
  var minutes= today.getMinutes();
  var minute = minutes.toString();
  var seconds = today.getSeconds();
  var second = seconds.toString();
var time = hour + minute + second; 
var RefNo = "TRF-" + date + time;

$(".cntrl_Reference").val(RefNo);
