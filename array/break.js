// break : o loop irá parar caso encontre a palavra break

var videoGames = ["switch", "ps4", "xbox"];
for (var i = 0; i < videoGames.length; i++) {
  if (videoGames[i] === "ps4") {
    break;
  }
  console.log(videoGames[i]);
}