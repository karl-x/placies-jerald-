$(function () {
  const $placeSearch = $('#placeSearch')
  const apiUrl = 'https://maps.googleapis.com/maps/api/place/textsearch/json?'
  const imgUrl ='https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference='
  // <reference key>
  //   .reuslts[i].photos[i].photo_reference

  const keyword = ''
  const apiKey = '&key=AIzaSyCulVEbmZslxhCcRVkOiQXmQ3PMG4ROBJ8'
  // const $spinner = $('#spiner')

  $placeSearch.on('submit', function (e) {
    $('.hidden').fadeIn()
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
        $('.hidden').fadeOut()
        $newLi.text(searchResults[i].name)
        $newLi.append($newImg)
        $resultList.append($newLi)
      }
    })

  //
  //   // alternate method
  //   function ajaxTextSearch (fimalUrl, keyword) {
  //   $spinner.fadeIn()
  //   $.get(finalUrl).done(function (data) {
  //     $spinner.fadeOut()
  //
  //     var results = data.results
  //     $keywordSearch.text(`Results for keyword:${keyword}`)
  //
  //     if ($searchResults.find('li').length)
  //     $searchResults.html('')
  //
  //     results.forEach(function (place) {
  //       var $newLi = $('<li>')
  //       $newLi.text(place.name)
  //       $searchResults.append($newLi)
  //     })
  //   })
  // }

  })
})
