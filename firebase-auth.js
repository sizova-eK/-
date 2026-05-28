// firebase-auth.js
import { 
    auth, 
    db,
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut,
    onAuthStateChanged,
    sendEmailVerification,
    sendPasswordResetEmail,
    updateProfile,
    doc,
    setDoc,
    getDoc,
    Timestamp
} from './firebase-config.js';

// Текущий пользователь
let currentUser = null;

// Инициализация отслеживания состояния пользователя
export function initAuth() {
    onAuthStateChanged(auth, async (user) => {
        if (user) {
            currentUser = user;
            console.log('Пользователь вошел:', user.email);
            
            // Получаем дополнительные данные из Firestore
            const userDoc = await getDoc(doc(db, 'users', user.uid));
            const userData = userDoc.data();
            
            // Обновляем UI
            updateUIForLoggedInUser(user, userData);
            
            // Сохраняем данные в localStorage
            localStorage.setItem('currentUser', JSON.stringify({
                uid: user.uid,
                email: user.email,
                name: userData?.name,
                surname: userData?.surname
            }));
        } else {
            currentUser = null;
            console.log('Пользователь вышел');
            updateUIForLoggedOutUser();
            localStorage.removeItem('currentUser');
        }
    });
}

// Обновление UI для авторизованного пользователя
function updateUIForLoggedInUser(user, userData) {
    const guestDiv = document.getElementById('user-guest');
    const loggedDiv = document.getElementById('user-logged');
    const userNameSpan = document.getElementById('user-name');
    
    if (guestDiv && loggedDiv) {
        guestDiv.style.display = 'none';
        loggedDiv.style.display = 'block';
        
        if (userNameSpan && userData) {
            const fullName = `${userData.name || ''} ${userData.surname || ''}`.trim();
            userNameSpan.textContent = fullName || user.email.split('@')[0];
        }
    }
}

// Обновление UI для неавторизованного пользователя
function updateUIForLoggedOutUser() {
    const guestDiv = document.getElementById('user-guest');
    const loggedDiv = document.getElementById('user-logged');
    
    if (guestDiv && loggedDiv) {
        guestDiv.style.display = 'flex';
        loggedDiv.style.display = 'none';
    }
}

// Регистрация пользователя
export async function registerUser(email, password, name, surname, phone) {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        
        // Обновляем профиль
        await updateProfile(user, { displayName: `${name} ${surname}` });
        
        // Сохраняем в Firestore
        await setDoc(doc(db, 'users', user.uid), {
            name: name,
            surname: surname,
            email: email,
            phone: phone || '',
            createdAt: Timestamp.now(),
            bookings: []
        });
        
        // Отправляем email для подтверждения
        await sendEmailVerification(user);
        
        return { success: true, message: 'Регистрация успешна! Подтвердите email.' };
    } catch (error) {
        console.error('Ошибка регистрации:', error);
        let message = 'Ошибка регистрации';
        switch (error.code) {
            case 'auth/email-already-in-use':
                message = 'Этот email уже зарегистрирован';
                break;
            case 'auth/invalid-email':
                message = 'Неверный формат email';
                break;
            case 'auth/weak-password':
                message = 'Пароль должен содержать минимум 6 символов';
                break;
            default:
                message = error.message;
        }
        return { success: false, message };
    }
}

// Вход пользователя
export async function loginUser(email, password) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        
        if (!user.emailVerified) {
            await signOut(auth);
            return { success: false, message: 'Подтвердите email. Проверьте почту.' };
        }
        
        return { success: true, message: 'Вход выполнен!' };
    } catch (error) {
        console.error('Ошибка входа:', error);
        let message = 'Ошибка входа';
        switch (error.code) {
            case 'auth/user-not-found':
                message = 'Пользователь не найден';
                break;
            case 'auth/wrong-password':
                message = 'Неверный пароль';
                break;
            case 'auth/invalid-email':
                message = 'Неверный формат email';
                break;
            default:
                message = error.message;
        }
        return { success: false, message };
    }
}

// Выход
export async function logoutUser() {
    try {
        await signOut(auth);
        return { success: true, message: 'Выход выполнен' };
    } catch (error) {
        return { success: false, message: error.message };
    }
}

// Восстановление пароля
export async function resetPassword(email) {
    try {
        await sendPasswordResetEmail(auth, email);
        return { success: true, message: 'Ссылка для восстановления отправлена на email' };
    } catch (error) {
        let message = 'Ошибка восстановления';
        switch (error.code) {
            case 'auth/user-not-found':
                message = 'Пользователь не найден';
                break;
            case 'auth/invalid-email':
                message = 'Неверный формат email';
                break;
            default:
                message = error.message;
        }
        return { success: false, message };
    }
}

// Сохранение бронирования в Firestore
export async function saveBookingToFirestore(bookingData, userId) {
    try {
        const bookingsRef = doc(db, 'users', userId);
        const userDoc = await getDoc(bookingsRef);
        const userData = userDoc.data();
        
        const bookings = userData.bookings || [];
        const newBooking = {
            id: Date.now().toString(),
            ...bookingData,
            createdAt: Timestamp.now()
        };
        bookings.push(newBooking);
        
        await setDoc(bookingsRef, { ...userData, bookings: bookings });
        
        return { success: true, id: newBooking.id };
    } catch (error) {
        console.error('Ошибка сохранения:', error);
        return { success: false, error: error.message };
    }
}

// Получение бронирований пользователя
export async function getUserBookings(userId) {
    try {
        const userDoc = await getDoc(doc(db, 'users', userId));
        const userData = userDoc.data();
        return userData?.bookings || [];
    } catch (error) {
        console.error('Ошибка получения:', error);
        return [];
    }
}

// Получение текущего пользователя
export function getCurrentUser() {
    return auth.currentUser;
}