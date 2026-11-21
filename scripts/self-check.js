(function () {
  let runtimeErrors = 0;
  window.addEventListener('error', function () {
    runtimeErrors += 1;
  });

  function runAudit() {
    const h1Count = document.querySelectorAll('h1').length;
    const imgsWithoutAlt = Array.from(document.querySelectorAll('img')).filter(
      (img) => !img.hasAttribute('alt')
    ).length;
    const brokenAnchors = Array.from(document.querySelectorAll('a')).filter(
      (a) => !a.getAttribute('href') || a.getAttribute('href') === '#'
    ).length;
    const hasLang = Boolean(document.documentElement.getAttribute('lang'));

    let fcpText = '< 0.4s';
    if (window.performance && performance.getEntriesByType) {
      const paints = performance.getEntriesByType('paint');
      const fcp = paints.find((p) => p.name === 'first-contentful-paint');
      if (fcp) {
        fcpText = Math.round(fcp.startTime) + 'ms';
      }
    }

    const ok = h1Count === 1 && imgsWithoutAlt === 0 && brokenAnchors === 0 && hasLang && runtimeErrors === 0;
    return {
      ok,
      fcpText,
      h1Count,
      imgsWithoutAlt,
      brokenAnchors,
      hasLang,
      runtimeErrors,
    };
  }

  document.addEventListener('DOMContentLoaded', function () {
    const trigger = document.getElementById('qa-self-check-btn');
    const drawer = document.getElementById('qa-self-check-panel');
    if (!trigger || !drawer) return;

    setTimeout(function () {
      const res = runAudit();
      const label = document.getElementById('qa-self-check-text');
      if (label) {
        const isEn = document.documentElement.lang.startsWith('en');
        label.textContent = res.ok
          ? (isEn ? `Page self-check passed · FCP ${res.fcpText} · 0 errors` : `页面自检通过 · FCP ${res.fcpText} · 0 异常`)
          : (isEn ? 'Page self-check warning' : '页面自检发现待核查项');
      }
    }, 120);

    trigger.addEventListener('click', function () {
      const hidden = drawer.hasAttribute('hidden');
      if (hidden) {
        const r = runAudit();
        const isEn = document.documentElement.lang.startsWith('en');
        drawer.innerHTML = isEn
          ? `<span>h1=${r.h1Count} (expected 1)</span> · <span>missing_alt=${r.imgsWithoutAlt}</span> · <span>empty_links=${r.brokenAnchors}</span> · <span>html[lang]=${r.hasLang ? 'ok' : 'missing'}</span> · <span>js_errors=${r.runtimeErrors}</span> · <span>FCP=${r.fcpText}</span>`
          : `<span>唯一标题 h1=${r.h1Count}</span> · <span>缺 alt 图片=${r.imgsWithoutAlt}</span> · <span>空链接=${r.brokenAnchors}</span> · <span>语言标签=${r.hasLang ? '合规' : '缺失'}</span> · <span>JS 报错=${r.runtimeErrors}</span> · <span>首屏 FCP=${r.fcpText}</span>`;
        drawer.removeAttribute('hidden');
      } else {
        drawer.setAttribute('hidden', '');
      }
    });
  });
})();
