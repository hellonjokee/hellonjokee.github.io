//<![CDATA[
function removeHtmlTag(a,b){if(a.indexOf("<")!=-1){for(var c=a.split("<"),d=0;d<c.length;d++)c[d].indexOf(">")!=-1&&(c[d]=c[d].substring(c[d].indexOf(">")+1,c[d].length));a=c.join("")}for(b=b<a.length-1?b:a.length-2;" "!=a.charAt(b-1)&&a.indexOf(" ",b)!=-1;)b++;return a=a.substring(0,b-1),a+"..."}function createSummaryAndThumb(a,b,c){var d=document.getElementById(a),e="",f=d.getElementsByTagName("img"),g=posts_no_thumb_sum;f.length>=1?(e='<div class="posts-thumb" style="float:left;"><a href="'+b+'"><img src="'+f[0].src+'" /></a></div>',g=posts_thumb_sum):(e='<div class="posts-thumb" style="float:left;"><a href="'+b+'" title="'+c+'"><img src="https://2.bp.blogspot.com/-Gbn3dT1R9Yo/VPXSJ8lih_I/AAAAAAAALDQ/24wFWdfFvu4/s1600/sorry-image-not-available.png" /></a></div>',g=posts_thumb_sum);var h=e+'<div class="post-summary-text">'+removeHtmlTag(d.innerHTML,g)+"</div>";d.innerHTML=h}
//]]>
