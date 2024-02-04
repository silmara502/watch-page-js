
function initTabNav(){
const tabMenu = document.querySelectorAll('.js-tabmenu li');
const tabContent = document.querySelectorAll('.js-tabcontent section');

if(tabMenu.length && tabContent.length){
function activeTab(index){

     tabContent.forEach((section) => {
        section.classList.remove('ativo');
    })

    tabContent[index].classList.add('ativo');

   
}
tabMenu.forEach((itemMenu, index) =>{
    itemMenu.addEventListener('click', function(){
        activeTab(index);
    })
})}
}
initTabNav();
function initAnimacaoScroll(){
    const sections = document.querySelectorAll('.js-scroll');
    
    if(sections.length){
    const windowMetade = window.innerHeight * 0.6;
    function animaScroll(){
       sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
           const isSectionVisible = (sectionTop - windowMetade) < 0;;
            if (isSectionVisible){
               section.classList.add('ativo');
            }else{
                section.classList.remove('ativo');
            }
       })
    }
    animaScroll();
    
    window.addEventListener('scroll', animaScroll);
    }}
    initAnimacaoScroll();