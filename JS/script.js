(document).ready(function () {
  $('#admissionForm').on('submit', function (e) {
    e.preventDefault();
    $('#formMessages').empty();

    const name = $('#name').val().trim();
    const age = $('#age').val();
    const dob = $('#dob').val();
    const course = $('#course').val();

    name.length === 0 && $('#formMessages').append('<p class="error">Name is required.</p>');
    !age && $('#formMessages').append('<p class="error">Age is required.</p>');
    !dob && $('#formMessages').append('<p class="error">Date of Birth is required.</p>');
    course.length === 0 && $('#formMessages').append('<p class="error">Please select a course.</p>');

    name && age && dob && course && $('#formMessages').append(`
      <div class="success">
        <h4>MCROYAL SCHOOL - Admission Confirmation</h4>
        <p>Dear <strong>${name} </strong>,</p>
        <p>Thank you for applying to <strong>Acedu College</strong>. We have successfully received your application to study <strong>${course}</strong>.</p>
        <p>Our admissions department will carefully review your details. If you meet the requirements, you will be contacted for the next stage of the process.</p>
        <p>We appreciate your interest in becoming a part of the MCROYAL community and wish you the best of luck!</p>
      </div>
    `);    
  });
});
$