(function dartProgram(){function copyProperties(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
b[q]=a[q]}}function mixinPropertiesHard(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
if(!b.hasOwnProperty(q)){b[q]=a[q]}}}function mixinPropertiesEasy(a,b){Object.assign(b,a)}var z=function(){var s=function(){}
s.prototype={p:{}}
var r=new s()
if(!(Object.getPrototypeOf(r)&&Object.getPrototypeOf(r).p===s.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var q=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(q))return true}}catch(p){}return false}()
function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){Object.setPrototypeOf(a.prototype,b.prototype)
return}var s=Object.create(b.prototype)
copyProperties(a.prototype,s)
a.prototype=s}}function inheritMany(a,b){for(var s=0;s<b.length;s++){inherit(b[s],a)}}function mixinEasy(a,b){mixinPropertiesEasy(b.prototype,a.prototype)
a.prototype.constructor=a}function mixinHard(a,b){mixinPropertiesHard(b.prototype,a.prototype)
a.prototype.constructor=a}function lazy(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s){a[b]=d()}a[c]=function(){return this[b]}
return a[b]}}function lazyFinal(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s){var r=d()
if(a[b]!==s){A.jL(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a){a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.oB(b)
return new s(c,this)}:function(){if(s===null)s=A.oB(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.oB(a).prototype
return s}}var x=0
function tearOffParameters(a,b,c,d,e,f,g,h,i,j){if(typeof h=="number"){h+=x}return{co:a,iS:b,iI:c,rC:d,dV:e,cs:f,fs:g,fT:h,aI:i||0,nDA:j}}function installStaticTearOff(a,b,c,d,e,f,g,h){var s=tearOffParameters(a,true,false,c,d,e,f,g,h,false)
var r=staticTearOffGetter(s)
a[b]=r}function installInstanceTearOff(a,b,c,d,e,f,g,h,i,j){c=!!c
var s=tearOffParameters(a,false,c,d,e,f,g,h,i,!!j)
var r=instanceTearOffGetter(c,s)
a[b]=r}function setOrUpdateInterceptorsByTag(a){var s=v.interceptorsByTag
if(!s){v.interceptorsByTag=a
return}copyProperties(a,s)}function setOrUpdateLeafTags(a){var s=v.leafTags
if(!s){v.leafTags=a
return}copyProperties(a,s)}function updateTypes(a){var s=v.types
var r=s.length
s.push.apply(s,a)
return r}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var s=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e,false)}},r=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixinEasy,mixinHard:mixinHard,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:s(0,0,null,["$0"],0),_instance_1u:s(0,1,null,["$1"],0),_instance_2u:s(0,2,null,["$2"],0),_instance_0i:s(1,0,null,["$0"],0),_instance_1i:s(1,1,null,["$1"],0),_instance_2i:s(1,2,null,["$2"],0),_static_0:r(0,null,["$0"],0),_static_1:r(1,null,["$1"],0),_static_2:r(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyFinal:lazyFinal,updateHolder:updateHolder,convertToFastObject:convertToFastObject,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}var J={
oH(a,b,c,d){return{i:a,p:b,e:c,x:d}},
nd(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.oF==null){A.x7()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.f(A.pR("Return interceptor for "+A.t(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.mn
if(o==null)o=$.mn=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.xe(a)
if(p!=null)return p
if(typeof a=="function")return B.cX
s=Object.getPrototypeOf(a)
if(s==null)return B.bW
if(s===Object.prototype)return B.bW
if(typeof q=="function"){o=$.mn
if(o==null)o=$.mn=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.aO,enumerable:false,writable:true,configurable:true})
return B.aO}return B.aO},
nP(a,b){if(a<0||a>4294967295)throw A.f(A.a3(a,0,4294967295,"length",null))
return J.ps(new Array(a),b)},
aM(a,b){if(a<0||a>4294967295)throw A.f(A.a3(a,0,4294967295,"length",null))
return J.ps(new Array(a),b)},
id(a,b){if(a<0)throw A.f(A.W("Length must be a non-negative integer: "+a,null))
return A.b(new Array(a),b.i("v<0>"))},
dN(a,b){return A.b(new Array(a),b.i("v<0>"))},
ps(a,b){var s=A.b(a,b.i("v<0>"))
s.$flags=1
return s},
tw(a,b){var s=t.bP
return J.oU(s.a(a),s.a(b))},
pt(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
tx(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.pt(r))break;++b}return b},
ty(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.a(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.pt(q))break}return b},
dd(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.eW.prototype
return J.ig.prototype}if(typeof a=="string")return J.c8.prototype
if(a==null)return J.eX.prototype
if(typeof a=="boolean")return J.ie.prototype
if(Array.isArray(a))return J.v.prototype
if(typeof a!="object"){if(typeof a=="function")return J.by.prototype
if(typeof a=="symbol")return J.dR.prototype
if(typeof a=="bigint")return J.dQ.prototype
return a}if(a instanceof A.B)return a
return J.nd(a)},
R(a){if(typeof a=="string")return J.c8.prototype
if(a==null)return a
if(Array.isArray(a))return J.v.prototype
if(typeof a!="object"){if(typeof a=="function")return J.by.prototype
if(typeof a=="symbol")return J.dR.prototype
if(typeof a=="bigint")return J.dQ.prototype
return a}if(a instanceof A.B)return a
return J.nd(a)},
ao(a){if(a==null)return a
if(Array.isArray(a))return J.v.prototype
if(typeof a!="object"){if(typeof a=="function")return J.by.prototype
if(typeof a=="symbol")return J.dR.prototype
if(typeof a=="bigint")return J.dQ.prototype
return a}if(a instanceof A.B)return a
return J.nd(a)},
x_(a){if(typeof a=="number")return J.dO.prototype
if(typeof a=="string")return J.c8.prototype
if(a==null)return a
if(!(a instanceof A.B))return J.d4.prototype
return a},
qW(a){if(typeof a=="string")return J.c8.prototype
if(a==null)return a
if(!(a instanceof A.B))return J.d4.prototype
return a},
cr(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.by.prototype
if(typeof a=="symbol")return J.dR.prototype
if(typeof a=="bigint")return J.dQ.prototype
return a}if(a instanceof A.B)return a
return J.nd(a)},
a_(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.dd(a).N(a,b)},
d(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.xd(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.R(a).k(a,b)},
D(a,b,c){return J.ao(a).h(a,b,c)},
oR(a,b){return J.ao(a).C(a,b)},
rI(a,b){return J.qW(a).e_(a,b)},
oS(a,b,c){return J.cr(a).hT(a,b,c)},
rJ(a,b,c){return J.cr(a).hU(a,b,c)},
rK(a,b,c){return J.cr(a).hV(a,b,c)},
nB(a,b,c){return J.cr(a).hW(a,b,c)},
rL(a){return J.cr(a).hX(a)},
oT(a,b,c){return J.cr(a).e0(a,b,c)},
aU(a,b,c){return J.cr(a).hY(a,b,c)},
bv(a){return J.cr(a).hZ(a)},
ac(a,b,c){return J.cr(a).e1(a,b,c)},
rM(a,b){return J.ao(a).e3(a,b)},
oU(a,b){return J.x_(a).b1(a,b)},
rN(a,b){return J.R(a).av(a,b)},
ht(a,b){return J.ao(a).aq(a,b)},
bw(a,b,c,d){return J.ao(a).aS(a,b,c,d)},
bl(a){return J.dd(a).gH(a)},
oV(a){return J.R(a).gO(a)},
rO(a){return J.R(a).gc7(a)},
ap(a){return J.ao(a).gJ(a)},
aq(a){return J.R(a).gn(a)},
rP(a){return J.dd(a).gaP(a)},
rQ(a,b,c){return J.ao(a).du(a,b,c)},
rR(a,b,c){return J.qW(a).cH(a,b,c)},
rS(a,b){return J.R(a).sn(a,b)},
oW(a,b,c){return J.ao(a).iS(a,b,c)},
rT(a,b,c,d,e){return J.ao(a).an(a,b,c,d,e)},
jR(a,b){return J.ao(a).bA(a,b)},
oX(a,b){return J.ao(a).dA(a,b)},
nC(a,b,c){return J.ao(a).aQ(a,b,c)},
rU(a,b){return J.ao(a).iC(a,b)},
rV(a){return J.ao(a).ed(a)},
de(a){return J.dd(a).t(a)},
i2:function i2(){},
ie:function ie(){},
eX:function eX(){},
eY:function eY(){},
c9:function c9(){},
iy:function iy(){},
d4:function d4(){},
by:function by(){},
dQ:function dQ(){},
dR:function dR(){},
v:function v(a){this.$ti=a},
kP:function kP(a){this.$ti=a},
cu:function cu(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
dO:function dO(){},
eW:function eW(){},
ig:function ig(){},
c8:function c8(){}},A={nR:function nR(){},
k8(a,b,c){if(b.i("A<0>").b(a))return new A.fU(a,b.i("@<0>").aa(c).i("fU<1,2>"))
return new A.cv(a,b.i("@<0>").aa(c).i("cv<1,2>"))},
tz(a){return new A.cH("Field '"+a+"' has not been initialized.")},
ng(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
fD(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
og(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
jH(a,b,c){return a},
oG(a){var s,r
for(s=$.ba.length,r=0;r<s;++r)if(a===$.ba[r])return!0
return!1},
cf(a,b,c,d){A.aZ(b,"start")
if(c!=null){A.aZ(c,"end")
if(b>c)A.a8(A.a3(b,0,c,"start",null))}return new A.d2(a,b,c,d.i("d2<0>"))},
nV(a,b,c,d){if(t.X.b(a))return new A.ex(a,b,c.i("@<0>").aa(d).i("ex<1,2>"))
return new A.cI(a,b,c.i("@<0>").aa(d).i("cI<1,2>"))},
pN(a,b,c){var s="count"
if(t.X.b(a)){A.jT(b,s,t.p)
A.aZ(b,s)
return new A.dw(a,b,c.i("dw<0>"))}A.jT(b,s,t.p)
A.aZ(b,s)
return new A.bP(a,b,c.i("bP<0>"))},
eV(){return new A.e4("No element")},
pr(){return new A.e4("Too few elements")},
iQ(a,b,c,d,e){if(c-b<=32)A.u_(a,b,c,d,e)
else A.tZ(a,b,c,d,e)},
u_(a,b,c,d,e){var s,r,q,p,o,n
for(s=b+1,r=J.R(a);s<=c;++s){q=r.k(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.k(a,p-1),q)
if(typeof o!=="number")return o.bG()
o=o>0}else o=!1
if(!o)break
n=p-1
r.h(a,p,r.k(a,n))
p=n}r.h(a,p,q)}},
tZ(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j=B.a.Y(a5-a4+1,6),i=a4+j,h=a5-j,g=B.a.Y(a4+a5,2),f=g-j,e=g+j,d=J.R(a3),c=d.k(a3,i),b=d.k(a3,f),a=d.k(a3,g),a0=d.k(a3,e),a1=d.k(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.bG()
if(a2>0){s=b
b=c
c=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.bG()
if(a2>0){s=a1
a1=a0
a0=s}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.bG()
if(a2>0){s=a
a=c
c=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.bG()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.bG()
if(a2>0){s=a0
a0=c
c=s}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.bG()
if(a2>0){s=a0
a0=a
a=s}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.bG()
if(a2>0){s=a1
a1=b
b=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.bG()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.bG()
if(a2>0){s=a1
a1=a0
a0=s}d.h(a3,i,c)
d.h(a3,g,a)
d.h(a3,h,a1)
d.h(a3,f,d.k(a3,a4))
d.h(a3,e,d.k(a3,a5))
r=a4+1
q=a5-1
p=J.a_(a6.$2(b,a0),0)
if(p)for(o=r;o<=q;++o){n=d.k(a3,o)
m=a6.$2(n,b)
if(m===0)continue
if(m<0){if(o!==r){d.h(a3,o,d.k(a3,r))
d.h(a3,r,n)}++r}else for(;!0;){m=a6.$2(d.k(a3,q),b)
if(m>0){--q
continue}else{l=q-1
if(m<0){d.h(a3,o,d.k(a3,r))
k=r+1
d.h(a3,r,d.k(a3,q))
d.h(a3,q,n)
q=l
r=k
break}else{d.h(a3,o,d.k(a3,q))
d.h(a3,q,n)
q=l
break}}}}else for(o=r;o<=q;++o){n=d.k(a3,o)
if(a6.$2(n,b)<0){if(o!==r){d.h(a3,o,d.k(a3,r))
d.h(a3,r,n)}++r}else if(a6.$2(n,a0)>0)for(;!0;)if(a6.$2(d.k(a3,q),a0)>0){--q
if(q<o)break
continue}else{l=q-1
if(a6.$2(d.k(a3,q),b)<0){d.h(a3,o,d.k(a3,r))
k=r+1
d.h(a3,r,d.k(a3,q))
d.h(a3,q,n)
r=k}else{d.h(a3,o,d.k(a3,q))
d.h(a3,q,n)}q=l
break}}a2=r-1
d.h(a3,a4,d.k(a3,a2))
d.h(a3,a2,b)
a2=q+1
d.h(a3,a5,d.k(a3,a2))
d.h(a3,a2,a0)
A.iQ(a3,a4,r-2,a6,a7)
A.iQ(a3,q+2,a5,a6,a7)
if(p)return
if(r<i&&q>h){for(;J.a_(a6.$2(d.k(a3,r),b),0);)++r
for(;J.a_(a6.$2(d.k(a3,q),a0),0);)--q
for(o=r;o<=q;++o){n=d.k(a3,o)
if(a6.$2(n,b)===0){if(o!==r){d.h(a3,o,d.k(a3,r))
d.h(a3,r,n)}++r}else if(a6.$2(n,a0)===0)for(;!0;)if(a6.$2(d.k(a3,q),a0)===0){--q
if(q<o)break
continue}else{l=q-1
if(a6.$2(d.k(a3,q),b)<0){d.h(a3,o,d.k(a3,r))
k=r+1
d.h(a3,r,d.k(a3,q))
d.h(a3,q,n)
r=k}else{d.h(a3,o,d.k(a3,q))
d.h(a3,q,n)}q=l
break}}A.iQ(a3,r,q,a6,a7)}else A.iQ(a3,r,q,a6,a7)},
ci:function ci(){},
eu:function eu(a,b){this.a=a
this.$ti=b},
cv:function cv(a,b){this.a=a
this.$ti=b},
fU:function fU(a,b){this.a=a
this.$ti=b},
fR:function fR(){},
m5:function m5(a,b){this.a=a
this.b=b},
bG:function bG(a,b){this.a=a
this.$ti=b},
cH:function cH(a){this.a=a},
ai:function ai(a){this.a=a},
np:function np(){},
lo:function lo(){},
A:function A(){},
U:function U(){},
d2:function d2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ah:function ah(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cI:function cI(a,b,c){this.a=a
this.b=b
this.$ti=c},
ex:function ex(a,b,c){this.a=a
this.b=b
this.$ti=c},
aB:function aB(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
aC:function aC(a,b,c){this.a=a
this.b=b
this.$ti=c},
bV:function bV(a,b,c){this.a=a
this.b=b
this.$ti=c},
d8:function d8(a,b,c){this.a=a
this.b=b
this.$ti=c},
eC:function eC(a,b,c){this.a=a
this.b=b
this.$ti=c},
eD:function eD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
bP:function bP(a,b,c){this.a=a
this.b=b
this.$ti=c},
dw:function dw(a,b,c){this.a=a
this.b=b
this.$ti=c},
fA:function fA(a,b,c){this.a=a
this.b=b
this.$ti=c},
ey:function ey(a){this.$ti=a},
ez:function ez(a){this.$ti=a},
fN:function fN(a,b){this.a=a
this.$ti=b},
fO:function fO(a,b){this.a=a
this.$ti=b},
a5:function a5(){},
bh:function bh(){},
e5:function e5(){},
fz:function fz(a,b){this.a=a
this.$ti=b},
lx:function lx(){},
hl:function hl(){},
t7(){throw A.f(A.a2("Cannot modify unmodifiable Map"))},
rb(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
xd(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.dX.b(a)},
t(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.de(a)
return s},
cX(a){var s,r=$.pE
if(r==null)r=$.pE=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
pF(a,b){var s,r,q,p,o,n=null,m=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(m==null)return n
if(3>=m.length)return A.a(m,3)
s=m[3]
if(b==null){if(s!=null)return parseInt(a,10)
if(m[2]!=null)return parseInt(a,16)
return n}if(b<2||b>36)throw A.f(A.a3(b,2,36,"radix",n))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=m[1]
for(p=q.length,o=0;o<p;++o)if((q.charCodeAt(o)|32)>r)return n}return parseInt(a,b)},
lh(a){return A.tP(a)},
tP(a){var s,r,q,p
if(a instanceof A.B)return A.aH(A.at(a),null)
s=J.dd(a)
if(s===B.cV||s===B.cY||t.cx.b(a)){r=B.aT(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.aH(A.at(a),null)},
tS(a){if(typeof a=="number"||A.oy(a))return J.de(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.aJ)return a.t(0)
return"Instance of '"+A.lh(a)+"'"},
tQ(){if(!!self.location)return self.location.href
return null},
pD(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
tT(a){var s,r,q,p=A.b([],t.t)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.aI)(a),++r){q=a[r]
if(!A.jD(q))throw A.f(A.cq(q))
if(q<=65535)B.c.C(p,q)
else if(q<=1114111){B.c.C(p,55296+(B.a.l(q-65536,10)&1023))
B.c.C(p,56320+(q&1023))}else throw A.f(A.cq(q))}return A.pD(p)},
pG(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!A.jD(q))throw A.f(A.cq(q))
if(q<0)throw A.f(A.cq(q))
if(q>65535)return A.tT(a)}return A.pD(a)},
tU(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
T(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.a.l(s,10)|55296)>>>0,s&1023|56320)}}throw A.f(A.a3(a,0,1114111,null,null))},
tR(a){var s=a.$thrownJsError
if(s==null)return null
return A.bk(s)},
pH(a,b){var s
if(a.$thrownJsError==null){s=A.f(a)
a.$thrownJsError=s
s.stack=b.t(0)}},
x3(a){throw A.f(A.cq(a))},
a(a,b){if(a==null)J.aq(a)
throw A.f(A.jJ(a,b))},
jJ(a,b){var s,r="index"
if(!A.jD(b))return new A.bb(!0,b,r,null)
s=A.r(J.aq(a))
if(b<0||b>=s)return A.kM(b,s,a,r)
return A.lm(b,r)},
wR(a,b,c){if(a<0||a>c)return A.a3(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.a3(b,a,c,"end",null)
return new A.bb(!0,b,"end",null)},
cq(a){return new A.bb(!0,a,null,null)},
f(a){return A.qY(new Error(),a)},
qY(a,b){var s
if(b==null)b=new A.bR()
a.dartException=b
s=A.xp
if("defineProperty" in Object){Object.defineProperty(a,"message",{get:s})
a.name=""}else a.toString=s
return a},
xp(){return J.de(this.dartException)},
a8(a){throw A.f(a)},
nt(a,b){throw A.qY(b,a)},
c(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.nt(A.vR(a,b,c),s)},
vR(a,b,c){var s,r,q,p,o,n,m,l,k
if(typeof b=="string")s=b
else{r="[]=;add;removeWhere;retainWhere;removeRange;setRange;setInt8;setInt16;setInt32;setUint8;setUint16;setUint32;setFloat32;setFloat64".split(";")
q=r.length
p=b
if(p>q){c=p/q|0
p%=q}s=r[p]}o=typeof c=="string"?c:"modify;remove from;add to".split(";")[c]
n=t.j.b(a)?"list":"ByteData"
m=a.$flags|0
l="a "
if((m&4)!==0)k="constant "
else if((m&2)!==0){k="unmodifiable "
l="an "}else k=(m&1)!==0?"fixed-length ":""
return new A.fF("'"+s+"': Cannot "+o+" "+l+k+n)},
aI(a){throw A.f(A.aK(a))},
bS(a){var s,r,q,p,o,n
a=A.r5(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.b([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.lA(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
lB(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
pP(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
nS(a,b){var s=b==null,r=s?null:b.method
return new A.ij(a,r,s?null:b.receiver)},
aR(a){var s
if(a==null)return new A.is(a)
if(a instanceof A.eB){s=a.a
return A.cs(a,s==null?t.K.a(s):s)}if(typeof a!=="object")return a
if("dartException" in a)return A.cs(a,a.dartException)
return A.wp(a)},
cs(a,b){if(t.Q.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
wp(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.a.l(r,16)&8191)===10)switch(q){case 438:return A.cs(a,A.nS(A.t(s)+" (Error "+q+")",null))
case 445:case 5007:A.t(s)
return A.cs(a,new A.fe())}}if(a instanceof TypeError){p=$.rg()
o=$.rh()
n=$.ri()
m=$.rj()
l=$.rm()
k=$.rn()
j=$.rl()
$.rk()
i=$.rp()
h=$.ro()
g=p.bN(s)
if(g!=null)return A.cs(a,A.nS(A.I(s),g))
else{g=o.bN(s)
if(g!=null){g.method="call"
return A.cs(a,A.nS(A.I(s),g))}else if(n.bN(s)!=null||m.bN(s)!=null||l.bN(s)!=null||k.bN(s)!=null||j.bN(s)!=null||m.bN(s)!=null||i.bN(s)!=null||h.bN(s)!=null){A.I(s)
return A.cs(a,new A.fe())}}return A.cs(a,new A.j4(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.fB()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.cs(a,new A.bb(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.fB()
return a},
bk(a){var s
if(a instanceof A.eB)return a.b
if(a==null)return new A.h7(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.h7(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
jK(a){if(a==null)return J.bl(a)
if(typeof a=="object")return A.cX(a)
return J.bl(a)},
wF(a){if(typeof a=="number")return B.b.gH(a)
if(a instanceof A.jz)return A.cX(a)
if(a instanceof A.lx)return a.gH(0)
return A.jK(a)},
qV(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.h(0,a[s],a[r])}return b},
w1(a,b,c,d,e,f){t.Y.a(a)
switch(A.r(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.f(new A.jo("Unsupported number of arguments for wrapped closure"))},
ep(a,b){var s=a.$identity
if(!!s)return s
s=A.wG(a,b)
a.$identity=s
return s},
wG(a,b){var s
switch(b){case 0:s=a.$0
break
case 1:s=a.$1
break
case 2:s=a.$2
break
case 3:s=a.$3
break
case 4:s=a.$4
break
default:s=null}if(s!=null)return s.bind(a)
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.w1)},
t5(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.iV().constructor.prototype):Object.create(new A.df(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.p3(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.t1(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.p3(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
t1(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.f("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.rX)}throw A.f("Error in functionType of tearoff")},
t2(a,b,c,d){var s=A.p2
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
p3(a,b,c,d){if(c)return A.t4(a,b,d)
return A.t2(b.length,d,a,b)},
t3(a,b,c,d){var s=A.p2,r=A.rY
switch(b?-1:a){case 0:throw A.f(new A.iP("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
t4(a,b,c){var s,r
if($.p0==null)$.p0=A.p_("interceptor")
if($.p1==null)$.p1=A.p_("receiver")
s=b.length
r=A.t3(s,c,a,b)
return r},
oB(a){return A.t5(a)},
rX(a,b){return A.mB(v.typeUniverse,A.at(a.a),b)},
p2(a){return a.a},
rY(a){return a.b},
p_(a){var s,r,q,p=new A.df("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.f(A.W("Field name "+a+" not found.",null))},
eo(a){if(a==null)A.wu("boolean expression must not be null")
return a},
wu(a){throw A.f(new A.jf(a))},
z9(a){throw A.f(new A.jk(a))},
x0(a){return v.getIsolateTag(a)},
dS(a,b,c){var s=new A.aA(a,b,c.i("aA<0>"))
s.c=a.e
return s},
z5(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
xe(a){var s,r,q,p,o,n=A.I($.qX.$1(a)),m=$.n7[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.nk[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.ej($.qP.$2(a,n))
if(q!=null){m=$.n7[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.nk[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.nn(s)
$.n7[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.nk[n]=s
return s}if(p==="-"){o=A.nn(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.r3(a,s)
if(p==="*")throw A.f(A.pR(n))
if(v.leafTags[n]===true){o=A.nn(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.r3(a,s)},
r3(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.oH(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
nn(a){return J.oH(a,!1,null,!!a.$ib5)},
xf(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.nn(s)
else return J.oH(s,c,null,null)},
x7(){if(!0===$.oF)return
$.oF=!0
A.x8()},
x8(){var s,r,q,p,o,n,m,l
$.n7=Object.create(null)
$.nk=Object.create(null)
A.x6()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.r4.$1(o)
if(n!=null){m=A.xf(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
x6(){var s,r,q,p,o,n,m=B.cv()
m=A.en(B.cw,A.en(B.cx,A.en(B.aU,A.en(B.aU,A.en(B.cy,A.en(B.cz,A.en(B.cA(B.aT),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.qX=new A.nh(p)
$.qP=new A.ni(o)
$.r4=new A.nj(n)},
en(a,b){return a(b)||b},
wO(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
nQ(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw A.f(A.ag("Illegal RegExp pattern ("+String(n)+")",a,null))},
xl(a,b,c){var s
if(typeof b=="string")return a.indexOf(b,c)>=0
else if(b instanceof A.dP){s=B.d.aI(a,c)
return b.b.test(s)}else return!J.rI(b,B.d.aI(a,c)).gO(0)},
wT(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
r5(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
hr(a,b,c){var s=A.xm(a,b,c)
return s},
xm(a,b,c){var s,r,q
if(b===""){if(a==="")return c
s=a.length
r=""+c
for(q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}if(a.indexOf(b,0)<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.r5(b),"g"),A.wT(c))},
qM(a){return a},
r8(a,b,c,d){var s,r,q,p,o,n,m
for(s=b.e_(0,a),s=new A.fP(s.a,s.b,s.c),r=t.lu,q=0,p="";s.B();){o=s.d
if(o==null)o=r.a(o)
n=o.b
m=n.index
p=p+A.t(A.qM(B.d.I(a,q,m)))+A.t(c.$1(o))
q=m+n[0].length}s=p+A.t(A.qM(B.d.aI(a,q)))
return s.charCodeAt(0)==0?s:s},
xn(a,b,c,d){var s=a.indexOf(b,d)
if(s<0)return a
return A.r9(a,s,s+b.length,c)},
r9(a,b,c,d){return a.substring(0,b)+d+a.substring(c)},
dv:function dv(){},
ev:function ev(a,b,c){this.a=a
this.b=b
this.$ti=c},
fX:function fX(a,b){this.a=a
this.$ti=b},
fY:function fY(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cz:function cz(a,b){this.a=a
this.$ti=b},
i0:function i0(){},
dL:function dL(a,b){this.a=a
this.$ti=b},
lA:function lA(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fe:function fe(){},
ij:function ij(a,b,c){this.a=a
this.b=b
this.c=c},
j4:function j4(a){this.a=a},
is:function is(a){this.a=a},
eB:function eB(a,b){this.a=a
this.b=b},
h7:function h7(a){this.a=a
this.b=null},
aJ:function aJ(){},
hB:function hB(){},
hC:function hC(){},
iY:function iY(){},
iV:function iV(){},
df:function df(a,b){this.a=a
this.b=b},
jk:function jk(a){this.a=a},
iP:function iP(a){this.a=a},
jf:function jf(a){this.a=a},
aW:function aW(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
kX:function kX(a){this.a=a},
kW:function kW(a){this.a=a},
l1:function l1(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
aX:function aX(a,b){this.a=a
this.$ti=b},
aA:function aA(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
f0:function f0(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
f_:function f_(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
nh:function nh(a){this.a=a},
ni:function ni(a){this.a=a},
nj:function nj(a){this.a=a},
dP:function dP(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
h0:function h0(a){this.b=a},
je:function je(a,b,c){this.a=a
this.b=b
this.c=c},
fP:function fP(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
fC:function fC(a,b){this.a=a
this.c=b},
jw:function jw(a,b,c){this.a=a
this.b=b
this.c=c},
jx:function jx(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
e(a){A.nt(new A.cH("Field '"+a+"' has not been initialized."),new Error())},
oJ(a){A.nt(new A.cH("Field '"+a+"' has already been initialized."),new Error())},
jL(a){A.nt(new A.cH("Field '"+a+"' has been assigned during initialization."),new Error())},
uY(a){var s=new A.m6(a)
return s.b=s},
m6:function m6(a){this.a=a
this.b=null},
b9(a,b,c){},
C(a){var s,r,q
if(t.iy.b(a))return a
s=J.R(a)
r=A.a1(s.gn(a),null,!1,t.z)
for(q=0;q<s.gn(a);++q)B.c.h(r,q,s.k(a,q))
return r},
tD(a){return new Float32Array(a)},
tE(a,b,c){A.b9(a,b,c)
c=B.a.Y(a.byteLength-b,4)
return new Float32Array(a,b,c)},
tF(a,b,c){A.b9(a,b,c)
c=B.a.Y(a.byteLength-b,2)
return new Int16Array(a,b,c)},
tG(a){return new Int32Array(a)},
tH(a,b,c){A.b9(a,b,c)
c=B.a.Y(a.byteLength-b,4)
return new Int32Array(a,b,c)},
pA(a){return new Int8Array(a)},
tI(a){return new Int8Array(A.C(a))},
tJ(a,b,c){A.b9(a,b,c)
return c==null?new Int8Array(a,b):new Int8Array(a,b,c)},
tK(a){return new Uint16Array(a)},
tL(a,b,c){A.b9(a,b,c)
c=B.a.Y(a.byteLength-b,2)
return new Uint16Array(a,b,c)},
tM(a){return new Uint32Array(a)},
tN(a,b,c){A.b9(a,b,c)
c=B.a.Y(a.byteLength-b,4)
return new Uint32Array(a,b,c)},
iq(a){return new Uint8Array(a)},
nW(a,b,c){A.b9(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
c_(a,b,c){if(a>>>0!==a||a>=c)throw A.f(A.jJ(b,a))},
br(a,b,c){var s
if(!(a>>>0!==a))if(b==null)s=a>c
else s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.f(A.wR(a,b,c))
if(b==null)return c
return b},
cJ:function cJ(){},
fa:function fa(){},
mC:function mC(a){this.a=a},
ip:function ip(){},
aD:function aD(){},
ca:function ca(){},
b6:function b6(){},
f5:function f5(){},
f6:function f6(){},
f7:function f7(){},
f8:function f8(){},
f9:function f9(){},
fb:function fb(){},
fc:function fc(){},
fd:function fd(){},
cK:function cK(){},
h1:function h1(){},
h2:function h2(){},
h3:function h3(){},
h4:function h4(){},
pL(a,b){var s=b.c
return s==null?b.c=A.or(a,b.x,!0):s},
oc(a,b){var s=b.c
return s==null?b.c=A.hd(a,"aV",[b.x]):s},
pM(a){var s=a.w
if(s===6||s===7||s===8)return A.pM(a.x)
return s===12||s===13},
tY(a){return a.as},
a4(a){return A.jA(v.typeUniverse,a,!1)},
xa(a,b){var s,r,q,p,o
if(a==null)return null
s=b.y
r=a.Q
if(r==null)r=a.Q=new Map()
q=b.as
p=r.get(q)
if(p!=null)return p
o=A.c1(v.typeUniverse,a.x,s,0)
r.set(q,o)
return o},
c1(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.c1(a1,s,a3,a4)
if(r===s)return a2
return A.qf(a1,r,!0)
case 7:s=a2.x
r=A.c1(a1,s,a3,a4)
if(r===s)return a2
return A.or(a1,r,!0)
case 8:s=a2.x
r=A.c1(a1,s,a3,a4)
if(r===s)return a2
return A.qd(a1,r,!0)
case 9:q=a2.y
p=A.em(a1,q,a3,a4)
if(p===q)return a2
return A.hd(a1,a2.x,p)
case 10:o=a2.x
n=A.c1(a1,o,a3,a4)
m=a2.y
l=A.em(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.op(a1,n,l)
case 11:k=a2.x
j=a2.y
i=A.em(a1,j,a3,a4)
if(i===j)return a2
return A.qe(a1,k,i)
case 12:h=a2.x
g=A.c1(a1,h,a3,a4)
f=a2.y
e=A.wm(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.qc(a1,g,e)
case 13:d=a2.y
a4+=d.length
c=A.em(a1,d,a3,a4)
o=a2.x
n=A.c1(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.oq(a1,n,c,!0)
case 14:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.f(A.hv("Attempted to substitute unexpected RTI kind "+a0))}},
em(a,b,c,d){var s,r,q,p,o=b.length,n=A.mM(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.c1(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
wn(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.mM(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.c1(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
wm(a,b,c,d){var s,r=b.a,q=A.em(a,r,c,d),p=b.b,o=A.em(a,p,c,d),n=b.c,m=A.wn(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.jq()
s.a=q
s.b=o
s.c=m
return s},
b(a,b){a[v.arrayRti]=b
return a},
n5(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.x1(s)
return a.$S()}return null},
x9(a,b){var s
if(A.pM(b))if(a instanceof A.aJ){s=A.n5(a)
if(s!=null)return s}return A.at(a)},
at(a){if(a instanceof A.B)return A.k(a)
if(Array.isArray(a))return A.Z(a)
return A.ox(J.dd(a))},
Z(a){var s=a[v.arrayRti],r=t.dG
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
k(a){var s=a.$ti
return s!=null?s:A.ox(a)},
ox(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.vZ(a,s)},
vZ(a,b){var s=a instanceof A.aJ?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.vn(v.typeUniverse,s.name)
b.$ccache=r
return r},
x1(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.jA(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
ne(a){return A.c2(A.k(a))},
oE(a){var s=A.n5(a)
return A.c2(s==null?A.at(a):s)},
wl(a){var s=a instanceof A.aJ?A.n5(a):null
if(s!=null)return s
if(t.aJ.b(a))return J.rP(a).a
if(Array.isArray(a))return A.Z(a)
return A.at(a)},
c2(a){var s=a.r
return s==null?a.r=A.qx(a):s},
qx(a){var s,r,q=a.as,p=q.replace(/\*/g,"")
if(p===q)return a.r=new A.jz(a)
s=A.jA(v.typeUniverse,p,!0)
r=s.r
return r==null?s.r=A.qx(s):r},
bu(a){return A.c2(A.jA(v.typeUniverse,a,!1))},
vY(a){var s,r,q,p,o,n,m=this
if(m===t.K)return A.c0(m,a,A.w6)
if(!A.c3(m))s=m===t._
else s=!0
if(s)return A.c0(m,a,A.wa)
s=m.w
if(s===7)return A.c0(m,a,A.vW)
if(s===1)return A.c0(m,a,A.qE)
r=s===6?m.x:m
q=r.w
if(q===8)return A.c0(m,a,A.w2)
if(r===t.p)p=A.jD
else if(r===t.dx||r===t.E)p=A.w5
else if(r===t.N)p=A.w8
else p=r===t.k4?A.oy:null
if(p!=null)return A.c0(m,a,p)
if(q===9){o=r.x
if(r.y.every(A.xc)){m.f="$i"+o
if(o==="n")return A.c0(m,a,A.w4)
return A.c0(m,a,A.w9)}}else if(q===11){n=A.wO(r.x,r.y)
return A.c0(m,a,n==null?A.qE:n)}return A.c0(m,a,A.vU)},
c0(a,b,c){a.b=c
return a.b(b)},
vX(a){var s,r=this,q=A.vT
if(!A.c3(r))s=r===t._
else s=!0
if(s)q=A.vG
else if(r===t.K)q=A.vF
else{s=A.hq(r)
if(s)q=A.vV}r.a=q
return r.a(a)},
jE(a){var s=a.w,r=!0
if(!A.c3(a))if(!(a===t._))if(!(a===t.eK))if(s!==7)if(!(s===6&&A.jE(a.x)))r=s===8&&A.jE(a.x)||a===t.P||a===t.u
return r},
vU(a){var s=this
if(a==null)return A.jE(s)
return A.r_(v.typeUniverse,A.x9(a,s),s)},
vW(a){if(a==null)return!0
return this.x.b(a)},
w9(a){var s,r=this
if(a==null)return A.jE(r)
s=r.f
if(a instanceof A.B)return!!a[s]
return!!J.dd(a)[s]},
w4(a){var s,r=this
if(a==null)return A.jE(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.B)return!!a[s]
return!!J.dd(a)[s]},
vT(a){var s=this
if(a==null){if(A.hq(s))return a}else if(s.b(a))return a
A.qA(a,s)},
vV(a){var s=this
if(a==null)return a
else if(s.b(a))return a
A.qA(a,s)},
qA(a,b){throw A.f(A.qb(A.q1(a,A.aH(b,null))))},
wB(a,b,c,d){if(A.r_(v.typeUniverse,a,b))return a
throw A.f(A.qb("The type argument '"+A.aH(a,null)+"' is not a subtype of the type variable bound '"+A.aH(b,null)+"' of type variable '"+c+"' in '"+d+"'."))},
q1(a,b){return A.eA(a)+": type '"+A.aH(A.wl(a),null)+"' is not a subtype of type '"+b+"'"},
qb(a){return new A.hb("TypeError: "+a)},
aQ(a,b){return new A.hb("TypeError: "+A.q1(a,b))},
w2(a){var s=this,r=s.w===6?s.x:s
return r.x.b(a)||A.oc(v.typeUniverse,r).b(a)},
w6(a){return a!=null},
vF(a){if(a!=null)return a
throw A.f(A.aQ(a,"Object"))},
wa(a){return!0},
vG(a){return a},
qE(a){return!1},
oy(a){return!0===a||!1===a},
vC(a){if(!0===a)return!0
if(!1===a)return!1
throw A.f(A.aQ(a,"bool"))},
yR(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.f(A.aQ(a,"bool"))},
yQ(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.f(A.aQ(a,"bool?"))},
vD(a){if(typeof a=="number")return a
throw A.f(A.aQ(a,"double"))},
yT(a){if(typeof a=="number")return a
if(a==null)return a
throw A.f(A.aQ(a,"double"))},
yS(a){if(typeof a=="number")return a
if(a==null)return a
throw A.f(A.aQ(a,"double?"))},
jD(a){return typeof a=="number"&&Math.floor(a)===a},
r(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.f(A.aQ(a,"int"))},
yV(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.f(A.aQ(a,"int"))},
yU(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.f(A.aQ(a,"int?"))},
w5(a){return typeof a=="number"},
qv(a){if(typeof a=="number")return a
throw A.f(A.aQ(a,"num"))},
yW(a){if(typeof a=="number")return a
if(a==null)return a
throw A.f(A.aQ(a,"num"))},
vE(a){if(typeof a=="number")return a
if(a==null)return a
throw A.f(A.aQ(a,"num?"))},
w8(a){return typeof a=="string"},
I(a){if(typeof a=="string")return a
throw A.f(A.aQ(a,"String"))},
yX(a){if(typeof a=="string")return a
if(a==null)return a
throw A.f(A.aQ(a,"String"))},
ej(a){if(typeof a=="string")return a
if(a==null)return a
throw A.f(A.aQ(a,"String?"))},
qI(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.aH(a[q],b)
return s},
wg(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.qI(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.aH(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
qB(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=", ",a3=null
if(a6!=null){s=a6.length
if(a5==null)a5=A.b([],t.s)
else a3=a5.length
r=a5.length
for(q=s;q>0;--q)B.c.C(a5,"T"+(r+q))
for(p=t.iD,o=t._,n="<",m="",q=0;q<s;++q,m=a2){l=a5.length
k=l-1-q
if(!(k>=0))return A.a(a5,k)
n=n+m+a5[k]
j=a6[q]
i=j.w
if(!(i===2||i===3||i===4||i===5||j===p))l=j===o
else l=!0
if(!l)n+=" extends "+A.aH(j,a5)}n+=">"}else n=""
p=a4.x
h=a4.y
g=h.a
f=g.length
e=h.b
d=e.length
c=h.c
b=c.length
a=A.aH(p,a5)
for(a0="",a1="",q=0;q<f;++q,a1=a2)a0+=a1+A.aH(g[q],a5)
if(d>0){a0+=a1+"["
for(a1="",q=0;q<d;++q,a1=a2)a0+=a1+A.aH(e[q],a5)
a0+="]"}if(b>0){a0+=a1+"{"
for(a1="",q=0;q<b;q+=3,a1=a2){a0+=a1
if(c[q+1])a0+="required "
a0+=A.aH(c[q+2],a5)+" "+c[q]}a0+="}"}if(a3!=null){a5.toString
a5.length=a3}return n+"("+a0+") => "+a},
aH(a,b){var s,r,q,p,o,n,m,l=a.w
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6)return A.aH(a.x,b)
if(l===7){s=a.x
r=A.aH(s,b)
q=s.w
return(q===12||q===13?"("+r+")":r)+"?"}if(l===8)return"FutureOr<"+A.aH(a.x,b)+">"
if(l===9){p=A.wo(a.x)
o=a.y
return o.length>0?p+("<"+A.qI(o,b)+">"):p}if(l===11)return A.wg(a,b)
if(l===12)return A.qB(a,b,null)
if(l===13)return A.qB(a.x,b,a.y)
if(l===14){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.a(b,n)
return b[n]}return"?"},
wo(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
vo(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
vn(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.jA(a,b,!1)
else if(typeof m=="number"){s=m
r=A.he(a,5,"#")
q=A.mM(s)
for(p=0;p<s;++p)q[p]=r
o=A.hd(a,b,q)
n[b]=o
return o}else return m},
vl(a,b){return A.qt(a.tR,b)},
vk(a,b){return A.qt(a.eT,b)},
jA(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.q7(A.q5(a,null,b,c))
r.set(b,s)
return s},
mB(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.q7(A.q5(a,b,c,!0))
q.set(c,r)
return r},
vm(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.op(a,b,c.w===10?c.y:[c])
p.set(s,q)
return q},
bY(a,b){b.a=A.vX
b.b=A.vY
return b},
he(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.bf(null,null)
s.w=b
s.as=c
r=A.bY(a,s)
a.eC.set(c,r)
return r},
qf(a,b,c){var s,r=b.as+"*",q=a.eC.get(r)
if(q!=null)return q
s=A.vi(a,b,r,c)
a.eC.set(r,s)
return s},
vi(a,b,c,d){var s,r,q
if(d){s=b.w
if(!A.c3(b))r=b===t.P||b===t.u||s===7||s===6
else r=!0
if(r)return b}q=new A.bf(null,null)
q.w=6
q.x=b
q.as=c
return A.bY(a,q)},
or(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.vh(a,b,r,c)
a.eC.set(r,s)
return s},
vh(a,b,c,d){var s,r,q,p
if(d){s=b.w
r=!0
if(!A.c3(b))if(!(b===t.P||b===t.u))if(s!==7)r=s===8&&A.hq(b.x)
if(r)return b
else if(s===1||b===t.eK)return t.P
else if(s===6){q=b.x
if(q.w===8&&A.hq(q.x))return q
else return A.pL(a,b)}}p=new A.bf(null,null)
p.w=7
p.x=b
p.as=c
return A.bY(a,p)},
qd(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.vf(a,b,r,c)
a.eC.set(r,s)
return s},
vf(a,b,c,d){var s,r
if(d){s=b.w
if(A.c3(b)||b===t.K||b===t._)return b
else if(s===1)return A.hd(a,"aV",[b])
else if(b===t.P||b===t.u)return t.gK}r=new A.bf(null,null)
r.w=8
r.x=b
r.as=c
return A.bY(a,r)},
vj(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.bf(null,null)
s.w=14
s.x=b
s.as=q
r=A.bY(a,s)
a.eC.set(q,r)
return r},
hc(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
ve(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
hd(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.hc(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.bf(null,null)
r.w=9
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.bY(a,r)
a.eC.set(p,q)
return q},
op(a,b,c){var s,r,q,p,o,n
if(b.w===10){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.hc(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.bf(null,null)
o.w=10
o.x=s
o.y=r
o.as=q
n=A.bY(a,o)
a.eC.set(q,n)
return n},
qe(a,b,c){var s,r,q="+"+(b+"("+A.hc(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.bf(null,null)
s.w=11
s.x=b
s.y=c
s.as=q
r=A.bY(a,s)
a.eC.set(q,r)
return r},
qc(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.hc(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.hc(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.ve(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.bf(null,null)
p.w=12
p.x=b
p.y=c
p.as=r
o=A.bY(a,p)
a.eC.set(r,o)
return o},
oq(a,b,c,d){var s,r=b.as+("<"+A.hc(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.vg(a,b,c,r,d)
a.eC.set(r,s)
return s},
vg(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.mM(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.c1(a,b,r,0)
m=A.em(a,c,r,0)
return A.oq(a,n,m,c!==m)}}l=new A.bf(null,null)
l.w=13
l.x=b
l.y=c
l.as=d
return A.bY(a,l)},
q5(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
q7(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.v8(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.q6(a,r,l,k,!1)
else if(q===46)r=A.q6(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.ck(a.u,a.e,k.pop()))
break
case 94:k.push(A.vj(a.u,k.pop()))
break
case 35:k.push(A.he(a.u,5,"#"))
break
case 64:k.push(A.he(a.u,2,"@"))
break
case 126:k.push(A.he(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.va(a,k)
break
case 38:A.v9(a,k)
break
case 42:p=a.u
k.push(A.qf(p,A.ck(p,a.e,k.pop()),a.n))
break
case 63:p=a.u
k.push(A.or(p,A.ck(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.qd(p,A.ck(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.v7(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.q8(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.vc(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-2)
break
case 43:n=l.indexOf("(",r)
k.push(l.substring(r,n))
k.push(-4)
k.push(a.p)
a.p=k.length
r=n+1
break
default:throw"Bad character "+q}}}m=k.pop()
return A.ck(a.u,a.e,m)},
v8(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
q6(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===10)o=o.x
n=A.vo(s,o.x)[p]
if(n==null)A.a8('No "'+p+'" in "'+A.tY(o)+'"')
d.push(A.mB(s,o,n))}else d.push(p)
return m},
va(a,b){var s,r=a.u,q=A.q4(a,b),p=b.pop()
if(typeof p=="string")b.push(A.hd(r,p,q))
else{s=A.ck(r,a.e,p)
switch(s.w){case 12:b.push(A.oq(r,s,q,a.n))
break
default:b.push(A.op(r,s,q))
break}}},
v7(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.q4(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.ck(p,a.e,o)
q=new A.jq()
q.a=s
q.b=n
q.c=m
b.push(A.qc(p,r,q))
return
case-4:b.push(A.qe(p,b.pop(),s))
return
default:throw A.f(A.hv("Unexpected state under `()`: "+A.t(o)))}},
v9(a,b){var s=b.pop()
if(0===s){b.push(A.he(a.u,1,"0&"))
return}if(1===s){b.push(A.he(a.u,4,"1&"))
return}throw A.f(A.hv("Unexpected extended operation "+A.t(s)))},
q4(a,b){var s=b.splice(a.p)
A.q8(a.u,a.e,s)
a.p=b.pop()
return s},
ck(a,b,c){if(typeof c=="string")return A.hd(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.vb(a,b,c)}else return c},
q8(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.ck(a,b,c[s])},
vc(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.ck(a,b,c[s])},
vb(a,b,c){var s,r,q=b.w
if(q===10){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==9)throw A.f(A.hv("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.f(A.hv("Bad index "+c+" for "+b.t(0)))},
r_(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.aa(a,b,null,c,null,!1)?1:0
r.set(c,s)}if(0===s)return!1
if(1===s)return!0
return!0},
aa(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(!A.c3(d))s=d===t._
else s=!0
if(s)return!0
r=b.w
if(r===4)return!0
if(A.c3(b))return!1
s=b.w
if(s===1)return!0
q=r===14
if(q)if(A.aa(a,c[b.x],c,d,e,!1))return!0
p=d.w
s=b===t.P||b===t.u
if(s){if(p===8)return A.aa(a,b,c,d.x,e,!1)
return d===t.P||d===t.u||p===7||p===6}if(d===t.K){if(r===8)return A.aa(a,b.x,c,d,e,!1)
if(r===6)return A.aa(a,b.x,c,d,e,!1)
return r!==7}if(r===6)return A.aa(a,b.x,c,d,e,!1)
if(p===6){s=A.pL(a,d)
return A.aa(a,b,c,s,e,!1)}if(r===8){if(!A.aa(a,b.x,c,d,e,!1))return!1
return A.aa(a,A.oc(a,b),c,d,e,!1)}if(r===7){s=A.aa(a,t.P,c,d,e,!1)
return s&&A.aa(a,b.x,c,d,e,!1)}if(p===8){if(A.aa(a,b,c,d.x,e,!1))return!0
return A.aa(a,b,c,A.oc(a,d),e,!1)}if(p===7){s=A.aa(a,b,c,t.P,e,!1)
return s||A.aa(a,b,c,d.x,e,!1)}if(q)return!1
s=r!==12
if((!s||r===13)&&d===t.Y)return!0
o=r===11
if(o&&d===t.lZ)return!0
if(p===13){if(b===t.dY)return!0
if(r!==13)return!1
n=b.y
m=d.y
l=n.length
if(l!==m.length)return!1
c=c==null?n:n.concat(c)
e=e==null?m:m.concat(e)
for(k=0;k<l;++k){j=n[k]
i=m[k]
if(!A.aa(a,j,c,i,e,!1)||!A.aa(a,i,e,j,c,!1))return!1}return A.qD(a,b.x,c,d.x,e,!1)}if(p===12){if(b===t.dY)return!0
if(s)return!1
return A.qD(a,b,c,d,e,!1)}if(r===9){if(p!==9)return!1
return A.w3(a,b,c,d,e,!1)}if(o&&p===11)return A.w7(a,b,c,d,e,!1)
return!1},
qD(a3,a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.aa(a3,a4.x,a5,a6.x,a7,!1))return!1
s=a4.y
r=a6.y
q=s.a
p=r.a
o=q.length
n=p.length
if(o>n)return!1
m=n-o
l=s.b
k=r.b
j=l.length
i=k.length
if(o+j<n+i)return!1
for(h=0;h<o;++h){g=q[h]
if(!A.aa(a3,p[h],a7,g,a5,!1))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.aa(a3,p[o+h],a7,g,a5,!1))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.aa(a3,k[h],a7,g,a5,!1))return!1}f=s.c
e=r.c
d=f.length
c=e.length
for(b=0,a=0;a<c;a+=3){a0=e[a]
for(;!0;){if(b>=d)return!1
a1=f[b]
b+=3
if(a0<a1)return!1
a2=f[b-2]
if(a1<a0){if(a2)return!1
continue}g=e[a+1]
if(a2&&!g)return!1
g=f[b-1]
if(!A.aa(a3,e[a+2],a7,g,a5,!1))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
w3(a,b,c,d,e,f){var s,r,q,p,o,n=b.x,m=d.x
for(;n!==m;){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.mB(a,b,r[o])
return A.qu(a,p,null,c,d.y,e,!1)}return A.qu(a,b.y,null,c,d.y,e,!1)},
qu(a,b,c,d,e,f,g){var s,r=b.length
for(s=0;s<r;++s)if(!A.aa(a,b[s],d,e[s],f,!1))return!1
return!0},
w7(a,b,c,d,e,f){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.aa(a,r[s],c,q[s],e,!1))return!1
return!0},
hq(a){var s=a.w,r=!0
if(!(a===t.P||a===t.u))if(!A.c3(a))if(s!==7)if(!(s===6&&A.hq(a.x)))r=s===8&&A.hq(a.x)
return r},
xc(a){var s
if(!A.c3(a))s=a===t._
else s=!0
return s},
c3(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.iD},
qt(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
mM(a){return a>0?new Array(a):v.typeUniverse.sEA},
bf:function bf(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
jq:function jq(){this.c=this.b=this.a=null},
jz:function jz(a){this.a=a},
jn:function jn(){},
hb:function hb(a){this.a=a},
uT(){var s,r,q={}
if(self.scheduleImmediate!=null)return A.wv()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(A.ep(new A.m1(q),1)).observe(s,{childList:true})
return new A.m0(q,s,r)}else if(self.setImmediate!=null)return A.ww()
return A.wx()},
uU(a){self.scheduleImmediate(A.ep(new A.m2(t.M.a(a)),0))},
uV(a){self.setImmediate(A.ep(new A.m3(t.M.a(a)),0))},
uW(a){t.M.a(a)
A.vd(0,a)},
vd(a,b){var s=new A.mx()
s.ju(a,b)
return s},
co(a){return new A.jg(new A.L($.K,a.i("L<0>")),a.i("jg<0>"))},
cn(a,b){a.$2(0,null)
b.b=!0
return b.a},
bZ(a,b){A.vH(a,b)},
cm(a,b){b.d7(a)},
cl(a,b){b.d8(A.aR(a),A.bk(a))},
vH(a,b){var s,r,q=new A.mO(b),p=new A.mP(b)
if(a instanceof A.L)a.hG(q,p,t.z)
else{s=t.z
if(a instanceof A.L)a.fs(q,p,s)
else{r=new A.L($.K,t.c)
r.a=8
r.c=a
r.hG(q,p,s)}}},
cp(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.K.fn(new A.mZ(s),t.H,t.p,t.z)},
nD(a){var s
if(t.Q.b(a)){s=a.gcQ()
if(s!=null)return s}return B.a9},
p9(a,b){var s
b.a(a)
s=new A.L($.K,b.i("L<0>"))
s.en(a)
return s},
qC(a,b){if($.K===B.q)return null
return null},
w_(a,b){if($.K!==B.q)A.qC(a,b)
if(b==null)if(t.Q.b(a)){b=a.gcQ()
if(b==null){A.pH(a,B.a9)
b=B.a9}}else b=B.a9
else if(t.Q.b(a))A.pH(a,b)
return new A.bE(a,b)},
on(a,b){var s,r,q
for(s=t.c;r=a.a,(r&4)!==0;)a=s.a(a.c)
if(a===b){b.cT(new A.bb(!0,a,null,"Cannot complete a future with itself"),A.oe())
return}s=r|b.a&1
a.a=s
if((s&24)!==0){q=b.dR()
b.dF(a)
A.eg(b,q)}else{q=t.F.a(b.c)
b.hB(a)
a.eQ(q)}},
v_(a,b){var s,r,q,p={},o=p.a=a
for(s=t.c;r=o.a,(r&4)!==0;o=a){a=s.a(o.c)
p.a=a}if(o===b){b.cT(new A.bb(!0,o,null,"Cannot complete a future with itself"),A.oe())
return}if((r&24)===0){q=t.F.a(b.c)
b.hB(o)
p.a.eQ(q)
return}if((r&16)===0&&b.c==null){b.dF(o)
return}b.a^=2
A.el(null,null,b.b,t.M.a(new A.md(p,b)))},
eg(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c={},b=c.a=a
for(s=t.n,r=t.F,q=t.pg;!0;){p={}
o=b.a
n=(o&16)===0
m=!n
if(a0==null){if(m&&(o&1)===0){l=s.a(b.c)
A.jF(l.a,l.b)}return}p.a=a0
k=a0.a
for(b=a0;k!=null;b=k,k=j){b.a=null
A.eg(c.a,b)
p.a=k
j=k.a}o=c.a
i=o.c
p.b=m
p.c=i
if(n){h=b.c
h=(h&1)!==0||(h&15)===8}else h=!0
if(h){g=b.b.b
if(m){o=o.b===g
o=!(o||o)}else o=!1
if(o){s.a(i)
A.jF(i.a,i.b)
return}f=$.K
if(f!==g)$.K=g
else f=null
b=b.c
if((b&15)===8)new A.mk(p,c,m).$0()
else if(n){if((b&1)!==0)new A.mj(p,i).$0()}else if((b&2)!==0)new A.mi(c,p).$0()
if(f!=null)$.K=f
b=p.c
if(b instanceof A.L){o=p.a.$ti
o=o.i("aV<2>").b(b)||!o.y[1].b(b)}else o=!1
if(o){q.a(b)
e=p.a.b
if((b.a&24)!==0){d=r.a(e.c)
e.c=null
a0=e.dS(d)
e.a=b.a&30|e.a&1
e.c=b.c
c.a=b
continue}else A.on(b,e)
return}}e=p.a.b
d=r.a(e.c)
e.c=null
a0=e.dS(d)
b=p.b
o=p.c
if(!b){e.$ti.c.a(o)
e.a=8
e.c=o}else{s.a(o)
e.a=e.a&1|16
e.c=o}c.a=e
b=e}},
wh(a,b){var s
if(t.ng.b(a))return b.fn(a,t.z,t.K,t.l)
s=t.y
if(s.b(a))return s.a(a)
throw A.f(A.jS(a,"onError",u.c))},
wc(){var s,r
for(s=$.ek;s!=null;s=$.ek){$.ho=null
r=s.b
$.ek=r
if(r==null)$.hn=null
s.a.$0()}},
wk(){$.oz=!0
try{A.wc()}finally{$.ho=null
$.oz=!1
if($.ek!=null)$.oM().$1(A.qQ())}},
qK(a){var s=new A.jh(a),r=$.hn
if(r==null){$.ek=$.hn=s
if(!$.oz)$.oM().$1(A.qQ())}else $.hn=r.b=s},
wj(a){var s,r,q,p=$.ek
if(p==null){A.qK(a)
$.ho=$.hn
return}s=new A.jh(a)
r=$.ho
if(r==null){s.b=p
$.ek=$.ho=s}else{q=r.b
s.b=q
$.ho=r.b=s
if(q==null)$.hn=s}},
oI(a){var s=null,r=$.K
if(B.q===r){A.el(s,s,B.q,a)
return}A.el(s,s,r,t.M.a(r.i_(a)))},
pO(a,b){var s,r=null,q=b.i("ea<0>"),p=new A.ea(r,r,r,r,q)
q.c.a(a)
p.h7().C(0,new A.fT(a,q.i("fT<1>")))
s=p.b|=4
if((s&1)!==0)p.gm7().jP(B.aW)
else if((s&3)===0)p.h7().C(0,B.aW)
return new A.eb(p,q.i("eb<1>"))},
yc(a,b){A.jH(a,"stream",t.K)
return new A.jv(b.i("jv<0>"))},
oA(a){return},
q0(a,b,c){var s=b==null?A.wy():b
return t.bm.aa(c).i("1(2)").a(s)},
uX(a,b){if(b==null)b=A.wz()
if(t.b9.b(b))return a.fn(b,t.z,t.K,t.l)
if(t.i6.b(b))return t.y.a(b)
throw A.f(A.W("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace.",null))},
wd(a){},
we(a,b){A.jF(a,b)},
vK(a,b,c){var s=a.e2(),r=$.jM()
if(s!==r)s.ef(new A.mQ(b,c))
else b.es(c)},
jF(a,b){A.wj(new A.mX(a,b))},
qG(a,b,c,d,e){var s,r=$.K
if(r===c)return d.$0()
$.K=c
s=r
try{r=d.$0()
return r}finally{$.K=s}},
qH(a,b,c,d,e,f,g){var s,r=$.K
if(r===c)return d.$1(e)
$.K=c
s=r
try{r=d.$1(e)
return r}finally{$.K=s}},
wi(a,b,c,d,e,f,g,h,i){var s,r=$.K
if(r===c)return d.$2(e,f)
$.K=c
s=r
try{r=d.$2(e,f)
return r}finally{$.K=s}},
el(a,b,c,d){t.M.a(d)
if(B.q!==c)d=c.i_(d)
A.qK(d)},
m1:function m1(a){this.a=a},
m0:function m0(a,b,c){this.a=a
this.b=b
this.c=c},
m2:function m2(a){this.a=a},
m3:function m3(a){this.a=a},
mx:function mx(){},
my:function my(a,b){this.a=a
this.b=b},
jg:function jg(a,b){this.a=a
this.b=!1
this.$ti=b},
mO:function mO(a){this.a=a},
mP:function mP(a){this.a=a},
mZ:function mZ(a){this.a=a},
bE:function bE(a,b){this.a=a
this.b=b},
fS:function fS(){},
bW:function bW(a,b){this.a=a
this.$ti=b},
bX:function bX(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
L:function L(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
ma:function ma(a,b){this.a=a
this.b=b},
mh:function mh(a,b){this.a=a
this.b=b},
me:function me(a){this.a=a},
mf:function mf(a){this.a=a},
mg:function mg(a,b,c){this.a=a
this.b=b
this.c=c},
md:function md(a,b){this.a=a
this.b=b},
mc:function mc(a,b){this.a=a
this.b=b},
mb:function mb(a,b,c){this.a=a
this.b=b
this.c=c},
mk:function mk(a,b,c){this.a=a
this.b=b
this.c=c},
ml:function ml(a){this.a=a},
mj:function mj(a,b){this.a=a
this.b=b},
mi:function mi(a,b){this.a=a
this.b=b},
jh:function jh(a){this.a=a
this.b=null},
aw:function aw(){},
lt:function lt(a,b){this.a=a
this.b=b},
lu:function lu(a,b){this.a=a
this.b=b},
lr:function lr(a){this.a=a},
ls:function ls(a,b,c){this.a=a
this.b=b
this.c=c},
d0:function d0(){},
h8:function h8(){},
mw:function mw(a){this.a=a},
mv:function mv(a){this.a=a},
ji:function ji(){},
ea:function ea(a,b,c,d,e){var _=this
_.a=null
_.b=0
_.d=a
_.e=b
_.f=c
_.r=d
_.$ti=e},
eb:function eb(a,b){this.a=a
this.$ti=b},
ec:function ec(a,b,c,d,e,f){var _=this
_.w=a
_.a=b
_.c=c
_.d=d
_.e=e
_.r=_.f=null
_.$ti=f},
fQ:function fQ(){},
m4:function m4(a){this.a=a},
ha:function ha(){},
cj:function cj(){},
fT:function fT(a,b){this.b=a
this.a=null
this.$ti=b},
jm:function jm(){},
bi:function bi(a){var _=this
_.a=0
_.c=_.b=null
_.$ti=a},
ms:function ms(a,b){this.a=a
this.b=b},
ed:function ed(a,b){var _=this
_.a=1
_.b=a
_.c=null
_.$ti=b},
jv:function jv(a){this.$ti=a},
fV:function fV(a){this.$ti=a},
mQ:function mQ(a,b){this.a=a
this.b=b},
hk:function hk(){},
mX:function mX(a,b){this.a=a
this.b=b},
ju:function ju(){},
mt:function mt(a,b){this.a=a
this.b=b},
mu:function mu(a,b,c){this.a=a
this.b=b
this.c=c},
pw(a,b,c,d){if(b==null){if(a==null)return new A.aW(c.i("@<0>").aa(d).i("aW<1,2>"))
b=A.wE()}else{if(A.wM()===b&&A.wL()===a)return new A.f0(c.i("@<0>").aa(d).i("f0<1,2>"))
if(a==null)a=A.wD()}return A.v6(a,b,null,c,d)},
dT(a,b,c){return b.i("@<0>").aa(c).i("io<1,2>").a(A.qV(a,new A.aW(b.i("@<0>").aa(c).i("aW<1,2>"))))},
H(a,b){return new A.aW(a.i("@<0>").aa(b).i("aW<1,2>"))},
v6(a,b,c,d,e){return new A.fZ(a,b,new A.mr(d),d.i("@<0>").aa(e).i("fZ<1,2>"))},
tA(a){return new A.h_(a.i("h_<0>"))},
oo(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
q3(a,b,c){var s=new A.da(a,b,c.i("da<0>"))
s.c=a.e
return s},
vO(a,b){return J.a_(a,b)},
vP(a){return J.bl(a)},
f2(a,b,c){var s=A.pw(null,null,b,c)
a.aK(0,new A.l2(s,b,c))
return s},
tB(a,b){var s=t.bP
return J.oU(s.a(a),s.a(b))},
l5(a){var s,r={}
if(A.oG(a))return"{...}"
s=new A.am("")
try{B.c.C($.ba,a)
s.a+="{"
r.a=!0
a.aK(0,new A.l6(r,s))
s.a+="}"}finally{if(0>=$.ba.length)return A.a($.ba,-1)
$.ba.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
fZ:function fZ(a,b,c,d){var _=this
_.w=a
_.x=b
_.y=c
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=d},
mr:function mr(a){this.a=a},
h_:function h_(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
jt:function jt(a){this.a=a
this.c=this.b=null},
da:function da(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
l2:function l2(a,b,c){this.a=a
this.b=b
this.c=c},
y:function y(){},
P:function P(){},
l4:function l4(a){this.a=a},
l6:function l6(a,b){this.a=a
this.b=b},
jB:function jB(){},
f3:function f3(){},
d5:function d5(a,b){this.a=a
this.$ti=b},
e1:function e1(){},
h6:function h6(){},
hf:function hf(){},
wf(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.aR(r)
q=A.ag(String(s),null,null)
throw A.f(q)}q=A.mR(p)
return q},
mR(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.jr(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.mR(a[s])
return a},
vA(a,b,c){var s,r,q,p,o=c-b
if(o<=4096)s=$.rv()
else s=new Uint8Array(o)
for(r=J.R(a),q=0;q<o;++q){p=r.k(a,b+q)
if((p&255)!==p)p=255
s[q]=p}return s},
vz(a,b,c,d){var s=a?$.ru():$.rt()
if(s==null)return null
if(0===c&&d===b.length)return A.qs(s,b)
return A.qs(s,b.subarray(c,d))},
qs(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){}return null},
oY(a,b,c,d,e,f){if(B.a.ae(f,4)!==0)throw A.f(A.ag("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw A.f(A.ag("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw A.f(A.ag("Invalid base64 padding, more than two '=' characters",a,b))},
p4(a){return $.rd().k(0,a.toLowerCase())},
pv(a,b,c){return new A.f1(a,b)},
vQ(a){return a.nJ()},
v4(a,b){return new A.mo(a,[],A.wH())},
v5(a,b,c){var s,r=new A.am(""),q=A.v4(r,b)
q.eg(a)
s=r.a
return s.charCodeAt(0)==0?s:s},
vB(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
jr:function jr(a,b){this.a=a
this.b=b
this.c=null},
js:function js(a){this.a=a},
mK:function mK(){},
mJ:function mJ(){},
hu:function hu(){},
mA:function mA(){},
jV:function jV(a){this.a=a},
mz:function mz(){},
jU:function jU(a,b){this.a=a
this.b=b},
hw:function hw(){},
jW:function jW(){},
k3:function k3(){},
jj:function jj(a,b){this.a=a
this.b=b
this.c=0},
bH:function bH(){},
hG:function hG(){},
c4:function c4(){},
f1:function f1(a,b){this.a=a
this.b=b},
il:function il(a,b){this.a=a
this.b=b},
ik:function ik(){},
kZ:function kZ(a){this.b=a},
kY:function kY(a){this.a=a},
mp:function mp(){},
mq:function mq(a,b){this.a=a
this.b=b},
mo:function mo(a,b,c){this.c=a
this.a=b
this.b=c},
im:function im(){},
l0:function l0(a){this.a=a},
l_:function l_(a,b){this.a=a
this.b=b},
j7:function j7(){},
lJ:function lJ(){},
mL:function mL(a){this.b=0
this.c=a},
j8:function j8(a){this.a=a},
jC:function jC(a){this.a=a
this.b=16
this.c=0},
x5(a){return A.jK(a)},
hp(a,b){var s=A.pF(a,b)
if(s!=null)return s
throw A.f(A.ag(a,null,null))},
t8(a,b){a=A.f(a)
if(a==null)a=t.K.a(a)
a.stack=b.t(0)
throw a
throw A.f("unreachable")},
a1(a,b,c,d){var s,r=c?J.id(a,d):J.nP(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
nT(a,b,c){var s,r=A.b([],c.i("v<0>"))
for(s=J.ap(a);s.B();)B.c.C(r,c.a(s.gK()))
if(b)return r
r.$flags=1
return r},
x(a,b,c){var s
if(b)return A.px(a,c)
s=A.px(a,c)
s.$flags=1
return s},
px(a,b){var s,r
if(Array.isArray(a))return A.b(a.slice(0),b.i("v<0>"))
s=A.b([],b.i("v<0>"))
for(r=J.ap(a);r.B();)B.c.C(s,r.gK())
return s},
nU(a,b,c){var s,r=J.id(a,c)
for(s=0;s<a;++s)B.c.h(r,s,b.$1(s))
return r},
tC(a,b){var s=A.nT(a,!1,b)
s.$flags=3
return s},
bC(a,b,c){var s,r,q,p,o
A.aZ(b,"start")
s=c==null
r=!s
if(r){q=c-b
if(q<0)throw A.f(A.a3(c,b,null,"end",null))
if(q===0)return""}if(Array.isArray(a)){p=a
o=p.length
if(s)c=o
return A.pG(b>0||c<o?p.slice(b,c):p)}if(t.hD.b(a))return A.u2(a,b,c)
if(r)a=J.rU(a,c)
if(b>0)a=J.jR(a,b)
return A.pG(A.x(a,!0,t.p))},
u2(a,b,c){var s=a.length
if(b>=s)return""
return A.tU(a,b,c==null||c>s?s:c)},
al(a){return new A.dP(a,A.nQ(a,!1,!0,!1,!1,!1))},
x4(a,b){return a==null?b==null:a===b},
of(a,b,c){var s=J.ap(b)
if(!s.B())return a
if(c.length===0){do a+=A.t(s.gK())
while(s.B())}else{a+=A.t(s.gK())
for(;s.B();)a=a+c+A.t(s.gK())}return a},
j5(){var s,r,q=A.tQ()
if(q==null)throw A.f(A.a2("'Uri.base' is not supported"))
s=$.pU
if(s!=null&&q===$.pT)return s
r=A.lF(q)
$.pU=r
$.pT=q
return r},
ov(a,b,c,d){var s,r,q,p,o,n,m="0123456789ABCDEF"
if(c===B.u){s=$.rr()
s=s.b.test(b)}else s=!1
if(s)return b
r=c.e5(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128){n=o>>>4
if(!(n<8))return A.a(a,n)
n=(a[n]&1<<(o&15))!==0}else n=!1
if(n)p+=A.T(o)
else p=d&&o===32?p+"+":p+"%"+m[o>>>4&15]+m[o&15]}return p.charCodeAt(0)==0?p:p},
vu(a){var s,r,q
if(!$.rs())return A.vv(a)
s=new URLSearchParams()
a.aK(0,new A.mH(s))
r=s.toString()
q=r.length
if(q>0&&r[q-1]==="=")r=B.d.I(r,0,q-1)
return r.replace(/=&|\*|%7E/g,b=>b==="=&"?"&":b==="*"?"%2A":"~")},
oe(){return A.bk(new Error())},
eA(a){if(typeof a=="number"||A.oy(a)||a==null)return J.de(a)
if(typeof a=="string")return JSON.stringify(a)
return A.tS(a)},
t9(a,b){A.jH(a,"error",t.K)
A.jH(b,"stackTrace",t.l)
A.t8(a,b)},
hv(a){return new A.eq(a)},
W(a,b){return new A.bb(!1,null,b,a)},
jS(a,b,c){return new A.bb(!0,a,b,c)},
jT(a,b,c){return a},
aE(a){var s=null
return new A.dZ(s,s,!1,s,s,a)},
lm(a,b){return new A.dZ(null,null,!0,a,b,"Value not in range")},
a3(a,b,c,d,e){return new A.dZ(b,c,!0,a,d,"Invalid value")},
pK(a,b,c,d){if(a<b||a>c)throw A.f(A.a3(a,b,c,d,null))
return a},
b7(a,b,c){if(0>a||a>c)throw A.f(A.a3(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.f(A.a3(b,a,c,"end",null))
return b}return c},
aZ(a,b){if(a<0)throw A.f(A.a3(a,0,null,b,null))
return a},
kM(a,b,c,d){return new A.hY(b,!0,a,d,"Index out of range")},
a2(a){return new A.fF(a)},
pR(a){return new A.j3(a)},
d_(a){return new A.e4(a)},
aK(a){return new A.hF(a)},
ag(a,b,c){return new A.c5(a,b,c)},
tv(a,b,c){var s,r
if(A.oG(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.b([],t.s)
B.c.C($.ba,a)
try{A.wb(a,s)}finally{if(0>=$.ba.length)return A.a($.ba,-1)
$.ba.pop()}r=A.of(b,t.U.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
nO(a,b,c){var s,r
if(A.oG(a))return b+"..."+c
s=new A.am(b)
B.c.C($.ba,a)
try{r=s
r.a=A.of(r.a,a,", ")}finally{if(0>=$.ba.length)return A.a($.ba,-1)
$.ba.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
wb(a,b){var s,r,q,p,o,n,m,l=a.gJ(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.B())return
s=A.t(l.gK())
B.c.C(b,s)
k+=s.length+2;++j}if(!l.B()){if(j<=5)return
if(0>=b.length)return A.a(b,-1)
r=b.pop()
if(0>=b.length)return A.a(b,-1)
q=b.pop()}else{p=l.gK();++j
if(!l.B()){if(j<=4){B.c.C(b,A.t(p))
return}r=A.t(p)
if(0>=b.length)return A.a(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gK();++j
for(;l.B();p=o,o=n){n=l.gK();++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return A.a(b,-1)
k-=b.pop().length+2;--j}B.c.C(b,"...")
return}}q=A.t(p)
r=A.t(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.a(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)B.c.C(b,m)
B.c.C(b,q)
B.c.C(b,r)},
lb(a,b,c){var s
if(B.a8===c){s=J.bl(a)
b=J.bl(b)
return A.og(A.fD(A.fD($.nA(),s),b))}s=J.bl(a)
b=J.bl(b)
c=J.bl(c)
c=A.og(A.fD(A.fD(A.fD($.nA(),s),b),c))
return c},
o(a){var s,r,q=$.nA()
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.aI)(a),++r)q=A.fD(q,J.bl(a[r]))
return A.og(q)},
lD(a,b,c){return A.vt("http",a,b,t.dZ.a(c))},
lF(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){if(4>=a4)return A.a(a5,4)
s=((a5.charCodeAt(4)^58)*3|a5.charCodeAt(0)^100|a5.charCodeAt(1)^97|a5.charCodeAt(2)^116|a5.charCodeAt(3)^97)>>>0
if(s===0)return A.pS(a4<a4?B.d.I(a5,0,a4):a5,5,a3).giJ()
else if(s===32)return A.pS(B.d.I(a5,5,a4),0,a3).giJ()}r=A.a1(8,0,!1,t.p)
B.c.h(r,0,0)
B.c.h(r,1,-1)
B.c.h(r,2,-1)
B.c.h(r,7,-1)
B.c.h(r,3,0)
B.c.h(r,4,0)
B.c.h(r,5,a4)
B.c.h(r,6,a4)
if(A.qJ(a5,0,a4,0,r)>=14)B.c.h(r,7,a4)
q=r[1]
if(q>=0)if(A.qJ(a5,0,q,20,r)===20)r[7]=q
p=r[2]+1
o=r[3]
n=r[4]
m=r[5]
l=r[6]
if(l<m)m=l
if(n<p)n=m
else if(n<=q)n=q+1
if(o<p)o=n
k=r[7]<0
j=a3
if(k){k=!1
if(!(p>q+3)){i=o>0
if(!(i&&o+1===n)){if(!B.d.ao(a5,"\\",n))if(p>0)h=B.d.ao(a5,"\\",p-1)||B.d.ao(a5,"\\",p-2)
else h=!1
else h=!0
if(!h){if(!(m<a4&&m===n+2&&B.d.ao(a5,"..",n)))h=m>n+2&&B.d.ao(a5,"/..",m-3)
else h=!0
if(!h)if(q===4){if(B.d.ao(a5,"file",0)){if(p<=0){if(!B.d.ao(a5,"/",n)){g="file:///"
s=3}else{g="file://"
s=2}a5=g+B.d.I(a5,n,a4)
m+=s
l+=s
a4=a5.length
p=7
o=7
n=7}else if(n===m){++l
f=m+1
a5=B.d.ct(a5,n,m,"/");++a4
m=f}j="file"}else if(B.d.ao(a5,"http",0)){if(i&&o+3===n&&B.d.ao(a5,"80",o+1)){l-=3
e=n-3
m-=3
a5=B.d.ct(a5,o,n,"")
a4-=3
n=e}j="http"}}else if(q===5&&B.d.ao(a5,"https",0)){if(i&&o+4===n&&B.d.ao(a5,"443",o+1)){l-=4
e=n-4
m-=4
a5=B.d.ct(a5,o,n,"")
a4-=3
n=e}j="https"}k=!h}}}}if(k)return new A.bj(a4<a5.length?B.d.I(a5,0,a4):a5,q,p,o,n,m,l,j)
if(j==null)if(q>0)j=A.mI(a5,0,q)
else{if(q===0)A.ei(a5,0,"Invalid empty scheme")
j=""}d=a3
if(p>0){c=q+3
b=c<p?A.qo(a5,c,p-1):""
a=A.ql(a5,p,o,!1)
i=o+1
if(i<n){a0=A.pF(B.d.I(a5,i,n),a3)
d=A.mE(a0==null?A.a8(A.ag("Invalid port",a5,i)):a0,j)}}else{a=a3
b=""}a1=A.qm(a5,n,m,a3,j,a!=null)
a2=m<l?A.qn(a5,m+1,l,a3):a3
return A.hh(j,b,a,d,a1,a2,l<a4?A.qk(a5,l+1,a4):a3)},
u7(a){A.I(a)
return A.hj(a,0,a.length,B.u,!1)},
pV(a){var s=t.N
return B.c.mV(A.b(a.split("&"),t.s),A.H(s,s),new A.lI(B.u),t.f)},
u6(a,b,c){var s,r,q,p,o,n,m,l="IPv4 address should contain exactly 4 parts",k="each part must be in the range 0..255",j=new A.lE(a),i=new Uint8Array(4)
for(s=a.length,r=b,q=r,p=0;r<c;++r){if(!(r>=0&&r<s))return A.a(a,r)
o=a.charCodeAt(r)
if(o!==46){if((o^48)>9)j.$2("invalid character",r)}else{if(p===3)j.$2(l,r)
n=A.hp(B.d.I(a,q,r),null)
if(n>255)j.$2(k,q)
m=p+1
if(!(p<4))return A.a(i,p)
i[p]=n
q=r+1
p=m}}if(p!==3)j.$2(l,c)
n=A.hp(B.d.I(a,q,c),null)
if(n>255)j.$2(k,q)
if(!(p<4))return A.a(i,p)
i[p]=n
return i},
oj(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=new A.lG(a),c=new A.lH(d,a),b=a.length
if(b<2)d.$2("address is too short",e)
s=A.b([],t.t)
for(r=a0,q=r,p=!1,o=!1;r<a1;++r){if(!(r>=0&&r<b))return A.a(a,r)
n=a.charCodeAt(r)
if(n===58){if(r===a0){++r
if(!(r<b))return A.a(a,r)
if(a.charCodeAt(r)!==58)d.$2("invalid start colon.",r)
q=r}if(r===q){if(p)d.$2("only one wildcard `::` is allowed",r)
B.c.C(s,-1)
p=!0}else B.c.C(s,c.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)d.$2("too few parts",e)
m=q===a1
b=B.c.gbs(s)
if(m&&b!==-1)d.$2("expected a part after last `:`",a1)
if(!m)if(!o)B.c.C(s,c.$2(q,a1))
else{l=A.u6(a,q,a1)
B.c.C(s,(l[0]<<8|l[1])>>>0)
B.c.C(s,(l[2]<<8|l[3])>>>0)}if(p){if(s.length>7)d.$2("an address with a wildcard must have less than 7 parts",e)}else if(s.length!==8)d.$2("an address without a wildcard must contain exactly 8 parts",e)
k=new Uint8Array(16)
for(b=s.length,j=9-b,r=0,i=0;r<b;++r){h=s[r]
if(h===-1)for(g=0;g<j;++g){if(!(i>=0&&i<16))return A.a(k,i)
k[i]=0
f=i+1
if(!(f<16))return A.a(k,f)
k[f]=0
i+=2}else{f=B.a.l(h,8)
if(!(i>=0&&i<16))return A.a(k,i)
k[i]=f
f=i+1
if(!(f<16))return A.a(k,f)
k[f]=h&255
i+=2}}return k},
hh(a,b,c,d,e,f,g){return new A.hg(a,b,c,d,e,f,g)},
qg(a,b,c,d,e,f,g){var s,r,q,p,o,n
f=f==null?"":A.mI(f,0,f.length)
g=A.qo(g,0,g==null?0:g.length)
a=A.ql(a,0,a==null?0:a.length,!1)
s=A.qn(null,0,0,e)
r=A.qk(null,0,0)
d=A.mE(d,f)
q=f==="file"
if(a==null)p=g.length!==0||d!=null||q
else p=!1
if(p)a=""
p=a==null
o=!p
b=A.qm(b,0,b==null?0:b.length,c,f,o)
n=f.length===0
if(n&&p&&!B.d.ah(b,"/"))b=A.ou(b,!n||o)
else b=A.db(b)
return A.hh(f,g,p&&B.d.ah(b,"//")?"":a,d,b,s,r)},
qh(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
ei(a,b,c){throw A.f(A.ag(c,a,b))},
vt(a,b,c,d){var s,r,q,p,o,n,m,l,k,j=null,i=b.length,h="",g=j
if(i!==0){r=0
while(!0){if(!(r<i)){s=0
break}if(b.charCodeAt(r)===64){h=B.d.I(b,0,r)
s=r+1
break}++r}if(s<i&&b.charCodeAt(s)===91){for(q=s,p=-1;q<i;++q){o=b.charCodeAt(q)
if(o===37&&p<0){n=B.d.ao(b,"25",q+1)?q+2:q
p=q
q=n}else if(o===93)break}if(q===i)throw A.f(A.ag("Invalid IPv6 host entry.",b,s))
m=p<0?q:p
A.oj(b,s+1,m);++q
if(q!==i){if(!(q<i))return A.a(b,q)
m=b.charCodeAt(q)!==58}else m=!1
if(m)throw A.f(A.ag("Invalid end of authority",b,q))}else q=s
for(;q<i;++q)if(b.charCodeAt(q)===58){l=B.d.aI(b,q+1)
g=l.length!==0?A.hp(l,j):j
break}k=B.d.I(b,s,q)}else k=j
return A.qg(k,j,A.b(c.split("/"),t.s),g,d,a,h)},
vq(a,b){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(B.d.av(q,"/")){s=A.a2("Illegal path character "+q)
throw A.f(s)}}},
mE(a,b){if(a!=null&&a===A.qh(b))return null
return a},
ql(a,b,c,d){var s,r,q,p,o,n
if(a==null)return null
if(b===c)return""
s=a.length
if(!(b>=0&&b<s))return A.a(a,b)
if(a.charCodeAt(b)===91){r=c-1
if(!(r>=0&&r<s))return A.a(a,r)
if(a.charCodeAt(r)!==93)A.ei(a,b,"Missing end `]` to match `[` in host")
s=b+1
q=A.vr(a,s,r)
if(q<r){p=q+1
o=A.qr(a,B.d.ao(a,"25",p)?q+3:p,r,"%25")}else o=""
A.oj(a,s,q)
return B.d.I(a,b,q).toLowerCase()+o+"]"}for(n=b;n<c;++n){if(!(n<s))return A.a(a,n)
if(a.charCodeAt(n)===58){q=B.d.bX(a,"%",b)
q=q>=b&&q<c?q:c
if(q<c){p=q+1
o=A.qr(a,B.d.ao(a,"25",p)?q+3:p,c,"%25")}else o=""
A.oj(a,b,q)
return"["+B.d.I(a,b,q)+o+"]"}}return A.vx(a,b,c)},
vr(a,b,c){var s=B.d.bX(a,"%",b)
return s>=b&&s<c?s:c},
qr(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=d!==""?new A.am(d):null
for(s=a.length,r=b,q=r,p=!0;r<c;){if(!(r>=0&&r<s))return A.a(a,r)
o=a.charCodeAt(r)
if(o===37){n=A.ot(a,r,!0)
m=n==null
if(m&&p){r+=3
continue}if(h==null)h=new A.am("")
l=h.a+=B.d.I(a,q,r)
if(m)n=B.d.I(a,r,r+3)
else if(n==="%")A.ei(a,r,"ZoneID should not contain % anymore")
h.a=l+n
r+=3
q=r
p=!0}else{if(o<127){m=o>>>4
if(!(m<8))return A.a(B.a_,m)
m=(B.a_[m]&1<<(o&15))!==0}else m=!1
if(m){if(p&&65<=o&&90>=o){if(h==null)h=new A.am("")
if(q<r){h.a+=B.d.I(a,q,r)
q=r}p=!1}++r}else{k=1
if((o&64512)===55296&&r+1<c){m=r+1
if(!(m<s))return A.a(a,m)
j=a.charCodeAt(m)
if((j&64512)===56320){o=(o&1023)<<10|j&1023|65536
k=2}}i=B.d.I(a,q,r)
if(h==null){h=new A.am("")
m=h}else m=h
m.a+=i
l=A.os(o)
m.a+=l
r+=k
q=r}}}if(h==null)return B.d.I(a,b,c)
if(q<c){i=B.d.I(a,q,c)
h.a+=i}s=h.a
return s.charCodeAt(0)==0?s:s},
vx(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h
for(s=a.length,r=b,q=r,p=null,o=!0;r<c;){if(!(r>=0&&r<s))return A.a(a,r)
n=a.charCodeAt(r)
if(n===37){m=A.ot(a,r,!0)
l=m==null
if(l&&o){r+=3
continue}if(p==null)p=new A.am("")
k=B.d.I(a,q,r)
if(!o)k=k.toLowerCase()
j=p.a+=k
i=3
if(l)m=B.d.I(a,r,r+3)
else if(m==="%"){m="%25"
i=1}p.a=j+m
r+=i
q=r
o=!0}else{if(n<127){l=n>>>4
if(!(l<8))return A.a(B.bk,l)
l=(B.bk[l]&1<<(n&15))!==0}else l=!1
if(l){if(o&&65<=n&&90>=n){if(p==null)p=new A.am("")
if(q<r){p.a+=B.d.I(a,q,r)
q=r}o=!1}++r}else{if(n<=93){l=n>>>4
if(!(l<8))return A.a(B.al,l)
l=(B.al[l]&1<<(n&15))!==0}else l=!1
if(l)A.ei(a,r,"Invalid character")
else{i=1
if((n&64512)===55296&&r+1<c){l=r+1
if(!(l<s))return A.a(a,l)
h=a.charCodeAt(l)
if((h&64512)===56320){n=(n&1023)<<10|h&1023|65536
i=2}}k=B.d.I(a,q,r)
if(!o)k=k.toLowerCase()
if(p==null){p=new A.am("")
l=p}else l=p
l.a+=k
j=A.os(n)
l.a+=j
r+=i
q=r}}}}if(p==null)return B.d.I(a,b,c)
if(q<c){k=B.d.I(a,q,c)
if(!o)k=k.toLowerCase()
p.a+=k}s=p.a
return s.charCodeAt(0)==0?s:s},
mI(a,b,c){var s,r,q,p,o
if(b===c)return""
s=a.length
if(!(b<s))return A.a(a,b)
if(!A.qj(a.charCodeAt(b)))A.ei(a,b,"Scheme not starting with alphabetic character")
for(r=b,q=!1;r<c;++r){if(!(r<s))return A.a(a,r)
p=a.charCodeAt(r)
if(p<128){o=p>>>4
if(!(o<8))return A.a(B.ai,o)
o=(B.ai[o]&1<<(p&15))!==0}else o=!1
if(!o)A.ei(a,r,"Illegal scheme character")
if(65<=p&&p<=90)q=!0}a=B.d.I(a,b,c)
return A.vp(q?a.toLowerCase():a)},
vp(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
qo(a,b,c){if(a==null)return""
return A.hi(a,b,c,B.eL,!1,!1)},
qm(a,b,c,d,e,f){var s,r,q=e==="file",p=q||f
if(a==null){if(d==null)return q?"/":""
s=A.Z(d)
r=new A.aC(d,s.i("l(1)").a(new A.mD()),s.i("aC<1,l>")).cp(0,"/")}else if(d!=null)throw A.f(A.W("Both path and pathSegments specified",null))
else r=A.hi(a,b,c,B.bw,!0,!0)
if(r.length===0){if(q)return"/"}else if(p&&!B.d.ah(r,"/"))r="/"+r
return A.vw(r,e,f)},
vw(a,b,c){var s=b.length===0
if(s&&!c&&!B.d.ah(a,"/")&&!B.d.ah(a,"\\"))return A.ou(a,!s||c)
return A.db(a)},
qn(a,b,c,d){if(a!=null){if(d!=null)throw A.f(A.W("Both query and queryParameters specified",null))
return A.hi(a,b,c,B.ad,!0,!1)}if(d==null)return null
return A.vu(d)},
vv(a){var s={},r=new A.am("")
s.a=""
a.aK(0,new A.mF(new A.mG(s,r)))
s=r.a
return s.charCodeAt(0)==0?s:s},
qk(a,b,c){if(a==null)return null
return A.hi(a,b,c,B.ad,!0,!1)},
ot(a,b,c){var s,r,q,p,o,n,m=b+2,l=a.length
if(m>=l)return"%"
s=b+1
if(!(s>=0&&s<l))return A.a(a,s)
r=a.charCodeAt(s)
if(!(m>=0))return A.a(a,m)
q=a.charCodeAt(m)
p=A.ng(r)
o=A.ng(q)
if(p<0||o<0)return"%"
n=p*16+o
if(n<127){m=B.a.l(n,4)
if(!(m<8))return A.a(B.a_,m)
m=(B.a_[m]&1<<(n&15))!==0}else m=!1
if(m)return A.T(c&&65<=n&&90>=n?(n|32)>>>0:n)
if(r>=97||q>=97)return B.d.I(a,b,b+3).toUpperCase()
return null},
os(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
if(a<128){s=new Uint8Array(3)
s[0]=37
r=a>>>4
if(!(r<16))return A.a(k,r)
s[1]=k.charCodeAt(r)
s[2]=k.charCodeAt(a&15)}else{if(a>2047)if(a>65535){q=240
p=4}else{q=224
p=3}else{q=192
p=2}r=3*p
s=new Uint8Array(r)
for(o=0;--p,p>=0;q=128){n=B.a.a3(a,6*p)&63|q
if(!(o<r))return A.a(s,o)
s[o]=37
m=o+1
l=n>>>4
if(!(l<16))return A.a(k,l)
if(!(m<r))return A.a(s,m)
s[m]=k.charCodeAt(l)
l=o+2
if(!(l<r))return A.a(s,l)
s[l]=k.charCodeAt(n&15)
o+=3}}return A.bC(s,0,null)},
hi(a,b,c,d,e,f){var s=A.qq(a,b,c,d,e,f)
return s==null?B.d.I(a,b,c):s},
qq(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j,i,h=null
for(s=!e,r=a.length,q=b,p=q,o=h;q<c;){if(!(q>=0&&q<r))return A.a(a,q)
n=a.charCodeAt(q)
if(n<127){m=n>>>4
if(!(m<8))return A.a(d,m)
m=(d[m]&1<<(n&15))!==0}else m=!1
if(m)++q
else{l=1
if(n===37){k=A.ot(a,q,!1)
if(k==null){q+=3
continue}if("%"===k)k="%25"
else l=3}else if(n===92&&f)k="/"
else{m=!1
if(s)if(n<=93){m=n>>>4
if(!(m<8))return A.a(B.al,m)
m=(B.al[m]&1<<(n&15))!==0}if(m){A.ei(a,q,"Invalid character")
l=h
k=l}else{if((n&64512)===55296){m=q+1
if(m<c){if(!(m<r))return A.a(a,m)
j=a.charCodeAt(m)
if((j&64512)===56320){n=(n&1023)<<10|j&1023|65536
l=2}}}k=A.os(n)}}if(o==null){o=new A.am("")
m=o}else m=o
i=m.a+=B.d.I(a,p,q)
m.a=i+A.t(k)
if(typeof l!=="number")return A.x3(l)
q+=l
p=q}}if(o==null)return h
if(p<c){s=B.d.I(a,p,c)
o.a+=s}s=o.a
return s.charCodeAt(0)==0?s:s},
qp(a){if(B.d.ah(a,"."))return!0
return B.d.c6(a,"/.")!==-1},
db(a){var s,r,q,p,o,n,m
if(!A.qp(a))return a
s=A.b([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(n===".."){m=s.length
if(m!==0){if(0>=m)return A.a(s,-1)
s.pop()
if(s.length===0)B.c.C(s,"")}p=!0}else{p="."===n
if(!p)B.c.C(s,n)}}if(p)B.c.C(s,"")
return B.c.cp(s,"/")},
ou(a,b){var s,r,q,p,o,n
if(!A.qp(a))return!b?A.qi(a):a
s=A.b([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n){p=s.length!==0&&B.c.gbs(s)!==".."
if(p){if(0>=s.length)return A.a(s,-1)
s.pop()}else B.c.C(s,"..")}else{p="."===n
if(!p)B.c.C(s,n)}}r=s.length
if(r!==0)if(r===1){if(0>=r)return A.a(s,0)
r=s[0].length===0}else r=!1
else r=!0
if(r)return"./"
if(p||B.c.gbs(s)==="..")B.c.C(s,"")
if(!b){if(0>=s.length)return A.a(s,0)
B.c.h(s,0,A.qi(s[0]))}return B.c.cp(s,"/")},
qi(a){var s,r,q,p=a.length
if(p>=2&&A.qj(a.charCodeAt(0)))for(s=1;s<p;++s){r=a.charCodeAt(s)
if(r===58)return B.d.I(a,0,s)+"%3A"+B.d.aI(a,s+1)
if(r<=127){q=r>>>4
if(!(q<8))return A.a(B.ai,q)
q=(B.ai[q]&1<<(r&15))===0}else q=!0
if(q)break}return a},
vy(a,b){if(a.n3("package")&&a.c==null)return A.qL(b,0,b.length)
return-1},
vs(a,b){var s,r,q,p,o
for(s=a.length,r=0,q=0;q<2;++q){p=b+q
if(!(p<s))return A.a(a,p)
o=a.charCodeAt(p)
if(48<=o&&o<=57)r=r*16+o-48
else{o|=32
if(97<=o&&o<=102)r=r*16+o-87
else throw A.f(A.W("Invalid URL encoding",null))}}return r},
hj(a,b,c,d,e){var s,r,q,p,o=a.length,n=b
while(!0){if(!(n<c)){s=!0
break}if(!(n<o))return A.a(a,n)
r=a.charCodeAt(n)
q=!0
if(r<=127)if(r!==37)q=e&&r===43
if(q){s=!1
break}++n}if(s)if(B.u===d)return B.d.I(a,b,c)
else p=new A.ai(B.d.I(a,b,c))
else{p=A.b([],t.t)
for(n=b;n<c;++n){if(!(n<o))return A.a(a,n)
r=a.charCodeAt(n)
if(r>127)throw A.f(A.W("Illegal percent encoding in URI",null))
if(r===37){if(n+3>o)throw A.f(A.W("Truncated URI",null))
B.c.C(p,A.vs(a,n+1))
n+=2}else if(e&&r===43)B.c.C(p,32)
else B.c.C(p,r)}}return d.bk(p)},
qj(a){var s=a|32
return 97<=s&&s<=122},
pS(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=A.b([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=a.charCodeAt(r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw A.f(A.ag(k,a,r))}}if(q<0&&r>b)throw A.f(A.ag(k,a,r))
for(;p!==44;){B.c.C(j,r);++r
for(o=-1;r<s;++r){if(!(r>=0))return A.a(a,r)
p=a.charCodeAt(r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)B.c.C(j,o)
else{n=B.c.gbs(j)
if(p!==44||r!==n+7||!B.d.ao(a,"base64",n+1))throw A.f(A.ag("Expecting '='",a,r))
break}}B.c.C(j,r)
m=r+1
if((j.length&1)===1)a=B.cu.na(a,m,s)
else{l=A.qq(a,m,s,B.ad,!0,!1)
if(l!=null)a=B.d.ct(a,m,s,l)}return new A.lC(a,j,c)},
vN(){var s,r,q,p,o,n="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",m=".",l=":",k="/",j="\\",i="?",h="#",g="/\\",f=J.dN(22,t.D)
for(s=0;s<22;++s)f[s]=new Uint8Array(96)
r=new A.mS(f)
q=new A.mT()
p=new A.mU()
o=r.$2(0,225)
q.$3(o,n,1)
q.$3(o,m,14)
q.$3(o,l,34)
q.$3(o,k,3)
q.$3(o,j,227)
q.$3(o,i,172)
q.$3(o,h,205)
o=r.$2(14,225)
q.$3(o,n,1)
q.$3(o,m,15)
q.$3(o,l,34)
q.$3(o,g,234)
q.$3(o,i,172)
q.$3(o,h,205)
o=r.$2(15,225)
q.$3(o,n,1)
q.$3(o,"%",225)
q.$3(o,l,34)
q.$3(o,k,9)
q.$3(o,j,233)
q.$3(o,i,172)
q.$3(o,h,205)
o=r.$2(1,225)
q.$3(o,n,1)
q.$3(o,l,34)
q.$3(o,k,10)
q.$3(o,j,234)
q.$3(o,i,172)
q.$3(o,h,205)
o=r.$2(2,235)
q.$3(o,n,139)
q.$3(o,k,131)
q.$3(o,j,131)
q.$3(o,m,146)
q.$3(o,i,172)
q.$3(o,h,205)
o=r.$2(3,235)
q.$3(o,n,11)
q.$3(o,k,68)
q.$3(o,j,68)
q.$3(o,m,18)
q.$3(o,i,172)
q.$3(o,h,205)
o=r.$2(4,229)
q.$3(o,n,5)
p.$3(o,"AZ",229)
q.$3(o,l,102)
q.$3(o,"@",68)
q.$3(o,"[",232)
q.$3(o,k,138)
q.$3(o,j,138)
q.$3(o,i,172)
q.$3(o,h,205)
o=r.$2(5,229)
q.$3(o,n,5)
p.$3(o,"AZ",229)
q.$3(o,l,102)
q.$3(o,"@",68)
q.$3(o,k,138)
q.$3(o,j,138)
q.$3(o,i,172)
q.$3(o,h,205)
o=r.$2(6,231)
p.$3(o,"19",7)
q.$3(o,"@",68)
q.$3(o,k,138)
q.$3(o,j,138)
q.$3(o,i,172)
q.$3(o,h,205)
o=r.$2(7,231)
p.$3(o,"09",7)
q.$3(o,"@",68)
q.$3(o,k,138)
q.$3(o,j,138)
q.$3(o,i,172)
q.$3(o,h,205)
q.$3(r.$2(8,8),"]",5)
o=r.$2(9,235)
q.$3(o,n,11)
q.$3(o,m,16)
q.$3(o,g,234)
q.$3(o,i,172)
q.$3(o,h,205)
o=r.$2(16,235)
q.$3(o,n,11)
q.$3(o,m,17)
q.$3(o,g,234)
q.$3(o,i,172)
q.$3(o,h,205)
o=r.$2(17,235)
q.$3(o,n,11)
q.$3(o,k,9)
q.$3(o,j,233)
q.$3(o,i,172)
q.$3(o,h,205)
o=r.$2(10,235)
q.$3(o,n,11)
q.$3(o,m,18)
q.$3(o,k,10)
q.$3(o,j,234)
q.$3(o,i,172)
q.$3(o,h,205)
o=r.$2(18,235)
q.$3(o,n,11)
q.$3(o,m,19)
q.$3(o,g,234)
q.$3(o,i,172)
q.$3(o,h,205)
o=r.$2(19,235)
q.$3(o,n,11)
q.$3(o,g,234)
q.$3(o,i,172)
q.$3(o,h,205)
o=r.$2(11,235)
q.$3(o,n,11)
q.$3(o,k,10)
q.$3(o,j,234)
q.$3(o,i,172)
q.$3(o,h,205)
o=r.$2(12,236)
q.$3(o,n,12)
q.$3(o,i,12)
q.$3(o,h,205)
o=r.$2(13,237)
q.$3(o,n,13)
q.$3(o,i,13)
p.$3(r.$2(20,245),"az",21)
o=r.$2(21,245)
p.$3(o,"az",21)
p.$3(o,"09",21)
q.$3(o,"+-.",21)
return f},
qJ(a,b,c,d,e){var s,r,q,p,o,n=$.rD()
for(s=a.length,r=b;r<c;++r){if(!(d>=0&&d<n.length))return A.a(n,d)
q=n[d]
if(!(r<s))return A.a(a,r)
p=a.charCodeAt(r)^96
o=q[p>95?31:p]
d=o&31
B.c.h(e,o>>>5,r)}return d},
q9(a){if(a.b===7&&B.d.ah(a.a,"package")&&a.c<=0)return A.qL(a.a,a.e,a.f)
return-1},
qL(a,b,c){var s,r,q,p
for(s=a.length,r=b,q=0;r<c;++r){if(!(r>=0&&r<s))return A.a(a,r)
p=a.charCodeAt(r)
if(p===47)return q!==0?r:-1
if(p===37||p===58)return-1
q|=p^46}return-1},
vL(a,b,c){var s,r,q,p,o,n,m,l
for(s=a.length,r=b.length,q=0,p=0;p<s;++p){o=c+p
if(!(o<r))return A.a(b,o)
n=b.charCodeAt(o)
m=a.charCodeAt(p)^n
if(m!==0){if(m===32){l=n|m
if(97<=l&&l<=122){q=32
continue}}return-1}}return q},
mH:function mH(a){this.a=a},
m7:function m7(){},
S:function S(){},
eq:function eq(a){this.a=a},
bR:function bR(){},
bb:function bb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dZ:function dZ(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
hY:function hY(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
fF:function fF(a){this.a=a},
j3:function j3(a){this.a=a},
e4:function e4(a){this.a=a},
hF:function hF(a){this.a=a},
it:function it(){},
fB:function fB(){},
jo:function jo(a){this.a=a},
c5:function c5(a,b,c){this.a=a
this.b=b
this.c=c},
h:function h(){},
aG:function aG(a,b,c){this.a=a
this.b=b
this.$ti=c},
ar:function ar(){},
B:function B(){},
jy:function jy(){},
am:function am(a){this.a=a},
lI:function lI(a){this.a=a},
lE:function lE(a){this.a=a},
lG:function lG(a){this.a=a},
lH:function lH(a,b){this.a=a
this.b=b},
hg:function hg(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.x=_.w=$},
mD:function mD(){},
mG:function mG(a,b){this.a=a
this.b=b},
mF:function mF(a){this.a=a},
lC:function lC(a,b,c){this.a=a
this.b=b
this.c=c},
mS:function mS(a){this.a=a},
mT:function mT(){},
mU:function mU(){},
bj:function bj(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=null},
jl:function jl(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.x=_.w=$},
hm(a){var s
if(typeof a=="function")throw A.f(A.W("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(){return b(c)}}(A.vI,a)
s[$.nw()]=a
return s},
mW(a){var s
if(typeof a=="function")throw A.f(A.W("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.vJ,a)
s[$.nw()]=a
return s},
vI(a){return t.Y.a(a).$0()},
vJ(a,b,c){t.Y.a(a)
if(A.r(c)>=1)return a.$1(b)
return a.$0()},
xi(a,b){var s=new A.L($.K,b.i("L<0>")),r=new A.bW(s,b.i("bW<0>"))
a.then(A.ep(new A.nr(r,b),1),A.ep(new A.ns(r),1))
return s},
nr:function nr(a,b){this.a=a
this.b=b},
ns:function ns(a){this.a=a},
ir:function ir(a){this.a=a},
nK(a){var s=new A.eK()
s.el(a)
return s},
eK:function eK(){this.a=$
this.b=0
this.c=2147483647},
m_:function m_(){},
mN:function mN(){},
kN:function kN(a,b,c,d){var _=this
_.a=a
_.b=null
_.c=b
_.e=_.d=0
_.r=c
_.w=d},
lZ:function lZ(){},
hA:function hA(a,b){this.a=a
this.b=b},
nL(a,b,c,d){var s,r,q=new A.hZ(b)
if(d==null)d=0
if(c==null)c=a.length-d
s=a.length
if(d+c>s)c=s-d
r=t.D.b(a)?a:new Uint8Array(A.C(a))
s=J.ac(B.f.gE(r),r.byteOffset+d,c)
q.b=s
q.d=s.length
return q},
hZ:function hZ(a){var _=this
_.b=null
_.c=0
_.d=$
_.a=a},
i_:function i_(){},
tO(a){var s=a==null?32768:a
return new A.fg(new Uint8Array(s))},
fg:function fg(a){this.b=0
this.c=a},
iu:function iu(){},
J:function J(){},
k5:function k5(a){this.a=a},
k6:function k6(a,b){this.a=a
this.b=b},
k7:function k7(a){this.a=a},
wY(a){return A.jG(new A.nf(a,null),t.q)},
xh(a,b,c){return A.jG(new A.nq(a,c,b,null),t.q)},
jG(a,b){return A.wq(a,b,b)},
wq(a,b,c){var s=0,r=A.co(c),q,p=2,o,n=[],m,l
var $async$jG=A.cp(function(d,e){if(d===1){o=e
s=p}while(true)switch(s){case 0:l=new A.hz(A.tA(t.m))
p=3
s=6
return A.bZ(a.$1(l),$async$jG)
case 6:m=e
q=m
n=[1]
s=4
break
n.push(5)
s=4
break
case 3:n=[2]
case 4:p=2
l.eZ()
s=n.pop()
break
case 5:case 1:return A.cm(q,r)
case 2:return A.cl(o,r)}})
return A.cn($async$jG,r)},
nf:function nf(a,b){this.a=a
this.b=b},
nq:function nq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hx:function hx(){},
er:function er(){},
jX:function jX(){},
jY:function jY(){},
jZ:function jZ(){},
qz(a){var s,r,q,p,o,n=t.N,m=A.H(n,n),l=A.I(a.getAllResponseHeaders()).split("\r\n")
for(n=l.length,s=0;s<n;++s){r=l[s]
if(r.length===0)continue
q=B.d.c6(r,": ")
if(q===-1)continue
p=B.d.I(r,0,q).toLowerCase()
o=B.d.aI(r,q+2)
if(m.a_(p))m.h(0,p,A.t(m.k(0,p))+", "+o)
else m.h(0,p,o)}return m},
hz:function hz(a){this.a=a
this.c=!1},
k1:function k1(a,b,c){this.a=a
this.b=b
this.c=c},
k2:function k2(a,b){this.a=a
this.b=b},
dg:function dg(a){this.a=a},
k4:function k4(a){this.a=a},
t0(a,b){return new A.dh(a,b)},
dh:function dh(a,b){this.a=a
this.b=b},
tX(a,b){var s=new Uint8Array(0),r=$.rc()
if(!r.b.test(a))A.a8(A.jS(a,"method","Not a valid method"))
r=t.N
return new A.iO(B.u,s,a,b,A.pw(new A.jX(),new A.jY(),r,r))},
iO:function iO(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.a=c
_.b=d
_.r=e
_.w=!1},
ln(a){var s=0,r=A.co(t.q),q,p,o,n,m,l,k,j
var $async$ln=A.cp(function(b,c){if(b===1)return A.cl(c,r)
while(true)switch(s){case 0:s=3
return A.bZ(a.w.iF(),$async$ln)
case 3:p=c
o=a.b
n=a.a
m=a.e
l=a.c
k=A.ra(p)
j=p.length
k=new A.e0(k,n,o,l,j,m,!1,!0)
k.fE(o,j,m,!1,!0,l,n)
q=k
s=1
break
case 1:return A.cm(q,r)}})
return A.cn($async$ln,r)},
qw(a){var s=a.k(0,"content-type")
if(s!=null)return A.pz(s)
return A.l7("application","octet-stream",null)},
e0:function e0(a,b,c,d,e,f,g,h){var _=this
_.w=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h},
d1:function d1(){},
iW:function iW(a,b,c,d,e,f,g,h){var _=this
_.w=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h},
t_(a){return A.I(a).toLowerCase()},
et:function et(a,b,c){this.a=a
this.c=b
this.$ti=c},
pz(a){return A.y4("media type",a,new A.l8(a),t.br)},
l7(a,b,c){var s=t.N
if(c==null)s=A.H(s,s)
else{s=new A.et(A.wA(),A.H(s,t.gc),t.kj)
s.cj(0,c)}return new A.dU(a.toLowerCase(),b.toLowerCase(),new A.d5(s,t.h))},
dU:function dU(a,b,c){this.a=a
this.b=b
this.c=c},
l8:function l8(a){this.a=a},
la:function la(a){this.a=a},
l9:function l9(){},
wU(a){var s
a.i9($.rC(),"quoted string")
s=a.gfe().k(0,0)
return A.r8(B.d.I(s,1,s.length-1),$.rB(),t.bb.a(t.po.a(new A.n9())),null)},
n9:function n9(){},
k9:function k9(a,b){this.a=a
this.b=b},
X:function X(a){this.a=-1
this.b=a},
di:function di(a){this.a=a},
dj:function dj(a){this.a=a},
dk:function dk(a){this.a=a},
dl:function dl(a){this.a=a},
dm:function dm(a){this.a=a},
dn:function dn(a){this.a=a},
dq:function dq(a,b){this.a=a
this.b=b},
dr:function dr(a){this.a=a},
ds:function ds(a,b){this.a=a
this.b=b},
dt:function dt(a){this.a=a},
du:function du(a,b){this.a=a
this.b=b},
t6(a,b,c,d){var s=new A.dp(new Uint8Array(4))
s.j7(a,b,c,d)
return s},
bI:function bI(a){this.a=a},
hD:function hD(a){this.a=a},
dp:function dp(a){this.a=a},
jI(a,b,c){var s
if(b===c)return a
switch(b.a){case 0:if(a===0)s=0
else{s=B.bU.k(0,c)
s.toString}return s
case 1:switch(c.a){case 0:return a===0?0:1
case 1:return a
case 2:return a*5
case 3:return a*75
case 4:return a*21845
case 5:return a*1431655765
case 6:return a*42
case 7:return a*10922
case 8:return a*715827882
case 9:case 10:case 11:return a/3}break
case 2:switch(c.a){case 0:return a===0?0:1
case 1:return B.a.l(A.r(a),1)
case 2:return a
case 3:return a*17
case 4:return a*4369
case 5:return a*286331153
case 6:return a*8
case 7:return a*2184
case 8:return a*143165576
case 9:case 10:case 11:return a/3}break
case 3:switch(c.a){case 0:return a===0?0:1
case 1:return B.a.l(A.r(a),6)
case 2:return B.a.l(A.r(a),4)
case 3:return a
case 4:return a*257
case 5:return a*16843009
case 6:return B.a.l(A.r(a),1)
case 7:return a*128
case 8:return a*8421504
case 9:case 10:case 11:return a/255}break
case 4:switch(c.a){case 0:return a===0?0:1
case 1:return B.a.l(A.r(a),14)
case 2:return B.a.l(A.r(a),12)
case 3:return B.a.l(A.r(a),8)
case 4:return a
case 5:return A.r(a)<<8>>>0
case 6:return B.a.l(A.r(a),9)
case 7:return B.a.l(A.r(a),1)
case 8:return a*524296
case 9:case 10:case 11:return a/65535}break
case 5:switch(c.a){case 0:return a===0?0:1
case 1:return B.a.l(A.r(a),30)
case 2:return B.a.l(A.r(a),28)
case 3:return B.a.l(A.r(a),24)
case 4:return B.a.l(A.r(a),16)
case 5:return a
case 6:return B.a.l(A.r(a),25)
case 7:return B.a.l(A.r(a),17)
case 8:return B.a.l(A.r(a),1)
case 9:case 10:case 11:return a/4294967295}break
case 6:switch(c.a){case 0:return a===0?0:1
case 1:return a<=0?0:B.a.l(A.r(a),5)
case 2:return a<=0?0:B.a.l(A.r(a),3)
case 3:return a<=0?0:A.r(a)<<1>>>0
case 4:return a<=0?0:A.r(a)*516
case 5:return a<=0?0:A.r(a)*33818640
case 6:return a
case 7:return a*258
case 8:return a*16909320
case 9:case 10:case 11:return a/127}break
case 7:switch(c.a){case 0:return a===0?0:1
case 1:return a<=0?0:B.a.l(A.r(a),15)
case 2:return a<=0?0:B.a.l(A.r(a),11)
case 3:return a<=0?0:B.a.l(A.r(a),7)
case 4:return a<=0?0:A.r(a)<<1>>>0
case 5:return a<=0?0:A.r(a)*131076
case 6:return B.a.l(A.r(a),8)
case 7:return a
case 8:return A.r(a)*65538
case 9:case 10:case 11:return a/32767}break
case 8:switch(c.a){case 0:return a===0?0:1
case 1:return a<=0?0:B.a.l(A.r(a),29)
case 2:return a<=0?0:B.a.l(A.r(a),27)
case 3:return a<=0?0:B.a.l(A.r(a),23)
case 4:return a<=0?0:B.a.l(A.r(a),16)
case 5:return a<=0?0:A.r(a)<<1>>>0
case 6:return B.a.l(A.r(a),24)
case 7:return B.a.l(A.r(a),16)
case 8:return a
case 9:case 10:case 11:return a/2147483647}break
case 9:case 10:case 11:switch(c.a){case 0:return a===0?0:1
case 1:return B.b.j(B.b.L(a,0,1)*3)
case 2:return B.b.j(B.b.L(a,0,1)*15)
case 3:return B.b.j(B.b.L(a,0,1)*255)
case 4:return B.b.j(B.b.L(a,0,1)*65535)
case 5:return B.b.j(B.b.L(a,0,1)*4294967295)
case 6:return B.b.j(a<0?B.b.L(a,-1,1)*128:B.b.L(a,-1,1)*127)
case 7:return B.b.j(a<0?B.b.L(a,-1,1)*32768:B.b.L(a,-1,1)*32767)
case 8:return B.b.j(a<0?B.b.L(a,-1,1)*2147483648:B.b.L(a,-1,1)*2147483647)
case 9:case 10:case 11:return a}break}},
aL:function aL(a,b){this.a=a
this.b=b},
hy:function hy(a,b){this.a=a
this.b=b},
hI(a){var s=new A.cx(A.H(t.N,t.a))
s.jc(a)
return s},
p5(a){var s=new A.cx(A.H(t.N,t.a))
s.cr(a)
return s},
cx:function cx(a){this.a=a},
jp:function jp(a,b){this.a=a
this.b=b},
j(a,b,c){return new A.hJ(a,b)},
hJ:function hJ(a,b){this.a=a
this.b=b},
bc:function bc(a){this.a=a},
kH:function kH(a){this.a=a},
pf(a){var s=new A.b4(A.H(t.p,t.r),new A.bc(A.H(t.N,t.a)))
s.mB(a)
return s},
b4:function b4(a,b){this.a=a
this.b=b},
kI:function kI(a){this.a=a},
kJ:function kJ(a){this.a=a},
pm(a,b){var s=new A.cG(new Uint16Array(b))
s.jh(a,b)
return s},
ph(a,b){var s=new A.bx(new Uint32Array(b))
s.je(a,b)
return s},
pi(a,b){var s,r=J.dN(b,t.i)
for(s=0;s<b;++s)r[s]=new A.e_(a.m(),a.m())
return new A.cC(r)},
pl(a,b){var s=new A.cF(new Int16Array(b))
s.jg(a,b)
return s},
pj(a,b){var s=new A.cD(new Int32Array(b))
s.jf(a,b)
return s},
pk(a,b){var s,r,q,p,o=J.dN(b,t.i)
for(s=0;s<b;++s){r=a.m()
q=$.V()
q.$flags&2&&A.c(q)
q[0]=r
r=$.au()
if(0>=r.length)return A.a(r,0)
p=r[0]
q[0]=a.m()
o[s]=new A.e_(p,r[0])}return new A.cE(o)},
pn(a,b){var s=new A.dB(new Float32Array(b))
s.ji(a,b)
return s},
pg(a,b){var s=new A.dA(new Float64Array(b))
s.jd(a,b)
return s},
aF:function aF(a,b){this.a=a
this.b=b},
ak:function ak(){},
bL:function bL(a){this.a=a},
cB:function cB(a){this.a=a},
cG:function cG(a){this.a=a},
bx:function bx(a){this.a=a},
cC:function cC(a){this.a=a},
c7:function c7(a){this.a=a},
cF:function cF(a){this.a=a},
cD:function cD(a){this.a=a},
cE:function cE(a){this.a=a},
dB:function dB(a){this.a=a},
dA:function dA(a){this.a=a},
dC:function dC(a){this.a=a},
oZ(a){var s,r,q=new A.k0()
if(!A.nE(a))A.a8(A.p("Not a bitmap file."))
a.d+=2
s=a.m()
r=$.V()
r.$flags&2&&A.c(r)
r[0]=s
s=$.au()
if(0>=s.length)return A.a(s,0)
a.d+=4
r[0]=a.m()
q.b=s[0]
return q},
nE(a){if(a.c-a.d<2)return!1
return A.q(a,null,0).p()===19778},
rW(a,b){var s,r,q,p,o=b==null?A.oZ(a):b,n=a.d,m=a.m(),l=a.m(),k=$.V()
k.$flags&2&&A.c(k)
k[0]=l
l=$.au()
if(0>=l.length)return A.a(l,0)
s=l[0]
k[0]=a.m()
l=l[0]
r=a.p()
q=a.p()
p=a.m()
if(!(p<14))return A.a(B.aj,p)
p=B.aj[p]
a.m()
k[0]=a.m()
k[0]=a.m()
k=a.m()
a.m()
n=new A.bF(o,s,l,m,r,q,p,k,n)
n.fF(a,b)
return n},
ax:function ax(a,b){this.a=a
this.b=b},
k0:function k0(){this.b=$},
bF:function bF(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=h
_.ay=_.ax=_.at=_.as=$
_.ch=null
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.CW=$
_.fy=i},
es:function es(a){this.a=$
this.b=null
this.c=a},
k_:function k_(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
kf:function kf(a){this.a=$
this.b=null
this.c=a},
O:function O(){},
ke:function ke(){},
kg:function kg(){},
hK:function hK(){},
eR:function eR(a,b,c,d){var _=this
_.r=a
_.w=b
_.x=c
_.b=_.a=0
_.c=d},
dx:function dx(a,b){this.a=a
this.b=b},
cy:function cy(a,b){this.a=a
this.b=b},
hL:function hL(){var _=this
_.w=_.r=_.f=_.d=_.c=_.b=_.a=$},
p6(a,b,c,d){var s,r
switch(a.a){case 1:return new A.i7(c,b)
case 2:return new A.eS(c,d==null?1:d,b)
case 3:return new A.eS(c,d==null?16:d,b)
case 4:s=d==null?32:d
r=new A.i5(c,s,b)
r.jl(b,c,s)
return r
case 5:return new A.i6(c,d==null?16:d,b)
case 6:return new A.eR(c,d==null?32:d,!1,b)
case 7:return new A.eR(c,d==null?32:d,!0,b)
default:throw A.f(A.p("Invalid compression type: "+a.t(0)))}},
bm:function bm(a,b){this.a=a
this.b=b},
bJ:function bJ(){},
i3:function i3(){},
td(a,b,c,d){var s,r,q,p,o,n,m,l
if(b===0){if(d!==0)throw A.f(A.p("Incomplete huffman data"))
return}s=a.d
r=a.m()
q=a.m()
a.d+=4
p=a.m()
o=!0
if(r<65537)o=q>=65537
if(o)throw A.f(A.p("Invalid huffman table size"))
a.d+=4
n=A.a1(65537,0,!1,t.p)
m=J.aM(16384,t.ho)
for(l=0;l<16384;++l)m[l]=new A.hN()
A.te(a,b-20,r,q,n)
if(p>8*(b-(a.d-s)))throw A.f(A.p("Error in header for Huffman-encoded data (invalid number of bits)."))
A.ta(n,r,q,m)
A.tc(n,m,a,p,q,d,c)},
tc(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l,k,j="Error in Huffman-encoded data (invalid code).",i=A.b([0,0],t.t),h=c.d+B.a.Y(d+7,8)
for(s=b.length,r=0;c.d<h;){A.nG(i,c)
for(;q=i[1],q>=14;){p=B.a.bo(i[0],q-14)&16383
if(!(p<s))return A.a(b,p)
o=b[p]
p=o.a
if(p!==0){B.c.h(i,1,q-p)
r=A.nH(o.b,e,i,c,g,r,f)}else{if(o.c==null)throw A.f(A.p(j))
for(n=0;n<o.b;++n){q=o.c
if(!(n<q.length))return A.a(q,n)
q=q[n]
if(!(q<65537))return A.a(a,q)
m=a[q]&63
while(!0){q=i[1]
if(!(q<m&&c.d<h))break
A.nG(i,c)}if(q>=m){p=o.c
if(!(n<p.length))return A.a(p,n)
p=p[n]
if(!(p<65537))return A.a(a,p)
q-=m
if(a[p]>>>6===(B.a.bo(i[0],q)&B.a.R(1,m)-1)>>>0){B.c.h(i,1,q)
q=o.c
if(!(n<q.length))return A.a(q,n)
l=A.nH(q[n],e,i,c,g,r,f)
r=l
break}}}if(n===o.b)throw A.f(A.p(j))}}}k=8-d&7
B.c.h(i,0,B.a.l(i[0],k))
B.c.h(i,1,i[1]-k)
for(;q=i[1],q>0;){p=B.a.a0(i[0],14-q)&16383
if(!(p<s))return A.a(b,p)
o=b[p]
p=o.a
if(p!==0){B.c.h(i,1,q-p)
r=A.nH(o.b,e,i,c,g,r,f)}else throw A.f(A.p(j))}if(r!==f)throw A.f(A.p("Error in Huffman-encoded data (decoded data are shorter than expected)."))},
nH(a,b,c,d,e,f,g){var s,r,q,p,o,n,m="Error in Huffman-encoded data (decoded data are longer than expected)."
if(a===b){if(c[1]<8)A.nG(c,d)
B.c.h(c,1,c[1]-8)
s=B.a.bo(c[0],c[1])&255
if(f+s>g)throw A.f(A.p(m))
r=f-1
q=e.length
if(!(r>=0&&r<q))return A.a(e,r)
p=e[r]
for(r=e.$flags|0;o=s-1,s>0;s=o,f=n){n=f+1
r&2&&A.c(e)
if(!(f<q))return A.a(e,f)
e[f]=p}}else{if(f<g){e.toString
n=f+1
e.$flags&2&&A.c(e)
if(!(f<e.length))return A.a(e,f)
e[f]=a}else throw A.f(A.p(m))
f=n}return f},
ta(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i="Error in Huffman-encoded data (invalid code table entry)."
for(s=d.length,r=t.t,q=t.p;b<=c;++b){if(!(b<65537))return A.a(a,b)
p=a[b]
o=p>>>6
n=p&63
if(B.a.ab(o,n)!==0)throw A.f(A.p(i))
if(n>14){p=B.a.a3(o,n-14)
if(!(p<s))return A.a(d,p)
m=d[p]
if(m.a!==0)throw A.f(A.p(i))
p=++m.b
l=m.c
if(l!=null){m.sip(A.a1(p,0,!1,q))
for(k=0;k<m.b-1;++k){p=m.c
p.toString
if(!(k<l.length))return A.a(l,k)
B.c.h(p,k,l[k])}}else m.sip(A.b([0],r))
p=m.c
p.toString
B.c.h(p,m.b-1,b)}else if(n!==0){p=14-n
j=B.a.a0(o,p)
if(!(j<s))return A.a(d,j)
for(k=B.a.a0(1,p);k>0;--k,++j){if(!(j<s))return A.a(d,j)
m=d[j]
if(m.a!==0||m.c!=null)throw A.f(A.p(i))
m.a=n
m.b=b}}}},
te(a,b,c,d,e){var s,r,q,p,o,n="Error in Huffman-encoded data (unexpected end of code table data).",m="Error in Huffman-encoded data (code table is longer than expected).",l=a.d,k=A.b([0,0],t.t)
for(s=d+1;c<=d;++c){if(a.d-l>b)throw A.f(A.p(n))
r=A.p7(6,k,a)
B.c.h(e,c,r)
if(r===63){if(a.d-l>b)throw A.f(A.p(n))
q=A.p7(8,k,a)+6
if(c+q>s)throw A.f(A.p(m))
for(;p=q-1,q!==0;q=p,c=o){o=c+1
B.c.h(e,c,0)}--c}else if(r>=59){q=r-59+2
if(c+q>s)throw A.f(A.p(m))
for(;p=q-1,q!==0;q=p,c=o){o=c+1
B.c.h(e,c,0)}--c}}A.tb(e)},
tb(a){var s,r,q,p,o,n=A.a1(59,0,!1,t.p)
for(s=0;s<65537;++s){r=a[s]
if(!(r<59))return A.a(n,r)
B.c.h(n,r,n[r]+1)}for(q=0,s=58;s>0;--s,q=p){p=q+n[s]>>>1
B.c.h(n,s,q)}for(s=0;s<65537;++s){o=a[s]
if(o>0){if(!(o<59))return A.a(n,o)
r=n[o]
B.c.h(n,o,r+1)
B.c.h(a,s,(o|r<<6)>>>0)}}},
nG(a,b){B.c.h(a,0,((a[0]<<8|b.G())&-1)>>>0)
B.c.h(a,1,(a[1]+8&-1)>>>0)},
p7(a,b,c){var s
for(;s=b[1],s<a;){B.c.h(b,0,((b[0]<<8|J.d(c.a,c.d++))&-1)>>>0)
B.c.h(b,1,(b[1]+8&-1)>>>0)}B.c.h(b,1,s-a)
return(B.a.bo(b[0],b[1])&B.a.R(1,a)-1)>>>0},
hN:function hN(){this.b=this.a=0
this.c=null},
tf(a){var s=A.u(a,!1,null,0)
if(s.m()!==20000630)return!1
if(s.G()!==2)return!1
if((s.bw()&4294967289)>>>0!==0)return!1
return!0},
hO:function hO(a){var _=this
_.b=_.a=0
_.c=a
_.d=null
_.e=$},
pq(a,b,c){var s=new A.i4(a,A.b([],t.a_),A.H(t.N,t.iW),B.aZ,b)
s.ja(a,b,c,{})
return s},
eE:function eE(){},
kh:function kh(a,b){this.a=a
this.b=b},
i4:function i4(a,b,c,d,e){var _=this
_.a=a
_.b=null
_.c=b
_.d=0
_.e=c
_.r=$
_.x=_.w=0
_.at=$
_.ax=d
_.ay=null
_.ch=$
_.CW=null
_.cx=0
_.cy=null
_.db=e
_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=null
_.k2=$
_.k3=null},
i5:function i5(a,b,c){var _=this
_.r=null
_.w=a
_.x=b
_.y=$
_.z=null
_.b=_.a=0
_.c=c},
h5:function h5(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=$},
i6:function i6(a,b,c){var _=this
_.w=a
_.x=b
_.y=null
_.b=_.a=0
_.c=c},
i7:function i7(a,b){var _=this
_.r=null
_.w=a
_.b=_.a=0
_.c=b},
eS:function eS(a,b,c){var _=this
_.w=a
_.x=b
_.y=null
_.b=_.a=0
_.c=c},
hM:function hM(){this.a=null},
pa(a){var s=new Uint8Array(a*3)
return new A.eH(A.tm(a),a,null,new A.bn(s,a,3))},
tl(a){return new A.eH(a.a,a.b,a.c,A.pB(a.d))},
tm(a){var s
for(s=1;s<=8;++s)if(B.a.R(1,s)>=a)return s
return 0},
eH:function eH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eI:function eI(){},
i8:function i8(){var _=this
_.e=_.d=_.c=_.b=_.a=$
_.f=null
_.r=80
_.w=0
_.x=$},
eJ:function eJ(a){var _=this
_.b=_.a=0
_.e=_.c=null
_.r=a},
pb(){return new A.kj()},
kj:function kj(){var _=this
_.a=null
_.e=_.d=_.c=_.b=0
_.f=null
_.r=0
_.w=null
_.y=_.x=$
_.z=null
_.Q=0
_.as=null
_.ay=_.ax=_.at=0
_.ch=null
_.dy=_.dx=_.db=_.cy=_.cx=_.CW=0},
pe(a){var s,r,q,p
if(a.p()!==0)return null
s=a.p()
if(s>=3)return null
if(B.fM[s]===B.b_)return null
r=a.p()
q=J.dN(r,t.aw)
for(p=0;p<r;++p){J.d(a.a,a.d++)
J.d(a.a,a.d++)
J.d(a.a,a.d++);++a.d
a.p()
a.p()
q[p]=new A.hV(a.m(),a.m())}return new A.hU(r,q)},
dz:function dz(a,b){this.a=a
this.b=b},
hU:function hU(a,b){this.d=a
this.e=b},
hV:function hV(a,b){this.d=a
this.e=b},
hS:function hS(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=h
_.ay=_.ax=_.at=_.as=$
_.ch=null
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.CW=$
_.fy=i},
hT:function hT(){this.b=this.a=null},
hE:function hE(a,b,c){this.e=a
this.f=b
this.r=c},
c6:function c6(){},
cA:function cA(a){this.a=a},
eL:function eL(a){this.a=a},
kQ:function kQ(){this.d=null},
bN:function bN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.y=_.x=_.w=_.r=_.f=_.e=$},
pu(){var s=A.a1(4,null,!1,t.jH),r=A.b([],t.gU),q=t.iM,p=J.id(0,q)
q=J.id(0,q)
return new A.kS(new A.cx(A.H(t.N,t.a)),s,r,p,q,A.b([],t.an))},
kS:function kS(a,b,c,d,e,f){var _=this
_.b=_.a=$
_.e=_.d=_.c=null
_.r=a
_.w=b
_.x=c
_.y=d
_.z=e
_.Q=f},
kT:function kT(a,b){this.a=a
this.b=b},
eh:function eh(a){this.a=a
this.b=0},
ih:function ih(a,b){var _=this
_.e=_.d=_.c=_.b=null
_.r=_.f=0
_.x=_.w=$
_.y=a
_.z=b},
kV:function kV(){this.r=this.f=$},
ii:function ii(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.f=$
_.r=null
_.y=c
_.z=d
_.Q=e
_.as=f
_.at=g
_.ax=h
_.cx=_.CW=_.ch=_.ay=0
_.cy=$},
eZ:function eZ(){},
kR:function kR(a,b){this.a=a
this.b=b},
kU:function kU(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=_.e=null
_.w=_.r=$
_.x=e
_.y=f
_.z=g
_.Q=h
_.as=i
_.at=null
_.ax=0
_.ay=7},
dV:function dV(a,b){this.a=a
this.b=b},
fs:function fs(a,b){this.a=a
this.b=b},
fu:function fu(){},
i9:function i9(a,b,c,d,e,f,g,h,i){var _=this
_.y=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
nN(){var s=t.N
return new A.ia(A.H(s,s),A.b([],t.fi),A.b([],t.t))},
cb:function cb(a,b){this.a=a
this.b=b},
iz:function iz(){},
ia:function ia(a,b,c){var _=this
_.c=_.b=_.a=0
_.d=-1
_.r=_.f=0
_.z=_.x=_.w=null
_.Q=""
_.at=null
_.ax=a
_.ch=1
_.cx=b
_.cy=c},
ft:function ft(a){var _=this
_.a=a
_.c=_.b=0
_.d=$
_.e=0},
cc:function cc(a,b){this.a=a
this.b=b},
cd:function cd(a){this.b=this.a=0
this.e=a},
iA:function iA(a){this.b=this.a=null
this.c=a},
lg:function lg(){},
iC:function iC(){this.a=null},
iE:function iE(){this.a=null},
bA:function bA(){},
iH:function iH(){this.a=null},
iI:function iI(){this.a=null},
iK:function iK(){this.a=null},
iL:function iL(){this.a=null},
fw:function fw(a){this.b=a},
iJ:function iJ(){},
li:function li(){var _=this
_.w=_.r=_.f=_.e=$},
cY:function cY(a){this.a=a
this.c=null},
pI(a){var s=new A.iF(A.H(t.p,t.ok))
s.jn(a)
return s},
o7(a,b,c,d){var s=a/255,r=b/255,q=c/255,p=d/255,o=r*(1-q),n=s*(1-p)
return B.b.j(B.b.L((2*s<q?2*r*s+o+n:p*q-2*(q-s)*(p-r)+o+n)*255,0,255))},
lj(a,b){if(b===0)return 0
return B.b.j(B.a.L(B.b.j(255*(1-(1-a/255)/(b/255))),0,255))},
ll(a,b){return B.b.j(B.a.L(a+b-255,0,255))},
o9(a,b){return B.b.j(B.a.L(255-(255-b)*(255-a),0,255))},
lk(a,b){if(b===255)return 255
return B.b.j(B.b.L(a/255/(1-b/255)*255,0,255))},
oa(a,b){var s=a/255,r=b/255,q=1-r
return B.b.cu(255*(q*r*s+r*(1-q*(1-s))))},
o5(a,b){var s=b/255,r=a/255
if(r<0.5)return B.b.cu(510*s*r)
else return B.b.cu(255*(1-2*(1-s)*(1-r)))},
ob(a,b){if(b<128)return A.lj(a,2*b)
else return A.lk(a,2*(b-128))},
o6(a,b){var s
if(b<128)return A.ll(a,2*b)
else{s=2*(b-128)
return s+a>255?255:a+s}},
o8(a,b){return b<128?Math.min(a,2*b):Math.max(a,2*(b-128))},
o4(a,b){return B.b.cu(b+a-2*b*a/255)},
aY(a,b,c){var s,r,q
if(a==null)s=0
else{s=a.length
if(c===1){if(!(b>=0&&b<s))return A.a(a,b)
s=a[b]}else{if(!(b>=0&&b<s))return A.a(a,b)
r=a[b]
q=b+1
if(!(q<s))return A.a(a,q)
q=(r<<8|a[q])>>>8
s=q}}return s},
pJ(b6,b7,b8,b9,c0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=null,b5=A.H(t.p,t.dS)
for(s=c0.length,r=0;q=c0.length,r<q;c0.length===s||(0,A.aI)(c0),++r){p=c0[r]
b5.h(0,p.a,p)}if(b7===8)o=1
else o=b7===16?2:-1
n=A.a0(b4,b4,B.h,0,B.k,b9,b4,0,q,b4,B.h,b8,!1)
if(o===-1)throw A.f(A.p("PSD: unsupported bit depth: "+A.t(b7)))
m=b5.k(0,0)
l=b5.k(0,1)
k=b5.k(0,2)
j=b5.k(0,-1)
i=-o
for(s=n.a,s=s.gJ(s),h=q>=5,g=q===4,f=q>=2,q=q>=4;s.B();){e=s.gK()
i+=o
switch(b6){case B.c4:e.sq(A.aY(m.c,i,o))
e.su(A.aY(l.c,i,o))
e.sA(A.aY(k.c,i,o))
e.sv(q?A.aY(j.c,i,o):255)
if(e.gv()!==0){e.sq((e.gq()+e.gv()-255)*255/e.gv())
e.su((e.gu()+e.gv()-255)*255/e.gv())
e.sA((e.gA()+e.gv()-255)*255/e.gv())}break
case B.c6:d=A.aY(m.c,i,o)
c=A.aY(l.c,i,o)
b=A.aY(k.c,i,o)
a=q?A.aY(j.c,i,o):255
a0=((d*100>>>8)+16)/116
a1=(c-128)/500+a0
a2=a0-(b-128)/200
a3=Math.pow(a0,3)
a0=a3>0.008856?a3:(a0-0.13793103448275862)/7.787
a4=Math.pow(a1,3)
a1=a4>0.008856?a4:(a1-0.13793103448275862)/7.787
a5=Math.pow(a2,3)
a2=a5>0.008856?a5:(a2-0.13793103448275862)/7.787
a1=a1*95.047/100
a0=a0*100/100
a2=a2*108.883/100
a6=a1*3.2406+a0*-1.5372+a2*-0.4986
a7=a1*-0.9689+a0*1.8758+a2*0.0415
a8=a1*0.0557+a0*-0.204+a2*1.057
a6=a6>0.0031308?1.055*Math.pow(a6,0.4166666666666667)-0.055:12.92*a6
a7=a7>0.0031308?1.055*Math.pow(a7,0.4166666666666667)-0.055:12.92*a7
a8=a8>0.0031308?1.055*Math.pow(a8,0.4166666666666667)-0.055:12.92*a8
a9=[B.b.j(B.b.L(a6*255,0,255)),B.b.j(B.b.L(a7*255,0,255)),B.b.j(B.b.L(a8*255,0,255))]
e.sq(a9[0])
e.su(a9[1])
e.sA(a9[2])
e.sv(a)
break
case B.c3:b0=A.aY(m.c,i,o)
a=f?A.aY(j.c,i,o):255
e.sq(b0)
e.su(b0)
e.sA(b0)
e.sv(a)
break
case B.c5:b1=A.aY(m.c,i,o)
b2=A.aY(l.c,i,o)
a0=A.aY(k.c,i,o)
b3=A.aY(b5.k(0,g?-1:3).c,i,o)
a=h?A.aY(j.c,i,o):255
a9=A.qR(255-b1,255-b2,255-a0,255-b3)
e.sq(a9[0])
e.su(a9[1])
e.sA(a9[2])
e.sv(a)
break
default:throw A.f(A.p("Unhandled color mode: "+A.t(b6)))}}return n},
bp:function bp(a,b){this.a=a
this.b=b},
iF:function iF(a){var _=this
_.b=_.a=0
_.d=_.c=null
_.e=$
_.r=_.f=null
_.x=_.w=$
_.y=null
_.z=a
_.as=$
_.ay=_.ax=_.at=null},
iG:function iG(){},
fv:function fv(a,b,c){var _=this
_.b=_.a=null
_.f=_.e=_.d=_.c=$
_.r=null
_.as=_.y=_.w=$
_.ay=a
_.ch=b
_.cx=null
_.cy=c},
tV(a,b){var s
switch(a){case"lsct":s=b.c-b.d
b.m()
if(s>=12){if(b.ak(4)!=="8BIM")A.a8(A.p("Invalid key in layer additional data"))
b.ak(4)}if(s>=16)b.m()
return new A.iJ()
default:return new A.fw(b)}},
dW:function dW(){},
iD:function iD(){this.a=null},
iM:function iM(){},
dY:function dY(a,b,c){this.a=a
this.b=b
this.c=c},
aN:function aN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dX:function dX(){var _=this
_.Q=_.z=_.y=_.f=_.d=_.b=_.a=0},
cZ:function cZ(a){var _=this
_.b=0
_.c=a
_.Q=_.r=_.f=0},
fx:function fx(){this.y=this.b=this.a=0},
bO(a,b){var s,r=a>>>8
if(!(r<256))return A.a(B.Z,r)
r=B.Z[r]
s=b>>>8
if(!(s<256))return A.a(B.Z,s)
return(r<<17|B.Z[s]<<16|B.Z[a&255]<<1|B.Z[b&255])>>>0},
be:function be(a){var _=this
_.a=a
_.b=0
_.c=!1
_.d=0
_.e=!1
_.f=0
_.r=!1},
iN:function iN(){this.b=this.a=null},
fE:function fE(a){var _=this
_.b=_.a=0
_.c=a
_.Q=_.z=_.y=_.x=_.f=_.e=0
_.as=null
_.ax=0},
aO:function aO(a,b){this.a=a
this.b=b},
iZ:function iZ(){this.a=null
this.b=$},
ly:function ly(a){this.a=a
this.c=this.b=0},
j0:function j0(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.f=e},
oh(a,b,c){var s=new A.lz(b,a),r=t.x
s.sfk(A.a1(b,null,!1,r))
s.sf0(A.a1(b,null,!1,r))
return s},
lz:function lz(a,b){var _=this
_.a=a
_.c=b
_.d=0
_.f=_.e=null
_.r=$
_.x=_.w=null
_.y=0
_.z=2
_.as=0
_.at=null},
j1:function j1(a,b,c,d){var _=this
_.a=a
_.c=_.b=0
_.d=b
_.r=_.f=_.e=1
_.w=c
_.x=d
_.y=!1
_.z=1
_.as=_.Q=$
_.ay=_.ax=0
_.CW=_.ch=null
_.cy=_.cx=$
_.dx=1
_.fr=_.dy=0
_.go=null
_.k2=_.k1=_.id=$},
d3:function d3(a,b){this.a=a
this.b=b},
an:function an(a,b){this.a=a
this.b=b},
bg:function bg(a,b){this.a=a
this.b=b},
j2:function j2(a){var _=this
_.b=_.a=0
_.d=null
_.f=a},
py(){return new A.l3(new Uint8Array(4096))},
l3:function l3(a){var _=this
_.a=9
_.d=_.c=_.b=0
_.w=_.r=_.f=_.e=$
_.x=a
_.z=_.y=$
_.Q=null
_.as=$},
j_:function j_(){this.a=null
this.c=$},
ok(a,b){var s=new Int32Array(4),r=new Int32Array(4),q=new Int8Array(4),p=new Int8Array(4),o=A.a1(8,null,!1,t.nX),n=A.a1(4,null,!1,t.nk)
return new A.lK(a,b,new A.lQ(),new A.lU(),new A.lM(s,r),new A.lW(q,p),o,n,new Uint8Array(4))},
pZ(a,b,c){if(c===0)if(a===0)return b===0?6:5
else return b===0?4:0
return c},
lK:function lK(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=$
_.d=null
_.e=$
_.f=c
_.r=d
_.w=e
_.x=f
_.z=_.y=$
_.ax=_.at=_.as=_.Q=null
_.ch=_.ay=$
_.cx=_.CW=null
_.cy=$
_.db=g
_.dy=h
_.fr=null
_.fy=_.fx=$
_.go=null
_.id=i
_.p3=_.p2=_.p1=_.ok=_.k4=_.k3=_.k2=_.k1=$
_.R8=_.p4=null
_.x2=_.x1=_.to=_.ry=_.rx=_.RG=$
_.xr=null
_.y2=_.y1=0
_.dc=$
_.c4=null
_.ia=_.f3=$
_.f4=null
_.f5=$},
lX:function lX(){},
pW(a){var s=new A.fH(a)
s.b=254
s.c=0
s.d=-8
return s},
fH:function fH(a){var _=this
_.a=a
_.d=_.c=_.b=$
_.e=!1},
F(a,b,c){return B.a.aH(B.a.l(a+2*b+c+2,2),32)},
uj(a){var s,r=A.b([A.F(J.d(a.a,a.d+-33),J.d(a.a,a.d+-32),J.d(a.a,a.d+-31)),A.F(J.d(a.a,a.d+-32),J.d(a.a,a.d+-31),J.d(a.a,a.d+-30)),A.F(J.d(a.a,a.d+-31),J.d(a.a,a.d+-30),J.d(a.a,a.d+-29)),A.F(J.d(a.a,a.d+-30),J.d(a.a,a.d+-29),J.d(a.a,a.d+-28))],t.t)
for(s=0;s<4;++s)a.c9(s*32,4,r)},
ub(a){var s=J.d(a.a,a.d+-33),r=J.d(a.a,a.d+-1),q=J.d(a.a,a.d+31),p=J.d(a.a,a.d+63),o=J.d(a.a,a.d+95),n=A.q(a,null,0),m=n.dl(),l=A.F(s,r,q)
m.$flags&2&&A.c(m)
if(0>=m.length)return A.a(m,0)
m[0]=16843009*l
n.d+=32
l=n.dl()
m=A.F(r,q,p)
l.$flags&2&&A.c(l)
if(0>=l.length)return A.a(l,0)
l[0]=16843009*m
n.d+=32
m=n.dl()
l=A.F(q,p,o)
m.$flags&2&&A.c(m)
if(0>=m.length)return A.a(m,0)
m[0]=16843009*l
n.d+=32
l=n.dl()
m=A.F(p,o,o)
l.$flags&2&&A.c(l)
if(0>=l.length)return A.a(l,0)
l[0]=16843009*m},
u9(a){var s,r,q,p
for(s=4,r=0;r<4;++r)s+=J.d(a.a,a.d+(r-32))+J.d(a.a,a.d+(-1+r*32))
s=B.a.l(s,3)
for(r=0;r<4;++r){q=a.a
p=a.d+r*32
J.bw(q,p,p+4,s)}},
ol(a,b){var s,r,q,p,o,n,m=255-J.d(a.a,a.d+-33)
for(s=0,r=0;r<b;++r){q=m+J.d(a.a,a.d+(s-1))
for(p=0;p<b;++p){o=$.b1()
n=q+J.d(a.a,a.d+(-32+p))
if(!(n>=0&&n<766))return A.a(o,n)
n=o[n]
J.D(a.a,a.d+(s+p),n)}s+=32}},
uh(a){A.ol(a,4)},
ui(a){A.ol(a,8)},
ug(a){A.ol(a,16)},
uf(a){var s,r=J.d(a.a,a.d+-1),q=J.d(a.a,a.d+31),p=J.d(a.a,a.d+63),o=J.d(a.a,a.d+95),n=J.d(a.a,a.d+-33),m=J.d(a.a,a.d+-32),l=J.d(a.a,a.d+-31),k=J.d(a.a,a.d+-30),j=J.d(a.a,a.d+-29)
a.h(0,96,A.F(q,p,o))
s=A.F(r,q,p)
a.h(0,97,s)
a.h(0,64,s)
s=A.F(n,r,q)
a.h(0,98,s)
a.h(0,65,s)
a.h(0,32,s)
s=A.F(m,n,r)
a.h(0,99,s)
a.h(0,66,s)
a.h(0,33,s)
a.h(0,0,s)
s=A.F(l,m,n)
a.h(0,67,s)
a.h(0,34,s)
a.h(0,1,s)
s=A.F(k,l,m)
a.h(0,35,s)
a.h(0,2,s)
a.h(0,3,A.F(j,k,l))},
ue(a){var s,r=J.d(a.a,a.d+-32),q=J.d(a.a,a.d+-31),p=J.d(a.a,a.d+-30),o=J.d(a.a,a.d+-29),n=J.d(a.a,a.d+-28),m=J.d(a.a,a.d+-27),l=J.d(a.a,a.d+-26),k=J.d(a.a,a.d+-25)
a.h(0,0,A.F(r,q,p))
s=A.F(q,p,o)
a.h(0,32,s)
a.h(0,1,s)
s=A.F(p,o,n)
a.h(0,64,s)
a.h(0,33,s)
a.h(0,2,s)
s=A.F(o,n,m)
a.h(0,96,s)
a.h(0,65,s)
a.h(0,34,s)
a.h(0,3,s)
s=A.F(n,m,l)
a.h(0,97,s)
a.h(0,66,s)
a.h(0,35,s)
s=A.F(m,l,k)
a.h(0,98,s)
a.h(0,67,s)
a.h(0,99,A.F(l,k,k))},
ul(a){var s=J.d(a.a,a.d+-1),r=J.d(a.a,a.d+31),q=J.d(a.a,a.d+63),p=J.d(a.a,a.d+-33),o=J.d(a.a,a.d+-32),n=J.d(a.a,a.d+-31),m=J.d(a.a,a.d+-30),l=J.d(a.a,a.d+-29),k=B.a.aH(B.a.l(p+o+1,1),32)
a.h(0,65,k)
a.h(0,0,k)
k=B.a.aH(B.a.l(o+n+1,1),32)
a.h(0,66,k)
a.h(0,1,k)
k=B.a.aH(B.a.l(n+m+1,1),32)
a.h(0,67,k)
a.h(0,2,k)
a.h(0,3,B.a.aH(B.a.l(m+l+1,1),32))
a.h(0,96,A.F(q,r,s))
a.h(0,64,A.F(r,s,p))
k=A.F(s,p,o)
a.h(0,97,k)
a.h(0,32,k)
k=A.F(p,o,n)
a.h(0,98,k)
a.h(0,33,k)
k=A.F(o,n,m)
a.h(0,99,k)
a.h(0,34,k)
a.h(0,35,A.F(n,m,l))},
uk(a){var s,r=J.d(a.a,a.d+-32),q=J.d(a.a,a.d+-31),p=J.d(a.a,a.d+-30),o=J.d(a.a,a.d+-29),n=J.d(a.a,a.d+-28),m=J.d(a.a,a.d+-27),l=J.d(a.a,a.d+-26),k=J.d(a.a,a.d+-25)
a.h(0,0,B.a.aH(B.a.l(r+q+1,1),32))
s=B.a.aH(B.a.l(q+p+1,1),32)
a.h(0,64,s)
a.h(0,1,s)
s=B.a.aH(B.a.l(p+o+1,1),32)
a.h(0,65,s)
a.h(0,2,s)
s=B.a.aH(B.a.l(o+n+1,1),32)
a.h(0,66,s)
a.h(0,3,s)
a.h(0,32,A.F(r,q,p))
s=A.F(q,p,o)
a.h(0,96,s)
a.h(0,33,s)
s=A.F(p,o,n)
a.h(0,97,s)
a.h(0,34,s)
s=A.F(o,n,m)
a.h(0,98,s)
a.h(0,35,s)
a.h(0,67,A.F(n,m,l))
a.h(0,99,A.F(m,l,k))},
uc(a){var s,r=J.d(a.a,a.d+-1),q=J.d(a.a,a.d+31),p=J.d(a.a,a.d+63),o=J.d(a.a,a.d+95)
a.h(0,0,B.a.aH(B.a.l(r+q+1,1),32))
s=B.a.aH(B.a.l(q+p+1,1),32)
a.h(0,32,s)
a.h(0,2,s)
s=B.a.aH(B.a.l(p+o+1,1),32)
a.h(0,64,s)
a.h(0,34,s)
a.h(0,1,A.F(r,q,p))
s=A.F(q,p,o)
a.h(0,33,s)
a.h(0,3,s)
s=A.F(p,o,o)
a.h(0,65,s)
a.h(0,35,s)
a.h(0,99,o)
a.h(0,98,o)
a.h(0,97,o)
a.h(0,96,o)
a.h(0,66,o)
a.h(0,67,o)},
ua(a){var s=J.d(a.a,a.d+-1),r=J.d(a.a,a.d+31),q=J.d(a.a,a.d+63),p=J.d(a.a,a.d+95),o=J.d(a.a,a.d+-33),n=J.d(a.a,a.d+-32),m=J.d(a.a,a.d+-31),l=J.d(a.a,a.d+-30),k=B.a.aH(B.a.l(s+o+1,1),32)
a.h(0,34,k)
a.h(0,0,k)
k=B.a.aH(B.a.l(r+s+1,1),32)
a.h(0,66,k)
a.h(0,32,k)
k=B.a.aH(B.a.l(q+r+1,1),32)
a.h(0,98,k)
a.h(0,64,k)
a.h(0,96,B.a.aH(B.a.l(p+q+1,1),32))
a.h(0,3,A.F(n,m,l))
a.h(0,2,A.F(o,n,m))
k=A.F(s,o,n)
a.h(0,35,k)
a.h(0,1,k)
k=A.F(r,s,o)
a.h(0,67,k)
a.h(0,33,k)
k=A.F(q,r,s)
a.h(0,99,k)
a.h(0,65,k)
a.h(0,97,A.F(p,q,r))},
uw(a){var s
for(s=0;s<16;++s)a.bt(s*32,16,a,-32)},
uu(a){var s,r,q,p,o
for(s=0,r=16;r>0;--r){q=J.d(a.a,a.d+(s-1))
p=a.a
o=a.d+s
J.bw(p,o,o+16,q)
s+=32}},
lO(a,b){var s,r,q
for(s=0;s<16;++s){r=b.a
q=b.d+s*32
J.bw(r,q,q+16,a)}},
um(a){var s,r
for(s=16,r=0;r<16;++r)s+=J.d(a.a,a.d+(-1+r*32))+J.d(a.a,a.d+(r-32))
A.lO(B.a.l(s,5),a)},
uo(a){var s,r
for(s=8,r=0;r<16;++r)s+=J.d(a.a,a.d+(-1+r*32))
A.lO(B.a.l(s,4),a)},
un(a){var s,r
for(s=8,r=0;r<16;++r)s+=J.d(a.a,a.d+(r-32))
A.lO(B.a.l(s,4),a)},
up(a){A.lO(128,a)},
ux(a){var s
for(s=0;s<8;++s)a.bt(s*32,8,a,-32)},
uv(a){var s,r,q,p,o
for(s=0,r=0;r<8;++r){q=J.d(a.a,a.d+(s-1))
p=a.a
o=a.d+s
J.bw(p,o,o+8,q)
s+=32}},
lP(a,b){var s,r,q
for(s=0;s<8;++s){r=b.a
q=b.d+s*32
J.bw(r,q,q+8,a)}},
uq(a){var s,r
for(s=8,r=0;r<8;++r)s+=J.d(a.a,a.d+(r-32))+J.d(a.a,a.d+(-1+r*32))
A.lP(B.a.l(s,4),a)},
ur(a){var s,r
for(s=4,r=0;r<8;++r)s+=J.d(a.a,a.d+(r-32))
A.lP(B.a.l(s,3),a)},
us(a){var s,r
for(s=4,r=0;r<8;++r)s+=J.d(a.a,a.d+(-1+r*32))
A.lP(B.a.l(s,3),a)},
ut(a){A.lP(128,a)},
cg(a,b,c,d,e){var s=b+c+d*32,r=J.d(a.a,a.d+s)+B.a.l(e,3)
if(!((r&-256)>>>0===0))r=r<0?0:255
a.h(0,s,r)},
lN(a,b,c,d,e){A.cg(a,0,0,b,c+d)
A.cg(a,0,1,b,c+e)
A.cg(a,0,2,b,c-e)
A.cg(a,0,3,b,c-d)},
ud(){var s,r,q,p
if(!$.pX){for(s=-255;s<=255;++s){r=$.jO()
q=255+s
p=s<0?-s:s
r.$flags&2&&A.c(r)
r[q]=p
p=$.nx()
r=B.a.l(r[q],1)
p.$flags&2&&A.c(p)
p[q]=r}for(s=-1020;s<=1020;++s){r=$.ny()
if(s<-128)q=-128
else q=s>127?127:s
r.$flags&2&&A.c(r)
r[1020+s]=q}for(s=-112;s<=112;++s){r=$.jP()
if(s<-16)q=-16
else q=s>15?15:s
r.$flags&2&&A.c(r)
r[112+s]=q}for(s=-255;s<=510;++s){r=$.b1()
if(s<0)q=0
else q=s>255?255:s
r.$flags&2&&A.c(r)
r[255+s]=q}$.pX=!0}},
lL:function lL(){},
u8(){var s,r=J.aM(3,t.D)
for(s=0;s<3;++s)r[s]=new Uint8Array(11)
return new A.fG(r)},
uM(){var s,r,q,p,o=new Uint8Array(3),n=J.aM(4,t.ac)
for(s=t.aO,r=0;r<4;++r){q=J.aM(8,s)
for(p=0;p<8;++p)q[p]=A.u8()
n[r]=q}B.f.aS(o,0,3,255)
return new A.lV(o,n)},
lQ:function lQ(){this.d=$},
lU:function lU(){},
lW:function lW(a,b){var _=this
_.b=_.a=!1
_.c=!0
_.d=a
_.e=b},
fG:function fG(a){this.a=a},
lV:function lV(a,b){this.a=a
this.b=b},
lM:function lM(a,b){var _=this
_.a=$
_.b=null
_.d=_.c=$
_.e=a
_.f=b},
bT:function bT(){var _=this
_.b=_.a=0
_.c=!1
_.d=0},
fJ:function fJ(){this.b=this.a=0},
jb:function jb(a,b,c){this.a=a
this.b=b
this.c=c},
fK:function fK(a,b){var _=this
_.a=a
_.b=$
_.c=b
_.e=_.d=null
_.f=$},
fL:function fL(a,b,c){this.a=a
this.b=b
this.c=c},
om(a,b){var s,r=A.b([],t.nK),q=A.b([],t.ip),p=new Uint32Array(2),o=new A.j9(a,p)
p=o.d=J.ac(B.m.gE(p),0,null)
s=a.G()
p.$flags&2&&A.c(p)
if(0>=p.length)return A.a(p,0)
p[0]=s
s=a.G()
p.$flags&2&&A.c(p)
if(1>=p.length)return A.a(p,1)
p[1]=s
s=a.G()
p.$flags&2&&A.c(p)
if(2>=p.length)return A.a(p,2)
p[2]=s
s=a.G()
p.$flags&2&&A.c(p)
if(3>=p.length)return A.a(p,3)
p[3]=s
s=a.G()
p.$flags&2&&A.c(p)
if(4>=p.length)return A.a(p,4)
p[4]=s
s=a.G()
p.$flags&2&&A.c(p)
if(5>=p.length)return A.a(p,5)
p[5]=s
s=a.G()
p.$flags&2&&A.c(p)
if(6>=p.length)return A.a(p,6)
p[6]=s
s=a.G()
p.$flags&2&&A.c(p)
if(7>=p.length)return A.a(p,7)
p[7]=s
return new A.fI(o,b,r,q)},
ch(a,b){return B.a.l(a+B.a.R(1,b)-1,b)},
fI:function fI(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=null
_.r=_.f=_.e=0
_.w=null
_.z=_.y=_.x=0
_.Q=null
_.as=0
_.at=c
_.ax=d
_.ay=0
_.ch=null
_.CW=$
_.db=_.cy=_.cx=null},
ib:function ib(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=null
_.r=_.f=_.e=0
_.w=null
_.z=_.y=_.x=0
_.Q=null
_.as=0
_.at=c
_.ax=d
_.ay=0
_.ch=null
_.CW=$
_.db=_.cy=_.cx=null},
j9:function j9(a,b){var _=this
_.a=0
_.b=a
_.c=b
_.d=$},
lR:function lR(a,b){this.a=a
this.b=b},
lS(a,b,c){var s
if(!(b<a.length))return A.a(a,b)
s=a[b]
a.$flags&2&&A.c(a)
a[b]=(((s&4278255360)>>>0)+((c&4278255360)>>>0)&4278255360|(s&16711935)+(c&16711935)&16711935)>>>0},
bU(a,b){return((a^b)>>>1&2139062143)+((a&b)>>>0)},
d7(a){if(a<0)return 0
if(a>255)return 255
return a},
lT(a,b,c){return Math.abs(b-c)-Math.abs(a-c)},
uy(a,b,c){return 4278190080},
uz(a,b,c){return b},
uE(a,b,c){if(!(c>=0&&c<a.length))return A.a(a,c)
return a[c]},
uF(a,b,c){var s=c+1
if(!(s>=0&&s<a.length))return A.a(a,s)
return a[s]},
uG(a,b,c){var s=c-1
if(!(s>=0&&s<a.length))return A.a(a,s)
return a[s]},
uH(a,b,c){var s,r,q=a.length
if(!(c>=0&&c<q))return A.a(a,c)
s=a[c]
r=c+1
if(!(r<q))return A.a(a,r)
return A.bU(A.bU(b,a[r]),s)},
uI(a,b,c){var s=c-1
if(!(s>=0&&s<a.length))return A.a(a,s)
return A.bU(b,a[s])},
uJ(a,b,c){if(!(c>=0&&c<a.length))return A.a(a,c)
return A.bU(b,a[c])},
uK(a,b,c){var s=c-1,r=a.length
if(!(s>=0&&s<r))return A.a(a,s)
s=a[s]
if(!(c>=0&&c<r))return A.a(a,c)
return A.bU(s,a[c])},
uL(a,b,c){var s,r,q=a.length
if(!(c>=0&&c<q))return A.a(a,c)
s=a[c]
r=c+1
if(!(r<q))return A.a(a,r)
return A.bU(s,a[r])},
uA(a,b,c){var s,r,q=c-1,p=a.length
if(!(q>=0&&q<p))return A.a(a,q)
q=a[q]
if(!(c>=0&&c<p))return A.a(a,c)
s=a[c]
r=c+1
if(!(r<p))return A.a(a,r)
r=a[r]
return A.bU(A.bU(b,q),A.bU(s,r))},
uB(a,b,c){var s,r,q=a.length
if(!(c>=0&&c<q))return A.a(a,c)
s=a[c]
r=c-1
if(!(r>=0&&r<q))return A.a(a,r)
r=a[r]
return A.lT(s>>>24,b>>>24,r>>>24)+A.lT(s>>>16&255,b>>>16&255,r>>>16&255)+A.lT(s>>>8&255,b>>>8&255,r>>>8&255)+A.lT(s&255,b&255,r&255)<=0?s:b},
uC(a,b,c){var s,r,q=a.length
if(!(c>=0&&c<q))return A.a(a,c)
s=a[c]
r=c-1
if(!(r>=0&&r<q))return A.a(a,r)
r=a[r]
return(A.d7((b>>>24)+(s>>>24)-(r>>>24))<<24|A.d7((b>>>16&255)+(s>>>16&255)-(r>>>16&255))<<16|A.d7((b>>>8&255)+(s>>>8&255)-(r>>>8&255))<<8|A.d7((b&255)+(s&255)-(r&255)))>>>0},
uD(a,b,c){var s,r,q,p,o,n=a.length
if(!(c>=0&&c<n))return A.a(a,c)
s=a[c]
r=c-1
if(!(r>=0&&r<n))return A.a(a,r)
r=a[r]
q=A.bU(b,s)
s=q>>>24
n=q>>>16&255
p=q>>>8&255
o=q>>>0&255
return(A.d7(s+B.a.Y(s-(r>>>24),2))<<24|A.d7(n+B.a.Y(n-(r>>>16&255),2))<<16|A.d7(p+B.a.Y(p-(r>>>8&255),2))<<8|A.d7(o+B.a.Y(o-(r&255),2)))>>>0},
d6:function d6(a,b){this.a=a
this.b=b},
ja:function ja(a){var _=this
_.a=a
_.c=_.b=0
_.d=null
_.e=0},
lY:function lY(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.f=_.e=_.d=0
_.r=1
_.w=!1
_.x=$
_.y=!1},
fM:function fM(){},
ic:function ic(a,b,c){var _=this
_.a=a
_.b=b
_.e=c
_.f=$
_.r=1
_.x=_.w=$},
pc(){var s=new Uint8Array(128),r=new Int16Array(128)
s=new A.hR(s,r,new Int16Array(128))
s.eI(0)
return s},
tn(){var s,r=J.aM(5,t.gP)
for(s=0;s<5;++s)r[s]=A.pc()
return new A.dy(r)},
hR:function hR(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=$
_.f=_.e=0},
dy:function dy(a){this.a=a},
e8:function e8(a,b){this.a=a
this.b=b},
e9:function e9(a,b){var _=this
_.b=_.a=0
_.e=_.d=!1
_.f=a
_.w=""
_.z=b
_.as=0
_.at=null
_.ch=_.ay=0},
eT:function eT(a,b){var _=this
_.b=_.a=0
_.e=_.d=!1
_.f=a
_.w=""
_.z=b
_.as=0
_.at=null
_.ch=_.ay=0},
jc:function jc(){this.b=this.a=null},
pd(a){return new A.eM(a.a,a.b,B.f.iY(a.c,0))},
kG:function kG(a,b){this.a=a
this.b=b},
eM:function eM(a,b,c){this.a=a
this.b=b
this.c=c},
a0(a,b,c,d,e,f,g,h,i,j,k,l,m){var s,r=new A.bM(null,null,null,a,h,e,d,0)
B.c.C(r.gbD(),r)
r.c=g
if(b!=null)r.e=A.hI(b)
s=!1
if(j==null)if(m)s=r.gM()===B.A||r.gM()===B.D||r.gM()===B.E||r.gM()===B.h||r.gM()===B.n
r.fX(l,f,c,i,s?r.k9(c,k,i):j)
return r},
po(a,b,c,d){var s,r,q,p=null,o=a.e
o=o==null?p:A.hI(o)
s=a.c
s=s==null?p:A.pd(s)
r=a.w
q=a.r
o=new A.bM(p,s,o,p,q,r,a.y,a.z)
o.jk(a,b,c,d)
return o},
hW(a,b,c){var s,r,q,p,o=null,n=a.a
n=n==null?o:n.br(c)
s=a.e
s=s==null?o:A.hI(s)
r=a.c
r=r==null?o:A.pd(r)
q=a.w
p=a.r
n=new A.bM(n,r,s,o,p,q,a.y,a.z)
n.jj(a,b,c)
return n},
hQ:function hQ(a,b){this.a=a
this.b=b},
bM:function bM(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=null
_.c=b
_.d=null
_.e=c
_.f=d
_.r=e
_.w=f
_.x=$
_.y=g
_.z=h},
kL:function kL(a,b){this.a=a
this.b=b},
kK:function kK(){},
av:function av(){},
tr(a,b,c){return new A.dD(new Uint16Array(a*b*c),a,b,c)},
dD:function dD(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
ts(a,b,c){return new A.dE(new Float32Array(a*b*c),a,b,c)},
dE:function dE(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
eN:function eN(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
eO:function eO(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
eP:function eP(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
eQ:function eQ(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
dF:function dF(a,b,c,d,e,f){var _=this
_.d=a
_.e=b
_.f=c
_.r=null
_.a=d
_.b=e
_.c=f},
dG:function dG(a,b,c,d,e){var _=this
_.d=a
_.e=b
_.a=c
_.b=d
_.c=e},
dH:function dH(a,b,c,d,e,f){var _=this
_.d=a
_.e=b
_.f=c
_.r=null
_.a=d
_.b=e
_.c=f},
tt(a,b,c){return new A.dI(new Uint32Array(a*b*c),a,b,c)},
dI:function dI(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
dJ:function dJ(a,b,c,d,e,f){var _=this
_.d=a
_.e=b
_.f=c
_.r=null
_.a=d
_.b=e
_.c=f},
pp(a,b,c){return new A.dK(new Uint8Array(a*b*c),null,a,b,c)},
dK:function dK(a,b,c,d,e){var _=this
_.d=a
_.e=b
_.a=c
_.b=d
_.c=e},
eU:function eU(a,b){this.a=a
this.b=b},
bd:function bd(){},
fh:function fh(a,b,c){this.c=a
this.a=b
this.b=c},
fi:function fi(a,b,c){this.c=a
this.a=b
this.b=c},
fj:function fj(a,b,c){this.c=a
this.a=b
this.b=c},
fk:function fk(a,b,c){this.c=a
this.a=b
this.b=c},
fl:function fl(a,b,c){this.c=a
this.a=b
this.b=c},
fm:function fm(a,b,c){this.c=a
this.a=b
this.b=c},
fn:function fn(a,b,c){this.c=a
this.a=b
this.b=c},
fo:function fo(a,b,c){this.c=a
this.a=b
this.b=c},
pB(a){return new A.bn(new Uint8Array(A.C(a.c)),a.a,a.b)},
bn:function bn(a,b,c){this.c=a
this.a=b
this.b=c},
nX(a){return new A.cL(-1,0,-a.c,a)},
cL:function cL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nY(a){return new A.cM(-1,0,-a.c,a)},
cM:function cM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nZ(a){return new A.cN(-1,0,-a.c,a)},
cN:function cN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
o_(a){return new A.cO(-1,0,-a.c,a)},
cO:function cO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
o0(a){return new A.cP(-1,0,-a.c,a)},
cP:function cP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
o1(a){return new A.cQ(-1,0,-a.c,a)},
cQ:function cQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bo(a,b,c,d,e){a.a2(b-1,c)
return new A.ix(a,b,b+d-1,c+e-1)},
ix:function ix(a,b,c,d){var _=this
_.a=a
_.b=b
_.d=c
_.e=d},
fp(a){return new A.cR(-1,0,0,-1,0,a)},
cR:function cR(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
o2(a){return new A.cS(-1,0,-a.c,a)},
cS:function cS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fq(a){return new A.cT(-1,0,0,-2,0,a)},
cT:function cT(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
o3(a){return new A.cU(-1,0,-a.c,a)},
cU:function cU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fr(a){return new A.cV(-1,0,0,-(a.c<<2>>>0),a)},
cV:function cV(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
lf(a){return new A.cW(-1,0,-a.c,a)},
cW:function cW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ad:function ad(){},
p(a){return new A.hX(a)},
hX:function hX(a){this.a=a},
u(a,b,c,d){var s=J.R(a),r=s.gn(a)
s=c==null?s.gn(a):d+c
return new A.ay(a,d,Math.min(r,s),d,b)},
q(a,b,c){var s=a.a,r=a.d,q=a.b,p=J.aq(s),o=b==null?a.c:a.d+c+b
return new A.ay(s,q,Math.min(p,o),r+c,a.e)},
ay:function ay(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ff(a,b){return new A.lc(a,new Uint8Array(b))},
lc:function lc(a,b){this.a=0
this.b=a
this.c=b},
e_:function e_(a,b){this.a=a
this.b=b},
qF(a){return a},
qN(a,b){var s,r,q,p,o,n,m,l
for(s=b.length,r=1;r<s;++r){if(b[r]==null||b[r-1]!=null)continue
for(;s>=1;s=q){q=s-1
if(b[q]!=null)break}p=new A.am("")
o=""+(a+"(")
p.a=o
n=A.Z(b)
m=n.i("d2<1>")
l=new A.d2(b,0,s,m)
l.jr(b,0,s,n.c)
m=o+new A.aC(l,m.i("l(U.E)").a(new A.mY()),m.i("aC<U.E,l>")).cp(0,", ")
p.a=m
p.a=m+("): part "+(r-1)+" was null, but part "+r+" was not.")
throw A.f(A.W(p.t(0),null))}},
kb:function kb(a){this.a=a},
kc:function kc(){},
kd:function kd(){},
mY:function mY(){},
dM:function dM(){},
iv(a,b){var s,r,q,p,o,n,m=b.iQ(a)
b.c8(a)
if(m!=null)a=B.d.aI(a,m.length)
s=t.s
r=A.b([],s)
q=A.b([],s)
s=a.length
if(s!==0){if(0>=s)return A.a(a,0)
p=b.bY(a.charCodeAt(0))}else p=!1
if(p){if(0>=s)return A.a(a,0)
B.c.C(q,a[0])
o=1}else{B.c.C(q,"")
o=0}for(n=o;n<s;++n)if(b.bY(a.charCodeAt(n))){B.c.C(r,B.d.I(a,o,n))
B.c.C(q,a[n])
o=n+1}if(o<s){B.c.C(r,B.d.aI(a,o))
B.c.C(q,"")}return new A.ld(b,m,r,q)},
ld:function ld(a,b,c,d){var _=this
_.a=a
_.b=b
_.d=c
_.e=d},
pC(a){return new A.iw(a)},
iw:function iw(a){this.a=a},
u3(){var s=null
if(A.j5().gbc()!=="file")return $.hs()
if(!B.d.aA(A.j5().gbu(),"/"))return $.hs()
if(A.qg(s,"a/b",s,s,s,s,s).ft()==="a\\b")return $.jN()
return $.rf()},
lw:function lw(){},
iB:function iB(a,b,c){this.d=a
this.e=b
this.f=c},
j6:function j6(a,b,c,d){var _=this
_.d=a
_.e=b
_.f=c
_.r=d},
jd:function jd(a,b,c,d){var _=this
_.d=a
_.e=b
_.f=c
_.r=d},
nI(a,b){if(b<0)A.a8(A.aE("Offset may not be negative, was "+b+"."))
else if(b>a.c.length)A.a8(A.aE("Offset "+b+u.s+a.gn(0)+"."))
return new A.hP(a,b)},
lp:function lp(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
hP:function hP(a,b){this.a=a
this.b=b},
ef:function ef(a,b,c){this.a=a
this.b=b
this.c=c},
to(a,b){var s=A.tp(A.b([A.v0(a,!0)],t.g7)),r=new A.kE(b).$0(),q=B.a.t(B.c.gbs(s).b+1),p=A.tq(s)?0:3,o=A.Z(s)
return new A.kk(s,r,null,1+Math.max(q.length,p),new A.aC(s,o.i("i(1)").a(new A.km()),o.i("aC<1,i>")).nn(0,B.ct),!A.xb(new A.aC(s,o.i("B?(1)").a(new A.kn()),o.i("aC<1,B?>"))),new A.am(""))},
tq(a){var s,r,q
for(s=0;s<a.length-1;){r=a[s];++s
q=a[s]
if(r.b+1!==q.b&&J.a_(r.c,q.c))return!1}return!0},
tp(a){var s,r,q,p=A.x2(a,new A.kp(),t.C,t.K)
for(s=p.gby(),r=A.k(s),s=new A.aB(J.ap(s.a),s.b,r.i("aB<1,2>")),r=r.y[1];s.B();){q=s.a
if(q==null)q=r.a(q)
J.oX(q,new A.kq())}s=p.gi7()
r=A.k(s)
q=r.i("eC<h.E,b8>")
return A.x(new A.eC(s,r.i("h<b8>(h.E)").a(new A.kr()),q),!0,q.i("h.E"))},
v0(a,b){var s=new A.mm(a).$0()
return new A.as(s,!0,null)},
v2(a){var s,r,q,p,o,n,m=a.gaT()
if(!B.d.av(m,"\r\n"))return a
s=a.gX().gaL()
for(r=m.length-1,q=0;q<r;++q)if(m.charCodeAt(q)===13&&m.charCodeAt(q+1)===10)--s
r=a.ga1()
p=a.gag()
o=a.gX().gar()
p=A.iR(s,a.gX().gaJ(),o,p)
o=A.hr(m,"\r\n","\n")
n=a.gbi()
return A.lq(r,p,o,A.hr(n,"\r\n","\n"))},
v3(a){var s,r,q,p,o,n,m
if(!B.d.aA(a.gbi(),"\n"))return a
if(B.d.aA(a.gaT(),"\n\n"))return a
s=B.d.I(a.gbi(),0,a.gbi().length-1)
r=a.gaT()
q=a.ga1()
p=a.gX()
if(B.d.aA(a.gaT(),"\n")){o=A.na(a.gbi(),a.gaT(),a.ga1().gaJ())
o.toString
o=o+a.ga1().gaJ()+a.gn(a)===a.gbi().length}else o=!1
if(o){r=B.d.I(a.gaT(),0,a.gaT().length-1)
if(r.length===0)p=q
else{o=a.gX().gaL()
n=a.gag()
m=a.gX().gar()
p=A.iR(o-1,A.q2(s),m-1,n)
q=a.ga1().gaL()===a.gX().gaL()?p:a.ga1()}}return A.lq(q,p,r,s)},
v1(a){var s,r,q,p,o
if(a.gX().gaJ()!==0)return a
if(a.gX().gar()===a.ga1().gar())return a
s=B.d.I(a.gaT(),0,a.gaT().length-1)
r=a.ga1()
q=a.gX().gaL()
p=a.gag()
o=a.gX().gar()
p=A.iR(q-1,s.length-B.d.fd(s,"\n")-1,o-1,p)
return A.lq(r,p,s,B.d.aA(a.gbi(),"\n")?B.d.I(a.gbi(),0,a.gbi().length-1):a.gbi())},
q2(a){var s,r=a.length
if(r===0)return 0
else{s=r-1
if(!(s>=0))return A.a(a,s)
if(a.charCodeAt(s)===10)return r===1?0:r-B.d.ea(a,"\n",r-2)-1
else return r-B.d.fd(a,"\n")-1}},
kk:function kk(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
kE:function kE(a){this.a=a},
km:function km(){},
kl:function kl(){},
kn:function kn(){},
kp:function kp(){},
kq:function kq(){},
kr:function kr(){},
ko:function ko(a){this.a=a},
kF:function kF(){},
ks:function ks(a){this.a=a},
kz:function kz(a,b,c){this.a=a
this.b=b
this.c=c},
kA:function kA(a,b){this.a=a
this.b=b},
kB:function kB(a){this.a=a},
kC:function kC(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
kx:function kx(a,b){this.a=a
this.b=b},
ky:function ky(a,b){this.a=a
this.b=b},
kt:function kt(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ku:function ku(a,b,c){this.a=a
this.b=b
this.c=c},
kv:function kv(a,b,c){this.a=a
this.b=b
this.c=c},
kw:function kw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kD:function kD(a,b,c){this.a=a
this.b=b
this.c=c},
as:function as(a,b,c){this.a=a
this.b=b
this.c=c},
mm:function mm(a){this.a=a},
b8:function b8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iR(a,b,c,d){if(a<0)A.a8(A.aE("Offset may not be negative, was "+a+"."))
else if(c<0)A.a8(A.aE("Line may not be negative, was "+c+"."))
else if(b<0)A.a8(A.aE("Column may not be negative, was "+b+"."))
return new A.bq(d,a,c,b)},
bq:function bq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iS:function iS(){},
iT:function iT(){},
u0(a,b,c){return new A.e2(c,a,b)},
iU:function iU(){},
e2:function e2(a,b,c){this.c=a
this.a=b
this.b=c},
e3:function e3(){},
lq(a,b,c,d){var s=new A.bQ(d,a,b,c)
s.jq(a,b,c)
if(!B.d.av(d,c))A.a8(A.W('The context line "'+d+'" must contain "'+c+'".',null))
if(A.na(d,c,a.gaJ())==null)A.a8(A.W('The span text "'+c+'" must start at column '+(a.gaJ()+1)+' in a line within "'+d+'".',null))
return s},
bQ:function bQ(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
iX:function iX(a,b,c){this.c=a
this.a=b
this.b=c},
lv:function lv(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.e=_.d=null},
uZ(a,b,c,d,e){var s
if(c==null)s=null
else{s=A.qO(new A.m8(c),t.m)
s=s==null?null:A.mW(s)}s=new A.fW(a,b,s,!1,e.i("fW<0>"))
s.hI()
return s},
qO(a,b){var s=$.K
if(s===B.q)return a
return s.mr(a,b)},
nF:function nF(a,b){this.a=a
this.$ti=b},
ee:function ee(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
fW:function fW(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
m8:function m8(a){this.a=a},
m9:function m9(a){this.a=a},
nb(a){var s=0,r=A.co(t.oF),q,p,o,n,m,l,k
var $async$nb=A.cp(function(b,c){if(b===1)return A.cl(c,r)
while(true)switch(s){case 0:s=3
return A.bZ(A.wY(A.lD("localhost:5000","/fetch-crew",A.dT(["id",a],t.N,t.z))),$async$nb)
case 3:k=c
if(k.b!==302){q=null
s=1
break}p=t.ea.a(B.aV.mC(A.qU(A.qw(k.e).c.a.k(0,"charset")).bk(k.w),null))
o=p.k(0,"Members")
o.toString
n=J.rM(t.j.a(o),t.av)
o=n.$ti
m=o.i("aC<y.E,cw>")
l=A.x(new A.aC(n,o.i("cw(y.E)").a(new A.nc()),m),!1,m.i("U.E"))
m=p.k(0,"Title")
m.toString
q=new A.hH(A.I(m),l)
s=1
break
case 1:return A.cm(q,r)}})
return A.cn($async$nb,r)},
nl(){var s=0,r=A.co(t.H),q,p,o,n,m,l,k,j,i
var $async$nl=A.cp(function(a,b){if(a===1)return A.cl(b,r)
while(true)switch(s){case 0:i=A.j5().gfl().k(0,"id")
if(i==null)throw A.f(new A.f4())
s=2
return A.bZ(A.nb(i),$async$nl)
case 2:q=b
if(q==null)throw A.f(new A.ew())
p=t.m
o=A.oD("crew-title",p)
o.disabled=!1
p.a(o.classList).add("show-border")
o.value=q.a
n=A.oD("crew-container",p)
for(m=q.b,l=m.length,k=0;k<m.length;m.length===l||(0,A.aI)(m),++k){j=m[k]
p.a(n.appendChild(A.r2(j.a,j.b,j.c)))}return A.cm(null,r)}})
return A.cn($async$nl,r)},
r2(a,b,c){var s,r,q,p,o,n,m,l,k,j="input",i="div",h=t.m,g=A.bt(j,h)
g.type="file"
g.accept="image/jpeg,image/png,image/webp"
s=A.bt(i,h)
s.className="crew-item-pic"
h.a(s.appendChild(g))
if(c!=null){s.setAttribute("data-pic",c)
A.r0(s)}A.ws(s)
r=A.bt(j,h)
r.name="name"
r.size=10
r.type="text"
q=a==null?"":a
r.value=q
r.className="crew-item-text-name"
p=A.bt("label",h)
p.htmlFor="role"
p.innerText="as"
p.className="role-label"
o=A.bt(j,h)
o.name="role"
o.size=10
o.type="text"
q=b==null?"":b
o.value=q
o.className="crew-item-text-role"
n=A.bt(i,h)
h.a(n.appendChild(p))
h.a(n.appendChild(o))
m=A.bt(i,h)
m.className="crew-item-text"
h.a(m.appendChild(r))
h.a(m.appendChild(n))
l=A.bt("button",h)
l.className="crew-item-delete-btn"
l.innerHTML='<svg fill="#ff0000" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 485 485" xml:space="preserve"><g><rect x="67.224" width="350.535" height="71.81"></rect><path d="M417.776,92.829H67.237V485h350.537V92.829H417.776z M165.402,431.447h-28.362V146.383h28.362V431.447z M256.689,431.447    h-28.363V146.383h28.363V431.447z M347.97,431.447h-28.361V146.383h28.361V431.447z"></path></g></svg>'
k=A.bt(i,h)
k.className="crew-item"
h.a(k.appendChild(s))
h.a(k.appendChild(m))
h.a(k.appendChild(l))
l.onclick=A.hm(new A.no(k))
return k},
nu(){var s=0,r=A.co(t.H),q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$nu=A.cp(function(a6,a7){if(a6===1)return A.cl(a7,r)
while(true)switch(s){case 0:a1=A.b([],t.e2)
a2=self
a3=t.m
a4=a3.a(a3.a(a2.document).getElementsByClassName("crew-item"))
a5=A.r(a4.length)
for(q=t.A,p=t.N,o=t.jv,n=0;n<a5;++n){m=A.H(p,o)
l=q.a(a4.item(n))
if(l==null)l=a3.a(l)
k=q.a(l.firstElementChild)
if(k==null)k=a3.a(k)
m.h(0,"ImageData",A.ej(k.getAttribute("data-pic")))
j=q.a(a3.a(l.children).item(1))
if(j==null)j=a3.a(j)
i=q.a(j.firstElementChild)
if(i==null)i=a3.a(i)
h=A.I(i.value)
m.h(0,"Name",h)
g=q.a(j.lastElementChild)
if(g==null)g=a3.a(g)
f=q.a(g.lastElementChild)
if(f==null)f=a3.a(f)
e=A.I(f.value)
m.h(0,"Role",e)
if(h===""||e==="")continue
B.c.C(a1,m)}d=A.I(A.oD("crew-title",a3).value)
o=A.j5().gfl().k(0,"id")
o.toString
s=2
return A.bZ(A.xh(A.wJ().$2("localhost:5000","/update-crew"),B.aV.mN(A.dT(["CrewID",o,"Members",a1,"Title",d],p,t.K),null),A.dT(["Authorization","heyyobruh","Content-Type","application/json"],p,p)),$async$nu)
case 2:c=a7
if(c.b!==200){b=A.bt("div",a3)
b.className="warning-container"
a=A.bt("div",a3)
a.className="warning-content"
a.innerText="Something went wrong!\n      Check your internet connection or contact us.\n      Error: "+A.cX(c)+" "+A.qU(A.qw(c.e).c.a.k(0,"charset")).bk(c.w)
a0=A.bt("button",a3)
a0.innerText="Dismiss"
a0.className="dismiss-btn"
a0.onclick=A.hm(new A.nv(b))
a3.a(a.appendChild(a0))
a3.a(b.appendChild(a))
a3.a(q.a(a3.a(a2.document).body).appendChild(b))}return A.cm(null,r)}})
return A.cn($async$nu,r)},
hH:function hH(a,b){this.a=a
this.b=b},
cw:function cw(a,b,c){this.a=a
this.b=b
this.c=c},
nc:function nc(){},
no:function no(a){this.a=a},
nv:function nv(a){this.a=a},
ew:function ew(){},
f4:function f4(){},
wr(){var s,r=self,q=t.m,p=t.A,o=p.a(q.a(r.document).getElementById("add-member"))
if(o==null)o=q.a(o)
s=p.a(q.a(r.document).getElementById("save-and-share"))
if(s==null)s=q.a(s)
o.addEventListener("click",A.hm(new A.n_()))
s.addEventListener("click",A.hm(new A.n0()))},
ws(a){a.addEventListener("dragover",A.mW(new A.n1()))
a.addEventListener("drop",A.mW(new A.n2(a)))
a.onchange=A.hm(new A.n3(a))},
n8(a){var s=0,r=A.co(t.H),q,p,o,n,m,l,k,j
var $async$n8=A.cp(function(b,c){if(b===1)return A.cl(c,r)
while(true)switch(s){case 0:l=t.A
k=l.a(a.firstElementChild)
if(A.I(k.value)===""){s=1
break}p=l.a(k.files)
o=p==null?null:l.a(p.item(0))
if(o==null){s=1
break}j=A
s=3
return A.bZ(A.xi(t.m.a(o.arrayBuffer()),t.hH),$async$n8)
case 3:n=j.nW(c,0,null)
m=A.wP(A.I(o.name),n)
if(m==null){s=1
break}a.setAttribute("data-pic",A.bC(m,0,null))
A.r0(a)
case 1:return A.cm(q,r)}})
return A.cn($async$n8,r)},
wt(){t.m.a(self.window).onbeforeunload=A.hm(new A.n4())},
n_:function n_(){},
n0:function n0(){},
n1:function n1(){},
n2:function n2(a){this.a=a},
n3:function n3(a){this.a=a},
n4:function n4(){},
u4(a){throw A.f(A.a2("Uint64List not supported on the web."))},
tu(a,b,c){return J.nB(a,b,c)},
pQ(a,b){return J.aU(a,b,null)},
tj(a){return J.oS(a,0,null)},
tk(a){return a.nH(0,0,null)},
r1(a,b,c){A.wB(c,t.E,"T","max")
return Math.max(c.a(a),c.a(b))},
dc(a,b){var s,r,q=J.R(a),p=q.gn(a)
b^=4294967295
for(s=0;p>=8;){r=s+1
b=B.F[(b^q.k(a,s))&255]^b>>>8
s=r+1
b=B.F[(b^q.k(a,r))&255]^b>>>8
r=s+1
b=B.F[(b^q.k(a,s))&255]^b>>>8
s=r+1
b=B.F[(b^q.k(a,r))&255]^b>>>8
r=s+1
b=B.F[(b^q.k(a,s))&255]^b>>>8
s=r+1
b=B.F[(b^q.k(a,r))&255]^b>>>8
r=s+1
b=B.F[(b^q.k(a,s))&255]^b>>>8
s=r+1
b=B.F[(b^q.k(a,r))&255]^b>>>8
p-=8}if(p>0)do{r=s+1
b=B.F[(b^q.k(a,s))&255]^b>>>8
if(--p,p>0){s=r
continue}else break}while(!0)
return(b^4294967295)>>>0},
x2(a,b,c,d){var s,r,q,p,o,n=A.H(d,c.i("n<0>"))
for(s=c.i("v<0>"),r=0;r<1;++r){q=a[r]
p=b.$1(q)
o=n.k(0,p)
if(o==null){o=A.b([],s)
n.h(0,p,o)
p=o}else p=o
J.oR(p,q)}return n},
qU(a){var s
if(a==null)return B.t
s=A.p4(a)
return s==null?B.t:s},
ra(a){return a},
xo(a){return a},
y4(a,b,c,d){var s,r,q,p
try{q=c.$0()
return q}catch(p){q=A.aR(p)
if(q instanceof A.e2){s=q
throw A.f(A.u0("Invalid "+a+": "+s.a,s.b,s.gdB()))}else if(t.lW.b(q)){r=q
throw A.f(A.ag("Invalid "+a+' "'+b+'": '+r.gio(),r.gdB(),r.gaL()))}else throw p}},
oC(a,b,c,d,e,f,g,h,i,j,k){var s,r,q,p,o,n,m,l
if(j==null)j=0
if(k==null)k=0
if(i==null)i=b.ga6()
if(h==null)h=b.gV()
if(e==null)e=a.ga6()<b.ga6()?a.ga6():b.ga6()
if(d==null)d=a.gV()<b.gV()?a.gV():b.gV()
s=c===B.au
if(!s&&a.ge8())a=a.i3(a.gcI())
r=h/d
q=i/e
p=t.p
o=J.aM(d,p)
for(n=0;n<d;++n)o[n]=k+B.b.j(n*r)
m=J.aM(e,p)
for(l=0;l<e;++l)m[l]=j+B.b.j(l*q)
if(s)A.vS(b,a,f,g,e,d,m,o,null,B.aX)
else A.vM(b,a,f,g,e,d,m,o,c,!1,null,B.aX)
return a},
vS(a,b,c,d,e,f,g,h,i,j){var s,r,q,p,o,n,m,l,k
for(s=g.length,r=h.length,q=null,p=0;p<f;++p)for(o=d+p,n=0;n<e;++n){if(!(n<s))return A.a(g,n)
m=g[n]
if(!(p<r))return A.a(h,p)
l=h[p]
k=a.a
q=k==null?null:k.a5(m,l,q)
if(q==null)q=new A.ad()
b.dw(c+n,o,q)}},
vM(a,b,c,d,e,f,g,h,i,j,a0,a1){var s,r,q,p,o,n,m,l,k
for(s=g.length,r=h.length,q=null,p=0;p<f;++p)for(o=d+p,n=0;n<e;++n){if(!(n<s))return A.a(g,n)
m=g[n]
if(!(p<r))return A.a(h,p)
l=h[p]
k=a.a
q=k==null?null:k.a5(m,l,q)
if(q==null)q=new A.ad()
A.wS(b,c+n,o,q,i,!1,a0,a1)}},
wS(a6,a7,a8,a9,b0,b1,b2,b3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
if(!a6.ij(a7,a8))return a6
if(b0===B.au||a6.ge8())if(a6.ij(a7,a8)){a6.fw(a7,a8).af(a9)
return a6}s=a9.gad()
r=a9.ga7()
q=a9.gac()
p=a9.gn(a9)<4?1:a9.gai()
if(p===0)return a6
o=a6.fw(a7,a8)
n=o.gad()
m=o.ga7()
l=o.gac()
k=o.gai()
switch(b0.a){case 0:return a6
case 1:break
case 2:s=Math.max(n,s)
r=Math.max(m,r)
q=Math.max(l,q)
break
case 3:s=1-(1-s)*(1-n)
r=1-(1-r)*(1-m)
q=1-(1-q)*(1-l)
break
case 4:j=p*k
i=1-k
h=1-p
g=s*i+n*h
f=r*i+m*h
e=q*i+l*h
h=B.b.L(p,0.01,1)
i=p<0
d=i?0:1
c=B.b.L(s/h*d,0,0.99)
d=B.b.L(p,0.01,1)
h=i?0:1
b=B.b.L(r/d*h,0,0.99)
h=B.b.L(p,0.01,1)
i=i?0:1
a=B.b.L(q/h*i,0,0.99)
i=n*p
h=m*p
d=l*p
a0=j<s*k+i?0:1
a1=j<r*k+h?0:1
a2=j<q*k+d?0:1
s=(j+g)*(1-a0)+(i/(1-c)+g)*a0
r=(j+f)*(1-a1)+(h/(1-b)+f)*a1
q=(j+e)*(1-a2)+(d/(1-a)+e)*a2
break
case 5:s=n+s
r=m+r
q=l+q
break
case 6:s=Math.min(n,s)
r=Math.min(m,r)
q=Math.min(l,q)
break
case 7:s=n*s
r=m*r
q=l*q
break
case 8:s=s!==0?1-(1-n)/s:0
r=r!==0?1-(1-m)/r:0
q=q!==0?1-(1-l)/q:0
break
case 9:i=1-k
h=1-p
d=s*i
a3=n*h
s=2*n<k?2*s*n+d+a3:p*k-2*(k-n)*(p-s)+d+a3
d=r*i
a3=m*h
r=2*m<k?2*r*m+d+a3:p*k-2*(k-m)*(p-r)+d+a3
i=q*i
h=l*h
q=2*l<k?2*q*l+i+h:p*k-2*(k-l)*(p-q)+i+h
break
case 10:i=k===0
if(i)s=0
else{h=n/k
s=n*(p*h+2*s*(1-h))+s*(1-k)+n*(1-p)}if(i)r=0
else{h=m/k
r=m*(p*h+2*r*(1-h))+r*(1-k)+m*(1-p)}if(i)q=0
else{i=l/k
q=l*(p*i+2*q*(1-i))+q*(1-k)+l*(1-p)}break
case 11:i=2*s
h=1-k
d=1-p
a3=s*h
a4=n*d
s=i<p?i*n+a3+a4:p*k-2*(k-n)*(p-s)+a3+a4
i=2*r
a3=r*h
a4=m*d
r=i<p?i*m+a3+a4:p*k-2*(k-m)*(p-r)+a3+a4
i=2*q
h=q*h
d=l*d
q=i<p?i*l+h+d:p*k-2*(k-l)*(p-q)+h+d
break
case 12:s=Math.abs(s-n)
r=Math.abs(r-m)
q=Math.abs(q-l)
break
case 13:s=n-s
r=m-r
q=l-q
break
case 14:s=s!==0?n/s:0
r=r!==0?m/r:0
q=q!==0?l/q:0
break}a5=1-p
o.sad(s*p+n*k*a5)
o.sa7(r*p+m*k*a5)
o.sac(q*p+l*k*a5)
o.sai(p+k*a5)
return a6},
wV(a,b,c,d,e,f,g){var s,r=B.b.L(Math.min(d,e),0,a.ga6()-1),q=B.b.L(Math.min(f,g),0,a.gV()-1),p=B.b.L(Math.max(d,e),0,a.ga6()-1),o=B.b.L(Math.max(f,g),0,a.gV()-1),n=a.a.bm(0,r,q,p-r+1,o-q+1)
for(s=n.a;n.B();)s.af(c)
return a},
tg(a6,a7,a8,a9,b0,b1,b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=b2<16384,a5=a8>b0?b0:a8
for(s=1;s<=a5;)s=s<<1>>>0
s=s>>>1
r=s>>>1
q=A.b([0,0],t.t)
for(p=a6.length,o=s,s=r;s>=1;o=s,s=r){n=a7+b1*(b0-o)
m=b1*s
l=b1*o
k=a9*s
j=a9*o
for(i=(a8&s)>>>0!==0,h=a9*(a8-o),g=a7;g<=n;g+=l){f=g+h
for(e=g;e<=f;e+=j){d=e+k
c=e+m
b=c+k
if(a4){if(!(e>=0&&e<p))return A.a(a6,e)
a=a6[e]
if(!(c>=0&&c<p))return A.a(a6,c)
A.eF(a,a6[c],q)
a0=q[0]
a1=q[1]
if(!(d>=0&&d<p))return A.a(a6,d)
a=a6[d]
if(!(b>=0&&b<p))return A.a(a6,b)
A.eF(a,a6[b],q)
a2=q[0]
a3=q[1]
A.eF(a0,a2,q)
a=q[0]
a6.$flags&2&&A.c(a6)
a6[e]=a
a6[d]=q[1]
A.eF(a1,a3,q)
a=q[0]
a6.$flags&2&&A.c(a6)
a6[c]=a
a6[b]=q[1]}else{if(!(e>=0&&e<p))return A.a(a6,e)
a=a6[e]
if(!(c>=0&&c<p))return A.a(a6,c)
A.eG(a,a6[c],q)
a0=q[0]
a1=q[1]
if(!(d>=0&&d<p))return A.a(a6,d)
a=a6[d]
if(!(b>=0&&b<p))return A.a(a6,b)
A.eG(a,a6[b],q)
a2=q[0]
a3=q[1]
A.eG(a0,a2,q)
a=q[0]
a6.$flags&2&&A.c(a6)
a6[e]=a
a6[d]=q[1]
A.eG(a1,a3,q)
a=q[0]
a6.$flags&2&&A.c(a6)
a6[c]=a
a6[b]=q[1]}}if(i){c=e+m
if(a4){if(!(e>=0&&e<p))return A.a(a6,e)
a=a6[e]
if(!(c>=0&&c<p))return A.a(a6,c)
A.eF(a,a6[c],q)
a0=q[0]
a=q[1]
a6.$flags&2&&A.c(a6)
a6[c]=a}else{if(!(e>=0&&e<p))return A.a(a6,e)
a=a6[e]
if(!(c>=0&&c<p))return A.a(a6,c)
A.eG(a,a6[c],q)
a0=q[0]
a=q[1]
a6.$flags&2&&A.c(a6)
a6[c]=a}a6.$flags&2&&A.c(a6)
if(!(e>=0&&e<p))return A.a(a6,e)
a6[e]=a0}}if((b0&s)>>>0!==0){f=g+h
for(e=g;e<=f;e+=j){d=e+k
if(a4){if(!(e>=0&&e<p))return A.a(a6,e)
i=a6[e]
if(!(d>=0&&d<p))return A.a(a6,d)
A.eF(i,a6[d],q)
a0=q[0]
i=q[1]
a6.$flags&2&&A.c(a6)
a6[d]=i}else{if(!(e>=0&&e<p))return A.a(a6,e)
i=a6[e]
if(!(d>=0&&d<p))return A.a(a6,d)
A.eG(i,a6[d],q)
a0=q[0]
i=q[1]
a6.$flags&2&&A.c(a6)
a6[d]=i}a6.$flags&2&&A.c(a6)
if(!(e>=0&&e<p))return A.a(a6,e)
a6[e]=a0}}r=s>>>1}},
eF(a,b,c){var s,r,q,p,o=$.aS()
o.$flags&2&&A.c(o)
o[0]=a
s=$.b2()
if(0>=s.length)return A.a(s,0)
r=s[0]
o[0]=b
q=s[0]
p=r+(q&1)+B.a.l(q,1)
B.c.h(c,0,p)
B.c.h(c,1,p-q)},
eG(a,b,c){var s=a-B.a.l(b,1)&65535
B.c.h(c,1,s)
B.c.h(c,0,b+s-32768&65535)},
wX(a){var s=a.toLowerCase()
if(B.d.aA(s,".jpg")||B.d.aA(s,".jpeg"))return new A.eZ()
if(B.d.aA(s,".png"))return new A.ft(A.nN())
if(B.d.aA(s,".tga"))return new A.iZ()
if(B.d.aA(s,".webp"))return new A.jc()
if(B.d.aA(s,".gif"))return A.pb()
if(B.d.aA(s,".tif")||B.d.aA(s,".tiff"))return new A.j_()
if(B.d.aA(s,".psd"))return new A.iD()
if(B.d.aA(s,".exr"))return new A.hM()
if(B.d.aA(s,".bmp"))return new A.es(!1)
if(B.d.aA(s,".ico"))return new A.hT()
if(B.d.aA(s,".pvr"))return new A.iN()
if(B.d.aA(s,".pnm")||B.d.aA(s,".pbm")||B.d.aA(s,".pgm")||B.d.aA(s,".ppm"))return new A.iA(A.b([],t.s))
return null},
wW(a){var s,r,q,p,o,n,m,l,k,j,i=null
if(A.pu().nw(a))return new A.eZ()
s=new A.ft(A.nN())
if(s.cG(a))return s
r=A.pb()
r.f=A.u(a,!1,i,0)
r.a=new A.eJ(A.b([],t.lM))
if(r.hc())return r
q=new A.jc()
if(q.cG(a))return q
p=new A.j_()
if(p.hx(A.u(a,!1,i,0))!=null)return p
if(A.pI(a).c===943870035)return new A.iD()
if(A.tf(a))return new A.hM()
if(A.nE(A.u(a,!1,i,0)))return new A.es(!1)
o=new A.iZ()
n=A.u(a,!1,i,0)
m=o.a=new A.fE(B.ar)
m.cr(n)
if(m.il())return o
l=new A.hT()
m=A.u(a,!1,i,0)
l.a=m
m=A.pe(m)
l.b=m
if(m!=null)return l
k=new A.iN()
if(k.b6(a)!=null)return k
j=new A.iA(A.b([],t.s))
if(j.cG(a))return j
return i},
wQ(a,b){var s=A.wX(a)
if(s!=null)return s.b2(b,null)
s=A.wW(b)
return s==null?null:s.b2(b,null)},
xj(a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
if($.ow==null){s=$.ow=new Uint8Array(768)
for(r=-256;r<0;++r)s[256+r]=0
for(r=0;r<256;++r)s[256+r]=r
for(r=256;r<512;++r)s[256+r]=255}for(s=a8.$flags|0,r=0;r<64;++r){q=a6[r]
p=a5[r]
s&2&&A.c(a8)
if(!(r<64))return A.a(a8,r)
a8[r]=q*p}for(o=0,r=0;r<8;++r,o+=8){q=1+o
if(!(q<64))return A.a(a8,q)
p=a8[q]
n=!1
if(p===0){m=2+o
if(!(m<64))return A.a(a8,m)
if(a8[m]===0){m=3+o
if(!(m<64))return A.a(a8,m)
if(a8[m]===0){m=4+o
if(!(m<64))return A.a(a8,m)
if(a8[m]===0){m=5+o
if(!(m<64))return A.a(a8,m)
if(a8[m]===0){m=6+o
if(!(m<64))return A.a(a8,m)
if(a8[m]===0){n=7+o
if(!(n<64))return A.a(a8,n)
n=a8[n]===0}}}}}}if(n){if(!(o<64))return A.a(a8,o)
q=B.a.l(5793*a8[o]+512,10)
l=(q&2147483647)-((q&2147483648)>>>0)
s&2&&A.c(a8)
if(!(o<64))return A.a(a8,o)
a8[o]=l
q=o+1
if(!(q<64))return A.a(a8,q)
a8[q]=l
q=o+2
if(!(q<64))return A.a(a8,q)
a8[q]=l
q=o+3
if(!(q<64))return A.a(a8,q)
a8[q]=l
q=o+4
if(!(q<64))return A.a(a8,q)
a8[q]=l
q=o+5
if(!(q<64))return A.a(a8,q)
a8[q]=l
q=o+6
if(!(q<64))return A.a(a8,q)
a8[q]=l
q=o+7
if(!(q<64))return A.a(a8,q)
a8[q]=l
continue}if(!(o<64))return A.a(a8,o)
n=B.a.l(5793*a8[o]+128,8)
k=(n&2147483647)-((n&2147483648)>>>0)
n=4+o
if(!(n<64))return A.a(a8,n)
m=B.a.l(5793*a8[n]+128,8)
j=(m&2147483647)-((m&2147483648)>>>0)
m=2+o
if(!(m<64))return A.a(a8,m)
i=a8[m]
h=6+o
if(!(h<64))return A.a(a8,h)
g=a8[h]
f=7+o
if(!(f<64))return A.a(a8,f)
e=a8[f]
d=B.a.l(2896*(p-e)+128,8)
c=(d&2147483647)-((d&2147483648)>>>0)
e=B.a.l(2896*(p+e)+128,8)
b=(e&2147483647)-((e&2147483648)>>>0)
e=3+o
if(!(e<64))return A.a(a8,e)
p=a8[e]<<4
a=(p&2147483647)-((p&2147483648)>>>0)
p=5+o
if(!(p<64))return A.a(a8,p)
d=a8[p]<<4
a0=(d&2147483647)-((d&2147483648)>>>0)
d=B.a.l(k-j+1,1)
l=(d&2147483647)-((d&2147483648)>>>0)
d=B.a.l(k+j+1,1)
k=(d&2147483647)-((d&2147483648)>>>0)
d=B.a.l(i*3784+g*1567+128,8)
d=(d&2147483647)-((d&2147483648)>>>0)
a1=B.a.l(i*1567-g*3784+128,8)
i=(a1&2147483647)-((a1&2147483648)>>>0)
a1=B.a.l(c-a0+1,1)
a1=(a1&2147483647)-((a1&2147483648)>>>0)
a2=B.a.l(c+a0+1,1)
c=(a2&2147483647)-((a2&2147483648)>>>0)
a2=B.a.l(b+a+1,1)
a2=(a2&2147483647)-((a2&2147483648)>>>0)
a3=B.a.l(b-a+1,1)
a=(a3&2147483647)-((a3&2147483648)>>>0)
a3=B.a.l(k-d+1,1)
a3=(a3&2147483647)-((a3&2147483648)>>>0)
d=B.a.l(k+d+1,1)
k=(d&2147483647)-((d&2147483648)>>>0)
d=B.a.l(l-i+1,1)
d=(d&2147483647)-((d&2147483648)>>>0)
a4=B.a.l(l+i+1,1)
j=(a4&2147483647)-((a4&2147483648)>>>0)
a4=B.a.l(c*2276+a2*3406+2048,12)
l=(a4&2147483647)-((a4&2147483648)>>>0)
a2=B.a.l(c*3406-a2*2276+2048,12)
c=(a2&2147483647)-((a2&2147483648)>>>0)
a2=B.a.l(a*799+a1*4017+2048,12)
a2=(a2&2147483647)-((a2&2147483648)>>>0)
a1=B.a.l(a*4017-a1*799+2048,12)
a=(a1&2147483647)-((a1&2147483648)>>>0)
s&2&&A.c(a8)
if(!(o<64))return A.a(a8,o)
a8[o]=k+l
if(!(f<64))return A.a(a8,f)
a8[f]=k-l
if(!(q<64))return A.a(a8,q)
a8[q]=j+a2
if(!(h<64))return A.a(a8,h)
a8[h]=j-a2
if(!(m<64))return A.a(a8,m)
a8[m]=d+a
if(!(p<64))return A.a(a8,p)
a8[p]=d-a
if(!(e<64))return A.a(a8,e)
a8[e]=a3+c
if(!(n<64))return A.a(a8,n)
a8[n]=a3-c}for(r=0;r<8;++r){q=8+r
p=a8[q]
if(p===0&&a8[16+r]===0&&a8[24+r]===0&&a8[32+r]===0&&a8[40+r]===0&&a8[48+r]===0&&a8[56+r]===0){p=B.a.l(5793*a8[r]+8192,14)
l=(p&2147483647)-((p&2147483648)>>>0)
s&2&&A.c(a8)
if(!(r<64))return A.a(a8,r)
a8[r]=l
if(!(q<64))return A.a(a8,q)
a8[q]=l
q=16+r
if(!(q<64))return A.a(a8,q)
a8[q]=l
q=24+r
if(!(q<64))return A.a(a8,q)
a8[q]=l
q=32+r
if(!(q<64))return A.a(a8,q)
a8[q]=l
q=40+r
if(!(q<64))return A.a(a8,q)
a8[q]=l
q=48+r
if(!(q<64))return A.a(a8,q)
a8[q]=l
q=56+r
if(!(q<64))return A.a(a8,q)
a8[q]=l
continue}n=B.a.l(5793*a8[r]+2048,12)
k=(n&2147483647)-((n&2147483648)>>>0)
n=32+r
m=B.a.l(5793*a8[n]+2048,12)
j=(m&2147483647)-((m&2147483648)>>>0)
m=16+r
i=a8[m]
h=48+r
g=a8[h]
f=56+r
e=a8[f]
d=B.a.l(2896*(p-e)+2048,12)
c=(d&2147483647)-((d&2147483648)>>>0)
e=B.a.l(2896*(p+e)+2048,12)
b=(e&2147483647)-((e&2147483648)>>>0)
e=24+r
a=a8[e]
p=40+r
a0=a8[p]
d=B.a.l(k-j+1,1)
l=(d&2147483647)-((d&2147483648)>>>0)
d=B.a.l(k+j+1,1)
k=(d&2147483647)-((d&2147483648)>>>0)
d=B.a.l(i*3784+g*1567+2048,12)
d=(d&2147483647)-((d&2147483648)>>>0)
a1=B.a.l(i*1567-g*3784+2048,12)
i=(a1&2147483647)-((a1&2147483648)>>>0)
a1=B.a.l(c-a0+1,1)
a1=(a1&2147483647)-((a1&2147483648)>>>0)
a2=B.a.l(c+a0+1,1)
c=(a2&2147483647)-((a2&2147483648)>>>0)
a2=B.a.l(b+a+1,1)
a2=(a2&2147483647)-((a2&2147483648)>>>0)
a3=B.a.l(b-a+1,1)
a=(a3&2147483647)-((a3&2147483648)>>>0)
a3=B.a.l(k-d+1,1)
a3=(a3&2147483647)-((a3&2147483648)>>>0)
d=B.a.l(k+d+1,1)
k=(d&2147483647)-((d&2147483648)>>>0)
d=B.a.l(l-i+1,1)
d=(d&2147483647)-((d&2147483648)>>>0)
a4=B.a.l(l+i+1,1)
j=(a4&2147483647)-((a4&2147483648)>>>0)
a4=B.a.l(c*2276+a2*3406+2048,12)
l=(a4&2147483647)-((a4&2147483648)>>>0)
a2=B.a.l(c*3406-a2*2276+2048,12)
c=(a2&2147483647)-((a2&2147483648)>>>0)
a2=B.a.l(a*799+a1*4017+2048,12)
a2=(a2&2147483647)-((a2&2147483648)>>>0)
a1=B.a.l(a*4017-a1*799+2048,12)
a=(a1&2147483647)-((a1&2147483648)>>>0)
s&2&&A.c(a8)
if(!(r<64))return A.a(a8,r)
a8[r]=k+l
if(!(f<64))return A.a(a8,f)
a8[f]=k-l
a8[q]=j+a2
a8[h]=j-a2
a8[m]=d+a
a8[p]=d-a
a8[e]=a3+c
a8[n]=a3-c}for(s=$.ow,q=a7.$flags|0,r=0;r<64;++r){s.toString
p=B.a.l(a8[r]+8,4)
p=384+((p&2147483647)-((p&2147483648)>>>0))
if(!(p>=0&&p<768))return A.a(s,p)
p=s[p]
q&2&&A.c(a7)
if(!(r<64))return A.a(a7,r)
a7[r]=p}},
wZ(e5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2=null,e3="ifd0",e4=e5.r
if(e4.k(0,e3).a.a_(274)){s=e4.k(0,e3).a.k(0,274)
s=s==null?e2:s.j(0)
s.toString
r=s}else r=0
s=e5.d
q=s.e
q.toString
s=s.d
s.toString
p=r>=5&&r<=8
if(p)o=s
else o=q
if(p)n=q
else n=s
m=A.a0(e2,e2,B.h,0,B.k,n,e2,0,3,e2,B.h,o,!1)
m.e=A.hI(e4)
m.gi8().k(0,e3).a.cs(0,274)
l=s-1
k=q-1
e4=e5.Q
s=e4.length
switch(s){case 1:if(0>=s)return A.a(e4,0)
j=e4[0]
i=j.e
h=j.f
g=j.r
e4=r===8
s=r===7
q=r===6
f=r===5
e=r===4
d=r===3
c=r===2
b=i.length
a=0
while(!0){a0=e5.d.d
a0.toString
if(!(a<a0))break
a1=B.a.ab(a,g)
if(!(a1<b))return A.a(i,a1)
a2=i[a1]
a0=l-a
a3=0
while(!0){a4=e5.d.e
a4.toString
if(!(a3<a4))break
a5=B.a.ab(a3,h)
if(!(a5<a2.length))return A.a(a2,a5)
a6=a2[a5]
if(c){a4=m.a
if(a4!=null)a4.T(k-a3,a,a6,a6,a6)}else if(d){a4=m.a
if(a4!=null)a4.T(k-a3,a0,a6,a6,a6)}else if(e){a4=m.a
if(a4!=null)a4.T(a3,a0,a6,a6,a6)}else if(f){a4=m.a
if(a4!=null)a4.T(a,a3,a6,a6,a6)}else if(q){a4=m.a
if(a4!=null)a4.T(a0,a3,a6,a6,a6)}else if(s){a4=m.a
if(a4!=null)a4.T(a0,k-a3,a6,a6,a6)}else{a4=m.a
if(e4){if(a4!=null)a4.T(a,k-a3,a6,a6,a6)}else if(a4!=null)a4.T(a3,a,a6,a6,a6)}++a3}++a}break
case 3:if(0>=s)return A.a(e4,0)
j=e4[0]
if(1>=s)return A.a(e4,1)
a7=e4[1]
if(2>=s)return A.a(e4,2)
a8=e4[2]
a9=j.e
b0=a7.e
b1=a8.e
h=j.f
g=j.r
b2=a7.f
b3=a7.r
b4=a8.f
b5=a8.r
e4=r===8
s=r===7
q=r===6
f=r===5
e=r===4
d=r===3
c=r===2
b=a9.length
a0=b0.length
a4=b1.length
a=0
while(!0){b6=e5.d.d
b6.toString
if(!(a<b6))break
a1=B.a.ab(a,g)
b7=B.a.ab(a,b3)
b8=B.a.ab(a,b5)
if(!(a1<b))return A.a(a9,a1)
a2=a9[a1]
if(!(b7<a0))return A.a(b0,b7)
b9=b0[b7]
if(!(b8<a4))return A.a(b1,b8)
c0=b1[b8]
b6=l-a
a3=0
while(!0){c1=e5.d.e
c1.toString
if(!(a3<c1))break
a5=B.a.ab(a3,h)
c2=B.a.ab(a3,b2)
c3=B.a.ab(a3,b4)
if(!(a5<a2.length))return A.a(a2,a5)
a6=a2[a5]<<8>>>0
if(!(c2<b9.length))return A.a(b9,c2)
c4=b9[c2]-128
if(!(c3<c0.length))return A.a(c0,c3)
c5=c0[c3]-128
c1=B.a.l(a6+359*c5+128,8)
c6=B.a.L((c1&2147483647)-((c1&2147483648)>>>0),0,255)
c1=B.a.l(a6-88*c4-183*c5+128,8)
c7=B.a.L((c1&2147483647)-((c1&2147483648)>>>0),0,255)
c1=B.a.l(a6+454*c4+128,8)
c8=B.a.L((c1&2147483647)-((c1&2147483648)>>>0),0,255)
if(c){c1=m.a
if(c1!=null)c1.T(k-a3,a,c6,c7,c8)}else if(d){c1=m.a
if(c1!=null)c1.T(k-a3,b6,c6,c7,c8)}else if(e){c1=m.a
if(c1!=null)c1.T(a3,b6,c6,c7,c8)}else if(f){c1=m.a
if(c1!=null)c1.T(a,a3,c6,c7,c8)}else if(q){c1=m.a
if(c1!=null)c1.T(b6,a3,c6,c7,c8)}else if(s){c1=m.a
if(c1!=null)c1.T(b6,k-a3,c6,c7,c8)}else{c1=m.a
if(e4){if(c1!=null)c1.T(a,k-a3,c6,c7,c8)}else if(c1!=null)c1.T(a3,a,c6,c7,c8)}++a3}++a}break
case 4:q=e5.c
if(q==null)throw A.f(A.p("Unsupported color mode (4 components)"))
q=q.d===0
if(0>=s)return A.a(e4,0)
j=e4[0]
if(1>=s)return A.a(e4,1)
a7=e4[1]
if(2>=s)return A.a(e4,2)
a8=e4[2]
if(3>=s)return A.a(e4,3)
c9=e4[3]
a9=j.e
b0=a7.e
b1=a8.e
d0=c9.e
h=j.f
g=j.r
b2=a7.f
b3=a7.r
b4=a8.f
b5=a8.r
d1=c9.f
d2=c9.r
e4=r===8
s=r===7
f=r===6
e=r===5
d=r===4
c=r===3
b=r===2
a0=a9.length
a4=b0.length
b6=b1.length
c1=d0.length
a=0
while(!0){d3=e5.d.d
d3.toString
if(!(a<d3))break
a1=B.a.ab(a,g)
b7=B.a.ab(a,b3)
b8=B.a.ab(a,b5)
d4=B.a.ab(a,d2)
if(!(a1<a0))return A.a(a9,a1)
a2=a9[a1]
if(!(b7<a4))return A.a(b0,b7)
b9=b0[b7]
if(!(b8<b6))return A.a(b1,b8)
c0=b1[b8]
if(!(d4<c1))return A.a(d0,d4)
d5=d0[d4]
d3=l-a
a3=0
while(!0){d6=e5.d.e
d6.toString
if(!(a3<d6))break
a5=B.a.ab(a3,h)
c2=B.a.ab(a3,b2)
c3=B.a.ab(a3,b4)
d7=B.a.ab(a3,d1)
if(q){if(!(a5<a2.length))return A.a(a2,a5)
d8=a2[a5]
if(!(c2<b9.length))return A.a(b9,c2)
d9=b9[c2]
if(!(c3<c0.length))return A.a(c0,c3)
a6=c0[c3]
if(!(d7<d5.length))return A.a(d5,d7)
e0=d5[d7]}else{if(!(a5<a2.length))return A.a(a2,a5)
a6=a2[a5]
if(!(c2<b9.length))return A.a(b9,c2)
c4=b9[c2]
if(!(c3<c0.length))return A.a(c0,c3)
c5=c0[c3]
if(!(d7<d5.length))return A.a(d5,d7)
e0=d5[d7]
d6=c5-128
d8=255-B.a.L(B.b.j(a6+1.402*d6),0,255)
e1=c4-128
d9=255-B.b.j(B.b.L(a6-0.3441363*e1-0.71413636*d6,0,255))
a6=255-B.a.L(B.b.j(a6+1.772*e1),0,255)}d6=B.a.l(d8*e0,8)
c6=(d6&2147483647)-((d6&2147483648)>>>0)
d6=B.a.l(d9*e0,8)
c7=(d6&2147483647)-((d6&2147483648)>>>0)
d6=B.a.l(a6*e0,8)
c8=(d6&2147483647)-((d6&2147483648)>>>0)
if(b){d6=m.a
if(d6!=null)d6.T(k-a3,a,c6,c7,c8)}else if(c){d6=m.a
if(d6!=null)d6.T(k-a3,d3,c6,c7,c8)}else if(d){d6=m.a
if(d6!=null)d6.T(a3,d3,c6,c7,c8)}else if(e){d6=m.a
if(d6!=null)d6.T(a,a3,c6,c7,c8)}else if(f){d6=m.a
if(d6!=null)d6.T(d3,a3,c6,c7,c8)}else if(s){d6=m.a
if(d6!=null)d6.T(d3,k-a3,c6,c7,c8)}else{d6=m.a
if(e4){if(d6!=null)d6.T(a,k-a3,c6,c7,c8)}else if(d6!=null)d6.T(a3,a,c6,c7,c8)}++a3}++a}break
default:throw A.f(A.p("Unsupported color mode"))}return m},
uR(a,b,c,d,e,f){A.uO(f,a,b,c,d,e,!0,f)},
uS(a,b,c,d,e,f){A.uP(f,a,b,c,d,e,!0,f)},
uQ(a,b,c,d,e,f){A.uN(f,a,b,c,d,e,!0,f)},
e7(a,b,c,d,e){var s,r,q
for(s=0;s<d;++s){r=J.d(a.a,a.d+s)
q=J.d(b.a,b.d+s)
J.D(c.a,c.d+s,r+q)}},
uO(a,b,c,d,e,f,g,h){var s,r,q=null,p=e*d,o=e+f,n=A.u(a,!1,q,p),m=A.u(a,!1,q,p),l=A.q(m,q,0)
if(e===0){m.h(0,0,J.d(n.a,n.d))
A.e7(A.q(n,q,1),l,A.q(m,q,1),b-1,!0)
l.d+=d
n.d+=d
m.d+=d
e=1}for(s=-d,r=b-1;e<o;){A.e7(n,A.q(l,q,s),m,1,!0)
A.e7(A.q(n,q,1),l,A.q(m,q,1),r,!0);++e
l.d+=d
n.d+=d
m.d+=d}},
uP(a,b,c,d,e,f,g,h){var s=null,r=e*d,q=e+f,p=A.u(a,!1,s,r),o=A.u(h,!1,s,r),n=A.q(o,s,0)
if(e===0){o.h(0,0,J.d(p.a,p.d))
A.e7(A.q(p,s,1),n,A.q(o,s,1),b-1,!0)
p.d+=d
o.d+=d
e=1}else n.d-=d
for(;e<q;){A.e7(p,n,o,b,!0);++e
n.d+=d
p.d+=d
o.d+=d}},
uN(a,b,c,d,e,f,g,h){var s,r,q,p,o,n=null,m=e*d,l=e+f,k=A.u(a,!1,n,m),j=A.u(h,!1,n,m),i=A.q(j,n,0)
if(e===0){j.h(0,0,J.d(k.a,k.d))
A.e7(A.q(k,n,1),i,A.q(j,n,1),b-1,!0)
i.d+=d
k.d+=d
j.d+=d
e=1}for(s=-d;e<l;){A.e7(k,A.q(i,n,s),j,1,!0)
for(r=1;r<b;++r){q=r-d
p=J.d(i.a,i.d+(r-1))+J.d(i.a,i.d+q)-J.d(i.a,i.d+(q-1))
if((p&4294967040)>>>0===0)o=p
else o=p<0?0:255
q=J.d(k.a,k.d+r)
J.D(j.a,j.d+r,q+o)}++e
i.d+=d
k.d+=d
j.d+=d}},
wI(a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=null
if(a4<=0)throw A.f(A.p("Invalid size"))
if(a2.ge8())a3=B.b7
if(a2.ga6()<a2.gV()){s=B.b.j(a4*(a2.gV()/a2.ga6()))
r=a4}else{r=a2.ga6()>a2.gV()?B.b.j(a4*(a2.ga6()/a2.gV())):a4
s=a4}q=a2.gV()/s
p=a2.ga6()/r
o=B.a.Y(r-a4,2)
n=B.a.Y(s-a4,2)
m=a3===B.b7
if(m)l=new Int32Array(a4)
else l=a1
if(l!=null)for(k=l.$flags|0,j=0;j<a4;++j){i=B.b.j((j+o)*p)
k&2&&A.c(l)
if(!(j<l.length))return A.a(l,j)
l[j]=i}for(k=a2.gbD(),i=k.length,h=a1,g=0;g<k.length;k.length===i||(0,A.aI)(k),++g){f=k[g]
e=h==null
d=e?a1:h.mo()
if(d==null)d=A.po(f,a4,!0,a4)
if(e)h=d
if(m)for(c=0;c<a4;++c){b=B.b.j((c+n)*q)
for(j=0;j<a4;++j){if(!(j<l.length))return A.a(l,j)
e=l[j]
a=f.a
e=a==null?a1:a.a5(e,b,a1)
d.dw(j,c,e==null?new A.ad():e)}}else for(e=d.a,e=e.gJ(e);e.B();){a0=e.gK()
a0.af(f.iO(a0.gb4()*p,a0.gaX()*q,a3))}}h.toString
return h},
n6(a){var s
a=(a&-a)>>>0
s=a!==0?31:32
if((a&65535)!==0)s-=16
if((a&16711935)!==0)s-=8
if((a&252645135)!==0)s-=4
if((a&858993459)!==0)s-=2
return(a&1431655765)!==0?s-1:s},
xq(a){$.oO().h(0,0,a)
return $.rx().k(0,0)},
r7(a,b,c,d){return(B.a.L(a,0,255)|B.a.L(b,0,255)<<8|B.a.L(c,0,255)<<16|B.a.L(d,0,255)<<24)>>>0},
bs(a,b,c){var s,r,q,p,o,n=b.gn(b),m=b.gM(),l=a.gS(),k=l==null?null:l.gM()
if(k==null)k=a.gM()
s=a.gn(a)
if(n===1){r=a.gn(a)>2?a.gau():a.k(0,0)
b.h(0,0,A.jI(A.jD(a.k(0,0))?B.b.c5(r):r,k,m))}else if(n<=s)for(q=0;q<n;++q)b.h(0,q,A.jI(a.k(0,q),k,m))
else if(s===2){p=A.jI(a.k(0,0),k,m)
if(n===3){b.h(0,0,p)
b.h(0,1,p)
b.h(0,2,p)}else{c=A.jI(a.k(0,1),k,m)
b.h(0,0,p)
b.h(0,1,p)
b.h(0,2,p)
b.h(0,3,c)}}else{for(q=0;q<s;++q)b.h(0,q,A.jI(a.k(0,q),k,m))
o=s===1?b.k(0,0):0
for(q=s;q<n;++q)b.h(0,q,q===3?c:o)}return b},
b0(a,b,c,d,e){var s,r,q=a.gS(),p=q==null?null:q.gM()
if(p==null)p=a.gM()
q=e==null
s=q?null:e.gM()
c=s==null?c:s
if(c==null)c=a.gM()
s=q?null:e.gn(e)
d=s==null?d:s
if(d==null)d=a.gn(a)
if(b==null)b=0
if(c===p&&d===a.gn(a)){if(q)return a.P()
e.af(a)
return e}switch(c.a){case 3:if(q)r=new A.bI(new Uint8Array(d))
else r=e
return A.bs(a,r,b)
case 0:return A.bs(a,q?new A.dq(d,0):e,b)
case 1:return A.bs(a,q?new A.ds(d,0):e,b)
case 2:if(q){q=d<3?1:2
r=new A.du(d,new Uint8Array(q))}else r=e
return A.bs(a,r,b)
case 4:if(q)r=new A.dr(new Uint16Array(d))
else r=e
return A.bs(a,r,b)
case 5:if(q)r=new A.dt(new Uint32Array(d))
else r=e
return A.bs(a,r,b)
case 6:if(q)r=new A.dn(new Int8Array(d))
else r=e
return A.bs(a,r,b)
case 7:if(q)r=new A.dl(new Int16Array(d))
else r=e
return A.bs(a,r,b)
case 8:if(q)r=new A.dm(new Int32Array(d))
else r=e
return A.bs(a,r,b)
case 9:if(q)r=new A.di(new Uint16Array(d))
else r=e
return A.bs(a,r,b)
case 10:if(q)r=new A.dj(new Float32Array(d))
else r=e
return A.bs(a,r,b)
case 11:if(q)r=new A.dk(new Float64Array(d))
else r=e
return A.bs(a,r,b)}},
ab(a){return 0.299*a.gq()+0.587*a.gu()+0.114*a.gA()},
qR(a,b,c,d){var s=1-d/255
return A.b([B.b.cu(255*(1-a/255)*s),B.b.cu(255*(1-b/255)*s),B.b.cu(255*(1-c/255)*s)],t.t)},
N(a){var s,r,q,p=$.oN()
p.$flags&2&&A.c(p)
p[0]=a
p=$.rw()
if(0>=p.length)return A.a(p,0)
s=p[0]
if(a===0)return s>>>16
if($.Y==null)A.a6()
r=s>>>23&511
p=$.p8.lC()
if(!(r<p.length))return A.a(p,r)
r=p[r]
if(r!==0){q=s&8388607
return r+(q+4095+(q>>>13&1)>>>13)}return A.th(s)},
th(a){var s,r,q=a>>>16&32768,p=(a>>>23&255)-112,o=a&8388607
if(p<=0){if(p<-10)return q
o|=8388608
s=14-p
return(q|B.a.bo(o+(B.a.a0(1,s-1)-1)+(B.a.a3(o,s)&1),s))>>>0}else if(p===143)if(o===0)return q|31744
else{o=o>>>13
r=o===0?1:0
return q|o|r|31744}else{o=o+4095+(o>>>13&1)
if((o&8388608)!==0){++p
o=0}if(p>30)return q|31744
return(q|p<<10|o>>>13)>>>0}},
a6(){var s,r,q,p,o,n=$.Y
if(n!=null)return n
s=new Uint32Array(65536)
$.Y=J.oS(B.m.gE(s),0,null)
n=new Uint16Array(512)
$.p8.b=n
for(r=0;r<256;++r){q=(r&255)-112
if(q<=0||q>=30){n[r]=0
p=(r|256)>>>0
if(!(p<512))return A.a(n,p)
n[p]=0}else{p=q<<10>>>0
n[r]=p
o=(r|256)>>>0
if(!(o<512))return A.a(n,o)
n[o]=(p|32768)>>>0}}for(r=0;r<65536;++r)s[r]=A.ti(r)
n=$.Y
n.toString
return n},
ti(a){var s,r=a>>>15&1,q=a>>>10&31,p=a&1023
if(q===0)if(p===0)return r<<31>>>0
else{for(;(p&1024)===0;){p=p<<1;--q}++q
p&=4294966271}else if(q===31){s=r<<31
if(p===0)return(s|2139095040)>>>0
else return(s|p<<13|2139095040)>>>0}return(r<<31|q+112<<23|p<<13)>>>0},
qS(){var s,r,q,p,o=null
try{o=A.j5()}catch(s){if(t.mA.b(A.aR(s))){r=$.mV
if(r!=null)return r
throw s}else throw s}if(J.a_(o,$.qy)){r=$.mV
r.toString
return r}$.qy=o
if($.oL()===$.hs())r=$.mV=o.iz(".").t(0)
else{q=o.ft()
p=q.length-1
r=$.mV=p===0?q:B.d.I(q,0,p)}return r},
qZ(a){var s
if(!(a>=65&&a<=90))s=a>=97&&a<=122
else s=!0
return s},
qT(a,b){var s,r,q=null,p=a.length,o=b+2
if(p<o)return q
if(!(b>=0&&b<p))return A.a(a,b)
if(!A.qZ(a.charCodeAt(b)))return q
s=b+1
if(!(s<p))return A.a(a,s)
if(a.charCodeAt(s)!==58){r=b+4
if(p<r)return q
if(B.d.I(a,s,r).toLowerCase()!=="%3a")return q
b=o}s=b+2
if(p===s)return s
if(!(s>=0&&s<p))return A.a(a,s)
if(a.charCodeAt(s)!==47)return q
return b+3},
xb(a){var s,r,q,p
if(a.gn(0)===0)return!0
s=a.gcl(0)
for(r=A.cf(a,1,null,a.$ti.i("U.E")),q=r.$ti,r=new A.ah(r,r.gn(0),q.i("ah<U.E>")),q=q.i("U.E");r.B();){p=r.d
if(!J.a_(p==null?q.a(p):p,s))return!1}return!0},
xk(a,b,c){var s=B.c.c6(a,null)
if(s<0)throw A.f(A.W(A.t(a)+" contains no null elements.",null))
B.c.h(a,s,b)},
r6(a,b,c){var s=B.c.c6(a,b)
if(s<0)throw A.f(A.W(A.t(a)+" contains no elements matching "+b.t(0)+".",null))
B.c.h(a,s,null)},
wN(a,b){var s,r,q,p
for(s=new A.ai(a),r=t.V,s=new A.ah(s,s.gn(0),r.i("ah<y.E>")),r=r.i("y.E"),q=0;s.B();){p=s.d
if((p==null?r.a(p):p)===b)++q}return q},
na(a,b,c){var s,r,q
if(b.length===0)for(s=0;!0;){r=B.d.bX(a,"\n",s)
if(r===-1)return a.length-s>=c?s:null
if(r-s>=c)return s
s=r+1}r=B.d.c6(a,b)
for(;r!==-1;){q=r===0?0:B.d.ea(a,"\n",r-1)+1
if(c===r-q)return q
r=B.d.bX(a,b,r+1)}return null},
wP(a,b){var s,r,q,p,o,n,m,l,k,j=null,i=A.wQ(a,b)
if(i==null)return j
s=A.wI(i,B.cW,50)
r=new Uint8Array(64)
q=new Uint8Array(64)
p=new Float32Array(64)
o=new Float32Array(64)
n=A.a1(65535,j,!1,t.T)
m=t.x
l=A.a1(65535,j,!1,m)
k=A.a1(64,j,!1,m)
m=A.a1(64,j,!1,m)
r=new A.kU(r,q,p,o,n,l,k,m,new Int32Array(2048))
r.sml(r.dG(B.bd,B.ag))
r.sma(r.dG(B.be,B.ag))
q=t.d
r.sjB(q.a(r.dG(B.bf,B.bv)))
r.sjA(q.a(r.dG(B.bg,B.b9)))
r.kV()
r.kY()
r.iU(100)
return r.mM(s,B.b8)},
r0(a){var s=A.ej(a.getAttribute("data-pic")),r=new Uint8Array(A.C(new A.ai(s==null?"":s))),q=self,p=t.m,o=p.a(new q.Blob(A.b([t.hH.a(B.f.gE(r))],t.a7),{type:"image/jpeg"})),n=A.I(q.URL.createObjectURL(o))
p.a(a.style).backgroundImage="url("+n+")"},
nm(){var s=0,r=A.co(t.H),q=1,p,o,n,m,l,k,j,i,h,g
var $async$nm=A.cp(function(a,b){if(a===1){p=b
s=q}while(true)switch(s){case 0:A.wr()
A.wt()
q=3
s=6
return A.bZ(A.nl(),$async$nm)
case 6:q=1
s=5
break
case 3:q=2
g=p
j=A.aR(g)
if(j instanceof A.ew){j=self
i=t.m
h=t.A
m=h.a(i.a(j.document).getElementById("crew-title"))
o=m==null?i.a(m):m
o.value="Something is wrong..."
l=h.a(i.a(j.document).getElementById("crew-container"))
n=l==null?i.a(l):l
n.innerText=u.r}else if(j instanceof A.f4){j=self
i=t.m
h=t.A
o=h.a(i.a(j.document).getElementById("crew-title"))
m=o==null?i.a(o):o
m.value="Something is wrong..."
n=h.a(i.a(j.document).getElementById("crew-container"))
l=n==null?i.a(n):n
l.innerText=u.r}else throw g
s=5
break
case 2:s=1
break
case 5:return A.cm(null,r)
case 1:return A.cl(p,r)}})
return A.cn($async$nm,r)},
oD(a,b){return b.a(t.A.a(t.m.a(self.document).getElementById(a)))},
bt(a,b){var s=t.m
return b.a(s.a(s.a(self.document).createElement(a)))}},B={}
var w=[A,J,B]
var $={}
A.nR.prototype={}
J.i2.prototype={
N(a,b){return a===b},
gH(a){return A.cX(a)},
t(a){return"Instance of '"+A.lh(a)+"'"},
gaP(a){return A.c2(A.ox(this))}}
J.ie.prototype={
t(a){return String(a)},
gH(a){return a?519018:218159},
gaP(a){return A.c2(t.k4)},
$iQ:1,
$iae:1}
J.eX.prototype={
N(a,b){return null==b},
t(a){return"null"},
gH(a){return 0},
$iQ:1,
$iar:1}
J.eY.prototype={$ia7:1}
J.c9.prototype={
gH(a){return 0},
t(a){return String(a)}}
J.iy.prototype={}
J.d4.prototype={}
J.by.prototype={
t(a){var s=a[$.nw()]
if(s==null)return this.j4(a)
return"JavaScript function for "+J.de(s)},
$ibK:1}
J.dQ.prototype={
gH(a){return 0},
t(a){return String(a)}}
J.dR.prototype={
gH(a){return 0},
t(a){return String(a)}}
J.v.prototype={
e3(a,b){return new A.bG(a,A.Z(a).i("@<1>").aa(b).i("bG<1,2>"))},
C(a,b){A.Z(a).c.a(b)
a.$flags&1&&A.c(a,29)
a.push(b)},
cK(a,b){var s
a.$flags&1&&A.c(a,"removeAt",1)
s=a.length
if(b>=s)throw A.f(A.lm(b,null))
return a.splice(b,1)[0]},
n1(a,b,c){var s
A.Z(a).c.a(c)
a.$flags&1&&A.c(a,"insert",2)
s=a.length
if(b>s)throw A.f(A.lm(b,null))
a.splice(b,0,c)},
fa(a,b,c){var s,r
A.Z(a).i("h<1>").a(c)
a.$flags&1&&A.c(a,"insertAll",2)
A.pK(b,0,a.length,"index")
if(!t.X.b(c))c=J.rV(c)
s=J.aq(c)
a.length=a.length+s
r=b+s
this.an(a,r,a.length,a,b)
this.b5(a,b,r,c)},
iw(a){a.$flags&1&&A.c(a,"removeLast",1)
if(a.length===0)throw A.f(A.jJ(a,-1))
return a.pop()},
lW(a,b,c){var s,r,q,p,o
A.Z(a).i("ae(1)").a(b)
s=[]
r=a.length
for(q=0;q<r;++q){p=a[q]
if(!A.eo(b.$1(p)))s.push(p)
if(a.length!==r)throw A.f(A.aK(a))}o=s.length
if(o===r)return
this.sn(a,o)
for(q=0;q<s.length;++q)a[q]=s[q]},
cj(a,b){var s
A.Z(a).i("h<1>").a(b)
a.$flags&1&&A.c(a,"addAll",2)
if(Array.isArray(b)){this.jO(a,b)
return}for(s=J.ap(b);s.B();)a.push(s.gK())},
jO(a,b){var s,r
t.dG.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.f(A.aK(a))
for(r=0;r<s;++r)a.push(b[r])},
eY(a){a.$flags&1&&A.c(a,"clear","clear")
a.length=0},
cp(a,b){var s,r=A.a1(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)this.h(r,s,A.t(a[s]))
return r.join(b)},
iC(a,b){return A.cf(a,0,A.jH(b,"count",t.p),A.Z(a).c)},
bA(a,b){return A.cf(a,b,null,A.Z(a).c)},
mV(a,b,c,d){var s,r,q
d.a(b)
A.Z(a).aa(d).i("1(1,2)").a(c)
s=a.length
for(r=b,q=0;q<s;++q){r=c.$2(r,a[q])
if(a.length!==s)throw A.f(A.aK(a))}return r},
aq(a,b){if(!(b>=0&&b<a.length))return A.a(a,b)
return a[b]},
aQ(a,b,c){if(b<0||b>a.length)throw A.f(A.a3(b,0,a.length,"start",null))
if(c<b||c>a.length)throw A.f(A.a3(c,b,a.length,"end",null))
if(b===c)return A.b([],A.Z(a))
return A.b(a.slice(b,c),A.Z(a))},
du(a,b,c){A.b7(b,c,a.length)
return A.cf(a,b,c,A.Z(a).c)},
gcl(a){if(a.length>0)return a[0]
throw A.f(A.eV())},
gbs(a){var s=a.length
if(s>0)return a[s-1]
throw A.f(A.eV())},
an(a,b,c,d,e){var s,r,q,p,o
A.Z(a).i("h<1>").a(d)
a.$flags&2&&A.c(a,5)
A.b7(b,c,a.length)
s=c-b
if(s===0)return
A.aZ(e,"skipCount")
if(t.j.b(d)){r=d
q=e}else{r=J.jR(d,e).c0(0,!1)
q=0}p=J.R(r)
if(q+s>p.gn(r))throw A.f(A.pr())
if(q<b)for(o=s-1;o>=0;--o)a[b+o]=p.k(r,q+o)
else for(o=0;o<s;++o)a[b+o]=p.k(r,q+o)},
b5(a,b,c,d){return this.an(a,b,c,d,0)},
aS(a,b,c,d){var s
A.Z(a).i("1?").a(d)
a.$flags&2&&A.c(a,"fillRange")
A.b7(b,c,a.length)
for(s=b;s<c;++s)a[s]=d},
dA(a,b){var s,r,q,p,o,n=A.Z(a)
n.i("i(1,1)?").a(b)
a.$flags&2&&A.c(a,"sort")
s=a.length
if(s<2)return
if(b==null)b=J.w0()
if(s===2){r=a[0]
q=a[1]
n=b.$2(r,q)
if(typeof n!=="number")return n.bG()
if(n>0){a[0]=q
a[1]=r}return}p=0
if(n.c.b(null))for(o=0;o<a.length;++o)if(a[o]===void 0){a[o]=null;++p}a.sort(A.ep(b,2))
if(p>0)this.lX(a,p)},
lX(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
c6(a,b){var s,r=a.length
if(0>=r)return-1
for(s=0;s<r;++s){if(!(s<a.length))return A.a(a,s)
if(J.a_(a[s],b))return s}return-1},
av(a,b){var s
for(s=0;s<a.length;++s)if(J.a_(a[s],b))return!0
return!1},
gO(a){return a.length===0},
gc7(a){return a.length!==0},
t(a){return A.nO(a,"[","]")},
c0(a,b){var s=A.b(a.slice(0),A.Z(a))
return s},
ed(a){return this.c0(a,!0)},
gJ(a){return new J.cu(a,a.length,A.Z(a).i("cu<1>"))},
gH(a){return A.cX(a)},
gn(a){return a.length},
sn(a,b){a.$flags&1&&A.c(a,"set length","change the length of")
if(b<0)throw A.f(A.a3(b,0,null,"newLength",null))
if(b>a.length)A.Z(a).c.a(null)
a.length=b},
k(a,b){if(!(b>=0&&b<a.length))throw A.f(A.jJ(a,b))
return a[b]},
h(a,b,c){A.Z(a).c.a(c)
a.$flags&2&&A.c(a)
if(!(b>=0&&b<a.length))throw A.f(A.jJ(a,b))
a[b]=c},
n0(a,b){var s
A.Z(a).i("ae(1)").a(b)
if(0>=a.length)return-1
for(s=0;s<a.length;++s)if(A.eo(b.$1(a[s])))return s
return-1},
$iaz:1,
$iA:1,
$ih:1,
$in:1}
J.kP.prototype={}
J.cu.prototype={
gK(){var s=this.d
return s==null?this.$ti.c.a(s):s},
B(){var s,r=this,q=r.a,p=q.length
if(r.b!==p){q=A.aI(q)
throw A.f(q)}s=r.c
if(s>=p){r.sfY(null)
return!1}r.sfY(q[s]);++r.c
return!0},
sfY(a){this.d=this.$ti.i("1?").a(a)},
$iz:1}
J.dO.prototype={
b1(a,b){var s
A.qv(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gfc(b)
if(this.gfc(a)===s)return 0
if(this.gfc(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gfc(a){return a===0?1/a<0:a<0},
j(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.f(A.a2(""+a+".toInt()"))},
bh(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.f(A.a2(""+a+".ceil()"))},
c5(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.f(A.a2(""+a+".floor()"))},
cu(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.f(A.a2(""+a+".round()"))},
L(a,b,c){if(this.b1(b,c)>0)throw A.f(A.cq(b))
if(this.b1(a,b)<0)return b
if(this.b1(a,c)>0)return c
return a},
ee(a,b){var s,r,q,p,o
if(b<2||b>36)throw A.f(A.a3(b,2,36,"radix",null))
s=a.toString(b)
r=s.length
q=r-1
if(!(q>=0))return A.a(s,q)
if(s.charCodeAt(q)!==41)return s
p=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(s)
if(p==null)A.a8(A.a2("Unexpected toString result: "+s))
r=p.length
if(1>=r)return A.a(p,1)
s=p[1]
if(3>=r)return A.a(p,3)
o=+p[3]
r=p[2]
if(r!=null){s+=r
o-=r.length}return s+B.d.bP("0",o)},
t(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gH(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
ae(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
aR(a,b){A.qv(b)
if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.hE(a,b)},
Y(a,b){return(a|0)===a?a/b|0:this.hE(a,b)},
hE(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.f(A.a2("Result of truncating division is "+A.t(s)+": "+A.t(a)+" ~/ "+b))},
a0(a,b){if(b<0)throw A.f(A.cq(b))
return b>31?0:a<<b>>>0},
R(a,b){return b>31?0:a<<b>>>0},
bo(a,b){var s
if(b<0)throw A.f(A.cq(b))
if(a>0)s=this.ab(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
l(a,b){var s
if(a>0)s=this.ab(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
a3(a,b){if(0>b)throw A.f(A.cq(b))
return this.ab(a,b)},
ab(a,b){return b>31?0:a>>>b},
gaP(a){return A.c2(t.E)},
$iaj:1,
$iG:1,
$im:1}
J.eW.prototype={
aH(a,b){var s=this.a0(1,b-1)
return((a&s-1)>>>0)-((a&s)>>>0)},
gaP(a){return A.c2(t.p)},
$iQ:1,
$ii:1}
J.ig.prototype={
gaP(a){return A.c2(t.dx)},
$iQ:1}
J.c8.prototype={
eX(a,b,c){var s=b.length
if(c>s)throw A.f(A.a3(c,0,s,null,null))
return new A.jw(b,a,c)},
e_(a,b){return this.eX(a,b,0)},
cH(a,b,c){var s,r,q,p,o=null
if(c<0||c>b.length)throw A.f(A.a3(c,0,b.length,o,o))
s=a.length
r=b.length
if(c+s>r)return o
for(q=0;q<s;++q){p=c+q
if(!(p>=0&&p<r))return A.a(b,p)
if(b.charCodeAt(p)!==a.charCodeAt(q))return o}return new A.fC(c,a)},
aA(a,b){var s=b.length,r=a.length
if(s>r)return!1
return b===this.aI(a,r-s)},
ct(a,b,c,d){var s=A.b7(b,c,a.length)
return A.r9(a,b,s,d)},
ao(a,b,c){var s
if(c<0||c>a.length)throw A.f(A.a3(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
ah(a,b){return this.ao(a,b,0)},
I(a,b,c){return a.substring(b,A.b7(b,c,a.length))},
aI(a,b){return this.I(a,b,null)},
iI(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.a(p,0)
if(p.charCodeAt(0)===133){s=J.tx(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.a(p,r)
q=p.charCodeAt(r)===133?J.ty(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
bP(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.f(B.cB)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
nb(a,b){var s=b-a.length
if(s<=0)return a
return a+this.bP(" ",s)},
bX(a,b,c){var s
if(c<0||c>a.length)throw A.f(A.a3(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
c6(a,b){return this.bX(a,b,0)},
ea(a,b,c){var s,r
if(c==null)c=a.length
else if(c<0||c>a.length)throw A.f(A.a3(c,0,a.length,null,null))
s=b.length
r=a.length
if(c+s>r)c=r-s
return a.lastIndexOf(b,c)},
fd(a,b){return this.ea(a,b,null)},
av(a,b){return A.xl(a,b,0)},
b1(a,b){var s
A.I(b)
if(a===b)s=0
else s=a<b?-1:1
return s},
t(a){return a},
gH(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gaP(a){return A.c2(t.N)},
gn(a){return a.length},
$iaz:1,
$iQ:1,
$iaj:1,
$ile:1,
$il:1}
A.ci.prototype={
gJ(a){return new A.eu(J.ap(this.gbS()),A.k(this).i("eu<1,2>"))},
gn(a){return J.aq(this.gbS())},
gO(a){return J.oV(this.gbS())},
gc7(a){return J.rO(this.gbS())},
bA(a,b){var s=A.k(this)
return A.k8(J.jR(this.gbS(),b),s.c,s.y[1])},
aq(a,b){return A.k(this).y[1].a(J.ht(this.gbS(),b))},
av(a,b){return J.rN(this.gbS(),b)},
t(a){return J.de(this.gbS())}}
A.eu.prototype={
B(){return this.a.B()},
gK(){return this.$ti.y[1].a(this.a.gK())},
$iz:1}
A.cv.prototype={
gbS(){return this.a}}
A.fU.prototype={$iA:1}
A.fR.prototype={
k(a,b){return this.$ti.y[1].a(J.d(this.a,b))},
h(a,b,c){var s=this.$ti
J.D(this.a,b,s.c.a(s.y[1].a(c)))},
sn(a,b){J.rS(this.a,b)},
C(a,b){var s=this.$ti
J.oR(this.a,s.c.a(s.y[1].a(b)))},
dA(a,b){var s
this.$ti.i("i(2,2)?").a(b)
s=b==null?null:new A.m5(this,b)
J.oX(this.a,s)},
du(a,b,c){var s=this.$ti
return A.k8(J.rQ(this.a,b,c),s.c,s.y[1])},
an(a,b,c,d,e){var s=this.$ti
J.rT(this.a,b,c,A.k8(s.i("h<2>").a(d),s.y[1],s.c),e)},
b5(a,b,c,d){return this.an(0,b,c,d,0)},
aS(a,b,c,d){var s=this.$ti
J.bw(this.a,b,c,s.c.a(s.i("2?").a(d)))},
$iA:1,
$in:1}
A.m5.prototype={
$2(a,b){var s=this.a.$ti,r=s.c
r.a(a)
r.a(b)
s=s.y[1]
return this.b.$2(s.a(a),s.a(b))},
$S(){return this.a.$ti.i("i(1,1)")}}
A.bG.prototype={
e3(a,b){return new A.bG(this.a,this.$ti.i("@<1>").aa(b).i("bG<1,2>"))},
gbS(){return this.a}}
A.cH.prototype={
t(a){return"LateInitializationError: "+this.a}}
A.ai.prototype={
gn(a){return this.a.length},
k(a,b){var s=this.a
if(!(b>=0&&b<s.length))return A.a(s,b)
return s.charCodeAt(b)}}
A.np.prototype={
$0(){return A.p9(null,t.H)},
$S:37}
A.lo.prototype={}
A.A.prototype={}
A.U.prototype={
gJ(a){var s=this
return new A.ah(s,s.gn(s),A.k(s).i("ah<U.E>"))},
gO(a){return this.gn(this)===0},
gcl(a){if(this.gn(this)===0)throw A.f(A.eV())
return this.aq(0,0)},
av(a,b){var s,r=this,q=r.gn(r)
for(s=0;s<q;++s){if(J.a_(r.aq(0,s),b))return!0
if(q!==r.gn(r))throw A.f(A.aK(r))}return!1},
cp(a,b){var s,r,q,p=this,o=p.gn(p)
if(b.length!==0){if(o===0)return""
s=A.t(p.aq(0,0))
if(o!==p.gn(p))throw A.f(A.aK(p))
for(r=s,q=1;q<o;++q){r=r+b+A.t(p.aq(0,q))
if(o!==p.gn(p))throw A.f(A.aK(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=A.t(p.aq(0,q))
if(o!==p.gn(p))throw A.f(A.aK(p))}return r.charCodeAt(0)==0?r:r}},
im(a,b,c){var s=A.k(this)
return new A.aC(this,s.aa(c).i("1(U.E)").a(b),s.i("@<U.E>").aa(c).i("aC<1,2>"))},
nn(a,b){var s,r,q,p=this
A.k(p).i("U.E(U.E,U.E)").a(b)
s=p.gn(p)
if(s===0)throw A.f(A.eV())
r=p.aq(0,0)
for(q=1;q<s;++q){r=b.$2(r,p.aq(0,q))
if(s!==p.gn(p))throw A.f(A.aK(p))}return r},
bA(a,b){return A.cf(this,b,null,A.k(this).i("U.E"))}}
A.d2.prototype={
jr(a,b,c,d){var s,r=this.b
A.aZ(r,"start")
s=this.c
if(s!=null){A.aZ(s,"end")
if(r>s)throw A.f(A.a3(r,0,s,"start",null))}},
gkE(){var s=J.aq(this.a),r=this.c
if(r==null||r>s)return s
return r},
gm5(){var s=J.aq(this.a),r=this.b
if(r>s)return s
return r},
gn(a){var s,r=J.aq(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
if(typeof s!=="number")return s.nD()
return s-q},
aq(a,b){var s=this,r=s.gm5()+b
if(b<0||r>=s.gkE())throw A.f(A.kM(b,s.gn(0),s,"index"))
return J.ht(s.a,r)},
bA(a,b){var s,r,q=this
A.aZ(b,"count")
s=q.b+b
r=q.c
if(r!=null&&s>=r)return new A.ey(q.$ti.i("ey<1>"))
return A.cf(q.a,s,r,q.$ti.c)},
c0(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.R(n),l=m.gn(n),k=p.c
if(k!=null&&k<l)l=k
s=l-o
if(s<=0){n=J.nP(0,p.$ti.c)
return n}r=A.a1(s,m.aq(n,o),!1,p.$ti.c)
for(q=1;q<s;++q){B.c.h(r,q,m.aq(n,o+q))
if(m.gn(n)<l)throw A.f(A.aK(p))}return r}}
A.ah.prototype={
gK(){var s=this.d
return s==null?this.$ti.c.a(s):s},
B(){var s,r=this,q=r.a,p=J.R(q),o=p.gn(q)
if(r.b!==o)throw A.f(A.aK(q))
s=r.c
if(s>=o){r.sc1(null)
return!1}r.sc1(p.aq(q,s));++r.c
return!0},
sc1(a){this.d=this.$ti.i("1?").a(a)},
$iz:1}
A.cI.prototype={
gJ(a){return new A.aB(J.ap(this.a),this.b,A.k(this).i("aB<1,2>"))},
gn(a){return J.aq(this.a)},
gO(a){return J.oV(this.a)},
aq(a,b){return this.b.$1(J.ht(this.a,b))}}
A.ex.prototype={$iA:1}
A.aB.prototype={
B(){var s=this,r=s.b
if(r.B()){s.sc1(s.c.$1(r.gK()))
return!0}s.sc1(null)
return!1},
gK(){var s=this.a
return s==null?this.$ti.y[1].a(s):s},
sc1(a){this.a=this.$ti.i("2?").a(a)},
$iz:1}
A.aC.prototype={
gn(a){return J.aq(this.a)},
aq(a,b){return this.b.$1(J.ht(this.a,b))}}
A.bV.prototype={
gJ(a){return new A.d8(J.ap(this.a),this.b,this.$ti.i("d8<1>"))}}
A.d8.prototype={
B(){var s,r
for(s=this.a,r=this.b;s.B();)if(A.eo(r.$1(s.gK())))return!0
return!1},
gK(){return this.a.gK()},
$iz:1}
A.eC.prototype={
gJ(a){return new A.eD(J.ap(this.a),this.b,B.aS,this.$ti.i("eD<1,2>"))}}
A.eD.prototype={
gK(){var s=this.d
return s==null?this.$ti.y[1].a(s):s},
B(){var s,r,q=this
if(q.c==null)return!1
for(s=q.a,r=q.b;!q.c.B();){q.sc1(null)
if(s.B()){q.sfZ(null)
q.sfZ(J.ap(r.$1(s.gK())))}else return!1}q.sc1(q.c.gK())
return!0},
sfZ(a){this.c=this.$ti.i("z<2>?").a(a)},
sc1(a){this.d=this.$ti.i("2?").a(a)},
$iz:1}
A.bP.prototype={
bA(a,b){A.jT(b,"count",t.p)
A.aZ(b,"count")
return new A.bP(this.a,this.b+b,A.k(this).i("bP<1>"))},
gJ(a){return new A.fA(J.ap(this.a),this.b,A.k(this).i("fA<1>"))}}
A.dw.prototype={
gn(a){var s=J.aq(this.a)-this.b
if(s>=0)return s
return 0},
bA(a,b){A.jT(b,"count",t.p)
A.aZ(b,"count")
return new A.dw(this.a,this.b+b,this.$ti)},
$iA:1}
A.fA.prototype={
B(){var s,r
for(s=this.a,r=0;r<this.b;++r)s.B()
this.b=0
return s.B()},
gK(){return this.a.gK()},
$iz:1}
A.ey.prototype={
gJ(a){return B.aS},
gO(a){return!0},
gn(a){return 0},
aq(a,b){throw A.f(A.a3(b,0,0,"index",null))},
av(a,b){return!1},
bA(a,b){A.aZ(b,"count")
return this},
c0(a,b){var s=J.nP(0,this.$ti.c)
return s}}
A.ez.prototype={
B(){return!1},
gK(){throw A.f(A.eV())},
$iz:1}
A.fN.prototype={
gJ(a){return new A.fO(J.ap(this.a),this.$ti.i("fO<1>"))}}
A.fO.prototype={
B(){var s,r
for(s=this.a,r=this.$ti.c;s.B();)if(r.b(s.gK()))return!0
return!1},
gK(){return this.$ti.c.a(this.a.gK())},
$iz:1}
A.a5.prototype={
sn(a,b){throw A.f(A.a2("Cannot change the length of a fixed-length list"))},
C(a,b){A.at(a).i("a5.E").a(b)
throw A.f(A.a2("Cannot add to a fixed-length list"))}}
A.bh.prototype={
h(a,b,c){A.k(this).i("bh.E").a(c)
throw A.f(A.a2("Cannot modify an unmodifiable list"))},
sn(a,b){throw A.f(A.a2("Cannot change the length of an unmodifiable list"))},
C(a,b){A.k(this).i("bh.E").a(b)
throw A.f(A.a2("Cannot add to an unmodifiable list"))},
dA(a,b){A.k(this).i("i(bh.E,bh.E)?").a(b)
throw A.f(A.a2("Cannot modify an unmodifiable list"))},
an(a,b,c,d,e){A.k(this).i("h<bh.E>").a(d)
throw A.f(A.a2("Cannot modify an unmodifiable list"))},
b5(a,b,c,d){return this.an(0,b,c,d,0)},
aS(a,b,c,d){A.k(this).i("bh.E?").a(d)
throw A.f(A.a2("Cannot modify an unmodifiable list"))}}
A.e5.prototype={}
A.fz.prototype={
gn(a){return J.aq(this.a)},
aq(a,b){var s=this.a,r=J.R(s)
return r.aq(s,r.gn(s)-1-b)}}
A.lx.prototype={}
A.hl.prototype={}
A.dv.prototype={
gO(a){return this.gn(this)===0},
t(a){return A.l5(this)},
h(a,b,c){var s=A.k(this)
s.c.a(b)
s.y[1].a(c)
A.t7()},
$iM:1}
A.ev.prototype={
gn(a){return this.b.length},
ghj(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
a_(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
k(a,b){if(!this.a_(b))return null
return this.b[this.a[b]]},
aK(a,b){var s,r,q,p
this.$ti.i("~(1,2)").a(b)
s=this.ghj()
r=this.b
for(q=s.length,p=0;p<q;++p)b.$2(s[p],r[p])},
gb8(){return new A.fX(this.ghj(),this.$ti.i("fX<1>"))}}
A.fX.prototype={
gn(a){return this.a.length},
gO(a){return 0===this.a.length},
gc7(a){return 0!==this.a.length},
gJ(a){var s=this.a
return new A.fY(s,s.length,this.$ti.i("fY<1>"))}}
A.fY.prototype={
gK(){var s=this.d
return s==null?this.$ti.c.a(s):s},
B(){var s=this,r=s.c
if(r>=s.b){s.scS(null)
return!1}s.scS(s.a[r]);++s.c
return!0},
scS(a){this.d=this.$ti.i("1?").a(a)},
$iz:1}
A.cz.prototype={
d_(){var s=this,r=s.$map
if(r==null){r=new A.f_(s.$ti.i("f_<1,2>"))
A.qV(s.a,r)
s.$map=r}return r},
a_(a){return this.d_().a_(a)},
k(a,b){return this.d_().k(0,b)},
aK(a,b){this.$ti.i("~(1,2)").a(b)
this.d_().aK(0,b)},
gb8(){var s=this.d_()
return new A.aX(s,A.k(s).i("aX<1>"))},
gn(a){return this.d_().a}}
A.i0.prototype={
N(a,b){if(b==null)return!1
return b instanceof A.dL&&this.a.N(0,b.a)&&A.oE(this)===A.oE(b)},
gH(a){return A.lb(this.a,A.oE(this),B.a8)},
t(a){var s=B.c.cp([A.c2(this.$ti.c)],", ")
return this.a.t(0)+" with "+("<"+s+">")}}
A.dL.prototype={
$2(a,b){return this.a.$1$2(a,b,this.$ti.y[0])},
$S(){return A.xa(A.n5(this.a),this.$ti)}}
A.lA.prototype={
bN(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
if(p==null)return null
s=Object.create(null)
r=q.b
if(r!==-1)s.arguments=p[r+1]
r=q.c
if(r!==-1)s.argumentsExpr=p[r+1]
r=q.d
if(r!==-1)s.expr=p[r+1]
r=q.e
if(r!==-1)s.method=p[r+1]
r=q.f
if(r!==-1)s.receiver=p[r+1]
return s}}
A.fe.prototype={
t(a){return"Null check operator used on a null value"}}
A.ij.prototype={
t(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.j4.prototype={
t(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.is.prototype={
t(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"},
$iaf:1}
A.eB.prototype={}
A.h7.prototype={
t(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$ib_:1}
A.aJ.prototype={
t(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.rb(r==null?"unknown":r)+"'"},
$ibK:1,
gnC(){return this},
$C:"$1",
$R:1,
$D:null}
A.hB.prototype={$C:"$0",$R:0}
A.hC.prototype={$C:"$2",$R:2}
A.iY.prototype={}
A.iV.prototype={
t(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.rb(s)+"'"}}
A.df.prototype={
N(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.df))return!1
return this.$_target===b.$_target&&this.a===b.a},
gH(a){return(A.jK(this.a)^A.cX(this.$_target))>>>0},
t(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.lh(this.a)+"'")}}
A.jk.prototype={
t(a){return"Reading static variable '"+this.a+"' during its initialization"}}
A.iP.prototype={
t(a){return"RuntimeError: "+this.a}}
A.jf.prototype={
t(a){return"Assertion failed: "+A.eA(this.a)}}
A.aW.prototype={
gn(a){return this.a},
gO(a){return this.a===0},
gb8(){return new A.aX(this,A.k(this).i("aX<1>"))},
gby(){var s=A.k(this)
return A.nV(new A.aX(this,s.i("aX<1>")),new A.kX(this),s.c,s.y[1])},
a_(a){var s,r
if(typeof a=="string"){s=this.b
if(s==null)return!1
return s[a]!=null}else if(typeof a=="number"&&(a&0x3fffffff)===a){r=this.c
if(r==null)return!1
return r[a]!=null}else return this.ie(a)},
ie(a){var s=this.d
if(s==null)return!1
return this.co(s[this.cn(a)],a)>=0},
cj(a,b){A.k(this).i("M<1,2>").a(b).aK(0,new A.kW(this))},
k(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.ig(b)},
ig(a){var s,r,q=this.d
if(q==null)return null
s=q[this.cn(a)]
r=this.co(s,a)
if(r<0)return null
return s[r].b},
h(a,b,c){var s,r,q=this,p=A.k(q)
p.c.a(b)
p.y[1].a(c)
if(typeof b=="string"){s=q.b
q.fG(s==null?q.b=q.eK():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.fG(r==null?q.c=q.eK():r,b,c)}else q.ii(b,c)},
ii(a,b){var s,r,q,p,o=this,n=A.k(o)
n.c.a(a)
n.y[1].a(b)
s=o.d
if(s==null)s=o.d=o.eK()
r=o.cn(a)
q=s[r]
if(q==null)s[r]=[o.eL(a,b)]
else{p=o.co(q,a)
if(p>=0)q[p].b=b
else q.push(o.eL(a,b))}},
cs(a,b){var s=this
if(typeof b=="string")return s.hz(s.b,b)
else if(typeof b=="number"&&(b&0x3fffffff)===b)return s.hz(s.c,b)
else return s.ih(b)},
ih(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.cn(a)
r=n[s]
q=o.co(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.hK(p)
if(r.length===0)delete n[s]
return p.b},
aK(a,b){var s,r,q=this
A.k(q).i("~(1,2)").a(b)
s=q.e
r=q.r
for(;s!=null;){b.$2(s.a,s.b)
if(r!==q.r)throw A.f(A.aK(q))
s=s.c}},
fG(a,b,c){var s,r=A.k(this)
r.c.a(b)
r.y[1].a(c)
s=a[b]
if(s==null)a[b]=this.eL(b,c)
else s.b=c},
hz(a,b){var s
if(a==null)return null
s=a[b]
if(s==null)return null
this.hK(s)
delete a[b]
return s.b},
hl(){this.r=this.r+1&1073741823},
eL(a,b){var s=this,r=A.k(s),q=new A.l1(r.c.a(a),r.y[1].a(b))
if(s.e==null)s.e=s.f=q
else{r=s.f
r.toString
q.d=r
s.f=r.c=q}++s.a
s.hl()
return q},
hK(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.hl()},
cn(a){return J.bl(a)&1073741823},
co(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a_(a[r].a,b))return r
return-1},
t(a){return A.l5(this)},
eK(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
$iio:1}
A.kX.prototype={
$1(a){var s=this.a,r=A.k(s)
s=s.k(0,r.c.a(a))
return s==null?r.y[1].a(s):s},
$S(){return A.k(this.a).i("2(1)")}}
A.kW.prototype={
$2(a,b){var s=this.a,r=A.k(s)
s.h(0,r.c.a(a),r.y[1].a(b))},
$S(){return A.k(this.a).i("~(1,2)")}}
A.l1.prototype={}
A.aX.prototype={
gn(a){return this.a.a},
gO(a){return this.a.a===0},
gJ(a){var s=this.a,r=new A.aA(s,s.r,this.$ti.i("aA<1>"))
r.c=s.e
return r},
av(a,b){return this.a.a_(b)}}
A.aA.prototype={
gK(){return this.d},
B(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.f(A.aK(q))
s=r.c
if(s==null){r.scS(null)
return!1}else{r.scS(s.a)
r.c=s.c
return!0}},
scS(a){this.d=this.$ti.i("1?").a(a)},
$iz:1}
A.f0.prototype={
cn(a){return A.jK(a)&1073741823},
co(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;++r){q=a[r].a
if(q==null?b==null:q===b)return r}return-1}}
A.f_.prototype={
cn(a){return A.wF(a)&1073741823},
co(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a_(a[r].a,b))return r
return-1}}
A.nh.prototype={
$1(a){return this.a(a)},
$S:24}
A.ni.prototype={
$2(a,b){return this.a(a,b)},
$S:43}
A.nj.prototype={
$1(a){return this.a(A.I(a))},
$S:44}
A.dP.prototype={
t(a){return"RegExp/"+this.a+"/"+this.b.flags},
gl4(){var s=this,r=s.c
if(r!=null)return r
r=s.b
return s.c=A.nQ(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,!0)},
gl3(){var s=this,r=s.d
if(r!=null)return r
r=s.b
return s.d=A.nQ(s.a+"|()",r.multiline,!r.ignoreCase,r.unicode,r.dotAll,!0)},
eX(a,b,c){var s=b.length
if(c>s)throw A.f(A.a3(c,0,s,null,null))
return new A.je(this,b,c)},
e_(a,b){return this.eX(0,b,0)},
kG(a,b){var s,r=this.gl4()
if(r==null)r=t.K.a(r)
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.h0(s)},
kF(a,b){var s,r=this.gl3()
if(r==null)r=t.K.a(r)
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
if(0>=s.length)return A.a(s,-1)
if(s.pop()!=null)return null
return new A.h0(s)},
cH(a,b,c){if(c<0||c>b.length)throw A.f(A.a3(c,0,b.length,null,null))
return this.kF(b,c)},
$ile:1,
$itW:1}
A.h0.prototype={
gX(){var s=this.b
return s.index+s[0].length},
k(a,b){var s=this.b
if(!(b<s.length))return A.a(s,b)
return s[b]},
$ibz:1,
$ify:1}
A.je.prototype={
gJ(a){return new A.fP(this.a,this.b,this.c)}}
A.fP.prototype={
gK(){var s=this.d
return s==null?t.lu.a(s):s},
B(){var s,r,q,p,o,n,m=this,l=m.b
if(l==null)return!1
s=m.c
r=l.length
if(s<=r){q=m.a
p=q.kG(l,s)
if(p!=null){m.d=p
o=p.gX()
if(p.b.index===o){s=!1
if(q.b.unicode){q=m.c
n=q+1
if(n<r){if(!(q>=0&&q<r))return A.a(l,q)
q=l.charCodeAt(q)
if(q>=55296&&q<=56319){if(!(n>=0))return A.a(l,n)
s=l.charCodeAt(n)
s=s>=56320&&s<=57343}}}o=(s?o+1:o)+1}m.c=o
return!0}}m.b=m.d=null
return!1},
$iz:1}
A.fC.prototype={
gX(){return this.a+this.c.length},
k(a,b){if(b!==0)A.a8(A.lm(b,null))
return this.c},
$ibz:1}
A.jw.prototype={
gJ(a){return new A.jx(this.a,this.b,this.c)}}
A.jx.prototype={
B(){var s,r,q=this,p=q.c,o=q.b,n=o.length,m=q.a,l=m.length
if(p+n>l){q.d=null
return!1}s=m.indexOf(o,p)
if(s<0){q.c=l+1
q.d=null
return!1}r=s+n
q.d=new A.fC(s,o)
q.c=r===q.c?r+1:r
return!0},
gK(){var s=this.d
s.toString
return s},
$iz:1}
A.m6.prototype={
lC(){var s=this.b
if(s===this)throw A.f(A.tz(this.a))
return s}}
A.cJ.prototype={
gaP(a){return B.kc},
e1(a,b,c){A.b9(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
hZ(a){return this.e1(a,0,null)},
hW(a,b,c){A.b9(a,b,c)
return c==null?new Int8Array(a,b):new Int8Array(a,b,c)},
e0(a,b,c){A.b9(a,b,c)
c=B.a.Y(a.byteLength-b,2)
return new Uint16Array(a,b,c)},
hX(a){return this.e0(a,0,null)},
hU(a,b,c){A.b9(a,b,c)
c=B.a.Y(a.byteLength-b,2)
return new Int16Array(a,b,c)},
hY(a,b,c){A.b9(a,b,c)
c=B.a.Y(a.byteLength-b,4)
return new Uint32Array(a,b,c)},
hV(a,b,c){A.b9(a,b,c)
c=B.a.Y(a.byteLength-b,4)
return new Int32Array(a,b,c)},
hT(a,b,c){A.b9(a,b,c)
c=B.a.Y(a.byteLength-b,4)
return new Float32Array(a,b,c)},
$iQ:1,
$icJ:1}
A.fa.prototype={
gE(a){if(((a.$flags|0)&2)!==0)return new A.mC(a.buffer)
else return a.buffer},
kZ(a,b,c,d){var s=A.a3(b,0,c,d,null)
throw A.f(s)},
fP(a,b,c,d){if(b>>>0!==b||b>c)this.kZ(a,b,c,d)},
$ia9:1}
A.mC.prototype={
e1(a,b,c){var s=A.nW(this.a,b,c)
s.$flags=3
return s},
hZ(a){return this.e1(0,0,null)},
hW(a,b,c){var s=A.tJ(this.a,b,c)
s.$flags=3
return s},
e0(a,b,c){var s=A.tL(this.a,b,c)
s.$flags=3
return s},
hX(a){return this.e0(0,0,null)},
hU(a,b,c){var s=A.tF(this.a,b,c)
s.$flags=3
return s},
hY(a,b,c){var s=A.tN(this.a,b,c)
s.$flags=3
return s},
hV(a,b,c){var s=A.tH(this.a,b,c)
s.$flags=3
return s},
hT(a,b,c){var s=A.tE(this.a,b,c)
s.$flags=3
return s}}
A.ip.prototype={
gaP(a){return B.kd},
$iQ:1}
A.aD.prototype={
gn(a){return a.length},
hC(a,b,c,d,e){var s,r,q=a.length
this.fP(a,b,q,"start")
this.fP(a,c,q,"end")
if(b>c)throw A.f(A.a3(b,0,c,null,null))
s=c-b
if(e<0)throw A.f(A.W(e,null))
r=d.length
if(r-e<s)throw A.f(A.d_("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$iaz:1,
$ib5:1}
A.ca.prototype={
k(a,b){A.c_(b,a,a.length)
return a[b]},
h(a,b,c){A.vD(c)
a.$flags&2&&A.c(a)
A.c_(b,a,a.length)
a[b]=c},
an(a,b,c,d,e){t.id.a(d)
a.$flags&2&&A.c(a,5)
if(t.dQ.b(d)){this.hC(a,b,c,d,e)
return}this.fD(a,b,c,d,e)},
b5(a,b,c,d){return this.an(a,b,c,d,0)},
$iA:1,
$ih:1,
$in:1}
A.b6.prototype={
h(a,b,c){A.r(c)
a.$flags&2&&A.c(a)
A.c_(b,a,a.length)
a[b]=c},
an(a,b,c,d,e){t.fm.a(d)
a.$flags&2&&A.c(a,5)
if(t.aj.b(d)){this.hC(a,b,c,d,e)
return}this.fD(a,b,c,d,e)},
b5(a,b,c,d){return this.an(a,b,c,d,0)},
$iA:1,
$ih:1,
$in:1}
A.f5.prototype={
gaP(a){return B.ke},
aQ(a,b,c){return new Float32Array(a.subarray(b,A.br(b,c,a.length)))},
$iQ:1,
$iki:1}
A.f6.prototype={
gaP(a){return B.kf},
aQ(a,b,c){return new Float64Array(a.subarray(b,A.br(b,c,a.length)))},
$iQ:1,
$inJ:1}
A.f7.prototype={
gaP(a){return B.kg},
k(a,b){A.c_(b,a,a.length)
return a[b]},
aQ(a,b,c){return new Int16Array(a.subarray(b,A.br(b,c,a.length)))},
$iQ:1,
$ikO:1}
A.f8.prototype={
gaP(a){return B.kh},
k(a,b){A.c_(b,a,a.length)
return a[b]},
aQ(a,b,c){return new Int32Array(a.subarray(b,A.br(b,c,a.length)))},
$iQ:1,
$ii1:1}
A.f9.prototype={
gaP(a){return B.ki},
k(a,b){A.c_(b,a,a.length)
return a[b]},
aQ(a,b,c){return new Int8Array(a.subarray(b,A.br(b,c,a.length)))},
$iQ:1,
$inM:1}
A.fb.prototype={
gaP(a){return B.kk},
k(a,b){A.c_(b,a,a.length)
return a[b]},
aQ(a,b,c){return new Uint16Array(a.subarray(b,A.br(b,c,a.length)))},
$iQ:1,
$ioi:1}
A.fc.prototype={
gaP(a){return B.kl},
k(a,b){A.c_(b,a,a.length)
return a[b]},
aQ(a,b,c){return new Uint32Array(a.subarray(b,A.br(b,c,a.length)))},
$iQ:1,
$ibD:1}
A.fd.prototype={
gaP(a){return B.km},
gn(a){return a.length},
k(a,b){A.c_(b,a,a.length)
return a[b]},
aQ(a,b,c){return new Uint8ClampedArray(a.subarray(b,A.br(b,c,a.length)))},
$iQ:1}
A.cK.prototype={
gaP(a){return B.kn},
gn(a){return a.length},
k(a,b){A.c_(b,a,a.length)
return a[b]},
aQ(a,b,c){return new Uint8Array(a.subarray(b,A.br(b,c,a.length)))},
iY(a,b){return this.aQ(a,b,null)},
$iQ:1,
$icK:1,
$iaP:1}
A.h1.prototype={}
A.h2.prototype={}
A.h3.prototype={}
A.h4.prototype={}
A.bf.prototype={
i(a){return A.mB(v.typeUniverse,this,a)},
aa(a){return A.vm(v.typeUniverse,this,a)}}
A.jq.prototype={}
A.jz.prototype={
t(a){return A.aH(this.a,null)}}
A.jn.prototype={
t(a){return this.a}}
A.hb.prototype={$ibR:1}
A.m1.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:19}
A.m0.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:30}
A.m2.prototype={
$0(){this.a.$0()},
$S:3}
A.m3.prototype={
$0(){this.a.$0()},
$S:3}
A.mx.prototype={
ju(a,b){if(self.setTimeout!=null)self.setTimeout(A.ep(new A.my(this,b),0),a)
else throw A.f(A.a2("`setTimeout()` not found."))}}
A.my.prototype={
$0(){this.b.$0()},
$S:0}
A.jg.prototype={
d7(a){var s,r=this,q=r.$ti
q.i("1/?").a(a)
if(a==null)a=q.c.a(a)
if(!r.b)r.a.en(a)
else{s=r.a
if(q.i("aV<1>").b(a))s.fO(a)
else s.eu(a)}},
d8(a,b){var s=this.a
if(this.b)s.cd(a,b)
else s.cT(a,b)}}
A.mO.prototype={
$1(a){return this.a.$2(0,a)},
$S:6}
A.mP.prototype={
$2(a,b){this.a.$2(1,new A.eB(a,t.l.a(b)))},
$S:45}
A.mZ.prototype={
$2(a,b){this.a(A.r(a),b)},
$S:51}
A.bE.prototype={
t(a){return A.t(this.a)},
$iS:1,
gcQ(){return this.b}}
A.fS.prototype={
d8(a,b){var s,r
t.K.a(a)
t.fw.a(b)
s=this.a
if((s.a&30)!==0)throw A.f(A.d_("Future already completed"))
r=A.w_(a,b)
s.cT(r.a,r.b)},
e4(a){return this.d8(a,null)}}
A.bW.prototype={
d7(a){var s,r=this.$ti
r.i("1/?").a(a)
s=this.a
if((s.a&30)!==0)throw A.f(A.d_("Future already completed"))
s.en(r.i("1/").a(a))}}
A.bX.prototype={
n6(a){if((this.c&15)!==6)return!0
return this.b.b.fp(t.nU.a(this.d),a.a,t.k4,t.K)},
mX(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.ng.b(q))p=l.ns(q,m,a.b,o,n,t.l)
else p=l.fp(t.y.a(q),m,o,n)
try{o=r.$ti.i("2/").a(p)
return o}catch(s){if(t.do.b(A.aR(s))){if((r.c&1)!==0)throw A.f(A.W("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.f(A.W("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.L.prototype={
hB(a){this.a=this.a&1|4
this.c=a},
fs(a,b,c){var s,r,q,p=this.$ti
p.aa(c).i("1/(2)").a(a)
s=$.K
if(s===B.q){if(b!=null&&!t.ng.b(b)&&!t.y.b(b))throw A.f(A.jS(b,"onError",u.c))}else{c.i("@<0/>").aa(p.c).i("1(2)").a(a)
if(b!=null)b=A.wh(b,s)}r=new A.L(s,c.i("L<0>"))
q=b==null?1:3
this.dD(new A.bX(r,q,a,b,p.i("@<1>").aa(c).i("bX<1,2>")))
return r},
fq(a,b){return this.fs(a,null,b)},
hG(a,b,c){var s,r=this.$ti
r.aa(c).i("1/(2)").a(a)
s=new A.L($.K,c.i("L<0>"))
this.dD(new A.bX(s,19,a,b,r.i("@<1>").aa(c).i("bX<1,2>")))
return s},
ef(a){var s,r
t.mY.a(a)
s=this.$ti
r=new A.L($.K,s)
this.dD(new A.bX(r,8,a,null,s.i("bX<1,1>")))
return r},
m1(a){this.a=this.a&1|16
this.c=a},
dF(a){this.a=a.a&30|this.a&1
this.c=a.c},
dD(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.c.a(r.c)
if((s.a&24)===0){s.dD(a)
return}r.dF(s)}A.el(null,null,r.b,t.M.a(new A.ma(r,a)))}},
eQ(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t.c.a(m.c)
if((n.a&24)===0){n.eQ(a)
return}m.dF(n)}l.a=m.dS(a)
A.el(null,null,m.b,t.M.a(new A.mh(l,m)))}},
dR(){var s=t.F.a(this.c)
this.c=null
return this.dS(s)},
dS(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
fN(a){var s,r,q,p=this
p.a^=2
try{a.fs(new A.me(p),new A.mf(p),t.P)}catch(q){s=A.aR(q)
r=A.bk(q)
A.oI(new A.mg(p,s,r))}},
es(a){var s,r=this,q=r.$ti
q.i("1/").a(a)
if(q.i("aV<1>").b(a))if(q.b(a))A.on(a,r)
else r.fN(a)
else{s=r.dR()
q.c.a(a)
r.a=8
r.c=a
A.eg(r,s)}},
eu(a){var s,r=this
r.$ti.c.a(a)
s=r.dR()
r.a=8
r.c=a
A.eg(r,s)},
cd(a,b){var s
t.K.a(a)
t.l.a(b)
s=this.dR()
this.m1(new A.bE(a,b))
A.eg(this,s)},
en(a){var s=this.$ti
s.i("1/").a(a)
if(s.i("aV<1>").b(a)){this.fO(a)
return}this.jR(a)},
jR(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.el(null,null,s.b,t.M.a(new A.mc(s,a)))},
fO(a){var s=this.$ti
s.i("aV<1>").a(a)
if(s.b(a)){A.v_(a,this)
return}this.fN(a)},
cT(a,b){t.l.a(b)
this.a^=2
A.el(null,null,this.b,t.M.a(new A.mb(this,a,b)))},
$iaV:1}
A.ma.prototype={
$0(){A.eg(this.a,this.b)},
$S:0}
A.mh.prototype={
$0(){A.eg(this.b,this.a.a)},
$S:0}
A.me.prototype={
$1(a){var s,r,q,p=this.a
p.a^=2
try{p.eu(p.$ti.c.a(a))}catch(q){s=A.aR(q)
r=A.bk(q)
p.cd(s,r)}},
$S:19}
A.mf.prototype={
$2(a,b){this.a.cd(t.K.a(a),t.l.a(b))},
$S:67}
A.mg.prototype={
$0(){this.a.cd(this.b,this.c)},
$S:0}
A.md.prototype={
$0(){A.on(this.a.a,this.b)},
$S:0}
A.mc.prototype={
$0(){this.a.eu(this.b)},
$S:0}
A.mb.prototype={
$0(){this.a.cd(this.b,this.c)},
$S:0}
A.mk.prototype={
$0(){var s,r,q,p,o,n,m,l=this,k=null
try{q=l.a.a
k=q.b.b.iA(t.mY.a(q.d),t.z)}catch(p){s=A.aR(p)
r=A.bk(p)
if(l.c&&t.n.a(l.b.a.c).a===s){q=l.a
q.c=t.n.a(l.b.a.c)}else{q=s
o=r
if(o==null)o=A.nD(q)
n=l.a
n.c=new A.bE(q,o)
q=n}q.b=!0
return}if(k instanceof A.L&&(k.a&24)!==0){if((k.a&16)!==0){q=l.a
q.c=t.n.a(k.c)
q.b=!0}return}if(k instanceof A.L){m=l.b.a
q=l.a
q.c=k.fq(new A.ml(m),t.z)
q.b=!1}},
$S:0}
A.ml.prototype={
$1(a){return this.a},
$S:32}
A.mj.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.fp(o.i("2/(1)").a(p.d),m,o.i("2/"),n)}catch(l){s=A.aR(l)
r=A.bk(l)
q=s
p=r
if(p==null)p=A.nD(q)
o=this.a
o.c=new A.bE(q,p)
o.b=!0}},
$S:0}
A.mi.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=t.n.a(l.a.a.c)
p=l.b
if(p.a.n6(s)&&p.a.e!=null){p.c=p.a.mX(s)
p.b=!1}}catch(o){r=A.aR(o)
q=A.bk(o)
p=t.n.a(l.a.a.c)
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.nD(p)
m=l.b
m.c=new A.bE(p,n)
p=m}p.b=!0}},
$S:0}
A.jh.prototype={}
A.aw.prototype={
gn(a){var s={},r=new A.L($.K,t.hy)
s.a=0
this.cq(new A.lt(s,this),!0,new A.lu(s,r),r.gfV())
return r},
gcl(a){var s=new A.L($.K,A.k(this).i("L<aw.T>")),r=this.cq(null,!0,new A.lr(s),s.gfV())
r.fh(new A.ls(this,r,s))
return s}}
A.lt.prototype={
$1(a){A.k(this.b).i("aw.T").a(a);++this.a.a},
$S(){return A.k(this.b).i("~(aw.T)")}}
A.lu.prototype={
$0(){this.b.es(this.a.a)},
$S:0}
A.lr.prototype={
$0(){var s,r,q,p,o
try{q=A.eV()
throw A.f(q)}catch(p){s=A.aR(p)
r=A.bk(p)
q=s
o=r
A.qC(q,o)
this.a.cd(q,o)}},
$S:0}
A.ls.prototype={
$1(a){A.vK(this.b,this.c,A.k(this.a).i("aw.T").a(a))},
$S(){return A.k(this.a).i("~(aw.T)")}}
A.d0.prototype={
cq(a,b,c,d){return this.a.cq(A.k(this).i("~(d0.T)?").a(a),!0,t.Z.a(c),d)}}
A.h8.prototype={
glp(){var s,r=this
if((r.b&8)===0)return r.$ti.i("bi<1>?").a(r.a)
s=r.$ti
return s.i("bi<1>?").a(s.i("h9<1>").a(r.a).geU())},
h7(){var s,r,q=this
if((q.b&8)===0){s=q.a
if(s==null)s=q.a=new A.bi(q.$ti.i("bi<1>"))
return q.$ti.i("bi<1>").a(s)}r=q.$ti
s=r.i("h9<1>").a(q.a).geU()
return r.i("bi<1>").a(s)},
gm7(){var s=this.a
if((this.b&8)!==0)s=t.gL.a(s).geU()
return this.$ti.i("ec<1>").a(s)},
m6(a,b,c,d){var s,r,q,p,o,n,m,l=this,k=l.$ti
k.i("~(1)?").a(a)
t.Z.a(c)
if((l.b&3)!==0)throw A.f(A.d_("Stream has already been listened to."))
s=$.K
r=d?1:0
q=A.q0(s,a,k.c)
A.uX(s,b)
p=t.M
o=new A.ec(l,q,p.a(c),s,r|32,k.i("ec<1>"))
n=l.glp()
r=l.b|=1
if((r&8)!==0){m=k.i("h9<1>").a(l.a)
m.seU(o)
m.nr()}else l.a=o
o.m2(n)
k=p.a(new A.mw(l))
s=o.e
o.e=s|64
k.$0()
o.e&=4294967231
o.fQ((s&4)!==0)
return o},
lU(a){var s,r,q,p,o,n,m,l=this,k=l.$ti
k.i("ce<1>").a(a)
s=null
if((l.b&8)!==0)s=k.i("h9<1>").a(l.a).e2()
l.a=null
l.b=l.b&4294967286|2
r=l.r
if(r!=null)if(s==null)try{q=r.$0()
if(q instanceof A.L)s=q}catch(n){p=A.aR(n)
o=A.bk(n)
m=new A.L($.K,t.cU)
m.cT(p,o)
s=m}else s=s.ef(r)
k=new A.mv(l)
if(s!=null)s=s.ef(k)
else k.$0()
return s},
$iqa:1,
$id9:1}
A.mw.prototype={
$0(){A.oA(this.a.d)},
$S:0}
A.mv.prototype={
$0(){},
$S:0}
A.ji.prototype={}
A.ea.prototype={}
A.eb.prototype={
gH(a){return(A.cX(this.a)^892482866)>>>0},
N(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.eb&&b.a===this.a}}
A.ec.prototype={
hq(){return this.w.lU(this)},
hr(){var s=this.w,r=s.$ti
r.i("ce<1>").a(this)
if((s.b&8)!==0)r.i("h9<1>").a(s.a).nI()
A.oA(s.e)},
hs(){var s=this.w,r=s.$ti
r.i("ce<1>").a(this)
if((s.b&8)!==0)r.i("h9<1>").a(s.a).nr()
A.oA(s.f)}}
A.fQ.prototype={
m2(a){var s=this
A.k(s).i("bi<1>?").a(a)
if(a==null)return
s.sdN(a)
if(a.c!=null){s.e|=128
a.ej(s)}},
fh(a){var s=A.k(this)
this.sla(A.q0(this.d,s.i("~(1)?").a(a),s.c))},
e2(){var s=this.e&=4294967279
if((s&8)===0)this.fM()
s=this.f
return s==null?$.jM():s},
fM(){var s,r=this,q=r.e|=8
if((q&128)!==0){s=r.r
if(s.a===1)s.a=3}if((q&64)===0)r.sdN(null)
r.f=r.hq()},
hr(){},
hs(){},
hq(){return null},
jP(a){var s,r=this,q=r.r
if(q==null){q=new A.bi(A.k(r).i("bi<1>"))
r.sdN(q)}q.C(0,a)
s=r.e
if((s&128)===0){s|=128
r.e=s
if(s<256)q.ej(r)}},
lZ(){var s,r=this,q=new A.m4(r)
r.fM()
r.e|=16
s=r.f
if(s!=null&&s!==$.jM())s.ef(q)
else q.$0()},
fQ(a){var s,r,q=this,p=q.e
if((p&128)!==0&&q.r.c==null){p=q.e=p&4294967167
s=!1
if((p&4)!==0)if(p<256){s=q.r
s=s==null?null:s.c==null
s=s!==!1}if(s){p&=4294967291
q.e=p}}for(;!0;a=r){if((p&8)!==0){q.sdN(null)
return}r=(p&4)!==0
if(a===r)break
q.e=p^64
if(r)q.hr()
else q.hs()
p=q.e&=4294967231}if((p&128)!==0&&p<256)q.r.ej(q)},
sla(a){this.a=A.k(this).i("~(1)").a(a)},
sdN(a){this.r=A.k(this).i("bi<1>?").a(a)},
$ice:1,
$id9:1}
A.m4.prototype={
$0(){var s=this.a,r=s.e
if((r&16)===0)return
s.e=r|74
s.d.fo(s.c)
s.e&=4294967231},
$S:0}
A.ha.prototype={
cq(a,b,c,d){var s=this.$ti
s.i("~(1)?").a(a)
t.Z.a(c)
return this.a.m6(s.i("~(1)?").a(a),d,c,!0)}}
A.cj.prototype={
sdf(a){this.a=t.lT.a(a)},
gdf(){return this.a}}
A.fT.prototype={
ir(a){var s,r,q
this.$ti.i("d9<1>").a(a)
s=A.k(a).c
r=s.a(this.b)
q=a.e
a.e=q|64
a.d.iB(a.a,r,s)
a.e&=4294967231
a.fQ((q&4)!==0)}}
A.jm.prototype={
ir(a){a.lZ()},
gdf(){return null},
sdf(a){throw A.f(A.d_("No events after a done."))},
$icj:1}
A.bi.prototype={
ej(a){var s,r=this
r.$ti.i("d9<1>").a(a)
s=r.a
if(s===1)return
if(s>=1){r.a=1
return}A.oI(new A.ms(r,a))
r.a=1},
C(a,b){var s=this,r=s.c
if(r==null)s.b=s.c=b
else{r.sdf(b)
s.c=b}}}
A.ms.prototype={
$0(){var s,r,q,p=this.a,o=p.a
p.a=0
if(o===3)return
s=p.$ti.i("d9<1>").a(this.b)
r=p.b
q=r.gdf()
p.b=q
if(q==null)p.c=null
r.ir(s)},
$S:0}
A.ed.prototype={
fh(a){this.$ti.i("~(1)?").a(a)},
e2(){this.a=-1
this.seM(null)
return $.jM()},
lc(){var s,r=this,q=r.a-1
if(q===0){r.a=-1
s=r.c
if(s!=null){r.seM(null)
r.b.fo(s)}}else r.a=q},
seM(a){this.c=t.Z.a(a)},
$ice:1}
A.jv.prototype={}
A.fV.prototype={
cq(a,b,c,d){var s=this.$ti
s.i("~(1)?").a(a)
t.Z.a(c)
s=new A.ed($.K,s.i("ed<1>"))
A.oI(s.glb())
s.seM(t.M.a(c))
return s}}
A.mQ.prototype={
$0(){return this.a.es(this.b)},
$S:0}
A.hk.prototype={$iq_:1}
A.mX.prototype={
$0(){A.t9(this.a,this.b)},
$S:0}
A.ju.prototype={
fo(a){var s,r,q
t.M.a(a)
try{if(B.q===$.K){a.$0()
return}A.qG(null,null,this,a,t.H)}catch(q){s=A.aR(q)
r=A.bk(q)
A.jF(t.K.a(s),t.l.a(r))}},
iB(a,b,c){var s,r,q
c.i("~(0)").a(a)
c.a(b)
try{if(B.q===$.K){a.$1(b)
return}A.qH(null,null,this,a,b,t.H,c)}catch(q){s=A.aR(q)
r=A.bk(q)
A.jF(t.K.a(s),t.l.a(r))}},
i_(a){return new A.mt(this,t.M.a(a))},
mr(a,b){return new A.mu(this,b.i("~(0)").a(a),b)},
iA(a,b){b.i("0()").a(a)
if($.K===B.q)return a.$0()
return A.qG(null,null,this,a,b)},
fp(a,b,c,d){c.i("@<0>").aa(d).i("1(2)").a(a)
d.a(b)
if($.K===B.q)return a.$1(b)
return A.qH(null,null,this,a,b,c,d)},
ns(a,b,c,d,e,f){d.i("@<0>").aa(e).aa(f).i("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.K===B.q)return a.$2(b,c)
return A.wi(null,null,this,a,b,c,d,e,f)},
fn(a,b,c,d){return b.i("@<0>").aa(c).aa(d).i("1(2,3)").a(a)}}
A.mt.prototype={
$0(){return this.a.fo(this.b)},
$S:0}
A.mu.prototype={
$1(a){var s=this.c
return this.a.iB(this.b,s.a(a),s)},
$S(){return this.c.i("~(0)")}}
A.fZ.prototype={
k(a,b){if(!A.eo(this.y.$1(b)))return null
return this.j1(b)},
h(a,b,c){var s=this.$ti
this.j3(s.c.a(b),s.y[1].a(c))},
a_(a){if(!A.eo(this.y.$1(a)))return!1
return this.j0(a)},
cs(a,b){if(!A.eo(this.y.$1(b)))return null
return this.j2(b)},
cn(a){return this.x.$1(this.$ti.c.a(a))&1073741823},
co(a,b){var s,r,q,p
if(a==null)return-1
s=a.length
for(r=this.$ti.c,q=this.w,p=0;p<s;++p)if(A.eo(q.$2(r.a(a[p].a),r.a(b))))return p
return-1}}
A.mr.prototype={
$1(a){return this.a.b(a)},
$S:63}
A.h_.prototype={
gJ(a){var s=this,r=new A.da(s,s.r,s.$ti.i("da<1>"))
r.c=s.e
return r},
gn(a){return this.a},
gO(a){return this.a===0},
gc7(a){return this.a!==0},
av(a,b){var s,r
if(b!=="__proto__"){s=this.b
if(s==null)return!1
return t.nF.a(s[b])!=null}else{r=this.k6(b)
return r}},
k6(a){var s=this.d
if(s==null)return!1
return this.eD(s[B.d.gH(a)&1073741823],a)>=0},
C(a,b){var s,r,q=this
q.$ti.c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.fR(s==null?q.b=A.oo():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.fR(r==null?q.c=A.oo():r,b)}else return q.jN(b)},
jN(a){var s,r,q,p=this
p.$ti.c.a(a)
s=p.d
if(s==null)s=p.d=A.oo()
r=J.bl(a)&1073741823
q=s[r]
if(q==null)s[r]=[p.er(a)]
else{if(p.eD(q,a)>=0)return!1
q.push(p.er(a))}return!0},
cs(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.fT(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.fT(s.c,b)
else return s.lV(b)},
lV(a){var s,r,q,p,o=this.d
if(o==null)return!1
s=J.bl(a)&1073741823
r=o[s]
q=this.eD(r,a)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete o[s]
this.fU(p)
return!0},
fR(a,b){this.$ti.c.a(b)
if(t.nF.a(a[b])!=null)return!1
a[b]=this.er(b)
return!0},
fT(a,b){var s
if(a==null)return!1
s=t.nF.a(a[b])
if(s==null)return!1
this.fU(s)
delete a[b]
return!0},
eq(){this.r=this.r+1&1073741823},
er(a){var s,r=this,q=new A.jt(r.$ti.c.a(a))
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.eq()
return q},
fU(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.eq()},
eD(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a_(a[r].a,b))return r
return-1}}
A.jt.prototype={}
A.da.prototype={
gK(){var s=this.d
return s==null?this.$ti.c.a(s):s},
B(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.f(A.aK(q))
else if(r==null){s.sfS(null)
return!1}else{s.sfS(s.$ti.i("1?").a(r.a))
s.c=r.b
return!0}},
sfS(a){this.d=this.$ti.i("1?").a(a)},
$iz:1}
A.l2.prototype={
$2(a,b){this.a.h(0,this.b.a(a),this.c.a(b))},
$S:39}
A.y.prototype={
gJ(a){return new A.ah(a,this.gn(a),A.at(a).i("ah<y.E>"))},
aq(a,b){return this.k(a,b)},
gO(a){return this.gn(a)===0},
gc7(a){return!this.gO(a)},
av(a,b){var s,r=this.gn(a)
for(s=0;s<r;++s){if(J.a_(this.k(a,s),b))return!0
if(r!==this.gn(a))throw A.f(A.aK(a))}return!1},
bA(a,b){return A.cf(a,b,null,A.at(a).i("y.E"))},
iC(a,b){return A.cf(a,0,A.jH(b,"count",t.p),A.at(a).i("y.E"))},
c0(a,b){var s,r,q,p,o=this
if(o.gO(a)){s=J.id(0,A.at(a).i("y.E"))
return s}r=o.k(a,0)
q=A.a1(o.gn(a),r,!0,A.at(a).i("y.E"))
for(p=1;p<o.gn(a);++p)B.c.h(q,p,o.k(a,p))
return q},
ed(a){return this.c0(a,!0)},
C(a,b){var s
A.at(a).i("y.E").a(b)
s=this.gn(a)
this.sn(a,s+1)
this.h(a,s,b)},
e3(a,b){return new A.bG(a,A.at(a).i("@<y.E>").aa(b).i("bG<1,2>"))},
dA(a,b){var s,r=A.at(a)
r.i("i(y.E,y.E)?").a(b)
s=b==null?A.wC():b
A.iQ(a,0,this.gn(a)-1,s,r.i("y.E"))},
aQ(a,b,c){var s=this.gn(a)
A.b7(b,c,s)
return A.x(this.du(a,b,c),!0,A.at(a).i("y.E"))},
du(a,b,c){A.b7(b,c,this.gn(a))
return A.cf(a,b,c,A.at(a).i("y.E"))},
aS(a,b,c,d){var s
A.at(a).i("y.E?").a(d)
A.b7(b,c,this.gn(a))
for(s=b;s<c;++s)this.h(a,s,d)},
an(a,b,c,d,e){var s,r,q,p,o=A.at(a)
o.i("h<y.E>").a(d)
A.b7(b,c,this.gn(a))
s=c-b
if(s===0)return
A.aZ(e,"skipCount")
if(o.i("n<y.E>").b(d)){r=e
q=d}else{q=J.jR(d,e).c0(0,!1)
r=0}o=J.R(q)
if(r+s>o.gn(q))throw A.f(A.pr())
if(r<b)for(p=s-1;p>=0;--p)this.h(a,b+p,o.k(q,r+p))
else for(p=0;p<s;++p)this.h(a,b+p,o.k(q,r+p))},
b5(a,b,c,d){return this.an(a,b,c,d,0)},
iS(a,b,c){var s,r
A.at(a).i("h<y.E>").a(c)
if(t.j.b(c))this.b5(a,b,b+c.length,c)
else for(s=J.ap(c);s.B();b=r){r=b+1
this.h(a,b,s.gK())}},
t(a){return A.nO(a,"[","]")},
$iA:1,
$ih:1,
$in:1}
A.P.prototype={
aK(a,b){var s,r,q,p=A.k(this)
p.i("~(P.K,P.V)").a(b)
for(s=this.gb8(),s=s.gJ(s),p=p.i("P.V");s.B();){r=s.gK()
q=this.k(0,r)
b.$2(r,q==null?p.a(q):q)}},
gi7(){return this.gb8().im(0,new A.l4(this),A.k(this).i("aG<P.K,P.V>"))},
a_(a){return this.gb8().av(0,a)},
gn(a){var s=this.gb8()
return s.gn(s)},
gO(a){var s=this.gb8()
return s.gO(s)},
t(a){return A.l5(this)},
$iM:1}
A.l4.prototype={
$1(a){var s=this.a,r=A.k(s)
r.i("P.K").a(a)
s=s.k(0,a)
if(s==null)s=r.i("P.V").a(s)
return new A.aG(a,s,r.i("aG<P.K,P.V>"))},
$S(){return A.k(this.a).i("aG<P.K,P.V>(P.K)")}}
A.l6.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.t(a)
s=r.a+=s
r.a=s+": "
s=A.t(b)
r.a+=s},
$S:15}
A.jB.prototype={
h(a,b,c){var s=A.k(this)
s.c.a(b)
s.y[1].a(c)
throw A.f(A.a2("Cannot modify unmodifiable map"))}}
A.f3.prototype={
k(a,b){return this.a.k(0,b)},
h(a,b,c){var s=A.k(this)
this.a.h(0,s.c.a(b),s.y[1].a(c))},
a_(a){return this.a.a_(a)},
aK(a,b){this.a.aK(0,A.k(this).i("~(1,2)").a(b))},
gO(a){var s=this.a
return s.gO(s)},
gn(a){var s=this.a
return s.gn(s)},
gb8(){return this.a.gb8()},
t(a){return this.a.t(0)},
$iM:1}
A.d5.prototype={}
A.e1.prototype={
gO(a){return this.a===0},
gc7(a){return this.a!==0},
t(a){return A.nO(this,"{","}")},
bA(a,b){return A.pN(this,b,this.$ti.c)},
aq(a,b){var s,r,q,p=this
A.aZ(b,"index")
s=A.q3(p,p.r,p.$ti.c)
for(r=b;s.B();){if(r===0){q=s.d
return q==null?s.$ti.c.a(q):q}--r}throw A.f(A.kM(b,b-r,p,"index"))},
$iA:1,
$ih:1,
$iod:1}
A.h6.prototype={}
A.hf.prototype={}
A.jr.prototype={
k(a,b){var s,r=this.b
if(r==null)return this.c.k(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.k7(b):s}},
gn(a){return this.b==null?this.c.a:this.cX().length},
gO(a){return this.gn(0)===0},
gb8(){if(this.b==null){var s=this.c
return new A.aX(s,A.k(s).i("aX<1>"))}return new A.js(this)},
h(a,b,c){var s,r,q=this
A.I(b)
if(q.b==null)q.c.h(0,b,c)
else if(q.a_(b)){s=q.b
s[b]=c
r=q.a
if(r==null?s!=null:r!==s)r[b]=null}else q.m9().h(0,b,c)},
a_(a){if(this.b==null)return this.c.a_(a)
return Object.prototype.hasOwnProperty.call(this.a,a)},
aK(a,b){var s,r,q,p,o=this
t.lc.a(b)
if(o.b==null)return o.c.aK(0,b)
s=o.cX()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.mR(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.f(A.aK(o))}},
cX(){var s=t.lH.a(this.c)
if(s==null)s=this.c=A.b(Object.keys(this.a),t.s)
return s},
m9(){var s,r,q,p,o,n=this
if(n.b==null)return n.c
s=A.H(t.N,t.z)
r=n.cX()
for(q=0;p=r.length,q<p;++q){o=r[q]
s.h(0,o,n.k(0,o))}if(p===0)B.c.C(r,"")
else B.c.eY(r)
n.a=n.b=null
return n.c=s},
k7(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.mR(this.a[a])
return this.b[a]=s}}
A.js.prototype={
gn(a){return this.a.gn(0)},
aq(a,b){var s=this.a
if(s.b==null)s=s.gb8().aq(0,b)
else{s=s.cX()
if(!(b>=0&&b<s.length))return A.a(s,b)
s=s[b]}return s},
gJ(a){var s=this.a
if(s.b==null){s=s.gb8()
s=s.gJ(s)}else{s=s.cX()
s=new J.cu(s,s.length,A.Z(s).i("cu<1>"))}return s},
av(a,b){return this.a.a_(b)}}
A.mK.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:16}
A.mJ.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:16}
A.hu.prototype={
gca(){return"us-ascii"},
e5(a){return B.cf.bV(a)},
bk(a){var s
t.L.a(a)
s=B.ce.bV(a)
return s}}
A.mA.prototype={
bV(a){var s,r,q,p=a.length,o=A.b7(0,null,p),n=new Uint8Array(o)
for(s=~this.a,r=0;r<o;++r){if(!(r<p))return A.a(a,r)
q=a.charCodeAt(r)
if((q&s)!==0)throw A.f(A.jS(a,"string","Contains invalid characters."))
if(!(r<o))return A.a(n,r)
n[r]=q}return n}}
A.jV.prototype={}
A.mz.prototype={
bV(a){var s,r,q,p,o
t.L.a(a)
s=a.length
r=A.b7(0,null,s)
for(q=~this.b,p=0;p<r;++p){if(!(p<s))return A.a(a,p)
o=a[p]
if((o&q)!==0){if(!this.a)throw A.f(A.ag("Invalid value in input: "+o,null,null))
return this.k8(a,0,r)}}return A.bC(a,0,r)},
k8(a,b,c){var s,r,q,p,o
t.L.a(a)
for(s=~this.b,r=a.length,q=b,p="";q<c;++q){if(!(q<r))return A.a(a,q)
o=a[q]
p+=A.T((o&s)!==0?65533:o)}return p.charCodeAt(0)==0?p:p}}
A.jU.prototype={}
A.hw.prototype={
na(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a1="Invalid base64 encoding length ",a2=a3.length
a5=A.b7(a4,a5,a2)
s=$.rq()
for(r=s.length,q=a4,p=q,o=null,n=-1,m=-1,l=0;q<a5;q=k){k=q+1
if(!(q<a2))return A.a(a3,q)
j=a3.charCodeAt(q)
if(j===37){i=k+2
if(i<=a5){if(!(k<a2))return A.a(a3,k)
h=A.ng(a3.charCodeAt(k))
g=k+1
if(!(g<a2))return A.a(a3,g)
f=A.ng(a3.charCodeAt(g))
e=h*16+f-(f&256)
if(e===37)e=-1
k=i}else e=-1}else e=j
if(0<=e&&e<=127){if(!(e>=0&&e<r))return A.a(s,e)
d=s[e]
if(d>=0){if(!(d<64))return A.a(a0,d)
e=a0.charCodeAt(d)
if(e===j)continue
j=e}else{if(d===-1){if(n<0){g=o==null?null:o.a.length
if(g==null)g=0
n=g+(q-p)
m=q}++l
if(j===61)continue}j=e}if(d!==-2){if(o==null){o=new A.am("")
g=o}else g=o
g.a+=B.d.I(a3,p,q)
c=A.T(j)
g.a+=c
p=k
continue}}throw A.f(A.ag("Invalid base64 data",a3,q))}if(o!=null){a2=B.d.I(a3,p,a5)
a2=o.a+=a2
r=a2.length
if(n>=0)A.oY(a3,m,a5,n,l,r)
else{b=B.a.ae(r-1,4)+1
if(b===1)throw A.f(A.ag(a1,a3,a5))
for(;b<4;){a2+="="
o.a=a2;++b}}a2=o.a
return B.d.ct(a3,a4,a5,a2.charCodeAt(0)==0?a2:a2)}a=a5-a4
if(n>=0)A.oY(a3,m,a5,n,l,a)
else{b=B.a.ae(a,4)
if(b===1)throw A.f(A.ag(a1,a3,a5))
if(b>1)a3=B.d.ct(a3,a5,a5,b===2?"==":"=")}return a3}}
A.jW.prototype={}
A.k3.prototype={}
A.jj.prototype={
C(a,b){var s,r,q,p,o,n=this
t.fm.a(b)
s=n.b
r=n.c
q=J.R(b)
if(q.gn(b)>s.length-r){s=n.b
p=q.gn(b)+s.length-1
p|=B.a.l(p,1)
p|=p>>>2
p|=p>>>4
p|=p>>>8
o=new Uint8Array((((p|p>>>16)>>>0)+1)*2)
s=n.b
B.f.b5(o,0,s.length,s)
n.sjU(o)}s=n.b
r=n.c
B.f.b5(s,r,r+q.gn(b),b)
n.c=n.c+q.gn(b)},
eZ(){this.a.$1(B.f.aQ(this.b,0,this.c))},
sjU(a){this.b=t.L.a(a)}}
A.bH.prototype={}
A.hG.prototype={}
A.c4.prototype={}
A.f1.prototype={
t(a){var s=A.eA(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.il.prototype={
t(a){return"Cyclic error in JSON stringify"}}
A.ik.prototype={
mC(a,b){var s=A.wf(a,this.gmK().a)
return s},
mN(a,b){var s=A.v5(a,this.gmO().b,null)
return s},
gmO(){return B.d_},
gmK(){return B.cZ}}
A.kZ.prototype={}
A.kY.prototype={}
A.mp.prototype={
iL(a){var s,r,q,p,o,n,m=a.length
for(s=this.c,r=0,q=0;q<m;++q){p=a.charCodeAt(q)
if(p>92){if(p>=55296){o=p&64512
if(o===55296){n=q+1
n=!(n<m&&(a.charCodeAt(n)&64512)===56320)}else n=!1
if(!n)if(o===56320){o=q-1
o=!(o>=0&&(a.charCodeAt(o)&64512)===55296)}else o=!1
else o=!0
if(o){if(q>r)s.a+=B.d.I(a,r,q)
r=q+1
o=A.T(92)
s.a+=o
o=A.T(117)
s.a+=o
o=A.T(100)
s.a+=o
o=p>>>8&15
o=A.T(o<10?48+o:87+o)
s.a+=o
o=p>>>4&15
o=A.T(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.T(o<10?48+o:87+o)
s.a+=o}}continue}if(p<32){if(q>r)s.a+=B.d.I(a,r,q)
r=q+1
o=A.T(92)
s.a+=o
switch(p){case 8:o=A.T(98)
s.a+=o
break
case 9:o=A.T(116)
s.a+=o
break
case 10:o=A.T(110)
s.a+=o
break
case 12:o=A.T(102)
s.a+=o
break
case 13:o=A.T(114)
s.a+=o
break
default:o=A.T(117)
s.a+=o
o=A.T(48)
s.a+=o
o=A.T(48)
s.a+=o
o=p>>>4&15
o=A.T(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.T(o<10?48+o:87+o)
s.a+=o
break}}else if(p===34||p===92){if(q>r)s.a+=B.d.I(a,r,q)
r=q+1
o=A.T(92)
s.a+=o
o=A.T(p)
s.a+=o}}if(r===0)s.a+=a
else if(r<m)s.a+=B.d.I(a,r,m)},
eo(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.f(new A.il(a,null))}B.c.C(s,a)},
eg(a){var s,r,q,p,o=this
if(o.iK(a))return
o.eo(a)
try{s=o.b.$1(a)
if(!o.iK(s)){q=A.pv(a,null,o.ght())
throw A.f(q)}q=o.a
if(0>=q.length)return A.a(q,-1)
q.pop()}catch(p){r=A.aR(p)
q=A.pv(a,r,o.ght())
throw A.f(q)}},
iK(a){var s,r,q,p=this
if(typeof a=="number"){if(!isFinite(a))return!1
s=p.c
r=B.b.t(a)
s.a+=r
return!0}else if(a===!0){p.c.a+="true"
return!0}else if(a===!1){p.c.a+="false"
return!0}else if(a==null){p.c.a+="null"
return!0}else if(typeof a=="string"){s=p.c
s.a+='"'
p.iL(a)
s.a+='"'
return!0}else if(t.j.b(a)){p.eo(a)
p.nz(a)
s=p.a
if(0>=s.length)return A.a(s,-1)
s.pop()
return!0}else if(t.av.b(a)){p.eo(a)
q=p.nA(a)
s=p.a
if(0>=s.length)return A.a(s,-1)
s.pop()
return q}else return!1},
nz(a){var s,r,q=this.c
q.a+="["
s=J.R(a)
if(s.gc7(a)){this.eg(s.k(a,0))
for(r=1;r<s.gn(a);++r){q.a+=","
this.eg(s.k(a,r))}}q.a+="]"},
nA(a){var s,r,q,p,o,n,m=this,l={}
if(a.gO(a)){m.c.a+="{}"
return!0}s=a.gn(a)*2
r=A.a1(s,null,!1,t.iD)
q=l.a=0
l.b=!0
a.aK(0,new A.mq(l,r))
if(!l.b)return!1
p=m.c
p.a+="{"
for(o='"';q<s;q+=2,o=',"'){p.a+=o
m.iL(A.I(r[q]))
p.a+='":'
n=q+1
if(!(n<s))return A.a(r,n)
m.eg(r[n])}p.a+="}"
return!0}}
A.mq.prototype={
$2(a,b){var s,r
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
B.c.h(s,r.a++,a)
B.c.h(s,r.a++,b)},
$S:15}
A.mo.prototype={
ght(){var s=this.c.a
return s.charCodeAt(0)==0?s:s}}
A.im.prototype={
gca(){return"iso-8859-1"},
e5(a){return B.d1.bV(a)},
bk(a){var s
t.L.a(a)
s=B.d0.bV(a)
return s}}
A.l0.prototype={}
A.l_.prototype={}
A.j7.prototype={
gca(){return"utf-8"},
i5(a,b){t.L.a(a)
return(b===!0?B.kp:B.ko).bV(a)},
bk(a){return this.i5(a,null)},
e5(a){return B.cC.bV(a)}}
A.lJ.prototype={
bV(a){var s,r,q,p=a.length,o=A.b7(0,null,p)
if(o===0)return new Uint8Array(0)
s=new Uint8Array(o*3)
r=new A.mL(s)
if(r.kL(a,0,o)!==o){q=o-1
if(!(q>=0&&q<p))return A.a(a,q)
r.eV()}return B.f.aQ(s,0,r.b)}}
A.mL.prototype={
eV(){var s,r=this,q=r.c,p=r.b,o=r.b=p+1
q.$flags&2&&A.c(q)
s=q.length
if(!(p<s))return A.a(q,p)
q[p]=239
p=r.b=o+1
if(!(o<s))return A.a(q,o)
q[o]=191
r.b=p+1
if(!(p<s))return A.a(q,p)
q[p]=189},
mk(a,b){var s,r,q,p,o,n=this
if((b&64512)===56320){s=65536+((a&1023)<<10)|b&1023
r=n.c
q=n.b
p=n.b=q+1
r.$flags&2&&A.c(r)
o=r.length
if(!(q<o))return A.a(r,q)
r[q]=s>>>18|240
q=n.b=p+1
if(!(p<o))return A.a(r,p)
r[p]=s>>>12&63|128
p=n.b=q+1
if(!(q<o))return A.a(r,q)
r[q]=s>>>6&63|128
n.b=p+1
if(!(p<o))return A.a(r,p)
r[p]=s&63|128
return!0}else{n.eV()
return!1}},
kL(a,b,c){var s,r,q,p,o,n,m,l,k=this
if(b!==c){s=c-1
if(!(s>=0&&s<a.length))return A.a(a,s)
s=(a.charCodeAt(s)&64512)===55296}else s=!1
if(s)--c
for(s=k.c,r=s.$flags|0,q=s.length,p=a.length,o=b;o<c;++o){if(!(o<p))return A.a(a,o)
n=a.charCodeAt(o)
if(n<=127){m=k.b
if(m>=q)break
k.b=m+1
r&2&&A.c(s)
s[m]=n}else{m=n&64512
if(m===55296){if(k.b+4>q)break
m=o+1
if(!(m<p))return A.a(a,m)
if(k.mk(n,a.charCodeAt(m)))o=m}else if(m===56320){if(k.b+3>q)break
k.eV()}else if(n<=2047){m=k.b
l=m+1
if(l>=q)break
k.b=l
r&2&&A.c(s)
if(!(m<q))return A.a(s,m)
s[m]=n>>>6|192
k.b=l+1
s[l]=n&63|128}else{m=k.b
if(m+2>=q)break
l=k.b=m+1
r&2&&A.c(s)
if(!(m<q))return A.a(s,m)
s[m]=n>>>12|224
m=k.b=l+1
if(!(l<q))return A.a(s,l)
s[l]=n>>>6&63|128
k.b=m+1
if(!(m<q))return A.a(s,m)
s[m]=n&63|128}}}return o}}
A.j8.prototype={
bV(a){return new A.jC(this.a).fW(t.L.a(a),0,null,!0)}}
A.jC.prototype={
fW(a,b,c,d){var s,r,q,p,o,n,m,l=this
t.L.a(a)
s=A.b7(b,c,J.aq(a))
if(b===s)return""
if(a instanceof Uint8Array){r=a
q=r
p=0}else{q=A.vA(a,b,s)
s-=b
p=b
b=0}if(s-b>=15){o=l.a
n=A.vz(o,q,b,s)
if(n!=null){if(!o)return n
if(n.indexOf("\ufffd")<0)return n}}n=l.ey(q,b,s,!0)
o=l.b
if((o&1)!==0){m=A.vB(o)
l.b=0
throw A.f(A.ag(m,a,p+l.c))}return n},
ey(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.a.Y(b+c,2)
r=q.ey(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.ey(a,s,c,d)}return q.mG(a,b,c,d)},
mG(a,b,a0,a1){var s,r,q,p,o,n,m,l,k=this,j="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",i=" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",h=65533,g=k.b,f=k.c,e=new A.am(""),d=b+1,c=a.length
if(!(b>=0&&b<c))return A.a(a,b)
s=a[b]
$label0$0:for(r=k.a;!0;){for(;!0;d=o){if(!(s>=0&&s<256))return A.a(j,s)
q=j.charCodeAt(s)&31
f=g<=32?s&61694>>>q:(s&63|f<<6)>>>0
p=g+q
if(!(p>=0&&p<144))return A.a(i,p)
g=i.charCodeAt(p)
if(g===0){p=A.T(f)
e.a+=p
if(d===a0)break $label0$0
break}else if((g&1)!==0){if(r)switch(g){case 69:case 67:p=A.T(h)
e.a+=p
break
case 65:p=A.T(h)
e.a+=p;--d
break
default:p=A.T(h)
p=e.a+=p
e.a=p+A.T(h)
break}else{k.b=g
k.c=d-1
return""}g=0}if(d===a0)break $label0$0
o=d+1
if(!(d>=0&&d<c))return A.a(a,d)
s=a[d]}o=d+1
if(!(d>=0&&d<c))return A.a(a,d)
s=a[d]
if(s<128){while(!0){if(!(o<a0)){n=a0
break}m=o+1
if(!(o>=0&&o<c))return A.a(a,o)
s=a[o]
if(s>=128){n=m-1
o=m
break}o=m}if(n-d<20)for(l=d;l<n;++l){if(!(l<c))return A.a(a,l)
p=A.T(a[l])
e.a+=p}else{p=A.bC(a,d,n)
e.a+=p}if(n===a0)break $label0$0
d=o}else d=o}if(a1&&g>32)if(r){c=A.T(h)
e.a+=c}else{k.b=77
k.c=a0
return""}k.b=g
k.c=f
c=e.a
return c.charCodeAt(0)==0?c:c}}
A.mH.prototype={
$2(a,b){var s,r
A.I(a)
if(typeof b=="string")this.a.set(a,b)
else if(b==null)this.a.set(a,"")
else for(s=J.ap(t.U.a(b)),r=this.a;s.B();){b=s.gK()
if(typeof b=="string")r.append(a,b)
else if(b==null)r.append(a,"")
else A.ej(b)}},
$S:17}
A.m7.prototype={
t(a){return this.ap()}}
A.S.prototype={
gcQ(){return A.tR(this)}}
A.eq.prototype={
t(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.eA(s)
return"Assertion failed"}}
A.bR.prototype={}
A.bb.prototype={
geB(){return"Invalid argument"+(!this.a?"(s)":"")},
geA(){return""},
t(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.t(p),n=s.geB()+q+o
if(!s.a)return n
return n+s.geA()+": "+A.eA(s.gfb())},
gfb(){return this.b}}
A.dZ.prototype={
gfb(){return A.vE(this.b)},
geB(){return"RangeError"},
geA(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.t(q):""
else if(q==null)s=": Not greater than or equal to "+A.t(r)
else if(q>r)s=": Not in inclusive range "+A.t(r)+".."+A.t(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.t(r)
return s}}
A.hY.prototype={
gfb(){return A.r(this.b)},
geB(){return"RangeError"},
geA(){if(A.r(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gn(a){return this.f}}
A.fF.prototype={
t(a){return"Unsupported operation: "+this.a}}
A.j3.prototype={
t(a){return"UnimplementedError: "+this.a}}
A.e4.prototype={
t(a){return"Bad state: "+this.a}}
A.hF.prototype={
t(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.eA(s)+"."}}
A.it.prototype={
t(a){return"Out of Memory"},
gcQ(){return null},
$iS:1}
A.fB.prototype={
t(a){return"Stack Overflow"},
gcQ(){return null},
$iS:1}
A.jo.prototype={
t(a){return"Exception: "+this.a},
$iaf:1}
A.c5.prototype={
t(a){var s,r,q,p,o,n,m,l,k,j,i,h=this.a,g=""!==h?"FormatException: "+h:"FormatException",f=this.c,e=this.b
if(typeof e=="string"){if(f!=null)s=f<0||f>e.length
else s=!1
if(s)f=null
if(f==null){if(e.length>78)e=B.d.I(e,0,75)+"..."
return g+"\n"+e}for(r=e.length,q=1,p=0,o=!1,n=0;n<f;++n){if(!(n<r))return A.a(e,n)
m=e.charCodeAt(n)
if(m===10){if(p!==n||!o)++q
p=n+1
o=!1}else if(m===13){++q
p=n+1
o=!0}}g=q>1?g+(" (at line "+q+", character "+(f-p+1)+")\n"):g+(" (at character "+(f+1)+")\n")
for(n=f;n<r;++n){if(!(n>=0))return A.a(e,n)
m=e.charCodeAt(n)
if(m===10||m===13){r=n
break}}l=""
if(r-p>78){k="..."
if(f-p<75){j=p+75
i=p}else{if(r-f<75){i=r-75
j=r
k=""}else{i=f-36
j=f+36}l="..."}}else{j=r
i=p
k=""}return g+l+B.d.I(e,i,j)+k+"\n"+B.d.bP(" ",f-i+l.length)+"^\n"}else return f!=null?g+(" (at offset "+A.t(f)+")"):g},
$iaf:1,
gio(){return this.a},
gdB(){return this.b},
gaL(){return this.c}}
A.h.prototype={
e3(a,b){return A.k8(this,A.k(this).i("h.E"),b)},
im(a,b,c){var s=A.k(this)
return A.nV(this,s.aa(c).i("1(h.E)").a(b),s.i("h.E"),c)},
av(a,b){var s
for(s=this.gJ(this);s.B();)if(J.a_(s.gK(),b))return!0
return!1},
c0(a,b){return A.x(this,b,A.k(this).i("h.E"))},
ed(a){return this.c0(0,!0)},
gn(a){var s,r=this.gJ(this)
for(s=0;r.B();)++s
return s},
gO(a){return!this.gJ(this).B()},
gc7(a){return!this.gO(this)},
bA(a,b){return A.pN(this,b,A.k(this).i("h.E"))},
aq(a,b){var s,r
A.aZ(b,"index")
s=this.gJ(this)
for(r=b;s.B();){if(r===0)return s.gK();--r}throw A.f(A.kM(b,b-r,this,"index"))},
t(a){return A.tv(this,"(",")")}}
A.aG.prototype={
t(a){return"MapEntry("+A.t(this.a)+": "+A.t(this.b)+")"}}
A.ar.prototype={
gH(a){return A.B.prototype.gH.call(this,0)},
t(a){return"null"}}
A.B.prototype={$iB:1,
N(a,b){return this===b},
gH(a){return A.cX(this)},
t(a){return"Instance of '"+A.lh(this)+"'"},
gaP(a){return A.ne(this)},
toString(){return this.t(this)}}
A.jy.prototype={
t(a){return""},
$ib_:1}
A.am.prototype={
gn(a){return this.a.length},
t(a){var s=this.a
return s.charCodeAt(0)==0?s:s},
$iu1:1}
A.lI.prototype={
$2(a,b){var s,r,q,p
t.f.a(a)
A.I(b)
s=B.d.c6(b,"=")
if(s===-1){if(b!=="")a.h(0,A.hj(b,0,b.length,this.a,!0),"")}else if(s!==0){r=B.d.I(b,0,s)
q=B.d.aI(b,s+1)
p=this.a
a.h(0,A.hj(r,0,r.length,p,!0),A.hj(q,0,q.length,p,!0))}return a},
$S:64}
A.lE.prototype={
$2(a,b){throw A.f(A.ag("Illegal IPv4 address, "+a,this.a,b))},
$S:36}
A.lG.prototype={
$2(a,b){throw A.f(A.ag("Illegal IPv6 address, "+a,this.a,b))},
$S:58}
A.lH.prototype={
$2(a,b){var s
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
s=A.hp(B.d.I(this.b,a,b),16)
if(s<0||s>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return s},
$S:18}
A.hg.prototype={
ghF(){var s,r,q,p,o=this,n=o.w
if(n===$){s=o.a
r=s.length!==0?""+s+":":""
q=o.c
p=q==null
if(!p||s==="file"){s=r+"//"
r=o.b
if(r.length!==0)s=s+r+"@"
if(!p)s+=q
r=o.d
if(r!=null)s=s+":"+A.t(r)}else s=r
s+=o.e
r=o.f
if(r!=null)s=s+"?"+r
r=o.r
if(r!=null)s=s+"#"+r
n!==$&&A.jL("_text")
n=o.w=s.charCodeAt(0)==0?s:s}return n},
gnc(){var s,r,q,p=this,o=p.x
if(o===$){s=p.e
r=s.length
if(r!==0){if(0>=r)return A.a(s,0)
r=s.charCodeAt(0)===47}else r=!1
if(r)s=B.d.aI(s,1)
q=s.length===0?B.ik:A.tC(new A.aC(A.b(s.split("/"),t.s),t.ha.a(A.wK()),t.o8),t.N)
p.x!==$&&A.jL("pathSegments")
p.sjL(q)
o=q}return o},
gH(a){var s,r=this,q=r.y
if(q===$){s=B.d.gH(r.ghF())
r.y!==$&&A.jL("hashCode")
r.y=s
q=s}return q},
gfl(){var s,r,q=this,p=q.z
if(p===$){s=q.f
r=new A.d5(A.pV(s==null?"":s),t.h)
q.z!==$&&A.jL("queryParameters")
q.sjM(r)
p=r}return p},
gfu(){return this.b},
gcm(){var s=this.c
if(s==null)return""
if(B.d.ah(s,"["))return B.d.I(s,1,s.length-1)
return s},
gdh(){var s=this.d
return s==null?A.qh(this.a):s},
gcJ(){var s=this.f
return s==null?"":s},
ge7(){var s=this.r
return s==null?"":s},
n3(a){var s=this.a
if(a.length!==s.length)return!1
return A.vL(a,s,0)>=0},
iy(a){var s,r,q,p,o,n,m,l=this
a=A.mI(a,0,a.length)
s=a==="file"
r=l.b
q=l.d
if(a!==l.a)q=A.mE(q,a)
p=l.c
if(!(p!=null))p=r.length!==0||q!=null||s?"":null
o=l.e
if(!s)n=p!=null&&o.length!==0
else n=!0
if(n&&!B.d.ah(o,"/"))o="/"+o
m=o
return A.hh(a,r,p,q,m,l.f,l.r)},
hk(a,b){var s,r,q,p,o,n,m,l,k
for(s=0,r=0;B.d.ao(b,"../",r);){r+=3;++s}q=B.d.fd(a,"/")
p=a.length
while(!0){if(!(q>0&&s>0))break
o=B.d.ea(a,"/",q-1)
if(o<0)break
n=q-o
m=n!==2
l=!1
if(!m||n===3){k=o+1
if(!(k<p))return A.a(a,k)
if(a.charCodeAt(k)===46)if(m){m=o+2
if(!(m<p))return A.a(a,m)
m=a.charCodeAt(m)===46}else m=!0
else m=l}else m=l
if(m)break;--s
q=o}return B.d.ct(a,q+1,null,B.d.aI(b,r-3*s))},
iz(a){return this.dj(A.lF(a))},
dj(a){var s,r,q,p,o,n,m,l,k,j,i,h=this
if(a.gbc().length!==0)return a
else{s=h.a
if(a.gf7()){r=a.iy(s)
return r}else{q=h.b
p=h.c
o=h.d
n=h.e
if(a.gic())m=a.ge9()?a.gcJ():h.f
else{l=A.vy(h,n)
if(l>0){k=B.d.I(n,0,l)
n=a.gf6()?k+A.db(a.gbu()):k+A.db(h.hk(B.d.aI(n,k.length),a.gbu()))}else if(a.gf6())n=A.db(a.gbu())
else if(n.length===0)if(p==null)n=s.length===0?a.gbu():A.db(a.gbu())
else n=A.db("/"+a.gbu())
else{j=h.hk(n,a.gbu())
r=s.length===0
if(!r||p!=null||B.d.ah(n,"/"))n=A.db(j)
else n=A.ou(j,!r||p!=null)}m=a.ge9()?a.gcJ():null}}}i=a.gf8()?a.ge7():null
return A.hh(s,q,p,o,n,m,i)},
gf7(){return this.c!=null},
ge9(){return this.f!=null},
gf8(){return this.r!=null},
gic(){return this.e.length===0},
gf6(){return B.d.ah(this.e,"/")},
ft(){var s,r=this,q=r.a
if(q!==""&&q!=="file")throw A.f(A.a2("Cannot extract a file path from a "+q+" URI"))
q=r.f
if((q==null?"":q)!=="")throw A.f(A.a2(u.y))
q=r.r
if((q==null?"":q)!=="")throw A.f(A.a2(u.l))
if(r.c!=null&&r.gcm()!=="")A.a8(A.a2(u.j))
s=r.gnc()
A.vq(s,!1)
q=A.of(B.d.ah(r.e,"/")?""+"/":"",s,"/")
q=q.charCodeAt(0)==0?q:q
return q},
t(a){return this.ghF()},
N(a,b){var s,r,q,p=this
if(b==null)return!1
if(p===b)return!0
s=!1
if(t.R.b(b))if(p.a===b.gbc())if(p.c!=null===b.gf7())if(p.b===b.gfu())if(p.gcm()===b.gcm())if(p.gdh()===b.gdh())if(p.e===b.gbu()){r=p.f
q=r==null
if(!q===b.ge9()){if(q)r=""
if(r===b.gcJ()){r=p.r
q=r==null
if(!q===b.gf8()){s=q?"":r
s=s===b.ge7()}}}}return s},
sjL(a){this.x=t.W.a(a)},
sjM(a){this.z=t.f.a(a)},
$ie6:1,
gbc(){return this.a},
gbu(){return this.e}}
A.mD.prototype={
$1(a){return A.ov(B.fV,A.I(a),B.u,!1)},
$S:8}
A.mG.prototype={
$2(a,b){var s=this.b,r=this.a
s.a+=r.a
r.a="&"
r=A.ov(B.a_,a,B.u,!0)
r=s.a+=r
if(b!=null&&b.length!==0){s.a=r+"="
r=A.ov(B.a_,b,B.u,!0)
s.a+=r}},
$S:61}
A.mF.prototype={
$2(a,b){var s,r
A.I(a)
if(b==null||typeof b=="string")this.a.$2(a,A.ej(b))
else for(s=J.ap(t.U.a(b)),r=this.a;s.B();)r.$2(a,A.I(s.gK()))},
$S:17}
A.lC.prototype={
giJ(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return A.a(m,0)
s=o.a
m=m[0]+1
r=B.d.bX(s,"?",m)
q=s.length
if(r>=0){p=A.hi(s,r+1,q,B.ad,!1,!1)
q=r}else p=n
m=o.c=new A.jl("data","",n,n,A.hi(s,m,q,B.bw,!1,!1),p,n)}return m},
t(a){var s,r=this.b
if(0>=r.length)return A.a(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
A.mS.prototype={
$2(a,b){var s=this.a
if(!(a<s.length))return A.a(s,a)
s=s[a]
B.f.aS(s,0,96,b)
return s},
$S:62}
A.mT.prototype={
$3(a,b,c){var s,r,q,p
for(s=b.length,r=a.$flags|0,q=0;q<s;++q){p=b.charCodeAt(q)^96
r&2&&A.c(a)
if(!(p<96))return A.a(a,p)
a[p]=c}},
$S:20}
A.mU.prototype={
$3(a,b,c){var s,r,q,p=b.length
if(0>=p)return A.a(b,0)
s=b.charCodeAt(0)
if(1>=p)return A.a(b,1)
r=b.charCodeAt(1)
p=a.$flags|0
for(;s<=r;++s){q=(s^96)>>>0
p&2&&A.c(a)
if(!(q<96))return A.a(a,q)
a[q]=c}},
$S:20}
A.bj.prototype={
gf7(){return this.c>0},
gf9(){return this.c>0&&this.d+1<this.e},
ge9(){return this.f<this.r},
gf8(){return this.r<this.a.length},
gf6(){return B.d.ao(this.a,"/",this.e)},
gic(){return this.e===this.f},
gbc(){var s=this.w
return s==null?this.w=this.k5():s},
k5(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&B.d.ah(r.a,"http"))return"http"
if(q===5&&B.d.ah(r.a,"https"))return"https"
if(s&&B.d.ah(r.a,"file"))return"file"
if(q===7&&B.d.ah(r.a,"package"))return"package"
return B.d.I(r.a,0,q)},
gfu(){var s=this.c,r=this.b+3
return s>r?B.d.I(this.a,r,s-1):""},
gcm(){var s=this.c
return s>0?B.d.I(this.a,s,this.d):""},
gdh(){var s,r=this
if(r.gf9())return A.hp(B.d.I(r.a,r.d+1,r.e),null)
s=r.b
if(s===4&&B.d.ah(r.a,"http"))return 80
if(s===5&&B.d.ah(r.a,"https"))return 443
return 0},
gbu(){return B.d.I(this.a,this.e,this.f)},
gcJ(){var s=this.f,r=this.r
return s<r?B.d.I(this.a,s+1,r):""},
ge7(){var s=this.r,r=this.a
return s<r.length?B.d.aI(r,s+1):""},
gfl(){if(this.f>=this.r)return B.jz
return new A.d5(A.pV(this.gcJ()),t.h)},
hi(a){var s=this.d+1
return s+a.length===this.e&&B.d.ao(this.a,a,s)},
np(){var s=this,r=s.r,q=s.a
if(r>=q.length)return s
return new A.bj(B.d.I(q,0,r),s.b,s.c,s.d,s.e,s.f,r,s.w)},
iy(a){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
a=A.mI(a,0,a.length)
s=!(h.b===a.length&&B.d.ah(h.a,a))
r=a==="file"
q=h.c
p=q>0?B.d.I(h.a,h.b+3,q):""
o=h.gf9()?h.gdh():g
if(s)o=A.mE(o,a)
q=h.c
if(q>0)n=B.d.I(h.a,q,h.d)
else n=p.length!==0||o!=null||r?"":g
q=h.a
m=h.f
l=B.d.I(q,h.e,m)
if(!r)k=n!=null&&l.length!==0
else k=!0
if(k&&!B.d.ah(l,"/"))l="/"+l
k=h.r
j=m<k?B.d.I(q,m+1,k):g
m=h.r
i=m<q.length?B.d.aI(q,m+1):g
return A.hh(a,p,n,o,l,j,i)},
iz(a){return this.dj(A.lF(a))},
dj(a){if(a instanceof A.bj)return this.m4(this,a)
return this.hH().dj(a)},
m4(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.b
if(c>0)return b
s=b.c
if(s>0){r=a.b
if(r<=0)return b
q=r===4
if(q&&B.d.ah(a.a,"file"))p=b.e!==b.f
else if(q&&B.d.ah(a.a,"http"))p=!b.hi("80")
else p=!(r===5&&B.d.ah(a.a,"https"))||!b.hi("443")
if(p){o=r+1
return new A.bj(B.d.I(a.a,0,o)+B.d.aI(b.a,c+1),r,s+o,b.d+o,b.e+o,b.f+o,b.r+o,a.w)}else return this.hH().dj(b)}n=b.e
c=b.f
if(n===c){s=b.r
if(c<s){r=a.f
o=r-c
return new A.bj(B.d.I(a.a,0,r)+B.d.aI(b.a,c),a.b,a.c,a.d,a.e,c+o,s+o,a.w)}c=b.a
if(s<c.length){r=a.r
return new A.bj(B.d.I(a.a,0,r)+B.d.aI(c,s),a.b,a.c,a.d,a.e,a.f,s+(r-s),a.w)}return a.np()}s=b.a
if(B.d.ao(s,"/",n)){m=a.e
l=A.q9(this)
k=l>0?l:m
o=k-n
return new A.bj(B.d.I(a.a,0,k)+B.d.aI(s,n),a.b,a.c,a.d,m,c+o,b.r+o,a.w)}j=a.e
i=a.f
if(j===i&&a.c>0){for(;B.d.ao(s,"../",n);)n+=3
o=j-n+1
return new A.bj(B.d.I(a.a,0,j)+"/"+B.d.aI(s,n),a.b,a.c,a.d,j,c+o,b.r+o,a.w)}h=a.a
l=A.q9(this)
if(l>=0)g=l
else for(g=j;B.d.ao(h,"../",g);)g+=3
f=0
while(!0){e=n+3
if(!(e<=c&&B.d.ao(s,"../",n)))break;++f
n=e}for(r=h.length,d="";i>g;){--i
if(!(i>=0&&i<r))return A.a(h,i)
if(h.charCodeAt(i)===47){if(f===0){d="/"
break}--f
d="/"}}if(i===g&&a.b<=0&&!B.d.ao(h,"/",j)){n-=f*3
d=""}o=i-n+d.length
return new A.bj(B.d.I(h,0,i)+d+B.d.aI(s,n),a.b,a.c,a.d,j,c+o,b.r+o,a.w)},
ft(){var s,r=this,q=r.b
if(q>=0){s=!(q===4&&B.d.ah(r.a,"file"))
q=s}else q=!1
if(q)throw A.f(A.a2("Cannot extract a file path from a "+r.gbc()+" URI"))
q=r.f
s=r.a
if(q<s.length){if(q<r.r)throw A.f(A.a2(u.y))
throw A.f(A.a2(u.l))}if(r.c<r.d)A.a8(A.a2(u.j))
q=B.d.I(s,r.e,q)
return q},
gH(a){var s=this.x
return s==null?this.x=B.d.gH(this.a):s},
N(a,b){if(b==null)return!1
if(this===b)return!0
return t.R.b(b)&&this.a===b.t(0)},
hH(){var s=this,r=null,q=s.gbc(),p=s.gfu(),o=s.c>0?s.gcm():r,n=s.gf9()?s.gdh():r,m=s.a,l=s.f,k=B.d.I(m,s.e,l),j=s.r
l=l<j?s.gcJ():r
return A.hh(q,p,o,n,k,l,j<m.length?s.ge7():r)},
t(a){return this.a},
$ie6:1}
A.jl.prototype={}
A.nr.prototype={
$1(a){return this.a.d7(this.b.i("0/?").a(a))},
$S:6}
A.ns.prototype={
$1(a){if(a==null)return this.a.e4(new A.ir(a===undefined))
return this.a.e4(a)},
$S:6}
A.ir.prototype={
t(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."},
$iaf:1}
A.eK.prototype={
el(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=a.length
for(s=0;s<f;++s){r=a[s]
if(r>g.b)g.b=r
if(r<g.c)g.c=r}r=g.b
q=B.a.a0(1,r)
p=g.a=new Uint32Array(q)
for(o=1,n=0,m=2;o<=r;){for(l=o<<16,s=0;s<f;++s)if(a[s]===o){for(k=n,j=0,i=0;i<o;++i){j=(j<<1|k&1)>>>0
k=k>>>1}for(h=(l|s)>>>0,i=j;i<q;i+=m){if(!(i>=0))return A.a(p,i)
p[i]=h}++n}++o
n=n<<1>>>0
m=m<<1>>>0}}}
A.m_.prototype={}
A.mN.prototype={
mI(a,b,c,d){var s,r,q,p,o,n,m=null
while(!0){s=a.c
r=a.d
r===$&&A.e("_length")
if(!(s<r))break
r=a.b
r.toString
q=a.c=s+1
p=r.length
if(!(s>=0&&s<p))return A.a(r,s)
o=r[s]
a.c=q+1
if(!(q>=0&&q<p))return A.a(r,q)
n=r[q]
if((o&8)!==8)return!1
if(B.a.ae(o*256+n,31)!==0)return!1
if((n>>>5&1)!==0){a.m()
return!1}if(m!=null)b.bF(m)
s=new A.eK()
s.el(B.j6)
r=new A.eK()
r.el(B.iR)
q=new A.fg(new Uint8Array(32768))
new A.kN(a,q,s,r).kU()
m=J.ac(B.f.gE(q.c),q.c.byteOffset,q.b)
a.m()}if(m!=null)b.bF(m)
return!0}}
A.kN.prototype={
gbL(){var s=this.a
if(s==null)return s
s.d===$&&A.e("_length")
return s},
kU(){var s,r,q=this
q.e=q.d=0
if(q.gbL()==null)return
while(!0){s=q.gbL()
r=s.c
s=s.d
s===$&&A.e("_length")
if(!(r<s))break
if(!q.le())return}},
le(){var s,r,q,p=this,o=p.gbL()
if(o!=null){s=o.c
r=o.d
r===$&&A.e("_length")
r=s>=r
s=r}else s=!0
if(s)return!1
q=p.bq(3)
switch(B.a.l(q,1)){case 0:if(p.lo()===-1)return!1
break
case 1:if(p.h1(p.r,p.w)===-1)return!1
break
case 2:if(p.lf()===-1)return!1
break
default:return!1}return(q&1)===0},
bq(a){var s,r,q,p,o=this
if(a===0)return 0
for(;s=o.e,s<a;){s=o.gbL()
r=s.c
s=s.d
s===$&&A.e("_length")
if(r>=s)return-1
s=o.gbL()
r=s.b
r.toString
s=s.c++
if(!(s>=0&&s<r.length))return A.a(r,s)
q=r[s]
s=o.d
r=o.e
o.d=(s|B.a.a0(q,r))>>>0
o.e=r+8}r=o.d
p=B.a.R(1,a)
o.d=B.a.ab(r,a)
o.e=s-a
return(r&p-1)>>>0},
eR(a){var s,r,q,p,o,n,m,l=this,k=a.a
k===$&&A.e("table")
s=a.b
for(;r=l.e,r<s;){r=l.gbL()
q=r.c
r=r.d
r===$&&A.e("_length")
if(q>=r)return-1
r=l.gbL()
q=r.b
q.toString
r=r.c++
if(!(r>=0&&r<q.length))return A.a(q,r)
p=q[r]
r=l.d
q=l.e
l.d=(r|B.a.a0(p,q))>>>0
l.e=q+8}q=l.d
o=(q&B.a.a0(1,s)-1)>>>0
if(!(o<k.length))return A.a(k,o)
n=k[o]
m=n>>>16
l.d=B.a.ab(q,m)
l.e=r-m
return n&65535},
lo(){var s,r,q,p=this
p.e=p.d=0
s=p.bq(16)
r=p.bq(16)
if(s!==0&&s!==(r^65535)>>>0)return-1
if(s>p.gbL().gn(0))return-1
r=p.gbL()
q=r.iZ(s,r.c)
r.c=r.c+q.gn(0)
p.c.nB(q)
return 0},
lf(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.bq(5)
if(h===-1)return-1
h+=257
if(h>288)return-1
s=i.bq(5)
if(s===-1)return-1;++s
if(s>32)return-1
r=i.bq(4)
if(r===-1)return-1
r+=4
if(r>19)return-1
q=new Uint8Array(19)
for(p=0;p<r;++p){o=i.bq(3)
if(o===-1)return-1
n=B.hj[p]
if(!(n<19))return A.a(q,n)
q[n]=o}m=A.nK(q)
n=h+s
l=new Uint8Array(n)
k=J.ac(B.f.gE(l),0,h)
j=J.ac(B.f.gE(l),h,s)
if(i.ka(n,m,l)===-1)return-1
return i.h1(A.nK(k),A.nK(j))},
h1(a,b){var s,r,q,p,o,n,m,l,k=this
for(s=k.c;!0;){r=k.eR(a)
if(r<0||r>285)return-1
if(r===256)break
if(r<256){if(s.b===s.c.length)s.ld()
q=s.c
p=s.b++
q.$flags&2&&A.c(q)
if(!(p>=0&&p<q.length))return A.a(q,p)
q[p]=r&255
continue}o=r-257
if(!(o>=0&&o<29))return A.a(B.bL,o)
n=B.bL[o]+k.bq(B.fT[o])
m=k.eR(b)
if(m<0||m>29)return-1
if(!(m>=0&&m<30))return A.a(B.bz,m)
l=B.bz[m]+k.bq(B.iS[m])
for(q=-l;n>l;){s.bF(s.am(q))
n-=l}if(n===l)s.bF(s.am(q))
else s.bF(s.fC(q,n-l))}for(;s=k.e,s>=8;){k.e=s-8
s=k.gbL()
q=--s.c
p=s.d
p===$&&A.e("_length")
s.slq(B.a.L(q,0,p))}return 0},
ka(a,b,c){var s,r,q,p,o,n,m,l,k=this
for(s=0,r=0;r<a;){q=k.eR(b)
if(q===-1)return-1
p=0
switch(q){case 16:o=k.bq(2)
if(o===-1)return-1
o+=3
for(n=c.$flags|0;m=o-1,o>0;o=m,r=l){l=r+1
n&2&&A.c(c)
if(!(r>=0&&r<c.length))return A.a(c,r)
c[r]=s}break
case 17:o=k.bq(3)
if(o===-1)return-1
o+=3
for(n=c.$flags|0;m=o-1,o>0;o=m,r=l){l=r+1
n&2&&A.c(c)
if(!(r>=0&&r<c.length))return A.a(c,r)
c[r]=0}s=p
break
case 18:o=k.bq(7)
if(o===-1)return-1
o+=11
for(n=c.$flags|0;m=o-1,o>0;o=m,r=l){l=r+1
n&2&&A.c(c)
if(!(r>=0&&r<c.length))return A.a(c,r)
c[r]=0}s=p
break
default:if(q<0||q>15)return-1
l=r+1
c.$flags&2&&A.c(c)
if(!(r>=0&&r<c.length))return A.a(c,r)
c[r]=q
r=l
s=q
break}}return 0}}
A.lZ.prototype={
ck(a){var s
t.L.a(a)
s=A.tO(32768)
B.cE.mI(A.nL(a,B.aR,null,null),s,!1,!1)
return s.iM()}}
A.hA.prototype={
ap(){return"ByteOrder."+this.b}}
A.hZ.prototype={
gn(a){var s=this.b
return s==null?0:s.length-this.c},
iZ(a,b){var s=this.b
if(s==null)return A.nL(A.b([],t.t),B.cr,null,null)
return A.nL(s,this.a,a,b)},
G(){var s,r=this.b
r.toString
s=this.c++
if(!(s>=0&&s<r.length))return A.a(r,s)
return r[s]},
slq(a){this.c=A.r(a)}}
A.i_.prototype={
m(){var s=this,r=s.G(),q=s.G(),p=s.G(),o=s.G()
if(s.a===B.aR)return(r<<24|q<<16|p<<8|o)>>>0
return(o<<24|p<<16|q<<8|r)>>>0}}
A.fg.prototype={
iM(){return J.ac(B.f.gE(this.c),this.c.byteOffset,this.b)},
bF(a){var s,r,q,p,o,n=this
t.L.a(a)
s=a.length
for(;r=n.b,q=r+s,p=n.c,o=p.length,q>o;)n.eN(q-o)
B.f.b5(p,r,q,a)
n.b+=s},
nB(a){var s,r,q,p,o,n,m=this
while(!0){s=m.b
r=a.b
q=r==null
p=q?0:r.length-a.c
o=m.c
n=o.length
if(!(s+p>n))break
m.eN(s+(q?0:r.length-a.c)-n)}if(!q){r=a.gn(0)
q=a.b
q.toString
B.f.an(o,s,s+r,q,a.c)}m.b=m.b+a.gn(0)},
fC(a,b){var s=this
if(a<0)a=s.b+a
if(b==null)b=s.b
else if(b<0)b=s.b+b
return J.ac(B.f.gE(s.c),s.c.byteOffset+a,b-a)},
am(a){return this.fC(a,null)},
eN(a){var s=a!=null?a>32768?a:32768:32768,r=this.c,q=r.length,p=new Uint8Array((q+s)*2)
B.f.b5(p,0,q,r)
this.c=p},
ld(){return this.eN(null)},
gn(a){return this.b}}
A.iu.prototype={}
A.J.prototype={
k(a,b){var s,r=this
if(!r.eJ(b))return null
s=r.c.k(0,r.a.$1(r.$ti.i("J.K").a(b)))
return s==null?null:s.b},
h(a,b,c){var s=this,r=s.$ti
r.i("J.K").a(b)
r.i("J.V").a(c)
if(!s.eJ(b))return
s.c.h(0,s.a.$1(b),new A.aG(b,c,r.i("aG<J.K,J.V>")))},
cj(a,b){this.$ti.i("M<J.K,J.V>").a(b).aK(0,new A.k5(this))},
a_(a){var s=this
if(!s.eJ(a))return!1
return s.c.a_(s.a.$1(s.$ti.i("J.K").a(a)))},
aK(a,b){this.c.aK(0,new A.k6(this,this.$ti.i("~(J.K,J.V)").a(b)))},
gO(a){return this.c.a===0},
gb8(){var s=this.c.gby(),r=this.$ti.i("J.K"),q=A.k(s)
return A.nV(s,q.aa(r).i("1(h.E)").a(new A.k7(this)),q.i("h.E"),r)},
gn(a){return this.c.a},
t(a){return A.l5(this)},
eJ(a){return this.$ti.i("J.K").b(a)},
$iM:1}
A.k5.prototype={
$2(a,b){var s=this.a,r=s.$ti
r.i("J.K").a(a)
r.i("J.V").a(b)
s.h(0,a,b)
return b},
$S(){return this.a.$ti.i("~(J.K,J.V)")}}
A.k6.prototype={
$2(a,b){var s=this.a.$ti
s.i("J.C").a(a)
s.i("aG<J.K,J.V>").a(b)
return this.b.$2(b.a,b.b)},
$S(){return this.a.$ti.i("~(J.C,aG<J.K,J.V>)")}}
A.k7.prototype={
$1(a){return this.a.$ti.i("aG<J.K,J.V>").a(a).a},
$S(){return this.a.$ti.i("J.K(aG<J.K,J.V>)")}}
A.nf.prototype={
$1(a){return a.m_("GET",this.a,this.b)},
$S:21}
A.nq.prototype={
$1(a){var s=this
return a.d4("POST",s.a,t.w.a(s.b),s.c,s.d)},
$S:21}
A.hx.prototype={
d4(a,b,c,d,e){return this.m0(a,b,t.w.a(c),d,e)},
m_(a,b,c){return this.d4(a,b,c,null,null)},
m0(a,b,c,d,e){var s=0,r=A.co(t.q),q,p=this,o,n
var $async$d4=A.cp(function(f,g){if(f===1)return A.cl(g,r)
while(true)switch(s){case 0:o=A.tX(a,b)
if(c!=null)o.r.cj(0,c)
if(d!=null)o.sms(d)
n=A
s=3
return A.bZ(p.cP(o),$async$d4)
case 3:q=n.ln(g)
s=1
break
case 1:return A.cm(q,r)}})
return A.cn($async$d4,r)},
$ika:1}
A.er.prototype={
mT(){if(this.w)throw A.f(A.d_("Can't finalize a finalized Request."))
this.w=!0
return B.cs},
t(a){return this.a+" "+this.b.t(0)}}
A.jX.prototype={
$2(a,b){return A.I(a).toLowerCase()===A.I(b).toLowerCase()},
$S:66}
A.jY.prototype={
$1(a){return B.d.gH(A.I(a).toLowerCase())},
$S:31}
A.jZ.prototype={
fE(a,b,c,d,e,f,g){var s=this.b
if(s<100)throw A.f(A.W("Invalid status code "+s+".",null))}}
A.hz.prototype={
cP(a){var s=0,r=A.co(t.hL),q,p=2,o,n=[],m=this,l,k,j,i,h,g
var $async$cP=A.cp(function(b,c){if(b===1){o=c
s=p}while(true)switch(s){case 0:if(m.c)throw A.f(A.t0("HTTP request failed. Client is already closed.",a.b))
a.j_()
s=3
return A.bZ(new A.dg(A.pO(a.y,t.L)).iF(),$async$cP)
case 3:j=c
l=t.m.a(new self.XMLHttpRequest())
i=m.a
i.C(0,l)
h=l
h.open(a.a,a.b.t(0),!0)
h.responseType="arraybuffer"
h.withCredentials=!1
for(h=a.r.gi7(),h=h.gJ(h);h.B();){g=h.gK()
l.setRequestHeader(g.a,g.b)}k=new A.bW(new A.L($.K,t.oO),t.df)
h=t.d4
g=t.H
new A.ee(l,"load",!1,h).gcl(0).fq(new A.k1(l,k,a),g)
new A.ee(l,"error",!1,h).gcl(0).fq(new A.k2(k,a),g)
l.send(j)
p=4
s=7
return A.bZ(k.a,$async$cP)
case 7:h=c
q=h
n=[1]
s=5
break
n.push(6)
s=5
break
case 4:n=[2]
case 5:p=2
i.cs(0,l)
s=n.pop()
break
case 6:case 1:return A.cm(q,r)
case 2:return A.cl(o,r)}})
return A.cn($async$cP,r)},
eZ(){var s,r,q,p
this.c=!0
for(s=this.a,r=A.q3(s,s.r,s.$ti.c),q=r.$ti.c;r.B();){p=r.d
if(p==null)p=q.a(p)
p.abort()}if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.eq()}}}
A.k1.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j=this
t.m.a(a)
s=j.a
r=A.qz(s).k(0,"content-length")
q=!1
if(r!=null){q=$.ry()
q=!q.b.test(r)}if(q){j.b.e4(new A.dh("Invalid content-length header ["+A.t(r)+"].",j.c.b))
return}p=A.nW(t.hH.a(s.response),0,null)
o=A.I(s.responseURL)
if(o.length!==0)A.lF(o)
q=A.pO(p,t.L)
n=A.r(s.status)
m=p.length
l=j.c
k=A.qz(s)
s=A.I(s.statusText)
q=new A.iW(A.xo(new A.dg(q)),l,n,s,m,k,!1,!0)
q.fE(n,m,k,!1,!0,s,l)
j.b.d7(q)},
$S:7}
A.k2.prototype={
$1(a){t.m.a(a)
this.a.d8(new A.dh("XMLHttpRequest error.",this.b.b),A.oe())},
$S:7}
A.dg.prototype={
iF(){var s=new A.L($.K,t.bF),r=new A.bW(s,t.iq),q=new A.jj(new A.k4(r),new Uint8Array(1024))
this.cq(t.fM.a(q.gmn(q)),!0,q.gmv(),r.gmA())
return s}}
A.k4.prototype={
$1(a){return this.a.d7(new Uint8Array(A.C(t.L.a(a))))},
$S:33}
A.dh.prototype={
t(a){var s=this.b.t(0)
return"ClientException: "+this.a+", uri="+s},
$iaf:1}
A.iO.prototype={
gf2(){var s,r,q=this
if(q.gce()==null||!q.gce().c.a.a_("charset"))return q.x
s=q.gce().c.a.k(0,"charset")
s.toString
r=A.p4(s)
return r==null?A.a8(A.ag('Unsupported encoding "'+s+'".',null,null)):r},
sms(a){var s,r=this,q=t.L.a(r.gf2().e5(a))
r.k0()
r.y=A.ra(q)
s=r.gce()
if(s==null){q=t.N
r.sce(A.l7("text","plain",A.dT(["charset",r.gf2().gca()],q,q)))}else if(!s.c.a.a_("charset")){q=t.N
r.sce(s.mu(A.dT(["charset",r.gf2().gca()],q,q)))}},
gce(){var s=this.r.k(0,"content-type")
if(s==null)return null
return A.pz(s)},
sce(a){this.r.h(0,"content-type",a.t(0))},
k0(){if(!this.w)return
throw A.f(A.d_("Can't modify a finalized Request."))}}
A.e0.prototype={}
A.d1.prototype={}
A.iW.prototype={}
A.et.prototype={}
A.dU.prototype={
mu(a){var s,r
t.w.a(a)
s=t.N
r=A.f2(this.c,s,s)
r.cj(0,a)
return A.l7(this.a,this.b,r)},
t(a){var s=new A.am(""),r=""+this.a
s.a=r
r+="/"
s.a=r
s.a=r+this.b
r=this.c
r.a.aK(0,r.$ti.i("~(1,2)").a(new A.la(s)))
r=s.a
return r.charCodeAt(0)==0?r:r}}
A.l8.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j=this.a,i=new A.lv(null,j),h=$.rH()
i.ei(h)
s=$.rG()
i.da(s)
r=i.gfe().k(0,0)
r.toString
i.da("/")
i.da(s)
q=i.gfe().k(0,0)
q.toString
i.ei(h)
p=t.N
o=A.H(p,p)
while(!0){p=i.d=B.d.cH(";",j,i.c)
n=i.e=i.c
m=p!=null
p=m?i.e=i.c=p.gX():n
if(!m)break
p=i.d=h.cH(0,j,p)
i.e=i.c
if(p!=null)i.e=i.c=p.gX()
i.da(s)
if(i.c!==i.e)i.d=null
p=i.d.k(0,0)
p.toString
i.da("=")
n=i.d=s.cH(0,j,i.c)
l=i.e=i.c
m=n!=null
if(m){n=i.e=i.c=n.gX()
l=n}else n=l
if(m){if(n!==l)i.d=null
n=i.d.k(0,0)
n.toString
k=n}else k=A.wU(i)
n=i.d=h.cH(0,j,i.c)
i.e=i.c
if(n!=null)i.e=i.c=n.gX()
o.h(0,p,k)}i.mQ()
return A.l7(r,q,o)},
$S:34}
A.la.prototype={
$2(a,b){var s,r,q
A.I(a)
A.I(b)
s=this.a
s.a+="; "+a+"="
r=$.rE()
r=r.b.test(b)
q=s.a
if(r){s.a=q+'"'
r=A.r8(b,$.rz(),t.bb.a(t.po.a(new A.l9())),null)
r=s.a+=r
s.a=r+'"'}else s.a=q+b},
$S:35}
A.l9.prototype={
$1(a){return"\\"+A.t(a.k(0,0))},
$S:22}
A.n9.prototype={
$1(a){var s=a.k(0,1)
s.toString
return s},
$S:22}
A.k9.prototype={
ap(){return"Channel."+this.b}}
A.X.prototype={
B(){var s=this.b
return++this.a<s.gn(s)},
gK(){return this.b.k(0,this.a)},
$iz:1}
A.di.prototype={
P(){return new A.di(new Uint16Array(A.C(this.a)))},
gM(){return B.G},
gn(a){return this.a.length},
gS(){return null},
k(a,b){var s=this.a,r=s.length
if(b<r){if(!(b>=0))return A.a(s,b)
s=s[b]
r=$.Y
r=r!=null?r:A.a6()
if(!(s<r.length))return A.a(r,s)
s=r[s]}else s=0
return s},
h(a,b,c){var s,r=this.a,q=r.length
if(b<q){s=A.N(c)
r.$flags&2&&A.c(r)
if(!(b>=0))return A.a(r,b)
r[b]=s}},
gW(){return this.gq()},
gq(){var s,r=this.a
if(!B.C.gO(r)){if(0>=r.length)return A.a(r,0)
r=r[0]
s=$.Y
s=s!=null?s:A.a6()
if(!(r<s.length))return A.a(s,r)
r=s[r]}else r=0
return r},
gu(){var s,r=this.a
if(r.length>1){r=r[1]
s=$.Y
s=s!=null?s:A.a6()
if(!(r<s.length))return A.a(s,r)
r=s[r]}else r=0
return r},
gA(){var s,r=this.a
if(r.length>2){r=r[2]
s=$.Y
s=s!=null?s:A.a6()
if(!(r<s.length))return A.a(s,r)
r=s[r]}else r=0
return r},
gv(){var s,r=this.a
if(r.length>3){r=r[3]
s=$.Y
s=s!=null?s:A.a6()
if(!(r<s.length))return A.a(s,r)
r=s[r]}else r=0
return r},
gau(){return A.ab(this)},
af(a){var s,r=a.gq(),q=this.a
if(!B.C.gO(q)){r=A.N(r)
q.$flags&2&&A.c(q)
if(0>=q.length)return A.a(q,0)
q[0]=r}r=a.gu()
s=q.length
if(s>1){r=A.N(r)
q.$flags&2&&A.c(q)
q[1]=r}r=a.gA()
if(s>2){r=A.N(r)
q.$flags&2&&A.c(q)
q[2]=r}r=a.gv()
if(s>3){r=A.N(r)
q.$flags&2&&A.c(q)
q[3]=r}},
gJ(a){return new A.X(this)},
N(a,b){if(b==null)return!1
return t.G.b(b)&&b.gn(b)===this.a.length&&b.gH(b)===A.o(A.x(this,!0,A.k(this).i("h.E")))},
gH(a){return A.o(A.x(this,!0,A.k(this).i("h.E")))},
$iE:1}
A.dj.prototype={
P(){return new A.dj(new Float32Array(A.C(this.a)))},
gM(){return B.M},
gn(a){return this.a.length},
gS(){return null},
k(a,b){var s=this.a,r=s.length
if(b<r){if(!(b>=0))return A.a(s,b)
s=s[b]}else s=0
return s},
h(a,b,c){var s=this.a,r=s.length
if(b<r){s.$flags&2&&A.c(s)
if(!(b>=0))return A.a(s,b)
s[b]=c}},
gW(){var s=this.a
if(!B.P.gO(s)){if(0>=s.length)return A.a(s,0)
s=s[0]}else s=0
return s},
gq(){var s=this.a
if(!B.P.gO(s)){if(0>=s.length)return A.a(s,0)
s=s[0]}else s=0
return s},
gu(){var s=this.a
return s.length>1?s[1]:0},
gA(){var s=this.a
return s.length>2?s[2]:0},
gv(){var s=this.a
return s.length>3?s[3]:1},
gau(){return A.ab(this)},
af(a){var s,r=a.gq(),q=this.a
if(!B.P.gO(q)){q.$flags&2&&A.c(q)
if(0>=q.length)return A.a(q,0)
q[0]=r}r=a.gu()
s=q.length
if(s>1){q.$flags&2&&A.c(q)
q[1]=r}r=a.gA()
if(s>2){q.$flags&2&&A.c(q)
q[2]=r}r=a.gv()
if(s>3){q.$flags&2&&A.c(q)
q[3]=r}},
gJ(a){return new A.X(this)},
N(a,b){if(b==null)return!1
return t.G.b(b)&&b.gn(b)===this.a.length&&b.gH(b)===A.o(A.x(this,!0,A.k(this).i("h.E")))},
gH(a){return A.o(A.x(this,!0,A.k(this).i("h.E")))},
$iE:1}
A.dk.prototype={
P(){return new A.dk(new Float64Array(A.C(this.a)))},
gM(){return B.R},
gn(a){return this.a.length},
gS(){return null},
k(a,b){var s=this.a,r=s.length
if(b<r){if(!(b>=0))return A.a(s,b)
s=s[b]}else s=0
return s},
h(a,b,c){var s=this.a,r=s.length
if(b<r){s.$flags&2&&A.c(s)
if(!(b>=0))return A.a(s,b)
s[b]=c}},
gW(){var s=this.a
if(!B.Q.gO(s)){if(0>=s.length)return A.a(s,0)
s=s[0]}else s=0
return s},
gq(){var s=this.a
if(!B.Q.gO(s)){if(0>=s.length)return A.a(s,0)
s=s[0]}else s=0
return s},
gu(){var s=this.a
return s.length>1?s[1]:0},
gA(){var s=this.a
return s.length>2?s[2]:0},
gv(){var s=this.a
return s.length>3?s[3]:1},
gau(){return A.ab(this)},
af(a){var s,r=a.gq(),q=this.a
if(!B.Q.gO(q)){q.$flags&2&&A.c(q)
if(0>=q.length)return A.a(q,0)
q[0]=r}r=a.gu()
s=q.length
if(s>1){q.$flags&2&&A.c(q)
q[1]=r}r=a.gA()
if(s>2){q.$flags&2&&A.c(q)
q[2]=r}r=a.gv()
if(s>3){q.$flags&2&&A.c(q)
q[3]=r}},
gJ(a){return new A.X(this)},
N(a,b){if(b==null)return!1
return t.G.b(b)&&b.gn(b)===this.a.length&&b.gH(b)===A.o(A.x(this,!0,A.k(this).i("h.E")))},
gH(a){return A.o(A.x(this,!0,A.k(this).i("h.E")))},
$iE:1}
A.dl.prototype={
P(){return new A.dl(new Int16Array(A.C(this.a)))},
gM(){return B.T},
gn(a){return this.a.length},
gS(){return null},
k(a,b){var s=this.a,r=s.length
if(b<r){if(!(b>=0))return A.a(s,b)
s=s[b]}else s=0
return s},
h(a,b,c){var s,r=this.a,q=r.length
if(b<q){s=B.b.j(c)
r.$flags&2&&A.c(r)
if(!(b>=0))return A.a(r,b)
r[b]=s}},
gW(){var s=this.a
if(!B.a0.gO(s)){if(0>=s.length)return A.a(s,0)
s=s[0]}else s=0
return s},
gq(){var s=this.a
if(!B.a0.gO(s)){if(0>=s.length)return A.a(s,0)
s=s[0]}else s=0
return s},
gu(){var s=this.a
return s.length>1?s[1]:0},
gA(){var s=this.a
return s.length>2?s[2]:0},
gv(){var s=this.a
return s.length>3?s[3]:0},
gau(){return A.ab(this)},
af(a){var s,r=a.gq(),q=this.a
if(!B.a0.gO(q)){r=B.b.j(r)
q.$flags&2&&A.c(q)
if(0>=q.length)return A.a(q,0)
q[0]=r}r=a.gu()
s=q.length
if(s>1){r=B.b.j(r)
q.$flags&2&&A.c(q)
q[1]=r}r=a.gA()
if(s>2){r=B.b.j(r)
q.$flags&2&&A.c(q)
q[2]=r}r=a.gv()
if(s>3){r=B.b.j(r)
q.$flags&2&&A.c(q)
q[3]=r}},
gJ(a){return new A.X(this)},
N(a,b){if(b==null)return!1
return t.G.b(b)&&b.gn(b)===this.a.length&&b.gH(b)===A.o(A.x(this,!0,A.k(this).i("h.E")))},
gH(a){return A.o(A.x(this,!0,A.k(this).i("h.E")))},
$iE:1}
A.dm.prototype={
P(){return new A.dm(new Int32Array(A.C(this.a)))},
gM(){return B.U},
gn(a){return this.a.length},
gS(){return null},
k(a,b){var s=this.a,r=s.length
if(b<r){if(!(b>=0))return A.a(s,b)
s=s[b]}else s=0
return s},
h(a,b,c){var s,r=this.a,q=r.length
if(b<q){s=B.b.j(c)
r.$flags&2&&A.c(r)
if(!(b>=0))return A.a(r,b)
r[b]=s}},
gW(){var s=this.a
if(!B.a1.gO(s)){if(0>=s.length)return A.a(s,0)
s=s[0]}else s=0
return s},
gq(){var s=this.a
if(!B.a1.gO(s)){if(0>=s.length)return A.a(s,0)
s=s[0]}else s=0
return s},
gu(){var s=this.a
return s.length>1?s[1]:0},
gA(){var s=this.a
return s.length>2?s[2]:0},
gv(){var s=this.a
return s.length>3?s[3]:0},
gau(){return A.ab(this)},
af(a){var s,r=a.gq(),q=this.a
if(!B.a1.gO(q)){A.r(r)
q.$flags&2&&A.c(q)
if(0>=q.length)return A.a(q,0)
q[0]=r}r=a.gu()
s=q.length
if(s>1){r=B.b.j(r)
q.$flags&2&&A.c(q)
q[1]=r}r=a.gA()
if(s>2){r=B.b.j(r)
q.$flags&2&&A.c(q)
q[2]=r}r=a.gv()
if(s>3){r=B.b.j(r)
q.$flags&2&&A.c(q)
q[3]=r}},
gJ(a){return new A.X(this)},
N(a,b){if(b==null)return!1
return t.G.b(b)&&b.gn(b)===this.a.length&&b.gH(b)===A.o(A.x(this,!0,A.k(this).i("h.E")))},
gH(a){return A.o(A.x(this,!0,A.k(this).i("h.E")))},
$iE:1}
A.dn.prototype={
P(){return new A.dn(new Int8Array(A.C(this.a)))},
gM(){return B.S},
gn(a){return this.a.length},
gS(){return null},
k(a,b){var s=this.a,r=s.length
if(b<r){if(!(b>=0))return A.a(s,b)
s=s[b]}else s=0
return s},
h(a,b,c){var s,r=this.a,q=r.length
if(b<q){s=B.b.j(c)
r.$flags&2&&A.c(r)
if(!(b>=0))return A.a(r,b)
r[b]=s}},
gW(){var s=this.a
if(!B.a2.gO(s)){if(0>=s.length)return A.a(s,0)
s=s[0]}else s=0
return s},
gq(){var s=this.a
if(!B.a2.gO(s)){if(0>=s.length)return A.a(s,0)
s=s[0]}else s=0
return s},
gu(){var s=this.a
return s.length>1?s[1]:0},
gA(){var s=this.a
return s.length>2?s[2]:0},
gv(){var s=this.a
return s.length>3?s[3]:0},
gau(){return A.ab(this)},
af(a){var s,r=a.gq(),q=this.a
if(!B.a2.gO(q)){r=B.b.j(r)
q.$flags&2&&A.c(q)
if(0>=q.length)return A.a(q,0)
q[0]=r}r=a.gu()
s=q.length
if(s>1){r=B.b.j(r)
q.$flags&2&&A.c(q)
q[1]=r}r=a.gA()
if(s>2){r=B.b.j(r)
q.$flags&2&&A.c(q)
q[2]=r}r=a.gv()
if(s>3){r=B.b.j(r)
q.$flags&2&&A.c(q)
q[3]=r}},
gJ(a){return new A.X(this)},
N(a,b){if(b==null)return!1
return t.G.b(b)&&b.gn(b)===this.a.length&&b.gH(b)===A.o(A.x(this,!0,A.k(this).i("h.E")))},
gH(a){return A.o(A.x(this,!0,A.k(this).i("h.E")))},
$iE:1}
A.dq.prototype={
P(){var s=this.b
s===$&&A.e("data")
return new A.dq(this.a,s)},
gM(){return B.A},
gS(){return null},
cz(a){var s
if(a<this.a){s=this.b
s===$&&A.e("data")
s=B.a.a3(s,7-a)&1}else s=0
return s},
cV(a,b){var s
if(a>=this.a)return
a=7-a
s=this.b
s===$&&A.e("data")
this.b=b!==0?(s|B.a.a0(1,a))>>>0:(s&~(B.a.a0(1,a)&255))>>>0},
k(a,b){return this.cz(b)},
h(a,b,c){return this.cV(b,c)},
gW(){return this.cz(0)},
gq(){return this.cz(0)},
gu(){return this.cz(1)},
gA(){return this.cz(2)},
gv(){return this.cz(3)},
gau(){return A.ab(this)},
af(a){this.a9(a.gq(),a.gu(),a.gA(),a.gv())},
a9(a,b,c,d){var s=this
s.cV(0,a)
s.cV(1,b)
s.cV(2,c)
s.cV(3,d)},
gJ(a){return new A.X(this)},
N(a,b){if(b==null)return!1
return t.G.b(b)&&b.gn(b)===this.a&&b.gH(b)===A.o(A.x(this,!0,A.k(this).i("h.E")))},
gH(a){return A.o(A.x(this,!0,A.k(this).i("h.E")))},
$iE:1,
gn(a){return this.a}}
A.dr.prototype={
P(){return new A.dr(new Uint16Array(A.C(this.a)))},
gM(){return B.n},
gn(a){return this.a.length},
gS(){return null},
k(a,b){var s=this.a,r=s.length
if(b<r){if(!(b>=0))return A.a(s,b)
s=s[b]}else s=0
return s},
h(a,b,c){var s,r=this.a,q=r.length
if(b<q){s=B.b.j(c)
r.$flags&2&&A.c(r)
if(!(b>=0))return A.a(r,b)
r[b]=s}},
gW(){var s=this.a
if(!B.C.gO(s)){if(0>=s.length)return A.a(s,0)
s=s[0]}else s=0
return s},
gq(){var s=this.a
if(!B.C.gO(s)){if(0>=s.length)return A.a(s,0)
s=s[0]}else s=0
return s},
gu(){var s=this.a
return s.length>1?s[1]:0},
gA(){var s=this.a
return s.length>2?s[2]:0},
gv(){var s=this.a
return s.length>3?s[3]:0},
gau(){return A.ab(this)},
af(a){var s,r=a.gq(),q=this.a
if(!B.C.gO(q)){r=B.b.j(r)
q.$flags&2&&A.c(q)
if(0>=q.length)return A.a(q,0)
q[0]=r}r=a.gu()
s=q.length
if(s>1){r=B.b.j(r)
q.$flags&2&&A.c(q)
q[1]=r}r=a.gA()
if(s>2){r=B.b.j(r)
q.$flags&2&&A.c(q)
q[2]=r}r=a.gv()
if(s>3){r=B.b.j(r)
q.$flags&2&&A.c(q)
q[3]=r}},
gJ(a){return new A.X(this)},
N(a,b){if(b==null)return!1
return t.G.b(b)&&b.gn(b)===this.a.length&&b.gH(b)===A.o(A.x(this,!0,A.k(this).i("h.E")))},
gH(a){return A.o(A.x(this,!0,A.k(this).i("h.E")))},
$iE:1}
A.ds.prototype={
P(){var s=this.b
s===$&&A.e("data")
return new A.ds(this.a,s)},
gM(){return B.D},
gS(){return null},
cA(a){var s
if(a<this.a){s=this.b
s===$&&A.e("data")
s=B.a.a3(s,6-(a<<1>>>0))&3}else s=0
return s},
cW(a,b){var s,r,q
if(a>=this.a)return
if(!(a>=0&&a<4))return A.a(B.bp,a)
s=B.bp[a]
r=B.b.j(b)
q=this.b
q===$&&A.e("data")
this.b=(q&s|B.a.a0(r&3,6-(a<<1>>>0)))>>>0},
k(a,b){return this.cA(b)},
h(a,b,c){return this.cW(b,c)},
gW(){return this.cA(0)},
gq(){return this.cA(0)},
gu(){return this.cA(1)},
gA(){return this.cA(2)},
gv(){return this.cA(3)},
gau(){return A.ab(this)},
af(a){this.a9(a.gq(),a.gu(),a.gA(),a.gv())},
a9(a,b,c,d){var s=this
s.cW(0,a)
s.cW(1,b)
s.cW(2,c)
s.cW(3,d)},
gJ(a){return new A.X(this)},
N(a,b){if(b==null)return!1
return t.G.b(b)&&b.gn(b)===this.a&&b.gH(b)===A.o(A.x(this,!0,A.k(this).i("h.E")))},
gH(a){return A.o(A.x(this,!0,A.k(this).i("h.E")))},
$iE:1,
gn(a){return this.a}}
A.dt.prototype={
P(){return new A.dt(new Uint32Array(A.C(this.a)))},
gM(){return B.N},
gn(a){return this.a.length},
gS(){return null},
k(a,b){var s=this.a,r=s.length
if(b<r){if(!(b>=0))return A.a(s,b)
s=s[b]}else s=0
return s},
h(a,b,c){var s,r=this.a,q=r.length
if(b<q){s=B.b.j(c)
r.$flags&2&&A.c(r)
if(!(b>=0))return A.a(r,b)
r[b]=s}},
gW(){var s=this.a
if(!B.m.gO(s)){if(0>=s.length)return A.a(s,0)
s=s[0]}else s=0
return s},
gq(){var s=this.a
if(!B.m.gO(s)){if(0>=s.length)return A.a(s,0)
s=s[0]}else s=0
return s},
gu(){var s=this.a
return s.length>1?s[1]:0},
gA(){var s=this.a
return s.length>2?s[2]:0},
gv(){var s=this.a
return s.length>3?s[3]:0},
gau(){return A.ab(this)},
af(a){var s,r=a.gq(),q=this.a
if(!B.m.gO(q)){r=B.b.j(r)
q.$flags&2&&A.c(q)
if(0>=q.length)return A.a(q,0)
q[0]=r}r=a.gu()
s=q.length
if(s>1){r=B.b.j(r)
q.$flags&2&&A.c(q)
q[1]=r}r=a.gA()
if(s>2){r=B.b.j(r)
q.$flags&2&&A.c(q)
q[2]=r}r=a.gv()
if(s>3){r=B.b.j(r)
q.$flags&2&&A.c(q)
q[3]=r}},
gJ(a){return new A.X(this)},
N(a,b){if(b==null)return!1
return t.G.b(b)&&b.gn(b)===this.a.length&&b.gH(b)===A.o(A.x(this,!0,A.k(this).i("h.E")))},
gH(a){return A.o(A.x(this,!0,A.k(this).i("h.E")))},
$iE:1}
A.du.prototype={
P(){return new A.du(this.a,new Uint8Array(A.C(this.b)))},
gM(){return B.E},
gS(){return null},
cD(a){var s,r
if(a<0||a>=this.a)s=0
else{s=this.b
r=s.length
if(a<2){if(0>=r)return A.a(s,0)
s=B.a.a3(s[0],4-(a<<2>>>0))&15}else{if(1>=r)return A.a(s,1)
s=B.a.a3(s[1],4-((a&1)<<2))&15}}return s},
d5(a,b){var s,r,q,p
if(a>=this.a)return
s=B.a.L(B.b.j(b),0,15)
if(a>1){a&=1
r=1}else r=0
if(a===0){q=this.b
if(!(r<q.length))return A.a(q,r)
p=q[r]
q.$flags&2&&A.c(q)
q[r]=(p&15|s<<4)>>>0}else if(a===1){q=this.b
if(!(r<q.length))return A.a(q,r)
p=q[r]
q.$flags&2&&A.c(q)
q[r]=(p&240|s)>>>0}},
k(a,b){return this.cD(b)},
h(a,b,c){return this.d5(b,c)},
gW(){return this.cD(0)},
gq(){return this.cD(0)},
gu(){return this.cD(1)},
gA(){return this.cD(2)},
gv(){return this.cD(3)},
gau(){return A.ab(this)},
af(a){this.a9(a.gq(),a.gu(),a.gA(),a.gv())},
a9(a,b,c,d){var s=this
s.d5(0,a)
s.d5(1,b)
s.d5(2,c)
s.d5(3,d)},
gJ(a){return new A.X(this)},
N(a,b){if(b==null)return!1
return t.G.b(b)&&b.gn(b)===this.a&&b.gH(b)===A.o(A.x(this,!0,A.k(this).i("h.E")))},
gH(a){return A.o(A.x(this,!0,A.k(this).i("h.E")))},
$iE:1,
gn(a){return this.a}}
A.bI.prototype={
j7(a,b,c,d){var s,r=this.a
r.$flags&2&&A.c(r)
s=r.length
if(0>=s)return A.a(r,0)
r[0]=a
if(1>=s)return A.a(r,1)
r[1]=b
if(2>=s)return A.a(r,2)
r[2]=c
if(3>=s)return A.a(r,3)
r[3]=d},
P(){return new A.bI(new Uint8Array(A.C(this.a)))},
gM(){return B.h},
gn(a){return this.a.length},
gS(){return null},
k(a,b){var s=this.a,r=s.length
if(b<r){if(!(b>=0))return A.a(s,b)
s=s[b]}else s=0
return s},
h(a,b,c){var s,r=this.a,q=r.length
if(b<q){s=B.b.j(c)
r.$flags&2&&A.c(r)
if(!(b>=0))return A.a(r,b)
r[b]=s}},
gW(){var s=this.a
if(!B.f.gO(s)){if(0>=s.length)return A.a(s,0)
s=s[0]}else s=0
return s},
gq(){var s=this.a
if(!B.f.gO(s)){if(0>=s.length)return A.a(s,0)
s=s[0]}else s=0
return s},
gu(){var s=this.a
return s.length>1?s[1]:0},
gA(){var s=this.a
return s.length>2?s[2]:0},
gv(){var s=this.a
return s.length>3?s[3]:255},
gau(){return A.ab(this)},
af(a){var s,r=a.gq(),q=this.a
if(!B.f.gO(q)){r=B.b.j(r)
q.$flags&2&&A.c(q)
if(0>=q.length)return A.a(q,0)
q[0]=r}r=a.gu()
s=q.length
if(s>1){r=B.b.j(r)
q.$flags&2&&A.c(q)
q[1]=r}r=a.gA()
if(s>2){r=B.b.j(r)
q.$flags&2&&A.c(q)
q[2]=r}r=a.gv()
if(s>3){r=B.b.j(r)
q.$flags&2&&A.c(q)
q[3]=r}},
gJ(a){return new A.X(this)},
N(a,b){if(b==null)return!1
return t.G.b(b)&&b.gn(b)===this.a.length&&b.gH(b)===A.o(A.x(this,!0,A.k(this).i("h.E")))},
gH(a){return A.o(A.x(this,!0,A.k(this).i("h.E")))},
$iE:1}
A.hD.prototype={}
A.dp.prototype={}
A.aL.prototype={
ap(){return"Format."+this.b}}
A.hy.prototype={
ap(){return"BlendMode."+this.b}}
A.cx.prototype={
dv(a){var s=$.oQ()
if(!s.a_(a))return"<unknown>"
return s.k(0,a).a},
t(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
for(s=e.a,r=A.dS(s,s.r,A.k(s).c),q=t.p,p=t.r,o=t.N,n=t.a,m="";r.B();){l=r.d
m+=l+"\n"
k=s.k(0,l)
for(l=k.a,j=new A.aA(l,l.r,A.k(l).i("aA<1>")),j.c=l.e;j.B();){l=j.d
i=k.k(0,l)
m=i==null?m+("\t"+e.dv(l)+"\n"):m+("\t"+e.dv(l)+": "+i.t(0)+"\n")}for(l=k.b.a,j=new A.aA(l,l.r,A.k(l).i("aA<1>")),j.c=l.e;j.B();){h=j.d
m+=h+"\n"
if(!l.a_(h))l.h(0,h,new A.b4(A.H(q,p),new A.bc(A.H(o,n))))
g=l.k(0,h)
for(h=g.a,f=new A.aA(h,h.r,A.k(h).i("aA<1>")),f.c=h.e;f.B();){h=f.d
i=g.k(0,h)
m=i==null?m+("\t"+e.dv(h)+"\n"):m+("\t"+e.dv(h)+": "+i.t(0)+"\n")}}}return m.charCodeAt(0)==0?m:m},
b3(a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3="exif",a4="interop",a5=a6.b
a6.b=!0
a6.aO(19789)
a6.aO(42)
a6.aW(8)
s=a2.a
if(s.k(0,"ifd0")==null)s.h(0,"ifd0",new A.b4(A.H(t.p,t.r),new A.bc(A.H(t.N,t.a))))
r=t.N
q=t.p
p=A.H(r,q)
for(o=A.k(s),n=o.i("aX<1>"),o=A.dS(s,s.r,o.c),m=t.r,l=t.a,k=8;o.B();){j=o.d
i=s.k(0,j)
i.toString
p.h(0,j,k)
j=i.b.a
if(j.a_(a3)){h=new Uint32Array(1)
h[0]=0
i.h(0,34665,new A.bx(h))}else i.a.cs(0,34665)
if(j.a_(a4)){h=new Uint32Array(1)
h[0]=0
i.h(0,40965,new A.bx(h))}else i.a.cs(0,40965)
if(j.a_("gps")){h=new Uint32Array(1)
h[0]=0
i.h(0,34853,new A.bx(h))}else i.a.cs(0,34853)
i=i.a
k+=2+12*J.aq(i.gby().a)+4
for(i=i.gby(),h=A.k(i),i=new A.aB(J.ap(i.a),i.b,h.i("aB<1,2>")),h=h.y[1];i.B();){g=i.a
if(g==null)g=h.a(g)
f=g.gaN().a
if(!(f<13))return A.a(B.w,f)
e=B.w[f]*g.gn(g)
if(e>4)k+=e}for(i=new A.aA(j,j.r,A.k(j).i("aA<1>")),i.c=j.e;i.B();){h=i.d
if(!j.a_(h))j.h(0,h,new A.b4(A.H(q,m),new A.bc(A.H(r,l))))
g=j.k(0,h)
g.toString
p.h(0,h,k)
g=g.a
d=2+12*J.aq(g.gby().a)
for(h=g.gby(),g=A.k(h),h=new A.aB(J.ap(h.a),h.b,g.i("aB<1,2>")),g=g.y[1];h.B();){f=h.a
if(f==null)f=g.a(f)
c=f.gaN().a
if(!(c<13))return A.a(B.w,c)
e=B.w[c]*f.gn(f)
if(e>4)d+=e}k+=d}}b=s.a
for(o=b-1,a=0;a<b;++a){a0=new A.aX(s,n).aq(0,a)
j=s.gby()
a1=j.b.$1(J.ht(j.a,a))
j=a1.b.a
if(j.a_(a3)){i=a1.k(0,34665)
i.toString
h=p.k(0,a3)
h.toString
i.bQ(h)}if(j.a_(a4)){i=a1.k(0,40965)
i.toString
h=p.k(0,a4)
h.toString
i.bQ(h)}if(j.a_("gps")){i=a1.k(0,34853)
i.toString
h=p.k(0,"gps")
h.toString
i.bQ(h)}i=p.k(0,a0)
i.toString
a2.hP(a6,a1,i+2+12*J.aq(a1.a.gby().a)+4)
if(a===o)a6.aW(0)
else{i=p.k(0,new A.aX(s,n).aq(0,a+1))
i.toString
a6.aW(i)}a2.hQ(a6,a1)
for(i=new A.aA(j,j.r,A.k(j).i("aA<1>")),i.c=j.e;i.B();){h=i.d
if(!j.a_(h))j.h(0,h,new A.b4(A.H(q,m),new A.bc(A.H(r,l))))
g=j.k(0,h)
g.toString
h=p.k(0,h)
h.toString
a2.hP(a6,g,h+2+12*J.aq(g.a.gby().a))
a2.hQ(a6,g)}}a6.b=a5},
hP(a,b,c){var s,r,q,p,o,n,m=b.a
a.aO(m.a)
for(m=A.dS(m,m.r,A.k(m).c);m.B();){s=m.d
r=b.k(0,s)
r.toString
q=s===273
p=q&&r.gaN()===B.H?B.p:r.gaN()
o=q&&r.gaN()===B.H?1:r.gn(r)
a.aO(s)
a.aO(p.a)
a.aW(o)
s=r.gaN().a
if(!(s<13))return A.a(B.w,s)
n=B.w[s]*r.gn(r)
if(n<=4){r.b3(a)
for(;n<4;){a.D(0);++n}}else{a.aW(c)
c+=n}}return c},
hQ(a,b){var s,r,q,p
for(s=b.a.gby(),r=A.k(s),s=new A.aB(J.ap(s.a),s.b,r.i("aB<1,2>")),r=r.y[1];s.B();){q=s.a
if(q==null)q=r.a(q)
p=q.gaN().a
if(!(p<13))return A.a(B.w,p)
if(B.w[p]*q.gn(q)>4)q.b3(a)}},
cr(a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=a7.e
a7.e=!0
s=a7.d
r=a7.p()
if(r===18761){a7.e=!1
if(a7.p()!==42){a7.e=a6
return!1}}else if(r===19789){a7.e=!0
if(a7.p()!==42){a7.e=a6
return!1}}else return!1
q=a7.m()
for(p=this.a,o=t.n0,n=t.p,m=t.r,l=t.N,k=t.a,j=a7.c,i=0;q>0;q=a0){h=s+q
a7.d=h
if(j-h<2)break
g=new A.b4(A.H(n,m),new A.bc(A.H(l,k)))
f=a7.p()
e=A.b(new Array(f),o)
for(d=0;d<f;++d)e[d]=this.hw(a7,s)
for(h=e.length,c=0;c<e.length;e.length===h||(0,A.aI)(e),++c){b=e[c]
a=b.b
if(a!=null)g.h(0,b.a,a)}p.h(0,"ifd"+i,g);++i
a0=a7.m()
if(a0===q)break}for(p=p.gby(),j=A.k(p),p=new A.aB(J.ap(p.a),p.b,j.i("aB<1,2>")),j=j.y[1];p.B();){h=p.a
if(h==null)h=j.a(h)
for(a=B.bV.gb8(),a=a.gJ(a),a1=h.a,a2=h.b.a;a.B();){a3=a.gK()
if(a1.a_(a3)){a7.d=s+h.k(0,a3).j(0)
g=new A.b4(A.H(n,m),new A.bc(A.H(l,k)))
f=a7.p()
e=A.b(new Array(f),o)
for(d=0;d<f;++d)e[d]=this.hw(a7,s)
for(a4=e.length,c=0;c<e.length;e.length===a4||(0,A.aI)(e),++c){b=e[c]
a5=b.b
if(a5!=null)g.h(0,b.a,a5)}a3=B.bV.k(0,a3)
a3.toString
a2.h(0,a3,g)}}}a7.e=a6
return!1},
hw(a,b){var s,r,q,p,o=a.p(),n=a.p(),m=a.m(),l=new A.jp(o,null)
if(n>13)return l
if(!(n<13))return A.a(B.ap,n)
s=B.ap[n]
r=m*B.w[n]
q=a.d
if((r>4?a.d=a.m()+b:q)+r>a.c)return l
p=a.az(r)
switch(s.a){case 0:break
case 6:l.b=new A.c7(new Int8Array(A.C(J.nB(B.f.gE(p.a4()),0,m))))
break
case 1:l.b=new A.bL(new Uint8Array(A.C(p.az(m).a4())))
break
case 7:l.b=new A.dC(new Uint8Array(A.C(p.az(m).a4())))
break
case 2:l.b=new A.cB(m===0?"":p.ak(m-1))
break
case 3:l.b=A.pm(p,m)
break
case 4:l.b=A.ph(p,m)
break
case 5:l.b=A.pi(p,m)
break
case 10:l.b=A.pk(p,m)
break
case 8:l.b=A.pl(p,m)
break
case 9:l.b=A.pj(p,m)
break
case 11:l.b=A.pn(p,m)
break
case 12:l.b=A.pg(p,m)
break}a.d=q+4
return l}}
A.jp.prototype={}
A.hJ.prototype={}
A.bc.prototype={
jc(a){a.a.aK(0,new A.kH(this))},
gO(a){var s,r,q=this.a
if(q.a===0)return!0
for(q=q.gby(),s=A.k(q),q=new A.aB(J.ap(q.a),q.b,s.i("aB<1,2>")),s=s.y[1];q.B();){r=q.a
if(r==null)r=s.a(r)
if(!(r.a.a===0&&r.b.gO(0)))return!1}return!0},
k(a,b){var s=this.a
if(!s.a_(b))s.h(0,b,new A.b4(A.H(t.p,t.r),new A.bc(A.H(t.N,t.a))))
s=s.k(0,b)
s.toString
return s}}
A.kH.prototype={
$2(a,b){var s
A.I(a)
s=A.pf(t.a.a(b))
this.a.a.h(0,a,s)
return s},
$S:23}
A.b4.prototype={
mB(a){a.a.aK(0,new A.kI(this))
a.b.a.aK(0,new A.kJ(this))},
k(a,b){var s=this.a.k(0,b)
return s},
h(a,b,c){this.a.h(0,b,c)}}
A.kI.prototype={
$2(a,b){var s
A.r(a)
s=t.r.a(b).P()
this.a.a.h(0,a,s)
return s},
$S:38}
A.kJ.prototype={
$2(a,b){var s
A.I(a)
s=A.pf(t.a.a(b))
this.a.b.a.h(0,a,s)
return s},
$S:23}
A.aF.prototype={
ap(){return"IfdValueType."+this.b}}
A.ak.prototype={
al(a,b){A.r(b)
return 0},
j(a){return this.al(0,0)},
bE(){return new Uint8Array(0)},
t(a){return""},
N(a,b){var s=this
if(b==null)return!1
return b instanceof A.ak&&s.gaN()===b.gaN()&&s.gn(s)===b.gn(b)&&s.gH(s)===b.gH(b)},
gH(a){return 0},
bQ(a){}}
A.bL.prototype={
P(){return new A.bL(new Uint8Array(A.C(this.a)))},
gaN(){return B.b0},
gn(a){return this.a.length},
N(a,b){var s,r
if(b==null)return!1
if(b instanceof A.bL){s=this.a
r=b.a
s=s.length===r.length&&A.o(s)===A.o(r)}else s=!1
return s},
gH(a){return A.o(this.a)},
al(a,b){var s
A.r(b)
s=this.a
if(!(b>=0&&b<s.length))return A.a(s,b)
return s[b]},
j(a){return this.al(0,0)},
bQ(a){var s=this.a
s.$flags&2&&A.c(s)
if(0>=s.length)return A.a(s,0)
s[0]=a},
bE(){return this.a},
b3(a){a.bF(this.a)},
t(a){var s=this.a,r=s.length
if(r===1){if(0>=r)return A.a(s,0)
s=""+s[0]}else s=A.t(s)
return s}}
A.cB.prototype={
P(){return new A.cB(this.a)},
gaN(){return B.l},
gn(a){return this.a.length+1},
N(a,b){var s,r
if(b==null)return!1
if(b instanceof A.cB){s=this.a
r=b.a
s=s.length+1===r.length+1&&B.d.gH(s)===B.d.gH(r)}else s=!1
return s},
gH(a){return B.d.gH(this.a)},
bE(){return new Uint8Array(A.C(new A.ai(this.a)))},
b3(a){a.bF(new A.ai(this.a))
a.D(0)},
t(a){return this.a}}
A.cG.prototype={
jh(a,b){var s,r,q,p
for(s=this.a,r=s.$flags|0,q=0;q<b;++q){p=a.p()
r&2&&A.c(s)
if(!(q<s.length))return A.a(s,q)
s[q]=p}},
P(){return new A.cG(new Uint16Array(A.C(this.a)))},
gaN(){return B.j},
gn(a){return this.a.length},
N(a,b){var s,r
if(b==null)return!1
if(b instanceof A.cG){s=this.a
r=b.a
s=s.length===r.length&&A.o(s)===A.o(r)}else s=!1
return s},
gH(a){return A.o(this.a)},
al(a,b){var s
A.r(b)
s=this.a
if(!(b>=0&&b<s.length))return A.a(s,b)
return s[b]},
j(a){return this.al(0,0)},
bQ(a){var s=this.a
s.$flags&2&&A.c(s)
if(0>=s.length)return A.a(s,0)
s[0]=a},
bE(){return J.bv(B.C.gE(this.a))},
b3(a){var s,r=this.a,q=r.length
for(s=0;s<q;++s)a.aO(r[s])},
t(a){var s=this.a,r=s.length
if(r===1){if(0>=r)return A.a(s,0)
s=""+s[0]}else s=A.t(s)
return s}}
A.bx.prototype={
je(a,b){var s,r,q,p
for(s=this.a,r=s.$flags|0,q=0;q<b;++q){p=a.m()
r&2&&A.c(s)
if(!(q<s.length))return A.a(s,q)
s[q]=p}},
P(){return new A.bx(new Uint32Array(A.C(this.a)))},
gaN(){return B.p},
gn(a){return this.a.length},
N(a,b){var s,r
if(b==null)return!1
if(b instanceof A.bx){s=this.a
r=b.a
s=s.length===r.length&&A.o(s)===A.o(r)}else s=!1
return s},
gH(a){return A.o(this.a)},
al(a,b){var s
A.r(b)
s=this.a
if(!(b>=0&&b<s.length))return A.a(s,b)
return s[b]},
j(a){return this.al(0,0)},
bQ(a){var s=this.a
s.$flags&2&&A.c(s)
if(0>=s.length)return A.a(s,0)
s[0]=a},
bE(){return J.bv(B.m.gE(this.a))},
b3(a){var s,r=this.a,q=r.length
for(s=0;s<q;++s)a.aW(r[s])},
t(a){var s=this.a,r=s.length
if(r===1){if(0>=r)return A.a(s,0)
s=""+s[0]}else s=A.t(s)
return s}}
A.cC.prototype={
P(){return new A.cC(A.nT(this.a,!0,t.i))},
gaN(){return B.v},
gn(a){return this.a.length},
al(a,b){var s
A.r(b)
s=this.a
if(!(b>=0&&b<s.length))return A.a(s,b)
return s[b].j(0)},
j(a){return this.al(0,0)},
N(a,b){var s,r,q
if(b==null)return!1
if(b instanceof A.cC){s=this.a
r=s.length
q=b.a
s=r===q.length&&A.o(s)===A.o(q)}else s=!1
return s},
gH(a){return A.o(this.a)},
b3(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.aI)(s),++q){p=s[q]
a.aW(p.a)
a.aW(p.b)}},
t(a){var s=this.a,r=s.length
if(r===1){if(0>=r)return A.a(s,0)
s=s[0].t(0)}else s=A.t(s)
return s}}
A.c7.prototype={
P(){return new A.c7(new Int8Array(A.C(this.a)))},
gaN(){return B.b4},
gn(a){return this.a.length},
N(a,b){var s,r
if(b==null)return!1
if(b instanceof A.c7){s=this.a
r=b.a
s=s.length===r.length&&A.o(s)===A.o(r)}else s=!1
return s},
gH(a){return A.o(this.a)},
al(a,b){var s
A.r(b)
s=this.a
if(!(b>=0&&b<s.length))return A.a(s,b)
return s[b]},
j(a){return this.al(0,0)},
bQ(a){var s=this.a
s.$flags&2&&A.c(s)
if(0>=s.length)return A.a(s,0)
s[0]=a},
bE(){return J.bv(B.a2.gE(this.a))},
b3(a){a.bF(J.ac(B.a2.gE(this.a),0,null))},
t(a){var s=this.a,r=s.length
if(r===1){if(0>=r)return A.a(s,0)
s=""+s[0]}else s=A.t(s)
return s}}
A.cF.prototype={
jg(a,b){var s,r,q,p,o
for(s=this.a,r=s.$flags|0,q=0;q<b;++q){p=a.p()
o=$.aS()
o.$flags&2&&A.c(o)
o[0]=p
p=$.b2()
if(0>=p.length)return A.a(p,0)
p=p[0]
r&2&&A.c(s)
if(!(q<s.length))return A.a(s,q)
s[q]=p}},
P(){return new A.cF(new Int16Array(A.C(this.a)))},
gaN(){return B.b5},
gn(a){return this.a.length},
N(a,b){var s,r
if(b==null)return!1
if(b instanceof A.cF){s=this.a
r=b.a
s=s.length===r.length&&A.o(s)===A.o(r)}else s=!1
return s},
gH(a){return A.o(this.a)},
al(a,b){var s
A.r(b)
s=this.a
if(!(b>=0&&b<s.length))return A.a(s,b)
return s[b]},
j(a){return this.al(0,0)},
bQ(a){var s=this.a
s.$flags&2&&A.c(s)
if(0>=s.length)return A.a(s,0)
s[0]=a},
bE(){return J.bv(B.a0.gE(this.a))},
b3(a){var s,r,q,p=new Int16Array(1),o=J.oT(B.a0.gE(p),0,null),n=this.a,m=n.length
for(s=o.length,r=0;r<m;++r){q=n[r]
if(0>=1)return A.a(p,0)
p[0]=q
if(0>=s)return A.a(o,0)
a.aO(o[0])}},
t(a){var s=this.a,r=s.length
if(r===1){if(0>=r)return A.a(s,0)
s=""+s[0]}else s=A.t(s)
return s}}
A.cD.prototype={
jf(a,b){var s,r,q,p,o
for(s=this.a,r=s.$flags|0,q=0;q<b;++q){p=a.m()
o=$.V()
o.$flags&2&&A.c(o)
o[0]=p
p=$.au()
if(0>=p.length)return A.a(p,0)
p=p[0]
r&2&&A.c(s)
if(!(q<s.length))return A.a(s,q)
s[q]=p}},
P(){return new A.cD(new Int32Array(A.C(this.a)))},
gaN(){return B.b6},
gn(a){return this.a.length},
N(a,b){var s,r
if(b==null)return!1
if(b instanceof A.cD){s=this.a
r=b.a
s=s.length===r.length&&A.o(s)===A.o(r)}else s=!1
return s},
gH(a){return A.o(this.a)},
al(a,b){var s
A.r(b)
s=this.a
if(!(b>=0&&b<s.length))return A.a(s,b)
return s[b]},
j(a){return this.al(0,0)},
bQ(a){var s=this.a
s.$flags&2&&A.c(s)
if(0>=s.length)return A.a(s,0)
s[0]=a},
bE(){return J.bv(B.a1.gE(this.a))},
b3(a){var s,r,q,p=this.a,o=p.length
for(s=0;s<o;++s){r=p[s]
q=$.jQ()
q.$flags&2&&A.c(q)
q[0]=r
r=$.nz()
if(0>=r.length)return A.a(r,0)
a.aW(r[0])}},
t(a){var s=this.a,r=s.length
if(r===1){if(0>=r)return A.a(s,0)
s=""+s[0]}else s=A.t(s)
return s}}
A.cE.prototype={
P(){return new A.cE(A.nT(this.a,!0,t.i))},
gaN(){return B.b1},
gn(a){return this.a.length},
N(a,b){var s,r,q
if(b==null)return!1
if(b instanceof A.cE){s=this.a
r=s.length
q=b.a
s=r===q.length&&A.o(s)===A.o(q)}else s=!1
return s},
gH(a){return A.o(this.a)},
al(a,b){var s
A.r(b)
s=this.a
if(!(b>=0&&b<s.length))return A.a(s,b)
return s[b].j(0)},
j(a){return this.al(0,0)},
b3(a){var s,r,q,p,o,n
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.aI)(s),++q){p=s[q]
o=$.jQ()
o.$flags&2&&A.c(o)
o[0]=p.a
n=$.nz()
if(0>=n.length)return A.a(n,0)
a.aW(n[0])
o[0]=p.b
a.aW(n[0])}},
t(a){var s=this.a,r=s.length
if(r===1){if(0>=r)return A.a(s,0)
s=s[0].t(0)}else s=A.t(s)
return s}}
A.dB.prototype={
ji(a,b){var s,r,q,p,o
for(s=this.a,r=s.$flags|0,q=0;q<b;++q){p=a.m()
o=$.V()
o.$flags&2&&A.c(o)
o[0]=p
p=$.ct()
if(0>=p.length)return A.a(p,0)
p=p[0]
r&2&&A.c(s)
if(!(q<s.length))return A.a(s,q)
s[q]=p}},
P(){return new A.dB(new Float32Array(A.C(this.a)))},
gaN(){return B.b2},
gn(a){return this.a.length},
N(a,b){var s,r
if(b==null)return!1
if(b instanceof A.dB){s=this.a
r=b.a
s=s.length===r.length&&A.o(s)===A.o(r)}else s=!1
return s},
gH(a){return A.o(this.a)},
bE(){return J.bv(B.P.gE(this.a))},
b3(a){var s,r=this.a,q=r.length
for(s=0;s<q;++s)a.nx(r[s])},
t(a){var s=this.a,r=s.length
if(r===1){if(0>=r)return A.a(s,0)
s=A.t(s[0])}else s=A.t(s)
return s}}
A.dA.prototype={
jd(a,b){var s,r
for(s=this.a,r=0;r<b;++r)B.Q.h(s,r,a.eb())},
P(){return new A.dA(new Float64Array(A.C(this.a)))},
gaN(){return B.b3},
gn(a){return this.a.length},
N(a,b){var s,r
if(b==null)return!1
if(b instanceof A.dA){s=this.a
r=b.a
s=s.length===r.length&&A.o(s)===A.o(r)}else s=!1
return s},
gH(a){return A.o(this.a)},
bE(){return J.bv(B.Q.gE(this.a))},
b3(a){var s,r=this.a,q=r.length
for(s=0;s<q;++s)a.ny(r[s])},
t(a){var s=this.a,r=s.length
if(r===1){if(0>=r)return A.a(s,0)
s=A.t(s[0])}else s=A.t(s)
return s}}
A.dC.prototype={
P(){return new A.dC(new Uint8Array(A.C(this.a)))},
gaN(){return B.H},
gn(a){return this.a.length},
bE(){return this.a},
N(a,b){var s,r
if(b==null)return!1
if(b instanceof A.dC){s=this.a
r=b.a
s=s.length===r.length&&A.o(s)===A.o(r)}else s=!1
return s},
gH(a){return A.o(this.a)},
b3(a){a.bF(this.a)},
t(a){return"<data>"}}
A.ax.prototype={
ap(){return"BmpCompression."+this.b}}
A.k0.prototype={}
A.bF.prototype={
fF(a,b){var s,r,q,p,o,n,m,l=this,k=l.d,j=k<=40
if(j){s=l.r
s=s===B.aw||s===B.ax}else s=!0
if(s){s=l.as=a.m()
r=A.n6(s)
l.CW=r
q=B.a.a3(s,r)
s=q>0
l.cx=s?255/q:0
r=l.at=a.m()
p=A.n6(r)
l.cy=p
o=B.a.a3(r,p)
l.db=s?255/o:0
r=l.ax=a.m()
p=A.n6(r)
l.dx=p
n=B.a.a3(r,p)
l.dy=s?255/n:0
if(!j||l.r===B.ax){j=l.ay=a.m()
s=A.n6(j)
l.fr=s
m=B.a.a3(j,s)
l.fx=m>0?255/m:0}else if(l.f===16){l.ay=4278190080
l.fr=24
l.fx=1}else{l.ay=4278190080
l.fr=24
l.fx=1}}else if(l.f===16){l.as=31744
l.CW=10
l.cx=8.225806451612904
l.at=992
l.cy=5
l.db=8.225806451612904
l.ax=31
l.dx=0
l.dy=8.225806451612904
l.fx=l.fr=l.ay=0}else{l.as=16711680
l.CW=16
l.cx=1
l.at=65280
l.cy=8
l.db=1
l.ax=255
l.dx=0
l.dy=1
l.ay=4278190080
l.fr=24
l.fx=1}j=a.d
a.d=j+(k-(j-l.fy))
if(l.f<=8)l.nh(a)},
gdd(){var s=this.d
if(s!==40)if(s===124){s=this.ay
s===$&&A.e("alphaMask")
s=s===0}else s=!1
else s=!0
return s},
gV(){return Math.abs(this.c)},
nh(a){var s,r,q,p,o,n=this,m=n.z
if(m===0)m=B.a.R(1,n.f)
n.ch=new A.bn(new Uint8Array(m*3),m,3)
for(s=0;s<m;++s){r=J.d(a.a,a.d++)
q=J.d(a.a,a.d++)
p=J.d(a.a,a.d++)
o=J.d(a.a,a.d++)
n.ch.dz(s,p,q,r,o)}},
mH(a2,a3){var s,r,q,p,o,n,m,l,k,j=this,i="_redShift",h="_redScale",g="greenMask",f="_greenShift",e="_greenScale",d="blueMask",c="_blueShift",b="_blueScale",a="alphaMask",a0="_alphaShift",a1="_alphaScale"
t.jO.a(a3)
if(j.ch!=null){s=j.f
if(s===1){r=a2.G()
for(q=7;q>=0;--q)a3.$4(B.a.bo(r,q)&1,0,0,0)
return}else if(s===2){r=a2.G()
for(q=6;q>=0;q-=2)a3.$4(B.a.bo(r,q)&2,0,0,0)}else if(s===4){r=a2.G()
a3.$4(B.a.l(r,4)&15,0,0,0)
a3.$4(r&15,0,0,0)
return}else if(s===8){a3.$4(a2.G(),0,0,0)
return}}s=j.r
if(s===B.aw&&j.f===32){p=a2.m()
s=j.as
s===$&&A.e("redMask")
o=j.CW
o===$&&A.e(i)
o=B.a.a3((p&s)>>>0,o)
s=j.cx
s===$&&A.e(h)
n=B.b.j(o*s)
s=j.at
s===$&&A.e(g)
o=j.cy
o===$&&A.e(f)
o=B.a.a3((p&s)>>>0,o)
s=j.db
s===$&&A.e(e)
m=B.b.j(o*s)
s=j.ax
s===$&&A.e(d)
o=j.dx
o===$&&A.e(c)
o=B.a.a3((p&s)>>>0,o)
s=j.dy
s===$&&A.e(b)
l=B.b.j(o*s)
if(j.gdd())k=255
else{s=j.ay
s===$&&A.e(a)
o=j.fr
o===$&&A.e(a0)
o=B.a.a3((p&s)>>>0,o)
s=j.fx
s===$&&A.e(a1)
k=B.b.j(o*s)}return a3.$4(n,m,l,k)}else{o=j.f
if(o===32&&s===B.aQ){l=a2.G()
m=a2.G()
n=a2.G()
k=a2.G()
return a3.$4(n,m,l,j.gdd()?255:k)}else if(o===24){l=a2.G()
m=a2.G()
return a3.$4(a2.G(),m,l,255)}else if(o===16){p=a2.p()
s=j.as
s===$&&A.e("redMask")
o=j.CW
o===$&&A.e(i)
o=B.a.a3((p&s)>>>0,o)
s=j.cx
s===$&&A.e(h)
n=B.b.j(o*s)
s=j.at
s===$&&A.e(g)
o=j.cy
o===$&&A.e(f)
o=B.a.a3((p&s)>>>0,o)
s=j.db
s===$&&A.e(e)
m=B.b.j(o*s)
s=j.ax
s===$&&A.e(d)
o=j.dx
o===$&&A.e(c)
o=B.a.a3((p&s)>>>0,o)
s=j.dy
s===$&&A.e(b)
l=B.b.j(o*s)
if(j.gdd())k=255
else{s=j.ay
s===$&&A.e(a)
o=j.fr
o===$&&A.e(a0)
o=B.a.a3((p&s)>>>0,o)
s=j.fx
s===$&&A.e(a1)
k=B.b.j(o*s)}return a3.$4(n,m,l,k)}else throw A.f(A.p("Unsupported bitsPerPixel ("+o+") or compression ("+s.t(0)+")."))}},
$iO:1}
A.es.prototype={
b6(a){var s,r=null
if(!A.nE(A.u(a,!1,r,0)))return r
s=A.u(a,!1,r,0)
this.a=s
return this.b=A.rW(s,r)},
aw(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=null,a0=b.b
if(a0==null)return new A.bM(a,a,a,a,0,B.k,0,0)
s=b.a
s===$&&A.e("_input")
r=a0.a.b
r===$&&A.e("imageOffset")
s.d=r
q=a0.f
r=a0.b
p=B.a.Y(r*q+31,32)*4
s=b.c
if(s)o=4
else if(q===1||q===4||q===8)o=1
else{n=q===32?4:3
o=n}if(s)m=B.h
else if(q===1)m=B.A
else{if(q===2)n=B.D
else if(q===4)n=B.E
else n=B.h
m=n}l=s?a:a0.ch
k=A.a0(a,a,m,0,B.k,a0.gV(),a,0,o,l,B.h,r,!1)
for(j=k.gV()-1,s=a0.c,r=1/s<0,n=s<0,s=s===0;j>=0;--j){i={}
if(!(s?r:n))h=j
else{g=k.a
g=g==null?a:g.b
h=(g==null?0:g)-1-j}g=b.a
f=g.am(p)
g.d=g.d+(f.c-f.d)
g=k.a
e=g==null
d=e?a:g.a
if(d==null)d=0
i.a=0
c=e?a:g.a5(0,h,a)
if(c==null)c=new A.ad()
for(;i.a<d;)a0.mH(f,new A.k_(i,b,d,a0,c))}return k},
b2(a,b){if(this.b6(a)==null)return null
return this.aw(0)}}
A.k_.prototype={
$4(a,b,c,d){var s,r,q=this,p=q.a
if(p.a<q.c){s=q.b.c&&q.d.ch!=null
r=q.e
if(s){s=q.d
r.a9(s.ch.b0(a),s.ch.b_(a),s.ch.aY(a),s.ch.bb(a))}else r.a9(a,b,c,d)
r.B();++p.a}},
$S:40}
A.kf.prototype={}
A.O.prototype={}
A.ke.prototype={}
A.kg.prototype={}
A.hK.prototype={}
A.eR.prototype={
dg(){return this.w},
bx(a,b,c,d,e){throw A.f(A.p("B44 compression not yet supported."))},
cM(a,b,c){return this.bx(a,b,c,null,null)},
t(a){return A.t(this.r)+" "+this.x}}
A.dx.prototype={
ap(){return"ExrChannelType."+this.b}}
A.cy.prototype={
ap(){return"ExrChannelName."+this.b}}
A.hL.prototype={
j8(a){var s=this,r=a.di()
s.a=r
if(r.length===0)return
r=a.m()
if(!(r<3))return A.a(B.bP,r)
s.c=B.bP[r]
a.G()
a.d+=3
s.f=a.m()
s.r=a.m()
r=s.a
if(r==="R"){s.w=!0
s.b=B.cF}else if(r==="G"){s.w=!0
s.b=B.cG}else if(r==="B"){s.w=!0
s.b=B.cH}else if(r==="A"){s.w=!0
s.b=B.cI}else{s.w=!1
s.b=B.cJ}switch(s.c.a){case 0:s.d=4
break
case 1:s.d=2
break
case 2:s.d=4
break}}}
A.bm.prototype={
ap(){return"ExrCompressorType."+this.b}}
A.bJ.prototype={
bx(a,b,c,d,e){throw A.f(A.p("Unsupported compression type"))},
cM(a,b,c){return this.bx(a,b,c,null,null)}}
A.i3.prototype={}
A.hN.prototype={
sip(a){this.c=t.T.a(a)}}
A.hO.prototype={
j9(a){var s,r,q,p,o=this,n=A.u(a,!1,null,0)
if(n.m()!==20000630)throw A.f(A.p("File is not an OpenEXR image file."))
s=o.d=n.G()
if(s!==2)throw A.f(A.p("Cannot read version "+s+" image files."))
s=o.e=n.bw()
if((s&4294967289)>>>0!==0)throw A.f(A.p("The file format version number's flag field contains unrecognized flags."))
if((s&16)===0){r=o.c
q=A.pq(r.length,(s&2)!==0,n)
if(q.w>0)B.c.C(r,q)}else for(s=o.c;!0;){q=A.pq(s.length,(o.e&2)!==0,n)
if(q.w<=0)break
B.c.C(s,q)}s=o.c
r=s.length
if(r===0)throw A.f(A.p("Error reading image header"))
for(p=0;p<s.length;s.length===r||(0,A.aI)(s),++p)s[p].ng(n)
o.lI(n)},
lI(a){var s,r,q,p,o=this
for(s=o.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.aI)(s),++q){p=s[q]
o.sa6(Math.max(o.a,p.w))
o.sV(Math.max(o.b,p.x))
if(p.db)o.lR(p,a)
else o.lQ(p,a)}},
lR(b6,b7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=null,b5=this.e
b5===$&&A.e("flags")
s=(b5&16)!==0
b5=b6.b
b5.toString
r=b6.CW
q=b6.ay
p=A.q(b7,b4,0)
o=b6.c
n=b6.a
m=0
l=0
while(!0){k=b6.k1
k.toString
if(!(m<k))break
j=0
while(!0){k=b6.id
k.toString
if(!(j<k))break
k=l!==0
i=0
h=0
while(!0){g=b6.go
if(!(m<g.length))return A.a(g,m)
if(!(i<g[m]))break
f=0
while(!0){g=b6.fy
if(!(j<g.length))return A.a(g,j)
if(!(f<g[j]))break
if(k)break
if(!(l>=0&&l<q.length))return A.a(q,l)
g=q[l]
if(!(h>=0&&h<g.length))return A.a(g,h)
p.d=g[h]
if(s)if(p.m()!==n)throw A.f(A.p("Invalid Image Data"))
e=p.m()
d=p.m()
p.m()
p.m()
c=p.am(p.m())
p.d=p.d+(c.c-c.d)
g=b6.dy
g.toString
b=d*g
a=b6.dx
a.toString
g=r.bx(c,e*a,b,a,g)
a=g.length
a=Math.min(a,a)
a0=new A.ay(g,0,a,0,!1)
a1=r.a
a2=r.b
a3=o.length
a4=0
a5=0
while(!0){if(!(a5<a2&&b<this.b))break
for(a6=0;a6<a3;++a6){if(a4>=a)break
if(!(a6<o.length))return A.a(o,a6)
a7=o[a6]
g=b6.dx
g.toString
a8=e*g
for(a9=0;a9<a1;++a9,++a8){g=a7.c
g===$&&A.e("dataType")
switch(g.a){case 1:g=a0.p()
b0=$.Y
b0=b0!=null?b0:A.a6()
if(!(g<b0.length))return A.a(b0,g)
b1=b0[g]
break
case 2:b1=a0.p()
break
case 0:b1=a0.m()
break
default:b1=b4}g=a7.d
g===$&&A.e("dataSize")
a4+=g
g=a7.w
g===$&&A.e("isColorChannel")
if(g){g=b5.a
b2=g==null?b4:g.a5(a8,b,b4)
if(b2==null)b2=new A.ad()
g=a7.b
g===$&&A.e("nameType")
b2.h(0,g.a,b1)}else{g=a7.a
g===$&&A.e("name")
b0=b5.b
b3=b0!=null?b0.k(0,g):b4
if(b3!=null)b3.T(a8,b,b1,0,0)}}}++a5;++b}++f;++h}++i}++j;++l}++m}},
lQ(a8,a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=null,a7=this.e
a7===$&&A.e("flags")
s=(a7&16)!==0
a7=a8.b
a7.toString
r=a8.CW
q=a8.ay
if(0>=q.length)return A.a(q,0)
p=q[0]
o=a8.cx
n=A.q(a9,a6,0)
for(q=p.length,m=a8.c,l=r!=null,k=0,j=0;j<q;++j){n.d=p[j]
if(s)if(n.m()!==3.141592653589793)throw A.f(A.p("Invalid Image Data"))
i=n.m()
h=$.V()
h.$flags&2&&A.c(h)
h[0]=i
i=$.au()
if(0>=i.length)return A.a(i,0)
h[0]=n.m()
g=n.am(i[0])
n.d=n.d+(g.c-g.d)
if(l){i=r.cM(g,0,k)
h=i.length
f=new A.ay(i,0,Math.min(h,h),0,!1)}else f=g
e=f.c-f.d
d=m.length
c=0
while(!0){if(!(c<o&&k<this.b))break
i=a8.cy
if(!(k>=0&&k<i.length))return A.a(i,k)
b=i[k]
if(b>=e)break
for(a=0;a<d;++a){if(b>=e)break
if(!(a<m.length))return A.a(m,a)
a0=m[a]
a1=a8.w
for(a2=0;a2<a1;++a2){i=a0.c
i===$&&A.e("dataType")
switch(i.a){case 1:i=f.p()
h=$.Y
h=h!=null?h:A.a6()
if(!(i<h.length))return A.a(h,i)
a3=h[i]
break
case 2:a3=f.p()
break
case 0:a3=f.m()
break
default:a3=a6}i=a0.d
i===$&&A.e("dataSize")
b+=i
i=a0.w
i===$&&A.e("isColorChannel")
if(i){i=a7.a
a4=i==null?a6:i.a5(a2,k,a6)
if(a4==null)a4=new A.ad()
i=a0.b
i===$&&A.e("nameType")
a4.h(0,i.a,a3)}else{i=a0.a
i===$&&A.e("name")
h=a7.b
a5=h!=null?h.k(0,i):a6
if(a5!=null)a5.T(a2,k,a3,0,0)}}}++c;++k}}},
sa6(a){this.a=A.r(a)},
sV(a){this.b=A.r(a)},
$iO:1}
A.eE.prototype={
ja(a8,a9,b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this,a4=null,a5="dataType",a6="dataWindow",a7=A.H(t.N,t.I)
for(s=a3.e,r=t.t,q=t.L,p=a3.c,o=B.G;!0;){n=b0.di()
if(n.length===0)break
b0.di()
m=b0.am(b0.m())
b0.d=b0.d+(m.c-m.d)
s.h(0,n,new A.hK())
switch(n){case"channels":for(;!0;){l=new A.hL()
l.j8(m)
k=l.a
k===$&&A.e("name")
if(k.length===0)break
j=l.w
j===$&&A.e("isColorChannel")
if(j){++a3.d
k=l.c
k===$&&A.e(a5)
if(k===B.ay)o=B.G
else o=k===B.az?B.M:B.N}else{j=l.c
j===$&&A.e(a5)
if(j===B.ay){j=a3.w
i=a3.x
a7.h(0,k,new A.dD(new Uint16Array(j*i),j,i,1))}else if(j===B.az){j=a3.w
i=a3.x
a7.h(0,k,new A.dE(new Float32Array(j*i),j,i,1))}else if(j===B.aY){j=a3.w
i=a3.x
a7.h(0,k,new A.dI(new Uint32Array(j*i),j,i,1))}}B.c.C(p,l)}break
case"chromaticities":k=new Float32Array(8)
a3.at=k
j=m.m()
i=$.V()
i.$flags&2&&A.c(i)
i[0]=j
j=$.ct()
if(0>=j.length)return A.a(j,0)
k[0]=j[0]
k=a3.at
i[0]=m.m()
h=j[0]
k.$flags&2&&A.c(k)
k[1]=h
h=a3.at
i[0]=m.m()
k=j[0]
h.$flags&2&&A.c(h)
h[2]=k
k=a3.at
i[0]=m.m()
h=j[0]
k.$flags&2&&A.c(k)
k[3]=h
h=a3.at
i[0]=m.m()
k=j[0]
h.$flags&2&&A.c(h)
h[4]=k
k=a3.at
i[0]=m.m()
h=j[0]
k.$flags&2&&A.c(k)
k[5]=h
h=a3.at
i[0]=m.m()
k=j[0]
h.$flags&2&&A.c(h)
h[6]=k
k=a3.at
i[0]=m.m()
j=j[0]
k.$flags&2&&A.c(k)
k[7]=j
break
case"compression":k=J.d(m.a,m.d++)
if(!(k>=0&&k<8))return A.a(B.bi,k)
a3.ax=B.bi[k]
break
case"dataWindow":k=m.m()
j=$.V()
j.$flags&2&&A.c(j)
j[0]=k
k=$.au()
if(0>=k.length)return A.a(k,0)
i=k[0]
j[0]=m.m()
h=k[0]
j[0]=m.m()
g=k[0]
j[0]=m.m()
a3.sjv(q.a(A.b([i,h,g,k[0]],r)))
k=a3.r
k===$&&A.e(a6)
a3.w=k[2]-k[0]+1
a3.x=k[3]-k[1]+1
break
case"displayWindow":k=m.m()
j=$.V()
j.$flags&2&&A.c(j)
j[0]=k
k=$.au()
if(0>=k.length)return A.a(k,0)
i=k[0]
j[0]=m.m()
h=k[0]
j[0]=m.m()
g=k[0]
j[0]=m.m()
a3.smL(A.b([i,h,g,k[0]],r))
break
case"lineOrder":break
case"pixelAspectRatio":k=m.m()
j=$.V()
j.$flags&2&&A.c(j)
j[0]=k
k=$.ct()
if(0>=k.length)return A.a(k,0)
break
case"screenWindowCenter":k=m.m()
j=$.V()
j.$flags&2&&A.c(j)
j[0]=k
k=$.ct()
if(0>=k.length)return A.a(k,0)
j[0]=m.m()
break
case"screenWindowWidth":k=m.m()
j=$.V()
j.$flags&2&&A.c(j)
j[0]=k
k=$.ct()
if(0>=k.length)return A.a(k,0)
break
case"tiles":a3.dx=m.m()
a3.dy=m.m()
f=J.d(m.a,m.d++)
a3.fr=f&15
a3.fx=B.a.l(f,4)&15
break
case"type":e=m.di()
if(e!=="deepscanline")if(e!=="deeptile")throw A.f(A.p("EXR Invalid type: "+e))
break
default:break}}s=a3.w
a3.b=A.a0(a4,a4,o,0,B.k,a3.x,a4,0,a3.d,a4,B.h,s,!1)
for(s=A.dS(a7,a7.r,a7.$ti.c);s.B();){r=s.d
q=a3.b
q.toString
k=a7.k(0,r)
k.toString
q.iT(r,k)}if(a3.db){s=a3.r
s===$&&A.e(a6)
a3.id=a3.jZ(s[0],s[2],s[1],s[3])
s=a3.r
a3.k1=a3.k_(s[0],s[2],s[1],s[3])
if(a3.fr!==2)a3.k1=1
s=a3.id
s.toString
r=a3.r
a3.sl8(a3.fL(s,r[0],r[2],a3.dx,a3.fx))
r=a3.k1
r.toString
s=a3.r
a3.sl9(a3.fL(r,s[1],s[3],a3.dy,a3.fx))
s=a3.jY()
a3.k2=s
r=a3.dx
r.toString
r=s*r
a3.k3=r
a3.CW=A.p6(a3.ax,a3,r,a3.dy)
b1.a=b1.b=0
r=a3.id
r.toString
s=a3.k1
s.toString
a3.shp(A.nU(r*s,new A.kh(b1,a3),t.mC))}else{s=a3.x
r=a3.ch=new Uint32Array(s+1)
for(q=p.length,k=a3.r,j=a3.w,d=0;d<q;++d){c=p[d]
i=c.d
i===$&&A.e("dataSize")
h=c.f
h===$&&A.e("xSampling")
b=B.a.aR(i*j,h)
for(i=c.r,a=0;a<s;++a){k===$&&A.e(a6)
h=k[1]
i===$&&A.e("ySampling")
if(B.a.ae(a+h,i)===0)r[a]=r[a]+b}}for(a0=0,a=0;a<s;++a)a0=Math.max(a0,r[a])
s=A.p6(a3.ax,a3,a0,a4)
a3.CW=s
s=a3.cx=s.dg()
r=a3.ch
q=r.length
p=new Uint32Array(q)
a3.cy=p
for(--q,a1=0,a2=0;a2<=q;++a2){if(B.a.ae(a2,s)===0)a1=0
p[a2]=a1
a1+=r[a2]}s=B.a.aR(a3.x+s,s)
a3.shp(A.b([new Uint32Array(s-1)],t.mD))}},
jZ(a,b,c,d){var s,r,q,p,o=this
switch(o.fr){case 0:s=1
break
case 1:r=Math.max(b-a+1,d-c+1)
q=o.fx
A.r(r)
s=(q===0?o.dK(r):o.dE(r))+1
break
case 2:p=b-a+1
s=(o.fx===0?o.dK(p):o.dE(p))+1
break
default:throw A.f(A.p("Unknown LevelMode format."))}return s},
k_(a,b,c,d){var s,r,q,p,o=this
switch(o.fr){case 0:s=1
break
case 1:r=Math.max(b-a+1,d-c+1)
q=o.fx
A.r(r)
s=(q===0?o.dK(r):o.dE(r))+1
break
case 2:p=d-c+1
s=(o.fx===0?o.dK(p):o.dE(p))+1
break
default:throw A.f(A.p("Unknown LevelMode format."))}return s},
dK(a){var s
for(s=0;a>1;){++s
a=B.a.l(a,1)}return s},
dE(a){var s,r
for(s=0,r=0;a>1;){if((a&1)!==0)r=1;++s
a=B.a.l(a,1)}return s+r},
jY(){var s,r,q,p,o
for(s=this.c,r=s.length,q=0,p=0;p<r;++p){o=s[p].d
o===$&&A.e("dataSize")
q+=o}return q},
fL(a,b,c,d,e){var s,r,q,p,o,n,m=J.aM(a,t.p)
for(s=e===1,r=c-b+1,q=0;q<a;++q){p=B.a.R(1,q)
o=B.a.aR(r,p)
if(s&&o*p<r)++o
n=Math.max(o,1)
d.toString
m[q]=B.a.aR(n+d-1,d)}return m},
smL(a){t.T.a(a)},
sjv(a){this.r=t.L.a(a)},
shp(a){this.ay=t.lq.a(a)},
sl8(a){this.fy=t.k.a(a)},
sl9(a){this.go=t.k.a(a)}}
A.kh.prototype={
$1(a){var s,r,q,p,o=this.b,n=o.fy,m=this.a,l=m.b
if(!(l<n.length))return A.a(n,l)
n=n[l]
s=o.go
r=m.a
if(!(r<s.length))return A.a(s,r)
s=s[r]
q=new Uint32Array(n*s)
p=l+1
m.b=p
if(p===o.id){m.b=0
m.a=r+1}return q},
$S:41}
A.i4.prototype={
ng(a){var s,r,q,p,o,n=this
if(n.db)for(s=0;s<n.ay.length;++s){r=0
while(!0){q=n.ay
if(!(s<q.length))return A.a(q,s)
q=q[s]
if(!(r<q.length))break
p=a.fm()
q.$flags&2&&A.c(q)
q[r]=p;++r}}else{q=n.ay
if(0>=q.length)return A.a(q,0)
o=q[0].length
for(s=0;s<o;++s){q=n.ay
if(0>=q.length)return A.a(q,0)
q=q[0]
p=a.fm()
q.$flags&2&&A.c(q)
if(!(s<q.length))return A.a(q,s)
q[s]=p}}}}
A.i5.prototype={
jl(a,b,c){var s,r,q,p=this,o=a.c.length,n=J.aM(o,t.nA)
for(s=0;s<o;++s)n[s]=new A.h5()
p.sjw(t.a3.a(n))
r=p.w
r.toString
q=B.a.Y(r*p.x,2)
p.z=new Uint16Array(q)},
dg(){return this.x},
bx(a7,a8,a9,b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6="_channelData"
if(b0==null)b0=a5.c.w
if(b1==null)b1=a5.c.cx
s=a8+b0-1
r=a9+b1-1
q=a5.c
p=q.w
if(s>p)s=p-1
p=q.x
if(r>p)r=p-1
a5.a=s-a8+1
a5.b=r-a9+1
o=q.c
n=o.length
for(m=0,l=0;l<n;++l){k=o[l]
q=a5.y
q===$&&A.e(a6)
if(!(l<q.length))return A.a(q,l)
j=q[l]
j.b=j.a=m
q=k.f
q===$&&A.e("xSampling")
i=B.a.aR(a8,q)
h=B.a.aR(s,q)
q=i*q<a8?0:1
q=h-i+q
j.c=q
p=k.r
p===$&&A.e("ySampling")
i=B.a.aR(a9,p)
h=B.a.aR(r,p)
g=i*p<a9?0:1
g=h-i+g
j.d=g
j.e=p
p=k.d
p===$&&A.e("dataSize")
p=p/2|0
j.f=p
m+=q*g*p}f=a7.p()
e=a7.p()
if(e>=8192)throw A.f(A.p("Error in header for PIZ-compressed data (invalid bitmap size)."))
d=new Uint8Array(8192)
if(f<=e){c=a7.az(e-f+1)
b=c.c-c.d
for(a=f,l=0;l<b;++l,a=a0){a0=a+1
q=J.d(c.a,c.d+l)
if(!(a<8192))return A.a(d,a)
d[a]=q}}a1=new Uint16Array(65536)
a2=a5.lY(d,a1)
A.td(a7,a7.m(),a5.z,m)
for(l=0;l<n;++l){q=a5.y
q===$&&A.e(a6)
if(!(l<q.length))return A.a(q,l)
j=q[l]
a=0
while(!0){q=j.f
q===$&&A.e("size")
if(!(a<q))break
p=a5.z
p.toString
g=j.a
g===$&&A.e("start")
a3=j.c
a3===$&&A.e("nx")
a4=j.d
a4===$&&A.e("ny")
A.tg(p,g+a,a3,q,a4,a3*q,a2);++a}}q=a5.z
q.toString
a5.jQ(a1,q,m)
q=a5.r
if(q==null){q=a5.w
q.toString
q=a5.r=A.ff(!1,q*a5.x+73728)}q.a=0
for(;a9<=r;++a9)for(l=0;l<n;++l){q=a5.y
q===$&&A.e(a6)
if(!(l<q.length))return A.a(q,l)
j=q[l]
q=j.e
q===$&&A.e("ys")
if(B.a.ae(a9,q)!==0)continue
q=j.c
q===$&&A.e("nx")
p=j.f
p===$&&A.e("size")
a8=q*p
for(;a8>0;--a8){q=a5.r
q.toString
p=a5.z
p.toString
g=j.b
g===$&&A.e("end")
j.b=g+1
if(!(g>=0&&g<p.length))return A.a(p,g)
q.aO(p[g])}}q=a5.r
return J.ac(B.f.gE(q.c),0,q.a)},
cM(a,b,c){return this.bx(a,b,c,null,null)},
jQ(a,b,c){var s,r,q,p=t.L
p.a(a)
p.a(b)
for(p=b.length,s=b.$flags|0,r=0;r<c;++r){if(!(r<p))return A.a(b,r)
q=b[r]
if(!(q>=0&&q<65536))return A.a(a,q)
q=a[q]
s&2&&A.c(b)
b[r]=q}},
lY(a,b){var s,r,q,p,o,n
for(s=b.$flags|0,r=0,q=0;q<65536;++q){if(q!==0){p=q>>>3
if(!(p<8192))return A.a(a,p)
p=(a[p]&1<<(q&7))>>>0!==0}else p=!0
if(p){o=r+1
s&2&&A.c(b)
if(!(r<65536))return A.a(b,r)
b[r]=q
r=o}}for(o=r;o<65536;o=n){n=o+1
s&2&&A.c(b)
if(!(o<65536))return A.a(b,o)
b[o]=0}return r-1},
sjw(a){this.y=t.a3.a(a)}}
A.h5.prototype={}
A.i6.prototype={
dg(){return this.x},
bx(a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=B.L.ck(a4.a4()),a3=a1.y
if(a3==null){a3=a1.w
a3.toString
a3=a1.y=A.ff(!1,a1.x*a3)}a3.a=0
s=A.b([0,0,0,0],t.t)
r=new Uint32Array(1)
q=J.ac(B.m.gE(r),0,null)
if(a7==null)a7=a1.c.w
if(a8==null)a8=a1.c.cx
p=a5+a7-1
o=a6+a8-1
a3=a1.c
n=a3.w
if(p>n)p=n-1
n=a3.x
if(o>n)o=n-1
a1.a=p-a5+1
a1.b=o-a6+1
a3=a3.c
m=a3.length
for(n=q.length,l=a2.length,k=a6,j=0;k<=o;++k)for(i=0;i<m;++i){if(!(i<a3.length))return A.a(a3,i)
h=a3[i]
g=h.r
g===$&&A.e("ySampling")
if(B.a.ae(a6,g)!==0)continue
g=h.f
g===$&&A.e("xSampling")
f=B.a.aR(a5,g)
e=B.a.aR(p,g)
g=f*g<a5?0:1
d=e-f+g
if(0>=1)return A.a(r,0)
r[0]=0
g=h.c
g===$&&A.e("dataType")
switch(g.a){case 0:B.c.h(s,0,j)
B.c.h(s,1,s[0]+d)
B.c.h(s,2,s[1]+d)
j=s[2]+d
for(c=0;c<d;++c){g=s[0]
B.c.h(s,0,g+1)
if(!(g>=0&&g<l))return A.a(a2,g)
g=a2[g]
b=s[1]
B.c.h(s,1,b+1)
if(!(b>=0&&b<l))return A.a(a2,b)
b=a2[b]
a=s[2]
B.c.h(s,2,a+1)
if(!(a>=0&&a<l))return A.a(a2,a)
a=a2[a]
r[0]=r[0]+((g<<24|b<<16|a<<8)>>>0)
for(a0=0;a0<4;++a0){g=a1.y
g.toString
if(!(a0<n))return A.a(q,a0)
g.D(q[a0])}}break
case 1:B.c.h(s,0,j)
B.c.h(s,1,s[0]+d)
j=s[1]+d
for(c=0;c<d;++c){g=s[0]
B.c.h(s,0,g+1)
if(!(g>=0&&g<l))return A.a(a2,g)
g=a2[g]
b=s[1]
B.c.h(s,1,b+1)
if(!(b>=0&&b<l))return A.a(a2,b)
b=a2[b]
r[0]=r[0]+((g<<8|b)>>>0)
for(a0=0;a0<2;++a0){g=a1.y
g.toString
if(!(a0<n))return A.a(q,a0)
g.D(q[a0])}}break
case 2:B.c.h(s,0,j)
B.c.h(s,1,s[0]+d)
B.c.h(s,2,s[1]+d)
j=s[2]+d
for(c=0;c<d;++c){g=s[0]
B.c.h(s,0,g+1)
if(!(g>=0&&g<l))return A.a(a2,g)
g=a2[g]
b=s[1]
B.c.h(s,1,b+1)
if(!(b>=0&&b<l))return A.a(a2,b)
b=a2[b]
a=s[2]
B.c.h(s,2,a+1)
if(!(a>=0&&a<l))return A.a(a2,a)
a=a2[a]
r[0]=r[0]+((g<<24|b<<16|a<<8)>>>0)
for(a0=0;a0<4;++a0){g=a1.y
g.toString
if(!(a0<n))return A.a(q,a0)
g.D(q[a0])}}break}}a3=a1.y
return J.ac(B.f.gE(a3.c),0,a3.a)},
cM(a,b,c){return this.bx(a,b,c,null,null)}}
A.i7.prototype={
dg(){return 1},
bx(a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=a0.c,a=A.ff(!1,(b-a0.d)*2)
if(a3==null)a3=c.c.w
if(a4==null)a4=c.c.cx
s=a1+a3-1
r=a2+a4-1
q=c.c
p=q.w
if(s>p)s=p-1
q=q.x
if(r>q)r=q-1
c.a=s-a1+1
c.b=r-a2+1
for(;q=a0.d,q<b;){p=a0.a
a0.d=q+1
q=J.d(p,q)
p=$.aT()
p.$flags&2&&A.c(p)
p[0]=q
q=$.b3()
if(0>=q.length)return A.a(q,0)
o=q[0]
if(o<0){n=-o
for(;m=n-1,n>0;n=m)a.D(J.d(a0.a,a0.d++))}else for(n=o;m=n-1,n>=0;n=m)a.D(J.d(a0.a,a0.d++))}l=J.ac(B.f.gE(a.c),0,a.a)
k=l.length
for(b=l.$flags|0,j=1;j<k;++j){q=l[j-1]
p=l[j]
b&2&&A.c(l)
l[j]=q+p-128}b=c.r
if(b==null||b.length!==k)b=c.r=new Uint8Array(k)
q=B.a.Y(k+1,2)
for(i=0,h=0;!0;q=d,i=f){if(h<k){b.toString
g=h+1
f=i+1
if(!(i<k))return A.a(l,i)
p=l[i]
b.$flags&2&&A.c(b)
e=b.length
if(!(h<e))return A.a(b,h)
b[h]=p}else break
if(g<k){h=g+1
d=q+1
if(!(q<k))return A.a(l,q)
q=l[q]
if(!(g<e))return A.a(b,g)
b[g]=q}else break}b.toString
return b},
cM(a,b,c){return this.bx(a,b,c,null,null)},
t(a){return A.t(this.w)}}
A.eS.prototype={
dg(){return this.x},
bx(a,b,c,d,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=B.L.ck(a.a4())
if(d==null)d=f.c.w
if(a0==null)a0=f.c.cx
s=b+d-1
r=c+a0-1
q=f.c
p=q.w
if(s>p)s=p-1
q=q.x
if(r>q)r=q-1
f.a=s-b+1
f.b=r-c+1
o=e.length
for(q=e.$flags|0,n=1;n<o;++n){p=e[n-1]
m=e[n]
q&2&&A.c(e)
e[n]=p+m-128}q=f.y
if(q==null||q.length!==o)q=f.y=new Uint8Array(o)
p=B.a.Y(o+1,2)
for(l=0,k=0;!0;p=g,l=i){if(k<o){q.toString
j=k+1
i=l+1
if(!(l<o))return A.a(e,l)
m=e[l]
q.$flags&2&&A.c(q)
h=q.length
if(!(k<h))return A.a(q,k)
q[k]=m}else break
if(j<o){k=j+1
g=p+1
if(!(p<o))return A.a(e,p)
p=e[p]
if(!(j<h))return A.a(q,j)
q[j]=p}else break}q.toString
return q},
cM(a,b,c){return this.bx(a,b,c,null,null)},
t(a){return A.t(this.w)}}
A.hM.prototype={
aw(a){var s=this.a
if(s==null)return null
s=s.c
if(!(a<s.length))return A.a(s,a)
return s[a].b},
b2(a,b){var s=new A.hO(A.b([],t.lv))
s.j9(a)
this.a=s
return this.aw(0)}}
A.eH.prototype={
mU(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f
for(s=this.b,r=this.d,q=-1,p=-1,o=0;o<s;++o){n=r.b0(o)
m=r.b_(o)
l=r.aY(o)
k=r.bb(o)
if(n===a&&m===b&&l===c&&k===d)return o
j=a-n
i=b-m
h=c-l
g=d-k
f=j*j+i*i+h*h+g*g
if(p===-1){p=o
q=f}else if(f<q){p=o
q=f}}return p},
fv(){var s,r,q,p,o,n,m,l=this
if(l.c==null)return l.d
s=l.d
r=s.a
q=new A.bn(new Uint8Array(r*4),r,4)
for(p=0;p<r;++p){o=s.b0(p)
n=s.b_(p)
m=s.aY(p)
q.dz(p,o,n,m,p===l.c?0:255)}return q}}
A.eI.prototype={
jb(a){var s,r,q,p,o,n,m=this
m.a=a.p()
m.b=a.p()
m.c=a.p()
m.d=a.p()
s=a.G()
m.e=(s&64)!==0
if((s&128)!==0){m.f=A.pa(B.a.R(1,(s&7)+1))
for(r=0;q=m.f,r<q.b;++r){p=J.d(a.a,a.d++)
o=J.d(a.a,a.d++)
n=J.d(a.a,a.d++)
q.d.bn(r,p,o,n)}}m.x=a.d-a.b}}
A.i8.prototype={}
A.eJ.prototype={$iO:1}
A.kj.prototype={
b6(a){var s,r,q,p,o,n,m,l,k,j,i=this
i.f=A.u(a,!1,null,0)
i.a=new A.eJ(A.b([],t.lM))
if(!i.hc())return null
try{for(;p=i.f,o=p.d,o<p.c;){n=p.a
p.d=o+1
s=J.d(n,o)
switch(s){case 44:r=i.hD()
if(r==null){p=i.a
return p}p=r
p.r=i.e
p.w=i.c
if(i.b!==0){if(r.f==null&&i.a.e!=null){p=i.a.e
o=p.a
n=p.b
m=p.c
p=p.d
r.f=new A.eH(o,n,m,new A.bn(new Uint8Array(A.C(p.c)),p.a,p.b))}if(r.f!=null)r.f.c=i.d}B.c.C(i.a.r,r)
break
case 33:p=i.f
q=J.d(p.a,p.d++)
if(J.a_(q,255)){p=i.f
if(p.ak(J.d(p.a,p.d++))==="NETSCAPE2.0"){l=J.d(p.a,p.d++)
k=J.d(p.a,p.d++)
if(l===3&&k===1)i.r=p.p()}else i.dT()}else if(J.a_(q,249)){p=i.f
p.toString
i.lE(p)}else i.dT()
break
case 59:p=i.a
return p
default:break}}}catch(j){}return i.a},
lE(a){var s,r,q,p=this
a.G()
s=a.G()
p.e=a.p()
p.d=a.G()
a.G()
p.c=B.a.l(s,2)&7
p.b=s&1
r=a.dC(1,0)
if(J.d(r.a,r.d)===44){++a.d
q=p.hD()
if(q==null)return
q.r=p.e
q.w=p.c
if(p.b!==0){r=q.f
if(r==null&&p.a.e!=null){r=p.a.e
r.toString
r=q.f=A.tl(r)}if(r!=null)r.c=p.d}B.c.C(p.a.r,q)}},
aw(a){var s,r,q,p=this,o=p.f
if(o==null||p.a==null)return null
s=p.a.r
r=s.length
if(a>=r)return null
q=s[a]
o.toString
s=q.x
s===$&&A.e("_inputPosition")
o.d=s
return p.ko(q)},
b2(a9,b0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null
if(a7.b6(a9)==null)return a8
s=a7.a.r.length
if(s===1)return a7.aw(0)
for(s=t.p,r=a8,q=r,p=0;o=a7.a.r,p<o.length;++p){b0=o[p]
n=a7.aw(p)
if(n==null)return a8
n.y=b0.r*10
if(q==null||r==null){n.r=a7.r
r=n
q=r
continue}o=n.a
m=o==null
l=m?a8:o.a
if(l==null)l=0
k=r.a
j=k==null
i=j?a8:k.a
h=!1
if(l===(i==null?0:i)){o=m?a8:o.b
if(o==null)o=0
m=j?a8:k.b
if(o===(m==null?0:m)){o=b0.a
o===$&&A.e("x")
if(o===0){o=b0.b
o===$&&A.e("y")
o=o===0&&b0.w===2}else o=h}else o=h}else o=h
if(o){q.bC(n)
r=n
continue}g=b0.f
if(!(g!=null)){o=a7.a.e
o.toString
g=o}o=j?a8:k.a
if(o==null)o=0
m=j?a8:k.b
if(m==null)m=0
f=A.a0(a8,a8,B.h,0,B.k,m,a8,0,1,g.fv(),B.h,o,!1)
o=b0.w
if(o===2){o=a7.a.c.a
if(!B.f.gO(o)){if(0>=o.length)return A.a(o,0)
o=o[0]}else o=0
m=g.d
e=m.b0(o)
d=m.b_(o)
c=m.aY(o)
b=o===g.c?0:255
o=new Uint8Array(4)
if(0>=4)return A.a(o,0)
o[0]=e
if(1>=4)return A.a(o,1)
o[1]=d
if(2>=4)return A.a(o,2)
o[2]=c
if(3>=4)return A.a(o,3)
o[3]=b
m=f.a
if(m!=null)m.aV(0,new A.bI(o))}else if(o!==3)if(b0.f!=null){o=r.a
o=o==null?a8:o.gS()
o.toString
a=A.H(s,s)
for(m=g.b,a0=0;a0<m;++a0)a.h(0,a0,g.mU(o.b0(a0),o.b_(a0),o.aY(a0),o.bb(a0)))
o=f.a
a1=o==null?a8:J.bv(o.gE(o))
if(a1==null){o=f.a
o=o==null?a8:o.gE(o)
if(o==null)o=B.f.gE(new Uint8Array(0))
a1=J.bv(o)}o=r.a
a2=o==null?a8:J.bv(o.gE(o))
if(a2==null){o=r.a
o=o==null?a8:o.gE(o)
if(o==null)o=B.f.gE(new Uint8Array(0))
a2=J.bv(o)}for(a3=a1.length,o=a2.length,a4=0;a4<a3;++a4){if(!(a4<o))return A.a(a2,a4)
a5=a.k(0,a2[a4])
if(a5!==-1){a5.toString
a1.$flags&2&&A.c(a1)
a1[a4]=a5}}}f.y=n.y
for(o=n.a,o=o.gJ(o);o.B();){a6=o.gK()
if(a6.gv()!==0){m=a6.gb4()
l=b0.a
l===$&&A.e("x")
k=a6.gaX()
j=b0.b
j===$&&A.e("y")
f.dw(m+l,k+j,a6)}}q.bC(f)
r=f}return q},
hD(){var s,r=this.f
if(r.d>=r.c)return null
s=new A.i8()
s.jb(r);++this.f.d
this.dT()
return s},
ko(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=null
if(i.w==null){i.w=new Uint8Array(256)
i.x=new Uint8Array(4095)
i.y=new Uint8Array(4096)
i.z=new Uint32Array(4096)}s=i.Q=i.f.G()
r=B.a.a0(1,s)
i.dy=r;++r
i.dx=r
i.db=r+1;++s
i.cy=s
i.cx=B.a.a0(1,s)
i.ay=0
i.CW=4098
i.at=i.ax=0
s=i.w
s.toString
s.$flags&2&&A.c(s)
s[0]=0
s=i.z
s.toString
B.m.aS(s,0,4096,4098)
s=a.c
s===$&&A.e("width")
r=a.d
r===$&&A.e("height")
q=a.a
q===$&&A.e("x")
p=i.a
if(q+s<=p.a){q=a.b
q===$&&A.e("y")
q=q+r>p.b}else q=!0
if(q)return h
o=a.f
if(!(o!=null)){q=p.e
q.toString
o=q}i.as=s*r
n=A.a0(h,h,B.h,0,B.k,r,h,0,1,o.fv(),B.h,s,!1)
m=new Uint8Array(s)
s=a.e
s===$&&A.e("interlaced")
if(s){s=a.b
s===$&&A.e("y")
for(r=s+r,l=0,k=0;l<4;++l)for(j=s+B.eq[l];j<r;j+=B.fq[l],++k){if(!i.hd(m))return n
i.hM(n,j,o,m)}}else for(j=0;j<r;++j){if(!i.hd(m))return n
i.hM(n,j,o,m)}return n},
hM(a,b,c,d){var s,r,q,p=d.length
for(s=0;s<p;++s){r=d[s]
q=a.a
if(q!=null)q.T(s,b,r,0,0)}},
hc(){var s,r,q,p,o,n=this,m=n.f.ak(6)
if(m!=="GIF87a"&&m!=="GIF89a")return!1
s=n.a
s.toString
s.a=n.f.p()
s=n.a
s.toString
s.b=n.f.p()
r=n.f.G()
s=n.a
s.toString
s.c=new A.bI(new Uint8Array(A.C(A.b([n.f.G()],t.t))));++n.f.d
if((r&128)!==0){s=n.a
s.toString
s.e=A.pa(B.a.R(1,(r&7)+1))
for(q=0;q<n.a.e.b;++q){s=n.f
p=J.d(s.a,s.d++)
s=n.f
o=J.d(s.a,s.d++)
s=n.f
r=J.d(s.a,s.d++)
n.a.e.d.bn(q,p,o,r)}}n.a.toString
return!0},
hd(a){var s=this,r=s.as
r.toString
s.as=r-a.length
if(!s.kz(a))return!1
if(s.as===0)s.dT()
return!0},
dT(){var s,r,q,p=this.f
if(p.d>=p.c)return!0
s=p.G()
while(!0){if(s!==0){p=this.f
p=p.d<p.c}else p=!1
if(!p)break
p=this.f
r=p.d+=s
if(r>=p.c)return!0
q=p.a
p.d=r+1
s=J.d(q,r)}return!0},
kz(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f="_stack",e="_suffix",d=g.ay
if(d>4095)return!1
s=a.length
r=0
if(d!==0){q=a.$flags|0
while(!0){if(!(d!==0&&r<s))break
p=r+1
o=g.x
o===$&&A.e(f)
d=g.ay=d-1
if(!(d>=0))return A.a(o,d)
o=o[d]
q&2&&A.c(a)
if(!(r<s))return A.a(a,r)
a[r]=o
r=p}}for(d=a.$flags|0;r<s;){n=g.ch=g.ky()
if(n==null)return!1
q=g.dx
if(n===q)return!1
o=g.dy
if(n===o){for(o=g.z,m=0;m<=4095;++m){o.toString
o.$flags&2&&A.c(o)
o[m]=4098}g.db=q+1
q=g.Q+1
g.cy=q
g.cx=B.a.a0(1,q)
g.CW=4098}else{if(n<o){p=r+1
d&2&&A.c(a)
if(!(r>=0))return A.a(a,r)
a[r]=n
r=p}else{q=g.z
q.toString
if(n>>>0!==n||n>=4096)return A.a(q,n)
if(q[n]===4098){l=g.db-2
if(n===l){n=g.CW
k=g.y
k===$&&A.e(e)
j=g.x
j===$&&A.e(f)
i=g.ay++
o=g.eH(q,n,o)
j.$flags&2&&A.c(j)
if(!(i>=0&&i<4095))return A.a(j,i)
j[i]=o
k.$flags&2&&A.c(k)
if(!(l>=0&&l<4096))return A.a(k,l)
k[l]=o}else return!1}m=0
while(!0){h=m+1
if(!(m<=4095&&n>g.dy&&n<=4095))break
q=g.x
q===$&&A.e(f)
o=g.ay++
l=g.y
l===$&&A.e(e)
if(!(n>=0&&n<4096))return A.a(l,n)
l=l[n]
q.$flags&2&&A.c(q)
if(!(o>=0&&o<4095))return A.a(q,o)
q[o]=l
l=g.z
l.toString
if(!(n<4096))return A.a(l,n)
n=l[n]
m=h}if(h>=4095||n>4095)return!1
q=g.x
q===$&&A.e(f)
o=g.ay++
q.$flags&2&&A.c(q)
if(!(o>=0&&o<4095))return A.a(q,o)
q[o]=n
while(!0){q=g.ay
if(!(q!==0&&r<s))break
p=r+1
o=g.x;--q
g.ay=q
if(!(q>=0&&q<4095))return A.a(o,q)
q=o[q]
d&2&&A.c(a)
if(!(r>=0&&r<s))return A.a(a,r)
a[r]=q
r=p}}q=g.CW
if(q!==4098){o=g.z
o.toString
l=g.db-2
if(!(l>=0&&l<4096))return A.a(o,l)
l=o[l]===4098
o=l}else o=!1
if(o){o=g.z
o.toString
l=g.db-2
o.$flags&2&&A.c(o)
if(!(l>=0&&l<4096))return A.a(o,l)
o[l]=q
k=g.ch
j=g.y
i=g.dy
if(k===l){j===$&&A.e(e)
q=g.eH(o,q,i)
j.$flags&2&&A.c(j)
j[l]=q}else{j===$&&A.e(e)
k.toString
q=g.eH(o,k,i)
j.$flags&2&&A.c(j)
j[l]=q}}q=g.ch
q.toString
g.CW=q}}return!0},
ky(){var s,r,q,p,o=this
if(o.cy>12)return null
for(;s=o.ax,r=o.cy,s<r;){s=o.jV()
s.toString
r=o.at
q=o.ax
o.at=(r|B.a.a0(s,q))>>>0
o.ax=q+8}q=o.at
if(!(r>=0&&r<13))return A.a(B.bC,r)
p=B.bC[r]
o.at=B.a.ab(q,r)
o.ax=s-r
s=o.db
if(s<4097){++s
o.db=s
s=s>o.cx&&r<12}else s=!1
if(s){o.cx=o.cx<<1>>>0
o.cy=r+1}return q&p},
eH(a,b,c){var s,r,q=0
while(!0){if(b>c){s=q+1
r=q<=4095
q=s}else r=!1
if(!r)break
if(b>4095)return 4098
a.toString
if(!(b>=0))return A.a(a,b)
b=a[b]}return b},
jV(){var s,r,q=this,p=q.w,o=p[0],n=p.$flags|0
if(o===0){o=q.f.G()
n&2&&A.c(p)
p[0]=o
p=q.w
o=p[0]
if(o===0)return null
B.f.b5(p,1,1+o,q.f.az(o).a4())
p=q.w
s=p[1]
p.$flags&2&&A.c(p)
p[1]=2
p[0]=p[0]-1}else{r=p[1]
n&2&&A.c(p)
p[1]=r+1
if(!(r<256))return A.a(p,r)
s=p[r]
p[0]=o-1}return s}}
A.dz.prototype={
ap(){return"IcoType."+this.b}}
A.hU.prototype={$iO:1}
A.hV.prototype={}
A.hS.prototype={
gV(){return B.a.Y(A.bF.prototype.gV.call(this),2)},
gdd(){return!(this.d===40&&this.f===32)&&A.bF.prototype.gdd.call(this)}}
A.hT.prototype={
b2(a,b){var s,r,q,p=this,o=A.u(a,!1,null,0)
p.a=o
s=p.b=A.pe(o)
if(s==null)return null
o=s.e.length
if(o===1)return p.aw(0)
for(r=null,q=0;q<p.b.e.length;++q){b=p.aw(q)
if(b==null)continue
if(r==null){b.w=B.k
r=b}else r.bC(b)}return r},
aw(b0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9=this.a
if(a9!=null){s=this.b
s=s==null||b0>=s.d}else s=!0
if(s)return a8
s=this.b.e
if(!(b0<s.length))return A.a(s,b0)
r=s[b0]
s=a9.a
a9=a9.b+r.e
q=r.d
p=J.nC(s,a9,a9+q)
o=new A.ft(A.nN())
t.D.a(p)
if(o.cG(p))return o.bk(p)
n=A.ff(!1,14)
n.aO(19778)
n.aW(q)
n.aW(0)
n.aW(0)
a9=A.u(p,!1,a8,0)
s=A.oZ(A.u(J.ac(B.f.gE(n.c),0,n.a),!1,a8,0))
q=a9.d
m=a9.m()
l=a9.m()
k=$.V()
k.$flags&2&&A.c(k)
k[0]=l
l=$.au()
if(0>=l.length)return A.a(l,0)
j=l[0]
k[0]=a9.m()
l=l[0]
i=a9.p()
h=a9.p()
g=a9.m()
if(!(g<14))return A.a(B.aj,g)
g=B.aj[g]
a9.m()
k[0]=a9.m()
k[0]=a9.m()
k=a9.m()
a9.m()
f=new A.hS(s,j,l,m,i,h,g,k,q)
f.fF(a9,s)
if(m!==40&&i!==1)return a8
e=k===0&&h<=8?40+4*B.a.R(1,h):40+4*k
s.b=e
n.a-=4
n.aW(e)
d=A.u(p,!1,a8,0)
c=new A.kf(!0)
c.a=d
c.b=f
b=c.aw(0)
if(h>=32)return b
a=32-B.a.ae(j,32)
a0=B.a.Y(a===32?j:j+a,8)
for(a9=1/l<0,s=l<0,l=l===0,a1=0;a1<B.a.Y(A.bF.prototype.gV.call(f),2);++a1){if(!(l?a9:s))a2=a1
else{q=b.a
q=q==null?a8:q.b
a2=(q==null?0:q)-1-a1}a3=d.am(a0)
d.d=d.d+(a3.c-a3.d)
q=b.a
a4=q==null?a8:q.a5(0,a2,a8)
if(a4==null)a4=new A.ad()
for(a5=0;a5<j;){a6=J.d(a3.a,a3.d++)
a7=7
while(!0){if(!(a7>-1&&a5<j))break
if((a6&B.a.a0(1,a7))>>>0!==0)a4.sv(0)
a4.B();++a5;--a7}}}return b}}
A.hE.prototype={}
A.c6.prototype={}
A.cA.prototype={}
A.eL.prototype={}
A.kQ.prototype={}
A.bN.prototype={
sjx(a){this.r=t.hK.a(a)},
sjz(a){this.w=t.B.a(a)},
sjy(a){this.x=t.B.a(a)}}
A.kS.prototype={
nw(a){var s,r,q,p,o,n=this,m=A.u(t.L.a(a),!0,null,0)
n.a=m
s=m.dC(2,0)
if(J.d(s.a,s.d)!==255||J.d(s.a,s.d+1)!==216)return!1
if(n.cE()!==216)return!1
r=n.cE()
q=!1
p=!1
while(!0){if(r!==217){m=n.a
m=m.d<m.c}else m=!1
if(!m)break
o=n.a.p()
if(o<2)break
m=n.a
m.d=m.d+(o-2)
switch(r){case 192:case 193:case 194:q=!0
break
case 218:p=!0
break}r=n.cE()}return q&&p},
cr(a){var s,r,q,p,o,n,m,l,k=this
k.a=A.u(t.L.a(a),!0,null,0)
k.lx()
if(k.x.length!==1)throw A.f(A.p("Only single frame JPEGs supported"))
for(s=k.Q,r=0;q=k.d,p=q.z,r<p.length;++r){o=q.y.k(0,p[r])
q=o.a
p=k.d
n=p.f
m=o.b
l=p.r
p=k.jW(p,o)
q=q===1&&n===2?1:0
B.c.C(s,new A.hE(p,q,m===1&&l===2?1:0))}},
lx(){var s,r,q,p,o,n=this
if(n.cE()!==216)throw A.f(A.p("Start Of Image marker not found."))
s=n.cE()
while(!0){if(s!==217){r=n.a
r===$&&A.e("input")
r=r.d<r.c}else r=!1
if(!r)break
r=n.a
r===$&&A.e("input")
q=r.p()
if(q<2)A.a8(A.p("Invalid Block"))
r=n.a
p=r.am(q-2)
r.d=r.d+(p.c-p.d)
switch(s){case 224:case 225:case 226:case 227:case 228:case 229:case 230:case 231:case 232:case 233:case 234:case 235:case 236:case 237:case 238:case 239:case 254:n.ly(s,p)
break
case 219:n.lA(p)
break
case 192:case 193:case 194:n.lD(s,p)
break
case 195:case 197:case 198:case 199:case 200:case 201:case 202:case 203:case 205:case 206:case 207:throw A.f(A.p("Unhandled frame type "+B.a.ee(s,16)))
case 196:n.lz(p)
break
case 221:n.e=p.p()
break
case 218:n.lP(p)
break
case 255:r=n.a
if(J.d(r.a,r.d)!==255)--n.a.d
break
default:r=n.a
o=!1
if(J.d(r.a,r.d+-3)===255){r=n.a
if(J.d(r.a,r.d+-2)>=192){r=n.a
r=J.d(r.a,r.d+-2)<=254}else r=o}else r=o
if(r){n.a.d-=3
break}if(s!==0)throw A.f(A.p("Unknown JPEG marker "+B.a.ee(s,16)))
break}s=n.cE()}},
cE(){var s,r=this,q=r.a
q===$&&A.e("input")
if(q.d>=q.c)return 0
do{do{s=r.a.G()
if(s!==255){q=r.a
q=q.d<q.c}else q=!1}while(q)
q=r.a
if(q.d>=q.c)return s
do{s=r.a.G()
if(s===255){q=r.a
q=q.d<q.c}else q=!1}while(q)
if(s===0){q=r.a
q=q.d<q.c}else q=!1}while(q)
return s},
lB(a){if(a.m()!==1165519206)return
if(a.p()!==0)return
this.r.cr(a)},
ly(a,b){var s,r,q,p,o=this,n=b
if(a===224){s=n
r=!1
if(J.d(s.a,s.d)===74){s=n
if(J.d(s.a,s.d+1)===70){s=n
if(J.d(s.a,s.d+2)===73){s=n
if(J.d(s.a,s.d+3)===70){s=n
s=J.d(s.a,s.d+4)===0}else s=r}else s=r}else s=r}else s=r
if(s){s=new A.kV()
r=n
J.d(r.a,r.d+5)
r=n
J.d(r.a,r.d+6)
r=n
J.d(r.a,r.d+7)
r=n
J.d(r.a,r.d+8)
r=n
J.d(r.a,r.d+9)
r=n
J.d(r.a,r.d+10)
r=n
J.d(r.a,r.d+11)
r=n
r=J.d(r.a,r.d+12)
s.f=r
q=n
q=J.d(q.a,q.d+13)
s.r=q
o.b=s
n.dC(14+3*r*q,14)}}else if(a===225)o.lB(n)
else if(a===238){s=n
r=!1
if(J.d(s.a,s.d)===65){s=n
if(J.d(s.a,s.d+1)===100){s=n
if(J.d(s.a,s.d+2)===111){s=n
if(J.d(s.a,s.d+3)===98){s=n
if(J.d(s.a,s.d+4)===101){s=n
s=J.d(s.a,s.d+5)===0}else s=r}else s=r}else s=r}else s=r}else s=r
if(s){o.c=new A.kQ()
s=n
J.d(s.a,s.d+6)
o.c.toString
s=n
J.d(s.a,s.d+7)
s=n
J.d(s.a,s.d+8)
o.c.toString
s=n
J.d(s.a,s.d+9)
s=n
J.d(s.a,s.d+10)
s=o.c
s.toString
r=n
s.d=J.d(r.a,r.d+11)}}else if(a===254)try{n.nk()}catch(p){A.bk(p)}},
lA(a){var s,r,q,p,o,n,m,l,k
for(s=a.c,r=this.w;q=a.d,p=q<s,p;){p=a.a
a.d=q+1
o=J.d(p,q)
n=B.a.l(o,4)
o&=15
if(o>=4)throw A.f(A.p("Invalid number of quantization tables"))
if(r[o]==null)B.c.h(r,o,new Int16Array(64))
m=r[o]
for(q=n!==0,l=0;l<64;++l){k=q?a.p():J.d(a.a,a.d++)
m.toString
p=B.O[l]
m.$flags&2&&A.c(m)
if(!(p<64))return A.a(m,p)
m[p]=k}}if(p)throw A.f(A.p("Bad length for DQT block"))},
lD(a,b){var s,r,q,p,o,n,m,l=this
if(l.d!=null)throw A.f(A.p("Duplicate JPG frame data found."))
s=l.d=new A.ih(A.H(t.p,t.e7),A.b([],t.t))
s.b=a===194
s.c=b.G()
s=l.d
s.toString
s.d=b.p()
s=l.d
s.toString
s.e=b.p()
r=b.G()
for(s=l.w,q=0;q<r;++q){p=J.d(b.a,b.d++)
o=J.d(b.a,b.d++)
n=B.a.l(o,4)
m=J.d(b.a,b.d++)
B.c.C(l.d.z,p)
l.d.y.h(0,p,new A.bN(n&15,o&15,s,m))}l.d.ne()
B.c.C(l.x,l.d)},
lz(a){var s,r,q,p,o,n,m,l,k,j,i,h
for(s=a.c,r=this.z,q=this.y;p=a.d,p<s;){o=a.a
a.d=p+1
n=J.d(o,p)
m=new Uint8Array(16)
for(l=0,k=0;k<16;++k){p=J.d(a.a,a.d++)
if(!(k<16))return A.a(m,k)
m[k]=p
l+=m[k]}j=a.am(l)
a.d=a.d+(j.c-j.d)
i=j.a4()
if((n&16)!==0){n-=16
h=q}else h=r
if(h.length<=n)B.c.sn(h,n+1)
B.c.h(h,n,this.jX(m,i))}},
lP(a){var s,r,q,p,o,n,m,l=this,k=a.G()
if(k<1||k>4)throw A.f(A.p("Invalid SOS block"))
s=A.nU(k,new A.kT(l,a),t.e7)
r=a.G()
q=a.G()
p=a.G()
o=B.a.l(p,4)
n=l.a
n===$&&A.e("input")
m=l.d
o=new A.ii(n,m,s,l.e,r,q,o&15,p&15)
n=m.w
n===$&&A.e("mcusPerLine")
o.f=n
o.r=m.b
o.bW()},
jX(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=A.b([],t.kv),g=16
while(!0){if(!(g>0&&a[g-1]===0))break;--g}s=t.dj
B.c.C(h,new A.eh(A.b([],s)))
if(0>=h.length)return A.a(h,0)
r=h[0]
for(q=b.length,p=0,o=0;o<g;){for(n=0;n<a[o];++n){if(0>=h.length)return A.a(h,-1)
r=h.pop()
m=r.a
l=m.length
k=r.b
if(l<=k)B.c.sn(m,k+1)
l=r.b
if(!(p>=0&&p<q))return A.a(b,p)
B.c.h(m,l,new A.eL(b[p]))
for(;m=r.b,m>0;){if(0>=h.length)return A.a(h,-1)
r=h.pop()}r.b=m+1
B.c.C(h,r)
for(;h.length<=o;r=j){m=A.b([],s)
j=new A.eh(m)
B.c.C(h,j)
l=r.a
k=l.length
i=r.b
if(k<=i)B.c.sn(l,i+1)
B.c.h(l,r.b,new A.cA(m))}++p}++o
if(o<g){m=A.b([],s)
j=new A.eh(m)
B.c.C(h,j)
l=r.a
k=l.length
i=r.b
if(k<=i)B.c.sn(l,i+1)
B.c.h(l,r.b,new A.cA(m))
r=j}}if(0>=h.length)return A.a(h,0)
return h[0].a},
jW(a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=a4.e
a2===$&&A.e("blocksPerLine")
s=a4.f
s===$&&A.e("blocksPerColumn")
r=a2<<3>>>0
q=new Int32Array(64)
p=new Uint8Array(64)
o=s*8
n=A.a1(o,null,!1,t.nh)
for(m=a4.c,l=a4.d,k=0,j=0;j<s;++j){i=j<<3>>>0
for(h=0;h<8;++h,k=g){g=k+1
B.c.h(n,k,new Uint8Array(r))}for(f=0;f<a2;++f){if(!(l>=0&&l<4))return A.a(m,l)
e=m[l]
e.toString
d=a4.r
d===$&&A.e("blocks")
if(!(j<d.length))return A.a(d,j)
d=d[j]
if(!(f<d.length))return A.a(d,f)
A.xj(e,d[f],p,q)
c=f<<3>>>0
for(b=0,a=0;a<8;++a){e=i+a
if(!(e<o))return A.a(n,e)
a0=n[e]
for(h=0;h<8;++h,b=a1){a0.toString
e=c+h
a1=b+1
if(!(b>=0&&b<64))return A.a(p,b)
d=p[b]
a0.$flags&2&&A.c(a0)
if(!(e<a0.length))return A.a(a0,e)
a0[e]=d}}}}return n}}
A.kT.prototype={
$1(a){var s,r,q,p,o,n=this.b,m=n.G(),l=n.G()
n=this.a
if(!n.d.y.a_(m))throw A.f(A.p("Invalid Component in SOS block"))
s=n.d.y.k(0,m)
s.toString
r=B.a.l(l,4)&15
q=l&15
p=n.z
o=p.length
if(r<o){if(!(r<o))return A.a(p,r)
p=p[r]
p.toString
s.sjz(t.B.a(p))}n=n.y
p=n.length
if(q<p){if(!(q<p))return A.a(n,q)
n=n[q]
n.toString
s.sjy(t.B.a(n))}return s},
$S:42}
A.eh.prototype={}
A.ih.prototype={
ne(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this
for(s=a.y,r=A.k(s).c,q=A.dS(s,s.r,r);q.B();){p=s.k(0,q.d)
a.sn7(Math.max(a.f,p.a))
a.sn8(Math.max(a.r,p.b))}q=a.e
q.toString
a.w=B.b.bh(q/8/a.f)
q=a.d
q.toString
a.x=B.b.bh(q/8/a.r)
for(r=A.dS(s,s.r,r),q=t.hK,o=t.bW,n=t.kn;r.B();){m=s.k(0,r.d)
m.toString
l=a.e
l.toString
k=m.a
j=B.b.bh(B.b.bh(l/8)*k/a.f)
l=a.d
l.toString
i=m.b
h=B.b.bh(B.b.bh(l/8)*i/a.r)
g=a.w*k
f=a.x*i
e=J.aM(f,n)
for(d=0;d<f;++d){c=J.aM(g,o)
for(b=0;b<g;++b)c[b]=new Int32Array(64)
e[d]=c}m.e=j
m.f=h
m.sjx(q.a(e))}},
sn7(a){this.f=A.r(a)},
sn8(a){this.r=A.r(a)}}
A.kV.prototype={}
A.ii.prototype={
bW(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a="blocksPerLine",a0=b.y,a1=a0.length,a2=b.r
a2.toString
if(a2)if(b.Q===0)s=b.at===0?b.gkk():b.gkm()
else s=b.at===0?b.gkb():b.gkd()
else s=b.gkh()
a2=a1===1
if(a2){if(0>=a1)return A.a(a0,0)
r=a0[0]
q=r.e
q===$&&A.e(a)
r=r.f
r===$&&A.e("blocksPerColumn")
p=q*r}else{r=b.f
r===$&&A.e("mcusPerLine")
q=b.b.x
q===$&&A.e("mcusPerColumn")
p=r*q}r=b.z
if(r==null||r===0)b.z=p
for(r=b.a,q=t.mX,o=0;o<p;){for(n=0;n<a1;++n){if(!(n<a0.length))return A.a(a0,n)
a0[n].y=0}b.CW=0
if(a2){if(0>=a0.length)return A.a(a0,0)
m=a0[0]
l=0
while(!0){k=b.z
k.toString
if(!(l<k))break
q.a(s)
k=m.e
k===$&&A.e(a)
j=B.a.aR(o,k)
i=B.a.ae(o,k)
k=m.r
k===$&&A.e("blocks")
if(!(j>=0&&j<k.length))return A.a(k,j)
k=k[j]
if(!(i>=0&&i<k.length))return A.a(k,i)
s.$2(m,k[i]);++o;++l}}else{l=0
while(!0){k=b.z
k.toString
if(!(l<k))break
for(n=0;n<a1;++n){if(!(n<a0.length))return A.a(a0,n)
m=a0[n]
h=m.a
g=m.b
for(f=0;f<g;++f)for(e=0;e<h;++e)b.kp(m,s,o,f,e)}++o;++l}}b.ch=0
d=J.d(r.a,r.d)
c=J.d(r.a,r.d+1)
if(d===255)if(c>=208&&c<=215)r.d+=2
else break}},
cg(){var s,r=this,q=r.ch
if(q>0){--q
r.ch=q
return B.a.bo(r.ay,q)&1}q=r.a
if(q.d>=q.c)return null
s=q.G()
r.ay=s
if(s===255)if(q.G()!==0)return null
r.ch=7
return B.a.l(r.ay,7)&1},
d1(a){var s,r,q=new A.cA(t.B.a(a))
for(;s=this.cg(),s!=null;){if(q instanceof A.cA){r=q.a
if(s>>>0!==s||s>=r.length)return A.a(r,s)
q=r[s]}if(q instanceof A.eL)return q.a}return null},
eS(a){var s,r
for(s=0;a>0;){r=this.cg()
if(r==null)return null
s=(s<<1|r)>>>0;--a}return s},
d3(a){var s
if(a==null)return 0
if(a===1)return this.cg()===1?1:-1
s=this.eS(a)
if(s==null)return 0
if(s>=B.a.a0(1,a-1))return s
return s+B.a.R(-1,a)+1},
ki(a,b){var s,r,q,p,o,n,m,l,k=this
t.L.a(b)
s=a.w
s===$&&A.e("huffmanTableDC")
r=k.d1(s)
q=r===0?0:k.d3(r)
s=a.y
s===$&&A.e("pred")
s+=q
a.y=s
b.$flags&2&&A.c(b)
b[0]=s
for(p=1;p<64;){s=a.x
s===$&&A.e("huffmanTableAC")
o=k.d1(s)
if(o==null)break
n=o&15
m=o>>>4
if(n===0){if(m<15)break
p+=16
continue}p+=m
n=k.d3(n)
if(!(p>=0&&p<80))return A.a(B.O,p)
l=B.O[p]
b.$flags&2&&A.c(b)
if(!(l<64))return A.a(b,l)
b[l]=n;++p}},
kl(a,b){var s,r,q
t.L.a(b)
s=a.w
s===$&&A.e("huffmanTableDC")
r=this.d1(s)
q=r===0?0:B.a.R(this.d3(r),this.ax)
s=a.y
s===$&&A.e("pred")
s+=q
a.y=s
b.$flags&2&&A.c(b)
b[0]=s},
kn(a,b){var s,r
t.L.a(b)
s=b[0]
r=this.cg()
r.toString
r=B.a.R(r,this.ax)
b.$flags&2&&A.c(b)
b[0]=(s|r)>>>0},
kc(a,b){var s,r,q,p,o,n,m,l,k=this
t.L.a(b)
s=k.CW
if(s>0){k.CW=s-1
return}r=k.Q
q=k.as
for(s=k.ax;r<=q;){p=a.x
p===$&&A.e("huffmanTableAC")
p=k.d1(p)
p.toString
o=p&15
n=p>>>4
if(o===0){if(n<15){s=k.eS(n)
s.toString
k.CW=s+B.a.R(1,n)-1
break}r+=16
continue}r+=n
if(!(r>=0&&r<80))return A.a(B.O,r)
m=B.O[r]
p=k.d3(o)
l=B.a.R(1,s)
b.$flags&2&&A.c(b)
if(!(m<64))return A.a(b,m)
b[m]=p*l;++r}},
ke(a,b){var s,r,q,p,o,n,m,l,k,j=this
t.L.a(b)
s=j.Q
r=j.as
$label0$1:for(q=j.ax,p=0;s<=r;){if(!(s>=0&&s<80))return A.a(B.O,s)
o=B.O[s]
n=j.cx
switch(n){case 0:n=a.x
n===$&&A.e("huffmanTableAC")
m=j.d1(n)
if(m==null)throw A.f(A.p("Invalid progressive encoding"))
l=m&15
p=m>>>4
if(l===0)if(p<15){n=j.eS(p)
n.toString
j.CW=n+B.a.R(1,p)
j.cx=4}else{j.cx=1
p=16}else{if(l!==1)throw A.f(A.p("invalid ACn encoding"))
j.cy=j.d3(l)
j.cx=p!==0?2:3}continue $label0$1
case 1:case 2:if(!(o<64))return A.a(b,o)
k=b[o]
if(k!==0){n=j.cg()
n.toString
n=B.a.R(n,q)
b.$flags&2&&A.c(b)
if(!(o<64))return A.a(b,o)
b[o]=k+n}else{--p
if(p===0)j.cx=n===2?3:0}break
case 3:if(!(o<64))return A.a(b,o)
n=b[o]
if(n!==0){k=j.cg()
k.toString
k=B.a.R(k,q)
b.$flags&2&&A.c(b)
if(!(o<64))return A.a(b,o)
b[o]=n+k}else{n=j.cy
n===$&&A.e("successiveACNextValue")
n=B.a.R(n,q)
b.$flags&2&&A.c(b)
if(!(o<64))return A.a(b,o)
b[o]=n
j.cx=0}break
case 4:if(!(o<64))return A.a(b,o)
n=b[o]
if(n!==0){k=j.cg()
k.toString
k=B.a.R(k,q)
b.$flags&2&&A.c(b)
if(!(o<64))return A.a(b,o)
b[o]=n+k}break}++s}if(j.cx===4)if(--j.CW===0)j.cx=0},
kp(a,b,c,d,e){var s,r,q,p,o
t.mX.a(b)
s=this.f
s===$&&A.e("mcusPerLine")
r=B.a.aR(c,s)*a.b+d
q=B.a.ae(c,s)*a.a+e
s=a.r
s===$&&A.e("blocks")
p=s.length
if(r>=p)return
if(!(r>=0))return A.a(s,r)
s=s[r]
o=s.length
if(q>=o)return
if(!(q>=0))return A.a(s,q)
b.$2(a,s[q])}}
A.eZ.prototype={
b2(a,b){var s=A.pu()
s.cr(a)
if(s.x.length!==1)throw A.f(A.p("only single frame JPEGs supported"))
return A.wZ(s)},
bk(a){return this.b2(a,null)}}
A.kR.prototype={
ap(){return"JpegChroma."+this.b}}
A.kU.prototype={
iU(a){a=B.b.j(B.a.L(a,1,100))
if(this.at===a)return
this.kX(a<50?B.b.c5(5000/a):B.a.c5(200-a*2))
this.at=a},
mM(b4,b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=this,b1="_yacHuffman",b2="_uvacHuffman",b3=A.ff(!0,8192)
b0.c3(b3,216)
b0.c3(b3,224)
b3.aO(16)
b3.D(74)
b3.D(70)
b3.D(73)
b3.D(70)
b3.D(0)
b3.D(1)
b3.D(1)
b3.D(0)
b3.aO(1)
b3.aO(1)
b3.D(0)
b3.D(0)
b0.mb(b3,b4.gi8())
b0.me(b3)
s=b4.ga6()
r=b4.gV()
b0.c3(b3,192)
b3.aO(17)
b3.D(8)
b3.aO(r)
b3.aO(s)
b3.D(3)
b3.D(1)
s=b5===B.b8
b3.D(s?17:34)
b3.D(0)
b3.D(2)
b3.D(17)
b3.D(1)
b3.D(3)
b3.D(17)
b3.D(1)
b0.md(b3)
b0.c3(b3,218)
b3.aO(12)
b3.D(3)
b3.D(1)
b3.D(0)
b3.D(2)
b3.D(17)
b3.D(3)
b3.D(17)
b3.D(0)
b3.D(63)
b3.D(0)
b0.ax=0
b0.ay=7
q=b4.ga6()
p=b4.gV()
if(s){o=new Float32Array(64)
n=new Float32Array(64)
m=new Float32Array(64)
for(s=b0.c,r=b0.d,l=0,k=0,j=0,i=0;i<p;i+=8)for(h=0;h<q;h+=8){b0.cU(b4,h,i,q,p,o,n,m)
g=b0.e
f=b0.r
f===$&&A.e(b1)
l=b0.bR(b3,o,s,l,g,f)
f=b0.f
g=b0.w
g===$&&A.e(b2)
k=b0.bR(b3,n,r,k,f,g)
j=b0.bR(b3,m,r,j,b0.f,b0.w)}}else{s=t.pk
o=J.dN(4,s)
for(e=0;e<4;++e)o[e]=new Float32Array(64)
n=J.dN(4,s)
for(e=0;e<4;++e)n[e]=new Float32Array(64)
m=J.dN(4,s)
for(e=0;e<4;++e)m[e]=new Float32Array(64)
d=new Float32Array(64)
c=new Float32Array(64)
for(s=b0.c,r=b0.d,l=0,k=0,j=0,i=0;i<p;i+=16)for(g=i+8,h=0;h<q;h+=16){f=o[0]
b=n[0]
a=m[0]
b0.cU(b4,h,i,q,p,f,b,a)
a0=h+8
a1=o[1]
a2=n[1]
a3=m[1]
b0.cU(b4,a0,i,q,p,a1,a2,a3)
a4=o[2]
a5=n[2]
a6=m[2]
b0.cU(b4,h,g,q,p,a4,a5,a6)
a7=o[3]
a8=n[3]
a9=m[3]
b0.cU(b4,a0,g,q,p,a7,a8,a9)
b0.h6(d,b,a2,a5,a8)
b0.h6(c,a,a3,a6,a9)
a9=b0.e
a6=b0.r
a6===$&&A.e(b1)
l=b0.bR(b3,a7,s,b0.bR(b3,a4,s,b0.bR(b3,a1,s,b0.bR(b3,f,s,l,a9,a6),b0.e,b0.r),b0.e,b0.r),b0.e,b0.r)
a6=b0.f
a9=b0.w
a9===$&&A.e(b2)
k=b0.bR(b3,d,r,k,a6,a9)
j=b0.bR(b3,c,r,j,b0.f,b0.w)}}s=b0.ay
if(s>=0){++s
b0.bT(b3,A.b([B.a.a0(1,s)-1,s],t.t))}b0.c3(b3,217)
return J.ac(B.f.gE(b3.c),0,b3.a)},
cU(a,b,c,d,e,f,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g
for(s=this.as,r=c+1,q=0;q<64;++q){p=q>>>3
o=c+p
n=b+(q&7)
if(o>=e)o-=r+p-e
if(n>=d)n-=n-d+1
m=a.a
l=m==null?null:m.a5(n,o,null)
if(l==null)l=new A.ad()
if(l.gM()!==B.h)l=l.bj(B.h)
k=B.b.j(l.gq())
j=B.b.j(l.gu())
i=B.b.j(l.gA())
if(!(k>=0&&k<2048))return A.a(s,k)
m=s[k]
h=j+256
if(!(h>=0&&h<2048))return A.a(s,h)
h=s[h]
g=i+512
if(!(g>=0&&g<2048))return A.a(s,g)
g=B.a.l(m+h+s[g],16)
f.$flags&2&&A.c(f)
if(!(q<64))return A.a(f,q)
f[q]=g-128
g=k+768
if(!(g<2048))return A.a(s,g)
g=s[g]
h=j+1024
if(!(h>=0&&h<2048))return A.a(s,h)
h=s[h]
m=i+1280
if(!(m>=0&&m<2048))return A.a(s,m)
m=B.a.l(g+h+s[m],16)
a0.$flags&2&&A.c(a0)
if(!(q<64))return A.a(a0,q)
a0[q]=m-128
m=k+1280
if(!(m<2048))return A.a(s,m)
m=s[m]
h=j+1536
if(!(h>=0&&h<2048))return A.a(s,h)
h=s[h]
g=i+1792
if(!(g>=0&&g<2048))return A.a(s,g)
g=B.a.l(m+h+s[g],16)
a1.$flags&2&&A.c(a1)
if(!(q<64))return A.a(a1,q)
a1[q]=g-128}},
h6(a,b,c,d,e){var s,r,q,p,o,n,m,l
for(s=a.$flags|0,r=0;r<64;++r){if(r<32)q=B.a.ae(r,8)<4?b:c
else q=B.a.ae(r,8)<4?d:e
p=(B.a.Y(B.a.ae(r,32),8)<<4>>>0)+(B.a.ae(r,4)<<1>>>0)
if(!(p<64))return A.a(q,p)
o=q[p]
n=p+1
if(!(n<64))return A.a(q,n)
n=q[n]
m=p+8
if(!(m<64))return A.a(q,m)
m=q[m]
l=p+9
if(!(l<64))return A.a(q,l)
l=q[l]
s&2&&A.c(a)
if(!(r<64))return A.a(a,r)
a[r]=(o+n+m+l)/4}},
c3(a,b){a.D(255)
a.D(b&255)},
kX(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this
for(s=b.a,r=s.$flags|0,q=0;q<64;++q){p=B.b.c5((B.ja[q]*a+50)/100)
if(p<1)p=1
else if(p>255)p=255
o=B.a4[q]
r&2&&A.c(s)
if(!(o<64))return A.a(s,o)
s[o]=p}for(r=b.b,o=r.$flags|0,n=0;n<64;++n){m=B.b.c5((B.jb[n]*a+50)/100)
if(m<1)m=1
else if(m>255)m=255
l=B.a4[n]
o&2&&A.c(r)
if(!(l<64))return A.a(r,l)
r[l]=m}for(o=b.c,l=o.$flags|0,k=b.d,j=k.$flags|0,i=0,h=0;h<8;++h)for(g=0;g<8;++g){if(!(i>=0&&i<64))return A.a(B.a4,i)
f=B.a4[i]
if(!(f<64))return A.a(s,f)
e=s[f]
d=B.bI[h]
c=B.bI[g]
l&2&&A.c(o)
o[i]=1/(e*d*c*8)
f=r[f]
j&2&&A.c(k)
k[i]=1/(f*d*c*8);++i}},
dG(a,b){var s,r,q,p,o,n,m,l=t.L
l.a(a)
l.a(b)
l=t.t
s=A.b([A.b([],l)],t.iZ)
for(r=b.length,q=0,p=0,o=1;o<=16;++o){for(n=1;n<=a[o];++n){if(!(p>=0&&p<r))return A.a(b,p)
m=b[p]
if(s.length<=m)B.c.sn(s,m+1)
B.c.h(s,m,A.b([q,o],l));++p;++q}q*=2}return s},
kV(){var s,r,q,p,o,n,m,l,k,j,i
for(s=this.y,r=this.x,q=t.t,p=1,o=2,n=1;n<=15;++n){for(m=p;m<o;++m){l=32767+m
B.c.h(s,l,n)
B.c.h(r,l,A.b([m,n],q))}for(l=o-1,k=-l,j=-p;k<=j;++k){i=32767+k
B.c.h(s,i,n)
B.c.h(r,i,A.b([l+k,n],q))}p=p<<1>>>0
o=o<<1>>>0}},
kY(){var s,r,q
for(s=this.as,r=s.$flags|0,q=0;q<256;++q){r&2&&A.c(s)
s[q]=19595*q
s[q+256]=38470*q
s[q+512]=7471*q+32768
s[q+768]=-11059*q
s[q+1024]=-21709*q
s[q+1280]=32768*q+8421375
s[q+1536]=-27439*q
s[q+1792]=-5329*q}},
kK(d6,d7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5=t.bd
d5.a(d6)
d5.a(d7)
for(d5=d6.$flags|0,s=0,r=0;r<8;++r){if(!(s<64))return A.a(d6,s)
q=d6[s]
p=s+1
if(!(p<64))return A.a(d6,p)
o=d6[p]
n=s+2
if(!(n<64))return A.a(d6,n)
m=d6[n]
l=s+3
if(!(l<64))return A.a(d6,l)
k=d6[l]
j=s+4
if(!(j<64))return A.a(d6,j)
i=d6[j]
h=s+5
if(!(h<64))return A.a(d6,h)
g=d6[h]
f=s+6
if(!(f<64))return A.a(d6,f)
e=d6[f]
d=s+7
if(!(d<64))return A.a(d6,d)
c=d6[d]
b=q+c
a=q-c
a0=o+e
a1=o-e
a2=m+g
a3=m-g
a4=k+i
a5=b+a4
a6=b-a4
a7=a0+a2
d5&2&&A.c(d6)
if(!(s<64))return A.a(d6,s)
d6[s]=a5+a7
if(!(j<64))return A.a(d6,j)
d6[j]=a5-a7
a8=(a0-a2+a6)*0.707106781
if(!(n<64))return A.a(d6,n)
d6[n]=a6+a8
if(!(f<64))return A.a(d6,f)
d6[f]=a6-a8
a5=k-i+a3
a9=a1+a
b0=(a5-a9)*0.382683433
b1=0.5411961*a5+b0
b2=1.306562965*a9+b0
b3=(a3+a1)*0.707106781
b4=a+b3
b5=a-b3
if(!(h<64))return A.a(d6,h)
d6[h]=b5+b1
if(!(l<64))return A.a(d6,l)
d6[l]=b5-b1
if(!(p<64))return A.a(d6,p)
d6[p]=b4+b2
if(!(d<64))return A.a(d6,d)
d6[d]=b4-b2
s+=8}for(s=0,r=0;r<8;++r){if(!(s<64))return A.a(d6,s)
q=d6[s]
p=s+8
if(!(p<64))return A.a(d6,p)
o=d6[p]
n=s+16
if(!(n<64))return A.a(d6,n)
m=d6[n]
l=s+24
if(!(l<64))return A.a(d6,l)
k=d6[l]
j=s+32
if(!(j<64))return A.a(d6,j)
i=d6[j]
h=s+40
if(!(h<64))return A.a(d6,h)
g=d6[h]
f=s+48
if(!(f<64))return A.a(d6,f)
e=d6[f]
d=s+56
if(!(d<64))return A.a(d6,d)
c=d6[d]
b6=q+c
b7=q-c
b8=o+e
b9=o-e
c0=m+g
c1=m-g
c2=k+i
c3=b6+c2
c4=b6-c2
c5=b8+c0
d5&2&&A.c(d6)
if(!(s<64))return A.a(d6,s)
d6[s]=c3+c5
if(!(j<64))return A.a(d6,j)
d6[j]=c3-c5
c6=(b8-c0+c4)*0.707106781
if(!(n<64))return A.a(d6,n)
d6[n]=c4+c6
if(!(f<64))return A.a(d6,f)
d6[f]=c4-c6
c3=k-i+c1
c7=b9+b7
c8=(c3-c7)*0.382683433
c9=0.5411961*c3+c8
d0=1.306562965*c7+c8
d1=(c1+b9)*0.707106781
d2=b7+d1
d3=b7-d1
if(!(h<64))return A.a(d6,h)
d6[h]=d3+c9
if(!(l<64))return A.a(d6,l)
d6[l]=d3-c9
if(!(p<64))return A.a(d6,p)
d6[p]=d2+d0
if(!(d<64))return A.a(d6,d)
d6[d]=d2-d0;++s}for(d5=this.z,r=0;r<64;++r){d4=d6[r]*d7[r]
B.c.h(d5,r,d4>0?B.b.j(d4+0.5):B.b.j(d4-0.5))}return d5},
mb(a,b){var s,r
if(b.gO(0))return
s=A.ff(!1,8192)
b.b3(s)
r=J.ac(B.f.gE(s.c),0,s.a)
this.c3(a,225)
a.aO(r.length+8)
a.aW(1165519206)
a.aO(0)
a.bF(r)},
me(a){var s,r,q
this.c3(a,219)
a.aO(132)
a.D(0)
for(s=this.a,r=0;r<64;++r)a.D(s[r])
a.D(1)
for(s=this.b,q=0;q<64;++q)a.D(s[q])},
md(a){var s,r,q,p,o,n,m,l
this.c3(a,196)
a.aO(418)
a.D(0)
for(s=0;s<16;){++s
a.D(B.bd[s])}for(r=0;r<=11;++r)a.D(B.ag[r])
a.D(16)
for(q=0;q<16;){++q
a.D(B.bf[q])}for(p=0;p<=161;++p)a.D(B.bv[p])
a.D(1)
for(o=0;o<16;){++o
a.D(B.be[o])}for(n=0;n<=11;++n)a.D(B.ag[n])
a.D(17)
for(m=0;m<16;){++m
a.D(B.bg[m])}for(l=0;l<=161;++l)a.D(B.b9[l])},
bR(a,a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=t.bd
b.a(a0)
b.a(a1)
t.ia.a(a3)
t.d.a(a4)
b=a4.length
if(0>=b)return A.a(a4,0)
s=a4[0]
if(240>=b)return A.a(a4,240)
r=a4[240]
q=c.kK(a0,a1)
for(b=c.Q,p=0;p<64;++p)B.c.h(b,B.a4[p],q[p])
o=b[0]
o.toString
n=o-a2
if(n===0){if(0>=a3.length)return A.a(a3,0)
m=a3[0]
m.toString
c.bT(a,m)}else{l=32767+n
a3.toString
m=c.y
if(!(l>=0&&l<65535))return A.a(m,l)
m=m[l]
m.toString
if(!(m<a3.length))return A.a(a3,m)
m=a3[m]
m.toString
c.bT(a,m)
m=c.x[l]
m.toString
c.bT(a,m)}k=63
while(!0){if(!(k>0&&b[k]===0))break;--k}if(k===0){s.toString
c.bT(a,s)
return o}for(m=c.y,j=c.x,i=1;i<=k;){h=i
while(!0){if(!(h>=0&&h<64))return A.a(b,h)
if(!(b[h]===0&&h<=k))break;++h}g=h-i
if(g>=16){f=B.a.l(g,4)
for(e=1;e<=f;++e){r.toString
c.bT(a,r)}g&=15}d=b[h]
d.toString
l=32767+d
if(!(l>=0&&l<65535))return A.a(m,l)
d=m[l]
d.toString
d=(g<<4>>>0)+d
if(!(d<a4.length))return A.a(a4,d)
d=a4[d]
d.toString
c.bT(a,d)
d=j[l]
d.toString
c.bT(a,d)
i=h+1}if(k!==63){s.toString
c.bT(a,s)}return o},
bT(a,b){var s,r,q,p=this
t.L.a(b)
s=b.length
if(0>=s)return A.a(b,0)
r=b[0]
if(1>=s)return A.a(b,1)
q=b[1]-1
for(;q>=0;){if((r&B.a.a0(1,q))>>>0!==0)p.ax=(p.ax|B.a.a0(1,p.ay))>>>0;--q
if(--p.ay<0){s=p.ax
if(s===255){a.D(255)
a.D(0)}else a.D(s)
p.ay=7
p.ax=0}}},
sml(a){this.e=t.ia.a(a)},
sma(a){this.f=t.ia.a(a)},
sjB(a){this.r=t.d.a(a)},
sjA(a){this.w=t.d.a(a)}}
A.dV.prototype={
ap(){return"PngDisposeMode."+this.b}}
A.fs.prototype={
ap(){return"PngBlendMode."+this.b}}
A.fu.prototype={}
A.i9.prototype={}
A.cb.prototype={
ap(){return"PngFilterType."+this.b}}
A.iz.prototype={
sS(a){this.w=t.k.a(a)},
snu(a){this.x=t.T.a(a)},
$iO:1}
A.ia.prototype={}
A.ft.prototype={
cG(a){var s,r=A.u(a,!0,null,0).az(8)
for(s=0;s<8;++s)if(J.d(r.a,r.d+s)!==B.by[s])return!1
return!0},
b6(b7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=null,b6=A.u(b7,!0,b5,0)
b4.d=b6
s=b6.az(8)
for(r=0;r<8;++r)if(J.d(s.a,s.d+r)!==B.by[r])return b5
for(b6=b4.a,q=b6.cx,p=t.t,o=b6.cy,n=t.L,m=b6.ax;!0;){l=b4.d
k=l.d-l.b
j=l.m()
i=b4.d.ak(4)
switch(i){case"tEXt":l=b4.d
h=l.am(j)
l.d=l.d+(h.c-h.d)
g=h.a4()
f=g.length
for(r=0;r<f;++r)if(g[r]===0){l=r+1
m.h(0,B.t.bk(new Uint8Array(g.subarray(0,A.br(0,r,f)))),B.t.bk(new Uint8Array(g.subarray(l,A.br(l,b5,f)))))
break}b4.d.d+=4
break
case"pHYs":l=b4.d
h=l.am(j)
l.d=l.d+(h.c-h.d)
e=A.q(h,b5,0)
e.m()
e.m()
J.d(e.a,e.d++)
b4.d.d+=4
break
case"IHDR":l=b4.d
h=l.am(j)
l.d=l.d+(h.c-h.d)
d=A.q(h,b5,0)
c=d.a4()
b6.a=d.m()
b6.b=d.m()
b6.c=J.d(d.a,d.d++)
b6.d=J.d(d.a,d.d++)
J.d(d.a,d.d++)
b6.f=J.d(d.a,d.d++)
b6.r=J.d(d.a,d.d++)
l=b6.d
if(!(l===0||l===2||l===3||l===4||l===6))return b5
if(b6.f!==0)return b5
switch(l){case 0:if(!B.c.av(A.b([1,2,4,8,16],p),b6.c))return b5
break
case 2:if(!B.c.av(A.b([8,16],p),b6.c))return b5
break
case 3:if(!B.c.av(A.b([1,2,4,8],p),b6.c))return b5
break
case 4:if(!B.c.av(A.b([8,16],p),b6.c))return b5
break
case 6:if(!B.c.av(A.b([8,16],p),b6.c))return b5
break}if(b4.d.m()!==A.dc(n.a(c),A.dc(new A.ai(i),0)))throw A.f(A.p("Invalid "+i+" checksum"))
break
case"PLTE":l=b4.d
h=l.am(j)
l.d=l.d+(h.c-h.d)
b6.sS(h.a4())
if(b4.d.m()!==A.dc(n.a(n.a(b6.w)),A.dc(new A.ai(i),0)))throw A.f(A.p("Invalid "+i+" checksum"))
break
case"tRNS":l=b4.d
h=l.am(j)
l.d=l.d+(h.c-h.d)
b6.snu(h.a4())
b=b4.d.m()
l=b6.x
l.toString
if(b!==A.dc(n.a(l),A.dc(new A.ai(i),0)))throw A.f(A.p("Invalid "+i+" checksum"))
break
case"IEND":b4.d.d+=4
break
case"gAMA":if(j!==4)throw A.f(A.p("Invalid gAMA chunk"))
b4.d.m()
b4.d.d+=4
break
case"IDAT":B.c.C(o,k)
l=b4.d
a=l.d+=j
l.d=a+4
break
case"acTL":b6.ch=b4.d.m()
b4.d.m()
b4.d.d+=4
break
case"fcTL":b4.d.m()
a0=b4.d.m()
a1=b4.d.m()
a2=b4.d.m()
a3=b4.d.m()
a4=b4.d.p()
a5=b4.d.p()
l=b4.d
a6=J.d(l.a,l.d++)
l=b4.d
a7=J.d(l.a,l.d++)
if(!(a6>=0&&a6<3))return A.a(B.bJ,a6)
l=B.bJ[a6]
if(!(a7>=0&&a7<2))return A.a(B.bx,a7)
a=B.bx[a7]
B.c.C(q,new A.i9(A.b([],p),a0,a1,a2,a3,a4,a5,l,a))
b4.d.d+=4
break
case"fdAT":b4.d.m()
B.c.C(B.c.gbs(q).y,k)
l=b4.d
a=l.d+=j-4
l.d=a+4
break
case"bKGD":l=b6.d
if(l===3){l=b4.d
a8=J.d(l.a,l.d++);--j
a9=a8*3
l=b6.w
a=l.length
if(!(a9>=0&&a9<a))return A.a(l,a9)
b0=l[a9]
b1=a9+1
if(!(b1<a))return A.a(l,b1)
b2=l[b1]
b1=a9+2
if(!(b1<a))return A.a(l,b1)
b3=l[b1]
l=b6.x
if(l!=null){l=B.f.av(l,a8)?0:255
a=new Uint8Array(4)
a[0]=b0
a[1]=b2
a[2]=b3
a[3]=l
b6.z=new A.dp(a)}else{l=new Uint8Array(3)
l[0]=b0
l[1]=b2
l[2]=b3
b6.z=new A.hD(l)}}else if(l===0||l===4){b4.d.p()
j-=2}else if(l===2||l===6){l=b4.d
l.p()
l.p()
l.p()
j-=24}if(j>0)b4.d.d+=j
b4.d.d+=4
break
case"iCCP":b6.Q=b4.d.di()
l=b4.d
J.d(l.a,l.d++)
l=b6.Q
a=b4.d
h=a.am(j-(l.length+2))
a.d=a.d+(h.c-h.d)
b6.at=h.a4()
b4.d.d+=4
break
default:l=b4.d
a=l.d+=j
l.d=a+4
break}if(i==="IEND")break
l=b4.d
if(l.d>=l.c)return b5}return b6},
aw(c3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=null,b7=null,b8=b5.a,b9=b8.a,c0=b8.b,c1=b8.cx,c2=c1.length
if(c2===0||c3===0){r=A.b([],t.bs)
c1=b8.cy
q=c1.length
for(c2=t.L,p=0,o=0;o<q;++o){n=b5.d
n===$&&A.e("_input")
if(!(o<c1.length))return A.a(c1,o)
n.d=c1[o]
m=n.m()
l=b5.d.ak(4)
n=b5.d
k=n.am(m)
n.d=n.d+(k.c-k.d)
j=k.a4()
p+=j.length
B.c.C(r,j)
if(b5.d.m()!==A.dc(c2.a(j),A.dc(new A.ai(l),0)))throw A.f(A.p("Invalid "+l+" checksum"))}b7=new Uint8Array(p)
for(c1=r.length,i=0,h=0;h<r.length;r.length===c1||(0,A.aI)(r),++h){j=r[h]
J.oW(b7,i,j)
i+=j.length}}else{if(c3>=c2)throw A.f(A.p("Invalid Frame Number: "+c3))
if(!(c3<c2))return A.a(c1,c3)
g=c1[c3]
b9=g.b
c0=g.c
r=A.b([],t.bs)
for(c1=g.y,p=0,o=0;o<c1.length;++o){c2=b5.d
c2===$&&A.e("_input")
c2.d=c1[o]
m=c2.m()
c2=b5.d
c2.ak(4)
c2.d+=4
c2=b5.d
k=c2.am(m-4)
c2.d=c2.d+(k.c-k.d)
j=k.a4()
p+=j.length
B.c.C(r,j)}b7=new Uint8Array(p)
for(c1=r.length,i=0,h=0;h<r.length;r.length===c1||(0,A.aI)(r),++h){j=r[h]
J.oW(b7,i,j)
i+=j.length}}c1=b8.d
f=1
if(!(c1===3))if(!(c1===0)){if(c1===4)c1=2
else c1=c1===6?4:3
f=c1}s=null
try{s=B.L.ck(b7)}catch(e){return b6}d=A.u(s,!0,b6,0)
b5.c=b5.b=0
c=b6
if(b8.d===3){c1=b8.w
if(c1!=null){c2=c1.length
b=c2/3|0
a=b8.x
n=a!=null
a0=n?a.length:0
a1=n?4:3
c=new A.bn(new Uint8Array(b*a1),b,a1)
for(n=a1===4,o=0,a2=0;o<b;++o,a2+=3){if(n&&o<a0){if(!(o<a.length))return A.a(a,o)
a3=a[o]}else a3=255
if(!(a2<c2))return A.a(c1,a2)
a4=c1[a2]
a5=a2+1
if(!(a5<c2))return A.a(c1,a5)
a5=c1[a5]
a6=a2+2
if(!(a6<c2))return A.a(c1,a6)
c.dz(o,a4,a5,c1[a6],a3)}}}if(b8.d===0&&b8.x!=null&&c==null&&b8.c<=8){a=b8.x
a7=a.length
c1=b8.c
b=B.a.a0(1,c1)
c=new A.bn(new Uint8Array(b*4),b,4)
if(c1===1)a8=255
else if(c1===2)a8=85
else{c1=c1===4?17:1
a8=c1}for(o=0;o<b;++o){a9=o*a8
c.dz(o,a9,a9,a9,255)}for(c1=c.b,c2=3<c1,n=c.c,a4=n.$flags|0,o=0;o<a7;o+=2){a5=a[o]
a6=o+1
if(!(a6<a7))return A.a(a,a6)
b0=(a5&255)<<8|a[a6]&255
if(b0<b)if(c2){a5=b0*c1+3
a4&2&&A.c(n)
if(!(a5>=0&&a5<n.length))return A.a(n,a5)
n[a5]=0}}}c1=b8.c
if(c1===1)b1=B.A
else if(c1===2)b1=B.D
else{if(c1===4)c2=B.E
else c2=c1===16?B.n:B.h
b1=c2}c2=b8.d
if(c2===0&&b8.x!=null&&c1>8)f=4
b2=A.a0(b6,b6,b1,0,B.k,c0,b6,0,c2===2&&b8.x!=null?4:f,c,B.h,b9,!1)
b3=b8.a
b4=b8.b
b8.a=b9
b8.b=c0
b5.e=0
if(b8.r!==0){c1=c0+7>>>3
b5.cf(d,b2,0,0,8,8,b9+7>>>3,c1)
c2=b9+3
b5.cf(d,b2,4,0,8,8,c2>>>3,c1)
c1=c0+3
b5.cf(d,b2,0,4,4,8,c2>>>2,c1>>>3)
c2=b9+1
b5.cf(d,b2,2,0,4,4,c2>>>2,c1>>>2)
c1=c0+1
b5.cf(d,b2,0,2,2,4,c2>>>1,c1>>>2)
b5.cf(d,b2,1,0,2,2,b9>>>1,c1>>>1)
b5.cf(d,b2,0,1,1,2,b9,c0>>>1)}else b5.ls(d,b2)
b8.a=b3
b8.b=b4
c1=b8.at
if(c1!=null)b2.c=new A.eM(b8.Q,B.cS,c1)
b8=b8.ax
if(b8.a!==0)b2.mq(b8)
return b2},
b2(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=null
if(b.b6(t.D.a(a0))==null)return a
s=b.a
r=s.cx
q=r.length
if(q===0){s=b.aw(0)
s.toString
return s}for(q=t.g,p=a,o=p,n=0;n<s.ch;++n){if(!(n<r.length))return A.a(r,n)
a1=r[n]
m=b.aw(n)
if(m==null)continue
if(o==null||p==null){o=m.i3(m.gcI())
l=a1.f
o.y=B.b.j((l===0||a1.r===0?0:l/a1.r)*1000)
p=o
continue}l=n-1
if(!(l>=0&&l<r.length))return A.a(r,l)
k=r[l]
j=m.a
i=j==null
h=i?a:j.a
if(h==null)h=0
g=p.a
f=g==null
e=f?a:g.a
if(h===(e==null?0:e)){j=i?a:j.b
if(j==null)j=0
i=f?a:g.b
j=j===(i==null?0:i)&&a1.d===0&&a1.e===0&&a1.x===B.bX}else j=!1
if(j){l=a1.f
m.y=B.b.j((l===0||a1.r===0?0:l/a1.r)*1000)
o.bC(m)
p=m
continue}d=o.x
if(d===$){d=A.b([],q)
o.scR(d)}if(!(l<d.length))return A.a(d,l)
p=A.hW(d[l],!1,!1)
c=k.w
if(c===B.bZ){l=k.d
j=k.e
i=s.z
if(i==null){i=new Uint8Array(4)
h=new A.dp(i)
if(0>=4)return A.a(i,0)
i[0]=0
if(1>=4)return A.a(i,1)
i[1]=0
if(2>=4)return A.a(i,2)
i[2]=0
if(3>=4)return A.a(i,3)
i[3]=0
i=h}A.wV(p,!1,i,l,l+k.b-1,j,j+k.c-1)}else if(c===B.c_&&n>1){l=n-2
d=o.x
if(d===$){d=A.b([],q)
o.scR(d)}if(!(l>=0&&l<d.length))return A.a(d,l)
j=k.d
i=k.e
h=k.b
g=k.c
p=A.oC(p,d[l],B.av,g,h,j,i,g,h,j,i)}l=a1.f
p.y=B.b.j((l===0||a1.r===0?0:l/a1.r)*1000)
l=a1.x===B.bY?B.av:B.au
p=A.oC(p,m,l,a,a,a1.d,a1.e,a,a,a,a)
o.bC(p)}return o},
bk(a){return this.b2(a,null)},
cf(a4,a5,a6,a7,a8,a9,b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=a1.a,a3=a2.d
if(a3===4)s=2
else if(a3===2)s=3
else{a3=a3===6?4:1
s=a3}r=s*a2.c
q=B.a.l(r+7,3)
p=B.a.l(r*b0+7,3)
o=A.b([null,null],t.e5)
n=A.b([0,0,0,0],t.t)
for(a2=a8>1,m=a8-a6,l=a7,k=0,j=0;k<b1;++k,l+=a9,++a1.e){a3=J.d(a4.a,a4.d++)
if(!(a3>=0&&a3<5))return A.a(B.af,a3)
i=B.af[a3]
h=a4.am(p)
a4.d=a4.d+(h.c-h.d)
B.c.h(o,j,h.a4())
if(!(j>=0&&j<2))return A.a(o,j)
g=o[j]
j=1-j
f=o[j]
g.toString
a1.hJ(i,q,g,f)
a1.c=a1.b=0
a3=g.length
e=new A.ay(g,0,Math.min(a3,a3),0,!0)
for(a3=m<=1,d=a6,c=0;c<b0;++c,d+=a8){a1.hy(e,n)
b=a5.a
b=b==null?null:b.a5(d,l,null)
a1.eT(b==null?new A.ad():b,n)
if(!a3||a2)for(a=0;a<a8;++a)for(b=l+a,a0=0;a0<m;++a0)a1.eT(a5.aB(d+a0,b),n)}}},
ls(a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=b.a,a0=a.d
if(a0===4)s=2
else if(a0===2)s=3
else{a0=a0===6?4:1
s=a0}r=s*a.c
q=a.a
p=a.b
o=B.a.l(q*r+7,3)
n=B.a.l(r+7,3)
m=A.a1(o,0,!1,t.p)
l=A.b([m,m],t.S)
k=A.b([0,0,0,0],t.t)
a=a2.a
j=a.gJ(a)
j.B()
for(i=0,h=0;i<p;++i,h=e){a=J.d(a1.a,a1.d++)
if(!(a>=0&&a<5))return A.a(B.af,a)
g=B.af[a]
f=a1.am(o)
a1.d=a1.d+(f.c-f.d)
B.c.h(l,h,f.a4())
if(!(h>=0&&h<2))return A.a(l,h)
e=1-h
b.hJ(g,n,l[h],l[e])
b.c=b.b=0
a=l[h]
a0=a.length
d=new A.ay(a,0,Math.min(a0,a0),0,!0)
for(c=0;c<q;++c){b.hy(d,k)
b.eT(j.gK(),k)
j.B()}}},
hJ(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
t.L.a(c)
t.T.a(d)
s=c.length
switch(a.a){case 0:break
case 1:for(r=J.ao(c),q=b;q<s;++q){p=c.length
if(!(q<p))return A.a(c,q)
o=c[q]
n=q-b
if(!(n>=0&&n<p))return A.a(c,n)
r.h(c,q,o+c[n]&255)}break
case 2:for(r=J.ao(c),p=d!=null,q=0;q<s;++q){if(p){if(!(q<d.length))return A.a(d,q)
m=d[q]}else m=0
if(!(q<c.length))return A.a(c,q)
r.h(c,q,c[q]+m&255)}break
case 3:for(r=J.ao(c),p=d!=null,q=0;q<s;++q){if(q<b)l=0
else{o=q-b
if(!(o>=0&&o<c.length))return A.a(c,o)
l=c[o]}if(p){if(!(q<d.length))return A.a(d,q)
m=d[q]}else m=0
if(!(q<c.length))return A.a(c,q)
r.h(c,q,c[q]+B.a.l(l+m,1)&255)}break
case 4:for(r=J.ao(c),p=d==null,o=!p,q=0;q<s;++q){n=q<b
if(n)l=0
else{k=q-b
if(!(k>=0&&k<c.length))return A.a(c,k)
l=c[k]}if(o){if(!(q<d.length))return A.a(d,q)
m=d[q]}else m=0
if(n||p)j=0
else{n=q-b
if(!(n>=0&&n<d.length))return A.a(d,n)
j=d[n]}i=l+m-j
h=Math.abs(i-l)
g=Math.abs(i-m)
f=Math.abs(i-j)
if(h<=g&&h<=f)e=l
else e=g<=f?m:j
if(!(q<c.length))return A.a(c,q)
r.h(c,q,c[q]+e&255)}break}},
bB(a,b){var s,r,q,p,o,n=this
if(b===0)return 0
if(b===8)return a.G()
if(b===16)return a.p()
for(s=a.c;r=n.c,r<b;){r=a.d
if(r>=s)throw A.f(A.p("Invalid PNG data."))
q=a.a
a.d=r+1
p=J.d(q,r)
r=n.c
n.b=B.a.a0(p,r)
n.c=r+8}if(b===1)o=1
else if(b===2)o=3
else{if(b===4)s=15
else s=0
o=s}s=r-b
r=B.a.a3(n.b,s)
n.c=s
return r&o},
hy(a,b){var s,r,q=this
t.L.a(b)
s=q.a
r=s.d
switch(r){case 0:B.c.h(b,0,q.bB(a,s.c))
return
case 2:B.c.h(b,0,q.bB(a,s.c))
B.c.h(b,1,q.bB(a,s.c))
B.c.h(b,2,q.bB(a,s.c))
return
case 3:B.c.h(b,0,q.bB(a,s.c))
return
case 4:B.c.h(b,0,q.bB(a,s.c))
B.c.h(b,1,q.bB(a,s.c))
return
case 6:B.c.h(b,0,q.bB(a,s.c))
B.c.h(b,1,q.bB(a,s.c))
B.c.h(b,2,q.bB(a,s.c))
B.c.h(b,3,q.bB(a,s.c))
return}throw A.f(A.p("Invalid color type: "+r+"."))},
eT(a,b){var s,r,q,p,o,n,m,l,k,j,i
t.L.a(b)
s=this.a
r=s.d
switch(r){case 0:q=s.x
if(q!=null&&s.c>8){s=q.length
if(0>=s)return A.a(q,0)
r=q[0]
if(1>=s)return A.a(q,1)
s=q[1]
p=b[0]
a.a9(p,p,p,p!==((r&255)<<24|s&255)>>>0?a.gF():0)
return}a.aD(b[0],0,0)
return
case 2:o=b[0]
p=b[1]
n=b[2]
s=s.x
if(s!=null){r=s.length
if(0>=r)return A.a(s,0)
m=s[0]
if(1>=r)return A.a(s,1)
l=s[1]
if(2>=r)return A.a(s,2)
k=s[2]
if(3>=r)return A.a(s,3)
j=s[3]
if(4>=r)return A.a(s,4)
i=s[4]
if(5>=r)return A.a(s,5)
s=s[5]
if(o!==((m&255)<<8|l&255)||p!==((k&255)<<8|j&255)||n!==((i&255)<<8|s&255)){a.a9(o,p,n,a.gF())
return}}a.aD(o,p,n)
return
case 3:a.sW(b[0])
return
case 4:a.aD(b[0],b[1],0)
return
case 6:a.a9(b[0],b[1],b[2],b[3])
return}throw A.f(A.p("Invalid color type: "+r+"."))}}
A.cc.prototype={
ap(){return"PnmFormat."+this.b}}
A.cd.prototype={}
A.iA.prototype={
cG(a){var s
this.b=A.u(a,!1,null,0)
s=this.dM()
if(s==="P1"||s==="P2"||s==="P5"||s==="P3"||s==="P6")return!0
return!1},
b2(a,b){if(this.b6(a)==null)return null
return this.aw(0)},
b6(a){var s,r,q=this
q.b=A.u(a,!1,null,0)
s=q.dM()
if(s==="P1"){r=q.a=new A.cd(B.a5)
r.e=B.c0}else if(s==="P2"){r=q.a=new A.cd(B.a5)
r.e=B.c1}else if(s==="P5"){r=q.a=new A.cd(B.a5)
r.e=B.aI}else if(s==="P3"){r=q.a=new A.cd(B.a5)
r.e=B.c2}else if(s==="P6"){r=q.a=new A.cd(B.a5)
r.e=B.aJ}else return q.b=null
r.a=q.d2()
r=q.a
r.toString
r.b=q.d2()
r=q.a
if(r.a===0||r.b===0)return q.a=q.b=null
return r},
aw(a){var s,r,q,p,o,n=this,m=null,l=n.a
if(l==null)return m
s=l.e
if(s===B.c0){s=l.a
r=A.a0(m,m,B.A,0,B.k,l.b,m,0,1,m,B.h,s,!1)
for(l=r.a,l=l.gJ(l);l.B();){q=l.gK()
if(n.dM()==="1")q.aD(1,1,1)
else q.aD(0,0,0)}return r}else if(s===B.c1||s===B.aI){p=n.d2()
if(p===0)return m
l=n.a
s=l.a
l=l.b
r=A.a0(m,m,n.ib(p),0,B.k,l,m,0,1,m,B.h,s,!1)
for(l=r.a,l=l.gJ(l);l.B();){q=l.gK()
o=n.dQ(n.a.e,p)
q.aD(o,o,o)}return r}else if(s===B.c2||s===B.aJ){p=n.d2()
if(p===0)return m
l=n.a
s=l.a
l=l.b
r=A.a0(m,m,n.ib(p),0,B.k,l,m,0,3,m,B.h,s,!1)
for(l=r.a,l=l.gJ(l);l.B();)l.gK().aD(n.dQ(n.a.e,p),n.dQ(n.a.e,p),n.dQ(n.a.e,p))
return r}return m},
ib(a){if(a>255)return B.n
if(a>15)return B.h
if(a>3)return B.E
if(a>1)return B.D
return B.A},
dQ(a,b){if(a===B.aI||a===B.aJ)return this.b.G()
return this.d2()},
d2(){var s,r,q=this.dM()
if(J.aq(q)===0)return 0
try{s=A.hp(q,null)
return s}catch(r){return 0}},
dM(){var s,r,q,p,o=this.b
if(o==null)return""
s=this.c
if(s.length!==0)return B.c.cK(s,0)
r=B.d.iI(o.nj())
if(r.length===0)return""
for(;B.d.ah(r,"#");)r=B.d.iI(this.b.iv(70))
o=t.cF
q=A.x(new A.bV(A.b(r.split(" "),t.s),t.gS.a(new A.lg()),o),!0,o.i("h.E"))
for(o=q.length,p=0;p<o;++p)if(B.d.ah(q[p],"#")){B.c.sn(q,p)
break}B.c.cj(s,q)
if(s.length===0)return""
return B.c.cK(s,0)}}
A.lg.prototype={
$1(a){return A.I(a)!==""},
$S:9}
A.iC.prototype={
sn_(a){t.T.a(a)},
siV(a){t.T.a(a)},
snl(a){t.T.a(a)},
snm(a){t.T.a(a)}}
A.iE.prototype={
sbU(a){t.T.a(a)},
sbZ(a){t.T.a(a)}}
A.bA.prototype={}
A.iH.prototype={
sbU(a){t.T.a(a)},
sbZ(a){t.T.a(a)}}
A.iI.prototype={
sbU(a){t.T.a(a)},
sbZ(a){t.T.a(a)}}
A.iK.prototype={
sbU(a){t.T.a(a)},
sbZ(a){t.T.a(a)}}
A.iL.prototype={
sbU(a){t.T.a(a)},
sbZ(a){t.T.a(a)}}
A.fw.prototype={}
A.iJ.prototype={}
A.li.prototype={
jm(a){var s,r,q,p,o=this
a.p()
a.p()
a.p()
a.p()
s=B.a.Y(a.c-a.d,8)
if(s>0){o.e=new Uint16Array(s)
o.f=new Uint16Array(s)
o.r=new Uint16Array(s)
o.w=new Uint16Array(s)
for(r=0;r<s;++r){q=o.e
p=a.p()
q.$flags&2&&A.c(q)
if(!(r<q.length))return A.a(q,r)
q[r]=p
p=o.f
q=a.p()
p.$flags&2&&A.c(p)
if(!(r<p.length))return A.a(p,r)
p[r]=q
q=o.r
p=a.p()
q.$flags&2&&A.c(q)
if(!(r<q.length))return A.a(q,r)
q[r]=p
p=o.w
q=a.p()
p.$flags&2&&A.c(p)
if(!(r<p.length))return A.a(p,r)
p[r]=q}}}}
A.cY.prototype={
iu(a,b,c,d,e,f,g){if(a.c-a.d<2)return
if(e==null)e=a.p()
switch(e){case 0:d.toString
this.lO(a,b,c,d)
break
case 1:if(f==null)f=this.lL(a,c)
d.toString
this.lN(a,b,c,d,f,g)
break
default:throw A.f(A.p("Unsupported compression: "+e))}},
ni(a,b,c,d){return this.iu(a,b,c,d,null,null,0)},
lL(a,b){var s,r,q=new Uint16Array(b)
for(s=0;s<b;++s){r=a.p()
if(!(s<b))return A.a(q,s)
q[s]=r}return q},
lO(a,b,c,d){var s,r=b*c
if(d===16)r*=2
if(r>a.c-a.d){s=new Uint8Array(r)
this.c=s
B.f.aS(s,0,r,255)
return}this.c=a.az(r).a4()},
lN(a,b,c,d,e,f){var s,r,q,p,o,n,m,l=b*c
if(d===16)l*=2
s=new Uint8Array(l)
this.c=s
r=f*c
q=e.length
if(r>=q){B.f.aS(s,0,l,255)
return}for(p=0,o=0;o<c;++o,r=n){n=r+1
if(!(r>=0&&r<q))return A.a(e,r)
m=a.am(e[r])
a.d=a.d+(m.c-m.d)
s=this.c
s.toString
this.ku(m,s,p)
p+=b}},
ku(a,b,c){var s,r,q,p,o,n,m,l
for(s=a.c,r=b.length;q=a.d,q<s;){p=a.a
a.d=q+1
q=J.d(p,q)
p=$.aT()
p.$flags&2&&A.c(p)
p[0]=q
q=$.b3()
if(0>=q.length)return A.a(q,0)
o=q[0]
if(o<0){o=1-o
q=a.d
if(q>=s)break
p=a.a
a.d=q+1
n=J.d(p,q)
if(c+o>r)o=r-c
for(q=b.$flags|0,m=0;m<o;++m,c=l){l=c+1
q&2&&A.c(b)
if(!(c>=0&&c<r))return A.a(b,c)
b[c]=n}}else{++o
if(c+o>r)o=r-c
o=Math.min(o,s-a.d)
for(m=0;m<o;++m,c=l){l=c+1
q=J.d(a.a,a.d++)
b.$flags&2&&A.c(b)
if(!(c>=0&&c<r))return A.a(b,c)
b[c]=q}}}}}
A.bp.prototype={
ap(){return"PsdColorMode."+this.b}}
A.iF.prototype={
jn(a){var s,r,q=this
q.as=A.u(a,!0,null,0)
q.lv()
if(q.c!==943870035)return
s=q.as.m()
q.as.az(s)
s=q.as.m()
q.at=q.as.az(s)
s=q.as.m()
q.ax=q.as.az(s)
r=q.as
q.ay=r.az(r.c-r.d)},
bW(){var s,r=this
if(r.c===943870035){s=r.as
s===$&&A.e("_input")
s=s==null}else s=!0
if(s)return!1
r.lJ()
r.lK()
r.lM()
r.ay=r.ax=r.at=r.as=null
return!0},
i6(){if(!this.bW())return null
return this.nq()},
nq(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=null,a1=a.y
if(a1!=null)return a1
a1=a.a
a1=A.a0(a0,a0,B.h,0,B.k,a.b,a0,0,4,a0,B.h,a1,!1)
a.y=a1
a1.eY(0)
s=0
while(!0){a1=a.w
a1===$&&A.e("layers")
if(!(s<a1.length))break
c$0:{r=a1[s]
a1=r.y
a1===$&&A.e("flags")
if((a1&2)!==0)break c$0
a1=r.w
a1===$&&A.e("opacity")
q=a1/255
p=r.r
o=r.cx
a1=r.a
a1.toString
n=a1
m=0
while(!0){a1=r.f
a1===$&&A.e("height")
if(!(m<a1))break
a1=r.a
a1.toString
l=a1+m
k=r.b
a1=n>=0
j=0
while(!0){i=r.e
i===$&&A.e("width")
if(!(j<i))break
i=o.a
h=i==null?a0:i.a5(j,m,a0)
if(h==null)h=new A.ad()
g=B.b.j(h.gq())
f=B.b.j(h.gu())
e=B.b.j(h.gA())
d=B.b.j(h.gv())
k.toString
if(k>=0&&k<a.a&&a1&&n<a.b){i=r.b
i.toString
c=a.y.a
b=c==null?a0:c.a5(i+j,l,a0)
if(b==null)b=new A.ad()
a.jT(B.b.j(b.gq()),B.b.j(b.gu()),B.b.j(b.gA()),B.b.j(b.gv()),g,f,e,d,p,q,b)}++j;++k}++m;++n}}++s}a1=a.y
a1.toString
return a1},
jT(a,b,c,d,e,f,g,h,i,j,k){var s,r,q,p,o,n=h/255*j
switch(i){case 1885434739:s=d
r=c
q=b
p=a
break
case 1852797549:s=h
r=g
q=f
p=e
break
case 1684632435:s=h
r=g
q=f
p=e
break
case 1684107883:p=Math.min(a,e)
q=Math.min(b,f)
r=Math.min(c,g)
s=h
break
case 1836411936:p=B.a.l(a*e,8)
q=B.a.l(b*f,8)
r=B.a.l(c*g,8)
s=h
break
case 1768188278:p=A.lj(a,e)
q=A.lj(b,f)
r=A.lj(c,g)
s=h
break
case 1818391150:p=A.ll(a,e)
q=A.ll(b,f)
r=A.ll(c,g)
s=h
break
case 1684751212:s=h
r=g
q=f
p=e
break
case 1818850405:p=Math.max(a,e)
q=Math.max(b,f)
r=Math.max(c,g)
s=h
break
case 1935897198:p=A.o9(a,e)
q=A.o9(b,f)
r=A.o9(c,g)
s=h
break
case 1684633120:p=A.lk(a,e)
q=A.lk(b,f)
r=A.lk(c,g)
s=h
break
case 1818518631:p=e+a>255?255:a+e
q=f+b>255?255:b+f
r=g+c>255?255:c+g
s=h
break
case 1818706796:s=h
r=g
q=f
p=e
break
case 1870030194:p=A.o7(a,e,d,h)
q=A.o7(b,f,d,h)
r=A.o7(c,g,d,h)
s=h
break
case 1934387572:p=A.oa(a,e)
q=A.oa(b,f)
r=A.oa(c,g)
s=h
break
case 1749838196:p=A.o5(a,e)
q=A.o5(b,f)
r=A.o5(c,g)
s=h
break
case 1984719220:p=A.ob(a,e)
q=A.ob(b,f)
r=A.ob(c,g)
s=h
break
case 1816947060:p=A.o6(a,e)
q=A.o6(b,f)
r=A.o6(c,g)
s=h
break
case 1884055924:p=A.o8(a,e)
q=A.o8(b,f)
r=A.o8(c,g)
s=h
break
case 1749903736:p=e<255-a?0:255
q=f<255-b?0:255
r=g<255-c?0:255
s=h
break
case 1684629094:p=Math.abs(e-a)
q=Math.abs(f-b)
r=Math.abs(g-c)
s=h
break
case 1936553316:p=A.o4(a,e)
q=A.o4(b,f)
r=A.o4(c,g)
s=h
break
case 1718842722:s=h
r=g
q=f
p=e
break
case 1717856630:s=h
r=g
q=f
p=e
break
case 1752524064:s=h
r=g
q=f
p=e
break
case 1935766560:s=h
r=g
q=f
p=e
break
case 1668246642:s=h
r=g
q=f
p=e
break
case 1819634976:s=h
r=g
q=f
p=e
break
default:s=h
r=g
q=f
p=e}o=1-n
k.sq(B.b.j(a*o+p*n))
k.su(B.b.j(b*o+q*n))
k.sA(B.b.j(c*o+r*n))
k.sv(B.b.j(d*o+s*n))},
lv(){var s,r,q=this,p=q.as
p===$&&A.e("_input")
q.c=p.m()
p=q.as.p()
q.d=p
if(p!==1){q.c=0
return}s=q.as.az(6)
for(r=0;r<6;++r)if(J.d(s.a,s.d+r)!==0){q.c=0
return}q.e=q.as.p()
q.b=q.as.m()
q.a=q.as.m()
q.f=q.as.p()
p=q.as.p()
if(!(p<8))return A.a(B.bQ,p)
q.r=B.bQ[p]},
lJ(){var s,r,q,p,o,n=this,m=n.at
m.d=m.b
for(m=n.z;s=n.at,s.d<s.c;){r=s.m()
q=n.at.p()
s=n.at
p=J.d(s.a,s.d++)
n.at.ak(p)
if((p&1)===0)++n.at.d
p=n.at.m()
s=n.at
o=s.am(p)
s.d=s.d+(o.c-o.d)
if((p&1)===1)++n.at.d
if(r===943868237)m.h(0,q,new A.iG())}},
lK(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.ax
h.d=h.b
s=h.m()
if((s&1)!==0)++s
r=i.ax.az(s)
h=t.k9
i.sjD(t.f0.a(A.b([],h)))
if(s>0){q=r.p()
p=$.aS()
p.$flags&2&&A.c(p)
p[0]=q
q=$.b2()
if(0>=q.length)return A.a(q,0)
o=q[0]
if(o<0)o=-o
for(q=t.N,p=t.mi,n=t.na,m=0;m<o;++m){l=new A.fv(A.H(q,p),A.b([],h),A.b([],n))
l.jo(r)
k=i.w
k===$&&A.e("layers")
B.c.C(k,l)}}m=0
while(!0){h=i.w
h===$&&A.e("layers")
if(!(m<h.length))break
h[m].nf(r,i);++m}s=i.ax.m()
j=i.ax.az(s)
if(s>0){j.p()
j.p()
j.p()
j.p()
j.p()
j.p()
j.G()}},
lM(){var s,r,q,p,o,n,m,l,k=this,j="channels",i="mergeImageChannels",h=k.ay
h.d=h.b
s=h.p()
if(s===1){h=k.b
r=k.e
r===$&&A.e(j)
q=h*r
p=new Uint16Array(q)
for(o=0;o<q;++o)p[o]=k.ay.p()}else p=null
k.sjE(t.v.a(A.b([],t.mS)))
o=0
while(!0){h=k.e
h===$&&A.e(j)
if(!(o<h))break
h=k.x
h===$&&A.e(i)
r=k.ay
r.toString
n=o===3?-1:o
n=new A.cY(n)
n.iu(r,k.a,k.b,k.f,s,p,o)
B.c.C(h,n);++o}h=k.r
r=k.f
n=k.a
m=k.b
l=k.x
l===$&&A.e(i)
k.y=A.pJ(h,r,n,m,l)},
sjD(a){this.w=t.f0.a(a)},
sjE(a){this.x=t.v.a(a)},
$iO:1}
A.iG.prototype={}
A.fv.prototype={
jo(a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=a4.m(),a3=$.V()
a3.$flags&2&&A.c(a3)
a3[0]=a2
a2=$.au()
if(0>=a2.length)return A.a(a2,0)
a1.a=a2[0]
a3[0]=a4.m()
a1.b=a2[0]
a3[0]=a4.m()
a1.c=a2[0]
a3[0]=a4.m()
a2=a2[0]
a1.d=a2
a3=a1.b
a3.toString
a1.e=a2-a3
a3=a1.c
a2=a1.a
a2.toString
a1.f=a3-a2
a1.sjF(t.v.a(A.b([],t.mS)))
s=a4.p()
for(r=0;r<s;++r){a2=a4.p()
a3=$.aS()
a3.$flags&2&&A.c(a3)
a3[0]=a2
a2=$.b2()
if(0>=a2.length)return A.a(a2,0)
q=a2[0]
a4.m()
a2=a1.as
a2===$&&A.e("channels")
B.c.C(a2,new A.cY(q))}p=a4.m()
if(p!==943868237)throw A.f(A.p("Invalid PSD layer signature: "+B.a.ee(p,16)))
a1.r=a4.m()
a1.w=a4.G()
a4.G()
a1.y=a4.G()
if(a4.G()!==0)throw A.f(A.p("Invalid PSD layer data"))
o=a4.m()
n=a4.az(o)
if(o>0){o=n.m()
if(o>0){m=n.az(o)
a2=m.d
m.m()
m.m()
m.m()
m.m()
m.G()
m.G()
if(m.c-a2===20)m.d+=2
else{m.G()
m.G()
m.m()
m.m()
m.m()
m.m()}}o=n.m()
if(o>0)new A.li().jm(n.az(o))
o=n.G()
n.ak(o)
l=4-B.a.ae(o,4)-1
if(l>0)n.d+=l
for(a2=n.c,a3=a1.ay,k=a1.cy,j=t.t,i=t.dM;n.d<a2;){p=n.m()
if(p!==943868237)throw A.f(A.p("PSD invalid signature for layer additional data: "+B.a.ee(p,16)))
h=n.ak(4)
o=n.m()
g=n.am(o)
f=n.d+(g.c-g.d)
n.d=f
if((o&1)===1)n.d=f+1
a3.h(0,h,A.tV(h,g))
if(h==="lrFX"){e=A.q(i.a(a3.k(0,"lrFX")).b,null,0)
e.p()
d=e.p()
for(c=0;c<d;++c){e.ak(4)
b=e.ak(4)
a=e.m()
if(b==="dsdw"){a0=new A.iE()
B.c.C(k,a0)
a0.a=e.m()
e.m()
e.m()
e.m()
e.m()
a0.sbU(A.b([e.p(),e.p(),e.p(),e.p(),e.p()],j))
e.ak(8)
J.d(e.a,e.d++)
J.d(e.a,e.d++)
J.d(e.a,e.d++)
a0.sbZ(A.b([e.p(),e.p(),e.p(),e.p(),e.p()],j))}else if(b==="isdw"){a0=new A.iI()
B.c.C(k,a0)
a0.a=e.m()
e.m()
e.m()
e.m()
e.m()
a0.sbU(A.b([e.p(),e.p(),e.p(),e.p(),e.p()],j))
e.ak(8)
J.d(e.a,e.d++)
J.d(e.a,e.d++)
J.d(e.a,e.d++)
a0.sbZ(A.b([e.p(),e.p(),e.p(),e.p(),e.p()],j))}else if(b==="oglw"){a0=new A.iK()
B.c.C(k,a0)
a0.a=e.m()
e.m()
e.m()
a0.sbU(A.b([e.p(),e.p(),e.p(),e.p(),e.p()],j))
e.ak(8)
J.d(e.a,e.d++)
J.d(e.a,e.d++)
if(a0.a===2)a0.sbZ(A.b([e.p(),e.p(),e.p(),e.p(),e.p()],j))}else if(b==="iglw"){a0=new A.iH()
B.c.C(k,a0)
a0.a=e.m()
e.m()
e.m()
a0.sbU(A.b([e.p(),e.p(),e.p(),e.p(),e.p()],j))
e.ak(8)
J.d(e.a,e.d++)
J.d(e.a,e.d++)
if(a0.a===2){J.d(e.a,e.d++)
a0.sbZ(A.b([e.p(),e.p(),e.p(),e.p(),e.p()],j))}}else if(b==="bevl"){a0=new A.iC()
B.c.C(k,a0)
a0.a=e.m()
e.m()
e.m()
e.m()
e.ak(8)
e.ak(8)
a0.sn_(A.b([e.p(),e.p(),e.p(),e.p(),e.p()],j))
a0.siV(A.b([e.p(),e.p(),e.p(),e.p(),e.p()],j))
J.d(e.a,e.d++)
J.d(e.a,e.d++)
J.d(e.a,e.d++)
J.d(e.a,e.d++)
J.d(e.a,e.d++)
J.d(e.a,e.d++)
if(a0.a===2){a0.snl(A.b([e.p(),e.p(),e.p(),e.p(),e.p()],j))
a0.snm(A.b([e.p(),e.p(),e.p(),e.p(),e.p()],j))}}else if(b==="sofi"){a0=new A.iL()
B.c.C(k,a0)
a0.a=e.m()
e.ak(4)
a0.sbU(A.b([e.p(),e.p(),e.p(),e.p(),e.p()],j))
J.d(e.a,e.d++)
J.d(e.a,e.d++)
a0.sbZ(A.b([e.p(),e.p(),e.p(),e.p(),e.p()],j))}else e.d+=a}}}}},
nf(a,b){var s,r,q,p,o,n=this,m=0
while(!0){s=n.as
s===$&&A.e("channels")
if(!(m<s.length))break
s=s[m]
r=n.e
r===$&&A.e("width")
q=n.f
q===$&&A.e("height")
s.ni(a,r,q,b.f);++m}r=b.r
q=b.f
p=n.e
p===$&&A.e("width")
o=n.f
o===$&&A.e("height")
n.cx=A.pJ(r,q,p,o,s)},
sjF(a){this.as=t.v.a(a)}}
A.dW.prototype={}
A.iD.prototype={
b2(a,b){var s,r,q,p=null,o=A.pI(a)
this.a=o
s=1
if(s===1){o=o.i6()
return o}for(r=p,q=0;q<s;++q){o=this.a
b=o==null?p:o.i6()
if(b==null)continue
if(r==null){b.w=B.cR
r=b}else r.bC(b)}return r}}
A.iM.prototype={}
A.dY.prototype={}
A.aN.prototype={
cv(a,b){var s=this
return new A.aN(s.a+b.a,s.b+b.b,s.c+b.c,s.d+b.d)}}
A.dX.prototype={$iO:1,
gV(){return this.b}}
A.cZ.prototype={$iO:1,
gV(){return this.f}}
A.fx.prototype={$iO:1,
gV(){return this.b}}
A.be.prototype={
sd6(a){var s=this.a,r=this.b+1
s.$flags&2&&A.c(s)
if(!(r<s.length))return A.a(s,r)
s[r]=a},
dn(){var s,r=this.e,q=this.d
if(r){s=q>>>9
if(!(s<32))return A.a(B.r,s)
return new A.dY(B.r[s],B.r[q>>>4&31],B.y[q&15])}else return new A.dY(B.y[q>>>7&15],B.y[q>>>3&15],B.ae[q&7])},
dr(){var s,r=this.e,q=this.d
if(r){s=q>>>9
if(!(s<32))return A.a(B.r,s)
return new A.aN(B.r[s],B.r[q>>>4&31],B.y[q&15],255)}else return new A.aN(B.y[q>>>7&15],B.y[q>>>3&15],B.ae[q&7],B.ae[q>>>11&7])},
dq(){var s,r=this.r,q=this.f
if(r){s=q>>>10
if(!(s<32))return A.a(B.r,s)
return new A.dY(B.r[s],B.r[q>>>5&31],B.r[q&31])}else return new A.dY(B.y[q>>>8&15],B.y[q>>>4&15],B.y[q&15])},
ds(){var s,r=this.r,q=this.f
if(r){s=q>>>10
if(!(s<32))return A.a(B.r,s)
return new A.aN(B.r[s],B.r[q>>>5&31],B.r[q&31],255)}else return new A.aN(B.y[q>>>8&15],B.y[q>>>4&15],B.y[q&15],B.ae[q>>>12&7])},
cZ(){var s=this,r=s.c?1:0,q=s.d,p=s.e?1:0,o=s.f,n=s.r?1:0
return(r|(q&16383)<<1|p<<15|(o&32767)<<16|n<<31)>>>0},
bM(){var s,r=this,q=r.a,p=r.b+1
if(!(p<q.length))return A.a(q,p)
s=q[p]
r.c=(s&1)===1
r.sd6(r.cZ())
r.d=s>>>1&16383
r.sd6(r.cZ())
r.e=(s>>>15&1)===1
r.sd6(r.cZ())
r.f=s>>>16&32767
r.sd6(r.cZ())
r.r=(s>>>31&1)===1
r.sd6(r.cZ())}}
A.iN.prototype={
b6(a){var s,r=this,q=a.length,p=q-(q>>>1&1431655765)>>>0
p=(p&858993459)+(p>>>2&858993459)
if((p+(p>>>4)>>>0&252645135)*16843009>>>0>>>24===1){s=r.kg(a)
if(s!=null){r.a=a
return r.b=s}}s=r.kt(a)
if(s!=null){r.a=a
return r.b=s}s=r.kr(a)
if(s!=null){r.a=a
return r.b=s}return null},
kt(a){var s,r,q=A.u(a,!1,null,0)
if(q.m()!==52)return null
if(q.m()!==55727696)return null
s=A.b([0,0,0,0],t.t)
r=new A.cZ(s)
q.m()
r.b=q.m()
B.c.h(s,0,q.G())
B.c.h(s,1,q.G())
B.c.h(s,2,q.G())
B.c.h(s,3,q.G())
q.m()
q.m()
r.f=q.m()
r.r=q.m()
q.m()
q.m()
q.m()
q.m()
r.Q=q.m()
return r},
kr(a){var s,r,q=A.u(a,!1,null,0)
if(q.m()!==52)return null
s=new A.dX()
s.b=q.m()
s.a=q.m()
q.m()
s.d=q.m()
q.m()
s.f=q.m()
q.m()
q.m()
q.m()
s.y=q.m()
r=q.m()
s.z=r
s.Q=q.m()
if(r!==559044176)return null
return s},
kg(a){var s,r,q,p,o,n,m=null,l=a.length,k=A.u(a,!1,m,0)
if(k.m()!==0)return m
s=new A.fx()
s.b=k.m()
s.a=k.m()
k.m()
k.m()
k.m()
k.m()
k.m()
k.m()
k.m()
r=k.m()
s.y=r
if(r===559044176)return m
q=0
p=8
if(!(l===32)){o=0
while(!0){if(!(o<10)){q=1
break}n=o<<1>>>0
if((B.a.R(64,n)&l)>>>0!==0){p=B.a.R(16,o)
q=1
break}if((B.a.R(128,n)&l)>>>0!==0){p=B.a.R(16,o)
break}++o}if(o===10)return m}if((q+1)*2===4)return m
s.b=s.a=p
return s},
aw(a){var s,r,q=this,p=q.b
if(p==null||q.a==null)return null
if(p instanceof A.fx){p=p.a
s=q.b.gV()
r=q.a
r.toString
return q.ez(p,s,r)}else if(p instanceof A.dX){p=q.a
p.toString
return q.kq(p)}else if(p instanceof A.cZ){p=q.a
p.toString
return q.ks(p)}return null},
b2(a,b){if(this.b6(a)==null)return null
return this.aw(0)},
kq(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=a.length
if(e<52||g.b==null)return f
s=g.b
s.toString
t.fF.a(s)
r=A.u(a,!1,f,0)
r.d+=52
q=s.Q
if(q<1)q=(s.d&4096)!==0?6:1
if(q!==1)return f
p=s.a
o=s.b
if(p*o*s.f/8>e-52)return f
switch(s.d&255){case 16:n=A.a0(f,f,B.h,0,B.k,o,f,0,4,f,B.h,p,!1)
for(s=n.a,s=s.gJ(s);s.B();){m=s.gK()
l=J.d(r.a,r.d++)
k=J.d(r.a,r.d++)
m.sq(k&240)
m.su((k&15)<<4)
m.sA(l&240)
m.sv((l&15)<<4)}return n
case 17:n=A.a0(f,f,B.h,0,B.k,o,f,0,4,f,B.h,p,!1)
for(s=n.a,s=s.gJ(s);s.B();){m=s.gK()
j=r.p()
i=(j&1)!==0?255:0
m.sq(j>>>8&248)
m.su(j>>>3&248)
m.sA((j&62)<<2)
m.sv(i)}return n
case 18:n=A.a0(f,f,B.h,0,B.k,o,f,0,4,f,B.h,p,!1)
for(s=n.a,s=s.gJ(s);s.B();){m=s.gK()
m.sq(J.d(r.a,r.d++))
m.su(J.d(r.a,r.d++))
m.sA(J.d(r.a,r.d++))
m.sv(J.d(r.a,r.d++))}return n
case 19:n=A.a0(f,f,B.h,0,B.k,o,f,0,3,f,B.h,p,!1)
for(s=n.a,s=s.gJ(s);s.B();){m=s.gK()
j=r.p()
m.sq(j>>>8&248)
m.su(j>>>3&252)
m.sA((j&31)<<3)}return n
case 20:n=A.a0(f,f,B.h,0,B.k,o,f,0,3,f,B.h,p,!1)
for(s=n.a,s=s.gJ(s);s.B();){m=s.gK()
j=r.p()
m.sq((j&31)<<3)
m.su(j>>>2&248)
m.sA(j>>>7&248)}return n
case 21:n=A.a0(f,f,B.h,0,B.k,o,f,0,3,f,B.h,p,!1)
for(s=n.a,s=s.gJ(s);s.B();){m=s.gK()
m.sq(J.d(r.a,r.d++))
m.su(J.d(r.a,r.d++))
m.sA(J.d(r.a,r.d++))}return n
case 22:n=A.a0(f,f,B.h,0,B.k,o,f,0,1,f,B.h,p,!1)
for(s=n.a,s=s.gJ(s);s.B();)s.gK().sq(J.d(r.a,r.d++))
return n
case 23:n=A.a0(f,f,B.h,0,B.k,o,f,0,4,f,B.h,p,!1)
for(s=n.a,s=s.gJ(s);s.B();){m=s.gK()
i=J.d(r.a,r.d++)
h=J.d(r.a,r.d++)
m.sq(h)
m.su(h)
m.sA(h)
m.sv(i)}return n
case 24:return f
case 25:return s.y===0?g.h4(p,o,r.a4()):g.ez(p,o,r.a4())}return f},
ks(a){var s,r,q,p=this
if(!(p.b instanceof A.cZ))return null
s=A.u(a,!1,null,0)
r=s.d+=52
q=t.gH.a(p.b)
s.d=r+q.Q
if(q.c[0]===0)switch(q.b){case 2:return p.h4(q.r,q.f,s.a4())
case 3:return p.ez(q.r,q.f,s.a4())}return null},
h4(c6,c7,c8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=null,b7=A.a0(b6,b6,B.h,0,B.k,c7,b6,0,3,b6,B.h,c6,!1),b8=c6/4|0,b9=b8-1,c0=J.aU(B.f.gE(c8),0,null),c1=new A.be(c0),c2=new A.be(J.aU(B.f.gE(c8),0,null)),c3=new A.be(J.aU(B.f.gE(c8),0,null)),c4=new A.be(J.aU(B.f.gE(c8),0,null)),c5=new A.be(J.aU(B.f.gE(c8),0,null))
for(s=c0.length,r=0,q=0;r<b8;++r,q+=4)for(p=0,o=0;p<b8;++p,o+=4){c1.b=A.bO(p,r)<<1>>>0
c1.bM()
n=c1.b
if(!(n<s))return A.a(c0,n)
m=c0[n]
l=c1.c?4:0
for(k=0,j=0;j<4;++j){i=(r+(j<2?-1:0)&b9)>>>0
h=(i+1&b9)>>>0
for(n=j+q,g=0;g<4;++g){f=(p+(g<2?-1:0)&b9)>>>0
e=(f+1&b9)>>>0
c2.b=A.bO(f,i)<<1>>>0
c2.bM()
c3.b=A.bO(e,i)<<1>>>0
c3.bM()
c4.b=A.bO(f,h)<<1>>>0
c4.bM()
c5.b=A.bO(e,h)<<1>>>0
c5.bM()
d=c2.dn()
if(!(k>=0&&k<16))return A.a(B.o,k)
c=B.o[k][0]
b=c3.dn()
a=B.o[k][1]
a0=c4.dn()
a1=B.o[k][2]
a2=c5.dn()
a3=B.o[k][3]
a4=c2.dq()
a5=B.o[k][0]
a6=c3.dq()
a7=B.o[k][1]
a8=c4.dq()
a9=B.o[k][2]
b0=c5.dq()
b1=B.o[k][3]
b2=B.bB[l+m&3]
b3=b2[0]
b4=b2[1]
b5=b7.a
if(b5!=null)b5.T(g+o,n,(d.a*c+b.a*a+a0.a*a1+a2.a*a3)*b3+(a4.a*a5+a6.a*a7+a8.a*a9+b0.a*b1)*b4>>>7,(d.b*c+b.b*a+a0.b*a1+a2.b*a3)*b3+(a4.b*a5+a6.b*a7+a8.b*a9+b0.b*b1)*b4>>>7,(d.c*c+b.c*a+a0.c*a1+a2.c*a3)*b3+(a4.c*a5+a6.c*a7+a8.c*a9+b0.c*b1)*b4>>>7)
m=m>>>2;++k}}}return b7},
ez(b4,b5,b6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=null,a5=A.a0(a4,a4,B.h,0,B.k,b5,a4,0,4,a4,B.h,b4,!1),a6=b4/4|0,a7=a6-1,a8=J.aU(B.f.gE(b6),0,null),a9=new A.be(a8),b0=new A.be(J.aU(B.f.gE(b6),0,null)),b1=new A.be(J.aU(B.f.gE(b6),0,null)),b2=new A.be(J.aU(B.f.gE(b6),0,null)),b3=new A.be(J.aU(B.f.gE(b6),0,null))
for(s=a8.length,r=0,q=0;r<a6;++r,q+=4)for(p=0,o=0;p<a6;++p,o+=4){a9.b=A.bO(p,r)<<1>>>0
a9.bM()
n=a9.b
if(!(n<s))return A.a(a8,n)
m=a8[n]
l=a9.c?4:0
for(k=0,j=0;j<4;++j){i=(r+(j<2?-1:0)&a7)>>>0
h=(i+1&a7)>>>0
for(n=j+q,g=0;g<4;++g){f=(p+(g<2?-1:0)&a7)>>>0
e=(f+1&a7)>>>0
b0.b=A.bO(f,i)<<1>>>0
b0.bM()
b1.b=A.bO(e,i)<<1>>>0
b1.bM()
b2.b=A.bO(f,h)<<1>>>0
b2.bM()
b3.b=A.bO(e,h)<<1>>>0
b3.bM()
d=b0.dr()
if(!(k>=0&&k<16))return A.a(B.o,k)
c=B.o[k][0]
b=b1.dr()
a=B.o[k][1]
a=new A.aN(d.a*c,d.b*c,d.c*c,d.d*c).cv(0,new A.aN(b.a*a,b.b*a,b.c*a,b.d*a))
b=b2.dr()
c=B.o[k][2]
c=a.cv(0,new A.aN(b.a*c,b.b*c,b.c*c,b.d*c))
b=b3.dr()
a=B.o[k][3]
a0=c.cv(0,new A.aN(b.a*a,b.b*a,b.c*a,b.d*a))
a=b0.ds()
b=B.o[k][0]
c=b1.ds()
d=B.o[k][1]
d=new A.aN(a.a*b,a.b*b,a.c*b,a.d*b).cv(0,new A.aN(c.a*d,c.b*d,c.c*d,c.d*d))
c=b2.ds()
b=B.o[k][2]
b=d.cv(0,new A.aN(c.a*b,c.b*b,c.c*b,c.d*b))
c=b3.ds()
d=B.o[k][3]
a1=b.cv(0,new A.aN(c.a*d,c.b*d,c.c*d,c.d*d))
a2=B.bB[l+m&3]
d=a2[0]
c=a2[1]
b=a2[2]
a=a2[3]
a3=a5.a
if(a3!=null)a3.aC(g+o,n,a0.a*d+a1.a*c>>>7,a0.b*d+a1.b*c>>>7,a0.c*d+a1.c*c>>>7,a0.d*b+a1.d*a>>>7)
m=m>>>2;++k}}}return a5}}
A.fE.prototype={
cr(a){var s,r,q=this
if(a.c-a.d<18)return
q.a=a.G()
q.b=a.G()
s=a.G()
if(s<12){if(!(s>=0))return A.a(B.bF,s)
r=B.bF[s]}else r=B.ar
q.c=r
a.p()
q.e=a.p()
q.f=a.G()
a.p()
a.p()
q.x=a.p()
q.y=a.p()
q.z=a.G()
q.Q=a.G()},
il(){var s=this,r=s.z
if(r!==8&&r!==16&&r!==24&&r!==32)return!1
r=s.c
if(r===B.J||r===B.K){if(s.e>256||s.b!==1)return!1
r=s.f
if(r!==16&&r!==24&&r!==32)return!1}else if(s.b===1)return!1
return!0},
$iO:1}
A.aO.prototype={
ap(){return"TgaImageType."+this.b}}
A.iZ.prototype={
b2(a,b){if(this.b6(a)==null)return null
return this.aw(0)},
b6(a){var s,r,q,p,o=this
o.a=new A.fE(B.ar)
s=A.u(a,!1,null,0)
o.b=s
r=s.az(18)
o.a.cr(r)
if(!o.a.il())return null
s=o.b
q=o.a
s.d+=q.a
p=q.c
if(p===B.J||p===B.K)q.as=s.az(q.e*B.a.l(q.f,3)).a4()
s=o.a
s.ax=o.b.d
return s},
aw(a){var s=this,r=s.a
if(r==null)return null
r=r.c
if(r===B.c8)return s.h3()
else if(r===B.c7||r===B.K)return s.kv()
else if(r===B.J)return s.h3()
return null},
h_(a,b){var s,r,q,p,o,n,m,l=this,k=A.u(a,!1,null,0),j=l.a.f
if(j===16){j=l.b
j===$&&A.e("input")
s=j.p()
r=s>>>7&248
q=s>>>2&248
p=(s&31)<<3
o=(s&32768)!==0?0:255
for(n=0;n<l.a.e;++n){b.bK(n,r)
b.bJ(n,q)
b.bI(n,p)
b.bH(n,o)}}else{m=j===32
for(n=0;n<l.a.e;++n){p=J.d(k.a,k.d++)
q=J.d(k.a,k.d++)
r=J.d(k.a,k.d++)
o=m?J.d(k.a,k.d++):255
b.bK(n,r)
b.bJ(n,q)
b.bI(n,p)
b.bH(n,o)}}},
kv(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,c=e.a,b=c.z,a=b===16,a0=a||b===32,a1=c.x,a2=c.y,a3=a0?4:3
c=c.c
s=A.a0(d,d,B.h,0,B.k,a2,d,0,a3,d,B.h,a1,c===B.J||c===B.K)
c=s.a
if((c==null?d:c.gS())!=null){c=e.a.as
c.toString
a1=s.a
a1=a1==null?d:a1.gS()
a1.toString
e.h_(c,a1)}r=s.ga6()
q=s.gV()-1
c=b===8
p=0
while(!0){a1=e.b
a1===$&&A.e("input")
a2=a1.d
if(!(a2<a1.c&&q>=0))break
a3=a1.a
a1.d=a2+1
o=J.d(a3,a2)
n=(o&127)+1
m=0
if((o&128)!==0)if(c){a1=e.b
l=J.d(a1.a,a1.d++)
for(k=0;k<n;++k){j=p+1
a1=s.a
if(a1!=null)a1.aU(p,q,l)
if(j>=r){--q
if(q<0){p=m
break}p=0}else p=j}}else{a1=e.b
if(a){i=a1.p()
l=i>>>7&248
h=i>>>2&248
g=(i&31)<<3
f=(i&32768)!==0?0:255
for(k=0;k<n;++k){j=p+1
a1=s.a
if(a1!=null)a1.aC(p,q,l,h,g,f)
if(j>=r){--q
if(q<0){p=m
break}p=0}else p=j}}else{g=J.d(a1.a,a1.d++)
a1=e.b
h=J.d(a1.a,a1.d++)
a1=e.b
l=J.d(a1.a,a1.d++)
if(a0){a1=e.b
f=J.d(a1.a,a1.d++)}else f=255
for(k=0;k<n;++k){j=p+1
a1=s.a
if(a1!=null)a1.aC(p,q,l,h,g,f)
if(j>=r){--q
if(q<0){p=m
break}p=0}else p=j}}}else if(c)for(k=0;k<n;++k){a1=e.b
l=J.d(a1.a,a1.d++)
j=p+1
a1=s.a
if(a1!=null)a1.aU(p,q,l)
if(j>=r){--q
if(q<0){p=m
break}p=0}else p=j}else if(a)for(k=0;k<n;++k){i=e.b.p()
f=(i&32768)!==0?0:255
j=p+1
a1=s.a
if(a1!=null)a1.aC(p,q,i>>>7&248,i>>>2&248,(i&31)<<3,f)
a1=e.b
if(a1.d>=a1.c){p=j
break}if(j>=r){--q
if(q<0){p=m
break}p=0}else p=j}else for(k=0;k<n;++k){a1=e.b
g=J.d(a1.a,a1.d++)
a1=e.b
h=J.d(a1.a,a1.d++)
a1=e.b
l=J.d(a1.a,a1.d++)
if(a0){a1=e.b
f=J.d(a1.a,a1.d++)}else f=255
j=p+1
a1=s.a
if(a1!=null)a1.aC(p,q,l,h,g,f)
if(j>=r){--q
if(q<0){p=m
break}p=0}else p=j}if(p>=r){--q
if(q<0)break
p=0}}return s},
h3(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=null,b=d.b
b===$&&A.e("input")
s=d.a
b.d=s.ax
r=s.z
b=r===16
q=!0
if(!b)if(r!==32){p=s.c
if(p===B.J||p===B.K){p=s.f
p=p===16||p===32}else p=!1
q=p}p=s.x
o=s.y
n=q?4:3
s=s.c
m=A.a0(c,c,B.h,0,B.k,o,c,0,n,c,B.h,p,s===B.J||s===B.K)
s=d.a
p=s.c
if(p===B.J||p===B.K){s=s.as
s.toString
p=m.a
p=p==null?c:p.gS()
p.toString
d.h_(s,p)}if(r===8)for(l=m.gV()-1;l>=0;--l){k=0
while(!0){b=m.a
b=b==null?c:b.a
if(!(k<(b==null?0:b)))break
b=d.b
j=J.d(b.a,b.d++)
b=m.a
if(b!=null)b.aU(k,l,j);++k}}else if(b)for(l=m.gV()-1;l>=0;--l){k=0
while(!0){b=m.a
b=b==null?c:b.a
if(!(k<(b==null?0:b)))break
i=d.b.p()
h=(i&32768)!==0?0:255
b=m.a
if(b!=null)b.aC(k,l,i>>>7&248,i>>>2&248,(i&31)<<3,h);++k}}else for(l=m.gV()-1;l>=0;--l){k=0
while(!0){b=m.a
b=b==null?c:b.a
if(!(k<(b==null?0:b)))break
b=d.b
g=J.d(b.a,b.d++)
b=d.b
f=J.d(b.a,b.d++)
b=d.b
e=J.d(b.a,b.d++)
if(q){b=d.b
h=J.d(b.a,b.d++)}else h=255
b=m.a
if(b!=null)b.aC(k,l,e,f,g,h);++k}}return m}}
A.ly.prototype={
aj(a){var s,r,q,p,o,n=this
if(a===0)return 0
if(n.c===0){n.c=8
n.b=n.a.G()}for(s=n.a,r=0;q=n.c,a>q;){p=B.a.a0(r,q)
o=n.b
if(!(q>=0&&q<9))return A.a(B.B,q)
r=p+(o&B.B[q])
a-=q
n.c=8
n.b=J.d(s.a,s.d++)}if(a>0){if(q===0){n.c=8
n.b=s.G()}s=B.a.a0(r,a)
q=n.b
p=n.c-a
q=B.a.bo(q,p)
if(!(a<9))return A.a(B.B,a)
r=s+(q&B.B[a])
n.c=p}return r}}
A.j0.prototype={
t(a){var s=this,r=s.a,q=$.oQ().k(0,r)
if(q!=null)return q.a+": "+s.b.t(0)+" "+s.c
return"<"+r+">: "+s.b.t(0)+" "+s.c},
bv(){var s,r,q,p,o=this,n=o.e
if(n!=null)return n
n=o.f
n.d=o.d
s=o.c
r=o.b
if(r!==B.e){q=r.a
if(!(q<13))return A.a(B.w,q)
q=B.w[q]}else q=0
p=n.az(s*q)
switch(r.a){case 1:return o.e=new A.bL(new Uint8Array(A.C(p.az(s).a4())))
case 2:return o.e=new A.cB(s===0?"":p.ak(s-1))
case 7:return o.e=new A.bL(new Uint8Array(A.C(p.az(s).a4())))
case 3:return o.e=A.pm(p,s)
case 4:return o.e=A.ph(p,s)
case 5:return o.e=A.pi(p,s)
case 11:return o.e=A.pn(p,s)
case 12:return o.e=A.pg(p,s)
case 6:return o.e=new A.c7(new Int8Array(A.C(J.nB(B.f.gE(p.a4()),0,s))))
case 8:return o.e=A.pl(p,s)
case 9:return o.e=A.pj(p,s)
case 10:return o.e=A.pk(p,s)
case 0:return null}}}
A.lz.prototype={
mE(a,b,c,d){var s,r,q,p=this
p.r=b
p.x=p.w=0
s=B.a.Y(p.a+7,8)
for(r=0,q=0;q<d;++q){p.ex(a,r,c)
r+=s}},
ex(a,b,c){var s,r,q,p,o,n,m,l,k=this
k.d=0
for(s=k.a,r=!0;c<s;){for(;r;){q=k.c2(10)
if(!(q<1024))return A.a(B.ak,q)
p=B.ak[q]
o=B.a.l(p,1)&15
if(o===12){q=(q<<2&12|k.b7(2))>>>0
if(!(q<16))return A.a(B.I,q)
p=B.I[q]
n=B.a.l(p,1)
c+=B.a.l(p,4)&4095
k.aM(4-(n&7))}else if(o===0)throw A.f(A.p("TIFFFaxDecoder0"))
else if(o===15)throw A.f(A.p("TIFFFaxDecoder1"))
else{c+=B.a.l(p,5)&2047
k.aM(10-o)
if((p&1)===0){B.c.h(k.f,k.d++,c)
r=!1}}}if(c===s){if(k.z===2)if(k.w!==0){s=k.x
s.toString
k.x=s+1
k.w=0}break}for(;!r;){q=k.b7(4)
if(!(q<16))return A.a(B.ah,q)
p=B.ah[q]
m=p>>>5&2047
l=!0
if(m===100){q=k.c2(9)
if(!(q<512))return A.a(B.aq,q)
p=B.aq[q]
o=B.a.l(p,1)&15
m=B.a.l(p,5)&2047
if(o===12){k.aM(5)
q=k.b7(4)
if(!(q<16))return A.a(B.I,q)
p=B.I[q]
n=B.a.l(p,1)
m=B.a.l(p,4)&4095
k.bg(a,b,c,m)
c+=m
k.aM(4-(n&7))}else if(o===15)throw A.f(A.p("TIFFFaxDecoder2"))
else{k.bg(a,b,c,m)
c+=m
k.aM(9-o)
if((p&1)===0){B.c.h(k.f,k.d++,c)
r=l}}}else{if(m===200){q=k.b7(2)
if(!(q<4))return A.a(B.aa,q)
p=B.aa[q]
m=p>>>5&2047
k.bg(a,b,c,m)
c+=m
k.aM(2-(p>>>1&15))
B.c.h(k.f,k.d++,c)}else{k.bg(a,b,c,m)
c+=m
k.aM(4-(p>>>1&15))
B.c.h(k.f,k.d++,c)}r=l}}if(c===s){if(k.z===2)if(k.w!==0){s=k.x
s.toString
k.x=s+1
k.w=0}break}}B.c.h(k.f,k.d++,c)},
mF(a1,a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this
a0.r=a2
a0.z=3
a0.x=a0.w=0
s=a0.a
r=B.a.Y(s+7,8)
q=A.a1(2,null,!1,t.x)
a0.at=a5&1
a0.as=a5>>>2&1
if(a0.hv()!==1)throw A.f(A.p("TIFFFaxDecoder3"))
a0.ex(a1,0,a3)
for(p=r,o=1;o<a4;++o){if(a0.hv()===0){n=a0.e
a0.sfk(a0.f)
a0.sf0(n)
a0.y=0
m=a3
l=-1
k=!0
j=0
while(!0){m.toString
if(!(m<s))break
a0.he(l,k,q)
i=q[0]
h=q[1]
g=a0.b7(7)
if(!(g<128))return A.a(B.an,g)
g=B.an[g]&255
f=g>>>3&15
e=g&7
if(f===0){if(!k){h.toString
a0.bg(a1,p,m,h-m)}a0.aM(7-e)
m=h
l=m}else if(f===1){a0.aM(7-e)
d=j+1
c=d+1
if(k){m+=a0.dI()
B.c.h(a0.f,j,m)
b=a0.dH()
a0.bg(a1,p,m,b)
m+=b
B.c.h(a0.f,d,m)}else{b=a0.dH()
a0.bg(a1,p,m,b)
m+=b
B.c.h(a0.f,j,m)
m+=a0.dI()
B.c.h(a0.f,d,m)}j=c
l=m}else{if(f<=8){i.toString
a=i+(f-5)
d=j+1
B.c.h(a0.f,j,a)
k=!k
if(k)a0.bg(a1,p,m,a-m)
a0.aM(7-e)}else throw A.f(A.p("TIFFFaxDecoder4"))
m=a
j=d
l=m}}B.c.h(a0.f,j,m)
a0.d=j+1}else a0.ex(a1,p,a3)
p+=r}},
mJ(a5,a6,a7,a8,a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this
a4.r=a6
a4.z=4
a4.x=a4.w=0
s=a4.a
r=B.a.Y(s+7,8)
q=A.a1(2,null,!1,t.x)
p=a4.f
a4.d=0
a4.d=1
B.c.h(p,0,s)
B.c.h(p,a4.d++,s)
for(o=0,n=0;n<a8;++n){m=a4.e
a4.sfk(a4.f)
a4.sf0(m)
a4.y=0
l=a7
k=-1
j=!0
i=0
while(!0){l.toString
if(!(l<s))break
a4.he(k,j,q)
h=q[0]
g=q[1]
f=a4.b7(7)
if(!(f<128))return A.a(B.an,f)
f=B.an[f]&255
e=f>>>3&15
d=f&7
if(e===0){if(!j){g.toString
a4.bg(a5,o,l,g-l)}a4.aM(7-d)
l=g
k=l}else if(e===1){a4.aM(7-d)
c=i+1
b=c+1
if(j){l+=a4.dI()
B.c.h(m,i,l)
a=a4.dH()
a4.bg(a5,o,l,a)
l+=a
B.c.h(m,c,l)}else{a=a4.dH()
a4.bg(a5,o,l,a)
l+=a
B.c.h(m,i,l)
l+=a4.dI()
B.c.h(m,c,l)}i=b
k=l}else if(e<=8){h.toString
a0=h+(e-5)
c=i+1
B.c.h(m,i,a0)
j=!j
if(j)a4.bg(a5,o,l,a0-l)
a4.aM(7-d)
l=a0
i=c
k=l}else if(e===11){if(a4.b7(3)!==7)throw A.f(A.p("TIFFFaxDecoder5"))
for(a1=0,a2=!1;!a2;j=a3){for(;a4.b7(1)!==1;)++a1
if(a1>5){a1-=6
if(!j&&a1>0){c=i+1
B.c.h(m,i,l)
i=c}l+=a1
if(a1>0)j=!0
a3=a4.b7(1)===0
if(a3){if(!j){c=i+1
B.c.h(m,i,l)
i=c}}else if(j){c=i+1
B.c.h(m,i,l)
i=c}j=a3
a2=!0}a3=a1===5
if(a3){if(!j){c=i+1
B.c.h(m,i,l)
i=c}l+=a1}else{l+=a1
c=i+1
B.c.h(m,i,l)
a4.bg(a5,o,l,1);++l
i=c}}}else throw A.f(A.p("TIFFFaxDecoder5 "+e))}B.c.h(m,i,l)
a4.d=i+1
o+=r}},
dI(){var s,r,q,p,o,n,m=this
for(s=0,r=!0;r;){q=m.c2(10)
if(!(q<1024))return A.a(B.ak,q)
p=B.ak[q]
o=B.a.l(p,1)&15
if(o===12){q=(q<<2&12|m.b7(2))>>>0
if(!(q<16))return A.a(B.I,q)
p=B.I[q]
n=B.a.l(p,1)
s+=B.a.l(p,4)&4095
m.aM(4-(n&7))}else if(o===0)throw A.f(A.p("TIFFFaxDecoder0"))
else if(o===15)throw A.f(A.p("TIFFFaxDecoder1"))
else{s+=B.a.l(p,5)&2047
m.aM(10-o)
if((p&1)===0)r=!1}}return s},
dH(){var s,r,q,p,o,n,m,l=this
for(s=0,r=!1;!r;){q=l.b7(4)
if(!(q<16))return A.a(B.ah,q)
p=B.ah[q]
o=p>>>5&2047
if(o===100){q=l.c2(9)
if(!(q<512))return A.a(B.aq,q)
p=B.aq[q]
n=B.a.l(p,1)&15
m=B.a.l(p,5)
if(n===12){l.aM(5)
q=l.b7(4)
if(!(q<16))return A.a(B.I,q)
p=B.I[q]
m=B.a.l(p,1)
s+=B.a.l(p,4)&4095
l.aM(4-(m&7))}else if(n===15)throw A.f(A.p("TIFFFaxDecoder2"))
else{s+=m&2047
l.aM(9-n)
if((p&1)===0)r=!0}}else{if(o===200){q=l.b7(2)
if(!(q<4))return A.a(B.aa,q)
p=B.aa[q]
s+=p>>>5&2047
l.aM(2-(p>>>1&15))}else{s+=o
l.aM(4-(p>>>1&15))}r=!0}}return s},
hv(){var s,r,q=this,p="TIFFFaxDecoder8",o=q.as
if(o===0){if(q.c2(12)!==1)throw A.f(A.p("TIFFFaxDecoder6"))}else if(o===1){o=q.w
o.toString
s=8-o
if(q.c2(s)!==0)throw A.f(A.p(p))
if(s<4)if(q.c2(8)!==0)throw A.f(A.p(p))
for(;r=q.c2(8),r!==1;)if(r!==0)throw A.f(A.p(p))}if(q.at===0)return 1
else return q.b7(1)},
he(a,b,c){var s,r,q,p,o,n,m=this
t.dW.a(c)
s=m.e
r=m.d
q=m.y
p=q>0?q-1:0
p=b?(p&4294967294)>>>0:(p|1)>>>0
for(q=s.length,o=p;o<r;o+=2){if(!(o<q))return A.a(s,o)
n=s[o]
n.toString
a.toString
if(n>a){m.y=o
B.c.h(c,0,n)
break}}n=o+1
if(n<r){if(!(n<q))return A.a(s,n)
B.c.h(c,1,s[n])}},
bg(a,b,c,d){var s,r,q,p,o,n=8*b+A.r(c),m=n+d,l=B.a.l(n,3),k=n&7
if(k>0){s=B.a.a0(1,7-k)
r=J.d(a.a,a.d+l)
while(!0){if(!(s>0&&n<m))break
r=(r|s)>>>0
s=s>>>1;++n}a.h(0,l,r)}l=B.a.l(n,3)
for(q=m-7;n<q;l=p){p=l+1
J.D(a.a,a.d+l,255)
n+=8}for(;n<m;){l=B.a.l(n,3)
q=J.d(a.a,a.d+l)
o=B.a.a0(1,7-(n&7))
J.D(a.a,a.d+l,(q|o)>>>0);++n}},
c2(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.r
e===$&&A.e("data")
s=e.d
r=e.c-s-1
q=f.x
p=f.c
o=0
n=0
if(p===1){q.toString
m=J.d(e.a,s+q)
if(!(q===r)){e=q+1
s=f.r
p=s.a
s=s.d
if(e===r)o=J.d(p,s+e)
else{o=J.d(p,s+e)
e=f.r
n=J.d(e.a,e.d+(q+2))}}}else if(p===2){q.toString
m=B.X[J.d(e.a,s+q)&255]
if(!(q===r)){e=q+1
s=f.r
p=s.a
s=s.d
if(e===r)o=B.X[J.d(p,s+e)&255]
else{o=B.X[J.d(p,s+e)&255]
e=f.r
n=B.X[J.d(e.a,e.d+(q+2))&255]}}}else throw A.f(A.p("TIFFFaxDecoder7"))
e=f.w
e.toString
l=8-e
k=a-l
if(k>8){j=k-8
i=8}else{i=k
j=0}e=f.x
e.toString
e=f.x=e+1
if(!(l>=0&&l<9))return A.a(B.B,l)
h=B.a.a0(m&B.B[l],k)
if(!(i>=0))return A.a(B.Y,i)
g=B.a.a3(o&B.Y[i],8-i)
if(j!==0){g=B.a.a0(g,j)
if(!(j<9))return A.a(B.Y,j)
g|=B.a.a3(n&B.Y[j],8-j)
f.x=e+1
f.w=j}else if(i===8){f.w=0
f.x=e+1}else f.w=i
return(h|g)>>>0},
b7(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.r
h===$&&A.e("data")
s=h.d
r=h.c-s-1
q=i.x
p=i.c
o=0
if(p===1){q.toString
n=J.d(h.a,s+q)
if(!(q===r)){h=i.r
o=J.d(h.a,h.d+(q+1))}}else if(p===2){q.toString
n=B.X[J.d(h.a,s+q)&255]
if(!(q===r)){h=i.r
o=B.X[J.d(h.a,h.d+(q+1))&255]}}else throw A.f(A.p("TIFFFaxDecoder7"))
h=i.w
h.toString
m=8-h
l=a-m
k=m-a
if(k>=0){if(!(m>=0&&m<9))return A.a(B.B,m)
j=B.a.a3(n&B.B[m],k)
h+=a
i.w=h
if(h===8){i.w=0
h=i.x
h.toString
i.x=h+1}}else{if(!(m>=0&&m<9))return A.a(B.B,m)
j=B.a.a0(n&B.B[m],-k)
if(!(l>=0&&l<9))return A.a(B.Y,l)
j=(j|B.a.a3(o&B.Y[l],8-l))>>>0
h=i.x
h.toString
i.x=h+1
i.w=l}return j},
aM(a){var s,r=this,q=r.w
q.toString
s=q-a
if(s<0){q=r.x
q.toString
r.x=q-1
r.w=8+s}else r.w=s},
sfk(a){this.e=t.k.a(a)},
sf0(a){this.f=t.k.a(a)}}
A.j1.prototype={
js(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=null,a=A.q(a1,b,0),a0=a1.p()
for(s=c.a,r=0;r<a0;++r){q=a1.p()
p=a1.p()
if(!(p<13))return A.a(B.ap,p)
o=B.ap[p]
n=B.w[p]
m=a1.m()
if(m*n>4)l=a1.m()
else{l=a1.d
a1.d=l+4}k=new A.j0(q,o,m,l,a)
s.h(0,q,k)
if(q===256){j=k.bv()
j=j==null?b:j.j(0)
c.b=j==null?0:j}else if(q===257){j=k.bv()
j=j==null?b:j.j(0)
c.c=j==null?0:j}else if(q===262){i=k.bv()
h=i==null?b:i.j(0)
if(h==null)h=17
if(h<17){if(!(h>=0))return A.a(B.bD,h)
c.d=B.bD[h]}else c.d=B.aM}else if(q===259){j=k.bv()
j=j==null?b:j.j(0)
c.e=j==null?0:j}else if(q===258){j=k.bv()
j=j==null?b:j.j(0)
c.f=j==null?0:j}else if(q===277){j=k.bv()
j=j==null?b:j.j(0)
c.r=j==null?0:j}else if(q===317){j=k.bv()
j=j==null?b:j.j(0)
c.z=j==null?0:j}else if(q===339){j=k.bv()
i=j==null?b:j.j(0)
if(i==null)i=0
if(!(i>=0&&i<4))return A.a(B.bK,i)
c.w=B.bK[i]}else if(q===320){i=k.bv()
if(i!=null){c.smy(J.rL(B.f.gE(i.bE())))
c.id=0
j=c.go.length/3|0
c.k1=j
c.k2=j*2}}}g=c.go
j=g!=null
if(j&&c.d===B.aN)c.r=1
if(c.b===0||c.c===0)return
if(j&&c.f===8){f=g.length
for(j=g.$flags|0,r=0;r<f;++r){e=g[r]
j&2&&A.c(g)
g[r]=e>>>8}}if(c.d===B.aL)c.y=!0
if(s.a_(324)){c.ax=c.cF(322)
c.ay=c.cF(323)
c.siE(c.dP(324))
c.siD(c.dP(325))}else{c.ax=c.dO(322,c.b)
if(!s.a_(278))c.ay=c.dO(323,c.c)
else{d=c.cF(278)
if(d===-1)c.ay=c.c
else c.ay=d}c.siE(c.dP(273))
c.siD(c.dP(279))}j=c.b
e=c.ax
c.cx=B.a.aR(j+e-1,e)
e=c.c
j=c.ay
c.cy=B.a.aR(e+j-1,j)
c.dx=c.dO(266,1)
c.dy=c.cF(292)
c.fr=c.cF(293)
c.cF(338)
switch(c.d.a){case 0:case 1:s=c.f
if(s===1&&c.r===1)c.x=B.aK
else if(s===4&&c.r===1)c.x=B.jT
else if(B.a.ae(s,8)===0){s=c.r
if(s===1)c.x=B.jU
else if(s===2)c.x=B.jV
else c.x=B.as}break
case 2:if(B.a.ae(c.f,8)===0){s=c.r
if(s===3)c.x=B.ca
else if(s===4)c.x=B.jX
else c.x=B.as}break
case 3:s=!1
if(c.r===1)if(c.go!=null){s=c.f
s=s===4||s===8||s===16}if(s)c.x=B.jW
break
case 4:if(c.f===1&&c.r===1)c.x=B.aK
break
case 6:if(c.e===7&&c.f===8&&c.r===3)c.x=B.ca
else{if(s.a_(530)){i=s.k(0,530).bv()
c.Q=i.j(0)
s=c.as=i.al(0,1)}else s=c.as=c.Q=2
j=c.Q
j===$&&A.e("chromaSubH")
if(j*s===1)c.x=B.as
else if(c.f===8&&c.r===3)c.x=B.jY}break
default:if(B.a.ae(c.f,8)===0)c.x=B.as
break}},
bk(a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=null,a0=b.w,a1=a0===B.a6,a2=a0===B.i
a0=b.f
if(a0===1)s=B.A
else if(a0===2)s=B.D
else{if(a0===4)a0=B.E
else if(a1&&a0===16)a0=B.G
else if(a1&&a0===32)a0=B.M
else if(a1&&a0===64)a0=B.R
else if(a2&&a0===8)a0=B.S
else if(a2&&a0===16)a0=B.T
else if(a2&&a0===32)a0=B.U
else if(a0===16)a0=B.n
else a0=a0===32?B.N:B.h
s=a0}r=b.go!=null&&b.d===B.aN
q=r?3:b.r
a0=b.b
p=A.a0(a,a,s,0,B.k,b.c,a,0,q,a,s,a0,r)
if(r){a0=p.a
a0=a0==null?a:a0.gS()
a0.toString
o=b.go
n=o.length
m=n/3|0
l=b.id
l===$&&A.e("colorMapRed")
k=b.k1
k===$&&A.e("colorMapGreen")
j=b.k2
j===$&&A.e("colorMapBlue")
for(i=j,h=k,g=l,f=0;f<m;++f,++g,++h,++i){if(i>=n)break
if(!(g<n))return A.a(o,g)
l=o[g]
if(!(h<n))return A.a(o,h)
a0.bn(f,l,o[h],o[i])}}e=0
d=0
while(!0){a0=b.cy
a0===$&&A.e("tilesY")
if(!(e<a0))break
c=0
while(!0){a0=b.cx
a0===$&&A.e("tilesX")
if(!(c<a0))break
b.kw(a3,p,c,e);++c;++d}++e}return p},
kw(b2,b3,b4,b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=this,b1=null
if(b0.x===B.aK){b0.kj(b2,b3,b4,b5)
return}p=b0.cx
p===$&&A.e("tilesX")
o=b5*p+b4
p=b0.ch
if(!(o>=0&&o<p.length))return A.a(p,o)
b2.d=p[o]
p=b0.ax
n=b4*p
m=b0.ay
l=b5*m
k=b0.CW
if(!(o<k.length))return A.a(k,o)
s=k[o]
j=p*m*b0.r
p=b0.f
m=p===16
if(m)j*=2
else if(p===32)j*=4
r=null
if(p===8||m||p===32||p===64){p=b0.e
if(p===1)r=b2
else if(p===5){r=A.u(new Uint8Array(j),!1,b1,0)
q=A.py()
try{q.i4(A.q(b2,s,0),r.a)}catch(i){}if(b0.z===2)for(h=0;h<b0.ay;++h){g=b0.r
p=b0.ax
f=g*(h*p+1)
e=p*g
for(;g<e;++g){p=r
m=J.d(p.a,p.d+f)
k=r
d=b0.r
d=J.d(k.a,k.d+(f-d))
J.D(p.a,p.d+f,m+d);++f}}}else if(p===32773){r=A.u(new Uint8Array(j),!1,b1,0)
b0.h2(b2,j,r.a)}else if(p===32946)r=A.u(B.L.ck(b2.dk(0,0,s)),!1,b1,0)
else if(p===8)r=A.u(B.L.ck(b2.dk(0,0,s)),!1,b1,0)
else if(p===6){b0.l2(new A.eZ().bk(t.D.a(b2.dk(0,0,s))),b3,n,l,b0.ax,b0.ay)
return}else throw A.f(A.p("Unsupported Compression Type: "+p))
for(c=l,b=0;b<b0.ay;++b,++c)for(a=n,a0=0;a0<b0.ax;++a0,++a){p=r
if(p.d>=p.c)break
p=b0.r
if(p===1){p=b0.w
if(p===B.a6){p=b0.f
if(p===32){p=r.m()
m=$.V()
m.$flags&2&&A.c(m)
m[0]=p
p=$.ct()
if(0>=p.length)return A.a(p,0)
a1=p[0]}else if(p===64)a1=r.eb()
else if(p===16){p=r.p()
m=$.Y
m=m!=null?m:A.a6()
if(!(p<m.length))return A.a(m,p)
a1=m[p]}else a1=0
if(a<b0.b&&c<b0.c){p=b3.a
if(p!=null)p.aU(a,c,a1)}}else{m=b0.f
if(m===8)if(p===B.i){p=r
p=J.d(p.a,p.d++)
m=$.aT()
m.$flags&2&&A.c(m)
m[0]=p
p=$.b3()
if(0>=p.length)return A.a(p,0)
a1=p[0]}else{p=r
a1=J.d(p.a,p.d++)}else if(m===16)if(p===B.i){p=r.p()
m=$.aS()
m.$flags&2&&A.c(m)
m[0]=p
p=$.b2()
if(0>=p.length)return A.a(p,0)
a1=p[0]}else a1=r.p()
else if(m===32)if(p===B.i){p=r.m()
m=$.V()
m.$flags&2&&A.c(m)
m[0]=p
p=$.au()
if(0>=p.length)return A.a(p,0)
a1=p[0]}else a1=r.m()
else a1=0
if(b0.d===B.aL){p=b3.a
a2=p==null?b1:p.gF()
a1=(a2==null?0:a2)-a1}if(a<b0.b&&c<b0.c){p=b3.a
if(p!=null)p.aU(a,c,a1)}}}else if(p===2){p=b0.f
if(p===8){if(b0.w===B.i){p=r
p=J.d(p.a,p.d++)
m=$.aT()
m.$flags&2&&A.c(m)
m[0]=p
p=$.b3()
if(0>=p.length)return A.a(p,0)
a3=p[0]}else{p=r
a3=J.d(p.a,p.d++)}if(b0.w===B.i){p=r
p=J.d(p.a,p.d++)
m=$.aT()
m.$flags&2&&A.c(m)
m[0]=p
p=$.b3()
if(0>=p.length)return A.a(p,0)
a4=p[0]}else{p=r
a4=J.d(p.a,p.d++)}}else if(p===16){if(b0.w===B.i){p=r.p()
m=$.aS()
m.$flags&2&&A.c(m)
m[0]=p
p=$.b2()
if(0>=p.length)return A.a(p,0)
a3=p[0]}else a3=r.p()
if(b0.w===B.i){p=r.p()
m=$.aS()
m.$flags&2&&A.c(m)
m[0]=p
p=$.b2()
if(0>=p.length)return A.a(p,0)
a4=p[0]}else a4=r.p()}else if(p===32){if(b0.w===B.i){p=r.m()
m=$.V()
m.$flags&2&&A.c(m)
m[0]=p
p=$.au()
if(0>=p.length)return A.a(p,0)
a3=p[0]}else a3=r.m()
if(b0.w===B.i){p=r.m()
m=$.V()
m.$flags&2&&A.c(m)
m[0]=p
p=$.au()
if(0>=p.length)return A.a(p,0)
a4=p[0]}else a4=r.m()}else{a3=0
a4=0}if(a<b0.b&&c<b0.c){p=b3.a
if(p!=null)p.T(a,c,a3,a4,0)}}else if(p===3){p=b0.w
if(p===B.a6){p=b0.f
if(p===32){p=r.m()
m=$.V()
m.$flags&2&&A.c(m)
m[0]=p
p=$.ct()
if(0>=p.length)return A.a(p,0)
a5=p[0]
m[0]=r.m()
a6=p[0]
m[0]=r.m()
a7=p[0]}else{a6=0
a7=0
if(p===64)a5=r.eb()
else if(p===16){p=r.p()
m=$.Y
m=m!=null?m:A.a6()
if(!(p<m.length))return A.a(m,p)
a5=m[p]
p=r.p()
m=$.Y
m=m!=null?m:A.a6()
if(!(p<m.length))return A.a(m,p)
a6=m[p]
p=r.p()
m=$.Y
m=m!=null?m:A.a6()
if(!(p<m.length))return A.a(m,p)
a7=m[p]}else a5=0}if(a<b0.b&&c<b0.c){p=b3.a
if(p!=null)p.T(a,c,a5,a6,a7)}}else{m=b0.f
if(m===8){if(p===B.i){p=r
p=J.d(p.a,p.d++)
m=$.aT()
m.$flags&2&&A.c(m)
m[0]=p
p=$.b3()
if(0>=p.length)return A.a(p,0)
a5=p[0]}else{p=r
a5=J.d(p.a,p.d++)}if(b0.w===B.i){p=r
p=J.d(p.a,p.d++)
m=$.aT()
m.$flags&2&&A.c(m)
m[0]=p
p=$.b3()
if(0>=p.length)return A.a(p,0)
a6=p[0]}else{p=r
a6=J.d(p.a,p.d++)}if(b0.w===B.i){p=r
p=J.d(p.a,p.d++)
m=$.aT()
m.$flags&2&&A.c(m)
m[0]=p
p=$.b3()
if(0>=p.length)return A.a(p,0)
a7=p[0]}else{p=r
a7=J.d(p.a,p.d++)}}else if(m===16){if(p===B.i){p=r.p()
m=$.aS()
m.$flags&2&&A.c(m)
m[0]=p
p=$.b2()
if(0>=p.length)return A.a(p,0)
a5=p[0]}else a5=r.p()
if(b0.w===B.i){p=r.p()
m=$.aS()
m.$flags&2&&A.c(m)
m[0]=p
p=$.b2()
if(0>=p.length)return A.a(p,0)
a6=p[0]}else a6=r.p()
if(b0.w===B.i){p=r.p()
m=$.aS()
m.$flags&2&&A.c(m)
m[0]=p
p=$.b2()
if(0>=p.length)return A.a(p,0)
a7=p[0]}else a7=r.p()}else if(m===32){if(p===B.i){p=r.m()
m=$.V()
m.$flags&2&&A.c(m)
m[0]=p
p=$.au()
if(0>=p.length)return A.a(p,0)
a5=p[0]}else a5=r.m()
if(b0.w===B.i){p=r.m()
m=$.V()
m.$flags&2&&A.c(m)
m[0]=p
p=$.au()
if(0>=p.length)return A.a(p,0)
a6=p[0]}else a6=r.m()
if(b0.w===B.i){p=r.m()
m=$.V()
m.$flags&2&&A.c(m)
m[0]=p
p=$.au()
if(0>=p.length)return A.a(p,0)
a7=p[0]}else a7=r.m()}else{a5=0
a6=0
a7=0}if(a<b0.b&&c<b0.c){p=b3.a
if(p!=null)p.T(a,c,a5,a6,a7)}}}else if(p>=4){p=b0.w
if(p===B.a6){p=b0.f
if(p===32){p=r.m()
m=$.V()
m.$flags&2&&A.c(m)
m[0]=p
p=$.ct()
if(0>=p.length)return A.a(p,0)
a5=p[0]
m[0]=r.m()
a6=p[0]
m[0]=r.m()
a7=p[0]
m[0]=r.m()
a8=p[0]}else{a6=0
a7=0
a8=0
if(p===64)a5=r.eb()
else if(p===16){p=r.p()
m=$.Y
m=m!=null?m:A.a6()
if(!(p<m.length))return A.a(m,p)
a5=m[p]
p=r.p()
m=$.Y
m=m!=null?m:A.a6()
if(!(p<m.length))return A.a(m,p)
a6=m[p]
p=r.p()
m=$.Y
m=m!=null?m:A.a6()
if(!(p<m.length))return A.a(m,p)
a7=m[p]
p=r.p()
m=$.Y
m=m!=null?m:A.a6()
if(!(p<m.length))return A.a(m,p)
a8=m[p]}else a5=0}if(a<b0.b&&c<b0.c){p=b3.a
if(p!=null)p.aC(a,c,a5,a6,a7,a8)}}else{m=b0.f
if(m===8){if(p===B.i){p=r
p=J.d(p.a,p.d++)
m=$.aT()
m.$flags&2&&A.c(m)
m[0]=p
p=$.b3()
if(0>=p.length)return A.a(p,0)
a5=p[0]}else{p=r
a5=J.d(p.a,p.d++)}if(b0.w===B.i){p=r
p=J.d(p.a,p.d++)
m=$.aT()
m.$flags&2&&A.c(m)
m[0]=p
p=$.b3()
if(0>=p.length)return A.a(p,0)
a6=p[0]}else{p=r
a6=J.d(p.a,p.d++)}if(b0.w===B.i){p=r
p=J.d(p.a,p.d++)
m=$.aT()
m.$flags&2&&A.c(m)
m[0]=p
p=$.b3()
if(0>=p.length)return A.a(p,0)
a7=p[0]}else{p=r
a7=J.d(p.a,p.d++)}if(b0.w===B.i){p=r
p=J.d(p.a,p.d++)
m=$.aT()
m.$flags&2&&A.c(m)
m[0]=p
p=$.b3()
if(0>=p.length)return A.a(p,0)
a8=p[0]}else{p=r
a8=J.d(p.a,p.d++)}}else if(m===16){if(p===B.i){p=r.p()
m=$.aS()
m.$flags&2&&A.c(m)
m[0]=p
p=$.b2()
if(0>=p.length)return A.a(p,0)
a5=p[0]}else a5=r.p()
if(b0.w===B.i){p=r.p()
m=$.aS()
m.$flags&2&&A.c(m)
m[0]=p
p=$.b2()
if(0>=p.length)return A.a(p,0)
a6=p[0]}else a6=r.p()
if(b0.w===B.i){p=r.p()
m=$.aS()
m.$flags&2&&A.c(m)
m[0]=p
p=$.b2()
if(0>=p.length)return A.a(p,0)
a7=p[0]}else a7=r.p()
if(b0.w===B.i){p=r.p()
m=$.aS()
m.$flags&2&&A.c(m)
m[0]=p
p=$.b2()
if(0>=p.length)return A.a(p,0)
a8=p[0]}else a8=r.p()}else if(m===32){if(p===B.i){p=r.m()
m=$.V()
m.$flags&2&&A.c(m)
m[0]=p
p=$.au()
if(0>=p.length)return A.a(p,0)
a5=p[0]}else a5=r.m()
if(b0.w===B.i){p=r.m()
m=$.V()
m.$flags&2&&A.c(m)
m[0]=p
p=$.au()
if(0>=p.length)return A.a(p,0)
a6=p[0]}else a6=r.m()
if(b0.w===B.i){p=r.m()
m=$.V()
m.$flags&2&&A.c(m)
m[0]=p
p=$.au()
if(0>=p.length)return A.a(p,0)
a7=p[0]}else a7=r.m()
if(b0.w===B.i){p=r.m()
m=$.V()
m.$flags&2&&A.c(m)
m[0]=p
p=$.au()
if(0>=p.length)return A.a(p,0)
a8=p[0]}else a8=r.m()}else{a5=0
a6=0
a7=0
a8=0}if(b0.d===B.cb){a9=A.qR(a5,a6,a7,a8)
a5=a9[0]
a6=a9[1]
a7=a9[2]
p=b3.a
a8=p==null?b1:p.gF()
if(a8==null)a8=0}if(a<b0.b&&c<b0.c){p=b3.a
if(p!=null)p.aC(a,c,a5,a6,a7,a8)}}}}}else throw A.f(A.p("Unsupported bitsPerSample: "+p))},
l2(a,b,c,d,e,f){var s,r,q,p
for(s=0;s<f;++s)for(r=s+d,q=0;q<e;++q){p=a.a
p=p==null?null:p.a5(q,s,null)
if(p==null)p=new A.ad()
b.dw(q+c,r,p)}},
kj(a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=null,a4=a2.cx
a4===$&&A.e("tilesX")
r=a8*a4+a7
a4=a2.ch
if(!(r>=0&&r<a4.length))return A.a(a4,r)
a5.d=a4[r]
a4=a2.ax
q=a7*a4
p=a2.ay
o=a8*p
n=a2.CW
if(!(r<n.length))return A.a(n,r)
m=n[r]
s=null
n=a2.e
if(n===32773){l=B.a.ae(a4,8)===0?B.a.Y(a4,8)*p:(B.a.Y(a4,8)+1)*p
s=A.u(new Uint8Array(a4*p),!1,a3,0)
a2.h2(a5,l,s.a)}else if(n===5){s=A.u(new Uint8Array(a4*p),!1,a3,0)
A.py().i4(A.q(a5,m,0),s.a)
if(a2.z===2)for(k=0;k<a2.c;++k){j=a2.r
i=j*(k*a2.b+1)
for(;j<a2.b*a2.r;++j){a4=s
p=J.d(a4.a,a4.d+i)
n=s
h=a2.r
h=J.d(n.a,n.d+(i-h))
J.D(a4.a,a4.d+i,p+h);++i}}}else if(n===2){s=A.u(new Uint8Array(a4*p),!1,a3,0)
try{A.oh(a2.dx,a2.ax,a2.ay).mE(s,a5,0,a2.ay)}catch(g){}}else if(n===3){s=A.u(new Uint8Array(a4*p),!1,a3,0)
try{A.oh(a2.dx,a2.ax,a2.ay).mF(s,a5,0,a2.ay,a2.dy)}catch(g){}}else if(n===4){s=A.u(new Uint8Array(a4*p),!1,a3,0)
try{A.oh(a2.dx,a2.ax,a2.ay).mJ(s,a5,0,a2.ay,a2.fr)}catch(g){}}else if(n===8)s=A.u(B.L.ck(a5.dk(0,0,m)),!1,a3,0)
else if(n===32946)s=A.u(B.L.ck(a5.dk(0,0,m)),!1,a3,0)
else if(n===1)s=a5
else throw A.f(A.p("Unsupported Compression Type: "+n))
f=new A.ly(s)
e=a6.gF()
a4=a2.y
d=a4?e:0
c=a4?0:e
for(b=o,a=0;a<a2.ay;++a,++b){for(a0=q,a1=0;a1<a2.ax;++a1,++a0){a4=a6.a
p=a4==null
n=p?a3:a4.b
if(b<(n==null?0:n)){a4=p?a3:a4.a
a4=a0>=(a4==null?0:a4)}else a4=!0
if(a4)break
a4=f.aj(1)
p=a6.a
if(a4===0){if(p!=null)p.T(a0,b,d,0,0)}else if(p!=null)p.T(a0,b,c,0,0)}f.c=0}},
h2(a,b,c){var s,r,q,p,o,n,m,l,k,j
t.L.a(c)
for(s=J.ao(c),r=0,q=0;q<b;){p=r+1
o=J.d(a.a,a.d+r)
n=$.aT()
n.$flags&2&&A.c(n)
n[0]=o
o=$.b3()
if(0>=o.length)return A.a(o,0)
m=o[0]
if(m>=0&&m<=127)for(o=m+1,r=p,l=0;l<o;++l,q=k,r=p){k=q+1
p=r+1
s.h(c,q,J.d(a.a,a.d+r))}else{o=m<=-1&&m>=-127
r=p+1
if(o){j=J.d(a.a,a.d+p)
for(o=-m+1,l=0;l<o;++l,q=k){k=q+1
s.h(c,q,j)}}}}},
dO(a,b){var s=this.a
if(!s.a_(a))return b
s=s.k(0,a).bv()
s=s==null?null:s.j(0)
return s==null?0:s},
cF(a){return this.dO(a,0)},
dP(a){var s,r=this.a
if(!r.a_(a))return null
s=r.k(0,a)
r=s.bv()
r.toString
return A.nU(s.c,r.gc_(r),t.p)},
siE(a){this.ch=t.T.a(a)},
siD(a){this.CW=t.T.a(a)},
smy(a){this.go=t.T.a(a)}}
A.d3.prototype={
ap(){return"TiffFormat."+this.b}}
A.an.prototype={
ap(){return"TiffPhotometricType."+this.b}}
A.bg.prototype={
ap(){return"TiffImageType."+this.b}}
A.j2.prototype={$iO:1}
A.l3.prototype={
i4(a,b){var s,r,q,p,o,n,m,l,k=this,j="_out",i="_bufferLength"
t.L.a(b)
k.sjC(b)
s=J.aq(b)
k.w=0
r=t.D.a(a.a)
k.e=r
q=k.f=r.length
k.b=a.d
if(0>=q)return A.a(r,0)
if(r[0]===0){if(1>=q)return A.a(r,1)
r=r[1]===1}else r=!1
if(r)throw A.f(A.p("Invalid LZW Data"))
k.hh()
k.d=k.c=0
p=k.eG()
r=k.x
o=0
while(!0){if(!(p!==257&&k.w<s))break
if(p===256){k.hh()
p=k.eG()
k.as=0
if(p===257)break
q=k.r
q===$&&A.e(j)
J.D(q,k.w++,p)
o=p}else{q=k.Q
q.toString
if(p<q){k.hf(p)
q=k.as
q===$&&A.e(i)
n=q-1
for(;n>=0;--n){q=k.r
q===$&&A.e(j)
m=k.w++
if(!(n<4096))return A.a(r,n)
J.D(q,m,r[n])}q=k.as-1
if(!(q>=0&&q<4096))return A.a(r,q)
k.fH(o,r[q])}else{k.hf(o)
q=k.as
q===$&&A.e(i)
n=q-1
for(;n>=0;--n){q=k.r
q===$&&A.e(j)
m=k.w++
if(!(n<4096))return A.a(r,n)
J.D(q,m,r[n])}q=k.r
q===$&&A.e(j)
m=k.w++
l=k.as-1
if(!(l>=0&&l<4096))return A.a(r,l)
J.D(q,m,r[l])
l=k.as-1
if(!(l>=0&&l<4096))return A.a(r,l)
k.fH(o,r[l])}o=p}p=k.eG()}},
fH(a,b){var s,r=this,q=r.y
q===$&&A.e("_table")
s=r.Q
s.toString
q.$flags&2&&A.c(q)
if(!(s<4096))return A.a(q,s)
q[s]=b
q=r.z
q===$&&A.e("_prefix")
q.$flags&2&&A.c(q)
q[s]=a
s=r.Q=s+1
if(s===511)r.a=10
else if(s===1023)r.a=11
else if(s===2047)r.a=12},
hf(a){var s,r,q,p,o,n,m,l=this
l.as=0
s=l.x
l.as=1
r=l.y
r===$&&A.e("_table")
if(!(a<4096))return A.a(r,a)
q=r[a]
s.$flags&2&&A.c(s)
s[0]=q
q=l.z
q===$&&A.e("_prefix")
p=q[a]
for(o=1;p!==4098;o=n){n=o+1
l.as=n
if(!(p>=0&&p<4096))return A.a(r,p)
m=r[p]
if(!(o<4096))return A.a(s,o)
s[o]=m
p=q[p]}},
eG(){var s,r,q,p,o=this,n=o.b,m=o.f
m===$&&A.e("_dataLength")
if(n>=m)return 257
for(;s=o.d,r=o.a,s<r;n=p){if(n>=m)return 257
r=o.c
q=o.e
q===$&&A.e("_data")
p=n+1
o.b=p
if(!(n>=0&&n<q.length))return A.a(q,n)
o.c=(r<<8>>>0)+q[n]>>>0
o.d=s+8}n=s-r
o.d=n
n=B.a.a3(o.c,n)
r-=9
if(!(r>=0&&r<4))return A.a(B.bo,r)
return n&B.bo[r]},
hh(){var s,r,q=this
q.y=new Uint8Array(4096)
s=new Uint32Array(4096)
q.z=s
B.m.aS(s,0,4096,4098)
for(s=q.y,r=0;r<256;++r){s.$flags&2&&A.c(s)
s[r]=r}q.a=9
q.Q=258},
sjC(a){this.r=t.L.a(a)}}
A.j_.prototype={
aw(a){var s,r,q=this.a
if(q==null)return null
q=q.f
if(!(a<q.length))return A.a(q,a)
q=q[a]
s=this.c
s===$&&A.e("_input")
r=q.bk(s)
return r},
b2(a,b){var s=this,r=A.u(a,!1,null,0)
s.c=r
r=s.hx(r)
s.a=r
if(r==null)return null
return s.aw(0)},
hx(a){var s,r,q,p,o,n,m,l,k,j,i=null,h=A.b([],t.fZ),g=new A.j2(h),f=a.p()
if(f!==18761&&f!==19789)return i
if(f===19789)a.e=!0
else a.e=!1
q=a.p()
g.d=q
if(q!==42)return i
p=a.m()
o=A.q(a,i,0)
o.d=p
s=o
for(q=t.p,n=t.e8;p!==0;){r=null
try{m=new A.j1(A.H(q,n),B.aM,B.c9,B.jZ)
m.js(s)
r=m
l=r
if(!(l.b!==0&&l.c!==0))break}catch(k){break}B.c.C(h,r)
l=h.length
if(l===1){if(0>=l)return A.a(h,0)
j=h[0]
g.a=j.b
if(0>=l)return A.a(h,0)
g.b=j.c}p=s.m()
if(p!==0)s.d=p}return h.length!==0?g:i}}
A.lK.prototype={
d9(){var s,r=this.a,q=r.bw()
if((q&1)!==0)return!1
if((q>>>1&7)>3)return!1
if((q>>>4&1)===0)return!1
this.f.d=q>>>5
if(r.bw()!==2752925)return!1
s=this.b
s.a=r.p()
s.b=r.p()
return!0},
bW(){var s,r,q,p=this,o=null
if(!p.kP())return o
s=p.b
r=s.a
p.d=A.a0(o,o,B.h,0,B.k,s.b,o,0,4,o,B.h,r,!1)
p.kW()
if(!p.lh())return o
s=s.w
if(s.length!==0){q=A.u(new A.ai(s),!1,o,0)
s=p.d
s.toString
s.e=A.p5(q)}return p.d},
kP(){var s,r,q,p,o=this
if(!o.d9())return!1
o.fr=A.uM()
for(s=o.dy,r=0;r<4;++r){q=new Int32Array(2)
p=new Int32Array(2)
B.c.h(s,r,new A.jb(q,p,new Int32Array(2)))}o.y=o.Q=0
s=o.b
q=s.a
o.z=q
s=s.b
o.as=s
o.at=q+15>>>4
o.ax=s+15>>>4
o.k1=0
s=o.a
q=o.f
p=q.d
p===$&&A.e("partitionLength")
p=A.pW(s.am(p))
o.c=p
s.d+=q.d
p.Z(1)
o.c.Z(1)
o.ln(o.x,o.fr)
o.lg()
if(!o.lj(s))return!1
o.ll()
o.c.Z(1)
o.lk()
return!0},
ln(a,b){var s,r,q,p=this,o=p.c
o===$&&A.e("br")
o=o.Z(1)!==0
a.a=o
if(o){a.b=p.c.Z(1)!==0
if(p.c.Z(1)!==0){a.c=p.c.Z(1)!==0
for(o=a.d,s=0;s<4;++s){if(p.c.Z(1)!==0){r=p.c
q=r.Z(7)
r=r.Z(1)===1?-q:q}else r=0
o.$flags&2&&A.c(o)
o[s]=r}for(o=a.e,s=0;s<4;++s){if(p.c.Z(1)!==0){r=p.c
q=r.Z(6)
r=r.Z(1)===1?-q:q}else r=0
o.$flags&2&&A.c(o)
o[s]=r}}if(a.b)for(s=0;s<3;++s){o=b.a
r=p.c.Z(1)!==0?p.c.Z(8):255
o.$flags&2&&A.c(o)
o[s]=r}}else a.b=!1
return!0},
lg(){var s,r,q,p=this,o=p.w,n=p.c
n===$&&A.e("br")
o.a=n.Z(1)!==0
o.b=p.c.Z(6)
o.c=p.c.Z(3)
n=p.c.Z(1)!==0
o.d=n
if(n)if(p.c.Z(1)!==0){for(n=o.e,s=0;s<4;++s)if(p.c.Z(1)!==0){r=p.c
q=r.Z(6)
r=r.Z(1)===1?-q:q
n.$flags&2&&A.c(n)
n[s]=r}for(n=o.f,s=0;s<4;++s)if(p.c.Z(1)!==0){r=p.c
q=r.Z(6)
r=r.Z(1)===1?-q:q
n.$flags&2&&A.c(n)
n[s]=r}}if(o.b===0)n=0
else n=o.a?1:2
p.c4=n
return!0},
lj(a){var s,r,q,p,o,n,m,l=a.c-a.d,k=this.c
k===$&&A.e("br")
k=B.a.R(1,k.Z(2))
this.cy=k
s=k-1
r=s*3
if(l<r)return!1
for(k=this.db,q=0,p=0;p<s;++p,r=n){o=a.dC(3,q)
n=r+((J.d(o.a,o.d)|J.d(o.a,o.d+1)<<8|J.d(o.a,o.d+2)<<16)>>>0)
if(n>l)n=l
m=new A.fH(a.cc(n-r,r))
m.b=254
m.c=0
m.d=-8
B.c.h(k,p,m)
q+=3}B.c.h(k,s,A.pW(a.cc(l-r,a.d-a.b+r)))
return r<l},
ll(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.c
e===$&&A.e("br")
s=e.Z(7)
r=f.c.Z(1)!==0?f.c.cO(4):0
q=f.c.Z(1)!==0?f.c.cO(4):0
p=f.c.Z(1)!==0?f.c.cO(4):0
o=f.c.Z(1)!==0?f.c.cO(4):0
n=f.c.Z(1)!==0?f.c.cO(4):0
m=f.x
for(e=f.dy,l=m.d,k=0;k<4;++k){if(m.a){j=l[k]
if(!m.c)j+=s}else{if(k>0){i=e[0]
if(!(k>=0&&k<4))return A.a(e,k)
e[k]=i
continue}j=s}h=e[k]
i=h.a
g=j+r
if(g<0)g=0
else if(g>127)g=127
g=B.aG[g]
i.$flags&2&&A.c(i)
i[0]=g
if(j<0)g=0
else g=j>127?127:j
i[1]=B.aD[g]
g=h.b
i=j+q
if(i<0)i=0
else if(i>127)i=127
i=B.aG[i]
g.$flags&2&&A.c(g)
g[0]=i*2
i=j+p
if(i<0)i=0
else if(i>127)i=127
g[1]=B.aD[i]*101581>>>16
if(g[1]<8)g[1]=8
i=h.c
g=j+o
if(g<0)g=0
else if(g>117)g=117
g=B.aG[g]
i.$flags&2&&A.c(i)
i[0]=g
g=j+n
if(g<0)g=0
else if(g>127)g=127
i[1]=B.aD[g]}},
lk(){var s,r,q,p,o,n,m=this,l=m.fr
for(s=0;s<4;++s)for(r=0;r<8;++r)for(q=0;q<3;++q)for(p=0;p<11;++p){o=m.c
o===$&&A.e("br")
n=o.a8(B.fK[s][r][q][p])!==0?m.c.Z(8):B.jx[s][r][q][p]
o=l.b
if(!(s<o.length))return A.a(o,s)
o=o[s]
if(!(r<o.length))return A.a(o,r)
o=o[r].a
if(!(q<o.length))return A.a(o,q)
o=o[q]
o.$flags&2&&A.c(o)
o[p]=n}o=m.c
o===$&&A.e("br")
o=o.Z(1)!==0
m.fx=o
if(o)m.fy=m.c.Z(8)},
lr(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.c4
f.toString
if(f>0){s=g.w
for(f=s.e,r=s.f,q=g.x,p=q.e,o=0;o<4;++o){if(q.a){n=p[o]
if(!q.c){m=s.b
m.toString
n+=m}}else n=s.b
for(l=0;l<=1;++l){m=g.f3
m===$&&A.e("_fStrengths")
if(!(o<m.length))return A.a(m,o)
k=m[o][l]
m=s.d
m===$&&A.e("useLfDelta")
if(m){n.toString
j=n+f[0]
if(l!==0)j+=r[0]}else j=n
j.toString
if(j<0)j=0
else if(j>63)j=63
if(j>0){m=s.c
m===$&&A.e("sharpness")
if(m>0){i=m>4?B.a.l(j,2):B.a.l(j,1)
h=9-m
if(i>h)i=h}else i=j
if(i<1)i=1
k.b=i
k.a=2*j+i
if(j>=40)m=2
else m=j>=15?1:0
k.d=m}else k.a=0
k.c=l!==0}}}},
kW(){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.b,e=f.at
if(e!=null)h.f4=e
s=J.aM(4,t.jz)
for(e=t.by,r=0;r<4;++r)s[r]=A.b([new A.bT(),new A.bT()],e)
h.sjH(t.mL.a(s))
e=h.at
e.toString
s=J.aM(e,t.ij)
for(q=0;q<e;++q){p=new Uint8Array(16)
o=new Uint8Array(8)
s[q]=new A.fL(p,o,new Uint8Array(8))}h.sjK(t.f4.a(s))
h.ok=new Uint8Array(832)
e=h.at
e.toString
h.go=new Uint8Array(4*e)
p=h.p4=16*e
e=8*e
h.R8=e
o=h.c4
o.toString
if(!(o<3))return A.a(B.V,o)
n=B.V[o]
m=n*p
l=(n/2|0)*e
h.p1=A.u(new Uint8Array(16*p+m),!1,g,m)
e=h.R8
e.toString
h.p2=A.u(new Uint8Array(8*e+l),!1,g,l)
e=h.R8
e.toString
h.p3=A.u(new Uint8Array(8*e+l),!1,g,l)
e=f.a
h.RG=A.u(new Uint8Array(e),!1,g,0)
k=f.a+1>>>1
h.rx=A.u(new Uint8Array(k),!1,g,0)
h.ry=A.u(new Uint8Array(k),!1,g,0)
f=h.c4
f.toString
if(!(f<3))return A.a(B.V,f)
j=B.V[f]
if(f===2)h.ch=h.ay=0
else{f=h.y
f===$&&A.e("_cropLeft")
f=B.a.Y(f-j,16)
h.ay=f
e=h.Q
e.toString
e=B.a.Y(e-j,16)
h.ch=e
if(f<0)h.ay=0
if(e<0)h.ch=0}f=h.as
f.toString
f=B.a.Y(f+15+j,16)
h.cx=f
e=h.z
e===$&&A.e("_cropRight")
e=B.a.Y(e+15+j,16)
h.CW=e
p=h.at
p.toString
if(e>p)h.CW=p
e=h.ax
e.toString
if(f>e)h.cx=e
i=p+1
s=J.aM(i,t.f_)
for(q=0;q<i;++q)s[q]=new A.fJ()
h.sjJ(t.jt.a(s))
f=h.at
f.toString
s=J.aM(f,t.h2)
for(q=0;q<f;++q){e=new Int16Array(384)
s[q]=new A.fK(e,new Uint8Array(16))}h.sjI(t.as.a(s))
f=h.at
f.toString
h.sjG(t.kb.a(A.a1(f,g,!1,t.fA)))
h.lr()
A.ud()
h.e=new A.lL()
return!0},
lh(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d="isIntra4x4"
e.y2=0
s=e.id
r=e.x
q=e.db
p=0
while(!0){o=e.cx
o.toString
if(!(p<o))break
o=e.cy
o===$&&A.e("_numPartitions")
o=(p&o-1)>>>0
if(!(o>=0&&o<8))return A.a(q,o)
n=q[o]
while(!0){p=e.y1
o=e.at
o.toString
if(!(p<o))break
o=e.k3
o===$&&A.e("_mbInfo")
m=o.length
if(0>=m)return A.a(o,0)
l=o[0]
k=1+p
if(!(k<m))return A.a(o,k)
j=o[k]
k=e.dc
k===$&&A.e("_mbData")
if(!(p<k.length))return A.a(k,p)
i=k[p]
if(r.b){p=e.c
p===$&&A.e("br")
p=p.a8(e.fr.a[0])
o=e.c
m=e.fr
e.k1=p===0?o.a8(m.a[1]):2+o.a8(m.a[2])}p=e.fx
p===$&&A.e("_useSkipProba")
if(p){p=e.c
p===$&&A.e("br")
o=e.fy
o===$&&A.e("_skipP")
h=p.a8(o)!==0}else h=!1
e.li()
if(!h)h=e.lm(j,n)
else{l.a=j.a=0
p=i.b
p===$&&A.e(d)
if(!p)l.b=j.b=0
i.f=i.e=0}p=e.c4
p.toString
if(p>0){p=e.k4
p===$&&A.e("_fInfo")
o=e.y1
m=e.f3
m===$&&A.e("_fStrengths")
k=e.k1
k===$&&A.e("_segment")
if(!(k<m.length))return A.a(m,k)
k=m[k]
m=i.b
m===$&&A.e(d)
B.c.h(p,o,k[m?1:0])
p=e.k4
o=e.y1
if(!(o<p.length))return A.a(p,o)
g=p[o]
g.c=g.c||!h}++e.y1}p=e.k3
p===$&&A.e("_mbInfo")
if(0>=p.length)return A.a(p,0)
p=p[0]
p.b=p.a=0
B.f.aS(s,0,4,0)
e.y1=0
e.lT()
p=e.c4
p.toString
f=!1
if(p>0){p=e.y2
o=e.ch
o===$&&A.e("_tlMbY")
if(p>=o){o=e.cx
o.toString
o=p<=o
f=o}}if(!e.kN(f))return!1
p=++e.y2}return!0},
lT(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this,a5=null,a6="_dsp",a7=a4.y2,a8=a4.ok
a8===$&&A.e("_yuvBlock")
s=A.u(a8,!1,a5,40)
r=A.u(a4.ok,!1,a5,584)
q=A.u(a4.ok,!1,a5,600)
a8=a7>0
p=0
while(!0){o=a4.at
o.toString
if(!(p<o))break
o=a4.dc
o===$&&A.e("_mbData")
if(!(p<o.length))return A.a(o,p)
n=o[p]
if(p>0){for(m=-1;m<16;++m){o=m*32
s.bt(o-4,4,s,o+12)}for(m=-1;m<8;++m){o=m*32
l=o-4
o+=4
r.bt(l,4,r,o)
q.bt(l,4,q,o)}}else{for(m=0;m<16;++m)J.D(s.a,s.d+(m*32-1),129)
for(m=0;m<8;++m){o=m*32-1
J.D(r.a,r.d+o,129)
J.D(q.a,q.d+o,129)}if(a8){J.D(q.a,q.d+-33,129)
J.D(r.a,r.d+-33,129)
J.D(s.a,s.d+-33,129)}}o=a4.k2
o===$&&A.e("_yuvT")
if(!(p<o.length))return A.a(o,p)
k=o[p]
j=n.a
i=n.e
if(a8){s.c9(-32,16,k.a)
r.c9(-32,8,k.b)
q.c9(-32,8,k.c)}else if(p===0){o=s.a
l=s.d+-33
J.bw(o,l,l+21,127)
l=r.a
o=r.d+-33
J.bw(l,o,o+9,127)
o=q.a
l=q.d+-33
J.bw(o,l,l+9,127)}o=n.b
o===$&&A.e("isIntra4x4")
if(o){h=A.q(s,a5,-16)
g=h.dl()
if(a8){o=a4.at
o.toString
if(p>=o-1){o=k.a[15]
l=h.a
f=h.d
J.bw(l,f,f+4,o)}else{o=a4.k2
l=p+1
if(!(l<o.length))return A.a(o,l)
h.c9(0,4,o[l].a)}}o=g.length
if(0>=o)return A.a(g,0)
e=g[0]
g.$flags&2&&A.c(g)
if(96>=o)return A.a(g,96)
g[96]=e
g[64]=e
g[32]=e
for(o=n.c,d=0;d<16;++d,i=i<<2>>>0){c=A.q(s,a5,B.bN[d])
l=o[d]
if(!(l<10))return A.a(B.bT,l)
B.bT[l].$1(c)
i.toString
l=d*16
a4.h5(i,new A.ay(j,l,Math.min(384,384),l,!1),c)}}else{o=A.pZ(p,a7,n.c[0])
o.toString
if(!(o<7))return A.a(B.bs,o)
B.bs[o].$1(s)
if(i!==0)for(d=0;d<16;++d,i=i<<2>>>0){c=A.q(s,a5,B.bN[d])
i.toString
o=d*16
a4.h5(i,new A.ay(j,o,Math.min(384,384),o,!1),c)}}o=n.f
o===$&&A.e("nonZeroUV")
l=A.pZ(p,a7,n.d)
l.toString
if(!(l<7))return A.a(B.aF,l)
B.aF[l].$1(r)
B.aF[l].$1(q)
l=Math.min(384,384)
b=new A.ay(j,256,l,256,!1)
if((o&255)!==0){f=a4.e
if((o&170)!==0){f===$&&A.e(a6)
f.bO(b,r)
f.bO(A.q(b,a5,16),A.q(r,a5,4))
a=A.q(b,a5,32)
a0=A.q(r,a5,128)
f.bO(a,a0)
f.bO(A.q(a,a5,16),A.q(a0,a5,4))}else{f===$&&A.e(a6)
f.iH(b,r)}}a1=new A.ay(j,320,l,320,!1)
o=o>>>8
if((o&255)!==0){l=a4.e
if((o&170)!==0){l===$&&A.e(a6)
l.bO(a1,q)
l.bO(A.q(a1,a5,16),A.q(q,a5,4))
o=A.q(a1,a5,32)
f=A.q(q,a5,128)
l.bO(o,f)
l.bO(A.q(o,a5,16),A.q(f,a5,4))}else{l===$&&A.e(a6)
l.iH(a1,q)}}o=a4.ax
o.toString
if(a7<o-1){B.f.an(k.a,0,16,s.a4(),480)
B.f.an(k.b,0,8,r.a4(),224)
B.f.an(k.c,0,8,q.a4(),224)}a2=p*16
a3=p*8
for(m=0;m<16;++m){o=a4.p4
o.toString
l=a4.p1
l===$&&A.e("_cacheY")
l.bt(a2+m*o,16,s,m*32)}for(m=0;m<8;++m){o=a4.R8
o.toString
l=a4.p2
l===$&&A.e("_cacheU")
f=m*32
l.bt(a3+m*o,8,r,f)
o=a4.R8
o.toString
l=a4.p3
l===$&&A.e("_cacheV")
l.bt(a3+m*o,8,q,f)}++p}},
h5(a,b,c){var s,r,q,p,o,n,m="_dsp"
switch(a>>>30){case 3:s=this.e
s===$&&A.e(m)
s.nt(b,c,!1)
break
case 2:this.e===$&&A.e(m)
r=J.d(b.a,b.d)+4
q=B.a.aH(B.a.l(J.d(b.a,b.d+4)*35468,16),32)
p=B.a.aH(B.a.l(J.d(b.a,b.d+4)*85627,16),32)
o=B.a.aH(B.a.l(J.d(b.a,b.d+1)*35468,16),32)
n=B.a.aH(B.a.l(J.d(b.a,b.d+1)*85627,16),32)
A.lN(c,0,r+p,n,o)
A.lN(c,1,r+q,n,o)
A.lN(c,2,r-q,n,o)
A.lN(c,3,r-p,n,o)
break
case 1:s=this.e
s===$&&A.e(m)
s.dm(b,c)
break
default:break}},
kB(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f="_dsp",e=h.p4,d=h.k4
d===$&&A.e("_fInfo")
if(!(a>=0&&a<d.length))return A.a(d,a)
d=d[a]
d.toString
s=h.p1
s===$&&A.e("_cacheY")
r=A.q(s,g,a*16)
q=d.b
p=d.a
if(p===0)return
if(h.c4===1){if(a>0){s=h.e
s===$&&A.e(f)
e.toString
s.fz(r,e,p+4)}if(d.c){s=h.e
s===$&&A.e(f)
e.toString
s.iW(r,e,p)}if(b>0){s=h.e
s===$&&A.e(f)
e.toString
s.fA(r,e,p+4)}if(d.c){d=h.e
d===$&&A.e(f)
e.toString
d.iX(r,e,p)}}else{o=h.R8
s=h.p2
s===$&&A.e("_cacheU")
n=a*8
m=A.q(s,g,n)
s=h.p3
s===$&&A.e("_cacheV")
l=A.q(s,g,n)
k=d.d
if(a>0){s=h.e
s===$&&A.e(f)
e.toString
n=p+4
s.cC(r,1,e,16,n,q,k)
o.toString
s.cC(m,1,o,8,n,q,k)
s.cC(l,1,o,8,n,q,k)}if(d.c){s=h.e
s===$&&A.e(f)
e.toString
s.mW(r,e,p,q,k)
o.toString
j=A.q(m,g,4)
i=A.q(l,g,4)
s.cB(j,1,o,8,p,q,k)
s.cB(i,1,o,8,p,q,k)}if(b>0){s=h.e
s===$&&A.e(f)
e.toString
n=p+4
s.cC(r,e,1,16,n,q,k)
o.toString
s.cC(m,o,1,8,n,q,k)
s.cC(l,o,1,8,n,q,k)}if(d.c){d=h.e
d===$&&A.e(f)
e.toString
d.nv(r,e,p,q,k)
o.toString
s=4*o
j=A.q(m,g,s)
i=A.q(l,g,s)
d.cB(j,o,1,8,p,q,k)
d.cB(i,o,1,8,p,q,k)}}},
kM(){var s,r=this,q=r.ay
q===$&&A.e("_tlMbX")
s=q
while(!0){q=r.CW
q.toString
if(!(s<q))break
r.kB(s,r.y2);++s}},
kN(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=null,a0=b.c4
a0.toString
if(!(a0<3))return A.a(B.V,a0)
s=B.V[a0]
a0=b.p4
a0.toString
r=s*a0
a0=b.R8
a0.toString
q=(s/2|0)*a0
a0=b.p1
a0===$&&A.e("_cacheY")
p=-r
o=A.q(a0,a,p)
a0=b.p2
a0===$&&A.e("_cacheU")
n=-q
m=A.q(a0,a,n)
a0=b.p3
a0===$&&A.e("_cacheV")
l=A.q(a0,a,n)
k=b.y2
a0=b.cx
a0.toString
j=k*16
i=(k+1)*16
if(a1)b.kM()
if(k!==0){j-=s
b.to=A.q(o,a,0)
b.x1=A.q(m,a,0)
b.x2=A.q(l,a,0)}else{b.to=A.q(b.p1,a,0)
b.x1=A.q(b.p2,a,0)
b.x2=A.q(b.p3,a,0)}a0=k<a0-1
if(a0)i-=s
h=b.as
h.toString
if(i>h)i=h
b.xr=null
if(b.f4!=null&&j<i){h=b.xr=b.kx(j,i-j)
if(h==null)return!1}else h=a
g=b.Q
g.toString
if(j<g){f=g-j
e=b.to
e===$&&A.e("_y")
d=e.d
c=b.p4
c.toString
e.d=d+c*f
c=b.x1
c===$&&A.e("_u")
d=c.d
e=b.R8
e.toString
e*=B.a.l(f,1)
c.d=d+e
d=b.x2
d===$&&A.e("_v")
d.d+=e
if(h!=null)h.d=h.d+b.b.a*f
j=g}if(j<i){e=b.to
e===$&&A.e("_y")
d=e.d
c=b.y
c===$&&A.e("_cropLeft")
e.d=d+c
d=b.x1
d===$&&A.e("_u")
e=c>>>1
d.d=d.d+e
d=b.x2
d===$&&A.e("_v")
d.d+=e
if(h!=null)h.d+=c
h=b.z
h===$&&A.e("_cropRight")
b.lw(j-g,h-c,i-j)}if(a0){a0=b.p1
h=b.p4
h.toString
a0.bt(p,r,o,16*h)
h=b.p2
p=b.R8
p.toString
h.bt(n,q,m,8*p)
p=b.p3
h=b.R8
h.toString
p.bt(n,q,l,8*h)}return!0},
lw(a,b,c){if(b<=0||c<=0)return!1
this.kD(a,b,c)
this.kC(a,b,c)
return!0},
ep(a){var s
if((a&-4194304)>>>0===0)s=B.a.l(a,14)
else s=a<0?0:255
return s},
dZ(a,b,c,d){var s=19077*a
d.h(0,0,this.ep(s+26149*c+-3644112))
d.h(0,1,this.ep(s-6419*b-13320*c+2229552))
d.h(0,2,this.ep(s+33050*b+-4527440))},
dU(a7,a8,a9,b0,b1,b2,b3,b4,b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=null,a1=new A.lX(),a2=b5-1,a3=B.a.l(a2,1),a4=a1.$2(J.d(a9.a,a9.d),J.d(b0.a,b0.d)),a5=a1.$2(J.d(b1.a,b1.d),J.d(b2.a,b2.d)),a6=B.a.l(3*a4+a5+131074,2)
a.dZ(J.d(a7.a,a7.d),a6&255,a6>>>16,b3)
b3.h(0,3,255)
s=a8!=null
if(s){a6=B.a.l(3*a5+a4+131074,2)
r=J.d(a8.a,a8.d)
b4.toString
a.dZ(r,a6&255,a6>>>16,b4)
b4.h(0,3,255)}for(q=1;q<=a3;++q,a5=o,a4=p){p=a1.$2(J.d(a9.a,a9.d+q),J.d(b0.a,b0.d+q))
o=a1.$2(J.d(b1.a,b1.d+q),J.d(b2.a,b2.d+q))
n=a4+p+a5+o+524296
m=B.a.l(n+2*(p+a5),3)
l=B.a.l(n+2*(a4+o),3)
a6=B.a.l(m+a4,1)
k=B.a.l(l+p,1)
r=2*q
j=r-1
i=J.d(a7.a,a7.d+j)
h=a6&255
g=a6>>>16
f=j*4
e=A.q(b3,a0,f)
i=19077*i
d=i+26149*g+-3644112
if((d&-4194304)>>>0===0)c=B.a.l(d,14)
else c=d<0?0:255
J.D(e.a,e.d,c)
g=i-6419*h-13320*g+2229552
if((g&-4194304)>>>0===0)c=B.a.l(g,14)
else c=g<0?0:255
J.D(e.a,e.d+1,c)
i=i+33050*h+-4527440
if((i&-4194304)>>>0===0)c=B.a.l(i,14)
else c=i<0?0:255
J.D(e.a,e.d+2,c)
J.D(e.a,e.d+3,255)
i=J.d(a7.a,a7.d+r)
h=k&255
g=k>>>16
e=r*4
d=A.q(b3,a0,e)
i=19077*i
b=i+26149*g+-3644112
if((b&-4194304)>>>0===0)c=B.a.l(b,14)
else c=b<0?0:255
J.D(d.a,d.d,c)
g=i-6419*h-13320*g+2229552
if((g&-4194304)>>>0===0)c=B.a.l(g,14)
else c=g<0?0:255
J.D(d.a,d.d+1,c)
i=i+33050*h+-4527440
if((i&-4194304)>>>0===0)c=B.a.l(i,14)
else c=i<0?0:255
J.D(d.a,d.d+2,c)
J.D(d.a,d.d+3,255)
if(s){a6=B.a.l(l+a5,1)
k=B.a.l(m+o,1)
j=J.d(a8.a,a8.d+j)
i=a6&255
h=a6>>>16
b4.toString
f=A.q(b4,a0,f)
j=19077*j
g=j+26149*h+-3644112
if((g&-4194304)>>>0===0)c=B.a.l(g,14)
else c=g<0?0:255
J.D(f.a,f.d,c)
h=j-6419*i-13320*h+2229552
if((h&-4194304)>>>0===0)c=B.a.l(h,14)
else c=h<0?0:255
J.D(f.a,f.d+1,c)
j=j+33050*i+-4527440
if((j&-4194304)>>>0===0)c=B.a.l(j,14)
else c=j<0?0:255
J.D(f.a,f.d+2,c)
J.D(f.a,f.d+3,255)
r=J.d(a8.a,a8.d+r)
j=k&255
i=k>>>16
e=A.q(b4,a0,e)
r=19077*r
h=r+26149*i+-3644112
if((h&-4194304)>>>0===0)c=B.a.l(h,14)
else c=h<0?0:255
J.D(e.a,e.d,c)
i=r-6419*j-13320*i+2229552
if((i&-4194304)>>>0===0)c=B.a.l(i,14)
else c=i<0?0:255
J.D(e.a,e.d+1,c)
r=r+33050*j+-4527440
if((r&-4194304)>>>0===0)c=B.a.l(r,14)
else c=r<0?0:255
J.D(e.a,e.d+2,c)
J.D(e.a,e.d+3,255)}}if((b5&1)===0){a6=B.a.l(3*a4+a5+131074,2)
r=J.d(a7.a,a7.d+a2)
j=a2*4
i=A.q(b3,a0,j)
a.dZ(r,a6&255,a6>>>16,i)
i.h(0,3,255)
if(s){a6=B.a.l(3*a5+a4+131074,2)
a2=J.d(a8.a,a8.d+a2)
b4.toString
j=A.q(b4,a0,j)
a.dZ(a2,a6&255,a6>>>16,j)
j.h(0,3,255)}}},
kC(a,b,c){var s,r,q,p,o,n,m,l,k=this,j=k.xr
if(j==null)return
s=A.q(j,null,0)
if(a===0){r=c-1
q=a}else{q=a-1
s.d=s.d-k.b.a
r=c}j=k.Q
j.toString
p=k.as
if(j+a+c===p){p.toString
r=p-j-q}for(j=k.b,o=0;o<r;++o){for(p=o+q,n=0;n<b;++n){m=J.d(s.a,s.d+n)
l=k.d.a
l=l==null?null:l.a5(n,p,null);(l==null?new A.ad():l).sv(m)}s.d=s.d+j.a}},
kD(a,b,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.b,d=A.u(J.ac(g.d.gE(0),0,null),!1,f,a*e.a*4),c=g.to
c===$&&A.e("_y")
s=A.q(c,f,0)
c=g.x1
c===$&&A.e("_u")
r=A.q(c,f,0)
c=g.x2
c===$&&A.e("_v")
q=A.q(c,f,0)
p=a+a0
o=B.a.l(b+1,1)
n=e.a*4
e=g.rx
e===$&&A.e("_tmpU")
m=A.q(e,f,0)
e=g.ry
e===$&&A.e("_tmpV")
l=A.q(e,f,0)
if(a===0){g.dU(s,f,r,q,r,q,d,f,b)
k=a0}else{e=g.RG
e===$&&A.e("_tmpY")
g.dU(e,s,m,l,r,q,A.q(d,f,-n),d,b)
k=a0+1}m.sE(0,r.a)
l.sE(0,q.a)
for(e=2*n,c=-n,j=a;j+=2,j<p;){m.d=r.d
l.d=q.d
i=r.d
h=g.R8
h.toString
r.d=i+h
q.d+=h
d.d+=e
h=s.d
i=g.p4
i.toString
s.d=h+2*i
g.dU(A.q(s,f,-i),s,m,l,r,q,A.q(d,f,c),d,b)}e=s.d
c=g.p4
c.toString
s.d=e+c
e=g.Q
e.toString
c=g.as
c.toString
if(e+p<c){e=g.RG
e===$&&A.e("_tmpY")
e.c9(0,b,s)
g.rx.c9(0,o,r)
g.ry.c9(0,o,q);--k}else if((p&1)===0)g.dU(s,f,r,q,r,q,A.q(d,f,n),f,b)
return k},
kx(a,b){var s,r,q,p,o,n,m,l,k,j,i=this,h="_alphaPlane",g=i.b,f=g.a,e=g.b
if(a<0||b<=0||a+b>e)return null
if(a===0){g=f*e
i.f5=new Uint8Array(g)
s=i.f4
r=new A.lY(s,f,e)
q=s.G()
r.d=q&3
r.e=B.a.l(q,2)&3
r.f=B.a.l(q,4)&3
r.r=B.a.l(q,6)&3
if(r.gik()){p=r.d
if(p===0){if(s.c-s.d<g)r.r=1}else if(p===1){o=new A.e9(B.a7,A.b([],t.J))
o.a=f
o.b=e
g=A.b([],t.nK)
p=A.b([],t.ip)
n=new Uint32Array(2)
m=new A.j9(s,n)
n=m.d=J.ac(B.m.gE(n),0,null)
l=s.G()
n.$flags&2&&A.c(n)
k=n.length
if(0>=k)return A.a(n,0)
n[0]=l
l=s.G()
if(1>=k)return A.a(n,1)
n[1]=l
l=s.G()
if(2>=k)return A.a(n,2)
n[2]=l
l=s.G()
if(3>=k)return A.a(n,3)
n[3]=l
l=s.G()
if(4>=k)return A.a(n,4)
n[4]=l
l=s.G()
if(5>=k)return A.a(n,5)
n[5]=l
l=s.G()
if(6>=k)return A.a(n,6)
n[6]=l
s=s.G()
if(7>=k)return A.a(n,7)
n[7]=s
p=new A.ib(m,o,g,p)
p.db=f
r.x=p
p.cY(f,e,!0)
g=r.x
s=g.ax
p=s.length
if(p===1){if(0>=p)return A.a(s,0)
g=s[0].a===B.cd&&g.l_()}else g=!1
if(g){r.y=!0
g=r.x
s=g.c
j=s.a*s.b
g.cx=0
s=B.a.ae(j,4)
s=new Uint8Array(j+(4-s))
g.CW=s
g.ch=J.aU(B.f.gE(s),0,null)}else{r.y=!1
r.x.fI()}}else r.r=1}i.ia=r}g=i.ia
g===$&&A.e("_alpha")
if(!g.w){s=i.f5
s===$&&A.e(h)
if(!g.mD(a,b,s))return null}g=i.f5
g===$&&A.e(h)
return A.u(g,!1,null,a*f)},
lm(a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=a2.fr.b,a4=a2.dy,a5=a2.k1
a5===$&&A.e("_segment")
if(!(a5<4))return A.a(a4,a5)
s=a4[a5]
a5=a2.dc
a5===$&&A.e("_mbData")
a4=a2.y1
if(!(a4<a5.length))return A.a(a5,a4)
r=a5[a4]
q=A.u(r.a,!1,null,0)
a4=a2.k3
a4===$&&A.e("_mbInfo")
if(0>=a4.length)return A.a(a4,0)
p=a4[0]
q.n9(0,q.c-q.d,0)
a4=r.b
a4===$&&A.e("isIntra4x4")
if(!a4){o=A.u(new Int16Array(16),!1,null,0)
a4=a6.b
a5=p.b
if(1>=a3.length)return A.a(a3,1)
n=a2.eF(a7,a3[1],a4+a5,s.b,0,o)
a6.b=p.b=n>0?1:0
if(n>1)a2.m8(o,q)
else{m=B.a.l(J.d(o.a,o.d)+3,3)
for(l=0;l<256;l+=16)J.D(q.a,q.d+l,m)}k=a3[0]
j=1}else{if(3>=a3.length)return A.a(a3,3)
k=a3[3]
j=0}i=a6.a&15
h=p.a&15
for(g=0,f=0;f<4;++f){e=h&1
for(d=0,c=0;c<4;++c){n=a2.eF(a7,k,e+(i&1),s.a,j,q)
e=n>j?1:0
i=i>>>1|e<<7
a4=J.d(q.a,q.d)!==0?1:0
if(n>3)a4=3
else if(n>1)a4=2
d=d<<2|a4
q.d+=16}i=i>>>4
h=h>>>1|e<<7
g=(g<<8|d)>>>0}b=h>>>4
for(a4=a3.length,a=i,a0=0,a1=0;a1<4;a1+=2){a5=4+a1
i=B.a.ab(a6.a,a5)
h=B.a.ab(p.a,a5)
for(d=0,f=0;f<2;++f){e=h&1
for(c=0;c<2;++c){if(2>=a4)return A.a(a3,2)
n=a2.eF(a7,a3[2],e+(i&1),s.c,0,q)
e=n>0?1:0
i=i>>>1|e<<3
a5=J.d(q.a,q.d)!==0?1:0
if(n>3)a5=3
else if(n>1)a5=2
d=(d<<2|a5)>>>0
q.d+=16}i=i>>>2
h=h>>>1|e<<5}a0=(a0|B.a.R(d,4*a1))>>>0
a=(a|B.a.R(i<<4>>>0,a1))>>>0
b=(b|B.a.R(h&240,a1))>>>0}a6.a=a
p.a=b
r.e=g
r.f=a0
if((a0&43690)===0)s.toString
return(g|a0)>>>0===0},
m8(a,b){var s,r,q,p,o,n,m,l,k,j,i=new Int32Array(16)
for(s=0;s<4;++s){r=12+s
q=J.d(a.a,a.d+s)+J.d(a.a,a.d+r)
p=4+s
o=8+s
n=J.d(a.a,a.d+p)+J.d(a.a,a.d+o)
m=J.d(a.a,a.d+p)-J.d(a.a,a.d+o)
l=J.d(a.a,a.d+s)-J.d(a.a,a.d+r)
if(!(s<16))return A.a(i,s)
i[s]=q+n
if(!(o<16))return A.a(i,o)
i[o]=q-n
i[p]=l+m
if(!(r<16))return A.a(i,r)
i[r]=l-m}for(k=0,s=0;s<4;++s){r=s*4
if(!(r<16))return A.a(i,r)
j=i[r]+3
p=3+r
if(!(p<16))return A.a(i,p)
p=i[p]
q=j+p
o=1+r
if(!(o<16))return A.a(i,o)
o=i[o]
r=2+r
if(!(r<16))return A.a(i,r)
r=i[r]
n=o+r
m=o-r
l=j-p
p=B.a.l(q+n,3)
J.D(b.a,b.d+k,p)
p=B.a.l(l+m,3)
J.D(b.a,b.d+(k+16),p)
p=B.a.l(q-n,3)
J.D(b.a,b.d+(k+32),p)
p=B.a.l(l-m,3)
J.D(b.a,b.d+(k+48),p)
k+=64}},
kQ(a,b){var s,r,q,p,o,n,m
t.L.a(b)
if(a.a8(b[3])===0)s=a.a8(b[4])===0?2:3+a.a8(b[5])
else if(a.a8(b[6])===0)s=a.a8(b[7])===0?5+a.a8(159):7+2*a.a8(165)+a.a8(145)
else{r=a.a8(b[8])
q=9+r
if(!(q<11))return A.a(b,q)
p=2*r+a.a8(b[q])
if(!(p<4))return A.a(B.bM,p)
o=B.bM[p]
n=o.length
for(s=0,m=0;m<n;++m)s+=s+a.a8(o[m])
s+=3+B.a.R(8,p)}return s},
eF(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j
t.ac.a(b)
t.L.a(d)
s=b.length
if(!(e<s))return A.a(b,e)
r=b[e].a
if(!(c<r.length))return A.a(r,c)
q=r[c]
for(;e<16;e=p){if(a.a8(q[0])===0)return e
for(;a.a8(q[1])===0;){++e
if(!(e>=0&&e<17))return A.a(B.ab,e)
r=B.ab[e]
if(!(r<s))return A.a(b,r)
r=b[r].a
if(0>=r.length)return A.a(r,0)
q=r[0]
if(e===16)return 16}p=e+1
if(!(p>=0&&p<17))return A.a(B.ab,p)
r=B.ab[p]
if(!(r<s))return A.a(b,r)
o=b[r].a
r=o.length
if(a.a8(q[2])===0){if(1>=r)return A.a(o,1)
q=o[1]
n=1}else{n=this.kQ(a,q)
if(2>=r)return A.a(o,2)
q=o[2]}if(!(e>=0&&e<16))return A.a(B.bO,e)
r=B.bO[e]
m=a.b
m===$&&A.e("_range")
l=a.fK(B.a.l(m,1))
m=a.b
if(m>>>0!==m||m>=128)return A.a(B.ao,m)
k=B.ao[m]
a.b=B.bu[m]
m=a.d
m===$&&A.e("_bits")
a.d=m-k
m=l!==0?-n:n
j=d[e>0?1:0]
J.D(f.a,f.d+r,m*j)}return 16},
li(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.y1,g=4*h,f=i.go,e=i.id,d=i.dc
d===$&&A.e("_mbData")
if(!(h<d.length))return A.a(d,h)
s=d[h]
h=i.c
h===$&&A.e("br")
h=h.a8(145)===0
s.b=h
if(!h){if(i.c.a8(156)!==0)r=i.c.a8(128)!==0?1:3
else r=i.c.a8(163)!==0?2:0
h=s.c
h.$flags&2&&A.c(h)
h[0]=r
f.toString
B.f.aS(f,g,g+4,r)
B.f.aS(e,0,4,r)}else{q=s.c
for(p=0,o=0;o<4;++o,p=j){r=e[o]
for(n=0;n<4;++n){h=g+n
if(!(h<f.length))return A.a(f,h)
d=f[h]
if(!(d<10))return A.a(B.bE,d)
d=B.bE[d]
if(!(r>=0&&r<10))return A.a(d,r)
m=d[r]
l=i.c.a8(m[0])
if(!(l<18))return A.a(B.ac,l)
k=B.ac[l]
for(;k>0;){d=i.c
if(!(k<9))return A.a(m,k)
d=2*k+d.a8(m[k])
if(!(d>=0&&d<18))return A.a(B.ac,d)
k=B.ac[d]}r=-k
f.$flags&2&&A.c(f)
f[h]=r}j=p+4
f.toString
B.f.an(q,p,j,f,g)
e.$flags&2&&A.c(e)
if(!(o<4))return A.a(e,o)
e[o]=r}}if(i.c.a8(142)===0)h=0
else if(i.c.a8(114)===0)h=2
else h=i.c.a8(183)!==0?1:3
s.d=h},
sjK(a){this.k2=t.f4.a(a)},
sjJ(a){this.k3=t.jt.a(a)},
sjG(a){this.k4=t.kb.a(a)},
sjI(a){this.dc=t.as.a(a)},
sjH(a){this.f3=t.mL.a(a)}}
A.lX.prototype={
$2(a,b){return(a|b<<16)>>>0},
$S:18}
A.fH.prototype={
Z(a){var s,r
for(s=0;r=a-1,a>0;a=r)s=(s|B.a.a0(this.a8(128),r))>>>0
return s},
cO(a){var s=this.Z(a)
return this.Z(1)===1?-s:s},
a8(a){var s,r=this,q=r.b
q===$&&A.e("_range")
s=r.fK(B.a.l(q*a,8))
if(r.b<=126)r.m3()
return s},
fK(a){var s,r,q,p,o,n=this,m="_value",l=n.d
l===$&&A.e("_bits")
if(l<0){s=n.a
r=s.c
q=s.d
if(r-q>=1){p=s.G()
l=n.c
l===$&&A.e(m)
n.c=(p|l<<8)>>>0
l=n.d+8
n.d=l
o=l}else{if(q<r){l=s.G()
s=n.c
s===$&&A.e(m)
n.c=(l|s<<8)>>>0
s=n.d+8
n.d=s
l=s}else if(!n.e){s=n.c
s===$&&A.e(m)
n.c=s<<8>>>0
l+=8
n.d=l
n.e=!0}o=l}}else o=l
l=n.c
l===$&&A.e(m)
if(B.a.bo(l,o)>a){s=n.b
s===$&&A.e("_range")
r=a+1
n.b=s-r
n.c=l-B.a.a0(r,o)
return 1}else{n.b=a
return 0}},
m3(){var s,r=this,q=r.b
q===$&&A.e("_range")
if(!(q>=0&&q<128))return A.a(B.ao,q)
s=B.ao[q]
r.b=B.bu[q]
q=r.d
q===$&&A.e("_bits")
r.d=q-s}}
A.lL.prototype={
fA(a,b,c){var s,r=A.q(a,null,0)
for(s=0;s<16;++s){r.d=a.d+s
if(this.hm(r,b,c))this.dJ(r,b)}},
fz(a,b,c){var s,r=A.q(a,null,0)
for(s=0;s<16;++s){r.d=a.d+s*b
if(this.hm(r,1,c))this.dJ(r,1)}},
iX(a,b,c){var s,r,q=A.q(a,null,0)
for(s=4*b,r=3;r>0;--r){q.d+=s
this.fA(q,b,c)}},
iW(a,b,c){var s,r=A.q(a,null,0)
for(s=3;s>0;--s){r.d+=4
this.fz(r,b,c)}},
nv(a,b,c,d,e){var s,r,q=A.q(a,null,0)
for(s=4*b,r=3;r>0;--r){q.d+=s
this.cB(q,b,1,16,c,d,e)}},
mW(a,b,c,d,e){var s,r=A.q(a,null,0)
for(s=3;s>0;--s){r.d+=4
this.cB(r,1,b,16,c,d,e)}},
cC(a,a0,a1,a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=A.q(a,null,0)
for(s=-3*a0,r=-2*a0,q=-a0,p=2*a0;o=a2-1,a2>0;a2=o){if(this.hn(b,a0,a3,a4))if(this.hg(b,a0,a5))this.dJ(b,a0)
else{n=J.d(b.a,b.d+s)
m=J.d(b.a,b.d+r)
l=J.d(b.a,b.d+q)
k=J.d(b.a,b.d)
j=J.d(b.a,b.d+a0)
i=J.d(b.a,b.d+p)
h=$.ny()
g=1020+m-j
if(!(g>=0&&g<2041))return A.a(h,g)
g=1020+3*(k-l)+h[g]
if(!(g>=0&&g<2041))return A.a(h,g)
f=h[g]
g=B.a.l(27*f+63,7)
e=(g&2147483647)-((g&2147483648)>>>0)
g=B.a.l(18*f+63,7)
d=(g&2147483647)-((g&2147483648)>>>0)
g=B.a.l(9*f+63,7)
c=(g&2147483647)-((g&2147483648)>>>0)
g=$.b1()
h=255+n+c
if(!(h>=0&&h<766))return A.a(g,h)
h=g[h]
J.D(b.a,b.d+s,h)
h=$.b1()
g=255+m+d
if(!(g>=0&&g<766))return A.a(h,g)
g=h[g]
J.D(b.a,b.d+r,g)
g=$.b1()
h=255+l+e
if(!(h>=0&&h<766))return A.a(g,h)
h=g[h]
J.D(b.a,b.d+q,h)
h=$.b1()
g=255+k-e
if(!(g>=0&&g<766))return A.a(h,g)
g=h[g]
J.D(b.a,b.d,g)
g=$.b1()
h=255+j-d
if(!(h>=0&&h<766))return A.a(g,h)
h=g[h]
J.D(b.a,b.d+a0,h)
h=$.b1()
g=255+i-c
if(!(g>=0&&g<766))return A.a(h,g)
g=h[g]
J.D(b.a,b.d+p,g)}b.d+=a1}},
cB(a,b,c,d,e,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=A.q(a,null,0)
for(s=-2*b,r=-b;q=d-1,d>0;d=q){if(this.hn(f,b,e,a0))if(this.hg(f,b,a1))this.dJ(f,b)
else{p=J.d(f.a,f.d+s)
o=J.d(f.a,f.d+r)
n=J.d(f.a,f.d)
m=J.d(f.a,f.d+b)
l=3*(n-o)
k=$.jP()
j=B.a.l(l+4,3)
j=112+((j&2147483647)-((j&2147483648)>>>0))
if(!(j>=0&&j<225))return A.a(k,j)
i=k[j]
j=B.a.l(l+3,3)
j=112+((j&2147483647)-((j&2147483648)>>>0))
if(!(j>=0&&j<225))return A.a(k,j)
h=k[j]
j=B.a.l(i+1,1)
g=(j&2147483647)-((j&2147483648)>>>0)
j=$.b1()
k=255+p+g
if(!(k>=0&&k<766))return A.a(j,k)
k=j[k]
J.D(f.a,f.d+s,k)
k=$.b1()
j=255+o+h
if(!(j>=0&&j<766))return A.a(k,j)
j=k[j]
J.D(f.a,f.d+r,j)
j=$.b1()
k=255+n-i
if(!(k>=0&&k<766))return A.a(j,k)
k=j[k]
J.D(f.a,f.d,k)
k=$.b1()
j=255+m-g
if(!(j>=0&&j<766))return A.a(k,j)
j=k[j]
J.D(f.a,f.d+b,j)}f.d+=c}},
dJ(a,b){var s,r,q,p=J.d(a.a,a.d+-2*b),o=-b,n=J.d(a.a,a.d+o),m=J.d(a.a,a.d),l=J.d(a.a,a.d+b),k=$.ny(),j=1020+p-l
if(!(j>=0&&j<2041))return A.a(k,j)
s=3*(m-n)+k[j]
j=$.jP()
k=112+B.a.aH(B.a.l(s+4,3),32)
if(!(k>=0&&k<225))return A.a(j,k)
r=j[k]
k=$.jP()
j=112+B.a.aH(B.a.l(s+3,3),32)
if(!(j>=0&&j<225))return A.a(k,j)
q=k[j]
j=$.b1()
k=255+n+q
if(!(k>=0&&k<766))return A.a(j,k)
a.h(0,o,j[k])
k=$.b1()
j=255+m-r
if(!(j>=0&&j<766))return A.a(k,j)
a.h(0,0,k[j])},
hg(a,b,c){var s=J.d(a.a,a.d+-2*b),r=J.d(a.a,a.d+-b),q=J.d(a.a,a.d),p=J.d(a.a,a.d+b),o=$.jO(),n=255+s-r
if(!(n>=0&&n<511))return A.a(o,n)
if(o[n]<=c){n=255+p-q
if(!(n>=0&&n<511))return A.a(o,n)
n=o[n]>c
o=n}else o=!0
return o},
hm(a,b,c){var s,r=J.d(a.a,a.d+-2*b),q=J.d(a.a,a.d+-b),p=J.d(a.a,a.d),o=J.d(a.a,a.d+b),n=$.jO(),m=255+q-p
if(!(m>=0&&m<511))return A.a(n,m)
m=n[m]
n=$.nx()
s=255+r-o
if(!(s>=0&&s<511))return A.a(n,s)
return 2*m+n[s]<=c},
hn(a,b,c,d){var s,r,q,p=J.d(a.a,a.d+-4*b),o=J.d(a.a,a.d+-3*b),n=J.d(a.a,a.d+-2*b),m=J.d(a.a,a.d+-b),l=J.d(a.a,a.d),k=J.d(a.a,a.d+b),j=J.d(a.a,a.d+2*b),i=J.d(a.a,a.d+3*b),h=$.jO(),g=255+m-l
if(!(g>=0&&g<511))return A.a(h,g)
g=h[g]
s=$.nx()
r=255+n
q=r-k
if(!(q>=0&&q<511))return A.a(s,q)
if(2*g+s[q]>c)return!1
g=255+p-o
if(!(g>=0&&g<511))return A.a(h,g)
s=!1
if(h[g]<=d){g=255+o-n
if(!(g>=0&&g<511))return A.a(h,g)
if(h[g]<=d){g=r-m
if(!(g>=0&&g<511))return A.a(h,g)
if(h[g]<=d){g=255+i-j
if(!(g>=0&&g<511))return A.a(h,g)
if(h[g]<=d){g=255+j-k
if(!(g>=0&&g<511))return A.a(h,g)
if(h[g]<=d){g=255+k-l
if(!(g>=0&&g<511))return A.a(h,g)
g=h[g]<=d
h=g}else h=s}else h=s}else h=s}else h=s}else h=s
return h},
bO(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new Int32Array(16)
for(s=0,r=0,q=0;q<4;++q){p=s+8
o=J.d(a.a,a.d+s)+J.d(a.a,a.d+p)
n=J.d(a.a,a.d+s)-J.d(a.a,a.d+p)
p=s+4
m=B.a.l(J.d(a.a,a.d+p)*35468,16)
l=s+12
k=B.a.l(J.d(a.a,a.d+l)*85627,16)
j=(m&2147483647)-((m&2147483648)>>>0)-((k&2147483647)-((k&2147483648)>>>0))
p=B.a.l(J.d(a.a,a.d+p)*85627,16)
l=B.a.l(J.d(a.a,a.d+l)*35468,16)
i=(p&2147483647)-((p&2147483648)>>>0)+((l&2147483647)-((l&2147483648)>>>0))
h=r+1
if(!(r<16))return A.a(e,r)
e[r]=o+i
r=h+1
if(!(h<16))return A.a(e,h)
e[h]=n+j
h=r+1
if(!(r<16))return A.a(e,r)
e[r]=n-j
r=h+1
if(!(h<16))return A.a(e,h)
e[h]=o-i;++s}for(g=0,r=0,q=0;q<4;++q){if(!(r<16))return A.a(e,r)
f=e[r]+4
p=r+8
if(!(p<16))return A.a(e,p)
p=e[p]
o=f+p
n=f-p
p=r+4
if(!(p<16))return A.a(e,p)
p=e[p]
m=B.a.l(p*35468,16)
l=r+12
if(!(l<16))return A.a(e,l)
l=e[l]
k=B.a.l(l*85627,16)
j=(m&2147483647)-((m&2147483648)>>>0)-((k&2147483647)-((k&2147483648)>>>0))
p=B.a.l(p*85627,16)
l=B.a.l(l*35468,16)
i=(p&2147483647)-((p&2147483648)>>>0)+((l&2147483647)-((l&2147483648)>>>0))
A.cg(b,g,0,0,o+i)
A.cg(b,g,1,0,n+j)
A.cg(b,g,2,0,n-j)
A.cg(b,g,3,0,o-i);++r
g+=32}},
nt(a,b,c){this.bO(a,b)
if(c)this.bO(A.q(a,null,16),A.q(b,null,4))},
dm(a,b){var s,r,q=J.d(a.a,a.d)+4
for(s=0;s<4;++s)for(r=0;r<4;++r)A.cg(b,0,r,s,q)},
iH(a,b){var s=this,r=null
if(J.d(a.a,a.d)!==0)s.dm(a,b)
if(J.d(a.a,a.d+16)!==0)s.dm(A.q(a,r,16),A.q(b,r,4))
if(J.d(a.a,a.d+32)!==0)s.dm(A.q(a,r,32),A.q(b,r,128))
if(J.d(a.a,a.d+48)!==0)s.dm(A.q(a,r,48),A.q(b,r,132))}}
A.lQ.prototype={}
A.lU.prototype={}
A.lW.prototype={}
A.fG.prototype={}
A.lV.prototype={}
A.lM.prototype={}
A.bT.prototype={}
A.fJ.prototype={}
A.jb.prototype={}
A.fK.prototype={}
A.fL.prototype={}
A.fI.prototype={
d9(){var s,r=this.b
if(r.aj(8)!==47)return!1
s=this.c
s.f=B.at
s.a=r.aj(14)+1
s.b=r.aj(14)+1
s.d=r.aj(1)!==0
if(r.aj(3)!==0)return!1
return!0},
bW(){var s,r,q,p,o,n=this,m=null
n.e=0
if(!n.d9())return m
s=n.c
n.cY(s.a,s.b,!0)
n.fI()
r=s.a
n.d=A.a0(m,m,B.h,0,B.k,s.b,m,0,4,m,B.h,r,!1)
r=n.ch
r.toString
q=s.a
p=s.b
if(!n.ew(r,q,p,p,n.glt()))return m
s=s.w
if(s.length!==0){o=A.u(new A.ai(s),!1,m,0)
s=n.d
s.toString
s.e=A.p5(o)}return n.d},
fI(){var s,r=this,q=r.c,p=q.a
q=p*q.b+p
s=new Uint32Array(q+p*16)
r.ch=s
r.CW=J.ac(B.m.gE(s),0,null)
r.cx=q
return!0},
lS(a){var s,r,q,p,o,n,m,l=this
t.L.a(a)
s=l.b
r=s.aj(2)
q=l.ay
p=B.a.R(1,r)
if((q&p)>>>0!==0)return!1
l.ay=(q|p)>>>0
o=new A.ja(B.cc)
B.c.C(l.ax,o)
if(!(r<4))return A.a(B.bt,r)
q=B.bt[r]
o.a=q
o.b=a[0]
o.c=a[1]
switch(q.a){case 0:case 1:s=s.aj(3)+2
o.e=s
o.d=l.cY(A.ch(o.b,s),A.ch(o.c,o.e),!1)
break
case 3:n=s.aj(8)+1
if(n>16)m=0
else if(n>4)m=1
else{s=n>2?2:3
m=s}B.c.h(a,0,A.ch(o.b,m))
o.e=m
o.d=l.cY(n,1,!1)
l.kI(n,o)
break
case 2:break}return!0},
cY(a,b,c){var s,r,q,p,o,n,m,l,k=this
if(c)for(s=k.b,r=t.t,q=b,p=a;s.aj(1)!==0;){o=A.b([p,q],r)
if(!k.lS(o))throw A.f(A.p("Invalid Transform"))
p=o[0]
q=o[1]}else{q=b
p=a}s=k.b
if(s.aj(1)!==0){n=s.aj(4)
if(!(n>=1&&n<=11))throw A.f(A.p("Invalid Color Cache"))}else n=0
if(!k.lH(p,q,n,c))throw A.f(A.p("Invalid Huffman Codes"))
if(n>0){s=B.a.R(1,n)
k.r=s
k.w=new A.lR(new Uint32Array(s),32-n)}else k.r=0
s=k.c
s.a=p
s.b=q
m=k.y
k.z=A.ch(p,m)
k.x=m===0?4294967295:B.a.R(1,m)-1
if(c){k.e=0
return null}l=new Uint32Array(p*q)
if(!k.ew(l,p,q,q,null))throw A.f(A.p("Failed to decode image data."))
k.e=0
return l},
ew(b4,b5,b6,b7,b8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this
t.bZ.a(b8)
s=b3.e
r=B.a.aR(s,b5)
q=B.a.ae(s,b5)
p=b3.hb(q,r)
o=b3.e
n=b5*b6
m=b5*b7
s=b3.r
l=280+s
k=s>0?b3.w:null
j=b3.x
s=b4.length
i=b3.b
h=b8!=null
g=b4.$flags|0
f=o
while(!0){e=i.b
d=e.c
if(!(!(e.d>=d&&i.a>=64)&&o<m))break
if((q&j)>>>0===0){c=b3.d0(b3.Q,b3.z,b3.y,q,r)
e=b3.at
if(!(c<e.length))return A.a(e,c)
p=e[c]}if(i.a>=32)i.ci()
e=p.a
d=e.length
if(0>=d)return A.a(e,0)
b=e[0].cb(i)
a=0
if(b<256){if(1>=d)return A.a(e,1)
a0=e[1].cb(i)
if(i.a>=32)i.ci()
if(2>=d)return A.a(e,2)
a1=e[2].cb(i)
if(3>=d)return A.a(e,3)
a2=A.r7(a1,b,a0,e[3].cb(i))
b4.$flags&2&&A.c(b4)
if(!(o>=0&&o<s))return A.a(b4,o)
b4[o]=a2;++o;++q
if(q>=b5){++r
if(B.a.ae(r,16)===0&&h)b8.$1(r)
if(k!=null)for(e=k.b,d=k.a,a3=d.$flags|0;f<o;){if(!(f>=0))return A.a(b4,f)
a4=b4[f]
a5=B.a.a3(a4*506832829>>>0,e)
a3&2&&A.c(d)
if(!(a5<d.length))return A.a(d,a5)
d[a5]=a4;++f}q=a}}else if(b<280){a6=b3.dL(b-256)
if(4>=d)return A.a(e,4)
a7=e[4].cb(i)
if(i.a>=32)i.ci()
a8=b3.hu(b5,b3.dL(a7))
if(o<a8||n-o<a6)return!1
else{a9=o-a8
for(b0=0;b0<a6;++b0){e=o+b0
d=a9+b0
if(!(d>=0&&d<s))return A.a(b4,d)
d=b4[d]
g&2&&A.c(b4)
if(!(e>=0&&e<s))return A.a(b4,e)
b4[e]=d}o+=a6}q+=a6
for(;q>=b5;){q-=b5;++r
if(B.a.ae(r,16)===0&&h)b8.$1(r)}if(o<m){if((q&j)>>>0!==0){c=b3.d0(b3.Q,b3.z,b3.y,q,r)
e=b3.at
if(!(c<e.length))return A.a(e,c)
p=e[c]}if(k!=null)for(e=k.b,d=k.a,a3=d.$flags|0;f<o;){if(!(f>=0&&f<s))return A.a(b4,f)
a4=b4[f]
a5=B.a.a3(a4*506832829>>>0,e)
a3&2&&A.c(d)
if(!(a5<d.length))return A.a(d,a5)
d[a5]=a4;++f}}}else if(b<l){a5=b-280
for(;f<o;){k.toString
if(!(f>=0&&f<s))return A.a(b4,f)
e=b4[f]
b1=B.a.a3(e*506832829>>>0,k.b)
d=k.a
d.$flags&2&&A.c(d)
if(!(b1<d.length))return A.a(d,b1)
d[b1]=e;++f}e=k.a
d=e.length
if(!(a5<d))return A.a(e,a5)
a3=e[a5]
b4.$flags&2&&A.c(b4)
if(!(o>=0&&o<s))return A.a(b4,o)
b4[o]=a3;++o;++q
if(q>=b5){++r
if(B.a.ae(r,16)===0&&h)b8.$1(r)
for(a3=k.b,a4=e.$flags|0;f<o;){if(!(f>=0))return A.a(b4,f)
b2=b4[f]
a5=B.a.a3(b2*506832829>>>0,a3)
a4&2&&A.c(e)
if(!(a5<d))return A.a(e,a5)
e[a5]=b2;++f}q=a}}else return!1}if(h)b8.$1(r)
if(e.d>=d&&i.a>=64&&o<n)return!1
b3.e=o
return!0},
l_(){var s,r,q,p,o,n
if(this.r>0)return!1
for(s=this.as,r=this.at,q=r.length,p=0;p<s;++p){if(!(p<q))return A.a(r,p)
o=r[p].a
n=o.length
if(1>=n)return A.a(o,1)
if(o[1].f>1)return!1
if(2>=n)return A.a(o,2)
if(o[2].f>1)return!1
if(3>=n)return A.a(o,3)
if(o[3].f>1)return!1}return!0},
kJ(a){var s,r,q,p,o,n,m,l=this,k=l.f,j=a-k
if(j<=0)return
s=l.c
l.fJ(j,s.a*k)
r=s.a
q=r*j
p=r*l.f
s=l.ch
s.toString
k=l.cx
k.toString
o=A.u(s,!1,null,k)
for(n=0;n<q;++n){k=l.cy
k.toString
s=p+n
m=B.a.l(J.d(o.a,o.d+n),8)
k.$flags&2&&A.c(k)
if(!(s>=0&&s<k.length))return A.a(k,s)
k[s]=m&255}l.f=a},
kf(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i=this,h="_pixels8",g=i.e,f=B.a.aR(g,a1),e=B.a.ae(g,a1),d=i.hb(e,f),c=i.e,b=a1*a2,a=a1*a3,a0=i.x
g=i.b
while(!0){s=g.b
if(!(!(s.d>=s.c&&g.a>=64)&&c<a))break
if((e&a0)>>>0===0){r=i.d0(i.Q,i.z,i.y,e,f)
s=i.at
if(!(r<s.length))return A.a(s,r)
d=s[r]}if(g.a>=32)g.ci()
s=d.a
q=s.length
if(0>=q)return A.a(s,0)
p=s[0].cb(g)
if(p<256){s=i.CW
s===$&&A.e(h)
s.$flags&2&&A.c(s)
if(!(c>=0&&c<s.length))return A.a(s,c)
s[c]=p;++c;++e
if(e>=a1){++f
if(B.a.ae(f,16)===0)i.eC(f)
e=0}}else if(p<280){o=i.dL(p-256)
if(4>=q)return A.a(s,4)
n=s[4].cb(g)
if(g.a>=32)g.ci()
m=i.hu(a1,i.dL(n))
if(c>=m&&b-c>=o)for(s=i.CW,l=0;l<o;++l){s===$&&A.e(h)
q=c+l
k=q-m
j=s.length
if(!(k>=0&&k<j))return A.a(s,k)
k=s[k]
s.$flags&2&&A.c(s)
if(!(q>=0&&q<j))return A.a(s,q)
s[q]=k}else{i.e=c
return!0}c+=o
e+=o
for(;e>=a1;){e-=a1;++f
if(B.a.ae(f,16)===0)i.eC(f)}if(c<a&&(e&a0)>>>0!==0){r=i.d0(i.Q,i.z,i.y,e,f)
s=i.at
if(!(r<s.length))return A.a(s,r)
d=s[r]}}else return!1}i.eC(f)
i.e=c
return!0},
eC(a){var s,r,q,p=this,o=p.f,n=a-o,m=p.CW
m===$&&A.e("_pixels8")
s=A.u(m,!1,null,p.c.a*o)
if(n>0){r=p.f
o=p.cy
o.toString
m=p.db
m.toString
q=A.u(o,!1,null,m*r)
m=p.ax
if(0>=m.length)return A.a(m,0)
m[0].mx(r,r+n,s,q)}p.f=a},
lu(a){var s,r,q,p,o,n=this,m=n.c,l=m.a,k=n.f,j=a-k
if(j<=0)return
n.fJ(j,l*k)
l=n.cx
l.toString
s=n.f
r=l
q=0
for(;q<j;++q,++s)for(p=0;p<m.a;++p,++r){l=n.ch
if(!(r>=0&&r<l.length))return A.a(l,r)
o=l[r]
l=n.d.a
if(l!=null)l.aC(p,s,o>>>16&255,o>>>8&255,o&255,o>>>24&255)}n.f=a},
fJ(a,b){var s,r,q,p=this,o=p.ax,n=o.length,m=p.c.a,l=p.f,k=l+a,j=p.cx
j.toString
s=p.ch
s.toString
B.m.an(s,j,j+m*a,s,b)
for(r=b;q=n-1,n>0;r=j,n=q){if(!(q>=0&&q<o.length))return A.a(o,q)
m=o[q]
s=p.ch
s.toString
m.n2(l,k,s,r,s,j)}},
lH(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=1
if(d&&f.b.aj(1)!==0){s=f.b.aj(3)+2
r=A.ch(a,s)
q=A.ch(b,s)
p=r*q
o=f.cY(r,q,!1)
f.y=s
for(n=0;n<p;++n){if(!(n<o.length))return A.a(o,n)
m=o[n]>>>8&65535
o.$flags&2&&A.c(o)
o[n]=m
if(m>=e)e=m+1}}else o=null
l=J.aM(e,t.co)
for(k=0;k<e;++k)l[k]=A.tn()
for(j=c>0,n=0;n<e;++n)for(i=0;i<5;++i){h=B.fE[i]
if(i===0&&j)h+=B.a.R(1,c)
if(!(n<e))return A.a(l,n)
g=l[n].a
if(!(i<g.length))return A.a(g,i)
if(!f.lF(h,g[i]))return!1}f.Q=o
f.as=e
f.skS(l)
return!0},
lF(a,b){var s,r,q,p,o,n,m,l,k,j,i=this.b
if(i.aj(1)!==0){s=t.t
r=A.b([0,0],s)
q=A.b([0,0],s)
p=A.b([0,0],s)
o=i.aj(1)+1
B.c.h(r,0,i.aj(i.aj(1)===0?1:8))
B.c.h(q,0,0)
s=o-1
B.c.h(p,0,s)
if(o===2){B.c.h(r,1,i.aj(8))
B.c.h(q,1,1)
B.c.h(p,1,s)}n=b.mt(p,q,r,a,o)}else{m=new Int32Array(19)
l=i.aj(4)+4
if(l>19)return!1
p=new Int32Array(a)
for(k=0;k<l;++k){s=B.hk[k]
j=i.aj(3)
if(!(s<19))return A.a(m,s)
m[s]=j}n=this.lG(m,a,p)
if(n)n=b.i1(p,a)}return n},
lG(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=t.L
e.a(a)
e.a(c)
s=A.pc()
if(!s.i1(a,19))return!1
e=this.b
if(e.aj(1)!==0){r=2+e.aj(2+2*e.aj(3))
if(r>b)return!1}else r=b
for(q=0,p=8;q<b;r=o){o=r-1
if(r===0)break
if(e.a>=32)e.ci()
n=s.cb(e)
if(n<16){m=q+1
c.$flags&2&&A.c(c)
if(!(q>=0&&q<c.length))return A.a(c,q)
c[q]=n
if(n!==0)p=n
q=m}else{l=n-16
if(!(l<3))return A.a(B.bh,l)
k=B.bh[l]
j=B.eU[l]
i=e.aj(k)+j
if(q+i>b)return!1
else{h=n===16?p:0
for(g=c.$flags|0;f=i-1,i>0;i=f,q=m){m=q+1
g&2&&A.c(c)
if(!(q>=0&&q<c.length))return A.a(c,q)
c[q]=h}}}}return!0},
dL(a){var s
if(a<4)return a+1
s=B.a.l(a-2,1)
return B.a.R(2+(a&1),s)+this.b.aj(s)+1},
hu(a,b){var s,r,q
if(b>120)return b-120
else{s=b-1
if(!(s>=0))return A.a(B.bq,s)
r=B.bq[s]
q=(r>>>4)*a+(8-(r&15))
return q>=1?q:1}},
kI(a,b){var s,r,q,p,o,n,m,l,k=B.a.R(1,B.a.ab(8,b.e)),j=new Uint32Array(k),i=b.d
i.toString
s=J.ac(B.m.gE(i),0,null)
r=J.ac(B.m.gE(j),0,null)
i=b.d
if(0>=i.length)return A.a(i,0)
i=i[0]
if(0>=k)return A.a(j,0)
j[0]=i
q=4*a
for(i=s.length,p=r.length,o=r.$flags|0,n=4;n<q;++n){if(!(n<i))return A.a(s,n)
m=s[n]
l=n-4
if(!(l<p))return A.a(r,l)
l=r[l]
o&2&&A.c(r)
if(!(n<p))return A.a(r,n)
r[n]=m+l&255}for(q=4*k;n<q;++n){o&2&&A.c(r)
if(!(n<p))return A.a(r,n)
r[n]=0}b.d=j
return!0},
d0(a,b,c,d,e){var s
if(c===0)return 0
a.toString
s=b*B.a.l(e,c)+B.a.l(d,c)
if(!(s<a.length))return A.a(a,s)
return a[s]},
hb(a,b){var s=this,r=s.d0(s.Q,s.z,s.y,a,b),q=s.at
if(!(r<q.length))return A.a(q,r)
return q[r]},
skS(a){this.at=t.kk.a(a)}}
A.ib.prototype={
mS(a){return this.kJ(a)}}
A.j9.prototype={
is(){var s,r,q,p=this.a
if(p<32){s=this.c
r=B.a.a3(s[0],p)
s=s[1]
if(!(p>=0))return A.a(B.a3,p)
q=r+((s&B.a3[p])>>>0)*(B.a3[32-p]+1)}else{s=this.c
q=p===32?s[1]:B.a.a3(s[1],p-32)}return q},
aj(a){var s,r=this,q=r.b
if(!(q.d>=q.c&&r.a>=64)&&a<25){q=r.is()
if(!(a<33))return A.a(B.a3,a)
s=B.a3[a]
r.a+=a
r.ci()
return(q&s)>>>0}else throw A.f(A.p("Not enough data in input."))},
ci(){var s,r,q,p=this,o=p.b,n=p.c,m=n.$flags|0,l=o.c
while(!0){if(!(p.a>=8&&o.d<l))break
s=J.d(o.a,o.d++)
r=n[0]
q=n[1]
m&2&&A.c(n)
n[0]=(r>>>8)+(q&255)*16777216
n[1]=q>>>8
n[1]=(n[1]|s*16777216)>>>0
p.a-=8}}}
A.lR.prototype={}
A.d6.prototype={
ap(){return"VP8LImageTransformType."+this.b}}
A.ja.prototype={
n2(a,b,c,d,e,f){var s,r,q,p,o=this,n=o.b
switch(o.a.a){case 2:o.mp(e,f,f+(b-a)*n)
break
case 0:o.nd(a,b,e,f)
if(b!==o.c){s=f-n
B.m.an(e,s,s+n,c,f+(b-a-1)*n)}break
case 1:o.mz(a,b,e,f)
break
case 3:if(d===f&&o.e>0){r=b-a
q=r*A.ch(n,o.e)
p=f+r*n-q
B.m.an(e,p,p+q,c,f)
o.i2(a,b,c,p,e,f)}else o.i2(a,b,c,d,e,f)
break}},
mx(a,b,c,d){var s,r,q,p,o,n,m=this.e,l=B.a.ab(8,m),k=this.b,j=this.d
if(l<8){s=B.a.R(1,m)-1
r=B.a.R(1,l)-1
for(q=a;q<b;++q)for(p=0,o=0;o<k;++o){if((o&s)>>>0===0){p=J.d(c.a,c.d);++c.d}m=(p&r)>>>0
if(!(m>=0&&m<j.length))return A.a(j,m)
m=j[m]
J.D(d.a,d.d,m>>>8&255);++d.d
p=B.a.l(p,l)}}else for(q=a;q<b;++q)for(o=0;o<k;++o){n=J.d(c.a,c.d);++c.d
if(!(n>=0&&n<j.length))return A.a(j,n)
m=j[n]
J.D(d.a,d.d,m>>>8&255);++d.d}},
i2(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j=this.e,i=B.a.ab(8,j),h=this.b,g=this.d
if(i<8){s=B.a.R(1,j)-1
r=B.a.R(1,i)-1
for(j=e.$flags|0,q=c.length,p=a;p<b;++p)for(o=0,n=0;n<h;++n,f=l){if((n&s)>>>0===0){m=d+1
if(!(d>=0&&d<q))return A.a(c,d)
o=c[d]>>>8&255
d=m}l=f+1
k=o&r
if(!(k>=0&&k<g.length))return A.a(g,k)
k=g[k]
j&2&&A.c(e)
if(!(f>=0&&f<e.length))return A.a(e,f)
e[f]=k
o=B.a.ab(o,i)}}else for(j=c.length,q=e.$flags|0,p=a;p<b;++p)for(n=0;n<h;++n,f=l,d=m){l=f+1
g.toString
m=d+1
if(!(d>=0&&d<j))return A.a(c,d)
k=c[d]>>>8&255
if(!(k<g.length))return A.a(g,k)
k=g[k]
q&2&&A.c(e)
if(!(f>=0&&f<e.length))return A.a(e,f)
e[f]=k}},
mz(a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=a.b,a1=a.e,a2=B.a.R(1,a1)-1,a3=A.ch(a0,a1),a4=B.a.l(a5,a.e)*a3
for(a1=a7.length,s=a7.$flags|0,r=a5;r<a6;){q=new Uint8Array(3)
for(p=a4,o=0;o<a0;++o){if((o&a2)>>>0===0){n=a.d
m=p+1
if(!(p<n.length))return A.a(n,p)
n=n[p]
q[0]=n&255
q[1]=n>>>8&255
q[2]=n>>>16&255
p=m}n=a8+o
if(!(n<a1))return A.a(a7,n)
l=a7[n]
k=l>>>8&255
j=q[0]
i=$.aT()
i.$flags&2&&A.c(i)
i[0]=j
j=$.b3()
if(0>=j.length)return A.a(j,0)
h=j[0]
i[0]=k
g=j[0]
f=$.jQ()
f.$flags&2&&A.c(f)
f[0]=h*g
e=$.nz()
if(0>=e.length)return A.a(e,0)
d=(l>>>16&255)+(e[0]>>>5)>>>0&255
i[0]=q[1]
h=j[0]
i[0]=k
f[0]=h*j[0]
c=e[0]
i[0]=q[2]
h=j[0]
i[0]=d
f[0]=h*j[0]
b=e[0]
s&2&&A.c(a7)
a7[n]=(l&4278255360|d<<16|((l&255)+(c>>>5)>>>0)+(b>>>5)>>>0&255)>>>0}a8+=a0;++r
if((r&a2)>>>0===0)a4+=a3}},
nd(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.b
if(a===0){s=d-1
r=c.length
if(!(s>=0&&s<r))return A.a(c,s)
A.lS(c,d,4278190080)
for(q=1;q<g;++q){s=d+q
p=s-1
if(!(p<r))return A.a(c,p)
A.lS(c,s,c[p])}d+=g;++a}s=h.e
o=B.a.R(1,s)-1
n=A.ch(g,s)
m=B.a.l(a,h.e)*n
for(s=c.length,l=a;l<b;){r=d-1
if(!(r>=0&&r<s))return A.a(c,r)
r=d-g
if(!(r>=0&&r<s))return A.a(c,r)
A.lS(c,d,c[r])
r=h.d
k=m+1
if(!(m<r.length))return A.a(r,m)
j=$.pY[r[m]>>>8&15]
for(q=1;q<g;++q){if((q&o)>>>0===0){r=h.d
i=k+1
if(!(k<r.length))return A.a(r,k)
j=$.pY[r[k]>>>8&15]
k=i}r=d+q
p=r-1
if(!(p<s))return A.a(c,p)
A.lS(c,r,j.$3(c,c[p],r-g))}d+=g;++l
if((l&o)>>>0===0)m+=n}},
mp(a,b,c){var s,r,q,p,o
for(s=a.length,r=a.$flags|0;b<c;b=o){if(!(b<s))return A.a(a,b)
q=a[b]
p=q>>>8&255
o=b+1
r&2&&A.c(a)
a[b]=(q&4278255360|(q&16711935)+(p<<16|p)&16711935)>>>0}}}
A.lY.prototype={
gik(){var s=this,r=s.d
if(r>1||s.e>=4||s.f>1||s.r!==0)return!1
return!0},
mD(a,b,c){var s,r,q,p,o,n,m=this
if(!m.gik())return!1
s=m.e
if(!(s<4))return A.a(B.bA,s)
r=B.bA[s]
if(m.d===0){s=m.b
q=a*s
p=m.a
B.f.an(c,q,b*s,p.a,p.d-p.b+q)}else{s=a+b
p=m.x
p===$&&A.e("_vp8l")
p.cy=c
o=p.c
if(m.y)s=p.kf(o.a,o.b,s)
else{n=p.ch
n.toString
p=p.ew(n,o.a,o.b,s,t.lt.a(p.gmR()))
s=p}if(!s)return!1}if(r!=null){s=m.b
r.$6(s,m.c,s,a,b,c)}if(m.f===1)if(!m.kA(c,m.b,m.c,a,b))return!1
if(a+b===m.c)m.w=!0
return!0},
kA(a,b,c,d,e){if(b<=0||c<=0||d<0||e<0||d+e>c)return!1
return!0}}
A.fM.prototype={
jt(a,b){var s=this,r=a.G()
s.r=0
s.f=(r&1)!==0
s.w=a.d-a.b
s.x=b-16}}
A.ic.prototype={}
A.hR.prototype={
eI(a){var s,r,q=this
if(a===0)return!1
s=(a<<1>>>0)-1
q.e=s
s=s<<1>>>0
r=q.d=new Int32Array(s)
if(1>=s)return A.a(r,1)
r[1]=-1
q.f=1
B.f.aS(q.a,0,128,255)
return!0},
i1(a,b){var s,r,q,p,o,n,m=this
t.L.a(a)
for(s=a.length,r=0,q=0,p=0;p<b;++p){if(!(p<s))return A.a(a,p)
if(a[p]>0){++r
q=p}}if(!m.eI(r))return!1
if(r===1){if(q<0||q>=b)return!1
return m.em(q,0,0)}o=new Int32Array(b)
if(!m.kT(a,b,o))return!1
for(p=0;p<b;++p){if(!(p<s))return A.a(a,p)
n=a[p]
if(n>0)if(!m.em(p,o[p],n))return!1}return m.f===m.e},
mt(a,b,c,d,e){var s,r,q=this,p=t.L
p.a(a)
p.a(b)
p.a(c)
if(!q.eI(e))return!1
for(s=0;s<e;++s){if(!(s<2))return A.a(b,s)
p=b[s]
if(p!==-1){r=c[s]
if(r>=d)return q.f===q.e
if(!q.em(r,p,a[s]))return q.f===q.e}}return q.f===q.e},
cb(a){var s,r,q,p=this,o=a.is(),n=a.a,m=o&127,l=p.a[m]
if(l<=7){a.a=n+l
return p.b[m]}s=p.c[m]
n+=7
o=o>>>7
do{r=p.d
r===$&&A.e("tree")
q=(s<<1>>>0)+1
if(!(q<r.length))return A.a(r,q)
s=s+r[q]+(o&1)
o=o>>>1;++n}while(p.ho(s))
a.a=n
r=p.d
q=s<<1>>>0
if(!(q<r.length))return A.a(r,q)
return r[q]},
em(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
if(c<=7){s=f.hA(b,c)
for(r=B.a.a0(1,7-c),q=f.b,p=q.$flags|0,o=f.a,n=o.$flags|0,m=0;m<r;++m){l=(s|B.a.a0(m,c))>>>0
p&2&&A.c(q)
if(!(l<128))return A.a(q,l)
q[l]=a
n&2&&A.c(o)
o[l]=c}}else s=f.hA(B.a.bo(b,c-7),7)
for(r=f.c,q=r.$flags|0,k=7,j=0;i=c-1,c>0;c=i){p=f.e
if(j>=p)return!1
o=f.d
o===$&&A.e("tree")
n=(j<<1>>>0)+1
h=o.length
if(!(n<h))return A.a(o,n)
g=o[n]
if(g<0){g=f.f
if(g===p)return!1
o.$flags&2&&A.c(o)
o[n]=g-j
f.f=g+2
p=(g<<1>>>0)+1
if(!(p<h))return A.a(o,p)
o[p]=-1
g=(g+1<<1>>>0)+1
if(!(g<h))return A.a(o,g)
o[g]=-1}else if(g===0)return!1
j+=o[n]+(B.a.bo(b,i)&1);--k
if(k===0){q&2&&A.c(r)
if(!(s<128))return A.a(r,s)
r[s]=j}}if(f.l6(j))f.l7(j,0)
else if(f.ho(j))return!1
r=f.d
r===$&&A.e("tree")
q=j<<1>>>0
r.$flags&2&&A.c(r)
if(!(q<r.length))return A.a(r,q)
r[q]=a
return!0},
hA(a,b){var s=B.aH[a&15],r=B.a.l(a,4)
if(!(r<16))return A.a(B.aH,r)
return B.a.a3((s<<4|B.aH[r])>>>0,8-b)},
l7(a,b){var s,r=this.d
r===$&&A.e("tree")
s=(a<<1>>>0)+1
r.$flags&2&&A.c(r)
if(!(s<r.length))return A.a(r,s)
r[s]=b},
ho(a){var s,r=this.d
r===$&&A.e("tree")
s=(a<<1>>>0)+1
if(!(s<r.length))return A.a(r,s)
return r[s]!==0},
l6(a){var s,r=this.d
r===$&&A.e("tree")
s=(a<<1>>>0)+1
if(!(s<r.length))return A.a(r,s)
return r[s]<0},
kT(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=t.L
i.a(a)
i.a(c)
s=new Int32Array(16)
r=new Int32Array(16)
for(i=a.length,q=0,p=0;q<b;++q){if(!(q<i))return A.a(a,q)
o=a[q]
if(o>p)p=o}if(p>15)return!1
for(q=0;q<b;++q){if(!(q<i))return A.a(a,q)
n=a[q]
if(!(n>=0&&n<16))return A.a(s,n)
m=s[n]
if(!(n<16))return A.a(s,n)
s[n]=m+1}if(0>=16)return A.a(s,0)
s[0]=0
if(0>=16)return A.a(r,0)
r[0]=-1
for(l=1,k=0;l<=p;++l){k=k+s[l-1]<<1>>>0
if(!(l<16))return A.a(r,l)
r[l]=k}for(n=c.$flags|0,q=0;q<b;++q){if(!(q<i))return A.a(a,q)
m=a[q]
if(m>0){if(!(m<16))return A.a(r,m)
j=r[m]
if(!(m<16))return A.a(r,m)
r[m]=j+1
n&2&&A.c(c)
if(!(q<c.length))return A.a(c,q)
c[q]=j}else{n&2&&A.c(c)
if(!(q<c.length))return A.a(c,q)
c[q]=-1}}return!0}}
A.dy.prototype={}
A.e8.prototype={
ap(){return"WebPFormat."+this.b}}
A.e9.prototype={$iO:1}
A.eT.prototype={}
A.jc.prototype={
cG(a){var s=A.u(t.L.a(a),!1,null,0)
this.b=s
if(!this.ha(s))return!1
return!0},
b6(a){var s,r=this,q=null,p=A.u(t.L.a(a),!1,q,0)
r.b=p
if(!r.ha(p))return q
p=new A.eT(B.a7,A.b([],t.J))
r.a=p
s=r.b
s.toString
if(!r.hN(s,p))return q
p=r.a
switch(p.f.a){case 3:p.as=p.z.length
return p
case 2:s=r.b
s.toString
s.d=p.ay
if(!A.om(s,p).d9())return q
p=r.a
p.as=p.z.length
return p
case 1:s=r.b
s.toString
s.d=p.ay
if(!A.ok(s,p).d9())return q
p=r.a
p.as=p.z.length
return p
case 0:throw A.f(A.p("Unknown format for WebP"))}},
aw(a){var s,r,q,p,o=this,n=o.b
if(n==null||o.a==null)return null
s=o.a
if(s.e){s=s.z
r=s.length
if(a>=r)return null
if(!(a<r))return A.a(s,a)
q=s[a]
n.toString
s=q.x
s===$&&A.e("_frameSize")
r=q.w
r===$&&A.e("_framePosition")
return o.h0(n.cc(s,r),a)}r=s.f
if(r===B.at){n.toString
p=n.cc(s.ch,s.ay)
n=o.a
n.toString
return A.om(p,n).bW()}else if(r===B.aP){n.toString
p=n.cc(s.ch,s.ay)
n=o.a
n.toString
return A.ok(p,n).bW()}return null},
b2(a,b){var s,r,q,p,o,n,m,l,k=this,j=null
if(k.b6(t.L.a(a))==null)return j
s=k.a.e
if(!s)return k.aw(0)
for(r=j,q=r,p=0;s=k.a,p<s.as;++p){s=s.z
if(!(p<s.length))return A.a(s,p)
b=s[p]
o=k.aw(p)
if(o==null)continue
o.y=b.e
if(q==null||r==null){s=k.a
n=s.a
s=s.b
m=o.gcI()
l=o.a
l=l==null?j:l.gM()
if(l==null)l=B.h
q=A.a0(j,j,l,o.y,B.k,s,j,0,m,j,B.h,n,!1)
r=q}else{r=A.hW(r,!1,!1)
s=b.f
s===$&&A.e("clearFrame")
if(s){s=r.a
if(s!=null)s.aV(0,j)}}A.oC(r,o,B.av,j,j,b.a,b.b,j,j,j,j)
q.bC(r)}return q},
h0(a,b){var s,r,q,p=null,o=A.b([],t.J),n=new A.eT(B.a7,o)
if(!this.hN(a,n))return p
if(n.f===B.a7)return p
n.as=this.a.as
if(n.e){s=o.length
if(b>=s)return p
if(!(b<s))return A.a(o,b)
r=o[b]
o=r.x
o===$&&A.e("_frameSize")
s=r.w
s===$&&A.e("_framePosition")
return this.h0(a.cc(o,s),b)}else{q=a.cc(n.ch,n.ay)
o=n.f
if(o===B.at)return A.om(q,n).bW()
else if(o===B.aP)return A.ok(q,n).bW()}return p},
ha(a){if(a.ak(4)!=="RIFF")return!1
a.m()
if(a.ak(4)!=="WEBP")return!1
return!0},
hN(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g
for(s=a.c,r=a.b;a.d<s;){q=a.ak(4)
p=a.m()
o=p+1>>>1<<1>>>0
n=a.d
m=n-r
switch(q){case"VP8X":if(!this.kR(a,b))return!1
break
case"VP8 ":b.ay=m
b.ch=p
b.f=B.aP
break
case"VP8L":b.ay=m
b.ch=p
b.f=B.at
break
case"ALPH":b.toString
n=a.a
l=a.e
k=J.R(n)
j=k.gn(n)
k=k.gn(n)
n=new A.ay(n,0,Math.min(j,k),0,l)
b.at=n
n.d=a.d
a.d+=o
break
case"ANIM":b.f=B.ks
i=a.m()
n=new Uint8Array(4)
if(0>=4)return A.a(n,0)
n[0]=i>>>8&255
if(1>=4)return A.a(n,1)
n[1]=i>>>16&255
if(2>=4)return A.a(n,2)
n[2]=i>>>24&255
if(3>=4)return A.a(n,3)
n[3]=i&255
a.p()
break
case"ANMF":if(!this.kO(a,b,p))return!1
break
case"ICCP":b.toString
h=a.am(p)
a.d=a.d+(h.c-h.d)
h.a4()
break
case"EXIF":b.toString
b.w=a.ak(p)
break
case"XMP ":b.toString
a.ak(p)
break
default:a.d=n+o
break}n=a.d
g=o-(n-r-m)
if(g>0)a.d=n+g}if(!b.d)b.d=b.at!=null
return b.f!==B.a7},
kR(a,b){var s,r,q,p,o=a.G()
if((o&192)!==0)return!1
s=B.a.l(o,4)
r=B.a.l(o,1)
if((o&1)!==0)return!1
if(a.bw()!==0)return!1
q=a.bw()
p=a.bw()
b.a=q+1
b.b=p+1
b.e=(r&1)!==0
b.d=(s&1)!==0
return!0},
kO(a,b,c){var s,r=a.bw(),q=a.bw()
a.bw()
a.bw()
s=new A.ic(r*2,q*2,a.bw())
s.jt(a,c)
if(s.r!==0)return!1
B.c.C(b.z,s)
return!0}}
A.kG.prototype={
ap(){return"IccProfileCompression."+this.b}}
A.eM.prototype={}
A.hQ.prototype={
ap(){return"FrameType."+this.b}}
A.bM.prototype={
gbD(){var s=this.x
if(s===$){s=A.b([],t.g)
this.scR(s)}return s},
jk(a,b,c,d){var s,r,q,p=this,o=a.gM(),n=a.gcI(),m=a.a
p.fX(d,b,o,n,m==null?null:m.gS())
o=a.b
if(o!=null)p.se6(A.f2(o,t.N,t.I))
o=a.d
if(o!=null){n=t.N
p.sec(A.f2(o,n,n))}B.c.C(p.gbD(),p)
if(!c){s=a.gbD().length
for(o=t.g,r=1;r<s;++r){q=a.x
if(q===$){q=A.b([],o)
a.scR(q)}if(!(r<q.length))return A.a(q,r)
p.bC(A.po(q[r],b,!1,d))}}},
jj(a,b,c){var s,r,q,p,o=this,n=a.b
if(n!=null)o.se6(A.f2(n,t.N,t.I))
n=a.d
if(n!=null){s=t.N
o.sec(A.f2(n,s,s))}B.c.C(o.gbD(),o)
if(!b&&a.gbD().length>1){r=a.gbD().length
for(n=t.g,q=1;q<r;++q){p=a.x
if(p===$){p=A.b([],n)
a.scR(p)}if(!(q<p.length))return A.a(p,q)
o.bC(A.hW(p[q],!1,!1))}}},
bC(a){var s=this
if(a==null)a=A.hW(s,!0,!0)
a.z=s.gbD().length
if(B.c.gbs(s.gbD())!==a)B.c.C(s.gbD(),a)
return a},
mo(){return this.bC(null)},
fX(a,b,c,d,e){var s,r,q=this,p=null
switch(c.a){case 0:if(e==null){s=B.b.bh(a*d/8)
r=new A.dF($,s,p,a,b,d)
s=Math.max(s*b,1)
r.d=new Uint8Array(s)
q.a=r}else{s=B.b.bh(a/8)
r=new A.dF($,s,e,a,b,1)
s=Math.max(s*b,1)
r.d=new Uint8Array(s)
q.a=r}break
case 1:if(e==null){s=B.b.bh(a*(d<<1>>>0)/8)
r=new A.dH($,s,p,a,b,d)
s=Math.max(s*b,1)
r.d=new Uint8Array(s)
q.a=r}else{s=B.b.bh(a/4)
r=new A.dH($,s,e,a,b,1)
s=Math.max(s*b,1)
r.d=new Uint8Array(s)
q.a=r}break
case 2:if(e==null){if(d===2)s=a
else if(d===4)s=a*2
else s=d===3?B.b.bh(a*1.5):B.b.bh(a/2)
r=new A.dJ($,s,p,a,b,d)
s=Math.max(s*b,1)
r.d=new Uint8Array(s)
q.a=r}else{s=B.b.bh(a/2)
r=new A.dJ($,s,e,a,b,1)
s=Math.max(s*b,1)
r.d=new Uint8Array(s)
q.a=r}break
case 3:if(e==null)q.a=A.pp(a,b,d)
else q.a=new A.dK(new Uint8Array(a*b),e,a,b,1)
break
case 4:s=a*b
if(e==null)q.a=new A.dG(new Uint16Array(s*d),p,a,b,d)
else q.a=new A.dG(new Uint16Array(s),e,a,b,1)
break
case 5:q.a=A.tt(a,b,d)
break
case 6:q.a=new A.eQ(new Int8Array(a*b*d),a,b,d)
break
case 7:q.a=new A.eO(new Int16Array(a*b*d),a,b,d)
break
case 8:q.a=new A.eP(new Int32Array(a*b*d),a,b,d)
break
case 9:q.a=A.tr(a,b,d)
break
case 10:q.a=A.ts(a,b,d)
break
case 11:q.a=new A.eN(new Float64Array(a*b*4*d),a,b,d)
break}},
t(a){var s=this
return"Image("+s.ga6()+", "+s.gV()+", "+s.gM().b+", "+s.gcI()+")"},
ga6(){var s=this.a
s=s==null?null:s.a
return s==null?0:s},
gV(){var s=this.a
s=s==null?null:s.b
return s==null?0:s},
gM(){var s=this.a
s=s==null?null:s.gM()
return s==null?B.h:s},
gi8(){var s=this.e
return s==null?this.e=new A.cx(A.H(t.N,t.a)):s},
iT(a,b){var s=this
if(s.b==null)s.se6(A.H(t.N,t.I))
s.b.h(0,a,b)
if(s.b.a===0)s.se6(null)},
gJ(a){var s=this.a
return s.gJ(s)},
gE(a){var s=this.a
s=s==null?null:s.gE(s)
if(s==null)s=B.f.gE(new Uint8Array(0))
return s},
gcI(){var s=this.a
s=s==null?null:s.gS()
s=s==null?null:s.b
if(s==null){s=this.a
s=s==null?null:s.c}return s==null?0:s},
ge8(){var s=this.a
return(s==null?null:s.gS())!=null},
ij(a,b){return a>=0&&b>=0&&a<this.ga6()&&b<this.gV()},
aZ(a,b,c,d){var s=this.a
s=s==null?null:s.aZ(a,b,c,d)
if(s==null)s=new A.bI(new Uint8Array(0))
return s},
a5(a,b,c){var s=this.a
s=s==null?null:s.a5(a,b,c)
return s==null?new A.ad():s},
fw(a,b){return this.a5(a,b,null)},
aB(a,b){if(a<0||a>=this.ga6()||b<0||b>=this.gV())return new A.ad()
return this.a5(a,b,null)},
iO(a,b,c){switch(c.a){case 0:return this.aB(B.b.j(a),B.b.j(b))
case 1:case 3:return this.iP(a,b)
case 2:return this.iN(a,b)}},
iP(a,b){var s,r,q,p,o,n,m=this,l=B.b.j(a),k=l-(a>=0?0:1),j=k+1
l=B.b.j(b)
s=l-(b>=0?0:1)
r=s+1
l=new A.kL(a-k,b-s)
q=m.aB(k,s)
p=r>=m.gV()?q:m.aB(k,r)
o=j>=m.ga6()?q:m.aB(j,s)
n=j>=m.ga6()||r>=m.gV()?q:m.aB(j,r)
return m.aZ(l.$4(q.gq(),o.gq(),p.gq(),n.gq()),l.$4(q.gu(),o.gu(),p.gu(),n.gu()),l.$4(q.gA(),o.gA(),p.gA(),n.gA()),l.$4(q.gv(),o.gv(),p.gv(),n.gv()))},
iN(d2,d3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6=this,c7=B.b.j(d2),c8=c7-(d2>=0?0:1),c9=c8-1,d0=c8+1,d1=c8+2
c7=B.b.j(d3)
s=c7-(d3>=0?0:1)
r=s-1
q=s+1
p=s+2
o=d2-c8
n=d3-s
c7=new A.kK()
m=c6.aB(c8,s)
l=c9<0
k=!l
j=!k||r<0?m:c6.aB(c9,r)
i=l?m:c6.aB(c8,r)
h=r<0
g=h||d0>=c6.ga6()?m:c6.aB(d0,r)
f=d1>=c6.ga6()||h?m:c6.aB(d1,r)
e=c7.$5(o,j.gq(),i.gq(),g.gq(),f.gq())
d=c7.$5(o,j.gu(),i.gu(),g.gu(),f.gu())
c=c7.$5(o,j.gA(),i.gA(),g.gA(),f.gA())
b=c7.$5(o,j.gv(),i.gv(),g.gv(),f.gv())
a=l?m:c6.aB(c9,s)
a0=d0>=c6.ga6()?m:c6.aB(d0,s)
a1=d1>=c6.ga6()?m:c6.aB(d1,s)
a2=c7.$5(o,a.gq(),m.gq(),a0.gq(),a1.gq())
a3=c7.$5(o,a.gu(),m.gu(),a0.gu(),a1.gu())
a4=c7.$5(o,a.gA(),m.gA(),a0.gA(),a1.gA())
a5=c7.$5(o,a.gv(),m.gv(),a0.gv(),a1.gv())
a6=!k||q>=c6.gV()?m:c6.aB(c9,q)
a7=q>=c6.gV()?m:c6.aB(c8,q)
a8=d0>=c6.ga6()||q>=c6.gV()?m:c6.aB(d0,q)
a9=d1>=c6.ga6()||q>=c6.gV()?m:c6.aB(d1,q)
b0=c7.$5(o,a6.gq(),a7.gq(),a8.gq(),a9.gq())
b1=c7.$5(o,a6.gu(),a7.gu(),a8.gu(),a9.gu())
b2=c7.$5(o,a6.gA(),a7.gA(),a8.gA(),a9.gA())
b3=c7.$5(o,a6.gv(),a7.gv(),a8.gv(),a9.gv())
b4=!k||p>=c6.gV()?m:c6.aB(c9,p)
b5=p>=c6.gV()?m:c6.aB(c8,p)
b6=d0>=c6.ga6()||p>=c6.gV()?m:c6.aB(d0,p)
b7=d1>=c6.ga6()||p>=c6.gV()?m:c6.aB(d1,p)
b8=c7.$5(o,b4.gq(),b5.gq(),b6.gq(),b7.gq())
b9=c7.$5(o,b4.gu(),b5.gu(),b6.gu(),b7.gu())
c0=c7.$5(o,b4.gA(),b5.gA(),b6.gA(),b7.gA())
c1=c7.$5(o,b4.gv(),b5.gv(),b6.gv(),b7.gv())
c2=c7.$5(n,e,a2,b0,b8)
c3=c7.$5(n,d,a3,b1,b9)
c4=c7.$5(n,c,a4,b2,c0)
c5=c7.$5(n,b,a5,b3,c1)
return c6.aZ(B.b.j(c2),B.b.j(c3),B.b.j(c4),B.b.j(c5))},
dw(a,b,c){var s
if(c.gbl().gS()!=null)if(this.ge8()){s=this.a
if(s!=null)s.T(a,b,c.gW(),0,0)
return}s=this.a
if(s!=null)s.aC(a,b,c.gq(),c.gu(),c.gA(),c.gv())},
gF(){var s=this.a
s=s==null?null:s.gF()
return s==null?0:s},
aV(a,b){var s=this.a
return s==null?null:s.aV(0,b)},
eY(a){return this.aV(0,null)},
i3(a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this,a4=null,a5=a3.gM(),a6=B.bU.k(0,a5),a7=!1
if(a5===a3.gM())if(a8===a3.gcI()){s=a3.a
a7=(s==null?a4:s.gS())==null}if(a7)return A.hW(a3,!1,!1)
for(a7=a3.gbD(),s=a7.length,r=t.N,q=t.p,p=a4,o=0;o<a7.length;a7.length===s||(0,A.aI)(a7),++o,p=f){n=a7[o]
m=n.a
l=m==null
k=l?a4:m.a
if(k==null)k=0
m=l?a4:m.b
if(m==null)m=0
l=n.e
l=l==null?a4:A.hI(l)
j=n.c
if(j==null)j=a4
else{i=j.a
h=j.b
j=j.c
j=new A.eM(i,h,new Uint8Array(j.subarray(0,A.br(0,a4,j.length))))}i=n.w
h=n.r
g=A.a0(a4,l,a5,n.y,i,m,j,h,a8,a4,B.h,k,!1)
m=n.d
g.sec(m!=null?A.f2(m,r,r):a4)
if(p!=null){p.bC(g)
f=p}else f=g
m=g.a
e=m==null?a4:m.gS()
m=g.a
m=m==null?a4:m.gS()
d=m==null?a4:m.gM()
if(d==null)d=a5
m=n.a
if(e!=null){c=A.H(q,q)
b=m==null?a4:m.a5(0,0,a4)
if(b==null)b=new A.ad()
for(m=g.a,m=m.gJ(m),a=a4,a0=0;m.B();){a1=m.gK()
a2=A.r7(B.b.c5(b.gad()*255),B.b.c5(b.ga7()*255),B.b.c5(b.gac()*255),0)
if(c.a_(a2)){l=c.k(0,a2)
l.toString
a1.sW(l)}else{c.h(0,a2,a0)
a1.sW(a0)
a=A.b0(b,a6,d,a8,a)
e.bn(a0,a.gq(),a.gu(),a.gA());++a0}b.B()}}else{b=m==null?a4:m.a5(0,0,a4)
if(b==null)b=new A.ad()
for(m=g.a,m=m.gJ(m);m.B();){A.b0(b,a6,a4,a4,m.gK())
b.B()}}}p.toString
return p},
mq(a){var s,r,q,p
t.f.a(a)
if(this.d==null){s=t.N
this.sec(A.H(s,s))}for(s=A.dS(a,a.r,A.k(a).c);s.B();){r=s.d
q=this.d
q.toString
p=a.k(0,r)
p.toString
q.h(0,r,p)}},
k9(a,b,c){var s,r=65536
switch(b.a){case 0:return null
case 1:return null
case 2:return null
case 3:s=a===B.n?r:256
return new A.bn(new Uint8Array(s*c),s,c)
case 4:s=a===B.n?r:256
return new A.fn(new Uint16Array(s*c),s,c)
case 5:s=a===B.n?r:256
return new A.fo(new Uint32Array(s*c),s,c)
case 6:s=a===B.n?r:256
return new A.fm(new Int8Array(s*c),s,c)
case 7:s=a===B.n?r:256
return new A.fk(new Int16Array(s*c),s,c)
case 8:s=a===B.n?r:256
return new A.fl(new Int32Array(s*c),s,c)
case 9:s=a===B.n?r:256
return new A.fh(new Uint16Array(s*c),s,c)
case 10:s=a===B.n?r:256
return new A.fi(new Float32Array(s*c),s,c)
case 11:s=a===B.n?r:256
return new A.fj(new Float64Array(s*c),s,c)}},
se6(a){this.b=t.i1.a(a)},
sec(a){this.d=t.w.a(a)},
scR(a){this.x=t.aL.a(a)}}
A.kL.prototype={
$4(a,b,c,d){var s=this.b
return a+this.a*(b-a+s*(a+d-c-b))+s*(c-a)},
$S:46}
A.kK.prototype={
$5(a,b,c,d,e){var s=-b,r=a*a
return c+0.5*(a*(s+d)+r*(2*b-5*c+4*d-e)+r*a*(s+3*c-3*d+e))},
$S:47}
A.av.prototype={
gS(){return null}}
A.dD.prototype={
br(a){var s=this,r=s.d
if(a)r=new Uint16Array(r.length)
else r=new Uint16Array(A.C(r))
return new A.dD(r,s.a,s.b,s.c)},
gM(){return B.G},
gE(a){return B.C.gE(this.d)},
gJ(a){return A.nX(this)},
bm(a,b,c,d,e){return A.bo(A.nX(this),b,c,d,e)},
gn(a){return this.d.byteLength},
gF(){return 1},
aZ(a,b,c,d){var s=new Uint16Array(4),r=new A.di(s),q=A.N(a)
if(0>=4)return A.a(s,0)
s[0]=q
q=A.N(b)
if(1>=4)return A.a(s,1)
s[1]=q
q=A.N(c)
if(2>=4)return A.a(s,2)
s[2]=q
q=A.N(d)
if(3>=4)return A.a(s,3)
s[3]=q
s=r
return s},
a5(a,b,c){if(c==null||!(c instanceof A.cL)||c.d!==this)c=A.nX(this)
c.a2(a,b)
return c},
aU(a,b,c){var s,r=this.c,q=b*this.a*r+a*r
r=this.d
s=A.N(c)
r.$flags&2&&A.c(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s},
T(a,b,c,d,e){var s,r,q=this.c,p=b*this.a*q+a*q,o=this.d,n=A.N(c)
o.$flags&2&&A.c(o)
s=o.length
if(!(p>=0&&p<s))return A.a(o,p)
o[p]=n
if(q>1){n=p+1
r=A.N(d)
if(!(n<s))return A.a(o,n)
o[n]=r
if(q>2){q=p+2
n=A.N(e)
if(!(q<s))return A.a(o,q)
o[q]=n}}},
aC(a,b,c,d,e,f){var s,r,q=this.c,p=b*this.a*q+a*q,o=this.d,n=A.N(c)
o.$flags&2&&A.c(o)
s=o.length
if(!(p>=0&&p<s))return A.a(o,p)
o[p]=n
if(q>1){n=p+1
r=A.N(d)
if(!(n<s))return A.a(o,n)
o[n]=r
if(q>2){n=p+2
r=A.N(e)
if(!(n<s))return A.a(o,n)
o[n]=r
if(q>3){q=p+3
n=A.N(f)
if(!(q<s))return A.a(o,q)
o[q]=n}}}},
t(a){return"ImageDataFloat16("+this.a+", "+this.b+", "+this.c+")"},
aV(a,b){}}
A.dE.prototype={
br(a){var s=this,r=s.d
if(a)r=new Float32Array(r.length)
else r=new Float32Array(A.C(r))
return new A.dE(r,s.a,s.b,s.c)},
gM(){return B.M},
gE(a){return B.P.gE(this.d)},
gJ(a){return A.nY(this)},
bm(a,b,c,d,e){return A.bo(A.nY(this),b,c,d,e)},
gn(a){return this.d.byteLength},
gF(){return 1},
aZ(a,b,c,d){var s=new Float32Array(4),r=new A.dj(s)
if(0>=4)return A.a(s,0)
s[0]=a
if(1>=4)return A.a(s,1)
s[1]=b
if(2>=4)return A.a(s,2)
s[2]=c
if(3>=4)return A.a(s,3)
s[3]=d
s=r
return s},
a5(a,b,c){if(c==null||!(c instanceof A.cM)||c.d!==this)c=A.nY(this)
c.a2(a,b)
return c},
aU(a,b,c){var s=this.c,r=b*this.a*s+a*s
s=this.d
s.$flags&2&&A.c(s)
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=c},
T(a,b,c,d,e){var s,r,q=this.c,p=b*this.a*q+a*q,o=this.d
o.$flags&2&&A.c(o)
s=o.length
if(!(p>=0&&p<s))return A.a(o,p)
o[p]=c
if(q>1){r=p+1
if(!(r<s))return A.a(o,r)
o[r]=d
if(q>2){q=p+2
if(!(q<s))return A.a(o,q)
o[q]=e}}},
aC(a,b,c,d,e,f){var s,r,q=this.c,p=b*this.a*q+a*q,o=this.d
o.$flags&2&&A.c(o)
s=o.length
if(!(p>=0&&p<s))return A.a(o,p)
o[p]=c
if(q>1){r=p+1
if(!(r<s))return A.a(o,r)
o[r]=d
if(q>2){r=p+2
if(!(r<s))return A.a(o,r)
o[r]=e
if(q>3){q=p+3
if(!(q<s))return A.a(o,q)
o[q]=f}}}},
t(a){return"ImageDataFloat32("+this.a+", "+this.b+", "+this.c+")"},
aV(a,b){}}
A.eN.prototype={
br(a){var s=this,r=s.d
if(a)r=new Float64Array(r.length)
else r=new Float64Array(A.C(r))
return new A.eN(r,s.a,s.b,s.c)},
gM(){return B.R},
gE(a){return B.Q.gE(this.d)},
gn(a){return this.d.byteLength},
gJ(a){return A.nZ(this)},
bm(a,b,c,d,e){return A.bo(A.nZ(this),b,c,d,e)},
gF(){return 1},
aZ(a,b,c,d){var s=new Float64Array(4),r=new A.dk(s)
if(0>=4)return A.a(s,0)
s[0]=a
if(1>=4)return A.a(s,1)
s[1]=b
if(2>=4)return A.a(s,2)
s[2]=c
if(3>=4)return A.a(s,3)
s[3]=d
s=r
return s},
a5(a,b,c){if(c==null||!(c instanceof A.cN)||c.d!==this)c=A.nZ(this)
c.a2(a,b)
return c},
aU(a,b,c){var s=this.c,r=b*this.a*s+a*s
s=this.d
s.$flags&2&&A.c(s)
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=c},
T(a,b,c,d,e){var s,r,q=this.c,p=b*this.a*q+a*q,o=this.d
o.$flags&2&&A.c(o)
s=o.length
if(!(p>=0&&p<s))return A.a(o,p)
o[p]=c
if(q>1){r=p+1
if(!(r<s))return A.a(o,r)
o[r]=d
if(q>2){q=p+2
if(!(q<s))return A.a(o,q)
o[q]=e}}},
aC(a,b,c,d,e,f){var s,r,q=this.c,p=b*this.a*q+a*q,o=this.d
o.$flags&2&&A.c(o)
s=o.length
if(!(p>=0&&p<s))return A.a(o,p)
o[p]=c
if(q>1){r=p+1
if(!(r<s))return A.a(o,r)
o[r]=d
if(q>2){r=p+2
if(!(r<s))return A.a(o,r)
o[r]=e
if(q>3){q=p+3
if(!(q<s))return A.a(o,q)
o[q]=f}}}},
t(a){return"ImageDataFloat64("+this.a+", "+this.b+", "+this.c+")"},
aV(a,b){}}
A.eO.prototype={
br(a){var s=this,r=s.d
if(a)r=new Int16Array(r.length)
else r=new Int16Array(A.C(r))
return new A.eO(r,s.a,s.b,s.c)},
gM(){return B.T},
gE(a){return B.a0.gE(this.d)},
gJ(a){return A.o_(this)},
bm(a,b,c,d,e){return A.bo(A.o_(this),b,c,d,e)},
gn(a){return this.d.byteLength},
gF(){return 32767},
aZ(a,b,c,d){var s=B.b.j(a),r=B.b.j(b),q=B.b.j(c),p=B.b.j(d),o=new Int16Array(4),n=new A.dl(o)
if(0>=4)return A.a(o,0)
o[0]=s
if(1>=4)return A.a(o,1)
o[1]=r
if(2>=4)return A.a(o,2)
o[2]=q
if(3>=4)return A.a(o,3)
o[3]=p
s=n
return s},
a5(a,b,c){if(c==null||!(c instanceof A.cO)||c.d!==this)c=A.o_(this)
c.a2(a,b)
return c},
aU(a,b,c){var s,r=this.c,q=b*this.a*r+a*r
r=this.d
s=B.b.j(c)
r.$flags&2&&A.c(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s},
T(a,b,c,d,e){var s,r,q=this.c,p=b*this.a*q+a*q,o=this.d,n=B.b.j(c)
o.$flags&2&&A.c(o)
s=o.length
if(!(p>=0&&p<s))return A.a(o,p)
o[p]=n
if(q>1){n=p+1
r=B.b.j(d)
if(!(n<s))return A.a(o,n)
o[n]=r
if(q>2){q=p+2
n=B.b.j(e)
if(!(q<s))return A.a(o,q)
o[q]=n}}},
aC(a,b,c,d,e,f){var s,r,q=this.c,p=b*this.a*q+a*q,o=this.d,n=B.b.j(c)
o.$flags&2&&A.c(o)
s=o.length
if(!(p>=0&&p<s))return A.a(o,p)
o[p]=n
if(q>1){n=p+1
r=B.b.j(d)
if(!(n<s))return A.a(o,n)
o[n]=r
if(q>2){n=p+2
r=B.b.j(e)
if(!(n<s))return A.a(o,n)
o[n]=r
if(q>3){q=p+3
n=B.b.j(f)
if(!(q<s))return A.a(o,q)
o[q]=n}}}},
t(a){return"ImageDataInt16("+this.a+", "+this.b+", "+this.c+")"},
aV(a,b){}}
A.eP.prototype={
br(a){var s=this,r=s.d
if(a)r=new Int32Array(r.length)
else r=new Int32Array(A.C(r))
return new A.eP(r,s.a,s.b,s.c)},
gM(){return B.U},
gE(a){return B.a1.gE(this.d)},
gJ(a){return A.o0(this)},
bm(a,b,c,d,e){return A.bo(A.o0(this),b,c,d,e)},
gn(a){return this.d.byteLength},
gF(){return 2147483647},
aZ(a,b,c,d){var s=B.b.j(a),r=B.b.j(b),q=B.b.j(c),p=B.b.j(d),o=new Int32Array(4),n=new A.dm(o)
if(0>=4)return A.a(o,0)
o[0]=s
if(1>=4)return A.a(o,1)
o[1]=r
if(2>=4)return A.a(o,2)
o[2]=q
if(3>=4)return A.a(o,3)
o[3]=p
s=n
return s},
a5(a,b,c){if(c==null||!(c instanceof A.cP)||c.d!==this)c=A.o0(this)
c.a2(a,b)
return c},
aU(a,b,c){var s,r=this.c,q=b*this.a*r+a*r
r=this.d
s=B.b.j(c)
r.$flags&2&&A.c(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s},
T(a,b,c,d,e){var s,r,q=this.c,p=b*this.a*q+a*q,o=this.d,n=B.b.j(c)
o.$flags&2&&A.c(o)
s=o.length
if(!(p>=0&&p<s))return A.a(o,p)
o[p]=n
if(q>1){n=p+1
r=B.b.j(d)
if(!(n<s))return A.a(o,n)
o[n]=r
if(q>2){q=p+2
n=B.b.j(e)
if(!(q<s))return A.a(o,q)
o[q]=n}}},
aC(a,b,c,d,e,f){var s,r,q=this.c,p=b*this.a*q+a*q,o=this.d,n=B.b.j(c)
o.$flags&2&&A.c(o)
s=o.length
if(!(p>=0&&p<s))return A.a(o,p)
o[p]=n
if(q>1){n=p+1
r=B.b.j(d)
if(!(n<s))return A.a(o,n)
o[n]=r
if(q>2){n=p+2
r=B.b.j(e)
if(!(n<s))return A.a(o,n)
o[n]=r
if(q>3){q=p+3
n=B.b.j(f)
if(!(q<s))return A.a(o,q)
o[q]=n}}}},
t(a){return"ImageDataInt32("+this.a+", "+this.b+", "+this.c+")"},
aV(a,b){}}
A.eQ.prototype={
br(a){var s=this,r=s.d
if(a)r=new Int8Array(r.length)
else r=new Int8Array(A.C(r))
return new A.eQ(r,s.a,s.b,s.c)},
gM(){return B.S},
gE(a){return B.a2.gE(this.d)},
gJ(a){return A.o1(this)},
bm(a,b,c,d,e){return A.bo(A.o1(this),b,c,d,e)},
gn(a){return this.d.byteLength},
gF(){return 127},
aZ(a,b,c,d){var s=B.b.j(a),r=B.b.j(b),q=B.b.j(c),p=B.b.j(d),o=new Int8Array(4),n=new A.dn(o)
if(0>=4)return A.a(o,0)
o[0]=s
if(1>=4)return A.a(o,1)
o[1]=r
if(2>=4)return A.a(o,2)
o[2]=q
if(3>=4)return A.a(o,3)
o[3]=p
s=n
return s},
a5(a,b,c){if(c==null||!(c instanceof A.cQ)||c.d!==this)c=A.o1(this)
c.a2(a,b)
return c},
aU(a,b,c){var s,r=this.c,q=b*(this.a*r)+a*r
r=this.d
s=B.b.j(c)
r.$flags&2&&A.c(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s},
T(a,b,c,d,e){var s,r,q=this.c,p=b*(this.a*q)+a*q,o=this.d,n=B.b.j(c)
o.$flags&2&&A.c(o)
s=o.length
if(!(p>=0&&p<s))return A.a(o,p)
o[p]=n
if(q>1){n=p+1
r=B.b.j(d)
if(!(n<s))return A.a(o,n)
o[n]=r
if(q>2){q=p+2
n=B.b.j(e)
if(!(q<s))return A.a(o,q)
o[q]=n}}},
aC(a,b,c,d,e,f){var s,r,q=this.c,p=b*(this.a*q)+a*q,o=this.d,n=B.b.j(c)
o.$flags&2&&A.c(o)
s=o.length
if(!(p>=0&&p<s))return A.a(o,p)
o[p]=n
if(q>1){n=p+1
r=B.b.j(d)
if(!(n<s))return A.a(o,n)
o[n]=r
if(q>2){n=p+2
r=B.b.j(e)
if(!(n<s))return A.a(o,n)
o[n]=r
if(q>3){q=p+3
n=B.b.j(f)
if(!(q<s))return A.a(o,q)
o[q]=n}}}},
t(a){return"ImageDataInt8("+this.a+", "+this.b+", "+this.c+")"},
aV(a,b){}}
A.dF.prototype={
nE(a,b,c){var s=Math.max(this.e*b,1)
s=new Uint8Array(s)
this.d!==$&&A.oJ("data")
this.d=s},
br(a){var s,r=this,q=r.d
if(a){q===$&&A.e("data")
q=new Uint8Array(q.length)}else{q===$&&A.e("data")
q=new Uint8Array(A.C(q))}s=r.f
s=s==null?null:s.P()
return new A.dF(q,r.e,s,r.a,r.b,r.c)},
gM(){return B.A},
gn(a){var s=this.d
s===$&&A.e("data")
return s.byteLength},
gF(){var s=this.f
s=s==null?null:s.gF()
return s==null?1:s},
gE(a){var s=this.d
s===$&&A.e("data")
return B.f.gE(s)},
gJ(a){return A.fp(this)},
bm(a,b,c,d,e){return A.bo(A.fp(this),b,c,d,e)},
aZ(a,b,c,d){var s=new A.dq(4,0)
s.a9(B.b.j(a),B.b.j(b),B.b.j(c),B.b.j(d))
return s},
a5(a,b,c){if(c==null||!(c instanceof A.cR)||c.f!==this)c=A.fp(this)
c.a2(a,b)
return c},
aU(a,b,c){var s,r=this
if(r.c<1)return
s=r.r;(s==null?r.r=A.fp(r):s).a2(a,b)
r.r.aE(0,c)},
T(a,b,c,d,e){var s,r=this
if(r.c<1)return
s=r.r;(s==null?r.r=A.fp(r):s).a2(a,b)
r.r.aD(c,d,e)},
aC(a,b,c,d,e,f){var s,r=this
if(r.c<1)return
s=r.r;(s==null?r.r=A.fp(r):s).a2(a,b)
r.r.a9(c,d,e,f)},
t(a){return"ImageDataUint1("+this.a+", "+this.b+", "+this.c+")"},
aV(a,b){},
gS(){return this.f}}
A.dG.prototype={
br(a){var s,r=this,q=r.d
if(a)q=new Uint16Array(q.length)
else q=new Uint16Array(A.C(q))
s=r.e
s=s==null?null:s.P()
return new A.dG(q,s,r.a,r.b,r.c)},
gM(){return B.n},
gE(a){return B.C.gE(this.d)},
gF(){var s=this.e
s=s==null?null:s.gF()
return s==null?65535:s},
gJ(a){return A.o2(this)},
bm(a,b,c,d,e){return A.bo(A.o2(this),b,c,d,e)},
gn(a){return this.d.byteLength},
aZ(a,b,c,d){var s=B.b.j(a),r=B.b.j(b),q=B.b.j(c),p=B.b.j(d),o=new Uint16Array(4),n=new A.dr(o)
if(0>=4)return A.a(o,0)
o[0]=s
if(1>=4)return A.a(o,1)
o[1]=r
if(2>=4)return A.a(o,2)
o[2]=q
if(3>=4)return A.a(o,3)
o[3]=p
s=n
return s},
a5(a,b,c){if(c==null||!(c instanceof A.cS)||c.d!==this)c=A.o2(this)
c.a2(a,b)
return c},
aU(a,b,c){var s,r=this.c,q=b*this.a*r+a*r
r=this.d
s=B.b.j(c)
r.$flags&2&&A.c(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s},
T(a,b,c,d,e){var s,r,q=this.c,p=b*this.a*q+a*q,o=this.d,n=B.b.j(c)
o.$flags&2&&A.c(o)
s=o.length
if(!(p>=0&&p<s))return A.a(o,p)
o[p]=n
if(q>1){n=p+1
r=B.b.j(d)
if(!(n<s))return A.a(o,n)
o[n]=r
if(q>2){q=p+2
n=B.b.j(e)
if(!(q<s))return A.a(o,q)
o[q]=n}}},
aC(a,b,c,d,e,f){var s,r,q=this.c,p=b*this.a*q+a*q,o=this.d,n=B.b.j(c)
o.$flags&2&&A.c(o)
s=o.length
if(!(p>=0&&p<s))return A.a(o,p)
o[p]=n
if(q>1){n=p+1
r=B.b.j(d)
if(!(n<s))return A.a(o,n)
o[n]=r
if(q>2){n=p+2
r=B.b.j(e)
if(!(n<s))return A.a(o,n)
o[n]=r
if(q>3){q=p+3
n=B.b.j(f)
if(!(q<s))return A.a(o,q)
o[q]=n}}}},
t(a){return"ImageDataUint16("+this.a+", "+this.b+", "+this.c+")"},
aV(a,b){},
gS(){return this.e}}
A.dH.prototype={
nF(a,b,c){var s=Math.max(this.e*b,1)
s=new Uint8Array(s)
this.d!==$&&A.oJ("data")
this.d=s},
br(a){var s,r=this,q=r.d
if(a){q===$&&A.e("data")
q=new Uint8Array(q.length)}else{q===$&&A.e("data")
q=new Uint8Array(A.C(q))}s=r.f
s=s==null?null:s.P()
return new A.dH(q,r.e,s,r.a,r.b,r.c)},
gM(){return B.D},
gE(a){var s=this.d
s===$&&A.e("data")
return B.f.gE(s)},
gJ(a){return A.fq(this)},
bm(a,b,c,d,e){return A.bo(A.fq(this),b,c,d,e)},
gn(a){var s=this.d
s===$&&A.e("data")
return s.byteLength},
gF(){var s=this.f
s=s==null?null:s.gF()
return s==null?3:s},
aZ(a,b,c,d){var s=new A.ds(4,0)
s.a9(B.b.j(a),B.b.j(b),B.b.j(c),B.b.j(d))
return s},
a5(a,b,c){if(c==null||!(c instanceof A.cT)||c.f!==this)c=A.fq(this)
c.a2(a,b)
return c},
aU(a,b,c){var s,r=this
if(r.c<1)return
s=r.r;(s==null?r.r=A.fq(r):s).a2(a,b)
r.r.aF(0,c)},
T(a,b,c,d,e){var s,r=this
if(r.c<1)return
s=r.r;(s==null?r.r=A.fq(r):s).a2(a,b)
r.r.aD(c,d,e)},
aC(a,b,c,d,e,f){var s,r=this
if(r.c<1)return
s=r.r;(s==null?r.r=A.fq(r):s).a2(a,b)
r.r.a9(c,d,e,f)},
t(a){return"ImageDataUint2("+this.a+", "+this.b+", "+this.c+")"},
aV(a,b){},
gS(){return this.f}}
A.dI.prototype={
br(a){var s=this,r=s.d
if(a)r=new Uint32Array(r.length)
else r=new Uint32Array(A.C(r))
return new A.dI(r,s.a,s.b,s.c)},
gM(){return B.N},
gE(a){return B.m.gE(this.d)},
gF(){return 4294967295},
gJ(a){return A.o3(this)},
bm(a,b,c,d,e){return A.bo(A.o3(this),b,c,d,e)},
gn(a){return this.d.byteLength},
aZ(a,b,c,d){var s=B.b.j(a),r=B.b.j(b),q=B.b.j(c),p=B.b.j(d),o=new Uint32Array(4),n=new A.dt(o)
if(0>=4)return A.a(o,0)
o[0]=s
if(1>=4)return A.a(o,1)
o[1]=r
if(2>=4)return A.a(o,2)
o[2]=q
if(3>=4)return A.a(o,3)
o[3]=p
s=n
return s},
a5(a,b,c){if(c==null||!(c instanceof A.cU)||c.d!==this)c=A.o3(this)
c.a2(a,b)
return c},
aU(a,b,c){var s,r=this.c,q=b*this.a*r+a*r
r=this.d
s=B.b.j(c)
r.$flags&2&&A.c(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s},
T(a,b,c,d,e){var s,r,q=this.c,p=b*this.a*q+a*q,o=this.d,n=B.b.j(c)
o.$flags&2&&A.c(o)
s=o.length
if(!(p>=0&&p<s))return A.a(o,p)
o[p]=n
if(q>1){n=p+1
r=B.b.j(d)
if(!(n<s))return A.a(o,n)
o[n]=r
if(q>2){q=p+2
n=B.b.j(e)
if(!(q<s))return A.a(o,q)
o[q]=n}}},
aC(a,b,c,d,e,f){var s,r,q=this.c,p=b*this.a*q+a*q,o=this.d,n=B.b.j(c)
o.$flags&2&&A.c(o)
s=o.length
if(!(p>=0&&p<s))return A.a(o,p)
o[p]=n
if(q>1){n=p+1
r=B.b.j(d)
if(!(n<s))return A.a(o,n)
o[n]=r
if(q>2){n=p+2
r=B.b.j(e)
if(!(n<s))return A.a(o,n)
o[n]=r
if(q>3){q=p+3
n=B.b.j(f)
if(!(q<s))return A.a(o,q)
o[q]=n}}}},
t(a){return"ImageDataUint32("+this.a+", "+this.b+", "+this.c+")"},
aV(a,b){}}
A.dJ.prototype={
nG(a,b,c){var s=Math.max(this.e*b,1)
s=new Uint8Array(s)
this.d!==$&&A.oJ("data")
this.d=s},
br(a){var s,r=this,q=r.d
if(a){q===$&&A.e("data")
q=new Uint8Array(q.length)}else{q===$&&A.e("data")
q=new Uint8Array(A.C(q))}s=r.f
s=s==null?null:s.P()
return new A.dJ(q,r.e,s,r.a,r.b,r.c)},
gM(){return B.E},
gE(a){var s=this.d
s===$&&A.e("data")
return B.f.gE(s)},
gJ(a){return A.fr(this)},
bm(a,b,c,d,e){return A.bo(A.fr(this),b,c,d,e)},
gn(a){var s=this.d
s===$&&A.e("data")
return s.byteLength},
gF(){var s=this.f
s=s==null?null:s.gF()
return s==null?15:s},
aZ(a,b,c,d){var s=B.b.j(a),r=B.b.j(b),q=B.b.j(c),p=B.b.j(d),o=new A.du(4,new Uint8Array(2))
o.a9(s,r,q,p)
s=o
return s},
a5(a,b,c){if(c==null||!(c instanceof A.cV)||c.e!==this)c=A.fr(this)
c.a2(a,b)
return c},
aU(a,b,c){var s,r=this
if(r.c<1)return
s=r.r;(s==null?r.r=A.fr(r):s).a2(a,b)
r.r.aG(0,c)},
T(a,b,c,d,e){var s,r=this
if(r.c<1)return
s=r.r;(s==null?r.r=A.fr(r):s).a2(a,b)
r.r.aD(c,d,e)},
aC(a,b,c,d,e,f){var s,r=this
if(r.c<1)return
s=r.r;(s==null?r.r=A.fr(r):s).a2(a,b)
r.r.a9(c,d,e,f)},
t(a){return"ImageDataUint4("+this.a+", "+this.b+", "+this.c+")"},
aV(a,b){},
gS(){return this.f}}
A.dK.prototype={
br(a){var s,r=this,q=r.d
if(a)q=new Uint8Array(q.length)
else q=new Uint8Array(A.C(q))
s=r.e
s=s==null?null:s.P()
return new A.dK(q,s,r.a,r.b,r.c)},
gM(){return B.h},
gE(a){return B.f.gE(this.d)},
gJ(a){return A.lf(this)},
bm(a,b,c,d,e){return A.bo(A.lf(this),b,c,d,e)},
gn(a){return this.d.byteLength},
gF(){var s=this.e
s=s==null?null:s.gF()
return s==null?255:s},
aZ(a,b,c,d){var s=A.t6(B.b.j(B.b.L(a,0,255)),B.b.j(B.b.L(b,0,255)),B.b.j(B.b.L(c,0,255)),B.b.j(B.b.L(d,0,255)))
return s},
a5(a,b,c){if(c==null||!(c instanceof A.cW)||c.d!==this)c=A.lf(this)
c.a2(a,b)
return c},
aU(a,b,c){var s,r=this.c,q=b*(this.a*r)+a*r
r=this.d
s=B.b.j(c)
r.$flags&2&&A.c(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s},
T(a,b,c,d,e){var s,r,q=this.c,p=b*(this.a*q)+a*q,o=this.d,n=B.b.j(c)
o.$flags&2&&A.c(o)
s=o.length
if(!(p>=0&&p<s))return A.a(o,p)
o[p]=n
if(q>1){n=p+1
r=B.b.j(d)
if(!(n<s))return A.a(o,n)
o[n]=r
if(q>2){q=p+2
n=B.b.j(e)
if(!(q<s))return A.a(o,q)
o[q]=n}}},
aC(a,b,c,d,e,f){var s,r,q=this.c,p=b*(this.a*q)+a*q,o=this.d,n=B.b.j(c)
o.$flags&2&&A.c(o)
s=o.length
if(!(p>=0&&p<s))return A.a(o,p)
o[p]=n
if(q>1){n=p+1
r=B.b.j(d)
if(!(n<s))return A.a(o,n)
o[n]=r
if(q>2){n=p+2
r=B.b.j(e)
if(!(n<s))return A.a(o,n)
o[n]=r
if(q>3){q=p+3
n=B.b.j(f)
if(!(q<s))return A.a(o,q)
o[q]=n}}}},
t(a){return"ImageDataUint8("+this.a+", "+this.b+", "+this.c+")"},
aV(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=b==null?g:A.b0(b,g,B.h,g,g),e=h.c
if(e===1){s=f==null?0:B.a.L(A.r(f.gq()),0,255)
e=h.d
B.f.aS(e,0,e.length,s)}else if(e===2){e=f==null
s=e?0:B.a.L(A.r(f.gq()),0,255)
r=e?0:B.a.L(A.r(f.gu()),0,255)
q=J.oT(B.f.gE(h.d),0,null)
B.C.aS(q,0,q.length,(r<<8|s)>>>0)}else if(e===4){e=f==null
s=e?0:B.a.L(A.r(f.gq()),0,255)
r=e?0:B.a.L(A.r(f.gu()),0,255)
p=e?0:B.a.L(A.r(f.gA()),0,255)
o=e?0:B.a.L(A.r(f.gv()),0,255)
n=J.aU(B.f.gE(h.d),0,null)
B.m.aS(n,0,n.length,(o<<24|p<<16|r<<8|s)>>>0)}else{e=f==null
s=e?0:B.a.L(A.r(f.gq()),0,255)
r=e?0:B.a.L(A.r(f.gu()),0,255)
p=e?0:B.a.L(A.r(f.gA()),0,255)
for(m=A.lf(h),e=m.d,l=e.c>0,e=e.d,k=e.$flags|0;m.B();){if(l){j=m.c
i=B.b.j(B.a.L(s,0,255))
k&2&&A.c(e)
if(!(j>=0&&j<e.length))return A.a(e,j)
e[j]=i}m.su(r)
m.sA(p)}}},
gS(){return this.e}}
A.eU.prototype={
ap(){return"Interpolation."+this.b}}
A.bd.prototype={}
A.fh.prototype={
P(){return new A.fh(new Uint16Array(A.C(this.c)),this.a,this.b)},
gM(){return B.G},
gF(){return 1},
U(a,b,c){var s,r,q=this.b
if(b<q){s=this.c
q=a*q+b
r=A.N(c)
s.$flags&2&&A.c(s)
if(!(q>=0&&q<s.length))return A.a(s,q)
s[q]=r}},
bn(a,b,c,d){var s,r,q,p,o=this.b
a*=o
s=this.c
r=A.N(b)
s.$flags&2&&A.c(s)
q=s.length
if(!(a>=0&&a<q))return A.a(s,a)
s[a]=r
if(o>1){r=a+1
p=A.N(c)
if(!(r<q))return A.a(s,r)
s[r]=p
if(o>2){o=a+2
r=A.N(d)
if(!(o<q))return A.a(s,o)
s[o]=r}}},
ba(a,b){var s,r=this.b
if(b<r){s=this.c
r=a*r+b
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=$.Y
s=s!=null?s:A.a6()
if(!(r<s.length))return A.a(s,r)
r=s[r]}else r=0
return r},
b0(a){var s,r
a*=this.b
s=this.c
if(!(a>=0&&a<s.length))return A.a(s,a)
s=s[a]
r=$.Y
r=r!=null?r:A.a6()
if(!(s<r.length))return A.a(r,s)
return r[s]},
b_(a){var s,r=this.b
if(r<2)return 0
s=this.c
r=a*r+1
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=$.Y
s=s!=null?s:A.a6()
if(!(r<s.length))return A.a(s,r)
return s[r]},
aY(a){var s,r=this.b
if(r<3)return 0
s=this.c
r=a*r+2
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=$.Y
s=s!=null?s:A.a6()
if(!(r<s.length))return A.a(s,r)
return s[r]},
bb(a){var s,r=this.b
if(r<4)return 0
s=this.c
r=a*r+3
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=$.Y
s=s!=null?s:A.a6()
if(!(r<s.length))return A.a(s,r)
return s[r]},
bK(a,b){return this.U(a,0,b)},
bJ(a,b){return this.U(a,1,b)},
bI(a,b){return this.U(a,2,b)},
bH(a,b){return this.U(a,3,b)}}
A.fi.prototype={
P(){return new A.fi(new Float32Array(A.C(this.c)),this.a,this.b)},
gM(){return B.M},
gF(){return 1},
U(a,b,c){var s,r=this.b
if(b<r){s=this.c
r=a*r+b
s.$flags&2&&A.c(s)
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=c}},
bn(a,b,c,d){var s,r,q,p=this.b
a*=p
s=this.c
s.$flags&2&&A.c(s)
r=s.length
if(!(a>=0&&a<r))return A.a(s,a)
s[a]=b
if(p>1){q=a+1
if(!(q<r))return A.a(s,q)
s[q]=c
if(p>2){p=a+2
if(!(p<r))return A.a(s,p)
s[p]=d}}},
ba(a,b){var s,r=this.b
if(b<r){s=this.c
r=a*r+b
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]}else r=0
return r},
b0(a){var s
a*=this.b
s=this.c
if(!(a>=0&&a<s.length))return A.a(s,a)
return s[a]},
b_(a){var s,r=this.b
if(r<2)return 0
s=this.c
r=a*r+1
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
aY(a){var s,r=this.b
if(r<3)return 0
s=this.c
r=a*r+2
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
bb(a){var s,r=this.b
if(r<4)return 0
s=this.c
r=a*r+3
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
bK(a,b){return this.U(a,0,b)},
bJ(a,b){return this.U(a,1,b)},
bI(a,b){return this.U(a,2,b)},
bH(a,b){return this.U(a,3,b)}}
A.fj.prototype={
P(){return new A.fj(new Float64Array(A.C(this.c)),this.a,this.b)},
gM(){return B.R},
gF(){return 1},
U(a,b,c){var s,r=this.b
if(b<r){s=this.c
r=a*r+b
s.$flags&2&&A.c(s)
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=c}},
bn(a,b,c,d){var s,r,q,p=this.b
a*=p
s=this.c
s.$flags&2&&A.c(s)
r=s.length
if(!(a>=0&&a<r))return A.a(s,a)
s[a]=b
if(p>1){q=a+1
if(!(q<r))return A.a(s,q)
s[q]=c
if(p>2){p=a+2
if(!(p<r))return A.a(s,p)
s[p]=d}}},
ba(a,b){var s,r=this.b
if(b<r){s=this.c
r=a*r+b
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]}else r=0
return r},
b0(a){var s
a*=this.b
s=this.c
if(!(a>=0&&a<s.length))return A.a(s,a)
return s[a]},
b_(a){var s,r=this.b
if(r<2)return 0
s=this.c
r=a*r+1
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
aY(a){var s,r=this.b
if(r<3)return 0
s=this.c
r=a*r+2
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
bb(a){var s,r=this.b
if(r<4)return 0
s=this.c
r=a*r+3
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
bK(a,b){return this.U(a,0,b)},
bJ(a,b){return this.U(a,1,b)},
bI(a,b){return this.U(a,2,b)},
bH(a,b){return this.U(a,3,b)}}
A.fk.prototype={
P(){return new A.fk(new Int16Array(A.C(this.c)),this.a,this.b)},
gM(){return B.T},
gF(){return 32767},
U(a,b,c){var s,r,q=this.b
if(b<q){s=this.c
q=a*q+b
r=B.a.j(c)
s.$flags&2&&A.c(s)
if(!(q>=0&&q<s.length))return A.a(s,q)
s[q]=r}},
bn(a,b,c,d){var s,r,q,p,o=this.b
a*=o
s=this.c
r=B.b.j(b)
s.$flags&2&&A.c(s)
q=s.length
if(!(a>=0&&a<q))return A.a(s,a)
s[a]=r
if(o>1){r=a+1
p=B.b.j(c)
if(!(r<q))return A.a(s,r)
s[r]=p
if(o>2){o=a+2
r=B.b.j(d)
if(!(o<q))return A.a(s,o)
s[o]=r}}},
ba(a,b){var s,r=this.b
if(b<r){s=this.c
r=a*r+b
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]}else r=0
return r},
b0(a){var s
a*=this.b
s=this.c
if(!(a>=0&&a<s.length))return A.a(s,a)
return s[a]},
b_(a){var s,r=this.b
if(r<2)return 0
s=this.c
r=a*r+1
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
aY(a){var s,r=this.b
if(r<3)return 0
s=this.c
r=a*r+2
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
bb(a){var s,r=this.b
if(r<4)return 0
s=this.c
r=a*r+3
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
bK(a,b){return this.U(a,0,b)},
bJ(a,b){return this.U(a,1,b)},
bI(a,b){return this.U(a,2,b)},
bH(a,b){return this.U(a,3,b)}}
A.fl.prototype={
P(){return new A.fl(new Int32Array(A.C(this.c)),this.a,this.b)},
gM(){return B.U},
gF(){return 2147483647},
U(a,b,c){var s,r,q=this.b
if(b<q){s=this.c
q=a*q+b
r=B.a.j(c)
s.$flags&2&&A.c(s)
if(!(q>=0&&q<s.length))return A.a(s,q)
s[q]=r}},
bn(a,b,c,d){var s,r,q,p,o=this.b
a*=o
s=this.c
r=B.b.j(b)
s.$flags&2&&A.c(s)
q=s.length
if(!(a>=0&&a<q))return A.a(s,a)
s[a]=r
if(o>1){r=a+1
p=B.b.j(c)
if(!(r<q))return A.a(s,r)
s[r]=p
if(o>2){o=a+2
r=B.b.j(d)
if(!(o<q))return A.a(s,o)
s[o]=r}}},
ba(a,b){var s,r=this.b
if(b<r){s=this.c
r=a*r+b
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]}else r=0
return r},
b0(a){var s
a*=this.b
s=this.c
if(!(a>=0&&a<s.length))return A.a(s,a)
return s[a]},
b_(a){var s,r=this.b
if(r<2)return 0
s=this.c
r=a*r+1
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
aY(a){var s,r=this.b
if(r<3)return 0
s=this.c
r=a*r+2
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
bb(a){var s,r=this.b
if(r<4)return 0
s=this.c
r=a*r+3
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
bK(a,b){return this.U(a,0,b)},
bJ(a,b){return this.U(a,1,b)},
bI(a,b){return this.U(a,2,b)},
bH(a,b){return this.U(a,3,b)}}
A.fm.prototype={
P(){return new A.fm(new Int8Array(A.C(this.c)),this.a,this.b)},
gM(){return B.S},
gF(){return 127},
U(a,b,c){var s,r,q=this.b
if(b<q){s=this.c
q=a*q+b
r=B.a.j(c)
s.$flags&2&&A.c(s)
if(!(q>=0&&q<s.length))return A.a(s,q)
s[q]=r}},
bn(a,b,c,d){var s,r,q,p,o=this.b
a*=o
s=this.c
r=B.b.j(b)
s.$flags&2&&A.c(s)
q=s.length
if(!(a>=0&&a<q))return A.a(s,a)
s[a]=r
if(o>1){r=a+1
p=B.b.j(c)
if(!(r<q))return A.a(s,r)
s[r]=p
if(o>2){o=a+2
r=B.b.j(d)
if(!(o<q))return A.a(s,o)
s[o]=r}}},
ba(a,b){var s,r=this.b
if(b<r){s=this.c
r=a*r+b
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]}else r=0
return r},
b0(a){var s
a*=this.b
s=this.c
if(!(a>=0&&a<s.length))return A.a(s,a)
return s[a]},
b_(a){var s,r=this.b
if(r<2)return 0
s=this.c
r=a*r+1
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
aY(a){var s,r=this.b
if(r<3)return 0
s=this.c
r=a*r+2
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
bb(a){var s,r=this.b
if(r<4)return 0
s=this.c
r=a*r+3
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
bK(a,b){return this.U(a,0,b)},
bJ(a,b){return this.U(a,1,b)},
bI(a,b){return this.U(a,2,b)},
bH(a,b){return this.U(a,3,b)}}
A.fn.prototype={
P(){return new A.fn(new Uint16Array(A.C(this.c)),this.a,this.b)},
gM(){return B.n},
gF(){return 65535},
U(a,b,c){var s,r,q=this.b
if(b<q){s=this.c
q=a*q+b
r=B.a.j(c)
s.$flags&2&&A.c(s)
if(!(q>=0&&q<s.length))return A.a(s,q)
s[q]=r}},
bn(a,b,c,d){var s,r,q,p,o=this.b
a*=o
s=this.c
r=B.b.j(b)
s.$flags&2&&A.c(s)
q=s.length
if(!(a>=0&&a<q))return A.a(s,a)
s[a]=r
if(o>1){r=a+1
p=B.b.j(c)
if(!(r<q))return A.a(s,r)
s[r]=p
if(o>2){o=a+2
r=B.b.j(d)
if(!(o<q))return A.a(s,o)
s[o]=r}}},
ba(a,b){var s,r=this.b
if(b<r){s=this.c
r=a*r+b
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]}else r=0
return r},
b0(a){var s
a*=this.b
s=this.c
if(!(a>=0&&a<s.length))return A.a(s,a)
return s[a]},
b_(a){var s,r=this.b
if(r<2)return 0
s=this.c
r=a*r+1
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
aY(a){var s,r=this.b
if(r<3)return 0
s=this.c
r=a*r+2
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
bb(a){var s,r=this.b
if(r<4)return 0
s=this.c
r=a*r+3
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
bK(a,b){return this.U(a,0,b)},
bJ(a,b){return this.U(a,1,b)},
bI(a,b){return this.U(a,2,b)},
bH(a,b){return this.U(a,3,b)}}
A.fo.prototype={
P(){return new A.fo(new Uint32Array(A.C(this.c)),this.a,this.b)},
gM(){return B.N},
gF(){return 4294967295},
U(a,b,c){var s,r,q=this.b
if(b<q){s=this.c
q=a*q+b
r=B.a.j(c)
s.$flags&2&&A.c(s)
if(!(q>=0&&q<s.length))return A.a(s,q)
s[q]=r}},
bn(a,b,c,d){var s,r,q,p,o=this.b
a*=o
s=this.c
r=B.b.j(b)
s.$flags&2&&A.c(s)
q=s.length
if(!(a>=0&&a<q))return A.a(s,a)
s[a]=r
if(o>1){r=a+1
p=B.b.j(c)
if(!(r<q))return A.a(s,r)
s[r]=p
if(o>2){o=a+2
r=B.b.j(d)
if(!(o<q))return A.a(s,o)
s[o]=r}}},
ba(a,b){var s,r=this.b
if(b<r){s=this.c
r=a*r+b
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]}else r=0
return r},
b0(a){var s
a*=this.b
s=this.c
if(!(a>=0&&a<s.length))return A.a(s,a)
return s[a]},
b_(a){var s,r=this.b
if(r<2)return 0
s=this.c
r=a*r+1
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
aY(a){var s,r=this.b
if(r<3)return 0
s=this.c
r=a*r+2
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
bb(a){var s,r=this.b
if(r<4)return 0
s=this.c
r=a*r+3
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
bK(a,b){return this.U(a,0,b)},
bJ(a,b){return this.U(a,1,b)},
bI(a,b){return this.U(a,2,b)},
bH(a,b){return this.U(a,3,b)}}
A.bn.prototype={
P(){return A.pB(this)},
gM(){return B.h},
gF(){return 255},
U(a,b,c){var s,r,q=this.b
if(b<q){s=this.c
q=a*q+b
r=B.a.j(c)
s.$flags&2&&A.c(s)
if(!(q>=0&&q<s.length))return A.a(s,q)
s[q]=r}},
bn(a,b,c,d){var s,r,q,p,o=this.b
a*=o
s=this.c
r=B.b.j(b)
s.$flags&2&&A.c(s)
q=s.length
if(!(a>=0&&a<q))return A.a(s,a)
s[a]=r
if(o>1){r=a+1
p=B.b.j(c)
if(!(r<q))return A.a(s,r)
s[r]=p
if(o>2){o=a+2
r=B.b.j(d)
if(!(o<q))return A.a(s,o)
s[o]=r}}},
dz(a,b,c,d,e){var s,r,q,p,o=this.b
a*=o
s=this.c
r=B.a.j(b)
s.$flags&2&&A.c(s)
q=s.length
if(!(a>=0&&a<q))return A.a(s,a)
s[a]=r
if(o>1){r=a+1
p=B.a.j(c)
if(!(r<q))return A.a(s,r)
s[r]=p
if(o>2){r=a+2
p=B.a.j(d)
if(!(r<q))return A.a(s,r)
s[r]=p
if(o>3){o=a+3
r=B.a.j(e)
if(!(o<q))return A.a(s,o)
s[o]=r}}}},
ba(a,b){var s,r=this.b
if(b<r){s=this.c
r=a*r+b
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]}else r=0
return r},
b0(a){var s,r
a*=this.b
s=this.c
r=s.length
if(a>=r)return 0
if(!(a>=0))return A.a(s,a)
return s[a]},
b_(a){var s,r,q=this.b
if(q<2)return 0
a*=q
q=this.c
s=q.length
if(a>=s)return 0
r=a+1
if(!(r>=0&&r<s))return A.a(q,r)
return q[r]},
aY(a){var s,r,q=this.b
if(q<3)return 0
a*=q
q=this.c
s=q.length
if(a>=s)return 0
r=a+2
if(!(r>=0&&r<s))return A.a(q,r)
return q[r]},
bb(a){var s,r,q=this.b
if(q<4)return 255
a*=q
q=this.c
s=q.length
if(a>=s)return 0
r=a+3
if(!(r>=0&&r<s))return A.a(q,r)
return q[r]},
bK(a,b){return this.U(a,0,b)},
bJ(a,b){return this.U(a,1,b)},
bI(a,b){return this.U(a,2,b)},
bH(a,b){return this.U(a,3,b)}}
A.cL.prototype={
P(){var s=this
return new A.cL(s.a,s.b,s.c,s.d)},
gM(){return B.G},
gn(a){return this.d.c},
gS(){return null},
gF(){return 1},
gb4(){return this.a},
gaX(){return this.b},
a2(a,b){var s,r,q=this
q.a=a
q.b=b
s=q.d
r=s.c
q.c=b*s.a*r+a*r},
gK(){return this},
B(){var s,r=this,q=r.d
if(++r.a===q.a){r.a=0
if(++r.b===q.b)return!1}s=r.c+q.c
r.c=s
return s<q.d.length},
k(a,b){var s,r=this.d
if(b<r.c){r=r.d
s=this.c+b
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=$.Y
r=r!=null?r:A.a6()
if(!(s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
h(a,b,c){var s,r,q=this.d
if(b<q.c){q=q.d
s=this.c+b
r=A.N(c)
q.$flags&2&&A.c(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gW(){return this.gq()},
sW(a){this.sq(a)},
gq(){var s,r=this.d
if(r.c>0){r=r.d
s=this.c
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=$.Y
r=r!=null?r:A.a6()
if(!(s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
sq(a){var s,r,q=this.d
if(q.c>0){q=q.d
s=this.c
r=A.N(a)
q.$flags&2&&A.c(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gu(){var s,r=this.d
if(r.c>1){r=r.d
s=this.c+1
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=$.Y
r=r!=null?r:A.a6()
if(!(s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
su(a){var s,r,q=this.d
if(q.c>1){q=q.d
s=this.c+1
r=A.N(a)
q.$flags&2&&A.c(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gA(){var s,r=this.d
if(r.c>2){r=r.d
s=this.c+2
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=$.Y
r=r!=null?r:A.a6()
if(!(s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
sA(a){var s,r,q=this.d
if(q.c>2){q=q.d
s=this.c+2
r=A.N(a)
q.$flags&2&&A.c(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gv(){var s,r=this.d
if(r.c>3){r=r.d
s=this.c+3
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=$.Y
r=r!=null?r:A.a6()
if(!(s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
sv(a){var s,r,q,p=this.d
if(p.c>3){s=this.gu()
p=p.d
r=this.c+3
q=A.N(s)
p.$flags&2&&A.c(p)
if(!(r>=0&&r<p.length))return A.a(p,r)
p[r]=q}},
gad(){return this.gq()/1},
sad(a){this.sq(a)},
ga7(){return this.gu()/1},
sa7(a){this.su(a)},
gac(){return this.gA()/1},
sac(a){this.sA(a)},
gai(){return this.gv()/1},
sai(a){this.sv(a)},
gau(){return A.ab(this)},
af(a){var s=this
if(s.d.c>0){s.sq(a.gq())
s.su(a.gu())
s.sA(a.gA())
s.sv(a.gv())}},
aD(a,b,c){var s,r,q,p=this,o=p.d,n=o.c
if(n>0){o=o.d
s=p.c
r=A.N(a)
o.$flags&2&&A.c(o)
q=o.length
if(!(s>=0&&s<q))return A.a(o,s)
o[s]=r
if(n>1){s=p.c+1
r=A.N(b)
if(!(s>=0&&s<q))return A.a(o,s)
o[s]=r
if(n>2){n=p.c+2
s=A.N(c)
if(!(n>=0&&n<q))return A.a(o,n)
o[n]=s}}}},
a9(a,b,c,d){var s,r,q,p=this,o=p.d,n=o.c
if(n>0){o=o.d
s=p.c
r=A.N(a)
o.$flags&2&&A.c(o)
q=o.length
if(!(s>=0&&s<q))return A.a(o,s)
o[s]=r
if(n>1){s=p.c+1
r=A.N(b)
if(!(s>=0&&s<q))return A.a(o,s)
o[s]=r
if(n>2){s=p.c+2
r=A.N(c)
if(!(s>=0&&s<q))return A.a(o,s)
o[s]=r
if(n>3){n=p.c+3
s=A.N(d)
if(!(n>=0&&n<q))return A.a(o,n)
o[n]=s}}}}},
gJ(a){return new A.X(this)},
N(a,b){var s,r,q,p,o,n=this
if(b==null)return!1
if(b instanceof A.cL)return A.o(A.x(n,!0,A.k(n).i("h.E")))===A.o(A.x(b,!0,A.k(b).i("h.E")))
if(t.L.b(b)){s=J.R(b)
r=n.d
q=r.c
if(s.gn(b)!==q)return!1
r=r.d
p=n.c
o=r.length
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.k(b,0))return!1
if(q>1){p=n.c+1
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.k(b,1))return!1
if(q>2){p=n.c+2
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.k(b,2))return!1
if(q>3){q=n.c+3
if(!(q>=0&&q<o))return A.a(r,q)
if(r[q]!==s.k(b,3))return!1}}}return!0}return!1},
gH(a){return A.o(A.x(this,!0,A.k(this).i("h.E")))},
bj(a){return A.b0(this,null,a,null,null)},
$iz:1,
$iE:1,
$iw:1,
gbl(){return this.d}}
A.cM.prototype={
P(){var s=this
return new A.cM(s.a,s.b,s.c,s.d)},
gn(a){return this.d.c},
gS(){return null},
gF(){return 1},
gM(){return B.M},
gb4(){return this.a},
gaX(){return this.b},
a2(a,b){var s,r,q=this
q.a=a
q.b=b
s=q.d
r=s.c
q.c=b*s.a*r+a*r},
gK(){return this},
B(){var s,r=this,q=r.d
if(++r.a===q.a){r.a=0
if(++r.b===q.b)return!1}s=r.c+q.c
r.c=s
return s<q.d.length},
k(a,b){var s,r=this.d
if(b<r.c){r=r.d
s=this.c+b
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
h(a,b,c){var s,r=this.d
if(b<r.c){r=r.d
s=this.c+b
r.$flags&2&&A.c(r)
if(!(s>=0&&s<r.length))return A.a(r,s)
r[s]=c}},
gW(){return this.gq()},
sW(a){this.sq(a)},
gq(){var s,r=this.d
if(r.c>0){r=r.d
s=this.c
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
sq(a){var s,r=this.d
if(r.c>0){r=r.d
s=this.c
r.$flags&2&&A.c(r)
if(!(s>=0&&s<r.length))return A.a(r,s)
r[s]=a}},
gu(){var s,r=this.d
if(r.c>1){r=r.d
s=this.c+1
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
su(a){var s,r=this.d
if(r.c>1){r=r.d
s=this.c+1
r.$flags&2&&A.c(r)
if(!(s>=0&&s<r.length))return A.a(r,s)
r[s]=a}},
gA(){var s,r=this.d
if(r.c>2){r=r.d
s=this.c+2
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
sA(a){var s,r=this.d
if(r.c>2){r=r.d
s=this.c+2
r.$flags&2&&A.c(r)
if(!(s>=0&&s<r.length))return A.a(r,s)
r[s]=a}},
gv(){var s,r=this.d
if(r.c>3){r=r.d
s=this.c+3
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=1
return r},
sv(a){var s,r=this.d
if(r.c>3){r=r.d
s=this.c+3
r.$flags&2&&A.c(r)
if(!(s>=0&&s<r.length))return A.a(r,s)
r[s]=a}},
gad(){return this.gq()/1},
sad(a){this.sq(a)},
ga7(){return this.gu()/1},
sa7(a){this.su(a)},
gac(){return this.gA()/1},
sac(a){this.sA(a)},
gai(){return this.gv()/1},
sai(a){this.sv(a)},
gau(){return A.ab(this)},
af(a){var s=this
s.sq(a.gq())
s.su(a.gu())
s.sA(a.gA())
s.sv(a.gv())},
aD(a,b,c){var s,r,q=this.d,p=q.d,o=this.c
p.$flags&2&&A.c(p)
s=p.length
if(!(o>=0&&o<s))return A.a(p,o)
p[o]=a
q=q.c
if(q>1){r=o+1
if(!(r<s))return A.a(p,r)
p[r]=b
if(q>2){q=o+2
if(!(q<s))return A.a(p,q)
p[q]=c}}},
a9(a,b,c,d){var s,r,q=this.d,p=q.d,o=this.c
p.$flags&2&&A.c(p)
s=p.length
if(!(o>=0&&o<s))return A.a(p,o)
p[o]=a
q=q.c
if(q>1){r=o+1
if(!(r<s))return A.a(p,r)
p[r]=b
if(q>2){r=o+2
if(!(r<s))return A.a(p,r)
p[r]=c
if(q>3){q=o+3
if(!(q<s))return A.a(p,q)
p[q]=d}}}},
gJ(a){return new A.X(this)},
N(a,b){var s,r,q,p,o,n=this
if(b==null)return!1
if(b instanceof A.cM)return A.o(A.x(n,!0,A.k(n).i("h.E")))===A.o(A.x(b,!0,A.k(b).i("h.E")))
if(t.L.b(b)){s=J.R(b)
r=n.d
q=r.c
if(s.gn(b)!==q)return!1
r=r.d
p=n.c
o=r.length
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.k(b,0))return!1
if(q>1){p=n.c+1
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.k(b,1))return!1
if(q>2){p=n.c+2
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.k(b,2))return!1
if(q>3){q=n.c+3
if(!(q>=0&&q<o))return A.a(r,q)
if(r[q]!==s.k(b,3))return!1}}}return!0}return!1},
gH(a){return A.o(A.x(this,!0,A.k(this).i("h.E")))},
bj(a){return A.b0(this,null,a,null,null)},
$iz:1,
$iE:1,
$iw:1,
gbl(){return this.d}}
A.cN.prototype={
P(){var s=this
return new A.cN(s.a,s.b,s.c,s.d)},
gn(a){return this.d.c},
gS(){return null},
gF(){return 1},
gM(){return B.R},
gb4(){return this.a},
gaX(){return this.b},
a2(a,b){var s,r,q=this
q.a=a
q.b=b
s=q.d
r=s.c
q.c=b*s.a*r+a*r},
gK(){return this},
B(){var s,r=this,q=r.d
if(++r.a===q.a){r.a=0
if(++r.b===q.b)return!1}s=r.c+q.c
r.c=s
return s<q.d.length},
k(a,b){var s,r=this.d
if(b<r.c){r=r.d
s=this.c+b
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
h(a,b,c){var s,r=this.d
if(b<r.c){r=r.d
s=this.c+b
r.$flags&2&&A.c(r)
if(!(s>=0&&s<r.length))return A.a(r,s)
r[s]=c}},
gW(){return this.gq()},
sW(a){this.sq(a)},
gq(){var s,r=this.d
if(r.c>0){r=r.d
s=this.c
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
sq(a){var s,r=this.d
if(r.c>0){r=r.d
s=this.c
r.$flags&2&&A.c(r)
if(!(s>=0&&s<r.length))return A.a(r,s)
r[s]=a}},
gu(){var s,r=this.d
if(r.c>1){r=r.d
s=this.c+1
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
su(a){var s,r=this.d
if(r.c>1){r=r.d
s=this.c+1
r.$flags&2&&A.c(r)
if(!(s>=0&&s<r.length))return A.a(r,s)
r[s]=a}},
gA(){var s,r=this.d
if(r.c>2){r=r.d
s=this.c+2
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
sA(a){var s,r=this.d
if(r.c>2){r=r.d
s=this.c+2
r.$flags&2&&A.c(r)
if(!(s>=0&&s<r.length))return A.a(r,s)
r[s]=a}},
gv(){var s,r=this.d
if(r.c>3){r=r.d
s=this.c+3
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
sv(a){var s,r=this.d
if(r.c>3){r=r.d
s=this.c+3
r.$flags&2&&A.c(r)
if(!(s>=0&&s<r.length))return A.a(r,s)
r[s]=a}},
gad(){return this.gq()/1},
sad(a){this.sq(a)},
ga7(){return this.gu()/1},
sa7(a){this.su(a)},
gac(){return this.gA()/1},
sac(a){this.sA(a)},
gai(){return this.gv()/1},
sai(a){this.sv(a)},
gau(){return A.ab(this)},
af(a){var s=this
s.sq(a.gq())
s.su(a.gu())
s.sA(a.gA())
s.sv(a.gv())},
aD(a,b,c){var s,r,q=this.d,p=q.d,o=this.c
p.$flags&2&&A.c(p)
s=p.length
if(!(o>=0&&o<s))return A.a(p,o)
p[o]=a
q=q.c
if(q>1){r=o+1
if(!(r<s))return A.a(p,r)
p[r]=b
if(q>2){q=o+2
if(!(q<s))return A.a(p,q)
p[q]=c}}},
a9(a,b,c,d){var s,r,q=this.d,p=q.d,o=this.c
p.$flags&2&&A.c(p)
s=p.length
if(!(o>=0&&o<s))return A.a(p,o)
p[o]=a
q=q.c
if(q>1){r=o+1
if(!(r<s))return A.a(p,r)
p[r]=b
if(q>2){r=o+2
if(!(r<s))return A.a(p,r)
p[r]=c
if(q>3){q=o+3
if(!(q<s))return A.a(p,q)
p[q]=d}}}},
gJ(a){return new A.X(this)},
N(a,b){var s,r,q,p,o,n=this
if(b==null)return!1
if(b instanceof A.cN)return A.o(A.x(n,!0,A.k(n).i("h.E")))===A.o(A.x(b,!0,A.k(b).i("h.E")))
if(t.L.b(b)){s=J.R(b)
r=n.d
q=r.c
if(s.gn(b)!==q)return!1
r=r.d
p=n.c
o=r.length
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.k(b,0))return!1
if(q>1){p=n.c+1
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.k(b,1))return!1
if(q>2){p=n.c+2
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.k(b,2))return!1
if(q>3){q=n.c+3
if(!(q>=0&&q<o))return A.a(r,q)
if(r[q]!==s.k(b,3))return!1}}}return!0}return!1},
gH(a){return A.o(A.x(this,!0,A.k(this).i("h.E")))},
bj(a){return A.b0(this,null,a,null,null)},
$iz:1,
$iE:1,
$iw:1,
gbl(){return this.d}}
A.cO.prototype={
P(){var s=this
return new A.cO(s.a,s.b,s.c,s.d)},
gn(a){return this.d.c},
gS(){return null},
gF(){return 32767},
gM(){return B.T},
gb4(){return this.a},
gaX(){return this.b},
a2(a,b){var s,r,q=this
q.a=a
q.b=b
s=q.d
r=s.c
q.c=b*s.a*r+a*r},
gK(){return this},
B(){var s,r=this,q=r.d
if(++r.a===q.a){r.a=0
if(++r.b===q.b)return!1}s=r.c+q.c
r.c=s
return s<q.d.length},
k(a,b){var s,r=this.d
if(b<r.c){r=r.d
s=this.c+b
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
h(a,b,c){var s,r,q=this.d
if(b<q.c){q=q.d
s=this.c+b
r=B.b.j(c)
q.$flags&2&&A.c(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gW(){return this.gq()},
sW(a){this.sq(a)},
gq(){var s,r=this.d
if(r.c>0){r=r.d
s=this.c
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
sq(a){var s,r,q=this.d
if(q.c>0){q=q.d
s=this.c
r=B.b.j(a)
q.$flags&2&&A.c(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gu(){var s,r=this.d
if(r.c>1){r=r.d
s=this.c+1
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
su(a){var s,r,q=this.d
if(q.c>1){q=q.d
s=this.c+1
r=B.b.j(a)
q.$flags&2&&A.c(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gA(){var s,r=this.d
if(r.c>2){r=r.d
s=this.c+2
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
sA(a){var s,r,q=this.d
if(q.c>2){q=q.d
s=this.c+2
r=B.b.j(a)
q.$flags&2&&A.c(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gv(){var s,r=this.d
if(r.c>3){r=r.d
s=this.c+3
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
sv(a){var s,r,q=this.d
if(q.c>3){q=q.d
s=this.c+3
r=B.b.j(a)
q.$flags&2&&A.c(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gad(){return this.gq()/32767},
sad(a){this.sq(a*32767)},
ga7(){return this.gu()/32767},
sa7(a){this.su(a*32767)},
gac(){return this.gA()/32767},
sac(a){this.sA(a*32767)},
gai(){return this.gv()/32767},
sai(a){this.sv(a*32767)},
gau(){return A.ab(this)},
af(a){var s=this
s.sq(a.gq())
s.su(a.gu())
s.sA(a.gA())
s.sv(a.gv())},
aD(a,b,c){var s,r,q,p,o=this.d,n=o.c
if(n>0){o=o.d
s=this.c
r=B.a.j(a)
o.$flags&2&&A.c(o)
q=o.length
if(!(s>=0&&s<q))return A.a(o,s)
o[s]=r
if(n>1){r=s+1
p=B.a.j(b)
if(!(r<q))return A.a(o,r)
o[r]=p
if(n>2){n=s+2
s=B.a.j(c)
if(!(n<q))return A.a(o,n)
o[n]=s}}}},
a9(a,b,c,d){var s,r,q,p,o=this.d,n=o.c
if(n>0){o=o.d
s=this.c
r=B.b.j(a)
o.$flags&2&&A.c(o)
q=o.length
if(!(s>=0&&s<q))return A.a(o,s)
o[s]=r
if(n>1){r=s+1
p=B.b.j(b)
if(!(r<q))return A.a(o,r)
o[r]=p
if(n>2){r=s+2
p=B.b.j(c)
if(!(r<q))return A.a(o,r)
o[r]=p
if(n>3){n=s+3
s=B.b.j(d)
if(!(n<q))return A.a(o,n)
o[n]=s}}}}},
gJ(a){return new A.X(this)},
N(a,b){var s,r,q,p,o,n=this
if(b==null)return!1
if(b instanceof A.cO)return A.o(A.x(n,!0,A.k(n).i("h.E")))===A.o(A.x(b,!0,A.k(b).i("h.E")))
if(t.L.b(b)){s=J.R(b)
r=n.d
q=r.c
if(s.gn(b)!==q)return!1
r=r.d
p=n.c
o=r.length
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.k(b,0))return!1
if(q>1){p=n.c+1
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.k(b,1))return!1
if(q>2){p=n.c+2
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.k(b,2))return!1
if(q>3){q=n.c+3
if(!(q>=0&&q<o))return A.a(r,q)
if(r[q]!==s.k(b,3))return!1}}}return!0}return!1},
gH(a){return A.o(A.x(this,!0,A.k(this).i("h.E")))},
bj(a){return A.b0(this,null,a,null,null)},
$iz:1,
$iE:1,
$iw:1,
gbl(){return this.d}}
A.cP.prototype={
P(){var s=this
return new A.cP(s.a,s.b,s.c,s.d)},
gn(a){return this.d.c},
gS(){return null},
gF(){return 2147483647},
gM(){return B.U},
gb4(){return this.a},
gaX(){return this.b},
a2(a,b){var s,r,q=this
q.a=a
q.b=b
s=q.d
r=s.c
q.c=b*s.a*r+a*r},
gK(){return this},
B(){var s,r=this,q=r.d
if(++r.a===q.a){r.a=0
if(++r.b===q.b)return!1}s=r.c+q.c
r.c=s
return s<q.d.length},
k(a,b){var s,r=this.d
if(b<r.c){r=r.d
s=this.c+b
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
h(a,b,c){var s,r,q=this.d
if(b<q.c){q=q.d
s=this.c+b
r=B.b.j(c)
q.$flags&2&&A.c(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gW(){return this.gq()},
sW(a){this.sq(a)},
gq(){var s,r=this.d
if(r.c>0){r=r.d
s=this.c
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
sq(a){var s,r,q=this.d
if(q.c>0){q=q.d
s=this.c
r=B.b.j(a)
q.$flags&2&&A.c(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gu(){var s,r=this.d
if(r.c>1){r=r.d
s=this.c+1
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
su(a){var s,r,q=this.d
if(q.c>1){q=q.d
s=this.c+1
r=B.b.j(a)
q.$flags&2&&A.c(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gA(){var s,r=this.d
if(r.c>2){r=r.d
s=this.c+2
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
sA(a){var s,r,q=this.d
if(q.c>2){q=q.d
s=this.c+2
r=B.b.j(a)
q.$flags&2&&A.c(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gv(){var s,r=this.d
if(r.c>3){r=r.d
s=this.c+3
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
sv(a){var s,r,q=this.d
if(q.c>3){q=q.d
s=this.c+3
r=B.b.j(a)
q.$flags&2&&A.c(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gad(){return this.gq()/2147483647},
sad(a){this.sq(a*2147483647)},
ga7(){return this.gu()/2147483647},
sa7(a){this.su(a*2147483647)},
gac(){return this.gA()/2147483647},
sac(a){this.sA(a*2147483647)},
gai(){return this.gv()/2147483647},
sai(a){this.sv(a*2147483647)},
gau(){return A.ab(this)},
af(a){var s=this
s.sq(a.gq())
s.su(a.gu())
s.sA(a.gA())
s.sv(a.gv())},
aD(a,b,c){var s,r,q,p,o=this.d,n=o.c
if(n>0){o=o.d
s=this.c
r=B.a.j(a)
o.$flags&2&&A.c(o)
q=o.length
if(!(s>=0&&s<q))return A.a(o,s)
o[s]=r
if(n>1){r=s+1
p=B.a.j(b)
if(!(r<q))return A.a(o,r)
o[r]=p
if(n>2){n=s+2
s=B.a.j(c)
if(!(n<q))return A.a(o,n)
o[n]=s}}}},
a9(a,b,c,d){var s,r,q,p,o=this.d,n=o.c
if(n>0){o=o.d
s=this.c
r=B.b.j(a)
o.$flags&2&&A.c(o)
q=o.length
if(!(s>=0&&s<q))return A.a(o,s)
o[s]=r
if(n>1){r=s+1
p=B.b.j(b)
if(!(r<q))return A.a(o,r)
o[r]=p
if(n>2){r=s+2
p=B.b.j(c)
if(!(r<q))return A.a(o,r)
o[r]=p
if(n>3){n=s+3
s=B.b.j(d)
if(!(n<q))return A.a(o,n)
o[n]=s}}}}},
gJ(a){return new A.X(this)},
N(a,b){var s,r,q,p,o,n=this
if(b==null)return!1
if(b instanceof A.cP)return A.o(A.x(n,!0,A.k(n).i("h.E")))===A.o(A.x(b,!0,A.k(b).i("h.E")))
if(t.L.b(b)){s=J.R(b)
r=n.d
q=r.c
if(s.gn(b)!==q)return!1
r=r.d
p=n.c
o=r.length
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.k(b,0))return!1
if(q>1){p=n.c+1
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.k(b,1))return!1
if(q>2){p=n.c+2
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.k(b,2))return!1
if(q>3){q=n.c+3
if(!(q>=0&&q<o))return A.a(r,q)
if(r[q]!==s.k(b,3))return!1}}}return!0}return!1},
gH(a){return A.o(A.x(this,!0,A.k(this).i("h.E")))},
bj(a){return A.b0(this,null,a,null,null)},
$iz:1,
$iE:1,
$iw:1,
gbl(){return this.d}}
A.cQ.prototype={
P(){var s=this
return new A.cQ(s.a,s.b,s.c,s.d)},
gn(a){return this.d.c},
gS(){return null},
gF(){return 127},
gM(){return B.S},
gb4(){return this.a},
gaX(){return this.b},
a2(a,b){var s,r,q=this
q.a=a
q.b=b
s=q.d
r=s.c
q.c=b*s.a*r+a*r},
gK(){return this},
B(){var s,r=this,q=r.d
if(++r.a===q.a){r.a=0
if(++r.b===q.b)return!1}s=r.c+q.c
r.c=s
return s<q.d.length},
k(a,b){var s,r=this.d
if(b<r.c){r=r.d
s=this.c+b
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
h(a,b,c){var s,r,q=this.d
if(b<q.c){q=q.d
s=this.c+b
r=B.b.j(c)
q.$flags&2&&A.c(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gW(){return this.gq()},
sW(a){this.sq(a)},
gq(){var s,r=this.d
if(r.c>0){r=r.d
s=this.c
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
sq(a){var s,r,q=this.d
if(q.c>0){q=q.d
s=this.c
r=B.b.j(a)
q.$flags&2&&A.c(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gu(){var s,r=this.d
if(r.c>1){r=r.d
s=this.c+1
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
su(a){var s,r,q=this.d
if(q.c>1){q=q.d
s=this.c+1
r=B.b.j(a)
q.$flags&2&&A.c(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gA(){var s,r=this.d
if(r.c>2){r=r.d
s=this.c+2
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
sA(a){var s,r,q=this.d
if(q.c>2){q=q.d
s=this.c+2
r=B.b.j(a)
q.$flags&2&&A.c(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gv(){var s,r=this.d
if(r.c>3){r=r.d
s=this.c+3
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
sv(a){var s,r,q=this.d
if(q.c>3){q=q.d
s=this.c+3
r=B.b.j(a)
q.$flags&2&&A.c(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gad(){return this.gq()/127},
sad(a){this.sq(a*127)},
ga7(){return this.gu()/127},
sa7(a){this.su(a*127)},
gac(){return this.gA()/127},
sac(a){this.sA(a*127)},
gai(){return this.gv()/127},
sai(a){this.sv(a*127)},
gau(){return A.ab(this)},
af(a){var s=this
s.sq(a.gq())
s.su(a.gu())
s.sA(a.gA())
s.sv(a.gv())},
aD(a,b,c){var s,r,q,p,o=this.d,n=o.c
if(n>0){o=o.d
s=this.c
r=B.a.j(a)
o.$flags&2&&A.c(o)
q=o.length
if(!(s>=0&&s<q))return A.a(o,s)
o[s]=r
if(n>1){r=s+1
p=B.a.j(b)
if(!(r<q))return A.a(o,r)
o[r]=p
if(n>2){n=s+2
s=B.a.j(c)
if(!(n<q))return A.a(o,n)
o[n]=s}}}},
a9(a,b,c,d){var s,r,q,p,o=this.d,n=o.c
if(n>0){o=o.d
s=this.c
r=B.b.j(a)
o.$flags&2&&A.c(o)
q=o.length
if(!(s>=0&&s<q))return A.a(o,s)
o[s]=r
if(n>1){r=s+1
p=B.b.j(b)
if(!(r<q))return A.a(o,r)
o[r]=p
if(n>2){r=s+2
p=B.b.j(c)
if(!(r<q))return A.a(o,r)
o[r]=p
if(n>3){n=s+3
s=B.b.j(d)
if(!(n<q))return A.a(o,n)
o[n]=s}}}}},
gJ(a){return new A.X(this)},
N(a,b){var s,r,q,p,o,n=this
if(b==null)return!1
if(b instanceof A.cQ)return A.o(A.x(n,!0,A.k(n).i("h.E")))===A.o(A.x(b,!0,A.k(b).i("h.E")))
if(t.L.b(b)){s=J.R(b)
r=n.d
q=r.c
if(s.gn(b)!==q)return!1
r=r.d
p=n.c
o=r.length
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.k(b,0))return!1
if(q>1){p=n.c+1
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.k(b,1))return!1
if(q>2){p=n.c+2
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.k(b,2))return!1
if(q>3){q=n.c+3
if(!(q>=0&&q<o))return A.a(r,q)
if(r[q]!==s.k(b,3))return!1}}}return!0}return!1},
gH(a){return A.o(A.x(this,!0,A.k(this).i("h.E")))},
bj(a){return A.b0(this,null,a,null,null)},
$iz:1,
$iE:1,
$iw:1,
gbl(){return this.d}}
A.ix.prototype={
B(){var s=this,r=s.a
if(r.gb4()+1>s.d){r.a2(s.b,r.gaX()+1)
return r.gaX()<=s.e}return r.B()},
gK(){return this.a},
$iz:1}
A.cR.prototype={
P(){var s=this
return new A.cR(s.a,s.b,s.c,s.d,s.e,s.f)},
gn(a){var s=this.f,r=s.f
r=r==null?null:r.b
return r==null?s.c:r},
gS(){return this.f.f},
gF(){return this.f.gF()},
gM(){return B.A},
gb4(){return this.a},
gaX(){return this.b},
a2(a,b){var s,r,q=this
q.a=a
q.b=b
s=q.f
r=b*s.e
q.e=r
s=a*s.c
q.c=r+B.a.l(s,3)
q.d=s&7},
gK(){return this},
B(){var s,r=this,q=++r.a,p=r.f
if(q===p.a){r.a=0
q=++r.b
r.d=0;++r.c
r.e=r.e+p.e
return q<p.b}s=p.c
if(p.f!=null||s===1){if(++r.d>7){r.d=0;++r.c}}else{q*=s
r.d=q&7
r.c=r.e+B.a.l(q,3)}q=r.c
p=p.d
p===$&&A.e("data")
return q<p.byteLength},
eO(a){var s,r,q=this.c,p=7-(this.d+a)
if(p<0){p+=8;++q}s=this.f.d
s===$&&A.e("data")
r=s.length
if(q>=r)return 0
if(!(q>=0))return A.a(s,q)
return B.a.a3(s[q],p)&1},
bd(a){var s=this.f,r=s.f
if(r==null)s=s.c>a?this.eO(a):0
else s=r.ba(this.eO(0),a)
return s},
aE(a,b){var s,r,q,p,o,n,m=this.f
if(a>=m.c)return
s=this.c
r=7-(this.d+a)
if(r<0){++s
r+=8}q=m.d
q===$&&A.e("data")
if(!(s>=0&&s<q.length))return A.a(q,s)
p=q[s]
o=B.a.L(B.b.j(b),0,1)
if(!(r>=0&&r<8))return A.a(B.bR,r)
n=B.bR[r]
q=B.a.a0(o,r)
m=m.d
m.$flags&2&&A.c(m)
if(!(s<m.length))return A.a(m,s)
m[s]=(p&n|q)>>>0},
k(a,b){return this.bd(b)},
h(a,b,c){return this.aE(b,c)},
gW(){return this.eO(0)},
sW(a){this.aE(0,a)},
gq(){return this.bd(0)},
sq(a){this.aE(0,a)},
gu(){return this.bd(1)},
su(a){this.aE(1,a)},
gA(){return this.bd(2)},
sA(a){this.aE(2,a)},
gv(){return this.bd(3)},
sv(a){this.aE(3,a)},
gad(){return this.bd(0)/this.f.gF()},
sad(a){this.aE(0,a*this.f.gF())},
ga7(){return this.bd(1)/this.f.gF()},
sa7(a){this.aE(1,a*this.f.gF())},
gac(){return this.bd(2)/this.f.gF()},
sac(a){this.aE(2,a*this.f.gF())},
gai(){return this.bd(3)/this.f.gF()},
sai(a){this.aE(3,a*this.f.gF())},
gau(){return A.ab(this)},
af(a){var s=this
s.aE(0,a.gq())
s.aE(1,a.gu())
s.aE(2,a.gA())
s.aE(3,a.gv())},
aD(a,b,c){var s=this,r=s.f.c
if(r>0){s.aE(0,a)
if(r>1){s.aE(1,b)
if(r>2)s.aE(2,c)}}},
a9(a,b,c,d){var s=this,r=s.f.c
if(r>0){s.aE(0,a)
if(r>1){s.aE(1,b)
if(r>2){s.aE(2,c)
if(r>3)s.aE(3,d)}}}},
gJ(a){return new A.X(this)},
N(a,b){var s,r,q,p=this
if(b==null)return!1
if(b instanceof A.cR)return A.o(A.x(p,!0,A.k(p).i("h.E")))===A.o(A.x(b,!0,A.k(b).i("h.E")))
if(t.L.b(b)){s=p.f
r=s.f
q=r!=null?r.b:s.c
s=J.R(b)
if(s.gn(b)!==q)return!1
if(p.bd(0)!==s.k(b,0))return!1
if(q>1){if(p.bd(1)!==s.k(b,1))return!1
if(q>2){if(p.bd(2)!==s.k(b,2))return!1
if(q>3)if(p.bd(3)!==s.k(b,3))return!1}}return!0}return!1},
gH(a){return A.o(A.x(this,!0,A.k(this).i("h.E")))},
bj(a){return A.b0(this,null,a,null,null)},
$iz:1,
$iE:1,
$iw:1,
gbl(){return this.f}}
A.cS.prototype={
P(){var s=this
return new A.cS(s.a,s.b,s.c,s.d)},
gn(a){var s=this.d,r=s.e
r=r==null?null:r.b
return r==null?s.c:r},
gS(){return this.d.e},
gF(){return this.d.gF()},
gM(){return B.n},
gb4(){return this.a},
gaX(){return this.b},
a2(a,b){var s,r,q=this
q.a=a
q.b=b
s=q.d
r=s.c
q.c=b*s.a*r+a*r},
gK(){return this},
B(){var s,r=this,q=r.d
if(++r.a===q.a){r.a=0
if(++r.b===q.b)return!1}s=r.c
s+=q.e==null?q.c:1
r.c=s
return s<q.d.length},
bz(a){var s,r=this.d,q=r.e
if(q!=null){r=r.d
s=this.c
if(!(s>=0&&s<r.length))return A.a(r,s)
s=q.ba(r[s],a)
r=s}else if(a<r.c){r=r.d
q=this.c+a
if(!(q>=0&&q<r.length))return A.a(r,q)
q=r[q]
r=q}else r=0
return r},
k(a,b){return this.bz(b)},
h(a,b,c){var s,r,q=this.d
if(b<q.c){q=q.d
s=this.c+b
r=B.b.j(c)
q.$flags&2&&A.c(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gW(){return this.gq()},
sW(a){this.sq(a)},
gq(){var s,r=this.d,q=r.e
if(q==null)if(r.c>0){r=r.d
q=this.c
if(!(q>=0&&q<r.length))return A.a(r,q)
q=r[q]
r=q}else r=0
else{r=r.d
s=this.c
if(!(s>=0&&s<r.length))return A.a(r,s)
s=q.b0(r[s])
r=s}return r},
sq(a){var s,r,q=this.d
if(q.c>0){q=q.d
s=this.c
r=B.b.j(a)
q.$flags&2&&A.c(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gu(){var s,r=this.d,q=r.e
if(q==null)if(r.c>1){r=r.d
q=this.c+1
if(!(q>=0&&q<r.length))return A.a(r,q)
q=r[q]
r=q}else r=0
else{r=r.d
s=this.c
if(!(s>=0&&s<r.length))return A.a(r,s)
s=q.b_(r[s])
r=s}return r},
su(a){var s,r,q=this.d
if(q.c>1){q=q.d
s=this.c+1
r=B.b.j(a)
q.$flags&2&&A.c(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gA(){var s,r=this.d,q=r.e
if(q==null)if(r.c>2){r=r.d
q=this.c+2
if(!(q>=0&&q<r.length))return A.a(r,q)
q=r[q]
r=q}else r=0
else{r=r.d
s=this.c
if(!(s>=0&&s<r.length))return A.a(r,s)
s=q.aY(r[s])
r=s}return r},
sA(a){var s,r,q=this.d
if(q.c>2){q=q.d
s=this.c+2
r=B.b.j(a)
q.$flags&2&&A.c(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gv(){var s,r=this.d,q=r.e
if(q==null)if(r.c>3){r=r.d
q=this.c+3
if(!(q>=0&&q<r.length))return A.a(r,q)
q=r[q]
r=q}else r=0
else{r=r.d
s=this.c
if(!(s>=0&&s<r.length))return A.a(r,s)
s=q.bb(r[s])
r=s}return r},
sv(a){var s,r,q=this.d
if(q.c>3){q=q.d
s=this.c+3
r=B.b.j(a)
q.$flags&2&&A.c(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gad(){return this.gq()/this.d.gF()},
sad(a){this.sq(a*this.d.gF())},
ga7(){return this.gu()/this.d.gF()},
sa7(a){this.su(a*this.d.gF())},
gac(){return this.gA()/this.d.gF()},
sac(a){this.sA(a*this.d.gF())},
gai(){return this.gv()/this.d.gF()},
sai(a){this.sv(a*this.d.gF())},
gau(){return A.ab(this)},
af(a){var s=this
s.sq(a.gq())
s.su(a.gu())
s.sA(a.gA())
s.sv(a.gv())},
aD(a,b,c){var s,r,q,p,o=this.d,n=o.c
if(n>0){o=o.d
s=this.c
r=B.a.j(a)
o.$flags&2&&A.c(o)
q=o.length
if(!(s>=0&&s<q))return A.a(o,s)
o[s]=r
if(n>1){r=s+1
p=B.a.j(b)
if(!(r<q))return A.a(o,r)
o[r]=p
if(n>2){n=s+2
s=B.a.j(c)
if(!(n<q))return A.a(o,n)
o[n]=s}}}},
a9(a,b,c,d){var s,r,q,p,o=this.d,n=o.c
if(n>0){o=o.d
s=this.c
r=B.b.j(a)
o.$flags&2&&A.c(o)
q=o.length
if(!(s>=0&&s<q))return A.a(o,s)
o[s]=r
if(n>1){r=s+1
p=B.b.j(b)
if(!(r<q))return A.a(o,r)
o[r]=p
if(n>2){r=s+2
p=B.b.j(c)
if(!(r<q))return A.a(o,r)
o[r]=p
if(n>3){n=s+3
s=B.b.j(d)
if(!(n<q))return A.a(o,n)
o[n]=s}}}}},
gJ(a){return new A.X(this)},
N(a,b){var s,r,q,p=this
if(b==null)return!1
if(b instanceof A.cS)return A.o(A.x(p,!0,A.k(p).i("h.E")))===A.o(A.x(b,!0,A.k(b).i("h.E")))
if(t.L.b(b)){s=p.d
r=s.e
q=r!=null?r.b:s.c
s=J.R(b)
if(s.gn(b)!==q)return!1
if(p.bz(0)!==s.k(b,0))return!1
if(q>1){if(p.bz(1)!==s.k(b,1))return!1
if(q>2){if(p.bz(2)!==s.k(b,2))return!1
if(q>3)if(p.bz(3)!==s.k(b,3))return!1}}return!0}return!1},
gH(a){return A.o(A.x(this,!0,A.k(this).i("h.E")))},
bj(a){return A.b0(this,null,a,null,null)},
$iz:1,
$iE:1,
$iw:1,
gbl(){return this.d}}
A.cT.prototype={
P(){var s=this
return new A.cT(s.a,s.b,s.c,s.d,s.e,s.f)},
gn(a){var s=this.f,r=s.f
r=r==null?null:r.b
return r==null?s.c:r},
gS(){return this.f.f},
gF(){return this.f.gF()},
gM(){return B.D},
gi0(){var s=this.f
return s.f!=null?2:s.c<<1>>>0},
gb4(){return this.a},
gaX(){return this.b},
a2(a,b){var s,r,q,p=this
p.a=a
p.b=b
s=p.gi0()
r=p.b*p.f.e
p.e=r
q=p.a*s
p.c=r+B.a.l(q,3)
p.d=q&7},
gK(){return this},
B(){var s,r,q=this,p=q.f
if(++q.a===p.a){q.a=0
s=++q.b
q.d=0;++q.c
q.e=q.e+p.e
return s<p.b}if(p.f!=null||p.c===1){s=q.d+=2
if(s>7){q.d=0;++q.c}}else{r=q.gi0()
s=q.a*r
q.d=s&7
q.c=q.e+B.a.l(s,3)}s=q.c
p=p.d
p===$&&A.e("data")
return s<p.length},
eP(a){var s,r=this.c,q=6-(this.d+(a<<1>>>0))
if(q<0){q+=8;++r}s=this.f.d
s===$&&A.e("data")
if(!(r>=0&&r<s.length))return A.a(s,r)
return B.a.a3(s[r],q)&3},
be(a){var s=this.f,r=s.f
if(r==null)s=s.c>a?this.eP(a):0
else s=r.ba(this.eP(0),a)
return s},
aF(a,b){var s,r,q,p,o,n,m=this.f
if(a>=m.c)return
s=this.c
r=6-(this.d+(a<<1>>>0))
if(r<0){++s
r+=8}q=m.d
q===$&&A.e("data")
if(!(s>=0&&s<q.length))return A.a(q,s)
p=q[s]
o=B.a.L(B.b.j(b),0,3)
q=B.a.l(r,1)
if(!(q<4))return A.a(B.bc,q)
n=B.bc[q]
q=B.a.a0(o,r)
m=m.d
m.$flags&2&&A.c(m)
if(!(s<m.length))return A.a(m,s)
m[s]=(p&n|q)>>>0},
k(a,b){return this.be(b)},
h(a,b,c){return this.aF(b,c)},
gW(){return this.eP(0)},
sW(a){this.aF(0,a)},
gq(){return this.be(0)},
sq(a){this.aF(0,a)},
gu(){return this.be(1)},
su(a){this.aF(1,a)},
gA(){return this.be(2)},
sA(a){this.aF(2,a)},
gv(){return this.be(3)},
sv(a){this.aF(3,a)},
gad(){return this.be(0)/this.f.gF()},
sad(a){this.aF(0,a*this.f.gF())},
ga7(){return this.be(1)/this.f.gF()},
sa7(a){this.aF(1,a*this.f.gF())},
gac(){return this.be(2)/this.f.gF()},
sac(a){this.aF(2,a*this.f.gF())},
gai(){return this.be(3)/this.f.gF()},
sai(a){this.aF(3,a*this.f.gF())},
gau(){return A.ab(this)},
af(a){var s=this
s.aF(0,a.gq())
s.aF(1,a.gu())
s.aF(2,a.gA())
s.aF(3,a.gv())},
aD(a,b,c){var s=this,r=s.f.c
if(r>0){s.aF(0,a)
if(r>1){s.aF(1,b)
if(r>2)s.aF(2,c)}}},
a9(a,b,c,d){var s=this,r=s.f.c
if(r>0){s.aF(0,a)
if(r>1){s.aF(1,b)
if(r>2){s.aF(2,c)
if(r>3)s.aF(3,d)}}}},
gJ(a){return new A.X(this)},
N(a,b){var s,r,q,p=this
if(b==null)return!1
if(b instanceof A.cT)return A.o(A.x(p,!0,A.k(p).i("h.E")))===A.o(A.x(b,!0,A.k(b).i("h.E")))
if(t.L.b(b)){s=p.f
r=s.f
q=r!=null?r.b:s.c
s=J.R(b)
if(s.gn(b)!==q)return!1
if(p.be(0)!==s.k(b,0))return!1
if(q>1){if(p.be(1)!==s.k(b,1))return!1
if(q>2){if(p.be(2)!==s.k(b,2))return!1
if(q>3)if(p.be(3)!==s.k(b,3))return!1}}return!0}return!1},
gH(a){return A.o(A.x(this,!0,A.k(this).i("h.E")))},
bj(a){return A.b0(this,null,a,null,null)},
$iz:1,
$iE:1,
$iw:1,
gbl(){return this.f}}
A.cU.prototype={
P(){var s=this
return new A.cU(s.a,s.b,s.c,s.d)},
gn(a){return this.d.c},
gS(){return null},
gF(){return 4294967295},
gM(){return B.N},
gb4(){return this.a},
gaX(){return this.b},
a2(a,b){var s,r,q=this
q.a=a
q.b=b
s=q.d
r=s.c
q.c=b*s.a*r+a*r},
gK(){return this},
B(){var s,r=this,q=r.d
if(++r.a===q.a){r.a=0
if(++r.b===q.b)return!1}s=r.c+q.c
r.c=s
return s<q.d.length},
k(a,b){var s,r=this.d
if(b<r.c){r=r.d
s=this.c+b
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
h(a,b,c){var s,r,q=this.d
if(b<q.c){q=q.d
s=this.c+b
r=B.b.j(c)
q.$flags&2&&A.c(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gW(){return this.gq()},
sW(a){this.sq(a)},
gq(){var s,r=this.d
if(r.c>0){r=r.d
s=this.c
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
sq(a){var s,r,q=this.d
if(q.c>0){q=q.d
s=this.c
r=B.b.j(a)
q.$flags&2&&A.c(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gu(){var s,r=this.d
if(r.c>1){r=r.d
s=this.c+1
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
su(a){var s,r,q=this.d
if(q.c>1){q=q.d
s=this.c+1
r=B.b.j(a)
q.$flags&2&&A.c(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gA(){var s,r=this.d
if(r.c>2){r=r.d
s=this.c+2
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
sA(a){var s,r,q=this.d
if(q.c>2){q=q.d
s=this.c+2
r=B.b.j(a)
q.$flags&2&&A.c(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gv(){var s,r=this.d
if(r.c>3){r=r.d
s=this.c+3
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
sv(a){var s,r,q=this.d
if(q.c>3){q=q.d
s=this.c+3
r=B.b.j(a)
q.$flags&2&&A.c(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gad(){return this.gq()/4294967295},
sad(a){this.sq(a*4294967295)},
ga7(){return this.gu()/4294967295},
sa7(a){this.su(a*4294967295)},
gac(){return this.gA()/4294967295},
sac(a){this.sA(a*4294967295)},
gai(){return this.gv()/4294967295},
sai(a){this.sv(a*4294967295)},
gau(){return A.ab(this)},
af(a){var s=this
s.sq(a.gq())
s.su(a.gu())
s.sA(a.gA())
s.sv(a.gv())},
aD(a,b,c){var s,r,q,p,o=this.d,n=o.c
if(n>0){o=o.d
s=this.c
r=B.a.j(a)
o.$flags&2&&A.c(o)
q=o.length
if(!(s>=0&&s<q))return A.a(o,s)
o[s]=r
if(n>1){r=s+1
p=B.a.j(b)
if(!(r<q))return A.a(o,r)
o[r]=p
if(n>2){n=s+2
s=B.a.j(c)
if(!(n<q))return A.a(o,n)
o[n]=s}}}},
a9(a,b,c,d){var s,r,q,p,o=this.d,n=o.c
if(n>0){o=o.d
s=this.c
r=B.b.j(a)
o.$flags&2&&A.c(o)
q=o.length
if(!(s>=0&&s<q))return A.a(o,s)
o[s]=r
if(n>1){r=s+1
p=B.b.j(b)
if(!(r<q))return A.a(o,r)
o[r]=p
if(n>2){r=s+2
p=B.b.j(c)
if(!(r<q))return A.a(o,r)
o[r]=p
if(n>3){n=s+3
s=B.b.j(d)
if(!(n<q))return A.a(o,n)
o[n]=s}}}}},
gJ(a){return new A.X(this)},
N(a,b){var s,r,q,p,o,n=this
if(b==null)return!1
if(b instanceof A.cU)return A.o(A.x(n,!0,A.k(n).i("h.E")))===A.o(A.x(b,!0,A.k(b).i("h.E")))
if(t.L.b(b)){s=J.R(b)
r=n.d
q=r.c
if(s.gn(b)!==q)return!1
r=r.d
p=n.c
o=r.length
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.k(b,0))return!1
if(q>1){p=n.c+1
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.k(b,1))return!1
if(q>2){p=n.c+2
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.k(b,2))return!1
if(q>3){q=n.c+3
if(!(q>=0&&q<o))return A.a(r,q)
if(r[q]!==s.k(b,3))return!1}}}return!0}return!1},
gH(a){return A.o(A.x(this,!0,A.k(this).i("h.E")))},
bj(a){return A.b0(this,null,a,null,null)},
$iz:1,
$iE:1,
$iw:1,
gbl(){return this.d}}
A.cV.prototype={
P(){var s=this
return new A.cV(s.a,s.b,s.c,s.d,s.e)},
gn(a){var s=this.e,r=s.f
r=r==null?null:r.b
return r==null?s.c:r},
gS(){return this.e.f},
gF(){return this.e.gF()},
gM(){return B.E},
gb4(){return this.a},
gaX(){return this.b},
a2(a,b){var s,r,q,p=this
p.a=a
p.b=b
s=p.e
r=s.c*4
q=s.e
if(r===4)s=b*q+B.a.l(a,1)
else if(r===8)s=b*s.a+a
else{s=b*q
s=r===16?s+(a<<1>>>0):s+B.a.l(a*r,3)}p.c=s
s=a*r
p.d=r>7?s&4:s&7},
gK(){return this},
B(){var s,r,q,p=this,o=p.e
if(++p.a===o.a){p.a=0
s=++p.b
p.d=0
p.c=s*o.e
return s<o.b}r=o.c
s=o.f!=null||r===1
q=p.d
if(s){s=q+4
p.d=s
if(s>7){p.d=0;++p.c}}else{s=p.d=q+(r<<2>>>0)
for(;s>7;){s-=8
p.d=s;++p.c}}s=p.c
o=o.d
o===$&&A.e("data")
return s<o.length},
eE(a){var s,r=this.c,q=4-(this.d+(a<<2>>>0))
if(q<0){q+=8;++r}s=this.e.d
s===$&&A.e("data")
if(!(r>=0&&r<s.length))return A.a(s,r)
return B.a.a3(s[r],q)&15},
bf(a){var s=this.e,r=s.f
if(r==null)s=s.c>a?this.eE(a):0
else s=r.ba(this.eE(0),a)
return s},
aG(a,b){var s,r,q,p,o,n,m=this.e
if(a>=m.c)return
s=this.c
r=4-(this.d+(a<<2>>>0))
if(r<0){r+=8;++s}q=m.d
q===$&&A.e("data")
if(!(s>=0&&s<q.length))return A.a(q,s)
p=q[s]
o=B.a.L(B.b.j(b),0,15)
n=r===4?15:240
q=B.a.a0(o,r)
m=m.d
m.$flags&2&&A.c(m)
if(!(s<m.length))return A.a(m,s)
m[s]=(p&n|q)>>>0},
k(a,b){return this.bf(b)},
h(a,b,c){return this.aG(b,c)},
gW(){return this.eE(0)},
sW(a){this.aG(0,a)},
gq(){return this.bf(0)},
sq(a){this.aG(0,a)},
gu(){return this.bf(1)},
su(a){this.aG(1,a)},
gA(){return this.bf(2)},
sA(a){this.aG(2,a)},
gv(){return this.bf(3)},
sv(a){this.aG(3,a)},
gad(){return this.bf(0)/this.e.gF()},
sad(a){this.aG(0,a*this.e.gF())},
ga7(){return this.bf(1)/this.e.gF()},
sa7(a){this.aG(1,a*this.e.gF())},
gac(){return this.bf(2)/this.e.gF()},
sac(a){this.aG(2,a*this.e.gF())},
gai(){return this.bf(3)/this.e.gF()},
sai(a){this.aG(3,a*this.e.gF())},
gau(){return A.ab(this)},
af(a){var s=this
s.aG(0,a.gq())
s.aG(1,a.gu())
s.aG(2,a.gA())
s.aG(3,a.gv())},
aD(a,b,c){var s=this,r=s.e.c
if(r>0){s.aG(0,a)
if(r>1){s.aG(1,b)
if(r>2)s.aG(2,c)}}},
a9(a,b,c,d){var s=this,r=s.e.c
if(r>0){s.aG(0,a)
if(r>1){s.aG(1,b)
if(r>2){s.aG(2,c)
if(r>3)s.aG(3,d)}}}},
gJ(a){return new A.X(this)},
N(a,b){var s,r,q=this
if(b==null)return!1
if(b instanceof A.cV)return A.o(A.x(q,!0,A.k(q).i("h.E")))===A.o(A.x(b,!0,A.k(b).i("h.E")))
if(t.L.b(b)){s=q.e.c
r=J.R(b)
if(r.gn(b)!==s)return!1
if(q.bf(0)!==r.k(b,0))return!1
if(s>1){if(q.bf(1)!==r.k(b,1))return!1
if(s>2){if(q.bf(2)!==r.k(b,2))return!1
if(s>3)if(q.bf(3)!==r.k(b,3))return!1}}return!0}return!1},
gH(a){return A.o(A.x(this,!0,A.k(this).i("h.E")))},
bj(a){return A.b0(this,null,a,null,null)},
$iz:1,
$iE:1,
$iw:1,
gbl(){return this.e}}
A.cW.prototype={
P(){var s=this
return new A.cW(s.a,s.b,s.c,s.d)},
gn(a){var s=this.d,r=s.e
r=r==null?null:r.b
return r==null?s.c:r},
gS(){return this.d.e},
gF(){return this.d.gF()},
gM(){return B.h},
gb4(){return this.a},
gaX(){return this.b},
a2(a,b){var s,r,q=this
q.a=a
q.b=b
s=q.d
r=s.c
q.c=b*s.a*r+a*r},
gK(){return this},
B(){var s,r=this,q=r.d
if(++r.a===q.a){r.a=0
if(++r.b===q.b)return!1}s=r.c
s+=q.e==null?q.c:1
r.c=s
return s<q.d.length},
bz(a){var s,r=this.d,q=r.e
if(q!=null){r=r.d
s=this.c
if(!(s>=0&&s<r.length))return A.a(r,s)
s=q.ba(r[s],a)
r=s}else if(a<r.c){r=r.d
q=this.c+a
if(!(q>=0&&q<r.length))return A.a(r,q)
q=r[q]
r=q}else r=0
return r},
k(a,b){return this.bz(b)},
h(a,b,c){var s,r,q=this.d
if(b<q.c){q=q.d
s=this.c+b
r=B.b.j(B.b.L(c,0,255))
q.$flags&2&&A.c(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gW(){var s=this.d.d,r=this.c
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
sW(a){var s=this.d.d,r=this.c,q=B.b.j(B.b.L(a,0,255))
s.$flags&2&&A.c(s)
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=q},
gq(){var s,r=this.d,q=r.e
if(q==null)if(r.c>0){r=r.d
q=this.c
if(!(q>=0&&q<r.length))return A.a(r,q)
q=r[q]
r=q}else r=0
else{r=r.d
s=this.c
if(!(s>=0&&s<r.length))return A.a(r,s)
s=q.b0(r[s])
r=s}return r},
sq(a){var s,r,q=this.d
if(q.c>0){q=q.d
s=this.c
r=B.b.j(B.b.L(a,0,255))
q.$flags&2&&A.c(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gu(){var s,r=this,q=r.d,p=q.e
if(p==null){p=q.c
if(p===2){q=q.d
p=r.c
if(!(p>=0&&p<q.length))return A.a(q,p)
p=q[p]
q=p}else if(p>1){q=q.d
p=r.c+1
if(!(p>=0&&p<q.length))return A.a(q,p)
p=q[p]
q=p}else q=0}else{q=q.d
s=r.c
if(!(s>=0&&s<q.length))return A.a(q,s)
s=p.b_(q[s])
q=s}return q},
su(a){var s,r=this.d,q=r.c
if(q===2){r=r.d
q=this.c
s=B.b.j(B.b.L(a,0,255))
r.$flags&2&&A.c(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s}else if(q>1){r=r.d
q=this.c+1
s=B.b.j(B.b.L(a,0,255))
r.$flags&2&&A.c(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s}},
gA(){var s,r=this,q=r.d,p=q.e
if(p==null){p=q.c
if(p===2){q=q.d
p=r.c
if(!(p>=0&&p<q.length))return A.a(q,p)
p=q[p]
q=p}else if(p>2){q=q.d
p=r.c+2
if(!(p>=0&&p<q.length))return A.a(q,p)
p=q[p]
q=p}else q=0}else{q=q.d
s=r.c
if(!(s>=0&&s<q.length))return A.a(q,s)
s=p.aY(q[s])
q=s}return q},
sA(a){var s,r=this.d,q=r.c
if(q===2){r=r.d
q=this.c
s=B.b.j(B.b.L(a,0,255))
r.$flags&2&&A.c(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s}else if(q>2){r=r.d
q=this.c+2
s=B.b.j(B.b.L(a,0,255))
r.$flags&2&&A.c(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s}},
gv(){var s,r=this,q=r.d,p=q.e
if(p==null){p=q.c
if(p===2){q=q.d
p=r.c+1
if(!(p>=0&&p<q.length))return A.a(q,p)
p=q[p]
q=p}else if(p>3){q=q.d
p=r.c+3
if(!(p>=0&&p<q.length))return A.a(q,p)
p=q[p]
q=p}else q=255}else{q=q.d
s=r.c
if(!(s>=0&&s<q.length))return A.a(q,s)
s=p.bb(q[s])
q=s}return q},
sv(a){var s,r=this.d,q=r.c
if(q===2){r=r.d
q=this.c+1
s=B.b.j(B.b.L(a,0,255))
r.$flags&2&&A.c(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s}else if(q>3){r=r.d
q=this.c+3
s=B.b.j(B.b.L(a,0,255))
r.$flags&2&&A.c(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s}},
gad(){return this.gq()/this.d.gF()},
sad(a){this.sq(a*this.d.gF())},
ga7(){return this.gu()/this.d.gF()},
sa7(a){this.su(a*this.d.gF())},
gac(){return this.gA()/this.d.gF()},
sac(a){this.sA(a*this.d.gF())},
gai(){return this.gv()/this.d.gF()},
sai(a){this.sv(a*this.d.gF())},
gau(){return this.d.c===2?this.gq():A.ab(this)},
af(a){var s=this
if(s.d.e!=null)s.sW(a.gW())
else{s.sq(a.gq())
s.su(a.gu())
s.sA(a.gA())
s.sv(a.gv())}},
aD(a,b,c){var s,r,q,p,o=this.d,n=o.c
if(n>0){o=o.d
s=this.c
r=B.a.j(a)
o.$flags&2&&A.c(o)
q=o.length
if(!(s>=0&&s<q))return A.a(o,s)
o[s]=r
if(n>1){r=s+1
p=B.a.j(b)
if(!(r<q))return A.a(o,r)
o[r]=p
if(n>2){n=s+2
s=B.a.j(c)
if(!(n<q))return A.a(o,n)
o[n]=s}}}},
a9(a,b,c,d){var s,r,q,p,o=this.d,n=o.c
if(n>0){o=o.d
s=this.c
r=B.b.j(a)
o.$flags&2&&A.c(o)
q=o.length
if(!(s>=0&&s<q))return A.a(o,s)
o[s]=r
if(n>1){r=s+1
p=B.b.j(b)
if(!(r<q))return A.a(o,r)
o[r]=p
if(n>2){r=s+2
p=B.b.j(c)
if(!(r<q))return A.a(o,r)
o[r]=p
if(n>3){n=s+3
s=B.b.j(d)
if(!(n<q))return A.a(o,n)
o[n]=s}}}}},
gJ(a){return new A.X(this)},
N(a,b){var s,r,q,p=this
if(b==null)return!1
if(b instanceof A.cW)return A.o(A.x(p,!0,A.k(p).i("h.E")))===A.o(A.x(b,!0,A.k(b).i("h.E")))
if(t.L.b(b)){s=p.d
r=s.e
q=r!=null?r.b:s.c
s=J.R(b)
if(s.gn(b)!==q)return!1
if(p.bz(0)!==s.k(b,0))return!1
if(q>1){if(p.bz(1)!==s.k(b,1))return!1
if(q>2){if(p.bz(2)!==s.k(b,2))return!1
if(q>3)if(p.bz(3)!==s.k(b,3))return!1}}return!0}return!1},
gH(a){return A.o(A.x(this,!0,A.k(this).i("h.E")))},
bj(a){return A.b0(this,null,a,null,null)},
$iz:1,
$iE:1,
$iw:1,
gbl(){return this.d}}
A.ad.prototype={
P(){return new A.ad()},
gbl(){return $.re()},
gb4(){return 0},
gaX(){return 0},
gn(a){return 0},
gF(){return 0},
gM(){return B.h},
gS(){return null},
k(a,b){return 0},
h(a,b,c){},
gW(){return 0},
sW(a){},
gq(){return 0},
sq(a){},
gu(){return 0},
su(a){},
gA(){return 0},
sA(a){},
gv(){return 0},
sv(a){},
gad(){return 0},
sad(a){},
ga7(){return 0},
sa7(a){},
gac(){return 0},
sac(a){},
gai(){return 0},
sai(a){},
gau(){return 0},
af(a){},
aD(a,b,c){},
a9(a,b,c,d){},
a2(a,b){},
gK(){return this},
B(){return!1},
N(a,b){if(b==null)return!1
return b instanceof A.ad},
gH(a){return 0},
gJ(a){return new A.X(this)},
bj(a){return this},
$iz:1,
$iE:1,
$iw:1}
A.hX.prototype={
t(a){return"ImageException: "+this.a},
$iaf:1}
A.ay.prototype={
gn(a){return this.c-this.d},
h(a,b,c){J.D(this.a,this.d+b,c)
return c},
bt(a,b,c,d){var s=this.a,r=J.ao(s),q=this.d+a
if(c instanceof A.ay)r.an(s,q,q+b,c.a,c.d+d)
else r.an(s,q,q+b,t.L.a(c),d)},
c9(a,b,c){return this.bt(a,b,c,0)},
n9(a,b,c){var s=this.a,r=this.d+a
J.bw(s,r,r+b,c)},
ek(a,b,c){var s=this,r=c!=null?s.b+c:s.d
return A.u(s.a,s.e,a,r+b)},
am(a){return this.ek(a,0,null)},
cc(a,b){return this.ek(a,0,b)},
dC(a,b){return this.ek(a,b,null)},
G(){return J.d(this.a,this.d++)},
az(a){var s=this.am(a)
this.d=this.d+(s.c-s.d)
return s},
ak(a){var s,r,q,p,o,n=this
if(a==null){s=A.b([],t.t)
for(r=n.c;q=n.d,q<r;){p=n.a
n.d=q+1
o=J.d(p,q)
if(o===0)return A.bC(s,0,null)
B.c.C(s,o)}throw A.f(A.p("EOF reached without finding string terminator (length: "+A.t(a)+")"))}return A.bC(n.az(a).a4(),0,null)},
di(){return this.ak(null)},
iv(a){var s,r,q,p,o=this,n=A.b([],t.t)
for(s=o.c;r=o.d,r<s;){q=o.a
o.d=r+1
p=J.d(q,r)
B.c.C(n,p)
if(p===10||n.length>=a)return A.bC(n,0,null)}return A.bC(n,0,null)},
nj(){return this.iv(256)},
nk(){var s,r,q,p,o=this,n=A.b([],t.t)
for(s=o.c;r=o.d,r<s;){q=o.a
o.d=r+1
p=J.d(q,r)
if(p===0){t.L.a(n)
return new A.jC(!0).fW(n,0,null,!0)}B.c.C(n,p)}return B.u.i5(n,!0)},
p(){var s=this,r=J.d(s.a,s.d++)&255,q=J.d(s.a,s.d++)&255
if(s.e)return r<<8|q
return q<<8|r},
bw(){var s=this,r=J.d(s.a,s.d++)&255,q=J.d(s.a,s.d++)&255,p=J.d(s.a,s.d++)&255
if(s.e)return p|q<<8|r<<16
return r|q<<8|p<<16},
m(){var s=this,r=J.d(s.a,s.d++)&255,q=J.d(s.a,s.d++)&255,p=J.d(s.a,s.d++)&255,o=J.d(s.a,s.d++)&255
if(s.e)return(r<<24|q<<16|p<<8|o)>>>0
return(o<<24|p<<16|q<<8|r)>>>0},
eb(){return A.xq(this.fm())},
fm(){var s=this,r=J.d(s.a,s.d++)&255,q=J.d(s.a,s.d++)&255,p=J.d(s.a,s.d++)&255,o=J.d(s.a,s.d++)&255,n=J.d(s.a,s.d++)&255,m=J.d(s.a,s.d++)&255,l=J.d(s.a,s.d++)&255,k=J.d(s.a,s.d++)&255
if(s.e)return(B.a.R(r,56)|B.a.R(q,48)|B.a.R(p,40)|B.a.R(o,32)|n<<24|m<<16|l<<8|k)>>>0
return(B.a.R(k,56)|B.a.R(l,48)|B.a.R(m,40)|B.a.R(n,32)|o<<24|p<<16|q<<8|r)>>>0},
dk(a,b,c){var s,r=this,q=r.a
if(t.D.b(q))return r.iG(b,c)
s=r.b+r.d+b
return J.nC(q,s,c<=0?r.c:s+c)},
iG(a,b){var s,r=this,q=b==null?r.c-r.d-a:b,p=r.a
if(t.D.b(p))return J.ac(B.f.gE(p),p.byteOffset+r.d+a,q)
s=r.d+a
s=J.nC(p,s,s+q)
return new Uint8Array(A.C(s))},
a4(){return this.iG(0,null)},
dl(){var s=this.a
if(t.D.b(s))return J.aU(B.f.gE(s),s.byteOffset+this.d,null)
return J.aU(B.f.gE(this.a4()),0,null)},
sE(a,b){this.a=t.L.a(b)}}
A.lc.prototype={
D(a){var s,r,q=this
if(q.a===q.c.length)q.kH()
s=q.c
r=q.a++
s.$flags&2&&A.c(s)
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=a&255},
bF(a){var s,r,q,p,o,n=this
t.L.a(a)
s=J.aq(a)
for(;r=n.a,q=r+s,p=n.c,o=p.length,q>o;)n.h8(q-o)
B.f.b5(p,r,q,a)
n.a+=s},
aO(a){var s=this
if(s.b){s.D(B.a.l(a,8)&255)
s.D(a&255)
return}s.D(a&255)
s.D(B.a.l(a,8)&255)},
aW(a){var s=this
if(s.b){s.D(B.a.l(a,24)&255)
s.D(B.a.l(a,16)&255)
s.D(B.a.l(a,8)&255)
s.D(a&255)
return}s.D(a&255)
s.D(B.a.l(a,8)&255)
s.D(B.a.l(a,16)&255)
s.D(B.a.l(a,24)&255)},
nx(a){var s,r,q=this,p=new Float32Array(1)
p[0]=a
s=J.ac(B.P.gE(p),0,null)
if(q.b){if(3>=s.length)return A.a(s,3)
q.D(s[3])
q.D(s[2])
q.D(s[1])
q.D(s[0])
return}r=s.length
if(0>=r)return A.a(s,0)
q.D(s[0])
if(1>=r)return A.a(s,1)
q.D(s[1])
if(2>=r)return A.a(s,2)
q.D(s[2])
if(3>=r)return A.a(s,3)
q.D(s[3])},
ny(a){var s,r,q=this,p=new Float64Array(1)
p[0]=a
s=J.ac(B.Q.gE(p),0,null)
if(q.b){if(7>=s.length)return A.a(s,7)
q.D(s[7])
q.D(s[6])
q.D(s[5])
q.D(s[4])
q.D(s[3])
q.D(s[2])
q.D(s[1])
q.D(s[0])
return}r=s.length
if(0>=r)return A.a(s,0)
q.D(s[0])
if(1>=r)return A.a(s,1)
q.D(s[1])
if(2>=r)return A.a(s,2)
q.D(s[2])
if(3>=r)return A.a(s,3)
q.D(s[3])
if(4>=r)return A.a(s,4)
q.D(s[4])
if(5>=r)return A.a(s,5)
q.D(s[5])
if(6>=r)return A.a(s,6)
q.D(s[6])
if(7>=r)return A.a(s,7)
q.D(s[7])},
h8(a){var s,r,q,p
if(a!=null)s=a
else{r=this.c.length
s=r===0?8192:r*2}r=this.c
q=r.length
p=new Uint8Array(q+s)
B.f.b5(p,0,q,r)
this.c=p},
kH(){return this.h8(null)},
gn(a){return this.a}}
A.e_.prototype={
j(a){var s=this.b
return s===0?0:B.a.aR(this.a,s)},
N(a,b){if(b==null)return!1
return b instanceof A.e_&&this.a===b.a&&this.b===b.b},
gH(a){return A.lb(this.a,this.b,B.a8)},
t(a){return""+this.a+"/"+this.b}}
A.kb.prototype={
mm(a){var s,r,q=t.mf
A.qN("absolute",A.b([a,null,null,null,null,null,null,null,null,null,null,null,null,null,null],q))
s=this.a
s=s.b9(a)>0&&!s.c8(a)
if(s)return a
s=A.qS()
r=A.b([s,a,null,null,null,null,null,null,null,null,null,null,null,null,null,null],q)
A.qN("join",r)
return this.n4(new A.fN(r,t.lS))},
n4(a){var s,r,q,p,o,n,m,l,k,j
t.bq.a(a)
for(s=a.$ti,r=s.i("ae(h.E)").a(new A.kc()),q=a.gJ(0),s=new A.d8(q,r,s.i("d8<h.E>")),r=this.a,p=!1,o=!1,n="";s.B();){m=q.gK()
if(r.c8(m)&&o){l=A.iv(m,r)
k=n.charCodeAt(0)==0?n:n
n=B.d.I(k,0,r.cL(k,!0))
l.b=n
if(r.de(n))B.c.h(l.e,0,r.gcw())
n=""+l.t(0)}else if(r.b9(m)>0){o=!r.c8(m)
n=""+m}else{j=m.length
if(j!==0){if(0>=j)return A.a(m,0)
j=r.f_(m[0])}else j=!1
if(!j)if(p)n+=r.gcw()
n+=m}p=r.de(m)}return n.charCodeAt(0)==0?n:n},
fB(a,b){var s=A.iv(b,this.a),r=s.d,q=A.Z(r),p=q.i("bV<1>")
s.siq(A.x(new A.bV(r,q.i("ae(1)").a(new A.kd()),p),!0,p.i("h.E")))
r=s.b
if(r!=null)B.c.n1(s.d,0,r)
return s.d},
fg(a){var s
if(!this.l5(a))return a
s=A.iv(a,this.a)
s.ff()
return s.t(0)},
l5(a){var s,r,q,p,o,n,m,l,k=this.a,j=k.b9(a)
if(j!==0){if(k===$.jN())for(s=a.length,r=0;r<j;++r){if(!(r<s))return A.a(a,r)
if(a.charCodeAt(r)===47)return!0}q=j
p=47}else{q=0
p=null}for(s=new A.ai(a).a,o=s.length,r=q,n=null;r<o;++r,n=p,p=m){if(!(r>=0))return A.a(s,r)
m=s.charCodeAt(r)
if(k.bY(m)){if(k===$.jN()&&m===47)return!0
if(p!=null&&k.bY(p))return!0
if(p===46)l=n==null||n===46||k.bY(n)
else l=!1
if(l)return!0}}if(p==null)return!0
if(k.bY(p))return!0
if(p===46)k=n==null||k.bY(n)||n===46
else k=!1
if(k)return!0
return!1},
no(a){var s,r,q,p,o,n,m,l=this,k='Unable to find a path to "',j=l.a,i=j.b9(a)
if(i<=0)return l.fg(a)
s=A.qS()
if(j.b9(s)<=0&&j.b9(a)>0)return l.fg(a)
if(j.b9(a)<=0||j.c8(a))a=l.mm(a)
if(j.b9(a)<=0&&j.b9(s)>0)throw A.f(A.pC(k+a+'" from "'+s+'".'))
r=A.iv(s,j)
r.ff()
q=A.iv(a,j)
q.ff()
i=r.d
p=i.length
if(p!==0){if(0>=p)return A.a(i,0)
i=i[0]==="."}else i=!1
if(i)return q.t(0)
i=r.b
p=q.b
if(i!=p)i=i==null||p==null||!j.fj(i,p)
else i=!1
if(i)return q.t(0)
while(!0){i=r.d
p=i.length
o=!1
if(p!==0){n=q.d
m=n.length
if(m!==0){if(0>=p)return A.a(i,0)
i=i[0]
if(0>=m)return A.a(n,0)
n=j.fj(i,n[0])
i=n}else i=o}else i=o
if(!i)break
B.c.cK(r.d,0)
B.c.cK(r.e,1)
B.c.cK(q.d,0)
B.c.cK(q.e,1)}i=r.d
p=i.length
if(p!==0){if(0>=p)return A.a(i,0)
i=i[0]===".."}else i=!1
if(i)throw A.f(A.pC(k+a+'" from "'+s+'".'))
i=t.N
B.c.fa(q.d,0,A.a1(p,"..",!1,i))
B.c.h(q.e,0,"")
B.c.fa(q.e,1,A.a1(r.d.length,j.gcw(),!1,i))
j=q.d
i=j.length
if(i===0)return"."
if(i>1&&J.a_(B.c.gbs(j),".")){B.c.iw(q.d)
j=q.e
if(0>=j.length)return A.a(j,-1)
j.pop()
if(0>=j.length)return A.a(j,-1)
j.pop()
B.c.C(j,"")}q.b=""
q.ix()
return q.t(0)},
it(a){var s,r,q=this,p=A.qF(a)
if(p.gbc()==="file"&&q.a===$.hs())return p.t(0)
else if(p.gbc()!=="file"&&p.gbc()!==""&&q.a!==$.hs())return p.t(0)
s=q.fg(q.a.fi(A.qF(p)))
r=q.no(s)
return q.fB(0,r).length>q.fB(0,s).length?s:r}}
A.kc.prototype={
$1(a){return A.I(a)!==""},
$S:9}
A.kd.prototype={
$1(a){return A.I(a).length!==0},
$S:9}
A.mY.prototype={
$1(a){A.ej(a)
return a==null?"null":'"'+a+'"'},
$S:48}
A.dM.prototype={
iQ(a){var s,r=this.b9(a)
if(r>0)return B.d.I(a,0,r)
if(this.c8(a)){if(0>=a.length)return A.a(a,0)
s=a[0]}else s=null
return s},
fj(a,b){return a===b}}
A.ld.prototype={
ix(){var s,r,q=this
while(!0){s=q.d
if(!(s.length!==0&&J.a_(B.c.gbs(s),"")))break
B.c.iw(q.d)
s=q.e
if(0>=s.length)return A.a(s,-1)
s.pop()}s=q.e
r=s.length
if(r!==0)B.c.h(s,r-1,"")},
ff(){var s,r,q,p,o,n,m=this,l=A.b([],t.s)
for(s=m.d,r=s.length,q=0,p=0;p<s.length;s.length===r||(0,A.aI)(s),++p){o=s[p]
if(!(o==="."||o===""))if(o===".."){n=l.length
if(n!==0){if(0>=n)return A.a(l,-1)
l.pop()}else ++q}else B.c.C(l,o)}if(m.b==null)B.c.fa(l,0,A.a1(q,"..",!1,t.N))
if(l.length===0&&m.b==null)B.c.C(l,".")
m.siq(l)
s=m.a
m.siR(A.a1(l.length+1,s.gcw(),!0,t.N))
r=m.b
if(r==null||l.length===0||!s.de(r))B.c.h(m.e,0,"")
r=m.b
if(r!=null&&s===$.jN()){r.toString
m.b=A.hr(r,"/","\\")}m.ix()},
t(a){var s,r,q,p,o,n=this.b
n=n!=null?""+n:""
for(s=this.d,r=s.length,q=this.e,p=q.length,o=0;o<r;++o){if(!(o<p))return A.a(q,o)
n=n+q[o]+s[o]}n+=A.t(B.c.gbs(q))
return n.charCodeAt(0)==0?n:n},
siq(a){this.d=t.W.a(a)},
siR(a){this.e=t.W.a(a)}}
A.iw.prototype={
t(a){return"PathException: "+this.a},
$iaf:1}
A.lw.prototype={
t(a){return this.gca()}}
A.iB.prototype={
f_(a){return B.d.av(a,"/")},
bY(a){return a===47},
de(a){var s,r=a.length
if(r!==0){s=r-1
if(!(s>=0))return A.a(a,s)
s=a.charCodeAt(s)!==47
r=s}else r=!1
return r},
cL(a,b){var s=a.length
if(s!==0){if(0>=s)return A.a(a,0)
s=a.charCodeAt(0)===47}else s=!1
if(s)return 1
return 0},
b9(a){return this.cL(a,!1)},
c8(a){return!1},
fi(a){var s
if(a.gbc()===""||a.gbc()==="file"){s=a.gbu()
return A.hj(s,0,s.length,B.u,!1)}throw A.f(A.W("Uri "+a.t(0)+" must have scheme 'file:'.",null))},
gca(){return"posix"},
gcw(){return"/"}}
A.j6.prototype={
f_(a){return B.d.av(a,"/")},
bY(a){return a===47},
de(a){var s,r=a.length
if(r===0)return!1
s=r-1
if(!(s>=0))return A.a(a,s)
if(a.charCodeAt(s)!==47)return!0
return B.d.aA(a,"://")&&this.b9(a)===r},
cL(a,b){var s,r,q,p=a.length
if(p===0)return 0
if(0>=p)return A.a(a,0)
if(a.charCodeAt(0)===47)return 1
for(s=0;s<p;++s){r=a.charCodeAt(s)
if(r===47)return 0
if(r===58){if(s===0)return 0
q=B.d.bX(a,"/",B.d.ao(a,"//",s+1)?s+3:s)
if(q<=0)return p
if(!b||p<q+3)return q
if(!B.d.ah(a,"file://"))return q
p=A.qT(a,q+1)
return p==null?q:p}}return 0},
b9(a){return this.cL(a,!1)},
c8(a){var s=a.length
if(s!==0){if(0>=s)return A.a(a,0)
s=a.charCodeAt(0)===47}else s=!1
return s},
fi(a){return a.t(0)},
gca(){return"url"},
gcw(){return"/"}}
A.jd.prototype={
f_(a){return B.d.av(a,"/")},
bY(a){return a===47||a===92},
de(a){var s,r=a.length
if(r===0)return!1
s=r-1
if(!(s>=0))return A.a(a,s)
s=a.charCodeAt(s)
return!(s===47||s===92)},
cL(a,b){var s,r,q=a.length
if(q===0)return 0
if(0>=q)return A.a(a,0)
if(a.charCodeAt(0)===47)return 1
if(a.charCodeAt(0)===92){if(q>=2){if(1>=q)return A.a(a,1)
s=a.charCodeAt(1)!==92}else s=!0
if(s)return 1
r=B.d.bX(a,"\\",2)
if(r>0){r=B.d.bX(a,"\\",r+1)
if(r>0)return r}return q}if(q<3)return 0
if(!A.qZ(a.charCodeAt(0)))return 0
if(a.charCodeAt(1)!==58)return 0
q=a.charCodeAt(2)
if(!(q===47||q===92))return 0
return 3},
b9(a){return this.cL(a,!1)},
c8(a){return this.b9(a)===1},
fi(a){var s,r
if(a.gbc()!==""&&a.gbc()!=="file")throw A.f(A.W("Uri "+a.t(0)+" must have scheme 'file:'.",null))
s=a.gbu()
if(a.gcm()===""){r=s.length
if(r>=3&&B.d.ah(s,"/")&&A.qT(s,1)!=null){A.pK(0,0,r,"startIndex")
s=A.xn(s,"/","",0)}}else s="\\\\"+a.gcm()+s
r=A.hr(s,"/","\\")
return A.hj(r,0,r.length,B.u,!1)},
mw(a,b){var s
if(a===b)return!0
if(a===47)return b===92
if(a===92)return b===47
if((a^b)!==32)return!1
s=a|32
return s>=97&&s<=122},
fj(a,b){var s,r,q
if(a===b)return!0
s=a.length
r=b.length
if(s!==r)return!1
for(q=0;q<s;++q){if(!(q<r))return A.a(b,q)
if(!this.mw(a.charCodeAt(q),b.charCodeAt(q)))return!1}return!0},
gca(){return"windows"},
gcw(){return"\\"}}
A.lp.prototype={
gn(a){return this.c.length},
gn5(){return this.b.length},
jp(a,b){var s,r,q,p,o,n,m
for(s=this.c,r=s.length,q=this.b,p=0;p<r;++p){o=s[p]
if(o===13){n=p+1
if(n<r){if(!(n<r))return A.a(s,n)
m=s[n]!==10}else m=!0
if(m)o=10}if(o===10)B.c.C(q,p+1)}},
cN(a){var s,r=this
if(a<0)throw A.f(A.aE("Offset may not be negative, was "+a+"."))
else if(a>r.c.length)throw A.f(A.aE("Offset "+a+u.s+r.gn(0)+"."))
s=r.b
if(a<B.c.gcl(s))return-1
if(a>=B.c.gbs(s))return s.length-1
if(r.l0(a)){s=r.d
s.toString
return s}return r.d=r.jS(a)-1},
l0(a){var s,r,q,p=this.d
if(p==null)return!1
s=this.b
r=s.length
if(p>>>0!==p||p>=r)return A.a(s,p)
if(a<s[p])return!1
if(!(p>=r-1)){q=p+1
if(!(q<r))return A.a(s,q)
q=a<s[q]}else q=!0
if(q)return!0
if(!(p>=r-2)){q=p+2
if(!(q<r))return A.a(s,q)
q=a<s[q]
s=q}else s=!0
if(s){this.d=p+1
return!0}return!1},
jS(a){var s,r,q=this.b,p=q.length,o=p-1
for(s=0;s<o;){r=s+B.a.Y(o-s,2)
if(!(r>=0&&r<p))return A.a(q,r)
if(q[r]>a)o=r
else s=r+1}return o},
eh(a){var s,r,q,p=this
if(a<0)throw A.f(A.aE("Offset may not be negative, was "+a+"."))
else if(a>p.c.length)throw A.f(A.aE("Offset "+a+" must be not be greater than the number of characters in the file, "+p.gn(0)+"."))
s=p.cN(a)
r=p.b
if(!(s>=0&&s<r.length))return A.a(r,s)
q=r[s]
if(q>a)throw A.f(A.aE("Line "+s+" comes after offset "+a+"."))
return a-q},
dt(a){var s,r,q,p
if(a<0)throw A.f(A.aE("Line may not be negative, was "+a+"."))
else{s=this.b
r=s.length
if(a>=r)throw A.f(A.aE("Line "+a+" must be less than the number of lines in the file, "+this.gn5()+"."))}q=s[a]
if(q<=this.c.length){p=a+1
s=p<r&&q>=s[p]}else s=!0
if(s)throw A.f(A.aE("Line "+a+" doesn't have 0 columns."))
return q}}
A.hP.prototype={
gag(){return this.a.a},
gar(){return this.a.cN(this.b)},
gaJ(){return this.a.eh(this.b)},
gaL(){return this.b}}
A.ef.prototype={
gag(){return this.a.a},
gn(a){return this.c-this.b},
ga1(){return A.nI(this.a,this.b)},
gX(){return A.nI(this.a,this.c)},
gaT(){return A.bC(B.m.aQ(this.a.c,this.b,this.c),0,null)},
gbi(){var s=this,r=s.a,q=s.c,p=r.cN(q)
if(r.eh(q)===0&&p!==0){if(q-s.b===0)return p===r.b.length-1?"":A.bC(B.m.aQ(r.c,r.dt(p),r.dt(p+1)),0,null)}else q=p===r.b.length-1?r.c.length:r.dt(p+1)
return A.bC(B.m.aQ(r.c,r.dt(r.cN(s.b)),q),0,null)},
b1(a,b){var s
t.hs.a(b)
if(!(b instanceof A.ef))return this.j6(0,b)
s=B.a.b1(this.b,b.b)
return s===0?B.a.b1(this.c,b.c):s},
N(a,b){var s=this
if(b==null)return!1
if(!(b instanceof A.ef))return s.j5(0,b)
return s.b===b.b&&s.c===b.c&&J.a_(s.a.a,b.a.a)},
gH(a){return A.lb(this.b,this.c,this.a.a)},
$ibQ:1}
A.kk.prototype={
mY(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=null,a1=a.a
a.hR(B.c.gcl(a1).c)
s=a.e
r=A.a1(s,a0,!1,t.dd)
for(q=a.r,s=s!==0,p=a.b,o=0;o<a1.length;++o){n=a1[o]
if(o>0){m=a1[o-1]
l=n.c
if(!J.a_(m.c,l)){a.dW("\u2575")
q.a+="\n"
a.hR(l)}else if(m.b+1!==n.b){a.mj("...")
q.a+="\n"}}for(l=n.d,k=A.Z(l).i("fz<1>"),j=new A.fz(l,k),j=new A.ah(j,j.gn(0),k.i("ah<U.E>")),k=k.i("U.E"),i=n.b,h=n.a;j.B();){g=j.d
if(g==null)g=k.a(g)
f=g.a
if(f.ga1().gar()!==f.gX().gar()&&f.ga1().gar()===i&&a.l1(B.d.I(h,0,f.ga1().gaJ()))){e=B.c.c6(r,a0)
if(e<0)A.a8(A.W(A.t(r)+" contains no null elements.",a0))
B.c.h(r,e,g)}}a.mi(i)
q.a+=" "
a.mh(n,r)
if(s)q.a+=" "
d=B.c.n0(l,new A.kF())
if(d===-1)c=a0
else{if(!(d>=0&&d<l.length))return A.a(l,d)
c=l[d]}k=c!=null
if(k){j=c.a
g=j.ga1().gar()===i?j.ga1().gaJ():0
a.mf(h,g,j.gX().gar()===i?j.gX().gaJ():h.length,p)}else a.dY(h)
q.a+="\n"
if(k)a.mg(n,c,r)
for(l=l.length,b=0;b<l;++b)continue}a.dW("\u2575")
a1=q.a
return a1.charCodeAt(0)==0?a1:a1},
hR(a){var s,r,q=this
if(!q.f||!t.R.b(a))q.dW("\u2577")
else{q.dW("\u250c")
q.bp(new A.ks(q),"\x1b[34m",t.H)
s=q.r
r=" "+$.oP().it(a)
s.a+=r}q.r.a+="\n"},
dV(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e={}
t.b.a(b)
e.a=!1
e.b=null
s=c==null
if(s)r=null
else r=f.b
for(q=b.length,p=t.P,o=f.b,s=!s,n=f.r,m=t.H,l=!1,k=0;k<q;++k){j=b[k]
i=j==null
h=i?null:j.a.ga1().gar()
g=i?null:j.a.gX().gar()
if(s&&j===c){f.bp(new A.kz(f,h,a),r,p)
l=!0}else if(l)f.bp(new A.kA(f,j),r,p)
else if(i)if(e.a)f.bp(new A.kB(f),e.b,m)
else n.a+=" "
else f.bp(new A.kC(e,f,c,h,a,j,g),o,p)}},
mh(a,b){return this.dV(a,b,null)},
mf(a,b,c,d){var s=this
s.dY(B.d.I(a,0,b))
s.bp(new A.kt(s,a,b,c),d,t.H)
s.dY(B.d.I(a,c,a.length))},
mg(a,b,c){var s,r,q,p=this
t.b.a(c)
s=p.b
r=b.a
if(r.ga1().gar()===r.gX().gar()){p.eW()
r=p.r
r.a+=" "
p.dV(a,c,b)
if(c.length!==0)r.a+=" "
p.hS(b,c,p.bp(new A.ku(p,a,b),s,t.p))}else{q=a.b
if(r.ga1().gar()===q){if(B.c.av(c,b))return
A.xk(c,b,t.C)
p.eW()
r=p.r
r.a+=" "
p.dV(a,c,b)
p.bp(new A.kv(p,a,b),s,t.H)
r.a+="\n"}else if(r.gX().gar()===q){r=r.gX().gaJ()
if(r===a.a.length){A.r6(c,b,t.C)
return}p.eW()
p.r.a+=" "
p.dV(a,c,b)
p.hS(b,c,p.bp(new A.kw(p,!1,a,b),s,t.p))
A.r6(c,b,t.C)}}},
hO(a,b,c){var s=c?0:1,r=this.r
s=B.d.bP("\u2500",1+b+this.ev(B.d.I(a.a,0,b+s))*3)
s=r.a+=s
r.a=s+"^"},
mc(a,b){return this.hO(a,b,!0)},
hS(a,b,c){t.b.a(b)
this.r.a+="\n"
return},
dY(a){var s,r,q,p
for(s=new A.ai(a),r=t.V,s=new A.ah(s,s.gn(0),r.i("ah<y.E>")),q=this.r,r=r.i("y.E");s.B();){p=s.d
if(p==null)p=r.a(p)
if(p===9){p=B.d.bP(" ",4)
q.a+=p}else{p=A.T(p)
q.a+=p}}},
dX(a,b,c){var s={}
s.a=c
if(b!=null)s.a=B.a.t(b+1)
this.bp(new A.kD(s,this,a),"\x1b[34m",t.P)},
dW(a){return this.dX(a,null,null)},
mj(a){return this.dX(null,null,a)},
mi(a){return this.dX(null,a,null)},
eW(){return this.dX(null,null,null)},
ev(a){var s,r,q,p
for(s=new A.ai(a),r=t.V,s=new A.ah(s,s.gn(0),r.i("ah<y.E>")),r=r.i("y.E"),q=0;s.B();){p=s.d
if((p==null?r.a(p):p)===9)++q}return q},
l1(a){var s,r,q
for(s=new A.ai(a),r=t.V,s=new A.ah(s,s.gn(0),r.i("ah<y.E>")),r=r.i("y.E");s.B();){q=s.d
if(q==null)q=r.a(q)
if(q!==32&&q!==9)return!1}return!0},
bp(a,b,c){var s,r
c.i("0()").a(a)
s=this.b!=null
if(s&&b!=null)this.r.a+=b
r=a.$0()
if(s&&b!=null)this.r.a+="\x1b[0m"
return r}}
A.kE.prototype={
$0(){return this.a},
$S:49}
A.km.prototype={
$1(a){var s=t.nR.a(a).d,r=A.Z(s)
return new A.bV(s,r.i("ae(1)").a(new A.kl()),r.i("bV<1>")).gn(0)},
$S:68}
A.kl.prototype={
$1(a){var s=t.C.a(a).a
return s.ga1().gar()!==s.gX().gar()},
$S:11}
A.kn.prototype={
$1(a){return t.nR.a(a).c},
$S:52}
A.kp.prototype={
$1(a){var s=t.C.a(a).a.gag()
return s==null?new A.B():s},
$S:53}
A.kq.prototype={
$2(a,b){var s=t.C
return s.a(a).a.b1(0,s.a(b).a)},
$S:54}
A.kr.prototype={
$1(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
t.lO.a(a0)
s=a0.a
r=a0.b
q=A.b([],t.dg)
for(p=J.ao(r),o=p.gJ(r),n=t.g7;o.B();){m=o.gK().a
l=m.gbi()
k=A.na(l,m.gaT(),m.ga1().gaJ())
k.toString
j=B.d.e_("\n",B.d.I(l,0,k)).gn(0)
i=m.ga1().gar()-j
for(m=l.split("\n"),k=m.length,h=0;h<k;++h){g=m[h]
if(q.length===0||i>B.c.gbs(q).b)B.c.C(q,new A.b8(g,i,s,A.b([],n)));++i}}f=A.b([],n)
for(o=q.length,n=t.aP,e=f.$flags|0,d=0,h=0;h<q.length;q.length===o||(0,A.aI)(q),++h){g=q[h]
m=n.a(new A.ko(g))
e&1&&A.c(f,16)
B.c.lW(f,m,!0)
c=f.length
for(m=p.bA(r,d),k=m.$ti,m=new A.ah(m,m.gn(0),k.i("ah<U.E>")),b=g.b,k=k.i("U.E");m.B();){a=m.d
if(a==null)a=k.a(a)
if(a.a.ga1().gar()>b)break
B.c.C(f,a)}d+=f.length-c
B.c.cj(g.d,f)}return q},
$S:55}
A.ko.prototype={
$1(a){return t.C.a(a).a.gX().gar()<this.a.b},
$S:11}
A.kF.prototype={
$1(a){t.C.a(a)
return!0},
$S:11}
A.ks.prototype={
$0(){var s=this.a.r,r=B.d.bP("\u2500",2)+">"
s.a+=r
return null},
$S:0}
A.kz.prototype={
$0(){var s=this.a.r,r=this.b===this.c.b?"\u250c":"\u2514"
s.a+=r},
$S:3}
A.kA.prototype={
$0(){var s=this.a.r,r=this.b==null?"\u2500":"\u253c"
s.a+=r},
$S:3}
A.kB.prototype={
$0(){this.a.r.a+="\u2500"
return null},
$S:0}
A.kC.prototype={
$0(){var s,r,q=this,p=q.a,o=p.a?"\u253c":"\u2502"
if(q.c!=null)q.b.r.a+=o
else{s=q.e
r=s.b
if(q.d===r){s=q.b
s.bp(new A.kx(p,s),p.b,t.P)
p.a=!0
if(p.b==null)p.b=s.b}else{s=q.r===r&&q.f.a.gX().gaJ()===s.a.length
r=q.b
if(s)r.r.a+="\u2514"
else r.bp(new A.ky(r,o),p.b,t.P)}}},
$S:3}
A.kx.prototype={
$0(){var s=this.b.r,r=this.a.a?"\u252c":"\u250c"
s.a+=r},
$S:3}
A.ky.prototype={
$0(){this.a.r.a+=this.b},
$S:3}
A.kt.prototype={
$0(){var s=this
return s.a.dY(B.d.I(s.b,s.c,s.d))},
$S:0}
A.ku.prototype={
$0(){var s,r,q=this.a,p=q.r,o=p.a,n=this.c.a,m=n.ga1().gaJ(),l=n.gX().gaJ()
n=this.b.a
s=q.ev(B.d.I(n,0,m))
r=q.ev(B.d.I(n,m,l))
m+=s*3
n=B.d.bP(" ",m)
p.a+=n
n=B.d.bP("^",Math.max(l+(s+r)*3-m,1))
n=p.a+=n
return n.length-o.length},
$S:25}
A.kv.prototype={
$0(){return this.a.mc(this.b,this.c.a.ga1().gaJ())},
$S:0}
A.kw.prototype={
$0(){var s=this,r=s.a,q=r.r,p=q.a
if(s.b){r=B.d.bP("\u2500",3)
q.a+=r}else r.hO(s.c,Math.max(s.d.a.gX().gaJ()-1,0),!1)
return q.a.length-p.length},
$S:25}
A.kD.prototype={
$0(){var s=this.b,r=s.r,q=this.a.a
if(q==null)q=""
s=B.d.nb(q,s.d)
s=r.a+=s
q=this.c
r.a=s+(q==null?"\u2502":q)},
$S:3}
A.as.prototype={
t(a){var s=this.a
s=""+"primary "+(""+s.ga1().gar()+":"+s.ga1().gaJ()+"-"+s.gX().gar()+":"+s.gX().gaJ())
return s.charCodeAt(0)==0?s:s}}
A.mm.prototype={
$0(){var s,r,q,p,o=this.a
if(!(t.ol.b(o)&&A.na(o.gbi(),o.gaT(),o.ga1().gaJ())!=null)){s=A.iR(o.ga1().gaL(),0,0,o.gag())
r=o.gX().gaL()
q=o.gag()
p=A.wN(o.gaT(),10)
o=A.lq(s,A.iR(r,A.q2(o.gaT()),p,q),o.gaT(),o.gaT())}return A.v1(A.v3(A.v2(o)))},
$S:57}
A.b8.prototype={
t(a){return""+this.b+': "'+this.a+'" ('+B.c.cp(this.d,", ")+")"}}
A.bq.prototype={
f1(a){var s=this.a
if(!J.a_(s,a.gag()))throw A.f(A.W('Source URLs "'+A.t(s)+'" and "'+A.t(a.gag())+"\" don't match.",null))
return Math.abs(this.b-a.gaL())},
b1(a,b){var s
t.e.a(b)
s=this.a
if(!J.a_(s,b.gag()))throw A.f(A.W('Source URLs "'+A.t(s)+'" and "'+A.t(b.gag())+"\" don't match.",null))
return this.b-b.gaL()},
N(a,b){if(b==null)return!1
return t.e.b(b)&&J.a_(this.a,b.gag())&&this.b===b.gaL()},
gH(a){var s=this.a
s=s==null?null:s.gH(s)
if(s==null)s=0
return s+this.b},
t(a){var s=this,r=A.ne(s).t(0),q=s.a
return"<"+r+": "+s.b+" "+(A.t(q==null?"unknown source":q)+":"+(s.c+1)+":"+(s.d+1))+">"},
$iaj:1,
gag(){return this.a},
gaL(){return this.b},
gar(){return this.c},
gaJ(){return this.d}}
A.iS.prototype={
f1(a){if(!J.a_(this.a.a,a.gag()))throw A.f(A.W('Source URLs "'+A.t(this.gag())+'" and "'+A.t(a.gag())+"\" don't match.",null))
return Math.abs(this.b-a.gaL())},
b1(a,b){t.e.a(b)
if(!J.a_(this.a.a,b.gag()))throw A.f(A.W('Source URLs "'+A.t(this.gag())+'" and "'+A.t(b.gag())+"\" don't match.",null))
return this.b-b.gaL()},
N(a,b){if(b==null)return!1
return t.e.b(b)&&J.a_(this.a.a,b.gag())&&this.b===b.gaL()},
gH(a){var s=this.a.a
s=s==null?null:s.gH(s)
if(s==null)s=0
return s+this.b},
t(a){var s=A.ne(this).t(0),r=this.b,q=this.a,p=q.a
return"<"+s+": "+r+" "+(A.t(p==null?"unknown source":p)+":"+(q.cN(r)+1)+":"+(q.eh(r)+1))+">"},
$iaj:1,
$ibq:1}
A.iT.prototype={
jq(a,b,c){var s,r=this.b,q=this.a
if(!J.a_(r.gag(),q.gag()))throw A.f(A.W('Source URLs "'+A.t(q.gag())+'" and  "'+A.t(r.gag())+"\" don't match.",null))
else if(r.gaL()<q.gaL())throw A.f(A.W("End "+r.t(0)+" must come after start "+q.t(0)+".",null))
else{s=this.c
if(s.length!==q.f1(r))throw A.f(A.W('Text "'+s+'" must be '+q.f1(r)+" characters long.",null))}},
ga1(){return this.a},
gX(){return this.b},
gaT(){return this.c}}
A.iU.prototype={
gio(){return this.a},
t(a){var s,r,q,p=this.b,o=""+("line "+(p.ga1().gar()+1)+", column "+(p.ga1().gaJ()+1))
if(p.gag()!=null){s=p.gag()
r=$.oP()
s.toString
s=o+(" of "+r.it(s))
o=s}o+=": "+this.a
q=p.mZ(null)
p=q.length!==0?o+"\n"+q:o
return"Error on "+(p.charCodeAt(0)==0?p:p)},
$iaf:1}
A.e2.prototype={
gaL(){var s=this.b
s=A.nI(s.a,s.b)
return s.b},
$ic5:1,
gdB(){return this.c}}
A.e3.prototype={
gag(){return this.ga1().gag()},
gn(a){return this.gX().gaL()-this.ga1().gaL()},
b1(a,b){var s
t.hs.a(b)
s=this.ga1().b1(0,b.ga1())
return s===0?this.gX().b1(0,b.gX()):s},
mZ(a){var s=this
if(!t.ol.b(s)&&s.gn(s)===0)return""
return A.to(s,a).mY()},
N(a,b){if(b==null)return!1
return b instanceof A.e3&&this.ga1().N(0,b.ga1())&&this.gX().N(0,b.gX())},
gH(a){return A.lb(this.ga1(),this.gX(),B.a8)},
t(a){var s=this
return"<"+A.ne(s).t(0)+": from "+s.ga1().t(0)+" to "+s.gX().t(0)+' "'+s.gaT()+'">'},
$iaj:1,
$ibB:1}
A.bQ.prototype={
gbi(){return this.d}}
A.iX.prototype={
gdB(){return A.I(this.c)}}
A.lv.prototype={
gfe(){var s=this
if(s.c!==s.e)s.d=null
return s.d},
ei(a){var s,r=this,q=r.d=J.rR(a,r.b,r.c)
r.e=r.c
s=q!=null
if(s)r.e=r.c=q.gX()
return s},
i9(a,b){var s
if(this.ei(a))return
if(b==null)if(a instanceof A.dP)b="/"+a.a+"/"
else{s=J.de(a)
s=A.hr(s,"\\","\\\\")
b='"'+A.hr(s,'"','\\"')+'"'}this.h9(b)},
da(a){return this.i9(a,null)},
mQ(){if(this.c===this.b.length)return
this.h9("no more input")},
mP(a,b,c){var s,r,q,p,o,n,m=this.b
if(c<0)A.a8(A.aE("position must be greater than or equal to 0."))
else if(c>m.length)A.a8(A.aE("position must be less than or equal to the string length."))
s=c+b>m.length
if(s)A.a8(A.aE("position plus length must not go beyond the end of the string."))
s=this.a
r=new A.ai(m)
q=A.b([0],t.t)
p=new Uint32Array(A.C(r.ed(r)))
o=new A.lp(s,q,p)
o.jp(r,s)
n=c+b
if(n>p.length)A.a8(A.aE("End "+n+u.s+o.gn(0)+"."))
else if(c<0)A.a8(A.aE("Start may not be negative, was "+c+"."))
throw A.f(new A.iX(m,a,new A.ef(o,c,n)))},
h9(a){this.mP("expected "+a+".",0,this.c)}}
A.nF.prototype={}
A.ee.prototype={
cq(a,b,c,d){var s=this.$ti
s.i("~(1)?").a(a)
t.Z.a(c)
return A.uZ(this.a,this.b,a,!1,s.c)}}
A.fW.prototype={
e2(){var s=this,r=A.p9(null,t.H)
if(s.b==null)return r
s.hL()
s.d=s.b=null
return r},
fh(a){var s,r=this
r.$ti.i("~(1)?").a(a)
if(r.b==null)throw A.f(A.d_("Subscription has been canceled."))
r.hL()
s=A.qO(new A.m9(a),t.m)
s=s==null?null:A.mW(s)
r.d=s
r.hI()},
hI(){var s=this.d
if(s!=null)this.b.addEventListener(this.c,s,!1)},
hL(){var s=this.d
if(s!=null)this.b.removeEventListener(this.c,s,!1)},
$ice:1}
A.m8.prototype={
$1(a){return this.a.$1(t.m.a(a))},
$S:13}
A.m9.prototype={
$1(a){return this.a.$1(t.m.a(a))},
$S:13}
A.hH.prototype={}
A.cw.prototype={}
A.nc.prototype={
$1(a){var s,r
t.av.a(a)
s=a.k(0,"Name")
s.toString
A.I(s)
r=a.k(0,"Role")
r.toString
return new A.cw(s,A.I(r),A.ej(a.k(0,"ImageData")))},
$S:59}
A.no.prototype={
$0(){this.a.remove()},
$S:3}
A.nv.prototype={
$0(){this.a.remove()},
$S:3}
A.ew.prototype={$iaf:1}
A.f4.prototype={$iaf:1}
A.n_.prototype={
$0(){var s=t.m,r=t.A.a(s.a(self.document).getElementById("crew-container"))
if(r==null)r=s.a(r)
s.a(r.appendChild(A.r2(null,null,null)))},
$S:3}
A.n0.prototype={
$0(){A.nu()},
$S:3}
A.n1.prototype={
$1(a){t.m.a(a).preventDefault()},
$S:7}
A.n2.prototype={
$1(a){var s,r,q,p=t.m
p.a(a)
a.preventDefault()
s=this.a
r=t.A
q=r.a(s.firstElementChild)
q.toString
q.files=p.a(r.a(a.dataTransfer).files)
t.gv.a(s.onchange).call()},
$S:7}
A.n3.prototype={
$0(){A.n8(this.a)},
$S:3}
A.n4.prototype={
$0(){return A.vC(t.m.a(self.window).confirm("Reloading will lose all the unsaved data. Are you sure?"))},
$S:60};(function aliases(){var s=J.c9.prototype
s.j4=s.t
s=A.aW.prototype
s.j0=s.ie
s.j1=s.ig
s.j3=s.ii
s.j2=s.ih
s=A.y.prototype
s.fD=s.an
s=A.er.prototype
s.j_=s.mT
s=A.e3.prototype
s.j6=s.b1
s.j5=s.N})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers.installInstanceTearOff,o=hunkHelpers._instance_2u,n=hunkHelpers._instance_0u,m=hunkHelpers._instance_1i,l=hunkHelpers.installStaticTearOff,k=hunkHelpers._instance_1u
s(J,"w0","tw",26)
r(A,"wv","uU",12)
r(A,"ww","uV",12)
r(A,"wx","uW",12)
q(A,"qQ","wk",0)
r(A,"wy","wd",6)
s(A,"wz","we",14)
p(A.fS.prototype,"gmA",0,1,null,["$2","$1"],["d8","e4"],69,0,0)
o(A.L.prototype,"gfV","cd",14)
n(A.ed.prototype,"glb","lc",0)
s(A,"wD","vO",28)
r(A,"wE","vP",29)
s(A,"wC","tB",26)
r(A,"wH","vQ",24)
var j
m(j=A.jj.prototype,"gmn","C",56)
n(j,"gmv","eZ",0)
r(A,"wM","x5",29)
s(A,"wL","x4",28)
l(A,"wJ",1,null,["$3","$1","$2"],["lD",function(a){return A.lD(a,"",null)},function(a,b){return A.lD(a,b,null)}],65,0)
r(A,"wK","u7",8)
r(A,"wA","t_",8)
p(A.ak.prototype,"gc_",1,0,null,["$1","$0"],["al","j"],4,0,0)
p(A.bL.prototype,"gc_",1,0,null,["$1","$0"],["al","j"],4,0,0)
p(A.cG.prototype,"gc_",1,0,null,["$1","$0"],["al","j"],4,0,0)
p(A.bx.prototype,"gc_",1,0,null,["$1","$0"],["al","j"],4,0,0)
p(A.cC.prototype,"gc_",1,0,null,["$1","$0"],["al","j"],4,0,0)
p(A.c7.prototype,"gc_",1,0,null,["$1","$0"],["al","j"],4,0,0)
p(A.cF.prototype,"gc_",1,0,null,["$1","$0"],["al","j"],4,0,0)
p(A.cD.prototype,"gc_",1,0,null,["$1","$0"],["al","j"],4,0,0)
p(A.cE.prototype,"gc_",1,0,null,["$1","$0"],["al","j"],4,0,0)
o(j=A.ii.prototype,"gkh","ki",5)
o(j,"gkk","kl",5)
o(j,"gkm","kn",5)
o(j,"gkb","kc",5)
o(j,"gkd","ke",5)
r(A,"xA","uj",1)
r(A,"xt","ub",1)
r(A,"xr","u9",1)
r(A,"xy","uh",1)
r(A,"xz","ui",1)
r(A,"xx","ug",1)
r(A,"xw","uf",1)
r(A,"xv","ue",1)
r(A,"xC","ul",1)
r(A,"xB","uk",1)
r(A,"xu","uc",1)
r(A,"xs","ua",1)
r(A,"xN","uw",1)
r(A,"xL","uu",1)
r(A,"xD","um",1)
r(A,"xF","uo",1)
r(A,"xE","un",1)
r(A,"xG","up",1)
r(A,"xO","ux",1)
r(A,"xM","uv",1)
r(A,"xH","uq",1)
r(A,"xI","ur",1)
r(A,"xJ","us",1)
r(A,"xK","ut",1)
k(A.fI.prototype,"glt","lu",27)
k(A.ib.prototype,"gmR","mS",27)
l(A,"oK",3,null,["$3"],["uy"],2,0)
l(A,"xP",3,null,["$3"],["uz"],2,0)
l(A,"xU",3,null,["$3"],["uE"],2,0)
l(A,"xV",3,null,["$3"],["uF"],2,0)
l(A,"xW",3,null,["$3"],["uG"],2,0)
l(A,"xX",3,null,["$3"],["uH"],2,0)
l(A,"xY",3,null,["$3"],["uI"],2,0)
l(A,"xZ",3,null,["$3"],["uJ"],2,0)
l(A,"y_",3,null,["$3"],["uK"],2,0)
l(A,"y0",3,null,["$3"],["uL"],2,0)
l(A,"xQ",3,null,["$3"],["uA"],2,0)
l(A,"xR",3,null,["$3"],["uB"],2,0)
l(A,"xS",3,null,["$3"],["uC"],2,0)
l(A,"xT",3,null,["$3"],["uD"],2,0)
l(A,"xg",2,null,["$1$2","$2"],["r1",function(a,b){return A.r1(a,b,t.E)}],50,0)
l(A,"y2",6,null,["$6"],["uR"],10,0)
l(A,"y3",6,null,["$6"],["uS"],10,0)
l(A,"y1",6,null,["$6"],["uQ"],10,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.B,null)
q(A.B,[A.nR,J.i2,J.cu,A.h,A.eu,A.aJ,A.S,A.y,A.lo,A.ah,A.aB,A.d8,A.eD,A.fA,A.ez,A.fO,A.a5,A.bh,A.lx,A.dv,A.fY,A.lA,A.is,A.eB,A.h7,A.P,A.l1,A.aA,A.dP,A.h0,A.fP,A.fC,A.jx,A.m6,A.mC,A.bf,A.jq,A.jz,A.mx,A.jg,A.bE,A.fS,A.bX,A.L,A.jh,A.aw,A.h8,A.ji,A.fQ,A.cj,A.jm,A.bi,A.ed,A.jv,A.hk,A.e1,A.jt,A.da,A.jB,A.f3,A.bH,A.hG,A.k3,A.mp,A.mL,A.jC,A.m7,A.it,A.fB,A.jo,A.c5,A.aG,A.ar,A.jy,A.am,A.hg,A.lC,A.bj,A.ir,A.eK,A.m_,A.kN,A.lZ,A.i_,A.iu,A.J,A.hx,A.er,A.jZ,A.dh,A.dU,A.X,A.bc,A.jp,A.hJ,A.b4,A.ak,A.k0,A.bF,A.ke,A.O,A.kg,A.hK,A.bJ,A.hL,A.hN,A.hO,A.eE,A.h5,A.eH,A.eI,A.eJ,A.hU,A.hV,A.hE,A.c6,A.kQ,A.bN,A.kS,A.eh,A.ih,A.kV,A.ii,A.fu,A.iz,A.bA,A.dW,A.li,A.cY,A.iF,A.iG,A.fv,A.iM,A.dX,A.cZ,A.fx,A.be,A.fE,A.ly,A.j0,A.lz,A.j1,A.j2,A.l3,A.lK,A.fH,A.lL,A.lQ,A.lU,A.lW,A.fG,A.lV,A.lM,A.bT,A.fJ,A.jb,A.fK,A.fL,A.fI,A.j9,A.lR,A.ja,A.lY,A.fM,A.hR,A.dy,A.e9,A.eM,A.bd,A.ix,A.hX,A.ay,A.lc,A.e_,A.kb,A.lw,A.ld,A.iw,A.lp,A.iS,A.e3,A.kk,A.as,A.b8,A.bq,A.iU,A.lv,A.nF,A.fW,A.hH,A.cw,A.ew,A.f4])
q(J.i2,[J.ie,J.eX,J.eY,J.dQ,J.dR,J.dO,J.c8])
q(J.eY,[J.c9,J.v,A.cJ,A.fa])
q(J.c9,[J.iy,J.d4,J.by])
r(J.kP,J.v)
q(J.dO,[J.eW,J.ig])
q(A.h,[A.ci,A.A,A.cI,A.bV,A.eC,A.bP,A.fN,A.fX,A.je,A.jw,A.di,A.dj,A.dk,A.dl,A.dm,A.dn,A.dq,A.dr,A.ds,A.dt,A.du,A.bI,A.bM,A.av,A.cL,A.cM,A.cN,A.cO,A.cP,A.cQ,A.cR,A.cS,A.cT,A.cU,A.cV,A.cW,A.ad])
q(A.ci,[A.cv,A.hl])
r(A.fU,A.cv)
r(A.fR,A.hl)
q(A.aJ,[A.hC,A.hB,A.i0,A.iY,A.kX,A.nh,A.nj,A.m1,A.m0,A.mO,A.me,A.ml,A.lt,A.ls,A.mu,A.mr,A.l4,A.mD,A.mT,A.mU,A.nr,A.ns,A.k7,A.nf,A.nq,A.jY,A.k1,A.k2,A.k4,A.l9,A.n9,A.k_,A.kh,A.kT,A.lg,A.kL,A.kK,A.kc,A.kd,A.mY,A.km,A.kl,A.kn,A.kp,A.kr,A.ko,A.kF,A.m8,A.m9,A.nc,A.n1,A.n2])
q(A.hC,[A.m5,A.kW,A.ni,A.mP,A.mZ,A.mf,A.l2,A.l6,A.mq,A.mH,A.lI,A.lE,A.lG,A.lH,A.mG,A.mF,A.mS,A.k5,A.k6,A.jX,A.la,A.kH,A.kI,A.kJ,A.lX,A.kq])
r(A.bG,A.fR)
q(A.S,[A.cH,A.bR,A.ij,A.j4,A.jk,A.iP,A.eq,A.jn,A.f1,A.bb,A.fF,A.j3,A.e4,A.hF])
r(A.e5,A.y)
r(A.ai,A.e5)
q(A.hB,[A.np,A.m2,A.m3,A.my,A.ma,A.mh,A.mg,A.md,A.mc,A.mb,A.mk,A.mj,A.mi,A.lu,A.lr,A.mw,A.mv,A.m4,A.ms,A.mQ,A.mX,A.mt,A.mK,A.mJ,A.l8,A.kE,A.ks,A.kz,A.kA,A.kB,A.kC,A.kx,A.ky,A.kt,A.ku,A.kv,A.kw,A.kD,A.mm,A.no,A.nv,A.n_,A.n0,A.n3,A.n4])
q(A.A,[A.U,A.ey,A.aX])
q(A.U,[A.d2,A.aC,A.fz,A.js])
r(A.ex,A.cI)
r(A.dw,A.bP)
q(A.dv,[A.ev,A.cz])
r(A.dL,A.i0)
r(A.fe,A.bR)
q(A.iY,[A.iV,A.df])
r(A.jf,A.eq)
q(A.P,[A.aW,A.jr])
q(A.aW,[A.f0,A.f_,A.fZ])
q(A.fa,[A.ip,A.aD])
q(A.aD,[A.h1,A.h3])
r(A.h2,A.h1)
r(A.ca,A.h2)
r(A.h4,A.h3)
r(A.b6,A.h4)
q(A.ca,[A.f5,A.f6])
q(A.b6,[A.f7,A.f8,A.f9,A.fb,A.fc,A.fd,A.cK])
r(A.hb,A.jn)
r(A.bW,A.fS)
q(A.aw,[A.d0,A.ha,A.fV,A.ee])
r(A.ea,A.h8)
r(A.eb,A.ha)
r(A.ec,A.fQ)
r(A.fT,A.cj)
r(A.ju,A.hk)
r(A.h6,A.e1)
r(A.h_,A.h6)
r(A.hf,A.f3)
r(A.d5,A.hf)
q(A.bH,[A.c4,A.hw,A.ik])
q(A.c4,[A.hu,A.im,A.j7])
q(A.hG,[A.mA,A.mz,A.jW,A.kZ,A.kY,A.lJ,A.j8])
q(A.mA,[A.jV,A.l0])
q(A.mz,[A.jU,A.l_])
r(A.jj,A.k3)
r(A.il,A.f1)
r(A.mo,A.mp)
q(A.bb,[A.dZ,A.hY])
r(A.jl,A.hg)
r(A.mN,A.m_)
q(A.m7,[A.hA,A.k9,A.aL,A.hy,A.aF,A.ax,A.dx,A.cy,A.bm,A.dz,A.kR,A.dV,A.fs,A.cb,A.cc,A.bp,A.aO,A.d3,A.an,A.bg,A.d6,A.e8,A.kG,A.hQ,A.eU])
r(A.hZ,A.i_)
r(A.fg,A.iu)
r(A.hz,A.hx)
r(A.dg,A.d0)
r(A.iO,A.er)
q(A.jZ,[A.e0,A.d1])
r(A.iW,A.d1)
r(A.et,A.J)
q(A.bI,[A.hD,A.dp])
r(A.cx,A.bc)
q(A.ak,[A.bL,A.cB,A.cG,A.bx,A.cC,A.c7,A.cF,A.cD,A.cE,A.dB,A.dA,A.dC])
q(A.ke,[A.es,A.hM,A.kj,A.hT,A.eZ,A.ft,A.iA,A.iD,A.iN,A.iZ,A.j_,A.jc])
r(A.kf,A.es)
r(A.i3,A.bJ)
q(A.i3,[A.eR,A.i5,A.i6,A.i7,A.eS])
r(A.i4,A.eE)
r(A.i8,A.eI)
r(A.hS,A.bF)
q(A.c6,[A.cA,A.eL])
r(A.kU,A.kg)
r(A.i9,A.fu)
r(A.ia,A.iz)
r(A.cd,A.O)
q(A.bA,[A.iC,A.iE,A.iH,A.iI,A.iK,A.iL])
q(A.dW,[A.fw,A.iJ])
q(A.iM,[A.dY,A.aN])
r(A.ib,A.fI)
r(A.ic,A.fM)
r(A.eT,A.e9)
q(A.av,[A.dD,A.dE,A.eN,A.eO,A.eP,A.eQ,A.dF,A.dG,A.dH,A.dI,A.dJ,A.dK])
q(A.bd,[A.fh,A.fi,A.fj,A.fk,A.fl,A.fm,A.fn,A.fo,A.bn])
r(A.dM,A.lw)
q(A.dM,[A.iB,A.j6,A.jd])
r(A.hP,A.iS)
q(A.e3,[A.ef,A.iT])
r(A.e2,A.iU)
r(A.bQ,A.iT)
r(A.iX,A.e2)
s(A.e5,A.bh)
s(A.hl,A.y)
s(A.h1,A.y)
s(A.h2,A.a5)
s(A.h3,A.y)
s(A.h4,A.a5)
s(A.ea,A.ji)
s(A.hf,A.jB)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{i:"int",G:"double",m:"num",l:"String",ae:"bool",ar:"Null",n:"List",B:"Object",M:"Map"},mangledNames:{},types:["~()","~(ay)","i(bD,i,i)","ar()","i([i])","~(bN,n<i>)","~(@)","ar(a7)","l(l)","ae(l)","~(i,i,i,i,i,aP)","ae(as)","~(~())","~(a7)","~(B,b_)","~(B?,B?)","@()","~(l,@)","i(i,i)","ar(@)","~(aP,l,i)","aV<e0>(ka)","l(bz)","~(l,b4)","@(@)","i()","i(@,@)","~(i)","ae(B?,B?)","i(B?)","ar(~())","i(l)","L<@>(@)","~(n<i>)","dU()","~(l,l)","~(l,i)","aV<~>()","~(i,ak)","~(@,@)","~(m,m,m,m)","bD(i)","bN(i)","@(@,l)","@(l)","ar(@,b_)","m(m,m,m,m)","m(m,m,m,m,m)","l(l?)","l?()","0^(0^,0^)<m>","~(i,@)","B(b8)","B(as)","i(as,as)","n<b8>(aG<B,n<as>>)","~(B?)","bQ()","~(l,i?)","cw(M<@,@>)","ae()","~(l,l?)","aP(@,@)","ae(@)","M<l,l>(M<l,l>,l)","e6(l[l,M<l,@>?])","ae(l,l)","ar(B,b_)","i(b8)","~(B[b_?])"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti")}
A.vl(v.typeUniverse,JSON.parse('{"by":"c9","iy":"c9","d4":"c9","ie":{"ae":[],"Q":[]},"eX":{"ar":[],"Q":[]},"eY":{"a7":[]},"c9":{"a7":[]},"v":{"n":["1"],"A":["1"],"a7":[],"h":["1"],"az":["1"]},"kP":{"v":["1"],"n":["1"],"A":["1"],"a7":[],"h":["1"],"az":["1"]},"cu":{"z":["1"]},"dO":{"G":[],"m":[],"aj":["m"]},"eW":{"G":[],"i":[],"m":[],"aj":["m"],"Q":[]},"ig":{"G":[],"m":[],"aj":["m"],"Q":[]},"c8":{"l":[],"aj":["l"],"le":[],"az":["@"],"Q":[]},"ci":{"h":["2"]},"eu":{"z":["2"]},"cv":{"ci":["1","2"],"h":["2"],"h.E":"2"},"fU":{"cv":["1","2"],"ci":["1","2"],"A":["2"],"h":["2"],"h.E":"2"},"fR":{"y":["2"],"n":["2"],"ci":["1","2"],"A":["2"],"h":["2"]},"bG":{"fR":["1","2"],"y":["2"],"n":["2"],"ci":["1","2"],"A":["2"],"h":["2"],"y.E":"2","h.E":"2"},"cH":{"S":[]},"ai":{"y":["i"],"bh":["i"],"n":["i"],"A":["i"],"h":["i"],"y.E":"i","bh.E":"i"},"A":{"h":["1"]},"U":{"A":["1"],"h":["1"]},"d2":{"U":["1"],"A":["1"],"h":["1"],"U.E":"1","h.E":"1"},"ah":{"z":["1"]},"cI":{"h":["2"],"h.E":"2"},"ex":{"cI":["1","2"],"A":["2"],"h":["2"],"h.E":"2"},"aB":{"z":["2"]},"aC":{"U":["2"],"A":["2"],"h":["2"],"U.E":"2","h.E":"2"},"bV":{"h":["1"],"h.E":"1"},"d8":{"z":["1"]},"eC":{"h":["2"],"h.E":"2"},"eD":{"z":["2"]},"bP":{"h":["1"],"h.E":"1"},"dw":{"bP":["1"],"A":["1"],"h":["1"],"h.E":"1"},"fA":{"z":["1"]},"ey":{"A":["1"],"h":["1"],"h.E":"1"},"ez":{"z":["1"]},"fN":{"h":["1"],"h.E":"1"},"fO":{"z":["1"]},"e5":{"y":["1"],"bh":["1"],"n":["1"],"A":["1"],"h":["1"]},"fz":{"U":["1"],"A":["1"],"h":["1"],"U.E":"1","h.E":"1"},"dv":{"M":["1","2"]},"ev":{"dv":["1","2"],"M":["1","2"]},"fX":{"h":["1"],"h.E":"1"},"fY":{"z":["1"]},"cz":{"dv":["1","2"],"M":["1","2"]},"i0":{"aJ":[],"bK":[]},"dL":{"aJ":[],"bK":[]},"fe":{"bR":[],"S":[]},"ij":{"S":[]},"j4":{"S":[]},"is":{"af":[]},"h7":{"b_":[]},"aJ":{"bK":[]},"hB":{"aJ":[],"bK":[]},"hC":{"aJ":[],"bK":[]},"iY":{"aJ":[],"bK":[]},"iV":{"aJ":[],"bK":[]},"df":{"aJ":[],"bK":[]},"jk":{"S":[]},"iP":{"S":[]},"jf":{"S":[]},"aW":{"P":["1","2"],"io":["1","2"],"M":["1","2"],"P.K":"1","P.V":"2"},"aX":{"A":["1"],"h":["1"],"h.E":"1"},"aA":{"z":["1"]},"f0":{"aW":["1","2"],"P":["1","2"],"io":["1","2"],"M":["1","2"],"P.K":"1","P.V":"2"},"f_":{"aW":["1","2"],"P":["1","2"],"io":["1","2"],"M":["1","2"],"P.K":"1","P.V":"2"},"dP":{"tW":[],"le":[]},"h0":{"fy":[],"bz":[]},"je":{"h":["fy"],"h.E":"fy"},"fP":{"z":["fy"]},"fC":{"bz":[]},"jw":{"h":["bz"],"h.E":"bz"},"jx":{"z":["bz"]},"cJ":{"a7":[],"Q":[]},"fa":{"a7":[],"a9":[]},"ip":{"a7":[],"a9":[],"Q":[]},"aD":{"b5":["1"],"a7":[],"a9":[],"az":["1"]},"ca":{"y":["G"],"aD":["G"],"n":["G"],"b5":["G"],"A":["G"],"a7":[],"a9":[],"az":["G"],"h":["G"],"a5":["G"]},"b6":{"y":["i"],"aD":["i"],"n":["i"],"b5":["i"],"A":["i"],"a7":[],"a9":[],"az":["i"],"h":["i"],"a5":["i"]},"f5":{"ca":[],"ki":[],"y":["G"],"aD":["G"],"n":["G"],"b5":["G"],"A":["G"],"a7":[],"a9":[],"az":["G"],"h":["G"],"a5":["G"],"Q":[],"y.E":"G","a5.E":"G"},"f6":{"ca":[],"nJ":[],"y":["G"],"aD":["G"],"n":["G"],"b5":["G"],"A":["G"],"a7":[],"a9":[],"az":["G"],"h":["G"],"a5":["G"],"Q":[],"y.E":"G","a5.E":"G"},"f7":{"b6":[],"kO":[],"y":["i"],"aD":["i"],"n":["i"],"b5":["i"],"A":["i"],"a7":[],"a9":[],"az":["i"],"h":["i"],"a5":["i"],"Q":[],"y.E":"i","a5.E":"i"},"f8":{"b6":[],"i1":[],"y":["i"],"aD":["i"],"n":["i"],"b5":["i"],"A":["i"],"a7":[],"a9":[],"az":["i"],"h":["i"],"a5":["i"],"Q":[],"y.E":"i","a5.E":"i"},"f9":{"b6":[],"nM":[],"y":["i"],"aD":["i"],"n":["i"],"b5":["i"],"A":["i"],"a7":[],"a9":[],"az":["i"],"h":["i"],"a5":["i"],"Q":[],"y.E":"i","a5.E":"i"},"fb":{"b6":[],"oi":[],"y":["i"],"aD":["i"],"n":["i"],"b5":["i"],"A":["i"],"a7":[],"a9":[],"az":["i"],"h":["i"],"a5":["i"],"Q":[],"y.E":"i","a5.E":"i"},"fc":{"b6":[],"bD":[],"y":["i"],"aD":["i"],"n":["i"],"b5":["i"],"A":["i"],"a7":[],"a9":[],"az":["i"],"h":["i"],"a5":["i"],"Q":[],"y.E":"i","a5.E":"i"},"fd":{"b6":[],"y":["i"],"aD":["i"],"n":["i"],"b5":["i"],"A":["i"],"a7":[],"a9":[],"az":["i"],"h":["i"],"a5":["i"],"Q":[],"y.E":"i","a5.E":"i"},"cK":{"b6":[],"aP":[],"y":["i"],"aD":["i"],"n":["i"],"b5":["i"],"A":["i"],"a7":[],"a9":[],"az":["i"],"h":["i"],"a5":["i"],"Q":[],"y.E":"i","a5.E":"i"},"jn":{"S":[]},"hb":{"bR":[],"S":[]},"L":{"aV":["1"]},"bE":{"S":[]},"bW":{"fS":["1"]},"d0":{"aw":["1"]},"h8":{"qa":["1"],"d9":["1"]},"ea":{"ji":["1"],"h8":["1"],"qa":["1"],"d9":["1"]},"eb":{"ha":["1"],"aw":["1"],"aw.T":"1"},"ec":{"fQ":["1"],"ce":["1"],"d9":["1"]},"fQ":{"ce":["1"],"d9":["1"]},"ha":{"aw":["1"]},"fT":{"cj":["1"]},"jm":{"cj":["@"]},"ed":{"ce":["1"]},"fV":{"aw":["1"],"aw.T":"1"},"hk":{"q_":[]},"ju":{"hk":[],"q_":[]},"fZ":{"aW":["1","2"],"P":["1","2"],"io":["1","2"],"M":["1","2"],"P.K":"1","P.V":"2"},"h_":{"e1":["1"],"od":["1"],"A":["1"],"h":["1"]},"da":{"z":["1"]},"y":{"n":["1"],"A":["1"],"h":["1"]},"P":{"M":["1","2"]},"f3":{"M":["1","2"]},"d5":{"hf":["1","2"],"f3":["1","2"],"jB":["1","2"],"M":["1","2"]},"e1":{"od":["1"],"A":["1"],"h":["1"]},"h6":{"e1":["1"],"od":["1"],"A":["1"],"h":["1"]},"c4":{"bH":["l","n<i>"]},"jr":{"P":["l","@"],"M":["l","@"],"P.K":"l","P.V":"@"},"js":{"U":["l"],"A":["l"],"h":["l"],"U.E":"l","h.E":"l"},"hu":{"c4":[],"bH":["l","n<i>"]},"hw":{"bH":["n<i>","l"]},"f1":{"S":[]},"il":{"S":[]},"ik":{"bH":["B?","l"]},"im":{"c4":[],"bH":["l","n<i>"]},"j7":{"c4":[],"bH":["l","n<i>"]},"G":{"m":[],"aj":["m"]},"i":{"m":[],"aj":["m"]},"n":{"A":["1"],"h":["1"]},"m":{"aj":["m"]},"fy":{"bz":[]},"l":{"aj":["l"],"le":[]},"eq":{"S":[]},"bR":{"S":[]},"bb":{"S":[]},"dZ":{"S":[]},"hY":{"S":[]},"fF":{"S":[]},"j3":{"S":[]},"e4":{"S":[]},"hF":{"S":[]},"it":{"S":[]},"fB":{"S":[]},"jo":{"af":[]},"c5":{"af":[]},"jy":{"b_":[]},"am":{"u1":[]},"hg":{"e6":[]},"bj":{"e6":[]},"jl":{"e6":[]},"ir":{"af":[]},"hZ":{"i_":[]},"fg":{"iu":[]},"J":{"M":["2","3"]},"hx":{"ka":[]},"hz":{"ka":[]},"dg":{"d0":["n<i>"],"aw":["n<i>"],"d0.T":"n<i>","aw.T":"n<i>"},"dh":{"af":[]},"iO":{"er":[]},"iW":{"d1":[]},"et":{"J":["l","l","1"],"M":["l","1"],"J.K":"l","J.V":"1","J.C":"l"},"X":{"z":["m"]},"di":{"E":[],"h":["m"],"h.E":"m"},"dj":{"E":[],"h":["m"],"h.E":"m"},"dk":{"E":[],"h":["m"],"h.E":"m"},"dl":{"E":[],"h":["m"],"h.E":"m"},"dm":{"E":[],"h":["m"],"h.E":"m"},"dn":{"E":[],"h":["m"],"h.E":"m"},"dq":{"E":[],"h":["m"],"h.E":"m"},"dr":{"E":[],"h":["m"],"h.E":"m"},"ds":{"E":[],"h":["m"],"h.E":"m"},"dt":{"E":[],"h":["m"],"h.E":"m"},"du":{"E":[],"h":["m"],"h.E":"m"},"bI":{"E":[],"h":["m"],"h.E":"m"},"hD":{"E":[],"h":["m"],"h.E":"m"},"dp":{"E":[],"h":["m"],"h.E":"m"},"cx":{"bc":[]},"bL":{"ak":[]},"cB":{"ak":[]},"cG":{"ak":[]},"bx":{"ak":[]},"cC":{"ak":[]},"c7":{"ak":[]},"cF":{"ak":[]},"cD":{"ak":[]},"cE":{"ak":[]},"dB":{"ak":[]},"dA":{"ak":[]},"dC":{"ak":[]},"bF":{"O":[]},"eR":{"bJ":[]},"i3":{"bJ":[]},"hO":{"O":[]},"i4":{"eE":[]},"i5":{"bJ":[]},"i6":{"bJ":[]},"i7":{"bJ":[]},"eS":{"bJ":[]},"i8":{"eI":[]},"eJ":{"O":[]},"hU":{"O":[]},"hS":{"bF":[],"O":[]},"cA":{"c6":[]},"eL":{"c6":[]},"i9":{"fu":[]},"iz":{"O":[]},"ia":{"O":[]},"cd":{"O":[]},"iC":{"bA":[]},"iE":{"bA":[]},"iH":{"bA":[]},"iI":{"bA":[]},"iK":{"bA":[]},"iL":{"bA":[]},"fw":{"dW":[]},"iJ":{"dW":[]},"iF":{"O":[]},"dX":{"O":[]},"cZ":{"O":[]},"fx":{"O":[]},"fE":{"O":[]},"j2":{"O":[]},"ic":{"fM":[]},"e9":{"O":[]},"eT":{"e9":[],"O":[]},"bM":{"h":["w"],"h.E":"w"},"av":{"h":["w"]},"dD":{"av":[],"h":["w"],"h.E":"w"},"dE":{"av":[],"h":["w"],"h.E":"w"},"eN":{"av":[],"h":["w"],"h.E":"w"},"eO":{"av":[],"h":["w"],"h.E":"w"},"eP":{"av":[],"h":["w"],"h.E":"w"},"eQ":{"av":[],"h":["w"],"h.E":"w"},"dF":{"av":[],"h":["w"],"h.E":"w"},"dG":{"av":[],"h":["w"],"h.E":"w"},"dH":{"av":[],"h":["w"],"h.E":"w"},"dI":{"av":[],"h":["w"],"h.E":"w"},"dJ":{"av":[],"h":["w"],"h.E":"w"},"dK":{"av":[],"h":["w"],"h.E":"w"},"fh":{"bd":[]},"fi":{"bd":[]},"fj":{"bd":[]},"fk":{"bd":[]},"fl":{"bd":[]},"fm":{"bd":[]},"fn":{"bd":[]},"fo":{"bd":[]},"bn":{"bd":[]},"cL":{"w":[],"E":[],"h":["m"],"z":["w"],"h.E":"m"},"cM":{"w":[],"E":[],"h":["m"],"z":["w"],"h.E":"m"},"cN":{"w":[],"E":[],"h":["m"],"z":["w"],"h.E":"m"},"cO":{"w":[],"E":[],"h":["m"],"z":["w"],"h.E":"m"},"cP":{"w":[],"E":[],"h":["m"],"z":["w"],"h.E":"m"},"cQ":{"w":[],"E":[],"h":["m"],"z":["w"],"h.E":"m"},"ix":{"z":["w"]},"cR":{"w":[],"E":[],"h":["m"],"z":["w"],"h.E":"m"},"cS":{"w":[],"E":[],"h":["m"],"z":["w"],"h.E":"m"},"cT":{"w":[],"E":[],"h":["m"],"z":["w"],"h.E":"m"},"cU":{"w":[],"E":[],"h":["m"],"z":["w"],"h.E":"m"},"cV":{"w":[],"E":[],"h":["m"],"z":["w"],"h.E":"m"},"cW":{"w":[],"E":[],"h":["m"],"z":["w"],"h.E":"m"},"ad":{"w":[],"E":[],"h":["m"],"z":["w"],"h.E":"m"},"hX":{"af":[]},"iw":{"af":[]},"iB":{"dM":[]},"j6":{"dM":[]},"jd":{"dM":[]},"hP":{"bq":[],"aj":["bq"]},"ef":{"bQ":[],"bB":[],"aj":["bB"]},"bq":{"aj":["bq"]},"iS":{"bq":[],"aj":["bq"]},"bB":{"aj":["bB"]},"iT":{"bB":[],"aj":["bB"]},"iU":{"af":[]},"e2":{"c5":[],"af":[]},"e3":{"bB":[],"aj":["bB"]},"bQ":{"bB":[],"aj":["bB"]},"iX":{"c5":[],"af":[]},"ee":{"aw":["1"],"aw.T":"1"},"fW":{"ce":["1"]},"ew":{"af":[]},"f4":{"af":[]},"rZ":{"a9":[]},"nM":{"n":["i"],"A":["i"],"a9":[],"h":["i"]},"aP":{"n":["i"],"A":["i"],"a9":[],"h":["i"]},"u5":{"n":["i"],"A":["i"],"a9":[],"h":["i"]},"kO":{"n":["i"],"A":["i"],"a9":[],"h":["i"]},"oi":{"n":["i"],"A":["i"],"a9":[],"h":["i"]},"i1":{"n":["i"],"A":["i"],"a9":[],"h":["i"]},"bD":{"n":["i"],"A":["i"],"a9":[],"h":["i"]},"ki":{"n":["G"],"A":["G"],"a9":[],"h":["G"]},"nJ":{"n":["G"],"A":["G"],"a9":[],"h":["G"]},"w":{"E":[],"z":["w"],"h":["m"]}}'))
A.vk(v.typeUniverse,JSON.parse('{"e5":1,"hl":2,"aD":1,"cj":1,"h6":1,"hG":2,"iM":1}'))
var u={s:" must not be greater than the number of characters in the file, ",l:"Cannot extract a file path from a URI with a fragment component",y:"Cannot extract a file path from a URI with a query component",j:"Cannot extract a non-Windows file path from a file URI with an authority",r:"Check the query params maybe? Query params is the ?id=123 stuff at the end of a URL",c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.a4
return{bm:s("@<~>"),n:s("bE"),kj:s("et<l>"),V:s("ai"),G:s("E"),bP:s("aj<@>"),X:s("A<@>"),Q:s("S"),mA:s("af"),iW:s("hK"),ho:s("hN"),pk:s("ki"),lW:s("c5"),Y:s("bK"),pg:s("aV<@>"),co:s("dy"),gP:s("hR"),aw:s("hV"),a:s("b4"),r:s("ak"),I:s("av"),bW:s("i1"),bq:s("h<l>"),id:s("h<G>"),U:s("h<@>"),fm:s("h<i>"),an:s("v<hE>"),a_:s("v<hL>"),lv:s("v<eE>"),lM:s("v<eI>"),nK:s("v<dy>"),g:s("v<bM>"),hc:s("v<n<n<n<i>>>>"),o:s("v<n<n<i>>>"),S:s("v<n<i>>"),e2:s("v<M<l,l?>>"),a7:s("v<cJ>"),fi:s("v<fu>"),mS:s("v<cY>"),na:s("v<bA>"),k9:s("v<fv>"),s:s("v<l>"),fZ:s("v<j1>"),bs:s("v<aP>"),by:s("v<bT>"),ip:s("v<ja>"),J:s("v<fM>"),n0:s("v<jp>"),g7:s("v<as>"),kv:s("v<eh>"),dg:s("v<b8>"),dG:s("v<@>"),t:s("v<i>"),dj:s("v<c6?>"),gU:s("v<ih?>"),iZ:s("v<n<i>?>"),mf:s("v<l?>"),mD:s("v<bD?>"),e5:s("v<aP?>"),O:s("v<~(ay)>"),iy:s("az<@>"),u:s("eX"),m:s("a7"),dY:s("by"),dX:s("b5<@>"),e7:s("bN"),kk:s("n<dy>"),aL:s("n<bM>"),kn:s("n<i1>"),hK:s("n<n<n<i>>>"),mL:s("n<n<bT>>"),v:s("n<cY>"),f0:s("n<fv>"),W:s("n<l>"),ac:s("n<fG>"),jz:s("n<bT>"),jt:s("n<fJ>"),as:s("n<fK>"),f4:s("n<fL>"),bd:s("n<G>"),j:s("n<@>"),L:s("n<i>"),B:s("n<c6?>"),d:s("n<n<i>?>"),kb:s("n<bT?>"),b:s("n<as?>"),a3:s("n<h5?>"),dW:s("n<i?>"),gc:s("aG<l,l>"),lO:s("aG<B,n<as>>"),f:s("M<l,l>"),ea:s("M<l,@>"),av:s("M<@,@>"),o8:s("aC<l,@>"),br:s("dU"),hH:s("cJ"),dQ:s("ca"),aj:s("b6"),hD:s("cK"),P:s("ar"),K:s("B"),dS:s("cY"),ok:s("iG"),dM:s("fw"),mi:s("dW"),fF:s("dX"),gH:s("cZ"),i:s("e_"),lZ:s("yb"),lu:s("fy"),q:s("e0"),e:s("bq"),hs:s("bB"),ol:s("bQ"),l:s("b_"),hL:s("d1"),N:s("l"),po:s("l(bz)"),e8:s("j0"),aJ:s("Q"),do:s("bR"),mC:s("bD"),D:s("aP"),cx:s("d4"),h:s("d5<l,l>"),R:s("e6"),aO:s("fG"),f_:s("fJ"),h2:s("fK"),ij:s("fL"),cF:s("bV<l>"),lS:s("fN<l>"),df:s("bW<d1>"),iq:s("bW<aP>"),d4:s("ee<a7>"),oO:s("L<d1>"),bF:s("L<aP>"),c:s("L<@>"),hy:s("L<i>"),cU:s("L<~>"),C:s("as"),nR:s("b8"),nA:s("h5"),gL:s("h9<B?>"),k4:s("ae"),nU:s("ae(B)"),gS:s("ae(l)"),aP:s("ae(as)"),dx:s("G"),z:s("@"),mY:s("@()"),y:s("@(B)"),ng:s("@(B,b_)"),ha:s("@(l)"),p:s("i"),eK:s("0&*"),_:s("B*"),oF:s("hH?"),gK:s("aV<ar>?"),jH:s("kO?"),A:s("a7?"),gv:s("by?"),lH:s("n<@>?"),T:s("n<i>?"),iM:s("n<c6?>?"),ia:s("n<n<i>?>?"),lq:s("n<bD?>?"),k:s("n<i?>?"),i1:s("M<l,av>?"),w:s("M<l,l>?"),dZ:s("M<l,@>?"),iD:s("B?"),fw:s("b_?"),jv:s("l?"),bb:s("l(bz)?"),nh:s("aP?"),nX:s("fH?"),fA:s("bT?"),nk:s("jb?"),lT:s("cj<@>?"),F:s("bX<@,@>?"),dd:s("as?"),nF:s("jt?"),x:s("i?"),Z:s("~()?"),bZ:s("~(i)?"),E:s("m"),H:s("~"),M:s("~()"),mX:s("~(bN,n<i>)"),fM:s("~(n<i>)"),i6:s("~(B)"),b9:s("~(B,b_)"),lc:s("~(l,@)"),lt:s("~(i)"),jO:s("~(m,m,m,m)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.cV=J.i2.prototype
B.c=J.v.prototype
B.a=J.eW.prototype
B.b=J.dO.prototype
B.d=J.c8.prototype
B.cX=J.by.prototype
B.cY=J.eY.prototype
B.P=A.f5.prototype
B.Q=A.f6.prototype
B.a0=A.f7.prototype
B.a1=A.f8.prototype
B.a2=A.f9.prototype
B.C=A.fb.prototype
B.m=A.fc.prototype
B.f=A.cK.prototype
B.bW=J.iy.prototype
B.aO=J.d4.prototype
B.ce=new A.jU(!1,127)
B.cf=new A.jV(127)
B.au=new A.hy(0,"direct")
B.av=new A.hy(1,"alpha")
B.aQ=new A.ax(0,"none")
B.aw=new A.ax(3,"bitfields")
B.ax=new A.ax(6,"alphaBitfields")
B.cr=new A.hA(0,"littleEndian")
B.aR=new A.hA(1,"bigEndian")
B.cD=new A.fV(A.a4("fV<n<i>>"))
B.cs=new A.dg(B.cD)
B.ct=new A.dL(A.xg(),A.a4("dL<i>"))
B.z=new A.hu()
B.kt=new A.jW()
B.cu=new A.hw()
B.aS=new A.ez(A.a4("ez<0&>"))
B.aT=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.cv=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof HTMLElement == "function";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
B.cA=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var userAgent = navigator.userAgent;
    if (typeof userAgent != "string") return hooks;
    if (userAgent.indexOf("DumpRenderTree") >= 0) return hooks;
    if (userAgent.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
B.cw=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.cz=function(hooks) {
  if (typeof navigator != "object") return hooks;
  var userAgent = navigator.userAgent;
  if (typeof userAgent != "string") return hooks;
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
B.cy=function(hooks) {
  if (typeof navigator != "object") return hooks;
  var userAgent = navigator.userAgent;
  if (typeof userAgent != "string") return hooks;
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
B.cx=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
B.aU=function(hooks) { return hooks; }

B.aV=new A.ik()
B.t=new A.im()
B.cB=new A.it()
B.a8=new A.lo()
B.u=new A.j7()
B.cC=new A.lJ()
B.L=new A.lZ()
B.aW=new A.jm()
B.q=new A.ju()
B.a9=new A.jy()
B.cE=new A.mN()
B.aX=new A.k9(4,"luminance")
B.cF=new A.cy(0,"red")
B.cG=new A.cy(1,"green")
B.cH=new A.cy(2,"blue")
B.cI=new A.cy(3,"alpha")
B.cJ=new A.cy(4,"other")
B.aY=new A.dx(0,"uint")
B.ay=new A.dx(1,"half")
B.az=new A.dx(2,"float")
B.aZ=new A.bm(0,"none")
B.A=new A.aL(0,"uint1")
B.D=new A.aL(1,"uint2")
B.M=new A.aL(10,"float32")
B.R=new A.aL(11,"float64")
B.E=new A.aL(2,"uint4")
B.h=new A.aL(3,"uint8")
B.n=new A.aL(4,"uint16")
B.N=new A.aL(5,"uint32")
B.S=new A.aL(6,"int8")
B.T=new A.aL(7,"int16")
B.U=new A.aL(8,"int32")
B.G=new A.aL(9,"float16")
B.cR=new A.hQ(1,"page")
B.k=new A.hQ(2,"sequence")
B.cS=new A.kG(1,"deflate")
B.b_=new A.dz(2,"cur")
B.e=new A.aF(0,"none")
B.b0=new A.aF(1,"byte")
B.b1=new A.aF(10,"sRational")
B.b2=new A.aF(11,"single")
B.b3=new A.aF(12,"double")
B.l=new A.aF(2,"ascii")
B.j=new A.aF(3,"short")
B.p=new A.aF(4,"long")
B.v=new A.aF(5,"rational")
B.b4=new A.aF(6,"sByte")
B.H=new A.aF(7,"undefined")
B.b5=new A.aF(8,"sShort")
B.b6=new A.aF(9,"sLong")
B.b7=new A.eU(0,"nearest")
B.ku=new A.eU(1,"linear")
B.cW=new A.eU(3,"average")
B.b8=new A.kR(0,"yuv444")
B.cZ=new A.kY(null)
B.d_=new A.kZ(null)
B.d0=new A.l_(!1,255)
B.d1=new A.l0(255)
B.b9=A.b(s([0,1,2,3,17,4,5,33,49,6,18,65,81,7,97,113,19,34,50,129,8,20,66,145,161,177,193,9,35,51,82,240,21,98,114,209,10,22,36,52,225,37,241,23,24,25,26,38,39,40,41,42,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,130,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,226,227,228,229,230,231,232,233,234,242,243,244,245,246,247,248,249,250]),t.t)
B.V=A.b(s([0,2,8]),t.t)
B.eq=A.b(s([0,4,2,1]),t.t)
B.bc=A.b(s([252,243,207,63]),t.t)
B.aa=A.b(s([292,260,226,226]),t.t)
B.bd=A.b(s([0,0,1,5,1,1,1,1,1,1,0,0,0,0,0,0,0]),t.t)
B.bg=A.b(s([0,0,2,1,2,4,4,3,4,7,5,4,4,0,1,2,119]),t.t)
B.bf=A.b(s([0,0,2,1,3,3,2,4,3,5,5,4,4,0,0,1,125]),t.t)
B.be=A.b(s([0,0,3,1,1,1,1,1,1,1,1,1,0,0,0,0,0]),t.t)
B.ab=A.b(s([0,1,2,3,6,4,5,6,6,6,6,6,6,6,6,7,0]),t.t)
B.bh=A.b(s([2,3,7]),t.t)
B.eL=A.b(s([0,0,32722,12287,65534,34815,65534,18431]),t.t)
B.cK=new A.bm(1,"rle")
B.cL=new A.bm(2,"zips")
B.cM=new A.bm(3,"zip")
B.cN=new A.bm(4,"piz")
B.cO=new A.bm(5,"pxr24")
B.cP=new A.bm(6,"b44")
B.cQ=new A.bm(7,"b44a")
B.bi=A.b(s([B.aZ,B.cK,B.cL,B.cM,B.cN,B.cO,B.cP,B.cQ]),A.a4("v<bm>"))
B.ac=A.b(s([-0.0,1,-1,2,-2,3,4,6,-3,5,-4,-5,-6,7,-7,8,-8,-9]),t.t)
B.eU=A.b(s([3,3,11]),t.t)
B.ad=A.b(s([0,0,65490,45055,65535,34815,65534,18431]),t.t)
B.bk=A.b(s([0,0,32754,11263,65534,34815,65534,18431]),t.t)
B.bo=A.b(s([511,1023,2047,4095]),t.t)
B.bp=A.b(s([63,207,243,252]),t.t)
B.ae=A.b(s([0,36,72,109,145,182,218,255]),t.t)
B.bq=A.b(s([24,7,23,25,40,6,39,41,22,26,38,42,56,5,55,57,21,27,54,58,37,43,72,4,71,73,20,28,53,59,70,74,36,44,88,69,75,52,60,3,87,89,19,29,86,90,35,45,68,76,85,91,51,61,104,2,103,105,18,30,102,106,34,46,84,92,67,77,101,107,50,62,120,1,119,121,83,93,17,31,100,108,66,78,118,122,33,47,117,123,49,63,99,109,82,94,0,116,124,65,79,16,32,98,110,48,115,125,81,95,64,114,126,97,111,80,113,127,96,112]),t.t)
B.fq=A.b(s([8,8,4,2]),t.t)
B.jC=new A.cb(0,"none")
B.jD=new A.cb(1,"sub")
B.jE=new A.cb(2,"up")
B.jF=new A.cb(3,"average")
B.jG=new A.cb(4,"paeth")
B.af=A.b(s([B.jC,B.jD,B.jE,B.jF,B.jG]),A.a4("v<cb>"))
B.bs=A.b(s([A.xD(),A.xx(),A.xN(),A.xL(),A.xF(),A.xE(),A.xG()]),t.O)
B.ag=A.b(s([0,1,2,3,4,5,6,7,8,9,10,11]),t.t)
B.cc=new A.d6(0,"predictor")
B.kq=new A.d6(1,"crossColor")
B.kr=new A.d6(2,"subtractGreen")
B.cd=new A.d6(3,"colorIndexing")
B.bt=A.b(s([B.cc,B.kq,B.kr,B.cd]),A.a4("v<d6>"))
B.fE=A.b(s([280,256,256,256,40]),t.t)
B.bu=A.b(s([127,127,191,127,159,191,223,127,143,159,175,191,207,223,239,127,135,143,151,159,167,175,183,191,199,207,215,223,231,239,247,127,131,135,139,143,147,151,155,159,163,167,171,175,179,183,187,191,195,199,203,207,211,215,219,223,227,231,235,239,243,247,251,127,129,131,133,135,137,139,141,143,145,147,149,151,153,155,157,159,161,163,165,167,169,171,173,175,177,179,181,183,185,187,189,191,193,195,197,199,201,203,205,207,209,211,213,215,217,219,221,223,225,227,229,231,233,235,237,239,241,243,245,247,249,251,253,127]),t.t)
B.ah=A.b(s([3226,6412,200,168,38,38,134,134,100,100,100,100,68,68,68,68]),t.t)
B.ai=A.b(s([0,0,26624,1023,65534,2047,65534,2047]),t.t)
B.cg=new A.ax(1,"rle8")
B.cl=new A.ax(2,"rle4")
B.cm=new A.ax(4,"jpeg")
B.cn=new A.ax(5,"png")
B.co=new A.ax(7,"reserved7")
B.cp=new A.ax(8,"reserved8")
B.cq=new A.ax(9,"reserved9")
B.ch=new A.ax(10,"reserved10")
B.ci=new A.ax(11,"cmyk")
B.cj=new A.ax(12,"cmykRle8")
B.ck=new A.ax(13,"cmykRle4")
B.aj=A.b(s([B.aQ,B.cg,B.cl,B.aw,B.cm,B.cn,B.ax,B.co,B.cp,B.cq,B.ch,B.ci,B.cj,B.ck]),A.a4("v<ax>"))
B.x=A.b(s([255,255,255,255,255,255,255,255,255,255,255]),t.t)
B.W=A.b(s([B.x,B.x,B.x]),t.S)
B.ig=A.b(s([176,246,255,255,255,255,255,255,255,255,255]),t.t)
B.eN=A.b(s([223,241,252,255,255,255,255,255,255,255,255]),t.t)
B.iv=A.b(s([249,253,253,255,255,255,255,255,255,255,255]),t.t)
B.iA=A.b(s([B.ig,B.eN,B.iv]),t.S)
B.f3=A.b(s([255,244,252,255,255,255,255,255,255,255,255]),t.t)
B.iZ=A.b(s([234,254,254,255,255,255,255,255,255,255,255]),t.t)
B.bG=A.b(s([253,255,255,255,255,255,255,255,255,255,255]),t.t)
B.d2=A.b(s([B.f3,B.iZ,B.bG]),t.S)
B.f4=A.b(s([255,246,254,255,255,255,255,255,255,255,255]),t.t)
B.im=A.b(s([239,253,254,255,255,255,255,255,255,255,255]),t.t)
B.bj=A.b(s([254,255,254,255,255,255,255,255,255,255,255]),t.t)
B.eC=A.b(s([B.f4,B.im,B.bj]),t.S)
B.bm=A.b(s([255,248,254,255,255,255,255,255,255,255,255]),t.t)
B.io=A.b(s([251,255,254,255,255,255,255,255,255,255,255]),t.t)
B.iH=A.b(s([B.bm,B.io,B.x]),t.S)
B.aE=A.b(s([255,253,254,255,255,255,255,255,255,255,255]),t.t)
B.f5=A.b(s([251,254,254,255,255,255,255,255,255,255,255]),t.t)
B.il=A.b(s([B.aE,B.f5,B.bj]),t.S)
B.fc=A.b(s([255,254,253,255,254,255,255,255,255,255,255]),t.t)
B.hK=A.b(s([250,255,254,255,254,255,255,255,255,255,255]),t.t)
B.am=A.b(s([254,255,255,255,255,255,255,255,255,255,255]),t.t)
B.iY=A.b(s([B.fc,B.hK,B.am]),t.S)
B.j9=A.b(s([B.W,B.iA,B.d2,B.eC,B.iH,B.il,B.iY,B.W]),t.o)
B.iB=A.b(s([217,255,255,255,255,255,255,255,255,255,255]),t.t)
B.jm=A.b(s([225,252,241,253,255,255,254,255,255,255,255]),t.t)
B.iG=A.b(s([234,250,241,250,253,255,253,254,255,255,255]),t.t)
B.j8=A.b(s([B.iB,B.jm,B.iG]),t.S)
B.aC=A.b(s([255,254,255,255,255,255,255,255,255,255,255]),t.t)
B.j_=A.b(s([223,254,254,255,255,255,255,255,255,255,255]),t.t)
B.hR=A.b(s([238,253,254,254,255,255,255,255,255,255,255]),t.t)
B.fL=A.b(s([B.aC,B.j_,B.hR]),t.S)
B.h5=A.b(s([249,254,255,255,255,255,255,255,255,255,255]),t.t)
B.iO=A.b(s([B.bm,B.h5,B.x]),t.S)
B.iw=A.b(s([255,253,255,255,255,255,255,255,255,255,255]),t.t)
B.h6=A.b(s([247,254,255,255,255,255,255,255,255,255,255]),t.t)
B.jt=A.b(s([B.iw,B.h6,B.x]),t.S)
B.iC=A.b(s([252,255,255,255,255,255,255,255,255,255,255]),t.t)
B.fC=A.b(s([B.aE,B.iC,B.x]),t.S)
B.bn=A.b(s([255,254,254,255,255,255,255,255,255,255,255]),t.t)
B.hZ=A.b(s([B.bn,B.bG,B.x]),t.S)
B.h7=A.b(s([255,254,253,255,255,255,255,255,255,255,255]),t.t)
B.bH=A.b(s([250,255,255,255,255,255,255,255,255,255,255]),t.t)
B.iT=A.b(s([B.h7,B.bH,B.am]),t.S)
B.ju=A.b(s([B.j8,B.fL,B.iO,B.jt,B.fC,B.hZ,B.iT,B.W]),t.o)
B.eO=A.b(s([186,251,250,255,255,255,255,255,255,255,255]),t.t)
B.hS=A.b(s([234,251,244,254,255,255,255,255,255,255,255]),t.t)
B.hv=A.b(s([251,251,243,253,254,255,254,255,255,255,255]),t.t)
B.fU=A.b(s([B.eO,B.hS,B.hv]),t.S)
B.eP=A.b(s([236,253,254,255,255,255,255,255,255,255,255]),t.t)
B.jv=A.b(s([251,253,253,254,254,255,255,255,255,255,255]),t.t)
B.j3=A.b(s([B.aE,B.eP,B.jv]),t.S)
B.j0=A.b(s([254,254,254,255,255,255,255,255,255,255,255]),t.t)
B.d3=A.b(s([B.bn,B.j0,B.x]),t.S)
B.ih=A.b(s([254,254,255,255,255,255,255,255,255,255,255]),t.t)
B.fJ=A.b(s([B.aC,B.ih,B.am]),t.S)
B.ba=A.b(s([B.x,B.am,B.x]),t.S)
B.j4=A.b(s([B.fU,B.j3,B.d3,B.fJ,B.ba,B.W,B.W,B.W]),t.o)
B.iD=A.b(s([248,255,255,255,255,255,255,255,255,255,255]),t.t)
B.fr=A.b(s([250,254,252,254,255,255,255,255,255,255,255]),t.t)
B.ii=A.b(s([248,254,249,253,255,255,255,255,255,255,255]),t.t)
B.js=A.b(s([B.iD,B.fr,B.ii]),t.S)
B.ix=A.b(s([255,253,253,255,255,255,255,255,255,255,255]),t.t)
B.iE=A.b(s([246,253,253,255,255,255,255,255,255,255,255]),t.t)
B.ff=A.b(s([252,254,251,254,254,255,255,255,255,255,255]),t.t)
B.id=A.b(s([B.ix,B.iE,B.ff]),t.S)
B.f6=A.b(s([255,254,252,255,255,255,255,255,255,255,255]),t.t)
B.ij=A.b(s([248,254,253,255,255,255,255,255,255,255,255]),t.t)
B.fP=A.b(s([253,255,254,254,255,255,255,255,255,255,255]),t.t)
B.er=A.b(s([B.f6,B.ij,B.fP]),t.S)
B.ip=A.b(s([255,251,254,255,255,255,255,255,255,255,255]),t.t)
B.iq=A.b(s([245,251,254,255,255,255,255,255,255,255,255]),t.t)
B.ir=A.b(s([253,253,254,255,255,255,255,255,255,255,255]),t.t)
B.fD=A.b(s([B.ip,B.iq,B.ir]),t.S)
B.iy=A.b(s([255,251,253,255,255,255,255,255,255,255,255]),t.t)
B.eQ=A.b(s([252,253,254,255,255,255,255,255,255,255,255]),t.t)
B.iM=A.b(s([B.iy,B.eQ,B.aC]),t.S)
B.h8=A.b(s([255,252,255,255,255,255,255,255,255,255,255]),t.t)
B.is=A.b(s([249,255,254,255,255,255,255,255,255,255,255]),t.t)
B.it=A.b(s([255,255,254,255,255,255,255,255,255,255,255]),t.t)
B.hT=A.b(s([B.h8,B.is,B.it]),t.S)
B.iz=A.b(s([255,255,253,255,255,255,255,255,255,255,255]),t.t)
B.dM=A.b(s([B.iz,B.bH,B.x]),t.S)
B.i2=A.b(s([B.js,B.id,B.er,B.fD,B.iM,B.hT,B.dM,B.ba]),t.o)
B.fK=A.b(s([B.j9,B.ju,B.j4,B.i2]),t.hc)
B.bv=A.b(s([1,2,3,0,4,17,5,18,33,49,65,6,19,81,97,7,34,113,20,50,129,145,161,8,35,66,177,193,21,82,209,240,36,51,98,114,130,9,10,22,23,24,25,26,37,38,39,40,41,42,52,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,225,226,227,228,229,230,231,232,233,234,241,242,243,244,245,246,247,248,249,250]),t.t)
B.cT=new A.dz(0,"invalid")
B.cU=new A.dz(1,"ico")
B.fM=A.b(s([B.cT,B.cU,B.b_]),A.a4("v<dz>"))
B.fT=A.b(s([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0]),t.t)
B.fV=A.b(s([0,0,32722,12287,65535,34815,65534,18431]),t.t)
B.bw=A.b(s([0,0,65490,12287,65535,34815,65534,18431]),t.t)
B.aD=A.b(s([4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,119,122,125,128,131,134,137,140,143,146,149,152,155,158,161,164,167,170,173,177,181,185,189,193,197,201,205,209,213,217,221,225,229,234,239,245,249,254,259,264,269,274,279,284]),t.t)
B.hj=A.b(s([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),t.t)
B.hk=A.b(s([17,18,0,1,2,3,4,5,16,6,7,8,9,10,11,12,13,14,15]),t.t)
B.X=A.b(s([0,-128,64,-64,32,-96,96,-32,16,-112,80,-48,48,-80,112,-16,8,-120,72,-56,40,-88,104,-24,24,-104,88,-40,56,-72,120,-8,4,-124,68,-60,36,-92,100,-28,20,-108,84,-44,52,-76,116,-12,12,-116,76,-52,44,-84,108,-20,28,-100,92,-36,60,-68,124,-4,2,-126,66,-62,34,-94,98,-30,18,-110,82,-46,50,-78,114,-14,10,-118,74,-54,42,-86,106,-22,26,-102,90,-38,58,-70,122,-6,6,-122,70,-58,38,-90,102,-26,22,-106,86,-42,54,-74,118,-10,14,-114,78,-50,46,-82,110,-18,30,-98,94,-34,62,-66,126,-2,1,-127,65,-63,33,-95,97,-31,17,-111,81,-47,49,-79,113,-15,9,-119,73,-55,41,-87,105,-23,25,-103,89,-39,57,-71,121,-7,5,-123,69,-59,37,-91,101,-27,21,-107,85,-43,53,-75,117,-11,13,-115,77,-51,45,-83,109,-19,29,-99,93,-35,61,-67,125,-3,3,-125,67,-61,35,-93,99,-29,19,-109,83,-45,51,-77,115,-13,11,-117,75,-53,43,-85,107,-21,27,-101,91,-37,59,-69,123,-5,7,-121,71,-57,39,-89,103,-25,23,-105,87,-41,55,-73,119,-9,15,-113,79,-49,47,-81,111,-17,31,-97,95,-33,63,-65,127,-1]),t.t)
B.r=A.b(s([0,8,16,24,32,41,49,57,65,74,82,90,98,106,115,123,131,139,148,156,164,172,180,189,197,205,213,222,230,238,246,255]),t.t)
B.bX=new A.fs(0,"source")
B.bY=new A.fs(1,"over")
B.bx=A.b(s([B.bX,B.bY]),A.a4("v<fs>"))
B.B=A.b(s([0,1,3,7,15,31,63,127,255]),t.t)
B.Y=A.b(s([0,128,192,224,240,248,252,254,255]),t.t)
B.ak=A.b(s([6430,6400,6400,6400,3225,3225,3225,3225,944,944,944,944,976,976,976,976,1456,1456,1456,1456,1488,1488,1488,1488,718,718,718,718,718,718,718,718,750,750,750,750,750,750,750,750,1520,1520,1520,1520,1552,1552,1552,1552,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,654,654,654,654,654,654,654,654,1072,1072,1072,1072,1104,1104,1104,1104,1136,1136,1136,1136,1168,1168,1168,1168,1200,1200,1200,1200,1232,1232,1232,1232,622,622,622,622,622,622,622,622,1008,1008,1008,1008,1040,1040,1040,1040,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,1712,1712,1712,1712,1744,1744,1744,1744,846,846,846,846,846,846,846,846,1264,1264,1264,1264,1296,1296,1296,1296,1328,1328,1328,1328,1360,1360,1360,1360,1392,1392,1392,1392,1424,1424,1424,1424,686,686,686,686,686,686,686,686,910,910,910,910,910,910,910,910,1968,1968,1968,1968,2000,2000,2000,2000,2032,2032,2032,2032,16,16,16,16,10257,10257,10257,10257,12305,12305,12305,12305,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,878,878,878,878,878,878,878,878,1904,1904,1904,1904,1936,1936,1936,1936,-18413,-18413,-16365,-16365,-14317,-14317,-10221,-10221,590,590,590,590,590,590,590,590,782,782,782,782,782,782,782,782,1584,1584,1584,1584,1616,1616,1616,1616,1648,1648,1648,1648,1680,1680,1680,1680,814,814,814,814,814,814,814,814,1776,1776,1776,1776,1808,1808,1808,1808,1840,1840,1840,1840,1872,1872,1872,1872,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,14353,14353,14353,14353,16401,16401,16401,16401,22547,22547,24595,24595,20497,20497,20497,20497,18449,18449,18449,18449,26643,26643,28691,28691,30739,30739,-32749,-32749,-30701,-30701,-28653,-28653,-26605,-26605,-24557,-24557,-22509,-22509,-20461,-20461,8207,8207,8207,8207,8207,8207,8207,8207,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,460,460,460,460,460,460,460,460,460,460,460,460,460,460,460,460,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232]),t.t)
B.al=A.b(s([0,0,32776,33792,1,10240,0,0]),t.t)
B.by=A.b(s([137,80,78,71,13,10,26,10]),t.t)
B.O=A.b(s([0,1,8,16,9,2,3,10,17,24,32,25,18,11,4,5,12,19,26,33,40,48,41,34,27,20,13,6,7,14,21,28,35,42,49,56,57,50,43,36,29,22,15,23,30,37,44,51,58,59,52,45,38,31,39,46,53,60,61,54,47,55,62,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63]),t.t)
B.bz=A.b(s([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577]),t.t)
B.F=A.b(s([0,1996959894,3993919788,2567524794,124634137,1886057615,3915621685,2657392035,249268274,2044508324,3772115230,2547177864,162941995,2125561021,3887607047,2428444049,498536548,1789927666,4089016648,2227061214,450548861,1843258603,4107580753,2211677639,325883990,1684777152,4251122042,2321926636,335633487,1661365465,4195302755,2366115317,997073096,1281953886,3579855332,2724688242,1006888145,1258607687,3524101629,2768942443,901097722,1119000684,3686517206,2898065728,853044451,1172266101,3705015759,2882616665,651767980,1373503546,3369554304,3218104598,565507253,1454621731,3485111705,3099436303,671266974,1594198024,3322730930,2970347812,795835527,1483230225,3244367275,3060149565,1994146192,31158534,2563907772,4023717930,1907459465,112637215,2680153253,3904427059,2013776290,251722036,2517215374,3775830040,2137656763,141376813,2439277719,3865271297,1802195444,476864866,2238001368,4066508878,1812370925,453092731,2181625025,4111451223,1706088902,314042704,2344532202,4240017532,1658658271,366619977,2362670323,4224994405,1303535960,984961486,2747007092,3569037538,1256170817,1037604311,2765210733,3554079995,1131014506,879679996,2909243462,3663771856,1141124467,855842277,2852801631,3708648649,1342533948,654459306,3188396048,3373015174,1466479909,544179635,3110523913,3462522015,1591671054,702138776,2966460450,3352799412,1504918807,783551873,3082640443,3233442989,3988292384,2596254646,62317068,1957810842,3939845945,2647816111,81470997,1943803523,3814918930,2489596804,225274430,2053790376,3826175755,2466906013,167816743,2097651377,4027552580,2265490386,503444072,1762050814,4150417245,2154129355,426522225,1852507879,4275313526,2312317920,282753626,1742555852,4189708143,2394877945,397917763,1622183637,3604390888,2714866558,953729732,1340076626,3518719985,2797360999,1068828381,1219638859,3624741850,2936675148,906185462,1090812512,3747672003,2825379669,829329135,1181335161,3412177804,3160834842,628085408,1382605366,3423369109,3138078467,570562233,1426400815,3317316542,2998733608,733239954,1555261956,3268935591,3050360625,752459403,1541320221,2607071920,3965973030,1969922972,40735498,2617837225,3943577151,1913087877,83908371,2512341634,3803740692,2075208622,213261112,2463272603,3855990285,2094854071,198958881,2262029012,4057260610,1759359992,534414190,2176718541,4139329115,1873836001,414664567,2282248934,4279200368,1711684554,285281116,2405801727,4167216745,1634467795,376229701,2685067896,3608007406,1308918612,956543938,2808555105,3495958263,1231636301,1047427035,2932959818,3654703836,1088359270,936918e3,2847714899,3736837829,1202900863,817233897,3183342108,3401237130,1404277552,615818150,3134207493,3453421203,1423857449,601450431,3009837614,3294710456,1567103746,711928724,3020668471,3272380065,1510334235,755167117]),t.t)
B.bA=A.b(s([null,A.y2(),A.y3(),A.y1()]),A.a4("v<~(i,i,i,i,i,aP)?>"))
B.aA=A.b(s([8,0,8,0]),t.t)
B.f8=A.b(s([5,3,5,3]),t.t)
B.eV=A.b(s([3,5,3,5]),t.t)
B.bb=A.b(s([0,8,0,8]),t.t)
B.bl=A.b(s([4,4,4,4]),t.t)
B.f2=A.b(s([4,4,0,0]),t.t)
B.bB=A.b(s([B.aA,B.f8,B.eV,B.bb,B.aA,B.bl,B.f2,B.bb]),t.S)
B.bC=A.b(s([0,1,3,7,15,31,63,127,255,511,1023,2047,4095]),t.t)
B.w=A.b(s([0,1,1,2,4,8,1,1,2,4,8,4,8]),t.t)
B.aL=new A.an(0,"whiteIsZero")
B.k_=new A.an(1,"blackIsZero")
B.k6=new A.an(2,"rgb")
B.aN=new A.an(3,"palette")
B.k7=new A.an(4,"transparencyMask")
B.cb=new A.an(5,"cmyk")
B.k8=new A.an(6,"yCbCr")
B.k9=new A.an(7,"reserved7")
B.ka=new A.an(8,"cieLab")
B.kb=new A.an(9,"iccLab")
B.k0=new A.an(10,"ituLab")
B.k1=new A.an(11,"logL")
B.k2=new A.an(12,"logLuv")
B.k3=new A.an(13,"colorFilterArray")
B.k4=new A.an(14,"linearRaw")
B.k5=new A.an(15,"depth")
B.aM=new A.an(16,"unknown")
B.bD=A.b(s([B.aL,B.k_,B.k6,B.aN,B.k7,B.cb,B.k8,B.k9,B.ka,B.kb,B.k0,B.k1,B.k2,B.k3,B.k4,B.k5,B.aM]),A.a4("v<an>"))
B.a3=A.b(s([0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535,131071,262143,524287,1048575,2097151,4194303,8388607,16777215,33554431,67108863,134217727,268435455,536870911,1073741823,2147483647,4294967295]),t.t)
B.ik=A.b(s([]),t.s)
B.jp=A.b(s([231,120,48,89,115,113,120,152,112]),t.t)
B.de=A.b(s([152,179,64,126,170,118,46,70,95]),t.t)
B.dq=A.b(s([175,69,143,80,85,82,72,155,103]),t.t)
B.dB=A.b(s([56,58,10,171,218,189,17,13,152]),t.t)
B.dN=A.b(s([114,26,17,163,44,195,21,10,173]),t.t)
B.dY=A.b(s([121,24,80,195,26,62,44,64,85]),t.t)
B.e8=A.b(s([144,71,10,38,171,213,144,34,26]),t.t)
B.ej=A.b(s([170,46,55,19,136,160,33,206,71]),t.t)
B.ep=A.b(s([63,20,8,114,114,208,12,9,226]),t.t)
B.d4=A.b(s([81,40,11,96,182,84,29,16,36]),t.t)
B.jn=A.b(s([B.jp,B.de,B.dq,B.dB,B.dN,B.dY,B.e8,B.ej,B.ep,B.d4]),t.S)
B.d5=A.b(s([134,183,89,137,98,101,106,165,148]),t.t)
B.d6=A.b(s([72,187,100,130,157,111,32,75,80]),t.t)
B.d7=A.b(s([66,102,167,99,74,62,40,234,128]),t.t)
B.hn=A.b(s([41,53,9,178,241,141,26,8,107]),t.t)
B.d8=A.b(s([74,43,26,146,73,166,49,23,157]),t.t)
B.d9=A.b(s([65,38,105,160,51,52,31,115,128]),t.t)
B.h9=A.b(s([104,79,12,27,217,255,87,17,7]),t.t)
B.da=A.b(s([87,68,71,44,114,51,15,186,23]),t.t)
B.db=A.b(s([47,41,14,110,182,183,21,17,194]),t.t)
B.dc=A.b(s([66,45,25,102,197,189,23,18,22]),t.t)
B.iF=A.b(s([B.d5,B.d6,B.d7,B.hn,B.d8,B.d9,B.h9,B.da,B.db,B.dc]),t.S)
B.dd=A.b(s([88,88,147,150,42,46,45,196,205]),t.t)
B.df=A.b(s([43,97,183,117,85,38,35,179,61]),t.t)
B.dg=A.b(s([39,53,200,87,26,21,43,232,171]),t.t)
B.dh=A.b(s([56,34,51,104,114,102,29,93,77]),t.t)
B.di=A.b(s([39,28,85,171,58,165,90,98,64]),t.t)
B.dj=A.b(s([34,22,116,206,23,34,43,166,73]),t.t)
B.dk=A.b(s([107,54,32,26,51,1,81,43,31]),t.t)
B.dl=A.b(s([68,25,106,22,64,171,36,225,114]),t.t)
B.dm=A.b(s([34,19,21,102,132,188,16,76,124]),t.t)
B.dn=A.b(s([62,18,78,95,85,57,50,48,51]),t.t)
B.iQ=A.b(s([B.dd,B.df,B.dg,B.dh,B.di,B.dj,B.dk,B.dl,B.dm,B.dn]),t.S)
B.dp=A.b(s([193,101,35,159,215,111,89,46,111]),t.t)
B.dr=A.b(s([60,148,31,172,219,228,21,18,111]),t.t)
B.ha=A.b(s([112,113,77,85,179,255,38,120,114]),t.t)
B.ho=A.b(s([40,42,1,196,245,209,10,25,109]),t.t)
B.ds=A.b(s([88,43,29,140,166,213,37,43,154]),t.t)
B.dt=A.b(s([61,63,30,155,67,45,68,1,209]),t.t)
B.du=A.b(s([100,80,8,43,154,1,51,26,71]),t.t)
B.hp=A.b(s([142,78,78,16,255,128,34,197,171]),t.t)
B.dv=A.b(s([41,40,5,102,211,183,4,1,221]),t.t)
B.dw=A.b(s([51,50,17,168,209,192,23,25,82]),t.t)
B.eR=A.b(s([B.dp,B.dr,B.ha,B.ho,B.ds,B.dt,B.du,B.hp,B.dv,B.dw]),t.S)
B.ht=A.b(s([138,31,36,171,27,166,38,44,229]),t.t)
B.dx=A.b(s([67,87,58,169,82,115,26,59,179]),t.t)
B.dy=A.b(s([63,59,90,180,59,166,93,73,154]),t.t)
B.dz=A.b(s([40,40,21,116,143,209,34,39,175]),t.t)
B.dA=A.b(s([47,15,16,183,34,223,49,45,183]),t.t)
B.dC=A.b(s([46,17,33,183,6,98,15,32,183]),t.t)
B.dD=A.b(s([57,46,22,24,128,1,54,17,37]),t.t)
B.dE=A.b(s([65,32,73,115,28,128,23,128,205]),t.t)
B.dF=A.b(s([40,3,9,115,51,192,18,6,223]),t.t)
B.dG=A.b(s([87,37,9,115,59,77,64,21,47]),t.t)
B.hq=A.b(s([B.ht,B.dx,B.dy,B.dz,B.dA,B.dC,B.dD,B.dE,B.dF,B.dG]),t.S)
B.dH=A.b(s([104,55,44,218,9,54,53,130,226]),t.t)
B.dI=A.b(s([64,90,70,205,40,41,23,26,57]),t.t)
B.dJ=A.b(s([54,57,112,184,5,41,38,166,213]),t.t)
B.dK=A.b(s([30,34,26,133,152,116,10,32,134]),t.t)
B.hu=A.b(s([39,19,53,221,26,114,32,73,255]),t.t)
B.dL=A.b(s([31,9,65,234,2,15,1,118,73]),t.t)
B.hb=A.b(s([75,32,12,51,192,255,160,43,51]),t.t)
B.dO=A.b(s([88,31,35,67,102,85,55,186,85]),t.t)
B.dP=A.b(s([56,21,23,111,59,205,45,37,192]),t.t)
B.dQ=A.b(s([55,38,70,124,73,102,1,34,98]),t.t)
B.eS=A.b(s([B.dH,B.dI,B.dJ,B.dK,B.hu,B.dL,B.hb,B.dO,B.dP,B.dQ]),t.S)
B.dR=A.b(s([125,98,42,88,104,85,117,175,82]),t.t)
B.dS=A.b(s([95,84,53,89,128,100,113,101,45]),t.t)
B.dT=A.b(s([75,79,123,47,51,128,81,171,1]),t.t)
B.dU=A.b(s([57,17,5,71,102,57,53,41,49]),t.t)
B.dV=A.b(s([38,33,13,121,57,73,26,1,85]),t.t)
B.dW=A.b(s([41,10,67,138,77,110,90,47,114]),t.t)
B.hc=A.b(s([115,21,2,10,102,255,166,23,6]),t.t)
B.dX=A.b(s([101,29,16,10,85,128,101,196,26]),t.t)
B.dZ=A.b(s([57,18,10,102,102,213,34,20,43]),t.t)
B.e_=A.b(s([117,20,15,36,163,128,68,1,26]),t.t)
B.jq=A.b(s([B.dR,B.dS,B.dT,B.dU,B.dV,B.dW,B.hc,B.dX,B.dZ,B.e_]),t.S)
B.fy=A.b(s([102,61,71,37,34,53,31,243,192]),t.t)
B.e0=A.b(s([69,60,71,38,73,119,28,222,37]),t.t)
B.fz=A.b(s([68,45,128,34,1,47,11,245,171]),t.t)
B.e1=A.b(s([62,17,19,70,146,85,55,62,70]),t.t)
B.e2=A.b(s([37,43,37,154,100,163,85,160,1]),t.t)
B.e3=A.b(s([63,9,92,136,28,64,32,201,85]),t.t)
B.hd=A.b(s([75,15,9,9,64,255,184,119,16]),t.t)
B.he=A.b(s([86,6,28,5,64,255,25,248,1]),t.t)
B.hf=A.b(s([56,8,17,132,137,255,55,116,128]),t.t)
B.e4=A.b(s([58,15,20,82,135,57,26,121,40]),t.t)
B.fN=A.b(s([B.fy,B.e0,B.fz,B.e1,B.e2,B.e3,B.hd,B.he,B.hf,B.e4]),t.S)
B.e5=A.b(s([164,50,31,137,154,133,25,35,218]),t.t)
B.e6=A.b(s([51,103,44,131,131,123,31,6,158]),t.t)
B.e7=A.b(s([86,40,64,135,148,224,45,183,128]),t.t)
B.e9=A.b(s([22,26,17,131,240,154,14,1,209]),t.t)
B.ea=A.b(s([45,16,21,91,64,222,7,1,197]),t.t)
B.eb=A.b(s([56,21,39,155,60,138,23,102,213]),t.t)
B.hg=A.b(s([83,12,13,54,192,255,68,47,28]),t.t)
B.ec=A.b(s([85,26,85,85,128,128,32,146,171]),t.t)
B.ed=A.b(s([18,11,7,63,144,171,4,4,246]),t.t)
B.ee=A.b(s([35,27,10,146,174,171,12,26,128]),t.t)
B.jr=A.b(s([B.e5,B.e6,B.e7,B.e9,B.ea,B.eb,B.hg,B.ec,B.ed,B.ee]),t.S)
B.ef=A.b(s([190,80,35,99,180,80,126,54,45]),t.t)
B.eg=A.b(s([85,126,47,87,176,51,41,20,32]),t.t)
B.eh=A.b(s([101,75,128,139,118,146,116,128,85]),t.t)
B.ei=A.b(s([56,41,15,176,236,85,37,9,62]),t.t)
B.hh=A.b(s([71,30,17,119,118,255,17,18,138]),t.t)
B.ek=A.b(s([101,38,60,138,55,70,43,26,142]),t.t)
B.hi=A.b(s([146,36,19,30,171,255,97,27,20]),t.t)
B.el=A.b(s([138,45,61,62,219,1,81,188,64]),t.t)
B.em=A.b(s([32,41,20,117,151,142,20,21,163]),t.t)
B.en=A.b(s([112,19,12,61,195,128,48,4,24]),t.t)
B.h4=A.b(s([B.ef,B.eg,B.eh,B.ei,B.hh,B.ek,B.hi,B.el,B.em,B.en]),t.S)
B.bE=A.b(s([B.jn,B.iF,B.iQ,B.eR,B.hq,B.eS,B.jq,B.fN,B.jr,B.h4]),t.o)
B.ar=new A.aO(0,"none")
B.J=new A.aO(1,"palette")
B.c8=new A.aO(2,"rgb")
B.jM=new A.aO(3,"gray")
B.jN=new A.aO(4,"reserved4")
B.jO=new A.aO(5,"reserved5")
B.jP=new A.aO(6,"reserved6")
B.jQ=new A.aO(7,"reserved7")
B.jR=new A.aO(8,"reserved8")
B.K=new A.aO(9,"paletteRle")
B.c7=new A.aO(10,"rgbRle")
B.jL=new A.aO(11,"grayRle")
B.bF=A.b(s([B.ar,B.J,B.c8,B.jM,B.jN,B.jO,B.jP,B.jQ,B.jR,B.K,B.c7,B.jL]),A.a4("v<aO>"))
B.I=A.b(s([28679,28679,31752,-32759,-31735,-30711,-29687,-28663,29703,29703,30727,30727,-27639,-26615,-25591,-24567]),t.t)
B.aF=A.b(s([A.xH(),A.xz(),A.xO(),A.xM(),A.xJ(),A.xI(),A.xK()]),t.O)
B.bI=A.b(s([1,1.387039845,1.306562965,1.175875602,1,0.785694958,0.5411961,0.275899379]),A.a4("v<G>"))
B.jB=new A.dV(0,"none")
B.bZ=new A.dV(1,"background")
B.c_=new A.dV(2,"previous")
B.bJ=A.b(s([B.jB,B.bZ,B.c_]),A.a4("v<dV>"))
B.Z=A.b(s([0,1,4,5,16,17,20,21,64,65,68,69,80,81,84,85,256,257,260,261,272,273,276,277,320,321,324,325,336,337,340,341,1024,1025,1028,1029,1040,1041,1044,1045,1088,1089,1092,1093,1104,1105,1108,1109,1280,1281,1284,1285,1296,1297,1300,1301,1344,1345,1348,1349,1360,1361,1364,1365,4096,4097,4100,4101,4112,4113,4116,4117,4160,4161,4164,4165,4176,4177,4180,4181,4352,4353,4356,4357,4368,4369,4372,4373,4416,4417,4420,4421,4432,4433,4436,4437,5120,5121,5124,5125,5136,5137,5140,5141,5184,5185,5188,5189,5200,5201,5204,5205,5376,5377,5380,5381,5392,5393,5396,5397,5440,5441,5444,5445,5456,5457,5460,5461,16384,16385,16388,16389,16400,16401,16404,16405,16448,16449,16452,16453,16464,16465,16468,16469,16640,16641,16644,16645,16656,16657,16660,16661,16704,16705,16708,16709,16720,16721,16724,16725,17408,17409,17412,17413,17424,17425,17428,17429,17472,17473,17476,17477,17488,17489,17492,17493,17664,17665,17668,17669,17680,17681,17684,17685,17728,17729,17732,17733,17744,17745,17748,17749,20480,20481,20484,20485,20496,20497,20500,20501,20544,20545,20548,20549,20560,20561,20564,20565,20736,20737,20740,20741,20752,20753,20756,20757,20800,20801,20804,20805,20816,20817,20820,20821,21504,21505,21508,21509,21520,21521,21524,21525,21568,21569,21572,21573,21584,21585,21588,21589,21760,21761,21764,21765,21776,21777,21780,21781,21824,21825,21828,21829,21840,21841,21844,21845]),t.t)
B.jS=new A.d3(0,"invalid")
B.c9=new A.d3(1,"uint")
B.i=new A.d3(2,"int")
B.a6=new A.d3(3,"float")
B.bK=A.b(s([B.jS,B.c9,B.i,B.a6]),A.a4("v<d3>"))
B.iS=A.b(s([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]),t.t)
B.iR=A.b(s([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]),t.t)
B.bL=A.b(s([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258]),t.t)
B.ev=A.b(s([173,148,140]),t.t)
B.ew=A.b(s([176,155,140,135]),t.t)
B.fF=A.b(s([180,157,141,134,130]),t.t)
B.fg=A.b(s([254,254,243,230,196,177,153,140,133,130,129]),t.t)
B.bM=A.b(s([B.ev,B.ew,B.fF,B.fg]),t.S)
B.a_=A.b(s([0,0,24576,1023,65534,34815,65534,18431]),t.t)
B.j6=A.b(s([8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8]),t.t)
B.aG=A.b(s([4,5,6,7,8,9,10,10,11,12,13,14,15,16,17,17,18,19,20,20,21,21,22,22,23,23,24,25,25,26,27,28,29,30,31,32,33,34,35,36,37,37,38,39,40,41,42,43,44,45,46,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,76,77,78,79,80,81,82,83,84,85,86,87,88,89,91,93,95,96,98,100,101,102,104,106,108,110,112,114,116,118,122,124,126,128,130,132,134,136,138,140,143,145,148,151,154,157]),t.t)
B.ao=A.b(s([7,6,6,5,5,5,5,4,4,4,4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0]),t.t)
B.an=A.b(s([80,88,23,71,30,30,62,62,4,4,4,4,4,4,4,4,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41]),t.t)
B.bO=A.b(s([0,1,4,8,5,2,3,6,9,12,13,10,7,11,14,15]),t.t)
B.bN=A.b(s([0,4,8,12,128,132,136,140,256,260,264,268,384,388,392,396]),t.t)
B.aH=A.b(s([0,8,4,12,2,10,6,14,1,9,5,13,3,11,7,15]),t.t)
B.bP=A.b(s([B.aY,B.ay,B.az]),A.a4("v<dx>"))
B.a4=A.b(s([0,1,5,6,14,15,27,28,2,4,7,13,16,26,29,42,3,8,12,17,25,30,41,43,9,11,18,24,31,40,44,53,10,19,23,32,39,45,52,54,20,22,33,38,46,51,55,60,21,34,37,47,50,56,59,61,35,36,48,49,57,58,62,63]),t.t)
B.ja=A.b(s([16,11,10,16,24,40,51,61,12,12,14,19,26,58,60,55,14,13,16,24,40,57,69,56,14,17,22,29,51,87,80,62,18,22,37,56,68,109,103,77,24,35,55,64,81,104,113,92,49,64,78,87,103,121,120,101,72,92,95,98,112,100,103,99]),t.t)
B.jb=A.b(s([17,18,24,47,99,99,99,99,18,21,26,66,99,99,99,99,24,26,56,99,99,99,99,99,47,66,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99]),t.t)
B.eK=A.b(s([2,6,2,6]),t.t)
B.fd=A.b(s([6,2,6,2]),t.t)
B.eJ=A.b(s([2,2,6,6]),t.t)
B.ey=A.b(s([1,3,3,9]),t.t)
B.f0=A.b(s([4,0,12,0]),t.t)
B.eT=A.b(s([3,1,9,3]),t.t)
B.fp=A.b(s([8,8,0,0]),t.t)
B.f1=A.b(s([4,12,0,0]),t.t)
B.eu=A.b(s([16,0,0,0]),t.t)
B.et=A.b(s([12,4,0,0]),t.t)
B.fe=A.b(s([6,6,2,2]),t.t)
B.eW=A.b(s([3,9,1,3]),t.t)
B.es=A.b(s([12,0,4,0]),t.t)
B.fx=A.b(s([9,3,3,1]),t.t)
B.o=A.b(s([B.bl,B.eK,B.aA,B.fd,B.eJ,B.ey,B.f0,B.eT,B.fp,B.f1,B.eu,B.et,B.fe,B.eW,B.es,B.fx]),t.S)
B.ap=A.b(s([B.e,B.b0,B.l,B.j,B.p,B.v,B.b4,B.H,B.b5,B.b6,B.b1,B.b2,B.b3]),A.a4("v<aF>"))
B.jH=new A.bp(0,"bitmap")
B.c3=new A.bp(1,"grayscale")
B.jI=new A.bp(2,"indexed")
B.c4=new A.bp(3,"rgb")
B.c5=new A.bp(4,"cmyk")
B.jJ=new A.bp(5,"multiChannel")
B.jK=new A.bp(6,"duoTone")
B.c6=new A.bp(7,"lab")
B.bQ=A.b(s([B.jH,B.c3,B.jI,B.c4,B.c5,B.jJ,B.jK,B.c6]),A.a4("v<bp>"))
B.y=A.b(s([0,17,34,51,68,85,102,119,136,153,170,187,204,221,238,255]),t.t)
B.bR=A.b(s([254,253,251,247,239,223,191,127]),t.t)
B.aq=A.b(s([62,62,30,30,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,588,588,588,588,588,588,588,588,1680,1680,20499,22547,24595,26643,1776,1776,1808,1808,-24557,-22509,-20461,-18413,1904,1904,1936,1936,-16365,-14317,782,782,782,782,814,814,814,814,-12269,-10221,10257,10257,12305,12305,14353,14353,16403,18451,1712,1712,1744,1744,28691,30739,-32749,-30701,-28653,-26605,2061,2061,2061,2061,2061,2061,2061,2061,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,750,750,750,750,1616,1616,1648,1648,1424,1424,1456,1456,1488,1488,1520,1520,1840,1840,1872,1872,1968,1968,8209,8209,524,524,524,524,524,524,524,524,556,556,556,556,556,556,556,556,1552,1552,1584,1584,2000,2000,2032,2032,976,976,1008,1008,1040,1040,1072,1072,1296,1296,1328,1328,718,718,718,718,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,4113,4113,6161,6161,848,848,880,880,912,912,944,944,622,622,622,622,654,654,654,654,1104,1104,1136,1136,1168,1168,1200,1200,1232,1232,1264,1264,686,686,686,686,1360,1360,1392,1392,12,12,12,12,12,12,12,12,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390]),t.t)
B.bT=A.b(s([A.xr(),A.xy(),A.xA(),A.xt(),A.xw(),A.xC(),A.xv(),A.xB(),A.xs(),A.xu()]),t.O)
B.aB=A.b(s([128,128,128,128,128,128,128,128,128,128,128]),t.t)
B.bS=A.b(s([B.aB,B.aB,B.aB]),t.S)
B.jw=A.b(s([253,136,254,255,228,219,128,128,128,128,128]),t.t)
B.i4=A.b(s([189,129,242,255,227,213,255,219,128,128,128]),t.t)
B.jc=A.b(s([106,126,227,252,214,209,255,255,128,128,128]),t.t)
B.i3=A.b(s([B.jw,B.i4,B.jc]),t.S)
B.hE=A.b(s([1,98,248,255,236,226,255,255,128,128,128]),t.t)
B.je=A.b(s([181,133,238,254,221,234,255,154,128,128,128]),t.t)
B.i5=A.b(s([78,134,202,247,198,180,255,219,128,128,128]),t.t)
B.j7=A.b(s([B.hE,B.je,B.i5]),t.S)
B.fu=A.b(s([1,185,249,255,243,255,128,128,128,128,128]),t.t)
B.hN=A.b(s([184,150,247,255,236,224,128,128,128,128,128]),t.t)
B.eD=A.b(s([77,110,216,255,236,230,128,128,128,128,128]),t.t)
B.eM=A.b(s([B.fu,B.hN,B.eD]),t.S)
B.fv=A.b(s([1,101,251,255,241,255,128,128,128,128,128]),t.t)
B.fQ=A.b(s([170,139,241,252,236,209,255,255,128,128,128]),t.t)
B.fs=A.b(s([37,116,196,243,228,255,255,255,128,128,128]),t.t)
B.fA=A.b(s([B.fv,B.fQ,B.fs]),t.S)
B.fB=A.b(s([1,204,254,255,245,255,128,128,128,128,128]),t.t)
B.eE=A.b(s([207,160,250,255,238,128,128,128,128,128,128]),t.t)
B.hO=A.b(s([102,103,231,255,211,171,128,128,128,128,128]),t.t)
B.eI=A.b(s([B.fB,B.eE,B.hO]),t.S)
B.iU=A.b(s([1,152,252,255,240,255,128,128,128,128,128]),t.t)
B.hP=A.b(s([177,135,243,255,234,225,128,128,128,128,128]),t.t)
B.eF=A.b(s([80,129,211,255,194,224,128,128,128,128,128]),t.t)
B.eZ=A.b(s([B.iU,B.hP,B.eF]),t.S)
B.br=A.b(s([1,1,255,128,128,128,128,128,128,128,128]),t.t)
B.fh=A.b(s([246,1,255,128,128,128,128,128,128,128,128]),t.t)
B.fO=A.b(s([255,128,128,128,128,128,128,128,128,128,128]),t.t)
B.fW=A.b(s([B.br,B.fh,B.fO]),t.S)
B.iu=A.b(s([B.bS,B.i3,B.j7,B.eM,B.fA,B.eI,B.eZ,B.fW]),t.o)
B.fi=A.b(s([198,35,237,223,193,187,162,160,145,155,62]),t.t)
B.fH=A.b(s([131,45,198,221,172,176,220,157,252,221,1]),t.t)
B.iI=A.b(s([68,47,146,208,149,167,221,162,255,223,128]),t.t)
B.ex=A.b(s([B.fi,B.fH,B.iI]),t.S)
B.fX=A.b(s([1,149,241,255,221,224,255,255,128,128,128]),t.t)
B.i6=A.b(s([184,141,234,253,222,220,255,199,128,128,128]),t.t)
B.hw=A.b(s([81,99,181,242,176,190,249,202,255,255,128]),t.t)
B.j2=A.b(s([B.fX,B.i6,B.hw]),t.S)
B.hV=A.b(s([1,129,232,253,214,197,242,196,255,255,128]),t.t)
B.jf=A.b(s([99,121,210,250,201,198,255,202,128,128,128]),t.t)
B.hx=A.b(s([23,91,163,242,170,187,247,210,255,255,128]),t.t)
B.hU=A.b(s([B.hV,B.jf,B.hx]),t.S)
B.iV=A.b(s([1,200,246,255,234,255,128,128,128,128,128]),t.t)
B.i0=A.b(s([109,178,241,255,231,245,255,255,128,128,128]),t.t)
B.hF=A.b(s([44,130,201,253,205,192,255,255,128,128,128]),t.t)
B.hm=A.b(s([B.iV,B.i0,B.hF]),t.S)
B.eA=A.b(s([1,132,239,251,219,209,255,165,128,128,128]),t.t)
B.hG=A.b(s([94,136,225,251,218,190,255,255,128,128,128]),t.t)
B.i7=A.b(s([22,100,174,245,186,161,255,199,128,128,128]),t.t)
B.fG=A.b(s([B.eA,B.hG,B.i7]),t.S)
B.f9=A.b(s([1,182,249,255,232,235,128,128,128,128,128]),t.t)
B.hQ=A.b(s([124,143,241,255,227,234,128,128,128,128,128]),t.t)
B.i8=A.b(s([35,77,181,251,193,211,255,205,128,128,128]),t.t)
B.fS=A.b(s([B.f9,B.hQ,B.i8]),t.S)
B.iP=A.b(s([1,157,247,255,236,231,255,255,128,128,128]),t.t)
B.fY=A.b(s([121,141,235,255,225,227,255,255,128,128,128]),t.t)
B.i9=A.b(s([45,99,188,251,195,217,255,224,128,128,128]),t.t)
B.i_=A.b(s([B.iP,B.fY,B.i9]),t.S)
B.fa=A.b(s([1,1,251,255,213,255,128,128,128,128,128]),t.t)
B.fZ=A.b(s([203,1,248,255,255,128,128,128,128,128,128]),t.t)
B.iW=A.b(s([137,1,177,255,224,255,128,128,128,128,128]),t.t)
B.hM=A.b(s([B.fa,B.fZ,B.iW]),t.S)
B.ft=A.b(s([B.ex,B.j2,B.hU,B.hm,B.fG,B.fS,B.i_,B.hM]),t.o)
B.f7=A.b(s([253,9,248,251,207,208,255,192,128,128,128]),t.t)
B.ez=A.b(s([175,13,224,243,193,185,249,198,255,255,128]),t.t)
B.iJ=A.b(s([73,17,171,221,161,179,236,167,255,234,128]),t.t)
B.i1=A.b(s([B.f7,B.ez,B.iJ]),t.S)
B.h_=A.b(s([1,95,247,253,212,183,255,255,128,128,128]),t.t)
B.jy=A.b(s([239,90,244,250,211,209,255,255,128,128,128]),t.t)
B.jd=A.b(s([155,77,195,248,188,195,255,255,128,128,128]),t.t)
B.hr=A.b(s([B.h_,B.jy,B.jd]),t.S)
B.eB=A.b(s([1,24,239,251,218,219,255,205,128,128,128]),t.t)
B.eG=A.b(s([201,51,219,255,196,186,128,128,128,128,128]),t.t)
B.ia=A.b(s([69,46,190,239,201,218,255,228,128,128,128]),t.t)
B.iN=A.b(s([B.eB,B.eG,B.ia]),t.S)
B.fR=A.b(s([1,191,251,255,255,128,128,128,128,128,128]),t.t)
B.fb=A.b(s([223,165,249,255,213,255,128,128,128,128,128]),t.t)
B.h0=A.b(s([141,124,248,255,255,128,128,128,128,128,128]),t.t)
B.eX=A.b(s([B.fR,B.fb,B.h0]),t.S)
B.h1=A.b(s([1,16,248,255,255,128,128,128,128,128,128]),t.t)
B.iX=A.b(s([190,36,230,255,236,255,128,128,128,128,128]),t.t)
B.fj=A.b(s([149,1,255,128,128,128,128,128,128,128,128]),t.t)
B.j1=A.b(s([B.h1,B.iX,B.fj]),t.S)
B.fk=A.b(s([1,226,255,128,128,128,128,128,128,128,128]),t.t)
B.hs=A.b(s([247,192,255,128,128,128,128,128,128,128,128]),t.t)
B.fl=A.b(s([240,128,255,128,128,128,128,128,128,128,128]),t.t)
B.hX=A.b(s([B.fk,B.hs,B.fl]),t.S)
B.h2=A.b(s([1,134,252,255,255,128,128,128,128,128,128]),t.t)
B.h3=A.b(s([213,62,250,255,255,128,128,128,128,128,128]),t.t)
B.fm=A.b(s([55,93,255,128,128,128,128,128,128,128,128]),t.t)
B.j5=A.b(s([B.h2,B.h3,B.fm]),t.S)
B.hL=A.b(s([B.i1,B.hr,B.iN,B.eX,B.j1,B.hX,B.j5,B.bS]),t.o)
B.jo=A.b(s([202,24,213,235,186,191,220,160,240,175,255]),t.t)
B.iK=A.b(s([126,38,182,232,169,184,228,174,255,187,128]),t.t)
B.iL=A.b(s([61,46,138,219,151,178,240,170,255,216,128]),t.t)
B.f_=A.b(s([B.jo,B.iK,B.iL]),t.S)
B.hy=A.b(s([1,112,230,250,199,191,247,159,255,255,128]),t.t)
B.jg=A.b(s([166,109,228,252,211,215,255,174,128,128,128]),t.t)
B.hz=A.b(s([39,77,162,232,172,180,245,178,255,255,128]),t.t)
B.hl=A.b(s([B.hy,B.jg,B.hz]),t.S)
B.hA=A.b(s([1,52,220,246,198,199,249,220,255,255,128]),t.t)
B.hW=A.b(s([124,74,191,243,183,193,250,221,255,255,128]),t.t)
B.hB=A.b(s([24,71,130,219,154,170,243,182,255,255,128]),t.t)
B.eo=A.b(s([B.hA,B.hW,B.hB]),t.S)
B.ib=A.b(s([1,182,225,249,219,240,255,224,128,128,128]),t.t)
B.jh=A.b(s([149,150,226,252,216,205,255,171,128,128,128]),t.t)
B.hD=A.b(s([28,108,170,242,183,194,254,223,255,255,128]),t.t)
B.ie=A.b(s([B.ib,B.jh,B.hD]),t.S)
B.ji=A.b(s([1,81,230,252,204,203,255,192,128,128,128]),t.t)
B.hH=A.b(s([123,102,209,247,188,196,255,233,128,128,128]),t.t)
B.ic=A.b(s([20,95,153,243,164,173,255,203,128,128,128]),t.t)
B.fI=A.b(s([B.ji,B.hH,B.ic]),t.S)
B.eH=A.b(s([1,222,248,255,216,213,128,128,128,128,128]),t.t)
B.hC=A.b(s([168,175,246,252,235,205,255,255,128,128,128]),t.t)
B.hI=A.b(s([47,116,215,255,211,212,255,255,128,128,128]),t.t)
B.fw=A.b(s([B.eH,B.hC,B.hI]),t.S)
B.hJ=A.b(s([1,121,236,253,212,214,255,255,128,128,128]),t.t)
B.jj=A.b(s([141,84,213,252,201,202,255,219,128,128,128]),t.t)
B.jk=A.b(s([42,80,160,240,162,185,255,205,128,128,128]),t.t)
B.eY=A.b(s([B.hJ,B.jj,B.jk]),t.S)
B.fn=A.b(s([244,1,255,128,128,128,128,128,128,128,128]),t.t)
B.fo=A.b(s([238,1,255,128,128,128,128,128,128,128,128]),t.t)
B.hY=A.b(s([B.br,B.fn,B.fo]),t.S)
B.jl=A.b(s([B.f_,B.hl,B.eo,B.ie,B.fI,B.fw,B.eY,B.hY]),t.o)
B.jx=A.b(s([B.iu,B.ft,B.hL,B.jl]),t.hc)
B.bU=new A.cz([B.A,1,B.D,3,B.E,15,B.h,255,B.n,65535,B.N,4294967295,B.S,127,B.T,32767,B.U,2147483647,B.G,1,B.M,1,B.R,1],A.a4("cz<aL,i>"))
B.bV=new A.cz([34665,"exif",40965,"interop",34853,"gps"],A.a4("cz<i,l>"))
B.jA={}
B.jz=new A.ev(B.jA,[],A.a4("ev<l,l>"))
B.a5=new A.cc(0,"invalid")
B.c0=new A.cc(1,"pbm")
B.c1=new A.cc(2,"pgm2")
B.aI=new A.cc(3,"pgm5")
B.c2=new A.cc(4,"ppm3")
B.aJ=new A.cc(5,"ppm6")
B.aK=new A.bg(0,"bilevel")
B.jT=new A.bg(1,"gray4bit")
B.jU=new A.bg(2,"gray")
B.jV=new A.bg(3,"grayAlpha")
B.jW=new A.bg(4,"palette")
B.ca=new A.bg(5,"rgb")
B.jX=new A.bg(6,"rgba")
B.jY=new A.bg(7,"yCbCrSub")
B.as=new A.bg(8,"generic")
B.jZ=new A.bg(9,"invalid")
B.kc=A.bu("y6")
B.kd=A.bu("rZ")
B.ke=A.bu("ki")
B.kf=A.bu("nJ")
B.kg=A.bu("kO")
B.kh=A.bu("i1")
B.ki=A.bu("nM")
B.kj=A.bu("B")
B.kk=A.bu("oi")
B.kl=A.bu("bD")
B.km=A.bu("u5")
B.kn=A.bu("aP")
B.ko=new A.j8(!1)
B.kp=new A.j8(!0)
B.a7=new A.e8(0,"undefined")
B.aP=new A.e8(1,"lossy")
B.at=new A.e8(2,"lossless")
B.ks=new A.e8(3,"animated")})();(function staticFields(){$.mn=null
$.ba=A.b([],A.a4("v<B>"))
$.pE=null
$.p1=null
$.p0=null
$.qX=null
$.qP=null
$.r4=null
$.n7=null
$.nk=null
$.oF=null
$.ek=null
$.hn=null
$.ho=null
$.oz=!1
$.K=B.q
$.pT=""
$.pU=null
$.ow=null
$.pX=!1
$.pY=A.b([A.oK(),A.xP(),A.xU(),A.xV(),A.xW(),A.xX(),A.xY(),A.xZ(),A.y_(),A.y0(),A.xQ(),A.xR(),A.xS(),A.xT(),A.oK(),A.oK()],A.a4("v<i(bD,i,i)>"))
$.Y=null
$.p8=A.uY("_eLut")
$.qy=null
$.mV=null})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"y7","nw",()=>A.x0("_$dart_dartClosure"))
s($,"z8","rF",()=>B.q.iA(new A.np(),A.a4("aV<~>")))
s($,"yh","rg",()=>A.bS(A.lB({
toString:function(){return"$receiver$"}})))
s($,"yi","rh",()=>A.bS(A.lB({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"yj","ri",()=>A.bS(A.lB(null)))
s($,"yk","rj",()=>A.bS(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"yn","rm",()=>A.bS(A.lB(void 0)))
s($,"yo","rn",()=>A.bS(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"ym","rl",()=>A.bS(A.pP(null)))
s($,"yl","rk",()=>A.bS(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"yq","rp",()=>A.bS(A.pP(void 0)))
s($,"yp","ro",()=>A.bS(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"yw","oM",()=>A.uT())
s($,"y9","jM",()=>$.rF())
s($,"yC","rv",()=>A.iq(4096))
s($,"yA","rt",()=>new A.mK().$0())
s($,"yB","ru",()=>new A.mJ().$0())
s($,"yx","rq",()=>A.tI(A.b([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t)))
s($,"y8","rd",()=>A.dT(["iso_8859-1:1987",B.t,"iso-ir-100",B.t,"iso_8859-1",B.t,"iso-8859-1",B.t,"latin1",B.t,"l1",B.t,"ibm819",B.t,"cp819",B.t,"csisolatin1",B.t,"iso-ir-6",B.z,"ansi_x3.4-1968",B.z,"ansi_x3.4-1986",B.z,"iso_646.irv:1991",B.z,"iso646-us",B.z,"us-ascii",B.z,"us",B.z,"ibm367",B.z,"cp367",B.z,"csascii",B.z,"ascii",B.z,"csutf8",B.u,"utf-8",B.u],t.N,A.a4("c4")))
s($,"yy","rr",()=>A.al("^[\\-\\.0-9A-Z_a-z~]*$"))
s($,"yz","rs",()=>typeof URLSearchParams=="function")
s($,"z_","nA",()=>A.jK(B.kj))
s($,"z3","rD",()=>A.vN())
s($,"y5","rc",()=>A.al("^[\\w!#%&'*+\\-.^`|~]+$"))
s($,"yY","ry",()=>A.al("^\\d+$"))
s($,"yZ","rz",()=>A.al('["\\x00-\\x1F\\x7F]'))
s($,"za","rG",()=>A.al('[^()<>@,;:"\\\\/[\\]?={} \\t\\x00-\\x1F\\x7F]+'))
s($,"z0","rA",()=>A.al("(?:\\r\\n)?[ \\t]+"))
s($,"z2","rC",()=>A.al('"(?:[^"\\x00-\\x1F\\x7F\\\\]|\\\\.)*"'))
s($,"z1","rB",()=>A.al("\\\\(.)"))
s($,"z7","rE",()=>A.al('[()<>@,;:"\\\\/\\[\\]?={} \\t\\x00-\\x1F\\x7F]'))
s($,"zb","rH",()=>A.al("(?:"+$.rA().a+")*"))
s($,"z6","oQ",()=>{var q=null,p="ISOSpeed"
return A.dT([11,A.j("ProcessingSoftware",B.l,q),254,A.j("SubfileType",B.p,1),255,A.j("OldSubfileType",B.p,1),256,A.j("ImageWidth",B.p,1),257,A.j("ImageLength",B.p,1),258,A.j("BitsPerSample",B.j,1),259,A.j("Compression",B.j,1),262,A.j("PhotometricInterpretation",B.j,1),263,A.j("Thresholding",B.j,1),264,A.j("CellWidth",B.j,1),265,A.j("CellLength",B.j,1),266,A.j("FillOrder",B.j,1),269,A.j("DocumentName",B.l,q),270,A.j("ImageDescription",B.l,q),271,A.j("Make",B.l,q),272,A.j("Model",B.l,q),273,A.j("StripOffsets",B.p,q),274,A.j("Orientation",B.j,1),277,A.j("SamplesPerPixel",B.j,1),278,A.j("RowsPerStrip",B.p,1),279,A.j("StripByteCounts",B.p,1),280,A.j("MinSampleValue",B.j,1),281,A.j("MaxSampleValue",B.j,1),282,A.j("XResolution",B.v,1),283,A.j("YResolution",B.v,1),284,A.j("PlanarConfiguration",B.j,1),285,A.j("PageName",B.l,q),286,A.j("XPosition",B.v,1),287,A.j("YPosition",B.v,1),290,A.j("GrayResponseUnit",B.j,1),291,A.j("GrayResponseCurve",B.e,q),292,A.j("T4Options",B.e,q),293,A.j("T6Options",B.e,q),296,A.j("ResolutionUnit",B.j,1),297,A.j("PageNumber",B.j,2),300,A.j("ColorResponseUnit",B.e,q),301,A.j("TransferFunction",B.j,768),305,A.j("Software",B.l,q),306,A.j("DateTime",B.l,q),315,A.j("Artist",B.l,q),316,A.j("HostComputer",B.l,q),317,A.j("Predictor",B.j,1),318,A.j("WhitePoint",B.v,2),319,A.j("PrimaryChromaticities",B.v,6),320,A.j("ColorMap",B.j,q),321,A.j("HalftoneHints",B.j,2),322,A.j("TileWidth",B.p,1),323,A.j("TileLength",B.p,1),324,A.j("TileOffsets",B.p,q),325,A.j("TileByteCounts",B.e,q),326,A.j("BadFaxLines",B.e,q),327,A.j("CleanFaxData",B.e,q),328,A.j("ConsecutiveBadFaxLines",B.e,q),332,A.j("InkSet",B.e,q),333,A.j("InkNames",B.e,q),334,A.j("NumberofInks",B.e,q),336,A.j("DotRange",B.e,q),337,A.j("TargetPrinter",B.l,q),338,A.j("ExtraSamples",B.e,q),339,A.j("SampleFormat",B.j,1),340,A.j("SMinSampleValue",B.e,q),341,A.j("SMaxSampleValue",B.e,q),342,A.j("TransferRange",B.e,q),343,A.j("ClipPath",B.e,q),512,A.j("JPEGProc",B.e,q),513,A.j("JPEGInterchangeFormat",B.e,q),514,A.j("JPEGInterchangeFormatLength",B.e,q),529,A.j("YCbCrCoefficients",B.v,3),530,A.j("YCbCrSubSampling",B.j,1),531,A.j("YCbCrPositioning",B.j,1),532,A.j("ReferenceBlackWhite",B.v,6),700,A.j("ApplicationNotes",B.j,1),18246,A.j("Rating",B.j,1),33421,A.j("CFARepeatPatternDim",B.e,q),33422,A.j("CFAPattern",B.e,q),33423,A.j("BatteryLevel",B.e,q),33432,A.j("Copyright",B.l,q),33434,A.j("ExposureTime",B.v,1),33437,A.j("FNumber",B.v,q),33723,A.j("IPTC-NAA",B.p,1),34665,A.j("ExifOffset",B.e,q),34675,A.j("InterColorProfile",B.e,q),34850,A.j("ExposureProgram",B.j,1),34852,A.j("SpectralSensitivity",B.l,q),34853,A.j("GPSOffset",B.e,q),34855,A.j(p,B.p,1),34856,A.j("OECF",B.e,q),34864,A.j("SensitivityType",B.j,1),34866,A.j("RecommendedExposureIndex",B.p,1),34867,A.j(p,B.p,1),36864,A.j("ExifVersion",B.H,q),36867,A.j("DateTimeOriginal",B.l,q),36868,A.j("DateTimeDigitized",B.l,q),36880,A.j("OffsetTime",B.l,q),36881,A.j("OffsetTimeOriginal",B.l,q),36882,A.j("OffsetTimeDigitized",B.l,q),37121,A.j("ComponentsConfiguration",B.H,q),37122,A.j("CompressedBitsPerPixel",B.e,q),37377,A.j("ShutterSpeedValue",B.e,q),37378,A.j("ApertureValue",B.e,q),37379,A.j("BrightnessValue",B.e,q),37380,A.j("ExposureBiasValue",B.e,q),37381,A.j("MaxApertureValue",B.e,q),37382,A.j("SubjectDistance",B.e,q),37383,A.j("MeteringMode",B.e,q),37384,A.j("LightSource",B.e,q),37385,A.j("Flash",B.e,q),37386,A.j("FocalLength",B.e,q),37396,A.j("SubjectArea",B.e,q),37500,A.j("MakerNote",B.H,q),37510,A.j("UserComment",B.H,q),37520,A.j("SubSecTime",B.e,q),37521,A.j("SubSecTimeOriginal",B.e,q),37522,A.j("SubSecTimeDigitized",B.e,q),40091,A.j("XPTitle",B.e,q),40092,A.j("XPComment",B.e,q),40093,A.j("XPAuthor",B.e,q),40094,A.j("XPKeywords",B.e,q),40095,A.j("XPSubject",B.e,q),40960,A.j("FlashPixVersion",B.e,q),40961,A.j("ColorSpace",B.j,1),40962,A.j("ExifImageWidth",B.j,1),40963,A.j("ExifImageLength",B.j,1),40964,A.j("RelatedSoundFile",B.e,q),40965,A.j("InteroperabilityOffset",B.e,q),41483,A.j("FlashEnergy",B.e,q),41484,A.j("SpatialFrequencyResponse",B.e,q),41486,A.j("FocalPlaneXResolution",B.e,q),41487,A.j("FocalPlaneYResolution",B.e,q),41488,A.j("FocalPlaneResolutionUnit",B.e,q),41492,A.j("SubjectLocation",B.e,q),41493,A.j("ExposureIndex",B.e,q),41495,A.j("SensingMethod",B.e,q),41728,A.j("FileSource",B.e,q),41729,A.j("SceneType",B.e,q),41730,A.j("CVAPattern",B.e,q),41985,A.j("CustomRendered",B.e,q),41986,A.j("ExposureMode",B.e,q),41987,A.j("WhiteBalance",B.e,q),41988,A.j("DigitalZoomRatio",B.e,q),41989,A.j("FocalLengthIn35mmFilm",B.e,q),41990,A.j("SceneCaptureType",B.e,q),41991,A.j("GainControl",B.e,q),41992,A.j("Contrast",B.e,q),41993,A.j("Saturation",B.e,q),41994,A.j("Sharpness",B.e,q),41995,A.j("DeviceSettingDescription",B.e,q),41996,A.j("SubjectDistanceRange",B.e,q),42016,A.j("ImageUniqueID",B.e,q),42032,A.j("CameraOwnerName",B.l,q),42033,A.j("BodySerialNumber",B.l,q),42034,A.j("LensSpecification",B.e,q),42035,A.j("LensMake",B.l,q),42036,A.j("LensModel",B.l,q),42037,A.j("LensSerialNumber",B.l,q),42240,A.j("Gamma",B.v,1),50341,A.j("PrintIM",B.e,q),59932,A.j("Padding",B.e,q),59933,A.j("OffsetSchema",B.e,q),65e3,A.j("OwnerName",B.l,q),65001,A.j("SerialNumber",B.l,q)],t.p,A.a4("hJ"))})
r($,"yr","jO",()=>A.iq(511))
r($,"ys","nx",()=>A.iq(511))
r($,"yu","ny",()=>A.pA(2041))
r($,"yv","jP",()=>A.pA(225))
r($,"yt","b1",()=>A.iq(766))
s($,"ya","re",()=>A.pp(0,0,0))
s($,"yO","aT",()=>A.iq(1))
s($,"yP","b3",()=>A.tu(B.f.gE($.aT()),0,null))
s($,"yH","aS",()=>A.tK(1))
s($,"yI","b2",()=>J.rJ(B.C.gE($.aS()),0,null))
s($,"yJ","V",()=>A.tM(1))
s($,"yL","au",()=>J.rK(B.m.gE($.V()),0,null))
s($,"yK","ct",()=>A.tj(B.m.gE($.V())))
s($,"yF","jQ",()=>A.tG(1))
s($,"yG","nz",()=>A.pQ(B.a1.gE($.jQ()),0))
s($,"yD","oN",()=>A.tD(1))
s($,"yE","rw",()=>A.pQ(B.P.gE($.oN()),0))
s($,"yM","oO",()=>A.u4(1))
s($,"yN","rx",()=>{var q=$.oO()
return A.tk(q.gE(q))})
s($,"z4","oP",()=>new A.kb($.oL()))
s($,"ye","rf",()=>new A.iB(A.al("/"),A.al("[^/]$"),A.al("^/")))
s($,"yg","jN",()=>new A.jd(A.al("[/\\\\]"),A.al("[^/\\\\]$"),A.al("^(\\\\\\\\[^\\\\]+\\\\[^\\\\/]+|[a-zA-Z]:[/\\\\])"),A.al("^[/\\\\](?![/\\\\])")))
s($,"yf","hs",()=>new A.j6(A.al("/"),A.al("(^[a-zA-Z][-+.a-zA-Z\\d]*://|[^/])$"),A.al("[a-zA-Z][-+.a-zA-Z\\d]*://[^/]*"),A.al("^/")))
s($,"yd","oL",()=>A.u3())})();(function nativeSupport(){!function(){var s=function(a){var m={}
m[a]=1
return Object.keys(hunkHelpers.convertToFastObject(m))[0]}
v.getIsolateTag=function(a){return s("___dart_"+a+v.isolateTag)}
var r="___dart_isolate_tags_"
var q=Object[r]||(Object[r]=Object.create(null))
var p="_ZxYxX"
for(var o=0;;o++){var n=s(p+"_"+o+"_")
if(!(n in q)){q[n]=1
v.isolateTag=n
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:A.cJ,ArrayBufferView:A.fa,DataView:A.ip,Float32Array:A.f5,Float64Array:A.f6,Int16Array:A.f7,Int32Array:A.f8,Int8Array:A.f9,Uint16Array:A.fb,Uint32Array:A.fc,Uint8ClampedArray:A.fd,CanvasPixelArray:A.fd,Uint8Array:A.cK})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.aD.$nativeSuperclassTag="ArrayBufferView"
A.h1.$nativeSuperclassTag="ArrayBufferView"
A.h2.$nativeSuperclassTag="ArrayBufferView"
A.ca.$nativeSuperclassTag="ArrayBufferView"
A.h3.$nativeSuperclassTag="ArrayBufferView"
A.h4.$nativeSuperclassTag="ArrayBufferView"
A.b6.$nativeSuperclassTag="ArrayBufferView"})()
Function.prototype.$0=function(){return this()}
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$4=function(a,b,c,d){return this(a,b,c,d)}
Function.prototype.$1$1=function(a){return this(a)}
Function.prototype.$5=function(a,b,c,d,e){return this(a,b,c,d,e)}
Function.prototype.$6=function(a,b,c,d,e,f){return this(a,b,c,d,e,f)}
Function.prototype.$1$0=function(){return this()}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q){s[q].removeEventListener("load",onLoad,false)}a(b.target)}for(var r=0;r<s.length;++r){s[r].addEventListener("load",onLoad,false)}})(function(a){v.currentScript=a
var s=A.nm
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=main.dart.js.map
