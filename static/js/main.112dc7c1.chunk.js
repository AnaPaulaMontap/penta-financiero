(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){var n=a(21);n.initializeApp({apiKey:"AIzaSyAyq4TVMZjyF0K6mbS0nxV88CvRVP5Ps_Y",authDomain:"penta-interview.firebaseapp.com",databaseURL:"https://penta-interview.firebaseio.com",projectId:"penta-interview",storageBucket:"penta-interview.appspot.com",messagingSenderId:"874705362785",appId:"1:874705362785:web:b2fae578d8f22763"}),e.exports={database:n.database().ref()}},12:function(e,t,a){e.exports=a.p+"static/media/Marcador de texto.a2ad4b16.png"},15:function(e,t,a){e.exports=a(36)},20:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(6),o=a.n(l),c=(a(20),a(7)),i=a(8),s=a(13),m=a(9),u=a(14),p=a(10),d=(a(35),a(12)),E=a.n(d),f=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).state={firebase:!1},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;p.database.child("PentaInformation").on("value",function(t){var a=t.val(),n=[];for(var r in a){var l=a[r];l.id=r,n.push(l)}e.setState({firebase:n.sort(function(e,t){return t.emision-e.emision})})})}},{key:"render",value:function(){var e=this.state.firebase?this.state.firebase.map(function(e){var t=new Date;t.setTime(e.emision);var a=t.getDate(),n=t.getMonth(),l=t.getFullYear(),o=t.getHours(),c=t.getMinutes(),i=t.getSeconds();return r.a.createElement("tr",{className:"body",key:e.id},r.a.createElement("td",{key:e.folio},"N\xb0",e.folio),r.a.createElement("td",{key:e.emisor.rut},r.a.createElement("p",null,e.emisor.razonSocial),r.a.createElement("p",null,e.emisor.rut)),r.a.createElement("td",{key:e.receptor.rut},r.a.createElement("p",null,e.receptor.razonSocial),r.a.createElement("p",null,e.receptor.rut)),r.a.createElement("td",{key:e.emision}," ",r.a.createElement("p",null,a+"/"+Number(n)+"1/"+l),r.a.createElement("p",null,o+":"+c+":"+i)),r.a.createElement("td",{key:e.tipo},e.tipo),r.a.createElement("td",{key:e.id},e.detalle.map(function(e){return r.a.createElement("div",null,r.a.createElement("p",{className:"details"},e.servicio),r.a.createElement("p",null,r.a.createElement("span",null,"-Monto:$",e.monto)),r.a.createElement("p",null,r.a.createElement("span",null,"-Iva: $",e.iva)))})))}):null;return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("img",{src:E.a,alt:"logo",className:"logo"})),r.a.createElement("table",null,r.a.createElement("thead",{className:"head"},r.a.createElement("tr",null,r.a.createElement("th",{className:"column6"},"Folio"),r.a.createElement("th",{className:"column2"},"Emisor "),r.a.createElement("th",{className:"column3"},"Receptor"),r.a.createElement("th",{className:"column4"},"Fecha"),r.a.createElement("th",{className:"column5"},"Tipo"),r.a.createElement("th",{className:"column7"},"Contenido"))),r.a.createElement("tbody",null,e)),r.a.createElement("div",{className:"footer"},r.a.createElement("p",null,"Total de Documentos: ",this.state.firebase.length)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[15,1,2]]]);
//# sourceMappingURL=main.112dc7c1.chunk.js.map