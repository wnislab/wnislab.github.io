# WNIS Lab Website

Official website of the Wireless Networks & Intelligent Systems (WNIS) Lab at Saint Louis University.

Live site: [https://wnislab.github.io/](https://wnislab.github.io/)

## About

The WNIS Lab studies intelligent wireless systems that connect the physical and digital worlds. Its research spans wireless communication, sensing, artificial intelligence, programmable networking, digital twins, optical and underwater links, aerial networks, and wireless security.

This repository contains a dependency-free static website hosted with GitHub Pages. It uses HTML, CSS, and vanilla JavaScript, so no package installation or build step is required.

## Pages

- `index.html` — Home page, research areas, contact information, and photo gallery
- `team/index.html` — Lab director, students, alumni, and past visitors
- `publications/index.html` — Publications grouped automatically by year

## Project structure

```text
.
├── index.html
├── team/
│   └── index.html
├── publications/
│   └── index.html
├── content.js
├── design-config.js
├── css/
│   ├── main.css
│   └── home.css
├── js/
│   └── site.js
└── assets/
    ├── fonts/
    └── images/
        ├── brand/
        ├── gallery/
        ├── profile/
        └── team/
        !!!!!!!!!!!!!!!!!!!
```

## Local preview

You can open `index.html` directly in a browser. For a preview that more closely matches GitHub Pages, start a local HTTP server from the repository root:

```bash
python3 -m http.server 8000
```

Then visit [http://localhost:8000/](http://localhost:8000/). Stop the server with `Ctrl+C`.

## Updating content

Most website content is maintained in `content.js`:

- Research areas
- Current students
- Alumni and past visitors
- Publications

Global colors and the maximum content width are defined in `design-config.js`.

When adding images:

- Team photos go in `assets/images/team/`
- Gallery photos go in `assets/images/gallery/`
- Brand assets go in `assets/images/brand/`
- Use lowercase, descriptive, hyphenated filenames
- Compress large images before committing them

## Publishing updates

The website is published from the `main` branch through GitHub Pages. After making and reviewing changes:

```bash
git status
git add .
git commit -m "Describe the website update"
git push origin main
```

GitHub Pages will redeploy the site automatically. Publishing may take several minutes.

## Repository access

Contributors must have write access to `wnislab/wnislab.github.io` and authenticate Git locally with their own GitHub account. This repository currently uses SSH authentication, so the local SSH key must be connected to a GitHub account that has repository access.

## Contact

Dr. Nan Cen<br>
Department of Computer Science<br>
Saint Louis University<br>
[nan.cen@slu.edu](mailto:nan.cen@slu.edu)
