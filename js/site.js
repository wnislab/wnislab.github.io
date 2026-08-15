(function() {
  const d = window.WNIS_DESIGN;
  Object.entries({
    '--primary': d.primary,
    '--dark': d.dark,
    '--accent': d.accent,
    '--pale': d.pale,
    '--page': d.page,
    '--text': d.text,
    '--muted': d.muted,
    '--border': d.border,
    '--width': d.contentWidth
  }).forEach(([k, v]) => document.documentElement.style.setProperty(k, v));
  const c = window.WNIS_CONTENT;
  const externalLinkIcon = `
    <svg class="external-link-icon"
         viewBox="0 0 16 16"
         aria-hidden="true"
         focusable="false">
      <path d="M3 13 13 3M6 3h7v7"></path>
    </svg>
  `;
  document.querySelectorAll('[data-site-name]').forEach(
    el => el.textContent = c.site.name
  );
  document.querySelectorAll('[data-year]').forEach(
    el => el.textContent = new Date().getFullYear()
  );

  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');

  toggle?.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  const areas = document.querySelector('[data-research-areas]');
  if (areas) {
    areas.innerHTML = c.home.researchAreas.map(area => `
      <article class="research-card" tabindex="0">
        <div class="research-card-preview">
          <img src="${area.image}" alt="">
          <div class="research-card-title">
            <h3>${area.title}</h3>
            <span aria-hidden="true">Explore ↑</span>
          </div>
        </div>
        <div class="research-card-details">
          <p>${area.text}</p>
        </div>
      </article>
    `).join('');
  }

  const formatNewsDate = date => new Intl.DateTimeFormat('en-US', {
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC'
  }).format(new Date(date));

  const sortedNews = [...c.news.items].sort(
    (a, b) => b.date.localeCompare(a.date)
  );

  const heroNews = document.querySelector('[data-hero-news]');
  if (heroNews) {
    document.querySelector('#hero-news-title').textContent = c.news.heading;
    heroNews.innerHTML = sortedNews
      .slice(0, 3)
      .map(item => `
        <article>
          <time datetime="${item.date}">${formatNewsDate(item.date)}</time>
          <p>
            ${item.text}
            ${item.acceptanceRate ? `<span class="acceptance-rate">Acceptance rate: ${item.acceptanceRate}</span>` : ''}
          </p>
        </article>
      `)
      .join('');
  }

  const newsArchive = document.querySelector('[data-news]');
  if (newsArchive) {
    const newsByYear = sortedNews.reduce((result, item) => {
      const year = item.date.slice(0, 4);
      (result[year] ??= []).push(item);
      return result;
    }, {});

    const newsItem = item => `
      <article class="news-item">
        <time datetime="${item.date}">${formatNewsDate(item.date)}</time>
        <div>
          <p>
            ${item.text}
            ${item.acceptanceRate ? `<span class="acceptance-rate">Acceptance rate: ${item.acceptanceRate}</span>` : ''}
          </p>
          ${item.url ? `<a class="news-link" href="${item.url}" target="_blank" rel="noreferrer">${item.linkLabel || 'Read more'} ${externalLinkIcon}</a>` : ''}
        </div>
      </article>
    `;

    newsArchive.innerHTML = Object.keys(newsByYear)
      .sort((a, b) => b - a)
      .map(year => `
        <section class="news-year">
          <h2>${year}</h2>
          <div>${newsByYear[year].map(newsItem).join('')}</div>
        </section>
      `)
      .join('');
  }

  const galleryWindow = document.querySelector('.gallery-window');
  const galleryTrack = document.querySelector('.gallery-track');
  const gallerySource = galleryTrack?.querySelector('.gallery-set');

  if (galleryWindow && galleryTrack && gallerySource) {
    const pixelsPerSecond = 24;
    let resizeFrame;

    const buildGalleryLoop = () => {
      galleryTrack.querySelectorAll('[data-gallery-clone]').forEach(
        clone => clone.remove()
      );

      const setWidth = gallerySource.getBoundingClientRect().width;
      if (!setWidth) return;

      const cloneCount = Math.max(
        1,
        Math.ceil(galleryWindow.clientWidth / setWidth)
      );

      for (let index = 0; index < cloneCount; index += 1) {
        const clone = gallerySource.cloneNode(true);
        clone.dataset.galleryClone = '';
        clone.setAttribute('aria-hidden', 'true');
        clone.querySelectorAll('img').forEach(image => image.alt = '');
        galleryTrack.append(clone);
      }

      galleryTrack.style.setProperty('--gallery-shift', `${setWidth}px`);
      galleryTrack.style.setProperty(
        '--gallery-duration',
        `${setWidth / pixelsPerSecond}s`
      );
    };

    const scheduleGalleryBuild = () => {
      cancelAnimationFrame(resizeFrame);
      resizeFrame = requestAnimationFrame(buildGalleryLoop);
    };

    buildGalleryLoop();

    if ('ResizeObserver' in window) {
      new ResizeObserver(scheduleGalleryBuild).observe(galleryWindow);
    } else {
      window.addEventListener('resize', scheduleGalleryBuild);
    }
  }

  const team = document.querySelector('[data-team]');
  if (team) {
    const person = member => {
      const openingTag = member.url ?
        `<a class="person" href="${member.url}"${member.url.startsWith('http') ? ' target="_blank" rel="noreferrer"' : ''}>` :
        '<article class="person">';
      const closingTag = member.url ? '</a>' : '</article>';

      return `
        ${openingTag}
          ${member.photo ? `<img src="../${member.photo}" alt="${member.name}">` : ''}
          <div>
            <p class="kicker">${member.role}</p>
            <h3>${member.name}${member.url ? externalLinkIcon : ''}</h3>
            ${member.bio ? `<p>${member.bio}</p>` : ''}
            ${member.interests ? `<p>${member.interests}</p>` : ''}
            ${member.email ? `<p><span class="email">${member.email}</span></p>` : ''}
          </div>
        ${closingTag}
      `;
    };

    const peopleSection = (heading, members, extraClass = '') => `
      <section class="people-section">
        <h2>${heading}</h2>
        <div class="people-grid${extraClass ? ` ${extraClass}` : ''}">
          ${members.map(person).join('')}
        </div>
      </section>
    `;

    team.innerHTML = [
      peopleSection('Lab Director', [c.team.director], 'director'),
      peopleSection('Students', c.team.students),
      peopleSection('Alumni', c.team.alumni),
      peopleSection('Past Visitors', c.team.pastVisitors)
    ].join('');
  }

  const pubs = document.querySelector('[data-publications]');
  if (pubs) {
    const groups = c.publications.items.reduce((result, publication) => {
      (result[publication.year] ??= []).push(publication);
      return result;
    }, {});

    const publicationButton = (label, url, secondary = false) => url ? `
      <a class="publication-button${secondary ? ' secondary' : ''}"
         href="${url}"
         target="_blank"
         rel="noreferrer">
        ${label} ${externalLinkIcon}
      </a>
    ` : '';

    const publication = item => {
      const publisher = publicationButton(
        item.publisherLabel,
        item.publisherUrl
      );
      const preprint = publicationButton(
        item.preprintLabel,
        item.preprintUrl,
        true
      );
      const actions = publisher || preprint ? `
        <div class="publication-actions">
          ${publisher}
          ${preprint}
        </div>
      ` : '';

      return `
        <article class="pub">
          <div>
            <span class="tag">${item.type}</span>
            <h3>${item.title}</h3>
            <p>${item.authors}</p>
            <p class="venue">${item.venue}</p>
            ${actions}
          </div>
        </article>
      `;
    };

    pubs.innerHTML = Object.keys(groups)
      .sort((a, b) => b - a)
      .map(year => `
        <section class="pub-year">
          <h2>${year}</h2>
          <div>${groups[year].map(publication).join('')}</div>
        </section>
      `)
      .join('');
  }
})();
