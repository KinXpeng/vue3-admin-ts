import{A as F,V as s,o as b,c as g,i as e,I as o,a as x,M as V,L as z}from"./_@vue_runtime-core@3.3.4@@vue-95679d18.js";import{r as B,j as A}from"./_@vue_reactivity@3.3.4@@vue-7ec0c22d.js";import{M as n}from"./_@vue_shared@3.3.4@@vue-bf8f17aa.js";const I={class:"system-user-dialog-container"},R={key:0},j={class:"dialog-footer"},E=F({name:"systemUserDialog"}),K=F({...E,emits:["refresh"],setup(q,{expose:w,emit:D}){const h=B(),l=A({ruleForm:{userName:"",userNickname:"",roleSign:"",department:[],phone:"",email:"",sex:"",password:"",overdueTime:"",status:!0,describe:""},deptData:[],dialog:{isShowDialog:!1,type:"",title:"",submitTxt:""}}),N=(p,a)=>{p==="edit"?(l.ruleForm=a,l.dialog.title="修改用户",l.dialog.submitTxt="修 改"):(l.dialog.title="新增用户",l.dialog.submitTxt="新 增"),l.dialog.isShowDialog=!0,U()},i=()=>{l.dialog.isShowDialog=!1},v=()=>{i()},S=()=>{i(),D("refresh")},U=()=>{l.deptData.push({deptName:"vueNextAdmin",createTime:new Date().toLocaleString(),status:!0,sort:Math.random(),describe:"顶级部门",id:Math.random(),children:[{deptName:"IT外包服务",createTime:new Date().toLocaleString(),status:!0,sort:Math.random(),describe:"总部",id:Math.random()},{deptName:"资本控股",createTime:new Date().toLocaleString(),status:!0,sort:Math.random(),describe:"分部",id:Math.random()}]})};return w({openDialog:N}),(p,a)=>{const r=s("el-input"),d=s("el-form-item"),m=s("el-col"),u=s("el-option"),c=s("el-select"),k=s("el-cascader"),y=s("el-date-picker"),T=s("el-switch"),M=s("el-row"),C=s("el-form"),_=s("el-button"),L=s("el-dialog");return b(),g("div",I,[e(L,{title:l.dialog.title,modelValue:l.dialog.isShowDialog,"onUpdate:modelValue":a[11]||(a[11]=t=>l.dialog.isShowDialog=t),width:"769px"},{footer:o(()=>[x("span",j,[e(_,{onClick:v,size:"default"},{default:o(()=>[V("取 消")]),_:1}),e(_,{type:"primary",onClick:S,size:"default"},{default:o(()=>[V(n(l.dialog.submitTxt),1)]),_:1})])]),default:o(()=>[e(C,{ref_key:"userDialogFormRef",ref:h,model:l.ruleForm,size:"default","label-width":"90px"},{default:o(()=>[e(M,{gutter:35},{default:o(()=>[e(m,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:o(()=>[e(d,{label:"账户名称"},{default:o(()=>[e(r,{modelValue:l.ruleForm.userName,"onUpdate:modelValue":a[0]||(a[0]=t=>l.ruleForm.userName=t),placeholder:"请输入账户名称",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(m,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:o(()=>[e(d,{label:"用户昵称"},{default:o(()=>[e(r,{modelValue:l.ruleForm.userNickname,"onUpdate:modelValue":a[1]||(a[1]=t=>l.ruleForm.userNickname=t),placeholder:"请输入用户昵称",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(m,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:o(()=>[e(d,{label:"关联角色"},{default:o(()=>[e(c,{modelValue:l.ruleForm.roleSign,"onUpdate:modelValue":a[2]||(a[2]=t=>l.ruleForm.roleSign=t),placeholder:"请选择",clearable:"",class:"w100"},{default:o(()=>[e(u,{label:"超级管理员",value:"admin"}),e(u,{label:"普通用户",value:"common"})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(m,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:o(()=>[e(d,{label:"部门"},{default:o(()=>[e(k,{options:l.deptData,props:{checkStrictly:!0,value:"deptName",label:"deptName"},placeholder:"请选择部门",clearable:"",class:"w100",modelValue:l.ruleForm.department,"onUpdate:modelValue":a[3]||(a[3]=t=>l.ruleForm.department=t)},{default:o(({node:t,data:f})=>[x("span",null,n(f.deptName),1),t.isLeaf?z("",!0):(b(),g("span",R," ("+n(f.children.length)+") ",1))]),_:1},8,["options","modelValue"])]),_:1})]),_:1}),e(m,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:o(()=>[e(d,{label:"手机号"},{default:o(()=>[e(r,{modelValue:l.ruleForm.phone,"onUpdate:modelValue":a[4]||(a[4]=t=>l.ruleForm.phone=t),placeholder:"请输入手机号",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(m,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:o(()=>[e(d,{label:"邮箱"},{default:o(()=>[e(r,{modelValue:l.ruleForm.email,"onUpdate:modelValue":a[5]||(a[5]=t=>l.ruleForm.email=t),placeholder:"请输入",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(m,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:o(()=>[e(d,{label:"性别"},{default:o(()=>[e(c,{modelValue:l.ruleForm.sex,"onUpdate:modelValue":a[6]||(a[6]=t=>l.ruleForm.sex=t),placeholder:"请选择",clearable:"",class:"w100"},{default:o(()=>[e(u,{label:"男",value:"男"}),e(u,{label:"女",value:"女"})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(m,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:o(()=>[e(d,{label:"账户密码"},{default:o(()=>[e(r,{modelValue:l.ruleForm.password,"onUpdate:modelValue":a[7]||(a[7]=t=>l.ruleForm.password=t),placeholder:"请输入",type:"password",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(m,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:o(()=>[e(d,{label:"账户过期"},{default:o(()=>[e(y,{modelValue:l.ruleForm.overdueTime,"onUpdate:modelValue":a[8]||(a[8]=t=>l.ruleForm.overdueTime=t),type:"date",placeholder:"请选择",class:"w100"},null,8,["modelValue"])]),_:1})]),_:1}),e(m,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:o(()=>[e(d,{label:"用户状态"},{default:o(()=>[e(T,{modelValue:l.ruleForm.status,"onUpdate:modelValue":a[9]||(a[9]=t=>l.ruleForm.status=t),"inline-prompt":"","active-text":"启","inactive-text":"禁"},null,8,["modelValue"])]),_:1})]),_:1}),e(m,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:o(()=>[e(d,{label:"用户描述"},{default:o(()=>[e(r,{modelValue:l.ruleForm.describe,"onUpdate:modelValue":a[10]||(a[10]=t=>l.ruleForm.describe=t),type:"textarea",placeholder:"请输入用户描述",maxlength:"150"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1},8,["title","modelValue"])])}}});export{K as default};