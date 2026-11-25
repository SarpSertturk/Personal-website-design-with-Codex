const copy = {
  "Thales.docx": ["Thales", "Ancient Worlds", "The Milesian thinker who sought a natural explanation for the world and proposed water as its first principle."],
  "Anaksimandros.docx": ["Anaximander", "Ancient Worlds", "A boundless origin, a changing Earth, and an early attempt to explain life through nature."],
  "Anaksimenes.docx": ["Anaximenes", "Ancient Worlds", "How air, through condensation and rarefaction, might give rise to the diversity of the world."],
  "Empedokles.docx": ["Empedocles", "Ancient Worlds", "Four roots, two forces, and a pluralist account of change in the ancient cosmos."],
  "Herakleistos vs. Parmenides.docx": ["Heraclitus and Parmenides", "Ancient Worlds", "A classic disagreement: is reality best understood through ceaseless change or enduring being?"],
  "Atomcular.docx": ["The Atomists", "Ancient Worlds", "Leucippus and Democritus explain nature through indivisible matter moving in the void."],
  "Pythagoras.docx": ["Pythagoras", "Ancient Worlds", "The meeting of number, cosmic harmony, and mysticism in the Pythagorean tradition."],
  "Protagoras ve Sofizm.docx": ["Protagoras and Sophism", "Ancient Worlds", "Relativism, rhetoric, and the question of whether truth can be separated from human perspective."],
  "Sokrates Üzerine.docx": ["On Socrates", "Ancient Worlds", "How questioning, intellectual humility, and virtue redirected Greek philosophy toward ethics."],
  "Platon-İdealar Kuramı.docx": ["Plato’s Theory of Forms", "Ancient Worlds", "Plato’s account of timeless Forms and the gap between appearances and what is truly real."],
  "Platon-Devlet.docx": ["Plato’s Republic", "Ancient Worlds", "Justice, education, and the ideal city in Plato’s influential political dialogue."],
  "Perikles Dönemi Atinası.docx": ["Athens in the Age of Pericles", "Ancient Worlds", "The civic and cultural conditions that shaped Athenian democracy and classical philosophy."],
  "Aristoteles Metafiziği.docx": ["Aristotle’s Metaphysics", "Ancient Worlds", "Substance, form, universals, and the first principles of being in Aristotle’s account of reality."],
  "Aristotelesin Politikası.docx": ["Aristotle’s Politics", "Political & Social Thought", "Why the city matters to human flourishing, and how Aristotle weighs forms of government."],
  "Helenistik Dönem.docx": ["The Hellenistic Period", "Ancient Worlds", "How the world after Alexander gave rise to practical philosophies for living through uncertainty."],
  "Kinizm ve Kuşkuculuk.docx": ["Cynicism and Skepticism", "Ethics & the Self", "Two challenging traditions ask what we can know and how little we need in order to live well."],
  "Stoacılık.docx": ["Stoicism", "Ethics & the Self", "Virtue, nature, and the enduring Stoic effort to meet circumstance with a steady mind."],
  "Neoplatonizm.docx": ["Neoplatonism", "Ancient Worlds", "Plotinus and the layered structure of reality extending from the One toward the many."],
  "İslam Felsefesi.docx": ["Islamic Philosophy", "Ancient Worlds", "A tradition of inquiry shaped by Greek philosophy, revelation, reason, and debate."],
  "Skolastik Felsefe.docx": ["Scholastic Philosophy", "Ancient Worlds", "How medieval thinkers brought argument, Aristotelian thought, and theological questions together."],
  "Thomas More Ütopya.docx": ["Thomas More’s Utopia", "Political & Social Thought", "A fictional island becomes a way to examine property, equality, work, and the ideal society."],
  "Machiavelli.docx": ["Machiavelli", "Political & Social Thought", "Political power viewed through the pressures of statecraft, necessity, and human conduct."],
  "Modern Dönem Toplum Sözleşmesi.docx": ["The Modern Social Contract", "Political & Social Thought", "How social contract thinkers explain political authority through agreement and mutual obligation."],
  "John Locke & Liberalizm.docx": ["John Locke and Liberalism", "Political & Social Thought", "Natural rights, consent, and the foundations of liberal political thought in Locke."],
  "Marksizm Eleştirisi.docx": ["A Critique of Marxism", "Political & Social Thought", "A critical examination of Marxist ideas and their claims about society, history, and power."],
  "Descartes ve Metodik Şüphe.docx": ["Descartes and Methodical Doubt", "Knowledge & Reason", "How systematic doubt seeks a secure starting point for knowledge in the thinking subject."],
  "David Hume ve İnsanın Anlama Sınırları Üzerine.docx": ["David Hume on the Limits of Understanding", "Knowledge & Reason", "Hume’s empiricism challenges induction, causal inference, and the reach of human reason."],
  "Immanuel Kant & Transandantal İdealizm.docx": ["Immanuel Kant and Transcendental Idealism", "Knowledge & Reason", "Kant asks how the mind’s structures shape experience and make knowledge possible."],
  "Tümevarım vs. Tümdengelim.docx": ["Induction vs. Deduction", "Knowledge & Reason", "Two forms of reasoning, their strengths, and the uncertainty that accompanies inductive conclusions."],
  "Karl Popper Yanlışlanabilirlik İlkesi.docx": ["Karl Popper’s Principle of Falsifiability", "Knowledge & Reason", "Why the possibility of being proven wrong matters to scientific claims and progress."],
  "Hileli Mantık ve Manipülasyon.docx": ["Fallacious Reasoning and Manipulation", "Knowledge & Reason", "Recognizing flawed arguments and rhetorical tactics that can distort judgment."],
  "Etik ve itibar.docx": ["Ethics and Reputation", "Ethics & the Self", "The relationship between ethical conduct, trust, and the reputation built over time."],
  "Suistimal.docx": ["Abuse of Trust", "Ethics & the Self", "Pressure, opportunity, and rationalization as a framework for understanding and preventing abuse."],
  "Friedrich Nietzsche ve Güç İstemi.docx": ["Friedrich Nietzsche and the Will to Power", "Ethics & the Self", "Nietzsche’s account of the forces that shape life, interpretation, and human striving."],
  "Friedrich Nietzsche ve Üst İnsan.docx": ["Friedrich Nietzsche and the Übermensch", "Ethics & the Self", "The idea of self-overcoming and value creation in Nietzsche’s vision of human possibility."],
  "Belirsizlikler Çağında Rasyonel Karar Alma.docx": ["Rational Decision-Making Under Uncertainty", "Digital Life & Judgment", "Weighing alternatives, probabilities, values, and human bias when decisions cannot be certain."],
  "Dijital_Çağda_Odaklanma_Erozyonu.docx": ["The Erosion of Focus in the Digital Age", "Digital Life & Judgment", "How constant streams of information can fragment attention and complicate sustained thought."],
  "Erosion of Critical Thinking in the age of AI.docx": ["The Erosion of Critical Thinking in the Age of AI", "Digital Life & Judgment", "An English-language essay on AI dependence, intellectual effort, and critical thinking."],
};

const themes = ["All essays", "Ancient Worlds", "Knowledge & Reason", "Political & Social Thought", "Ethics & the Self", "Digital Life & Judgment"];
let writings = [];
let essayArtwork = {};
let activeTheme = "All essays";
let activeIndex = 0;
const grid = document.querySelector("#writing-grid");
const search = document.querySelector("#search");
const dialog = document.querySelector("#reader");

function esc(s) { return String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c])); }
function isEnglish(item) { return /Erosion of Critical Thinking in the age of AI\.docx/i.test(item.filename); }
function renderFilters() {
  document.querySelector("#filters").innerHTML = themes.map(t => `<button class="filter-button${t===activeTheme?" active":""}" data-theme="${esc(t)}" aria-pressed="${t===activeTheme}">${esc(t)}</button>`).join("");
  document.querySelectorAll(".filter-button").forEach(b=>b.addEventListener("click",()=>{activeTheme=b.dataset.theme;renderFilters();renderCards()}));
}
function renderCards() {
  const q=search.value.trim().toLocaleLowerCase();
  const visible=writings.map((w,i)=>({...w,index:i})).filter(w=>(activeTheme==="All essays"||w.theme===activeTheme)&&(!q||`${w.title} ${w.summary} ${w.theme} ${w.paragraphs.join(" ")} ${(w.englishParagraphs||[]).join(" ")}`.toLocaleLowerCase().includes(q)));
  document.querySelector("#result-count").textContent=`${visible.length} ${visible.length===1?"essay":"essays"}`;
  document.querySelector("#empty-state").hidden=visible.length!==0;
  grid.innerHTML=visible.map(w=>`<button class="writing-card" data-index="${w.index}" aria-label="Read ${esc(w.title)}"><span class="card-top"><span class="card-category">${esc(w.theme)}</span><span class="card-symbol"><img src="${esc(essayArtwork[w.filename]?.src||"")}" alt="" loading="lazy"></span></span><span class="card-title">${esc(w.title)}</span><span class="card-summary">${esc(w.summary)}</span><span class="card-bottom"><span>${isEnglish(w)?"ENGLISH ORIGINAL":"ENGLISH TRANSLATION"}</span><span class="read-link">Read essay <span>↗</span></span></span></button>`).join("");
  grid.querySelectorAll(".writing-card").forEach(b=>b.addEventListener("click",()=>openEssay(+b.dataset.index)));
}
function renderIndex() {
  document.querySelector("#reader-index").innerHTML=writings.map((w,i)=>`<button class="index-link${i===activeIndex?" current":""}" data-index="${i}">${esc(w.title)}</button>`).join("");
  document.querySelectorAll(".index-link").forEach(b=>b.addEventListener("click",()=>openEssay(+b.dataset.index,false)));
}
function openEssay(index,show=true) {
  activeIndex=(index+writings.length)%writings.length;
  const w=writings[activeIndex];
  w.showingOriginal=false;
  document.querySelector("#reader-title").textContent=w.title;
  document.querySelector("#article-category").textContent=w.theme;
  document.querySelector("#article-summary").textContent=w.summary;
  renderEssayBody(w);
  const link=document.querySelector("#source-download");link.href=w.pdfOnly?`assets/readings/${encodeURIComponent(w.filename)}`:`assets/writings/${encodeURIComponent(w.filename)}`;link.download=w.filename;link.textContent=w.pdfOnly?"Download original PDF ↓":"Download original document ↓";
  const pdfs=document.querySelector("#pdf-downloads");
  const editions=w.pdfs||(w.filename==="Erosion of Critical Thinking in the age of AI.docx"?["122024_Erosion_of_Critical_Thinking_in_the_Age_of_AI_SarpSerttürk.pdf"]:[]);
  const relatedPdfs=editions.filter(f=>!w.pdfOnly||f!==w.filename);
  pdfs.innerHTML=relatedPdfs.map(f=>`<a href="assets/readings/${encodeURIComponent(f)}" download>${w.pdfOnly?"Alternate PDF edition ↓":"PDF edition ↓"}</a>`).join("");
  const art=document.querySelector("#article-art");
  const artwork=essayArtwork[w.filename];
  art.classList.toggle("has-artwork",Boolean(artwork));
  art.innerHTML=artwork?`<img class="essay-artwork" src="${esc(artwork.src)}" alt="${esc(artwork.alt)}">`:"";
  renderIndex();
  document.querySelector("#previous-article").onclick=()=>openEssay(activeIndex-1,false);
  document.querySelector("#next-article").onclick=()=>openEssay(activeIndex+1,false);
  if(show&&!dialog.open)dialog.showModal();
  dialog.scrollTop=0;
  history.replaceState(null,"",`#essay-${activeIndex+1}`);
}
function renderEssayBody(w) {
  const toggle=document.querySelector("#language-toggle");
  const language=document.querySelector("#article-language");
  toggle.hidden=isEnglish(w);
  if(isEnglish(w))language.textContent="ENGLISH ORIGINAL";
  else if(w.showingOriginal)language.textContent=w.pdfOnly?"TURKISH ORIGINAL · PDF":"TURKISH ORIGINAL";
  else language.textContent="ENGLISH TRANSLATION";
  toggle.textContent=w.showingOriginal?"Read English translation":w.pdfOnly?"View original PDF page":"View Turkish original";
  if(w.pdfOnly&&w.showingOriginal){
    document.querySelector("#article-body").innerHTML=`<p>The original page is shown below. Select it to open a larger, zoomable view.</p><a class="pdf-page-link" href="assets/readings/kant-systems-page.png" target="_blank" rel="noopener"><img class="pdf-page" src="assets/readings/kant-systems-page.png" alt="Original Turkish page of Immanuel Kant and Systems Thinking"></a>`;
  } else {
    const paragraphs=w.showingOriginal?w.paragraphs:w.englishParagraphs;
    document.querySelector("#article-body").innerHTML=paragraphs.map(p=>`<p>${esc(p)}</p>`).join("");
  }
}
document.querySelector("#language-toggle").addEventListener("click",()=>{const w=writings[activeIndex];w.showingOriginal=!w.showingOriginal;renderEssayBody(w)});
document.querySelector(".close-reader").addEventListener("click",()=>dialog.close());
dialog.addEventListener("click",e=>{if(e.target===dialog)dialog.close()});
dialog.addEventListener("close",()=>{if(location.hash.startsWith("#essay-"))history.replaceState(null,"",location.pathname+location.search)});
document.querySelector("#clear-filters").addEventListener("click",()=>{activeTheme="All essays";search.value="";renderFilters();renderCards()});
search.addEventListener("input",renderCards);
document.addEventListener("keydown",e=>{if(e.key==="/"&&!dialog.open&&!/input|textarea/i.test(document.activeElement.tagName)){e.preventDefault();search.focus()}});
Promise.all([fetch("writings.json"),fetch("translations.json"),fetch("assets/essay-artwork.json")]).then(async([wr,tr,ar])=>{if(!wr.ok||!tr.ok||!ar.ok)throw Error("Could not load essays and artwork");return [await wr.json(),await tr.json(),await ar.json()]}).then(([data,translations,artwork])=>{
  essayArtwork=artwork;
  writings=data.filter(w=>copy[w.filename]).map(w=>({filename:w.filename,title:copy[w.filename][0],theme:copy[w.filename][1],summary:copy[w.filename][2],paragraphs:w.paragraphs,englishParagraphs:translations[w.filename]||w.paragraphs}));
  const kantPdf="Immanuel_Kant & Sistem Düşüncesi_Sarp_Serttürk.pdf";
  writings.push({filename:kantPdf,title:"Immanuel Kant and Systems Thinking",theme:"Knowledge & Reason",summary:"Kant’s account of how experience becomes an ordered whole, and why systems thinking begins with the relations between its parts.",paragraphs:[],englishParagraphs:translations[kantPdf],pdfOnly:true,pdfs:[kantPdf,"Immanuel_Kant_Sistem_Düşüncesi_Sarp_Serttürk.pdf"]});
  renderFilters();renderCards();
  const match=location.hash.match(/^#essay-(\d+)$/);if(match&&+match[1]<=writings.length)openEssay(+match[1]-1);
}).catch(()=>{document.querySelector("#result-count").textContent="Essays could not be loaded";grid.innerHTML="<p>Please refresh to try again.</p>"});
