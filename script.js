// ฟังก์ชันโต้ตอบสำหรับเว็บไซต์โดยไม่ต้องรันผ่าน Server
document.addEventListener('DOMContentLoaded', () => {
    console.log("เว็บไซต์วันสำคัญทางพระพุทธศาสนาพร้อมใช้งาน (Client-side Only)");
    
    // แจ้งเตือนต้อนรับเมื่อผู้ใช้เข้าชมครั้งแรก
    const currentHour = new Date().getHours();
    let greeting = "ยินดีต้อนรับสู่เว็บไซต์วันสำคัญทางพระพุทธศาสนา";
    if (currentHour < 12) greeting = "อรุณสวัสดิ์ - ยินดีต้อนรับสู่ธรรมะวันสำคัญ";
    else if (currentHour < 18) greeting = "สวัสดีตอนบ่าย - ยินดีต้อนรับสู่ธรรมะวันสำคัญ";
    
    console.log(greeting);
});