// Replace YOUR_CLIENT_ID with your Google API Client ID
var clientId = '13480222500-sr5eg8g98bqn1s1mu3tslee4s86okc5e.apps.googleusercontent.com';

// The Google API key that you obtained from the Google Cloud Console
var apiKey = 'AIzaSyCc8H8P-QWg9eSZHnRDaqfQGtCLRF3fQqw';

// The ID of the folder containing the images you want to use
var folderId = '1BjktplYnb9jdWkMCmr8auB6TDCpiVlUq';

// The MIME type of the images you want to use (in this case, JPEG)
var mimeType = 'image/jpeg';

// A variable to store the URL of the randomly selected image
var randomImageUrl = '';

// Load the Google API Client Library for JavaScript
gapi.load('client:auth2', function () {

    // Initialize the Google API Client Library for JavaScript
    gapi.client.init({
        apiKey: apiKey,
        clientId: clientId,
        scope: 'https://www.googleapis.com/auth/drive.readonly'
    }).then(function () {

        // Authenticate the user with Google Sign-In
        return gapi.auth2.getAuthInstance().signIn();

    }).then(function () {

        // Create a new Google Picker object
        var picker = new google.picker.PickerBuilder()
            .addView(new google.picker.DocsView(google.picker.ViewId.FOLDERS)
                .setSelectFolderEnabled(false)
                .setParent(folderId))
            .addView(new google.picker.DocsView(google.picker.ViewId.DOCS_IMAGES)
                .setMimeTypes(mimeType)
                .setParent(folderId))
            .enableFeature(google.picker.Feature.MULTISELECT_ENABLED)
            .setOAuthToken(gapi.auth2.getAuthInstance().currentUser.get().getAuthResponse().access_token)
            .setDeveloperKey(apiKey)
            .setCallback(function (data) {

                if (data.action == google.picker.Action.PICKED) {

                    // Select a random image from the list of selected images
                    var images = data.docs;
                    var randomIndex = Math.floor(Math.random() * images.length);
                    randomImageUrl = images[randomIndex].url;

                    // Use the selected image for your application
                    // ...

                }
            })
            .build();

        // Show the Google Picker dialog
        picker.setVisible(true);

    }).catch(function (error) {
        console.error(error);
    });

});
let url = URL.createObjectURL(randomImageUrl)

var img = document.createElement("img")

img.src = url

var container = document.getElementById('imagem-container');

container.appendChild(img);
