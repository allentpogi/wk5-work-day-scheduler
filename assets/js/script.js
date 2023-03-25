// Get today's date and display
var todayDate = dayjs().format('dddd, MMM DD YYYY');
$("#currentDay").html(todayDate);

//wrap the functions in $(document).ready so to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {
    // Event listener for save button 
    $(".saveBtn").on("click", function () {

        // Get the value from the text area and also the id of the div to save
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // Save id of the time block and the value in text area
        localStorage.setItem(time, text);

    })
   
    //function to update the colours of the time blocks
    function updateTimeBlocks() {
        //get the time only from today's date
        var timeNow = dayjs().hour();
        console.log('time now',timeNow)

        // loop over time blocks yes!
        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("hour-")[1]);
            console.log('blocktime', blockTime)

            // Compare the time in the timeblock against the current time and set the CSS accordingly
            if (blockTime < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === timeNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }

    // Get saved values from local storage
    $("#hour-8 .description").val(localStorage.getItem("hour-8"));
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));

    updateTimeBlocks();
})
