document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('emailInput').value;
    var contactNumber = document.getElementById('teleInput').value;
    var query = document.getElementById('textArea').value;

    // Construct WhatsApp URL
    var message = `Hello, I am ${fullName}. My email is ${email} and my contact number is ${contactNumber}. Here is my query: ${query}`;
    var whatsappURL = `https://wa.me/9309844254?text=${encodeURIComponent(message)}`;

    // Open WhatsApp with the message
    window.open(whatsappURL, '_blank');
  });