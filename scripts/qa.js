const fs=require('fs'),path=require('path');
const root=path.resolve(__dirname,'..');
const site='https://oosaka0123-sudo.github.io/buddha-no-oshie/';
const errors=[];
function walk(d,out=[]){for(const e of fs.readdirSync(d,{withFileTypes:true})){if(e.name==='.git')continue;const p=path.join(d,e.name);if(e.isDirectory())walk(p,out);else if(e.isFile()&&p.endsWith('.html'))out.push(p)}return out}
const htmlFiles=walk(root);
const fileByRel=new Set(htmlFiles.map(p=>path.relative(root,p).replace(/\\/g,'/')));
const sitemap=fs.readFileSync(path.join(root,'sitemap.xml'),'utf8');
const sitemapUrls=[...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m=>m[1]);
function urlToRel(u){
 if(!u.startsWith(site)) return null;
 let r=u.slice(site.length);
 if(!r) return 'index.html';
 if(r.endsWith('/')) return r+'index.html';
 return r;
}
const sitemapRels=sitemapUrls.map(urlToRel).filter(Boolean);
for(const rel of sitemapRels) if(!fileByRel.has(rel)) errors.push('sitemap missing file: '+rel);
const canonicalUrls=[];
let jsonLd=0,images=0;
for(const p of htmlFiles){
 const rel=path.relative(root,p).replace(/\\/g,'/');
 const s=fs.readFileSync(p,'utf8');
 for(const m of s.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)){
   jsonLd++; try{JSON.parse(m[1])}catch(e){errors.push(rel+' invalid JSON-LD')}
 }
 const cm=s.match(/<link rel="canonical" href="([^"]+)"/);
 if(cm) canonicalUrls.push(cm[1]);
 if(/日本一|No\.?1|ナンバーワン/i.test(s)) errors.push(rel+' unsupported ranking claim');
 if(rel.startsWith('articles/') && rel!=='articles/index.html'){
   if(!s.includes('class="article-sources"')) errors.push(rel+' missing article-sources');
   if(s.includes('class="source-ref"')) errors.push(rel+' legacy source-ref remains');
   if(s.includes('alt="仏教美術資料"')) errors.push(rel+' generic image alt remains');
 }
 for(const m of s.matchAll(/<img\b[^>]*>/g)){
   images++; const tag=m[0];
   if(!/\bwidth="\d+"/.test(tag)||!/\bheight="\d+"/.test(tag)) errors.push(rel+' image missing dimensions: '+tag.slice(0,120));
   const sm=tag.match(/src="([^"]+)"/); if(sm && !/^https?:|^data:/.test(sm[1])){
     const imgPath=path.resolve(path.dirname(p),sm[1]);
     if(!fs.existsSync(imgPath)) errors.push(rel+' missing image: '+sm[1]);
   }
 }
 for(const m of s.matchAll(/href="([^"]+)"/g)){
   const href=m[1];
   if(!href||href.startsWith('#')||/^(https?:|mailto:|tel:|javascript:)/.test(href)) continue;
   const clean=href.split('#')[0].split('?')[0]; if(!clean) continue;
   let target=path.resolve(path.dirname(p),clean);
   if(clean.endsWith('/')) target=path.join(target,'index.html');
   if(!fs.existsSync(target)) errors.push(rel+' broken internal href: '+href);
 }
}
const canonicalSet=new Set(canonicalUrls);
const sitemapSet=new Set(sitemapUrls);
if(canonicalSet.size!==sitemapSet.size) errors.push('canonical/sitemap count mismatch '+canonicalSet.size+'/'+sitemapSet.size);
for(const u of sitemapSet) if(!canonicalSet.has(u)) errors.push('sitemap URL lacks canonical page: '+u);
const textFiles=[path.join(root,'README.md'),...fs.readdirSync(path.join(root,'docs')).filter(x=>x.endsWith('.md')).map(x=>path.join(root,'docs',x))];
for(const p of textFiles){const s=fs.readFileSync(p,'utf8');if(/日本一|No\.?1|ナンバーワン/i.test(s))errors.push(path.relative(root,p)+' unsupported ranking claim')}
console.log(JSON.stringify({html:htmlFiles.length,canonical:canonicalSet.size,sitemap:sitemapSet.size,jsonLd,images,errors:errors.length},null,2));
if(errors.length){for(const e of errors)console.error('ERROR',e);process.exit(1)}
