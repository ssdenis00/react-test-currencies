(this["webpackJsonpreact-test-currencies"]=this["webpackJsonpreact-test-currencies"]||[]).push([[0],{22:function(e,t,a){},23:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(12),s=a.n(r),u=a(7),i=(a(22),a(17)),l=a(5),o=a(2),j=c.a.createContext(),b=(a(23),a(1));var d=function(){var e=Object(n.useContext)(j),t=Object(n.useState)(0),a=Object(l.a)(t,2),c=a[0],r=a[1],s=Object(n.useState)(""),u=Object(l.a)(s,2),i=u[0],o=u[1],d=Object(n.useState)(""),h=Object(l.a)(d,2),O=h[0],f=h[1];return Object(b.jsxs)("main",{className:"main",children:[Object(b.jsxs)("form",{onSubmit:function(t){t.preventDefault();var a=function(e){var t=e.split(" "),a=Object(l.a)(t,4),n=a[0],c=a[1],r=a[2],s=a[3];return{value:n=parseInt(n),forValute:c=c.toLowerCase(),separator:r=r.toLowerCase(),inValute:s=s.toLowerCase()}}(O);if(function(e){var t=["usd","eur","rub"];return"in"===e.separator&&!!t.includes(e.inValute)&&!!t.includes(e.forValute)}(a)){var n=function(t){var a="".concat(t.forValute.toLowerCase()).concat(t.inValute[0].toUpperCase()+t.inValute.slice(1));return t.value*e[a].Value}(a);o(a.inValute.toUpperCase()),r(n)}else alert("\u0412\u0432\u0435\u0434\u0435\u043d\u044b \u043d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435. \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442 \u0432 \u0432\u0438\u0434\u0435 15 usd in rub")},action:"/",className:"form",children:[Object(b.jsx)("input",{type:"text",className:"form__input",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442 \u0432 \u0432\u0438\u0434\u0435 15 usd in rub",value:O,onChange:function(e){f(e.target.value)},required:!0}),Object(b.jsx)("button",{type:"submit",className:"form__btn",children:"\u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044c"})]}),Object(b.jsx)("p",{className:"result",children:0===c?"":c.toFixed(2)+" "+i})]})};a(25),a(26);var h=function(e){var t,a=e.charCode,n=e.value,c=e.baseLang;return"ru"===c?t="RUB":"en"===c&&(t="USD"),Object(b.jsxs)("li",{className:"currencies__item",children:[Object(b.jsxs)("h2",{className:"currencies__default",children:["1 ",a,":"]}),Object(b.jsxs)("p",{className:"currencies__value",children:[n," ",t]})]})};var O=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],c=t[1],r=Object(n.useContext)(j);return Object(n.useEffect)((function(){"ru"===r.userLang?c([r.usdRub,r.eurRub]):"en"===r.userLang&&c([r.rubUsd,r.eurUsd])}),[r]),Object(b.jsx)("main",{className:"main",children:Object(b.jsx)("section",{className:"currencies",children:Object(b.jsx)("ul",{className:"currencies__list",children:a.map((function(e){return Object(b.jsx)(h,{charCode:e.CharCode,value:e.Value.toFixed(2),baseLang:r.userLang},e.ID)}))})})})};a(27);var f=function(e){var t=e.selectOnChange,a=Object(n.useContext)(j);return Object(b.jsxs)("header",{className:"header",children:[Object(b.jsx)(u.b,{exact:!0,to:"/",className:"header__link",activeClassName:"header__link_active",children:"\u041a\u043e\u043d\u0432\u0435\u0440\u0442\u0435\u0440"}),Object(b.jsx)(u.b,{to:"/currencies",className:"header__link",activeClassName:"header__link_active",children:"\u041a\u0443\u0440\u0441 \u0432\u0430\u043b\u044e\u0442"}),Object(b.jsxs)("select",{name:"lang",id:"lang",value:a.userLang,onChange:t,className:"header__select",children:[Object(b.jsx)("option",{value:"ru",children:"ru"}),Object(b.jsx)("option",{value:"en",children:"en"})]})]})},v=a(15),x=a(16),m=new(function(){function e(t){Object(v.a)(this,e),this._url=t}return Object(x.a)(e,[{key:"_getResponseData",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}},{key:"getInitialValute",value:function(){return fetch(this._url).then(this._getResponseData)}}]),e}())("https://www.cbr-xml-daily.ru/daily_json.js");a(36);var g=function(){var e=Object(n.useState)({}),t=Object(l.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){var e=navigator.language||navigator.userLanguage;m.getInitialValute().then((function(t){var a=t.Valute.EUR,n=t.Valute.USD,r={ID:"EU22222",CharCode:"EUR",Value:a.Value/n.Value},s={ID:"UE33333",CharCode:"USD",Value:n.Value/a.Value},u={ID:"RE44444",CharCode:"RUB",Value:1/a.Value},i={ID:"RU55555",CharCode:"RUB",Value:1/n.Value};c({eurRub:a,usdRub:n,eurUsd:r,usdEur:s,rubEur:u,rubUsd:i,userLang:e})})).catch((function(e){console.log(e)}))}),[]),Object(b.jsxs)(j.Provider,{value:a,children:[Object(b.jsx)(f,{selectOnChange:function(e){var t=Object(i.a)({},a);t.userLang=e.target.value,c(t)}}),Object(b.jsxs)(o.c,{children:[Object(b.jsx)(o.a,{exact:!0,path:"/",children:Object(b.jsx)(d,{})}),Object(b.jsx)(o.a,{path:"/currencies",children:Object(b.jsx)(O,{})})]})]})},C=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,38)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(u.a,{children:Object(b.jsx)(g,{})})}),document.getElementById("root")),C()}},[[37,1,2]]]);
//# sourceMappingURL=main.4170b1f9.chunk.js.map