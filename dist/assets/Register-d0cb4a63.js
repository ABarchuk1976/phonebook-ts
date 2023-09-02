import{s as o,u as d,j as e,r as u}from"./index-106a910f.js";const p=o.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  width: fit-content;
  height: fit-content;
  font-size: 1.25rem;
  font-weight: 400;
  color: var(--bgcolor-accent);
  border: 1px solid var(--bgcolor-accent);
  border-radius: 1rem;
  margin: 2rem auto;
`,t=o.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  & + & {
    margin-top: 0.75rem;
  }
`,a=o.input`
  width: 25rem;
  font-size: 1.25rem;
  padding: 0.5rem;
  margin-top: 0.25rem;
  border-radius: 0 0 1.25rem 0;
  background-color: var(--main-bgcolor);
  border: none;
  border-bottom: 1px solid var(--bgcolor-accent);
  color: var(--title-color);
  &::placeholder {
    font-weight: 200;
    font-style: italic;
    color: var(--bgcolor-second);
  }
`,g=o.button`
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
`,f=()=>{const s=d(),l=r=>{r.preventDefault();const n=r==null?void 0:r.currentTarget,{name:i,email:c,password:m}=n.elements;s(u({name:i.value,email:c.value,password:m.value})),n.reset()};return e.jsxs(p,{onSubmit:l,autoComplete:"off",children:[e.jsxs(t,{children:["Name:",e.jsx(a,{type:"text",name:"name",autoComplete:"off",placeholder:"enter your name...",required:!0})]}),e.jsxs(t,{children:["Email:",e.jsx(a,{type:"email",name:"email",autoComplete:"off",placeholder:"enter your email...",required:!0})]}),e.jsxs(t,{children:["Password:",e.jsx(a,{type:"password",name:"password",autoComplete:"current-password",placeholder:"6 characters or longer...",required:!0})]}),e.jsx(g,{type:"submit",children:"Register"})]})},h=()=>e.jsx(f,{});export{h as default};
