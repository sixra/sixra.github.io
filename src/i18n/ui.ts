export const languages = {
  'sr-latn': 'Srpski (latinica)',
  sr: 'Српски (ћирилица)',
  en: 'English',
} as const;

export const defaultLang = 'en';

export const ui = {
  'sr-latn': {
    'nav.home': 'Početna',
    'nav.about': 'O meni',
    'nav.contact': 'Kontakt',
    'nav.skipToContent': 'Pređi na sadržaj',

    'home.title': 'Ratko Simidzija',
    'home.headline': 'JavaScript programer',
    'home.bio.paragraph1':
      'Pre pet godina promenio sam karijeru iz menadžmenta u veb razvoj, odluka koja se pokazala kao jedna od mojih najboljih. Svaki dan donosi nove programerske izazove koje treba rešiti, što mi pruža veliko zadovoljstvo.',
    'home.bio.paragraph2':
      'Trenutno radim kao JavaScript programer u ePages-u, gde primarno koristim React, Remix i TypeScript. Moje iskustvo obuhvata Angular, Svelte, Redux, Node.js i testiranje sa Jest, Cypress i Playwright, kao i build alate poput Webpack i Gulp. U slobodno vreme uživam u izradi projekata sa Astro-om i produbljivanju znanja o veb pristupačnosti - uvek željan da učim i napredujem kao programer.',
    'home.cta.primary': 'Pogledaj moj rad',
    'home.cta.secondary': 'O meni',
    'home.about.title': 'O meni',

    'skills.title': 'Tehnologije i veštine',
    'skills.react.title': 'React i Remix',
    'skills.react.description': 'Razvoj modernih veb aplikacija sa React 19, Remix i Redux',
    'skills.typescript.title': 'TypeScript',
    'skills.typescript.description':
      'Razvoj sa sigurnošću tipova u strogom režimu i naprednim obrascima',
    'skills.testing.title': 'Testiranje',
    'skills.testing.description': 'Sveobuhvatno testiranje sa Jest, Cypress i Playwright',
    'skills.angular.title': 'Angular',
    'skills.angular.description': 'Razvoj aplikacija za preduzeća sa Angular i TypeScript',
    'skills.astro.title': 'Astro',
    'skills.astro.description': 'Razvoj brzih, sadržajno orijentisanih sajtova sa Astro',
    'skills.accessibility.title': 'Pristupačnost',
    'skills.accessibility.description': 'Kreiranje inkluzivnih veb iskustava sa WCAG standardima',

    'work.title': 'Radno iskustvo',
    'work.experience.epages.role': 'JavaScript programer',
    'work.experience.epages.period': 'Jan 2024 - Danas',
    'work.experience.epages.bullet1':
      'Razvoj funkcionalnosti za prodavnice i vizuelni editor korišćenjem React 19, Remix, Redux i TypeScript na storefront i admin platformama',
    'work.experience.epages.bullet2':
      'Izgradnja i održavanje Commerce Cockpit-a, admin platforme sa preko 50 pogleda za upravljanje proizvodima, porudžbinama i korisnicima',
    'work.experience.epages.bullet3':
      'Pisanje jediničnih testova sa Jest i E2E testova sa Cypress i Playwright za osiguranje kvaliteta koda na obe platforme',
    'work.experience.epages.bullet4':
      'Rad u monorepo arhitekturi sa upravljanjem više međusobno povezanih paketa i deljenih biblioteka komponenata',
    'work.experience.epages.bullet5':
      'Saradnja sa dizajn i backend timovima na isporuci funkcionalnosti u dvonedeljnim sprintovima',
    'work.experience.fxpro.role': 'Frontend programer',
    'work.experience.fxpro.period': 'Feb 2022 - Okt 2023',
    'work.experience.fxpro.bullet1':
      'Rad na glavnoj FxPro trading platformi korišćenjem Angular 11, TypeScript i Svelte za interaktivne komponente i funkcionalnosti',
    'work.experience.fxpro.bullet2':
      'Kreiranje landing stranica i marketing mikro-sajtova sa Gulp build workflows, sa responzivnim dizajnom i animacijama',
    'work.experience.fxpro.bullet3':
      'Izgradnja email šablona korišćenjem EJS za višejezične kampanje sa podrškom za više jezika i regulatorne zahteve',
    'work.experience.fxpro.bullet4':
      'Razvoj finansijskih kalkulatora i interaktivnih trading alata integrisanih sa Highcharts za vizualizaciju podataka',
    'work.experience.fxpro.bullet5':
      'Rad na bankarskim platformama (BankPro, BnkPro) korišćenjem Angular 9 i Bootstrap za korisnički interfejs',

    'education.title': 'Obrazovanje',
    'education.dci.degree': 'Full Stack Web Developer',
    'education.dci.period': 'Nov 2020 - Dec 2021',
    'education.dci.bullet1': 'HTML, CSS i responzivni veb dizajn',
    'education.dci.bullet2': 'Moderni JavaScript razvoj sa React, Express.js i Node.js',
    'education.dci.bullet3': 'Git kontrola verzija i GitHub timski radni tok',
    'education.dci.bullet4': 'Napredni razvoj baza podataka sa MongoDB i Mongoose',
    'education.mbs.degree': 'Bachelor of Business Administration',
    'education.mbs.period': '2012 - 2016',
    'education.mbs.bullet1': 'Strategijski menadžment, projektni menadžment i dizajn organizacije',
    'education.mbs.bullet2':
      'Finansijski menadžment, korporativne finansije i menadžersko računovodstvo',
    'education.mbs.bullet3': 'Menadžment ljudskih resursa i organizaciono ponašanje',
    'education.mbs.bullet4': 'Digitalno preduzetništvo i savremene poslovne prakse',

    'about.title': 'O meni',
    'about.intro.paragraph1':
      'Zdravo! Ja sam Ratko Simidzija, JavaScript programer koji trenutno radi u ePages-u u Nemačkoj. Provodim dane radeći na ecommerce platformama sa React, Remix i TypeScript.',
    'about.intro.paragraph2':
      'Pre prelaska na veb razvoj, radio sam u Business Management-u nekoliko godina. Iako je to bilo interesantno, nešto je nedostajalo. 2020. godine prebacio sam se na programiranje, i ispalo je da je to bila jedna od mojih najboljih odluka. Postoji nešto duboko zadovoljavajuće u rešavanju problema kroz kod i gledanju kako funkcionalnosti oživljavaju.',
    'about.currentWork.title': 'Na čemu trenutno radim',
    'about.currentWork.paragraph1':
      'U ePages-u, radim na dve glavne platforme: prodavnice za korisnike i Commerce Cockpit, admin sistem za trgovce. Stack je React 19, Remix, Redux i TypeScript, sve u monorepo arhitekturi. Pišem jedinične testove sa Jest i E2E testove sa Cypress i Playwright da bi stvari bile pouzdane.',
    'about.currentWork.paragraph2':
      'Commerce Cockpit je sveobuhvatna admin platforma sa preko 50 pogleda za upravljanje proizvodima, porudžbinama, korisnicima i još mnogo toga. Rad u monorepo-u sa više međusobno povezanih paketa znači obratiti pažnju na to kako promene utiču na ceo sistem.',
    'about.experience.title': 'Pozadina',
    'about.experience.paragraph1':
      'Pre ePages-a, radio sam kao Frontend programer u FxPro, fintech kompaniji, od 2022. do 2023. Fokus je bio na trading platformama i finansijskim alatima izgrađenim sa Angular i Svelte. Kreirao sam landing stranice, marketing mikro-sajtove, email šablone za višejezične kampanje i interaktivne kalkulatore integrisane sa Highcharts.',
    'about.experience.paragraph2':
      'Moja formalna obuka dolazi iz DCI Digital Career Institute u Hamburgu, gde sam završio Full Stack Web Developer program 2021. Pre toga, stekao sam Bachelor of Business Administration sa MBS Business School, što mi je dalo osnovu u razumevanju kako preduzeća funkcionišu—koristan kontekst prilikom izgradnje softvera za poslovne korisnike.',
    'about.skills.title': 'Veštine i tehnologije',
    'about.skills.paragraph1':
      'Svakodnevno, najviše radim sa React, TypeScript i Remix. Takođe sam proveo dosta vremena sa Angular, Svelte, Redux i Node.js. Testiranje je veliki deo onoga što radim—Jest za jedinične testove, Cypress i Playwright za E2E testiranje.',
    'about.skills.paragraph2':
      'Build alati kao što su Webpack i Gulp, kontrola verzija sa Git i Web Accessibility standardi su svi deo alata. Van posla, uživam u eksperimentisanju sa Astro (ovaj sajt je izgrađen sa njim) i produbljivanju u najbolje prakse pristupačnosti.',
    'about.interests.title': 'Trenutni fokus',
    'about.interests.item1': 'React 19 i moderni React obrasci',
    'about.interests.item2': 'Remix za full-stack TypeScript aplikacije',
    'about.interests.item3': 'E-commerce arhitektura i skalabilnost',
    'about.interests.item4': 'Web Accessibility (WCAG standardi)',
    'about.interests.item5': 'E2E testiranje strategije sa Playwright',
    'about.contact.title': 'Javite se',
    'about.contact.paragraph':
      'Ako želite da se povežemo o veb razvoju, React, TypeScript ili bilo čemu vezanom za izradu veb aplikacija, slobodno me kontaktirajte. Najaktivniji sam na GitHub i LinkedIn.',
    'about.contact.email': 'Email',
    'about.footerNote':
      'Ovaj sajt je izgrađen sa Astro, TypeScript i običnim CSS. Postavljen je preko GitHub Pages i služi kao portfolio i mesto za deljenje misli o veb razvoju. Izvorni kod je dostupan na',

    'contact.title': 'Javite se',
    'contact.intro':
      'Ja sam JavaScript programer koji trenutno radi u ePages-u u Nemačkoj. Uvek sam zainteresovan za povezivanje sa drugim programerima, diskusiju o veb razvoju, React, TypeScript ili potencijalne saradnje.',
    'contact.details.title': 'Kontakt informacije',
    'contact.email.title': 'Email',
    'contact.email.note': 'Najbolji način da me kontaktujete. Obično odgovaram u roku od 24 sata.',
    'contact.social.title': 'Društvene mreže',
    'contact.social.note': 'Najaktivniji na GitHub i LinkedIn',
    'contact.availability.title': 'Radni status',
    'contact.availability.paragraph1':
      'Trenutno sam zaposlen puno radno vreme u ePages-u kao JavaScript programer. Iako ne tražim aktivno nove mogućnosti, uvek sam otvoren za interesantne razgovore o veb razvoju, open source doprinosima ili potencijalnim saradnjama.',
    'contact.availability.paragraph2':
      'Slobodno me kontaktirajte ako želite da diskutujemo o React, TypeScript, Astro, e-commerce arhitekturi, veb pristupačnosti ili bilo čemu vezanom za moderni veb razvoj.',
    'contact.responseTime.title': 'Vreme odgovora',
    'contact.responseTime.paragraph':
      'Proveravam email redovno i nastojim da odgovorim u roku od 24 sata. Za hitne stvari, LinkedIn poruke obično dobijaju brže odgovore. Imajte na umu da radim puno radno vreme, tako da odgovori mogu biti odloženi tokom zauzetih nedelja.',

    'notFound.title': '404',
    'notFound.message': 'Ups! Stranica koju tražite ne postoji.',
    'notFound.goHome': 'Idi na početnu',
    'notFound.aboutMe': 'O meni',

    'footer.about.title': 'O meni',
    'footer.about.description':
      'JavaScript programer sa strašću za izgradnjom kvalitetnih veb aplikacija',
    'footer.links.title': 'Linkovi',
    'footer.connect.title': 'Povežite se',
    'footer.rights': 'Sva prava zadržana.',

    'meta.home.title': 'Ratko Simidzija',
    'meta.home.description':
      'JavaScript programer sa 5 godina iskustva u React, TypeScript, Astro i modernom web razvoju. Promenio sam karijeru i volim da rešavam probleme i učim nove tehnologije.',
    'meta.about.title': 'O meni - Ratko Simidzija',
    'meta.about.description': 'Upoznajte se sa mojom pozadinom i iskustvom',
    'meta.contact.title': 'Kontakt - Ratko Simidzija',
    'meta.contact.description': 'Javite se',

    // FAQ Page
    'nav.faq': 'ČPP',
    'meta.faq.title': 'ČPP | Ratko Simidzija - JavaScript programer',
    'meta.faq.description':
      'Često postavljana pitanja o mojim tehničkim veštinama, iskustvu i dostupnosti za rad.',
    'faq.title': 'Često postavljana pitanja',
    'faq.subtitle': 'Sve što treba da znate o mojim veštinama, iskustvu i pristupu veb razvoju.',
    'faq.preview.title': 'Česta pitanja',
    'faq.preview.cta': 'Pogledaj sva pitanja',

    // Categories
    'faq.category.technical': 'Tehničke veštine',
    'faq.category.experience': 'Iskustvo i pozadina',
    'faq.category.general': 'Saradnja i networking',

    // Technical Skills Q&A
    'faq.react-experience.question': 'Koje tehnologije trenutno koristite?',
    'faq.react-experience.answer':
      'Svakodnevno radim sa React 19, Remix i TypeScript u ePages. Za testiranje koristim Jest za jedinične testove i Cypress i Playwright za end-to-end testiranje. Pre ePages, radio sam sa Angular i Svelte u FxPro, i imam iskustva sa Node.js. Za side projekte u slobodno vreme, stvarno uživam u građenju sa Astro.',
    'faq.typescript.question': 'Kako pristupate arhitekturi komponenti?',
    'faq.typescript.answer':
      'Verujem da kod treba da bude organizovan i lako održiv. Volim male, fokusirane komponente koje rade jednu stvar dobro. Kompozicija umesto kompleksnosti. Gradim veće funkcionalnosti od manjih delova koje mogu da koristim više puta. Radio sam u monorepo sa deljenim bibliotekama komponenti u ePages, tako da znam koliko je važno držati komponente čiste i dobro strukturirane. To čini kod lakšim za navigaciju i štedi vreme kada treba napraviti izmene.',
    'faq.testing.question': 'Koje testne frameworke koristite?',
    'faq.testing.answer':
      'Koristim Jest i React Testing Library za jedinične i integracione testove, i Cypress i Playwright za E2E testiranje. U ePages pišem testove i za storefront i za Commerce Cockpit admin sistem. Veliki je deo posla održati stvari pouzdanim, posebno u monorepo gde promene mogu uticati na više paketa. Dobri testovi štede vreme dugoročno.',

    // Experience & Background Q&A
    'faq.remote-work.question': 'Zašto ste prešli iz poslovnog menadžmenta u programiranje?',
    'faq.remote-work.answer':
      'Želeo sam da gradim stvari i rešavam konkretne probleme. 2020. godine upisao sam DCI u Hamburgu i napravio prelazak. Iskreno, bila je to jedna od najboljih odluka koje sam doneo. Postoji nešto stvarno zadovoljavajuće u rešavanju problema kroz kod i gledanju kako funkcionalnosti oživljavaju.',
    'faq.availability.question': 'Da li ste otvoreni za nove prilike?',
    'faq.availability.answer':
      'Trenutno sam zaposlen puno radno vreme u ePages i ne tražim aktivno novi posao. Ipak, uvek sam raspoložen za interesantne razgovore o web razvoju, potencijalnim saradnjama, ili prilikama koje se poklapaju sa mojim interesovanjima. Ako želite da se povežemo, slobodno me kontaktirajte.',
    'faq.project-examples.question': 'Kako vam poslovna pozadina pomaže kao programeru?',
    'faq.project-examples.answer':
      'To što sam studirao business management pomaže mi da razumem kako kompanije zapravo funkcionišu, što je korisno kad gradim softver za poslovne korisnike. Mogu bolje razumeti šta zainteresovane strane trebaju, videti kako funkcionalnosti se uklapaju u veće poslovne ciljeve, i ceniti zašto određene tehničke odluke imaju značaj van samog koda.',

    // Collaboration & Networking Q&A
    'faq.location.question': 'Gde ste bazirani i da li radite na daljinu?',
    'faq.location.answer':
      'Baziran sam u Limasolu, Kipar, i radim remote za ePages, što je nemačka kompanija. Komforan sam sa radom sa distribuiranim timovima kroz različite vremenske zone. To radim svakodnevno. Ovakav način rada mi odgovara, i nemam problema sa tehničkom komunikacijom ili saradnjom kada svi rade remote.',
    'faq.languages.question': 'Koje jezike govorite?',
    'faq.languages.answer':
      'Govorim engleski tečno (C1/C2 nivo) i srpski mi je maternji jezik. Radim svakodnevno sa distribuiranim timovima kroz različite vremenske zone, tako da nemam problema sa tehničkom komunikacijom ili dokumentacijom na engleskom.',
    'faq.learning.question': 'Šta trenutno učite ili istražujete?',
    'faq.learning.answer':
      'Trenutno se bavim React 19 i Server Components, istražujem više šta Remix može, i proučavam web pristupačnost (WCAG standarde). Van posla, stvarno uživam da radim sa Astro. Ovaj sajt je zapravo izgrađen sa njim. Uvek ima nešto novo za naučiti, što čini stvari zanimljivim.',
  },
  sr: {
    'nav.home': 'Почетна',
    'nav.about': 'О мени',
    'nav.contact': 'Контакт',
    'nav.skipToContent': 'Пређи на садржај',

    'home.title': 'Ратко Симиџија',
    'home.headline': 'JavaScript програмер',
    'home.bio.paragraph1':
      'Пре пет година променио сам каријеру из менаџмента у веб развој, одлука која се показала као једна од мојих најбољих. Сваки дан доноси нове програмерске изазове које треба решити, што ми пружа велико задовољство.',
    'home.bio.paragraph2':
      'Тренутно радим као JavaScript програмер у ePages-у, где примарно користим React, Remix и TypeScript. Моје искуство обухвата Angular, Svelte, Redux, Node.js и тестирање са Jest, Cypress и Playwright, као и build алате попут Webpack и Gulp. У слободно време уживам у изради пројеката са Astro-ом и продубљивању знања о веб приступачности - увек жељан да учим и напредујем као програмер.',
    'home.cta.primary': 'Погледај мој рад',
    'home.cta.secondary': 'О мени',
    'home.about.title': 'О мени',

    'skills.title': 'Технологије и вештине',
    'skills.react.title': 'React и Remix',
    'skills.react.description': 'Развој модерних веб апликација са React 19, Remix и Redux',
    'skills.typescript.title': 'TypeScript',
    'skills.typescript.description':
      'Развој са сигурношћу типова у строгом режиму и напредним обрасцима',
    'skills.testing.title': 'Тестирање',
    'skills.testing.description': 'Свеобухватно тестирање са Jest, Cypress и Playwright',
    'skills.angular.title': 'Angular',
    'skills.angular.description': 'Развој апликација за предузећа са Angular и TypeScript',
    'skills.astro.title': 'Astro',
    'skills.astro.description': 'Развој брзих, садржајно оријентисаних сајтова са Astro',
    'skills.accessibility.title': 'Приступачност',
    'skills.accessibility.description': 'Креирање инклузивних веб искустава са WCAG стандардима',

    'work.title': 'Радно искуство',
    'work.experience.epages.role': 'JavaScript програмер',
    'work.experience.epages.period': 'Јан 2024 - Данас',
    'work.experience.epages.bullet1':
      'Развој функционалности за продавнице и визуелни editor коришћењем React 19, Remix, Redux и TypeScript на storefront и админ платформама',
    'work.experience.epages.bullet2':
      'Изградња и одржавање Commerce Cockpit-а, админ платформе са преко 50 погледа за управљање производима, поруџбинама и корисницима',
    'work.experience.epages.bullet3':
      'Писање јединичних тестова са Jest и E2E тестова са Cypress и Playwright за осигурање квалитета кода на обе платформе',
    'work.experience.epages.bullet4':
      'Рад у monorepo архитектури са управљањем више међусобно повезаних пакета и дељених библиотека компонената',
    'work.experience.epages.bullet5':
      'Сарадња са дизајн и backend тимовима на испоруци функционалности у двонедељним спринтовима',
    'work.experience.fxpro.role': 'Frontend програмер',
    'work.experience.fxpro.period': 'Феб 2022 - Окт 2023',
    'work.experience.fxpro.bullet1':
      'Рад на главној FxPro trading платформи коришћењем Angular 11, TypeScript и Svelte за интерактивне компоненте и функционалности',
    'work.experience.fxpro.bullet2':
      'Креирање landing страница и marketing микро-сајтова са Gulp build workflows, са responzivnim дизајном и анимацијама',
    'work.experience.fxpro.bullet3':
      'Изградња email шаблона коришћењем EJS за вишејезичне кампање са подршком за више језика и регулаторне захтеве',
    'work.experience.fxpro.bullet4':
      'Развој финансијских калкулатора и интерактивних trading алата интегрисаних са Highcharts за визуализацију података',
    'work.experience.fxpro.bullet5':
      'Рад на банкарским платформама (BankPro, BnkPro) коришћењем Angular 9 и Bootstrap за кориснички интерфејс',

    'education.title': 'Образовање',
    'education.dci.degree': 'Full Stack Web Developer',
    'education.dci.period': 'Нов 2020 - Дец 2021',
    'education.dci.bullet1': 'HTML, CSS и responzivni веб дизајн',
    'education.dci.bullet2': 'Модерни JavaScript развој са React, Express.js и Node.js',
    'education.dci.bullet3': 'Git контрола верзија и GitHub тимски радни ток',
    'education.dci.bullet4': 'Напредни развој база података са MongoDB и Mongoose',
    'education.mbs.degree': 'Bachelor of Business Administration',
    'education.mbs.period': '2012 - 2016',
    'education.mbs.bullet1': 'Стратегијски менаџмент, пројектни менаџмент и дизајн организације',
    'education.mbs.bullet2':
      'Финансијски менаџмент, корпоративне финансије и менаџерско рачуноводство',
    'education.mbs.bullet3': 'Менаџмент људских ресурса и организационо понашање',
    'education.mbs.bullet4': 'Дигитално предузетништво и савремене пословне праксе',

    'about.title': 'О мени',
    'about.intro.paragraph1':
      'Здраво! Ја сам Ратко Симиџија, JavaScript програмер који тренутно ради у ePages-у у Немачкој. Проводим дане радећи на ecommerce платформама са React, Remix и TypeScript.',
    'about.intro.paragraph2':
      'Пре преласка на веб развој, радио сам у Business Management-у неколико година. Иако је то било интересантно, нешто је недостајало. 2020. године пребацио сам се на програмирање, и испало је да је то била једна од мојих најбољих одлука. Постоји нешто дубоко задовољавајуће у решавању проблема кроз код и гледању како функционалности оживљавају.',
    'about.currentWork.title': 'На чему тренутно радим',
    'about.currentWork.paragraph1':
      'У ePages-у, радим на две главне платформе: продавнице за кориснике и Commerce Cockpit, админ систем за трговце. Stack је React 19, Remix, Redux и TypeScript, све у monorepo архитектури. Пишем јединичне тестове са Jest и E2E тестове са Cypress и Playwright да би ствари биле поуздане.',
    'about.currentWork.paragraph2':
      'Commerce Cockpit је свеобухватна админ платформа са преко 50 погледа за управљање производима, поруџбинама, корисницима и још много тога. Рад у monorepo-у са више међусобно повезаних пакета значи обратити пажњу на то како промене утичу на цео систем.',
    'about.experience.title': 'Позадина',
    'about.experience.paragraph1':
      'Пре ePages-а, радио сам као Frontend програмер у FxPro, fintech компанији, од 2022. до 2023. Фокус је био на trading платформама и финансијским алатима изграђеним са Angular и Svelte. Креирао сам landing странице, marketing микро-сајтове, email шаблоне за вишејезичне кампање и интерактивне калкулаторе интегрисане са Highcharts.',
    'about.experience.paragraph2':
      'Моја формална обука долази из DCI Digital Career Institute у Хамбургу, где сам завршио Full Stack Web Developer програм 2021. Пре тога, стекао сам Bachelor of Business Administration са MBS Business School, што ми је дало основу у разумевању како предузећа функционишу—користан контекст приликом изградње софтвера за пословне кориснике.',
    'about.skills.title': 'Вештине и технологије',
    'about.skills.paragraph1':
      'Свакодневно, највише радим са React, TypeScript и Remix. Такође сам провео доста времена са Angular, Svelte, Redux и Node.js. Тестирање је велики део онога што радим—Jest за јединичне тестове, Cypress и Playwright за E2E тестирање.',
    'about.skills.paragraph2':
      'Build алати као што су Webpack и Gulp, контрола верзија са Git и Web Accessibility стандарди су сви део алата. Ван посла, уживам у експериментисању са Astro (овај сајт је изграђен са њим) и продубљивању у најбоље праксе приступачности.',
    'about.interests.title': 'Тренутни фокус',
    'about.interests.item1': 'React 19 и модерни React обрасци',
    'about.interests.item2': 'Remix за full-stack TypeScript апликације',
    'about.interests.item3': 'E-commerce архитектура и скалабилност',
    'about.interests.item4': 'Web Accessibility (WCAG стандарди)',
    'about.interests.item5': 'E2E тестирање стратегије са Playwright',
    'about.contact.title': 'Јавите се',
    'about.contact.paragraph':
      'Ако желите да се повежемо о веб развоју, React, TypeScript или било чему везаном за израду веб апликација, слободно ме контактирајте. Најактивнији сам на GitHub и LinkedIn.',
    'about.contact.email': 'Email',
    'about.footerNote':
      'Овај сајт је изграђен са Astro, TypeScript и обичним CSS. Постављен је преко GitHub Pages и служи као портфолио и место за дељење мисли о веб развоју. Изворни код је доступан на',

    'contact.title': 'Јавите се',
    'contact.intro':
      'Ја сам JavaScript програмер који тренутно ради у ePages-у у Немачкој. Увек сам заинтересован за повезивање са другим програмерима, дискусију о веб развоју, React, TypeScript или потенцијалне сарадње.',
    'contact.details.title': 'Контакт информације',
    'contact.email.title': 'Email',
    'contact.email.note': 'Најбољи начин да ме контактујете. Обично одговарам у року од 24 сата.',
    'contact.social.title': 'Друштвене мреже',
    'contact.social.note': 'Најактивнији на GitHub и LinkedIn',
    'contact.availability.title': 'Радни статус',
    'contact.availability.paragraph1':
      'Тренутно сам запослен пуно радно време у ePages-у као JavaScript програмер. Иако не тражим активно нове могућности, увек сам отворен за интересантне разговоре о веб развоју, open source доприносима или потенцијалним сарадњама.',
    'contact.availability.paragraph2':
      'Слободно ме контактирајте ако желите да дискутујемо о React, TypeScript, Astro, e-commerce архитектури, веб приступачности или било чему везаном за модерни веб развој.',
    'contact.responseTime.title': 'Време одговора',
    'contact.responseTime.paragraph':
      'Проверавам email редовно и настојим да одговорим у року од 24 сата. За хитне ствари, LinkedIn поруке обично добијају брже одговоре. Имајте на уму да радим пуно радно време, тако да одговори могу бити одложени током заузетих недеља.',

    'notFound.title': '404',
    'notFound.message': 'Упс! Страница коју тражите не постоји.',
    'notFound.goHome': 'Иди на почетну',
    'notFound.aboutMe': 'О мени',

    'footer.about.title': 'О мени',
    'footer.about.description':
      'JavaScript програмер са страшћу за изградњом квалитетних веб апликација',
    'footer.links.title': 'Линкови',
    'footer.connect.title': 'Повежите се',
    'footer.rights': 'Сва права задржана.',

    'meta.home.title': 'Ратко Симиџија | JavaScript програмер - React и TypeScript',
    'meta.home.description':
      'JavaScript програмер са 5 година искуства у React, TypeScript, Astro и модерном веб развоју. Променио сам каријеру и волим да решавам проблеме и учим нове технологије.',
    'meta.about.title': 'О мени - Ратко Симиџија',
    'meta.about.description': 'Упознајте се са мојом позадином и искуством',
    'meta.contact.title': 'Контакт - Ратко Симиџија',
    'meta.contact.description': 'Јавите се',

    // FAQ Page
    'nav.faq': 'ЧПП',
    'meta.faq.title': 'ЧПП | Ратко Симиџија - JavaScript програмер',
    'meta.faq.description':
      'Често постављана питања о мојим техничким вештинама, искуству и доступности за рад.',
    'faq.title': 'Често постављана питања',
    'faq.subtitle': 'Све што треба да знате о мојим вештинама, искуству и приступу веб развоју.',
    'faq.preview.title': 'Честа питања',
    'faq.preview.cta': 'Погледај сва питања',

    // Categories
    'faq.category.technical': 'Техничке вештине',
    'faq.category.experience': 'Искуство и позадина',
    'faq.category.general': 'Сарадња и networking',

    // Technical Skills Q&A
    'faq.react-experience.question': 'Које технологије тренутно користите?',
    'faq.react-experience.answer':
      'Свакодневно радим са React 19, Remix и TypeScript у ePages. За тестирање користим Jest за јединичне тестове и Cypress и Playwright за end-to-end тестирање. Пре ePages, радио сам са Angular и Svelte у FxPro, и имам искуства са Node.js. За side пројекте у слободно време, стварно уживам у грађењу са Astro.',
    'faq.typescript.question': 'Како приступате архитектури компоненти?',
    'faq.typescript.answer':
      'Верујем да код треба да буде организован и лако одржив. Волим мале, фокусиране компоненте које раде једну ствар добро. Композиција уместо комплексности. Градим веће функционалности од мањих делова које могу да користим више пута. Радио сам у монорепо са дељеним библиотекама компоненти у ePages, тако да знам колико је важно држати компоненте чисте и добро структуиране. То чини код лакшим за навигацију и штеди време када треба направити измене.',
    'faq.testing.question': 'Које тестне frameworke користите?',
    'faq.testing.answer':
      'Користим Jest и React Testing Library за јединичне и интеграционе тестове, и Cypress и Playwright за E2E тестирање. У ePages пишем тестове и за storefront и за Commerce Cockpit админ систем. Велики је део посла одржати ствари поузданим, посебно у monorepo где промене могу утицати на више пакета. Добри тестови штеде време дугорочно.',

    // Experience & Background Q&A
    'faq.remote-work.question': 'Зашто сте прешли из пословног менаџмента у програмирање?',
    'faq.remote-work.answer':
      'Желео сам да градим ствари и решавам конкретне проблеме. 2020. године уписао сам DCI у Хамбургу и направио прелазак. Искрено, била је то једна од најбољих одлука које сам донео. Постоји нешто стварно задовољавајуће у решавању проблема кроз код и гледању како функционалности оживљавају.',
    'faq.availability.question': 'Да ли сте отворени за нове прилике?',
    'faq.availability.answer':
      'Тренутно сам запослен пуно радно време у ePages и не тражим активно нови посао. Ипак, увек сам расположен за интересантне разговоре о веб развоју, потенцијалним сарадњама, или приликама које се поклапају са мојим интересовањима. Ако желите да се повежемо, слободно ме контактирајте.',
    'faq.project-examples.question': 'Како вам пословна позадина помаже као програмеру?',
    'faq.project-examples.answer':
      'То што сам студирао business management помаже ми да разумем како компаније заправо функционишу, што је корисно кад градим софтвер за пословне кориснике. Могу боље разумети шта заинтересоване стране требају, видети како функционалности се уклапају у веће пословне циљеве, и ценити зашто одређене техничке одлуке имају значај ван самог кода.',

    // Collaboration & Networking Q&A
    'faq.location.question': 'Где сте базирани и да ли радите на даљину?',
    'faq.location.answer':
      'Базиран сам у Лимасолу, Кипар, и радим remote за ePages, што је немачка компанија. Комфоран сам са радом са дистрибуираним тимовима кроз различите временске зоне. То радим свакодневно. Овакав начин рада ми одговара, и немам проблема са техничком комуникацијом или сарадњом када сви раде remote.',
    'faq.languages.question': 'Које језике говорите?',
    'faq.languages.answer':
      'Говорим енглески течно (C1/C2 ниво) и српски ми је матерњи језик. Радим свакодневно са дистрибуираним тимовима кроз различите временске зоне, тако да немам проблема са техничком комуникацијом или документацијом на енглеском.',
    'faq.learning.question': 'Шта тренутно учите или истражујете?',
    'faq.learning.answer':
      'Тренутно се бавим React 19 и Server Components, истражујем више шта Remix може, и проучавам веб приступачност (WCAG стандарде). Ван посла, стварно уживам да радим са Astro. Овај сајт је заправо изграђен са њим. Увек има нешто ново за научити, што чини ствари занимљивим.',
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.skipToContent': 'Skip to content',

    'home.title': 'Ratko Simidzija',
    'home.headline': 'JavaScript Developer',
    'home.bio.paragraph1':
      'Five years ago, I made the switch from Business Management to Web Development, a decision that proves to be one of my best moves. Each day brings new coding puzzles to solve, which I thoroughly enjoy.',
    'home.bio.paragraph2':
      'Currently working as a JavaScript Developer at ePages, where I primarily use React, Remix, and TypeScript. My experience spans Angular, Svelte, Redux, Node.js, and testing frameworks like Jest, Cypress, and Playwright, along with build tools including Webpack and Gulp. In my free time, I enjoy building projects with Astro and diving deeper into Web Accessibility standards - always eager to learn and grow as a developer.',
    'home.cta.primary': 'View My Work',
    'home.cta.secondary': 'About Me',
    'home.about.title': 'About Me',

    'skills.title': 'Technologies & Skills',
    'skills.react.title': 'React & Remix',
    'skills.react.description': 'Building modern web applications with React 19, Remix, and Redux',
    'skills.typescript.title': 'TypeScript',
    'skills.typescript.description': 'Type-safe development with strict mode and advanced patterns',
    'skills.testing.title': 'Testing',
    'skills.testing.description': 'Comprehensive testing with Jest, Cypress, and Playwright',
    'skills.angular.title': 'Angular',
    'skills.angular.description': 'Building enterprise applications with Angular and TypeScript',
    'skills.astro.title': 'Astro',
    'skills.astro.description': 'Building fast, content-focused sites with Astro',
    'skills.accessibility.title': 'Accessibility',
    'skills.accessibility.description': 'Creating inclusive web experiences with WCAG standards',

    'work.title': 'Work Experience',
    'work.experience.epages.role': 'Javascript Developer',
    'work.experience.epages.period': 'Jan 2024 - Present',
    'work.experience.epages.bullet1':
      'Develop features for customer storefronts and the visual page editor using React 19, Remix, Redux, and TypeScript across storefront and admin platforms',
    'work.experience.epages.bullet2':
      'Build and maintain Commerce Cockpit, a merchant admin platform with 50+ views for managing products, orders, and customers',
    'work.experience.epages.bullet3':
      'Write unit tests with Jest and E2E tests with Cypress and Playwright to ensure code quality across both platforms',
    'work.experience.epages.bullet4':
      'Work within a monorepo architecture managing multiple interconnected packages and shared component libraries',
    'work.experience.epages.bullet5':
      'Work with design and backend teams to deliver features in two-week sprints',
    'work.experience.fxpro.role': 'Frontend Developer',
    'work.experience.fxpro.period': 'Feb 2022 - Oct 2023',
    'work.experience.fxpro.bullet1':
      'Worked on the main FxPro trading platform using Angular 11, TypeScript, and Svelte for interactive components and features',
    'work.experience.fxpro.bullet2':
      'Created landing pages and marketing microsites with Gulp build workflows, featuring responsive designs and animations',
    'work.experience.fxpro.bullet3':
      'Built email templates using EJS for multi-locale campaigns supporting multiple languages and regulatory requirements',
    'work.experience.fxpro.bullet4':
      'Developed financial calculators and interactive trading tools integrated with Highcharts for data visualization',
    'work.experience.fxpro.bullet5':
      'Worked on banking platform applications (BankPro, BnkPro) using Angular 9 and Bootstrap for the user interface',

    'education.title': 'Education',
    'education.dci.degree': 'Full Stack Web Developer',
    'education.dci.period': 'Nov 2020 - Dec 2021',
    'education.dci.bullet1': 'HTML, CSS, and responsive web design',
    'education.dci.bullet2': 'Modern JavaScript development with React, Express.js, and Node.js',
    'education.dci.bullet3': 'Git version control and GitHub team workflow',
    'education.dci.bullet4': 'Advanced database development with MongoDB and Mongoose',
    'education.mbs.degree': 'Bachelor of Business Administration',
    'education.mbs.period': '2012 - 2016',
    'education.mbs.bullet1':
      'Strategic management, project management, and organizational design principles',
    'education.mbs.bullet2': 'Financial management, corporate finance, and managerial accounting',
    'education.mbs.bullet3': 'Human resources management and organizational behavior',
    'education.mbs.bullet4': 'Digital entrepreneurship and modern business practices',

    'about.title': 'About',
    'about.intro.paragraph1':
      "Hey there! I'm Ratko Simidzija, a JavaScript Developer currently working at ePages in Germany. I spend my days working on ecommerce platforms with React, Remix, and TypeScript.",
    'about.intro.paragraph2':
      "Before diving into web development, I worked in Business Management for several years. While it was interesting, something was missing. In 2020, I made the switch to coding, and it turned out to be one of the best decisions I've made. There's something deeply satisfying about solving problems through code and seeing features come to life.",
    'about.currentWork.title': "What I'm Working On",
    'about.currentWork.paragraph1':
      'At ePages, I work on two main platforms: customer storefronts and the Commerce Cockpit, a merchant admin system. The stack is React 19, Remix, Redux, and TypeScript, all within a monorepo architecture. I write unit tests with Jest and E2E tests with Cypress and Playwright to keep things reliable.',
    'about.currentWork.paragraph2':
      'The Commerce Cockpit is a comprehensive admin platform with over 50 views for managing products, orders, customers, and more. Working in a monorepo with multiple interconnected packages means paying close attention to how changes ripple through the system.',
    'about.experience.title': 'Background',
    'about.experience.paragraph1':
      'Before ePages, I worked as a Frontend Developer at FxPro, a fintech company, from 2022 to 2023. The focus there was on trading platforms and financial tools built with Angular and Svelte. I created landing pages, marketing microsites, email templates for multilocale campaigns, and interactive calculators integrated with Highcharts.',
    'about.experience.paragraph2':
      'My formal training came from DCI Digital Career Institute in Hamburg, where I completed a Full Stack Web Developer program in 2021. Before that, I earned a Bachelor of Business Administration from MBS Business School, which gave me a foundation in how businesses work—helpful context when building software for business users.',
    'about.skills.title': 'Skills & Technologies',
    'about.skills.paragraph1':
      "Day-to-day, I work mostly with React, TypeScript, and Remix. I've also spent considerable time with Angular, Svelte, Redux, and Node.js. Testing is a big part of what I do—Jest for unit tests, Cypress and Playwright for E2E testing.",
    'about.skills.paragraph2':
      'Build tools like Webpack and Gulp, version control with Git, and Web Accessibility standards are all part of the toolkit. Outside of work, I enjoy experimenting with Astro (this site is built with it) and diving deeper into accessibility best practices.',
    'about.interests.title': 'Current Focus',
    'about.interests.item1': 'React 19 and modern React patterns',
    'about.interests.item2': 'Remix for full-stack TypeScript applications',
    'about.interests.item3': 'E-commerce architecture and scalability',
    'about.interests.item4': 'Web Accessibility (WCAG standards)',
    'about.interests.item5': 'E2E testing strategies with Playwright',
    'about.contact.title': 'Get in Touch',
    'about.contact.paragraph':
      "If you want to connect about web development, React, TypeScript, or anything related to building for the web, feel free to reach out. I'm most active on GitHub and LinkedIn.",
    'about.contact.email': 'Email',
    'about.footerNote':
      "This site is built with Astro, TypeScript, and plain CSS. It's deployed via GitHub Pages and serves as both a portfolio and a place to share thoughts on web development. The source code is available on",

    'contact.title': 'Get in Touch',
    'contact.intro':
      "I'm a JavaScript Developer currently working at ePages in Germany. I'm always interested in connecting with other developers, discussing web development, React, TypeScript, or potential collaborations.",
    'contact.details.title': 'Contact Information',
    'contact.email.title': 'Email',
    'contact.email.note': 'Best way to reach me. I typically respond within 24 hours.',
    'contact.social.title': 'Social Media',
    'contact.social.note': 'Most active on GitHub and LinkedIn',
    'contact.availability.title': 'Work Status',
    'contact.availability.paragraph1':
      "I'm currently employed full-time at ePages as a JavaScript Developer. While I'm not actively looking for new opportunities, I'm always open to interesting conversations about web development, open source contributions, or potential collaborations.",
    'contact.availability.paragraph2':
      'Feel free to reach out if you want to discuss React, TypeScript, Astro, e-commerce architecture, web accessibility, or anything related to modern web development.',
    'contact.responseTime.title': 'Response Time',
    'contact.responseTime.paragraph':
      'I check email regularly and aim to respond within 24 hours. For urgent matters, LinkedIn messages tend to get faster responses. Please note that I work full-time, so replies may be delayed during busy weeks.',

    'notFound.title': '404',
    'notFound.message': "Oops! The page you're looking for doesn't exist.",
    'notFound.goHome': 'Go Home',
    'notFound.aboutMe': 'About Me',

    'footer.about.title': 'About',
    'footer.about.description':
      'JavaScript developer with a passion for building quality web applications',
    'footer.links.title': 'Links',
    'footer.connect.title': 'Connect',
    'footer.rights': 'All rights reserved.',

    'meta.home.title': 'Ratko Simidzija',
    'meta.home.description':
      'JavaScript Developer with 5 years experience in React, TypeScript, Astro, and modern web development. Career switcher who loves solving problems and learning new technologies.',
    'meta.about.title': 'About - Ratko Simidzija',
    'meta.about.description': 'Learn about my background and experience',
    'meta.contact.title': 'Contact - Ratko Simidzija',
    'meta.contact.description': 'Get in touch',

    // FAQ Page
    'nav.faq': 'FAQ',
    'meta.faq.title': 'FAQ | Ratko Simidzija - JavaScript Developer',
    'meta.faq.description':
      'Frequently asked questions about my technical skills, experience, and work availability.',
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle':
      'Everything you need to know about my skills, experience, and approach to web development.',
    'faq.preview.title': 'Common Questions',
    'faq.preview.cta': 'View all questions',

    // Categories
    'faq.category.technical': 'Technical Skills',
    'faq.category.experience': 'Experience & Background',
    'faq.category.general': 'Collaboration & Networking',

    // Technical Skills Q&A
    'faq.react-experience.question': "What's your current tech stack?",
    'faq.react-experience.answer':
      "Day-to-day, I work with React 19, Remix, and TypeScript at ePages. For testing, I use Jest for unit tests and Cypress and Playwright for end-to-end testing. Before ePages, I spent time with Angular and Svelte at FxPro, and I've done some Node.js work as well. For side projects in my free time, I really enjoy building with Astro.",
    'faq.typescript.question': 'How do you approach component architecture?',
    'faq.typescript.answer':
      "I'm a big believer in keeping things organized and maintainable. I prefer small, focused components that do one thing well. Composition over complexity. Building bigger features from smaller, reusable pieces. I've worked in a monorepo with shared component libraries at ePages, so I've seen how important it is to keep components clean and well structured. It makes the codebase easier to navigate and saves time when you need to make changes.",
    'faq.testing.question': 'What testing frameworks do you use?',
    'faq.testing.answer':
      "I use Jest and React Testing Library for unit and integration tests, and both Cypress and Playwright for E2E testing. At ePages, I write tests for the storefront and the Commerce Cockpit admin system. It's a big part of keeping things reliable, especially in a monorepo where changes can affect multiple packages. Good tests save time in the long run.",

    // Experience & Background Q&A
    'faq.remote-work.question': 'Why did you switch from business management to development?',
    'faq.remote-work.answer':
      "I wanted to build things and solve concrete problems. In 2020, I enrolled at DCI in Hamburg and made the switch. Honestly, it was one of the best decisions I've made. There's something really satisfying about solving problems through code and watching features come to life.",
    'faq.availability.question': 'Are you open to new opportunities?',
    'faq.availability.answer':
      "I'm currently employed full-time at ePages and not actively job searching. That said, I'm always up for interesting conversations about web development, potential collaborations, or opportunities that align with my interests. If you want to connect, feel free to reach out.",
    'faq.project-examples.question': 'How does your business background help you as a developer?',
    'faq.project-examples.answer':
      'Having studied business management helps me understand how companies actually work, which is useful when building software for business users. I can better understand what stakeholders need, see how features fit into bigger business goals, and appreciate why certain technical decisions matter beyond just the code.',

    // Collaboration & Networking Q&A
    'faq.location.question': 'Where are you based and do you work remotely?',
    'faq.location.answer':
      "I'm based in Limassol, Cyprus, and work remotely for ePages, which is a German company. I'm comfortable working with distributed teams across different time zones—it's something I do daily. The setup works well for me, and I've got no issues with technical communication or collaboration when everyone's remote.",
    'faq.languages.question': 'What languages do you speak?',
    'faq.languages.answer':
      'I speak English fluently (C1/C2 level) and Serbian natively. I work daily with distributed teams across different time zones, so no issues with technical communication or documentation in English.',
    'faq.learning.question': 'What are you currently learning or exploring?',
    'faq.learning.answer':
      "Right now I'm diving into React 19 patterns and Server Components, exploring more of what Remix can do, and studying web accessibility (WCAG standards). Outside of work, I really enjoy building with Astro. This site is actually built with it. There's always something new to learn, which keeps things interesting.",
  },
} as const;

export function getLangFromUrl(url: URL): keyof typeof ui {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(
  lang: keyof typeof ui
): (key: keyof (typeof ui)[typeof defaultLang]) => string {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return ui[lang][key] || ui[defaultLang][key];
  };
}
