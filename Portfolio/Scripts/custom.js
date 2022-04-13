$(document).ready(function() {
  $('#menuTree ul')
    .hide()
    .prev('span')
    .before('<span></span>')
    .prev()
    .addClass('handle closed')
    .click(function() {
      // plus/minus handle click
      $(this)
        .toggleClass('closed opened')
        .nextAll('ul')
        .toggle();
    });
	$('#signup form').validate({
    rules: {
      name: {
        required: true
      },
      email: {
        required: true,
        email: true
      },
      phone: {
		required: false,
        phone: true
      },
    },
    success: function(label) {
      label.text('OK!').addClass('valid');
    }
  });
   $('input.clear').each(function() {
    $(this)
      .data('default', $(this).val())
      .addClass('inactive')
      .focus(function() {
        $(this).removeClass('inactive');
        if($(this).val() === $(this).data('default') || $(this).val() === '') {
          $(this).val('');
        }
      })
      .blur(function() {
        if($(this).val() === '') {
          $(this).addClass('inactive').val($(this).data('default'));
        }
      });
  });
  var states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District of Columbia', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
  $('#location').autocomplete(states,{
    autoFill: true,
    selectFirst: true,
    width: '240px'
  });
});
