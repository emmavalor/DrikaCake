// hide all choice except the first one
function hideChoices() {
  document.getElementById("ChoiceNB").style.display = "none";
  document.getElementById("ChoiceCD").style.display = "none";
  document.getElementById("ChoiceCT").style.display = "none";
  document.getElementById("ChoiceMC").style.display = "none";
  document.getElementById("ChoiceS").style.display = "none";
  document.getElementById("ChoiceSM").style.display = "none";
}
hideChoices();

// if NB is select display block NBChoice
function displayNBChoice() {

  if (document.getElementById("ChoicesCakes").value == "NB") {
    document.getElementById("ChoiceNB").style.display = "block";
  } else {
    document.getElementById("ChoiceNB").style.display = "none";
  }
  if (document.getElementById("ChoicesCakes").value == "CD") {
    document.getElementById("ChoiceCD").style.display = "block";
  } else {
    document.getElementById("ChoiceCD").style.display = "none";
  }
  if (document.getElementById("ChoicesCakes").value == "CT") {
    document.getElementById("ChoiceCT").style.display = "block";
  } else {
    document.getElementById("ChoiceCT").style.display = "none";
  }
  if (document.getElementById("ChoicesCakes").value == "MC") {
    document.getElementById("ChoiceMC").style.display = "block";
  } else {
    document.getElementById("ChoiceMC").style.display = "none";
  }
  if (document.getElementById("ChoicesCakes").value == "S") {
    document.getElementById("ChoiceS").style.display = "block";
  } else {
    document.getElementById("ChoiceS").style.display = "none";
  }
  if (document.getElementById("ChoicesCakes").value == "SM") {
    document.getElementById("ChoiceSM").style.display = "block";
  } else {
    document.getElementById("ChoiceSM").style.display = "none";
  }

  if (document.getElementById("ChoicesCakes").value == "CD") {
    document.getElementById("InfoSup").style.display = "block";
  } else {
    document.getElementById("InfoSup").style.display = "none";
  }
}


// Ajouter un gateau
document.getElementById("ajout1").addEventListener("click", function (event) {
  event.preventDefault();
  var z = document.getElementById("NBName").textContent;
  var a = document.getElementById("field1").value;
  var b = document.getElementById("field2").value;
  var c = document.getElementById("NBGenoise");
  var d = document.getElementById("NBGanache");
  var genoise = c.options[c.selectedIndex].text;
  var ganache = d.options[d.selectedIndex].text;
  var rows = "";
  rows +=
  "<div style=' background-color: #ffe7e8;'>" +
    "<h3 style='color: black; border: solid black 1px'>" +
    z +
    "</h3>" +
    "<p style='border: solid black 1px'>" +
    "Chiffre/nombre de votre gâteau : " +
    a +
    "</p>" +
    "<p style='border: solid black 1px'>" +
    "Nombre de parts : " +
    b +
    "</p>" +
    "<p style='border: solid black 1px'>" +
    "Choix de la genoise : " +
    genoise +
    "</p>" +
    "<p style='border: solid black 1px'>" +
    "Choix de la ganache : " +
    ganache +
    "</p>" +
    "</div>";
  document.getElementById("me1").innerHTML = rows;
});

document.getElementById("ajout2").addEventListener("click", function (event) {
  event.preventDefault();
  var a2 = document.getElementById("CDPart").value;
  var b2 = document.getElementById("CDGenoise");
  var c2 = document.getElementById("allergie").value;
  var d2 = document.getElementById("messagesupplementaire").value;
  var e2 = document.getElementById("CDGanache").value;
  var genoise2 = b2.options[b2.selectedIndex].text;
  var rows2 = "";
  rows2 +=
  "<div style=' background-color: #ffe7e8;'>" +
    "<h3 style='color: black; border: solid black 1px'>" +
    "Cake Design" +
    "</h3>" +
    "<p style='border: solid black 1px'>" +
    "Nombre de parts: " +
    a2 +
    "</p>" +
    "<p style='border: solid black 1px'>" +
    "Choix de la genoise : " +
    genoise2 +
    "</p>" +
    "<p style='border: solid black 1px'>" +
    "Allergie(s) : " +
    c2 +
    "</p>"+
    "<p style='border: solid black 1px'>" +
    "Informations supplementaires : " +
    d2 +
    "</p>" +
    "</div>";
  document.getElementById("me2").innerHTML = rows2;
});

document.getElementById("ajout3").addEventListener("click", function (event) {
  event.preventDefault();
  var a = document.getElementById("TypeCake");
  var TypeCake = a.options[a.selectedIndex].text;
  var rows = "";
  rows +=
  "<div style=' background-color: #ffe7e8;'>" +
    "<h3 style='color: black; border: solid black 1px'>" +
    "Cake Traditionnel" +
    "</h3>" +
    "<p style='border: solid black 1px'>" +
    "Choix du cake : " +
    TypeCake +
    "</p>" + 
    "</div>";
  document.getElementById("me3").innerHTML = rows;
});

document.getElementById("ajout4").addEventListener("click", function (event) {
  event.preventDefault();
  var a = document.getElementById("MCPart").value;
  var b = document.getElementById("MCGanache");
  var MCGanache = b.options[b.selectedIndex].text;
  var rows = "";
  rows +=
  "<div style=' background-color: #ffe7e8;'>" +
    "<h3 style='color: black; border: solid black 1px'>" +
    "Mini Cupcake" +
    "</h3>" +
    "<p style='border: solid black 1px'>" +
    "Nombre de parts : " +
    a +
    "</p>" +
    "<p style='border: solid black 1px'>" +
    "Choix de la ganache : " +
    MCGanache +
    "</p>" +
    "</div>";
  document.getElementById("me4").innerHTML = rows;
});

document.getElementById("ajout5").addEventListener("click", function (event) {
  event.preventDefault();
  var a = document.getElementById("SPart").value;
  var b = document.getElementById("SGlacage");
  var SGlacage = b.options[b.selectedIndex].text;
  var rows = "";
  rows +=
  "<div style=' background-color: #ffe7e8;'>" +
    "<h3 style='color: black; border: solid black 1px'>" +
    "Sablés" +
    "</h3>" +
    "<p style='border: solid black 1px'>" +
    "Nombre de sablés: " +
    a +
    "</p>" +
    "<p style='border: solid black 1px'>" +
    "Choix du glacage : " +
    SGlacage +
    "</p>" +
    "</div>";
  document.getElementById("me5").innerHTML = rows;
});

document.getElementById("ajout6").addEventListener("click", function (event) {
  event.preventDefault();
  var a = document.getElementById("SMPart").value;
  var rows = "";
  rows +=
  "<div style=' background-color: #ffe7e8;'>" +
    "<h3 style='color: black; border: solid black 1px'>" +
    "Sucette Meringue" +
    "</h3>" +
    "<p style='border: solid black 1px'>" +
    "Nombre de sucettes: " +
    a +
    "</p>" +
    "</div>";
  document.getElementById("me6").innerHTML = rows;
});


//  PARTIE VALIDATEURS
function sendRequest(event) {
    event.preventDefault();
    if (ValidateEmail()) {
        fetch("form.php", {
                method: "POST",
                body: new FormData(document.querySelector('form'))
            })
            .then((data) => data.json())
            .then((json) => console.log(json.response))
    }
}

function ValidateEmail() {
    let mail = document.querySelector('input[name=email]');
    let confmail = document.querySelector('input[name=confirmationemail]');
    return (mail.value === confmail.value);
}

function confirmEmail() {
    const email = document.getElementById("emailAddress").value
    const confemail = document.getElementById("confirmationemail").value
    const confemailA = document.getElementById("confirmationemail")
    const emailA = document.getElementById("emailAddress")
    if (email != confemail) {
        alert('Email Not Matching!');
        emailA.classList.add("bordure");
        confemailA.classList.add("bordure");
    } else {
        emailA.classList.remove("bordure");
        confemailA.classList.remove("bordure");
    }
};


// taille de l'image upload dans la partie cake design
function returnFileSize(number) {
  if(number < 1024) {
    return number + 'bytes';
  } else if(number >= 1024 && number < 1048576) {
    return (number/1024).toFixed(1) + 'KB';
  } else if(number >= 1048576) {
    return (number/1048576).toFixed(1) + 'MB';
  }
};



// $(function() {
//     $("#newCake").click(function(e) {
//         var newSelect = $("#ChoicesCakes").clone();
//         newSelect.val("");
//         $(".lab").append(newSelect);
//     });
// });



// click button newCake add clone ChoicesCakes jquery
// $(document).ready(function () {
//   $("#newCake").click(function (e) {
//     e.preventDefault();
//     $("#ChoicesCakes").clone().appendTo(".lab");
//   });
// });

// CODE DIM
// const myForm = document.querySelector(".container");
// const affichageDuContenu = document.querySelector(".right");
// let loadFormData = [];
// const ajout = document.getElementById("ajout1");
// ajout.addEventListener("click", function (e) {
//   e.preventDefault();
//   const myFormContent = new FormData(myForm);
//   loadFormData.push(myFormContent);
// });

// function AfficherForm() {
//   loadFormData.forEach(function (element) {
//     for (var pair of element.entries()) {
//       const p = document.createElement("p");
//       p.textContent = pair[0] + ": " + pair[1];
//       affichageDuContenu.appendChild(p);
//     }
//   });
// }