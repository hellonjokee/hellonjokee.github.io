 var numposts = 1,
    numposts2 = 6,
    showpostthumbnails = !0,
    showpostthumbnails2 = !1,
    displaymore = !1,
    displaymore2 = !1,
    showcommentnum = !0,
    showcommentnum2 = !1,
    showpostdate = !0,
    showpostdate2 = !0,
    showpostsummary = !0,
    numchars = 150,
    thumb_width = 280,
    thumb_height = 200,
    thumb_width2 = 62,
    thumb_height2 = 62,
    no_thumb = & quot;http: //3.bp.blogspot.com/-PHzN2A92GHE/Vmim2TTkAII/AAAAAAAADZU/X42ioeFiyBo/s1600/newarlina_thumb.png&quot;,
	no_thumb2=&quot;http://2.bp.blogspot.com/-cW6waOyA8mY/Vmim2VkylII/AAAAAAAADZY/_pANIKGBUXA/s1600/newarlinathumb_small.png&quot;;
 
 
 
 //<![CDATA[
 function labelthumbs(t) {
     for (var e = 0; e < numposts; e++) {
         var n, r = t.feed.entry[e],
             m = r.title.$t;
         if (e == t.feed.entry.length) break;
         for (var i = 0; i < r.link.length; i++) {
             if ("replies" == r.link[i].rel && "text/html" == r.link[i].type) var l = r.link[i].title,
                 o = r.link[i].href;
             if ("alternate" == r.link[i].rel) {
                 n = r.link[i].href;
                 break
             }
         }
         var u;
         try {
             u = r.media$thumbnail.url, u = u.replace("/s72-c/", "/w" + thumb_width + "-h" + thumb_height + "-c/")
         } catch (h) {
             s = r.content.$t, a = s.indexOf("<img"), b = s.indexOf('src="', a), c = s.indexOf('"', b + 5), d = s.substr(b + 5, c - b - 5), u = -1 != a && -1 != b && -1 != c && "" != d ? d : no_thumb
         }
         var p = r.published.$t,
             w = p.substring(0, 4),
             _ = p.substring(5, 7),
             f = p.substring(8, 10),
             g = new Array;
         g[1] = "January", g[2] = "February", g[3] = "March", g[4] = "April", g[5] = "May", g[6] = "June", g[7] = "July", g[8] = "August", g[9] = "September", g[10] = "October", g[11] = "November", g[12] = "December", document.write('<span class="newarlina_left">'), document.write('<ul class="newarlina_thumbs">'), document.write("<li>"), 1 == showpostthumbnails && document.write('<a href="' + n + '"><div class="cat_thumb"><span class="rollover"></span><img width="' + thumb_width + '" height="' + thumb_height + '" alt="' + m + '" src="' + u + '"/></div></a>'), document.write('<span class="newarlina_title"><a href="' + n + '" target ="_top">' + m + "</a></span>");
         var v = "";
         if (document.write('<span class="newarlina_meta">'), 1 == showpostdate && (v = v + '<span class="newarlina_meta_date">' + g[parseInt(_)] + " " + f + ", " + w + "</span>"), 1 == showcommentnum && ("1 Comments" == l && (l = "1 Comments"), "0 Comments" == l && (l = "0 Comments"), showcomment = '<span class="newarlina_meta_comment"><a href="' + o + '">' + l + "</a></span>", v += showcomment), 1 == displaymore && (v = v + '<span class="newarlina_meta_more"><a href="' + n + '" class="url" target ="_top">Read More...</a></span>'), document.write(v), document.write("</span>"), document.write('<span class="newarlina_summary">'), "content" in r) var y = r.content.$t;
         else if ("summary" in r) var y = r.summary.$t;
         else var y = "";
         var k = /<\S[^>]*>/g;
         if (y = y.replace(k, ""), 1 == showpostsummary)
             if (y.length < numchars) document.write(""), document.write(y), document.write("");
             else {
                 document.write(""), y = y.substring(0, numchars);
                 var $ = y.lastIndexOf(" ");
                 y = y.substring(0, $), document.write(y + "..."), document.write("")
             }
         document.write("</span>"), document.write("</li>"), document.write("</ul>"), document.write("</span>")
     }
     document.write('<span class="newarlina_right">'), document.write('<ul class="newarlina_thumbs2">');
     for (var e = 1; e < numposts2; e++) {
         var n, r = t.feed.entry[e],
             m = r.title.$t;
         if (e == t.feed.entry.length) break;
         for (var i = 1; i < r.link.length; i++) {
             if ("replies" == r.link[i].rel && "text/html" == r.link[i].type) var l = r.link[i].title,
                 o = r.link[i].href;
             if ("alternate" == r.link[i].rel) {
                 n = r.link[i].href;
                 break
             }
         }
         var x;
         try {
             x = r.media$thumbnail.url.replace("/s72-c/", "/w" + thumb_width2 + "-h" + thumb_height2 + "-c/")
         } catch (h) {
             s = r.content.$t, a = s.indexOf("<img"), b = s.indexOf('src="', a), c = s.indexOf('"', b + 5), d = s.substr(b + 5, c - b - 5), x = -1 != a && -1 != b && -1 != c && "" != d ? d : no_thumb2
         }
         var p = r.published.$t,
             w = p.substring(0, 4),
             _ = p.substring(5, 7),
             f = p.substring(8, 10);
         1 == showpostthumbnails2 && document.write('<a href="' + n + '"><div class="cat_thumb2"><img width="' + thumb_width2 + '" height="' + thumb_height2 + '" alt="' + m + '" src="' + x + '"/></div></a>'), document.write("<li>"), document.write('<span class="newarlina_title newarlina_title2"><a href="' + n + '" target ="_top">' + m + "</a></span>");
         var v = "";
         document.write('<span class="newarlina_meta newarlina_meta2">'), 1 == showpostdate2 && (v = v + '<span class="newarlina_meta_date">' + g[parseInt(_)] + " " + f + ", " + w + "</span>"), 1 == showcommentnum2 && ("1 Comment" == l && (l = "1 Comments"), "0 Comment" == l && (l = "0 Comments"), showcomment = '<span class="newarlina_meta_comment newarlina_meta_comment2"><a href="' + o + '">' + l + "</a></span>", v += showcomment), 1 == displaymore2 && (v = v + '<span class="newarlina_meta_more newarlina_meta_more2"><a href="' + n + '" class="url" target ="_top">Read More...</a></span>'), document.write(v), document.write("</span>"), document.write("</li>")
     }
     document.write("</ul>"), document.write("</span>")
 }
 //]]>