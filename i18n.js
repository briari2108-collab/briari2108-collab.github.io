/* =========================================
   TRADUCTOR ES / EN / QU (Kichwa)
   Funciona buscando el texto en español y
   reemplazándolo. NO hay que modificar el HTML.
   Si un texto no está en el diccionario,
   se queda en español.
========================================= */

(function () {

    // "Texto en español": ["English", "Kichwa"]
    const D = {

        /* BARRA SUPERIOR / MENÚ */
        "PARTICIPACIÓN · INNOVACIÓN · DESARROLLO": ["PARTICIPATION · INNOVATION · DEVELOPMENT", "TANTANAKUY · MUSHUK YUYAY · WIÑARICHIY"],
        "Movimiento de Unidad Plurinacional": ["Plurinational Unity Movement", "Achka Llaktakunapak Shuk Shunkulla Tantanakuy"],
        "Inicio": ["Home", "Kallari"],
        "Identidad": ["Identity", "Kikin kay"],
        "Propuestas": ["Proposals", "Yuyaykuna"],
        "Ejes de trabajo": ["Work areas", "Llankay ñankuna"],
        "Participación": ["Participation", "Tantanakuy"],
        "Contáctanos": ["Contact us", "Rimarishun"],

        /* PORTADA */
        "UNA NUEVA VISIÓN PARA EL VALLE": ["A NEW VISION FOR EL VALLE", "MUSHUK RIKUY EL VALLEPAK"],
        "CANDIDATURA A VOCAL PARROQUIAL": ["CANDIDATE FOR PARISH BOARD MEMBER", "PARROQUIA VOCAL KAMACHIKPAK CHASKIK"],
        "Innovación, participación y desarrollo para nuestra parroquia.": ["Innovation, participation and development for our parish.", "Mushuk yuyay, tantanakuy y wiñarichiy ñukanchik parroquiapak."],
        "Creemos en una parroquia que aprovecha su potencial, fortalece sus comunidades y construye oportunidades mediante la planificación, la tecnología y el trabajo conjunto.": [
            "We believe in a parish that makes the most of its potential, strengthens its communities and builds opportunities through planning, technology and teamwork.",
            "Ñukanchik parroquiata kallpachishun, ayllullaktakunata sinchiyachishun, yuyaykuna, yachay y shuk shunkulla llankaywan."],
        "CONOCE EL PLAN DE TRABAJO →": ["SEE THE WORK PLAN →", "LLANKAY YUYAYKUNATA RIKUY →"],
        "NUESTRA IDENTIDAD": ["OUR IDENTITY", "ÑUKANCHIK KIKIN KAY"],
        "PAZ · UNIDAD · DESARROLLO": ["PEACE · UNITY · DEVELOPMENT", "HAWKA KAY · SHUK SHUNKULLA · WIÑARICHIY"],

        /* VISIÓN */
        "NUESTRA VISIÓN": ["OUR VISION", "ÑUKANCHIK RIKUY"],
        "El futuro de El Valle se construye con ideas, planificación y trabajo.": ["The future of El Valle is built with ideas, planning and work.", "El Vallepak kunan pacha yuyaykunawan, ruranawan y llankaywan paktachishun."],
        "Nuestra propuesta parte de una idea fundamental: mejorar lo que ya existe y desarrollar nuevas soluciones para los desafíos de nuestra parroquia.": [
            "Our proposal starts from one core idea: improve what already exists and develop new solutions to the challenges of our parish.",
            "Ñukanchik yuyaykuna kay shukllamanta kallarin: ima kashkata alliyachishun y mushuk paktachiykunata tarishun."],

        /* CANDIDATO */
        "CONOCE A TU CANDIDATO": ["MEET YOUR CANDIDATE", "KAMBAK CHASKIKTA RIKUCHUY"],
        "INNOVACIÓN Y DESARROLLO": ["INNOVATION AND DEVELOPMENT", "MUSHUK YUYAY Y WIÑARICHIY"],
        "Ingeniero Civil.": ["Civil Engineer.", "Ingeniero Civil."],
        "Innovación": ["Innovation", "Mushuk yuyay"],
        "Planificación": ["Planning", "Yuyaykuna"],
        "Nuevas soluciones para los problemas locales.": ["New solutions for local problems.", "Llaktapak sasikunapak mushuk paktachiykuna."],
        "Proyectos con objetivos y etapas claras.": ["Projects with clear goals and stages.", "Ruraykuna rikuk munaykunawan."],
        "La ciudadanía como protagonista.": ["Citizens as the protagonists.", "Llaktamasikuna ñawpak kaypi."],

        /* IDENTIDAD */
        "Una visión basada en la unidad, la diversidad y el Buen Vivir.": ["A vision based on unity, diversity and Buen Vivir.", "Shuk shunkulla, kaykunapa tukuy laya y Sumak Kawsaypi sinchiyashka rikuy."],
        "Trabajo comunitario y colaboración para alcanzar objetivos comunes.": ["Community work and collaboration to reach common goals.", "Ayllullaktapak llankay, shuk shunkulla munaykunaman chayankapak."],
        "Reciprocidad, solidaridad y apoyo entre las personas.": ["Reciprocity, solidarity and support among people.", "Kutin kuy, yanapanakuy runakuna ukupi."],
        "Respeto por la naturaleza y protección de nuestro entorno.": ["Respect for nature and protection of our environment.", "Pachamamata kuyay y ñukanchik kaytukuyta kamay."],
        "Soberanía alimentaria": ["Food sovereignty", "Mikuy kamachik kay"],
        "Valoración de nuestros productores y de la alimentación local.": ["Appreciation of our producers and local food.", "Ñukanchik tarpuk runakunata y llaktapak mikuykunata kuyay."],
        "Plurinacionalidad": ["Plurinationality", "Achka llakta kay"],
        "Reconocimiento y respeto de nuestras raíces y culturas.": ["Recognition and respect for our roots and cultures.", "Ñukanchik ruyra y kawsaykunata rikuchiy y kuyay."],
        "El Buen Vivir, con dignidad, equilibrio y bienestar colectivo.": ["Good Living, with dignity, balance and collective well-being.", "Sumak Kawsay: alli kawsay, tupuy y tukuypak alli kay."],

        /* EJES */
        "PLAN DE TRABAJO": ["WORK PLAN", "LLANKAY YUYAYKUNA"],
        "Cinco ejes para transformar nuestra parroquia.": ["Five areas to transform our parish.", "Pichka ñankuna ñukanchik parroquiata tikrachinkapak."],
        "Productividad y economía local": ["Productivity and local economy", "Llankay y llaktapak qullki kawsay"],
        "Productores, emprendimientos, mercados y turismo.": ["Producers, businesses, markets and tourism.", "Tarpuk, rantik, katuna y purik."],
        "Infraestructura y ordenamiento": ["Infrastructure and land planning", "Ñankuna y allpa ordenay"],
        "Vialidad, movilidad, seguridad y planificación territorial.": ["Roads, mobility, safety and territorial planning.", "Ñan, purina, kamay y allpa yuyaykuna."],
        "Social, cultural e inclusión": ["Social, cultural and inclusion", "Runa kawsay, kawsay y tukuyta churay"],
        "Juventud, educación, cultura y protección social.": ["Youth, education, culture and social protection.", "Wayna-sipaskuna, yachay, kawsay y runa kamay."],
        "Ambiente y gestión de riesgos": ["Environment and risk management", "Kaytukuy y wakllichiy mana yuyay"],
        "Agua, saneamiento, conservación y prevención.": ["Water, sanitation, conservation and prevention.", "Yaku, pichay, waqaychay y ñawpak kamay."],
        "Transparencia y participación": ["Transparency and participation", "Rikuchik kay y tantanakuy"],
        "Gobierno digital, rendición de cuentas y ciudadanía.": ["Digital government, accountability and citizenship.", "Digital kamachik, yupay rikuchiy y llaktamasikuna."],
        "VER PROPUESTAS →": ["SEE PROPOSALS →", "YUYAYKUNATA RIKUY →"],

        /* PROPUESTAS */
        "PROYECTOS Y SOLUCIONES": ["PROJECTS AND SOLUTIONS", "RURAYKUNA Y PAKTACHIYKUNA"],
        "Conoce nuestras propuestas.": ["Discover our proposals.", "Ñukanchik yuyaykunata riksiy."],
        "Explora los proyectos que forman parte del plan de trabajo para el desarrollo de El Valle.": ["Explore the projects that are part of the work plan for the development of El Valle.", "El Vallepak wiñarichiy llankay yuyaykunapi ruraykunata maskay."],
        "TODAS": ["ALL", "TUKUY"],
        "ECONOMÍA": ["ECONOMY", "QULLKI"],
        "INFRAESTRUCTURA": ["INFRASTRUCTURE", "ÑAN RURAY"],
        "SOCIAL Y CULTURA": ["SOCIAL AND CULTURE", "RUNA Y KAWSAY"],
        "AMBIENTE": ["ENVIRONMENT", "KAYTUKUY"],
        "TRANSPARENCIA": ["TRANSPARENCY", "RIKUCHIK KAY"],
        "EJE DE DESARROLLO": ["DEVELOPMENT AREA", "WIÑARICHIY ÑAN"],
        "Ver detalles": ["See details", "Ashtawan rikuy"],
        "No se encontraron propuestas con ese criterio de búsqueda.": ["No proposals were found for that search.", "Chay maskaywan yuyaykuna mana tarirka."],

        "Productividad, economía local y turismo": ["Productivity, local economy and tourism", "Llankay, llaktapak qullki y purik"],
        "Espacio para productores en el mercado y ferias parroquiales": ["Space for producers in the market and parish fairs", "Tarpukkunapak katuna wasi y parroquia katukuna"],
        "Dos miradores y una ruta turística parroquial": ["Two viewpoints and a parish tourist route", "Ishkay rikuna pampa y parroquia purina ñan"],
        "Ventanilla de emprendimiento y economía popular y solidaria": ["Entrepreneurship desk and popular and solidarity economy", "Rantik llankaypak ventanilla y runa yanapanakuy qullki"],
        "Un mercado digno, seguro y autosostenible.": ["A dignified, safe and self-sustaining market.", "Alli, kamashka y kikin sinchi katuna."],
        "PROYECTO INTEGRAL": ["INTEGRAL PROJECT", "TUKUY RURAY"],
        "Conocer las seis líneas de acción": ["Learn the six lines of action", "Sukta ruray ñankunata riksiy"],

        "Infraestructura y ordenamiento territorial": ["Infrastructure and territorial planning", "Ñankuna y allpa ordenay"],
        "Tecnificación del lastrado con bombeo normativo": ["Improved gravelling with standard road crown", "Rumi churayta yachaywan alliyachiy"],
        "Piloto de geoceldas de polímero de alta densidad": ["High-density polymer geocell pilot", "Geocelda yachay ñawpak rikuna"],
        "Repotenciación de las cinco salidas de la parroquia": ["Upgrading the parish's five exits", "Parroquiapak pichka llukshina ñankunata sinchiyachiy"],
        "Reorganización vial del centro parroquial y parqueo": ["Road reorganization of the parish center and parking", "Parroquia chawpi ñan y kaskana ordenay"],
        "Desconcentración de servicios de Cuenca hacia El Valle": ["Moving Cuenca's services closer to El Valle", "Cuenca yanapaykunata El Valleman pushashpa"],
        "Red comunitaria de videovigilancia en tiempo real": ["Community real-time video surveillance network", "Ayllullaktapak kunan rikuk kamay"],
        "Actualización participativa del PDOT": ["Participatory update of the PDOT", "PDOT tantanakuywan mushuyachiy"],

        "Social, cultural y de inclusión": ["Social, cultural and inclusion", "Runa kawsay, kawsay y tukuyta churay"],
        "Programa de inteligencia artificial aplicada": ["Applied artificial intelligence program", "Yuyay makina yachachiy ruray"],
        "Programa de inglés comunitario": ["Community English program", "Ayllullaktapak inglés yachachiy"],
        "Feria de internacionalización universitaria": ["University internationalization fair", "Hawa llaktakunapi yachana wasi feria"],
        "Feria parroquial de ciencia, tecnología y proyectos": ["Parish science, technology and projects fair", "Parroquia yachay, tecnología y ruray feria"],
        "Educación afectivo-sexual: Proyecto de Vida": ["Affective-sexual education: Life Project", "Kuyay yachachiy: Kawsay Ruray"],
        "Red Comunidad Protectora": ["Protective Community Network", "Kamak Ayllullakta Tantanakuy"],
        "Apoyo a personas con alcoholismo mediante convenios": ["Support for people with alcoholism through agreements", "Machay unkuywan runakunata yanapay"],
        "Reconocimiento oficial de las culturas de la parroquia": ["Official recognition of the parish's cultures", "Parroquiapak kawsaykunata rikuchiy"],
        "Formación académica y reconocimiento a los músicos": ["Academic training and recognition for musicians", "Takikkunata yachachiy y rikuchiy"],
        "Reconocimiento y galería parroquial para artistas": ["Recognition and parish gallery for artists", "Rurakkunata rikuchiy y rikuna wasi"],

        "Ambiental y gestión de riesgos": ["Environment and risk management", "Kaytukuy y wakllichiy mana yuyay"],
        "Protección de fuentes de agua y control de calidad": ["Protection of water sources and quality control", "Yaku pukyukunata kamay y alli kayta rikuy"],
        "Captaciones y sistemas de potabilización tecnificados": ["Modern water intakes and purification systems", "Yaku tantachik y pichak mushuk ruray"],
        "Plan de saneamiento: alcantarillado o planta de tratamiento": ["Sanitation plan: sewerage or treatment plant", "Pichay yuyaykuna: wiku ñan o pichak wasi"],
        "Mapa de riesgos: remoción en masa y fallas geológicas": ["Risk map: landslides and geological faults", "Mana alli kuna mapa: allpa shitashka y allpa chuqrishka"],
        "Protección de quebradas y reforestación con especies nativas": ["Ravine protection and reforestation with native species", "Wayku kamay y kikin sachakunawan tarpuy"],

        "Político-institucional, participación y transparencia": ["Political-institutional, participation and transparency", "Kamachik, tantanakuy y rikuchik kay"],
        "Transparencia activa y portal web actualizado": ["Active transparency and updated web portal", "Kawsak rikuchik kay y mushuk web"],
        "Presidente en territorio y convenios de participación": ["President in the territory and participation agreements", "Presidente llaktakunapi y tantanakuy shimiyachiy"],
        "Gobierno parroquial digital con inteligencia artificial": ["Digital parish government with artificial intelligence", "Digital parroquia kamachik yuyay makinawan"],
        "Observatorio ciudadano de obras y veeduría": ["Citizen observatory of public works", "Llaktamasipak ruray rikuk"],

        /* PARTICIPACIÓN */
        "EL VALLE LO CONSTRUIMOS TODOS": ["WE ALL BUILD EL VALLE", "EL VALLETA TUKUY PAKTACHISHUN"],
        "Una parroquia participativa necesita escuchar a su gente.": ["A participatory parish needs to listen to its people.", "Tantanakuk parroquiaka runakunata uyana kan."],
        "Las propuestas deben construirse junto a las comunidades. La participación ciudadana, las asambleas y el seguimiento de los proyectos son fundamentales para alcanzar resultados.": [
            "Proposals must be built together with communities. Citizen participation, assemblies and project monitoring are essential to achieve results.",
            "Yuyaykunaka ayllullaktakunawan paktachina kan. Tantanakuy, asamblea y ruraykunata rikuy ñawpak kan."],
        "PARTICIPA CON NOSOTROS →": ["JOIN US →", "ÑUKANCHIKWAN TANTANAKUY →"],
        "EJES DE DESARROLLO": ["DEVELOPMENT AREAS", "WIÑARICHIY ÑANKUNA"],
        "PROPUESTAS Y ACCIONES": ["PROPOSALS AND ACTIONS", "YUYAYKUNA Y RURAYKUNA"],
        "AÑOS DE PLANIFICACIÓN": ["YEARS OF PLANNING", "WATA YUYAYKUNA"],

        /* COMPROMISO */
        "COMPROMISO CON EL VALLE": ["COMMITMENT TO EL VALLE", "EL VALLEMAN KAMAY"],
        "Propuestas con planificación y responsabilidad.": ["Proposals with planning and responsibility.", "Yuyaykuna yuyaywan y kamayhuan."],
        "Diagnóstico": ["Diagnosis", "Rikuy"],
        "Gestión": ["Management", "Mañay"],
        "Ejecución": ["Execution", "Ruray"],
        "Evaluación": ["Evaluation", "Chimpapurayana"],
        "Conocer las necesidades reales de cada comunidad.": ["Learn the real needs of each community.", "Sapan ayllullaktapak ima illakta riksiy."],
        "Informar a la ciudadanía sobre los avances y resultados.": ["Inform citizens about progress and results.", "Llaktamasikunaman ñawpak y ruraykunata willay."],

        /* CONTACTO */
        "MANTENGAMOS EL CONTACTO": ["LET'S STAY IN TOUCH", "SHUKKUNAWAN RIMARISHUN"],
        "El Valle tiene mucho por construir.": ["El Valle has a lot to build.", "El Vallepak achka ruray kan."],
        "Tu opinión, tus ideas y las necesidades de tu comunidad son importantes para construir una propuesta participativa.": ["Your opinion, your ideas and your community's needs are important to build a participatory proposal.", "Kambak yuyay, yuyaykuna y ayllullaktapak illaykuna ñawpak kan."],
        "PROYECTO": ["PROJECT", "RURAY"],
        "ORGANIZACIÓN": ["ORGANIZATION", "TANTANAKUY"],
        "CANDIDATO": ["CANDIDATE", "CHASKIK"],
        "CORREO ELECTRÓNICO": ["EMAIL", "CORREO"],
        "Construyamos juntos.": ["Let's build together.", "Shuk shunkulla paktachishun."],
        "Las mejores soluciones nacen cuando escuchamos a quienes viven cada realidad.": ["The best solutions are born when we listen to those who live each reality.", "Alli paktachiykunaka kawsakkunata uyashpa kallarin."],
        "ESCRÍBEME POR WHATSAPP →": ["MESSAGE ME ON WHATSAPP →", "WHATSAPPPI KILLKAMUY →"],
        "ENVIAR UN CORREO ELECTRÓNICO →": ["SEND AN EMAIL →", "CORREOTA CHASKICHIY →"],
        "Ingeniero Felipe Sari": ["Engineer Felipe Sari", "Ingeniero Felipe Sari"],

        /* FOOTER */
        "Plan de trabajo": ["Work plan", "Llankay yuyaykuna"],
        "Contacto": ["Contact", "Rimarina"],
        "Ingeniero Civil · Candidato a vocal parroquial": ["Civil Engineer · Candidate for parish board member", "Ingeniero Civil · Parroquia vocal chaskik"],
        "UNIDAD · PARTICIPACIÓN · DESARROLLO": ["UNITY · PARTICIPATION · DEVELOPMENT", "SHUK SHUNKULLA · TANTANAKUY · WIÑARICHIY"],

        /* PLACEHOLDER BUSCADOR */
        "Buscar una propuesta, proyecto o tema...": ["Search for a proposal, project or topic...", "Yuyayta, rurayta o ima shimita maskay..."]
    };

    const LANGS = { es: 0, en: 1, qu: 2 };
    const HTML_LANG = { es: "es", en: "en", qu: "qu" };

    const norm = s => s.replace(/\s+/g, " ").trim();
    const originals = new WeakMap();      // nodo de texto -> texto original
    const phOriginal = new WeakMap();     // input -> placeholder original

    function textNodes() {
        const out = [];
        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
            acceptNode(n) {
                const p = n.parentNode.nodeName;
                if (p === "SCRIPT" || p === "STYLE" || p === "NOSCRIPT") return NodeFilter.FILTER_REJECT;
                if (n.parentNode.closest(".lang-switcher")) return NodeFilter.FILTER_REJECT;
                return norm(n.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
            }
        });
        while (walker.nextNode()) out.push(walker.currentNode);
        return out;
    }

    function applyLang(lang) {
        const idx = LANGS[lang];

        textNodes().forEach(node => {
            if (!originals.has(node)) originals.set(node, node.nodeValue);
            const original = originals.get(node);
            const key = norm(original);

            if (idx === 0 || !D[key]) {
                node.nodeValue = original;
            } else {
                // conserva espacios de inicio y fin
                const lead = original.match(/^\s*/)[0];
                const trail = original.match(/\s*$/)[0];
                node.nodeValue = lead + D[key][idx - 1] + trail;
            }
        });

        document.querySelectorAll("input[placeholder]").forEach(inp => {
            if (!phOriginal.has(inp)) phOriginal.set(inp, inp.placeholder);
            const o = phOriginal.get(inp);
            inp.placeholder = (idx > 0 && D[o]) ? D[o][idx - 1] : o;
        });

        document.documentElement.lang = HTML_LANG[lang];

        document.querySelectorAll(".lang-btn").forEach(b => {
            const active = b.dataset.lang === lang;
            b.classList.toggle("active", active);
            b.setAttribute("aria-pressed", active);
        });

        try { localStorage.setItem("site-lang", lang); } catch (e) {}
    }

    function buildSwitcher() {
        // Si los botones ya están en el HTML, no se crean de nuevo
        if (document.querySelector(".lang-switcher")) return;
        const box = document.createElement("div");
        box.className = "lang-switcher";
        box.innerHTML = `
            <button class="lang-btn" data-lang="es"><span class="lang-flag">🇪🇨</span><span class="lang-text">ESPAÑOL</span></button>
            <button class="lang-btn" data-lang="en"><span class="lang-flag">🇺🇸</span><span class="lang-text">ENGLISH</span></button>
            <button class="lang-btn" data-lang="qu"><span class="lang-flag">🌄</span><span class="lang-text">KICHWA</span></button>`;
        document.body.appendChild(box);
    }

    // Un solo listener para cualquier botón .lang-btn
    document.addEventListener("click", e => {
        const b = e.target.closest(".lang-btn");
        if (b) applyLang(b.dataset.lang);
    });

    document.addEventListener("DOMContentLoaded", () => {
        buildSwitcher();
        let saved = "es";
        try { saved = localStorage.getItem("site-lang") || "es"; } catch (e) {}
        applyLang(LANGS[saved] !== undefined ? saved : "es");
    });

})();
