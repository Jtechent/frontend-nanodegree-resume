/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
  "name": "Jeffrey Techentin",
  "role": "Web Developer",
  "contacts": {
    "email": "techentin4@gmail.com",
    "mobile": "6036822774",
    "github": "Jtechent",
    "location": "Manchester, NH"
  },
  "biopic": "https://lh3.googleusercontent.com/K4RI4H4rmW09eVZ1aluZxqB0HTB9EDEwlf6iaJkAvpvtLwoe9yPr_hG7f6DIe2jH5ie8h5QS=w1366-h768-rw-no",
  "welcomeMessage": "Hello, World!",
  "skills": ["JavaScript", "awesomeness", "resume padding"],
},
  work = {
    "jobs":[
        {
      "title": "barista",
      "employer": "Cafe La Reine",
      "dates": 'march 2016 - current',
      "location": "915 Elm St, Manchester, New Hampshire",
      "description": "Cafe La Reine is a coffee shop focusing on high quality drinks with a cafe menu as well, which includes baked goods sandwiches and salads. My responsibilites included drink and food creation, cleaning the store, handling customer interactions, and other food service requirements"
      }
    ]
  },
  education = {
    "schools": [
    {
      "name": "York College of PA",
      "location": "441 Country Club Rd, York, PA",
      "majors": ["Economics"],
      "dates": "2013",
      "degree": 'none',
      "url": 'idk'
    }
    ],
    "onlineCourses": [
      {
        "title": "Front-End NanoDegree",
        "school": "Udacity",
        "date": "In Progress",
        "url": "udacity.com",
      }
    ]
  },

  projects = {
    projects: [
      {
        title: "Blah Blah",
        dates: "January 1st 1999-March 12 2012",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla diam tellus, gravida sed mattis non euismod effictur nibh. Sed cansequat erat nec dolor aliquet efficitur pharetra lacus cursus.",
        images: ["https://placebear.com/200/300"]
      }
    ]
  };

//!!!functions!!!  javascript(css(HTML)) -> cool websites!!!
  
  bio.display = function () {
  function DisplayContacts (context) {
    var container = $(context),
        contacts = bio["contacts"];
    container.append(HTMLmobile.replace('%data%', contacts["mobile"]),
                     HTMLemail.replace('%data%', contacts["email"]),
                     HTMLgithub.replace('%data%', contacts["github"]),
                     HTMLlocation.replace('%data%', contacts["location"])
                     );
  }
    //display role
    $('#header').prepend( HTMLheaderName.replace('%data%', bio['name']), HTMLheaderRole.replace('%data%', bio['role']));
    //display bio pic
    $('#header').append(HTMLbioPic.replace('%data%', bio.biopic),
                        HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage));
    DisplayContacts('#topContacts');
    DisplayContacts('#footerContacts');
    if (bio.skills){
    var parsedSkillsStart = $.parseHTML(HTMLskillsStart);
    $("#header").append(parsedSkillsStart);
     bio.skills.forEach(function (elem){
       var formatted = HTMLskills.slice(0).replace('%data%', elem);
       $('#skills').append(formatted);
     });
  } 
};

  projects.display = function () {
    var portfolio = this["projects"];
    for (var project=0;project<portfolio.length;project++){
      var work = portfolio[project];
      var current = $.parseHTML(HTMLprojectStart);
      $(current).append(HTMLprojectTitle.replace('%data%', work.title),
                       HTMLprojectDates.replace('%data%', work.dates),
                       HTMLprojectDescription.replace('%data%', work.description)
                       );
      for (var image=0;image <work.images.length;image++){
        $(current).append(HTMLprojectImage.replace('%data%', work.images[image]));

      }
      $('#projects').append(current); 
    }
  };

education.display = function () {
  var schools = education['schools'],
      online = education['onlineCourses'];
  for (var school=0;school<schools.length;school++){
    $('#education').append(HTMLschoolStart);
    $('.education-entry:last').append(
        HTMLschoolName.replace('%data%', schools[school]['name']) + 
        HTMLschoolMajor.replace('%data%', schools[school]['majors']),
        HTMLschoolDegree.replace('%data%', schools[school]['degree']),
        HTMLschoolDates.replace('%data%', schools[school]['dates']),
        HTMLschoolLocation.replace('%data%', schools[school]['location']) 
        );
  }
  $('#education').append(HTMLonlineClasses);
  for (var course=0;course<online.length;course++){
    $('#education').append(HTMLschoolStart);
    $('.education-entry:last').append(
        HTMLonlineTitle.replace("%data%",online[course]["title"]) + 
        HTMLonlineSchool.replace("%data%",online[course]["school"]),
        HTMLonlineDates.replace("%data%",online[course]["date"]),
        HTMLonlineURL.replace("%data%",online[course]["url"])
        );
  }
};

work.display = function () {
  for (var job=0;job<work["jobs"].length;job++){
    var position = work["jobs"][job];
    $("#workExperience").append(HTMLworkStart); 
    var formattedWork = HTMLworkEmployer.replace('%data%', position["employer"]);
    var formattedTitle = HTMLworkTitle.replace('%data%', position["title"]);
    var formattedDate = HTMLworkDates.replace('%data%', position["dates"]);
    var formattedLocation = HTMLworkLocation.replace("%data%", position["location"]);
    var formattedDescription = HTMLworkDescription.replace('%data%', position["description"]);
    $('.work-entry:last').append(formattedWork +  formattedTitle, formattedDate, formattedLocation, formattedDescription);
  }
};

$('#mapDiv').append(googleMap);


work.display();

bio.display();

projects.display();

education.display();
