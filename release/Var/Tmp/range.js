(function(f){f.Range=function(a){this.a=null;this.Name=a};f.Range.prototype={la:"% - %",T:null,U:null,o:null,w:null,Init:function(a){this.a=a;this.T=a.f[this.Name];this.oa();this.va();this.na()},oa:function(){var a=this.T,b=this.a,d=b.W,c=b.X,e=b.A,g=b.J,f=b.C,h=b.B;b=[];var k=c("div");c=c("span");var l=a.cloneNode();e(a,"range-multiple");var m=g(a,"data-value");m.length?b=m.split(","):b=[g(a,"min")||"0",g(a,"max")||"100"];h(l,"multiple");h(l,"id");f(l,"value",b[0]);g=l.name;l.name=-1<g.indexOf("[]")?
g:g+"[]";g=l.cloneNode();f(g,"value",b[1]);e(l,"first");e(g,"second");f(k,"id",a.id);k.className=a.className;c=d(k,c);l=d(k,l);g=d(k,g);a.parentNode.replaceChild(k,a);this.o=l;this.w=g;this.U=c},va:function(){var a=this.o,b=this.w;"stepDown"in a||(a.stepDown=function(b){a.value-=b});"stepUp"in b||(b.stepUp=function(a){b.value+=a})},na:function(){var a=this,b=a.o,d=a.w,c=a.Z,e=a.ka,f=e(b),n=e(d);a.R(b,function(){for(var e=0,g=c(b.value)+f;g>c(d.value)&&!(d.stepUp(),e+=1,100<e););a.I()});a.R(d,function(){for(var e=
0,f=c(d.value)-n;f<c(b.value)&&!(b.stepDown(),e+=1,100<e););a.I()});a.I()},R:function(a,b){this.a.i(a,this.a.za?"change":"input",b)},I:function(){this.U.innerHTML=this.la.replace("%",this.o.value).replace("%",this.w.value)},Z:function(a){return parseInt(a,10)},ka:function(a){var b=a.step.toString(),d=1;0<b.length?d=parseInt(b,10):(a=a.value.toString(),0<a.length&&(b=a.lastIndexOf("."),-1<b&&(a=a.substr(b+1),0<a.length&&(d=parseInt(a,10)/10))));return d}}})(window.MvcCoreForm);