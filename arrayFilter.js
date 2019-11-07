'use strict';

function nef(){};

var newFilter=new nef();

newFilter.fndType=function(arr,val){
	var ax=[];
	if(!(arr instanceof Array)){
		throw new Error('first argument should be an array');
	}else{
		if(val!==undefined){
			if(val==='object'){
				for(var v in arr){
					if(typeof(arr[v])==='object'&&!(arr[v] instanceof Array)){
						ax.push(JSON.stringify(arr[v]));
					}
				}
			}else{
				for(var v in arr){
					if(typeof(arr[v])===val){
						ax.push(arr[v]);
					}
				}
			}
		}
	}
	return ax;
};


newFilter.fiAlike=function(ar,val){
	if(ar===undefined){
		throw new Error('this function expect\'s an argument');
	}else if(!(ar instanceof Array)){
		throw new Error('first argument should be an Array');
	}else{
		var arra=[];
		var xa=[];
		var len=[];
		if(val!==undefined){
			for(var v in ar){
				if(ar.indexOf(ar[v])!=v){
					xa.push(ar[v]);
				}
			};
			for(var v in xa){
				if(xa[v]==val){
					len.push(val[v]);
				}
			}
			return len.length+1;
		}else{
			for(var v in ar){
				if(ar.indexOf(ar[v])!=v){
					arra.push(ar[v]);
				}
			}
		}
		return arra;
	}
};
