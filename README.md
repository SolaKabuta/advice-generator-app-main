# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![Desktop](/images/screenshots/desktop-screen.png)
![Mobile](/images/screenshots/mobile-screen.png)


### Links

- Solution URL: [Github solution](https://github.com/SolaKabuta/advice-generator-app-main)
- Live Site URL: [Advice-Generator-App](https://advice-generator-app-main-tawny.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Tailwind](https://tailwindcss.com/) - A utility-first CSS framework


### What I learned



```javascript
document.getElementById('btn').addEventListener('click', function(){
    fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {

        // Affiche toutes les data nécessaire
        console.log(data);
        const advice = data.slip.advice
        const adviceId = data.slip.id
        console.log('Advice:', advice);
        console.log('Advice ID:', adviceId);

        // Ici on récupère l'id et on l'ajoute et on l'affiche dans l'insère dynamiquement dans l'html
        let idAdvice = document.getElementById('advice-id');

        // On récupère l'élément auquel on va append l'advice
        let adviceList = document.getElementById('advice-container');

        // Ici on vide les anciens contenus
        idAdvice.innerHTML = '';
        adviceList.innerHTML = '';

        // Ensuite on ajoute l'id de l'advice affiché
        idAdvice.textContent =`Advice # ${adviceId}`;

        // Et enfin on crée la balise "li" dans laquelle sera affiché l'advice
        let li = document.createElement('li');
        li.classList.add('list-none');
        li.textContent = `"${advice}"`

        adviceList.append(li);


    })
        .catch(error => {
            console.log(error);
        })
})
```

### Useful resources

- [Tailwind Doc](https://tailwindcss.com/) - This helped to write CSS faster.
- [ChatGPT](https://chatgpt.com/) - Chat helped me to organize my js structure 


## Author

- Website - [@solakabuta](https://www.solakabuta.com)
- Frontend Mentor - [@SolaKabuta](https://www.frontendmentor.io/profile/SolaKabuta)
- Twitter - [@sola_kabuta](https://x.com/sola_kabuta)



