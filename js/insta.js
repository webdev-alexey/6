$(document).ready(function () {
  let userFeed = new Instafeed({
    get: "user",
    userId: "YOUR_USER_ID",
    accessToken: "YOUR_ACCESS_TOKEN",
    resolution: "standard_resolution",
    limit: 33,
  });
  userFeed.run();

  setTimeout(function () {
    $(".instafeed").addClass("shadowed");
  }, 100);
});
