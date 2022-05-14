// button to add a tape
document.addEventListener('DOMContentLoaded', async () => {
    const button = document.querySelector(".update-btn");
    const confirm_btn = document.createElement('button')
    confirm_btn.innerText = 'confirm'
    let tapeName = document.querySelector('#tapeName')
    const newtapes = document.querySelector('.newtapes')
    const submit_btn = document.querySelector('.create-btn')

    submit_btn.addEventListener('click', async (e) => {
        e.preventDefault();
        newtapes.append(confirm_btn)

        const url = window.location.href

        const userId = url.split('/')[4];
        const tapeId = url.split('/')[6]
        tapeName = tapeName.value
        const body = {userId, tapeId, tapeName}
        confirm_btn.addEventListener('click', async () => {
            e.preventDefault();
            e.stopPropagation();
            try {
                await fetch(`/users/tapes/update`, {
                    method: 'PUT',
                    body: JSON.stringify(body),
                    headers: { 'Content-Type': 'application/json' }
                }).then(res => res)
            // return res.redirect(`/users/${userId}/tapes/${tapeId}`);
            return window.location.href;
            } catch (e) {
                // custom error handler?
                console.log(e)
            }
        })

    })





})
