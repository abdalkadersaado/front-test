<template>
    <div class="div">
        <div v-if="post">
            <div class="row mb-3 me-0 bg-white"  >
                <div class="card card_post">
                    <div class="card-header bg-white border-bottom-0 d-flex justify-content-between" >
                        <div class="d-flex align-items-center">
                            <div>
                                <img v-if="post.model.has_media_profile === false" src="@/assets/img_friends/default1.png" alt="">
                                <img v-else :src="post.model.media[0].icon" alt="">
                            </div>
                            <div class="ms-3">
                                <p class="mb-0" v-if="post.model_type == 'Profile'">
                                    {{ post.model.first_name }} {{ post.model.last_name }}
                                </p>
                                <p v-else class="mb-0">
                                    {{ post.model.name }}<small style="color: green; font-weight: bold;">page</small>
                                </p>
                                <small class="text-muted">
                                    {{ format_date(post.created_at) }}
                                </small>
                            </div>
                        </div>
                        
                    </div>
                    <div class="card-body">
                        <p v-if="post.content" class="card-text">{{ post.content }}</p>
                        <div v-if="post.has_media" class="media_container">
                            <div class="media_one" v-if="post.media.length === 1">
                                <img v-if="post.media[0].media_type.includes('Image')" :src="post.media[0].src_url" alt="">
                                <video v-else controls  :src="post.media[0].src_url">
                                </video>
                            </div>
                            <div class="media_two d-flex justify-content-between align-items-center" v-if="post.media.length === 2">
                                <div class="media_two_box">
                                    <img v-if="post.media[0].media_type.includes('Image')" :src="post.media[0].src_url" alt="">
                                    <video v-else controls  :src="post.media[0].src_url"></video>
                                </div>
                                <div class="media_two_box">
                                    <img v-if="post.media[1].media_type.includes('Image')" :src="post.media[1].src_url" alt="">
                                    <video v-else controls  :src="post.media[1].src_url"></video>
                                </div>
                            </div>
                            <div class="media_three" v-if="post.media.length === 3">
                                <div class="media_three_box">
                                    <img v-if="post.media[0].media_type.includes('Image')" :src="post.media[0].src_url" alt="">
                                    <video v-else controls  :src="post.media[0].src_url"></video>
                                </div>
                                <div class="media_three_box">
                                    <img v-if="post.media[1].media_type.includes('Image')" :src="post.media[1].src_url" alt="">
                                    <video v-else controls  :src="post.media[1].src_url"></video>
                                </div>
                                <div class="media_three_box_under">
                                    <img v-if="post.media[2].media_type.includes('Image')" :src="post.media[2].src_url" alt="">
                                    <video v-else controls  :src="post.media[2].src_url"></video>
                                </div>
                            </div>
                            <div class="media_four" v-if="post.media.length === 4">
                                <div class="media_four_box">
                                    <img v-if="post.media[0].media_type.includes('Image')" :src="post.media[0].src_url" alt="">
                                    <video v-else controls  :src="post.media[0].src_url"></video>
                                </div>
                                <div class="media_four_box">
                                    <img v-if="post.media[1].media_type.includes('Image')" :src="post.media[1].src_url" alt="">
                                    <video v-else controls  :src="post.media[1].src_url"></video>
                                </div>
                                <div class="media_four_box">
                                    <img v-if="post.media[2].media_type.includes('Image')" :src="post.media[2].src_url" alt="">
                                    <video v-else controls  :src="post.media[2].src_url"></video>
                                </div>
                                <div class="media_four_box">
                                    <img v-if="post.media[3].media_type.includes('Image')" :src="post.media[3].src_url" alt="">
                                    <video v-else controls  :src="post.media[3].src_url"></video>
                                </div>
                            </div>
                            <div class="media_bigger" v-if="post.media.length > 4">
                                <div class="media_bigger_box">
                                    <img v-if="post.media[0].media_type.includes('Image')" :src="post.media[0].src_url" alt="">
                                    <video v-else controls  :src="post.media[0].src_url"></video>
                                </div>
                                <div class="media_bigger_box">
                                    <img v-if="post.media[1].media_type.includes('Image')" :src="post.media[1].src_url" alt="">
                                    <video v-else controls  :src="post.media[1].src_url"></video>
                                </div>
                                <div class="media_bigger_box">
                                    <img v-if="post.media[2].media_type.includes('Image')" :src="post.media[2].src_url" alt="">
                                    <video v-else controls  :src="post.media[2].src_url"></video>
                                </div>
                                <div class="media_bigger_box">
                                    <img v-if="post.media[3].media_type.includes('Image')" :src="post.media[3].src_url" alt="">
                                    <video v-else controls  :src="post.media[3].src_url"></video>
                                </div>
                                <p class="bigger_p d-flex align-items-center justify-content-center"><span>+{{ post.media.length-4 }}</span></p>
                            </div>
                        </div>
                        
                        <div class="d-flex justify-content-between align-items-center body_box">
                            <div class="d-flex justify-content-center align-items-center ">
                                <svg  xmlns="http://www.w3.org/2000/svg" width="12.441" height="11.567" viewBox="0 0 12.441 11.567">
                                    <path id="like-svgrepo-com" d="M12.42,5.275A3.526,3.526,0,0,0,9.053,1.826,3.347,3.347,0,0,0,6.186,3.478a3.225,3.225,0,0,0-2.8-1.652A3.526,3.526,0,0,0,.021,5.275,3.556,3.556,0,0,0,.127,6.586,5.622,5.622,0,0,0,1.849,9.46l4.334,3.933L10.592,9.46a5.622,5.622,0,0,0,1.722-2.874A3.564,3.564,0,0,0,12.42,5.275Z" transform="translate(0 -1.826)" fill="#f55"/>
                                </svg>
                                <!-- <span class="ms-2" >{{ post.Interactions.length }}</span> -->
                            </div>
                            <div>
                                <span>11 {{ $t("comments") }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div v-else-if="post_page">
            <div class="row mb-3 me-0 bg-white"  >
                <div class="card card_post">
                    <div class="card-header bg-white border-bottom-0 d-flex justify-content-between" >
                        <div class="d-flex align-items-center">
                            <div>
                                <img v-if="post_page.page.has_media_profile === false" src="@/assets/img_friends/default1.png" alt="">
                                <img v-else-if="post_page.page.media[0].collection_name.includes('profiles')" :src="post_page.page.media[0].icon" alt="">
                                <img v-else-if="post_page.page.media[1].collection_name.includes('profiles')" :src="post_page.page.media[1].icon" alt="">
                            </div>
                            <div class="ms-3">
                                <p class="mb-0">{{ post_page.page.name }} </p>
                                <small class="text-muted">
                                    {{ format_date(post_page.created_at) }}
                                </small>
                            </div>
                        </div>
                        
                    </div>
                    <div class="card-body">
                        <p v-if="post_page.content" class="card-text">{{ post_page.content }}</p>
                        <div v-if="post_page.has_media" class="media_container">
                            <div class="media_one" v-if="post_page.media.length === 1">
                                <img v-if="post_page.media[0].media_type.includes('Image')" :src="post_page.media[0].src_url" alt="">
                                <video v-else controls  :src="post_page.media[0].src_url">
                                </video>
                            </div>
                            <div class="media_two d-flex justify-content-between align-items-center" v-if="post_page.media.length === 2">
                                <div class="media_two_box">
                                    <img v-if="post_page.media[0].media_type.includes('Image')" :src="post_page.media[0].src_url" alt="">
                                    <video v-else controls  :src="post_page.media[0].src_url"></video>
                                </div>
                                <div class="media_two_box">
                                    <img v-if="post_page.media[1].media_type.includes('Image')" :src="post_page.media[1].src_url" alt="">
                                    <video v-else controls  :src="post_page.media[1].src_url"></video>
                                </div>
                            </div>
                            <div class="media_three" v-if="post_page.media.length === 3">
                                <div class="media_three_box">
                                    <img v-if="post_page.media[0].media_type.includes('Image')" :src="post_page.media[0].src_url" alt="">
                                    <video v-else controls  :src="post_page.media[0].src_url"></video>
                                </div>
                                <div class="media_three_box">
                                    <img v-if="post_page.media[1].media_type.includes('Image')" :src="post_page.media[1].src_url" alt="">
                                    <video v-else controls  :src="post_page.media[1].src_url"></video>
                                </div>
                                <div class="media_three_box_under">
                                    <img v-if="post_page.media[2].media_type.includes('Image')" :src="post_page.media[2].src_url" alt="">
                                    <video v-else controls  :src="post_page.media[2].src_url"></video>
                                </div>
                            </div>
                            <div class="media_four" v-if="post_page.media.length === 4">
                                <div class="media_four_box">
                                    <img v-if="post_page.media[0].media_type.includes('Image')" :src="post_page.media[0].src_url" alt="">
                                    <video v-else controls  :src="post_page.media[0].src_url"></video>
                                </div>
                                <div class="media_four_box">
                                    <img v-if="post_page.media[1].media_type.includes('Image')" :src="post_page.media[1].src_url" alt="">
                                    <video v-else controls  :src="post_page.media[1].src_url"></video>
                                </div>
                                <div class="media_four_box">
                                    <img v-if="post_page.media[2].media_type.includes('Image')" :src="post_page.media[2].src_url" alt="">
                                    <video v-else controls  :src="post_page.media[2].src_url"></video>
                                </div>
                                <div class="media_four_box">
                                    <img v-if="post_page.media[3].media_type.includes('Image')" :src="post_page.media[3].src_url" alt="">
                                    <video v-else controls  :src="post_page.media[3].src_url"></video>
                                </div>
                            </div>
                            <div class="media_bigger" v-if="post_page.media.length > 4">
                                <div class="media_bigger_box">
                                    <img v-if="post_page.media[0].media_type.includes('Image')" :src="post_page.media[0].src_url" alt="">
                                    <video v-else controls  :src="post_page.media[0].src_url"></video>
                                </div>
                                <div class="media_bigger_box">
                                    <img v-if="post_page.media[1].media_type.includes('Image')" :src="post_page.media[1].src_url" alt="">
                                    <video v-else controls  :src="post_page.media[1].src_url"></video>
                                </div>
                                <div class="media_bigger_box">
                                    <img v-if="post_page.media[2].media_type.includes('Image')" :src="post_page.media[2].src_url" alt="">
                                    <video v-else controls  :src="post_page.media[2].src_url"></video>
                                </div>
                                <div class="media_bigger_box">
                                    <img v-if="post_page.media[3].media_type.includes('Image')" :src="post_page.media[3].src_url" alt="">
                                    <video v-else controls  :src="post_page.media[3].src_url"></video>
                                </div>
                                <p class="bigger_p d-flex align-items-center justify-content-center"><span>+{{ post_page.media.length-4 }}</span></p>
                            </div>
                        </div>
                        
                        <div class="d-flex justify-content-between align-items-center body_box">
                            <div class="d-flex justify-content-center align-items-center ">
                                <svg  xmlns="http://www.w3.org/2000/svg" width="12.441" height="11.567" viewBox="0 0 12.441 11.567">
                                    <path id="like-svgrepo-com" d="M12.42,5.275A3.526,3.526,0,0,0,9.053,1.826,3.347,3.347,0,0,0,6.186,3.478a3.225,3.225,0,0,0-2.8-1.652A3.526,3.526,0,0,0,.021,5.275,3.556,3.556,0,0,0,.127,6.586,5.622,5.622,0,0,0,1.849,9.46l4.334,3.933L10.592,9.46a5.622,5.622,0,0,0,1.722-2.874A3.564,3.564,0,0,0,12.42,5.275Z" transform="translate(0 -1.826)" fill="#f55"/>
                                </svg>
                            </div>
                            <div>
                                <span>11 comments</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import moment from 'moment'

export default {
    name: "SharedPostComponent",
    props: ["post", "post_page"],
    methods: {
        
        format_date(value){
            if (value) {
                let now =  moment(String(new Date())).format('YYYY-MM-DD HH:mm:ss')
                let date =  moment(String(value)).format('YYYY-MM-DD HH:mm:ss')
        
                let date1 = moment(now, 'DD-MM-YYYY HH:mm:ss');
                let date2 = moment(date, 'DD-MM-YYYY HH:mm:ss');

                let seconds = date1.diff(date2, 'seconds')
                let minutes = date1.diff(date2, 'minutes')
                let hours = date1.diff(date2, 'hours')
                if (seconds >= 0 && seconds < 60) {
                    return "just now"
                }
                if (minutes > 0 && minutes < 60) {
                    return minutes + " minutes ago"
                }
                if (minutes === 60) {
                    return "1 hour ago"
                }
                if (hours > 0 && hours < 24) {
                    return hours + " hours ago"
                }
                if (hours === 24) {
                    return "1 day ago"
                }
            
                    let now1 =  moment(String(new Date())).format('DD-MM-YYYY')
                    let date0 =  moment(String(value)).format('DD-MM-YYYY')
            

                    let date11 = moment(now1, 'DD-MM-YYYY');
                    let date22 = moment(date0, 'DD-MM-YYYY');
                    let month = date11.diff(date22, 'months')
                    let days = date11.diff(date22, 'days')
                    if (days < 31 ) {
                        return days + " days ago"
                    }
                    if (month < 12) {
                        return month + " month ago"
                    }

                    let year = date11.diff(date22, 'years')
                    return year + " year ago"

            }
        },
        
    },
    computed: {
    
    }
    
}
</script>

<style lang="scss" scoped>
    .row{
        

        .card_post {
            
            padding: 0;

            .card-header {
                img {
                    width: 40px;
                    border-radius: 50%;
                }
            }

            .card-body {
                padding: 0;
                overflow: hidden;

                p {
                    padding-left: 1.2rem;
                }

                .media_container {
                    max-height: 700px;
                    width: 100% !important;
                    overflow: hidden;

                    .media_one {
                        max-height: 100% !important;
                        width: 100% !important;
                        overflow: hidden;
                        // text-align: center;

                        img {
                            width: 100% !important;
                            height: 100% !important;
                            object-fit: fill !important;
                        }

                        video {
                            object-fit: cover;
                        }
                    }

                    .media_two {
                        height: 100%;
                        width: 100% !important;
                        overflow: hidden;

                        .media_two_box {
                            width: 49%;
                            height: 100% !important;
                            overflow: hidden;
                            
                            
                            img {
                                width: 100% !important;
                                height: 100%;
                                object-fit: contain;
                            }

                            video {
                                width: 100% !important;
                                height: 100%;
                                object-fit: contain;
                            }
                        }
                    }

                    .media_three {
                        height: 100%;
                        width: 100% !important;
                        overflow: hidden;

                        .media_three_box {
                            width: 50%;
                            height: 50% !important;
                            display: inline-block;
                            overflow: hidden;
                            
                            img {
                                width: 100% !important;
                                height: 100%;
                                object-fit: contain;
                            }

                            video {
                                width: 100% !important;
                                height: 100%;
                                object-fit: cover;
                            }
                        }

                        .media_three_box_under {
                            width: 100%;
                            height: 50% !important;
                            overflow: hidden;

                            img {
                                width: 100% !important;
                                height: 100%;
                                object-fit: contain;
                            }

                            video {
                                width: 100% !important;
                                height: 100%;
                                object-fit: cover;
                            }
                        }
                    }

                    .media_four {
                        height: 100%;
                        width: 100% !important;
                        overflow: hidden;

                        .media_four_box {
                            width: 50% !important;
                            height: 350px !important;
                            display: inline-block;
                            overflow: hidden;
                            
                            img {
                                width: 100% !important;
                                height: 100%;
                                object-fit: contain;
                            }

                            video {
                                width: 100% !important;
                                height: 100%;
                                object-fit: cover;
                            }
                        }
                    }

                    .media_bigger {
                        height: 100%;
                        width: 100% !important;
                        overflow: hidden;
                        position: relative;

                        .media_bigger_box {
                            width: 50% !important;
                            height:  350px !important;
                            display: inline-block;
                            overflow: hidden;
                            
                            img {
                                width: 100% !important;
                                height: 100% !important;
                                object-fit: contain;
                            }

                            video {
                                width: 100% !important;
                                height: 100%;
                                object-fit: cover;
                            }
                        }

                        .bigger_p {
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%, -50%);
                            color: white;
                            font-weight: bolder;
                            font-size: 20px;
                            width: 100px;
                            height: 100px;
                            padding: 0 !important;
                            background-color: rgba(119, 119, 119, 0.699);
                            border-radius: 50%;
                            cursor: pointer;
                        }
                    }

                }

                    

                .body_box {
                    margin-top: 1.5rem !important;
                    padding: 0 2rem;
                    margin-bottom: 0.5rem;

                }
                .shared {
                    padding: 0 1.2rem;
                    
                }
            }

            .card-footer {
                
                small {
                    margin-left: 2.5rem;
                }
                
                .addreaction {
                    .box-reaction-items {
                            display: none;
                        }
                        cursor: pointer;
                        position: relative;

                        &:hover {
                            .box-reaction-items {
                                display: block !important;
                                position: absolute;
                                background-color: black;
                                color: white;
                                padding: 10px;
                                border-radius: 5px;
                                top: -40px;
                                left: 0;
                                width: auto !important;
                                span {
                                    margin: 0 5px;
                                }
                            }
                        }
                    }
                    .like {
                        color: blue !important;
                        font-weight: bold !important;
                    }
                    .love {
                        color: red !important;
                        font-weight: bold !important;
                    }

                    .angry {
                        color: green !important;
                        font-weight: bold !important;
                    }
            }   
        }

    }

    @media  screen and (max-width: 500px){
            .card-footer {
                small {
                    margin-left: 1rem !important;
                }
            }   
        

    }
    
    @media screen and (max-width: 992px){
        .div {
            padding: 0 0.5rem !important;
            .row {
                // padding: 0 1rem !important;
                margin: 0 0 1rem 0  !important;

                .card-header {
                    p {
                        font-size: 0.4rem !important;
                    }

                    .right :nth-child(1),
                    .right :nth-child(2){
                            margin-right: 0.3rem !important;
                        
                    }
                }
            }
        }
        
    }
    
</style>
