import{bd as _,ay as b,V as k,be as f,bf as p,bg as j,bh as y}from"./index-AM_KDpRB.js";const i=new Worker(new URL("/app-dev/assets/obj_det_models-HfUGCnUw.js",import.meta.url),{type:"classic"});let h=!1;const W=new Promise((e,t)=>i.addEventListener("message",r=>{r.data[0]==="ready"&&e(),r.data[0]==="ready-error"&&t(new Error(r.data[1]))}));W.then(()=>{h=!0}).catch(e=>{throw _(e.toString()),b||k(e),e});let o=!1,v={objects:[],handedness:[],hands:[],face:null},a=new OffscreenCanvas(0,0),l=a.getContext("2d",{willReadFrequently:!0}),d=null;function H(e,t){if(f(!0),d!=null&&clearTimeout(d),d=setTimeout(()=>{d=null,f(!1)}),!h||o||t.videoWidth===0||t.videoHeight===0)return;a.width!=t.videoWidth&&(a.width=t.videoWidth),a.height!=t.videoHeight&&(a.height=t.videoHeight),l.drawImage(t,0,0);const r=l.getImageData(0,0,a.width,a.height),s=new Set;if(e.active_mode?.tag==="object_detection")for(const n of e.modes.object_detection.detect)s.add(n);p(e)&&s.add("hand");const c=n=>s.has(n)?(s.delete(n),!0):!1,m=c("hand"),w=c("face"),g=s.size>0;o=!0,i.postMessage(["frame",{enable_object_detection:g,enable_hand_detection:m,enable_face_detection:w},{currentTime:t.currentTime,imgdata:r}],[r.data.buffer])}let u=new j;i.addEventListener("message",e=>{e.data[0]==="frame-result"&&(v=e.data[1],o=!1,u.onFrame(),y(u.getFramerate()))});export{v as d,H as u};
