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
        li.textContent = advice

        adviceList.append(li);


    })
        .catch(error => {
            console.log(error);
        })
})