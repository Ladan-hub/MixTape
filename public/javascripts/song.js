const db = require('../db/models');
const playlist = document.querySelector('.playlist')
// assume the class of button is playlist-btn
//when user hit 'add to playlist' button, add it to the database playlist
document.addEventListener("DOMContentLoaded", async () => {
    playlist.addEventListener('click', async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`http://localhost:8080/song/${id}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ body })
            });
            if (!res.ok) {
                throw res;
            }
        } catch (e) {
            console.log(e)
        }
    })
});