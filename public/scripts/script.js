var Questions = {0: ['Quiet', 'Loud'],
                 1: ['Eating', 'Starve'],
                 2: ['Coffee', 'Tea'],
                 3: ['Near', 'Faraway'],
                 4: ['Small', 'Large'], // Desk space
                 5: ['Collaborate', 'Singular'],
                 6: ['Outdoors', 'Indoors'],
                 7: ['Modern', 'Traditional'],
                 8: ['Early Bird', 'Night Owl'],
                 9: ['Open', 'Closed'], // This means windows.
                 10: ['Unwind', 'Non-stop'],
                 11: ['On campus', 'Off campus'],
                 12: ['Whiteboard', 'Chalkboard']
               };
var Images =   {'Quiet': "https://ak8.picdn.net/shutterstock/videos/8506768/thumb/1.jpg",
                'Loud': "https://www.beroomers.com/blog/wp-content/uploads/2016/04/timberyard-places-study-london.jpg",
                'Eating': "https://ak6.picdn.net/shutterstock/videos/5275826/thumb/1.jpg",
                'Starve': "https://az616578.vo.msecnd.net/files/2016/04/21/635968798795806074-1861238967_studyingkid.jpg",
                'Coffee': "https://cdn.cnn.com/cnnnext/dam/assets/150929101049-black-coffee-stock-super-tease.jpg",
                'Tea': "http://photos.demandstudios.com/getty/article/108/230/180342989.jpg",
                'Near': "https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/college-student-walking-on-campus_zyp_tqb-h__F0000.png",
                'Faraway': "https://media1.fdncms.com/northcoast/imager/college-of-the-redwoods-students-and-good-friends-courtney-borgelin-left/u/zoom/2312185/news1-08.jpg",
                'Small': "http://castprofessionallearning.org/wp-content/uploads/2015/09/Female-College-Student-copy.jpg",
                'Large': "https://www.pearsoned.com/wp-content/uploads/Female-college-student-sitting-at-large-table-studying-in-a-library-770x370.jpg",
                'Collaborate': "https://www.lrs.org/wp-content/uploads/2017/04/LJ_academic.jpg",
                'Singular': "https://image1.masterfile.com/getImage/NjExNy0wNzQ5NDE3NmVuLjAwMDAwMDAw=AB33VH/6117-07494176en_Masterfile.jpg",
                'Outdoors': "http://ak5.picdn.net/shutterstock/videos/5659685/thumb/1.jpg",
                'Indoors': "https://c.pxhere.com/photos/42/86/library_study_homework_education_studying_school_student_knowledge-799419.jpg!d",
                'Modern': "http://ak9.picdn.net/shutterstock/videos/6780709/thumb/1.jpg",
                'Traditional': "https://upload.wikimedia.org/wikipedia/commons/3/39/Harper_Library%2C_interior%2C_University_of_Chicago.jpg",
                'Early Bird': "http://coachlois.com/wp-content/uploads/2016/10/Working-in-the-morning.jpg",
                'Night Owl': "https://juicing-for-health.com/wp-content/uploads/2015/07/night-shift.jpg",
                'Open': "https://thecaptivereader.files.wordpress.com/2010/11/tumblr_lbl08xntol1qa1xqko1_500.jpg",
                'Closed': "https://static1.squarespace.com/static/53c82442e4b00bfba5ca1612/53ced065e4b014ef6eaf0784/53ced066e4b014ef6eaf0785/1406062696086/Honnold+Library1Edit.jpg?format=750w",
                'Unwind': "http://img.wennermedia.com/620-width/mj-618_348_the-essentials-5-must-have-items-for-a-long-bike-ride.jpg",
                'Non-stop': "https://qph.fs.quoracdn.net/main-qimg-1587ff2b4b96d394113644a4fc16e17c-c",
                'On campus': "https://yura.yale.edu/sites/default/files/event-images/yura_cross_campus.jpg",
                'Off campus': "https://thumbs.dreamstime.com/b/people-resting-street-cafe-paris-france-september-terrace-le-metro-located-place-maubert-provide-53057209.jpg",
                'Whiteboard': "https://apps.carleton.edu/reason_package/reason_4.0/www/images/645961.jpg",
                'Chalkboard': "https://az616578.vo.msecnd.net/files/2016/08/27/636078616572711452-1323241485_Those%20who%20can.jpg",
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
    move();

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
          compile = compile + finalists[i] + ', ';
        }
      }
      $('#finish').text(compile + '!')
    } else {
      $('#finish').text("The best place for you to study is " + finalists[0] + "!")
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
    Yoooo
  </div>
</div>
</div>
</body>`
