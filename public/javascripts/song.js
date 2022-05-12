
const db = require('../db/models');


const playlist = document.querySelector('.playlist')

// assume the class of button is playlist-btn
//when user hit 'add to playlist' button, add it to the database playlist

document.addEventListener("DOMContentLoaded", async () => {

    playlist.addEventListener('click', async(e) => {
        e.preventDefault();
        try {
            const res = await fetch(`http://localhost:8080/song/${id}`,{
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({body})
            });

            if(!res.ok){
                throw res;
            }
        } catch(e) {
            console.log(e)
        }





    })

  });






// rating.addEventListener('click', async(e) => {
//     e.preventDefault();
//     const rating = await db.rating.create({ songId: req.song.id, tapeId: req.tape.id })
//     res.json({ playlist })

// })

// review.addEventListener('click', async(e) => {
//     e.preventDefault();
//     const review = await db.review.create({ songId: req.song.id, tapeId: req.tape.id })
//     res.json({ playlist })

// })
