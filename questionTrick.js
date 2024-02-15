let slideIndex = 0;

let noWords = ['Pagsure diha', 'Bawal', 'E yes na ba', 'Pag yes na diha', 'Uno ha', 'Nanasad dili e Yes', 
'Malouy ka nako e yes ba', 'Sige na love para ma okey nata', 'Mamugos nako ha e yes na'];
        let currentWordIndex = 0;

        document.getElementById('noButton').addEventListener('click', function() {
            document.getElementById('noButton').innerText = noWords[currentWordIndex];
            currentWordIndex = (currentWordIndex + 1) % noWords.length;
        });


        function showSlides(slideshowId) {
            let slides = document.getElementById(slideshowId).getElementsByClassName("mySlides");
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slideIndex++;
            if (slideIndex > slides.length) {
                slideIndex = 1;
            }
            slides[slideIndex - 1].style.display = "block";
            setTimeout(() => showSlides(slideshowId), 2000); // Change image every 2 seconds
        }

        showSlides('slideshow1'); // Initial call to start the first slideshow

        let yesButton = document.getElementById('yesButton');
        let noButton = document.getElementById('noButton');
        let fontSize = 24; // Initial font size

        noButton.addEventListener('click', () => {
            fontSize += 20; // Increase the font size by 20px
            yesButton.style.fontSize = fontSize + 'px';
        });

        yesButton.addEventListener('click', () => {
            document.getElementById('message').innerText = 'I promise to learn from our mistakes and work on being a better partner for you every day.';
            document.getElementById('message').style.fontSize = '24px';
            document.getElementById('question').style.display = 'none';
            yesButton.style.display = 'none';
            noButton.style.display = 'none';
            document.getElementById('slideshow1').style.display = 'none';
            document.getElementById('slideshow2').style.display = 'block';
            slideIndex = 0; // Reset slideIndex for the new slideshow
            showSlides('slideshow2'); // Start the second slideshow
        });