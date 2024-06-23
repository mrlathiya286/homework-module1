$(document).ready(function () {
  var selectedActivities = [];

  function updateModalContent() {
    var modalContent = $("#selectedActivitiesContent");
    modalContent.html("");

    if (selectedActivities.length > 0) {
      var list = $("<ul></ul>");
      selectedActivities.forEach(function (activity) {
        var listItem = $("<li></li>").text(activity);
        list.append(listItem);
      });
      modalContent.append(list);
    } else {
      modalContent.text("No activities selected.");
    }
  }

  $("#activitiesTable tbody td").on("click", function () {
    if ($(this).text() !== "Not Available") {
      var activityName = $(this).text();
      var index = selectedActivities.indexOf(activityName);

      $(this).toggleClass("selected");

      if (index === -1) {
        selectedActivities.push(activityName);
      } else {
        selectedActivities.splice(index, 1);
      }

      updateModalContent();
      $("#selectedActivitiesModal").modal("show");
    }
  });

  // Disable selection for "Not available" cells and heading/title cells
  $("#activitiesTable thead th, #activitiesTable tbody td:first-child").on(
    "click",
    function (e) {
      e.preventDefault();
    }
  );

  // Change cursor to hand on selectable cells
  $("#activitiesTable tbody td").not(":first-child").css("cursor", "pointer");
});
