document.getElementById('show-content-btn').addEventListener('click', function () {
    const initialContent = document.getElementById('initial-content');
    initialContent.style.display = 'none';

    const fullContent = document.getElementById('full-content');
    fullContent.style.display = 'block';

    document.body.style.backgroundColor = 'white';
    setTimeout(function () {
        fullContent.style.opacity = '1';
    }, 10);
});
