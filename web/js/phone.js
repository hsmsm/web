<!doctype html>
<html lang="ch">
<head>
	<meta charset="utf-8" />
	<meta name="apple-touch-fullscreen" content="YES" />
	<meta name="format-detection" content="telephone=no" />
	<meta name="apple-mobile-web-app-capable" content="yes" />
	<meta name="apple-mobile-web-app-status-bar-style" content="black" />
	<meta http-equiv="Expires" content="-1" />
	<meta http-equiv="pragram" content="no-cache" />
	<script type="text/javascript">
		var phoneWidth = parseInt(window.screen.width);
		var phoneScale = phoneWidth/640;

		var ua = navigator.userAgent;
		if (/Android (\d+\.\d+)/.test(ua)){
			var version = parseFloat(RegExp.$1);
			// andriod 2.3
			if(version>2.3){
				document.write('<meta name="viewport" content="width=640, minimum-scale = '+phoneScale+', maximum-scale = '+phoneScale+', target-densitydpi=device-dpi">');
			// andriod 2.3以上
			}else{
				document.write('<meta name="viewport" content="width=640, target-densitydpi=device-dpi">');
			}
			// 其他系统
		} else {
			document.write('<meta name="viewport" content="width=640, user-scalable=no, target-densitydpi=device-dpi">');
		}
	</script>
	<!--移动端版本兼容 end -->
</head>
</html>        


