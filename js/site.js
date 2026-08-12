(function () {
  const d = window.WNIS_DESIGN;
  Object.entries({ '--primary':d.primary,'--dark':d.dark,'--accent':d.accent,'--pale':d.pale,'--page':d.page,'--text':d.text,'--muted':d.muted,'--border':d.border,'--width':d.contentWidth }).forEach(([k,v])=>document.documentElement.style.setProperty(k,v));
  const c = window.WNIS_CONTENT;
  document.querySelectorAll('[data-site-name]').forEach(el=>el.textContent=c.site.name);
  document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
  const toggle=document.querySelector('.nav-toggle'), links=document.querySelector('.nav-links');
  toggle?.addEventListener('click',()=>{const open=links.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});

  const areas=document.querySelector('[data-research-areas]');
  if(areas) areas.innerHTML=c.home.researchAreas.map(x=>`<article><h3>${x.title}</h3><p>${x.text}</p></article>`).join('');
  const team=document.querySelector('[data-team]');
  if(team){
    const person=x=>`${x.url?`<a class="person" href="${x.url}"${x.url.startsWith('http')?' target="_blank" rel="noreferrer"':''}>`:'<article class="person">'}${x.photo?`<img src="../${x.photo}" alt="${x.name}">`:''}<div><p class="kicker">${x.role}</p><h3>${x.name}${x.url?' <span>↗</span>':''}</h3>${x.bio?`<p>${x.bio}</p>`:''}${x.interests?`<p>${x.interests}</p>`:''}${x.email?`<p><span class="email">${x.email}</span></p>`:''}</div>${x.url?'</a>':'</article>'}`;
    team.innerHTML=`<section class="people-section"><h2>Lab Director</h2><div class="people-grid director">${person(c.team.director)}</div></section><section class="people-section"><h2>Students</h2><div class="people-grid">${c.team.students.map(person).join('')}</div></section><section class="people-section"><h2>Alumni</h2><div class="people-grid">${c.team.alumni.map(person).join('')}</div></section><section class="people-section"><h2>Past Visitors</h2><div class="people-grid">${c.team.pastVisitors.map(person).join('')}</div></section>`;
  }
  const pubs=document.querySelector('[data-publications]');
  if(pubs){
    const groups=Object.groupBy?Object.groupBy(c.publications.items,x=>x.year):c.publications.items.reduce((a,x)=>((a[x.year]??=[]).push(x),a),{});
    pubs.innerHTML=Object.keys(groups).sort((a,b)=>b-a).map(year=>`<section class="pub-year"><h2>${year}</h2><div>${groups[year].map(p=>`${p.link?`<a class="pub" href="${p.link}" target="_blank" rel="noreferrer">`:'<article class="pub">'}<div><span class="tag">${p.type}</span><h3>${p.title}${p.link?' <span class="arrow">↗</span>':''}</h3><p>${p.authors}</p><p class="venue">${p.venue}</p></div>${p.link?'</a>':'</article>'}`).join('')}</div></section>`).join('');
  }
})();
