$(init);

function init() {
    // Display current day
  $("#currentDay").text(moment().format("dddd, MMMM Do"));
  
   // Starts the interval to color the time block
  blockColorSequence();
  setInterval(blockColorSequence, 60000);
   
   // Update and load in local storage
  $(".time-block").each(function() {
    var timeBlockId = $(this).attr("id");
    $("#" + timeBlockId + " textarea").text(localStorage.getItem(moment().format("DDDYYYY") + timeBlockId));
  });

  $(".saveBtn").on("click", saveInput);
};

 // Removes and adds the corresponding color for past, present, and future for each hour.
function blockColorSequence() {
  $(".time-block").each(function() {
    var setHour = parseInt($(this).attr("id").replace("hour-", ""));
    var presentHour = parseInt(moment().format("H"));

    $(this).removeClass("past present future");

    if (setHour < presentHour) {
      $(this).addClass("past");
    } 
    else if (setHour > presentHour) {
      $(this).addClass("future");
    } 
    else {
      $(this).addClass("present");
    }
  });
};

 // Save data in local storage
function saveInput(event) {
  var hourId = $(this).parent().attr("id");
  localStorage.setItem(moment().format("DDDYYYY") + hourId, 
  $("#" + hourId + " textarea").val());
};