let friend_bio = [
    { name: "Alamin Islam", phone: "01731308873", job: "Web Developer" ,Image:"green book.png",link:"green book.png"},
    { name: "Abu Raihan",   phone: "01757447647", job: "Graphics Designer" ,Image:"green book.png"},
    { name: "Raju Islam",   phone: "01712345678", job: "Garments Supervisor" ,Image:"green book.png"},
    { name: "Polas Ahmed",  phone: "01822334455", job: "Digital Marketer", Image:"green book.png"},
    { name: "Sabbir Hossain", phone: "01911223344", job: "App Developer" ,Image:"green book.png"},
    { name: "Akhi Khatun",   phone: "01300998877", job: "Content Creator" ,Image:"green book.png"},
    { name: "Ripon Mia",    phone: "01555667788", job: "Video Editor", Image:"green book.png"},
    { name: "Mahedi Hasan", phone: "01677889900", job: "Crypto Analyst" ,Image:"green book.png"},
    { name: "Mokaddes Ali", phone: "01444555666", job: "Businessman" ,Image:"green book.png"},
    { name: "Jaman Khan", phone: "01799887766", job: "Software Tester" ,Image:"green book.png"}
];


let info = document.getElementById("main");



for (let i =0;i<friend_bio.length;i++ ) {info.innerHTML+=
'<div class="card">'+'<img src="'+friend_bio[i].Image +'"class="profile-img">'+'<p> নাম:'+'</p>'+friend_bio[i]. name+'<p> ফোন:'+'</p>'+ friend_bio[i].phone +'<p>জব:'+'</p>'+friend_bio[i].job+'<a href="'+friend_bio[i].link+'">'+'<br>'+'<button class="btn">more info</button>'+'</a>'+
'</div>'
    
};
function addFriend() {
    // ১. ইনপুট বক্স থেকে তথ্যগুলো সংগ্রহ করা
    let n = document.getElementById('name').value;
    let p = document.getElementById('phone').value;
    let j = document.getElementById('job').value;
    let l = document.getElementById('link').value;

    // ২. নতুন একটি অবজেক্ট তৈরি করে অ্যারেতে পাঠানো (Push করা)
    friend_bio.push({
        name: n,
        phone: p,
        job: j,
        Image: "green book.png", // আপাতত লোগোটাই থাক
        link: l
    });

    // ৩. তালিকাটি নতুন করে দেখানোর জন্য তোমার সেই লুপওয়ালা ফাংশনটাকে আবার কল করা
    displayCards(); 
    
    // ৪. ফর্ম খালি করে দেওয়া
    document.getElementById('name').value = "";
    document.getElementById('phone').value = "";
}
