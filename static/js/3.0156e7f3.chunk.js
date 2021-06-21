(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[3],{88:function(t,e,n){t.exports={section:"Section_section__zDV9b",title:"Section_title__2hDnO"}},89:function(t,e,n){t.exports={form:"ContactForm_form__2FmM0",label:"ContactForm_label__6o0zN",input:"ContactForm_input__1ypCW",button:"ContactForm_button__2NplV"}},90:function(t,e,n){t.exports={filterLabel:"Filter_filterLabel__mhZ3U",input:"Filter_input__3y9Gi"}},91:function(t,e,n){t.exports={item:"ContactItem_item__3n6ey",button:"ContactItem_button__18gou"}},92:function(t,e,n){t.exports={phonebookWrapper:"PhonebookView_phonebookWrapper__1ODAf"}},96:function(t,e,n){"use strict";n.r(e),n.d(e,"PhonebookView",(function(){return Z}));var a=n(34),c=n(35),r=n(37),o=n(36),i=n(0),u=n(9),s=n(33),l=n(88),b=n.n(l),f=n(1),h=function(t){var e=t.title,n=t.children;return Object(f.jsxs)("section",{className:b.a.section,children:[Object(f.jsx)("h2",{className:b.a.title,children:e}),n]})},d=n(3),m=n(89),j=n.n(m),p=n(19),C=n.n(p),O=n(16),_=function(t){var e=t.name,n=t.number;return function(t){var a={name:e,number:n};t(O.a.addContactRequest()),C.a.post("/contacts",a).then((function(e){var n=e.data;return t(O.a.addContactSuccess(n))})).catch((function(e){return t(O.a.addContactError(e))}))}},g=function(t){return function(e){e(O.a.deleteContactRequest()),C.a.delete("./contacts/".concat(t)).then((function(){return e(O.a.deleteContactSuccess(t))})).catch((function(t){return e(O.a.deleteContactError(t))}))}},x=function(){return function(t){t(O.a.fetchContactRequest()),C.a.get("/contacts").then((function(e){var n=e.data;return t(O.a.fetchContactSuccess(n))})).catch((function(e){return t(O.a.fetchContactError(e))}))}},v=n(25),N=function(t){return t.contacts.items},k=function(t){return t.contacts.filter},y={getIsLoading:function(t){return t.contacts.loading},getContactsList:N,getFilter:k,getVisibleContacts:Object(v.a)([k,N],(function(t,e){var n=t.toLowerCase();return e.filter((function(t){return t.name.toLowerCase().includes(n)}))}))},S=function(t){Object(r.a)(n,t);var e=Object(o.a)(n);function n(){var t;Object(a.a)(this,n);for(var c=arguments.length,r=new Array(c),o=0;o<c;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(d.a)({},a,c))},t.handleSubmit=function(e){if(e.preventDefault(),t.props.contacts.find((function(e){return e.name===t.state.name})))return alert("already add"),void t.reset();t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(c.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("form",{className:j.a.form,onSubmit:this.handleSubmit,children:[Object(f.jsxs)("label",{className:j.a.label,children:["Name",Object(f.jsx)("input",{className:j.a.input,value:this.state.name,onChange:this.handleChange,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(f.jsxs)("label",{className:j.a.label,children:["Number",Object(f.jsx)("input",{className:j.a.input,value:this.state.number,onChange:this.handleChange,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(f.jsx)("button",{className:j.a.button,type:"submit",children:"Add contact"})]})}}]),n}(i.Component),L=Object(u.b)((function(t){return{contacts:y.getContactsList(t)}}),(function(t){return{onSubmit:function(e,n){return t(_(e,n))}}}))(S),F=n(90),w=n.n(F),A=Object(u.b)((function(t){return{value:y.getFilter(t)}}),(function(t){return{onChange:function(e){return t(O.a.changeFilter(e.target.value))}}}))((function(t){var e=t.value,n=t.onChange;return Object(f.jsxs)("label",{className:w.a.filterLabel,children:["Find contacts by name",Object(f.jsx)("input",{className:w.a.input,type:"text",value:e,onChange:n})]})})),z=n(91),D=n.n(z),V=function(t){var e=t.id,n=t.name,a=t.number,c=t.onClick;return Object(f.jsxs)("li",{className:D.a.item,children:[n,": ",a,Object(f.jsx)("button",{className:D.a.button,type:"button",onClick:function(){c(e)},children:"Delete"})]})},q=Object(u.b)((function(t){return{list:y.getVisibleContacts(t)}}),(function(t){return{onClick:function(e){return t(g(e))}}}))((function(t){var e=t.list,n=t.onClick;return e.length?Object(f.jsx)("ul",{children:e.map((function(t){return Object(f.jsx)(V,{id:t.id,onClick:n,name:t.name,number:t.number},t.id)}))}):Object(f.jsx)("p",{children:"No matches found"})})),I=n(92),W=n.n(I),Z=function(t){Object(r.a)(n,t);var e=Object(o.a)(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchContacts()}},{key:"render",value:function(){return Object(f.jsx)(s.a,{children:Object(f.jsxs)("div",{className:W.a.phonebookWrapper,children:[Object(f.jsx)(h,{className:"formSection",title:"Phonebook",children:Object(f.jsx)(L,{})}),Object(f.jsxs)(h,{className:"contactsSection",title:"Contacts",children:[Object(f.jsx)(A,{}),this.props.isLoading&&Object(f.jsx)("p",{children:"Loading..."}),Object(f.jsx)(q,{})]})]})})}}]),n}(i.Component);e.default=Object(u.b)((function(t){return{isLoading:y.getIsLoading(t)}}),(function(t){return{fetchContacts:function(){return t(x())}}}))(Z)}}]);
//# sourceMappingURL=3.0156e7f3.chunk.js.map