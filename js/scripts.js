// Business Logic
function Player(mark) {
  this.playerMark = mark;
}

function Space(x, y, who, mark) {
  this.xCoord = x;
  this.yCoord = y;
  this.markedBy = who;
  this.mark = mark;
}



// User Interface Logic
$(document).ready(function() {
  var player1 = new Player("X");
  var player2 = new Player("O");
  var board = [];
  var counter = 1;

  var space1 = {xCoord: 1, yCoord: 1, markedBy: undefined, mark: undefined};
  var space2 = {xCoord: 1, yCoord: 2, markedBy: undefined, mark: undefined};
  var space3 = {xCoord: 1, yCoord: 3, markedBy: undefined, mark: undefined};
  var space4 = {xCoord: 2, yCoord: 1, markedBy: undefined, mark: undefined};
  var space5 = {xCoord: 2, yCoord: 2, markedBy: undefined, mark: undefined};
  var space6 = {xCoord: 2, yCoord: 3, markedBy: undefined, mark: undefined};
  var space7 = {xCoord: 3, yCoord: 1, markedBy: undefined, mark: undefined};
  var space8 = {xCoord: 3, yCoord: 2, markedBy: undefined, mark: undefined};
  var space9 = {xCoord: 3, yCoord: 3, markedBy: undefined, mark: undefined}

  var winCondition = function() {
    if (space1.mark == "X" && space2.mark == "X" && space3.mark =="X") {
      return true;
    } else if (space4.mark == "X" && space5.mark == "X" && space6.mark =="X") {
      true;
    } else if (space7.mark == "X" && space8.mark == "X" && space9.mark =="X") {
      return true;
    } else if (space1.mark == "X" && space4.mark == "X" && space7.mark =="X") {
      return true;
    } else if (space2.mark == "X" && space5.mark == "X" && space8.mark =="X") {
      true;
    } else if (space3.mark == "X" && space6.mark == "X" && space9.mark =="X") {
      return true;
    } else if (space1.mark == "X" && space5.mark == "X" && space9.mark =="X") {
      return true;
    } else if (space1.mark == "X" && space5.mark == "X" && space9.mark =="X") {
      return true;
    } else if (space1.mark == "O" && space2.mark == "O" && space3.mark =="O") {
      return true;
    } else if (space4.mark == "O" && space5.mark == "O" && space6.mark =="O") {
      true;
    } else if (space7.mark == "O" && space8.mark == "O" && space9.mark =="O") {
      return true;
    } else if (space1.mark == "O" && space4.mark == "O" && space7.mark =="O") {
      return true;
    } else if (space2.mark == "O" && space5.mark == "O" && space8.mark =="O") {
      true;
    } else if (space3.mark == "O" && space6.mark == "O" && space9.mark =="O") {
      return true;
    } else if (space1.mark == "O" && space5.mark == "O" && space9.mark =="O") {
      return true;
    } else if (space1.mark == "O" && space5.mark == "O" && space9.mark =="O") {
      return true;
    } else {
      return false;
    }
  }

  var p2Win = function(win) {
    if (win == true) {
      $("#congratulations").show();
      $("#playerOneWin").hide();
      $("#playerTwoCongrats").text("Player 2 Wins");
    }
  }

  var p1Win = function(win) {
    if (win == true) {
      $("#congratulations").show();
      $("#playerTwoWin").hide();
      $("#playerOneCongrats").text("Player 1 Wins");
    }
  }

  $("#one").click(function() {
    // corresponding location is (1,1)
    if (counter%2 == 1) {
      space1.markedBy = "Player 1";
      space1.mark = player1.playerMark;
      $("#one h1").text(space1.mark);
      var win = winCondition();
      p1Win(win);
    } else if (counter%2 == 0) {
      space1.markedBy = "Player 2";
      space1.mark = player2.playerMark;
      $("#one h1").text(space1.mark);
      var win = winCondition();
      p2Win(win);
    }
    counter++;

    event.preventDefault();
  });
  $("#two").click(function(event) {
    // corresponding location is (1,2)
    if (counter%2 == 1) {
      space2.markedBy = "Player 1";
      space2.mark = player1.playerMark;
      $("#two h1").text(space2.mark);
      var win = winCondition();
      p1Win(win);
    } else if (counter%2 == 0) {
      space2.markedBy = "Player 2";
      space2.mark = player2.playerMark;
      $("#two h1").text(space2.mark);
      var win = winCondition();
      p2Win(win);
    }
    counter++;

    event.preventDefault();
  });
  $("#three").click(function() {
    // corresponding location is (1,3)
    if (counter%2 == 1) {
      space3.markedBy = "Player 1";
      space3.mark = player1.playerMark;
      $("#three h1").text(space3.mark);
      var win = winCondition();
      p1Win(win);
    } else if (counter%2 == 0) {
      space3.markedBy = "Player 2";
      space3.mark = player2.playerMark;
      $("#three h1").text(space3.mark);
      var win = winCondition();
      p2Win(win);
    }
    counter++;

    event.preventDefault();
  });
  $("#four").click(function() {
    // corresponding location is (2,1)
    if (counter%2 == 1) {
      space4.markedBy = "Player 1";
      space4.mark = player1.playerMark;
      $("#four h1").text(space4.mark);
      var win = winCondition();
      p1Win(win);
    } else if (counter%2 == 0) {
      space4.markedBy = "Player 2";
      space4.mark = player2.playerMark;
      $("#four h1").text(space4.mark);
      var win = winCondition();
      p2Win(win);
    }
    counter++;

    event.preventDefault();
  });
  $("#five").click(function() {
    // corresponding location is (2,2)
    if (counter%2 == 1) {
      space5.markedBy = "Player 1";
      space5.mark = player1.playerMark;
      $("#five h1").text(space5.mark);
      var win = winCondition();
      p1Win(win);
    } else if (counter%2 == 0) {
      space5.markedBy = "Player 2";
      space5.mark = player2.playerMark;
      $("#five h1").text(space5.mark);
      var win = winCondition();
      p2Win(win);
    }
    counter++;

    event.preventDefault();
  });
  $("#six").click(function() {
    // corresponding location is (2,3)
    if (counter%2 == 1) {
      space6.markedBy = "Player 1";
      space6.mark = player1.playerMark;
      $("#six h1").text(space6.mark);
      var win = winCondition();
      p1Win(win);
    } else if (counter%2 == 0) {
      space6.markedBy = "Player 2";
      space6.mark = player2.playerMark;
      $("#six h1").text(space6.mark);
      var win = winCondition();

      p2Win(win);
    }
    counter++;

    event.preventDefault();
  });
  $("#seven").click(function() {
    // corresponding location is (3,1)
    if (counter%2 == 1) {
      space7.markedBy = "Player 1";
      space7.mark = player1.playerMark;
      $("#seven h1").text(space7.mark);
      var win = winCondition();
      p1Win(win);
    } else if (counter%2 == 0) {
      space7.markedBy = "Player 2";
      space7.mark = player2.playerMark;
      $("#seven h1").text(space7.mark);
      var win = winCondition();
      p2Win(win);
    }
    counter++;

    event.preventDefault();
  });
  $("#eight").click(function() {
    // corresponding location is (3,2)
    if (counter%2 == 1) {
      space8.markedBy = "Player 1";
      space8.mark = player1.playerMark;
      $("#eight h1").text(space8.mark);
      var win = winCondition();
      p1Win(win);
    } else if (counter%2 == 0) {
      space8.markedBy = "Player 2";
      space8.mark = player2.playerMark;
      $("#eight h1").text(space8.mark);
      var win = winCondition();
      p2Win(win);
    }
    counter++;

    event.preventDefault();
  });
  $("#nine").click(function() {
    // corresponding location is (3,3)
    if (counter%2 == 1) {
      space9.markedBy = "Player 1";
      space9.mark = player1.playerMark;
      $("#nine h1").text(space9.mark);
      var win = winCondition();
      p1Win(win);
    } else if (counter%2 == 0) {
      space9.markedBy = "Player 2";
      space9.mark = player2.playerMark;
      $("#nine h1").text(space9.mark);
      var win = winCondition();
      p2Win(win);
    }
    counter++;

    event.preventDefault();
  });


});



// alert("hello");

// for (var x=1; x<=3; x++){
//   for( var y=1; y<=3; y++) {
//     var newSpace = new Space(x, y);
//     // alert(space.xCoord+", "+space.yCoord);
//     board.push(newSpace);
//     // alert(board.length)
//   }
// }
