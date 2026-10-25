/* CMS loader: reads content.json. Never edit this file by hand. */
var CMS={};
try{var x=new XMLHttpRequest();x.open('GET','content.json?t='+Date.now(),false);x.send();if(x.status===200)CMS=JSON.parse(x.responseText)}catch(e){}
function CMSAPPLY(){
 if(CMS.work&&CMS.work.length){WORK.length=0;CMS.work.forEach(function(w){WORK.push([w.n,w.d,w.u,w.img||shot(w.u)])})}
 if(CMS.reviews&&CMS.reviews.length){REV.length=0;CMS.reviews.forEach(function(r){REV.push([r.p,r.t,r.m,+r.r||5,r.dt])});REV.sort(function(a,b){return new Date(b[4]||0)-new Date(a[4]||0)})}
 if(CMS.prices)for(var k in CMS.prices)if(SV[k])CMS.prices[k].forEach(function(v,i){if(SV[k].pl[i]&&v)SV[k].pl[i][1]=v});
}
(function(){
 function e(s){return String(s==null?'':s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
 function inject(){
  document.querySelectorAll('.cmsx').forEach(function(n){n.remove()});
  (CMS.sections||[]).forEach(function(s){
   var v=document.getElementById('v-'+s.page);if(!v)return;
   var d=document.createElement('div');d.className='card cmsx';
   d.innerHTML=(s.img?'<img src="'+e(s.img)+'" alt="" style="width:100%;border-radius:14px;margin-bottom:12px">':'')+(s.title?'<h2>'+e(s.title)+'</h2>':'')+(s.text?'<p style="margin-top:6px;color:var(--tx2)">'+e(s.text).replace(/\n/g,'<br>')+'</p>':'')+(s.btn&&s.link?'<div class="btns"><a class="btn f" href="'+e(s.link)+'"'+(/^https?:/.test(s.link)?' target="_blank" rel="noopener"':'')+'>'+e(s.btn)+'</a></div>':'');
   v.appendChild(d)})}
 addEventListener('load',inject);
 addEventListener('hashchange',function(){setTimeout(inject,80)});
})();
