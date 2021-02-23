var today = new Date();
var houreNow = today.getHours();
var greeting;
if (houreNow>18){
    greeting = 'Good evening!';
}else if (houreNow<12){
    greeting = 'Good afternoon!';
}else if (houreNow>0){
    greeting = 'good morning!';
}else {
    greeting = 'welcome!'
}
document.write('<h3>' + greeting + '</h3>');

