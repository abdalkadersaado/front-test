import moment from "moment";
class Helpers {
    format_date(value) {
        if (value) {
            let now = moment(String(new Date())).format("YYYY-MM-DD HH:mm:ss");
            let date = moment(String(value)).format("YYYY-MM-DD HH:mm:ss");

            let date1 = moment(now, "DD-MM-YYYY HH:mm:ss");
            let date2 = moment(date, "DD-MM-YYYY HH:mm:ss");

            let seconds = date1.diff(date2, "seconds");
            let minutes = date1.diff(date2, "minutes");
            let hours = date1.diff(date2, "hours");
            if (seconds >= 0 && seconds < 60) {
                return "just now";
            }
            if (minutes > 0 && minutes < 60) {
                return minutes + " minutes ago";
            }
            if (minutes === 60) {
                return "1 hour ago";
            }
            if (hours > 0 && hours < 24) {
                return hours + " hours ago";
            }
            if (hours === 24) {
                return "1 day ago";
            }

            let now1 = moment(String(new Date())).format("DD-MM-YYYY");
            let date0 = moment(String(value)).format("DD-MM-YYYY");

            let date11 = moment(now1, "DD-MM-YYYY");
            let date22 = moment(date0, "DD-MM-YYYY");
            let month = date11.diff(date22, "months");
            let days = date11.diff(date22, "days");
            if (days < 31) {
                return days + " days ago";
            }
            if (month < 12) {
                return month + " month ago";
            }

            let year = date11.diff(date22, "years");
            return year + " year ago";
        }
    }
}

export default new Helpers();