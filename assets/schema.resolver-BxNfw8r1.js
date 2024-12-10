import{j as o,d as c}from"./index-D2n9cPuO.js";import{a as m}from"./index.esm-BFtL9RYl.js";import{c as a,a as e,b as t,d as r,e as P}from"./index.esm-Dzjb_IoB.js";const p=({name:d,control:s,className:n,error:i,...u})=>{const{field:l}=m({name:d,control:s,defaultValue:""});return o.jsxs("div",{className:n,children:[o.jsx("input",{className:c("px-5 rounded-md py-3 border border-c6 w-full",i.length>0?"border-red-700 text-red-700":"border-gray-c3 text-black"),...l,...u}),i&&o.jsx("span",{className:"text-red-700",children:i})]})},g=({children:d,...s})=>o.jsx("div",{className:"text-left flex items-left flex-col gap-2",children:o.jsx(p,{...s})}),f=a({id:e().optional(),freeInformation:e().required("Please enter your Product free information!"),longDescription:e().required("Please enter your Product long description!"),washingInformation:e().required("Please enter your Product washing information!"),productName:e().required("Please enter your Product name!"),slug:e().required("Please enter your Product description!"),basePrice:t().min(5e4,"Please input value over 50000").required(),gender:r().required("Please choose your Product gender!"),category:r().required("Please choose your Product category!"),subImages:P().min(1,"Please provide at least one image!").required("Please provide images!")}),h=a({id:e().optional(),categoryName:e().required("Please enter your Category name!"),locale:e().required("Please enter your Locale!"),level:t().optional(),parentCategory:r().optional()}),v=a({id:e().optional(),name:e().required("Please enter your Sale name!"),description:e().required("Please enter your description!"),code:e().required("Please enter your code!"),discount:t().min(1,"Please input value over 1").max(99,"Max value is 99%").required("Please enter your discount!"),startDate:e().required("Please enter your start date!"),endDate:e().required("Please enter your end date!")}),b=a({id:e().optional(),description:e().required("Please enter your description!"),code:e().required("Please enter your code!"),discount:t().min(1,"Please input value over 1").max(99,"Max value is 99%").required("Please enter your discount!"),startDate:e().required("Please enter your start date!"),endDate:e().required("Please enter your end date!")}),j=a({id:e().optional(),code:e().matches(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,{message:"Please enter valid color code(#xxxxxx)!"}).required("Please enter your color code!"),name:e().required("Please enter your color name!"),displayCode:e().required("Please enter your display code!")}),S=a({id:e().optional(),color:r().required("Please choose your color!"),size:e().required("Please choose your size!"),stock:t().min(1,"Please input value over 1").required(),mainImage:r().required("Please provide images!"),product:r().optional()});export{g as F,f as P,b as a,j as b,h as c,S as p,v as s};