$(document).ready(function(){
	//搜索切换
	(function(){
		var aLi=$('#menu li');
		var arrText=['例如：荷棠鱼坊烤鱼 或 樱花日本料理',
			'例如：昌平区育新站龙旗广场2号楼609室',
			'例如：万达影院双人情侣卷',
			'例如：东莞出事了，大老虎是谁？',
			'例如：北京初春降雪，天气变幻莫测'
		]
		var iNow=0;
		var text=$('#search .form .text');
		text.val(arrText[iNow]);
		aLi.each(function( index ){
			$(this).click(function(){
				aLi.attr('class','gradient');
				$(this).attr('class','active');
				iNow=index;
				text.val(arrText[index]);
			})
			/*text.focus(function(){
				if(text.val()==arrText[index]){
					text.val('');
				}
			})
			text.blur(function(){
				if (text.val()=='') {
					text.val(arrText[index]);
				};
			})*/
		})
		text.focus(function(){
			if ($(this).val()==arrText[iNow]) {
				$(this).val('');
			};
		})
		text.blur(function(){
			if ($(this).val()=='') {
				$(this).val(arrText[iNow]);
			};
		})
	})();
	//update更新
	(function(){
		var upDate=$('.update');
		var oUl=upDate.find('ul');
		var oUp=$('#updateUp');
		var oDown=$('#updateDown');
		var iNow=0;
		var timer=null;
		var arrDate=[{'name':'萱萱','time':5,'title':'那些灿烂阳光的瞬间','url':'http://www.baidu.com'},
		{'name':'畅畅','time':7,'title':'广东3天抓获涉黄疑犯','url':'http://www.baidu.com'},
		{'name':'萱萱','time':8,'title':'国台办回应徐才厚','url':'http://www.baidu.com'},
		{'name':'畅畅','time':9,'title':'东莞扫黄何时了','url':'http://www.baidu.com'},
		{'name':'萱萱','time':10,'title':'那些灿烂阳光的瞬间','url':'http://www.baidu.com'},
		{'name':'畅畅','time':11,'title':'广东3天抓获涉黄疑犯','url':'http://www.baidu.com'},
		{'name':'萱萱','time':12,'title':'国台办回应徐才厚','url':'http://www.baidu.com'},
		{'name':'畅畅','time':13,'title':'东莞扫黄何时了','url':'http://www.baidu.com'}
		];
		var str='';
		for (var i = 0; i < arrDate.length; i++) {
			str+='<li><a href="'+arrDate[i].url+'"><strong>'+arrDate[i].name+' </strong><span>'+arrDate[i].time+'分钟前</span>  '+arrDate[i].title+'</a></li>';
		};
		oUl.html(str);
		var iH=oUl.find('li').height();
		//oUl.animate({'top':iH*-1},2500);
		oUp.click(function(){
			doMove(-1);
		});
		oDown.click(function(){
			doMove(1);
		})

		function autoPlay(){
			timer=setInterval(function(){
			doMove(-1);
			},2000)
		}
		autoPlay();

		upDate.hover(function(){
			clearInterval(timer);
		},function(){autoPlay()});

		function doMove(num){
			iNow=iNow+num;
			if(Math.abs(iNow)>arrDate.length-1){
				iNow=0;
			}
			if (iNow>0) {
				iNow=-(arrDate.length-1);
			};
			oUl.stop().animate({'top':iH*iNow},2300,'elasticOut');
		}
	})();
	//nav的tab切换
	(function(){
		fnTab($('.tabNav1'),$('.tabCon1'));
		fnTab($('.tabNav2'),$('.tabCon2'));
		function fnTab(oNav,oCon){
			var El=oNav.children();
			oCon.eq(1).hide();
			El.each(function(index){
				$(this).click(function(){
					El.removeClass('active').addClass('gradient');
					$(this).addClass('active');
					El.find('a').attr('class','triangle-down-grey');
					$(this).find('a').attr('class','triangle-down-red');
					oCon.hide().eq(index).show();
				})
			})
		}
	})();
	//tab切换
	(function(){
		fxTab($('.side-section .tab'),$('.tab-list-1'));
		fxTab($('.section .tab'),$('.section .tab-list'));
		function fxTab (oTab,oList) {
			var aLi=oTab.find('li');
			oList.hide().eq(0).show();
			aLi.each(function  (index) {
				$(this).hover(function(){
					aLi.attr('class','gradient');
					$(this).attr('class','active');
					aLi.find('a').attr('class','triangle-down-grey');
					$(this).find('a').attr('class','triangle-down-red');
					oList.hide().eq(index).show();
				})
			})
			console.log(oList.length)
		}
	})();
	//自动播放焦点图
	(function(){
		var uLi=$('#fade ul li');
		var oLi=$('#fade ol li');
		var oP=$('#fade p');
		var arr=['爸爸去哪啦~','人像摄影中的光影带','娇柔妩媚，美艳大方'];
		var iNow=0;
		var timer=null;
		uLi.hide().eq(0).show();
		/*oLi.each(function(index){
			$(this).mouseover(function(){
				uLi.fadeOut().eq($(this).index()).fadeIn();
				oLi.removeClass('active').eq($(this).index()).addClass('active');
			})
		})*/
		fnFade();
		oLi.click(function(){
			iNow=$(this).index();
			fnFade();
		})
		function doMove () {
			timer=setInterval(function(){
				iNow++;
				iNow%=arr.length;
				fnFade();
			},2000);
		}
		doMove();
		uLi.hover(function(){clearInterval(timer)},function(){doMove()})
		function fnFade(){
			uLi.each(function(i){
				if (i!=iNow) {
					uLi.eq(i).fadeOut();
					oLi.eq(i).removeClass('active');
				}
				else{
					uLi.eq(i).fadeIn();
					oLi.eq(i).addClass('active');
				}
				oP.text(arr[iNow]);
			})
		}
	})();
	//日历today-info信息
	(function(){
		var aSpan=$('.calendar h3 span');
		var aImg=$('.calendar ol img');
		var oInfo=$('.calendar .today-info');
		var img=$('.calendar .today-info img');
		var oEm=$('.calendar .today-info em');
		var oP=$('.calendar .today-info p');

		aImg.hover(function(){
			var L=$(this).parent().position().left+50;
			var T=$(this).parent().position().top-30;
			var num=$(this).parent().index()%aSpan.size();
			console.log(num)
			oInfo.show().css({left:L ,top:T});
			img.attr('src',$(this).attr('src'));
			oEm.text(aSpan.eq(num).text());
			oP.text($(this).attr('info'));
		},function(){
			oInfo.hide();
		})
	})();
	//bbs内容切换
	(function(){
		$('.bbs ol li').mouseover(function(){
			$('.bbs ol li').removeClass('active');
			$(this).addClass('active');
		})
	})();
	//hot-area鼠标划过
	(function(){
		var arr=[
			'',
			'用户名：1<br>人气：1',
			'用户名：性感宝贝<br>区域：朝阳区<br>人气：12345',
			'用户名：2<br>人气：2',
			'用户名：3<br>人气：3',
			'用户名：4<br>人气：4',
			'用户名：5<br>人气：5',
			'用户名：6<br>人气：6',
			'用户名：7<br>人气：7',
			'用户名：8<br>人气：8',
			'用户名：9<br>人气：9',
			'用户名：10<br>人气：10',
		];
		$('.hot-area li').mouseover(function(){
			if($(this).index()==0)return;
			$('.hot-area li p').remove();
			$('.hot-area li').removeClass('area1');
			$(this).addClass('area1');
			$(this).append('<p style="width:'+($(this).width()-14)+'px;'+($(this).height()-12)+'px;">'+arr[$(this).index()]+'</p>')
		})
	})();
})
