function getUserLocationAndSetLanguage() {
    console.log('Fetching user location...');
    fetch('https://ipinfo.io?token=20624e98665a33')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if (data && data.country) {
                const location = data.country;
                console.log('User location:', location);
                setLanguage(location);
            } else {
                console.error('Invalid or missing data in the response:', data);
            }
        })
        .catch(error => {
            console.error('Error fetching user location:', error);
        });
}

function setLanguage(location) {
    console.log('Setting language based on location:', location);

    // Define a mapping of country codes to language codes.
    const languageMap = {
'US': 'en',  // United States - English

'PK': 'ur',  // Pakistan - Urdu
'HK': 'zh-TW',  // Hong Kong - Traditional Chinese

};


    // Default to English if no mapping is found
    const languageCode = languageMap[location] || 'en';
 
     if(languageCode === 'ur'){

    document.getElementById("maintext").innerHTML = "پابندیوں کو ہٹائیں اور اپنی تصور کو جگا دیں، اپنی خود کاری AI لے آئیں، اپنے خواب کو زندگی دو تنگ محنت کے ساتھ!";
    document.getElementById("freechat").innerHTML = "مفت چیٹ ابھی";
    document.getElementById("Download").innerHTML="ہماری موبائل ایپلیکیشن ڈاؤن لوڈ کریں"
    document.getElementById("feature").innerHTML="NSFWcharacter.ai کی خصوصیات"
    document.getElementById("home").innerHTML="گھر"
    document.getElementById("headerChatsLink").innerHTML = "چیٹ";
    document.getElementById("price").innerHTML= "قیمتوں کا تعین"
    document.getElementById("faq").innerHTML= "عمومی سوالات"
    document.getElementById("program").innerHTML ="ملحق پروگرام";
    document.getElementById("programs").innerHTML ="ملحق پروگرام";
    document.getElementById("joinNowLink").innerHTML="ابھی شامل ہوں"
    document.getElementById("quick").innerHTML ="فوری رابطے";
    document.getElementById("blog").innerHTML ="بلاگ";
    document.getElementById("about").innerHTML ="ہمارے بارے میں";
    document.getElementById("media").innerHTML ="سوشل میڈیا";
    document.getElementById("filter").innerHTML="کوئی فلٹر نہیں";
    document.getElementById("support").innerHTML="NSFW مواد کی حمایت کرتا ہے";
    document.getElementById("create").innerHTML="اپنا کردار خود بنائیں";
    document.getElementById("gen").innerHTML="امیج جنریشن";
    document.getElementById("reserved").innerHTML="NSFWcharacter © 2023. جملہ حقوق محفوظ ہیں"


    }
    else if(languageCode === 'zh-TW'){
        
    document.getElementById("maintext").innerHTML = "消除限制，釋放您的想像力，帶來您自己的角色AI，並在一點努力中實現自己的夢想！";
    document.getElementById("freechat").innerHTML = "立即免費聊天";
    document.getElementById("Download").innerHTML="下載我們的手機應用程式"
    document.getElementById("feature").innerHTML="NSFWcharacter.ai 的特色"
    document.getElementById("home").innerHTML="主页"
    document.getElementById("headerChatsLink").innerHTML = "聊天";
    document.getElementById("price").innerHTML= "價格";
    document.getElementById("faq").innerHTML= "常見問題"
    document.getElementById("program").innerHTML ="附加程序";
    document.getElementById("programs").innerHTML ="附加程序";
    document.getElementById("joinNowLink").innerHTML="立即加入";
    document.getElementById("quick").innerHTML ="快速連結";
    document.getElementById("blog").innerHTML ="博客";
    document.getElementById("about").innerHTML ="關於我們";
    document.getElementById("media").innerHTML ="社交媒體";
    document.getElementById("filter").innerHTML="無過濾器";
    document.getElementById("support").innerHTML="支援不良内容";
    document.getElementById("create").innerHTML="創建自己的角色";
    document.getElementById("gen").innerHTML="圖像生成";
    document.getElementById("reserved").innerHTML="NSFWcharacter © 2023.版權所有。"

    }
   else {
  
    document.getElementById("maintext").innerHTML = "Remove the restrictions and unleash your imagination, bring your own character AI, bring your own dream to life within a little effort!";
    document.getElementById("freechat").innerHTML = "Free Chat Now";
    document.getElementById("Download").innerHTML="Download our Mobile Apps"
    document.getElementById("feature").innerHTML="Features of NSFWcharacter.ai"
    document.getElementById("home").innerHTML="Home"
    document.getElementById("headerChatsLink").innerHTML = "Chats";
    document.getElementById("price").innerHTML= "Pricing";
    document.getElementById("faq").innerHTML= "FAQs"
    document.getElementById("program").innerHTML ="Affiliate Program"
    document.getElementById("programs").innerHTML ="Affiliate Programs"
    document.getElementById("joinNowLink").innerHTML="Join Now";
    document.getElementById("quick").innerHTML ="Quick Links"
    document.getElementById("blog").innerHTML ="Blog"
    document.getElementById("about").innerHTML ="About"
    document.getElementById("media").innerHTML ="Social Media"
    document.getElementById("filter").innerHTML="No Filter";
    document.getElementById("support").innerHTML="Supports NSFW Content";
    document.getElementById("create").innerHTML="Create Your Own Character";
    document.getElementById("gen").innerHTML="Image Generation";
    document.getElementById("reserved").innerHTML="NSFWcharacter © 2023. All Rights Reserved."

    }
    
    
    // Initialize the Google Translate widget with the selected language
    // googleTranslateElementInit(languageCode);
}

document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM loaded');
    getUserLocationAndSetLanguage();
});

// function googleTranslateElementInit(languageCode) {
//     new google.translate.TranslateElement({
//         pageLanguage: 'en',  // Default language
//         includedLanguages: languageCode  // Set to the user's language
//     }, 'google_translate_element');
// }