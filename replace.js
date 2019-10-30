'use strict';
function repx(rval,val,rep,count){
	if(count!=null){
		for(var i=0;i<count;i++){
			rval=rval.replace(val,rep);
		};
		return rval;
	}else{
		while(rval.match(val)!=null){
			rval=rval.replace(val,rep);
		};
		return rval;
	};
};
