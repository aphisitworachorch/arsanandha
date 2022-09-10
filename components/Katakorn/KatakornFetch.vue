<template>
  <div class="w-full font-bibleFont">
    <div class="flex flex-col justify-center items-center h-full p-5">
      <div class="flex overflow-x-auto">
        <table class="table table-compact w-full">
          <thead>
          <tr>
            <th>
              ชื่อ
            </th>
            <th>
              นามสกุล
            </th>
            <th>
              เลขประจำตัว
            </th>
            <th>
              ข้อมูลเพิ่มเติม
            </th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="fD in katakornRegisterData">
            <td>
              {{ fD.first_name }}
            </td>
            <td>
              {{ fD.last_name }}
            </td>
            <td>
              {{ fD.data.student_id }}
            </td>
            <td>
              <button class="btn btn-info" @click="viewData(fD.data)">ดูข้อมูล</button>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <download-excel
                class="btn btn-info"
                :data="formatData(katakornRegisterData)"
                :fields="json_fields"
              >
                ดาวน์โหลดรายชื่อทั้งหมด
              </download-excel>
            </td>
            <td></td>
            <td></td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>

  </div>
</template>

<script>
import Swal from "sweetalert2";
import {DateTime} from "luxon";
import * as PhoneFormat from 'phone-number-formats';
import * as _ from 'lodash';

export default {
  name: "KatakornFetch",
  async fetch(){
    this.katakornRegisterData = await this.$axios.$get('https://api.arsanandha.xyz/registration').then(data => data).catch(error => error);
  },
  data(){
    return {
      katakornRegisterData:[],
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
      yearInfo:[
        {
          name: "ปี 1",
          id: "year1"
        },
        {
          name: "ปี 2",
          id: "year2"
        },
        {
          name: "ปี 3",
          id: "year3"
        },
        {
          name: "ปี 4",
          id: "year4"
        },
        {
          name: "ปีอื่นๆ",
          id: "year_other"
        }
      ],
      json_fields:{
        'ชื่อจริง':'name',
        'นามสกุล':'lastname',
        'เลขประจำตัวนักศึกษา':'studentid',
        'ชื่อเล่น':'nickname',
        'อายุ':'age',
        'วันเกิด': 'birthdayformat',
        'ส่วนสูง':'height',
        'น้ำหนัก':'weight',
        'เบอร์โทรศัพท์':'telephoneFormat',
        'ชื่อเฟส':'social_link',
        'ชื่อไอจี':'instagram_link',
        'ปีที่ศึกษา':'yearstudy',
        'สำนักวิชา':'facultyname',
        'เคยเป็นคทากรมาก่อนหน้านี้หรือไม่':'everkatakorn',
        'เหตุผลที่อยากเป็นคทากร':'reason_to_be_katakorn',
        'ทำไมถึงอยากเป็นคทากร':'why_you_want_to_be_katakorn',
        'ความสามารถพิเศษ':'abilities',
        'รูปภาพ':'photo.url'
      }
    }
  },
  methods:{
    viewData(data) {
      const facData = this.yearData.filter(dp => dp.id === data.faculty)
      const yearDataM = this.yearInfo.filter(yI => yI.id === data.year_study)
      const formattedData = `
      <div class="container">
        <div class="avatar"><div class="rounded w-72"><img class="image" src="${data.photo?.url}"/></div></div>
      </div>
      <br/>
      <div class="container text-left text-bibleFont">
      <h3>ชื่อเล่น ${data.nickname}</h3>
      <br/>
      <h3>อายุ ${data.age}</h3>
      <br/>
      <h3>วันเกิด ${data.birthday}</h3>
      <br/>
      <h3>ส่วนสูง ${data.height}</h3>
      <br/>
      <h3>น้ำหนัก ${data.weight}</h3>
      <br/>
      <h3>เบอร์โทรศัพท์ ${data.telephone}</h3>
      <br/>
      <h3>ลิงก์เฟส / ชื่อเฟส ${data.social_link}</h3>
      <br/>
      <h3>ลิงก์อินสตาแกรม ${data.instagram_link}</h3>
      <br/>
      <h3>ปีที่ศึกษา ${yearDataM.shift().name}</h3>
      <br/>
      <h3>สาขาวิชา ${facData.shift().name}</h3>
      <br/>
      <h3>เคยเป็นคทากรมาก่อนหรือไม่ ${data.ever_katakorn ? "ใช่" : "ไม่"}</h3>
      <br/>
      <h3>ทำไมถึงอยากเป็นคทากร ${data.why_you_want_to_be_katakorn}</h3>
      <br/>
      <h3>ความสามารถ ${data.abilities}</h3>
        </div>
      `;
      Swal.fire({
        title: 'ข้อมูล',
        icon: 'info',
        html: formattedData
      });
    },
    formatData(data) {
      return _.uniqBy(data.map(finalData => {
        const facData = this.yearData.filter(dp => dp.id === finalData.data.faculty)
        const yearDataM = this.yearInfo.filter(yI => yI.id === finalData.data.year_study)
        return {
          name: finalData.first_name,
          lastname: finalData.last_name,
          photo_link: finalData?.photo?.url,
          studentid: finalData.data.student_id,
          everkatakorn: finalData.ever_katakorn ? "ใช่" : "ไม่",
          yearstudy: yearDataM.shift().name,
          facultyname: facData.shift().name,
          birthdayformat: DateTime.fromISO(finalData.data.birthday).toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY,{
            locale:'th-TH'
          }),
          telephoneFormat: new PhoneFormat(finalData.data.telephone).format({
            type:'domestic'
          }),
          ...finalData.data,
        }
      }),'studentid')
    },
    getFileName() {
      return `KATAKORN-LIST-${DateTime.local().toString()}`
    }
  }
}
</script>

<style scoped>

</style>
