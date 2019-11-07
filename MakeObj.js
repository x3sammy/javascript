	//this code will make an object of arrays properties next to them x3
  
	'use strict';
	var ar=['one','this is one','two',2,'three',3,'four',4];
	function makeObj(arr){
		var oar=[];
		var newar=[];
		var ob={};
		for(var v in arr){
			if(arr[v*2]!==undefined){
				oar[v]=arr[v*2];
			};
		};
		for(var v in arr){
			if(arr[(v*2)+1]!==undefined){
				newar[v]=arr[(v*2)+1];
			};
		};
		for(var v in oar){
			ob[oar[v]]=newar[v];
		};
		return ob;
	};
