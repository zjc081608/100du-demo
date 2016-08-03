
/*nav-icon图标位置*/

window.onload=function  () {
	var oNav=document.getElementById('nav');
	var aBg=getClassName(oNav,'bg');
	var j=0;
	for (var i = 0; i < aBg.length; i++) {
		aBg[i].style.backgroundPosition=-66*j+'px 0';
		if(j>=0&&j<aBg.length){
			j++;
		}
	};
	for (var i = 0; i < aBg.length; i++) {
		aBg[i].index=i;
		aBg[i].onmouseover=function(){
			for (var i = 0; i < aBg.length; i++) {
				this.style.backgroundPosition=-66*this.index+'px -70px';
			/*	即background-position：-66*i -77px；*/
			};
		}
		aBg[i].onmouseout=function(){
			for (var i = 0; i < aBg.length; i++) {
				this.style.backgroundPosition=-66*this.index+'px 0';
			};
		}
	};
}

function getClassName(parent,oClass){
	var oEle=document.getElementsByTagName('*');
	var arr=[];
	for (var i = 0; i < oEle.length; i++) {
		if(oEle[i].className==oClass){
			arr.push(oEle[i]);
		}
	};
	return arr;
}