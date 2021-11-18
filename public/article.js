let mainContainer = document.getElementById('main__container');
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
let list = ['Travel updates', 'Reviews', 'About', 'Contact'];
function createNavigation(list) {

    const navBar = document.getElementById('nav__bar');
    const navCont = document.createElement('ul');
    for (let i = 0; i < list.length; i++) {
        const domName = document.createElement('li');
        domName.setAttribute('class', 'nav__item');

        const domLink = document.createElement('a');
        domLink.textContent = list[i];
        domLink.setAttribute('class', 'nav__link');
        domLink.target = "_blank";

        domName.appendChild(domLink);
        navCont.appendChild(domName);
    }
    navBar.appendChild(navCont);
    
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
function createArticle(article) {
    const container = document.getElementById('article');
    const domTitle = document.createElement('h2');
    domTitle.setAttribute('class', 'title title--details');
    domTitle.textContent = article.title;
    container.appendChild(domTitle);

    const domInfo = document.createElement('ul');
    domInfo.setAttribute('class', 'info__container info__container--details');

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

    const domImg = document.createElement('img');
    domImg.setAttribute('src', article.image[0]);
    domImg.setAttribute('alt', article.image[1]);
    container.appendChild(domImg);

    const domContent = document.createElement('div');
    domContent.setAttribute('class', 'content__container');
    const firstText = document.createElement('p');
    firstText.textContent = text;

    const sayingText = document.createElement('p');
    sayingText.setAttribute('class','saying');
    sayingText.textContent = saying;

    const secondText = document.createElement('p');
    secondText.textContent = text;
    domContent.appendChild(firstText);
    domContent.appendChild(sayingText);
    domContent.appendChild(secondText);
    container.appendChild(domContent);

    mainContainer.append(container);
}

const urlParams = new URLSearchParams(window.location.search);
const articleName = urlParams.get('article');

let text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atibus obcaecati nesciunt ex dolorem aut quisquam eveniet quibusdam soluta doloremque qui, nostrum laudantium, sapiente iusto odit. Placeat iusto eius asperiores iure atque sint ex! Impedit soluta tenetur alias id doloremque dolores incidunt earum? Animi, quas eligendi! Est voluptas dolor eos quae, harum amet cumque vitae nobis placeat inventore facilis soluta maiores magni dolores consequuntur iure accusamus laborum? Ipsum voluptatum culpa doloremque minima ratione veritatis nesciunt cum quae esse sint optio eos ipsam repellendus ipsa repellat qui, sed fugiat, quaerat adipisci quia temporibus totam iusto. Labore laudantium possimus nisi, doloremque suscipit eligendi dolorem exercitationem excepturi rem odio, a placeat aliquid voluptates amet officia sunt corrupti? Cum, enim illo. Possimus ipsa veritatis excepturi. Hic molestias perspiciatis laborum, saepe excepturi eaque suscipit illum voluptates ad recusandae nam distinctio nulla eos aperiam necessitatibus. Corrupti ipsam numquam, placeat deserunt iste quae dicta facilis natus laboriosam tempore minus modi corporis esse excepturi facere nam quam suscipit? Adipisci consequatur similique, voluptatum sed itaque velit iure optio! Laboriosam eligendi, perspiciatis veniam eum doloremque cum debitis natus eos? Amet culpa asperiores natus harum suscipit ducimus, iure recusandae quibusdam voluptate mollitia unde nulla nemo tempora corrupti facere. Dolore qui, illum vel nesciunt, corrupti necessitatibus, est tenetur repellat fuga officia eius maiores non libero. Voluptates illum ea quaerat, eaque quidem vitae dolorum debitis doloribus dolor accusamus ab similique doloremque, voluptas nemo. Natus dolor officiis illo hic, aliquid iusto eos? Magni quibusdam sunt vel? Neque, tempora temporibus exercitationem qui molestias corrupti, esse voluptatem possimus, ratione ex quod repellat iste nobis! Rerum beatae consectetur itaque pariatur quos omnis perspiciatis laboriosam quis quod, sed iusto. Consectetur qui dolores sequi sint, provident voluptatibus tempora illo repellendus vel suscipit voluptas magni quod quaerat corrupti eaque, optio vitae non recusandae sed atque similique ad in. Error maxime fugiat ut tenetur ipsam quibusdam ipsa recusandae alias blanditiis, deserunt, porro laudantium. Sit omnis cumque pariatur ipsum, fugiat, quae id quo autem sint nihil doloremque impedit magnam. Earum eveniet reprehenderit recusandae nam beatae sint provident?';
let saying = 'Life is like riding a bicycle, to keep your balance you must keep moving';


createNavigation(list);

for(let i = 0; i < articles.length; i++){
    if(articles[i].title === articleName){
        createArticle(articles[i]);
    }
}

addFooter();