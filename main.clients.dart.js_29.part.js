((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,D,B={uD:function uD(d){this.a=d},
ou(d){var x
if(typeof d=="function")throw A.e(A.aj("Attempting to rewrap a JS function.",null))
x=function(e,f){return function(){return e(f)}}(B.FL,d)
x[$.oE()]=d
return x},
FL(d){return y.i.a(d).$0()},
G5(d){var x,w,v="AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890",u=$.Bg(),t=J.mq(d,y.g)
for(x=0;x<d;++x){w=u.eN(62)
if(!(w<62))return A.a(v,w)
t[x]=v[w]}return C.b.dP(t)},
oC(){var x=0,w=A.b5(y.e),v,u
var $async$oC=A.aU(function(d,e){if(d===1)return A.b2(e,w)
while(true)switch(x){case 0:u=D.l7().$2("api.brainiacs.in","/ping/protected")
x=3
return A.b1($.ik().i4("GET",u,null),$async$oC)
case 3:v=e.b===200
x=1
break
case 1:return A.b3(v,w)}})
return A.b4($async$oC,w)},
B5(){var x=b.G,w=A.f(A.f(x.window).localStorage),v=A.bJ(w.getItem("state"))
if(v==null){v=B.G5(128)
w.setItem("state",v)}A.f(A.f(x.window).location).replace("https://api.brainiacs.in/oauth?state="+v)},
B3(d){var x=null,w=y.g,v=A.h([],y.p)
v.push(new D.cy(d,x))
return new E.aG("script",x,x,x,A.F(w,w),x,x,v,x)}},F,G
J=c[1]
A=c[0]
C=c[2]
E=c[27]
D=c[17]
B=a.updateHolder(c[13],B)
F=c[14]
G=c[19]
B.uD.prototype={
nz(){var x=self.crypto
if(x!=null)if(x.getRandomValues!=null)return
throw A.e(A.an("No source of cryptographically secure random numbers available."))},
eN(d){var x,w,v,u,t,s,r,q
if(d<=0||d>4294967296)throw A.e(G.bm("max must be in range 0 < max \u2264 2^32, was "+d))
if(d>255)if(d>65535)x=d>16777215?4:3
else x=2
else x=1
w=this.a
w.$flags&2&&A.c(w,11)
w.setUint32(0,0,!1)
v=4-x
u=A.z(Math.pow(256,x))
for(t=d-1,s=(d&t)===0;!0;){crypto.getRandomValues(J.ar(C.kE.gD(w),v,x))
r=w.getUint32(0,!1)
if(s)return(r&t)>>>0
q=r%d
if(r-q+d<u)return q}}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inherit
x(B.uD,A.n)})()
var y={i:A.x("cQ"),p:A.x("p<C>"),g:A.x("j"),e:A.x("V")};(function lazyInitializers(){var x=a.lazyFinal
x($,"IO","Bg",()=>{var w=new B.uD(new DataView(new ArrayBuffer(A.FP(8))))
w.nz()
return w})
x($,"Kl","ws",()=>F.HH(1))})()};
(a=>{a["DUGh9Eew7Qzc8pYMa/WzYWBlfCM="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.clients.dart.js_29.part.js.map
