(()=>{const t=(t,e,r)=>({name:t,marker:e,hp:r});(()=>{const e=document.querySelector(".player-board"),r=document.querySelector(".computer-board"),n=document.querySelector(".reset-btn"),o=document.querySelector(".game-started"),a=document.querySelector(".start-btn"),m=document.querySelector(".press-start"),l=document.querySelector(".player-turn"),C=document.querySelector(".random-btn"),d=document.querySelectorAll(".instruct"),x=document.querySelector(".directions-container"),s=document.querySelector(".container");let c=[],k=!1,i=!0,u=!1,y=!1;window.addEventListener("DOMContentLoaded",(()=>{a.classList.add("disabled"),e.classList.add("disabled"),r.classList.add("disabled"),C.classList.add("disabled")}));const g=()=>{a.addEventListener("click",(t=>{t.preventDefault(),k||(k=!0,e.classList.remove("disabled"),r.classList.remove("disabled"),o.textContent="Game Started!",l.textContent="Player 1's Turn",m.remove(),x.remove(),a.classList.add("disabled"),a.remove(),h.textContent="",q(d))}))};(()=>{const e=t("Player","X",19),r=t("Computer","O",19);c.push(e),c.push(r)})(),((t,r)=>{for(let t=0;t<100;t++){const t=document.createElement("div");t.setAttribute("class","player-grid"),e.appendChild(t)}})(),((t,e)=>{for(let t=0;t<100;t++){const t=document.createElement("div");t.setAttribute("class","computer-grid"),r.appendChild(t)}})();const b=()=>{const t=document.querySelectorAll(".player-grid"),e=document.querySelector(".game-started");let r=Math.floor(100*Math.random());if("2"!==t[r].textContent&&"1"!==t[r].textContent&&u){if("1"===t[r].textContent)return;t[r].style.backgroundColor="blue",P("Computer: Missed!"),l.textContent="Player 1's Turn",i=!0,u=!1,t[r].textContent===c[0].marker&&(t[r].style.backgroundColor="red",l.textContent="Player 1's Turn",P("Computer: Player 1 Ship Hit!"),t[r].textContent=1,c[0].hp--,0===c[0].hp&&(E("YOU LOST!","red"),e.style.visibility="hidden",S()))}},h=document.querySelector(".pick");(()=>{const t=document.querySelector(".againstplayer-btn"),e=document.querySelector(".againstcpu-btn"),r=document.querySelector(".player2-text"),n=document.querySelector(".against-container");t.addEventListener("click",(()=>{h.textContent="Chose Against Player 2.",r.textContent="Player 2",(()=>{const t=document.querySelectorAll(".computer-grid"),e=document.querySelector(".game-started");t.forEach((t=>{t.addEventListener("click",(()=>{if("2"!==t.textContent&&"1"!==t.textContent&&i&&!u)if(t.textContent===c[1].marker)t.style.backgroundColor="red",t.textContent=1,l.textContent="Player 2's Turn",P("Player 1: Enemy Ship Hit!"),c[1].hp--,i=!1,u=!0,0===c[1].hp&&(E("YOU WON!","blue"),e.style.visibility="hidden",S());else{if("1"===t.textContent)return i=!1,void(u=!0);t.style.backgroundColor="blue",t.textContent="2",P("Player 1: Missed!"),l.textContent="Player 2's Turn",i=!1,u=!0}}))}))})(),(()=>{const t=document.querySelectorAll(".player-grid"),e=document.querySelector(".game-started");t.forEach((t=>{t.addEventListener("click",(()=>{if("2"!==t.textContent&&"1"!==t.textContent&&u)if(t.textContent===c[0].marker)t.style.backgroundColor="red",t.textContent=1,l.textContent="Player 1's Turn",P("Player 2: Player 1 Ship Hit!"),c[0].hp--,u=!1,i=!0,0===c[0].hp&&(E("YOU LOST!","red"),e.style.visibility="hidden",S());else{if("1"===t.textContent)return;t.style.backgroundColor="blue",t.textContent="2",P("Player 2: Missed!"),l.textContent="Player 1's Turn",u=!1,i=!0}}))}))})(),t.classList.add("disabled"),e.classList.add("disabled"),n.remove(),C.classList.remove("disabled"),a.classList.remove("disabled"),y=!0})),e.addEventListener("click",(()=>{h.textContent="Chose Against Broken Bot",r.textContent="Broken Bot",(()=>{const t=document.querySelectorAll(".computer-grid"),e=document.querySelector(".game-started");t.forEach((t=>{t.addEventListener("click",(()=>{if(b(),"2"!==t.textContent&&"1"!==t.textContent&&i&&!u)if(t.textContent===c[1].marker)t.style.backgroundColor="red",t.textContent=1,l.textContent="Computer's Turn",P("Player 1: Enemy Ship Hit!"),c[1].hp--,i=!1,u=!0,b(),0===c[1].hp&&(E("YOU WON!","blue"),e.style.visibility="hidden",S());else{if("1"===t.textContent)return i=!1,u=!0,void b();t.style.backgroundColor="blue",t.textContent="2",P("Player 1: Missed!"),l.textContent="Computer's Turn",i=!1,u=!0,b()}}))}))})(),t.classList.add("disabled"),e.classList.add("disabled"),n.remove(),C.classList.remove("disabled"),a.classList.remove("disabled")}))})();const p=()=>Math.floor(4*Math.random());p(),C.addEventListener("click",(()=>{let t=p();0===t?(A(),w(),g(),v(C),f(),C.remove(),L()):1===t?(M(),B(),g(),v(C),f(),C.remove(),L()):2===t?(T(),H(),g(),v(C),f(),C.remove(),L()):3===t&&(O(),U(),g(),v(C),f(),C.remove(),L())})),n.addEventListener("click",(()=>{console.log("refreshed"),window.location.reload()}));const S=()=>{k=!1,e.classList.add("disabled"),r.classList.add("disabled"),a.classList.add("disabled"),l.textContent=""},f=()=>{document.querySelector(".press-start").textContent="Press Start Button"},q=t=>{t.forEach((t=>{t.style.visibility="hidden"}))},v=t=>{t.classList.add("disabled")},L=()=>{const t=document.querySelectorAll(".player-grid");if(y)for(let e=0;e<t.length;e++)t[e].style.backgroundColor=""},E=(t,e)=>{const r=document.querySelector(".win-lost");r.style.color=e,r.textContent=t},P=t=>{const e=document.querySelector(".log-list"),r=document.createElement("p");r.setAttribute("class","logLists"),e.appendChild(r),r.textContent=t};s.addEventListener("click",(()=>{const t=document.querySelector("canvas"),e=t.getContext("2d"),r=document.documentElement.clientWidth,n=document.documentElement.clientHeight;function o(t){return Math.floor(Math.random()*t)}return t.width=r,t.height=n,{draw:function(){e.clearRect(0,0,r,n);for(let t=0;t<25;t++)e.beginPath(),e.fillStyle="rgba(0,0,253,0.1)",e.arc(o(r),o(n),o(25),0,2*Math.PI),e.fill()}}})().draw);const A=()=>{const t=document.querySelectorAll(".player-grid");for(let e=0;e<t.length;e++)t[2].textContent=c[0].marker,t[12].textContent=c[0].marker,t[22].textContent=c[0].marker,t[32].textContent=c[0].marker,t[42].textContent=c[0].marker,t[58].textContent=c[0].marker,t[57].textContent=c[0].marker,t[56].textContent=c[0].marker,t[55].textContent=c[0].marker,t[96].textContent=c[0].marker,t[86].textContent=c[0].marker,t[76].textContent=c[0].marker,t[80].textContent=c[0].marker,t[81].textContent=c[0].marker,t[82].textContent=c[0].marker,t[25].textContent=c[0].marker,t[26].textContent=c[0].marker,t[38].textContent=c[0].marker,t[39].textContent=c[0].marker,t[e].textContent===c[0].marker&&(t[e].style.backgroundColor="gray")},M=()=>{const t=document.querySelectorAll(".player-grid");for(let e=0;e<t.length;e++)t[17].textContent=c[0].marker,t[27].textContent=c[0].marker,t[37].textContent=c[0].marker,t[47].textContent=c[0].marker,t[57].textContent=c[0].marker,t[99].textContent=c[0].marker,t[89].textContent=c[0].marker,t[79].textContent=c[0].marker,t[69].textContent=c[0].marker,t[12].textContent=c[0].marker,t[13].textContent=c[0].marker,t[14].textContent=c[0].marker,t[73].textContent=c[0].marker,t[74].textContent=c[0].marker,t[75].textContent=c[0].marker,t[52].textContent=c[0].marker,t[53].textContent=c[0].marker,t[40].textContent=c[0].marker,t[50].textContent=c[0].marker,t[e].textContent===c[0].marker&&(t[e].style.backgroundColor="gray")},T=()=>{const t=document.querySelectorAll(".player-grid");for(let e=0;e<t.length;e++)t[73].textContent=c[0].marker,t[74].textContent=c[0].marker,t[75].textContent=c[0].marker,t[76].textContent=c[0].marker,t[77].textContent=c[0].marker,t[15].textContent=c[0].marker,t[16].textContent=c[0].marker,t[17].textContent=c[0].marker,t[18].textContent=c[0].marker,t[20].textContent=c[0].marker,t[21].textContent=c[0].marker,t[22].textContent=c[0].marker,t[71].textContent=c[0].marker,t[61].textContent=c[0].marker,t[51].textContent=c[0].marker,t[46].textContent=c[0].marker,t[47].textContent=c[0].marker,t[95].textContent=c[0].marker,t[96].textContent=c[0].marker,t[e].textContent===c[0].marker&&(t[e].style.backgroundColor="gray")},O=()=>{const t=document.querySelectorAll(".player-grid");for(let e=0;e<t.length;e++)t[65].textContent=c[0].marker,t[66].textContent=c[0].marker,t[67].textContent=c[0].marker,t[68].textContent=c[0].marker,t[69].textContent=c[0].marker,t[10].textContent=c[0].marker,t[20].textContent=c[0].marker,t[30].textContent=c[0].marker,t[40].textContent=c[0].marker,t[51].textContent=c[0].marker,t[52].textContent=c[0].marker,t[53].textContent=c[0].marker,t[15].textContent=c[0].marker,t[16].textContent=c[0].marker,t[17].textContent=c[0].marker,t[22].textContent=c[0].marker,t[32].textContent=c[0].marker,t[90].textContent=c[0].marker,t[91].textContent=c[0].marker,t[e].textContent===c[0].marker&&(t[e].style.backgroundColor="gray")},w=()=>{const t=document.querySelectorAll(".computer-grid");for(let e=0;e<t.length;e++)t[1].textContent=c[1].marker,t[2].textContent=c[1].marker,t[3].textContent=c[1].marker,t[4].textContent=c[1].marker,t[5].textContent=c[1].marker,t[10].textContent=c[1].marker,t[20].textContent=c[1].marker,t[30].textContent=c[1].marker,t[40].textContent=c[1].marker,t[55].textContent=c[1].marker,t[56].textContent=c[1].marker,t[57].textContent=c[1].marker,t[70].textContent=c[1].marker,t[71].textContent=c[1].marker,t[72].textContent=c[1].marker,t[78].textContent=c[1].marker,t[79].textContent=c[1].marker,t[18].textContent=c[1].marker,t[28].textContent=c[1].marker,t[e].textContent===c[1].marker&&(t[e].style.backgroundColor="")},B=()=>{const t=document.querySelectorAll(".computer-grid");for(let e=0;e<t.length;e++)t[15].textContent=c[1].marker,t[25].textContent=c[1].marker,t[35].textContent=c[1].marker,t[45].textContent=c[1].marker,t[55].textContent=c[1].marker,t[31].textContent=c[1].marker,t[41].textContent=c[1].marker,t[51].textContent=c[1].marker,t[61].textContent=c[1].marker,t[75].textContent=c[1].marker,t[76].textContent=c[1].marker,t[77].textContent=c[1].marker,t[80].textContent=c[1].marker,t[81].textContent=c[1].marker,t[82].textContent=c[1].marker,t[8].textContent=c[1].marker,t[9].textContent=c[1].marker,t[94].textContent=c[1].marker,t[95].textContent=c[1].marker,t[e].textContent===c[1].marker&&(t[e].style.backgroundColor="")},H=()=>{const t=document.querySelectorAll(".computer-grid");for(let e=0;e<t.length;e++)t[25].textContent=c[1].marker,t[26].textContent=c[1].marker,t[27].textContent=c[1].marker,t[28].textContent=c[1].marker,t[29].textContent=c[1].marker,t[55].textContent=c[1].marker,t[65].textContent=c[1].marker,t[75].textContent=c[1].marker,t[85].textContent=c[1].marker,t[41].textContent=c[1].marker,t[42].textContent=c[1].marker,t[43].textContent=c[1].marker,t[70].textContent=c[1].marker,t[80].textContent=c[1].marker,t[90].textContent=c[1].marker,t[1].textContent=c[1].marker,t[2].textContent=c[1].marker,t[89].textContent=c[1].marker,t[99].textContent=c[1].marker,t[e].textContent===c[1].marker&&(t[e].style.backgroundColor="")},U=()=>{const t=document.querySelectorAll(".computer-grid");for(let e=0;e<t.length;e++)t[15].textContent=c[1].marker,t[25].textContent=c[1].marker,t[35].textContent=c[1].marker,t[45].textContent=c[1].marker,t[55].textContent=c[1].marker,t[95].textContent=c[1].marker,t[96].textContent=c[1].marker,t[97].textContent=c[1].marker,t[98].textContent=c[1].marker,t[49].textContent=c[1].marker,t[59].textContent=c[1].marker,t[69].textContent=c[1].marker,t[27].textContent=c[1].marker,t[28].textContent=c[1].marker,t[29].textContent=c[1].marker,t[1].textContent=c[1].marker,t[11].textContent=c[1].marker,t[62].textContent=c[1].marker,t[72].textContent=c[1].marker,t[e].textContent===c[1].marker&&(t[e].style.backgroundColor="")}})()})();