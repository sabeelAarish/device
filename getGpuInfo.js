
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
    var x = navigator.userAgent.match(/[^;\s][^;]+?(?=\s+build\b)/i);
    document.getElementById("userAgent").innerHTML ="User Agent Info:&nbsp&nbsp " + x;
    var y = navigator.deviceMemory;
    document.getElementById("deviceMemory").innerHTML ="Device Memory:&nbsp&nbsp " + y + "GB";
    var z = navigator.hardwareConcurrency;
    document.getElementById("hardware").innerHTML ="Hardware Info:&nbsp&nbsp " + z;
}
