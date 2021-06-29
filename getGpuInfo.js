
function getGpuInfo() {
 var canvas = document.getElementById('canvas');
var gl = canvas.getContext('webgl');

var debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
var vendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
var renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);

document.getElementById("vendor").innerHTML = "Vendor Info:&nbsp&nbsp" + "" + vendor + "<br>";
document.getElementById("renderer").innerHTML = "Renderer Info:&nbsp&nbsp" + "" + renderer;


}

function getUserAgent() {
    var x = navigator.userAgent;
    document.getElementById("userAgent").innerHTML ="User Agent Info:&nbsp&nbsp " + x;
}