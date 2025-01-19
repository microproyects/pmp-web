
export default function changeText() {
    
    document.addEventListener('DOMContentLoaded', function () {
        const words = ['Solutions', 'Base', 'De', 'Datos'];
        const changingText = document.getElementById('changingText');
        let currentIndex = 0;

        function changeText() {
            changingText.style.opacity = '0';
            changingText.style.transform = 'translateY(10px)';

            setTimeout(() => {
                changingText.textContent = words[currentIndex];
                changingText.style.opacity = '1';
                changingText.style.transform = 'translateY(0)';
                currentIndex = (currentIndex + 1) % words.length;
            }, 200);
        }

        setInterval(changeText, 800);
    });

}
