// $(function() {
//
//   $("#contactForm input,#contactForm textarea").jqBootstrapValidation({
//     preventSubmit: true,
//     submitError: function($form, event, errors) {
//       // additional error messages or events
//     },
//     submitSuccess: function($form, event) {
//       event.preventDefault(); // prevent default submit behaviour
//       // get values from FORM
//       var name = $("input#name").val();
//       var subject = $("input#subject").val();
//       var message = $("textarea#message").val();
//       var firstName = name; // For Success/Failure Message
//       // Check for white space in name for Success/Fail message
//       var body = message + '%0D%0A%0D%0A From:' + name
//       url = 'mailto:phscrc@gmail.com?subject='+subject+'&body='+body;
//       window.open(url);
//     },
//     filter: function() {
//       return $(this).is(":visible");
//     },
//   });
//
//   $("a[data-toggle=\"tab\"]").click(function(e) {
//     e.preventDefault();
//     $(this).tab("show");
//   });
// });
//
// /*When clicking on Full hide fail/success boxes */
// $('#name').focus(function() {
//   $('#success').html('');
// });
