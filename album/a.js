"use strict";
let make_album = (artist, tilte, track) => {
    let album = {
        artist1: artist,
        title1: tilte,
    };
    if (track !== undefined) {
        album.tracks1 = track;
    }
    return album;
};
console.log(make_album(`atif aslam`, `volume1`));
console.log(make_album(`honeysingh`, `volume2`, 420));
console.log(make_album(`bohemia`, `Desi hip hop`, 35));
