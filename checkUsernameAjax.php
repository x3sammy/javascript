<form action='wo.php' method='post' id='form'>
	<input type='text' id='txt' name='uname' placeholder='UserName'/>
	<input type='submit' disabled=true value='Submit' name='submit' id='sub'/>
</form>
<div id='war'></div>
<script>
	'use strict';
	var ajax=function(){
		var xhr;
		if(window.XMLHttpRequest){
			xhr=new XMLHttpRequest();
		}else{
			xhr=new ActiveXObject('Microsoft.XMLHTTP');
		};
		return xhr;
	};
	document.getElementById('form').onsubmit=function(){
		if(document.getElementById('txt').value.length==0){
			alert('use a proper username first');
			return false;
		};
	};
	document.getElementById("txt").onkeyup=function(){
		var xhr=ajax();
		if(this.value.length>3){
			xhr.onreadystatechange=function(){
				if(this.readyState<4){
					document.getElementById('war').innerHTML='Loading...';
				};
				if(this.readyState==4&&this.status==200){
				   	var btn=document.getElementById('sub');
					if(this.responseText=='true'){
						sub.disabled=false;
						document.getElementById('war').innerHTML='You are allowed to login';
						document.getElementById("sub").onclick=function(){
							return true;
						};						
					}else if(this.responseText=='false'){
						sub.disabled=true;
						document.getElementById('war').innerHTML='You are not allowed to login';
						document.getElementById("sub").onclick=function(){
							return false;
						};
					};
				};
			};
			xhr.open('post','jo.php',true);
			xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
			xhr.send('uname='+this.value);
		}else if(this.value.length<=3){
			document.getElementById('war').innerHTML='';
			document.getElementById('sub').disabled=true;
		};
	};
