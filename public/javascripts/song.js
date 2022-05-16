const playlists = document.querySelectorAll('.playlist-button')

// assume the class of button is playlist-btn
//when user hit 'add to playlist' button, add it to the database playlist
for(let i = 0; i < playlists.length; i++){
    const button = playlists[i];

        button.addEventListener('click', async (e) => {
            e.preventDefault();
            // const string = e.target.id.split('-')
            // const tapeId = string[0]
            // const songId = string[1]
            // console.log(tapeId, songId)

            // try {
            //     const res = await fetch(`/songs/${songId}`,{
            //         method: 'POST',
            //         headers: { 'Content-Type': 'application/json' },
            //         body: {
            //             tapeId
            //         }
            //     });

            //     if(!res.ok){
            //         throw res;
            //     }
            // } catch(e) {
            //     // custom error handler?
            //     console.log(e)
            // }

        })

}






// review.addEventListener('click', async(e) => {
//     e.preventDefault();
//     const review = await db.review.create({ songId: req.song.id, tapeId: req.tape.id })
//     res.json({ playlist })

// })
