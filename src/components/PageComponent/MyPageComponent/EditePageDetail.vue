<template>
    <div>
        <div class="row mt-3 pe-3">
            <p class="fw-bold mb-1">{{ $t("Description") }} : </p>
            <textarea class="vinput__add-input" v-model="descripton" id="" cols="30" rows="10"></textarea>
        </div>

        <div  class="row mt-3 pe-3">
            <p class="fw-bold mb-1">{{ $t("Address") }} : </p>
            <input class="vinput__add-input" type="text" v-model="address">
        </div>

        <div  class="row mt-3 pe-3">
            <p class="fw-bold mb-1">{{ $t("Service Area") }} : </p>
            <input class="vinput__add-input" type="text" v-model="service_area">
        </div>

        <div  class="row mt-3 pe-3">
            <p class="fw-bold mb-1">{{ $t("Email") }} : </p>
            <input class="vinput__add-input" type="text" v-model="email">
        </div>

        <div  class="row mt-3 pe-3">
            <p class="fw-bold mb-1">{{ $t("Website") }} : </p>
            <input class="vinput__add-input" type="text" v-model="website">
    
        </div>

        <div  class="row mt-3 pe-3">
            <p class="fw-bold mb-1">{{ $t("Phone") }} : </p>
            <input class="vinput__add-input" type="text" v-model="phone">
        </div>

        <div  class="row mt-3 pe-3">
            <p class="fw-bold mb-1">{{ $t("whatsApp Phone") }} : </p>
            <input class="vinput__add-input" type="text" v-model="whats_phone">
        </div>

        <div class="row mt-3 pe-3 mb-2">
            <select class="vinput__add-input" v-model="hours_worked" >
                <option :selected="hours_worked === 1" value="1">{{ $t("Closed always") }}</option>
                <option :selected="hours_worked === 2" value="2">{{ $t("Open always") }}</option>
                <option :selected="hours_worked === 3" value="3">{{ $t("Hour Works") }}</option>
            </select>
        </div>


        <div v-if="hours_worked == 3" class="row mt-3">
            <p class="fw-bold mb-2">Saturday </p>
            <div class="d-flex justify-content-between">
                <div >
                    <p>{{ $t("Start Time") }}</p>
                    <div class="d-flex align-items-center">
                        <select v-model="saturday_start_time1" id="">
                            <option :selected="saturday_start_time1 === '10:00'" value="10:00">10:00</option>
                            <option :selected="saturday_start_time1 === '11:00'" value="11:00">11:00</option>
                            <option :selected="saturday_start_time1 === '14:00'" value="14:00">14:00</option>
                        </select>
                        <span style="color: red; font-size: 25px;">*</span>
                    </div>
                
                </div>
                <div >
                    <p>{{ $t("End Time") }}</p>
                    <div class="d-flex align-items-center">
                        <span style="color: red; font-size: 25px;">*</span>
                        <select v-model="saturday_end_time1" id="">
                            <option :selected="saturday_end_time1 === '10:00'" value="10:00">10:00</option>
                            <option :selected="saturday_end_time1 === '11:00'" value="11:00">11:00</option>
                            <option :selected="saturday_end_time1 === '14:00'" value="14:00">14:00</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-between mt-3" >
                <div>
                    <p>Start Time 2</p>
                    <select v-model="saturday_start_time2" id="">
                        <option :selected="saturday_start_time2 === '10:00'" value="10:00">10:00</option>
                        <option :selected="saturday_start_time2 === '11:00'" value="11:00">11:00</option>
                        <option :selected="saturday_start_time2 === '14:00'" value="14:00">14:00</option>
                        <option :selected="saturday_start_time2 === '16:00'" value="16:00">16:00</option>
                    </select>
                    
                </div>
                <div>
                    <p>End Time 2</p>
                    <select v-model="saturday_end_time2" id="">
                        <option :selected="saturday_end_time2 === '10:00'" value="10:00">10:00</option>
                        <option :selected="saturday_end_time2 === '11:00'" value="11:00">11:00</option>
                        <option :selected="saturday_end_time2 === '14:00'" value="14:00">14:00</option>
                        <option :selected="saturday_end_time2 === '16:00'" value="16:00">16:00</option>
                    </select>
                </div>
            </div>

            <p class="fw-bold mb-2 mt-3">Sunday </p>
            <div class="d-flex justify-content-between">
                <div>
                    <p>Start Time</p>
                    <div class="d-flex align-items-center">
                        <select v-model="sunday_start_time1" id="">
                            <option :selected="sunday_start_time1 === '10:00'" value="10:00">10:00</option>
                            <option :selected="sunday_start_time1 === '11:00'" value="11:00">11:00</option>
                            <option :selected="sunday_start_time1 === '14:00'" value="14:00">14:00</option>
                        </select>
                        <span style="color: red; font-size: 25px;">*</span>
                    </div>
                    
                </div>
                <div>
                    <p>End Time</p>
                    <div class="d-flex align-items-center">
                        <span style="color: red; font-size: 25px;">*</span>
                        <select v-model="sunday_end_time1" id="">
                            <option :selected="sunday_end_time1 === '10:00'" value="10:00">10:00</option>
                            <option :selected="sunday_end_time1 === '11:00'" value="11:00">11:00</option>
                            <option :selected="sunday_end_time1 === '14:00'" value="14:00">14:00</option>
                        </select>
                    </div>
                    
                </div>
            </div>
            <div class="d-flex justify-content-between mt-3" >
                <div>
                    <p>Start Time 2</p>
                    <select v-model="sunday_start_time2" id="">
                        <option :selected="sunday_start_time2 === '10:00'" value="10:00">10:00</option>
                        <option :selected="sunday_start_time2 === '11:00'" value="11:00">11:00</option>
                        <option :selected="sunday_start_time2 === '14:00'" value="14:00">14:00</option>
                    </select>
                </div>
                <div>
                    <p>End Time 2</p>
                    <select v-model="sunday_end_time2" id="">
                        <option :selected="sunday_end_time2 === '10:00'" value="10:00">10:00</option>
                        <option :selected="sunday_end_time2 === '11:00'" value="11:00">11:00</option>
                        <option :selected="sunday_end_time2 === '14:00'" value="14:00">14:00</option>
                    </select>

                </div>
            </div>

            <p class="fw-bold mb-2 mt-3">Monday </p>
            <div class="d-flex justify-content-between">
                <div>
                    <p>Start Time</p>
                    <div class="d-flex align-items-center">
                        <select v-model="monday_start_time1" id="">
                            <option :selected="monday_start_time1 === '10:00'" value="10:00">10:00</option>
                            <option :selected="monday_start_time1 === '11:00'" value="11:00">11:00</option>
                            <option :selected="monday_start_time1 === '14:00'" value="14:00">14:00</option>
                        </select>
                        <span style="color: red; font-size: 25px;">*</span>
                    </div>

                </div>
                <div>
                    <p>End Time</p>
                    <div class="d-flex align-items-center">
                        <span style="color: red; font-size: 25px;">*</span>
                        <select v-model="monday_end_time1" id="">
                            <option :selected="monday_end_time1 === '10:00'" value="10:00">10:00</option>
                            <option :selected="monday_end_time1 === '11:00'" value="11:00">11:00</option>
                            <option :selected="monday_end_time1 === '14:00'" value="14:00">14:00</option>
                        </select>
                    </div>
                    
                </div>
            </div>
            <div class="d-flex justify-content-between mt-3" >
                <div>
                    <p>Start Time 2</p>
                    <select v-model="monday_start_time2" id="">
                        <option :selected="monday_start_time2 === '10:00'" value="10:00">10:00</option>
                        <option :selected="monday_start_time2 === '11:00'" value="11:00">11:00</option>
                        <option :selected="monday_start_time2 === '14:00'" value="14:00">14:00</option>
                    </select>
                </div>
                <div>
                    <p>End Time 2</p>
                    <select v-model="monday_end_time2" id="">
                        <option :selected="monday_end_time2 === '10:00'" value="10:00">10:00</option>
                        <option :selected="monday_end_time2 === '11:00'" value="11:00">11:00</option>
                        <option :selected="monday_end_time2 === '14:00'" value="14:00">14:00</option>
                    </select>
                </div>
            </div>

            <p class="fw-bold mb-2 mt-3">Tuesday </p>
            <div  class="d-flex justify-content-between">
                <div>
                    <p>Start Time</p>
                    <div class="d-flex align-items-center">
                        <select v-model="tuesday_start_time1" id="">
                            <option :selected="tuesday_start_time1 === '10:00'" value="10:00">10:00</option>
                            <option :selected="tuesday_start_time1 === '11:00'" value="11:00">11:00</option>
                            <option :selected="tuesday_start_time1 === '14:00'" value="14:00">14:00</option>
                        </select>
                        <span style="color: red; font-size: 25px;">*</span>
                    </div>
                    
                </div>
                <div>
                    <p>End Time</p>
                    <div class="d-flex align-items-center">
                        <span style="color: red; font-size: 25px;">*</span>
                        <select v-model="tuesday_end_time1" id="">
                            <option :selected="tuesday_end_time1 === '10:00'" value="10:00">10:00</option>
                            <option :selected="tuesday_end_time1 === '11:00'" value="11:00">11:00</option>
                            <option :selected="tuesday_end_time1 === '14:00'" value="14:00">14:00</option>
                        </select>
                    </div>
                    
                </div>
            </div>
            <div class="d-flex justify-content-between mt-3">
                <div>
                    <p>Start Time 2</p>
                    <select v-model="tuesday_start_time2" id="">
                        <option :selected="tuesday_start_time2 === '10:00'" value="10:00">10:00</option>
                        <option :selected="tuesday_start_time2 === '11:00'" value="11:00">11:00</option>
                        <option :selected="tuesday_start_time2 === '14:00'" value="14:00">14:00</option>
                    </select>
                </div>
                <div>
                    <p>End Time 2</p>
                    <select v-model="tuesday_end_time2" id="">
                        <option :selected="tuesday_end_time2 === '10:00'" value="10:00">10:00</option>
                        <option :selected="tuesday_end_time2 === '11:00'" value="11:00">11:00</option>
                        <option :selected="tuesday_end_time2 === '14:00'" value="14:00">14:00</option>
                    </select>
                </div>
            </div>

            <p class="fw-bold mb-2 mt-3">Wednesday </p>
            <div  class="d-flex justify-content-between">
                <div>
                    <p>Start Time</p>
                    <div class="d-flex align-items-center">
                        <select v-model="wednesday_start_time1" id="">
                            <option :selected="wednesday_start_time1 === '10:00'" value="10:00">10:00</option>
                            <option :selected="wednesday_start_time1 === '11:00'" value="11:00">11:00</option>
                            <option :selected="wednesday_start_time1 === '14:00'" value="14:00">14:00</option>
                        </select>
                        <span style="color: red; font-size: 25px;">*</span>
                    </div>
                    
                </div>
                <div>
                    <p>End Time</p>
                    <div class="d-flex align-items-center">
                        <span style="color: red; font-size: 25px;">*</span>
                        <select v-model="wednesday_end_time1" id="">
                            <option :selected="wednesday_end_time1 === '10:00'" value="10:00">10:00</option>
                            <option :selected="wednesday_end_time1 === '11:00'" value="11:00">11:00</option>
                            <option :selected="wednesday_end_time1 === '14:00'" value="14:00">14:00</option>
                        </select>
                    </div>
                    

                </div>
            </div>
            <div class="d-flex justify-content-between mt-3">
                <div>
                    <p>Start Time 2</p>
                    <select v-model="wednesday_start_time2" id="">
                        <option :selected="wednesday_start_time2 === '10:00'" value="10:00">10:00</option>
                        <option :selected="wednesday_start_time2 === '11:00'" value="11:00">11:00</option>
                        <option :selected="wednesday_start_time2 === '14:00'" value="14:00">14:00</option>
                    </select>
                </div>
                <div>
                    <p>End Time 2</p>
                    <select v-model="wednesday_end_time2" id="">
                        <option :selected="wednesday_end_time2 === '10:00'" value="10:00">10:00</option>
                        <option :selected="wednesday_end_time2 === '11:00'" value="11:00">11:00</option>
                        <option :selected="wednesday_end_time2 === '14:00'" value="14:00">14:00</option>
                    </select>
                </div>
            </div>

            <p class="fw-bold mb-2 mt-3">Thursday </p>
            <div  class="d-flex justify-content-between">
                <div>
                    <p>Start Time</p>
                    <div class="d-flex align-items-center">
                        <select v-model="thursday_start_time1" id="">
                            <option :selected="thursday_start_time1 === '10:00'" value="10:00">10:00</option>
                            <option :selected="thursday_start_time1 === '11:00'" value="11:00">11:00</option>
                            <option :selected="thursday_start_time1 === '14:00'" value="14:00">14:00</option>
                        </select>
                        <span style="color: red; font-size: 25px;">*</span>
                    </div>
                    
                </div>
                <div>
                    <p>End Time</p>
                    <div class="d-flex align-items-center">
                        <span style="color: red; font-size: 25px;">*</span>
                        <select v-model="thursday_end_time1" id="">
                            <option :selected="thursday_end_time1 === '10:00'" value="10:00">10:00</option>
                            <option :selected="thursday_end_time1 === '11:00'" value="11:00">11:00</option>
                            <option :selected="thursday_end_time1 === '14:00'" value="14:00">14:00</option>
                        </select>
                    </div>
                    
                </div>
            </div>
            <div class="d-flex justify-content-between mt-3" >
                <div>
                    <p>Start Time 2</p>
                    <select v-model="thursday_start_time2" id="">
                        <option :selected="thursday_start_time2 === '10:00'" value="10:00">10:00</option>
                        <option :selected="thursday_start_time2 === '11:00'" value="11:00">11:00</option>
                        <option :selected="thursday_start_time2 === '14:00'" value="14:00">14:00</option>
                    </select>

                </div>
                <div>
                    <p>End Time 2</p>
                    <select v-model="thursday_end_time2" id="">
                        <option :selected="thursday_end_time2 === '10:00'" value="10:00">10:00</option>
                        <option :selected="thursday_end_time2 === '11:00'" value="11:00">11:00</option>
                        <option :selected="thursday_end_time2 === '14:00'" value="14:00">14:00</option>
                    </select>
                </div>
            </div>

            <p class="fw-bold mb-2 mt-3">Friday </p>
            <div  class="d-flex justify-content-between">
                <div>
                    <p>Start Time</p>
                    <div class="d-flex align-items-center">
                        <select v-model="friday_start_time1" id="">
                            <option :selected="friday_start_time1 === '10:00'" value="10:00">10:00</option>
                            <option :selected="friday_start_time1 === '11:00'" value="11:00">11:00</option>
                            <option :selected="friday_start_time1 === '14:00'" value="14:00">14:00</option>
                        </select>
                        <span style="color: red; font-size: 25px;">*</span>
                    </div>
                    
                </div>
                <div>
                    <p>End Time</p>
                    <div class="d-flex align-items-center">
                        <span style="color: red; font-size: 25px;">*</span>
                        <select v-model="friday_end_time1" id="">
                            <option :selected="friday_end_time1 === '10:00'" value="10:00">10:00</option>
                            <option :selected="friday_end_time1 === '11:00'" value="11:00">11:00</option>
                            <option :selected="friday_end_time1 === '14:00'" value="14:00">14:00</option>
                        </select>
                    </div>
                    
                </div>
            </div>
            <div class="d-flex justify-content-between mt-3 mb-3" >
                <div>
                    <p>Start Time 2</p>
                    <select v-model="friday_start_time2" id="">
                        <option :selected="friday_start_time2 === '10:00'" value="10:00">10:00</option>
                        <option :selected="friday_start_time2 === '11:00'" value="11:00">11:00</option>
                        <option :selected="friday_start_time2 === '14:00'" value="14:00">14:00</option>
                    </select>
                </div>
                <div>
                    <p>End Time 2</p>
                    <select v-model="friday_end_time2" id="">
                        <option :selected="friday_end_time2 === '10:00'" value="10:00">10:00</option>
                        <option :selected="friday_end_time2 === '11:00'" value="11:00">11:00</option>
                        <option :selected="friday_end_time2 === '14:00'" value="14:00">14:00</option>
                    </select>

                </div>
            </div>

            
        
        </div>
        <ul
            v-if="errorMessage"
            :class="{ error_background: errorMessage.length > 0 }"
            class="list-unstyled p-2 text-light"
            style="border-radius: 10px"
        >
            <li v-for="(item, index) in errorMessage" :key="index">
            {{ item }}
            </li>
        </ul>
        <button class="btn btn-success mb-3" type="submit" @click="editnow(this.id)">{{ $t("Edit Now") }}</button>

        
    </div>
</template>

<script>
import pageServices from '@/services/Pages/page.services';


export default {
    name: "EditePageDetail",
    components: {

  },
  data() {
        return {
            descripton: this.detail.description,
            address: this.detail.address,
            service_area: this.detail.service_area,
            email: this.detail.email,
            website: this.detail.website,
            phone: this.detail.phone,
            whats_phone: this.detail.whats_phone,
            hours_worked: this.detail.hours_worked,

            saturday_start_time1: this.page_details_hours()? this.detail.page_details_hours.saturday_start_time1 : null,
            saturday_end_time1:this.page_details_hours()? this.detail.page_details_hours.saturday_end_time1  : null,
            saturday_start_time2:this.page_details_hours()? this.detail.page_details_hours.saturday_start_time2  : null,
            saturday_end_time2:this.page_details_hours()? this.detail.page_details_hours.saturday_end_time2  : null,

            sunday_start_time1:this.page_details_hours()? this.detail.page_details_hours.sunday_start_time1  : null,
            sunday_end_time1:this.page_details_hours()? this.detail.page_details_hours.sunday_end_time1  : null,
            sunday_start_time2:this.page_details_hours()? this.detail.page_details_hours.sunday_start_time2  : null,
            sunday_end_time2:this.page_details_hours()? this.detail.page_details_hours.sunday_end_time2  : null,

            monday_start_time1:this.page_details_hours()? this.detail.page_details_hours.monday_start_time1  : null,
            monday_end_time1:this.page_details_hours()? this.detail.page_details_hours.monday_end_time1  : null,
            monday_start_time2:this.page_details_hours()? this.detail.page_details_hours.monday_start_time2  : null,
            monday_end_time2:this.page_details_hours()? this.detail.page_details_hours.monday_end_time2  : null,

            tuesday_start_time1:this.page_details_hours()? this.detail.page_details_hours.tuesday_start_time1  : null,
            tuesday_end_time1:this.page_details_hours()? this.detail.page_details_hours.tuesday_end_time1  : null,
            tuesday_start_time2:this.page_details_hours()? this.detail.page_details_hours.tuesday_start_time2  : null,
            tuesday_end_time2:this.page_details_hours()? this.detail.page_details_hours.tuesday_end_time2  : null,

            wednesday_start_time1:this.page_details_hours()? this.detail.page_details_hours.wednesday_start_time1  : null,
            wednesday_end_time1:this.page_details_hours()? this.detail.page_details_hours.wednesday_end_time1  : null,
            wednesday_start_time2:this.page_details_hours()? this.detail.page_details_hours.wednesday_start_time2  : null,
            wednesday_end_time2:this.page_details_hours()? this.detail.page_details_hours.wednesday_end_time2  : null,
            
            thursday_start_time1:this.page_details_hours()? this.detail.page_details_hours.thursday_start_time1  : null,
            thursday_end_time1:this.page_details_hours()? this.detail.page_details_hours.thursday_end_time1  : null,
            thursday_start_time2:this.page_details_hours()? this.detail.page_details_hours.thursday_start_time2  : null,
            thursday_end_time2:this.page_details_hours()? this.detail.page_details_hours.thursday_end_time2  : null,

            friday_start_time1:this.page_details_hours()? this.detail.page_details_hours.friday_start_time1  : null,
            friday_end_time1:this.page_details_hours()? this.detail.page_details_hours.friday_end_time1  : null,
            friday_start_time2:this.page_details_hours()? this.detail.page_details_hours.friday_start_time2  : null,
            friday_end_time2:this.page_details_hours()? this.detail.page_details_hours.friday_end_time2  : null,

            errorMessage : []

        }
    },
    props: ["detail", "id"],
    methods: {
        async editnow(id) {
            let data = new FormData()
            data.append('description', this.descripton)
            data.append('address', this.address)
            data.append('service_area', this.service_area)
            data.append('email', this.email)
            data.append('website', this.website)
            data.append('phone', this.phone)
            data.append('whats_phone', this.whats_phone)
            data.append('hours_worked', this.hours_worked)
            if (this.hours_worked == 3) {
                data.append('page_id', this.id)
                data.append('saturday_start_time1', this.saturday_start_time1)
                data.append('saturday_end_time1', this.saturday_end_time1)
                if(this.saturday_start_time2 && this.saturday_end_time2) {
                    data.append('saturday_start_time2', this.saturday_start_time2)
                    data.append('saturday_end_time2', this.saturday_end_time2)
                }

                data.append('sunday_start_time1', this.sunday_start_time1)
                data.append('sunday_end_time1', this.sunday_end_time1)
                if(this.sunday_start_time2 && this.sunday_end_time2) {
                    data.append('sunday_start_time2', this.sunday_start_time2)
                    data.append('sunday_end_time2', this.sunday_end_time2)
                }

                data.append('monday_start_time1', this.monday_start_time1)
                data.append('monday_end_time1', this.monday_end_time1)
                if(this.monday_start_time2 && this.monday_end_time2) {
                    data.append('monday_start_time2', this.monday_start_time2)
                    data.append('monday_end_time2', this.monday_end_time2)
                }

                data.append('tuesday_start_time1', this.tuesday_start_time1)
                data.append('tuesday_end_time1', this.tuesday_end_time1)
                if(this.tuesday_start_time2 && this.tuesday_end_time2) {
                    data.append('tuesday_start_time2', this.tuesday_start_time2)
                    data.append('tuesday_end_time2', this.tuesday_end_time2)
                }

                data.append('wednesday_start_time1', this.wednesday_start_time1)
                data.append('wednesday_end_time1', this.wednesday_end_time1)
                if(this.wednesday_start_time2 && this.wednesday_end_time2) {
                    data.append('wednesday_start_time2', this.wednesday_start_time2)
                    data.append('wednesday_end_time2', this.wednesday_end_time2)
                }

                data.append('thursday_start_time1', this.thursday_start_time1)
                data.append('thursday_end_time1', this.thursday_end_time1)
                if(this.thursday_start_time2 && this.thursday_end_time2) {
                    data.append('thursday_start_time2', this.thursday_start_time2)
                    data.append('thursday_end_time2', this.thursday_end_time2)
                }

                data.append('friday_start_time1', this.friday_start_time1)
                data.append('friday_end_time1', this.friday_end_time1)
                if(this.friday_start_time2 && this.friday_end_time2) {
                    data.append('friday_start_time2', this.friday_start_time2)
                    data.append('friday_end_time2', this.friday_end_time2)
                }
            }
            await pageServices.EditePageDetail(id, data).then(
                response => {
                    
                    // this.$router.push({name:'pages'});
                    // this.$router.push({ name: "mypage", params: { id: id } });
                    // this.$router.push({name:'mypage', params:{"id": id}});
                    // this.$router.push({ path: `/mypage/${response.data.data.id}` }) 
                    console.log(response.data.data)
                    // console.log(id)
                    this.$emit('editepagedetail')
                    window.location.reload();
                }
            )
        },
        page_details_hours() {
            return this.detail.page_details_hours ? this.detail.page_details_hours.saturday_start_time1 : null
        }
    },
    created() {
        this.page_details_hours()
    },


}
</script>

<style lang="scss" scoped>

.vinput {
  $this: &;
  &__add-input {
    box-sizing: border-box;
    width: 100%;
    outline: none;
    border: 1px solid #eee;
    padding: 10px 75px 10px 15px;
    border-radius: 40px;
    transition: all 0.2s ease-out;
    &:focus {
      border-color: #00a79d;
      & + #{$this} {
        &__add-button {
          background: #00a79d;
          color: white;
          transition: all 0.2 ease-in;
        }
      }
    }
  }
  &__add-block {
    margin-top: 15px;
    position: relative;
  }
}
</style>