const c=PORTAFOLIO;
const set=(id,value)=>{document.getElementById(id).textContent=value};
set('brandName',c.nombre.split(' ')[0]+' | Dev');set('fullName',c.nombre);set('infoName',c.nombre);set('footerName',c.nombre);set('location',c.ubicacion);set('studies',c.estudios);set('school',c.institucion);set('year',new Date().getFullYear());
document.getElementById('photo').src=c.fotografia;
const email=document.getElementById('emailLink'),github=document.getElementById('githubLink');
if(c.correo){email.href='mailto:'+c.correo;set('contactEmail',c.correo)}else{email.textContent='Correo pendiente';email.removeAttribute('href');set('contactEmail','Agrega tu correo electrónico en config.js')}
if(c.github){github.href=c.github}else{github.href='#contacto';github.textContent='GitHub pendiente'}
let complete=true;c.proyectos.forEach((url,i)=>{const a=document.getElementById('project'+(i+1));if(url&&/^https:\/\//.test(url)){a.href=url;a.target='_blank';a.rel='noopener noreferrer'}else{a.textContent='Enlace por agregar ↗';a.classList.add('missing');a.removeAttribute('href');complete=false}});
if(complete)document.getElementById('linksNotice').style.display='none';
const btn=document.querySelector('.menu');btn.addEventListener('click',()=>{const nav=document.querySelector('.nav-links');nav.classList.toggle('open');btn.setAttribute('aria-expanded',nav.classList.contains('open')?'true':'false')});document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>{document.querySelector('.nav-links').classList.remove('open');btn.setAttribute('aria-expanded','false')}));
