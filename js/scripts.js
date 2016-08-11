$(document).ready(function() {
  $("form#triangleform").submit(function(event) {
    event.preventDefault();
    var side1 = parseFloat($("input#side1").val());
    var side2 = parseFloat($("input#side2").val());
    var side3 = parseFloat($("input#side3").val());
    console.log(side1 + " " + side2 + " " + side3);

    var kindatriangle;

    if (side1 === side2 && side2 === side3) {
      kindatriangle = "an equilateral triangle!";
    }

    else if ((side1 === side2 || side1 === side3 || side2 === side3) && (side1 != side2 || side1 != side3 || side2 != side3) && ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1))) {
      kindatriangle = "an isoceles triangle!";
    }

    else if ((side1 != side2 && side1 != side3 && side2 != side3) && ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1))) {
      kindatriangle = "a scalene triangle!";
    }
     else {
      kindatriangle = "not a triangle, you fool!!!";
    }
    console.log(kindatriangle);
    $("#kindatriangle").empty().text(kindatriangle);
    $("#triangletype").show();
  });
});
