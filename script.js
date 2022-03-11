function getRepos(){
let getInfo = new XMLHttpRequest();
getInfo.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let myObj = JSON.parse(this.responseText);
        document.getElementById("getHubRepos").innerHTML = "";
        for (var i = 0; i < myObj.length; i++) {
            
          
            var node = document.createElement("LI");                 
            var textnode = document.createTextNode(myObj[i].name);        
            node.appendChild(textnode);                              
            document.getElementById("getHubRepos").appendChild(node);
        }
        
    }
};
getInfo.open("GET", "https://api.github.com/users/bhall21/repos", true);
getInfo.send();
};
$(document).ready(function () {
    $(".btn").hover(function () {
        $(this).width("400px");
        $(this).height("5em");
        $(this).css("color", "red");

    }, function () {
        $(this).width("auto");
        $(this).height("auto");
        $(this).css("color", "black");

    }); $(".btn1").hover(function () {
        $(this).width("400px");
        $(this).height("5em");
        $(this).css("color", "red");

    }, function () {
        $(this).width("auto");
        $(this).height("auto");
        $(this).css("color", "black");

    }); $(".btn2").hover(function () {
        $(this).width("400px");
        $(this).height("5em");
        $(this).css("color", "red");

    }, function () {
        $(this).width("auto");
        $(this).height("auto");
        $(this).css("color", "black");

    }); $(".btn3").hover(function () {
        $(this).width("400px");
        $(this).height("5em");
        $(this).css("color", "red");

    }, function () {
        $(this).width("auto");
        $(this).height("auto");
        $(this).css("color", "black");

    });
    
});


