function delArray(array,value,times){
		try{
			if((array==null)&&(value==null)){
				throw new Error('This Function Expect\'s Two Parameter');
			}else if(!(array instanceof Array)){
				throw new Error("First Argument Should Be An Array");
			}else if(typeof(value)=='object'){
				throw new Error("Second Argument Should Be A String Or A Number");
			}else{
				if(times!=null){
					var num=Number(times);
					if(isNaN(num)||typeof(times)=='object'){
						throw new Error('third argument should be a number');
					}
					for(var i=0;i<times;i++){
						array.splice(array.indexOf(value),1);
					};
				}else{
					array.forEach(function(val,ind){
						if(val==value){
							array.splice(array.indexOf(value),1);
						}
					});
				}
				return array;
			}
		}catch(error){
			console.log("%c"+error.message,'color:red;font-size:16px;font-family:arial');
		}
	}
