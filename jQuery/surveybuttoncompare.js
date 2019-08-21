function surveyBtn()
{
var accountname=$("#"+currentUser).val();
var Usermanager= $("#"+manager).val();
//alert(Usermanager);
if(accountname==Usermanager)
{
$("#"+submitStatus).val('ManagerSubmitted');
}
else
{
$("#"+submitStatus).val('Submitted');
}
};