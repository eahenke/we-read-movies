(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{Bs0v:function(e,n,t){e.exports={volumeContainer:"volume-control-module--volume-container--yphC5",volumeIcon:"volume-control-module--volume-icon--3rDhR"}},FmcF:function(e,n,t){e.exports={audioPlayer:"audio-player-module--audio-player--1dIA7",playerContainer:"audio-player-module--player-container--1DVRL",playButton:"audio-player-module--play-button--1N0E0",player:"audio-player-module--player--3-iQp",upperControls:"audio-player-module--upper-controls--3jDnc",lowerControls:"audio-player-module--lower-controls--1sq_6",time:"audio-player-module--time--24zJb"}},NVgm:function(e,n,t){e.exports={divider:"episode-title-module--divider--7k1Dg"}},NeF7:function(e,n,t){"use strict";var r=t("q1tI"),a=t.n(r),o=t("QmAe"),u=t("NVgm"),i=t.n(u),c=function(e){var n=e.num,t=e.title;return a.a.createElement(a.a.Fragment,null,a.a.createElement("span",null,Object(o.a)(n)),a.a.createElement("span",{className:i.a.divider}," | "),a.a.createElement("span",null,t))};n.a=c},"Q/sZ":function(e,n,t){e.exports={progress:"progress-module--progress--1jLFk",progressMd:"progress-module--progress-md--28vNU",progressSm:"progress-module--progress-sm--1YGmt",progressContainer:"progress-module--progress-container--FIbQu",preview:"progress-module--preview--oKHiq"}},"e/+h":function(e,n,t){e.exports={icon:"play-pause-button-module--icon--2FgoX"}},r9CX:function(e,n,t){"use strict";var r=t("q1tI"),a=t.n(r),o=t("TSYQ"),u=t.n(o);t("rGqo"),t("rE2o"),t("VRzm"),t("Btvt"),t("HAE/"),t("ioFf"),t("V+eJ"),t("91GP"),t("hHhE"),t("/SS/");var i=function(){return(i=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var a in n=arguments[t])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e}).apply(this,arguments)};var c=function(e){void 0===e&&(e={});var n=Object(r.useState)(e),t=n[0],a=n[1];return[t,Object(r.useCallback)((function(e){a((function(n){return Object.assign({},n,e instanceof Function?e(n):e)}))}),[a])]},l=function(e){for(var n=[],t=0;t<e.length;t++)n.push({start:e.start(t),end:e.end(t)});return n},s=function(e){return function(n){var t,a;a=r.isValidElement(n)?(t=n).props:n;var o=c({buffered:[],time:0,duration:0,paused:!0,muted:!1,volume:1}),u=o[0],s=o[1],m=Object(r.useRef)(null),d=function(e,n){return function(t){try{n&&n(t)}finally{e&&e(t)}}},p=function(){return s({paused:!1})},v=function(){return s({paused:!0})},f=function(){var e=m.current;e&&s({muted:e.muted,volume:e.volume})},g=function(){var e=m.current;if(e){var n=e.duration,t=e.buffered;s({duration:n,buffered:l(t)})}},E=function(){var e=m.current;e&&s({time:e.currentTime})},h=function(){var e=m.current;e&&s({buffered:l(e.buffered)})};t=t?r.cloneElement(t,i(i({controls:!1},a),{ref:m,onPlay:d(a.onPlay,p),onPause:d(a.onPause,v),onVolumeChange:d(a.onVolumeChange,f),onDurationChange:d(a.onDurationChange,g),onTimeUpdate:d(a.onTimeUpdate,E),onProgress:d(a.onProgress,h)})):r.createElement(e,i(i({controls:!1},a),{ref:m,onPlay:d(a.onPlay,p),onPause:d(a.onPause,v),onVolumeChange:d(a.onVolumeChange,f),onDurationChange:d(a.onDurationChange,g),onTimeUpdate:d(a.onTimeUpdate,E),onProgress:d(a.onProgress,h)}));var y=!1,b={play:function(){var e=m.current;if(e&&!y){var n=e.play();if("object"==typeof n){y=!0;var t=function(){y=!1};n.then(t,t)}return n}},pause:function(){var e=m.current;if(e&&!y)return e.pause()},seek:function(e){var n=m.current;n&&void 0!==u.duration&&(e=Math.min(u.duration,Math.max(0,e)),n.currentTime=e)},volume:function(e){var n=m.current;n&&(e=Math.min(1,Math.max(0,e)),n.volume=e,s({volume:e}))},mute:function(){var e=m.current;e&&(e.muted=!0)},unmute:function(){var e=m.current;e&&(e.muted=!1)}};return Object(r.useEffect)((function(){var e=m.current;e&&(s({volume:e.volume,muted:e.muted,paused:e.paused}),a.autoPlay&&e.paused&&b.play())}),[a.src]),[t,u,b,m]}}("audio"),m=t("mN/D"),d=t("MDx2"),p=t("hOMS"),v=t("e/+h"),f=t.n(v),g=function(e){var n=e.isPlaying,t=void 0!==n&&n,r=e.onClick,o=e.size,u=void 0===o?52:o,i=t?p.f:p.g;return a.a.createElement("button",{onClick:r},a.a.createElement(i,{className:f.a.icon,size:u}))},E=function(e){Object(r.useEffect)(e,[])},h=function(e){var n=Object(r.useRef)(e);n.current=e,E((function(){return function(){return n.current()}}))},y=function(e){var n=Object(r.useRef)(0),t=Object(r.useState)(e),a=t[0],o=t[1],u=Object(r.useCallback)((function(e){cancelAnimationFrame(n.current),n.current=requestAnimationFrame((function(){o(e)}))}),[]);return h((function(){cancelAnimationFrame(n.current)})),[a,u]},b=function(e){var n=y({docX:0,docY:0,posX:0,posY:0,elX:0,elY:0,elH:0,elW:0}),t=n[0],a=n[1];return Object(r.useEffect)((function(){var n=function(n){if(e&&e.current){var t=e.current.getBoundingClientRect(),r=t.left,o=t.top,u=t.width,i=t.height,c=r+window.pageXOffset,l=o+window.pageYOffset,s=n.pageX-c,m=n.pageY-l;a({docX:n.pageX,docY:n.pageY,posX:c,posY:l,elX:s,elY:m,elH:i,elW:u})}};return document.addEventListener("mousemove",n),function(){document.removeEventListener("mousemove",n)}}),[e]),t},C=function(e,n){void 0===n&&(n=!0);var t=Object(r.useState)(!1),a=t[0],o=t[1];return Object(r.useEffect)((function(){var t=function(){return o(!0)},r=function(){return o(!1)};n&&e&&e.current&&(e.current.addEventListener("mouseover",t),e.current.addEventListener("mouseout",r));var a=e.current;return function(){n&&a&&(a.removeEventListener("mouseover",t),a.removeEventListener("mouseout",r))}}),[n,e]),a},O={current:null},j=function(e,n){void 0===n&&(n={});var t=!!n.whenHovered,r=!!n.bound,a=C(e,t),o=b(t&&!a?O:e);return r&&(o.elX=Math.max(0,Math.min(o.elX,o.elW)),o.elY=Math.max(0,Math.min(o.elY,o.elH))),o};function N(e){var n=e.docX,t=e.docY,r=e.elX,a=e.elY,o=e.elW,u=e.elH;return{docX:n,docY:t,elementPositionX:e.posX,elementPositionY:e.posY,inElementX:r,inElementY:a,elementWidth:o,elementHeight:u}}var P=t("QmAe"),w=t("Q/sZ"),X=t.n(w);function M(e,n){return{"--seek-value":n+"%",color:e}}function Y(e){return"progress"+Object(P.d)(e)}var x=function(e){var n,t,o,i=e.className,c=e.color,l=e.max,s=e.onChange,m=e.size,d=void 0===m?"md":m,p=e.PreviewComponent,v=e.step,f=e.value,g=Object(r.useState)(!1),E=g[0],h=g[1],y=Object(r.useRef)(null),b=function(){return N(j.apply(void 0,arguments))}(y,{bound:!1,whenHovered:!0}),C=function(e,n){var t=e.inElementX,r=e.elementWidth;if(r<=0)return 0;var a=t/r/n;return Math.round(a)*n}(b,v)*l,O=function(e,n){return n?e/n*100:0}(f,l),P=function(e){return e/100}(l);return a.a.createElement("div",{className:X.a.progressContainer},p&&E&&a.a.createElement("span",{className:X.a.preview,style:(n=b,t=n.inElementX,o=n.elementWidth,{left:Math.min(Math.max(t,0),o)})},a.a.createElement(p,{value:C})),a.a.createElement("input",{className:u()(X.a.progress,X.a[Y(d)],i),max:100,min:0,onChange:function(e){s(e.target.value*P)},onMouseEnter:function(){return h(!0)},onMouseLeave:function(){return h(!1)},ref:y,step:v,style:M(c,O),type:"range",value:O}))},k=t("FmcF"),F=t.n(k),D=t("Bs0v"),H=t.n(D),S=function(e){var n=e.className,t=e.size,r=e.onChange,o=e.onMute,i=e.onUnmute,c=e.isMuted,l=e.value,s=c?p.k:p.l;return a.a.createElement("div",{className:H.a.volumeContainer},a.a.createElement("button",{className:H.a.volumeIcon,onClick:function(){return c?i():o()}},a.a.createElement(s,{size:16})),a.a.createElement(x,{className:u()(n),max:1,onChange:function(e){i(),r(e)},size:t,step:5,value:c?0:l}))},V=function(e){var n=e.value;return a.a.createElement("span",null,Object(P.c)(n))},z=function(e){var n=e.src,t=s({src:n,autoPlay:!1}),o=t[0],i=t[1],c=t[2],l=Object(r.useState)(i.time),p=l[0],v=l[1];return Object(r.useEffect)((function(){v(i.time)}),[v,i.time]),a.a.createElement("div",{className:F.a.audioPlayer},o,a.a.createElement(d.a,{className:F.a.playerContainer},a.a.createElement("div",{className:F.a.playButton},a.a.createElement(g,{isPlaying:!i.paused,onClick:i.paused?c.play:c.pause})),a.a.createElement("div",{className:F.a.player},a.a.createElement("div",{className:F.a.upperControls},a.a.createElement("span",{className:u()(F.a.time)},Object(m.a)(p)),a.a.createElement("span",{className:u()(F.a.time)},Object(m.a)(i.duration))),a.a.createElement("div",{className:F.a.progressContainer},a.a.createElement(x,{max:i.duration,onChange:function(e){var n,t=i.paused;t||c.pause(),v(n=e),c.seek(n),t||c.play()},PreviewComponent:V,step:.01,value:p})),a.a.createElement("div",{className:F.a.lowerControls},a.a.createElement(S,{isMuted:i.muted,onChange:c.volume,onMute:c.mute,onUnmute:c.unmute,size:"sm",value:i.volume})))))};n.a=z}}]);
//# sourceMappingURL=28b3db16b4e6220f201dc9453f5ab5da42a9a3cd-648a984b509885fa2d24.js.map