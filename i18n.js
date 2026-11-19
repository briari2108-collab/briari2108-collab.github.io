/* =========================================
   TRADUCTOR COMPLETO ES / EN / QU
   Usa el motor de Google Translate (oculto)
   y se controla con los 3 botones .lang-btn
   Traduce TODA la página automáticamente.
========================================= */
(function () {

    const LANGS = { es: "es", en: "en", qu: "qu" };

    function getLang() {
        const m = document.cookie.match(/googtrans=\/es\/([a-z]+)/);
        return m && LANGS[m[1]] ? m[1] : "es";
    }

    function writeCookie(value, expire) {
        const exp = expire ? ";expires=Thu, 01 Jan 1970 00:00:00 GMT" : "";
        document.cookie = "googtrans=" + value + ";path=/" + exp;
        document.cookie = "googtrans=" + value + ";path=/;domain=" + location.hostname + exp;
    }

    function setLang(lang) {
        if (lang === getLang()) return;
        if (lang === "es") writeCookie("", true);
        else writeCookie("/es/" + lang, false);
        location.reload();
    }

    // Textos que NO se deben traducir (nombres propios y botones)
    function protect() {
        const keep = [".lang-switcher", ".brand", ".footer-brand", "h1",
            ".hero-decoration", ".candidate-initials", ".contact-box-symbol",
            ".footer-message h3", ".contact-information a"];
        keep.forEach(sel => document.querySelectorAll(sel).forEach(el => {
            el.classList.add("notranslate");
            el.setAttribute("translate", "no");
        }));
        const names = ["Minka", "Ayni", "Pachamama", "Sumak Kawsay"];
        document.querySelectorAll(".identity-card h3").forEach(h => {
            if (names.includes(h.textContent.trim())) {
                h.classList.add("notranslate");
                h.setAttribute("translate", "no");
            }
        });
    }

    function loadGoogle(lang) {
        const box = document.createElement("div");
        box.id = "google_translate_element";
        box.style.display = "none";
        document.body.appendChild(box);

        window.googleTranslateElementInit = function () {
            new google.translate.TranslateElement({
                pageLanguage: "es",
                includedLanguages: "en,qu",
                autoDisplay: false
            }, "google_translate_element");
        };

        const s = document.createElement("script");
        s.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        document.head.appendChild(s);
    }

    function markActive(lang) {
        document.querySelectorAll(".lang-btn").forEach(b => {
            const on = b.dataset.lang === lang;
            b.classList.toggle("active", on);
            b.setAttribute("aria-pressed", on);
        });
    }

    function buildSwitcher() {
        if (document.querySelector(".lang-switcher")) return;
        const box = document.createElement("div");
        box.className = "lang-switcher";
        box.innerHTML =
            '<button class="lang-btn" data-lang="es"><span class="lang-flag">🇪🇨</span><span class="lang-text">ESPAÑOL</span></button>' +
            '<button class="lang-btn" data-lang="en"><span class="lang-flag">🇺🇸</span><span class="lang-text">ENGLISH</span></button>' +
            '<button class="lang-btn" data-lang="qu"><span class="lang-flag">🌄</span><span class="lang-text">KICHWA</span></button>';
        document.body.appendChild(box);
    }

    document.addEventListener("click", e => {
        const b = e.target.closest(".lang-btn");
        if (b) setLang(b.dataset.lang);
    });

    document.addEventListener("DOMContentLoaded", () => {
        buildSwitcher();
        protect();
        const lang = getLang();
        markActive(lang);
        if (lang !== "es") loadGoogle(lang);
    });

})();
