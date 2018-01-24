/*
This is empty on purpose! Your code to build the resume will go here.
 */
/*
var formattedName = HTMLheaderName.replace("%data%","Lin Yongjian");
var formattedRole = HTMLheaderRole.replace("%data%","Web Developer");
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
*/
var bio = {
    "name": "Lin Yongjian",
    "role": "Web Developer",
    "biopic": "images/fry.jpg",
    "welcomeMessage": "lorem ipsum dolor sit amet etc etc etc",
    "contacts": {
        "mobile": "13537818243",
        "email": "627161962@qq.com",
        "github": "jianjiancn123",
        "location": "Shenzhen"
    },
    "skills": ["OfficeEXCEL","OfficeWORD","OfficePPT"]
}

var work = {
    "jobs": [
        {
            "employer": "爱米未",
            "title": "游戏运营助理",
            "dates": "2017年6月至今",
            "description": "后台游戏数据审核，活动策划"
        }
    ]
}

var education = {
    "schools": [
        {
            "name": "深圳信息职业技术学院",
            "location": "深圳",
            "degree": "大专",
            "majors": "工程管理",
            "dates": "2013-2016年",
            "url": "http://www.sziit.com.cn/"
        }
    ],
    "onlineCourses": [
        {
            "title": "前端开发入门",
            "school": "优达学城",
            "dates": "2017年9月",
            "url": "https://cn.udacity.com/"
        }
    ]
}

var projects = {
    "projects": [
        {
            "title": "项目一",
            "dates": "2017年8月",
            "description": "协助游戏版本更新",
            "images": []
        }
    ]
};

/*
if(bio.skills.length > 0) {

    $("#header").append(HTMLskillsStart);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);

    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
};
*/

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%",bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
    var formattedbioPic = HTMLbioPic.replace("%data%",bio.biopic);
    var formattedwelcomeMessage =HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").append(formattedbioPic);
    $("#header").append(formattedwelcomeMessage);

    var formattedmobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
    var formattedemail = HTMLemail.replace("%data%",bio.contacts.email);
    var formattedgithub = HTMLgithub.replace("%data%",bio.contacts.github);
    var formattedlocation = HTMLlocation.replace("%data%",bio.contacts.location);
    $("#topContacts").append(formattedmobile,formattedemail,formattedgithub,formattedlocation);

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (var skill = 0; skill < bio.skills.length; skill++) {
            var formattedSkill = HTMLskills.replace("%data%",bio.skills[skill]);
            $("#skills").append(formattedSkill);
        }
    }
}

work.display = function() {
    work.jobs.forEach(function(job) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%",job.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%",job.title);
        $(".work-entry:last").append(formattedEmployer);
        $(".work-entry:last").append(formattedTitle);

        var formattedDates = HTMLworkDates.replace("%data%",job.dates);
        var formattedDescription = HTMLworkDescription.replace("%data%",job.description);
        $(".work-entry:last").append(formattedDates);
        $(".work-entry:last").append(formattedDescription);
    });
}

education.display = function() {
    education.schools.forEach(function(school) {
        $("#education").append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace("%data%",school.name);
        var formattedLocation = HTMLschoolLocation.replace("%data%",school.location);
        var formattedDegree = HTMLschoolDegree.replace("%data%",school.dates);
        var formattedMajor = HTMLschoolMajor.replace("%data%",school.majors);
        var formattedDates = HTMLschoolDates.replace("%data%",school.dates);
        $(".education-entry:last").append(formattedName,formattedDegree,formattedMajor,formattedLocation,formattedDates);
    });

    $(".education-entry:last").append(HTMLonlineClasses);
    education.onlineCourses.forEach(function(course) {
        var formattedTitle = HTMLonlineTitle.replace("%data%",course.title);
        var formattedSchool = HTMLonlineSchool.replace("%data%",course.school);
        var formattedDates = HTMLonlineDates.replace("%data%",course.school);
        var formattedUrl = HTMLonlineURL.replace("%data%",course.url);
        $(".education-entry:last").append(formattedTitle,formattedSchool,formattedDates,formattedUrl);
    });

}

projects.display = function() {
    $("#projects").append(HTMLprojectStart);

    for (var project = 0; project < projects.projects.length; project++) {
        var projectTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
        var projectDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
        var projectDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
        $(".project-entry:last").append(projectTitle,projectDates,projectDescription);

        if(projects.projects[project].images.length > 0) {
            for (var img = 0; img < projects.projects[project].images.length; img++){
                var projectImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[img]);
                $(".project-entry:last").append(projectImage);
            }
        }
    }
};

bio.display();
work.display();
education.display();
projects.display();

function inName(name) {
    name = name.trim().split("");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0] +""+name[1];
}

$("#main").append(internationalizeButton);
$("#mapDiv").append(gaodeMap);