import{A as t}from"./index-DsHqcRFh.js";const i={getMe:e=>{const r=`user/${e}`;return t.get(r)},getUsers:(e,r,s,u)=>{const o=`users?pageNo=${e}&pageSize=${r}&sortBy=${s}&sortDir=${u}`;return t.get(o)},getById:e=>{const r=`users/${e}`;return t.get(r)},updateProfile:(e,r)=>{const s=`user/${r}`;return t.put(s,e)},deleteUser:(e,r)=>{const s=`user/${e}?userId=${r}`;return t.delete(s)},searchUser:e=>{const r=`users/search-by-name?keyword=${e.keyWord}&pageNo=${e.pageNo}&pageSize=${e.pageSize}&sortBy=${e.sortBy}&sortDir=${e.sortDir}`;return t.get(r)},changePassword:e=>t.post("user/change-password",e),activeUser:async e=>{const r=`user/active/${e.email}`;return await t.post(r)},deactiveUser:async e=>{const r=`user/deactive/${e.email}`;return await t.post(r)}};export{i as u};
