//jshint esversion:6
module.exports=getDay;
function getDay(){
var today=new Date();
var curDay=today.getDay();

var option={  
   weakday: "long",
   day:"numeric",
month: "short",
};
var day=today.toLocaleString("en-GB", option);

return day;

}
