# Frontend Mentor - Ping coming soon page solution

This is a solution to the [Ping coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ping-single-column-coming-soon-page-5cadd051fec04111f7b848da). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Submit their email address using an `input` field
- Receive an error message when the `form` is submitted if:
	- The `input` field is empty. The message for this error should say *"Whoops! It looks like you forgot to add your email"*
	- The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Please provide a valid email address"*

### Screenshot

#### Desktop

![](./screenshots/desktop.jpg)

#### Mobile

![](./screenshots/mobile.jpg)

### Links

- Solution URL: [https://github.com/rontoyhacao/Ping-single-column-coming-soon-page](https://github.com/rontoyhacao/Ping-single-column-coming-soon-page)
- Live Site URL: [https://ping-single-column-coming-soon-page-git-main-rontoyhacao.vercel.app/](https://ping-single-column-coming-soon-page-git-main-rontoyhacao.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- Sass
- CSS custom properties
- Javascript
- Flexbox

### What I learned

This challenge helped my javascript skills a little bit because I'm still learning js at the moment. I was able to pull off the email validation through javascript.

```html
<form action="#" id="form">
  <div class="form-wrapper">
    <div class="form-inputContainer">
      <input class="form--style" type="email" name="emid="email" placeholder="Your email address" aria-label="EInput Field">
       <div class="emailValidate"></div>
    </div>
    <button class="form--style">Notify Me</button>
  </div>
</form>
```
```css
.form-wrapper {
  margin: 38px 0 10px;
  display: flex;
  justify-content: center;
  .form-inputContainer {
      input {
          border: 1px solid $Pale-Blue;
          width: 420px;
          &:hover {
              border-color: $Blue;
          }
          &::placeholder {
              color: $Pale-Blue;
          }
      }
      .emailValidate {
          position: absolute;
          font-style: italic;
          color: $Light-Red;
          font-size: 12px;
          padding: 8px 0 0 30px;
      }
  }
  .error {
      input {
          border: 1px solid $Light-Red;
      }
  }
  .success {
      input {
          border: 1px solid $Pale-Blue;
      }
      .emailValidate {
          color: $Green;
      }
  }
  button {
      border: none;
      background: $Blue;
      color: white;
      font-weight: 600;
      font-size: 1rem;
      width: 200px;
      margin-left: 15px;
      cursor: pointer;
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
      &:hover {
          opacity: 0.8;
      }
  }
}
```
```js
function checkInputs() {
	// trim to remove the whitespaces
	const emailValue = email.value.trim();
	
	if(emailValue == '') {
		setErrorFor(email, 'Please enter an email address');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Please provide a valid email address');
	} else {
		setSuccessFor(email, 'Email address sent! We will have you notified');
	}
	
}
```

### Useful resources

- [Email Validation Check in HTML CSS & JavaScript by CodingNepal](https://www.youtube.com/watch?v=qGzJtVbXPhY) - This Youtube video helped me in solving this challenge. It helped me understand the logic of how email validation is made. 

## Author

- Website - [Ron Paolo Toyhacao](https://www.your-site.com)
- Frontend Mentor - [@rontoyhacao](https://www.frontendmentor.io/profile/rontoyhacao)
- Twitter - [@rontoyhacao](https://twitter.com/rontoyhacao)

