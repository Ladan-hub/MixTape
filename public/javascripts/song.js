



const playlists = document.querySelectorAll('.playlist-button')

// assume the class of button is playlist-btn
//when user hit 'add to playlist' button, add it to the database playlist
for(let i = 0; i < playlists.length; i++){
    const button = playlists[i];

        button.addEventListener('click', async (e) => {
            e.preventDefault();
            try {
                const res = await fetch(`/songs/${e.target.id}`,{
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                });

                if(!res.ok){
                    throw res;
                }
            } catch(e) {
                // custom error handler?
                console.log(e)
            }

        })

}






// review.addEventListener('click', async(e) => {
//     e.preventDefault();
//     const review = await db.review.create({ songId: req.song.id, tapeId: req.tape.id })
//     res.json({ playlist })

// })
