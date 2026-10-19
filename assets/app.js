import { projects, sourceLinks } from './projects.js';
const home = document.querySelector('#home');
const detail = document.querySelector('#detail');
const featured = document.querySelector('#featured');
const publicDemoLinks = Object.freeze({ marimo: 'https://jiyang-marimo-demo.vercel.app/', heatgrid: 'https://jiyang-heatgrid-demo.vercel.app/' });
const repoUrl = project => project.repo ? `https://github.com/jiyang-lee/${project.repo}` : null;
const tags = project => `<div class="tags">${project.stack.map(tag => `<span>${tag}</span>`).join('')}</div>`;
const demoUrl = alias => publicDemoLinks[alias];
const demoLink = project => `<a class="button primary" data-demo="${project.demo}" href="${demoUrl(project.demo)}">웹 데모 체험 ↗</a>`;
const flow = project => `<figure class="preview screenshot"><a data-demo="${project.demo}" href="${demoUrl(project.demo)}" aria-label="${project.name} 샘플 웹 데모 열기"><picture><source srcset="assets/${project.demo}-demo.webp" type="image/webp"><img src="assets/${project.demo}-demo.png" alt="${project.name} 샘플 웹 데모 화면 — ${project.demo === 'marimo' ? '발화 선택과 저장된 응답 재생' : '설비의 저장된 판단 근거 조회'}" width="${project.demo === 'marimo' ? 1265 : 1280}" height="${project.demo === 'marimo' ? 1528 : 900}" loading="lazy"></picture></a><figcaption class="flow-caption">SAMPLE WEB DEMO · ${project.demo === 'marimo' ? '저장된 대화 흐름 재생' : '샘플 설비의 저장된 판단 근거 조회'}</figcaption></figure>`;
featured.innerHTML = ['super-marimo', 'heatgrid-agent'].map((id, index) => {
  const project = projects[id];
  return `<article class="feature">${flow(project)}<div><p class="eyebrow">0${index + 1} / ${project.category}</p><h3>${project.name}</h3><p class="summary">${project.summary}</p>${tags(project)}<div class="actions">${demoLink(project)}<a class="text-link" href="#/projects/${id}">구현 과정 보기 ↗</a></div><p class="note">웹 데모는 샘플 기반 체험입니다. 실제 ${project.demo === 'marimo' ? '장치·모델 실행' : '현장 데이터·설비 제어'} 기능은 포함하지 않습니다.</p></div></article>`;
}).join('');
let demoLinks = publicDemoLinks;
function applyDemoLinks() {
  document.querySelectorAll('[data-demo]').forEach(link => {
    const target = demoLinks[link.dataset.demo];
    if (typeof target === 'string') link.href = target;
  });
}
fetch('./assets/demo-links.json')
  .then(response => {
    if (!response.ok) throw new Error('Demo links are unavailable.');
    return response.json();
  })
  .then(value => {
    demoLinks = Object.fromEntries(Object.entries(publicDemoLinks).map(([alias, url]) => [alias, value?.[alias] === url ? value[alias] : url]));
    applyDemoLinks();
  })
  .catch(() => {
    demoLinks = publicDemoLinks;
    applyDemoLinks();
  });
function renderRoute() {
  const id = location.hash.match(/^#\/projects\/([^/]+)$/)?.[1];
  if (!id) {
    const wasDetail = !detail.hidden;
    home.hidden = false;
    detail.hidden = true;
    document.title = '이지양 — AI 서비스 · LLM 개발자';
    if (wasDetail) {
      const target = /^#[a-z][a-z-]*$/i.test(location.hash) ? location.hash : '#projects';
      requestAnimationFrame(() => { document.querySelector(target || '#projects')?.scrollIntoView(); });
    }
    return;
  }
  const project = projects[id];
  home.hidden = true;
  detail.hidden = false;
  document.title = `${project?.name || '프로젝트를 찾을 수 없습니다'} — 이지양`;
  if (!project) {
    detail.innerHTML = '<a class="back" href="#/">← 프로젝트 목록으로</a><h1 tabindex="-1">프로젝트를 찾을 수 없습니다.</h1><p class="lead">주소를 확인하거나 프로젝트 목록으로 돌아가 주세요.</p>';
  } else {
    const repo = repoUrl(project);
    const sources = (sourceLinks[id] || []).map(([label, url]) => `<li><a class="source-link" href="${url}">${label} ↗</a></li>`).join('');
    detail.innerHTML = `<a class="back" href="#/">← 프로젝트 목록으로</a><p class="eyebrow">${project.category}</p><h1 tabindex="-1">${project.name}</h1><div class="intro"><p class="lead">${project.subtitle}</p><p class="lead">${project.summary}</p>${tags(project)}<div class="actions">${project.demo ? demoLink(project) : ''}${repo ? `<a class="button" href="${repo}">GitHub 소스 ↗</a>` : '<a class="button" href="mailto:wldid0129@gmail.com">프로젝트 문의 ↗</a>'}</div></div>${project.flow ? `<div class="detail-flow"><p class="eyebrow">SYSTEM FLOW</p><div class="flow">${project.flow.map(([label, value]) => `<div><strong>${label}</strong><span>${value}</span></div>`).join('')}</div></div>` : ''}<div class="detail-body">${project.sections.map(([title, body], index) => `<section class="detail-section"><p class="eyebrow">0${index + 1}</p><h2>${title}</h2><p>${body}</p>${index === 5 && repo ? `<ul>${sources}</ul>` : ''}</section>`).join('')}<nav class="detail-nav" aria-label="프로젝트 이동"><a class="button" href="#/">← 프로젝트 목록</a>${id !== 'super-marimo' ? '<a class="button" href="#/projects/super-marimo">Super Marimo →</a>' : '<a class="button" href="#/projects/heatgrid-agent">HeatGrid Agent →</a>'}</nav></div>`;
    applyDemoLinks();
  }
  window.scrollTo(0, 0);
  detail.querySelector('h1')?.focus({ preventScroll: true });
}
window.addEventListener('hashchange', renderRoute);
renderRoute();
