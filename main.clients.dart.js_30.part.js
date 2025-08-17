((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,N,K,I,F,E,D,L,O,H,M,B={cw:function cw(d,e,f){this.a=d
this.b=e
this.c=f},vD:function vD(){},mV:function mV(d){this.a=d},rD:function rD(d){this.a=d},rB:function rB(d){this.a=d},rA:function rA(d){this.a=d},rC:function rC(d,e){this.a=d
this.b=e},rz:function rz(){},ry:function ry(d){this.a=d},ru:function ru(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},rv:function rv(d){this.a=d},rw:function rw(d,e,f){this.a=d
this.b=e
this.c=f},rx:function rx(d,e){this.a=d
this.b=e},rs:function rs(d,e){this.a=d
this.b=e},rt:function rt(d){this.a=d},e4:function e4(){this.a=$},p2:function p2(d){this.a=d},p1:function p1(){},p3:function p3(d){this.a=d},bG:function bG(d){this.a=d},il:function il(d){this.a=d},ix:function ix(d){this.a=d},pF:function pF(d,e){this.a=d
this.b=e},
Hc(d){return new B.mV(null)}},C,G,P
J=c[1]
A=c[0]
N=c[2]
K=c[20]
I=c[24]
F=c[27]
E=c[21]
D=c[17]
L=c[33]
O=c[12]
H=c[13]
M=c[18]
B=a.updateHolder(c[7],B)
C=c[36]
G=c[25]
P=c[19]
B.cw.prototype={}
B.mV.prototype={
ag(d){return new A.a0(this.r8(d),x.d)},
r8(d){var w=this
return function(){var v=d
var u=0,t=1,s=[],r,q,p
return function $async$ag(e,f,g){if(f===1){s.push(g)
u=t}while(true)switch(u){case 0:p=A.f(A.f(b.G.document).querySelectorAll(".login-btn"))
for(r=0;r<A.z(p.length);++r){q=A.M(p.item(r))
if(q==null)q=A.f(q)
q.innerText="Logout"
q.href="https://api.brainiacs.in/logout"}u=2
return e.b=H.B3("      window.addEventListener('pageshow', function(event) {\n        if (event.persisted) {\n          window.location.reload();\n        }\n      });\n    "),1
case 2:u=3
return e.b=K.t0(new K.eF(new B.rD(w),null)),1
case 3:return 0
case 1:return e.c=s.at(-1),3}}}},
pW(d,e){var w,v,u,t,s,r,q,p,o,n,m=null
x.M.a(e)
w=x.U
v=new M.ce(m,w)
u=new M.ce(m,w)
t=new M.ce(m,w)
s=new M.ce(m,w)
w=x.i
r=G.aa(A.h([E.bq(A.h([new F.L(d.a,m)],w),m),D.ds(C.kw,m,m,m,new B.ru(t,s,u,v),m),G.aa(A.h([D.ds(A.h([new I.aE(!1,"/images/pencil.svg",m,m),E.aW(C.hW,m,m,m)],w),m,m,m,new B.rv(d),m),D.ds(A.h([new I.aE(!1,"/images/share.svg",m,m),E.aW(C.dC,m,t,m),E.aW(C.fH,m,s,F.cF(m,m,m,C.cZ,m,m,m,m,m,m,m,m,m,m,m,m))],w),m,m,m,new B.rw(d,t,s),m),D.ds(A.h([new I.aE(!1,"/images/delete-2.svg",m,m),E.aW(C.hV,m,m,m)],w),m,m,m,new B.rx(d,e),m)],w),m,"profile-crew-options",m,m,u,m)],w),m,"profile-crew-header",m,m,m,m)
q=A.h([],w)
for(p=d.c,o=p.$ti,p=new A.aq(p,p.gn(0),o.h("aq<I.E>")),o=o.h("I.E");p.t();){n=p.d
q.push(I.oB(m,m,D.xX(n==null?o.a(n):n),m))}return G.aa(A.h([r,G.aa(q,m,"profile-crew-members",m,m,m,m)],w),m,"profile-crew",m,m,v,m)}}
B.e4.prototype={
da(){return new B.bG(C.j3)},
fL(){var w=0,v=A.b5(x.N),u,t,s,r
var $async$fL=A.aU(function(d,e){if(d===1)return A.b2(e,v)
while(true)switch(w){case 0:t=D.l7().$2("api.brainiacs.in","/crews")
w=3
return A.b1($.ik().d8("POST",t,null,null,null),$async$fL)
case 3:s=e
r=s.b
if(r!==201)throw A.e(new B.il(r))
u=A.u(x.P.a(N.T.eA(D.xP(D.xz(s.e)).bv(s.w),null)).k(0,"id"))
w=1
break
case 1:return A.b3(u,v)}})
return A.b4($async$fL,v)},
fN(d){var w=0,v=A.b5(x.H),u=this,t,s,r
var $async$fN=A.aU(function(e,f){if(e===1)return A.b2(f,v)
while(true)switch(w){case 0:s=D.l7().$2("api.brainiacs.in","/crews/"+d.b)
w=2
return A.b1($.ik().d8("DELETE",s,null,null,null),$async$fN)
case 2:r=f.b
if(r!==200)throw A.e(new B.ix(r))
r=u.a
r===$&&A.b()
r.aK()
t=J.oN(r.gaA().gaL().a)
N.b.tN(t,new B.p2(d))
r.sbt(A.l(u).h("a5<b8.0>").a(D.fH(new B.bG(t),x.L)))
return A.b3(null,v)}})
return A.b4($async$fN,v)},
fp(d){var w=0,v=A.b5(x.g),u,t,s,r,q,p
var $async$fp=A.aU(function(e,f){if(e===1)return A.b2(f,v)
while(true)switch(w){case 0:t=D.l7().$2("api.brainiacs.in","/accounts/me")
w=3
return A.b1($.ik().i4("GET",t,null),$async$fp)
case 3:s=f
r=J.oJ(x.j.a(N.T.eA(D.xP(D.xz(s.e)).bv(s.w),null)),x.P)
q=r.$ti
p=q.h("a3<I.E,cw>")
q=A.y(new A.a3(r,q.h("cw(I.E)").a(new B.p1()),p),p.h("a_.E"))
q.$flags=1
u=q
w=1
break
case 1:return A.b3(u,v)}})
return A.b4($async$fp,v)},
fV(){var w=0,v=A.b5(x.H),u,t=this,s,r,q,p
var $async$fV=A.aU(function(d,e){if(d===1)return A.b2(e,v)
while(true)switch(w){case 0:r=t.a
r===$&&A.b()
r.aK()
if(r.gaA().gcc()||$.yo){w=1
break}s=A.l(t).h("a5<b8.0>")
r.sbt(s.a(C.cz))
q=r
p=s
w=3
return A.b1(D.lq(new B.p3(t),x.L),$async$fV)
case 3:q.sbt(p.a(e))
$.yo=!0
case 1:return A.b3(u,v)}})
return A.b4($async$fV,v)}}
B.bG.prototype={}
B.il.prototype={$iaw:1,
ge4(){return this.a}}
B.ix.prototype={$iaw:1,
ge4(){return this.a}}
B.pF.prototype={
a8(){return"Display."+this.b}}
var z=a.updateTypes(["e4()","V(cw)","cw(A<j,@>)","ac<bG>()"])
B.vD.prototype={
$0(){return new B.e4()},
$S:z+0}
B.rD.prototype={
$1(d){return new A.a0(this.mk(d),x.d)},
mk(d){var w=this
return function(){var v=d
var u=0,t=2,s=[],r,q,p,o,n,m,l,k,j,i
return function $async$$1(e,f,g){if(f===1){s.push(g)
u=t}while(true)switch(u){case 0:k=$.BX()
j=k.giN()
i=K.jE(v,!1)
i=K.bj.prototype.gP.call(i)
r=x.S.a(j).bP(i.w)
r.fV()
q=K.rN(v,k,x.W)
$label0$0:{if(q instanceof D.b7){p=q.a
k=p
break $label0$0}if(q instanceof D.aX){o=q.d
k=o
break $label0$0}k=null
break $label0$0}u=k==null?3:4
break
case 3:u=5
return e.b=E.d8(A.h([L.aW,E.aW(L.aR,null,null,F.cF(null,null,null,null,null,null,new P.fz(null,new F.dq("rem",1)),null,null,null,null,null,null,null,null,null))],x.i),"loader-main",null),1
case 5:u=1
break
case 4:u=k instanceof D.dd?6:8
break
case 6:k=x.i
u=9
return e.b=E.d8(A.h([G.aa(A.h([E.co(L.a_,null),E.bq(A.h([new D.cy("Hmm... the server seems to be offline. Either it got food poisoning from the cookies we offered, or it might be under maintenance.<br><br>Either try again after 5 minutes or contact the admin(s).<br>Admin e-mail: vgshubham49@gmail.com<br>",null)],k),null)],k),null,"error-div",null,null,null,null)],k),null,"profile-main"),1
case 9:u=1
break
u=7
break
case 8:u=!(k instanceof B.bG)?10:11
break
case 10:k=x.i
u=12
return e.b=E.d8(A.h([G.aa(A.h([E.co(L.a_,null),E.bq(A.h([new D.cy("Holy smokes, something has gone wrong!<br>Please contact the admin(s) so that they can take a look.<br>Admin e-mail: vgshubham49@gmail.com<br>",null)],k),null)],k),null,"error-div",null,null,null,null)],k),null,"profile-main"),1
case 12:u=1
break
case 11:case 7:j=x.i
i=G.aa(A.h([E.co(C.i3,null),D.ds(A.h([E.aW(C.ha,null,null,null),C.kX],j),null,null,"add-crew-btn",new B.rB(r),null)],j),null,null,null,"profile-header",null,null)
n=A.h([],j)
for(k=J.bh(k.a),m=w.a;k.t();){l=k.gF()
n.push(m.pW(l,new B.rC(r,l)))}u=13
return e.b=E.d8(A.h([i,G.aa(n,null,null,null,"profile-crews-container",null,null)],j),null,"profile-main"),1
case 13:case 1:return 0
case 2:return e.c=s.at(-1),3}}}},
$S:12}
B.rB.prototype={
$0(){var w=0,v=A.b5(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$$0=A.aU(function(d,a0){if(d===1){t.push(a0)
w=u}while(true)switch(w){case 0:u=3
w=6
return A.b1(s.a.fL(),$async$$0)
case 6:r=a0
A.f(A.f(b.G.window).location).assign("https://brainiacs.in/edit-crew/?id="+A.q(r))
u=1
w=5
break
case 3:u=2
e=t.pop()
h=A.Z(e)
if(h instanceof B.il){q=h
h=b.G
g=A.f(A.f(h.document).createElement("div"))
A.f(g.style).backgroundColor="#000000e0"
A.f(g.style).display="flex"
A.f(g.style).height="100vh"
A.f(g.style).justifyContent="space-around"
A.f(g.style).overflow="clip"
A.f(g.style).position="fixed"
A.f(g.style).top="0"
A.f(g.style).width="100%"
A.f(g.style).zIndex="9999"
p=g
g=A.f(A.f(h.document).createElement("div"))
A.f(g.style).display="block"
A.f(g.style).backgroundColor="#0E0D17"
A.f(g.style).borderRadius="0.7rem"
A.f(g.style).margin="auto 1rem"
A.f(g.style).maxWidth="23rem"
A.f(g.style).padding="1rem"
A.f(g.style).width="fit-content"
o=g
g=A.f(A.f(h.document).createElement("h1"))
g.innerText="Big oopsie!"
n=g
g=A.f(A.f(h.document).createElement("p"))
A.f(g.style).marginTop="1rem"
m=null
l=q.a
$label1$1:{if(401===l||400===l){m=y.d+A.q(q)
break $label1$1}if(500===l){m=y.b+A.q(q)
break $label1$1}m="Something went wrong and adding crew failed.\n\nCheck your internet connection or try again after logging out and back in.\n\nIf the problem still persists, then contact the admin.\n\nE-mail: vgshubham49@gmail.com.\nError log: "+A.q(q)
break $label1$1}g.innerText=m
k=g
g=A.f(A.f(h.document).createElement("button"))
g.innerText="Dismiss"
g.onclick=H.ou(new B.rA(p))
A.f(g.style).backgroundColor="whiteSmoke"
m=A.f(g.style)
f=$.ws()
m.border=F.ch(f.b)+f.a+" solid #1E1D1A"
A.f(g.style).borderRadius="0.6rem"
A.f(g.style).color="black"
A.f(g.style).fontSize="1.1rem"
A.f(g.style).fontWeight="600"
A.f(g.style).marginTop="0.4rem"
A.f(g.style).padding="0.5rem 0"
A.f(g.style).width="100%"
j=g
f=o
A.f(f.appendChild(n))
A.f(f.appendChild(k))
A.f(f.appendChild(j))
A.f(p.appendChild(o))
A.f(A.M(A.f(h.document).body).appendChild(p))}else throw e
w=5
break
case 2:w=1
break
case 5:return A.b3(null,v)
case 1:return A.b2(t.at(-1),v)}})
return A.b4($async$$0,v)},
$S:15}
B.rA.prototype={
$0(){this.a.remove()},
$S:1}
B.rC.prototype={
$0(){this.a.fN(this.b).rg(new B.rz())},
$S:0}
B.rz.prototype={
$1(d){var w,v,u,t,s,r,q,p,o
d.toString
if(d instanceof B.ix)throw A.e(d)
w=b.G
v=A.f(A.f(w.document).createElement("div"))
A.f(v.style).backgroundColor="#000000e0"
A.f(v.style).display="flex"
A.f(v.style).height="100vh"
A.f(v.style).justifyContent="space-around"
A.f(v.style).overflow="clip"
A.f(v.style).position="fixed"
A.f(v.style).top="0"
A.f(v.style).width="100%"
A.f(v.style).zIndex="9999"
u=A.f(A.f(w.document).createElement("div"))
A.f(u.style).display="block"
A.f(u.style).backgroundColor="#0E0D17"
A.f(u.style).borderRadius="0.7rem"
A.f(u.style).margin="auto 1rem"
A.f(u.style).maxWidth="23rem"
A.f(u.style).padding="1rem"
A.f(u.style).width="fit-content"
t=A.f(A.f(w.document).createElement("h1"))
t.innerText="Big oopsie!"
s=A.f(A.f(w.document).createElement("p"))
A.f(s.style).marginTop="1rem"
r=d.ge4()
$label2$2:{if(401===r||400===r){q=y.d+A.q(d)
break $label2$2}if(404===r){q="Seems like that crew doesn't exist already. Maybe this page has not been reloaded. Try refreshing.\n\nIf the problem still persists, then contact the admin.\n\nE-mail: vgshubham49@gmail.com.\nError log: "+A.q(d)
break $label2$2}if(403===r){q="Not authorized! Did you login with another account on another tab (of the same browser)? If so, then try logging into the specific account again.\n\nIf the problem still persists, then contact the admin.\n\nE-mail: vgshubham49@gmail.com.\nError log: "+A.q(d)
break $label2$2}if(500===r){q=y.b+A.q(d)
break $label2$2}q="Something went wrong and deleting crew failed.\n\nCheck your internet connection or try again after logging out and back in.\n\nIf the problem still persists, then contact the admin.\n\nE-mail: vgshubham49@gmail.com.\nError log: "+A.q(d)
break $label2$2}s.innerText=q
p=A.f(A.f(w.document).createElement("button"))
p.innerText="Dismiss"
p.onclick=H.ou(new B.ry(v))
A.f(p.style).backgroundColor="whiteSmoke"
q=A.f(p.style)
o=$.ws()
q.border=F.ch(o.b)+o.a+" solid #1E1D1A"
A.f(p.style).borderRadius="0.6rem"
A.f(p.style).color="black"
A.f(p.style).fontSize="1.1rem"
A.f(p.style).fontWeight="600"
A.f(p.style).marginTop="0.4rem"
A.f(p.style).padding="0.5rem 0"
A.f(p.style).width="100%"
A.f(u.appendChild(t))
A.f(u.appendChild(s))
A.f(u.appendChild(p))
A.f(v.appendChild(u))
A.f(A.M(A.f(w.document).body).appendChild(v))},
$S:2}
B.ry.prototype={
$0(){this.a.remove()},
$S:1}
B.ru.prototype={
$0(){var w,v,u,t,s=this
A.f(s.a.gcD().style).display="inline"
A.f(s.b.gcD().style).display="none"
w=s.c.gcD()
if(A.i2(A.f(w.classList).contains("active"))){A.f(s.d.gcD().classList).remove("active")
A.f(w.classList).remove("active")}else{v=b.G
u=A.M(A.f(v.document).querySelector(".profile-crew.active"))
if(u!=null){t=A.M(A.f(v.document).querySelector(".profile-crew-options.active"))
if(t==null)t=A.f(t)
A.f(u.classList).remove("active")
A.f(t.classList).remove("active")}A.f(s.d.gcD().classList).add("active")
A.f(w.classList).add("active")}},
$S:0}
B.rv.prototype={
$0(){A.f(A.f(b.G.window).location).assign("https://brainiacs.in/edit-crew/?id="+this.a.b)},
$S:0}
B.rw.prototype={
$0(){O.xN("https://brainiacs.in/crew/?id="+this.a.b)
A.f(this.b.gcD().style).display="none"
A.f(this.c.gcD().style).display="inline"},
$S:0}
B.rx.prototype={
$0(){var w,v,u,t,s,r,q,p=b.G,o=A.f(A.f(p.document).createElement("div"))
A.f(o.style).backgroundColor="#000000e0"
A.f(o.style).display="flex"
A.f(o.style).height="100vh"
A.f(o.style).justifyContent="space-around"
A.f(o.style).overflow="clip"
A.f(o.style).position="fixed"
A.f(o.style).top="0"
A.f(o.style).width="100%"
A.f(o.style).zIndex="9999"
w=A.f(A.f(p.document).createElement("div"))
A.f(w.style).display="block"
A.f(w.style).backgroundColor="#0E0D17"
A.f(w.style).borderRadius="0.7rem"
A.f(w.style).margin="auto 1rem"
A.f(w.style).maxWidth="23rem"
A.f(w.style).padding="1rem"
A.f(w.style).width="fit-content"
v=A.f(A.f(p.document).createElement("img"))
v.src="/images/delete-2.svg"
u=A.f(A.f(p.document).createElement("p"))
u.innerText="Delete "+this.a.a
A.f(u.style).fontSize="1.4rem"
A.f(u.style).fontWeight="700"
A.f(u.style).marginTop="0.5rem"
t=A.f(A.f(p.document).createElement("p"))
t.innerText="Are you sure you want to delete this crew? This action is irreversible."
A.f(t.style).color="#9799A2"
A.f(t.style).fontWeight="400"
A.f(t.style).marginTop="0.5rem"
s=A.f(A.f(p.document).createElement("button"))
s.innerText="Delete"
s.onclick=H.ou(new B.rs(this.b,o))
A.f(s.style).backgroundColor="#E02D3C"
A.f(s.style).border="none"
A.f(s.style).borderRadius="2rem"
A.f(s.style).fontWeight="700"
A.f(s.style).padding="1rem"
r=A.f(A.f(p.document).createElement("button"))
r.innerText="Cancel"
r.onclick=H.ou(new B.rt(o))
A.f(r.style).backgroundColor="#1A1A1C"
A.f(r.style).border=F.ch(0.0625)+"rem solid #FFFFFF26"
A.f(r.style).borderRadius="2rem"
A.f(r.style).fontWeight="700"
A.f(r.style).padding="1rem"
q=A.f(A.f(p.document).createElement("div"))
A.f(q.appendChild(r))
A.f(q.appendChild(s))
A.f(q.style).columnGap="0.5rem"
A.f(q.style).display="flex"
A.f(q.style).marginLeft="auto"
A.f(q.style).marginRight="0"
A.f(q.style).marginTop="0.5rem"
A.f(q.style).width="min-content"
A.f(w.appendChild(v))
A.f(w.appendChild(u))
A.f(w.appendChild(t))
A.f(w.appendChild(q))
A.f(o.appendChild(w))
A.f(A.M(A.f(p.document).body).appendChild(o))},
$S:0}
B.rs.prototype={
$0(){this.a.$0()
this.b.remove()},
$S:1}
B.rt.prototype={
$0(){this.a.remove()},
$S:1}
B.p2.prototype={
$1(d){return x.r.a(d).b===this.a.b},
$S:z+1}
B.p1.prototype={
$1(d){var w,v
x.P.a(d)
w=A.u(d.k(0,"crewID"))
v=J.oJ(x.j.a(d.k(0,"images")),x.T)
return new B.cw(A.u(d.k(0,"name")),w,v)},
$S:z+2}
B.p3.prototype={
$0(){var w=0,v=A.b5(x.L),u,t=this,s
var $async$$0=A.aU(function(d,e){if(d===1)return A.b2(e,v)
while(true)switch(w){case 0:w=3
return A.b1(H.oC(),$async$$0)
case 3:if(!e)H.B5()
s=B
w=4
return A.b1(t.a.fp(A.u(A.f(b.G.document).cookie)),$async$$0)
case 4:u=new s.bG(e)
w=1
break
case 1:return A.b3(u,v)}})
return A.b4($async$$0,v)},
$S:z+3};(function inheritance(){var w=a.inheritMany,v=a.inherit
w(A.n,[B.cw,B.bG,B.il,B.ix])
w(A.cc,[B.vD,B.rB,B.rA,B.rC,B.ry,B.ru,B.rv,B.rw,B.rx,B.rs,B.rt,B.p3])
v(B.mV,F.aA)
w(A.aC,[B.rD,B.rz,B.p2,B.p1])
v(B.e4,D.e3)
v(B.pF,A.dZ)})()
A.c7(b.typeUniverse,JSON.parse('{"mV":{"aA":[],"C":[]},"e4":{"e3":["bG"],"cq":["bG"],"b8":["bG"],"b8.0":"bG","cq.0":"bG"},"il":{"aw":[]},"ix":{"aw":[]}}'))
var y={b:"Something is wrong on our side. Please contact the admin(s) so that they can take a look.\n\nE-mail: vgshubham49@gmail.com.\nError log: ",d:"Unauthorized! Maybe your token has expired. Try logging out and in again.\n\nIf the problem still persists, then contact the admin.\n\nE-mail: vgshubham49@gmail.com.\nError log: "}
var x=(function rtii(){var w=A.x
return{W:w("a5<bG>"),i:w("p<C>"),U:w("ce<K>"),g:w("o<cw>"),j:w("o<@>"),P:w("A<j,@>"),r:w("cw"),L:w("bG"),S:w("aL<e4>"),N:w("j"),d:w("a0<C>"),T:w("j?"),H:w("~"),M:w("~()")}})();(function constants(){var w=a.makeConstList
C.cz=new D.aJ(!1,null,null,null,A.x("aJ<bG>"))
C.cZ=new B.pF(0,"none")
C.lm=new F.L("Share Crew",null)
C.dC=w([C.lm],x.i)
C.ly=new F.L("Link Copied!",null)
C.fH=w([C.ly],x.i)
C.lw=new F.L("Add New Crew",null)
C.ha=w([C.lw],x.i)
C.la=new F.L("Delete",null)
C.hV=w([C.la],x.i)
C.lb=new F.L("Edit",null)
C.hW=w([C.lb],x.i)
C.l_=new F.L("All Crews",null)
C.i3=w([C.l_],x.i)
C.j3=w([],A.x("p<cw>"))
C.kY=new I.aE(!1,"/images/menu.svg",null,null)
C.kw=w([C.kY],x.i)
C.kX=new I.aE(!1,"/images/add.svg",null,null)})();(function staticFields(){$.yo=!1})();(function lazyInitializers(){var w=a.lazyFinal
w($,"K_","BX",()=>D.wA(new B.vD(),A.x("e4"),x.L))})()};
(a=>{a["3xtaaYdOYx/eQ1Y/U5EDjLK8uL4="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.clients.dart.js_30.part.js.map
