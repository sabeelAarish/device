function getiPhoneModel() {
	// Get renderer info from cavas.
	var canvas = document.createElement("canvas");
	if (canvas) {
		var context = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
		if (context) {
			var info = context.getExtension("WEBGL_debug_renderer_info");
			if (info) {
				var renderer = context.getParameter(info.UNMASKED_RENDERER_WEBGL);
			}
		}
	}
	var ratio = window.devicePixelRatio;
	// iPhone XR, iPhone XS Max
	if (window.screen.height / window.screen.width == 896 / 414) {
		switch (ratio) {
		default:
			alert ("iPhone XR, iPhone XS Max");
		case 2:
			alert ("iPhone XR");
		case 3:
			alert ("iPhone XS Max");
		}
	}
	// iPhone X, iPhone XS
	else if (window.screen.height / window.screen.width == 812 / 375) {
		switch (renderer) {
		default:
			alert ("iPhone X, iPhone XS");
		case "Apple A11 GPU":
			alert ("iPhone X");
		case "Apple A12 GPU":
			alert ("iPhone XS");
		}
	}
	// iPhone 6+, iPhone 6s+, iPhone 7+, iPhone 8+
	else if (window.screen.height / window.screen.width == 736 / 414) {
		switch (renderer) {
		default:
			alert ("iPhone 6 Plus, 6s Plus, 7 Plus or 8 Plus");
		case "Apple A8 GPU":
			alert ("iPhone 6 Plus");
		case "Apple A9 GPU":
			alert ("iPhone 6s Plus");
		case ("Apple A10 GPU"):
			alert ("iPhone 7 Plus");
		case "Apple A11 GPU":
			alert ("iPhone 8 Plus");
		}
	}
	// iPhone 6, iPhone 6s, iPhone 7, iPhone 8
	else if (window.screen.height / window.screen.width == 667 / 375) {
		if (ratio == 2) {
			switch (renderer) {
			default:
				alert ("iPhone 6, 6s, 7 or 8");
			case "Apple A8 GPU":
				alert ("iPhone 6");
			case "Apple A9 GPU":
				alert ("iPhone 6s");
			case "Apple A10 GPU":
				alert ("iPhone 7");
			case "Apple A11 GPU":
				alert ("iPhone 8");
			}
		} else {
			// or in zoom mode: iPhone 6+, iPhone 6S+, iPhone 7+, iPhone 8+
			switch (renderer) {
			default:
				alert ("iPhone 6 Plus, 6s Plus , 7 Plus or 8 Plus (display zoom)");
			case "Apple A8 GPU":
				alert ("iPhone 6 Plus (display zoom)");
			case "Apple A9 GPU":
				alert ("iPhone 6s Plus (display zoom)");
			case "Apple A10 GPU":
				alert ("iPhone 7 Plus (display zoom)");
			case "Apple A11 GPU":
				alert ("iPhone 8 Plus (display zoom)");
			}
		}
	}
	// iPhone 5, iPhone 5C, iPhone 5S, iPhone SE
	// or in zoom mode: iPhone 5, iPhone 5C, iPhone 5S, iPhone SE, iPhone 6, iPhone 6S, iPhone 7 or iPhone 8
	else if (window.screen.height / window.screen.width == 1.775) {
		switch (renderer) {
		default:
			alert ("iPhone 5, 5C, 5S, SE or 6, 6s, 7 and 8 (display zoom)");
		case "PowerVR SGX 543":
			alert ("iPhone 5 or 5c");
		case "Apple A7 GPU":
			alert ("iPhone 5s");
		case "Apple A8 GPU":
			alert ("iPhone 6 (display zoom)");
		case "Apple A9 GPU":
			alert ("iPhone SE or 6s (display zoom)");
		case "Apple A10 GPU":
			alert ("iPhone 7 (display zoom)");
		case "Apple A11 GPU":
			alert ("iPhone 8 (display zoom)");
		}
	}
	// iPhone 4 or 4s
	else if ((window.screen.height / window.screen.width == 1.5) && (ratio == 2)) {
		switch (renderer) {
		default:
			alert ("iPhone 4 or 4s");
		case "PowerVR SGX 535":
			alert ("iPhone 4");
		case "PowerVR SGX 543":
			alert ("iPhone 4s");
		}
	}
	// iPhone 1, 3G or 3GS
	else if ((window.screen.height / window.screen.width == 1.5) && (ratio == 1)) {
		switch (renderer) {
		default:
			alert ("iPhone 1, 3G or 3GS");
		case "ALP0298C05":
			alert ("iPhone 3GS");
		case "S5L8900":
			alert ("iPhone 1, 3G");
		}
  // Not an iPhone.
	} else {
		alert ("Not an iPhone");
	}
}


// iPad model checks.
function getiPadModel(){
  // Create a canvas element which can be used to retreive information about the GPU.
  var canvas = document.createElement("canvas");
  if (canvas) {
  var context = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
  if (context) {
  var info = context.getExtension("WEBGL_debug_renderer_info");
  if (info) {
 var renderer = context.getParameter(info.UNMASKED_RENDERER_WEBGL);
  }
  }
  }  
  if(window.screen.height / window.screen.width == 1024 / 768) {
  // iPad, iPad 2, iPad Mini
  if (window.devicePixelRatio == 1) {
  switch(renderer) {
 default:
 alert ("iPad, iPad 2, iPad Mini");
 case "PowerVR SGX 535":
 alert ("iPad");
 case "PowerVR SGX 543":
 alert ("iPad 2 or Mini");
  }
  // iPad 3, 4, 5, 6, Mini 2, Mini 3, Mini 4, Air, Air 2
  } else {
  switch(renderer) {
 default:
 alert ("iPad 3, 4, 5, 6, Mini 2, Mini 3, Mini 4, Air, Air 2");
 case "PowerVR SGX 543":
 alert ("iPad 3");
 case "PowerVR SGX 554":
 alert ("iPad 4");
 case "Apple A7 GPU":
 alert ("iPad Air, Mini 2, Mini 3");
 case "Apple A8X GPU":
 alert ("iPad Air 2");
 case "Apple A8 GPU":
 alert ("iPad Mini 4");
 case "Apple A9 GPU":
 alert ("iPad 5, Pro 9.7");
		case "Apple A10 GPU":
		  alert ("iPad 6");
  }
  }
  // iPad Pro 10.5
  } else if (window.screen.height / window.screen.width == 1112 / 834) {
  alert ("iPad Pro 10.5");
  // iPad Pro 11
  } else if (window.screen.height / window.screen.width == 2388 / 1668) {
  alert ("iPad Pro 11");
  // iPad Pro 12.9, Pro 12.9 (2nd Gen), Pro 12.9 (3rd Gen)
  } else if (window.screen.height / window.screen.width == 1366/ 1024) {
  switch(renderer) {
  default:
 alert ("iPad Pro 12.9, Pro 12.9 (2nd Gen), Pro 12.9 (3rd Gen)");
  case "Apple A12X GPU":
 alert ("iPad Pro 12.9 (3rd Gen)");
  case "Apple A10X GPU":
 alert ("iPad Pro 12.9 (2nd Gen)");
  case "Apple A9 GPU":
 alert ("iPad Pro 12.9");
  }
  } else {
  alert ("Not an iPad");
  }
}












