((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.clients.dart.js_22",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,E,F,B={ip:function ip(d,e,f){this.a=d
this.b=e
this.c=f},bA:function bA(d,e,f){this.a=d
this.b=e
this.c=f},c7:function c7(){this.a=$},oI:function oI(d,e){this.a=d
this.b=e},oH:function oH(){},oJ:function oJ(){},bq:function bq(d,e){this.a=d
this.b=e},iA:function iA(d){this.a=d},jV:function jV(d){this.a=d}},C,D
J=c[1]
A=c[0]
E=c[2]
F=c[27]
B=a.updateHolder(c[11],B)
C=c[31]
D=c[17]
B.ip.prototype={
lr(d,e,f){var x,w
y.T.a(e)
x=f==null?this.a:f
w=d==null?this.b:d
return new B.ip(x,w,e==null?this.c:e)},
rA(d,e){return this.lr(d,null,e)},
iq(d){return this.lr(null,d,null)}}
B.bA.prototype={}
B.c7.prototype={
da(){return new B.bq(null,!1)},
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
E.b.i(w,v,new B.bA(x,u,t))
r.aK()
s=r.gaA().gaL().a.iq(w)
r.aK()
r.sbt(A.k(this).h("a3<b5.0>").a(D.fE(r.gaA().gaL().ez(s),y.D)))},
rQ(d,e,f){return this.lx(d,null,e,f)},
rP(d,e){return this.lx(d,e,null,null)},
eH(d){var x=0,w=A.b0(y.H),v,u=this,t,s,r,q
var $async$eH=A.aS(function(e,f){if(e===1)return A.aY(f,w)
while(true)switch(x){case 0:s=u.a
s===$&&A.c()
s.aK()
if(s.gaA().gcc()||$.yj){x=1
break}t=d==null?"-1":d
if($.lj.b!==$.lj)A.a_(A.z3(""))
$.lj.b=t
$.yj=!0
t=A.k(u).h("a3<b5.0>")
s.sbt(t.a(C.cz))
r=s
q=t
x=3
return A.aX(D.ll(new B.oI(u,d),y.D),$async$eH)
case 3:r.sbt(q.a(f))
case 1:return A.aZ(v,w)}})
return A.b_($async$eH,w)},
fq(d){return this.oP(d)},
oP(d){var x=0,w=A.b0(y.f),v,u,t,s,r,q,p
var $async$fq=A.aS(function(e,f){if(e===1)return A.aY(f,w)
while(true)switch(x){case 0:x=3
return A.aX($.id().i6("GET",y.R.a(D.l2().$2("api.brainiacs.in","/crews/"+d)),null),$async$fq)
case 3:q=f
p=q.b
if(p!==200)throw A.f(new B.iA(p))
p=y.P
u=p.a(E.T.eB(D.xJ(D.xt(q.e)).bv(q.w),null))
t=u.k(0,"members")
t.toString
s=J.oC(y.j.a(t),p)
p=s.$ti
t=p.h("a1<I.E,bA>")
r=A.x(new A.a1(s,p.h("bA(I.E)").a(new B.oH()),t),t.h("Z.E"))
p=u.k(0,"title")
p.toString
A.v(p)
t=u.k(0,"desc")
t.toString
v=new B.ip(p,A.v(t),r)
x=1
break
case 1:return A.aZ(v,w)}})
return A.b_($async$fq,w)},
glQ(){var x=this.a
x===$&&A.c()
x.aK()
x=x.gaA().gaL()
if(x==null)x=null
else{x=x.a
x=x==null?null:x.c}return x==null?A.b([],y.p):x},
h6(){var x=0,w=A.b0(y.H),v=this,u,t,s,r,q,p,o
var $async$h6=A.aS(function(d,e){if(d===1)return A.aY(e,w)
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
t=A.x(new A.a1(t,s.h("z<i,i?>(1)").a(new B.oJ()),r),r.h("Z.E"))
t.$flags=1
s=y.N
q=E.T.rS(A.bj(["crewID",p,"title",u,"desc",o,"members",t],s,y.K),null)
t=$.id()
o=D.l2().$2("api.brainiacs.in","/crews/"+$.lj.d7())
s=A.bj(["Content-Type","application/json"],s,s)
x=2
return A.aX(t.d8("PUT",y.R.a(o),y.n.a(s),q,null),$async$h6)
case 2:p=e.b
if(p!==200)throw A.f(new B.jV(p))
return A.aZ(null,w)}})
return A.b_($async$h6,w)},
pv(){throw A.f("_mockCrew() must only be called in debug environments")}}
B.bq.prototype={
ez(d){return new B.bq(d,!1)}}
B.iA.prototype={$iay:1,
ge4(){return this.a}}
B.jV.prototype={$iay:1,
ge4(){return this.a}}
var z=a.updateTypes(["a9<bq>()","bA(z<i,@>)","z<i,i?>(bA)"])
B.oI.prototype={
$0(){var x=0,w=A.b0(y.D),v,u=this,t,s,r
var $async$$0=A.aS(function(d,e){if(d===1)return A.aY(e,w)
while(true)switch(x){case 0:t=u.b
s=u.a
x=t==null?3:5
break
case 3:e=s.pv()
x=4
break
case 5:x=6
return A.aX(s.fq(t),$async$$0)
case 6:case 4:r=e
t=s.a
t===$&&A.c()
t.aK()
v=t.gaA().gaL().ez(r)
x=1
break
case 1:return A.aZ(v,w)}})
return A.b_($async$$0,w)},
$S:z+0}
B.oH.prototype={
$1(d){var x,w
y.P.a(d)
x=d.k(0,"name")
x.toString
A.v(x)
w=d.k(0,"role")
w.toString
return new B.bA(x,A.v(w),A.bE(d.k(0,"imageData")))},
$S:z+1}
B.oJ.prototype={
$1(d){y.X.a(d)
return A.bj(["name",d.a,"role",d.b,"imageData",d.c],y.N,y.u)},
$S:z+2};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.m,[B.ip,B.bA,B.bq,B.iA,B.jV])
w(B.c7,D.dZ)
w(B.oI,A.c8)
x(A.az,[B.oH,B.oJ])})()
A.bV(b.typeUniverse,JSON.parse('{"c7":{"dZ":["bq"],"cm":["bq"],"b5":["bq"],"b5.0":"bq","cm.0":"bq"},"iA":{"ay":[]},"jV":{"ay":[]}}'))
var y=(function rtii(){var x=A.u
return{X:x("bA"),f:x("ip"),D:x("bq"),i:x("o<B>"),p:x("o<bA>"),j:x("n<@>"),P:x("z<i,@>"),K:x("m"),N:x("i"),R:x("ed"),T:x("n<bA>?"),n:x("z<i,i>?"),u:x("i?"),H:x("~")}})();(function constants(){var x=a.makeConstList
C.cz=new D.aF(!1,null,null,null,A.u("aF<bq>"))
C.le=new F.L("Oopsie! You are missing the ID...",null)
C.bU=A.b(x([C.le]),y.i)
C.ls=new F.L("Crew lookups require an ID query param as a query which you are missing. Add that or copy the link properly & try again ;)",null)
C.c6=A.b(x([C.ls]),y.i)})();(function staticFields(){$.yj=!1
$.lj=A.ka()})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.clients.dart.js_22",e:"endPart",h:b})})($__dart_deferred_initializers__,"NfzRY0na/OUYevk2L20lRmresV0=");
//# sourceMappingURL=main.clients.dart.js_22.part.js.map
