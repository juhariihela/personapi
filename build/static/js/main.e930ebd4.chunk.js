(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){e.exports=n(38)},20:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),o=n(13),c=n.n(o),i=n(2),r=function(e){var t=e.person,n=e.deletePhone,a=e.handleEdit;return l.a.createElement("tr",{key:t.id},l.a.createElement("td",{className:"cell"},t.name),l.a.createElement("td",{className:"cell"},t.phone),l.a.createElement("td",{className:"buttonCell"},l.a.createElement("button",{onClick:a,value:t.id},"Muokkaa")),l.a.createElement("td",{className:"buttonCell"},l.a.createElement("button",{onClick:n,value:t.id},"Poista")))},u=function(e){var t=e.persons,n=e.filter,a=e.deletePhone,o=e.handleEdit;return l.a.createElement("div",null,l.a.createElement("table",null,l.a.createElement("tbody",null,function(e){var n=t;return e&&(n=t.filter(function(t){return t.name.toLowerCase().includes(e.toLowerCase())||t.phone.includes(e)})),n.map(function(e){return l.a.createElement(r,{key:e.id,person:e,deletePhone:a,handleEdit:o})})}(n))))},s=function(e){var t=e.newName,n=e.newPhone,a=e.handleNameChange,o=e.handlePhoneChange,c=e.editId?"Tallenna":"Lis\xe4\xe4";return l.a.createElement("div",null,l.a.createElement("h3",null,"Lis\xe4\xe4 uusi henkil\xf6"),l.a.createElement("div",null,l.a.createElement("div",{className:"fieldname"},"Nimi:")," ",l.a.createElement("input",{value:t,onChange:a,className:"field"}),"\xa0",l.a.createElement("div",{className:"fieldname"},"Puhelin:")," ",l.a.createElement("input",{value:n,onChange:o,className:"field"})),l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement("button",{type:"submit"},c)))},m=function(e){var t=e.filter,n=e.handleFilterChange;return l.a.createElement("div",null,l.a.createElement("div",{className:"fieldname"},"Rajaa henkil\xf6it\xe4:"),l.a.createElement("input",{value:t,onChange:n,className:"field"}))},d=function(e){var t=e.message;return t?l.a.createElement("div",{className:"error"},t):l.a.createElement("div",null)},f=(n(20),n(3)),h=n.n(f),E="/api/persons",v=function(){return h.a.get(E)},p=function(e){return h.a.post(E,e)},g=function(e,t){return h.a.put("".concat(E,"/").concat(e),t)},b=function(e){return h.a.delete("".concat(E,"/").concat(e))},j=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(""),r=Object(i.a)(c,2),f=r[0],h=r[1],E=Object(a.useState)(""),j=Object(i.a)(E,2),w=j[0],N=j[1],k=Object(a.useState)(""),C=Object(i.a)(k,2),P=C[0],O=C[1],y=Object(a.useState)(""),S=Object(i.a)(y,2),L=S[0],K=S[1],I=Object(a.useState)(""),T=Object(i.a)(I,2),D=T[0],F=T[1];Object(a.useEffect)(function(){console.log("effect"),v().then(function(e){o(e.data)}).catch(function(e){console.log("getAll error",e),O("K\xe4ytt\xe4jien hakeminen ep\xe4onnistui")})},[]);return l.a.createElement("div",null,l.a.createElement("h2",null,"Puhelinluettelo"),l.a.createElement(d,{message:P}),l.a.createElement(m,{filter:L,handleFilterChange:function(e){console.log(e.target.value),K(e.target.value)}}),l.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),!D&&n.find(function(e){return e.name===f}))O("".concat(f," on jo lis\xe4tty"));else{var t={name:f,phone:w};D?(t.id=D,g(D,t).then(function(e){o(n.map(function(t){return t.id===D?e.data:t})),h(""),N(""),F(""),O("P\xe4ivitettiin "+t.name)}).catch(function(e){console.log("update error",e),O("K\xe4ytt\xe4j\xe4 oli jo poistettu kannasta"),o(n.filter(function(e){return e.id!==D}))})):p(t).then(function(e){o(n.concat(e.data)),h(""),N(""),O("Lis\xe4ttiin "+t.name)}).catch(function(e){console.log("create error",e),O("K\xe4ytt\xe4j\xe4n lis\xe4\xe4minen ep\xe4onnistui")})}setTimeout(function(){O("")},5e3)}},l.a.createElement(s,{newName:f,newPhone:w,handleNameChange:function(e){console.log(e.target.value),h(e.target.value)},handlePhoneChange:function(e){console.log(e.target.value),N(e.target.value)},editId:D})),l.a.createElement("h2",null,"Numerot"),l.a.createElement(u,{persons:n,filter:L,deletePhone:function(e){e.preventDefault();var t=window.event.srcElement.value,a=n.find(function(e){return e.id===t}).name;window.confirm("Haluatko varmasti poistaa k\xe4ytt\xe4j\xe4n ".concat(a,"?"))&&(b(t).then(function(){o(n.filter(function(e){return e.id!==t})),O("Poistettiin "+a)}).catch(function(e){console.log("deletePhone error",e),O("K\xe4ytt\xe4j\xe4 oli jo poistettu kannasta"),o(n.filter(function(e){return e.id!==t}))}),setTimeout(function(){O("")},5e3))},handleEdit:function(e){var t=window.event.srcElement.value;console.log("handleEdit",t);var a=n.find(function(e){return e.id===t});a&&(console.log("handleEdit person on"),F(t),h(a.name),N(a.phone))}}))};c.a.render(l.a.createElement(j,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.e930ebd4.chunk.js.map