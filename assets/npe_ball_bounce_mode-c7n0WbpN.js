import{v as t,N as k}from"./index-AM_KDpRB.js";const D=.06,B={config:{supports_line_thickness:!1,npe:!0,override_grid:"Glove v12c",force_hand_preview:!0},onDeactivate(s){const c=s.modes.npe_ball_bounce;c.sequence=[],c.game_state=void 0},renderCamera({state:s,setState:c,ctx:e,size:_,hand_center:h,hand_mirrored:a,hand_rotation:r}){const i=s.modes.npe_ball_bounce;_[0]!==0&&_[1]!==0&&(i.game_info??={hand_center:h,hand_mirrored:a,hand_rotation:r,size:_,ctx:e},i.game_info.hand_center=h,i.game_info.ctx=e,i.game_info.hand_mirrored=a,i.game_info.hand_rotation=r,i.game_state??=G(s,c,i.game_info),i.game_state.next())},sequencer:function*(s,c){const e=s.modes.npe_ball_bounce,_=e.sequence;e.sequence=[],yield _}};function*G(s,c,e){const _=s.modes.npe_ball_bounce,h=Math.min(e.size[0],e.size[1]),a=e.ctx,r=D*h,i=r*2;let l=t.div(e.size,[2,2]),n=[0,0],M=!1,x=Date.now();for(;;){yield;let y=Date.now();const q=(y-x)/1e3;x=y,e.hand_center!=null&&(a.strokeStyle="red",a.lineWidth=h/100,a.beginPath(),a.arc(...e.hand_center,i,0,2*Math.PI),a.stroke()),a.fillStyle="red",a.beginPath(),a.arc(...l,r,0,2*Math.PI),a.fill();let I=!1;if(e.hand_center!=null&&t.distance(e.hand_center,l)<r+i){I=!0;const f=t.normalize(t.sub(l,e.hand_center));if(n=t.mul(f,[h,h]),!M){const b=[],z=k(s);let u=[1/0,1/0],p=[-1/0,-1/0];for(let o=0;o<z.max_pts;o++){const d=z.ptCenter(o);b.push({pos:d,index:o}),u=[Math.min(u[0],d[0]),Math.min(u[1],d[1])],p=[Math.max(p[0],d[0]),Math.max(p[1],d[1])]}let m=t.add(u,t.div(t.sub(p,u),[2,2]));const w=t.sub(p,u);m=t.add(m,t.mul(t.rotateRad([f[0]*(e.hand_mirrored?-1:1),f[1]],e.hand_rotation*(e.hand_mirrored?1:-1)),t.div(w,[2,2]))),b.sort((o,d)=>{const v=Math.sqrt((o.pos[0]-m[0])**2+(o.pos[1]-m[1])**2),g=Math.sqrt((d.pos[0]-m[0])**2+(d.pos[1]-m[1])**2);return v-g});const P=b.flatMap((o,d,v)=>[o.index,{delay_ms:1/v.length*200}]);for(const o of P)_.sequence.push(o);s.play=!1,c(),s.play=!0,s.repeat=!1,c()}}M=I,l[0]<r&&(n=[Math.abs(n[0]),n[1]]),l[1]<r&&(n=[n[0],Math.abs(n[1])]),l[0]>e.size[0]-r&&(n=[-Math.abs(n[0]),n[1]]),l[1]>e.size[1]-r&&(n=[n[0],-Math.abs(n[1])]),l=t.add(l,t.mul(n,[q,q]))}}export{B as default};