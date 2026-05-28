// ========== МАССИВ ФИЛЬМОВ ДЛЯ КАРУСЕЛИ ==========
const films = [
    { title: 'Алиса в стране чудес', description: 'Путешествие Алисы в загадочный мир фантазии.', posterUrl: '3af7219eccd7dfe4.jpg' },
    { title: 'Эльф и украденное Рождество', description: 'Волшебная сказка о спасении Рождества.', posterUrl: 'AQACTfMsAHgYhryWC4uE_jCOBd_XQxVUzvs0hSeK9LdkUPJtzaeMKMlWHh5UU8drTLYFxsOZNU-_ut7AtrulEJhoMog.jpg' },
    { title: 'Иллюзия обмана 3', description: 'Новые трюки и невероятные загадки ожидают зрителей.', posterUrl: 'AQAC0SB8Ryyj3g75NhS5hkH-RI1ieF-eYht-yWjYjHzVw_XjbyH-q5JGrqUQvLbVi3koD8UhjCD8B03BTXyWzdSH3BA.jpg' },
    { title: 'Матрица: Воскрешение', description: 'Геймдизайнер Томас Андерсон сделал себе имя работой над трилогией игр «Матрица».', posterUrl: '106676707202998f711ba2b4ab6ef1a1.jpg' },
    { title: 'Доктор Стрэндж 2', description: 'Доктор Стрэндж при помощи Вонга спасает от гигантского осьминога девушку-подростка по имени Америка Чавес.', posterUrl: 'w1500_2946149.jpg' },
    { title: 'Семь вёрст до рассвета', description: 'Старик соглашается помочь врагам — и ведёт их в глубь зимнего леса. Военная драма с Фёдором Добронравовым.', posterUrl: 'Семь верст.jpg' },
    { title: 'Хокум', description: 'Адам Скотт в атмосферном хорроре о призраках в ирландской глуши.', posterUrl: 'Хокум.jpg' }
];

// ========== ДАННЫЕ ФИЛЬМОВ С ДЕТАЛЯМИ ==========
const filmsWithDetails = [
    {
        title: 'Алиса в стране чудес',
        description: 'Путешествие Алисы в загадочный мир фантазии.',
        fullDescription: 'Молодая девушка Алиса попадает в удивительную страну чудес, где ее ждут невероятные приключения, загадочные персонажи и магические превращения.',
        posterUrl: '3af7219eccd7dfe4.jpg',
        duration: '108 мин',
        director: 'Тим Бёртон',
        ratingImdb: 6.4,
        ratingKp: 7.2,
        trailerUrl: 'https://www.kinopoisk.ru/'
    },
    {
        title: 'Эльф и украденное Рождество',
        description: 'Волшебная сказка о спасении Рождества.',
        fullDescription: 'Эльф Бадди отправляется в опасное путешествие, чтобы спасти Рождество от злодея, укравшего все подарки.',
        posterUrl: 'AQACTfMsAHgYhryWC4uE_jCOBd_XQxVUzvs0hSeK9LdkUPJtzaeMKMlWHh5UU8drTLYFxsOZNU-_ut7AtrulEJhoMog.jpg',
        duration: '95 мин',
        director: 'Джон Фавро',
        ratingImdb: 7.1,
        ratingKp: 7.5,
        trailerUrl: 'https://www.kinopoisk.ru/'
    },
    {
        title: 'Иллюзия обмана 3',
        description: 'Новые трюки и невероятные загадки ожидают зрителей.',
        fullDescription: 'Команда иллюзионистов возвращается с новыми головокружительными трюками и опасными авантюрами.',
        posterUrl: 'AQAC0SB8Ryyj3g75NhS5hkH-RI1ieF-eYht-yWjYjHzVw_XjbyH-q5JGrqUQvLbVi3koD8UhjCD8B03BTXyWzdSH3BA.jpg',
        duration: '115 мин',
        director: 'Джон М. Чу',
        ratingImdb: 6.2,
        ratingKp: 6.8,
        trailerUrl: 'https://www.kinopoisk.ru/'
    },
    {
        title: 'Матрица: Воскрешение',
        description: 'Геймдизайнер Томас Андерсон сделал себе имя работой над трилогией игр «Матрица».',
        fullDescription: 'Геймдизайнер Томас Андерсон делает себе имя работой над трилогией игр «Матрица». В действительности он — Тринити и Нео, бывшие герои, запертые в симуляции.',
        posterUrl: '106676707202998f711ba2b4ab6ef1a1.jpg',
        duration: '148 мин',
        director: 'Лана Вачовски',
        ratingImdb: 5.7,
        ratingKp: 6.5,
        trailerUrl: 'https://www.kinopoisk.ru/'
    },
    {
        title: 'Доктор Стрэндж 2',
        description: 'Доктор Стрэндж при помощи Вонга спасает от гигантского осьминога девушку-подростка по имени Америка Чавес.',
        fullDescription: 'Доктор Стрэндж продолжает исследовать мультивселенную, сталкиваясь с альтернативными версиями себя, которые угрожают уничтожить реальность.',
        posterUrl: 'w1500_2946149.jpg',
        duration: '126 мин',
        director: 'Сэм Рэйми',
        ratingImdb: 6.9,
        ratingKp: 7.4,
        trailerUrl: 'https://www.kinopoisk.ru/'
    },
    {
        title: 'Семь вёрст до рассвета',
        description: 'Старик соглашается помочь врагам — и ведёт их в глубь зимнего леса. Военная драма с Фёдором Добронравовым.',
        fullDescription: 'Зима 1942 года. Старый лесник по прозвищу Дед вынужден стать проводником для отряда немецких разведчиков. Он ведёт их через заснеженный лес, но каждый километр пути приближает врагов к засаде, которую готовят партизаны. Фильм о мужестве, предательстве и силе духа.',
        posterUrl: 'Семь верст.jpg',
        duration: '112 мин',
        director: 'Алексей Козлов',
        ratingImdb: 7.3,
        ratingKp: 7.8,
        trailerUrl: 'https://www.kinopoisk.ru/'
    },
    {
        title: 'Хокум',
        description: 'Адам Скотт в атмосферном хорроре о призраках в ирландской глуши.',
        fullDescription: 'Писатель романов ужасов Ом Бауман приезжает в ирландскую гостиницу, чтобы развеять прах родителей, не подозревая, что в этом месте, по слухам, обитает ведьма.',
        posterUrl: 'Хокум.jpg',
        duration: '120 мин',
        director: 'Дэмиэн Маккарти',
        ratingImdb: 7.4,
        ratingKp: 6.7,
        trailerUrl: 'https://www.kinopoisk.ru/'
    }
];

// ========== ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ ==========
let currentSlide = 0;
let slideInterval;
let seatSelectionData = null;
let selectedSeats = [];
let allBookings = [];
let currentAction = 'select';
let isTransitioningToForm = false;

// Цены на билеты (все делятся на 10)
const seatPrices = { 
    standard: 350,
    vip: 500
};

// ========== ИМПОРТ FIREBASE ==========
import { 
    initAuth, registerUser, loginUser, logoutUser, resetPassword,
    saveBookingToFirestore, getUserBookings, getCurrentUser
} from './firebase-auth.js';

// ========== ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ ==========
function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.innerHTML = `<i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i><span>${message}</span>`;
    notification.style.cssText = `
        position: fixed; bottom: 20px; right: 20px; z-index: 9999;
        background: ${type === 'success' ? 'rgba(34,197,94,0.95)' : 'rgba(239,68,68,0.95)'};
        color: white; padding: 12px 20px; border-radius: 8px;
        display: flex; align-items: center; gap: 10px;
        animation: slideInRight 0.3s ease;
    `;
    document.body.appendChild(notification);
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

function showLoading(btn) {
    if (btn) {
        btn.disabled = true;
        btn.classList.add('loading');
        btn.setAttribute('data-original-text', btn.innerHTML);
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Загрузка...';
    }
}

function hideLoading(btn) {
    if (btn) {
        btn.disabled = false;
        btn.classList.remove('loading');
        const orig = btn.getAttribute('data-original-text');
        if (orig) btn.innerHTML = orig;
    }
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', { 
        day: 'numeric', month: 'long', year: 'numeric', weekday: 'long' 
    });
}

function generateTransactionId(prefix) {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let result = prefix;
    for (let i = 0; i < 6; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

// ========== КНОПКА НАВЕРХ ==========
// Функция для прокрутки наверх
function scrollToTop() {
    window.scrollTo({ 
        top: 0, 
        behavior: 'smooth' 
    });
}

// Функция для показа/скрытия кнопки при скролле
function initBackToTopButton() {
    const backToTopBtn = document.getElementById('back-to-top-btn-container');
    if (!backToTopBtn) return;
    
    // Проверяем положение скролла
    function checkScrollPosition() {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('show-back-to-top');
        } else {
            backToTopBtn.classList.remove('show-back-to-top');
        }
    }
    
    // Слушаем событие скролла
    window.addEventListener('scroll', checkScrollPosition);
    
    // Проверяем сразу при загрузке
    checkScrollPosition();
}

// ========== КАРУСЕЛЬ ==========
function renderCarousel() {
    const carousel = document.getElementById('carousel');
    const indicators = document.getElementById('carousel-indicators');
    if (!carousel || !indicators) return;
    
    carousel.innerHTML = films.map((f, i) => `
        <div class="carousel-item">
            <img src="${f.posterUrl}" alt="${f.title}" class="carousel-img">
            <div class="carousel-caption">
                <h3>${f.title}</h3>
                <p>${f.description}</p>
                <button class="watch-now-btn" onclick="openSeatSelectionForFilm('${f.title.replace(/'/g, "\\'")}')">
                    <i class="fas fa-ticket-alt"></i> Забронировать или купить билеты
                </button>
            </div>
        </div>
    `).join('');
    
    indicators.innerHTML = films.map((_, i) => `
        <button class="carousel-indicator ${i === 0 ? 'active' : ''}" onclick="goToSlide(${i})"></button>
    `).join('');
    
    updateCarousel();
    if (slideInterval) clearInterval(slideInterval);
    slideInterval = setInterval(() => nextSlide(), 5000);
}

function updateCarousel() {
    const carousel = document.getElementById('carousel');
    if (carousel) carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
    document.querySelectorAll('.carousel-indicator').forEach((ind, i) => {
        ind.classList.toggle('active', i === currentSlide);
    });
}

function nextSlide() { currentSlide = (currentSlide + 1) % films.length; updateCarousel(); }
function prevSlide() { currentSlide = (currentSlide - 1 + films.length) % films.length; updateCarousel(); }
function goToSlide(i) { currentSlide = i; updateCarousel(); }

// ========== РАСПИСАНИЕ ==========
let scheduleData = [];

function generateScheduleData() {
    const start = new Date();
    start.setHours(0, 0, 0, 0);
    const end = new Date(start);
    end.setMonth(end.getMonth() + 2);
    scheduleData = [];
    
    // Цены для разных залов (все делятся на 10)
    const hallPrices = {
        1: 350,
        2: 380,
        3: 400,
        4: 450,
        5: 500
    };
    
    // Все возможные времена сеансов (10 сеансов в день)
    const showTimes = [
        '10:00', '11:30', '13:00', '14:30', '16:00',
        '17:30', '19:00', '20:30', '22:00', '23:30'
    ];
    
    // Функция для получения чередующихся залов (без повторений подряд)
    function getAlternatingHalls(count) {
        const halls = [1, 2, 3, 4, 5];
        const result = [];
        let lastHall = null;
        
        for (let i = 0; i < count; i++) {
            let available = halls.filter(h => h !== lastHall);
            if (available.length === 0) available = [...halls];
            const selected = available[Math.floor(Math.random() * available.length)];
            result.push(selected);
            lastHall = selected;
        }
        return result;
    }
    
    for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
        const date = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
        
        // Счетчик показов фильмов в этот день
        const filmCount = {};
        films.forEach(film => { filmCount[film.title] = 0; });
        
        // Массив для хранения выбранных фильмов
        const selectedFilms = [];
        
        // Создаем 10 сеансов на день с правильным распределением фильмов (не более 2 раз)
        for (let i = 0; i < 10; i++) {
            const availableFilms = films.filter(film => filmCount[film.title] < 2);
            const randomFilm = availableFilms[Math.floor(Math.random() * availableFilms.length)];
            filmCount[randomFilm.title]++;
            selectedFilms.push(randomFilm);
        }
        
        // Получаем чередующиеся залы (без повторений подряд)
        const hallSequence = getAlternatingHalls(10);
        
        // Создаем сеансы
        for (let i = 0; i < 10; i++) {
            const hallNum = hallSequence[i];
            const film = selectedFilms[i];
            const priceValue = hallPrices[hallNum];
            const price = `${priceValue} руб.`;
            
            scheduleData.push({
                filmTitle: film.title,
                day: date,
                time: showTimes[i],
                hall: `зал № ${hallNum}`,
                price: price,
                sessionId: `SESS-${date}-${hallNum}-${film.title.replace(/\s/g, '-')}-${i}`,
                hallNumber: hallNum,
                priceValue: priceValue
            });
        }
    }
}

function updateSchedule() {
    const date = document.getElementById('selected-date')?.value;
    const tbody = document.getElementById('schedule-body');
    if (!tbody) return;
    
    const now = new Date();
    const today = now.toISOString().split('T')[0];
    const currentTime = now.getHours() * 60 + now.getMinutes(); 
    
    let filtered = scheduleData.filter(s => s.day === date);
    
    if (date === today) {
        filtered = filtered.filter(s => {
            const [hours, minutes] = s.time.split(':').map(Number);
            const sessionTime = hours * 60 + minutes;

            return sessionTime >= currentTime + 30;
        });
    }
    
    // Сортируем по времени
    filtered.sort((a, b) => a.time.localeCompare(b.time));
    
    if (filtered.length === 0) {
        if (date === today) {
            tbody.innerHTML = '<tr><td colspan="5">На сегодня больше нет сеансов. Выберите другую дату.</td></tr>';
        } else {
            tbody.innerHTML = '<tr><td colspan="5">Нет сеансов на выбранный день</td></tr>';
        }
        return;
    }
    
    tbody.innerHTML = filtered.map(s => `
        <tr>
            <td>${s.filmTitle}</td>
            <td>${s.time}</td>
            <td>${s.hall}</td>
            <td>${s.price}</td>
            <td>
                <div class="action-buttons-container">
                    <button class="action-btn select" onclick="openSeatSelection('${s.filmTitle}', '${s.time}', '${s.hall}', '${s.price}', '${s.day}', '${s.sessionId}', ${s.hallNumber})">
                        <i class="fas fa-chair"></i> Выбрать места
                    </button>
                    <button class="action-btn details" onclick="openFilmDetails('${s.filmTitle.replace(/'/g, "\\'")}')">
                        <i class="fas fa-info-circle"></i> Подробнее
                    </button>
                </div>
            </td>
        </tr>
    `).join('');
}

// ========== СИСТЕМА БРОНИРОВАНИЯ ==========
function loadBookingsFromStorage() {
    try { return JSON.parse(localStorage.getItem('cinemaBookings')) || []; } 
    catch(e) { return []; }
}

function saveBookingsToStorage() {
    try { localStorage.setItem('cinemaBookings', JSON.stringify(allBookings)); } 
    catch(e) {}
}

function getOccupiedSeatsForSession(sessionId) {
    const occupied = [];
    allBookings.forEach(b => {
        if (b.sessionId === sessionId && b.seats) {
            b.seats.forEach(s => occupied.push(`${s.row}-${s.seat}`));
        }
    });
    return occupied;
}

function generateSeatLayout(hallNumber) {
    const layouts = {
        1: { rows: 8, seatsPerRow: 12, vipRows: [7, 8], aisleSeat: 6 },
        2: { rows: 10, seatsPerRow: 15, vipRows: [9, 10], aisleSeat: 8 },
        3: { rows: 6, seatsPerRow: 10, vipRows: [5, 6], aisleSeat: 5 },
        4: { rows: 9, seatsPerRow: 14, vipRows: [8, 9], aisleSeat: 7 },
        5: { rows: 7, seatsPerRow: 11, vipRows: [6, 7], aisleSeat: 6 }
    };
    return layouts[hallNumber] || layouts[1];
}

function calculateTotalPrice() {
    let total = 0;
    selectedSeats.forEach(id => {
        const el = document.querySelector(`.seat[data-seat-id="${id}"]`);
        if (el) total += parseInt(el.dataset.price);
    });
    return total;
}

function getSeatDetails() {
    return selectedSeats.map(id => {
        const [row, seat] = id.split('-');
        const el = document.querySelector(`.seat[data-seat-id="${id}"]`);
        return { row, seat, isVip: el?.classList.contains('vip'), price: parseInt(el?.dataset.price || 350) };
    });
}

// ========== ФУНКЦИИ ВЫБОРА МЕСТ ==========
function openSeatSelection(filmTitle, time, hall, price, date, sessionId, hallNumber) {
    openSeatSelectionModal({ filmTitle, time, hall, price, date, sessionId, hallNumber, action: 'select' });
}

function openSeatSelectionForFilm(filmTitle) {
    const today = new Date().toISOString().split('T')[0];
    const session = scheduleData.find(s => s.filmTitle === filmTitle && s.day === today);
    if (!session) {
        showNotification('На сегодня нет сеансов для этого фильма', 'error');
        return;
    }
    openSeatSelectionModal({ ...session, action: 'select' });
}

function openSeatSelectionModal(sessionData) {
    seatSelectionData = sessionData;
    selectedSeats = [];
    currentAction = 'select';
    isTransitioningToForm = false;
    
    const hallNum = sessionData.hallNumber || parseInt(sessionData.hall.match(/\d+/)[0]);
    
    document.getElementById('seat-film-title').textContent = sessionData.filmTitle;
    document.getElementById('seat-session-date').textContent = formatDate(sessionData.date);
    document.getElementById('seat-session-time').textContent = sessionData.time;
    document.getElementById('seat-hall-number').textContent = sessionData.hall;
    
    const layout = generateSeatLayout(hallNum);
    const occupied = getOccupiedSeatsForSession(sessionData.sessionId);
    
    renderSeatGrid(layout, occupied);
    updateSeatSelectionUI();
    
    document.getElementById('selection-action-buttons').innerHTML = `
        <button class="book-btn-action" onclick="setActionAndProceed('book')"><i class="fas fa-calendar-check"></i> Забронировать</button>
        <button class="buy-btn-action" onclick="setActionAndProceed('buy')"><i class="fas fa-shopping-cart"></i> Купить</button>
    `;
    
    document.getElementById('seat-selection-modal').classList.add('show');
    document.body.style.overflow = 'hidden';
}

function setActionAndProceed(action) {
    if (selectedSeats.length === 0) {
        showNotification('Пожалуйста, выберите места', 'error');
        return;
    }
    currentAction = action;
    isTransitioningToForm = true;
    if (action === 'book') openBookingForm();
    else openBuyForm();
}

function closeSeatSelectionModal() {
    if (!isTransitioningToForm) {
        seatSelectionData = null;
        selectedSeats = [];
        currentAction = 'select';
    }
    document.getElementById('seat-selection-modal').classList.remove('show');
    document.body.style.overflow = 'auto';
}

function renderSeatGrid(layout, occupiedSeats) {
    const grid = document.getElementById('seats-grid');
    if (!grid) return;
    grid.innerHTML = '';
    
    for (let row = 1; row <= layout.rows; row++) {
        const rowDiv = document.createElement('div');
        rowDiv.className = 'seat-row';
        
        const label = document.createElement('div');
        label.className = 'row-label';
        label.textContent = row;
        rowDiv.appendChild(label);
        
        for (let seat = 1; seat <= layout.seatsPerRow; seat++) {
            if (seat === layout.aisleSeat) {
                const aisle = document.createElement('div');
                aisle.className = 'aisle-label';
                aisle.textContent = 'проход';
                rowDiv.appendChild(aisle);
            }
            
            const seatId = `${row}-${seat}`;
            const isVip = layout.vipRows.includes(row);
            const isOccupied = occupiedSeats.includes(seatId);
            const isSelected = selectedSeats.includes(seatId);
            
            const seatEl = document.createElement('div');
            seatEl.className = `seat ${isVip ? 'vip' : 'available'} ${isOccupied ? 'occupied' : ''} ${isSelected ? 'selected' : ''}`;
            seatEl.textContent = seat;
            seatEl.dataset.seatId = seatId;
            seatEl.dataset.price = isVip ? seatPrices.vip : seatPrices.standard;
            
            if (!isOccupied) {
                seatEl.onclick = () => toggleSeatSelection(seatId);
            }
            rowDiv.appendChild(seatEl);
        }
        grid.appendChild(rowDiv);
        
        if (row % 3 === 0 && row < layout.rows) {
            const spacing = document.createElement('div');
            spacing.className = 'row-spacing';
            grid.appendChild(spacing);
        }
    }
}

function toggleSeatSelection(seatId) {
    const idx = selectedSeats.indexOf(seatId);
    if (idx === -1) {
        if (selectedSeats.length >= 6) {
            showNotification('Можно выбрать не более 6 мест', 'error');
            return;
        }
        selectedSeats.push(seatId);
    } else {
        selectedSeats.splice(idx, 1);
    }
    const el = document.querySelector(`.seat[data-seat-id="${seatId}"]`);
    if (el) el.classList.toggle('selected');
    updateSeatSelectionUI();
}

function updateSeatSelectionUI() {
    document.getElementById('selected-seats-count').textContent = selectedSeats.length;
    const progress = (selectedSeats.length / 6) * 100;
    document.getElementById('seat-progress-fill').style.width = `${progress}%`;
    
    const seatsList = document.getElementById('selected-seats-items');
    if (selectedSeats.length > 0) {
        seatsList.innerHTML = selectedSeats.map(id => {
            const [row, seat] = id.split('-');
            const el = document.querySelector(`.seat[data-seat-id="${id}"]`);
            const price = el?.dataset.price || 350;
            const isVip = el?.classList.contains('vip');
            return `<div class="selected-seat-item">Ряд ${row}, Место ${seat} ${isVip ? '(VIP)' : ''} (${price} руб.)</div>`;
        }).join('');
    } else {
        seatsList.textContent = 'Не выбрано';
    }
    document.getElementById('seat-total-price').textContent = `${calculateTotalPrice()} руб.`;
}

// ========== ФОРМЫ БРОНИРОВАНИЯ И ПОКУПКИ ==========
function openBookingForm() {
    if (selectedSeats.length === 0 || !seatSelectionData) {
        showNotification('Ошибка: выберите места', 'error');
        isTransitioningToForm = false;
        return;
    }
    
    document.getElementById('booking-film-title').textContent = seatSelectionData.filmTitle;
    document.getElementById('booking-session-info').textContent = `${formatDate(seatSelectionData.date)}, ${seatSelectionData.time}`;
    document.getElementById('booking-seats-info').textContent = selectedSeats.map(s => {
        const [row, seat] = s.split('-');
        return `Ряд ${row}, Место ${seat}`;
    }).join('; ');
    document.getElementById('booking-total-price').textContent = `${calculateTotalPrice()} руб.`;
    
    closeSeatSelectionModal();
    setTimeout(() => {
        document.getElementById('booking-modal').classList.add('show');
        document.body.style.overflow = 'hidden';
        isTransitioningToForm = false;
    }, 100);
}

function closeBookingModal() {
    document.getElementById('booking-modal').classList.remove('show');
    document.body.style.overflow = 'auto';
    seatSelectionData = null;
    selectedSeats = [];
}

function openBuyForm() {
    if (selectedSeats.length === 0 || !seatSelectionData) {
        showNotification('Ошибка: выберите места', 'error');
        isTransitioningToForm = false;
        return;
    }
    
    document.getElementById('buy-film-title').textContent = seatSelectionData.filmTitle;
    document.getElementById('buy-session-info').textContent = `${formatDate(seatSelectionData.date)}, ${seatSelectionData.time}`;
    document.getElementById('buy-seats-info').textContent = selectedSeats.map(s => {
        const [row, seat] = s.split('-');
        return `Ряд ${row}, Место ${seat}`;
    }).join('; ');
    document.getElementById('buy-total-price').textContent = `${calculateTotalPrice()} руб.`;
    
    closeSeatSelectionModal();
    setTimeout(() => {
        document.getElementById('buy-modal').classList.add('show');
        document.body.style.overflow = 'hidden';
        isTransitioningToForm = false;
    }, 100);
}

function closeBuyModal() {
    document.getElementById('buy-modal').classList.remove('show');
    document.body.style.overflow = 'auto';
    seatSelectionData = null;
    selectedSeats = [];
}

// ========== ДЕТАЛИ ФИЛЬМА ==========
function openFilmDetails(filmTitle) {
    const film = filmsWithDetails.find(f => f.title === filmTitle);
    if (!film) return;
    
    document.getElementById('film-details-content').innerHTML = `
        <div class="film-details-content">
            <div class="film-poster"><img src="${film.posterUrl}" alt="${film.title}"></div>
            <div class="film-info">
                <h2 class="film-title">${film.title}</h2>
                <div class="film-meta">
                    <div class="meta-item"><i class="fas fa-clock"></i> ${film.duration}</div>
                    <div class="meta-item"><i class="fas fa-user-tie"></i> ${film.director}</div>
                </div>
                <div class="rating">
                    <div class="rating-item"><span class="rating-value">${film.ratingKp}</span><span class="rating-label">КиноПоиск</span></div>
                    <div class="rating-item"><span class="rating-value">${film.ratingImdb}</span><span class="rating-label">IMDb</span></div>
                </div>
                <div class="film-description">${film.fullDescription}</div>
                <button class="watch-trailer-btn" onclick="window.open('https://www.kinopoisk.ru/', '_blank')">
                    <i class="fas fa-play"></i> Смотреть трейлер
                </button>
            </div>
        </div>
    `;
    document.getElementById('film-details-modal').classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeFilmDetailsModal() {
    document.getElementById('film-details-modal').classList.remove('show');
    document.body.style.overflow = 'auto';
}

function showConfirmation(type, data) {
    document.getElementById('confirmation-title').textContent = type === 'book' ? 'Бронирование подтверждено!' : 'Покупка успешно оформлена!';
    document.getElementById('confirmation-message').textContent = type === 'book' 
        ? 'Информация о бронировании отправлена на ваш email. Бронь действует 30 минут.'
        : 'Билеты отправлены на ваш email. Сохраните номер покупки.';
    
    document.getElementById('confirmation-details').innerHTML = `
        <p><strong>Фильм:</strong> ${data.filmTitle}</p>
        <p><strong>Дата и время:</strong> ${formatDate(data.date)}, ${data.time}</p>
        <p><strong>Зал:</strong> ${data.hall}</p>
        <p><strong>Места:</strong> ${data.seats.map(s => `Ряд ${s.row}, Место ${s.seat}`).join(', ')}</p>
        <p><strong>Стоимость:</strong> ${data.totalPrice} руб.</p>
    `;
    document.getElementById('confirmation-id').textContent = data.transactionId;
    document.getElementById('confirmation-modal').classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeConfirmationModal() {
    document.getElementById('confirmation-modal').classList.remove('show');
    document.body.style.overflow = 'auto';
    updateSchedule();
}

// ========== ОТЗЫВЫ ==========
let allReviews = [];
let displayedReviews = 6;
let currentReviewRating = 0;
const reviewRatingTexts = ['Очень плохо', 'Плохо', 'Нормально', 'Хорошо', 'Отлично!'];

function generateReviewId() { return 'REV-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9); }

function loadReviewsFromStorage() {
    try { return JSON.parse(localStorage.getItem('cinemaReviews')) || []; } 
    catch(e) { return []; }
}

function saveReviewsToStorage() {
    try { localStorage.setItem('cinemaReviews', JSON.stringify(allReviews)); } 
    catch(e) {}
}

function addDemoReviews() {
    allReviews = [
        { id: generateReviewId(), author: 'Анна Петрова', rating: 5, film: 'Алиса в стране чудес', text: 'Отличный кинотеатр! Очень удобные кресла, качественный звук.', date: '2024-01-15', likes: 24, isLiked: false },
        { id: generateReviewId(), author: 'Иван Сидоров', rating: 4, film: 'Матрица: Воскрешение', text: 'Хороший кинотеатр, но дороговато.', date: '2024-01-10', likes: 15, isLiked: false },
        { id: generateReviewId(), author: 'Мария Иванова', rating: 5, film: 'Доктор Стрэндж 2', text: 'Лучший кинотеатр в городе!', date: '2024-01-05', likes: 31, isLiked: false },
        { id: generateReviewId(), author: 'Сергей Козлов', rating: 3, film: 'Иллюзия обмана 3', text: 'Нормально, но попкорн вкусный.', date: '2024-01-02', likes: 8, isLiked: false },
        { id: generateReviewId(), author: 'Елена Васнецова', rating: 5, film: 'Эльф и украденное Рождество', text: 'Детям очень понравилось! Вернёмся ещё.', date: '2023-12-28', likes: 19, isLiked: false },
        { id: generateReviewId(), author: 'Дмитрий Орлов', rating: 4, film: '', text: 'Хороший кинотеатр за свои деньги. Рекомендую.', date: '2023-12-25', likes: 12, isLiked: false },
        { id: generateReviewId(), author: 'Ольга Смирнова', rating: 5, film: 'Семь вёрст до рассвета', text: 'Очень сильный фильм! Добронравов великолепен. Атмосфера зимнего леса передана потрясающе.', date: '2024-02-20', likes: 7, isLiked: false },
        { id: generateReviewId(), author: 'Алексей Морозов', rating: 4, film: 'Хокум', text: 'Хоррор действительно атмосферный. Саундтрек и картинка на высоте. Пару моментов реально напугали.', date: '2024-02-18', likes: 5, isLiked: false },
        { id: generateReviewId(), author: 'Екатерина Власова', rating: 5, film: 'Семь вёрст до рассвета', text: 'Тронуло до глубины души. Военная драма показана без пафоса, очень жизненно. Обязательно посмотрите!', date: '2024-02-15', likes: 11, isLiked: false }
    ];
}

function getStarsHTML(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) stars += '<i class="fas fa-star"></i>';
        else if (i - 0.5 === rating) stars += '<i class="fas fa-star-half-alt"></i>';
        else stars += '<i class="far fa-star"></i>';
    }
    return stars;
}

function renderReviews() {
    const grid = document.getElementById('reviews-grid');
    if (!grid) return;
    
    const toShow = allReviews.slice(0, displayedReviews);
    if (toShow.length === 0) {
        grid.innerHTML = '<div class="no-reviews-message"><i class="fas fa-comments"></i><p>Пока нет отзывов. Будьте первым!</p></div>';
        return;
    }
    
    grid.innerHTML = toShow.map(r => `
        <div class="review-card">
            <div class="review-card-header">
                <div class="review-author">
                    <div class="author-avatar">${r.author.charAt(0)}</div>
                    <div class="author-info">
                        <h4>${r.author}</h4>
                        <div class="review-date">${new Date(r.date).toLocaleDateString('ru-RU')}</div>
                    </div>
                </div>
                <div class="review-rating">${getStarsHTML(r.rating)}</div>
            </div>
            ${r.film ? `<div class="review-film"><i class="fas fa-film"></i> ${r.film}</div>` : ''}
            <div class="review-text">${r.text}</div>
            <div class="review-actions">
                <button class="like-btn ${r.isLiked ? 'liked' : ''}" onclick="toggleLike('${r.id}')">
                    <i class="fas fa-heart"></i> <span>${r.likes}</span>
                </button>
                <button class="report-btn" onclick="reportReview('${r.id}')">
                    <i class="fas fa-flag"></i> Пожаловаться
                </button>
            </div>
        </div>
    `).join('');
}

function updateRatingStats() {
    if (allReviews.length === 0) return;
    const avg = allReviews.reduce((s, r) => s + r.rating, 0) / allReviews.length;
    const ratingNumber = document.querySelector('.rating-number');
    const ratingCount = document.querySelector('.rating-count');
    if (ratingNumber) ratingNumber.textContent = avg.toFixed(1);
    if (ratingCount) ratingCount.textContent = `На основе ${allReviews.length} отзывов`;
}

function initializeReviews() {
    allReviews = loadReviewsFromStorage();
    
    if (allReviews.length < 9) {
        console.log('Добавляем демо-отзывы, было:', allReviews.length);
        addDemoReviews();
        saveReviewsToStorage();
    } else {
        console.log('Загружено отзывов из хранилища:', allReviews.length);
    }
    
    renderReviews();
    updateRatingStats();
}

function toggleLike(id) {
    const r = allReviews.find(r => r.id === id);
    if (r) {
        r.isLiked = !r.isLiked;
        r.likes += r.isLiked ? 1 : -1;
        saveReviewsToStorage();
        renderReviews();
    }
}

function reportReview(id) {
    if (confirm('Пожаловаться на этот отзыв?')) alert('Жалоба отправлена');
}

function loadMoreReviews() {
    console.log('Загрузка еще отзывов...');
    console.log('Сейчас показано:', displayedReviews);
    console.log('Всего отзывов:', allReviews.length);
    
    if (displayedReviews >= allReviews.length) {
        console.log('Больше нет отзывов для загрузки');
        const loadMoreContainer = document.querySelector('.reviews-load-more');
        if (loadMoreContainer) loadMoreContainer.style.display = 'none';
        return;
    }
    
    displayedReviews = Math.min(displayedReviews + 3, allReviews.length);
    console.log('Теперь показываем:', displayedReviews, 'отзывов');
    renderReviews();
}

function openReviewForm() {
    currentReviewRating = 0;
    document.getElementById('review-form').reset();
    document.getElementById('review-rating-value').value = '0';
    document.getElementById('rating-text').textContent = 'Выберите оценку';
    document.querySelectorAll('#review-stars i').forEach(s => s.className = 'far fa-star');
    document.getElementById('review-modal').classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeReviewModal() {
    document.getElementById('review-modal').classList.remove('show');
    document.body.style.overflow = 'auto';
}

function initStarRating() {
    const stars = document.querySelectorAll('#review-stars i');
    const ratingValue = document.getElementById('review-rating-value');
    const ratingText = document.getElementById('rating-text');
    if (!stars.length) return;
    
    stars.forEach(star => {
        star.onmouseover = () => {
            const r = parseInt(star.dataset.rating);
            stars.forEach((s, i) => s.className = i < r ? 'fas fa-star' : 'far fa-star');
            ratingText.textContent = reviewRatingTexts[r - 1];
        };
        star.onclick = () => {
            currentReviewRating = parseInt(star.dataset.rating);
            ratingValue.value = currentReviewRating;
            stars.forEach((s, i) => s.className = i < currentReviewRating ? 'fas fa-star active' : 'far fa-star');
            ratingText.textContent = reviewRatingTexts[currentReviewRating - 1];
        };
    });
    
    document.getElementById('review-stars').onmouseleave = () => {
        if (currentReviewRating === 0) {
            stars.forEach(s => s.className = 'far fa-star');
            ratingText.textContent = 'Выберите оценку';
        }
    };
}

function initReviewForm() {
    const form = document.getElementById('review-form');
    const textarea = document.getElementById('review-text');
    const charCount = document.getElementById('char-count');
    if (!form) return;
    
    if (textarea && charCount) {
        textarea.oninput = () => {
            charCount.textContent = textarea.value.length;
            if (textarea.value.length > 1000) textarea.value = textarea.value.substring(0, 1000);
        };
    }
    
    form.onsubmit = (e) => {
        e.preventDefault();
        const name = document.getElementById('review-author-name').value.trim();
        const rating = parseInt(document.getElementById('review-rating-value').value);
        const film = document.getElementById('review-film').value;
        const text = document.getElementById('review-text').value.trim();
        
        if (!name || !rating || !text || text.length < 10) {
            alert('Заполните все поля корректно');
            return;
        }
        
        allReviews.unshift({
            id: generateReviewId(), author: name, rating, film, text,
            date: new Date().toISOString().split('T')[0], likes: 0, isLiked: false
        });
        saveReviewsToStorage();
        displayedReviews = 6;
        renderReviews();
        updateRatingStats();
        closeReviewModal();
        form.reset();
        if (charCount) charCount.textContent = '0';
        currentReviewRating = 0;
        alert('Спасибо за отзыв!');
    };
}

// ========== АВТОРИЗАЦИЯ ==========
function initAuthUI() {
    initAuth();
    const btn = document.getElementById('user-menu-btn');
    const dropdown = document.getElementById('user-dropdown-content');
    if (btn && dropdown) {
        btn.onclick = (e) => { e.stopPropagation(); dropdown.classList.toggle('show'); };
        document.onclick = (e) => { if (!btn.contains(e.target)) dropdown.classList.remove('show'); };
    }
}

function openLoginModal() { document.getElementById('login-modal').classList.add('show'); document.body.style.overflow = 'hidden'; }
function closeLoginModal() { document.getElementById('login-modal').classList.remove('show'); document.body.style.overflow = 'auto'; }
function openRegisterModal() { document.getElementById('register-modal').classList.add('show'); document.body.style.overflow = 'hidden'; }
function closeRegisterModal() { document.getElementById('register-modal').classList.remove('show'); document.body.style.overflow = 'auto'; }
function openForgotPasswordModal() { closeLoginModal(); document.getElementById('forgot-password-modal').classList.add('show'); document.body.style.overflow = 'hidden'; }
function closeForgotPasswordModal() { document.getElementById('forgot-password-modal').classList.remove('show'); document.body.style.overflow = 'auto'; }
function switchToRegister() { closeLoginModal(); openRegisterModal(); }
function switchToLogin() { closeRegisterModal(); openLoginModal(); }
function closeProfileModal() { document.getElementById('profile-modal').classList.remove('show'); document.body.style.overflow = 'auto'; }
function closeMyBookingsModal() { document.getElementById('my-bookings-modal').classList.remove('show'); document.body.style.overflow = 'auto'; }

async function showUserProfile() {
    const user = getCurrentUser();
    if (!user) return;
    const bookings = await getUserBookings(user.uid);
    const data = JSON.parse(localStorage.getItem('currentUser') || '{}');
    document.getElementById('profile-content').innerHTML = `
        <div class="profile-info">
            <div class="profile-avatar"><i class="fas fa-user"></i></div>
            <div class="profile-name">${data.name || ''} ${data.surname || ''}</div>
            <div class="profile-email">${user.email}</div>
        </div>
        <div class="profile-stats">
            <div class="stat-card"><div class="stat-number">${bookings.length}</div><div class="stat-label">Билетов</div></div>
        </div>
        <button class="ok-btn" onclick="closeProfileModal()">Закрыть</button>
    `;
    document.getElementById('profile-modal').classList.add('show');
    document.body.style.overflow = 'hidden';
    document.getElementById('user-dropdown-content')?.classList.remove('show');
}

async function showMyBookings() {
    const user = getCurrentUser();
    if (!user) return;
    const bookings = await getUserBookings(user.uid);
    const container = document.getElementById('my-bookings-content');
    if (bookings.length === 0) {
        container.innerHTML = `<div class="empty-bookings"><i class="fas fa-ticket-alt"></i><p>У вас пока нет билетов</p><button class="submit-btn" onclick="closeMyBookingsModal()">Закрыть</button></div>`;
    } else {
        container.innerHTML = bookings.map(b => `
            <div class="booking-item">
                <div class="booking-header"><div class="booking-film">${b.filmTitle}</div><div class="booking-type ${b.type}">${b.type === 'booking' ? 'Бронь' : 'Куплен'}</div></div>
                <div class="booking-details"><div class="booking-detail"><i class="fas fa-calendar"></i> ${formatDate(b.date)}, ${b.time}</div><div class="booking-detail"><i class="fas fa-video"></i> ${b.hall}</div></div>
                <div class="booking-seats"><i class="fas fa-chair"></i> ${b.seats.map(s => `${s.row} ряд ${s.seat} место`).join(', ')}</div>
                <div class="booking-footer"><div class="booking-price">${b.totalPrice} руб.</div></div>
            </div>
        `).join('');
    }
    document.getElementById('my-bookings-modal').classList.add('show');
    document.body.style.overflow = 'hidden';
    document.getElementById('user-dropdown-content')?.classList.remove('show');
}

async function logout() {
    const result = await logoutUser();
    if (result.success) showNotification('Вы вышли из аккаунта', 'success');
}

function initAuthForms() {
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.onsubmit = async (e) => {
            e.preventDefault();
            const btn = loginForm.querySelector('.submit-btn');
            showLoading(btn);
            const res = await loginUser(document.getElementById('login-email').value, document.getElementById('login-password').value);
            hideLoading(btn);
            if (res.success) { showNotification(res.message, 'success'); closeLoginModal(); loginForm.reset(); }
            else showNotification(res.message, 'error');
        };
    }
    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.onsubmit = async (e) => {
            e.preventDefault();
            const pwd = document.getElementById('register-password').value;
            const confirm = document.getElementById('register-confirm-password').value;
            if (pwd !== confirm) { showNotification('Пароли не совпадают', 'error'); return; }
            const btn = registerForm.querySelector('.submit-btn');
            showLoading(btn);
            const res = await registerUser(
                document.getElementById('register-email').value, pwd,
                document.getElementById('register-name').value,
                document.getElementById('register-surname').value,
                document.getElementById('register-phone').value
            );
            hideLoading(btn);
            if (res.success) { showNotification(res.message, 'success'); closeRegisterModal(); registerForm.reset(); }
            else showNotification(res.message, 'error');
        };
    }
    const forgotForm = document.getElementById('forgot-password-form');
    if (forgotForm) {
        forgotForm.onsubmit = async (e) => {
            e.preventDefault();
            const btn = forgotForm.querySelector('.submit-btn');
            showLoading(btn);
            const res = await resetPassword(document.getElementById('reset-email').value);
            hideLoading(btn);
            if (res.success) { showNotification(res.message, 'success'); closeForgotPasswordModal(); forgotForm.reset(); }
            else showNotification(res.message, 'error');
        };
    }
}

// ========== DOM CONTENT LOADED ==========
document.addEventListener('DOMContentLoaded', function() {
    allBookings = loadBookingsFromStorage();
    renderCarousel();
    generateScheduleData();
    
    const today = new Date().toISOString().split('T')[0];
    const dateInput = document.getElementById('selected-date');
    if (dateInput) {
        dateInput.value = today;
        dateInput.min = today;
        const max = new Date();
        max.setMonth(max.getMonth() + 2);
        dateInput.max = max.toISOString().split('T')[0];
    }
    
    updateSchedule();
    initializeReviews();
    initStarRating();
    initReviewForm();
    initAuthUI();
    initAuthForms();

    setInterval(() => {
        updateSchedule();
    }, 60000);

    const pm = document.getElementById('payment-method');
    const cd = document.getElementById('card-details');
    if (pm && cd) pm.onchange = () => cd.classList.toggle('active', pm.value === 'card');
    
    // Обработчики форм бронирования и покупки
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        bookingForm.onsubmit = async (e) => {
            e.preventDefault();
            if (!selectedSeats.length || !seatSelectionData) {
                showNotification('Ошибка: выберите места', 'error');
                return;
            }
            const bookingData = {
                ...seatSelectionData,
                clientName: document.getElementById('booking-client-name').value,
                clientPhone: document.getElementById('booking-client-phone').value,
                clientEmail: document.getElementById('booking-client-email').value,
                seats: getSeatDetails(),
                totalPrice: calculateTotalPrice(),
                transactionId: generateTransactionId('BK-'),
                type: 'booking'
            };
            allBookings.push(bookingData);
            saveBookingsToStorage();
            const user = getCurrentUser();
            if (user) await saveBookingToFirestore(bookingData, user.uid);
            showConfirmation('book', bookingData);
            closeBookingModal();
            bookingForm.reset();
            seatSelectionData = null;
            selectedSeats = [];
        };
        initBackToTopButton();

    }
    
    const buyForm = document.getElementById('buy-form');
    if (buyForm) {
        buyForm.onsubmit = async (e) => {
            e.preventDefault();
            if (!selectedSeats.length || !seatSelectionData) {
                showNotification('Ошибка: выберите места', 'error');
                return;
            }
            const buyData = {
                ...seatSelectionData,
                clientName: document.getElementById('buy-client-name').value,
                clientPhone: document.getElementById('buy-client-phone').value,
                clientEmail: document.getElementById('buy-client-email').value,
                paymentMethod: document.getElementById('payment-method').value,
                seats: getSeatDetails(),
                totalPrice: calculateTotalPrice(),
                transactionId: generateTransactionId('TICKET-'),
                type: 'purchase'
            };
            allBookings.push(buyData);
            saveBookingsToStorage();
            const user = getCurrentUser();
            if (user) await saveBookingToFirestore(buyData, user.uid);
            showConfirmation('buy', buyData);
            closeBuyModal();
            buyForm.reset();
            if (cd) cd.classList.remove('active');
            seatSelectionData = null;
            selectedSeats = [];
        };
    }
});

// ========== ГЛОБАЛЬНЫЕ ФУНКЦИИ ДЛЯ HTML ==========
window.openLoginModal = openLoginModal;
window.closeLoginModal = closeLoginModal;
window.openRegisterModal = openRegisterModal;
window.closeRegisterModal = closeRegisterModal;
window.openForgotPasswordModal = openForgotPasswordModal;
window.closeForgotPasswordModal = closeForgotPasswordModal;
window.switchToRegister = switchToRegister;
window.switchToLogin = switchToLogin;
window.closeProfileModal = closeProfileModal;
window.closeMyBookingsModal = closeMyBookingsModal;
window.showUserProfile = showUserProfile;
window.showMyBookings = showMyBookings;
window.logout = logout;
window.openReviewForm = openReviewForm;
window.closeReviewModal = closeReviewModal;
window.toggleLike = toggleLike;
window.reportReview = reportReview;
window.nextSlide = nextSlide;
window.prevSlide = prevSlide;
window.goToSlide = goToSlide;
window.updateSchedule = updateSchedule;
window.scrollToTop = scrollToTop;
window.closeSeatSelectionModal = closeSeatSelectionModal;
window.closeBookingModal = closeBookingModal;
window.closeBuyModal = closeBuyModal;
window.closeFilmDetailsModal = closeFilmDetailsModal;
window.closeConfirmationModal = closeConfirmationModal;
window.setActionAndProceed = setActionAndProceed;
window.openSeatSelectionForFilm = openSeatSelectionForFilm;
window.openSeatSelection = openSeatSelection;
window.openFilmDetails = openFilmDetails;
window.openBookingForm = openBookingForm;
window.openBuyForm = openBuyForm;
window.loadMoreReviews = loadMoreReviews;

const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
    @keyframes slideOutRight { from { transform: translateX(0); opacity: 1; } to { transform: translateX(100%); opacity: 0; } }
    @keyframes spin { to { transform: rotate(360deg); } }
    .submit-btn.loading { position: relative; color: transparent !important; }
    .submit-btn.loading::after { content: ''; position: absolute; width: 20px; height: 20px; top: 50%; left: 50%; margin: -10px 0 0 -10px; border: 2px solid #fff; border-top-color: transparent; border-radius: 50%; animation: spin 1s linear infinite; }
`;
document.head.appendChild(style);

console.log('Кинотеатр "Звездный" успешно загружен!');