$(document).ready(function () {
  // Add click event listener to all table cells
  $("table td").on("click", function () {
    // Check if the clicked cell is "Not Available"
    if ($(this).text().trim() !== "Not Available") {
      // Toggle the "selected" class
      $(this).toggleClass("selected");
    }
  });
});

$(document).ready(function () {
  $("td").click(function () {
    var content = $(this).text();
    var columnIndex = $(this).index(); // Get the column index of the clicked cell
    var cliffSiteName = $("table th").eq(columnIndex).text(); // Get the cliff site name based on the column index

    if (content != "Not Available") {
      $(this).toggleClass("tdhighlight");
      if ($(this).hasClass("tdhighlight")) {
        $("#displaySelected").css("visibility", "visible");
        $("#displaySelected").css("margin-top", "2em");
        if (!$("#result p:contains(" + content + ")").length) {
          $("#result").append(
            "<p>" + content + " at  " + cliffSiteName + "</p>"
          );
        }
      } else {
        $("#result p:contains(" + content + ")").remove();
        if ($("#result").has("p").length == false) {
          $("#displaySelected").css("visibility", "hidden");
          $("#displaySelected").css("margin-top", "0");
        }
      }
    }
  });
});
