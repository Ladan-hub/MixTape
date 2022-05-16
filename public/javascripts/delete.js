const answerDeleteBtns = document.querySelectorAll('.delete-btn')

for (let i = 0; i < answerDeleteBtns.length; i++) {
    let btn = answerDeleteBtns[i];
    btn.addEventListener('click', async (e) => {
        e.preventDefault()
        // const userId = req.session.auth.userId;
        const answerId = e.target.id.split('-')[1];
        
        const userId = document.URL.split('/')[4];
        const res = await fetch(`/users/${userId}/tapes/${answer}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })


        const data = await res.json();
      
        if (data.message === 'Success') {
            const answerCard = document.querySelector(`#${answerId}`)
            answerCard.remove()
        } 
    })
}