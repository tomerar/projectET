var obj = {0:{ name: "John", age: 30, city: "New York" }};
var myJSON = JSON.stringify(obj);

console.log("what hepand")
$(document).ready(function() {
    console.log( "ready!" );
    // select the dropdown multi pic
    var mySelect = $('#first-disabled2');
    $('#choose-info').on('click', function () {
    console.log($('.selectpicker').selectpicker('val'));
    mySelect.selectpicker('refresh');
    });
    console.log( "end!" );
});
