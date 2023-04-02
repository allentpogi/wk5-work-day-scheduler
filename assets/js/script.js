// Get today's date and display
var dateToday = dayjs().format('dddd, MMM DD YYYY');
$("#currentDay").html(dateToday);

//wrap the functions in $(document).ready so to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {
    // Event listener for save button 
    $(".saveBtn").on("click", function (event) {

        // Get the value from the text area and also the id of the div to save
        var element = event.target

        var task = $(element).siblings(".description").val();
        var timeOfday = $(element).parent().attr("id");

        // Save id of the time block and the value in text area
        localStorage.setItem(timeOfday, task);

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

    var timeInt = 8

    $("textarea").each(function(i) {
        this.textContent = localStorage.getItem("hour-" + timeInt);
        timeInt++
    });


    updateTimeBlocks();
})
