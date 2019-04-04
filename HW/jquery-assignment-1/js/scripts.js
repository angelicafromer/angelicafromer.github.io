
//when page loads

var step = 0;
var titles = ['Prepare Ingredients. Preheat the oven to 350 F.',
'In a large bowl, mix butter with the sugars until well-combined',
'Stir in vanilla and egg then add the flour, baking soda, salt and chocolate chips!',
'Scoop out 1.5 tablespoons of dough and place on greased baking sheet',
'Bake for 7-10 minutes, let cool, enjoy!'
];
$(function(){
$("#stepinfo, section, footer, .prev").hide();
});
$('.start').on('click', function(){
  //do something when something is clicked
  $(".intro, .start").hide();
  $('footer, #stepinfo').show();
  step = 1;
  $('#step'+step).show();
  //f(x)=x+2
  //set title for current step
$('#stepinfo').text('Step'+step+': '+titles[step-1]);
});

$('.next').on('click',function(){
$('#step'+step).hide();
step++;
if(step == 2) {
$(".prev").show();
}
if (step == 5){
$(".next").hide();
}
if(step <= 5) {
  $('#step'+step).show();
  $('#stepinfo').text('Step'+step+': '+titles[step-1]);
} else {
  step--;
$('#step'+step).show();
$('.next').hide();

}
});

//Previous
$('.prev').on('click',function(){
  //make change only if we are under number
$('#step'+step).hide();
step--;
if(step == 1) {
$(".prev").hide();
} else {
  $(".next").show();

}
if (step == 5){
$(".next").hide();
}
if(step >= 1) {
  $('#step'+step).show();
  $('#stepinfo').text('Step'+step+': '+titles[step-1]);
} else {
  step--;
$('#step'+step).show();
$('.next').hide();
}

});
