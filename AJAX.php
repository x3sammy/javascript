<input type='button' id='btn' value='loadViaAjax'/>
<br/>
<br/>
<div id='war'></div>
<div id='loadScript'></div>
<script>
	'use strict';
	function ajax(){
		var xhr;
		if(window.XMLHttpRequest){
			xhr=new window.XMLHttpRequest()
		}else{
			xhr=new window.ActiveXObject('Microsoft.XMLHTTP');
		};
		return xhr;
	};
	document.getElementById('btn').onclick=function(){
		var xhr=ajax();
		xhr.onreadystatechange=function(){
			if((this.readyState==4)&&(this.status==200)){
				document.getElementById('war').innerHTML=this.responseText;
				var war=document.getElementById('war').querySelectorAll('script');
				for(var v in war){
					if(typeof(war[v])=='function'||typeof(war[v])=='number'||typeof(war[v])=='string'){
						continue;
					}else{
						var cr=document.createElement('script');
						cr.async=true;
						var no=document.createTextNode(war[v].innerHTML);
						cr.appendChild(no);
						document.getElementById('loadScript').insertAdjacentElement('afterbegin',cr);
						document.getElementById('war').querySelectorAll('script')[0].remove();
						document.getElementById('loadScript').querySelectorAll('script')[0].remove();
					};
				};
			};
		};
		xhr.open('post','pageB.php',true);
		xhr.send(null);	
	};
</script>
	
