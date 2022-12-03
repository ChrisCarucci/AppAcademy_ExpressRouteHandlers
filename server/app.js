// Phase 2
const {
  getAllArtists,
  getLatestArtist,
  getArtistByArtistId,
  addArtist,
  editArtistByArtistId,
  deleteArtistByArtistId,
  getAlbumsForLatestArtist,
  getAlbumsByArtistId,
  getAlbumByAlbumId,
  addAlbumByArtistId,
  editAlbumByAlbumId,
  deleteAlbumByAlbumId,
  getFilteredAlbums,
  getSongsByArtistId,
  getSongsByAlbumId,
  getSongBySongId,
  addSongByAlbumId,
  editSongBySongId,
  deleteSongBySongId
} = require('./data');

const express = require('express');
const app = express();

// Your code here

app.use(express.json());


const message = {
  "message": "Successfully deleted the artist from Hollywood.."
}

app.use((req, res, next) => {
  console.log('body:', req.body);
  next()
})



 // Get Artists
app.get('/artists', (req, res) => {
  res.statusCode = 201;
  res.send(getAllArtists(req.body))
})

// Post new artist

app.post('/artists', (req, res) => {
  res.statusCode = 201;
  res.send(addArtist(req.body))
})


// Get latest Artist

app.get('/artists/latest',(req, res) => {
  res.statusCode = 201;
  res.send(getLatestArtist)
})

// Get all Albums from artist

app.get('/artists/;atest/albums', (req, res) => {
  res.statusCode = 201;
  res.send(getAlbumsByArtistId)
})

// Get a specific artist's details from artist id

app.get('/artists/:artistId', (req, res) => {
  const artistId = req.params.artistId;

  res.send(getAlbumsByArtistId(artistId))
})

// Edit a specific artist by artist id

app.put('/artists/:artistId', (req, res) => {
  const artistId = req.params.artistId;
  data = req.body;

  res.send(editArtistByArtistId(artistId, data))
})


// Delete artist by artist id
app.delete('/artists/:artistId', (req, res) => {
  const artistId = req.params.artistId;
  deleteArtistByArtistId(artistId)

  res.send(message)
})

// Get albums from artist ID

app.get('/artists/:artistId/albums', (req, res) => {
  const artistId = req.params.artistId;

  res.send(getAlbumsByArtistId(artistId));
})

// Get a specific Albums detials based o album id

app.get('/artists/:artistId/albums', (req, res) => {
  const albumId = req.params.albumId;

  res.send(getAlbumByAlbumId)
})

// Add Album by Artist Id

app.post('/artists/:artistId/albums', (req, res) => {
  const data = req.body;
  const artistId = req.params.artistId;

  res.send(addAlbumByArtistId(artistId, data))
})

// Edit album by album id

app.put('/albums/:albumId', (req, res) => {
  let albumId = req.params.albumId;
  let data = req.body;

  res.send(editAlbumByAlbumId(albumId, data))
})

// Delete Album by Album id

app.delete('/albums/:albumId', (req, res) => {
  let albumId = req.params.albumId;

  deleteAlbumByAlbumId(albumId)

  res.send(message)
})


// Get filtered Albums

app.get('/albums', (req, res) => {
  const query = req.query.startsWith;
  res.send(getFilteredAlbums(query))
})

// Get songs by artist id

app.get('/songs', (req, res) => {
  const artistId = req.params.artistId;

  res.send(getSongsByArtistId(artistId));
})


// Get songs by songId

app.get('/songs', (req, res) => {
  const songId = req.params.songId;
  res.send(getSongBySongId(songId))
})

// Add song by albumId

app.post('/albums', (req, res) => {
  const data = req.body;
  const albumId = req.params.albumId;

  res.send(getSongsByAlbumId(albumId))
})

// Edit song by song id

app.put('/songs', (req, res) => {
  const data = req.body;
  const songId = req.params.songId;

  res.send(editSongBySongId(songId, data))
})

// Delete song by songId
app.delete("songs", (req, res) => {
  const songId = req.params.songId;

  res.send(deleteSongBySongId(songId))

  res.send(message)
})




const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));