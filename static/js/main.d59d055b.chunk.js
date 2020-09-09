(this.webpackJsonparound=this.webpackJsonparound||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(3),c=a.n(o),i=(a(12),a(1)),l=a(4),u=a.n(l);var s=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",null,r.a.createElement("div",{className:"header"},r.a.createElement("img",{src:u.a,alt:"Around the US",className:"header__logo"}))))},p=r.a.createContext();var m=function(e){var t=r.a.useContext(p);return r.a.createElement(r.a.Fragment,null,r.a.createElement("main",null,r.a.createElement("section",{className:"profile"},r.a.createElement("img",{src:t.avatar,alt:"Avatar",className:"profile__avatar"}),r.a.createElement("div",{onClick:e.onEditAvatar,className:"profile__avatar-overlay"}),r.a.createElement("div",{className:"profile__text-container"},r.a.createElement("p",{className:"profile__name"},t.name),r.a.createElement("p",{className:"profile__occupation"},t.about)),r.a.createElement("button",{onClick:e.onEditProfile,className:"profile__edit",type:"button",name:"button"}),r.a.createElement("button",{onClick:e.onAddCard,className:"profile__add",type:"button",name:"button"})),r.a.createElement("section",{className:"element"},r.a.createElement("ul",{className:"element__container"},e.children))))};var d=function(e){var t=r.a.useContext(p),a=t._id,n=e.card.owner._id===a,o=e.card.likes.some((function(e){return e._id===t._id}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"element__card"},r.a.createElement("div",{onClick:e.onCardImageClick,className:"element__image",style:{backgroundImage:"url(".concat(e.image,")")}}),r.a.createElement("button",{onClick:e.onCardDelete,className:n?"element__trash_visible":"element__trash",type:"button",name:"trash"}),r.a.createElement("div",{className:"element__caption"},r.a.createElement("h2",{className:"element__title"},e.title),r.a.createElement("button",{onClick:e.onCardLike,className:o?"element__heart element__heart_filled":"element__heart element__heart_empty",type:"button",name:"like"},r.a.createElement("p",{className:"element__likes"},e.likecount)))))};var _=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("footer",{className:"footer"},r.a.createElement("p",{className:"footer__copyright"},"\xa9 2020 Around The U.S.")))};var f=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:e.isOpen?"pop-up__container pop-up__container_active":"pop-up__container"},r.a.createElement("section",{className:"pop-up".concat(e.popupType)},r.a.createElement("button",{onClick:e.onClose,className:"pop-up__close"}),r.a.createElement("p",{className:"pop-up__heading".concat(e.popupType)},e.heading),r.a.createElement("form",{onSubmit:e.handleSubmit,className:"pop-up__form",noValidate:!0},e.children,r.a.createElement("button",{onClick:e.onClose,className:"pop-up__save",type:"submit",name:"Save"},e.buttonText)))))};var h=function(e){var t=r.a.useContext(p),a=r.a.useState(t.name),n=Object(i.a)(a,2),o=n[0],c=n[1],l=r.a.useState(t.about),u=Object(i.a)(l,2),s=u[0],m=u[1];return r.a.useEffect((function(){c(t.name),m(t.about)}),[t]),r.a.createElement(f,{heading:"Edit Profile",buttonText:"Save",popupType:"",isOpen:e.isEditOpen,onClose:e.onClose,handleSubmit:function(a){a.preventDefault(),e.onUpdateUser(o,s,t.avatar)}},r.a.createElement("input",{onChange:function(e){c(e.target.value)},id:"profile-name",name:"profile name",minLength:"2",maxLength:"40",required:!0,className:"pop-up__name-input pop-up__input",type:"text",placeholder:"Name"}),r.a.createElement("span",{id:"profile-name-error",className:"pop-up__error pop-up__error_visible"}),r.a.createElement("input",{onChange:function(e){m(e.target.value)},id:"profile-occupation",name:"profile occupation",minLength:"2",maxLength:"40",required:!0,className:"pop-up__occupation-input pop-up__input",type:"text",placeholder:"Occupation"}),r.a.createElement("span",{id:"profile-occupation-error",className:"pop-up__error pop-up__error_visible"}))};var v=function(e){var t=r.a.useContext(p),a=r.a.useState(t.avatar),n=Object(i.a)(a,2),o=n[0],c=n[1],l=r.a.useRef(o);return r.a.createElement(f,{heading:"Change Profile Picture",buttonText:"Save",popupType:"_type_avatar",isOpen:e.isAvatarOpen,onClose:e.onClose,handleSubmit:function(t){t.preventDefault(),e.onUpdateAvatar(o)}},r.a.createElement("input",{ref:l,onChange:function(e){c(l.current.value)},id:"avatar-url",name:"avatar url",type:"url",required:!0,className:"pop-up__url-input pop-up__avatar-input pop-up__input",placeholder:"Avatar URL"}),r.a.createElement("span",{id:"avatar-url-error",className:"pop-up__error pop-up__error_visible"}))};var E=function(e){var t=r.a.useState(""),a=Object(i.a)(t,2),n=a[0],o=a[1],c=r.a.useState(""),l=Object(i.a)(c,2),u=l[0],s=l[1];return r.a.createElement(f,{heading:"New Place",buttonText:"Submit",popupType:"",isOpen:e.isAddOpen,onClose:e.onClose,handleSubmit:function(t){t.preventDefault(),e.onAddPlace({title:n,link:u})}},r.a.createElement("input",{onChange:function(e){o(e.target.value)},id:"image-title",name:"image title",minLength:"1",maxLength:"30",required:!0,className:"pop-up__title-input pop-up__input",type:"text",placeholder:"Title"}),r.a.createElement("span",{id:"image-title-error",className:"pop-up__error pop-up__error_visible"}),r.a.createElement("input",{onChange:function(e){s(e.target.value)},id:"image-url",name:"image url",type:"url",required:!0,className:"pop-up__url-input pop-up__input",placeholder:"Image URL"}),r.a.createElement("span",{id:"image-url-error",className:"pop-up__error pop-up__error_visible"}))};var b=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:e.isOpen?"element__pop-up-container element__pop-up-container_display":"element__pop-up-container"},r.a.createElement("div",{className:"element__pop-up",style:{backgroundImage:"url(".concat(e.image,")")}},r.a.createElement("button",{onClick:e.onClose,type:"button",name:"close",className:"pop-up__close_image"}),r.a.createElement("p",{className:"element__tag"},e.title))))},g=a(5),C=a(6),k=new(function(){function e(t){var a=t.baseUrl,n=t.headers;Object(g.a)(this,e),this._baseUrl=a,this._headers=n}return Object(C.a)(e,[{key:"getInitialCards",value:function(){return fetch(this._baseUrl+"/cards",{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Error!"+e.statusText)})).catch((function(e){return console.log(e)}))}},{key:"getUserInfo",value:function(){return fetch(this._baseUrl+"/users/me",{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Error!"+e.statusText)})).catch((function(e){return console.log(e)}))}},{key:"addCard",value:function(e){var t=e.title,a=e.link;return fetch(this._baseUrl+"/cards",{headers:this._headers,method:"POST",body:JSON.stringify({name:t,link:a})}).then((function(e){return e.ok?e.json():Promise.reject("Error!"+e.statusText)})).catch((function(e){return console.log(e)}))}},{key:"removeCard",value:function(e){return fetch(this._baseUrl+"/cards/"+e,{headers:this._headers,method:"DELETE"}).then((function(e){return e.ok?e.json():Promise.reject("Error!"+e.statusText)})).catch((function(e){return console.log(e)}))}},{key:"likeCard",value:function(e){return fetch(this._baseUrl+"/cards/likes/"+e,{headers:this._headers,method:"PUT"}).then((function(e){return e.ok?e.json():Promise.reject("Error!"+e.statusText)})).catch((function(e){return console.log(e)}))}},{key:"removeLike",value:function(e){return fetch(this._baseUrl+"/cards/likes/"+e,{headers:this._headers,method:"DELETE"}).then((function(e){return e.ok?e.json():Promise.reject("Error!"+e.statusText)})).catch((function(e){return console.log(e)}))}},{key:"setUserInfo",value:function(e){var t=e.name,a=e.about;fetch(this._baseUrl+"/users/me",{method:"PATCH",headers:{authorization:"0822cc1d-2b11-427a-9c40-48a5387f2b93","Content-Type":"application/json"},body:JSON.stringify({name:t,about:a})}).then((function(e){return e.ok?e.json():Promise.reject("Error!"+e.statusText)})).catch((function(e){return console.log(e)}))}},{key:"setUserAvatar",value:function(e){var t=e.avatar;return fetch(this._baseUrl+"/users/me/avatar",{method:"PATCH",headers:{authorization:"0822cc1d-2b11-427a-9c40-48a5387f2b93","Content-Type":"application/json"},body:JSON.stringify({avatar:t})}).then((function(e){return e.ok?e.json():Promise.reject("Error!"+e.statusText)})).catch((function(e){return console.log(e)}))}}]),e}())({baseUrl:"https://around.nomoreparties.co/v1/group-3",headers:{authorization:"0822cc1d-2b11-427a-9c40-48a5387f2b93","Content-Type":"application/json"}});var y=function(){var e=r.a.useState(!1),t=Object(i.a)(e,2),a=t[0],n=t[1],o=r.a.useState(!1),c=Object(i.a)(o,2),l=c[0],u=c[1],g=r.a.useState(!1),C=Object(i.a)(g,2),y=C[0],N=C[1],j=r.a.useState(!1),O=Object(i.a)(j,2),S=O[0],T=O[1],U=r.a.useState(!1),x=Object(i.a)(U,2),A=x[0],P=x[1],L=r.a.useState(""),I=Object(i.a)(L,2),w=I[0],D=I[1],F=r.a.useState(""),q=Object(i.a)(F,2),J=q[0],z=q[1],R=r.a.useState({avatar:"",name:"",about:""}),B=Object(i.a)(R,2),H=B[0],W=B[1];function Y(){n(!1),T(!1),u(!1),P(!1),N(!1)}r.a.useEffect((function(){k.getUserInfo().then((function(e){W(e)}))}),[W]);var M=r.a.useState([]),V=Object(i.a)(M,2),$=V[0],G=V[1];return r.a.useEffect((function(){k.getInitialCards().then((function(e){G(e)}))}),[G,$]),r.a.createElement(p.Provider,{value:H},r.a.createElement("div",{className:"page"},r.a.createElement("div",{className:a?"overlay overlay_dark":"overlay"},r.a.createElement(s,null),r.a.createElement(m,{onEditAvatar:function(){N(!0),n(!0)},onEditProfile:function(){u(!0),n(!0)},onAddCard:function(){T(!0),n(!0)},onCardImageClick:function(e,t){P(!0),D(e),z(t),n(!0)}},$.map((function(e,t){return r.a.createElement(d,{key:t,card:e,image:e.link,title:e.name,likecount:e.likes.length,onCardLike:function(){!function(e){e.likes.some((function(e){return e._id===H._id}))?k.removeLike(e._id).then((function(t){var a=$.map((function(a){return a._id===e._id?t:a}));G(a)})):k.likeCard(e._id).then((function(t){var a=$.map((function(a){return a._id===e._id?t:a}));G(a)}))}(e)},onCardDelete:function(){!function(e){k.removeCard(e._id).then(G($))}(e)},onCardImageClick:function(){var t,a;t=e.link,a=e.name,P(!0),D(t),z(a),n(!0)}})}))),r.a.createElement(_,null)),r.a.createElement(h,{onUpdateUser:function(e,t){W({name:e,about:t,avatar:H.avatar}),k.setUserInfo({name:e,about:t})},isEditOpen:l,onClose:Y}),r.a.createElement(v,{onUpdateAvatar:function(e){W({name:H.name,about:H.about,avatar:e}),k.setUserAvatar({avatar:e})},isAvatarOpen:y,onClose:Y}),r.a.createElement(E,{onAddPlace:function(e){k.addCard(e)},isAddOpen:S,onClose:Y}),r.a.createElement(f,{heading:"Are You Sure?",buttonText:"Yes",popupType:"_type_delete"}),r.a.createElement(b,{isOpen:A,title:J,image:w,onClose:function(){P(!1),n(!1)}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},4:function(e,t,a){e.exports=a.p+"static/media/logo.3e6893cd.svg"},7:function(e,t,a){e.exports=a(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.d59d055b.chunk.js.map