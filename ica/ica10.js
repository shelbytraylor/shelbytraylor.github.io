<script>
    const button1 = document.querySelector("button");
    
    button.addEventListener('click', changeText);

    const heading = document.querySelector("h1")

    function changeText() {
        const headingText = prompt("What are you excited for?");
        heading.textContent = headingText;
    }

    const button2 = document.querySelector("button");
    
    button.addEventListener('click', changeText);

    const heading = document.querySelector("h1")

    function changeText() {
        const headingText = prompt("What are you excited for?");
        heading.textContent = headingText;
    }
    </script>