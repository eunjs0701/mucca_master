// After the API loads, call a function to enable the search box.
function handleAPILoaded() {
  $('#search-button').attr('disabled', false);
}

// Search for a specified string.
function search() {
  var q = $('#query').val();
  var request = gapi.client.youtube.search.list({
    q: q,
    part: 'snippet'
  });

  request.execute(function(response) {
    var str = JSON.stringify(response.result);

    // 이미 parse를 해서 보내준다.
    console.log(response.result);
    console.log(response.result["items"][0]["snippet"]["thumbnails"]["default"]["url"]);
    console.log(response.result["items"][0]["snippet"]["title"]);

    var title = response.result["items"][0]["snippet"]["title"];
    var image = response.result["items"][0]["snippet"]["thumbnails"]["default"]["url"];
    var videoId = response.result["items"][0]["id"]["videoId"];

    $('#search-container').html('<p>' + title + '</p>');

// <img src="img/logo.png">
    console.log(image);
    $('#search-container-img').html('<img src=' + image + '>');

    // youtube video를 불러오는 부분...
    var videoId = response.result["items"][0]["id"]["videoId"];
    var youtubeLink = "http://www.youtube.com/embed/";
    var url = youtubeLink + videoId;
    document.getElementById("main_frame").src = url;

    $('#music_title')[0]['value'] = title;
    console.log("title: " + title);    

    // var data = JSON.parse(response);
    // console.log(data["kind"]);
    // var thumbnails = response.result["thumbnails"];
    // console.log(JSON.stringify(thumbnails["default"]));
    // $('#search-container').html('<pre>' + str + '</pre>');
  });
}