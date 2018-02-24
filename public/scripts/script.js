var Questions = {0: ['Quiet', 'Loud'],
                 1: ['Food', 'No Food'],
                 2: ['Coffee', 'Tea'],
                 3: ['Near', 'Far Away'],
                 4: ['Small Desk', 'Large Space'], // Desk space
                 5: ['Collaborate', 'Work Alone'],
                 6: ['Outdoors', 'Indoors'],
                 7: ['Modern', 'Traditional'],
                 8: ['Early Bird', 'Night Owl'],
                 9: ['Windows', 'No Windows'], // This means windows.
                 10: ['Breaks', 'No Breaks'],
                 11: ['On-campus', 'Off-campus'],
                 12: ['Whiteboard', 'Chalkboard']
               };
var Images =   {'Quiet': "../public/images/quiet.jpg",
                'Loud': "../public/images/loud.jpg",
                'Food': "../public/images/food.jpg",
                'No Food': "../public/images/no_food.jpg",
                'Coffee': "../public/images/coffee.jpg",
                'Tea': "../public/images/tea.jpg",
                'Near': "../public/images/near.png",
                'Far Away': "../public/images/far_away.jpg",
                'Small Desk': "../public/images/small_desk.jpg",
                'Large Space': "../public/images/large_space.jpg",
                'Collaborate': "../public/images/collaborate.jpg",
                'Work Alone': "../public/images/work_alone.jpg",
                'Outdoors': "../public/images/outdoors.jpg",
                'Indoors': "../public/images/indoors.jpg!d",
                'Modern': "../public/images/modern.jpg",
                'Traditional': "../public/images/traditional.jpg",
                'Early Bird': "../public/images/early_bird.jpg",
                'Night Owl': "../public/images/night_owl.jpg",
                'Windows': "../public/images/windows.jpg",
                'No Windows': "../public/images/no_windows.jpg",
                'Breaks': "../public/images/breaks.jpg",
                'No Breaks': "../public/images/no_breaks.jpg",
                'On-campus': "../public/images/on-campus.jpg",
                'Off-campus': "../public/images/off-campus.jpg",
                'Whiteboard': "../public/images/whiteboard.jpg",
                'Chalkboard': "../public/images/chalkboard.jpg",
              };
$( document ).ready(function() {
  initMap();
  var current = 0;
  var progresswidth = 0;
  var Answers = [];

  // Animation of the background.


  // Store data when clicked
  // ASsume that the ids are 'option1' and 'option2';
  $('#option1').click((e) => {
    Answers[current] = Questions[current][0];
    next();
  })
  $('#option2').click((e) => {
    Answers[current] = Questions[current][1];
    next();
  })

  // function loading() {
  //   var image1 = document.getElementById("option1");
  //   var image2 = document.getElementById("option2");
  //   var changeImageOne = setInterval(imageOne, 2000);
  //   var changeImageTwo = setInterval(imageTwo, 2000);
  //
  //   function imageOne() {
  //   	image1.style.opacity = 0;
  //   	image1.style.animationName = "fadeInOut";
  //   	image1.style.animationDelay = "8.5s";
  //   	image1.style.animationDuration = "9s";
  //   }
  //   function imageTwo() {
  //   	image2.style.opacity = 0;
  //   	image2.style.animationName = "fadeIn";
  //   	image2.style.animationDelay = "8.5s";
  //   	image2.style.animationDuration = "9s";
  //   }
  // }

  // Handling going from question(n) to question(n+1)
  // Assume the div that holds the options has id 'option-div'
  function next() {
    // iterte current index.
    current++;

    // Animate and update progress bar.
    movebar();

    if(current === Object.keys(Questions).length) {
      finish()
    } else {
      // loading();
      // Animate the next options.
      $('#image1').attr('src', Images[Questions[current][0]]);
      $('#image2').attr('src', Images[Questions[current][1]]);
      $('#option1text').text(Questions[current][0]);
      $('#option2text').text(Questions[current][1]);

    }
  }

  // Return final or finalists locations.
  function finish() {
    var finalists = matching(Answers);
    console.log(finalists);

    // Give final screen of where to study.
    $('.container').html(finish_page);
    if(finalists.length > 1) {
      var compile = "The best places for you to study are ";
      for(var i = 0; i < finalists.length; i++) {
        if(i == finalists.length - 1) {
          compile = compile + 'and ' + finalists[i];
        } else {
          if (finalists.length == 2) {
            compile = compile + finalists[i] + ' ';
          } else {
            compile = compile + finalists[i] + ', ';
          }
        }
      }
      $('#finish').text(compile + '!')
    } else {
      $('#finish').text("The best place for you to study is " + finalists[0] + "!")
    }
  }

  // Progress Bar Update.
  function movebar() {
    // Assume MyBar is the ID of the bar.
    var elem = document.getElementById("myBar");
    var width = progresswidth;
    var id = setInterval(frame, 10);
    function frame() {
      var indexer = Math.floor(current / Object.keys(Questions).length * 100);
      if (width === indexer || width >= 100) {
        clearInterval(id);
      } else {
        width++;
        progresswidth = width;
        elem.style.width = width + '%';
      }
    }
  }

});

var finish_page = `
<head>
<link rel="stylesheet" type="text/css" href="../public/stylesheets/finish.css">
</head>
<body>
<div id="myProgress">
  <div id="myBad"></div>
</div>
<div class="container">
<div class="row">
  <div id="finish" class="col-sm-12">

  </div>
</div>
</div>
</body>`
