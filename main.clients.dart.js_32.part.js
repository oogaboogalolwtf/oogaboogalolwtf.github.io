((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,D,E,B={nC:function nC(d,e,f){this.c=d
this.d=e
this.a=f},to:function to(){},tp:function tp(d){this.a=d},
Ha(d){var x=A.u(d.k(0,"id")),w=A.u(d.k(0,"title"))
A.u(d.k(0,"desc"))
return new B.nC(x,w,null)}},F
J=c[1]
A=c[0]
C=c[16]
D=c[27]
E=c[18]
B=a.updateHolder(c[9],B)
F=c[15]
B.nC.prototype={
ag(d){return new A.a0(this.re(d),y.n)},
re(d){var x=this
return function(){var w=d
var v=0,u=1,t=[],s,r,q,p,o,n,m
return function $async$ag(e,f,g){if(f===1){t.push(g)
v=u}while(true)switch(v){case 0:m=$.zv
if(!m){$.zv=!0
s=A.f(new b.G.IntersectionObserver(A.xB(new B.to()),{threshold:1}))
r=A.f(F.oA("tos-sections",y.g).children)
for(q=0;q<A.z(r.length);++q){p=A.M(r.item(q))
if(p==null)p=A.f(p)
s.observe(p)}}o=new E.ce(null,y.b)
m=A.bl(["click",new B.tp(o)],y.w,y.a)
n=y.F
v=2
return e.b=C.oD(A.h([C.l5(A.h([new D.L(x.d,null)],n),null,"/tos#"+x.c,null,null)],n),null,m,o),1
case 2:return 0
case 1:return e.c=t.at(-1),3}}}}}
var z=a.updateTypes([])
B.to.prototype={
$1(d){var x,w,v,u,t,s,r
y.c.a(d)
x=J.bh(y.z.b(d)?d:new A.cN(d,A.U(d).h("cN<1,K>")))
w=null
v=0
for(;x.t();){u=x.gF()
if(A.i2(u.isIntersecting)&&A.l1(u.intersectionRatio)>v){v=A.l1(u.intersectionRatio)
w=A.f(u.target)}}if(w==null)return
x=b.G
t=A.M(A.f(x.document).querySelector("#toc li.selected"))
if(t!=null)t.className=""
s=A.M(A.f(x.document).querySelector("#toc a[href='/tos#"+A.u(w.id)+"']"))
if(s==null)s=A.f(s)
r=A.M(s.parentElement)
if(r==null)r=A.f(r)
r.className="selected"},
$S:66}
B.tp.prototype={
$1(d){var x
A.f(d)
x=A.M(this.a.gcD().firstElementChild)
if(x==null)x=A.f(x)
x.click()},
$S:4};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.nC,D.aA)
w(A.aC,[B.to,B.tp])})()
A.c7(b.typeUniverse,JSON.parse('{"nC":{"aA":[],"C":[]}}'))
var y={F:A.x("p<C>"),c:A.x("p<n?>"),b:A.x("ce<K>"),z:A.x("o<K>"),w:A.x("j"),n:A.x("a0<C>"),g:A.x("K?"),a:A.x("~(K)")};(function staticFields(){$.zv=!1})()};
(a=>{a["baRKWdOoHMXUtwo7ouzLyfFhkx0="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.clients.dart.js_32.part.js.map
