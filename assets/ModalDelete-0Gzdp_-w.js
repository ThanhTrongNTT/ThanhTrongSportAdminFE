import{j as e}from"./index-DsHqcRFh.js";const c=({isVisible:t,onClose:l,children:s})=>t?e.jsx(e.Fragment,{children:e.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-50",children:e.jsxs("div",{className:"flex flex-col",children:[e.jsx("button",{className:"text-black text-xl place-self-end",onClick:l,children:"X"}),e.jsx("div",{className:"bg-white p-2 rounded",children:s})]})})}):null,n=({id:t,handleDelete:l,title:s,onCloseDelModal:r})=>e.jsxs("div",{className:"text-center p-10",children:[e.jsx("h3",{className:"mb-5 text-lg font-bold text-gray-500 dark:text-gray-400",children:s}),e.jsxs("div",{className:"flex justify-center gap-4",children:[e.jsx("button",{className:"bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full",color:"failure",onClick:()=>{l(t)},children:"Vâng, tôi chắc chắn"}),e.jsx("button",{className:"bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full",color:"gray",onClick:r,children:"Không, hủy bỏ"})]})]});export{c as M,n as a};