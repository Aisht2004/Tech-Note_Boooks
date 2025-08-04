document.addEventListener('DOMContentLoaded', () => {

    // Check if we are on the books page by looking for the search input
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) {
        return; // Exit if this is not the books page
    }

    const booksGrid = document.getElementById('booksGrid');
    const bookCards = booksGrid.querySelectorAll('.book-card');
    const noResultsMessage = document.getElementById('noResults');

    searchInput.addEventListener('keyup', () => {
        const searchTerm = searchInput.value.toLowerCase().trim();
        let visibleBooks = 0;

        bookCards.forEach(card => {
            const title = card.querySelector('.book-title').textContent.toLowerCase();
            
            // Check if the book title includes the search term
            if (title.includes(searchTerm)) {
                card.style.display = 'flex'; // Show the card
                visibleBooks++;
            } else {
                card.style.display = 'none'; // Hide the card
            }
        });

        // Show or hide the "no results" message
        if (visibleBooks === 0) {
            noResultsMessage.style.display = 'block';
        } else {
            noResultsMessage.style.display = 'none';
        }
    });
});