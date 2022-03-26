$(init);

function init() {
    $("#currentDay").text(moment().format("dddd, MMMM Do"));

    hourlyBlocks();
    setInterval(hourlyBlocks, 60000);

    $(".time-block").each(function() {
        var blockInput = $(this).attr("id");
        $("#" + blockInput + " textarea").text(localStorage.getItem(moment().format("DDDYYYY") + blockInput));

    });

    $(".saveBtn").on("click", handleSave);
};