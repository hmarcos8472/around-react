(this["webpackJsonparound-react"]=this["webpackJsonparound-react"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(3),c=a.n(o),l=(a(12),a(1)),i=a(4),s=a.n(i);var u=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",null,r.a.createElement("div",{className:"header"},r.a.createElement("img",{src:s.a,alt:"Around the US",className:"header__logo"}))))},p=a(5),m=a(6),_=new(function(){function e(t){var a=t.baseUrl,n=t.headers;Object(p.a)(this,e),this._baseUrl=a,this._headers=n}return Object(m.a)(e,[{key:"getInitialCards",value:function(){return fetch(this._baseUrl+"/cards",{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Error!"+e.statusText)})).catch((function(e){return console.log(e)}))}},{key:"getUserInfo",value:function(){return fetch(this._baseUrl+"/users/me",{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Error!"+e.statusText)})).catch((function(e){return console.log(e)}))}},{key:"addCard",value:function(e){var t=e.title,a=e.link;return fetch(this._baseUrl+"/cards",{headers:this._headers,method:"POST",body:JSON.stringify({name:t,link:a})}).then((function(e){return e.ok?e.json():Promise.reject("Error!"+e.statusText)})).catch((function(e){return console.log(e)}))}},{key:"removeCard",value:function(e){return fetch(this._baseUrl+"/cards/"+e,{headers:this._headers,method:"DELETE"}).then((function(e){return e.ok?e.json():Promise.reject("Error!"+e.statusText)})).catch((function(e){return console.log(e)}))}},{key:"likeCard",value:function(e){return fetch(this._baseUrl+"/cards/likes/"+e,{headers:this._headers,method:"PUT"}).then((function(e){return e.ok?e.json():Promise.reject("Error!"+e.statusText)})).catch((function(e){return console.log(e)}))}},{key:"removeLike",value:function(e){return fetch(this._baseUrl+"/cards/likes/"+e,{headers:this._headers,method:"DELETE"}).then((function(e){return e.ok?e.json():Promise.reject("Error!"+e.statusText)})).catch((function(e){return console.log(e)}))}},{key:"setUserInfo",value:function(e){var t=e.name,a=e.about;fetch(this._baseUrl+"/users/me",{method:"PATCH",headers:{authorization:"0822cc1d-2b11-427a-9c40-48a5387f2b93","Content-Type":"application/json"},body:JSON.stringify({name:t,about:a})}).then((function(e){return e.ok?e.json():Promise.reject("Error!"+e.statusText)})).catch((function(e){return console.log(e)}))}},{key:"setUserAvatar",value:function(e){var t=e.avatar;return fetch(this._baseUrl+"/users/me/avatar",{method:"PATCH",headers:{authorization:"0822cc1d-2b11-427a-9c40-48a5387f2b93","Content-Type":"application/json"},body:JSON.stringify({avatar:t})}).then((function(e){return e.ok?e.json():Promise.reject("Error!"+e.statusText)})).catch((function(e){return console.log(e)}))}}]),e}())({baseUrl:"https://around.nomoreparties.co/v1/group-3",headers:{authorization:"0822cc1d-2b11-427a-9c40-48a5387f2b93","Content-Type":"application/json"}});var d=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"element__card"},r.a.createElement("div",{onClick:e.onCardImageClick,className:"element__image",style:{backgroundImage:"url(".concat(e.image,")")}},r.a.createElement("button",{className:"element__trash",type:"button",name:"trash"})),r.a.createElement("div",{className:"element__caption"},r.a.createElement("h2",{className:"element__title"},e.title),r.a.createElement("button",{className:"element__heart element__heart_empty",type:"button",name:"like"},r.a.createElement("p",{className:"element__likes"},e.likecount)))))};var h=function(e){var t=r.a.useState(""),a=Object(l.a)(t,2),n=a[0],o=a[1],c=r.a.useState(""),i=Object(l.a)(c,2),s=i[0],u=i[1],p=r.a.useState(""),m=Object(l.a)(p,2),h=m[0],f=m[1];r.a.useEffect((function(){_.getUserInfo().then((function(e){o(e.avatar),u(e.name),f(e.about)}))}),[n,s,h]);var E=r.a.useState([]),g=Object(l.a)(E,2),v=g[0],b=g[1];return r.a.useEffect((function(){_.getInitialCards().then((function(e){b(e)}))}),[b]),r.a.createElement(r.a.Fragment,null,r.a.createElement("main",null,r.a.createElement("section",{className:"profile"},r.a.createElement("img",{src:n,alt:"Avatar",className:"profile__avatar"}),r.a.createElement("div",{onClick:e.onEditAvatar,className:"profile__avatar-overlay"}),r.a.createElement("div",{className:"profile__text-container"},r.a.createElement("p",{className:"profile__name"},s),r.a.createElement("p",{className:"profile__occupation"},h)),r.a.createElement("button",{onClick:e.onEditProfile,className:"profile__edit",type:"button",name:"button"}),r.a.createElement("button",{onClick:e.onAddCard,className:"profile__add",type:"button",name:"button"})),r.a.createElement("section",{className:"element"},r.a.createElement("ul",{className:"element__container"},v.map((function(t,a){return r.a.createElement(d,{key:a,image:t.link,title:t.name,likecount:t.likes.length,onCardImageClick:e.onCardImageClick})}))))))};var f=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("footer",{className:"footer"},r.a.createElement("p",{className:"footer__copyright"},"\xa9 2020 Around The U.S.")))};var E=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:e.isOpen?"pop-up__container pop-up__container_active":"pop-up__container"},r.a.createElement("section",{className:"pop-up".concat(e.popupType)},r.a.createElement("button",{onClick:e.onClose,className:"pop-up__close"}),r.a.createElement("p",{className:"pop-up__heading".concat(e.popupType)},e.heading),r.a.createElement("form",{className:"pop-up__form",noValidate:!0},e.children,r.a.createElement("button",{className:"pop-up__save pop-up__save_disabled",type:"button",name:"Save",disabled:!0},e.buttonText)))))};var g=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:e.isOpen?"element__pop-up-container element__pop-up-container_display":"element__pop-up-container"},r.a.createElement("div",{className:"element__pop-up",style:{backgroundImage:e.image}},r.a.createElement("button",{onClick:e.onClose,type:"button",name:"close",className:"pop-up__close pop-up__close_image"})),r.a.createElement("p",{className:"element__tag"},e.title)))};var v=function(){var e=r.a.useState(!1),t=Object(l.a)(e,2),a=t[0],n=t[1],o=r.a.useState(!1),c=Object(l.a)(o,2),i=c[0],s=c[1],p=r.a.useState(!1),m=Object(l.a)(p,2),_=m[0],d=m[1],v=r.a.useState(!1),b=Object(l.a)(v,2),y=b[0],N=b[1],k=r.a.useState(!1),C=Object(l.a)(k,2),j=C[0],T=C[1],O=r.a.useState(""),S=Object(l.a)(O,2),x=S[0],U=S[1],P=r.a.useState(""),I=Object(l.a)(P,2),A=I[0],L=I[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"page"},r.a.createElement("div",{className:a?"overlay overlay_dark":"overlay"},r.a.createElement(u,null),r.a.createElement(h,{onEditAvatar:function(){d(!0),n(!0)},onEditProfile:function(){s(!0),n(!0)},onAddCard:function(){N(!0),n(!0)},onCardImageClick:function(e){T(!0),U(e.target.style.backgroundImage),L(e.target.parentNode.querySelector(".element__title").innerText),n(!0)}}),r.a.createElement(f,null)),r.a.createElement(E,{heading:"Edit Profile",buttonText:"Save",popupType:"",isOpen:i,onClose:function(){s(!1),n(!1)}},r.a.createElement("input",{id:"profile-name",name:"profile name",minLength:"2",maxLength:"40",required:!0,className:"pop-up__name-input pop-up__input",type:"text",placeholder:"Name"}),r.a.createElement("span",{id:"profile-name-error",className:"pop-up__error pop-up__error_visible"}),r.a.createElement("input",{id:"profile-occupation",name:"profile occupation",minLength:"2",maxLength:"40",required:!0,className:"pop-up__occupation-input pop-up__input",type:"text",placeholder:"Occupation"}),r.a.createElement("span",{id:"profile-occupation-error",className:"pop-up__error pop-up__error_visible"})),r.a.createElement(E,{heading:"New Place",buttonText:"Submit",popupType:"",isOpen:y,onClose:function(){N(!1),n(!1)}},r.a.createElement("input",{id:"image-title",name:"image title",minLength:"1",maxLength:"30",required:!0,className:"pop-up__title-input pop-up__input",type:"text",placeholder:"Title"}),r.a.createElement("span",{id:"image-title-error",className:"pop-up__error pop-up__error_visible"}),r.a.createElement("input",{id:"image-url",name:"image url",type:"url",required:!0,className:"pop-up__url-input pop-up__input",placeholder:"Image URL"}),r.a.createElement("span",{id:"image-url-error",className:"pop-up__error pop-up__error_visible"})),r.a.createElement(E,{heading:"Change Profile Picture",buttonText:"Save",popupType:"_type_avatar",isOpen:_,height:300,onClose:function(){d(!1),n(!1)}},r.a.createElement("input",{id:"avatar-url",name:"avatar url",type:"url",required:!0,className:"pop-up__url-input pop-up__avatar-input pop-up__input",placeholder:"Avatar URL"}),r.a.createElement("span",{id:"avatar-url-error",className:"pop-up__error pop-up__error_visible"})),r.a.createElement(E,{heading:"Are You Sure?",buttonText:"Yes",popupType:"_type_delete"}),r.a.createElement(g,{isOpen:j,title:A,image:x,onClose:function(){T(!1),n(!1)}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},4:function(e,t,a){e.exports=a.p+"static/media/logo.3e6893cd.svg"},7:function(e,t,a){e.exports=a(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.a2816d26.chunk.js.map