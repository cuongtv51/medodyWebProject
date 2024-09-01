document.addEventListener('DOMContentLoaded', () => {
    const switchButtons = document.querySelectorAll('.auth-form__swich-btn');
    const authForms = document.querySelectorAll('.auth-form');
    const signUpForm = authForms[0];
    const signInForm = authForms[1];


// Khởi tạo hiển thị của các modal
signUpForm.style.display = 'none'; // Ẩn modal đăng ký ban đầu
signInForm.style.display = 'block'; // Hiển thị modal đăng nhập

//hàm chuyển đổi modal
    function toggleForms() {
        if (signUpForm.style.display === 'none') {
            signUpForm.style.display = 'block';
            signInForm.style.display = 'none';
        } else {
            signUpForm.style.display = 'none';
            signInForm.style.display = 'block';
        }
    }

    

    // Thêm sự kiện click cho các nút chuyển đổi
    switchButtons.forEach(button => {
        button.addEventListener('click', toggleForms);
    });
});



// hiển thị modal bằng cách ấn nút
const modalBtns = document.querySelectorAll('.js-modalOpen');
const modal = document.querySelector('.js-modal');
const modalCloses = document.querySelectorAll('.js-modalClose');
const modalContainers = document.querySelectorAll('.auth-form');
//Hàm hiển thị modal

function showModal() {
    modal.classList.add('open')
} 

//Hàm ẩn modal
function hidemodal() {
    modal.classList.remove('open')
} 

//vòng lặp lắng nghe sự kiện ng dùng
for( const modalBtn of modalBtns) {
    modalBtn.addEventListener('click', showModal)
}

for( const modalClose of modalCloses) {
    modalClose.addEventListener('click', hidemodal)
}

modal.addEventListener('click', hidemodal)

for(const modalContainer of modalContainers) {
    modalContainer.addEventListener('click', function(event){
        event.stopPropagation()
    })
}





document.addEventListener('DOMContentLoaded', () => {
    const signupBtn = document.getElementById('signup-btn');
    const signinBtn = document.getElementById('signin-btn');
    const modal = document.querySelector('.js-modal');

    // Hàm kiểm tra cú pháp email
    function isValidEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    // Hàm xử lý đăng ký
    function handleSignup() {
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;
        const confirmPassword = document.getElementById('signup-confirm-password').value;

        // Kiểm tra các trường có được điền đầy đủ không
        if (!email || !password || !confirmPassword) {
            alert('Please fill in all fields.');
            return;
        }

        // Kiểm tra cú pháp email
        if (!isValidEmail(email)) {
            alert('Invalid email format.');
            return;
        }

        // Kiểm tra mật khẩu có khớp không
        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        // Kiểm tra độ dài mật khẩu
        if (password.length < 8) {
            alert('Password must be at least 8 characters long.');
            return;
        }

        // Lấy danh sách người dùng từ localStorage hoặc khởi tạo danh sách mới
        let users = JSON.parse(localStorage.getItem('users')) || [];

        // Kiểm tra xem email đã tồn tại chưa
        const userExists = users.some(user => user.email === email);
        if (userExists) {
            alert('User already exists.');
            return;
        }

        // Thêm người dùng mới vào danh sách
        users.push({ email, password });
        localStorage.setItem('users', JSON.stringify(users));
        alert('Registration successful.');
        // Ẩn modal sau khi đăng ký thành công
        modal.style.display = 'none';
    }

    // Hàm xử lý đăng nhập
    function handleSignin() {
        const email = document.getElementById('signin-email').value;
        const password = document.getElementById('signin-password').value;

        // Kiểm tra các trường có được điền đầy đủ không
        if (!email || !password) {
            alert('Please fill in all fields.');
            return;
        }

        // Kiểm tra cú pháp email
        if (!isValidEmail(email)) {
            alert('Invalid email format.');
            return;
        }

        // Lấy danh sách người dùng từ localStorage
        let users = JSON.parse(localStorage.getItem('users')) || [];

        // Kiểm tra xem thông tin đăng nhập có hợp lệ không
        const user = users.find(user => user.email === email && user.password === password);
        if (user) {
            alert('Sign in successful.');
            // Ẩn modal sau khi đăng nhập thành công
            modal.style.display = 'none';
        } else {
            alert('Invalid email or password.');
        }
    }

    // Thêm sự kiện click cho các nút đăng ký và đăng nhập
    signupBtn.addEventListener('click', handleSignup);
    signinBtn.addEventListener('click', handleSignin);
});



