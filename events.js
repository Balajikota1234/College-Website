// ==================== EVENT DATA STRUCTURE ====================
const eventData = [
    {
        id: 'freshers2025',
        title: 'Freshers Day 2025',
        date: 'January 15, 2025',
        description: 'Welcome celebration for new students with cultural performances and activities',
        category: 'cultural',
        year: '2025',
        photoCount: 15,
        coverImage: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&h=600&fit=crop',
        photos: [
            'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1541532713592-79a0317b6b77?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1510076857177-7470076d4098?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1464047736614-af63643285bf?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=600&h=400&fit=crop'
        ]
    },
    {
        id: 'farewell2025',
        title: 'Farewell Day 2025',
        date: 'March 22, 2025',
        description: 'A memorable farewell event for graduating students with awards and entertainment',
        category: 'cultural',
        year: '2025',
        photoCount: 20,
        coverImage: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop',
        photos: [
            'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1541532713592-79a0317b6b77?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1464047736614-af63643285bf?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1510076857177-7470076d4098?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1522543558187-768b6df7c25c?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1543269664-56d93c1b41a6?w=600&h=400&fit=crop'
        ]
    },
    {
        id: 'teachers2025',
        title: 'Teachers Day 2025',
        date: 'September 5, 2025',
        description: 'Honoring our dedicated faculty with performances and appreciation ceremony',
        category: 'cultural',
        year: '2025',
        photoCount: 12,
        coverImage: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop',
        photos: [
            'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1581726707445-75cbe4efc586?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1529390079861-591de354faf5?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop'
        ]
    },
    {
        id: 'annual2024',
        title: 'Annual Day 2024',
        date: 'December 20, 2024',
        description: 'Grand annual celebration with cultural programs and prize distribution',
        category: 'cultural',
        year: '2024',
        photoCount: 18,
        coverImage: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop',
        photos: [
            'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1541532713592-79a0317b6b77?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1510076857177-7470076d4098?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1464047736614-af63643285bf?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1522543558187-768b6df7c25c?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=600&h=400&fit=crop'
        ]
    },
    {
        id: 'science2024',
        title: 'Science Exhibition 2024',
        date: 'November 10, 2024',
        description: 'Student projects and innovations showcase in science and technology',
        category: 'academic',
        year: '2024',
        photoCount: 14,
        coverImage: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop',
        photos: [
            'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1581093458791-9f3c3250a199?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1576319155264-99536e0be1ee?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1581092918484-8313e1175923?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1581093804475-577d72e38aa0?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1581093458728-e3ce98851f4b?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1581092916450-68925f86640e?w=600&h=400&fit=crop'
        ]
    },
    {
        id: 'sports2024',
        title: 'Sports Day 2024',
        date: 'October 15, 2024',
        description: 'Inter-college sports competition with athletics and team games',
        category: 'cultural',
        year: '2024',
        photoCount: 16,
        coverImage: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=600&fit=crop',
        photos: [
            'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1593030668937-cf4531ea3f8?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1628779238951-be2c9f2a59f4?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1589487391730-58f20eb2c308?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1526232761682-d26e03ac148e?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1551958219-acbc608c6377?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=600&h=400&fit=crop'
        ]
    }
];

// ==================== DOM ELEMENTS ====================
const eventsGrid = document.getElementById('eventsGrid');
const modal = document.getElementById('lightbox-modal');
const modalTitle = document.getElementById('modal-title');
const modalDate = document.getElementById('modal-date');
const modalDescription = document.getElementById('modal-description');
const photoGallery = document.getElementById('photo-gallery');
const closeBtn = document.querySelector('.close-btn');
const imageViewer = document.getElementById('image-viewer');
const viewerImage = document.getElementById('viewer-image');
const closeViewer = document.querySelector('.close-viewer');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const searchInput = document.getElementById('eventSearch');
const filterButtons = document.querySelectorAll('.filter-btn');
const noResults = document.getElementById('noResults');
const downloadBtn = document.getElementById('downloadBtn');
const shareBtn = document.getElementById('shareBtn');
const shareModal = document.getElementById('share-modal');
const imageCounter = document.getElementById('imageCounter');

// ==================== STATE VARIABLES ====================
let currentEventPhotos = [];
let currentImageIndex = 0;
let currentFilter = 'all';
let currentSearchTerm = '';
let allEvents = eventData;

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
    renderEvents(allEvents);
    initializeEventListeners();
    console.log('✅ Event Gallery Enhanced - Initialized Successfully!');
});

// ==================== RENDER EVENTS ====================
function renderEvents(events) {
    eventsGrid.innerHTML = '';
    
    if (events.length === 0) {
        noResults.style.display = 'block';
        return;
    }
    
    noResults.style.display = 'none';
    
    events.forEach((event, index) => {
        const eventCard = createEventCard(event, index);
        eventsGrid.appendChild(eventCard);
    });
}

function createEventCard(event, index) {
    const card = document.createElement('div');
    card.className = 'event-card';
    card.setAttribute('data-event-id', event.id);
    card.style.transform = 'translateY(30px)';
    
    card.innerHTML = `
        <div class="event-badge">${event.year}</div>
        <div class="image-container">
            <img src="${event.coverImage}" alt="${event.title}" class="main-image" loading="lazy">
            <div class="hover-overlay">
                <p class="photo-count">${event.photoCount} Photos Available</p>
                <button class="view-gallery-btn" aria-label="View gallery">
                    <svg class="arrow-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                </button>
            </div>
        </div>
        <div class="event-info">
            <h3 class="event-title">${event.title}</h3>
            <p class="event-date">
                <i class="bi bi-calendar-event"></i>
                ${event.date}
            </p>
            <p class="event-description">${event.description}</p>
        </div>
    `;
    
    card.addEventListener('click', () => openModal(event));
    
    return card;
}

// ==================== SEARCH FUNCTIONALITY ====================
function handleSearch() {
    currentSearchTerm = searchInput.value.toLowerCase();
    filterAndRenderEvents();
}

// ==================== FILTER FUNCTIONALITY ====================
function handleFilter(filterValue) {
    currentFilter = filterValue;
    
    // Update active button
    filterButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-filter') === filterValue) {
            btn.classList.add('active');
        }
    });
    
    filterAndRenderEvents();
}

function filterAndRenderEvents() {
    let filteredEvents = allEvents;
    
    // Apply category/year filter
    if (currentFilter !== 'all') {
        filteredEvents = filteredEvents.filter(event => 
            event.category === currentFilter || event.year === currentFilter
        );
    }
    
    // Apply search filter
    if (currentSearchTerm) {
        filteredEvents = filteredEvents.filter(event =>
            event.title.toLowerCase().includes(currentSearchTerm) ||
            event.description.toLowerCase().includes(currentSearchTerm) ||
            event.date.toLowerCase().includes(currentSearchTerm)
        );
    }
    
    renderEvents(filteredEvents);
}

// ==================== MODAL FUNCTIONS ====================
function openModal(event) {
    modalTitle.textContent = event.title;
    modalDate.innerHTML = `<i class="bi bi-calendar-event"></i> ${event.date}`;
    modalDescription.textContent = event.description;
    
    currentEventPhotos = event.photos;
    
    photoGallery.innerHTML = '<div class="loading">Loading photos</div>';
    
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
    
    setTimeout(() => {
        renderGallery();
    }, 300);
}

function closeModal() {
    modal.classList.remove('show');
    document.body.style.overflow = '';
    
    setTimeout(() => {
        photoGallery.innerHTML = '';
    }, 300);
}

function renderGallery() {
    photoGallery.innerHTML = '';
    
    currentEventPhotos.forEach((photoUrl, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        
        const img = document.createElement('img');
        img.src = photoUrl;
        img.alt = `Photo ${index + 1}`;
        img.loading = 'lazy';
        
        galleryItem.addEventListener('click', () => {
            openImageViewer(index);
        });
        
        galleryItem.appendChild(img);
        photoGallery.appendChild(galleryItem);
    });
}

// ==================== IMAGE VIEWER FUNCTIONS ====================
function openImageViewer(index) {
    currentImageIndex = index;
    viewerImage.src = currentEventPhotos[index];
    imageViewer.classList.add('active');
    document.body.style.overflow = 'hidden';
    updateImageCounter();
}

function closeImageViewer() {
    imageViewer.classList.remove('active');
    document.body.style.overflow = '';
}

function showPreviousImage() {
    currentImageIndex = (currentImageIndex - 1 + currentEventPhotos.length) % currentEventPhotos.length;
    viewerImage.src = currentEventPhotos[currentImageIndex];
    updateImageCounter();
}

function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % currentEventPhotos.length;
    viewerImage.src = currentEventPhotos[currentImageIndex];
    updateImageCounter();
}

function updateImageCounter() {
    imageCounter.textContent = `${currentImageIndex + 1} / ${currentEventPhotos.length}`;
}

// ==================== DOWNLOAD FUNCTIONALITY ====================
function downloadImage() {
    const imageUrl = currentEventPhotos[currentImageIndex];
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = `event-photo-${currentImageIndex + 1}.jpg`;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Show feedback
    showNotification('Download started!');
}

// ==================== SHARE FUNCTIONALITY ====================
function openShareModal() {
    shareModal.classList.add('active');
}

function closeShareModal() {
    shareModal.classList.remove('active');
}

function handleShare(platform) {
    const imageUrl = currentEventPhotos[currentImageIndex];
    const text = 'Check out this amazing event photo!';
    
    let shareUrl = '';
    
    switch(platform) {
        case 'facebook':
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(imageUrl)}`;
            break;
        case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(imageUrl)}&text=${encodeURIComponent(text)}`;
            break;
        case 'whatsapp':
            shareUrl = `https://wa.me/?text=${encodeURIComponent(text + ' ' + imageUrl)}`;
            break;
        case 'copy':
            navigator.clipboard.writeText(imageUrl).then(() => {
                showNotification('Link copied to clipboard!');
                closeShareModal();
            });
            return;
    }
    
    if (shareUrl) {
        window.open(shareUrl, '_blank', 'width=600,height=400');
        closeShareModal();
    }
}

// ==================== NOTIFICATION ====================
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #013ff9;
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        box-shadow: 0 5px 20px rgba(1, 63, 249, 0.4);
        z-index: 9999;
        font-weight: 600;
        animation: slideInRight 0.4s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.4s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 400);
    }, 2000);
}

// ==================== EVENT LISTENERS ====================
function initializeEventListeners() {
    // Search
    searchInput.addEventListener('input', handleSearch);
    
    // Filter buttons
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            handleFilter(btn.getAttribute('data-filter'));
        });
    });
    
    // Modal close
    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
    
    // Image viewer close
    closeViewer.addEventListener('click', closeImageViewer);
    imageViewer.addEventListener('click', (e) => {
        if (e.target === imageViewer) closeImageViewer();
    });
    
    // Navigation buttons
    prevBtn.addEventListener('click', showPreviousImage);
    nextBtn.addEventListener('click', showNextImage);
    
    // Download and share
    downloadBtn.addEventListener('click', downloadImage);
    shareBtn.addEventListener('click', openShareModal);
    
    // Share modal
    document.querySelector('.close-share-btn').addEventListener('click', closeShareModal);
    document.querySelectorAll('.share-option').forEach(btn => {
        btn.addEventListener('click', () => {
            handleShare(btn.getAttribute('data-platform'));
        });
    });
        
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (imageViewer.classList.contains('active')) {
            if (e.key === 'ArrowLeft') showPreviousImage();
            else if (e.key === 'ArrowRight') showNextImage();
            else if (e.key === 'Escape') closeImageViewer();
        } else if (modal.classList.contains('show')) {
            if (e.key === 'Escape') closeModal();
        }
    });
}

// ==================== ANIMATIONS ====================
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

console.log('📊 Event Statistics:');
console.log(`Total Events: ${eventData.length}`);
console.log(`Total Photos: ${eventData.reduce((sum, event) => sum + event.photoCount, 0)}`);
