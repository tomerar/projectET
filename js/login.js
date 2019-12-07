var obj = { 0: { name: "John", age: 30, city: "New York" } };
var myJSON = JSON.stringify(obj);

console.log("what hepand")
$(document).ready(function () {
    console.log("ready!");
    choose_course() 
    choose_course_number()
    
    console.log("end!");
});


function choose_course() {
    var mySelect = $('#choose-course');
    $('#choose-info').on('click', function () {
        localStorage.setItem("course_allready_done",mySelect.selectpicker('val'))
        console.log(mySelect.selectpicker('val'));
        mySelect.selectpicker('refresh');
    });
    //reset btn
    $("#choose-reset-btn").on('click', function () {
        console.log("in the reset btn")
        mySelect.selectpicker('deselectAll');
    })

}
function choose_course_number() {
    var mySelect = $('#choose-course-number');
    $('#choose-info-number').on('click', function () {
        localStorage.setItem("course_number",mySelect.selectpicker('val'))
        console.log(mySelect.selectpicker('val'));
        mySelect.selectpicker('refresh');
    });
    //reset btn
    $("#choose-number-reset-btn").on('click', function () {
        console.log("in the reset btn")
        mySelect.selectpicker('deselectAll');
    })

}