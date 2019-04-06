//Executes when page loads and it's ready to view
var step = 0;

var titles = [
  'Prepare for take-off', // this is 0 titles[0]
  'Put seat belt on', // this is 1 titles[1]
  'Turn on the engines', // this is 2
  'Turn the lights on', // this is 3
  'Press go!' //this is 4
  ];

$(function(){
  $("#stepinfo, section, footer, .prev").hide();
});

// We use the start button to begin our tutorial
$('.start').on('click',function(){
  //do stuff when the button is clicked
  $('.intro').hide();
  //$('.start').hide();
  $('footer, #stepinfo').show();
  step = 1;

  $('#step'+step).show();
  //f(x) = x + 2
  // Set the title for our current step
  $('#stepinfo').text('Step '+step+': '+titles[step-1]);
  //$('#stepinfo').text(step + step);
});
// Next to advance each slide
$('.next').on('click',function(){
  // make the change only if we are under our number of steps
  $('#step'+step).hide();
  step++;
  if(step == 2) {
    $('.prev').show();
  }
  if(step == 5){
    $('.next').hide();
  }
  if(step <= 5) {
    $('#step'+step).show();
    $('#stepinfo').text('Step '+step+': '+ titles[step-1]);
  } else {
    step--;
    $('#step'+step).show();
  }

});



//Previous
$('.prev').on('click',function(){
  // make the change only if we are under our number of steps
  $('#step'+step).hide();
  step--;
  if(step == 1) {
    $('.prev').hide();
  } else {
    $('.next').show();
  }
  if(step >= 1) {
    $('#step'+step).show();
    $('#stepinfo').text('Step '+step+': '+ titles[step-1]);
  } else {
    step--;
    $('#step'+step).show();
  }

});
