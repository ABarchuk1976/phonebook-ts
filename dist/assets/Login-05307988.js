import{s as e,u as d,j as o,l as m}from"./index-106a910f.js";const u=e.form`
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
  background-color: var(--main-bgcolor);
  border: 1px solid var(--bgcolor-accent);
  border-radius: 1rem;
  margin: 2rem auto;
`,n=e.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  & + & {
    margin-top: 0.75rem;
  }
`,a=e.input`
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
`,p=e.button`
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
`,g=()=>{const s=d(),l=r=>{r.preventDefault();const t=r==null?void 0:r.currentTarget,{email:c,password:i}=t.elements;s(m({email:c.value,password:i.value})),t.reset()};return o.jsxs(u,{onSubmit:l,children:[o.jsxs(n,{children:["Email",o.jsx(a,{type:"email",name:"email",autoComplete:"off",placeholder:"enter your email...",required:!0})]}),o.jsxs(n,{children:["Password",o.jsx(a,{type:"password",name:"password",autoComplete:"current-password",placeholder:"enter a password...",required:!0})]}),o.jsx(p,{type:"submit",children:"Log In"})]})},f=()=>o.jsx(g,{});export{f as default};
