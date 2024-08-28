document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Зупиняємо стандартну відправку форми
  
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const subject = document.getElementById("subject").value;
      const message = document.getElementById("message").value;
  
      const formData = {
        name: name,
        email: email,
        subject: subject,
        message: message
      };
  
      const xhr = new XMLHttpRequest();
      xhr.open("POST", "your-server-endpoint-url", true); // Замініть "your-server-endpoint-url" на URL вашого сервера
      xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          // Обробка відповіді сервера
          alert("Message sent successfully!");
        } else if (xhr.readyState === 4) {
          alert("An error occurred. Please try again.");
        }
      };
  
      xhr.send(JSON.stringify(formData));
    });
  });
  