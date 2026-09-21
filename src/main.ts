import './style.css'
import { profile } from './data/profile'
import { hotelCx } from './data/hotelCx'

const app = document.querySelector<HTMLDivElement>('#app')!

const mailHref = `mailto:${profile.email}`

app.innerHTML = `
  <header class="site-header" id="top">
    <a class="brand" href="#top" aria-label="홈으로">JY.</a>
    <nav class="nav" aria-label="주요 메뉴">
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <main>
    <section class="hero section-shell">
      <div class="hero-copy reveal">
        <p class="eyebrow">TOURISM PORTFOLIO · 2026</p>
        <h1>${profile.name}</h1>
        <p class="role">${profile.role}</p>
        <p class="hero-tagline">${profile.tagline}</p>
        <div class="hero-actions">
          <a class="button button-primary" href="#projects">프로젝트 보기</a>
          <a class="button button-secondary" href="${mailHref}">이메일</a>
        </div>
      </div>
      <aside class="hero-card reveal delay-1" aria-label="핵심 프로필">
        <span class="status-dot"><i></i> Open to opportunities</span>
        <dl>
          <div><dt>Focus</dt><dd>관광 서비스 · CX · 운영</dd></div>
          <div><dt>Experience</dt><dd>호텔 예약 · 고객서비스</dd></div>
          <div><dt>Tools</dt><dd>OPERA · Notion · GenAI</dd></div>
          <div><dt>Strength</dt><dd>VOC → 문제 발견 → 개선</dd></div>
        </dl>
      </aside>
    </section>

    <section class="section section-shell" id="about">
      <div class="section-heading reveal">
        <p class="eyebrow">ABOUT</p>
        <h2>현장에서 듣고,<br/>구조화해서 개선합니다.</h2>
      </div>
      <div class="about-grid">
        <article class="panel reveal">
          <p class="panel-label">Experience</p>
          <h3>${profile.experience.company}</h3>
          <p class="muted">${profile.experience.team} · ${profile.experience.role}</p>
          <p class="period">${profile.experience.period}</p>
          <ul class="clean-list">${profile.experience.bullets.map((item) => `<li>${item}</li>`).join('')}</ul>
        </article>
        <article class="panel reveal delay-1">
          <p class="panel-label">Education & Activity</p>
          <h3>${profile.education.join('<br/>')}</h3>
          <ul class="clean-list">${profile.extras.map((item) => `<li>${item}</li>`).join('')}</ul>
        </article>
      </div>
    </section>

    <section class="section section-shell" id="skills">
      <div class="section-heading reveal">
        <p class="eyebrow">SKILLS</p>
        <h2>관광 현장과 디지털 도구를<br/>함께 이해합니다.</h2>
      </div>
      <div class="skills-grid">
        ${profile.skillGroups.map((group) => `
          <article class="skill-group reveal">
            <p class="panel-label">${group.label}</p>
            <div class="chip-wrap">${group.skills.map((skill) => `<span class="chip">${skill}</span>`).join('')}</div>
          </article>
        `).join('')}
      </div>
    </section>

    <section class="section section-shell" id="projects">
      <div class="section-heading reveal">
        <p class="eyebrow">SELECTED PROJECT</p>
        <h2>문제를 설명하는 데서 끝나지 않고,<br/>운영 방식까지 설계합니다.</h2>
      </div>
      <article class="project-hero reveal">
        <div>
          <p class="eyebrow">${hotelCx.eyebrow}</p>
          <h3>${hotelCx.title}</h3>
          <p class="project-subtitle">${hotelCx.subtitle}</p>
          <p class="project-summary">${hotelCx.summary}</p>
        </div>
        <a class="button button-light" href="#case-study">Case Study 보기 ↓</a>
      </article>
    </section>

    <section class="case-study" id="case-study">
      <div class="section-shell case-intro reveal">
        <p class="eyebrow">01 · BACKGROUND</p>
        <h2>같은 문의가 반복된다면,<br/>응대보다 먼저 구조를 봐야 한다.</h2>
        <p class="lead-copy">레고랜드코리아 리조트 비대면게스트서비스에서 전화·이메일 고객응대와 OPERA 기반 호텔 예약 업무를 경험했습니다. 서로 다른 고객에게서 유사한 문의가 반복되는 상황을 접하며, 개별 문의 해결을 넘어 <strong>“왜 같은 문제가 반복되는가”</strong>를 살펴볼 필요가 있다고 느꼈습니다.</p>
        <p class="disclaimer">${hotelCx.disclaimer}</p>
      </div>

      <div class="section-shell case-block reveal">
        <div class="case-heading">
          <p class="eyebrow">02 · PROBLEM</p>
          <h2>반복 문의는 고객의 실수가 아니라<br/>정보 전달의 문제일 수 있습니다.</h2>
        </div>
        <div class="flow-row" aria-label="문제 흐름">
          ${['정보 부족·불명확', '기대 형성', '조건과 기대의 차이', '추가 문의·VOC', '고객 불편 + 업무 증가'].map((v, i, arr) => `${`<span class="flow-box">${v}</span>`}${i < arr.length - 1 ? '<span class="flow-arrow">→</span>' : ''}`).join('')}
        </div>
        <div class="question-grid">
          <div><b>Q1</b><span>고객은 어느 단계에서 가장 많은 정보를 필요로 하는가?</span></div>
          <div><b>Q2</b><span>반복 문의가 발생하는 이유는 무엇인가?</span></div>
          <div><b>Q3</b><span>정보 제공 방식을 바꾸면 어떤 불편을 줄일 수 있는가?</span></div>
        </div>
      </div>

      <div class="section-shell case-block reveal">
        <div class="case-heading">
          <p class="eyebrow">03 · CUSTOMER JOURNEY</p>
          <h2>고객은 예약 버튼을 누르기 전부터<br/>여행을 시작합니다.</h2>
          <p>각 단계를 선택해 고객이 필요로 하는 정보와 예상 불편을 확인해보세요.</p>
        </div>
        <div class="journey-tabs" role="tablist">
          ${hotelCx.journey.map((j, i) => `<button class="journey-tab ${i === 0 ? 'active' : ''}" data-index="${i}" role="tab"><span>${j.step}</span>${j.name}</button>`).join('')}
        </div>
        <div class="journey-detail" id="journey-detail"></div>
        <div class="perspective-grid">
          <div><small>고객 관점</small><p>“예약은 했지만 내가 제대로 이해한 것이 맞는지 확인하고 싶다.”</p></div>
          <div><small>예약팀 관점</small><p>“이미 안내된 정보에 대한 반복 문의가 지속된다.”</p></div>
          <div class="accent-panel"><small>서비스 관점</small><p>“고객이 필요한 정보를 적절한 시점에 충분히 제공하고 있는가?”</p></div>
        </div>
      </div>

      <div class="section-shell case-block reveal">
        <div class="case-heading">
          <p class="eyebrow">04 · VOC CLASSIFICATION</p>
          <h2>반복 문의를 6가지 유형으로<br/>다시 분류했습니다.</h2>
        </div>
        <div class="voc-grid">
          ${hotelCx.vocs.map((v) => `<article class="voc-card"><h3>${v.title}</h3><p>${v.items}</p><small>${v.reason}</small></article>`).join('')}
        </div>
        <blockquote>반복되는 문의의 공통점은 ‘정보가 없어서’보다 <strong>‘필요한 정보가 적절한 시점에 충분히 전달되지 않았기 때문’</strong>일 수 있습니다.</blockquote>
      </div>

      <div class="section-shell case-block reveal">
        <div class="case-heading">
          <p class="eyebrow">05 · KEY PROBLEM</p>
          <h2>외부 예약채널의 정보 차이가<br/>기대 불일치를 만들 수 있습니다.</h2>
        </div>
        <div class="split-grid">
          <div class="story-flow">
            ${['OTA 상품 확인', '상품명·이미지로 기대 형성', '예약 및 결제', '세부 조건 확인', '기대와 실제 조건의 차이', '예약팀 문의·VOC'].map((v, i) => `<div><span>${String(i+1).padStart(2,'0')}</span>${v}</div>`).join('')}
          </div>
          <div class="key-insight">
            <p class="panel-label">KEY INSIGHT</p>
            <h3>예약 오류보다,<br/>‘기대와 실제 조건 사이의 정보 차이’가 문제일 수 있다.</h3>
            <p>동일한 정보 차이가 유지된다면 고객이 바뀌어도 비슷한 문의는 반복될 수 있습니다. 그래서 응대 방식이 아니라 정보 전달 구조 자체를 개선 대상으로 설정했습니다.</p>
          </div>
        </div>
      </div>

      <div class="section-shell case-block reveal">
        <div class="case-heading">
          <p class="eyebrow">06 · ROOT CAUSE</p>
          <h2>정보는 있는데,<br/>고객에게 제대로 전달되고 있을까?</h2>
        </div>
        <div class="cause-grid">
          ${hotelCx.causes.map((c, i) => `<article><span>0${i+1}</span><h3>${c.title}</h3><p>${c.body}</p></article>`).join('')}
        </div>
        <blockquote>고객에게 정보가 없었던 것이 아니라, <strong>중요한 정보가 고객이 필요로 하는 순간에 충분히 강조되지 않았다.</strong></blockquote>
      </div>

      <div class="section-shell case-block reveal">
        <div class="case-heading">
          <p class="eyebrow">07 · SOLUTION</p>
          <h2>예약 전 → 예약 후 → 운영까지<br/>세 단계로 개선합니다.</h2>
        </div>
        <div class="solution-stack">
          ${hotelCx.solutions.map((s) => `
            <article class="solution-card">
              <div class="solution-no">${s.no}</div>
              <div><h3>${s.title}</h3><p class="solution-lead">${s.lead}</p><ul>${s.bullets.map((b) => `<li>${b}</li>`).join('')}</ul></div>
            </article>
          `).join('')}
        </div>
        <div class="before-after">
          <div class="before"><small>BEFORE</small><h3>캐릭터 테마 객실</h3><p>객실 + 조식 패키지</p><em>“사진 속 테마 객실을 이용할 수 있겠지?”</em></div>
          <div class="compare-arrow">→</div>
          <div class="after"><small>AFTER</small><h3>캐릭터 테마 객실</h3><p><strong>테마는 체크인 시 랜덤 배정</strong><br/><strong>특정 테마 사전 지정 불가</strong><br/>객실 + 조식 2인 포함</p><em>“예약 전에 이용 조건을 정확히 알 수 있다.”</em></div>
        </div>
      </div>

      <div class="section-shell case-block reveal">
        <div class="case-heading">
          <p class="eyebrow">08 · VOC FEEDBACK LOOP</p>
          <h2>한 번 들어온 불편을<br/>다음 고객에게 반복하지 않게.</h2>
        </div>
        <div class="loop-row">
          ${['고객 문의', 'VOC 태깅', '유형별 집계', '반복 문제 발견', '원인 분석', '서비스 개선'].map((v, i) => `<div><span>${i+1}</span>${v}</div>`).join('')}
        </div>
        <p class="center-note">예약팀이 접한 고객의 목소리가 현장·마케팅·판매채널의 개선으로 다시 연결되는 구조를 제안했습니다.</p>
      </div>

      <div class="section-shell case-block reveal">
        <div class="case-heading">
          <p class="eyebrow">09 · KPI</p>
          <h2>개선은 적용이 아니라<br/>검증까지 이어져야 합니다.</h2>
          <p>실제 내부 데이터가 없는 프로젝트이므로 임의의 목표 수치를 만들지 않고, 개선 효과를 판단할 지표를 정의했습니다.</p>
        </div>
        <div class="kpi-table" role="table">
          ${hotelCx.kpis.map(([kpi, why]) => `<div class="kpi-row" role="row"><strong>${kpi}</strong><span>${why}</span></div>`).join('')}
        </div>
      </div>

      <div class="section-shell conclusion reveal">
        <p class="eyebrow">10 · CONCLUSION</p>
        <h2>고객의 목소리에서 문제를 찾고,<br/>운영의 관점에서 해결합니다.</h2>
        <p class="lead-copy">한 건의 문의를 잘 해결하는 것에서 출발해, 같은 문의가 왜 반복되는지 구조적으로 바라봤습니다. 고객 여정과 VOC를 분석하고 예약 전·후 정보 전달, 운영 피드백 루프, 측정 지표까지 연결하며 현장 경험을 개선안으로 구체화했습니다.</p>
        <div class="capability-grid">
          <div><b>01</b><h3>고객 관점의 문제 발견</h3><p>반복되는 문의 속에서 고객이 실제로 겪는 불편을 찾습니다.</p></div>
          <div><b>02</b><h3>현장 경험의 구조화</h3><p>개별 경험을 고객 여정과 VOC 유형으로 정리합니다.</p></div>
          <div><b>03</b><h3>실행 가능한 개선 설계</h3><p>안내 문구뿐 아니라 운영 프로세스까지 함께 설계합니다.</p></div>
          <div><b>04</b><h3>데이터 기반 개선 관점</h3><p>개선 이후 무엇을 측정할지 KPI까지 정의합니다.</p></div>
        </div>
        <p class="closing-line">고객의 목소리를 듣는 데서 끝나지 않고, 그 안에서 반복되는 문제를 찾아 더 나은 서비스로 연결하는 관광 실무자가 되고 싶습니다.</p>
      </div>
    </section>
  </main>

  <footer id="contact">
    <div class="section-shell footer-inner">
      <div><p class="eyebrow">CONTACT</p><h2>함께 이야기해보고 싶다면.</h2></div>
      <a class="footer-mail" href="${mailHref}">${profile.email} ↗</a>
    </div>
    <div class="section-shell footer-bottom"><span>© 2026 ${profile.name}</span><a href="#top">Back to top ↑</a></div>
  </footer>
`

const detail = document.querySelector<HTMLDivElement>('#journey-detail')!
const tabs = Array.from(document.querySelectorAll<HTMLButtonElement>('.journey-tab'))

function renderJourney(index: number) {
  const item = hotelCx.journey[index]
  detail.innerHTML = `
    <div><small>고객 행동</small><strong>${item.name}</strong></div>
    <div><small>필요 정보</small><strong>${item.need}</strong></div>
    <div class="pain"><small>예상 Pain Point</small><strong>${item.pain}</strong></div>
  `
  tabs.forEach((tab, i) => tab.classList.toggle('active', i === index))
}

tabs.forEach((tab) => tab.addEventListener('click', () => renderJourney(Number(tab.dataset.index))))
renderJourney(0)

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible')
  })
}, { threshold: 0.08 })

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
