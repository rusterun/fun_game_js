var hard=false;
var easy=false;

window.onload = function() {
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
	// код для мобильных устройств
		alert('Извините, но игра не поддерживается на мобильных устройствах');
		window.close();
	} else {
		var diff = document.getElementById('difficult');
		var el2 = document.getElementById("linka2");
		var element = document.getElementById("linka");
		element.style.top = "0px";
		//el.style.top = "276px";
		element.onmouseover=function() {
		if (!easy) {
			if (element.style.top == "0px") {element.style.top = "275px";}
			else {element.style.top = "0px";}
		}
		let rand = Math.floor(Math.random()*185);
		element.style.left = `${rand}px`;
		};


		el2.onmouseover=function() {
			if (hard) {
			element.style.color = "gray";
		}
		};

		el2.onmouseout=function() {
			if (hard) {
			element.style.color = "blue";
		};

		};
	};
console.log("Info: "+(element.style.top=="0px"));

};
