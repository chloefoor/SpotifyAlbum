import app from '../app.cjs'; 

var token;

function load(){
    token = app.getToken();
    document.getElementById('albumsplaceholder').innerHTML = 'submit pressed';
    //document.getElementById('albumsplaceholder').innerHTML += token;
}

/*const APIController = (function() {
    
    const clientId = 'f6f913b7179c4c2b943855dcd832b971';
    const clientSecret = 'e488c166ed0e4fc9b7c61fad9ba1ea7a';

    // private methods
    const _getToken = async () => {

        const result = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded', 
                'Authorization' : 'Basic ' + btoa(clientId + ':' + clientSecret)
            },
            body: 'grant_type=client_credentials'
        });

        const data = await result.json();
        return data.access_token;
    }
    
    const _getAlbums = async (token, artist, album) => {

        var query = 'artist:' + artist + '+album:' + album;
        $.ajax({
            url: 'https://api.spotify.com/v1/search?' + query,
            type: 'GET',
            headers: {
              'Authorization': 'Bearer ' + token
            },
            limit: 10,
            success: function (data) {
              document.getElementById('albumsplaceholder').innerHTML = ('slay');
            }
    
          });
    }

    return {
        getToken() {
            return _getToken();
        },
        getAlbums (token, artist, album) {
            return _getAlbums(token, artist, album);
        }
    }
})();


const UIController = (function(){
    const DOMElements = {
        artistInput : '#artistInput',
        albumInput : '#albumInput',
        submitBtn : '#submitBtn',
        albumDiv : '#albumsplaceholder',
        hfToken: '#hidden_token'
    }

    return{
        inputField(){
            return{
                album: document.querySelector(DOMElements.albumInput),
                artist: document.querySelector(DOMElements.artistInput),
                submit: document.querySelector(DOMElements.submitBtn)
            }
        },

        createAlbumDetail(img, id){
            const albumDiv = document.querySelector(DOMElements.albumDiv);
            albumDiv.innerHTML = '';
            const html = 'new album slay';

            albumDiv.insertAdjacentElement('beforeend', html);
        },
        
        storeToken(value) {
            document.querySelector(DOMElements.hfToken).value = value;
        },

        getStoredToken() {
            return {
                token: document.querySelector(DOMElements.hfToken).value
            }
        }
    }

})();

const APPController = (function(UIController, APIController){
    const DOMInputs = UIController.inputField();

    if(DOMInputs.submit){
        DOMInputs.submit.addEventListener('click', async (e) => {
            // prevent page reset
            e.preventDefault();
            
            //get the token
            const token = UICtrl.getStoredToken().token;  

            //get album and artist input
            var artist = DOMInputs.artist.value;
            var album = DOMInputs.album.value;

            var albumList = await APIController.getAlbums(token, artist, album);

        
        /* // get the playlist field
            const playlistSelect = UICtrl.inputField().playlist;
            // get track endpoint based on the selected playlist
            const tracksEndPoint = playlistSelect.options[playlistSelect.selectedIndex].value;
            // get the list of tracks
            const tracks = await APICtrl.getTracks(token, tracksEndPoint);
            // create a track list item
            tracks.forEach(el => UICtrl.createTrack(el.track.href, el.track.name))*
            
        });
    }

    return{
        init(){
            console.log('starting');
        }
    }

})(UIController, APIController);

APPController.init();*/