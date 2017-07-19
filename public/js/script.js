$(function () {
  const $placeSearch = $('#placeSearch')
  const apiUrl = 'https://maps.googleapis.com/maps/api/place/textsearch/json?'
  const imgUrl ='https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference='


  // <reference key>
  //   .reuslts[i].photos[i].photo_reference

  const keyword = ''
  const apiKey = '&key=AIzaSyBUP2VHnTcSs1iGox2ah82YHXnEguXnFTs'

  $placeSearch.on('submit', function (e) {
    e.preventDefault()

    var keywordObj = $(this).serializeArray()
    var qString = `query=${keywordObj[0].value}`


    var finalUrl = `https://crossorigin.me/${apiUrl}${qString}${apiKey}`




    $.get(finalUrl).done(function (data) {
      $('h2').text('Your Search Results for '+ keyword + ':')
      var searchResults = data.results
      $('.results-list').empty()
      for (var i = 0; i < searchResults.length; i++) {
        var finalImgUrl = imgUrl + searchResults[i].photos[0].photo_reference + apiKey
        console.log(finalImgUrl);

        console.log(searchResults[i].name)

        var $resultList = $('.results-list')
        var $newLi = $('<li>')
        var $newImg = $('<img>')
        $newImg.attr('src', finalImgUrl)
        $newLi.text(searchResults[i].name)
        $newLi.append($newImg)
        $resultList.append($newLi)
      }
    })

  })
})
