document.addEventListener('DOMContentLoaded', () => {
    console.log('Main JS loaded');
    
    const actionButtons = document.querySelectorAll('.action-btn');
    actionButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            if (e.target.classList.contains('cancel')) {
                console.log('Cancel clicked');
                return;
            }
            const actionName = e.target.textContent;
            alert(`${actionName} was clicked!`);
        });
    });
});
