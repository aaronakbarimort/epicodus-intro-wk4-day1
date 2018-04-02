// Business Logic
function Task(task, date, notes) {
  this.task = task;
  this.completeBy = date;
  this.notes = notes;
}

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var task = $("input#task-title").val();
    var completeBy = $("input#complete-by").val();
    var notes = $("input#notes").val();

    var newTask = new Task(task, completeBy, notes);

    $("#task-list tbody").append("<tr class='task'><td class='check'>&otimes;</td><td>" + newTask.task + "</td><td>" + newTask.completeBy + "</td><td>" + newTask.notes + "</td></tr>");

    $(".task").fadeIn();

    $(".check").last().click(function() {
      $(this).parent().toggleClass("done");
    });

    // $(".task").last().click(function () {
    //   $("#task-panel h2").text(newTask.task);
    //   $("#task-panel ul").append("<li>" + newTask.completeBy + "</li>");
    //   $("#task-panel ul").append("<li>" + newTask.notes + "</li>");
    //   $("#task-panel").show();
    //   $("#done").click(function() {
    //     $("#task-panel").hide();
    //     $("#task-panel ul").empty();
    //     $(".task").addClass("strike");
    //   });
    // });
  });
});
