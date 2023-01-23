<template>
    <div >
    
        <div v-if="detail.description" class="row mt-3">
            <p class="fw-bold mb-1">{{ $t("Description") }} : </p>
            <p>{{ detail.description }}</p>
        </div>

        <div v-if="detail.address" class="row mt-3">
            <p class="fw-bold mb-1">{{ $t("Address") }} : </p>
            <p>{{ detail.address }}</p>
        </div>

        <div v-if="detail.service_area" class="row mt-3">
            <p class="fw-bold mb-1">{{ $t("Service Area") }} : </p>
            <p>{{ detail.service_area }}</p>
        </div>

        <div v-if="detail.email" class="row mt-3">
            <p class="fw-bold mb-1">{{ $t("Email") }} : </p>
            <p>{{ detail.email }}</p>
        </div>

        <div v-if="detail.website" class="row mt-3">
            <p class="fw-bold mb-1">{{ $t("Website") }} : </p>
            <p>{{ detail.website }}</p>
        </div>

        <div v-if="detail.phone" class="row mt-3">
            <p class="fw-bold mb-1">{{ $t("Phone") }} : </p>
            <p>{{ detail.phone }}</p>
        </div>

        <div v-if="detail.whats_phone" class="row mt-3">
            <p class="fw-bold mb-1">{{ $t("whatsApp Phone") }} : </p>
            <p>{{ detail.whats_phone }}</p>
        </div>

        <div v-if="detail.hours_worked == 1" class="row mt-3">
            <p class="fw-bold mb-1">{{ $t("Closed always") }}</p>
            
        </div>

        <div v-if="detail.hours_worked == 2" class="row mt-3">
            <p class="fw-bold mb-1">{{ $t("Open always") }}</p>
            
        </div>

        <div v-if="detail.hours_worked == 3" class="row mt-3">
            <p class="fw-bold mb-2">Saturday </p>
            <div class="d-flex justify-content-between" v-if="detail.page_details_hours.saturday_start_time1 != detail.page_details_hours.saturday_end_time1">
                <div>
                    <p>{{ $t("Start Time") }}</p>
                    <p>{{ detail.page_details_hours.saturday_start_time1 }}</p>
                </div>
                <div>
                    <p>{{ $t("End Time") }}</p>
                    <p>{{ detail.page_details_hours.saturday_end_time1 }}</p>
                </div>
            </div>
            <div v-else class="d-flex justify-content-between">
                <div>
                    <p class="fw-bold">Closed</p>
                </div>
            </div>
            <div class="d-flex justify-content-between" v-if="detail.page_details_hours.saturday_start_time2">
                <div>
                    <p>Start Time 2</p>
                    <p>{{ detail.page_details_hours.saturday_start_time2 }}</p>
                </div>
                <div>
                    <p>End Time 2</p>
                    <p>{{ detail.page_details_hours.saturday_end_time2 }}</p>
                </div>
            </div>

            <p class="fw-bold mb-2">Sunday </p>
            <div v-if="detail.page_details_hours.sunday_start_time1 != detail.page_details_hours.sunday_end_time1" class="d-flex justify-content-between">
                <div>
                    <p>Start Time</p>
                    <p>{{ detail.page_details_hours.sunday_start_time1 }}</p>
                </div>
                <div>
                    <p>End Time</p>
                    <p>{{ detail.page_details_hours.sunday_end_time1 }}</p>
                </div>
            </div>
            <div v-else class="d-flex justify-content-between">
                <div>
                    <p class="fw-bold">Closed</p>
                </div>
            </div>
            <div class="d-flex justify-content-between" v-if="detail.page_details_hours.sunday_start_time2">
                <div>
                    <p>Start Time 2</p>
                    <p>{{ detail.page_details_hours.sunday_start_time2 }}</p>
                </div>
                <div>
                    <p>End Time 2</p>
                    <p>{{ detail.page_details_hours.sunday_end_time2 }}</p>
                </div>
            </div>

            <p class="fw-bold mb-2">Monday </p>
            <div v-if="detail.page_details_hours.monday_start_time1 != detail.page_details_hours.monday_end_time1" class="d-flex justify-content-between">
                <div>
                    <p>Start Time</p>
                    <p>{{ detail.page_details_hours.monday_start_time1 }}</p>
                </div>
                <div>
                    <p>End Time</p>
                    <p>{{ detail.page_details_hours.monday_end_time1 }}</p>
                </div>
            </div>
            <div v-else class="d-flex justify-content-between">
                <div>
                    <p class="fw-bold">Closed</p>
                </div>
            </div>
            <div class="d-flex justify-content-between" v-if="detail.page_details_hours.monday_start_time2">
                <div>
                    <p>Start Time 2</p>
                    <p>{{ detail.page_details_hours.monday_start_time2 }}</p>
                </div>
                <div>
                    <p>End Time 2</p>
                    <p>{{ detail.page_details_hours.monday_end_time2 }}</p>
                </div>
            </div>

            <p class="fw-bold mb-2">Tuesday </p>
            <div v-if="detail.page_details_hours.tuesday_start_time1 != detail.page_details_hours.tuesday_end_time1" class="d-flex justify-content-between">
                <div>
                    <p>Start Time</p>
                    <p>{{ detail.page_details_hours.tuesday_start_time1 }}</p>
                </div>
                <div>
                    <p>End Time</p>
                    <p>{{ detail.page_details_hours.tuesday_end_time1 }}</p>
                </div>
            </div>
            <div v-else class="d-flex justify-content-between">
                <div>
                    <p class="fw-bold">Closed</p>
                </div>
            </div>
            <div class="d-flex justify-content-between" v-if="detail.page_details_hours.tuesday_start_time2">
                <div>
                    <p>Start Time 2</p>
                    <p>{{ detail.page_details_hours.tuesday_start_time2 }}</p>
                </div>
                <div>
                    <p>End Time 2</p>
                    <p>{{ detail.page_details_hours.tuesday_end_time2 }}</p>
                </div>
            </div>

            <p class="fw-bold mb-2">Wednesday </p>
            <div v-if="detail.page_details_hours.wednesday_start_time1 != detail.page_details_hours.wednesday_end_time1" class="d-flex justify-content-between">
                <div>
                    <p>Start Time</p>
                    <p>{{ detail.page_details_hours.wednesday_start_time1 }}</p>
                </div>
                <div>
                    <p>End Time</p>
                    <p>{{ detail.page_details_hours.wednesday_end_time1 }}</p>
                </div>
            </div>
            <div v-else class="d-flex justify-content-between">
                <div>
                    <p class="fw-bold">Closed</p>
                </div>
            </div>
            <div class="d-flex justify-content-between" v-if="detail.page_details_hours.wednesday_start_time2">
                <div>
                    <p>Start Time 2</p>
                    <p>{{ detail.page_details_hours.wednesday_start_time2 }}</p>
                </div>
                <div>
                    <p>End Time 2</p>
                    <p>{{ detail.page_details_hours.wednesday_end_time2 }}</p>
                </div>
            </div>

            <p class="fw-bold mb-2">Thursday </p>
            <div v-if="detail.page_details_hours.thursday_start_time1 != detail.page_details_hours.thursday_end_time1" class="d-flex justify-content-between">
                <div>
                    <p>Start Time</p>
                    <p>{{ detail.page_details_hours.thursday_start_time1 }}</p>
                </div>
                <div>
                    <p>End Time</p>
                    <p>{{ detail.page_details_hours.thursday_end_time1 }}</p>
                </div>
            </div>
            <div v-else class="d-flex justify-content-between">
                <div>
                    <p class="fw-bold">Closed</p>
                </div>
            </div>
            <div class="d-flex justify-content-between" v-if="detail.page_details_hours.thursday_start_time2">
                <div>
                    <p>Start Time 2</p>
                    <p>{{ detail.page_details_hours.thursday_start_time2 }}</p>
                </div>
                <div>
                    <p>End Time 2</p>
                    <p>{{ detail.page_details_hours.thursday_end_time2 }}</p>
                </div>
            </div>

            <p class="fw-bold mb-2">Friday </p>
            <div v-if="detail.page_details_hours.friday_start_time1 != detail.page_details_hours.friday_end_time1" class="d-flex justify-content-between">
                <div>
                    <p>Start Time</p>
                    <p>{{ detail.page_details_hours.friday_start_time1 }}</p>
                </div>
                <div>
                    <p>End Time</p>
                    <p>{{ detail.page_details_hours.friday_end_time1 }}</p>
                </div>
            </div>
            <div v-else class="d-flex justify-content-between">
                <div>
                    <p class="fw-bold">Closed</p>
                </div>
            </div>
            <div class="d-flex justify-content-between" v-if="detail.page_details_hours.friday_start_time2">
                <div>
                    <p>Start Time 2</p>
                    <p>{{ detail.page_details_hours.friday_start_time2 }}</p>
                </div>
                <div>
                    <p>End Time 2</p>
                    <p>{{ detail.page_details_hours.friday_end_time2 }}</p>
                </div>
            </div>

        
        </div>

        
    </div>
</template>

<script>

export default {
    name: "PageHourDetail",
    components: {

  },
  data() {
        return {
            
        }
    },
    props: ["detail"],
    methods: {

    },
    computed: {
        
    },


}
</script>

