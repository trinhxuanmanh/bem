function toast({
            title = 'Success',
            message = 'Nhạc Baroque Giúp Bạn Tập Trung Học Tập Và Làm Việc',
            type = 'info',
            duration = 3000
        }){
            const main =document.getElementById('toast')
            if(main){
                const toast = document.createElement('div');

                //Auto remove toast
                setTimeout(function() {
                    main.removeChild(toast);
                },duration + 1000)

                //Remove toast when clicked
                toast.onclick = function(e){
                    if (e.target.closest('.toast__close')){
                        main.removeChild(toast);
                        clearTimeout(autoRemoveId)
                    }
                }
                const icons = {
                    success : 'fas fa-check-circle',
                    info: `fas fa-info-circle`,
                    warning: `fas fa-exclamation`,
                    error: `fas fa-exclamation`,
                };
                const icon = icons[type];
                const delay = (duration / 1000).toFixed(2);
                toast.classList.add('toast', `toast--${type}`);
                toast.style.animation = `slideInleft ease .3s, fadeOut linear 1s ${delay}s forwards`;
                toast.innerHTML = `
                <div class="toast__icon">
                    <i class="${icon}" aria-hidden="true"></i>
                </div>
                <div class="toast__body">
                    <h1 class="toast__title">${title}</h1>
                    <p class="toast__msg">${message}</p>
                </div>
                <div class="toast__close">
                    <i class="fa fa-times" aria-hidden="true"></i>
                </div>
                `;
                main.appendChild(toast)
            }
        }

        
        function showSuccessToast(){
            toast({
            title: 'Success',
            message: 'dăng kí thành công',
            type: 'success',
            duration: 3000
        });
        }
        function showWarningToast(){
            toast({
            title: 'Cảnh báo',
            message: 'đăng kí thất bại',
            type: 'warning',
            duration: 5000
        });
        }
        function showErrorToast(){
            toast({
            title: 'Thất bại',
            message: 'đăng kí thất bại',
            type: 'error',
            duration: 5000
        });
        }  