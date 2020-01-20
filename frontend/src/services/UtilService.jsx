export default {
    getEmbdedUrl
};

function getEmbdedUrl(url) {
    let regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    let match = url.match(regExp)
    if (match && match[2].length == 11) {
        return 'https://www.youtube.com/embed/' + match[2] + '?autoplay=1">'
    }
    else {
        return 'Not yet..'
    }

}


// let url = this.props.cmp.info;


