(this.webpackJsonpinterface=this.webpackJsonpinterface||[]).push([[0],{14:function(e,t,a){e.exports=a(24)},19:function(e,t,a){},20:function(e,t,a){},22:function(e,t,a){},23:function(e,t,a){e.exports=a.p+"static/media/LOGO1.d54d3ecf.png"},24:function(e,t,a){"use strict";a.r(t);var i=a(1),n=a.n(i),o=a(9),r=a.n(o),c=(a(19),a(20),a(2)),l="0b284e589d747768a9d9d72a1dd2b38c",s={baseURL:"https://api.themoviedb.org/3/",Multi_first_half:"search/multi?api_key=".concat(l,"&language=en-US"),getSimilar:"similar?api_key=".concat(l)},m=a(5),u=a(11),d=a(6),v=a.n(d),f=a(10),p=a(13),g=(a(22),a(7));var y=function(e){var t=e.setShowFavList,a=e.setFavList,o=e.FavList,r=e.alldetails,c=e.setMainMovie,l=e.Get_My_List_FromLS;Object(i.useEffect)((function(){document.querySelector(".my-movie-list-cont").style.right="0"}),[]);var s=o.map((function(e,t){return n.a.createElement("div",{key:t,className:"each-movie"},n.a.createElement("img",{onClick:function(){r.id!==e.id&&(u(),setTimeout((function(){c(e)}),1e3)),m()},className:"each-movie-poster",src:"https://image.tmdb.org/t/p/original".concat(e.poster_path),alt:"movie-poster"}),n.a.createElement("div",{onClick:function(){!function(e){var t=JSON.parse(localStorage.getItem("WSIWN_my_list")).filter((function(t){return t.id!==e}));localStorage.setItem("WSIWN_my_list",JSON.stringify(t)),l()}(e.id)},className:"remove-wrapper"},n.a.createElement(g.a,{className:"remove-btn"})))})),m=function(){document.querySelector(".my-movie-list-cont").style.right="-100rem",setTimeout((function(){t(!1)}),500)},u=function(){document.querySelector(".all-display-movie-cont").style.bottom="-40rem",document.querySelector(".right-main-movie-details ").style.opacity="0"};return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"my-movie-list-cont"},n.a.createElement("div",{className:"my-list-title"},n.a.createElement("div",{className:"title"},"My Movie List"),n.a.createElement(g.a,{onClick:function(){m()},className:"close-btn"})),o.length>0?n.a.createElement("div",{className:"my-list-all-movies"},s):n.a.createElement("div",{className:"empty-list"},"Add some movies to your List to binge later with a bucket of popcorn. \ud83c\udf7f ",n.a.createElement("br",null)," Happy Binging!"),(null===o||void 0===o?void 0:o.length)>0&&n.a.createElement("div",{className:"my-list-btn-cont"},n.a.createElement("button",{onClick:function(){a([]),localStorage.clear()},className:"clear-list"},"Remove All Movies"))))};var h=function(){var e=Object(i.useState)(window.innerWidth),t=Object(c.a)(e,2),a=t[0],n=t[1],o=Object(i.useState)(window.innerHeight),r=Object(c.a)(o,2),l=r[0],s=r[1];return window.addEventListener("resize",(function(){n(window.innerWidth),s(window.innerHeight)})),[a,l]};var b=function(e){var t=e.alldetails,a=e.ShowFavList,o=e.setShowFavList,r=e.setMainMovie,l=Object(i.useState)(!1),s=Object(c.a)(l,2),u=s[0],d=s[1],v=Object(i.useState)([]),f=Object(c.a)(v,2),g=f[0],b=f[1],E=h(),S=Object(c.a)(E,1)[0];Object(i.useEffect)((function(){document.querySelector(".main-poster").style.opacity="1",document.querySelector(".right-main-movie-details ").style.opacity="1"}),[]),Object(i.useEffect)((function(){var e=document.querySelector(".right-main-movie-details ");e.style.width=S<1e3?"100%":"70%",w()}),[S]);var N=function(){document.querySelector(".main-poster").style.opacity="0"},_=function(){var e=document.querySelector(".main-poster");e.src="https://image.tmdb.org/t/p/original".concat(t.poster_path),e.style.opacity="1"};Object(i.useEffect)((function(){return setTimeout((function(){_()}),1e3),function(){N()}}),[t.id]),Object(i.useEffect)((function(){O()}),[g]);var w=function(){var e=JSON.parse(localStorage.getItem("WSIWN_my_list"));e&&b(e)},O=function(){g.map((function(e){return e.id===t.id})).filter(Boolean)[0]?d(!0):d(!1)};return Object(i.useEffect)((function(){return O(),setTimeout((function(){_()}),1e3),function(){N()}}),[t.id]),n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"main-movie-cont"},n.a.createElement("div",{className:"left-main-movie-poster"},n.a.createElement("img",{alt:t.original_title||t.original_name,className:"main-poster",src:"https://image.tmdb.org/t/p/original/or06FN3Dka5tukK1e9sl16pB3iy.jpg"})),n.a.createElement("div",{className:"right-main-movie-details"},n.a.createElement("div",{className:"main-movie-title"},t.original_title||t.original_name),n.a.createElement("div",{className:"main-movie-des"},n.a.createElement("p",{className:"main-movie-des-para"},t.overview)),n.a.createElement("div",{className:"main-movie-details"},n.a.createElement(m.b,{className:"fa-star"})," ",t.vote_average," / 10"),n.a.createElement("div",{className:"add-to-list"},n.a.createElement("input",{onChange:function(){d(!u),u?function(){var e=JSON.parse(localStorage.getItem("WSIWN_my_list")).filter((function(e){return e.id!==t.id}));localStorage.setItem("WSIWN_my_list",JSON.stringify(e)),w()}():function(){var e=[].concat(Object(p.a)(g),[t]);localStorage.setItem("WSIWN_my_list",JSON.stringify(e)),w()}()},type:"checkbox",id:"add-to-list-input",checked:u}),n.a.createElement("label",{htmlFor:"add-to-list-input",id:"add-to-list-icon"},"\u2764"),n.a.createElement("span",{className:"add-to-list-title"},"Add to My List")))),a&&n.a.createElement(y,{setMainMovie:r,setFavList:b,FavList:g,setShowFavList:o,alldetails:t,Get_My_List_FromLS:w}))};var E=function(e){var t=e.poster,a=e.item,o=e.setMainMovie,r=e.setshowSuggetions,l=h(),s=(Object(c.a)(l,1)[0],function(){var e=document.querySelector(".all-display-movie-cont");e.style.bottom="0rem",e.style.opacity=1,document.querySelector(".right-main-movie-details ").style.opacity="1"});return Object(i.useEffect)((function(){return setTimeout((function(){s()}),600),function(){s()}}),[a.id]),n.a.createElement(n.a.Fragment,null,n.a.createElement("img",{className:"suggested-movie",alt:a.original_title||a.original_name,onClick:function(){!function(){var e=document.querySelector(".all-display-movie-cont");e.style.bottom="-40rem",e.style.opacity=0,document.querySelector(".right-main-movie-details ").style.opacity="0",window.scrollTo({top:0,behavior:"smooth"})}(),setTimeout((function(){o(a),r(!1)}),800)},src:"https://image.tmdb.org/t/p/original".concat(t)}))};var S=function(e){var t=e.alldetails,a=e.type,o=e.movie,r=e.setMainMovie,l=e.setshowSuggetions,m=e.ShowFavList,u=e.setShowFavList,d=t.backdrop_path,p=t.id,g=t.original_language,y=Object(i.useState)([]),h=Object(c.a)(y,2),S=h[0],N=h[1],_=Object(i.useState)(!0),w=Object(c.a)(_,2),O=w[0],j=w[1];Object(i.useEffect)((function(){var e=function(){var e=Object(f.a)(v.a.mark((function e(){var t,i,n,r,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!o&&"movie"!==a){e.next=6;break}return e.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(p,"/")+s.getSimilar);case 3:t=e.sent,e.next=9;break;case 6:return e.next=8,fetch("https://api.themoviedb.org/3/tv/".concat(p,"/")+s.getSimilar);case 8:t=e.sent;case 9:return e.next=11,t.json();case 11:i=e.sent,(n=i.results.filter((function(e){return e.original_language===g}))).length>5?(r=n.filter((function(e){return null!==e.poster_path&&null!==e.backdrop_path})),N(r.slice(0,6))):(c=i.results.filter((function(e){return null!==e.poster_path&&null!==e.backdrop_path})),N(c.slice(0,6)));case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();setTimeout((function(){e()}),500),function(){j(!O);var e=document.querySelector(".movie-bg-2"),t=document.querySelector(".movie-bg");O?(t.style.background="url(https://image.tmdb.org/t/p/original".concat(d,") no-repeat top center"),t.style.backgroundSize="cover",t.style.opacity="1",e.style.opacity="0"):(e.style.background="url(https://image.tmdb.org/t/p/original".concat(d,") no-repeat top center"),e.style.backgroundSize="cover",e.style.opacity="1",t.style.opacity="0")}()}),[p]);var M=S.map((function(e){return n.a.createElement(E,{key:e.id,poster:e.poster_path,alldetails:t,setMainMovie:r,setshowSuggetions:l,item:e})}));return n.a.createElement(n.a.Fragment,null,n.a.createElement(b,{setMainMovie:r,ShowFavList:m,setShowFavList:u,alldetails:t}),n.a.createElement("div",{className:"suggested-title"},"Similar Movies"),n.a.createElement("div",{className:"all-display-movie-wrapper"},n.a.createElement("div",{className:"all-display-movie-cont"},S.length>0?M:n.a.createElement("div",{className:"no-movies"},"No Similar Movies Found. I am Sorry I let you down \ud83d\ude14 ",n.a.createElement("br",null),"Please Try to Search for some other Movie / Series. I will try my best \u2728"))),n.a.createElement("div",{className:"footer"},"Made with \u2764\ufe0f by",n.a.createElement("a",{href:"https://github.com/thisissandip",target:"_blank"},"Sandip Mondal")))};var N=function(){var e=Object(i.useState)(""),t=Object(c.a)(e,2),o=t[0],r=t[1],l=Object(i.useState)([]),d=Object(c.a)(l,2),v=d[0],f=d[1],p=Object(i.useState)(!1),g=Object(c.a)(p,2),y=g[0],h=g[1],b=Object(i.useState)({}),E=Object(c.a)(b,2),N=E[0],_=E[1],w=Object(i.useState)(!1),O=Object(c.a)(w,2),j=O[0],M=O[1],k=Object(i.useState)(!1),L=Object(c.a)(k,2),F=L[0],q=L[1];Object(i.useEffect)((function(){o.length>0&&(h(!0),setTimeout((function(){fetch(s.baseURL+s.Multi_first_half+"&query=".concat(o,"&page=1&include_adult=false")).then((function(e){return e.json()})).then((function(e){var t=e.results.filter((function(e){return null!==e.original_name&&null!==e.backdrop_path})).slice(0,5);f(t)}))}),500)),0===o.length&&h(!1)}),[o]),Object(i.useEffect)((function(){x({poster_path:"/or06FN3Dka5tukK1e9sl16pB3iy.jpg",id:299534,backdrop_path:"/orjiB3oUIsyz60hoEqkiGpy5CeO.jpg",original_title:"Avengers: Endgame",genre_ids:[28,12,878],media_type:"movie",title:"Avengers: Endgame",vote_average:8.3,overview:"After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos actions and restore order to the universe once and for all, no matter what consequences may be in store.",release_date:"2019-04-24"})}),[]);var x=function(e){j&&N.id!==e.id&&(document.querySelector(".all-display-movie-cont").style.bottom="-40rem");_(e),h(!1),r(""),M(!0)},I=v.map((function(e){if("tv"===e.media_type||"movie"===e.media_type)return n.a.createElement("div",{onClick:function(){x(e)},key:e.id,className:"suggestions-list-movie"},e.original_title||e.original_name," ",e.release_date?"(Movie)":"(Series)")}));return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"nav-bar"},n.a.createElement("img",{className:"logo",alt:"What Should I Next? (Logo)",src:a(23)}),n.a.createElement("div",{className:"searchbox-cont"},n.a.createElement("div",{className:"input-cont"},n.a.createElement(m.a,{className:"search-icon"}),n.a.createElement("input",{placeholder:"Type a Movie / TV Show that you Love ",className:"searchbox",type:"text",value:o,onChange:function(e){return r(e.target.value)}})),n.a.createElement("div",{className:"suggestion-cont"},y&&I)),n.a.createElement("div",{onClick:function(){return q(!0)},className:"my-watchlist-cont"},n.a.createElement(u.a,{className:"watch-list-icon"}),n.a.createElement("span",{className:"watchlist-text"},"MovieList"))),j&&n.a.createElement(n.a.Fragment,null,n.a.createElement(S,{ShowFavList:F,setShowFavList:q,alldetails:N,setshowSuggetions:h,setMainMovie:_,movie:!!N.release_date,type:N.media_type})))};var _=function(){var e=Object(i.useRef)();return Object(i.useEffect)((function(){setTimeout((function(){e.current.style.top="-100vh",setTimeout((function(){e.current.style.display="none"}),1e3)}),1500)}),[]),n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{ref:e,className:"loading-wrapper"},n.a.createElement("svg",{width:"70",height:"30",viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg",fill:"#fff"},n.a.createElement("circle",{cx:"15",cy:"15",r:"15",fill:"#e15b64"},n.a.createElement("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),n.a.createElement("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})),n.a.createElement("circle",{cx:"60",cy:"15",r:"9","fill-opacity":"0.3",fill:"#f8b26a"},n.a.createElement("animate",{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}),n.a.createElement("animate",{attributeName:"fill-opacity",from:"0.5",to:"0.5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"})),n.a.createElement("circle",{cx:"105",cy:"15",r:"15",fill:"#f8b26a"},n.a.createElement("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),n.a.createElement("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})))),n.a.createElement("div",{className:"movie-bg"}),n.a.createElement("div",{className:"movie-bg-2"}),n.a.createElement(N,null))};a(12).polyfill();var w=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(_,null))};r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(w,null)),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.2304a517.chunk.js.map