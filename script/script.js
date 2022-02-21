const chevronLeft=document.querySelector('.chevronLeft');
const chevronRight=document.querySelector('.chevronRight');
const imgBlock=document.querySelector('.imgBlock');
chevronLeft.addEventListener('click',()=>{
  const copy=imgBlock.firstElementChild.cloneNode(true);
  imgBlock.append(copy);
  imgBlock.firstElementChild.remove();
});
chevronRight.addEventListener('click',()=>{
    const copy1=imgBlock.lastElementChild.cloneNode(true);
     imgBlock.prepend(copy1);
     imgBlock.lastElementChild.remove();
    });




// 1. Вешаем событие на родительский элемент, который есть всегда (не динамический)
imgBlock.addEventListener('click',(e)=>{
  const elem = e.target; // 2. Получаем элемент, по которому мы действительно кликаем
  // console.log(elem); // по желанию смотрим на него. В нашем случае При клике по картинке в константе elem  будет записана именно та картинка, по которой кликнули
  if(elem.tagName == 'IMG'){ // 3. Проверяем, что кликнули именно по изображению. Можно проверить по названию тега или по классу (тогда через classList.contains)
    e.preventDefault();
    const bg=document.createElement('div');
    bg.classList.add('bg-dark');
    document.body.prepend(bg);
    const big=document.createElement('div');
    big.classList.add('big');
    bg.prepend(big);
    big.innerHTML=`<a href="#test" class="close-modal">X</a>
    <img src="" alt="Push image" width="300" height="400">`;
    big.lastElementChild.setAttribute('src', elem.parentElement.getAttribute('href')); // и так как elem - картинка, а мне нужен href родителя, то я от картинки обращаюсь к родительской ссылке и получаю атрибут
    const closeModal=big.querySelector('.close-modal');
    closeModal.addEventListener('click',()=>{
      bg.remove();
      big.remove();
    });
  }
    
});


 
