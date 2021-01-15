/**
 * normal: The last time the user refreshed the 
 * status (login and click the button) was within 30 days
 * 
 * abnormal:  30 day
 * 
 * danger: 35 day and warning email will have been sent once a day.
 * 
 * lastWarned: 40 day passed and there's still no any response. 
 * 
 * aboutToFire: 45 day passed.
 * 
 * fired: 46 day.
 */
type FireStatus = "normal" | "abnormal" | "danger" | "lastWarned" | "aboutToFire" | "fired";
export default FireStatus;