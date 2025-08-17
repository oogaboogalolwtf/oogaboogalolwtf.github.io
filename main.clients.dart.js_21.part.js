((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,E,F,B={iw:function iw(d,e,f){this.a=d
this.b=e
this.c=f},bD:function bD(d,e,f){this.a=d
this.b=e
this.c=f},cb:function cb(){this.a=$},oP:function oP(d,e){this.a=d
this.b=e},oO:function oO(){},oQ:function oQ(){},bu:function bu(d,e){this.a=d
this.b=e},h5:function h5(d){this.a=d},k0:function k0(d){this.a=d}},C,D
J=c[1]
A=c[0]
E=c[2]
F=c[27]
B=a.updateHolder(c[11],B)
C=c[31]
D=c[17]
B.iw.prototype={
lr(d,e,f){var x,w
y.T.a(e)
x=f==null?this.a:f
w=d==null?this.b:d
return new B.iw(x,w,e==null?this.c:e)},
rt(d,e){return this.lr(d,null,e)},
io(d){return this.lr(null,d,null)}}
B.bD.prototype={}
B.cb.prototype={
da(){return new B.bu(null,!1)},
lx(d,e,f,g){var x,w,v,u,t,s,r=this.a
r===$&&A.b()
r.aK()
x=r.gaA().gaL().a.c
w=A.h(x.slice(0),A.U(x))
v=E.b.cI(w,d)
x=f==null?d.a:f
u=g==null?d.b:g
t=e==null?d.c:e
if(t==null)t=d.c
E.b.i(w,v,new B.bD(x,u,t))
r.aK()
s=r.gaA().gaL().a.io(w)
r.aK()
r.sbt(A.l(this).h("a5<b8.0>").a(D.fH(r.gaA().gaL().ey(s),y.D)))},
rK(d,e,f){return this.lx(d,null,e,f)},
rJ(d,e){return this.lx(d,e,null,null)},
eF(d){var x=0,w=A.b5(y.H),v,u=this,t,s,r,q
var $async$eF=A.aU(function(e,f){if(e===1)return A.b2(f,w)
while(true)switch(x){case 0:s=u.a
s===$&&A.b()
s.aK()
if(s.gaA().gcc()||$.yn){x=1
break}if($.lo.b!==$.lo)A.a1(A.z7(""))
$.lo.b=d
$.yn=!0
t=A.l(u).h("a5<b8.0>")
s.sbt(t.a(C.cA))
r=s
q=t
x=3
return A.b1(D.lq(new B.oP(u,d),y.D),$async$eF)
case 3:r.sbt(q.a(f))
case 1:return A.b3(v,w)}})
return A.b4($async$eF,w)},
fo(d){var x=0,w=A.b5(y.f),v,u,t,s,r,q,p
var $async$fo=A.aU(function(e,f){if(e===1)return A.b2(f,w)
while(true)switch(x){case 0:x=3
return A.b1($.ik().i4("GET",y.R.a(D.l7().$2("api.brainiacs.in","/crews/"+d)),null),$async$fo)
case 3:q=f
p=q.b
if(p!==200)throw A.e(new B.h5(p))
p=y.P
u=p.a(E.T.eA(D.xP(D.xz(q.e)).bv(q.w),null))
t=u.k(0,"members")
t.toString
s=J.oJ(y.j.a(t),p)
p=s.$ti
t=p.h("a3<I.E,bD>")
r=A.y(new A.a3(s,p.h("bD(I.E)").a(new B.oO()),t),t.h("a_.E"))
p=u.k(0,"title")
p.toString
A.u(p)
t=u.k(0,"desc")
t.toString
v=new B.iw(p,A.u(t),r)
x=1
break
case 1:return A.b3(v,w)}})
return A.b4($async$fo,w)},
glP(){var x=this.a
x===$&&A.b()
x.aK()
x=x.gaA().gaL()
if(x==null)x=null
else{x=x.a
x=x==null?null:x.c}return x==null?A.h([],y.p):x},
h4(){var x=0,w=A.b5(y.H),v=this,u,t,s,r,q,p,o
var $async$h4=A.aU(function(d,e){if(d===1)return A.b2(e,w)
while(true)switch(x){case 0:p=$.lo.d7()
o=v.a
o===$&&A.b()
o.aK()
u=o.gaA().gaL().a.a
o.aK()
o=o.gaA().gaL().a.b
t=v.glP()
s=A.U(t)
r=s.h("a3<1,A<j,j?>>")
t=A.y(new A.a3(t,s.h("A<j,j?>(1)").a(new B.oQ()),r),r.h("a_.E"))
t.$flags=1
s=y.N
q=E.T.rM(A.bl(["crewID",p,"title",u,"desc",o,"members",t],s,y.K),null)
t=$.ik()
o=D.l7().$2("api.brainiacs.in","/crews/"+$.lo.d7())
s=A.bl(["Content-Type","application/json"],s,s)
x=2
return A.b1(t.d8("PUT",y.R.a(o),y.n.a(s),q,null),$async$h4)
case 2:p=e.b
if(p!==200)throw A.e(new B.k0(p))
return A.b3(null,w)}})
return A.b4($async$h4,w)}}
B.bu.prototype={
ey(d){return new B.bu(d,!1)}}
B.h5.prototype={$iaw:1,
ge4(){return this.a}}
B.k0.prototype={$iaw:1,
ge4(){return this.a}}
var z=a.updateTypes(["ac<bu>()","bD(A<j,@>)","A<j,j?>(bD)"])
B.oP.prototype={
$0(){var x=0,w=A.b5(y.D),v,u=this,t,s
var $async$$0=A.aU(function(d,e){if(d===1)return A.b2(e,w)
while(true)switch(x){case 0:t=u.a
x=3
return A.b1(t.fo(u.b),$async$$0)
case 3:s=e
t=t.a
t===$&&A.b()
t.aK()
v=t.gaA().gaL().ey(s)
x=1
break
case 1:return A.b3(v,w)}})
return A.b4($async$$0,w)},
$S:z+0}
B.oO.prototype={
$1(d){var x,w
y.P.a(d)
x=d.k(0,"name")
x.toString
A.u(x)
w=d.k(0,"role")
w.toString
return new B.bD(x,A.u(w),A.bJ(d.k(0,"imageData")))},
$S:z+1}
B.oQ.prototype={
$1(d){y.X.a(d)
return A.bl(["name",d.a,"role",d.b,"imageData",d.c],y.N,y.u)},
$S:z+2};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.n,[B.iw,B.bD,B.bu,B.h5,B.k0])
w(B.cb,D.e3)
w(B.oP,A.cc)
x(A.aC,[B.oO,B.oQ])})()
A.c7(b.typeUniverse,JSON.parse('{"cb":{"e3":["bu"],"cq":["bu"],"b8":["bu"],"b8.0":"bu","cq.0":"bu"},"h5":{"aw":[]},"k0":{"aw":[]}}'))
var y=(function rtii(){var x=A.x
return{X:x("bD"),f:x("iw"),D:x("bu"),i:x("p<C>"),p:x("p<bD>"),j:x("o<@>"),P:x("A<j,@>"),K:x("n"),N:x("j"),R:x("ej"),T:x("o<bD>?"),n:x("A<j,j>?"),u:x("j?"),H:x("~")}})();(function constants(){var x=a.makeConstList
C.cA=new D.aJ(!1,null,null,null,A.x("aJ<bu>"))
C.le=new F.L("Oopsie! You are missing the ID...",null)
C.bW=x([C.le],y.i)
C.ls=new F.L("Crew lookups require an ID query param as a query which you are missing. Add that or copy the link properly & try again ;)",null)
C.c8=x([C.ls],y.i)})();(function staticFields(){$.yn=!1
$.lo=A.kg()})()};
(a=>{a["0sdZVxNFtYQLY68susFFf2REUs8="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.clients.dart.js_21.part.js.map
