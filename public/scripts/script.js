var Questions = {0: ['Quiet', 'Loud'],
                 1: ['Eating', 'Starve'],
                 2: ['Coffee', 'Tea'],
                 3: ['Near', 'Faraway'],
                 4: ['Small', 'Large'],
                 5: ['Collaborate', 'Singular'],
                 6: ['Outdoors', 'Indoors'],
                 7: ['Modern', 'Traditional'],
                 8: ['Early Bird', 'Night Owl'],
                 9: ['Open', 'Closed'], // This means windows.
                 10: ['Unwind', 'Non-stop'],
                 11: ['On campus', 'Off campus'],
                 12: ['Whiteboard', 'Chalkboard']
               };
var Images =   {'Quiet': [],
                'Loud': [],
                'Eating': [],
                'Starve': [],
                'Coffee': [],
                'Tea': [],
                'Near': [],
                'Faraway': [],
                'Small': [],
                'Large': [],
                'Collaborate':[],
                'Singular':[],
                'Outdoors':[],
                'Indoors':[],
                'Modern':[],
                'Traditional':[],
                'Early Bird':[],
                'Night Owl':[],
                'Open':[],
                'Closed':[],
                'Unwind':[],
                'Non-stop':[],
                'On campus':[],
                'Off campus':[],
                'Whiteboard':[],
                'Chalkboard':[]
              };
$( document ).ready(function() {
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

  // Handling going from question(n) to question(n+1)
  // Assume the div that holds the options has id 'option-div'
  function next() {
    // iterte current index.
    current++;
    if(current === Object.keys(Questions).length) {
      finish()
    } else {

      // Animate the next options.
      $('#image1').src = Images[Questions[current]];
      $('#image2').src = Images[Questions[current]];
      $('#option1text').text(Questions[current][0]);
      $('#option2text').text(Questions[current][1]);

      // Animate and update progress bar.
      move();
    }
  }

  // Return final or finalists locations.
  function finish() {
    var finalists = matching(Answers);
    console.log(finalists);

    // Give final screen of where to study.
    $('.container').html(finish_page);
    if(finalists.length > 1) {
      var compile = '';
      for(var i = 0; i < finalists.length; i++) {
        compile = compile + finalists[i] + ', ';
      }
      $('#finish').text(compile)
    } else {
      $('#finish').text(finalists[0])
    }
  }

  // Progress Bar Update.
  function move() {
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
<div id="myProgress">
  <div id="myBad"></div>
</div>
<div class="row">
  <div id="finish" class="col-sm-12">
    Yoooo
  </div>
</div>`
