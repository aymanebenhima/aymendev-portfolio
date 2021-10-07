<template>
  <div class="form">
    <h1>&bull; Keep in Touch &bull;</h1>
    <div class="icon_wrapper">
      <svg class="icon" viewBox="0 0 145.192 145.192">
        <path
          d="M126.82,32.694c-2.804,0-5.08,2.273-5.08,5.075v2.721c-1.462,0-2.646,1.185-2.646,2.647v1.995    c0,1.585,1.286,2.873,2.874,2.873h20.577c1.462,0,2.646-1.185,2.646-2.647v-3.041c0-1.009-0.816-1.825-1.823-1.825v-2.722    c0-2.802-2.276-5.075-5.079-5.075h-1.985v-3.829c0-3.816-3.095-6.912-6.913-6.912h-0.589h-20.45c0-2.67-2.164-4.835-4.833-4.835    H56.843c-2.67,0-4.835,2.165-4.835,4.835H34.356v-3.384h-9.563v3.384v1.178h-7.061v1.416c-2.67,0.27-10.17,1.424-13.882,5.972    c-1.773,2.17-2.44,4.791-1.983,7.793c0.463,3.043,1.271,6.346,2.128,9.841c2.354,9.616,5.024,20.515,0.549,28.077    C2.647,79.44-3.125,90.589,2.201,99.547c4.123,6.935,13.701,10.44,28.5,10.44c1.186,0,2.405-0.023,3.658-0.068v9.028h-0.296    c-2.516,0-4.558,2.039-4.558,4.558v4.566h100.04v-4.564c0-2.519-2.039-4.558-4.558-4.558h-0.297V84.631h0.297    c2.519,0,4.558-2.037,4.558-4.556v-0.009c0-2.516-2.039-4.556-4.556-4.556l-36.786-0.009V61.973c0-2.193-1.777-3.971-3.972-3.971    v-4.711h0.456c1.629,0,2.952-1.32,2.952-2.949h14.227V34.459h1.658c2.672,0,4.834-2.165,4.834-4.834h20.45v3.069H126.82z     M34.06,75.511c-2.518,0-4.558,2.04-4.558,4.556v0.009c0,2.519,2.042,4.556,4.558,4.556h0.296v24.12l-0.042-1.168    c-15.994,0.574-26.122-2.523-30.106-9.229C-0.464,90.5,4.822,80.347,6.55,77.423c4.964-8.382,2.173-19.774-0.29-29.825    c-0.843-3.442-1.639-6.696-2.088-9.638c-0.354-2.35,0.129-4.3,1.484-5.958c3.029-3.714,9.509-4.805,12.076-5.1v1.233h7.061v1.49    v2.684c-2.403,1.114-4.153,2.997-4.676,5.237H18.15c-0.584,0-1.056,0.474-1.056,1.056v0.83c0,0.584,0.475,1.056,1.056,1.056h1.984    c0.561,2.18,2.304,3.999,4.658,5.092v0.029c0,0-2.282,20.823,16.479,22.099v1.102c0,1.177,0.955,2.133,2.133,2.133h3.297    c1.178,0,2.133-0.956,2.133-2.133V50.135c0-1.177-0.955-2.132-2.133-2.132h-3.297c-1.178,0-2.133,0.955-2.133,2.132    c-1.575-0.235-5.532-1.17-6.635-4.547c2.36-1.092,4.109-2.913,4.669-5.097h1.308c0.722,0,1.309-0.584,1.309-1.308v-0.578    c0-0.584-0.475-1.056-1.056-1.056h-1.539c-0.542-2.332-2.416-4.271-4.968-5.363v-2.559h17.651c0,2.67,2.166,4.835,4.836,4.835 h2.392v15.88h13.639c0,1.629,1.321,2.949,2.951,2.949h0.899v4.711c-2.194,0-3.972,1.778-3.972,3.971v13.529L34.06,75.511z     M95.188,101.78c0,8.655-7.012,15.665-15.664,15.665c-8.653,0-15.667-7.01-15.667-15.665c0-8.647,7.014-15.664,15.667-15.664    C88.177,86.116,95.188,93.132,95.188,101.78z M97.189,45.669h-9.556c0-0.896-0.726-1.62-1.619-1.62H74.494    c-0.896,0-1.621,0.727-1.621,1.62h-8.967v-11.21h33.283V45.669z"
        ></path>
        <path
          d="M70.865,101.78c0,4.774,3.886,8.657,8.66,8.657c4.774,0,8.657-3.883,8.657-8.657c0-4.773-3.883-8.656-8.657-8.656    C74.751,93.124,70.865,97.006,70.865,101.78z"
        ></path>
      </svg>
    </div>
    <div v-if="success">
      <h3 class="heading-secondary">Thanks for being awesome!</h3>
      <div class="description">
        I've received your message, and will get back to you as soon as
        possible.<br>
      <NuxtLink to="/projects">Explore my works</NuxtLink>
      </div>
    </div>

    <div v-else-if="error">
      <h3 class="heading-secondary">Oops! something went wrong.</h3>
      <div class="description">
        Please try to
        <a href="#" @click="resetForm()">re-submit the form.</a> <br>
        If you'd rather get in touch with me via email
        <a href="mailto:aymanebenhima@gmail.com">aymanebenhima@gmail.com</a>
        or phone <a href="#">+212 674-854-165</a>
      </div>
    </div>
    <ValidationObserver v-else ref="contactForm" v-slot="{ handleSubmit }">
      <form
        id="contact_form"
        class="mb-2"
        @submit.prevent="handleSubmit(submit)"
      >
      <div class="form-group">
        <ValidationProvider
          mode="aggressive"
          name="name"
          class="form-input"
          rules="required|min:6|max:30"
          v-slot="{ errors }"
        >
          <div class="name">
            <label for="name_input"></label>
              <input
                type="text"
                id="name_input"
                placeholder="My name is"
                name="name"
                v-model="form.name"
                autocomplete="off"
                required
              />
              <span class="text-red">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <ValidationProvider
          class="form-input"
          name="email"
          rules="required|email"
          v-slot="{ errors }"
        >
          <div class="email">
            <label for="email"></label>
            <input
              type="email"
              placeholder="My e-mail is"
              name="email"
              id="email_input"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              v-model="form.email"
              outline
              autocomplete="off"
              required
            />
            <span class="text-red">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>
      </div>

        <ValidationProvider
          mode="aggressive"
          name="phone"
          :rules="{required:true, min:8,max:16,regex:/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/}"
          v-slot="{ errors }"
        >
          <div class="telephone">
            <label for="phone"></label>
            <input
              type="text"
              placeholder="My number is"
              autocomplete="off"
              name="phone"
              id="phone"
              v-model="form.phone"
              required
            />
            <span class="text-red">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <div class="subject">
          <label for="subject"></label>
          <select
            placeholder="Subject line"
            name="subject"
            id="subject"
            v-model="form.subject"
            required
          >
            <option disabled value="">Subject line</option>
            <option>I'd like to start a project</option>
            <option>I'd like to ask a question</option>
            <option>I'd like to make a proposal</option>
            <option>I'd like to hire you</option>
          </select>
        </div>
        <ValidationProvider
          mode="aggressive"
          name="message"
          rules="required|min:6|max:500"
          v-slot="{ errors }"
        >
          <div class="message">
            <label for="message"></label>
            <textarea
              name="message"
              placeholder="I'd like to chat about"
              id="message_input"
              cols="30"
              rows="5"
              v-model="form.message"
              outline
              required
            ></textarea>
            <span class="text-red">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>
        <div class="submit">
          <input
            v-if="!loading"
            type="submit"
            value="Send Message"
            id="form_button"
          />
          <div v-else class="loader-ring"></div>
        </div>
      </form>
    </ValidationObserver>
    <!-- // End form -->
  </div>
  <!-- // End #container -->
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      success: false,
      error: false,
      form: {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      },
    };
  },
  methods: {
    async submit() {
      const checkData = await this.$refs.contactForm.validate()
      if(checkData) {
        this.loading = true;

        this.error = false;
        this.false = true;

        this.$axios.$post('/mail/send',{
          from: this.form.name,
          subject: `aymendev | The subject is ${this.form.subject}`,
          text: `Hello Aymane you have a new message from ${this.form.name}\nContact phone:\t${this.form.phone}\nContact Email:\t${this.form.email}\nMessage:\t${this.form.message}`
        }).then(()=> {
            this.success = true;
        })
        .catch((e) => {
            this.error = true;
        })
        .then(()=> {
            this.loading = false;
        })
      }
    },
    resetForm(){
      this.loading = false;
      this.error = false;
      this.success = false;
    }
  }
};
</script>

<style lang="scss">
.form {
  width: 100%;
  display: flex;
  flex-direction: column;
}
button {
  overflow: visible;
}

button,
select {
  text-transform: none;
}

button,
input,
select,
textarea {
  color: #5a5a5a;
  font: inherit;
  margin: 0;
}

input {
  line-height: normal;
}

textarea {
  overflow: auto;
}

form {
  padding: 1rem;
  margin: 0.5rem 0;
}

h1 {
  color: var(--text-color);
  font-size: $h1-font-size;
  font-weight: $font-medium;
  letter-spacing: 0.5rem;
  text-align: center;
  text-transform: uppercase;
}

.icon_wrapper {
  margin: 2rem auto 0;
  width: 100%;
}

.icon {
  display: block;
  fill: var(--text-color);
  height: 4rem;
  margin: 0 auto;
  width: 4rem;
}

.form-group {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  @include respond(tab-port) {
    flex-direction: column;
  }
}
.form-input {
  width: 45%;

  @include respond(tab-port) {
    width: 100%;
  }
}
/* .email {
  width: 100%;
} */

input[type="text"],
[type="email"],
select,
textarea {
  background: none;
  border: none;
  border-bottom: solid 2px var(--text-color);
  color: var(--text-color);
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 1px;
  margin: 0em 0 1rem 0;
  padding: 0 0 0.75rem 0;
  text-transform: uppercase;
  width: 100%;

  transition: all 0.3s;
}

input[type="text"]:focus,
[type="email"]:focus,
textarea:focus {
  outline: none;
  box-shadow: 0 1rem 2rem rgba(var(--stroke-color), 0.1);
  border-bottom: 3px solid #2ecc71;
}
input[type="text"]:focus:invalid,
[type="email"]:focus:invalid,
textarea:focus:invalid {
  border-bottom: 3px solid #e74c3c;
}

.text-red {
  color: #e74c3c;
}

select {
/*   background: url("https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-arrow-down-32.png")
    no-repeat right; */
  outline: none;
/*   box-sizing: border-box;
  height: 14px;
  width: 14px;
  border-style: solid;
  border-color: var(--text-color);
  border-width: 0px 2px 2px 0px;
  transform: rotate(45deg);
  -moz-appearance: none;
  -webkit-appearance: none;
  position: absolute;
  right: 5px; */
}

select::-ms-expand {
  display: none;
}

.subject {
  width: 100%;

}

.telephone {
  width: 100%;
}

textarea {
  line-height: 150%;
  height: 9rem;
  resize: none;
  width: 100%;
}

::-webkit-input-placeholder {
  color: var(--text-color);
}

:-moz-placeholder {
  color: var(--text-color);
  opacity: 1;
}

::-moz-placeholder {
  color: var(--text-color);
  opacity: 1;
}

:-ms-input-placeholder {
  color: var(--text-color);
}

#form_button {
  background: none;
  border: solid 2px var(--text-color);
  color: var(--text-color);
  cursor: pointer;
  display: inline-block;
  font-family: "Helvetica", Arial, sans-serif;
  font-size: 1rem;
  font-weight: bold;
  outline: none;
  padding: 2rem 3rem;
  text-transform: uppercase;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -ms-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
}

#form_button:hover {
  background: var(--stroke-color);
  color: var(--title-color);
}
</style>
