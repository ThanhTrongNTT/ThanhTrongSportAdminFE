import{A as n,u as y,r,j as e,B as m}from"./index-DsHqcRFh.js";import{P as f}from"./ToggleSwitch-C_7samGd.js";const g={getAllOrders:(t,a,c,d)=>{const i=`orders?pageNo=${t}&pageSize=${a}&sortBy=${c}&sortDir=${d}`;return n.get(i)},getOrderByUserId:t=>{const a=`orders/email/${t}`;return n.get(a)},getOrderById:t=>{const a=`orders/${t}`;return n.get(a)},deleteOrder:t=>{const a=`orders/${t}`;return n.delete(a)},updateOrderStatus:(t,a)=>{const c=`order/${t}/status?status=${a}`;return n.put(c,{status:a})}},b=[{label:"Order Placed",value:"ORDER_PLACED",color:"bg-blue-500"},{label:"Paid",value:"PAID",color:"bg-green-500"},{label:"Processing",value:"PROCESSING",color:"bg-yellow-500"},{label:"Shipped",value:"SHIPPED",color:"bg-purple-500"},{label:"Delivered",value:"DELIVERED",color:"bg-green-700"},{label:"Canceled",value:"CANCELED",color:"bg-red-500"}],S=()=>{y();const[t,a]=r.useState(1),[c,d]=r.useState(1),[i,w]=r.useState([]);r.useState(!1),r.useState(null),r.useState(!1),r.useState("");const j=s=>{a(s)},p=async()=>{const s=await g.getAllOrders(t-1,5,"modifiedDate","");s.result&&(w(s.data.items),d(s.data.totalPages))},N=async(s,u)=>{try{(await g.updateOrderStatus(s,u)).result&&(m.success("Status updated successfully!",{autoClose:1e3,delay:50,draggable:!1,pauseOnHover:!1}),p())}catch{m.error("Failed to update status!",{autoClose:1e3,delay:50,draggable:!1,pauseOnHover:!1})}};return r.useEffect(()=>{p()},[t]),e.jsx(e.Fragment,{children:e.jsxs("div",{className:"",children:[e.jsx("div",{className:"p-5",children:e.jsx("div",{className:"overflow-x-auto rounded-2xl border mx-4 border-gray-c4 ",children:e.jsxs("table",{className:"bg-white w-full text-sm text-left text-gray-400",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",className:"py-3 px-6",children:"Order Id"}),e.jsx("th",{scope:"col",className:"px-6",children:"User Name"}),e.jsx("th",{scope:"col",className:"px-6",children:"Total Price"}),e.jsx("th",{scope:"col",className:"px-6",children:"Status"}),e.jsx("th",{scope:"col",className:"px-6",children:"Payment Method"}),e.jsx("th",{scope:"col",className:"px-6",children:"Is Paid"}),e.jsx("th",{scope:"col",className:"px-6 text-center",children:"Action"})]})}),e.jsx("tbody",{children:i.map((s,u)=>{var h,x;const o=b.find(l=>l.value===s.status);return e.jsxs("tr",{className:"bg-white border border-gray-c2 hover:bg-gray-c2 cursor-pointer",children:[e.jsx("th",{scope:"row",className:"py-4 px-6 font-medium text-black whitespace-nowrap",children:s.id}),e.jsx("th",{scope:"row",className:"py-4 px-6 font-medium text-black whitespace-nowrap",children:(h=s.user)==null?void 0:h.userName}),e.jsx("th",{scope:"row",className:"py-4 px-6 font-medium whitespace-nowrap",children:(x=s.total)==null?void 0:x.toLocaleString("it-IT",{style:"currency",currency:"VND"})}),e.jsx("th",{className:"py-4 px-6 font-medium whitespace-nowrap",children:e.jsx("select",{value:s.status,onChange:l=>N(s.id??"",l.target.value),className:`w-auto h-8 py-1 px-2 text-sm rounded-full border-none  text-white ${(o==null?void 0:o.color)||"bg-gray-400"}`,children:b.map(l=>e.jsx("option",{value:l.value,children:l.label},l.value))})}),e.jsx("th",{scope:"row",className:"py-4 px-6 font-medium whitespace-nowrap",children:s.paymentMethod}),e.jsx("th",{scope:"row",className:"py-4 px-6 font-medium whitespace-nowrap",children:s.isPaid?"Paid":"Not Paid"}),e.jsx("th",{scope:"row",className:"py-4 px-6 font-medium text-black whitespace-nowrap",children:e.jsxs("div",{className:"text-center",children:[e.jsx("span",{className:"text-white hover:bg-white hover:text-black bg-success  rounded-lg px-2 mx-2",onClick:()=>{},children:"Edit"}),e.jsx("span",{className:"text-white bg-warning rounded-lg px-2 hover:bg-white hover:text-black mx-2",onClick:()=>{},children:"Delete"})]})})]},u)})})]})})}),e.jsx("div",{className:"flex justify-center",children:e.jsx(f,{showIcons:!0,currentPage:t,totalPages:c,onPageChange:j,layout:"pagination"})})]})})};export{S as default};