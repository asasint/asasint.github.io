function progressBar(percent, $element) {
	"use strict"; 
	var progressBarWidth = percent * $element.width() / 100;
	$element.find('div').animate({ width: percent+'%' }, 500).html("<span>"+percent + "</span>");
}

function progressBarWithoutPercent($element) {
	"use strict"; 
	var progressBarWidth =  100;
	$element.find('div').animate({ width: 100+'%' }, 500).html("");
}