document.getElementById('btn').addEventListener('click', function(){
    fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const advice = data.slip.advice
        const adviceId = data.slip.id
        console.log('Advice:', advice);
        console.log('Advice ID:', adviceId);

        let idAdvice = document.getElementById('advice-id');
        idAdvice.append(adviceId)

        let adviceList = document.getElementById('advice-container');

        let li = document.createElement('li');
        li.classList.add('list-none');
        li.textContent = advice

        adviceList.append(li);


    })
        .catch(error => {
            console.log(error);
        })
})