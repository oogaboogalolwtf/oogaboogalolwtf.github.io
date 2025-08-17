((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,D,A={
yJ(d,e,f){var x=new B.P($.T,f.h("P<0>"))
I.zu(d,new A.qk(e,x,f))
return x},
qk:function qk(d,e,f){this.a=d
this.b=e
this.c=f},
uC:function uC(){},
iF:function iF(d){this.a=d},
q2:function q2(d){this.a=d},
q3:function q3(d){this.a=d},
o0:function o0(d){this.a=d},
nY:function nY(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ok:function ok(d){this.b=d},
hS:function hS(){},
es:function es(d,e){this.a=d
this.b=e},
Hg(d){return new A.iF(null)}},C,E,I,F,G,H
B=c[0]
D=c[2]
A=a.updateHolder(c[3],A)
C=c[28]
E=c[27]
I=c[23]
F=c[25]
G=c[19]
H=c[15]
A.uC.prototype={
eN(d){if(d<=0||d>4294967296)throw B.e(G.bm("max must be in range 0 < max \u2264 2^32, was "+d))
return Math.random()*d>>>0},
tl(){return Math.random()}}
A.iF.prototype={
ag(d){return new B.a0(this.r3(d),y.n)},
r3(d){var x=this
return function(){var w=d
var v=0,u=1,t=[],s,r,q
return function $async$ag(e,f,g){if(f===1){t.push(g)
v=u}while(true)switch(v){case 0:s=E.cF(null,null,null,null,null,new A.es("%",30),new G.fz(new A.es("%",-25),null),null,null,null,new A.o0(new A.es("%",100)),null,new A.nY(C.ba,C.ba,new E.dq("rem",25),new E.dq("rem",3.125),C.mm),new A.ok(new A.es("%",-100)),null,new A.es("%",150))
r=y.F
q=F.aa(B.h([],r),null,null,null,"purple-sky",null,s)
s=B.h([],r)
D.b.Y(s,x.kQ())
v=2
return e.b=F.aa(B.h([q,F.aa(s,null,null,null,"bg-gradient-stars",null,null)],r),null,null,null,"bg-gradient",null,null),1
case 2:return 0
case 1:return e.c=t.at(-1),3}}}},
jW(){var x,w,v,u,t,s,r,q,p,o=y.h,n=H.oA("bg-gradient-stars",o)
n.innerHTML=""
x=b.G
w=B.z(B.f(x.window).innerWidth)
v=B.l1(B.f(H.oA("purple-sky",o).getBoundingClientRect()).bottom)+200
u=D.c.T(v,10)
for(o=y.c,t=0,s=0;s<v;){if(t>=w){s+=C.ag.eN(u)+u
t=0
continue}r=B.f(B.f(x.document).createElement("img"))
r.src="/images/star.svg"
q=B.f(r.style)
q.pointerEvents="none"
q.position="absolute"
p=t*0.0625
q.left=(D.c.iX(p)===p?D.a.q(D.c.cu(p)):D.c.q(p))+"rem"
p=s*0.0625
q.top=(D.c.iX(p)===p?D.a.q(D.c.cu(p)):D.c.q(p))+"rem"
q.width=B.q(C.ag.tl()*1.5)+"rem"
A.yJ(new B.dy(1000*C.ag.eN(1000)),new A.q2(r),o)
B.f(n.appendChild(r))
t+=C.ag.eN(u)+u}},
kQ(){return new B.a0(this.qB(),y.n)},
qB(){var x=this
return function(){var w=0,v=1,u=[]
return function $async$kQ(d,e,f){if(e===1){u.push(f)
w=v}while(true)switch(w){case 0:B.f(b.G.window).addEventListener("resize",B.xB(new A.q3(x)))
A.yJ(C.d_,x.goG(),y.v)
return 0
case 1:return d.c=u.at(-1),3}}}}}
A.o0.prototype={
gfb(){var x=this.a,w=y.w
return B.bl(["border-radius",E.ch(x.b)+x.a],w,w)},
$iCj:1}
A.nY.prototype={
gaL(){var x,w=B.h([],y.x)
w.push("0")
w.push("0")
x=this.c
x=E.ch(x.b)+x.a
w.push(x)
x=this.d
w.push(E.ch(x.b)+x.a)
w.push(this.e.a)
return D.b.b0(w," ")},
$iCm:1}
A.ok.prototype={
gaL(){var x=this.b,w=E.ch(x.b)
return"translateY("+(w+x.a)+")"},
$iDU:1}
A.hS.prototype={
K(d,e){var x
if(e==null)return!1
x=!0
if(this!==e)if(!(e instanceof A.hS))x=e instanceof E.eu&&e.b===0
return x},
gG(d){return 0},
$ijY:1}
A.es.prototype={}
var z=a.updateTypes(["~()"])
A.qk.prototype={
$0(){var x,w,v,u,t,s,r=this,q=r.a
if(q==null){r.c.a(null)
r.b.ec(null)}else{x=null
try{x=q.$0()}catch(u){w=B.Z(u)
v=B.af(u)
q=w
t=v
s=B.ov(q,t)
q=new B.aQ(q,t)
r.b.c7(q)
return}r.b.ec(x)}},
$S:0}
A.q2.prototype={
$0(){this.a.className="twinkly"},
$S:1}
A.q3.prototype={
$1(d){this.a.jW()},
$S:57};(function installTearOffs(){var x=a._instance_0u
x(A.iF.prototype,"goG","jW",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.cc,[A.qk,A.q2])
x(B.n,[A.uC,A.o0,A.nY,A.ok,A.hS])
w(A.iF,E.aA)
w(A.q3,B.aC)
w(A.es,E.eu)})()
B.c7(b.typeUniverse,JSON.parse('{"iF":{"aA":[],"C":[]},"o0":{"Cj":[]},"nY":{"Cm":[]},"ok":{"DU":[]},"hS":{"jY":[]},"es":{"jY":[]}}'))
var y={F:B.x("p<C>"),x:B.x("p<j>"),h:B.x("K"),c:B.x("O"),w:B.x("j"),n:B.x("a0<C>"),v:B.x("~")};(function constants(){C.ba=new A.hS()
C.ag=new A.uC()
C.d_=new B.dy(1)
C.mm=new E.hN("#A962FF")})()};
(a=>{a["s+Pdm9ztMBinQY4479qZmN8XOUA="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.clients.dart.js_1.part.js.map
