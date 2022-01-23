/*
 * Методы объекта и this при обращении к свойствам в методах
 *
 * http://fecore.net.ua/books/m5ph3r-javascript/module-03/images/context.jpg
 *
 * - changeName
 * - addTrack
 * - updateRating
 * - getTrackCount
 */


const playlist = {
    name: 'My super playlist',
    rating: 5,
    tracks: ['track-1', 'track-2', 'track-3', 'track-4', 'track-5',],
    trackCount: 5,
    // getName: function () {
    //     console.log('hello nigga')
    // }
    changeName(newName) {
            this.name = newName
    },
    addTrack(newTrack) {
        this.tracks.push(newTrack)
    },
    updateRating(newRating) {
      
    },
    getTrackCount() {
        return this.tracks.length;
    }
    }
playlist.changeName('my new play list')
playlist.addTrack('track-666')
playlist.addTrack('track-777')
playlist.updateRating(4)
console.log(playlist.getTrackCount())
console.log(playlist)
