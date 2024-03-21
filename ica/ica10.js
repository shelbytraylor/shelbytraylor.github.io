
// <script>
//     const button1 = document.querySelector("button");
    
//     button.addEventListener('click', changeText);

//     const heading = document.querySelector("h1")

//     function changeText() {
//         const headingText = prompt("What are you excited for?");
//         heading.textContent = headingText;
//     }

//     const button2 = document.querySelector("button");
    
//     button.addEventListener('click', changeText);

//     const heading = document.querySelector("h1")

//     function changeText() {
//         const headingText = prompt("What are you excited for?");
//         heading.textContent = headingText;
//     }
//     </script>


<script>
    const button1 = document.querySelector(".button1");
    button1.addEventListener('click', changeText);

    const button2 = document.querySelector(".button2");
    button2.addEventListener('click', changeColor);

    const heading = document.querySelector("h1");

    function changeText() {
        const headingText = prompt("Type a funny phrase to see it as the header of the website");
        heading.textContent = "Cool!";
    }

    function changeColor() {
        const bgColor = prompt("type the word pink to see a cool effect:");
        document.body.style.backgroundColor = bgColor;
    }

</script>
