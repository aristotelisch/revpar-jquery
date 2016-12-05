// a global object for the revpar functionality
var RP = {
  setup: function(){
    // When a key is pressed check for the occupancy value and adr 
    $('#occupancy').on('keyup', RP.occupancyUpdate);
    $('#adr').on('keyup', RP.adrUpdate);
    $(RP.slider1);
    $(RP.slider2);
    $('#slider1').on('slidechange', RP.revparUpdate);
    $('#slider2').on('slidechange',RP.revparUpdate);
  },
  revpar: function(occupancy, adr) {
    return ((occupancy/100) * adr).toFixed(2);
  },
  occupancyUpdate: function(){
    var occupancy = +$(this).val();
    var adr       = +$('#adr').val();
    $('#revpar').val(RP.revpar(occupancy, adr));
  },
  adrUpdate: function(){
    var occupancy = +$('#occupancy').val();
    var adr       = +$(this).val();  
    $('#revpar').val(RP.revpar(occupancy, adr));
  },
  revparUpdate: function(){
    var occupancy = +$('#occupancy').val();
    var adr       = +$('#adr').val();
    $('#revpar').val(RP.revpar(occupancy, adr));
  },
  slider1: function() {
    $( "#slider1" ).slider({
      orientation: "vertical",
    range: "min",
    min: 0,
    max: 150,
    value: 60,
    slide: function( event, ui ) {
      $( "#occupancy" ).val( ui.value );
    }
    });
    $( "#occupancy" ).val( $( "#slider1" ).slider( "value" ) );
  },
  slider2: function() {
    $( "#slider2" ).slider({
      orientation: "vertical",
    range: "min",
    min: 0,
    max: 500,
    value: 60,
    slide: function( event, ui ) {
      $( "#adr" ).val( ui.value );
    }
    });
    $( "#adr" ).val( $( "#slider2" ).slider( "value" ) );
  }
};
// Caclulate  revpar
$(RP.setup);
