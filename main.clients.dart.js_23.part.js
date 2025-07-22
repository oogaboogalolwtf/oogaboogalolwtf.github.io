((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.clients.dart.js_23",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,E,F,B={ir:function ir(d,e,f){this.a=d
this.b=e
this.c=f},bB:function bB(d,e,f){this.a=d
this.b=e
this.c=f},c7:function c7(){this.a=$},oJ:function oJ(d,e){this.a=d
this.b=e},oI:function oI(){},oK:function oK(){},br:function br(d,e){this.a=d
this.b=e},h3:function h3(d){this.a=d},jW:function jW(d){this.a=d}},C,D
J=c[1]
A=c[0]
E=c[2]
F=c[27]
B=a.updateHolder(c[11],B)
C=c[31]
D=c[17]
B.ir.prototype={
lr(d,e,f){var x,w
y.T.a(e)
x=f==null?this.a:f
w=d==null?this.b:d
return new B.ir(x,w,e==null?this.c:e)},
rz(d,e){return this.lr(d,null,e)},
iq(d){return this.lr(null,d,null)}}
B.bB.prototype={}
B.c7.prototype={
da(){return new B.br(null,!1)},
lx(d,e,f,g){var x,w,v,u,t,s,r=this.a
r===$&&A.c()
r.aK()
x=r.gaA().gaL().a.c
w=A.b(x.slice(0),A.S(x))
v=E.b.cI(w,d)
x=f==null?d.a:f
u=g==null?d.b:g
t=e==null?d.c:e
if(t==null)t=d.c
E.b.i(w,v,new B.bB(x,u,t))
r.aK()
s=r.gaA().gaL().a.iq(w)
r.aK()
r.sbt(A.k(this).h("a3<b6.0>").a(D.fG(r.gaA().gaL().ez(s),y.D)))},
rP(d,e,f){return this.lx(d,null,e,f)},
rO(d,e){return this.lx(d,e,null,null)},
eH(d){var x=0,w=A.b2(y.H),v,u=this,t,s,r,q
var $async$eH=A.aS(function(e,f){if(e===1)return A.b_(f,w)
while(true)switch(x){case 0:s=u.a
s===$&&A.c()
s.aK()
if(s.gaA().gcc()||$.yk){x=1
break}if($.lj.b!==$.lj)A.a_(A.z4(""))
$.lj.b=d
$.yk=!0
t=A.k(u).h("a3<b6.0>")
s.sbt(t.a(C.cA))
r=s
q=t
x=3
return A.aZ(D.ll(new B.oJ(u,d),y.D),$async$eH)
case 3:r.sbt(q.a(f))
case 1:return A.b0(v,w)}})
return A.b1($async$eH,w)},
fq(d){return this.oP(d)},
oP(d){var x=0,w=A.b2(y.f),v,u,t,s,r,q,p
var $async$fq=A.aS(function(e,f){if(e===1)return A.b_(f,w)
while(true)switch(x){case 0:x=3
return A.aZ($.ig().i6("GET",y.R.a(D.l2().$2("api.brainiacs.in","/crews/"+d)),null),$async$fq)
case 3:q=f
p=q.b
if(p!==200)throw A.f(new B.h3(p))
p=y.P
u=p.a(E.T.eB(D.xK(D.xu(q.e)).bv(q.w),null))
t=u.k(0,"members")
t.toString
s=J.oD(y.j.a(t),p)
p=s.$ti
t=p.h("a1<I.E,bB>")
r=A.x(new A.a1(s,p.h("bB(I.E)").a(new B.oI()),t),t.h("Y.E"))
p=u.k(0,"title")
p.toString
A.u(p)
t=u.k(0,"desc")
t.toString
v=new B.ir(p,A.u(t),r)
x=1
break
case 1:return A.b0(v,w)}})
return A.b1($async$fq,w)},
glQ(){var x=this.a
x===$&&A.c()
x.aK()
x=x.gaA().gaL()
if(x==null)x=null
else{x=x.a
x=x==null?null:x.c}return x==null?A.b([],y.p):x},
h6(){var x=0,w=A.b2(y.H),v=this,u,t,s,r,q,p,o
var $async$h6=A.aS(function(d,e){if(d===1)return A.b_(e,w)
while(true)switch(x){case 0:p=$.lj.d7()
o=v.a
o===$&&A.c()
o.aK()
u=o.gaA().gaL().a.a
o.aK()
o=o.gaA().gaL().a.b
t=v.glQ()
s=A.S(t)
r=s.h("a1<1,z<i,i?>>")
t=A.x(new A.a1(t,s.h("z<i,i?>(1)").a(new B.oK()),r),r.h("Y.E"))
t.$flags=1
s=y.N
q=E.T.rR(A.bj(["crewID",p,"title",u,"desc",o,"members",t],s,y.K),null)
t=$.ig()
o=D.l2().$2("api.brainiacs.in","/crews/"+$.lj.d7())
s=A.bj(["Content-Type","application/json"],s,s)
x=2
return A.aZ(t.d8("PUT",y.R.a(o),y.n.a(s),q,null),$async$h6)
case 2:p=e.b
if(p!==200)throw A.f(new B.jW(p))
return A.b0(null,w)}})
return A.b1($async$h6,w)}}
B.br.prototype={
ez(d){return new B.br(d,!1)}}
B.h3.prototype={$iay:1,
ge4(){return this.a}}
B.jW.prototype={$iay:1,
ge4(){return this.a}}
var z=a.updateTypes(["aa<br>()","bB(z<i,@>)","z<i,i?>(bB)"])
B.oJ.prototype={
$0(){var x=0,w=A.b2(y.D),v,u=this,t,s
var $async$$0=A.aS(function(d,e){if(d===1)return A.b_(e,w)
while(true)switch(x){case 0:t=u.a
x=3
return A.aZ(t.fq(u.b),$async$$0)
case 3:s=e
t=t.a
t===$&&A.c()
t.aK()
v=t.gaA().gaL().ez(s)
x=1
break
case 1:return A.b0(v,w)}})
return A.b1($async$$0,w)},
$S:z+0}
B.oI.prototype={
$1(d){var x,w
y.P.a(d)
x=d.k(0,"name")
x.toString
A.u(x)
w=d.k(0,"role")
w.toString
return new B.bB(x,A.u(w),A.bG(d.k(0,"imageData")))},
$S:z+1}
B.oK.prototype={
$1(d){y.X.a(d)
return A.bj(["name",d.a,"role",d.b,"imageData",d.c],y.N,y.u)},
$S:z+2};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.m,[B.ir,B.bB,B.br,B.h3,B.jW])
w(B.c7,D.e2)
w(B.oJ,A.c8)
x(A.az,[B.oI,B.oK])})()
A.c3(b.typeUniverse,JSON.parse('{"c7":{"e2":["br"],"cn":["br"],"b6":["br"],"b6.0":"br","cn.0":"br"},"h3":{"ay":[]},"jW":{"ay":[]}}'))
var y=(function rtii(){var x=A.v
return{X:x("bB"),f:x("ir"),D:x("br"),i:x("o<B>"),p:x("o<bB>"),j:x("n<@>"),P:x("z<i,@>"),K:x("m"),N:x("i"),R:x("eh"),T:x("n<bB>?"),n:x("z<i,i>?"),u:x("i?"),H:x("~")}})();(function constants(){var x=a.makeConstList
C.cA=new D.aG(!1,null,null,null,A.v("aG<br>"))
C.le=new F.L("Oopsie! You are missing the ID...",null)
C.bW=A.b(x([C.le]),y.i)
C.ls=new F.L("Crew lookups require an ID query param as a query which you are missing. Add that or copy the link properly & try again ;)",null)
C.c8=A.b(x([C.ls]),y.i)})();(function staticFields(){$.yk=!1
$.lj=A.kb()})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.clients.dart.js_23",e:"endPart",h:b})})($__dart_deferred_initializers__,"q8zG0t3xZ04LgGg1Nq4pI8CNSzA=");
//# sourceMappingURL=main.clients.dart.js_23.part.js.map
