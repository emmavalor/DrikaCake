// ----------------------------------------------  hide all choice except the first one
function hideChoices() {
  document.getElementById("ChoiceNB").style.display = "none";
  document.getElementById("ChoiceCD").style.display = "none";
  document.getElementById("ChoiceCT").style.display = "none";
  document.getElementById("ChoiceMC").style.display = "none";
  document.getElementById("ChoiceS").style.display = "none";
  document.getElementById("ChoiceSM").style.display = "none";
  document.getElementById("ChoiceCP").style.display = "none";
  document.getElementById("ChoiceNC").style.display = "none";
  document.getElementById("ChoiceTB").style.display = "none";
  document.getElementById("MoelleuxChoco").style.display = "none";
  document.getElementById("MousseFruit").style.display = "none";
  document.getElementById("Pudim").style.display = "none";
  document.getElementById("Quindim").style.display = "none";
  document.getElementById("SachetSable").style.display = "none";
}
hideChoices();

// ----------------------------------------------  if NB is select display block NBChoice
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

  if (document.getElementById("ChoicesCakes").value == "CP") {
    document.getElementById("ChoiceCP").style.display = "block";
  }
  else {
    document.getElementById("ChoiceCP").style.display = "none";
  }

  if (document.getElementById("ChoicesCakes").value == "NC") {
    document.getElementById("ChoiceNC").style.display = "block";
  }
  else {
    document.getElementById("ChoiceNC").style.display = "none";
  }

  if (document.getElementById("ChoicesCakes").value == "TB") {
    document.getElementById("ChoiceTB").style.display = "block";
  }
  else {
    document.getElementById("ChoiceTB").style.display = "none";
  }

if (document.getElementById("ChoicesCakes").value == "DQ") {
  document.getElementById("Quindim").style.display = "block";
} else {
  document.getElementById("Quindim").style.display = "none";
}

if (document.getElementById("ChoicesCakes").value == "DP") {
  document.getElementById("Pudim").style.display = "block";
} else {
  document.getElementById("Pudim").style.display = "none";
}

if (document.getElementById("ChoicesCakes").value == "DMFP") {
  document.getElementById("MousseFruit").style.display = "block";
} else {
  document.getElementById("MousseFruit").style.display = "none";
}

if (document.getElementById("ChoicesCakes").value == "DMC") {
  document.getElementById("MoelleuxChoco").style.display = "block";
} else {
  document.getElementById("MoelleuxChoco").style.display = "none";
}

if (document.getElementById("ChoicesCakes").value == "DSS") {
  document.getElementById("SachetSable").style.display = "block";
} else {
  document.getElementById("SachetSable").style.display = "none";
}
};



// ----------------------------------------------  Ajouter un gateau

// Number Cake 
document.getElementById("ajout1").addEventListener("click", function (event) {
  event.preventDefault();
  // var z = document.getElementById("NBName").textContent;
  var a = document.getElementById("field1").value;
  var b = document.getElementById("field2").value;
  var c = document.getElementById("NBGenoise");
  var d = document.getElementById("NBGanache");
  var genoise = c.options[c.selectedIndex].text;
  var ganache = d.options[d.selectedIndex].text;
  var rows = "";
  rows +=
  "<div style=' background-color: #ffe7e8;'>" +
    // "<h3 style='color: black; border: solid black 1px'>" +
    // z +
    // "</h3>" +
    "<p style='border: solid black 1px'>" +
    "Nombre de votre gâteau : " +
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

// Cake Design 
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

// Cake traditionnel
document.getElementById("ajout3").addEventListener("click", function (event) {
  event.preventDefault();
  var a3 = document.getElementById("TypeCake");
  var TypeCake = a3.options[a3.selectedIndex].text;
  var rows3 = "";
  rows3 +=
  "<div style=' background-color: #ffe7e8;'>" +
    "<h3 style='color: black; border: solid black 1px'>" +
    "Cake Traditionnel" +
    "</h3>" +
    "<p style='border: solid black 1px'>" +
    "Choix du cake : " +
    TypeCake +
    "</p>" + 
    "</div>";
  document.getElementById("me3").innerHTML = rows3;
});

// Mini Cupcake
document.getElementById("ajout4").addEventListener("click", function (event) {
  event.preventDefault();
  var a4 = document.getElementById("MCPart").value;
  var b4 = document.getElementById("MCGanache");
  var MCGanache = b4.options[b4.selectedIndex].text;
  var rows = "";
  rows +=
  "<div style=' background-color: #ffe7e8;'>" +
    "<h3 style='color: black; border: solid black 1px'>" +
    "Mini Cupcake" +
    "</h3>" +
    "<p style='border: solid black 1px'>" +
    "Nombre de parts : " +
    a4 +
    "</p>" +
    "<p style='border: solid black 1px'>" +
    "Choix de la ganache : " +
    MCGanache +
    "</p>" +
    "</div>";
  document.getElementById("me4").innerHTML = rows;
});

// Sablé
document.getElementById("ajout5").addEventListener("click", function (event) {
  event.preventDefault();
  var a5 = document.getElementById("SPart").value;
  var b5 = document.getElementById("SGlacage");
  var SGlacage = b5.options[b5.selectedIndex].text;
  var rows = "";
  rows +=
  "<div style=' background-color: #ffe7e8;'>" +
    "<h3 style='color: black; border: solid black 1px'>" +
    "Sablés" +
    "</h3>" +
    "<p style='border: solid black 1px'>" +
    "Nombre de sablés: " +
    a5 +
    "</p>" +
    "<p style='border: solid black 1px'>" +
    "Choix du glacage : " +
    SGlacage +
    "</p>" +
    "</div>";
  document.getElementById("me5").innerHTML = rows;
});

// Sucette Meringue
document.getElementById("ajout6").addEventListener("click", function (event) {
  event.preventDefault();
  var a6 = document.getElementById("SMPart").value;
  var rows = "";
  rows +=
  "<div style=' background-color: #ffe7e8;'>" +
    "<h3 style='color: black; border: solid black 1px'>" +
    "Sucette Meringue" +
    "</h3>" +
    "<p style='border: solid black 1px'>" +
    "Nombre de sucettes: " +
    a6 +
    "</p>" +
    "</div>";
  document.getElementById("me6").innerHTML = rows;
});

// Naked Cake 
document.getElementById("ajout7").addEventListener("click", function (event) {
  event.preventDefault();
  var a7 = document.getElementById("NCPart").value;
  var b7 = document.getElementById("NCGenoise");
  var c7 = document.getElementById("allergie").value;
  var d7 = document.getElementById("messagesupplementaire").value;
  var NCGenoise = b7.options[b7.selectedIndex].text;
  var rows = "";
  rows +=
  "<div style=' background-color: #ffe7e8;'>" +
    "<h3 style='color: black; border: solid black 1px'>" +
    "Naked Cake" +
    "</h3>" +
    "<p style='border: solid black 1px'>" +
    "Nombre de parts : " +
    a7 +
    "</p>" +
    "<p style='border: solid black 1px'>" +
    "Choix de la genoise : " +
    NCGenoise +
    "</p>" +
    "<p style='border: solid black 1px'>" +
    "Allergie : " +
    c7 +
    "</p>" +
    "<p style='border: solid black 1px'>" +
    "Message supplémentaire : " +
    d7 +
    "</p>" +
    "</div>";
  document.getElementById("me7").innerHTML = rows;
});

// Cake Pop
document.getElementById("ajout9").addEventListener("click", function (event) {
  event.preventDefault();
  var a9 = document.getElementById("CPPart").value;
  var rows = "";
  rows +=
  "<div style=' background-color: #ffe7e8;'>" +
    "<h3 style='color: black; border: solid black 1px'>" +
    "Cake Pop" + 
    "</h3>" +
    "<p style='border: solid black 1px'>" +
    "Nombre de parts : " +
    a9 +
    "</p>" +
    "</div>";
  document.getElementById("me9").innerHTML = rows;
});

// Truffe Bresilienne
document.getElementById("ajout10").addEventListener("click", function (event) {
  event.preventDefault();
  var a10 = document.getElementById("TypeTB");
  var selectTD = a10.options[a10.selectedIndex].text;
  var rows = "";
  rows +=
  "<div style=' background-color: #ffe7e8;'>" +
    "<h3 style='color: black; border: solid black 1px'>" +
    "Truffes Bresilienne" +
    "</h3>" +
    "<p style='border: solid black 1px'>" +
    "Choix du cake : " +
    selectTD +
    "</p>" +
    "</div>";
  document.getElementById("me10").innerHTML = rows;
});

// Moelleux Choco
document.getElementById("ajout11").addEventListener("click", function (event) {
  event.preventDefault();
  var a11 = document.getElementById("PartMoelleuxChoco").value;
  var rows = "";
  rows +=
  "<div style=' background-color: #ffe7e8;'>" +
    "<h3 style='color: black; border: solid black 1px'>" +
    "Moelleux Choco" +
    "</h3>" +
    "<p style='border: solid black 1px'>" +
    "Nombre de part : " +
    a11 +
    "</p>" +
    "</div>";
  document.getElementById("me11").innerHTML = rows;
});

// Mousse Fruit
document.getElementById("ajout12").addEventListener("click", function (event) {
  event.preventDefault();
  var a12 = document.getElementById("PartMousseFruit").value;
  var rows = "";
  rows +=
  "<div style=' background-color: #ffe7e8;'>" +
    "<h3 style='color: black; border: solid black 1px'>" +
    "Mousse Fruit" +
    "</h3>" +
    "<p style='border: solid black 1px'>" +
    "Nombre de part : " +
    a12 +
    "</p>" +
    "</div>";
  document.getElementById("me12").innerHTML = rows;
});

// Pudim
document.getElementById("ajout13").addEventListener("click", function (event) {
  event.preventDefault();
  var a13 = document.getElementById("PartPudim").value;
  var rows = "";
  rows +=
  "<div style=' background-color: #ffe7e8;'>" +
    "<h3 style='color: black; border: solid black 1px'>" +
    "Pudim" +
    "</h3>" +
    "<p style='border: solid black 1px'>" +
    "Nombre de part : " +
    a13 +
    "</p>" +
    "</div>";
  document.getElementById("me13").innerHTML = rows;
});

// Quindim  
document.getElementById("ajout14").addEventListener("click", function (event) {
  event.preventDefault();
  var a14 = document.getElementById("PartQuindim").value;
  var rows = "";
  rows +=
  "<div style=' background-color: #ffe7e8;'>" +
    "<h3 style='color: black; border: solid black 1px'>" +
    "Quindim" +
    "</h3>" +
    "<p style='border: solid black 1px'>" +
    "Nombre de part : " +
    a14 +
    "</p>" +
    "</div>";
  document.getElementById("me14").innerHTML = rows;
});

// Sachet Sable
document.getElementById("ajout15").addEventListener("click", function (event) {
  event.preventDefault();
  var a15 = document.getElementById("PartSachetSable").value;
  var rows = "";
  rows +=
  "<div style=' background-color: #ffe7e8;'>" +
    "<h3 style='color: black; border: solid black 1px'>" +
    "Sachet Sable" +
    "</h3>" +
    "<p style='border: solid black 1px'>" +
    "Nombre de part : " +
    a15 +
    "</p>" +
    "</div>";
  document.getElementById("me15").innerHTML = rows;
});




// ----------------------------------------------  PARTIE VALIDATEURS
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