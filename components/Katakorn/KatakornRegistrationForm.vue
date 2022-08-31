<template>
  <div class="w-full font-bibleFont ">
    <div class="flex flex-col justify-center items-center h-full p-5">
      <form class="form-control">
        <div class="px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
          <img :src="headPhoto" alt="ktkLogo" class="image-full w-auto pb-10"/>
          <h1 class="font-medium text-3xl font-bold text-center">
            รับสมัคร มหาสุรนารี ศรีคทากร รุ่นที่ 9
          </h1>
          <div class="-mx-3 md:flex mb-6">
            <div class="md:w-full px-3">
              <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="student_id">
                E-Mail
              </label>
              <input class="appearance-none block w-full text-black border border-grey-lighter rounded py-3 px-4 mb-3" id="student_id" v-model="register.email" type="email">
            </div>
          </div>
          <div class="-mx-3 md:flex mb-6">
            <div class="md:w-full px-3">
              <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="student_id">
                รหัสประจำตัวนักศึกษา
              </label>
              <input class="appearance-none block w-full text-black border border-grey-lighter rounded py-3 px-4 mb-3" id="student_id" v-model="register.additional.student_id" type="text" placeholder="BXXXXXXX">
            </div>
          </div>
          <div class="-mx-3 md:flex mb-6">
            <div class="md:w-full px-3">
              <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="student_id">
                เบอร์โทรศัพท์
              </label>
              <input class="appearance-none block w-full text-black border border-grey-lighter rounded py-3 px-4 mb-3" id="student_id" v-model="register.additional.telephone" type="text" placeholder="">
            </div>
          </div>
          <div class="-mx-3 md:flex mb-6">
            <div class="md:w-1/2 px-3 mb-4 md:mb-0">
              <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="first_name">
                ชื่อจริง
              </label>
              <input class="appearance-none block w-full text-black border border-red rounded py-3 px-4 mb-3" id="first_name" v-model="register.first_name" type="text">
            </div>
            <div class="md:w-1/2 px-3 mb-4 md:mb-0">
              <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="last_name">
                นามสกุล
              </label>
              <input class="appearance-none block w-full text-black border border-grey-lighter rounded py-3 px-4" id="last_name" v-model="register.last_name" type="text">
            </div>
            <div class="md:w-1/2 px-3 mb-4 md:mb-0">
              <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="nickname">
                ชื่อเล่น
              </label>
              <input class="appearance-none block w-full text-black border border-grey-lighter rounded py-3 px-4" id="nickname" v-model="register.additional.nickname" type="text" >
            </div>
          </div>
          <div class="-mx-3 md:flex mb-6">
            <div class="md:w-1/2 px-3 mb-4 md:mb-0">
              <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="age">
                อายุ
              </label>
              <input class="appearance-none block w-full text-black border border-red rounded py-3 px-4 mb-3" id="age" v-model="register.additional.age" type="number" min="17" max="30">
            </div>
            <div class="md:w-1/2 px-3 mb-4 md:mb-0">
              <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="birthday">
                วันเกิด
              </label>
              <input class="appearance-none block w-full text-black border border-grey-lighter rounded py-3 px-4" id="birthday" v-model="register.additional.birthday" type="datetime-local" >
            </div>
          </div>
          <div class="-mx-3 md:flex mb-6">
            <div class="md:w-1/2 px-3 mb-4 md:mb-0">
              <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="height">
                ส่วนสูง (เซนติเมตร)
              </label>
              <input class="appearance-none block w-full text-black border border-red rounded py-3 px-4 mb-3" id="height" v-model="register.additional.height" type="number">
            </div>
            <div class="md:w-1/2 px-3 mb-4 md:mb-0">
              <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="weight">
                น้ำหนัก (กิโลกรัม)
              </label>
              <input class="appearance-none block w-full text-black border border-red rounded py-3 px-4 mb-3" id="weight" v-model="register.additional.weight" type="number">
            </div>
          </div>
          <div class="-mx-3 md:flex mb-6">
            <div class="md:w-1/2 px-3 mb-4 md:mb-0">
              <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="social_url">
                Social URL
              </label>
              <input class="appearance-none block w-full text-black border border-red rounded py-3 px-4 mb-3" id="social_url" v-model="register.additional.social_link" type="text">
            </div>
            <div class="md:w-1/2 px-3 mb-4 md:mb-0">
              <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="instagram">
                Instagram ID
              </label>
              <input class="appearance-none block w-full text-black border border-red rounded py-3 px-4 mb-3" id="instagram" v-model="register.additional.instagram_link" type="text">
            </div>
          </div>
          <div class="-mx-3 md:flex mb-2">
            <div class="md:w-1/2 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="year">
                ชั้นปี
              </label>
              <div class="relative">
                <select class="block appearance-none w-full border border-grey-lighter text-black py-3 px-4 pr-8 rounded" id="year" v-model="register.additional.year_study" >
                  <option disabled>เลือกชั้นปี</option>
                  <option value="year1">ชั้นปีที่ 1</option>
                  <option value="year2">ชั้นปีที่ 2</option>
                  <option value="year3">ชั้นปีที่ 3</option>
                  <option value="year4">ชั้นปีที่ 4</option>
                  <option value="year_other">ชั้นปีอื่นๆ</option>
                </select>
              </div>
            </div>
            <div class="md:w-1/2 px-3 mb-4 md:mb-0">
              <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="faculty">
                สำนักวิชาที่เรียน
              </label>
              <div class="relative">
                <select class="block appearance-none w-full border border-grey-lighter text-black py-3 px-4 pr-8 rounded" id="faculty" v-model="register.additional.faculty" >
                  <option disabled>เลือกสำนักวิชาที่เรียน</option>
                  <option v-for="yr in yearData" v-bind:value="yr.id">
                    {{ yr.name }}
                  </option>
                </select>
              </div>
            </div>
            <div class="md:w-1/2 px-3 mb-4 md:mb-0">
              <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="fileUpload">
                อัปโหลดไฟล์
              </label>
              <div class="relative">
                <input type="file" id="fileUpload" @change="submitFile" ref="file">
              </div>
            </div>
          </div>
          <div class="-mx-3 md:flex mb-6">
            <div class="md:w-1/2 px-3 mb-4 md:mb-0">
              <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-6" for="reason_ever_ktk">
                คุณเคยเป็น คทากร มาก่อนหรือไม่ (ไม่มีผลต่อการคัดเลือก)
              </label>
              <div class="relative">
                <select class="block appearance-none w-full border border-grey-lighter text-black py-3 px-4 pr-8 rounded" id="year" v-model="register.additional.ever_katakorn" >
                  <option disabled>เลือก</option>
                  <option value="true">ใช่</option>
                  <option value="false">ไม่ใช่</option>
                </select>
              </div>
            </div>
            <div class="md:w-1/2 px-3">
              <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="why_you_want_to_be">
                ทำไมคุณถึงอยากเป็นคทากรของมหาวิทยาลัยเทคโนโลยีสุรนารี
              </label>
              <input class="appearance-none block w-full text-black border border-red rounded py-3 px-4 mb-3" id="why_you_want_to_be" v-model="register.additional.why_you_want_to_be_katakorn" type="text">
            </div>
            <div class="md:w-1/2 px-3">
              <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-6" for="reason_to_be_ktk">
                เหตุผลใด ทำไมถึงต้องเลือกคุณเป็นคทากร
              </label>
              <input class="appearance-none block w-full text-black border border-red rounded py-3 px-4 mb-3" id="reason_to_be_ktk" v-model="register.additional.reason_to_be_katakorn" type="text">
            </div>
            <div class="md:w-1/2 px-3">
              <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-6" for="abilities">
                ความสามารถพิเศษของคุณ (ที่คิดว่าทำได้ดีที่สุด)
              </label>
              <input class="appearance-none block w-full text-black border border-red rounded py-3 px-4 mb-3" id="abilities" v-model="register.additional.abilities" type="text">
            </div>
          </div>
        </div>
      </form>
      <div class="-mx-3 md:flex mb-6">
        <button class="btn btn-info" @click="sendForm">ส่งฟอร์ม</button>
      </div>

    </div>

  </div>
</template>

<script>

import Swal from "sweetalert2";

export default {
  name: "KatakornRegistrationForm",
  data(){
    return {
      headPhoto:  require('assets/images/ktk/297037200_2081805178874152_5757096983903774933_n.jpg'),
      yearData:[{
        name: "สำนักวิชาเทคโนโลยีสังคม",
        id: "soctech"
      },{
        name: "กลุ่มหลักสูตรศาสตร์และศิลป์ดิจิทัล Digitech - Digital Arts & Science(โครงการจัดรูปแบบการบริหารวิชาการด้านเทคโนโลยีดิจิทัลรูปใหม่)",
        id: "digital"
      },{
        name: "สำนักวิชาวิศวกรรมศาสตร์",
        id: "engineering"
      },{
        name: "สำนักวิชาทันตแพทยศาสตร์",
        id: "dental"
      },{
        name: "สำนักวิชาแพทย์ศาสตร์",
        id: "dental"
      },{
        name: "สำนักวิชาสาธารณสุขศาสตร์",
        id: "public_health"
      },{
        name: "สำนักวิชาพยาบาลศาสตร์",
        id: "nursing"
      },{
        name: "สำนักวิชาเทคโนโลยีการเกษตร",
        id: "agriculture"
      },{
        name: "สำนักวิชาวิทยาศาสตร์",
        id: "science"
      }],
      register:{
        email: null,
        first_name: null,
        last_name: null,
        additional:{
          student_id: null,
          nickname: null,
          age: null,
          birthday: null,
          height: null,
          weight: null,
          telephone: null,
          social_link: null,
          instagram_link: null,
          year_study: null,
          faculty: null,
          ever_katakorn: null,
          reason_to_be_katakorn: null,
          why_you_want_to_be_katakorn: null,
          abilities: null,
          photo: null
        }
      }
    }
  },
  methods: {
    async submitFile() {
      this.Images = this.$refs.file.files[0];
      const formData = new FormData();
      formData.append('photo', this.Images);
      const headers = {'Content-Type': 'multipart/form-data'};
      this.register.additional.photo = await this.$axios.$post('https://api.arsanandha.xyz/registration/photo', formData, {headers}).then(data => data['Key']).catch(error => {
        Swal.fire('แจ้งเตือน','อัปโหลดรูปไม่สำเร็จ !','error');
      });
    },
    async sendForm() {
      const data = await this.$axios.$put('https://api.arsanandha.xyz/registration',JSON.stringify({
        email: this.register.email,
        name: this.register.first_name,
        surname: this.register.last_name,
        registration_title: "katakorn",
        details: this.register.additional
      }),{
        headers: {
          // Overwrite Axios's automatically set Content-Type
          'Content-Type': 'application/json'
        }
      }).then((data) => {
        if (data.created_at != null) {
          Swal.fire(
            'แจ้งเตือน',
            'ลงทะเบียนสำเร็จ !!',
            'success'
          ).then((result) => {
            if (result.isConfirmed) {
              window.location.reload();
            }
          })
        }
      }).catch((data) => {
        Swal.fire('แจ้งเตือน','ลงทะเบียนไม่สำเร็จ','error');
      });
    }
  }
}
</script>

<style scoped>

</style>
