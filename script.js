document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const name = document.getElementById("name").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !phone || !message) {
        alert("يرجى ملء جميع الحقول قبل إرسال الطلب.");
        return;
      }

      alert("تم إرسال طلبك بنجاح. سنتواصل معك في أقرب وقت.");
      form.reset();
    });
  }
});
