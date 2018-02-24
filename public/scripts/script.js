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
var Images =   {Quiet: [],
                Loud: [],
                Eating: [],
                Starve: [],
                Coffee: [],
                Tea: [],
                Near: [],
                Faraway: [],
                Small: [],
                Large: [],
                Collaborate:[],
                Singular:[],
                Outdoors:[],
                Indoors:[],
                Modern:[],
                Traditional:[],
                Early Bird:[],
                Night Owl:[],
                Open:[],
                Closed:[],
                Unwind:[],
                Non-stop:[],
                On campus:[],
                Off campus:[],
                Whiteboard:[],
                Chalkboard:[]
              };
var Answers = [];
current = 0;
$( document ).ready(function() {
  console.log( "ready!" );

  // Animation of the background.


  // Store data when clicked
  // ASsume that the ids are 'option1' and 'option2';
  $('#option1').click((e) => {
    Answers[current] = Questions[current][0];
    if(current === Questions.keys.length) {
      finish();
    } else {
      next();
    }
  })
  $('#option2').click((e) => {
    Answers[current] = Questions[current][0];
    if(current === Questions.keys.length) {
      finish();
    } else {
      next();
    }
  })

  // Handling going from question(n) to question(n+1)
  // Assume the div that holds the options has id 'option-div'
  function next() {
    // iterte current index.
    current++;

    // Animate the next options.
    changeImage($('#image1'), Images[Questions[current]]);
    changeImage($('#image2'), Images[Questions[current]]);

    // Animate and update progress bar.
    move();

  }

  // Return final or finalists locations.
  function finish() {
    var finalists = matching(Answers);
    console.log(finalists);
  }

  function changeImage(obj, img) {
    obj.src = img;
  }

  // Progress Bar Update.
  function move() {
    // Assume MyBar is the ID of the bar.
    var elem = document.getElementById("myBar");
    var width = 10;
    var id = setInterval(frame, 10);
    function frame() {
      var indexer = Math.floor(current / Questions.keys.length * 100);
      if (width >= 100 || width == indexer) {
        clearInterval(id);
      } else {
        width++;
        elem.style.width = width + '%';
        elem.innerHTML = width * 1  + '%';
      }
    }
  }
});
