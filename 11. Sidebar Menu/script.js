function togglebar() {
    var sidebar = document.querySelector('.sidebar');
    console.log()
    sidebar.style.transform = sidebar.style.transform === 'translate(0%, 0px)' ? 'translate(-100%, 0)' : 'translate(0%, 0)';
}