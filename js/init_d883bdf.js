var o={init:function(){this.diagram()},random:function(t,a){return Math.floor(Math.random()*(a-t+1)+t)},diagram:function(){var t=Raphael("diagram",600,600),a=73,i="Skills",n=250;t.circle(300,300,85).attr({stroke:"none",fill:"#193340"});var r=t.text(300,300,i).attr({font:"20px Arial",fill:"#fff"}).toFront();t.customAttributes.arc=function(t,a,i){var n=3.6*t,r=360==n?359.99:n,e=o.random(91,240),c=(e-r)*Math.PI/180,s=e*Math.PI/180,h=300+i*Math.cos(s),f=300-i*Math.sin(s),u=300+i*Math.cos(c),l=300-i*Math.sin(c),p=[["M",h,f],["A",i,i,0,+(r>180),1,u,l]];return{path:p,stroke:a}},$(".get").find(".arc").each(function(){var o=$(this),e=o.find(".color").val(),c=o.find(".percent").val(),s=o.find(".text").text();a+=30;var h=t.path().attr({arc:[c,e,a],"stroke-width":26});h.mouseover(function(){this.animate({"stroke-width":50,opacity:.75},1e3,"elastic"),"VML"!=Raphael.type&&this.toFront(),r.stop().animate({opacity:0},n,">",function(){this.attr({text:s+"\n"+c+"%"}).animate({opacity:1},n,"<")})}).mouseout(function(){this.stop().animate({"stroke-width":26,opacity:1},4*n,"elastic"),r.stop().animate({opacity:0},n,">",function(){r.attr({text:i}).animate({opacity:1},n,"<")})})})}};$(function(){o.init()});