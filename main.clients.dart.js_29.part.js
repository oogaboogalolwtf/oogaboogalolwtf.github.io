((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.clients.dart.js_29",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,D,B={uy:function uy(d){this.a=d},
on(d){var x
if(typeof d=="function")throw A.f(A.ah("Attempting to rewrap a JS function.",null))
x=function(e,f){return function(){return e(f)}}(B.FE,d)
x[$.ox()]=d
return x},
FE(d){return y.i.a(d).$0()},
FZ(d){var x,w,v="AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890",u=$.Ba(),t=J.ml(d,y.g)
for(x=0;x<d;++x){w=u.eP(62)
if(!(w<62))return A.a(v,w)
t[x]=v[w]}return C.b.dP(t)},
ov(){var x=0,w=A.b2(y.e),v,u
var $async$ov=A.aS(function(d,e){if(d===1)return A.b_(e,w)
while(true)switch(x){case 0:u=D.l2().$2("api.brainiacs.in","/ping/protected")
x=3
return A.aZ($.ig().i6("GET",u,null),$async$ov)
case 3:v=e.b===200
x=1
break
case 1:return A.b0(v,w)}})
return A.b1($async$ov,w)},
B_(){var x=b.G,w=y.h,v=w.a(w.a(x.window).localStorage),u=A.bG(v.getItem("state"))
if(u==null){u=B.FZ(128)
v.setItem("state",u)}w.a(w.a(x.window).location).replace("https://api.brainiacs.in/oauth?state="+u)},
AY(d){var x=null,w=y.g,v=A.b([],y.p)
v.push(new D.cv(d,x))
return new E.aD("script",x,x,x,A.F(w,w),x,x,v,x)}},F,G
J=c[1]
A=c[0]
C=c[2]
E=c[27]
D=c[17]
B=a.updateHolder(c[13],B)
F=c[14]
G=c[19]
B.uy.prototype={
nA(){var x=self.crypto
if(x!=null)if(x.getRandomValues!=null)return
throw A.f(A.ak("No source of cryptographically secure random numbers available."))},
eP(d){var x,w,v,u,t,s,r,q
if(d<=0||d>4294967296)throw A.f(G.bk("max must be in range 0 < max \u2264 2^32, was "+d))
if(d>255)if(d>65535)x=d>16777215?4:3
else x=2
else x=1
w=this.a
w.$flags&2&&A.d(w,11)
w.setUint32(0,0,!1)
v=4-x
u=A.y(Math.pow(256,x))
for(t=d-1,s=(d&t)===0;!0;){crypto.getRandomValues(J.ap(C.kE.gD(w),v,x))
r=w.getUint32(0,!1)
if(s)return(r&t)>>>0
q=r%d
if(r-q+d<u)return q}}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inherit
x(B.uy,A.m)})()
var y={i:A.v("cL"),p:A.v("o<B>"),h:A.v("D"),g:A.v("i"),e:A.v("T")};(function lazyInitializers(){var x=a.lazyFinal
x($,"IE","Ba",()=>{var w=new B.uy(new DataView(new ArrayBuffer(A.FI(8))))
w.nA()
return w})
x($,"Ka","wm",()=>F.Hy(1))})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.clients.dart.js_29",e:"endPart",h:b})})($__dart_deferred_initializers__,"QAJ1THusdIJBUtnPRenVW7IuclY=");
//# sourceMappingURL=main.clients.dart.js_29.part.js.map
