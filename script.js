'use strict';
const translations = {
  en: {
    navExpertise:'Expertise',navProjects:'Projects',navAbout:'About',navContact:'Contact',headerCta:"Let's talk",
    heroEyebrow:'INDEPENDENT TECHNOLOGY STUDIO · GERMANY',heroTitle1:'Technology,',heroTitle2:'seen differently.',
    heroIntro:"We develop useful software and intelligent visual technologies — bringing a filmmaker's eye to the digital world.",
    heroPrimary:'Discover our work',heroSecondary:'What we do',heroFootnote:'Software engineering meets visual storytelling.',
    manifestoFirst:'Serious about technology.',manifestoSecond:'Curious about everything.',
    visualLabelTop:'Find the signal.',visualLabelBottom:"Build what's next.",
    expertiseKicker:'OUR EXPERTISE',expertiseTitle:'Built across disciplines.',expertiseIntro:'Three connected fields. One approach: thoughtful technology that solves real problems.',
    card1Title:'App Development',card1Text:'From a first idea to a real product. We design and develop mobile applications with a focus on everyday usefulness.',card1Tag:'iOS · Android · Digital products',
    card2Title:'AI & Computer Vision',card2Text:'We explore intelligent image analysis, real-time event detection and the practical potential of AI-assisted workflows.',card2Tag:'Research · Prototyping · Image analysis',
    card3Title:'Visual Technology',card3Text:'A background in filmmaking informs our work on imaging systems, virtual production and new technical concepts.',card3Tag:'Imaging · Virtual production · Innovation',
    projectsKicker:'SELECTED WORK',projectsTitle:'Ideas in motion.',projectsIntro:'From a published app to patented technology and a playful new experiment.',
    project1Status:'PUBLISHED APP',project1Overline:'SMART CALENDAR & TRAVEL ASSISTANT',project1Text:'A smarter way to manage appointments and departures. The app combines calendar planning with live traffic information and timely reminders.',project1Link:'Visit product website',project1Platform:'Available for iOS and Android',
    project2Status:'PATENTED DEVELOPMENT CONCEPT',project2Title:'Mobile Virtual Production Studio',project2Text:'A mobile recording studio designed to unfold from a standard 20-foot container into approximately 55 m² of controlled production space — bringing virtual backgrounds directly to location.',
    virtualOverline:'VIRTUAL PRODUCTION · ON LOCATION',virtualBenefit1:'Designed for weather- and lighting-independent filming',virtualBenefit2:'Designed for off-grid power via battery, solar or generator',virtualBenefit3:'Integrated digital background and room for real camera depth',virtualDiagramTitle:'FROM CONTAINER TO STUDIO',virtualDiagramAlt:'Patent concept drawings comparing the compact transport container with the deployed mobile recording studio',virtualDiagramCaption:'Technical concept drawing from the patent presentation — not a photograph of a completed studio.',virtualStat1:'ISO transport container',virtualStat2:'Studio area',virtualStat3:'Room depth',virtualStat4:'Digital background monitor',virtualDevelopment:'Patented concept · Development stage · Not yet commercially available',
    project3Status:'IN DEVELOPMENT',project3Tagline:'The real world is part of the game.',project3Text:'An experimental interactive concept exploring the connection between real-world events, live technology and digital play.',project3Note:'An early-stage Coverset Labs project — not yet released.',
    aboutKicker:'ABOUT COVERSET',aboutTitle1:'A different',aboutTitle2:'point of view.',aboutLead:'Curiosity is where new technology begins.',aboutText:'Coverset Studios combines decades of professional cinematography and production experience with the development of digital products and visual technologies. We value clear ideas, careful execution and solutions that make a tangible difference.',aboutSignature:'Independent development company based in Germany.',
    contactKicker:'GET IN TOUCH',contactTitle1:'Have an idea?',contactTitle2:"Let's explore it.",contactText:"For partnerships, technical collaborations and business inquiries, we'd be glad to hear from you.",contactEmailLabel:'BUSINESS EMAIL',contactEmailPlaceholder:'visitors@coverset.eu',footerImprint:'Imprint',footerPrivacy:'Privacy'
  },
  de: {
    navExpertise:'Kompetenzen',navProjects:'Projekte',navAbout:'Über uns',navContact:'Kontakt',headerCta:'Kontakt',
    heroEyebrow:'UNABHÄNGIGES TECHNOLOGIEUNTERNEHMEN · DEUTSCHLAND',heroTitle1:'Technologie,',heroTitle2:'neu gedacht.',
    heroIntro:'Wir entwickeln nützliche Software und intelligente visuelle Technologien – mit dem Blick und der Erfahrung aus der Filmwelt.',
    heroPrimary:'Projekte entdecken',heroSecondary:'Unsere Kompetenzen',heroFootnote:'Softwareentwicklung trifft visuelles Denken.',
    manifestoFirst:'Technologie nehmen wir ernst.',manifestoSecond:'Neugier erst recht.',
    visualLabelTop:'Signale erkennen.',visualLabelBottom:'Neues entwickeln.',
    expertiseKicker:'UNSERE KOMPETENZEN',expertiseTitle:'Disziplinen verbinden.',expertiseIntro:'Drei eng verbundene Bereiche. Ein Anspruch: durchdachte Technik, die echte Probleme löst.',
    card1Title:'App-Entwicklung',card1Text:'Von der ersten Idee bis zum fertigen Produkt. Wir konzipieren und entwickeln mobile Anwendungen mit echtem Alltagsnutzen.',card1Tag:'iOS · Android · Digitale Produkte',
    card2Title:'KI & Computer Vision',card2Text:'Wir erforschen intelligente Bildanalyse, Ereigniserkennung in Echtzeit und den praktischen Einsatz KI-gestützter Verfahren.',card2Tag:'Forschung · Prototypen · Bildanalyse',
    card3Title:'Visuelle Technologien',card3Text:'Unsere Erfahrung aus der Filmproduktion prägt die Entwicklung von Bildsystemen, virtueller Produktion und neuen technischen Konzepten.',card3Tag:'Bildtechnik · Virtual Production · Innovation',
    projectsKicker:'AUSGEWÄHLTE ARBEITEN',projectsTitle:'Ideen werden Wirklichkeit.',projectsIntro:'Von einer veröffentlichten App über patentierte Technik bis zu einem spielerischen Experiment.',
    project1Status:'VERÖFFENTLICHTE APP',project1Overline:'INTELLIGENTER KALENDER & FAHRTASSISTENT',project1Text:'Termine und Abfahrten intelligenter organisieren. Die App verbindet Kalenderplanung mit aktuellen Verkehrsdaten und rechtzeitigen Erinnerungen.',project1Link:'Zur Produktwebsite',project1Platform:'Für iOS und Android erhältlich',
    project2Status:'PATENTIERTES ENTWICKLUNGSKONZEPT',project2Title:'Mobiles Virtual-Production-Studio',project2Text:'Ein mobiles Aufnahmestudio, das sich aus einem standardisierten 20-Fuß-Container auf rund 55 m² kontrollierte Studiofläche entfalten soll – für virtuelle Hintergründe direkt am Drehort.',
    virtualOverline:'VIRTUELLE PRODUKTION · DIREKT AM DREHORT',virtualBenefit1:'Konzipiert für wetter- und lichtunabhängige Filmaufnahmen',virtualBenefit2:'Autarker Betrieb mit Akku, Solar oder Generator vorgesehen',virtualBenefit3:'Integrierter digitaler Hintergrund mit echter Raumtiefe',virtualDiagramTitle:'VOM CONTAINER ZUM STUDIO',virtualDiagramAlt:'Patentzeichnungen mit dem kompakten Transportcontainer und dem entfalteten mobilen Aufnahmestudio',virtualDiagramCaption:'Technische Konzeptzeichnung aus der Patentpräsentation – keine Aufnahme eines fertig gebauten Studios.',virtualStat1:'ISO-Transportcontainer',virtualStat2:'Studiofläche',virtualStat3:'Raumtiefe',virtualStat4:'Digitale Monitorfläche',virtualDevelopment:'Patentiertes Konzept · In Entwicklung · Noch nicht kommerziell verfügbar',
    project3Status:'IN ENTWICKLUNG',project3Tagline:'Die reale Welt wird Teil des Spiels.',project3Text:'Ein experimentelles interaktives Konzept, das reale Ereignisse, Live-Technologie und digitales Spielen miteinander verbindet.',project3Note:'Ein frühes Forschungsprojekt von Coverset Labs – noch nicht veröffentlicht.',
    aboutKicker:'ÜBER COVERSET',aboutTitle1:'Ein anderer',aboutTitle2:'Blickwinkel.',aboutLead:'Neugier ist der Anfang neuer Technologien.',aboutText:'Coverset Studios verbindet jahrzehntelange Erfahrung in Kameraarbeit und Filmproduktion mit der Entwicklung digitaler Produkte und visueller Technologien. Wir setzen auf klare Ideen, sorgfältige Umsetzung und Lösungen mit konkretem Nutzen.',aboutSignature:'Unabhängiges Entwicklungsunternehmen mit Sitz in Deutschland.',
    contactKicker:'KONTAKT',contactTitle1:'Eine Idee?',contactTitle2:'Sprechen wir darüber.',contactText:'Für Kooperationen, technische Zusammenarbeit und geschäftliche Anfragen freuen wir uns über den Austausch.',contactEmailLabel:'GESCHÄFTLICHER KONTAKT',contactEmailPlaceholder:'visitors@coverset.eu',footerImprint:'Impressum',footerPrivacy:'Datenschutz'
  }
};
function setLanguage(lang){
  if(!translations[lang]) lang='en';
  document.documentElement.lang=lang;
  document.querySelectorAll('[data-i18n]').forEach(node=>{const value=translations[lang][node.dataset.i18n];if(value!==undefined)node.textContent=value;});
  document.querySelectorAll('[data-i18n-alt]').forEach(node=>{const value=translations[lang][node.dataset.i18nAlt];if(value!==undefined)node.setAttribute('alt',value);});
  document.querySelectorAll('[data-lang]').forEach(btn=>btn.setAttribute('aria-pressed',String(btn.dataset.lang===lang)));
  document.title=lang==='de'?'Coverset Studios — Software. KI. Neue Ideen.':'Coverset Studios — Software. AI. A little imagination.';
  try {const url=new URL(window.location.href);url.searchParams.set('lang',lang);history.replaceState(null,'',url);} catch(e) { /* Local preview may be sandboxed. */ }
}
const params=new URLSearchParams(window.location.search);
const initialLang=params.get('lang') || (navigator.language.toLowerCase().startsWith('de')?'de':'en');
setLanguage(initialLang);
document.querySelectorAll('[data-lang]').forEach(btn=>btn.addEventListener('click',()=>setLanguage(btn.dataset.lang)));
document.getElementById('year').textContent=String(new Date().getFullYear());
