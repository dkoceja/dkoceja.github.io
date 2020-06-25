var links = ["#chemistry", "#Amazon", "#Mozilla", "#TA", "#Duke", "#Fashapp", "#jeopardy", "#sales", "#hand", "#unc", "#degree", "#ncssm", "#sports"]
var initialPadding = 60;

var notes = {
    "chemistry": "I conducted a lot of chemistry research back in high school, and was actually a chemistry major for my first year in college.",
    "Amazon": "I was an Amazon SDE Intern from June - September 2020.",
    "Mozilla": "The Mozilla Builders Lab was a program for startups to get mentorship from experienced entrepreneurs and peer groups of professionals all across the world. I participated in this program for both the Spring 2020 and Summer 2020 sessions.",
    "TA": "In fall 2019, I was an undergraduate TA for Comp 401: Foundations of Programming. In spring 2020, I switched to Comp 455: Models of Language and Computation.",
    "Duke": "In 2017, I conducted research as a part of the Beratan Lab at Duke University. My research was on the p53 DNA binding domain, so it included chemistry, physics, biology, and computer science.",
    "Fashapp": "Fashapp was a project that my team started during the Mozilla Builders Lab. It allows you to pick which clothing you like and saves it to a database. You can check what images you liked and get a better sense of your personal style. Check it out <a href='https://fashion-tool.herokuapp.com/'>here</a>",
    "jeopardy": "This is a web app that pulls from an API of random Jeopardy questions and allows the user to guess and check their answers. It also keeps track of the amount of points you received. Try it out <a href='https://koceja.github.io/jeopardy/'>here</a>",
    "sales": "As a part of the Carolina Data Challenge, my team created visuals that analyzed a data set and provided insight on trends. My specific contribution was creating a machine learning algorithm that predicted sales in the future dates with changes in variables. We won 2nd place in our category.",
    "hand": "This program allows you to draw with your webcam! With machine learning, this program will detect your hand and will allow you to draw shapes just with the movement of your hand. This project was completed in 2019.",
    "unc": "I am persuing a degree from UNC-Chapel Hill and have an anticipated graduation date of May 2022. I have attended UNC since fall 2018. Go Heels!",
    "degree": "Here are a list of relevelent classes I've taken: Distributed Systems, Programming Intelligent Physical Systems, Algorithms and Analysis, Data Structures, Models of Language and Computation, Computer Organization, Introduction to Scientific Programming, Foundations of Programming, Calculus of Functions of Several Variables, Linear Algebra, Differential Equations, Advanced Calculus",
    "ncssm": "I attended NCSSM, a public residential high school, from 2016 to 2018 when I graduated. The school has a STEM focus and had resources for studentss to go beyond a typical high school education, such as conduct research.",
    "sports": "I played basketball and baseball at my middle school and high school. I still play some basketball here and there at UNC and try to keep myself active."
}

var clickEvent = function() {
    const yNotes = $("#notes").offset().top
        const yWindow = $(window).scrollTop();
        const yThis = $(this).offset().top;

        const newHtml = "<h3>'"+ $(this).html() + "'</h3><p>" + notes[$(this).attr('id')] + "</p>"
            var yNew = yThis - yNotes;
            yNew = yNew + "px";
            $("#notes").css("padding-top", yNew);
            $("#notes").html(newHtml)
}


$(document).ready(function () {
    $("#chemistry").on("click", clickEvent)
    $("#Amazon").on("click", clickEvent)
    $("#Mozilla").on("click", clickEvent)
    $("#TA").on("click", clickEvent)
    $("#Duke").on("click", clickEvent)
    $("#Fashapp").on("click", clickEvent)
    $("#jeopardy").on("click", clickEvent)
    $("#sales").on("click", clickEvent)
    $("#hand").on("click", clickEvent)
    $("#unc").on("click", clickEvent)
    $("#degree").on("click", clickEvent)
    $("#ncssm").on("click", clickEvent)
    $("#sports").on("click", clickEvent)
})