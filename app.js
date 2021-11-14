// document.write('hello world')
// console.log("hello world")


// function add(num1,num2){
//     // return num1+num2
//     console.log(num1+num2);
// }

// add(4,4)


//variables
// var
// let
// const

//datatypes
// String
// Number
// Boolean


//conditional
// if
// else if
// else
// switch


// loops
// while
// for

// ||  &&


//data structures 

// Array
// String


// objects




const ShowNews =(country)=>{

    
fetch(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=2be01d9455a54f9f86c3e324b33bb653`)
.then(response => response.json())
.then(data => {
    //data.articles[1].title
    for (var i = 0; i < data.articles.length; i++) {

        const container = document.querySelector('#container');

        const headline = document.createElement('h5');
        const para = document.createElement('p');
        const content = document.createElement('p')

        headline.classList.add('headline');
        headline.classList.add("bg-info");

        headline.classList.add('text-center');

        para.classList.add('p')
        para.classList.add('text-justify')
        para.classList.add('bg-light')


        content.classList.add('text-muted')

        headline.textContent =data.articles[i].title ;
        para.textContent=data.articles[i].description;
        content.textContent=data.articles[i].content;

        container.appendChild(headline);
        container.appendChild(para);
        container.appendChild(content)



    }

})
.catch(err => console.log(err))
}




const GlobalNews = () => {


    fetch(`https://newsapi.org/v2/everything?q=Apple&from=2021-11-13&sortBy=popularity&apiKey=2be01d9455a54f9f86c3e324b33bb653`)
        .then(response => response.json())
        .then(data => {
            //data.articles[1].title
            for (var i = 0; i < data.articles.length; i++) {

                const container = document.querySelector('#container');

                const headline = document.createElement('h5');
                const para = document.createElement('p');
                const content = document.createElement('p')

                headline.classList.add('headline');
                headline.classList.add("bg-info");

                headline.classList.add('text-center');

                para.classList.add('p')
                para.classList.add('text-justify')
                para.classList.add('bg-light')


                content.classList.add('text-muted')

                headline.textContent = data.articles[i].title;
                para.textContent = data.articles[i].description;
                content.textContent = data.articles[i].content;

                container.appendChild(headline);
                container.appendChild(para);
                container.appendChild(content)



            }

        })
        .catch(err => console.log(err))
}
