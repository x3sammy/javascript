String.prototype.toUcWords=function(){
		var res=this;
		var sp=res.split(' ');
	 	var xa='';
	 	for(var v in sp){
	 		if(sp[v][0]==undefined){
	 			xa+=' ';
	 		}else{
	 			var newval=sp[v][0];
	 			var newval2=sp[v][0].toUpperCase();
	 			var rep=sp[v].replace(newval,newval2);
	 			if(v==sp.length-1){
	 				xa+=rep;
	 				return xa;
	 			}else{
	 				xa+=rep+" ";
	 			};
	 		}
	 	};
	 	return xa;
	 };
