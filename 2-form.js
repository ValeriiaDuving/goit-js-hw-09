import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const s="feedback-form-state",a=document.querySelector(".feedback-form"),r=a.elements.email,n=a.elements.message;let e={email:"",message:""};const l=localStorage.getItem(s);if(l)try{e=JSON.parse(l),r.value=e.email||"",n.value=e.message||""}catch(t){console.error("Помилка при зчитуванні з localStorage",t)}a.addEventListener("input",t=>{const{name:m,value:o}=t.target;e[m]=o.trim(),localStorage.setItem(s,JSON.stringify(e))});a.addEventListener("submit",t=>{if(t.preventDefault(),!e.email||!e.message){alert("Fill please all fields");return}console.log("Submitted data:",e),e={email:"",message:""},localStorage.removeItem(s),a.reset()});
//# sourceMappingURL=2-form.js.map
