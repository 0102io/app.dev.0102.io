import{e as f,y as w,A as z,E as k,D as C,b as o,J as A,aD as _,K as $,L as P,N as D,aE as g,R as L,G as u,x as q,Z as y,az as E,ae as G,B as M,C as I,as as R,a0 as J,a9 as O,ax as x,a7 as b,a4 as T,a1 as Z,ad as j,ac as H}from"./index-AM_KDpRB.js";import{r as K}from"./render_shape-X8fT00Gq.js";var U=u('<div class="flex pt-4 gap-4 max-w-4xl mx-auto"><div class=flex-1><input placeholder="Type Here"></div><button>Tap!'),W=u("<div>Delay Between Letters"),F=u("<div>Delay Between Words"),Q=u("<div>Sequence Length");function d(t,a){return t.shapes[a]??t.shapes[a.toLowerCase()]??t.shapes[a.toUpperCase()]??null}const te={config:{supports_line_thickness:!0,npe:!0},topPanel(){const{state:t,setState:a}=f(y),e=()=>t().modes.text_to_tap,s=w(()=>t().play);return(()=>{var r=U(),l=r.firstChild,n=l.firstChild,c=l.nextSibling;return n.addEventListener("keypress",i=>{i.key==="Enter"&&(i.preventDefault(),t().play=!1,a(),t().play=!0,t().repeat=!1,a())}),n.$$input=i=>{e().message=i.currentTarget.value,a()},n.addEventListener("focus",i=>{e().is_hidden=!1,a()}),z(i=>{setTimeout(()=>i.focus(),100);const B=w(()=>e().message);let p=0;M(()=>{const N=B(),v=p+1;p=v,I(()=>{const S=e().alphabet;S!=null&&R(S).then(V=>{if(p!==v)return;const h=new Set;for(const m of[...N]){if(m===" ")continue;d(V,m)==null&&h.add(m)}h.size>0?i.setCustomValidity("Characters "+JSON.stringify([...h].sort())+" are not supported in this patternset."):i.setCustomValidity("")})})})},n),k(n,"invalid:border-red-500 invalid:shadow-red-500 w-full rounded-md text-xl h-10 p-2 "+E),c.$$click=()=>{s()?(t().play=!1,a()):(t().play=!0,a())},k(c,"rounded-md bg-white p-2 px-4 h-10 text-xl flex items-center "+E),C(()=>G(n,"type",e().is_hidden?"password":"text")),C(()=>n.value=e().message),r})()},sidePanel(){const{state:t,setState:a}=f(y),e=()=>t().modes.text_to_tap;return[o(T,{collapsible:"Text to Tap",get children(){return[o(J,{filter:"text",get shapeset(){return e().alphabet??null},setShapeset:s=>{e().alphabet=s??void 0,a()}}),o(O,{}),o(x,{get children(){return[W(),o(b,{unit:"ms",decimals:0,step:1,min:0,max:1e5,get value(){return e().letter_delay_ms},setValue:s=>{e().letter_delay_ms=s,a()}})]}}),o(x,{get children(){return[F(),o(b,{unit:"ms",decimals:0,step:1,min:0,max:1e5,get value(){return e().word_delay_ms},setValue:s=>{e().word_delay_ms=s,a()}})]}})]}}),o(T,{collapsible:"Random Sequences",defaultClosed:!0,get children(){return[o(x,{get children(){return[Q(),o(b,{decimals:0,step:1,min:1,max:20,get value(){return e().random_chars_length},setValue:s=>{e().random_chars_length=s,a()}})]}}),o(Z,{onClick:async()=>{const s=await R(e().alphabet??""),r=Object.keys(s.shapes).filter(n=>n.match(/^[a-zA-Z0-9]$/));if(r.length===0)return g("No letters","Alphabet "+e().alphabet+" is empty.");let l="";for(let n=0;n<e().random_chars_length;n++)l+=r[Math.random()*r.length|0];e().message=l,e().is_hidden=!0,a(),g("Ready","Phrase generated")},icon:"ifl",label:"Generate"})]}})]},dockPanel(){const{state:t,setState:a}=f(y),e=()=>t().modes.text_to_tap;return o(H,{vertical:!0,get children(){return o(j,{get dr_tools_active(){return e().tool==="define_rect"},setDrToolsActive:()=>{e().tool=e().tool==null?"define_rect":null,a()}})}})},render({state:t,imev:a,frame:e}){const s=t.modes.text_to_tap,{ctx:r}=a;if(A(t,e,a,{enable_resize:s.tool==="define_rect"}),s.alphabet==null)return[];const l=_(s.alphabet);if(l==null)return[];const n=[...s.message],c=t.play?s.current_playing_letter:s.is_hidden?null:n[n.length-1];if(c==null)return[];const i=d(l,c);if(i==null)return[];K(r,t,e,i.strokes,t.define_rect)},previewer(t){const a=t.modes.text_to_tap;if(a.is_hidden)return[];if(a.alphabet==null)return[];const e=_(a.alphabet);if(e==null)return[];const s=[...a.message],r=s[s.length-1];if(r==null)return[];const l=d(e,r);return l==null?[]:$(t,l.strokes,P(t.define_rect,{grid:D(t)}))},sequencer:function*(t,a){const e=t.modes.text_to_tap;if(e.alphabet==null)return;const s=_(e.alphabet);if(s!=null)for(const r of e.message){e.current_playing_letter=r;const l=r===" "?"Space":r,n=d(s,l);n==null&&l==="Space"?yield{delay:e.word_delay_ms}:n!=null?yield $(t,n.strokes,P(t.define_rect,{grid:D(t)})):g("Missing Letter","Character `"+l+"` is not defined in the chosen patternset "+L(e.alphabet).name+" ("+L(e.alphabet).from+")"),yield{delay:e.letter_delay_ms}}}};q(["input","click"]);export{te as default};
