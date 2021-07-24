function funAlert() {
    var btn = document.querySelector('#share_box');
    var share_btn = document.querySelector('#share');
	
    if (btn.style.display == 'none') {
        btn.style.display = 'flex';
        share_btn.src = "images/sharing_hover.png";
    } else {
        btn.style.display = 'none';
        share_btn.src = "images/sharing.png";
    }
}
