(()=>{
  const footer=document.querySelector('footer');
  if(!footer||footer.querySelector('.site-network')) return;
  const groups=[
    ['AI・Web制作・開発',[
      ['RSS7 AI Works','https://rss7.net/','AI制作・開発ポータル'],
      ['BitFrame','https://bitframe.rss7.net/','AI × CM・動画制作'],
      ['Claude Code教室','https://claudecode.rss7.net/','Claude Code初心者向け'],
      ['チャットホームページ','https://chat.rss7.net/','Web・AI関連'],
      ['AI Agent','https://oosaka0123-sudo.github.io/ai-agent/','AI開発・複数AI活用']
    ]],
    ['サーフィン・スポーツ',[
      ['関西サーファーKS','https://kansai.rss7.net/','関西の波情報・サーフィン情報'],
      ['関東サーファーKS','https://kanto.rss7.net/','関東版の波情報'],
      ['S.LEAGUE NOW','https://sleague.rss7.net/','S.LEAGUE情報']
    ]],
    ['仏教・思想・スピリチュアル',[
      ['ブッダの教え','https://oosaka0123-sudo.github.io/buddha-no-oshie/','仏教・ブッダ学習'],
      ['密教図譜','https://oosaka0123-sudo.github.io/mikkyou-guide/','密教・仏教系'],
      ['アカシックレコード','https://oosaka0123-sudo.github.io/akashic-records-jp/','思想・歴史・スピリチュアル・デジタルアーカイブ']
    ]],    ['暮らし・仕事・実用情報',[
      ['現場資格ラボ','https://genba.rss7.net/','現場系資格・資格診断'],
      ['防犯ラボ','https://bouhan.rss7.net/','防犯情報・アフィリエイト'],
      ['バーチャルオフィス完全ガイド','https://oosaka0123-sudo.github.io/virtual-office/','バーチャルオフィス比較'],
      ['50PLUS','https://oosaka0123-sudo.github.io/50plus/','50代以降向けメディア'],
      ['50代体力研究所｜VITALITY ATLAS','https://oosaka0123-sudo.github.io/50plus-vitality-jp/','50代の体力・疲れ・運動・生活改善情報']
    ]],
    ['映像・人生記録',[
      ['映像工房 軌跡','https://kiseki.rss7.net/','終活ビデオ・映像制作']
    ]],
    ['FX・金融',[
      ['FX Entry Lab','https://oosaka0123-sudo.github.io/fx-entry-lab/','FX関連']
    ]]
  ];
  const network=document.createElement('section');
  network.className='site-network';
  network.setAttribute('aria-label','関連サイト');
  network.innerHTML=`<div class="site-network__head"><p>NETWORK</p><h2>関連サイト</h2></div><div class="site-network__grid">${groups.map(([title,sites])=>`<section class="site-network__group"><h3>${title}</h3><div class="site-network__links">${sites.map(([name,url,desc])=>`<a href="${url}" target="_blank" rel="noopener noreferrer nofollow"><strong>${name}</strong><span>${desc}</span></a>`).join('')}</div></section>`).join('')}</div>`;
  footer.prepend(network);
  const style=document.createElement('style');
  style.textContent=`footer{display:block!important;padding:0!important}.site-network{padding:72px var(--pad) 56px;border-top:1px solid var(--line);background:#12110e}.site-network__head{display:flex;justify-content:space-between;align-items:end;gap:24px;margin-bottom:38px}.site-network__head p{margin:0;font:9px Arial,sans-serif;letter-spacing:.34em;color:var(--accent)}.site-network__head h2{margin:0;font-weight:400;font-size:clamp(28px,4vw,52px);line-height:1}.site-network__grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:42px 36px}.site-network__group{min-width:0}.site-network__group h3{margin:0 0 14px;padding-bottom:10px;border-bottom:1px solid var(--line);font:11px/1.5 Arial,sans-serif;letter-spacing:.08em;color:#d8d1c5}.site-network__links{display:grid}.site-network__links a{display:block;padding:12px 0;text-decoration:none;border-bottom:1px solid rgba(238,233,222,.08);transition:opacity .2s ease,transform .2s ease}.site-network__links a:hover,.site-network__links a:focus-visible{opacity:.72;transform:translateX(3px)}.site-network__links strong,.site-network__links span{display:block}.site-network__links strong{font:600 13px/1.45 Arial,sans-serif;letter-spacing:.02em;color:var(--paper)}.site-network__links span{margin-top:4px;font:10px/1.55 Arial,sans-serif;letter-spacing:.02em;color:var(--muted)}footer>p{margin:0;padding-left:var(--pad);padding-right:var(--pad);font:10px/1.8 Arial,sans-serif;letter-spacing:.08em;color:var(--muted)}footer>p:first-of-type{padding-top:28px;border-top:1px solid var(--line)}footer>p:last-of-type{padding-bottom:38px}@media(max-width:980px){.site-network__grid{grid-template-columns:repeat(2,minmax(0,1fr))}}@media(max-width:620px){.site-network{padding:54px 20px 40px}.site-network__head{display:block;margin-bottom:28px}.site-network__head h2{margin-top:8px}.site-network__grid{grid-template-columns:1fr;gap:30px}.site-network__links a{padding:11px 0}.site-network__links strong{font-size:14px}.site-network__links span{font-size:11px}footer>p{padding-left:20px;padding-right:20px}footer>p:first-of-type{padding-top:22px}footer>p:last-of-type{padding-bottom:30px}}`;
  document.head.append(style);
})();
