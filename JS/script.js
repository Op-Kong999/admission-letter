
$(document).ready(function () {
  $('#admissionForm').on('submit', function (e) {
    e.preventDefault();

    const name = $('#name').val().trim();
    const age = $('#age').val();
    const dob = $('#dob').val();
    const course = $('#course').val();

    $('.name').text(name)
    $('.age').text(age)
    $('.date').text(dob)
    $('.course').text(course)

    $('#name').val('')
    $('#age').val('')
    $('#dob').val('')
    $('#course').val('')

    name.length === 0 && $('.messerror').html('<p class="error">Name is required.</p>');
    age < 14 && $('.messerror').html(`<p class="error">Age is required and it can't be less than 14 .</p>`);
    !dob && $('.messerror').html('<p class="error">Date of Birth is required.</p>');
    course.length === 0 && $('.messerror').html('<p class="error">Please select a course.</p>');

    name.length > 0 && age > 13 && dob && course.length > 0
     && $('.success').slideDown() 
     && $('#admissionForm').slideUp() 
     && $('.messerror').empty() 
 
  });

  $('.edit').on('click', function () {
    $('.success').slideUp() 
     $('#admissionForm').slideDown() 
  });
});