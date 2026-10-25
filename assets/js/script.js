/* ==========================================================================
   SITE SCRIPT — you normally don't need to edit this file.
   Content lives in assets/js/data.js and assets/js/articles.js.
   ========================================================================== */
(function () {
  "use strict";

  var D = window.portfolioData || {};
  var ARTICLES = window.portfolioArticles || [];
  var ROOT = document.body.getAttribute("data-root") || "";
  var PAGE = document.body.getAttribute("data-page") || "home";
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ------------------------------------------------------------ helpers */
  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $all(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function has(v) { return Array.isArray(v) ? v.length > 0 : !!(v && String(v).trim()); }
  function url(p) {
    if (!has(p)) return "";
    return /^(https?:|mailto:|tel:|#|\/)/i.test(p) ? p : ROOT + p;
  }
  function pad(n) { return (n < 10 ? "0" : "") + n; }
  function readTime(a) {
    var text = (a.body || []).map(function (b) {
      if (typeof b === "string") return b;
      if (b.ul) return b.ul.join(" ");
      return b.h || b.quote || "";
    }).join(" ");
    return Math.max(1, Math.round(text.split(/\s+/).length / 200)) + " min read";
  }
  function chip(label, soft) {
    var m = /^(.*)\s*\((learning)\)\s*$/i.exec(label);
    if (m) return '<li class="chip' + (soft ? " chip-soft" : "") + '">' + esc(m[1].trim()) + ' <span class="tag">learning</span></li>';
    return '<li class="chip' + (soft ? " chip-soft" : "") + '">' + esc(label) + "</li>";
  }
  function chips(list, soft) { return has(list) ? '<ul class="chips">' + list.map(function (s) { return chip(s, soft); }).join("") + "</ul>" : ""; }
  function caseUrl(id) { return ROOT + "projects/case-study.html?id=" + encodeURIComponent(id); }
  function articleUrl(id) { return ROOT + "insights/article.html?id=" + encodeURIComponent(id); }

  var ICON = {
    arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    check: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M8 12.5l2.7 2.7L16 9.8"/></svg>',
    download: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v12M7 10l5 5 5-5M5 21h14"/></svg>',
    mail: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7"/></svg>',
    github: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 19c-4 1.5-4-2-6-2.5M15 21v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1-.3-3.4 1.3a11.7 11.7 0 0 0-6.2 0C6.6 2.8 5.6 3.1 5.6 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4.2 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/></svg>',
    pin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>',
    phone: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/></svg>',
    cap: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c3 2.5 9 2.5 12 0v-5"/></svg>',
    comp: [
      '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="7" height="6" rx="1.5"/><rect x="14" y="14" width="7" height="6" rx="1.5"/><path d="M6.5 10v4a3 3 0 0 0 3 3H14"/></svg>',
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></svg>',
      '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>',
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 12a8 8 0 0 1-14 5.3M4 12a8 8 0 0 1 14-5.3"/><path d="M18 3v4h-4M6 21v-4h4"/></svg>',
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21C7 17 3 13.5 3 9a4.5 4.5 0 0 1 9-1 4.5 4.5 0 0 1 9 1c0 4.5-4 8-9 12z"/></svg>'
    ]
  };

  /* ------------------------------------------------------------ simple bindings */
  function bindCommon() {
    var derived = {
      footerTitle: (D.title || "").split("|")[0].trim(),
      emailLink: has(D.email) ? "mailto:" + D.email : ""
    };
    function val(key) { return key in derived ? derived[key] : D[key]; }

    $all("[data-field]").forEach(function (el) {
      var v = val(el.getAttribute("data-field"));
      if (has(v)) el.textContent = v;
      else if (el.getAttribute("data-field") === "alsoKnownAs") { var p = el.closest(".hero-aka"); if (p) p.hidden = true; }
    });
    $all("[data-href]").forEach(function (el) {
      var key = el.getAttribute("data-href");
      var v = key === "emailLink" ? derived.emailLink : url(D[key]);
      if (has(v)) el.setAttribute("href", v);
      else { var li = el.closest("li"); (li || el).hidden = true; }
    });
    $all("img[data-src]").forEach(function (img) {
      var v = D[img.getAttribute("data-src")];
      if (has(v)) img.src = url(v);
      var alt = D[img.getAttribute("data-alt")];
      if (has(alt)) img.alt = alt;
    });
    var y = $("#year"); if (y) y.textContent = new Date().getFullYear();
  }

  /* ------------------------------------------------------------ HOME sections */
  function renderHome() {
    var el;

    if ((el = $("#hero-stats")) && has(D.heroStats)) {
      el.innerHTML = D.heroStats.map(function (s) {
        return "<div><dt>" + esc(s.value) + "</dt><dd>" + esc(s.label) + "</dd></div>";
      }).join("");
    } else if (el) el.hidden = true;

    if ((el = $("#highlights")) && has(D.highlights)) {
      el.innerHTML = D.highlights.map(function (h) { return "<li>" + ICON.check + "<span>" + esc(h) + "</span></li>"; }).join("");
    }

    if ((el = $("#about-long"))) el.innerHTML = (D.aboutLong || []).map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("");
    if ((el = $("#about-pillars"))) {
      el.innerHTML = (D.aboutPillars || []).map(function (p, i) {
        return '<li class="card reveal"><span class="num">' + pad(i + 1) + "</span><h3>" + esc(p.title) + "</h3><p>" + esc(p.text) + "</p></li>";
      }).join("");
    }

    if ((el = $("#competencies"))) {
      el.innerHTML = (D.competencies || []).map(function (c, i) {
        return '<article class="card competency reveal"><div class="competency-head"><span class="competency-icon">' + (ICON.comp[i % ICON.comp.length]) +
          "</span><h3>" + esc(c.category) + '</h3><span class="count">' + c.skills.length + "</span></div>" + chips(c.skills, true) + "</article>";
      }).join("");
    }
    if ((el = $("#capability-matrix"))) {
      el.innerHTML = (D.capabilityMatrix || []).map(function (c) {
        return '<div class="matrix-col" role="listitem"><h4>' + esc(c.area) + "</h4><ul>" + c.items.map(function (i) { return "<li>" + esc(i) + "</li>"; }).join("") + "</ul></div>";
      }).join("");
    }

    if ((el = $("#journey"))) {
      if (has(D.journey)) el.innerHTML = D.journey.map(function (j) { return "<li><span>" + esc(j) + "</span></li>"; }).join("");
      else el.hidden = true;
    }
    if ((el = $("#timeline"))) {
      var LIMIT = 4;
      el.innerHTML = (D.experience || []).map(function (x) {
        var date = [x.start, x.end].filter(has).join(" – ");
        var metaRight = [date, x.location].filter(has).join(" · ");
        var hl = x.highlights || [];
        var list = hl.map(function (h, i) { return "<li" + (i >= LIMIT ? ' class="is-extra"' : "") + ">" + esc(h) + "</li>"; }).join("");
        return '<li class="tl-item reveal"><span class="tl-dot" aria-hidden="true"></span><article class="card tl-card">' +
          '<div class="tl-top"><div><h3 class="tl-role">' + esc(x.role) + '</h3><p class="tl-company">' + esc(x.company) + "</p></div>" +
          (has(metaRight) ? '<span class="tl-date">' + esc(metaRight) + "</span>" : "") + "</div>" +
          (has(x.summary) ? '<p class="tl-summary">' + esc(x.summary) + "</p>" : "") +
          (has(x.highlightsTitle) ? '<p class="tl-list-title">' + esc(x.highlightsTitle) + "</p>" : "") +
          (has(hl) ? '<ul class="tl-list">' + list + "</ul>" : "") +
          (hl.length > LIMIT ? '<button class="tl-toggle" type="button" aria-expanded="false">Show ' + (hl.length - LIMIT) + " more</button>" : "") +
          chips(x.skills) + "</article></li>";
      }).join("");
      $all(".tl-toggle", el).forEach(function (b) {
        var label = b.textContent;
        b.addEventListener("click", function () {
          var card = b.closest(".tl-card"); var open = card.classList.toggle("expanded");
          b.setAttribute("aria-expanded", open); b.textContent = open ? "Show less" : label;
        });
      });
    }

    if ((el = $("#project-grid"))) {
      el.innerHTML = (D.projects || []).map(function (p, i) { return projectCard(p, i); }).join("");
    }

    if ((el = $("#artefacts-grid"))) {
      el.innerHTML = (D.artefacts || []).map(function (a, i) {
        var action = has(a.file)
          ? '<a class="btn btn-ghost btn-sm" href="' + esc(url(a.file)) + '" download>' + ICON.download + "Download sample deliverable</a>"
          : '<span class="soon">Coming soon</span>';
        return '<article class="card artefact reveal"><div class="artefact-top"><span class="artefact-icon" aria-hidden="true">PDF</span><div><span class="n">Artefact ' + (i + 1) +
          "</span><h3>" + esc(a.title) + "</h3></div></div><p>" + esc(a.text) + "</p>" + action + "</article>";
      }).join("");
      if (!has(D.artefacts)) { var s = $("#artefacts"); if (s) s.hidden = true; }
    }

    if ((el = $("#approach-steps"))) {
      el.innerHTML = (D.approach || []).map(function (s, i) {
        return '<li class="reveal"><span class="q">Q' + (i + 1) + "</span><h3>" + esc(s.step) + "</h3><p>" + esc(s.text) + "</p></li>";
      }).join("");
    }

    renderInsights();
    renderLearning();
    renderContact();
  }

  /* ------------------------------------------------------------ HERO animations */
  function initHero() {
    var el;

    // status pill
    if ((el = $("#hero-status"))) {
      if (has(D.heroStatus)) el.textContent = D.heroStatus;
      else { el.nextSibling && (el.nextSibling.textContent = ""); el.remove(); }
    }

    // name: split into letters that rise in one by one
    if ((el = $("#hero-name")) && has(D.name)) {
      var n = 0;
      el.setAttribute("aria-label", D.name);
      el.innerHTML = D.name.split(" ").map(function (word) {
        return '<span class="w" aria-hidden="true">' + word.split("").map(function (c) {
          return '<span class="ch" style="animation-delay:' + (150 + (n++) * 45) + 'ms">' + esc(c) + "</span>";
        }).join("") + "</span>";
      }).join(" ");
    }

    // typewriter line
    var typedEl = $("#typed"), line = $("#typed-line"), prefixEl = $("#typed-prefix");
    var phrases = has(D.typedPhrases) ? D.typedPhrases : [];
    if (typedEl && phrases.length) {
      var prefix = has(D.typedPrefix) ? D.typedPrefix : "";
      if (prefixEl) prefixEl.textContent = prefix;
      line.setAttribute("aria-label", has(D.tagline) ? D.tagline : (prefix + " " + phrases[0]).trim());
      if (phrases.length === 1) {
        typedEl.textContent = phrases[0];
        var cur = $(".cursor", line); if (cur) cur.hidden = true;
      } else if (reduceMotion) {
        // Reduce Motion is on: no typing, but phrases still change with a gentle fade
        var cur2 = $(".cursor", line); if (cur2) cur2.hidden = true;
        var fi = 0; typedEl.textContent = phrases[0]; typedEl.classList.add("typed-fade");
        setInterval(function () {
          typedEl.classList.add("is-out");
          setTimeout(function () { fi = (fi + 1) % phrases.length; typedEl.textContent = phrases[fi]; typedEl.classList.remove("is-out"); }, 450);
        }, 3200);
      } else {
        var pi = 0, ci = 0, deleting = false;
        (function tick() {
          var word = phrases[pi];
          if (!deleting) {
            ci++; typedEl.textContent = word.slice(0, ci);
            if (ci === word.length) { deleting = true; return setTimeout(tick, 1900); }
            setTimeout(tick, 65);
          } else {
            ci--; typedEl.textContent = word.slice(0, ci);
            if (ci === 0) { deleting = false; pi = (pi + 1) % phrases.length; return setTimeout(tick, 350); }
            setTimeout(tick, 32);
          }
        })();
      }
    } else if (line && has(D.tagline)) {
      line.textContent = D.tagline;
    }

    // floating tags around the photo
    (D.heroTags || []).slice(0, 3).forEach(function (t, i) { var tag = $("#tag" + (i + 1)); if (tag) tag.textContent = t; });

    // scrolling marquee (content repeated twice for a seamless loop)
    if ((el = $("#marquee-track"))) {
      if (has(D.marquee)) {
        var items = D.marquee.map(function (m) { return "<span>" + esc(m) + "</span>"; }).join("");
        el.innerHTML = items + (reduceMotion ? "" : items.replace(/<span>/g, '<span aria-hidden="true">'));
      } else { var mq = el.closest(".marquee"); if (mq) mq.hidden = true; }
    }

    // cursor glow (mouse/trackpad only)
    var glow = $("#glow");
    if (glow && !reduceMotion && window.matchMedia("(pointer: fine)").matches) {
      var gx = 0, gy = 0, ticking = false;
      window.addEventListener("mousemove", function (e) {
        gx = e.clientX; gy = e.clientY;
        if (!ticking) {
          ticking = true;
          requestAnimationFrame(function () { glow.style.left = gx + "px"; glow.style.top = gy + "px"; glow.classList.add("on"); ticking = false; });
        }
      }, { passive: true });
      document.addEventListener("mouseleave", function () { glow.classList.remove("on"); });
    } else if (glow) glow.remove();
  }

  function projectCard(p, i) {
    return '<article class="card project-card reveal">' +
      '<div class="project-thumb"><img src="' + esc(url(p.image)) + '" alt="" loading="lazy" width="800" height="500"></div>' +
      '<div class="project-body"><div class="project-meta"><span class="project-cat">' + esc(p.category) + '</span><span class="project-num">' + pad(i + 1) + "</span></div>" +
      '<h3><a href="' + caseUrl(p.id) + '">' + esc(p.shortTitle || p.title) + "</a></h3>" +
      '<p class="project-desc">' + esc(p.summary) + "</p>" +
      (has(p.tools) ? '<p class="project-sub">Tools</p>' + chips(p.tools) : "") +
      (has(p.skills) ? '<p class="project-sub">Skills demonstrated</p>' + chips(p.skills.slice(0, 5), true) : "") +
      '<span class="project-link">View Case Study ' + ICON.arrow + "</span>" +
      "</div></article>";
  }

  function insightCard(a) {
    return '<article class="card insight reveal" data-cat="' + esc(a.category) + '"><div class="meta"><span class="cat">' + esc(a.category) +
      "</span><span>" + readTime(a) + "</span></div><h3><a href=\"" + articleUrl(a.id) + '">' + esc(a.title) + "</a></h3><p>" + esc(a.excerpt) +
      '</p><span class="read">Read article →</span></article>';
  }

  function renderInsights() {
    var grid = $("#insight-grid"); if (!grid) return;
    if (!ARTICLES.length) { var sec = $("#insights"); if (sec) sec.hidden = true; return; }
    var INITIAL = 6, showAll = false, current = "All";
    grid.innerHTML = ARTICLES.map(insightCard).join("");
    var cards = $all(".insight", grid);
    var more = $("#insights-more");
    var cats = ["All"].concat(ARTICLES.map(function (a) { return a.category; }).filter(function (c, i, arr) { return arr.indexOf(c) === i; }));
    var bar = $("#insight-filters");
    bar.innerHTML = cats.map(function (c) {
      return '<button class="filter-btn" type="button" aria-pressed="' + (c === "All") + '" data-cat="' + esc(c) + '">' + esc(c) + "</button>";
    }).join("");

    function apply() {
      var shown = 0;
      cards.forEach(function (c) {
        var match = current === "All" || c.getAttribute("data-cat") === current;
        var visible = match && (current !== "All" || showAll || shown < INITIAL);
        if (match) shown++;
        c.hidden = !visible;
        if (visible) c.classList.add("is-visible");
      });
      var total = cards.length;
      more.hidden = !(current === "All" && !showAll && total > INITIAL);
      more.textContent = "Show all " + total + " articles";
    }
    $all(".filter-btn", bar).forEach(function (b) {
      b.addEventListener("click", function () {
        current = b.getAttribute("data-cat");
        $all(".filter-btn", bar).forEach(function (x) { x.setAttribute("aria-pressed", x === b); });
        apply();
      });
    });
    more.addEventListener("click", function () { showAll = true; apply(); });
    apply();
  }

  function renderLearning() {
    var el;
    if ((el = $("#education"))) {
      if (has(D.education)) {
        el.className = "edu-list";
        el.innerHTML = D.education.map(function (e) {
          return '<article class="card edu reveal"><span class="edu-icon">' + ICON.cap + '</span><div><p class="label">Education</p><h3>' + esc(e.title) + "</h3><p>" +
            esc([e.issuer, e.date].filter(has).join(" · ")) + "</p></div></article>";
        }).join("");
      } else el.hidden = true;
    }
    if ((el = $("#learning-groups"))) {
      el.innerHTML = (D.learning || []).map(function (g) {
        return '<article class="card learn-group reveal"><h3>' + esc(g.group) + "</h3><ul>" + g.items.map(function (it) {
          return "<li><span>" + esc(it.title) + "</span>" + (has(it.note) ? '<span class="note">' + esc(it.note) + "</span>" : "") + "</li>";
        }).join("") + "</ul></article>";
      }).join("");
    }
    if ((el = $("#roadmap"))) {
      if (has(D.roadmap)) el.innerHTML = D.roadmap.map(function (r, i) { return "<li><span>" + pad(i + 1) + "</span>" + esc(r) + "</li>"; }).join("");
      else { var a = el.closest(".roadmap"); if (a) a.hidden = true; }
    }
  }

  function renderContact() {
    var el = $("#contact-list"); if (!el) return;
    var rows = [];
    function strip(u) { return u.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, ""); }
    if (has(D.email)) rows.push('<li><a href="mailto:' + esc(D.email) + '">' + ICON.mail + '<span><small>Email</small><span class="v">' + esc(D.email) + "</span></span></a></li>");
    if (has(D.linkedin)) rows.push('<li><a href="' + esc(D.linkedin) + '" target="_blank" rel="noopener">' + ICON.linkedin + '<span><small>LinkedIn</small><span class="v">' + esc(strip(D.linkedin)) + "</span></span></a></li>");
    if (has(D.github)) rows.push('<li><a href="' + esc(D.github) + '" target="_blank" rel="noopener">' + ICON.github + '<span><small>GitHub</small><span class="v">' + esc(strip(D.github)) + "</span></span></a></li>");
    if (has(D.phone)) rows.push('<li><a href="tel:' + esc(D.phone.replace(/\s+/g, "")) + '">' + ICON.phone + '<span><small>Phone</small><span class="v">' + esc(D.phone) + "</span></span></a></li>");
    if (has(D.location)) rows.push("<li><div>" + ICON.pin + '<span><small>Location</small><span class="v">' + esc(D.location) + "</span></span></div></li>");
    el.innerHTML = rows.join("");
  }

  /* ------------------------------------------------------------ CONTACT FORM (Formspree) */
  function initForm() {
    var form = $("#contact-form"); if (!form) return;
    if (has(D.formspreeEndpoint)) form.setAttribute("action", D.formspreeEndpoint);
    var status = $("#form-status");
    var btn = $(".btn-submit", form);
    var rules = {
      name: function (v) { return v.length >= 2 ? "" : "Please enter your name."; },
      email: function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v) ? "" : "Please enter a valid email address."; },
      subject: function (v) { return v.length >= 2 ? "" : "Please add a subject."; },
      message: function (v) { return v.length >= 10 ? "" : "Please write a message (at least 10 characters)."; }
    };
    function check(input) {
      var rule = rules[input.name]; if (!rule) return true;
      var msg = rule(input.value.trim());
      var field = input.closest(".field");
      var err = $("#" + input.id + "-err");
      field.classList.toggle("invalid", !!msg);
      input.setAttribute("aria-invalid", msg ? "true" : "false");
      if (msg) input.setAttribute("aria-describedby", input.id + "-err"); else input.removeAttribute("aria-describedby");
      if (err) err.textContent = msg;
      return !msg;
    }
    $all("input, textarea", form).forEach(function (i) {
      i.addEventListener("blur", function () { if (i.value) check(i); });
      i.addEventListener("input", function () { if (i.closest(".field") && i.closest(".field").classList.contains("invalid")) check(i); });
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      status.className = "form-status"; status.textContent = "";
      var inputs = $all("input[required], textarea[required]", form);
      var ok = inputs.map(check).every(Boolean);
      if (!ok) {
        var firstBad = inputs.filter(function (i) { return i.getAttribute("aria-invalid") === "true"; })[0];
        if (firstBad) firstBad.focus();
        status.className = "form-status error"; status.textContent = "Please check the highlighted fields.";
        return;
      }
      btn.classList.add("loading"); btn.setAttribute("aria-busy", "true");
      $(".btn-label", btn).textContent = "Sending…";
      fetch(form.action, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } })
        .then(function (res) {
          if (res.ok) {
            form.reset();
            status.className = "form-status success";
            status.textContent = "Thank you — your message has been sent. I'll get back to you soon.";
          } else {
            return res.json().catch(function () { return {}; }).then(function (data) {
              var msg = data && data.errors ? data.errors.map(function (x) { return x.message; }).join(" ") : "";
              throw new Error(msg || "Request failed");
            });
          }
        })
        .catch(function () {
          status.className = "form-status error";
          status.innerHTML = "Sorry, your message could not be sent. Please try again or email me directly" +
            (has(D.email) ? ' at <a href="mailto:' + esc(D.email) + '"><u>' + esc(D.email) + "</u></a>." : ".");
        })
        .then(function () {
          btn.classList.remove("loading"); btn.removeAttribute("aria-busy");
          $(".btn-label", btn).textContent = "Send message";
        });
    });
  }

  /* ------------------------------------------------------------ CASE STUDY page */
  var CI = {
    summary: '<path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6M8 13h8M8 17h5"/>',
    alert: '<path d="M12 3 2 20h20L12 3z"/><path d="M12 10v4M12 17v.01"/>',
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/>',
    users: '<circle cx="9" cy="8" r="3.2"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><circle cx="17" cy="9" r="2.5"/><path d="M16 14c2.8 0 5 2.2 5 5"/>',
    flow: '<rect x="3" y="3" width="7" height="6" rx="1.5"/><rect x="14" y="15" width="7" height="6" rx="1.5"/><path d="M6.5 9v4a3 3 0 0 0 3 3H14"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
    bulb: '<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2V17h5v-1.1c0-.8.4-1.5 1-2A6 6 0 0 0 12 3z"/>',
    spark: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6"/>',
    list: '<path d="M9 6h12M9 12h12M9 18h12"/><path d="M4 6h.01M4 12h.01M4 18h.01"/>',
    check: '<circle cx="12" cy="12" r="9"/><path d="m8 12.5 2.7 2.7L16 9.8"/>',
    trend: '<path d="M3 17l6-6 4 4 8-8"/><path d="M15 7h6v6"/>',
    shield: '<path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z"/><path d="m9 12 2 2 4-4"/>',
    gauge: '<path d="M4 18a8 8 0 1 1 16 0"/><path d="m12 18 4-5"/>',
    cycle: '<path d="M20 12a8 8 0 0 1-14 5.3M4 12a8 8 0 0 1 14-5.3"/><path d="M18 3v4h-4M6 21v-4h4"/>',
    box: '<path d="M21 8 12 3 3 8v8l9 5 9-5z"/><path d="M3 8l9 5 9-5M12 13v8"/>',
    tag: '<path d="M3 12V4a1 1 0 0 1 1-1h8l9 9-9 9z"/><circle cx="8" cy="8" r="1.5"/>',
    heart: '<path d="M12 20C7 16 3 12.6 3 8.5A4.5 4.5 0 0 1 12 7a4.5 4.5 0 0 1 9 1.5C21 12.6 17 16 12 20z"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    eye: '<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
    down: '<path d="M12 5v14M6 13l6 6 6-6"/>',
    up: '<path d="M12 19V5M6 11l6-6 6 6"/>',
    x: '<circle cx="12" cy="12" r="9"/><path d="m9 9 6 6M15 9l-6 6"/>',
    file: '<path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6"/>',
    print: '<path d="M6 9V3h12v6M6 18H4a1 1 0 0 1-1-1v-6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1h-2"/><rect x="6" y="14" width="12" height="7" rx="1"/>',
    server: '<rect x="3" y="4" width="18" height="7" rx="1.5"/><rect x="3" y="13" width="18" height="7" rx="1.5"/><path d="M7 7.5h.01M7 16.5h.01"/>'
  };
  function ci(n, cls) { return '<svg class="' + (cls || "ci") + '" viewBox="0 0 24 24" aria-hidden="true">' + (CI[n] || CI.check) + "</svg>"; }

  var QUAD = { mc: ["Manage closely", "q-mc"], ks: ["Keep satisfied", "q-ks"], ki: ["Keep informed", "q-ki"], mo: ["Monitor", "q-mo"] };

  function csSection(id, num, icon, title, body, sub) {
    return '<section class="cs-sec reveal" id="' + id + '"><header class="cs-sec-h"><span class="cs-num">' + pad(num) + "</span>" +
      '<span class="cs-ic">' + ci(icon) + "</span><div><h2>" + esc(title) + "</h2>" + (sub ? '<p class="cs-sub">' + esc(sub) + "</p>" : "") + "</div></header>" + body + "</section>";
  }

  function flowDiagram(steps, mode) {
    return '<ol class="flow flow-' + mode + '">' + steps.map(function (s, i) {
      var cls = mode === "tobe" ? (s.n ? " is-new" : "") : (s.pain ? " is-pain" : "");
      return '<li class="fstep' + cls + '"><span class="fn">' + (i + 1) + '</span><span class="ft">' + esc(s.t) + "</span>" +
        (s.pain ? '<span class="fpain">' + ci("alert", "ci-s") + esc(s.pain) + "</span>" : "") +
        (mode === "tobe" && s.n ? '<span class="fnew">New / automated</span>' : "") + "</li>";
    }).join("") + "</ol>";
  }

  function stakeMap(list) {
    var order = ["ks", "mc", "mo", "ki"];
    return '<div class="smap"><span class="smap-y">Power / influence →</span><div class="smap-grid">' + order.map(function (q) {
      var names = list.filter(function (s) { return s.q === q; });
      return '<div class="sq ' + QUAD[q][1] + '"><strong>' + QUAD[q][0] + "</strong><ul>" +
        (names.length ? names.map(function (s) { return "<li>" + esc(s.name) + "</li>"; }).join("") : '<li class="muted">—</li>') + "</ul></div>";
    }).join("") + '</div><span class="smap-x">Interest →</span></div>';
  }

  function renderCaseStudy() {
    var host = $("#case-study"); if (!host) return;
    var id = new URLSearchParams(location.search).get("id");
    var list = D.projects || [];
    var idx = -1;
    for (var i = 0; i < list.length; i++) if (list[i].id === id) idx = i;
    if (idx < 0 && list.length && !id) idx = 0;
    if (idx < 0) {
      host.innerHTML = '<section class="page-hero container"><a class="back-link" href="' + ROOT + 'index.html#projects">← All projects</a><h1>Case study not found</h1><p class="lead">This project may have been renamed. Please return to the projects list.</p></section>';
      return;
    }
    var p = list[idx];
    var C = (window.caseStudies || {})[p.id] || {};
    document.title = (p.shortTitle || p.title) + " — Case Study | " + (D.name || "");
    var md = $('meta[name="description"]'); if (md) md.setAttribute("content", C.summary || p.summary || "");

    var n = 0, secs = [], toc = [];
    function add(id, icon, title, body, sub) { n++; secs.push(csSection(id, n, icon, title, body, sub)); toc.push([id, title]); }
    function bullets(arr, icon, cls) {
      return '<ul class="cs-bullets ' + (cls || "") + '">' + arr.map(function (t) { return "<li>" + ci(icon, "ci-s") + "<span>" + esc(t) + "</span></li>"; }).join("") + "</ul>";
    }

    if (has(C.summary)) add("summary", "summary", "Executive summary", '<div class="cs-callout">' + "<p>" + esc(C.summary) + "</p></div>");

    if (has(C.problem)) add("problem", "alert", "Business problem",
      '<p class="cs-text">' + esc(C.problem) + "</p>" +
      (has(C.problemStats) ? '<div class="stat-row">' + C.problemStats.map(function (s) {
        return '<div class="stat stat-red"><b>' + esc(s.v) + "</b><span>" + esc(s.k) + "</span></div>"; }).join("") + '</div><p class="cs-note">Case-study baseline data.</p>' : ""));

    if (has(C.objectives)) add("objectives", "target", "Project objectives",
      '<ol class="obj-grid">' + C.objectives.map(function (o, i) { return '<li><span class="obj-n">O' + (i + 1) + "</span><span>" + esc(o) + "</span></li>"; }).join("") + "</ol>");

    if (has(C.stakeholders)) add("stakeholders", "users", "Stakeholder analysis",
      '<div class="tbl-wrap"><table class="cs-table"><thead><tr><th>Stakeholder</th><th>Key interest</th><th>Influence</th><th>Interest</th><th>Engagement</th></tr></thead><tbody>' +
      C.stakeholders.map(function (s) {
        return "<tr><td><b>" + esc(s.name) + "</b></td><td>" + esc(s.interest) + '</td><td><span class="lv lv-' + s.power[0] + '">' + esc(s.power) +
          '</span></td><td><span class="lv lv-' + s.int[0] + '">' + esc(s.int) + '</span></td><td><span class="qpill ' + QUAD[s.q][1] + '">' + QUAD[s.q][0] + "</span></td></tr>";
      }).join("") + "</tbody></table></div>" +
      '<h3 class="cs-h3">' + ci("users", "ci-s") + "Stakeholder map</h3>" + stakeMap(C.stakeholders));

    if (C.asis && has(C.asis.steps)) add("asis", "flow", "Current state analysis (AS-IS)",
      '<p class="cs-text">' + esc(C.asis.intro) + "</p>" +
      (has(C.systems) ? '<div class="sys-row">' + C.systems.map(function (s) { return '<span class="sys">' + ci("server", "ci-s") + esc(s) + "</span>"; }).join("") + "</div>" : "") +
      '<div class="diagram"><p class="diagram-l">AS-IS process' + (C.asis.steps.some(function (s) { return s.pain; }) ? ' · <span class="red">pain points marked</span>' : "") + "</p>" + flowDiagram(C.asis.steps, "asis") + "</div>" +
      (has(C.asis.limitations) ? '<h3 class="cs-h3">' + ci("x", "ci-s") + "Limitations</h3>" + bullets(C.asis.limitations, "x", "b-red") : ""));

    if (has(C.approach)) add("approach", "search", "Analysis approach",
      '<div class="tech-grid">' + C.approach.map(function (a) { return '<div class="tech"><b>' + ci("check", "ci-s") + esc(a.name) + "</b><p>" + esc(a.how) + "</p></div>"; }).join("") + "</div>");

    if (has(C.timeline)) add("timeline", "calendar", "BA activity timeline",
      '<ol class="bat">' + C.timeline.map(function (t, i) { return '<li><span class="bat-n">' + (i + 1) + '</span><div><b>' + esc(t.t) + "</b><span>" + esc(t.d) + "</span></div></li>"; }).join("") + "</ol>");

    if (has(C.findings)) add("findings", "bulb", "Key findings",
      '<div class="find-grid">' + C.findings.map(function (f, i) { return '<div class="find"><span class="find-n">' + pad(i + 1) + "</span><p>" + esc(f) + "</p></div>"; }).join("") + "</div>");

    if (C.tobe && has(C.tobe.steps)) add("tobe", "spark", "Future state design (TO-BE)",
      '<p class="cs-text">' + esc(C.tobe.intro) + "</p>" +
      '<div class="diagram diagram-good"><p class="diagram-l">TO-BE process · <span class="teal">new or automated steps highlighted</span></p>' + flowDiagram(C.tobe.steps, "tobe") + "</div>");

    if (has(C.fr) || has(C.nfr)) add("requirements", "list", "Requirements summary",
      (has(C.fr) ? '<h3 class="cs-h3">' + ci("list", "ci-s") + 'Functional requirements</h3><div class="tbl-wrap"><table class="cs-table"><thead><tr><th style="width:74px">ID</th><th>Requirement</th><th style="width:90px">Priority</th></tr></thead><tbody>' +
        C.fr.map(function (r, i) { return '<tr><td class="mono">FR-' + pad(i + 1) + "</td><td>" + esc(r.t) + '</td><td><span class="mo mo-' + r.p.toLowerCase() + '">' + esc(r.p) + "</span></td></tr>"; }).join("") + "</tbody></table></div>" : "") +
      (has(C.nfr) ? '<h3 class="cs-h3">' + ci("shield", "ci-s") + 'Non-functional requirements</h3><div class="tbl-wrap"><table class="cs-table"><thead><tr><th style="width:74px">ID</th><th style="width:150px">Category</th><th>Requirement</th></tr></thead><tbody>' +
        C.nfr.map(function (r, i) { return '<tr><td class="mono">NFR-' + pad(i + 1) + "</td><td><b>" + esc(r.c) + "</b></td><td>" + esc(r.t) + "</td></tr>"; }).join("") + "</tbody></table></div>" : "") +
      '<p class="cs-note">Priority uses MoSCoW (Must, Should, Could, Won\'t).</p>');

    if (has(C.recommendations)) add("recommendations", "check", "Recommendations", bullets(C.recommendations, "check", "b-teal cs-recs"));

    if (has(C.outcomes)) add("outcomes", "trend", "Expected outcomes",
      '<div class="out-grid">' + C.outcomes.map(function (o) { return '<div class="out">' + ci(o.i || "check") + "<b>" + esc(o.t) + "</b></div>"; }).join("") + "</div>");

    if (has(C.risks)) add("risks", "shield", "Risks & mitigation",
      '<div class="tbl-wrap"><table class="cs-table"><thead><tr><th>Risk</th><th style="width:96px">Rating</th><th>Mitigation</th></tr></thead><tbody>' +
      C.risks.map(function (r) { return "<tr><td><b>" + esc(r.r) + '</b></td><td><span class="lv lv-' + r.l[0] + '">' + esc(r.l) + "</span></td><td>" + esc(r.m) + "</td></tr>"; }).join("") + "</tbody></table></div>");

    if (has(C.kpis)) add("kpis", "gauge", "KPIs & success measures",
      '<div class="kpi-grid">' + C.kpis.map(function (k) {
        return '<div class="kpi kpi-' + k.dir + '"><div class="kpi-top">' + ci(k.dir === "up" ? "up" : "down", "ci-s") + "<span>" + esc(k.m) + '</span></div><div class="kpi-v">' + esc(k.target) + "</div>" +
          (has(k.base) && k.base !== "—" ? '<div class="kpi-b">Baseline: ' + esc(k.base) + "</div>" : "") + '<div class="kpi-h">' + esc(k.how) + "</div></div>";
      }).join("") + "</div>" + (C.kpis.some(function (k) { return has(k.base) && k.base !== "—"; }) ? '<p class="cs-note">Baselines are case-study data.</p>' : '<p class="cs-note">Baselines to be measured before implementation; targets set with stakeholders.</p>'));

    if (C.lifecycle && has(C.lifecycle.phases)) add("lifecycle", "cycle", C.lifecycle.title === "SDLC overview" ? "SDLC overview" : C.lifecycle.title,
      '<ol class="sdlc">' + C.lifecycle.phases.map(function (ph, i) {
        return '<li><div class="sdlc-h"><span>' + (i + 1) + "</span>" + esc(ph.n) + "</div><ul>" + ph.a.map(function (a) { return "<li>" + esc(a) + "</li>"; }).join("") + "</ul></li>";
      }).join("") + "</ol>");

    if (has(C.deliverables)) add("deliverables", "box", "Business analysis deliverables",
      '<div class="del-grid">' + C.deliverables.map(function (d) {
        if (has(d.file)) return '<a class="del" href="' + esc(url(d.file)) + '" target="_blank" rel="noopener">' + ci("file") + "<span><b>" + esc(d.t) + '</b><small>PDF · open ↗</small></span></a>';
        return '<a class="del" href="#' + esc(d.anchor || "") + '">' + ci("file") + "<span><b>" + esc(d.t) + '</b><small>On this page ↓</small></span></a>';
      }).join("") + "</div>");

    var groups = has(C.skillGroups) ? C.skillGroups : [{ g: "Skills", items: p.skills || [] }];
    add("skills", "tag", "Skills demonstrated",
      '<div class="skill-groups">' + groups.map(function (g) { return '<div class="sg"><span class="sg-l">' + esc(g.g) + "</span>" + chips(g.items, true) + "</div>"; }).join("") + "</div>");

    // overview infographic
    var reqCount = (C.fr || []).length + (C.nfr || []).length;
    var ov = [
      ["tag", "Category", p.category],
      ["users", "Stakeholders", (C.stakeholders || []).length + " groups"],
      ["list", "Requirements", reqCount ? reqCount + " (" + (C.fr || []).length + " FR · " + (C.nfr || []).length + " NFR)" : "—"],
      ["shield", "Risks assessed", (C.risks || []).length || "—"],
      ["gauge", "KPIs", (C.kpis || []).length || "—"],
      ["calendar", "BA activities", (C.timeline || []).length ? (C.timeline || []).length + " stages" : "—"]
    ].map(function (o) { return '<div class="ov">' + ci(o[0], "ci-s") + "<span>" + o[1] + "</span><b>" + esc(String(o[2])) + "</b></div>"; }).join("");

    var prev = list[(idx - 1 + list.length) % list.length], next = list[(idx + 1) % list.length];
    var docLink = (C.deliverables || []).filter(function (d) { return d.file; })[0];

    host.innerHTML =
      '<section class="cs-hero"><div class="container">' +
        '<a class="back-link" href="' + ROOT + 'index.html#projects">← All projects</a>' +
        '<div class="page-meta"><span class="chip">' + esc(p.category) + "</span>" + (has(p.context) ? '<span class="chip chip-soft">' + esc(p.context) + "</span>" : "") + '<span class="chip chip-soft">Case study ' + pad(idx + 1) + " of " + pad(list.length) + "</span></div>" +
        "<h1>" + esc(p.title) + "</h1>" +
        '<p class="print-by">' + esc(D.name || "") + " · " + esc((D.title || "").split("|")[0].trim()) + "</p>" +
        '<div class="cs-actions"><button class="btn btn-primary" type="button" id="cs-print">' + ci("print", "ci-btn") + "Download case study (PDF)</button>" +
          '<a class="btn btn-ghost" href="#deliverables">' + ci("box", "ci-btn") + "View deliverables</a></div>" +
        '<div class="cs-banner"><img src="' + esc(url(p.image)) + '" alt=""><div class="ov-grid">' + ov + "</div></div>" +
      "</div></section>" +
      '<div class="container cs-wrap">' +
        '<nav class="cs-toc" aria-label="Case study sections"><p>On this page</p><ol>' + toc.map(function (t) { return '<li><a href="#' + t[0] + '">' + esc(t[1]) + "</a></li>"; }).join("") + "</ol>" +
          (docLink ? '<a class="btn btn-ghost btn-sm btn-block" href="#deliverables">Artefact PDFs</a>' : "") + "</nav>" +
        '<div class="cs-main">' + secs.join("") + "</div>" +
      "</div>" +
      '<div class="container">' +
        (list.length > 1 ? '<nav class="cs-nav" aria-label="More case studies">' +
          '<a class="card" href="' + caseUrl(prev.id) + '"><small>← Previous</small><strong>' + esc(prev.shortTitle || prev.title) + "</strong></a>" +
          '<a class="card next" href="' + caseUrl(next.id) + '"><small>Next →</small><strong>' + esc(next.shortTitle || next.title) + "</strong></a></nav>" : "") +
      "</div>";

    var pb = $("#cs-print"); if (pb) pb.addEventListener("click", function () { window.print(); });

    // highlight current section in the TOC
    if ("IntersectionObserver" in window) {
      var links = $all(".cs-toc a[href^='#']");
      var io = new IntersectionObserver(function (es) {
        es.forEach(function (e) {
          if (e.isIntersecting) links.forEach(function (l) { l.classList.toggle("active", l.getAttribute("href") === "#" + e.target.id); });
        });
      }, { rootMargin: "-30% 0px -60% 0px" });
      $all(".cs-sec").forEach(function (s) { io.observe(s); });
    }
  }

  /* ------------------------------------------------------------ ARTICLE page */
  function renderArticle() {
    var host = $("#article"); if (!host) return;
    var id = new URLSearchParams(location.search).get("id");
    var a = null;
    ARTICLES.forEach(function (x) { if (x.id === id) a = x; });
    if (!a) {
      host.innerHTML = '<section class="page-hero"><a class="back-link" href="' + ROOT + 'index.html#insights">← All insights</a><h1>Article not found</h1><p class="lead">Please return to the insights list.</p></section>';
      return;
    }
    document.title = a.title + " | " + (D.name || "");
    var md = $('meta[name="description"]'); if (md) md.setAttribute("content", a.excerpt || "");

    var body = (a.body || []).map(function (b) {
      if (typeof b === "string") return "<p>" + esc(b) + "</p>";
      if (b.h) return "<h2>" + esc(b.h) + "</h2>";
      if (b.ul) return "<ul>" + b.ul.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul>";
      if (b.quote) return "<blockquote>" + esc(b.quote) + "</blockquote>";
      return "";
    }).join("");

    var related = ARTICLES.filter(function (x) { return x.id !== a.id && x.category === a.category; });
    if (related.length < 2) related = related.concat(ARTICLES.filter(function (x) { return x.id !== a.id && x.category !== a.category; }));
    related = related.slice(0, 2);

    host.innerHTML =
      '<header class="page-hero"><a class="back-link" href="' + ROOT + 'index.html#insights">← All insights</a>' +
        '<div class="page-meta"><span class="chip">' + esc(a.category) + '</span><span class="chip chip-soft">' + readTime(a) + "</span>" +
        (has(a.date) ? '<span class="chip chip-soft">' + esc(a.date) + "</span>" : "") + "</div>" +
        "<h1>" + esc(a.title) + '</h1><p class="lead">' + esc(a.excerpt) + "</p>" +
        '<p class="footer-meta" style="margin-top:18px">By ' + esc(D.name || "") + " · " + esc((D.title || "").split("|")[0].trim()) + "</p>" +
      "</header>" +
      '<div class="article-body">' + body + "</div>" +
      '<div class="article-footer"><a class="btn btn-ghost" href="' + ROOT + 'index.html#insights">← More insights</a>' +
        (has(a.linkedin) ? '<a class="btn btn-ghost" href="' + esc(a.linkedin) + '" target="_blank" rel="noopener">Discuss on LinkedIn ↗</a>' : "") +
        '<a class="btn btn-primary" href="' + ROOT + 'index.html#contact">Get in touch</a></div>' +
      (related.length ? '<section class="article-related"><h2>Keep reading</h2><div class="insight-grid">' + related.map(insightCard).join("") + "</div></section>" : "");
  }

  /* ------------------------------------------------------------ THEME */
  function initTheme() {
    var btn = $("#theme-toggle"); if (!btn) return;
    var rootEl = document.documentElement;
    function current() {
      var t = rootEl.getAttribute("data-theme");
      if (t) return t;
      return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    function label() { btn.setAttribute("aria-label", current() === "dark" ? "Switch to light theme" : "Switch to dark theme"); }
    label();
    btn.addEventListener("click", function () {
      var next = current() === "dark" ? "light" : "dark";
      rootEl.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
      label();
    });
  }

  /* ------------------------------------------------------------ NAV */
  function initNav() {
    var header = $(".site-header");
    var toggle = $("#menu-toggle");
    var nav = $("#site-nav");
    function close() { document.body.classList.remove("menu-open"); if (toggle) { toggle.setAttribute("aria-expanded", "false"); toggle.setAttribute("aria-label", "Open menu"); } }
    if (toggle && nav) {
      toggle.addEventListener("click", function () {
        var open = document.body.classList.toggle("menu-open");
        toggle.setAttribute("aria-expanded", open);
        toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
        if (open) { var first = $("a", nav); if (first) first.focus(); }
      });
      $all("a", nav).forEach(function (a) { a.addEventListener("click", close); });
      document.addEventListener("keydown", function (e) { if (e.key === "Escape" && document.body.classList.contains("menu-open")) { close(); toggle.focus(); } });
      window.addEventListener("resize", function () { if (window.innerWidth > 900) close(); });
    }
    function onScroll() { if (header) header.classList.toggle("scrolled", window.scrollY > 8); }
    window.addEventListener("scroll", onScroll, { passive: true }); onScroll();

    // highlight the current section in the nav
    if (PAGE === "home" && "IntersectionObserver" in window) {
      var links = $all(".nav-links a[href^='#']");
      var map = {};
      links.forEach(function (l) { map[l.getAttribute("href").slice(1)] = l; });
      var sections = Object.keys(map).map(function (id) { return document.getElementById(id); }).filter(Boolean);
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) {
            links.forEach(function (l) { l.classList.remove("active"); l.removeAttribute("aria-current"); });
            var l = map[en.target.id]; if (l) { l.classList.add("active"); l.setAttribute("aria-current", "true"); }
          }
        });
      }, { rootMargin: "-45% 0px -50% 0px" });
      sections.forEach(function (s) { io.observe(s); });
    }
  }

  /* ------------------------------------------------------------ REVEAL ANIMATIONS */
  function initReveal() {
    var items = $all(".reveal");
    if (reduceMotion || !("IntersectionObserver" in window)) {
      items.forEach(function (i) { i.classList.add("is-visible"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("is-visible"); io.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });
    items.forEach(function (i, n) {
      // small stagger for items in the same group
      var sib = i.parentElement ? Array.prototype.indexOf.call(i.parentElement.children, i) : 0;
      i.style.transitionDelay = Math.min(sib, 5) * 60 + "ms";
      io.observe(i);
    });
  }

  /* ------------------------------------------------------------ boot */
  bindCommon();
  if (PAGE === "home") { renderHome(); initHero(); initForm(); }
  if (PAGE === "case-study") renderCaseStudy();
  if (PAGE === "article") renderArticle();
  initTheme();
  initNav();
  initReveal();

  // re-apply hash scroll after content renders (when arriving from another page)
  if (location.hash && PAGE === "home") {
    var target = document.getElementById(location.hash.slice(1));
    if (target) setTimeout(function () { target.scrollIntoView({ behavior: "auto" }); }, 50);
  }
})();
