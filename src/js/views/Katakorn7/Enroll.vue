<template>
  <div>
    <div class="uk-container">
      <vk-card>
        <vk-card-title>สมัคร มหาสุรนารี ศรีคทากร รุ่นที่ 7</vk-card-title>
        <form class="uk-form-stacked">
          <div class="uk-margin">
            <label class="uk-form-label" for="form-stacked-text">ชื่อจริง</label>
            <div class="uk-form-controls">
              <input class="uk-input" id="firstName" type="text" placeholder="">
            </div>
          </div>
          <div class="uk-margin">
            <label class="uk-form-label" for="form-stacked-text">นามสกุล</label>
            <div class="uk-form-controls">
              <input class="uk-input" id="lastName" type="text" placeholder="">
            </div>
          </div>
          <div class="uk-margin">
            <label class="uk-form-label" for="form-stacked-select">อายุ</label>
            <div class="uk-form-controls">
              <input type="number" id="enrollAge" min="18" max="30"/>
            </div>
          </div>

        </form>
      </vk-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "Enroll",
  metaInfo: {
    title: "Katakorn 7 Enrollment"
  }
}
</script>

<style scoped>

</style>
