(function dartProgram(){function copyProperties(a,b){var t=Object.keys(a)
for(var s=0;s<t.length;s++){var r=t[s]
b[r]=a[r]}}function mixinPropertiesHard(a,b){var t=Object.keys(a)
for(var s=0;s<t.length;s++){var r=t[s]
if(!b.hasOwnProperty(r)){b[r]=a[r]}}}function mixinPropertiesEasy(a,b){Object.assign(b,a)}var z=function(){var t=function(){}
t.prototype={p:{}}
var s=new t()
if(!(Object.getPrototypeOf(s)&&Object.getPrototypeOf(s).p===t.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var r=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(r))return true}}catch(q){}return false}()
function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){Object.setPrototypeOf(a.prototype,b.prototype)
return}var t=Object.create(b.prototype)
copyProperties(a.prototype,t)
a.prototype=t}}function inheritMany(a,b){for(var t=0;t<b.length;t++){inherit(b[t],a)}}function mixinEasy(a,b){mixinPropertiesEasy(b.prototype,a.prototype)
a.prototype.constructor=a}function mixinHard(a,b){mixinPropertiesHard(b.prototype,a.prototype)
a.prototype.constructor=a}function lazy(a,b,c,d){var t=a
a[b]=t
a[c]=function(){if(a[b]===t){a[b]=d()}a[c]=function(){return this[b]}
return a[b]}}function lazyFinal(a,b,c,d){var t=a
a[b]=t
a[c]=function(){if(a[b]===t){var s=d()
if(a[b]!==t){A.dl(b)}a[b]=s}var r=a[b]
a[c]=function(){return r}
return r}}function makeConstList(a){a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var t=0;t<a.length;++t){convertToFastObject(a[t])}}var y=0
function instanceTearOffGetter(a,b){var t=null
return a?function(c){if(t===null)t=A.b7(b)
return new t(c,this)}:function(){if(t===null)t=A.b7(b)
return new t(this,null)}}function staticTearOffGetter(a){var t=null
return function(){if(t===null)t=A.b7(a).prototype
return t}}var x=0
function tearOffParameters(a,b,c,d,e,f,g,h,i,j){if(typeof h=="number"){h+=x}return{co:a,iS:b,iI:c,rC:d,dV:e,cs:f,fs:g,fT:h,aI:i||0,nDA:j}}function installStaticTearOff(a,b,c,d,e,f,g,h){var t=tearOffParameters(a,true,false,c,d,e,f,g,h,false)
var s=staticTearOffGetter(t)
a[b]=s}function installInstanceTearOff(a,b,c,d,e,f,g,h,i,j){c=!!c
var t=tearOffParameters(a,false,c,d,e,f,g,h,i,!!j)
var s=instanceTearOffGetter(c,t)
a[b]=s}function setOrUpdateInterceptorsByTag(a){var t=v.interceptorsByTag
if(!t){v.interceptorsByTag=a
return}copyProperties(a,t)}function setOrUpdateLeafTags(a){var t=v.leafTags
if(!t){v.leafTags=a
return}copyProperties(a,t)}function updateTypes(a){var t=v.types
var s=t.length
t.push.apply(t,a)
return s}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var t=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e,false)}},s=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixinEasy,mixinHard:mixinHard,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:t(0,0,null,["$0"],0),_instance_1u:t(0,1,null,["$1"],0),_instance_2u:t(0,2,null,["$2"],0),_instance_0i:t(1,0,null,["$0"],0),_instance_1i:t(1,1,null,["$1"],0),_instance_2i:t(1,2,null,["$2"],0),_static_0:s(0,null,["$0"],0),_static_1:s(1,null,["$1"],0),_static_2:s(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyFinal:lazyFinal,updateHolder:updateHolder,convertToFastObject:convertToFastObject,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}var J={
bb(a,b,c,d){return{i:a,p:b,e:c,x:d}},
b8(a){var t,s,r,q,p,o=a[v.dispatchPropertyName]
if(o==null)if($.b9==null){A.da()
o=a[v.dispatchPropertyName]}if(o!=null){t=o.p
if(!1===t)return o.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return o.i
if(o.e===s)throw A.b(A.bp("Return interceptor for "+A.T(t(a,o))))}r=a.constructor
if(r==null)q=null
else{p=$.aO
if(p==null)p=$.aO=v.getIsolateTag("_$dart_js")
q=r[p]}if(q!=null)return q
q=A.dg(a)
if(q!=null)return q
if(typeof a=="function")return B.n
t=Object.getPrototypeOf(a)
if(t==null)return B.e
if(t===Object.prototype)return B.e
if(typeof r=="function"){p=$.aO
if(p==null)p=$.aO=v.getIsolateTag("_$dart_js")
Object.defineProperty(r,p,{value:B.a,enumerable:false,writable:true,configurable:true})
return B.a}return B.a},
a1(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ac.prototype
return J.ad.prototype}if(typeof a=="string")return J.K.prototype
if(a==null)return J.J.prototype
if(typeof a=="boolean")return J.ab.prototype
if(Array.isArray(a))return J.p.prototype
if(typeof a!="object"){if(typeof a=="function")return J.x.prototype
if(typeof a=="symbol")return J.N.prototype
if(typeof a=="bigint")return J.L.prototype
return a}if(a instanceof A.k)return a
return J.b8(a)},
bT(a){if(typeof a=="string")return J.K.prototype
if(a==null)return a
if(Array.isArray(a))return J.p.prototype
if(typeof a!="object"){if(typeof a=="function")return J.x.prototype
if(typeof a=="symbol")return J.N.prototype
if(typeof a=="bigint")return J.L.prototype
return a}if(a instanceof A.k)return a
return J.b8(a)},
d5(a){if(a==null)return a
if(Array.isArray(a))return J.p.prototype
if(typeof a!="object"){if(typeof a=="function")return J.x.prototype
if(typeof a=="symbol")return J.N.prototype
if(typeof a=="bigint")return J.L.prototype
return a}if(a instanceof A.k)return a
return J.b8(a)},
c0(a){return J.d5(a).gB(a)},
bd(a){return J.bT(a).gj(a)},
c1(a){return J.a1(a).gi(a)},
a5(a){return J.a1(a).h(a)},
aa:function aa(){},
ab:function ab(){},
J:function J(){},
M:function M(){},
y:function y(){},
aq:function aq(){},
U:function U(){},
x:function x(){},
L:function L(){},
N:function N(){},
p:function p(a){this.$ti=a},
aC:function aC(a){this.$ti=a},
a6:function a6(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
ae:function ae(){},
ac:function ac(){},
ad:function ad(){},
K:function K(){}},A={b_:function b_(){},
df(a){var t,s
for(t=$.a4.length,s=0;s<t;++s)if(a===$.a4[s])return!0
return!1},
aD:function aD(a){this.a=a},
af:function af(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
l:function l(){},
c_(a){var t=v.mangledGlobalNames[a]
if(t!=null)return t
return"minified:"+a},
dE(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return u.p.b(a)},
T(a){var t
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.a5(a)
return t},
aE(a){return A.ce(a)},
ce(a){var t,s,r,q
if(a instanceof A.k)return A.n(A.a2(a),null)
t=J.a1(a)
if(t===B.m||t===B.o||u.o.b(a)){s=B.b(a)
if(s!=="Object"&&s!=="")return s
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string"&&q!=="Object"&&q!=="")return q}}return A.n(A.a2(a),null)},
cf(a){if(typeof a=="number"||A.b5(a))return J.a5(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.w)return a.h(0)
return"Instance of '"+A.aE(a)+"'"},
ba(a,b){if(a==null)J.bd(a)
throw A.b(A.bQ(a,b))},
bQ(a,b){var t,s="index"
if(!A.bK(b))return new A.H(!0,b,s,null)
t=J.bd(a)
if(b<0||b>=t)return new A.aB(t,!0,b,s,"Index out of range")
return new A.aF(!0,b,s,"Value not in range")},
b(a){return A.bV(new Error(),a)},
bV(a,b){var t
if(b==null)b=new A.aJ()
a.dartException=b
t=A.dn
if("defineProperty" in Object){Object.defineProperty(a,"message",{get:t})
a.name=""}else a.toString=t
return a},
dn(){return J.a5(this.dartException)},
bY(a){throw A.b(a)},
bZ(a,b){throw A.bV(b,a)},
dm(a,b,c){var t
if(b==null)b=0
if(c==null)c=0
t=Error()
A.bZ(A.cJ(a,b,c),t)},
cJ(a,b,c){var t,s,r,q,p,o,n,m,l
if(typeof b=="string")t=b
else{s="[]=;add;removeWhere;retainWhere;removeRange;setRange;setInt8;setInt16;setInt32;setUint8;setUint16;setUint32;setFloat32;setFloat64".split(";")
r=s.length
q=b
if(q>r){c=q/r|0
q%=r}t=s[q]}p=typeof c=="string"?c:"modify;remove from;add to".split(";")[c]
o=u.j.b(a)?"list":"ByteData"
n=a.$flags|0
m="a "
if((n&4)!==0)l="constant "
else if((n&2)!==0){l="unmodifiable "
m="an "}else l=(n&1)!==0?"fixed-length ":""
return new A.aL("'"+t+"': Cannot "+p+" "+m+l+o)},
dk(a){throw A.b(A.bk(a))},
c8(a1){var t,s,r,q,p,o,n,m,l,k,j=a1.co,i=a1.iS,h=a1.iI,g=a1.nDA,f=a1.aI,e=a1.fs,d=a1.cs,c=e[0],b=d[0],a=j[c],a0=a1.fT
a0.toString
t=i?Object.create(new A.ar().constructor.prototype):Object.create(new A.I(null,null).constructor.prototype)
t.$initialize=t.constructor
s=i?function static_tear_off(){this.$initialize()}:function tear_off(a2,a3){this.$initialize(a2,a3)}
t.constructor=s
s.prototype=t
t.$_name=c
t.$_target=a
r=!i
if(r)q=A.bj(c,a,h,g)
else{t.$static_name=c
q=a}t.$S=A.c4(a0,i,h)
t[b]=q
for(p=q,o=1;o<e.length;++o){n=e[o]
if(typeof n=="string"){m=j[n]
l=n
n=m}else l=""
k=d[o]
if(k!=null){if(r)n=A.bj(l,n,h,g)
t[k]=n}if(o===f)p=n}t.$C=p
t.$R=a1.rC
t.$D=a1.dV
return s},
c4(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.b("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.c2)}throw A.b("Error in functionType of tearoff")},
c5(a,b,c,d){var t=A.bi
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
bj(a,b,c,d){if(c)return A.c7(a,b,d)
return A.c5(b.length,d,a,b)},
c6(a,b,c,d){var t=A.bi,s=A.c3
switch(b?-1:a){case 0:throw A.b(new A.aG("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,t)
default:return function(e,f,g){return function(){var r=[g(this)]
Array.prototype.push.apply(r,arguments)
return e.apply(f(this),r)}}(d,s,t)}},
c7(a,b,c){var t,s
if($.bg==null)$.bg=A.bf("interceptor")
if($.bh==null)$.bh=A.bf("receiver")
t=b.length
s=A.c6(t,c,a,b)
return s},
b7(a){return A.c8(a)},
c2(a,b){return A.aQ(v.typeUniverse,A.a2(a.a),b)},
bi(a){return a.a},
c3(a){return a.b},
bf(a){var t,s,r,q=new A.I("receiver","interceptor"),p=Object.getOwnPropertyNames(q)
p.$flags=1
t=p
for(p=t.length,s=0;s<p;++s){r=t[s]
if(q[r]===a)return r}throw A.b(A.be("Field name "+a+" not found."))},
dF(a){throw A.b(new A.aM(a))},
d6(a){return v.getIsolateTag(a)},
dg(a){var t,s,r,q,p,o=A.bE($.bU.$1(a)),n=$.aT[o]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.aX[o]
if(t!=null)return t
s=v.interceptorsByTag[o]
if(s==null){r=A.cG($.bO.$2(a,o))
if(r!=null){n=$.aT[r]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.aX[r]
if(t!=null)return t
s=v.interceptorsByTag[r]
o=r}}if(s==null)return null
t=s.prototype
q=o[0]
if(q==="!"){n=A.aZ(t)
$.aT[o]=n
Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}if(q==="~"){$.aX[o]=t
return t}if(q==="-"){p=A.aZ(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return A.bW(a,t)
if(q==="*")throw A.b(A.bp(o))
if(v.leafTags[o]===true){p=A.aZ(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return A.bW(a,t)},
bW(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,v.dispatchPropertyName,{value:J.bb(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
aZ(a){return J.bb(a,!1,null,!!a.$io)},
di(a,b,c){var t=b.prototype
if(v.leafTags[a]===true)return A.aZ(t)
else return J.bb(t,c,null,null)},
da(){if(!0===$.b9)return
$.b9=!0
A.db()},
db(){var t,s,r,q,p,o,n,m
$.aT=Object.create(null)
$.aX=Object.create(null)
A.d9()
t=v.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.bX.$1(p)
if(o!=null){n=A.di(p,t[p],o)
if(n!=null){Object.defineProperty(o,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
d9(){var t,s,r,q,p,o,n=B.f()
n=A.G(B.h,A.G(B.i,A.G(B.c,A.G(B.c,A.G(B.j,A.G(B.k,A.G(B.l(B.b),n)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(Array.isArray(t))for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")n=r(n)||n}}q=n.getTag
p=n.getUnknownTag
o=n.prototypeForTag
$.bU=new A.aU(q)
$.bO=new A.aV(p)
$.bX=new A.aW(o)},
G(a,b){return a(b)||b},
d4(a,b){var t=b.length,s=v.rttc[""+t+";"+a]
if(s==null)return null
if(t===0)return s
if(t===s.length)return s.apply(null,b)
return s(b)},
w:function w(){},
a8:function a8(){},
a9:function a9(){},
as:function as(){},
ar:function ar(){},
I:function I(a,b){this.a=a
this.b=b},
aM:function aM(a){this.a=a},
aG:function aG(a){this.a=a},
aU:function aU(a){this.a=a},
aV:function aV(a){this.a=a},
aW:function aW(a){this.a=a},
C(a,b,c){if(a>>>0!==a||a>=c)throw A.b(A.bQ(b,a))},
ag:function ag(){},
Q:function Q(){},
ah:function ah(){},
E:function E(){},
O:function O(){},
P:function P(){},
ai:function ai(){},
aj:function aj(){},
ak:function ak(){},
al:function al(){},
am:function am(){},
an:function an(){},
ao:function ao(){},
R:function R(){},
ap:function ap(){},
V:function V(){},
W:function W(){},
X:function X(){},
Y:function Y(){},
bn(a,b){var t=b.c
return t==null?b.c=A.b3(a,b.x,!0):t},
b0(a,b){var t=b.c
return t==null?b.c=A.a_(a,"bl",[b.x]):t},
bo(a){var t=a.w
if(t===6||t===7||t===8)return A.bo(a.x)
return t===12||t===13},
cg(a){return a.as},
bR(a){return A.av(v.typeUniverse,a,!1)},
A(a0,a1,a2,a3){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=a1.w
switch(a){case 5:case 1:case 2:case 3:case 4:return a1
case 6:t=a1.x
s=A.A(a0,t,a2,a3)
if(s===t)return a1
return A.bz(a0,s,!0)
case 7:t=a1.x
s=A.A(a0,t,a2,a3)
if(s===t)return a1
return A.b3(a0,s,!0)
case 8:t=a1.x
s=A.A(a0,t,a2,a3)
if(s===t)return a1
return A.bx(a0,s,!0)
case 9:r=a1.y
q=A.F(a0,r,a2,a3)
if(q===r)return a1
return A.a_(a0,a1.x,q)
case 10:p=a1.x
o=A.A(a0,p,a2,a3)
n=a1.y
m=A.F(a0,n,a2,a3)
if(o===p&&m===n)return a1
return A.b1(a0,o,m)
case 11:l=a1.x
k=a1.y
j=A.F(a0,k,a2,a3)
if(j===k)return a1
return A.by(a0,l,j)
case 12:i=a1.x
h=A.A(a0,i,a2,a3)
g=a1.y
f=A.d1(a0,g,a2,a3)
if(h===i&&f===g)return a1
return A.bw(a0,h,f)
case 13:e=a1.y
a3+=e.length
d=A.F(a0,e,a2,a3)
p=a1.x
o=A.A(a0,p,a2,a3)
if(d===e&&o===p)return a1
return A.b2(a0,o,d,!0)
case 14:c=a1.x
if(c<a3)return a1
b=a2[c-a3]
if(b==null)return a1
return b
default:throw A.b(A.a7("Attempted to substitute unexpected RTI kind "+a))}},
F(a,b,c,d){var t,s,r,q,p=b.length,o=A.aR(p)
for(t=!1,s=0;s<p;++s){r=b[s]
q=A.A(a,r,c,d)
if(q!==r)t=!0
o[s]=q}return t?o:b},
d2(a,b,c,d){var t,s,r,q,p,o,n=b.length,m=A.aR(n)
for(t=!1,s=0;s<n;s+=3){r=b[s]
q=b[s+1]
p=b[s+2]
o=A.A(a,p,c,d)
if(o!==p)t=!0
m.splice(s,3,r,q,o)}return t?m:b},
d1(a,b,c,d){var t,s=b.a,r=A.F(a,s,c,d),q=b.b,p=A.F(a,q,c,d),o=b.c,n=A.d2(a,o,c,d)
if(r===s&&p===q&&n===o)return b
t=new A.at()
t.a=r
t.b=p
t.c=n
return t},
bN(a,b){a[v.arrayRti]=b
return a},
bP(a){var t=a.$S
if(t!=null){if(typeof t=="number")return A.d8(t)
return a.$S()}return null},
dc(a,b){var t
if(A.bo(b))if(a instanceof A.w){t=A.bP(a)
if(t!=null)return t}return A.a2(a)},
a2(a){if(a instanceof A.k)return A.bI(a)
if(Array.isArray(a))return A.aS(a)
return A.b4(J.a1(a))},
aS(a){var t=a[v.arrayRti],s=u.b
if(t==null)return s
if(t.constructor!==s.constructor)return s
return t},
bI(a){var t=a.$ti
return t!=null?t:A.b4(a)},
b4(a){var t=a.constructor,s=t.$ccache
if(s!=null)return s
return A.cQ(a,t)},
cQ(a,b){var t=a instanceof A.w?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,s=A.cC(v.typeUniverse,t.name)
b.$ccache=s
return s},
d8(a){var t,s=v.types,r=s[a]
if(typeof r=="string"){t=A.av(v.typeUniverse,r,!1)
s[a]=t
return t}return r},
d7(a){return A.D(A.bI(a))},
d0(a){var t=a instanceof A.w?A.bP(a):null
if(t!=null)return t
if(u.R.b(a))return J.c1(a).a
if(Array.isArray(a))return A.aS(a)
return A.a2(a)},
D(a){var t=a.r
return t==null?a.r=A.bF(a):t},
bF(a){var t,s,r=a.as,q=r.replace(/\*/g,"")
if(q===r)return a.r=new A.aP(a)
t=A.av(v.typeUniverse,q,!0)
s=t.r
return s==null?t.r=A.bF(t):s},
r(a){return A.D(A.av(v.typeUniverse,a,!1))},
cP(a){var t,s,r,q,p,o,n=this
if(n===u.K)return A.u(n,a,A.cV)
if(!A.v(n))t=n===u._
else t=!0
if(t)return A.u(n,a,A.cZ)
t=n.w
if(t===7)return A.u(n,a,A.cN)
if(t===1)return A.u(n,a,A.bL)
s=t===6?n.x:n
r=s.w
if(r===8)return A.u(n,a,A.cR)
if(s===u.S)q=A.bK
else if(s===u.i||s===u.H)q=A.cU
else if(s===u.N)q=A.cX
else q=s===u.y?A.b5:null
if(q!=null)return A.u(n,a,q)
if(r===9){p=s.x
if(s.y.every(A.dd)){n.f="$i"+p
if(p==="d")return A.u(n,a,A.cT)
return A.u(n,a,A.cY)}}else if(r===11){o=A.d4(s.x,s.y)
return A.u(n,a,o==null?A.bL:o)}return A.u(n,a,A.cL)},
u(a,b,c){a.b=c
return a.b(b)},
cO(a){var t,s=this,r=A.cK
if(!A.v(s))t=s===u._
else t=!0
if(t)r=A.cH
else if(s===u.K)r=A.cF
else{t=A.a3(s)
if(t)r=A.cM}s.a=r
return s.a(a)},
aw(a){var t=a.w,s=!0
if(!A.v(a))if(!(a===u._))if(!(a===u.A))if(t!==7)if(!(t===6&&A.aw(a.x)))s=t===8&&A.aw(a.x)||a===u.P||a===u.T
return s},
cL(a){var t=this
if(a==null)return A.aw(t)
return A.de(v.typeUniverse,A.dc(a,t),t)},
cN(a){if(a==null)return!0
return this.x.b(a)},
cY(a){var t,s=this
if(a==null)return A.aw(s)
t=s.f
if(a instanceof A.k)return!!a[t]
return!!J.a1(a)[t]},
cT(a){var t,s=this
if(a==null)return A.aw(s)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
t=s.f
if(a instanceof A.k)return!!a[t]
return!!J.a1(a)[t]},
cK(a){var t=this
if(a==null){if(A.a3(t))return a}else if(t.b(a))return a
A.bG(a,t)},
cM(a){var t=this
if(a==null)return a
else if(t.b(a))return a
A.bG(a,t)},
bG(a,b){throw A.b(A.cs(A.bq(a,A.n(b,null))))},
bq(a,b){return A.aA(a)+": type '"+A.n(A.d0(a),null)+"' is not a subtype of type '"+b+"'"},
cs(a){return new A.au("TypeError: "+a)},
m(a,b){return new A.au("TypeError: "+A.bq(a,b))},
cR(a){var t=this,s=t.w===6?t.x:t
return s.x.b(a)||A.b0(v.typeUniverse,s).b(a)},
cV(a){return a!=null},
cF(a){if(a!=null)return a
throw A.b(A.m(a,"Object"))},
cZ(a){return!0},
cH(a){return a},
bL(a){return!1},
b5(a){return!0===a||!1===a},
bC(a){if(!0===a)return!0
if(!1===a)return!1
throw A.b(A.m(a,"bool"))},
dv(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.b(A.m(a,"bool"))},
du(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.b(A.m(a,"bool?"))},
dw(a){if(typeof a=="number")return a
throw A.b(A.m(a,"double"))},
dy(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.m(a,"double"))},
dx(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.m(a,"double?"))},
bK(a){return typeof a=="number"&&Math.floor(a)===a},
bD(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.b(A.m(a,"int"))},
dA(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.b(A.m(a,"int"))},
dz(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.b(A.m(a,"int?"))},
cU(a){return typeof a=="number"},
dB(a){if(typeof a=="number")return a
throw A.b(A.m(a,"num"))},
dC(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.m(a,"num"))},
cE(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.m(a,"num?"))},
cX(a){return typeof a=="string"},
bE(a){if(typeof a=="string")return a
throw A.b(A.m(a,"String"))},
dD(a){if(typeof a=="string")return a
if(a==null)return a
throw A.b(A.m(a,"String"))},
cG(a){if(typeof a=="string")return a
if(a==null)return a
throw A.b(A.m(a,"String?"))},
bM(a,b){var t,s,r
for(t="",s="",r=0;r<a.length;++r,s=", ")t+=s+A.n(a[r],b)
return t},
d_(a,b){var t,s,r,q,p,o,n=a.x,m=a.y
if(""===n)return"("+A.bM(m,b)+")"
t=m.length
s=n.split(",")
r=s.length-t
for(q="(",p="",o=0;o<t;++o,p=", "){q+=p
if(r===0)q+="{"
q+=A.n(m[o],b)
if(r>=0)q+=" "+s[r];++r}return q+"})"},
bH(a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
if(a5!=null){t=a5.length
if(a4==null)a4=A.bN([],u.s)
else a2=a4.length
s=a4.length
for(r=t;r>0;--r)B.d.A(a4,"T"+(s+r))
for(q=u.X,p=u._,o="<",n="",r=0;r<t;++r,n=a1){m=a4.length
l=m-1-r
if(!(l>=0))return A.ba(a4,l)
o=o+n+a4[l]
k=a5[r]
j=k.w
if(!(j===2||j===3||j===4||j===5||k===q))m=k===p
else m=!0
if(!m)o+=" extends "+A.n(k,a4)}o+=">"}else o=""
q=a3.x
i=a3.y
h=i.a
g=h.length
f=i.b
e=f.length
d=i.c
c=d.length
b=A.n(q,a4)
for(a="",a0="",r=0;r<g;++r,a0=a1)a+=a0+A.n(h[r],a4)
if(e>0){a+=a0+"["
for(a0="",r=0;r<e;++r,a0=a1)a+=a0+A.n(f[r],a4)
a+="]"}if(c>0){a+=a0+"{"
for(a0="",r=0;r<c;r+=3,a0=a1){a+=a0
if(d[r+1])a+="required "
a+=A.n(d[r+2],a4)+" "+d[r]}a+="}"}if(a2!=null){a4.toString
a4.length=a2}return o+"("+a+") => "+b},
n(a,b){var t,s,r,q,p,o,n,m=a.w
if(m===5)return"erased"
if(m===2)return"dynamic"
if(m===3)return"void"
if(m===1)return"Never"
if(m===4)return"any"
if(m===6)return A.n(a.x,b)
if(m===7){t=a.x
s=A.n(t,b)
r=t.w
return(r===12||r===13?"("+s+")":s)+"?"}if(m===8)return"FutureOr<"+A.n(a.x,b)+">"
if(m===9){q=A.d3(a.x)
p=a.y
return p.length>0?q+("<"+A.bM(p,b)+">"):q}if(m===11)return A.d_(a,b)
if(m===12)return A.bH(a,b,null)
if(m===13)return A.bH(a.x,b,a.y)
if(m===14){o=a.x
n=b.length
o=n-1-o
if(!(o>=0&&o<n))return A.ba(b,o)
return b[o]}return"?"},
d3(a){var t=v.mangledGlobalNames[a]
if(t!=null)return t
return"minified:"+a},
cD(a,b){var t=a.tR[b]
for(;typeof t=="string";)t=a.tR[t]
return t},
cC(a,b){var t,s,r,q,p,o=a.eT,n=o[b]
if(n==null)return A.av(a,b,!1)
else if(typeof n=="number"){t=n
s=A.a0(a,5,"#")
r=A.aR(t)
for(q=0;q<t;++q)r[q]=s
p=A.a_(a,b,r)
o[b]=p
return p}else return n},
cA(a,b){return A.bA(a.tR,b)},
cz(a,b){return A.bA(a.eT,b)},
av(a,b,c){var t,s=a.eC,r=s.get(b)
if(r!=null)return r
t=A.bu(A.bs(a,null,b,c))
s.set(b,t)
return t},
aQ(a,b,c){var t,s,r=b.z
if(r==null)r=b.z=new Map()
t=r.get(c)
if(t!=null)return t
s=A.bu(A.bs(a,b,c,!0))
r.set(c,s)
return s},
cB(a,b,c){var t,s,r,q=b.Q
if(q==null)q=b.Q=new Map()
t=c.as
s=q.get(t)
if(s!=null)return s
r=A.b1(a,b,c.w===10?c.y:[c])
q.set(t,r)
return r},
t(a,b){b.a=A.cO
b.b=A.cP
return b},
a0(a,b,c){var t,s,r=a.eC.get(c)
if(r!=null)return r
t=new A.q(null,null)
t.w=b
t.as=c
s=A.t(a,t)
a.eC.set(c,s)
return s},
bz(a,b,c){var t,s=b.as+"*",r=a.eC.get(s)
if(r!=null)return r
t=A.cx(a,b,s,c)
a.eC.set(s,t)
return t},
cx(a,b,c,d){var t,s,r
if(d){t=b.w
if(!A.v(b))s=b===u.P||b===u.T||t===7||t===6
else s=!0
if(s)return b}r=new A.q(null,null)
r.w=6
r.x=b
r.as=c
return A.t(a,r)},
b3(a,b,c){var t,s=b.as+"?",r=a.eC.get(s)
if(r!=null)return r
t=A.cw(a,b,s,c)
a.eC.set(s,t)
return t},
cw(a,b,c,d){var t,s,r,q
if(d){t=b.w
s=!0
if(!A.v(b))if(!(b===u.P||b===u.T))if(t!==7)s=t===8&&A.a3(b.x)
if(s)return b
else if(t===1||b===u.A)return u.P
else if(t===6){r=b.x
if(r.w===8&&A.a3(r.x))return r
else return A.bn(a,b)}}q=new A.q(null,null)
q.w=7
q.x=b
q.as=c
return A.t(a,q)},
bx(a,b,c){var t,s=b.as+"/",r=a.eC.get(s)
if(r!=null)return r
t=A.cu(a,b,s,c)
a.eC.set(s,t)
return t},
cu(a,b,c,d){var t,s
if(d){t=b.w
if(A.v(b)||b===u.K||b===u._)return b
else if(t===1)return A.a_(a,"bl",[b])
else if(b===u.P||b===u.T)return u.O}s=new A.q(null,null)
s.w=8
s.x=b
s.as=c
return A.t(a,s)},
cy(a,b){var t,s,r=""+b+"^",q=a.eC.get(r)
if(q!=null)return q
t=new A.q(null,null)
t.w=14
t.x=b
t.as=r
s=A.t(a,t)
a.eC.set(r,s)
return s},
Z(a){var t,s,r,q=a.length
for(t="",s="",r=0;r<q;++r,s=",")t+=s+a[r].as
return t},
ct(a){var t,s,r,q,p,o=a.length
for(t="",s="",r=0;r<o;r+=3,s=","){q=a[r]
p=a[r+1]?"!":":"
t+=s+q+p+a[r+2].as}return t},
a_(a,b,c){var t,s,r,q=b
if(c.length>0)q+="<"+A.Z(c)+">"
t=a.eC.get(q)
if(t!=null)return t
s=new A.q(null,null)
s.w=9
s.x=b
s.y=c
if(c.length>0)s.c=c[0]
s.as=q
r=A.t(a,s)
a.eC.set(q,r)
return r},
b1(a,b,c){var t,s,r,q,p,o
if(b.w===10){t=b.x
s=b.y.concat(c)}else{s=c
t=b}r=t.as+(";<"+A.Z(s)+">")
q=a.eC.get(r)
if(q!=null)return q
p=new A.q(null,null)
p.w=10
p.x=t
p.y=s
p.as=r
o=A.t(a,p)
a.eC.set(r,o)
return o},
by(a,b,c){var t,s,r="+"+(b+"("+A.Z(c)+")"),q=a.eC.get(r)
if(q!=null)return q
t=new A.q(null,null)
t.w=11
t.x=b
t.y=c
t.as=r
s=A.t(a,t)
a.eC.set(r,s)
return s},
bw(a,b,c){var t,s,r,q,p,o=b.as,n=c.a,m=n.length,l=c.b,k=l.length,j=c.c,i=j.length,h="("+A.Z(n)
if(k>0){t=m>0?",":""
h+=t+"["+A.Z(l)+"]"}if(i>0){t=m>0?",":""
h+=t+"{"+A.ct(j)+"}"}s=o+(h+")")
r=a.eC.get(s)
if(r!=null)return r
q=new A.q(null,null)
q.w=12
q.x=b
q.y=c
q.as=s
p=A.t(a,q)
a.eC.set(s,p)
return p},
b2(a,b,c,d){var t,s=b.as+("<"+A.Z(c)+">"),r=a.eC.get(s)
if(r!=null)return r
t=A.cv(a,b,c,s,d)
a.eC.set(s,t)
return t},
cv(a,b,c,d,e){var t,s,r,q,p,o,n,m
if(e){t=c.length
s=A.aR(t)
for(r=0,q=0;q<t;++q){p=c[q]
if(p.w===1){s[q]=p;++r}}if(r>0){o=A.A(a,b,s,0)
n=A.F(a,c,s,0)
return A.b2(a,o,n,c!==n)}}m=new A.q(null,null)
m.w=13
m.x=b
m.y=c
m.as=d
return A.t(a,m)},
bs(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
bu(a){var t,s,r,q,p,o,n,m=a.r,l=a.s
for(t=m.length,s=0;s<t;){r=m.charCodeAt(s)
if(r>=48&&r<=57)s=A.cn(s+1,r,m,l)
else if((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124)s=A.bt(a,s,m,l,!1)
else if(r===46)s=A.bt(a,s,m,l,!0)
else{++s
switch(r){case 44:break
case 58:l.push(!1)
break
case 33:l.push(!0)
break
case 59:l.push(A.z(a.u,a.e,l.pop()))
break
case 94:l.push(A.cy(a.u,l.pop()))
break
case 35:l.push(A.a0(a.u,5,"#"))
break
case 64:l.push(A.a0(a.u,2,"@"))
break
case 126:l.push(A.a0(a.u,3,"~"))
break
case 60:l.push(a.p)
a.p=l.length
break
case 62:A.cp(a,l)
break
case 38:A.co(a,l)
break
case 42:q=a.u
l.push(A.bz(q,A.z(q,a.e,l.pop()),a.n))
break
case 63:q=a.u
l.push(A.b3(q,A.z(q,a.e,l.pop()),a.n))
break
case 47:q=a.u
l.push(A.bx(q,A.z(q,a.e,l.pop()),a.n))
break
case 40:l.push(-3)
l.push(a.p)
a.p=l.length
break
case 41:A.cm(a,l)
break
case 91:l.push(a.p)
a.p=l.length
break
case 93:p=l.splice(a.p)
A.bv(a.u,a.e,p)
a.p=l.pop()
l.push(p)
l.push(-1)
break
case 123:l.push(a.p)
a.p=l.length
break
case 125:p=l.splice(a.p)
A.cr(a.u,a.e,p)
a.p=l.pop()
l.push(p)
l.push(-2)
break
case 43:o=m.indexOf("(",s)
l.push(m.substring(s,o))
l.push(-4)
l.push(a.p)
a.p=l.length
s=o+1
break
default:throw"Bad character "+r}}}n=l.pop()
return A.z(a.u,a.e,n)},
cn(a,b,c,d){var t,s,r=b-48
for(t=c.length;a<t;++a){s=c.charCodeAt(a)
if(!(s>=48&&s<=57))break
r=r*10+(s-48)}d.push(r)
return a},
bt(a,b,c,d,e){var t,s,r,q,p,o,n=b+1
for(t=c.length;n<t;++n){s=c.charCodeAt(n)
if(s===46){if(e)break
e=!0}else{if(!((((s|32)>>>0)-97&65535)<26||s===95||s===36||s===124))r=s>=48&&s<=57
else r=!0
if(!r)break}}q=c.substring(b,n)
if(e){t=a.u
p=a.e
if(p.w===10)p=p.x
o=A.cD(t,p.x)[q]
if(o==null)A.bY('No "'+q+'" in "'+A.cg(p)+'"')
d.push(A.aQ(t,p,o))}else d.push(q)
return n},
cp(a,b){var t,s=a.u,r=A.br(a,b),q=b.pop()
if(typeof q=="string")b.push(A.a_(s,q,r))
else{t=A.z(s,a.e,q)
switch(t.w){case 12:b.push(A.b2(s,t,r,a.n))
break
default:b.push(A.b1(s,t,r))
break}}},
cm(a,b){var t,s,r,q=a.u,p=b.pop(),o=null,n=null
if(typeof p=="number")switch(p){case-1:o=b.pop()
break
case-2:n=b.pop()
break
default:b.push(p)
break}else b.push(p)
t=A.br(a,b)
p=b.pop()
switch(p){case-3:p=b.pop()
if(o==null)o=q.sEA
if(n==null)n=q.sEA
s=A.z(q,a.e,p)
r=new A.at()
r.a=t
r.b=o
r.c=n
b.push(A.bw(q,s,r))
return
case-4:b.push(A.by(q,b.pop(),t))
return
default:throw A.b(A.a7("Unexpected state under `()`: "+A.T(p)))}},
co(a,b){var t=b.pop()
if(0===t){b.push(A.a0(a.u,1,"0&"))
return}if(1===t){b.push(A.a0(a.u,4,"1&"))
return}throw A.b(A.a7("Unexpected extended operation "+A.T(t)))},
br(a,b){var t=b.splice(a.p)
A.bv(a.u,a.e,t)
a.p=b.pop()
return t},
z(a,b,c){if(typeof c=="string")return A.a_(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.cq(a,b,c)}else return c},
bv(a,b,c){var t,s=c.length
for(t=0;t<s;++t)c[t]=A.z(a,b,c[t])},
cr(a,b,c){var t,s=c.length
for(t=2;t<s;t+=3)c[t]=A.z(a,b,c[t])},
cq(a,b,c){var t,s,r=b.w
if(r===10){if(c===0)return b.x
t=b.y
s=t.length
if(c<=s)return t[c-1]
c-=s
b=b.x
r=b.w}else if(c===0)return b
if(r!==9)throw A.b(A.a7("Indexed base must be an interface type"))
t=b.y
if(c<=t.length)return t[c-1]
throw A.b(A.a7("Bad index "+c+" for "+b.h(0)))},
de(a,b,c){var t,s=b.d
if(s==null)s=b.d=new Map()
t=s.get(c)
if(t==null){t=A.i(a,b,null,c,null,!1)?1:0
s.set(c,t)}if(0===t)return!1
if(1===t)return!0
return!0},
i(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!A.v(d))t=d===u._
else t=!0
if(t)return!0
s=b.w
if(s===4)return!0
if(A.v(b))return!1
t=b.w
if(t===1)return!0
r=s===14
if(r)if(A.i(a,c[b.x],c,d,e,!1))return!0
q=d.w
t=b===u.P||b===u.T
if(t){if(q===8)return A.i(a,b,c,d.x,e,!1)
return d===u.P||d===u.T||q===7||q===6}if(d===u.K){if(s===8)return A.i(a,b.x,c,d,e,!1)
if(s===6)return A.i(a,b.x,c,d,e,!1)
return s!==7}if(s===6)return A.i(a,b.x,c,d,e,!1)
if(q===6){t=A.bn(a,d)
return A.i(a,b,c,t,e,!1)}if(s===8){if(!A.i(a,b.x,c,d,e,!1))return!1
return A.i(a,A.b0(a,b),c,d,e,!1)}if(s===7){t=A.i(a,u.P,c,d,e,!1)
return t&&A.i(a,b.x,c,d,e,!1)}if(q===8){if(A.i(a,b,c,d.x,e,!1))return!0
return A.i(a,b,c,A.b0(a,d),e,!1)}if(q===7){t=A.i(a,b,c,u.P,e,!1)
return t||A.i(a,b,c,d.x,e,!1)}if(r)return!1
t=s!==12
if((!t||s===13)&&d===u.Z)return!0
p=s===11
if(p&&d===u.L)return!0
if(q===13){if(b===u.g)return!0
if(s!==13)return!1
o=b.y
n=d.y
m=o.length
if(m!==n.length)return!1
c=c==null?o:o.concat(c)
e=e==null?n:n.concat(e)
for(l=0;l<m;++l){k=o[l]
j=n[l]
if(!A.i(a,k,c,j,e,!1)||!A.i(a,j,e,k,c,!1))return!1}return A.bJ(a,b.x,c,d.x,e,!1)}if(q===12){if(b===u.g)return!0
if(t)return!1
return A.bJ(a,b,c,d,e,!1)}if(s===9){if(q!==9)return!1
return A.cS(a,b,c,d,e,!1)}if(p&&q===11)return A.cW(a,b,c,d,e,!1)
return!1},
bJ(a2,a3,a4,a5,a6,a7){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
if(!A.i(a2,a3.x,a4,a5.x,a6,!1))return!1
t=a3.y
s=a5.y
r=t.a
q=s.a
p=r.length
o=q.length
if(p>o)return!1
n=o-p
m=t.b
l=s.b
k=m.length
j=l.length
if(p+k<o+j)return!1
for(i=0;i<p;++i){h=r[i]
if(!A.i(a2,q[i],a6,h,a4,!1))return!1}for(i=0;i<n;++i){h=m[i]
if(!A.i(a2,q[p+i],a6,h,a4,!1))return!1}for(i=0;i<j;++i){h=m[n+i]
if(!A.i(a2,l[i],a6,h,a4,!1))return!1}g=t.c
f=s.c
e=g.length
d=f.length
for(c=0,b=0;b<d;b+=3){a=f[b]
for(;!0;){if(c>=e)return!1
a0=g[c]
c+=3
if(a<a0)return!1
a1=g[c-2]
if(a0<a){if(a1)return!1
continue}h=f[b+1]
if(a1&&!h)return!1
h=g[c-1]
if(!A.i(a2,f[b+2],a6,h,a4,!1))return!1
break}}for(;c<e;){if(g[c+1])return!1
c+=3}return!0},
cS(a,b,c,d,e,f){var t,s,r,q,p,o=b.x,n=d.x
for(;o!==n;){t=a.tR[o]
if(t==null)return!1
if(typeof t=="string"){o=t
continue}s=t[n]
if(s==null)return!1
r=s.length
q=r>0?new Array(r):v.typeUniverse.sEA
for(p=0;p<r;++p)q[p]=A.aQ(a,b,s[p])
return A.bB(a,q,null,c,d.y,e,!1)}return A.bB(a,b.y,null,c,d.y,e,!1)},
bB(a,b,c,d,e,f,g){var t,s=b.length
for(t=0;t<s;++t)if(!A.i(a,b[t],d,e[t],f,!1))return!1
return!0},
cW(a,b,c,d,e,f){var t,s=b.y,r=d.y,q=s.length
if(q!==r.length)return!1
if(b.x!==d.x)return!1
for(t=0;t<q;++t)if(!A.i(a,s[t],c,r[t],e,!1))return!1
return!0},
a3(a){var t=a.w,s=!0
if(!(a===u.P||a===u.T))if(!A.v(a))if(t!==7)if(!(t===6&&A.a3(a.x)))s=t===8&&A.a3(a.x)
return s},
dd(a){var t
if(!A.v(a))t=a===u._
else t=!0
return t},
v(a){var t=a.w
return t===2||t===3||t===4||t===5||a===u.X},
bA(a,b){var t,s,r=Object.keys(b),q=r.length
for(t=0;t<q;++t){s=r[t]
a[s]=b[s]}},
aR(a){return a>0?new Array(a):v.typeUniverse.sEA},
q:function q(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
at:function at(){this.c=this.b=this.a=null},
aP:function aP(a){this.a=a},
aN:function aN(){},
au:function au(a){this.a=a},
e:function e(){},
ch(a,b,c){var t=J.c0(b)
if(!t.n())return a
if(c.length===0){do a+=A.T(t.gm())
while(t.n())}else{a+=A.T(t.gm())
for(;t.n();)a=a+c+A.T(t.gm())}return a},
aA(a){if(typeof a=="number"||A.b5(a)||a==null)return J.a5(a)
if(typeof a=="string")return JSON.stringify(a)
return A.cf(a)},
a7(a){return new A.ax(a)},
be(a){return new A.H(!1,null,null,a)},
bp(a){return new A.aK(a)},
bk(a){return new A.ay(a)},
bm(a,b,c){var t,s
if(A.df(a))return b+"..."+c
t=new A.aI(b)
B.d.A($.a4,a)
try{s=t
s.a=A.ch(s.a,a,", ")}finally{if(0>=$.a4.length)return A.ba($.a4,-1)
$.a4.pop()}t.a+=c
s=t.a
return s.charCodeAt(0)==0?s:s},
az:function az(){},
ax:function ax(a){this.a=a},
aJ:function aJ(){},
H:function H(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aF:function aF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aB:function aB(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
aL:function aL(a){this.a=a},
aK:function aK(a){this.a=a},
ay:function ay(a){this.a=a},
S:function S(){},
k:function k(){},
aI:function aI(a){this.a=a},
dh(){var t,s=u.m,r=A.bS("ham-menu",s)
s=new A.aY(r,A.bS("hammed-nav",s))
if(typeof s=="function")A.bY(A.be("Attempting to rewrap a JS function."))
t=function(a,b){return function(){return a(b)}}(A.cI,s)
t[$.bc()]=s
r.addEventListener("click",t)},
aY:function aY(a,b){this.a=a
this.b=b},
dl(a){A.bZ(new A.aD("Field '"+a+"' has been assigned during initialization."),new Error())},
cI(a){return u.Z.a(a).$0()},
bS(a,b){return b.a(u.z.a(u.m.a(self.document).getElementById(a)))}},B={}
var w=[A,J,B]
var $={}
A.b_.prototype={}
J.aa.prototype={
h(a){return"Instance of '"+A.aE(a)+"'"},
gi(a){return A.D(A.b4(this))}}
J.ab.prototype={
h(a){return String(a)},
gi(a){return A.D(u.y)},
$ic:1,
$ib6:1}
J.J.prototype={
h(a){return"null"},
$ic:1}
J.M.prototype={$ij:1}
J.y.prototype={
h(a){return String(a)}}
J.aq.prototype={}
J.U.prototype={}
J.x.prototype={
h(a){var t=a[$.bc()]
if(t==null)return this.C(a)
return"JavaScript function for "+J.a5(t)},
$iB:1}
J.L.prototype={
h(a){return String(a)}}
J.N.prototype={
h(a){return String(a)}}
J.p.prototype={
A(a,b){A.aS(a).c.a(b)
a.$flags&1&&A.dm(a,29)
a.push(b)},
h(a){return A.bm(a,"[","]")},
gB(a){return new J.a6(a,a.length,A.aS(a).l("a6<1>"))},
gj(a){return a.length},
$ih:1,
$id:1}
J.aC.prototype={}
J.a6.prototype={
gm(){var t=this.d
return t==null?this.$ti.c.a(t):t},
n(){var t,s=this,r=s.a,q=r.length
if(s.b!==q){r=A.dk(r)
throw A.b(r)}t=s.c
if(t>=q){s.sv(null)
return!1}s.sv(r[t]);++s.c
return!0},
sv(a){this.d=this.$ti.l("1?").a(a)}}
J.ae.prototype={
h(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gi(a){return A.D(u.H)},
$if:1}
J.ac.prototype={
gi(a){return A.D(u.S)},
$ic:1,
$ia:1}
J.ad.prototype={
gi(a){return A.D(u.i)},
$ic:1}
J.K.prototype={
h(a){return a},
gi(a){return A.D(u.N)},
gj(a){return a.length},
$ic:1,
$iaH:1}
A.aD.prototype={
h(a){return"LateInitializationError: "+this.a}}
A.af.prototype={
gm(){var t=this.d
return t==null?this.$ti.c.a(t):t},
n(){var t,s=this,r=s.a,q=J.bT(r),p=q.gj(r)
if(s.b!==p)throw A.b(A.bk(r))
t=s.c
if(t>=p){s.su(null)
return!1}s.su(q.k(r,t));++s.c
return!0},
su(a){this.d=this.$ti.l("1?").a(a)}}
A.l.prototype={}
A.w.prototype={
h(a){var t=this.constructor,s=t==null?null:t.name
return"Closure '"+A.c_(s==null?"unknown":s)+"'"},
$iB:1,
gD(){return this},
$C:"$1",
$R:1,
$D:null}
A.a8.prototype={$C:"$0",$R:0}
A.a9.prototype={$C:"$2",$R:2}
A.as.prototype={}
A.ar.prototype={
h(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+A.c_(t)+"'"}}
A.I.prototype={
h(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.aE(this.a)+"'")}}
A.aM.prototype={
h(a){return"Reading static variable '"+this.a+"' during its initialization"}}
A.aG.prototype={
h(a){return"RuntimeError: "+this.a}}
A.aU.prototype={
$1(a){return this.a(a)}}
A.aV.prototype={
$2(a,b){return this.a(a,b)}}
A.aW.prototype={
$1(a){return this.a(A.bE(a))}}
A.ag.prototype={
gi(a){return B.p},
$ic:1}
A.Q.prototype={}
A.ah.prototype={
gi(a){return B.q},
$ic:1}
A.E.prototype={
gj(a){return a.length},
$io:1}
A.O.prototype={
k(a,b){A.C(b,a,a.length)
return a[b]},
$ih:1,
$id:1}
A.P.prototype={$ih:1,$id:1}
A.ai.prototype={
gi(a){return B.r},
$ic:1}
A.aj.prototype={
gi(a){return B.t},
$ic:1}
A.ak.prototype={
gi(a){return B.u},
k(a,b){A.C(b,a,a.length)
return a[b]},
$ic:1}
A.al.prototype={
gi(a){return B.v},
k(a,b){A.C(b,a,a.length)
return a[b]},
$ic:1}
A.am.prototype={
gi(a){return B.w},
k(a,b){A.C(b,a,a.length)
return a[b]},
$ic:1}
A.an.prototype={
gi(a){return B.x},
k(a,b){A.C(b,a,a.length)
return a[b]},
$ic:1}
A.ao.prototype={
gi(a){return B.y},
k(a,b){A.C(b,a,a.length)
return a[b]},
$ic:1}
A.R.prototype={
gi(a){return B.z},
gj(a){return a.length},
k(a,b){A.C(b,a,a.length)
return a[b]},
$ic:1}
A.ap.prototype={
gi(a){return B.A},
gj(a){return a.length},
k(a,b){A.C(b,a,a.length)
return a[b]},
$ic:1}
A.V.prototype={}
A.W.prototype={}
A.X.prototype={}
A.Y.prototype={}
A.q.prototype={
l(a){return A.aQ(v.typeUniverse,this,a)},
E(a){return A.cB(v.typeUniverse,this,a)}}
A.at.prototype={}
A.aP.prototype={
h(a){return A.n(this.a,null)}}
A.aN.prototype={
h(a){return this.a}}
A.au.prototype={}
A.e.prototype={
gB(a){return new A.af(a,this.gj(a),A.a2(a).l("af<e.E>"))},
h(a){return A.bm(a,"[","]")}}
A.az.prototype={}
A.ax.prototype={
h(a){var t=this.a
if(t!=null)return"Assertion failed: "+A.aA(t)
return"Assertion failed"}}
A.aJ.prototype={}
A.H.prototype={
gq(){return"Invalid argument"+(!this.a?"(s)":"")},
gp(){return""},
h(a){var t=this,s=t.c,r=s==null?"":" ("+s+")",q=t.d,p=q==null?"":": "+q,o=t.gq()+r+p
if(!t.a)return o
return o+t.gp()+": "+A.aA(t.gt())},
gt(){return this.b}}
A.aF.prototype={
gt(){return A.cE(this.b)},
gq(){return"RangeError"},
gp(){return""}}
A.aB.prototype={
gt(){return A.bD(this.b)},
gq(){return"RangeError"},
gp(){if(A.bD(this.b)<0)return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+t},
gj(a){return this.f}}
A.aL.prototype={
h(a){return"Unsupported operation: "+this.a}}
A.aK.prototype={
h(a){return"UnimplementedError: "+this.a}}
A.ay.prototype={
h(a){return"Concurrent modification during iteration: "+A.aA(this.a)+"."}}
A.S.prototype={
h(a){return"null"}}
A.k.prototype={$ik:1,
h(a){return"Instance of '"+A.aE(this)+"'"},
gi(a){return A.d7(this)},
toString(){return this.h(this)}}
A.aI.prototype={
gj(a){return this.a.length},
h(a){var t=this.a
return t.charCodeAt(0)==0?t:t}}
A.aY.prototype={
$0(){var t=u.m
A.bC(t.a(this.a.classList).toggle("active"))
A.bC(t.a(this.b.classList).toggle("active"))}};(function aliases(){var t=J.y.prototype
t.C=t.h})();(function inheritance(){var t=hunkHelpers.mixin,s=hunkHelpers.inherit,r=hunkHelpers.inheritMany
s(A.k,null)
r(A.k,[A.b_,J.aa,J.a6,A.az,A.af,A.l,A.w,A.q,A.at,A.aP,A.e,A.S,A.aI])
r(J.aa,[J.ab,J.J,J.M,J.L,J.N,J.ae,J.K])
r(J.M,[J.y,J.p,A.ag,A.Q])
r(J.y,[J.aq,J.U,J.x])
s(J.aC,J.p)
r(J.ae,[J.ac,J.ad])
r(A.az,[A.aD,A.aM,A.aG,A.aN,A.ax,A.aJ,A.H,A.aL,A.aK,A.ay])
r(A.w,[A.a8,A.a9,A.as,A.aU,A.aW])
r(A.as,[A.ar,A.I])
s(A.aV,A.a9)
r(A.Q,[A.ah,A.E])
r(A.E,[A.V,A.X])
s(A.W,A.V)
s(A.O,A.W)
s(A.Y,A.X)
s(A.P,A.Y)
r(A.O,[A.ai,A.aj])
r(A.P,[A.ak,A.al,A.am,A.an,A.ao,A.R,A.ap])
s(A.au,A.aN)
r(A.H,[A.aF,A.aB])
s(A.aY,A.a8)
t(A.V,A.e)
t(A.W,A.l)
t(A.X,A.e)
t(A.Y,A.l)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{a:"int",f:"double",dj:"num",aH:"String",b6:"bool",S:"Null",d:"List",k:"Object",ds:"Map"},mangledNames:{},types:[],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti")}
A.cA(v.typeUniverse,JSON.parse('{"aq":"y","U":"y","x":"y","ab":{"b6":[],"c":[]},"J":{"c":[]},"M":{"j":[]},"y":{"j":[]},"p":{"d":["1"],"j":[],"h":["1"]},"aC":{"p":["1"],"d":["1"],"j":[],"h":["1"]},"ae":{"f":[]},"ac":{"f":[],"a":[],"c":[]},"ad":{"f":[],"c":[]},"K":{"aH":[],"c":[]},"w":{"B":[]},"a8":{"B":[]},"a9":{"B":[]},"as":{"B":[]},"ar":{"B":[]},"I":{"B":[]},"ag":{"j":[],"c":[]},"Q":{"j":[]},"ah":{"j":[],"c":[]},"E":{"o":["1"],"j":[]},"O":{"e":["f"],"d":["f"],"o":["f"],"j":[],"h":["f"],"l":["f"]},"P":{"e":["a"],"d":["a"],"o":["a"],"j":[],"h":["a"],"l":["a"]},"ai":{"e":["f"],"d":["f"],"o":["f"],"j":[],"h":["f"],"l":["f"],"c":[],"e.E":"f"},"aj":{"e":["f"],"d":["f"],"o":["f"],"j":[],"h":["f"],"l":["f"],"c":[],"e.E":"f"},"ak":{"e":["a"],"d":["a"],"o":["a"],"j":[],"h":["a"],"l":["a"],"c":[],"e.E":"a"},"al":{"e":["a"],"d":["a"],"o":["a"],"j":[],"h":["a"],"l":["a"],"c":[],"e.E":"a"},"am":{"e":["a"],"d":["a"],"o":["a"],"j":[],"h":["a"],"l":["a"],"c":[],"e.E":"a"},"an":{"e":["a"],"d":["a"],"o":["a"],"j":[],"h":["a"],"l":["a"],"c":[],"e.E":"a"},"ao":{"e":["a"],"d":["a"],"o":["a"],"j":[],"h":["a"],"l":["a"],"c":[],"e.E":"a"},"R":{"e":["a"],"d":["a"],"o":["a"],"j":[],"h":["a"],"l":["a"],"c":[],"e.E":"a"},"ap":{"e":["a"],"d":["a"],"o":["a"],"j":[],"h":["a"],"l":["a"],"c":[],"e.E":"a"},"cd":{"d":["a"],"h":["a"]},"cl":{"d":["a"],"h":["a"]},"ck":{"d":["a"],"h":["a"]},"cb":{"d":["a"],"h":["a"]},"ci":{"d":["a"],"h":["a"]},"cc":{"d":["a"],"h":["a"]},"cj":{"d":["a"],"h":["a"]},"c9":{"d":["f"],"h":["f"]},"ca":{"d":["f"],"h":["f"]}}'))
A.cz(v.typeUniverse,JSON.parse('{"E":1}'))
var u=(function rtii(){var t=A.bR
return{Z:t("B"),s:t("p<aH>"),b:t("p<@>"),T:t("J"),m:t("j"),g:t("x"),p:t("o<@>"),j:t("d<@>"),P:t("S"),K:t("k"),L:t("dt"),N:t("aH"),R:t("c"),o:t("U"),y:t("b6"),i:t("f"),S:t("a"),A:t("0&*"),_:t("k*"),O:t("bl<S>?"),z:t("j?"),X:t("k?"),H:t("dj")}})();(function constants(){B.m=J.aa.prototype
B.d=J.p.prototype
B.n=J.x.prototype
B.o=J.M.prototype
B.e=J.aq.prototype
B.a=J.U.prototype
B.b=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.f=function() {
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
B.l=function(getTagFallback) {
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
B.h=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.k=function(hooks) {
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
B.j=function(hooks) {
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
B.i=function(hooks) {
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
B.c=function(hooks) { return hooks; }

B.p=A.r("dp")
B.q=A.r("dq")
B.r=A.r("c9")
B.t=A.r("ca")
B.u=A.r("cb")
B.v=A.r("cc")
B.w=A.r("cd")
B.x=A.r("ci")
B.y=A.r("cj")
B.z=A.r("ck")
B.A=A.r("cl")})();(function staticFields(){$.aO=null
$.a4=A.bN([],A.bR("p<k>"))
$.bh=null
$.bg=null
$.bU=null
$.bO=null
$.bX=null
$.aT=null
$.aX=null
$.b9=null})();(function lazyInitializers(){var t=hunkHelpers.lazyFinal
t($,"dr","bc",()=>A.d6("_$dart_dartClosure"))})();(function nativeSupport(){!function(){var t=function(a){var n={}
n[a]=1
return Object.keys(hunkHelpers.convertToFastObject(n))[0]}
v.getIsolateTag=function(a){return t("___dart_"+a+v.isolateTag)}
var s="___dart_isolate_tags_"
var r=Object[s]||(Object[s]=Object.create(null))
var q="_ZxYxX"
for(var p=0;;p++){var o=t(q+"_"+p+"_")
if(!(o in r)){r[o]=1
v.isolateTag=o
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:A.ag,ArrayBufferView:A.Q,DataView:A.ah,Float32Array:A.ai,Float64Array:A.aj,Int16Array:A.ak,Int32Array:A.al,Int8Array:A.am,Uint16Array:A.an,Uint32Array:A.ao,Uint8ClampedArray:A.R,CanvasPixelArray:A.R,Uint8Array:A.ap})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.E.$nativeSuperclassTag="ArrayBufferView"
A.V.$nativeSuperclassTag="ArrayBufferView"
A.W.$nativeSuperclassTag="ArrayBufferView"
A.O.$nativeSuperclassTag="ArrayBufferView"
A.X.$nativeSuperclassTag="ArrayBufferView"
A.Y.$nativeSuperclassTag="ArrayBufferView"
A.P.$nativeSuperclassTag="ArrayBufferView"})()
Function.prototype.$0=function(){return this()}
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r){t[r].removeEventListener("load",onLoad,false)}a(b.target)}for(var s=0;s<t.length;++s){t[s].addEventListener("load",onLoad,false)}})(function(a){v.currentScript=a
var t=A.dh
if(typeof dartMainRunner==="function"){dartMainRunner(t,[])}else{t([])}})})()
//# sourceMappingURL=main.dart.js.map
