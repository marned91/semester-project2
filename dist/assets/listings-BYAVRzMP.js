import{d as a,b as c}from"./doFetch-DiDBEFLs.js";import{h as d}from"./main-DGQGQn9f.js";async function h(t,e=1,s=50){let l=`${c}/?_bids=true&limit=${s}&page=${e}&sort=created&sortOrder=desc`;if(t){if(t==="other")return(await a(l)).filter(r=>r.tags&&r.tags.length>0&&!["art","fashion","sport","vintage","interior","decor"].some(i=>r.tags.includes(i))).sort((r,i)=>new Date(i.created)-new Date(r.created)).slice(0,50);l=`${c}/?_tag=${encodeURIComponent(t)}&_bids=true&limit=${s}&page=${e}&sort=created&sortOrder=desc`}return(await a(l)).sort((n,o)=>new Date(o.created)-new Date(n.created))}async function w(){const e=new URLSearchParams(window.location.search).get("id");return e?await a(`${c}/${e}?_bids=true`)||null:(console.error("No listing ID found in URL."),null)}async function L(t){try{const e=await a(c,{method:"POST",body:JSON.stringify(t)});if(e===null)throw new Error("No content received from the server");return e}catch(e){throw console.error("Error creating listing:",e),e}}async function m(t){try{const e=await a(`${c}/search?q=${t}&_bids=true`);return(Array.isArray(e)?e:e?.data||[]).filter(n=>{const o=t.toLowerCase();return n.title.toLowerCase().includes(o)||n.description.toLowerCase().includes(o)}).sort((n,o)=>{const r=n.title.toLowerCase().includes(t.toLowerCase()),i=o.title.toLowerCase().includes(t.toLowerCase());return r&&!i?-1:!r&&i?1:0})}catch(e){return console.error("Error fetching listings:",e),[]}}async function p(t){const e=`${c}/${t}`;try{if(await a(e,{method:"DELETE"})===null)d("Listing deleted successfully!","success"),setTimeout(()=>window.location.pathname=/profile/,2e3);else throw new Error("Failed to delete the listing")}catch(s){console.error(s),d("An error occurred while deleting the listing. Please try again.","error")}}export{m as a,h as b,L as c,p as d,w as f};
//# sourceMappingURL=listings-BYAVRzMP.js.map
