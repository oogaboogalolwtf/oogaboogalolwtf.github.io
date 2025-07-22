((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.clients.dart.js_1",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,D,A={
yG(d,e,f){var x=new B.O($.R,f.h("O<0>"))
I.zr(d,new A.qe(e,x,f))
return x},
qe:function qe(d,e,f){this.a=d
this.b=e
this.c=f},
ux:function ux(){},
iB:function iB(d){this.a=d},
pX:function pX(d){this.a=d},
pY:function pY(d){this.a=d},
nU:function nU(d){this.a=d},
nR:function nR(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
od:function od(d){this.b=d},
hQ:function hQ(){},
eq:function eq(d,e){this.a=d
this.b=e},
H6(d){return new A.iB(null)}},C,E,I,F,G,H
B=c[0]
D=c[2]
A=a.updateHolder(c[3],A)
C=c[28]
E=c[27]
I=c[23]
F=c[25]
G=c[19]
H=c[15]
A.ux.prototype={
eP(d){if(d<=0||d>4294967296)throw B.f(G.bk("max must be in range 0 < max \u2264 2^32, was "+d))
return Math.random()*d>>>0},
tq(){return Math.random()}}
A.iB.prototype={
ag(d){return new B.Z(this.r7(d),y.n)},
r7(d){var x=this
return function(){var w=d
var v=0,u=1,t=[],s,r,q
return function $async$ag(e,f,g){if(f===1){t.push(g)
v=u}while(true)switch(v){case 0:s=E.cC(null,null,null,null,null,new A.eq("%",30),new G.fy(new A.eq("%",-25),null),null,null,null,new A.nU(new A.eq("%",100)),null,new A.nR(C.ba,C.ba,new E.dk("rem",25),new E.dk("rem",3.125),C.mm),new A.od(new A.eq("%",-100)),null,new A.eq("%",150))
r=y.F
q=F.a8(B.b([],r),null,null,null,"purple-sky",null,s)
s=B.b([],r)
D.b.Y(s,x.kR())
v=2
return e.b=F.a8(B.b([q,F.a8(s,null,null,null,"bg-gradient-stars",null,null)],r),null,null,null,"bg-gradient",null,null),1
case 2:return 0
case 1:return e.c=t.at(-1),3}}}},
jX(){var x,w,v,u,t,s,r,q,p,o,n=y.h,m=H.ot("bg-gradient-stars",n)
m.innerHTML=""
x=b.G
w=B.y(n.a(x.window).innerWidth)
v=B.kX(n.a(H.ot("purple-sky",n).getBoundingClientRect()).bottom)+200
u=D.c.T(v,10)
for(t=y.c,s=0,r=0;r<v;){if(s>=w){r+=C.ag.eP(u)+u
s=0
continue}q=n.a(n.a(x.document).createElement("img"))
q.src="/images/star.svg"
p=n.a(q.style)
p.pointerEvents="none"
p.position="absolute"
o=s*0.0625
p.left=(D.c.iY(o)===o?D.a.q(D.c.cu(o)):D.c.q(o))+"rem"
o=r*0.0625
p.top=(D.c.iY(o)===o?D.a.q(D.c.cu(o)):D.c.q(o))+"rem"
p.width=B.p(C.ag.tq()*1.5)+"rem"
A.yG(new B.dv(1000*C.ag.eP(1000)),new A.pX(q),t)
n.a(m.appendChild(q))
s+=C.ag.eP(u)+u}},
kR(){return new B.Z(this.qE(),y.n)},
qE(){var x=this
return function(){var w=0,v=1,u=[]
return function $async$kR(d,e,f){if(e===1){u.push(f)
w=v}while(true)switch(w){case 0:y.h.a(b.G.window).addEventListener("resize",B.xw(new A.pY(x)))
A.yG(C.d_,x.goH(),y.v)
return 0
case 1:return d.c=u.at(-1),3}}}}}
A.nU.prototype={
gfd(){var x=this.a,w=y.w
return B.bj(["border-radius",E.cd(x.b)+x.a],w,w)},
$iCa:1}
A.nR.prototype={
gaL(){var x,w=B.b([],y.x)
w.push("0")
w.push("0")
x=this.c
x=E.cd(x.b)+x.a
w.push(x)
x=this.d
w.push(E.cd(x.b)+x.a)
w.push(this.e.a)
return D.b.b0(w," ")},
$iCd:1}
A.od.prototype={
gaL(){var x=this.b,w=E.cd(x.b)
return"translateY("+(w+x.a)+")"},
$iDM:1}
A.hQ.prototype={
K(d,e){var x
if(e==null)return!1
x=!0
if(this!==e)if(!(e instanceof A.hQ))x=e instanceof E.es&&e.b===0
return x},
gG(d){return 0},
$ijT:1}
A.eq.prototype={}
var z=a.updateTypes(["~()"])
A.qe.prototype={
$0(){var x,w,v,u,t,s,r=this,q=r.a
if(q==null){r.c.a(null)
r.b.ec(null)}else{x=null
try{x=q.$0()}catch(u){w=B.X(u)
v=B.ad(u)
q=w
t=v
s=B.oo(q,t)
q=new B.aN(q,t)
r.b.c7(q)
return}r.b.ec(x)}},
$S:0}
A.pX.prototype={
$0(){this.a.className="twinkly"},
$S:1}
A.pY.prototype={
$1(d){this.a.jX()},
$S:57};(function installTearOffs(){var x=a._instance_0u
x(A.iB.prototype,"goH","jX",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.c8,[A.qe,A.pX])
x(B.m,[A.ux,A.nU,A.nR,A.od,A.hQ])
w(A.iB,E.ax)
w(A.pY,B.az)
w(A.eq,E.es)})()
B.c3(b.typeUniverse,JSON.parse('{"iB":{"ax":[],"B":[]},"nU":{"Ca":[]},"nR":{"Cd":[]},"od":{"DM":[]},"hQ":{"jT":[]},"eq":{"jT":[]}}'))
var y={F:B.v("o<B>"),x:B.v("o<i>"),h:B.v("D"),c:B.v("N"),w:B.v("i"),n:B.v("Z<B>"),v:B.v("~")};(function constants(){C.ba=new A.hQ()
C.ag=new A.ux()
C.d_=new B.dv(1)
C.mm=new E.hL("#A962FF")})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.clients.dart.js_1",e:"endPart",h:b})})($__dart_deferred_initializers__,"WFkiEoor4LQrZja4e1QPZYXXiHA=");
//# sourceMappingURL=main.clients.dart.js_1.part.js.map
