$(document).ready(function () {
  // Se ja tiver ID -> tasks.html
  const userId = localStorage.getItem("userId");

  if (userId) {
    window.location.href = "../app.html";
  }

  // Criação de user
  $("#userForm").on("submit", function (e) {
    e.preventDefault();

    const name = $("#name").val();

    $.ajax({
      url: "/users",
      method: "POST",
      contentType: "application/json",
      data: JSON.stringify({ name }),
      success: function (response) {
        localStorage.setItem("userId", response.id);
        window.location.href = "tasks.html";
      },
      error: function (error) {
        alert("Error ao criar o usuario");
        console.log(error);
      },
    });
  });
});
