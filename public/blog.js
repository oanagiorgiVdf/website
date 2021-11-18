let list = ['Travel updates', 'Reviews', 'About', 'Contact'];
let articles = [
    {
        id: 'first__article',
        title: 'The complete guide to explore Transilvania, with your bike',
        subtitle: ['Destination Europe', '.', 'Added by', 'Johnnathan Mercadina', '.', 'July 01, 2018'],
        image: ['img/bike.jpg', 'Bike']
    },
    {
        id: 'second__article',
        title: 'Bucegi: Places you must visit before you die',
        subtitle: ['Must Visit', '.', 'Added by', 'Johnnathan Mercadina', '.', 'June 30, 2018'],
        image: ['img/bucegi.jpg', 'Bucegi']
    },
    {
        id: 'third__article',
        title: 'Romania: The land of dreams',
        subtitle: ['Village', '.', 'Added by', 'Johnnathan Mercadina', '.', 'June 17, 2018'],
        image: ['img/village.jpg', 'Village']
    },
    {
        id: 'fourth__article',
        title: 'Sarmale - stuffed cabbage rolls. Good or bad?',
        subtitle: ['Food', '.', 'Added by', 'Johnnathan Mercadina', '.', 'December 29, 2017'],
        image: ['img/sarmale.jpg', 'Sarmale']
    }
];


let stArticleContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est totam laboriosam debitis magnam voluptatum, incidunt neque. Totam ullam non quis, repellendus molestiae in itaque natus labore quos ipsumalias, veritatis nihil! Quisquam labore, sequi minima expedita necessitatibus omnis error ametrecusandae atque commodi quia! Vel laborum recusandae voluptatum rerum id harum, fuga beatae ut, consequuntur repellendus ipsum temporibus libero itaque.'
let ndArticleContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quod tempore quaerat deserunt. Voluptatibus mollitia aut dolor ipsa delectus a autem ut quibusdam incidunt? Nisi facilis voluptatem omnis debitis laborum cupiditate pariatur inventore molestiae eveniet!';
let buttons = ['Edit', 'Delete'];
const mainContainer = document.getElementById('main__container');


function createNavigation(list) {

    const navBar = document.getElementById('nav__bar');
    const navCont = document.createElement('ul');
    for (let i = 0; i < list.length; i++) {
        const domName = document.createElement('li');
        domName.setAttribute('class', 'nav__item');

        const domLink = document.createElement('a');
        domLink.textContent = list[i];
        domLink.setAttribute('class', 'nav__link');

        domName.appendChild(domLink);
        navCont.appendChild(domName);
    }
    navBar.appendChild(navCont);
    mainContainer.append(navBar);
}

function createArticle(article) {
    const container = document.getElementById(article.id);
    const domTitle = document.createElement('h2');
    domTitle.setAttribute('class', 'title');
    domTitle.textContent = article.title;
    container.appendChild(domTitle);

    const domInfo = document.createElement('ul');
    domInfo.setAttribute('class', 'info__container');

    for (let i = 0; i < article.subtitle.length; i++) {
        if (i != 3) {
            if (article.subtitle[i] === '.'){
                const subList = document.createElement('p');
                subList.textContent = article.subtitle[i];
                subList.setAttribute('class','dot');
                domInfo.appendChild(subList);
            }else{
                const subList = document.createElement('li');
                subList.setAttribute('class', 'info__item');
                subList.textContent = article.subtitle[i];
                domInfo.appendChild(subList);
            }
            
        } else {
            const subList = document.createElement('li');
            subList.setAttribute('class', 'info__item');
            const author = document.createElement('span');
            author.setAttribute('class', 'info__mark');
            author.textContent = article.subtitle[i];
            subList.appendChild(author);
            domInfo.appendChild(subList);
        }
        
    }
    container.appendChild(domInfo);


    const domAction = document.createElement('div');
    domAction.setAttribute('class', 'actions__container');
    for (let i = 0; i < buttons.length; i++) {
        const actionButton = document.createElement('button');
        actionButton.setAttribute('class', 'actions__btn');
        actionButton.setAttribute('type', 'button');
        actionButton.textContent = buttons[i];
        domAction.appendChild(actionButton);

        if (i !== buttons.length - 1) {
            const pipeline = document.createElement('div');
            pipeline.textContent = '|';
            domAction.appendChild(pipeline);
        }
    }
    container.appendChild(domAction);

    const domImg = document.createElement('img');
    domImg.setAttribute('src', article.image[0]);
    domImg.setAttribute('alt', article.image[1]);
    container.appendChild(domImg);

    const domContent = document.createElement('div');
    domContent.setAttribute('class', 'content__container');
    const firstText = document.createElement('p');
    firstText.textContent = stArticleContent;
    const secondText = document.createElement('p');
    secondText.textContent = ndArticleContent;
    domContent.appendChild(firstText);
    domContent.appendChild(secondText);
    container.appendChild(domContent);

    const readMore = document.createElement('div');
    readMore.setAttribute('class', 'readmore__container');

    const linkArticle = document.createElement('a');
    linkArticle.setAttribute('href','/article?article=' + article.title);
    readMore.appendChild(linkArticle);

    const readMoreButton = document.createElement('button');
    readMoreButton.setAttribute('class', 'button');
    readMoreButton.setAttribute('type', 'button');
    readMoreButton.textContent = "Read More";
    linkArticle.appendChild(readMoreButton);
    container.appendChild(readMore);

    mainContainer.append(container);
}

function addFooter() {
    const footer = document.createElement('footer');
    footer.setAttribute('class', 'footer');
    const prevBtn = document.createElement('button');
    prevBtn.setAttribute('class', 'footer__link');
    prevBtn.textContent = 'prev';

    const nextBtn = document.createElement('button');
    nextBtn.setAttribute('class', 'footer__link footer__link--next');
    nextBtn.textContent = 'next';

    footer.appendChild(prevBtn);
    footer.appendChild(nextBtn);
    mainContainer.appendChild(footer);
}

function createAddButton(){
    const buttonDiv = document.createElement('div');
    buttonDiv.setAttribute('class', 'add__container');
    const button = document.createElement('button');
    button.setAttribute('class','button');
    button.setAttribute('id', 'add_btn');
    button.setAttribute('type', 'button');
    button.textContent = '+ Add article';

    buttonDiv.append(button);
    mainContainer.appendChild(buttonDiv);

    button.addEventListener("click", function(){
        document.getElementById('modal_window').style.display='flex';
    })
}

/*-------MODAL WINDOW---------*/
function creteModal(){
    const modalWindow = document.getElementById('modal_window');
    const placeholders = ['title','tag','author','date','image url', 'saying', 'content']

    const modal = document.createElement('div');
    modal.setAttribute('class', 'modal');
    const modalContent = document.createElement('div');
    modalContent.setAttribute('class','modal__content');

    modalWindow.appendChild(modal);
    modal.appendChild(modalContent);

    const title = document.createElement('h2');
    title.setAttribute('class','title');
    title.textContent = 'Add/Edit article';
    modalContent.appendChild(title);

    const inputContainer = document.createElement('div');
    inputContainer.setAttribute('class','inputs__container');

    for(let i=0; i < placeholders.length - 1; i++){
        const input = document.createElement('input');
        input.setAttribute('type','text');
        input.setAttribute('class','input');
        input.setAttribute('placeholder',"Please enter "+placeholders[i]);
        inputContainer.appendChild(input);
    }
    modalContent.appendChild(inputContainer);

    const textArea = document.createElement('textarea');
    textArea.setAttribute('class','textarea');
    textArea.setAttribute('name', 'content');
    textArea.setAttribute('rows','7');
    textArea.setAttribute('cols', '28');
    textArea.setAttribute('placeholder','Please enter ' + placeholders[placeholders.length-1]);
    modalContent.appendChild(textArea);

    const modalButtons = document.createElement('div');
    modalButtons.setAttribute('class','modal__buttons');
    modalContent.appendChild(modalButtons);

    const cancelBtn = document.createElement('button');
    cancelBtn.setAttribute('type','button');
    cancelBtn.setAttribute('class','button');
    cancelBtn.textContent = 'Cancel';
    modalButtons.appendChild(cancelBtn);

    cancelBtn.addEventListener("click", function(){
        document.getElementById('modal_window').style.display='none';
    })

    const saveBtn = document.createElement('button');
    saveBtn.setAttribute('type','button');
    saveBtn.setAttribute('class','button button--pink');
    saveBtn.textContent = 'Save';
    modalButtons.appendChild(saveBtn);
}

//Functions calls

createNavigation(list);
createAddButton();
for (let i = 0; i < articles.length; i++) {
    createArticle(articles[i]);
}
addFooter();
creteModal();