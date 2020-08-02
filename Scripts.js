function activate() {
    var height = document.body.clientHeight;
        home_pos = document.getElementById('home').getBoundingClientRect()['top'];
        sobre_pos = document.getElementById('sobre').getBoundingClientRect()['top'];
        post_pos = document.getElementById('post').getBoundingClientRect()['top'];
        contato_pos = document.getElementById('contato').getBoundingClientRect()['top'];
    if (home_pos <= 50 && sobre_pos > 50 ) {
        document.getElementById("home_menu").classList.add('active');
        document.getElementById("sobre_menu").classList.remove('active');
        document.getElementById("post_menu").classList.remove('active');
        document.getElementById("contato_menu").classList.remove('active');
    }
    else if (sobre_pos <= 50 && post_pos > 50 ) {
        document.getElementById("home_menu").classList.remove('active');
        document.getElementById("sobre_menu").classList.add('active');
        document.getElementById("post_menu").classList.remove('active');
        document.getElementById("contato_menu").classList.remove('active');
    }
    else if (post_pos <= 50 && contato_pos > 50 ) {
        document.getElementById("home_menu").classList.remove('active');
        document.getElementById("sobre_menu").classList.remove('active');
        document.getElementById("post_menu").classList.add('active');
        document.getElementById("contato_menu").classList.remove('active');
    }
    else if (contato_pos <= 50) {
        document.getElementById("home_menu").classList.remove('active');
        document.getElementById("sobre_menu").classList.remove('active');
        document.getElementById("post_menu").classList.remove('active');
        document.getElementById("contato_menu").classList.add('active');
    }
    else {
        document.getElementById("home_menu").classList.remove('active');
        document.getElementById("sobre_menu").classList.remove('active');
        document.getElementById("post_menu").classList.remove('active');
        document.getElementById("contato_menu").classList.remove('active');
    }
}

window.addEventListener('load', activate);
window.addEventListener('scroll', activate);
window.addEvemtListener('resize', activate);

