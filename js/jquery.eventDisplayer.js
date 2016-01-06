;(function($){
  var events = [
      {
        "occasion": "Birthday party",
        "invited_count": 120,
        "year": 2015,
        "month": 3,
        "day": 14
      },
      {
        "occasion": "Technical discussion",
        "invited_count": 23,
        "year": 2015,
        "month": 4,
        "day": 24
      },
      {
        "occasion": "Press release",
        "invited_count": 64,
        "year": 2015,
        "month": 6,
        "day": 7,
        "cancelled": true
      },
      {
        "occasion": "New year party",
        "invited_count": 55,
        "year": 2016,
        "month": 1,
        "day": 1
      }
  ];

  $.fn.events = function(options){
    var filters = $("<div/>", {
      id: "filters"
    }).appendTo(this);

    $("<button/>", {
      class: 'occasion active-filter',
      id: 'occasions',
      text: 'Active'
    }).appendTo(filters);

    $("<button/>", {
      class: 'occasion cancelled-filter',
      text: 'Cancelled',
      id: 'occasions'
    }).appendTo(filters);

    $("<button/>", {
      class: 'occasion all-filter',
      text: 'All',
      id: 'occasions'
    }).appendTo(filters);

    $("<h1/>", {
      text: "Events"
    }).appendTo(this);

    var occasions = $("<div/>", { id: "occasions"}).appendTo(this);

    var ul = $("<ul/>", {}).appendTo(occasions);

    for (var x = 0; x < events.length; x++) {
      var occasion = $("<li/>", {
        class: "occasion",
        "data-invited": events[x].invited_count
      }).appendTo(ul);

      $("<p/>", {
        text: events[x].month + '-' + events[x].day + '-' + events[x].year
      }).appendTo(occasion);

      $("<button/>", {
        id: 'event',
        text: 'Event'
      }).appendTo(occasion);

      $("<li/>", {
        class: 'description',
        text: events[x].occasion
      }).appendTo(occasion);

      $("<button/>", {
        id: 'price',
        text: '# of Attendees'
      }).appendTo(occasion);

      var cancelled = $("<strong/>", {
        class: 'cancelled-ribbon',
        text: 'Cancelled'
      });
      if(events[x].cancelled) {
        occasion.addClass('cancelled');
        occasion.prepend(cancelled);
      } else {
        occasion.addClass('active');
      }
    }

    $('#filters').on('click', '.active-filter', function(){
      $('.cancelled').hide();
      $('.active').fadeIn();
    });

    $('#filters').on('click', '.cancelled-filter', function(){
      $('.active').hide();
      $('.cancelled').fadeIn();
    });

    $('#filters').on('click', '.all-filter', function(){
      $('.active').fadeIn();
      $('.cancelled').fadeIn();
    });

    $('.occasion').on('click', '#price', function(){
      var occasion = $(this).closest('.occasion');
      var price = $("<p/>", {
        text:  occasion.data('invited') + ' people invited'
      }).hide().fadeIn(1000);
      $(this).fadeOut(140);
      price.appendTo(occasion);
    });

    $('.occasion').on('click', '#event', function(){
      $(this).closest('.occasion').find('.description').slideToggle();
    });
};
}(jQuery));
