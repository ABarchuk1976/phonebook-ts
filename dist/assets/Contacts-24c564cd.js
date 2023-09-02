import{a as u,b as A,c as B,d as x,s as t,u as h,e as p,j as e,t as M,f as P,g as $,M as C,h as q,i as O,k as V,m as W,n as J,o as T,p as R,L as U}from"./index-7daaa252.js";const G=()=>{const n=u(A),o=u(B);return{constants:u(x),isLoading:n,error:o}},H=t.li`
  display: flex;
  justify-content: center;
`,K=t.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  border-bottom: 1px solid var(--bgcolor-accent);
  border-radius: 0 0 1.25rem 0;
  width: 100%;
`,Q=t.p`
  display: block;
  margin: 0;
  padding: 0;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--bgcolor-accent);
`,X=t.p`
  display: block;
  margin: 0;
  padding: 0;
  font-size: 1rem;
  font-weight: 400;
  color: var(--title-color);
`,w=t.button`
  display: block;
  margin-left: 1rem;
  font-size: 1rem;
  font-weight: 400;
  color: var(--title-color);

  padding: 0.25rem 0.5rem;
  width: 6.25rem;
  border-radius: 0.25rem;
  border: 1px solid var(--bgcolor-accent);
  background-color: transparent;
  transition: background-color 250ms ease;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: var(--bgcolor-accent);
  }
  & + & {
    margin-top: 0.25rem;
  }
`,Y=t.div`
  display: flex;
  flex-direction: column;
`,Z=t.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  width: fit-content;
  height: fit-content;
  font-size: 1.25rem;
  font-weight: 400;
  color: var(--bgcolor-accent);
  border: 1px solid var(--bgcolor-accent);
  border-radius: 1rem;
  margin: 2rem auto;
  background-color: black;
`,k=t.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  & + & {
    margin-top: 0.75rem;
  }
`,S=t.input`
  width: 20rem;
  font-size: 1.25rem;
  padding: 0.5rem;
  margin-top: 0.25rem;
  border-radius: 0 0 1.25rem 0;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid var(--bgcolor-accent);
  color: var(--title-color);
  &::placeholder {
    font-weight: 200;
    font-style: italic;
    color: var(--bgcolor-second);
  }
`,_=t.button`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--main-bgcolor);
  padding: 0.5rem 1rem;
  margin-top: 2rem;
  border-radius: 0.25rem;
  border: none;
  background-color: var(--bgcolor-first);
  transition: background-color 250ms ease, color 250ms ease;
  cursor: pointer;

  & + & {
    margin-left: 1rem;
  }

  &:hover,
  &:focus {
    background-color: var(--bgcolor-accent);
    color: var(--title-color);
  }
`,ee=({id:n,name:o,number:r,onClose:a})=>{const s=u(x),c=h(),[d,i]=p.useState(o),[m,f]=p.useState(r),y=l=>{const g=l==null?void 0:l.target;g.name==="name"?i(g.value):f(g.value)},E=l=>{l.preventDefault();const j=(l==null?void 0:l.target).elements,b=j.name.value.trim(),v=j.number.value.trim();if(s.some(N=>N.name.toLowerCase().trim()===b)&&b!==o){M("Contact with such name exists yet.");return}if(b===o&&v===r){a();return}c(P({id:n,name:b,number:v})),a()};return e.jsxs(Z,{onSubmit:E,children:[e.jsxs(k,{children:["Name",e.jsx(S,{type:"text",name:"name",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",value:d,required:!0,autoComplete:"off",onChange:y})]}),e.jsxs(k,{children:["Phone",e.jsx(S,{type:"tel",name:"number",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",value:m,required:!0,autoComplete:"off",onChange:y})]}),e.jsx(_,{type:"submit",children:"Edit contact"})]})},te=t.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  width: fit-content;
  height: fit-content;
  font-size: 1.25rem;
  font-weight: 400;
  color: var(--bgcolor-accent);
  border: 1px solid var(--bgcolor-accent);
  border-radius: 1rem;
  margin: 2rem auto;
  background-color: black;
`,z=t.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  & + & {
    margin-top: 0.75rem;
  }
`,F=t.input`
  width: 20rem;
  font-size: 1.25rem;
  padding: 0.5rem;
  margin-top: 0.25rem;
  border-radius: 0 0 1.25rem 0;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid var(--bgcolor-accent);
  color: var(--title-color);
  &::placeholder {
    font-weight: 200;
    font-style: italic;
    color: var(--bgcolor-second);
  }
`,L=t.button`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--main-bgcolor);
  padding: 0.5rem 1rem;
  margin-top: 2rem;
  border-radius: 0.25rem;
  border: none;
  background-color: var(--bgcolor-first);
  transition: background-color 250ms ease, color 250ms ease;
  cursor: pointer;

  & + & {
    margin-left: 1rem;
  }

  &:hover,
  &:focus {
    background-color: var(--bgcolor-accent);
    color: var(--title-color);
  }
`,oe=t.div`
  display: flex;
`,re=({id:n,name:o,number:r,onClose:a})=>{const s=h(),c=d=>{d.preventDefault(),s($(n)),a()};return e.jsxs(te,{onSubmit:c,children:[e.jsxs(z,{children:["Name",e.jsx(F,{type:"text",value:o,disabled:!0})]}),e.jsxs(z,{children:["Phone",e.jsx(F,{type:"tel",name:"number",value:r,disabled:!0})]}),e.jsxs(oe,{children:[e.jsx(L,{type:"submit",children:"Delete"}),e.jsx(L,{type:"button",onClick:a,children:"Cancel"})]})]})},ne=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60px;
  min-width: 60px;
  border: 2px solid var(--bgcolor-accent);
  border-radius: 50% 50% 50% 0;
  margin-right: 1rem;
`,ae=t.span`
  display: block;
  font-size: 1.25rem;
  font-weight: 400;
  color: var(--title-color);
`,se=({str:n})=>{const o=n?n.split(" ").map(r=>r[0].toUpperCase()).join(""):" ";return e.jsx(ne,{children:e.jsx(ae,{children:o})})},ce=({id:n,name:o,number:r})=>{const[a,s]=p.useState(!1),[c,d]=p.useState(!1),i=()=>s(!a),m=()=>d(!c);return e.jsxs(e.Fragment,{children:[e.jsxs(H,{children:[e.jsx(se,{str:o}),e.jsxs(K,{children:[e.jsx(Q,{children:o}),e.jsx(X,{children:r})]}),e.jsxs(Y,{children:[e.jsx(w,{type:"button",onClick:i,children:"Edit"}),e.jsx(w,{type:"button",onClick:m,children:"Delete"})]})]}),a&&e.jsx(C,{onClose:i,children:e.jsx(ee,{id:n,name:o,number:r,onClose:i})}),c&&e.jsx(C,{onClose:m,children:e.jsx(re,{id:n,name:o,number:r,onClose:m})})]})},ie=t.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  height: fit-content;
  padding: 1rem;

  @media screen and (min-width: 1200px) and (max-width: 1600px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: 1601px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`,le=()=>{const n=u(q);return e.jsx(ie,{children:n.map(({id:o,name:r,number:a})=>e.jsx(ce,{id:o,name:r,number:a},o))})},de=t.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 1.25rem;
  color: var(--bgcolor-accent);
  margin-bottom: 1rem;
`,me=t.input`
  width: 23rem;
  font-size: 1.25rem;
  padding: 0.5rem;
  margin-top: 0.25rem;
  border-radius: 0 0 1.25rem 0;
  background-color: inherit;
  border: none;
  border-bottom: 1px solid var(--bgcolor-accent);
  color: var(--title-color);
  &::placeholder {
    font-weight: 200;
    font-style: italic;
    color: var(--bgcolor-second);
  }
`,ue=()=>{const n=O(),o=r=>{var a;n(V((a=r==null?void 0:r.target)==null?void 0:a.value))};return e.jsxs(de,{children:["Find contacts by name",e.jsx(me,{type:"text",name:"filter",title:"Filter is case unsensitive.",onChange:o,required:!0})]})},pe=t.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  width: fit-content;
  height: fit-content;
  font-size: 1.25rem;
  font-weight: 400;
  color: var(--bgcolor-accent);
  border: 1px solid var(--bgcolor-accent);
  border-radius: 1rem;
  margin: 2rem auto;
`,D=t.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  & + & {
    margin-top: 0.75rem;
  }
`,I=t.input`
  width: 20rem;
  font-size: 1.25rem;
  padding: 0.5rem;
  margin-top: 0.25rem;
  border-radius: 0 0 1.25rem 0;
  background-color: inherit;
  border: none;
  border-bottom: 1px solid var(--bgcolor-accent);
  color: var(--title-color);
  &::placeholder {
    font-weight: 200;
    font-style: italic;
    color: var(--bgcolor-second);
  }
`,ge=t.button`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--main-bgcolor);
  padding: 0.5rem 1rem;
  margin-top: 2rem;
  border-radius: 0.25rem;
  border: none;
  background-color: var(--bgcolor-first);
  transition: background-color 250ms ease, color 250ms ease;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: var(--bgcolor-accent);
    color: var(--title-color);
  }
`,be=()=>{const n=u(x),o=h(),r=a=>{a.preventDefault();const s=a==null?void 0:a.target,{name:c,number:d}=s.elements,i=c.value.trim(),m=d.value.trim();n.some(f=>f.name.toLowerCase().trim()===i.toLowerCase())?M("Contact with such name exists yet."):(s.reset(),o(W({name:i,number:m})))};return e.jsxs(pe,{onSubmit:r,children:[e.jsxs(D,{children:["Name",e.jsx(I,{type:"text",name:"name",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,autoComplete:"off"})]}),e.jsxs(D,{children:["Phone",e.jsx(I,{type:"tel",name:"number",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,autoComplete:"off"})]}),e.jsx(ge,{type:"submit",children:"Add contact"})]})},xe=()=>{const n=h(),{isLoading:o,error:r}=G();return p.useEffect(()=>{n(J())},[n]),e.jsxs(T,{children:[e.jsxs(R,{children:[e.jsx(ue,{}),e.jsx(be,{}),o&&!r&&e.jsx(U,{})]}),e.jsx(le,{})]})};export{xe as default};
