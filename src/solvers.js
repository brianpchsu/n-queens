/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var solution = []; //fixme
  var newBoard = new Board({'n':n});

  var search = function(row, currentSolution){
    // debugger;
    if(n > 4){
      return;
    }
    if(n === row){
      // if(!currentSolution.hasAnyRooksConflicts()){
        // console.log("HERE" + JSON.stringify(currentSolution.rows()));
        solution.push(currentSolution.rows().slice());
      // }
    }else{
      for(var col = 0; col < n; col++){
        console.log("C: " + JSON.stringify(currentSolution.rows()));
        var newObeject = jQuery.extend({}, currentSolution);
          if(col === 1){
            debugger;
          }
          console.log("S: " + JSON.stringify(newObeject.rows()));

          newObeject.togglePiece(row, col);
          // currentSolution.togglePiece(row, col);
        if(newObeject.hasAnyRooksConflicts()){
          newObeject.togglePiece(row, col);
        }else{
          search(row+1, newObeject);
          console.log(newObeject.rows());

        }
          // console.log(row + "," + col);
      }
    }

  }
  search(0, newBoard);

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution[0];
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
