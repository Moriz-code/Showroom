import Unsplash from 'unsplash-js';

export default function searchImg(searchKey) {

    const APP_ACCESS_KEY = 'd1a51341029aa7004d724286f58d2dbe3f259de5f3282be2f93b5d0a1b657a5c'
    const Unsplash = new Unsplash({ accessKey: APP_ACCESS_KEY });

}


    // // https://api.unsplash.com/search/photos?page=1&per_page=30&query=baloon&client_id=
    // return Unsplash.search.photos(searchKey, 1, 10, { orientation: "landscape" })
    //     // .then(toJson)
    //     .then(res => {
    //         // Your code
    //         console.log(res);

    //         return res
    //     });



// function uploadImg(ev) {
//     const CLOUD_NAME = 'moriz'
//     const PRESET_NAME = 'a4lpv72z'
//     const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`

//     const formData = new FormData();
//     formData.append('file', ev.target.files[0])
//     formData.append('upload_preset', PRESET_NAME);

//     return fetch(UPLOAD_URL, {
//         method: 'POST',
//         body: formData
//     })
//         .then(res => res.json())
//         .then(res => {
//             console.log(res)
//             return res
//         })
//         .catch(err => console.error(err))
// }