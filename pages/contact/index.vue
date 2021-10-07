<template>
  <div class="contact">
    <ContactForm />
    <div class="form_buttom">
      <span> If you'd rather get in touch with me by email <a class="btn-text" href="mailto:aymanebenhima@gmail.com">aymanebenhima@gmail.com</a> or phone <a class="btn-text" href="#">+212 674-854-165</a> I'll happy to hear from you.</span>
    </div>
  </div>
</template>

<style lang="scss">
.contact {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.form_bottom {
  align-self: flex-end;
  font-weight: $font-medium !important;
}
</style>
