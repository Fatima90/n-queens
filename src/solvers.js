/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangementvsdkfhs of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var board=new Board({n:n});
  var randoms=[];
  for (var i = 0; i < n; i++) {
    var random=Math.floor(Math.random()*n)
    if(randoms.indexOf(random) === -1){
      randoms.push(random);
      board.rows()[i][random] = 1;
    }else{
      i--;
    }
  }
 // console.log('Single solution for ' + n + ' rooks:', JSON.stringify(board));
  return board.rows();
};


function factorial(n){
if(n == 0 || n == 1)
  return 1;  
else
  return n*factorial(n-1);
} 

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = [];
  var stringsArray=[];
  if(n === 1 || n=== 0){
     return 1;
  }
  for (var i = 0; i < factorial(n); i++) {

      var solutionArray=findNRooksSolution(n);
       var solution=JSON.stringify(solutionArray);

       if(stringsArray.indexOf(solution) === -1){
          stringsArray.push(solution);
          //solutionCount.push(solutionArray);
       }

       else{
        i--;
       }

     }

  return stringsArray.length;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  if (n===2 || n===3) {
    return 0;
  }
  var board=new Board({n:n});
  var randoms=[];
  for (var i = 0; i < n; i++) {
    var random=Math.floor(Math.random()*n)
    if(randoms.indexOf(random) === -1){
      if((i !==0 && random !==0) || (i !==0 && random !== n-1)
       || (i !== n-1 && r !== 0)||( i !== n-1 && r !== n-1)){
        
        randoms.push(random);
        board.rows()[i][random] = 1;
        if( board.hasAnyMajorDiagonalConflicts() ||
         board.hasAnyMinorDiagonalConflicts()){
          board.rows()[i][random] = 0;
          i--;
        }
      }
    }else
      i--;
  }
 // // console.log('Single solution for ' + n + ' rooks:', JSON.stringify(board));
   return board.rows();
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
