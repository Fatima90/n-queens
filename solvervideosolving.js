findsolution= function(row,n,board,validator,callback){
	if(row === n){
	callback();
	return;
	}
	for(var i=0;i<n;i++){
	if(!board.validator())
	fincSolution(row+1,n,board,callback)
	}

	board.togglePiece(row,i)
}

coutNqueen=function(n){
var solutioncount=0;
var board=new board
findsolution(0,n,board,"hasanyqueenconfilct",function(){
	solutioncount++;
})
return solutioncount;

findNrookssolution=function(n){
	var solution= undefind;
	var board=new Board({n:n});
	findsolution(0,n,board,"hasanyrookconfilct",function(){
	solution=_.map(borad.rows(),function(row){
		return row.slice();
	})
})
return soltion;
}

findNqueensolution=function(){
	var board= new board();
	var soltuin=board.rows()
	var board=new Board({n:n});
	findsolution(0,n,board,"hasanyqueenconfilct",function(){
	solution=_.map(borad.rows(),function(row){
		return row.slice();
	})
})
return soltion;
}