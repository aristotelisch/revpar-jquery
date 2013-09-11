
// Caclulate  revpar
var revpar = function(occupancy, adr) {
  return ((occupancy/100) * adr).toFixed(2);
};

var  revparUpdate = function(){
  var occupancy = +$('#occupancy').val();
  var adr       = +$('#adr').val();
  $('#revpar').val(revpar(occupancy, adr));
};


$(document).ready(function(){
  // When a key is pressed check for the occupancy value and adr 
  $('#occupancy').on('keyup', function(){
    var occupancy = +$(this).val();
    var adr       = +$('#adr').val();
    $('#revpar').val(revpar(occupancy, adr));
  });
  $('#adr').on('keyup', function(){
    var occupancy = +$('#occupancy').val();
    var adr       = +$(this).val();  
    $('#revpar').val(revpar(occupancy, adr));

  });

  $('#slider1').on('slidechange', revparUpdate);

  $('#slider2').on('slidechange', revparUpdate);
});
