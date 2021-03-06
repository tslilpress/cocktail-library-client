const store = require('./../store')

const onSignUpSuccess = function (res) {
  $('#sign-up-form').trigger('reset')
  $('#message').text(`Thanks for signing up ${res.user.email}! Sign in!`)
  $('#sign-up-form').hide()
  $('#sign-in-form').show()
}

const onSignUpFailure = function (err) {
  $('#message').text('Oops, something went wrong. Try again.')
  setTimeout(() => {
    $('#message').text('')
  }, 5000)
  $('#sign-up-form').trigger('reset')
}

const onSignInSuccess = function (res) {
  store.user = res.user
  $('#message').text(`Welcome ${res.user.email}!`)
  $('#sign-in-form').trigger('reset')
  $('.navbar').show(700)
  $('#change-password').show()
  $('#sign-out-form').show()
  $('#sign-in-form').hide(700)
  $('#sign-up-form').hide()
}

const onSignInFailure = function (err) {
  $('#message').text('Oops, something went wrong. Try again.')
  setTimeout(() => {
    $('#message').text('')
  }, 5000)
  $('#sign-in-form').trigger('reset')
}

const onChangePasswordSuccess = function (res) {
  $('#password-message').text('Password changed!')
  $('#change-password').trigger('reset')
  setTimeout(() => {
    $('#password-message').text('')
  }, 2000)
}

const onChangePasswordFailure = function (res) {
  $('#password-message').text('Oops something went wrong, Try again.')
  $('#change-password').trigger('reset')
  setTimeout(() => {
    $('#password-message').text('')
  }, 2000)
}

const onSignOutSuccess = function (res) {
  $('#message').text('You signed out!')
  setTimeout(() => {
    $('#message').text('')
  }, 5000)
  $('#sign-up-form').trigger('reset')
  $('#change-password').hide()
  $('#sign-out-form').hide()
  $('#sign-up-form').show()
  $('.navbar').hide(1000)
}

const onSignOutFailure = function (res) {
  $('#message').text('Oops something went wrong, Try again.')
  $('#sign-in-form').show()
}


module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}
