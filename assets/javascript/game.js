<script type="text/javascript">
    var currQuestion = document.getElementById("questionBoi");
    var counter1 = document.getElementById("counter1");
    var counter = 0;

    var q1 = {
        q: "JavaScript is responsible for the content of a website",
        a: "f"
    };

    var q2 = {
        q: "CSS stands for Cascading Style Sheets",
        a: "t"
    };

    var q3 = {
        q: "HTML stands for Hypertext Markdown Language",
        a: "f"
    };

    var q4 = {
        q: "The command line for MacOS is called Terminal",
        a: "t"
    };

    var q5 = {
        q: "Our teacher's name is Travis Thomas",
        a: "f"
    };

    var q6 = {
        q: "Travis brings 2 laptops",
        a: "t"
    };
    var q7 = {
        q: "You have to check into bootcampspot.com every morning",
        a: "t"
    };

    var questions = [q1, q2, q3, q4, q5, q6, q7];

    var x = 0;
    currQuestion.textContent = questions[x].q;
    document.onkeyup = function (event) {
        var userInput = event.key;
        console.log(userInput);
        if (userInput === questions[x].a) {
            alert("Right!");
            counter++;
        }
        else {
            alert("Wrong :(");
        }
        x++;
        counter1.textContent = "Score: " + counter;
        if (x === questions.length) {
            currQuestion.textContent = "Game Over!"
        }
        else {
            currQuestion.textContent = questions[x].q;
        }
    };
</script>