
	var gallery = document.querySelector('.gallery');
	org_html = document.querySelector(".gallery").innerHTML;
	new_html = "<div class='slides'>" + org_html + "</div>";
	document.querySelector(".gallery").innerHTML = new_html;
	var slides = document.getElementsByClassName('tinyslide');
	var slidenum = slides.length;
	var wrapperwidth = gallery.offsetWidth;
	var sliderwidth = slidenum * wrapperwidth;
	var nav = document.createElement("ul");
	nav.setAttribute('class', 'nav'); 
	nav.innerHTML = '<li class="nav-prev"><a href="javascript:void(0)" onclick="forward()"><</a></li><li class="nav-next"><a href="javascript:void(0)" onclick="backward()">></a></li>';
	document.querySelector('.gallery').appendChild(nav);
	var prev = document.querySelector('.nav-prev');
	var next = document.querySelector('.nav-next');
	for (var i = 0; i < slidenum; i++) {
		slides[i].setAttribute("style","width:"+wrapperwidth+'px');
	}
	document.querySelector('.slides').setAttribute("style","width:"+sliderwidth+'px');
	var count = 1;
	function forward(){
		if(count>1) {
			document.querySelector('.slides').style.transform = "translateX(-"+wrapperwidth*count+"px)";
			count--;
		}
		else {
			count = slidenum-1;
			document.querySelector('.slides').style.transform = "translateX(-"+wrapperwidth*count+"px)";
		}
	}
	function backward(){
		if(count<slidenum) {
			document.querySelector('.slides').style.transform = "translateX(-"+wrapperwidth*count+"px)";
			count++;
		}
		else {
			count = 1;
			document.querySelector('.slides').style.transform = "translateX(0px)";
		}
	}


