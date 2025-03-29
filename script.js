

const translations = {
        en: {
            title: "Geometric Calculations",
            title1: "Geometric Calculations",
            area: "Area Calculations",
            perimeter: "Perimeter Calculations",
            volume: "Volume Calculations",
            vision_mission: "Vision & Mission",
            about_dev: "About the Developer",
            contact_us: "Contact Us",
            vision_mission_title : "Vision & Mission",
            about_title: "About the Developer",
            contact_title: "Contact Us",
            vision_text: `
                Our mission is to provide accurate and efficient geometric calculations...<br><br>
                Vision and Mission: Our vision is to become the leading platform for precise and <br><br>
                user-friendly geometric calculations, empowering students, engineers, and professionals <br><br>
                worldwide. We aim to simplify complex mathematical concepts by offering intuitive tools <br><br>
                that deliver fast, accurate results. Our mission is to provide a seamless experience <br><br>
                that enhances learning, problem-solving, and design processes. By combining technology <br><br>
                with educational resources, we strive to support individuals in mastering geometry with ease. <br><br>
                Whether calculating area, perimeter, or volume, our platform ensures reliable outcomes <br><br>
                for various real-world applications. We are committed to continuous improvement, innovation, <br><br>
                and customer satisfaction to achieve this goal.<br><br>
            `,
        footer: "&copy; 2025 Geometric Calculations. All rights reserved by Eng-Ahmed Eltamimy.",
        personal_info: "Personal Information",
        name_label: "Name:",
        university_label: "University:",
        faculty_label: "Faculty:",
        major_label: "Major:",
        specialization_label: "Specialization:",
        student_id_label: "Student ID:",
        developer_name: "Eng-Ahmed Mahmoud Ibrahim",
        university: "Arab Open University",
        faculty: "Faculty of Computer Science and Information Technology",
        major: "Computer Science",
        specialization: "Software Engineering and Web Development",
        student_id: "23510080",
        project_details: "Project Details",
        tma_assignment: "TMA Assignment",
        course_name: "Web Development (TT284)",
        email: "Email",
        phone: "Phone Number",
        send_button: "Send",



        },
        ar: {
            title: "الحسابات الهندسية",
            title1: "الحسابات الهندسية",
            area: "حساب المساحة",
            perimeter: "حساب المحيط",
            volume: "حساب الحجم",
            vision_mission: "الرؤية والرسالة",
            about_dev: "عن المطور",
            contact_us: "اتصل بنا",
            vision_mission_title : "الرؤية والرسالة",
            about_title: "عن المطور",
            contact_title: "اتصل بنا",
            vision_text: `
                رسالتنا هي تقديم حسابات هندسية دقيقة وفعالة...<br><br>
                الرؤية والرسالة: تتمثل رؤيتنا في أن نصبح المنصة الرائدة للحسابات الهندسية الدقيقة وسهلة الاستخدام، <br><br>
                مما يمكّن الطلاب والمهندسين والمحترفين حول العالم. نهدف إلى تبسيط المفاهيم الرياضية المعقدة من خلال <br><br>
                تقديم أدوات بديهية توفر نتائج سريعة ودقيقة. رسالتنا هي توفير تجربة سلسة تعزز التعلم وحل المشكلات <br><br>
                وعمليات التصميم. من خلال دمج التكنولوجيا مع الموارد التعليمية، نسعى لدعم الأفراد في إتقان الهندسة <br><br>
                بسهولة. سواء كنت تحسب المساحة أو المحيط أو الحجم، فإن منصتنا تضمن نتائج موثوقة لمجموعة متنوعة <br><br>
                من التطبيقات الواقعية. نحن ملتزمون بالتحسين المستمر والابتكار ورضا العملاء لتحقيق هذا الهدف.<br><br>
            `,
        footer: "&copy; 2025 الحسابات الهندسية. جميع الحقوق محفوظة للمهندس أحمد التميمي.",
        personal_info: "المعلومات الشخصية",
        name_label: "الاسم:",
        university_label: "الجامعة:",
        faculty_label: "الكلية:",
        major_label: "التخصص العام:",
        specialization_label: "التخصص الدقيق:",
        student_id_label: "رقم الطالب:",
        developer_name: "م/أحمد محمود إبراهيم",
        university: "الجامعة العربية المفتوحة",
        faculty: "كلية علوم الحاسبات والمعلومات",
        major: "علوم الحاسوب",
        specialization: "هندسة البرمجيات وتطوير الويب",
        student_id: "23510080",
        project_details: "تفاصيل المشروع",
        tma_assignment: "تكليف TMA",
        course_name: "تطوير مواقع الويب (TT284)",
        email: "البريد الإلكتروني",
        phone: "رقم الهاتف",
        send_button: "إرسال",


        
        }
    };
    
    function changeLanguage(lang) {
        document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

        document.getElementById('title').textContent = translations[lang].title;
        document.getElementById('title1').textContent = translations[lang].title;
        document.getElementById('area').textContent = translations[lang].area;
        document.getElementById('perimeter').textContent = translations[lang].perimeter;
        document.getElementById('volume').textContent = translations[lang].volume;
        document.getElementById('vision-mission-title').textContent = translations[lang].vision_mission;
        document.getElementById('about-title').textContent = translations[lang].about_dev;
        document.getElementById('contact-title').textContent = translations[lang].contact_us;
        document.getElementById('vision-text').innerHTML = translations[lang].vision_text;
        document.getElementById('vision_mission_title').textContent = translations[lang].vision_mission;
        document.getElementById('about_title').textContent = translations[lang].about_dev;
        document.getElementById('contact_title').textContent = translations[lang].contact_us;
        document.getElementById('vision-text').innerHTML = translations[lang].vision_text;
        document.getElementById('footer').innerHTML = translations[lang].footer;
    
        // About Developer Section
        document.getElementById('personal-info').textContent = translations[lang].personal_info;
    document.getElementById('name-label').textContent = translations[lang].name_label;
    document.getElementById('university-label').textContent = translations[lang].university_label;
    document.getElementById('faculty-label').textContent = translations[lang].faculty_label;
    document.getElementById('major-label').textContent = translations[lang].major_label;
    document.getElementById('specialization-label').textContent = translations[lang].specialization_label;
    document.getElementById('student-id-label').textContent = translations[lang].student_id_label;
    document.getElementById('developer-name').textContent = translations[lang].developer_name;
    document.getElementById('university').textContent = translations[lang].university;
    document.getElementById('faculty').textContent = translations[lang].faculty;
    document.getElementById('major').textContent = translations[lang].major;
    document.getElementById('specialization').textContent = translations[lang].specialization;
    document.getElementById('student-id').textContent = translations[lang].student_id;
    document.getElementById('project-details').textContent = translations[lang].project_details;
    document.getElementById('tma-assignment').textContent = translations[lang].tma_assignment;
    document.getElementById('course-name').textContent = translations[lang].course_name;


        // Contact Section
        document.getElementById('email-label').textContent = translations[lang].email;
        document.getElementById('phone-label').textContent = translations[lang].phone;
        document.querySelector('textarea[name="message"]').placeholder = translations[lang].message_placeholder;
        document.querySelector('button[type="submit"]').textContent = translations[lang].send_button;

      
        
       
            
          
    }
    const translations1 = {
        en: {
            title: "Geometric Calculations",
            area_title: "Area Calculations",
            perimeter_title: "Perimeter Calculations",
            volume_title: "Volume Calculations",
            select_shape: "Select Shape:",
            select: "--Select--",
            square: "Square",
            rectangle: "Rectangle",
            triangle: "Triangle",
            circle: "Circle",
            cube: "Cube",
            side_length: "Side Length:",
            length: "Length:",
            width: "Width:",
            base: "Base:",
            height: "Height:",
            radius: "Radius:",
            calculate_area: "Calculate Area",
            calculate_perimeter: "Calculate Perimeter",
            calculate_volume: "Calculate Volume",
            reset: "Reset Values",
            footer: "&copy; 2025 Geometric Calculations. All rights reserved by Eng-Ahmed Eltamimy."
        },
        ar: {
            title: "الحسابات الهندسية",
            area_title: "حساب المساحة",
            perimeter_title: "حساب المحيط",
            volume_title: "حساب الحجم",
            select_shape: "اختر الشكل:",
            select: "--اختر--",
            square: "مربع",
            rectangle: "مستطيل",
            triangle: "مثلث",
            circle: "دائرة",
            cube: "مكعب",
            side_length: "طول الضلع:",
            length: "الطول:",
            width: "العرض:",
            base: "القاعدة:",
            height: "الارتفاع:",
            radius: "نصف القطر:",
            calculate_area: "احسب المساحة",
            calculate_perimeter: "احسب المحيط",
            calculate_volume: "احسب الحجم",
            reset: "إعادة القيم",
            footer: "&copy; 2025 الحسابات الهندسية. جميع الحقوق محفوظة للمهندس أحمد التميمي."
        }
    };
    
    function changeLanguageall() {
        const lang = document.getElementById("languageSelector").value;
        document.documentElement.setAttribute('lang', lang);
        document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
        
        const elements = document.querySelectorAll("[data-translate]");
        elements.forEach(element => {
            const key = element.getAttribute("data-translate");
            element.innerHTML = translations1[lang][key];
        });
    }
    
    function translateText(text) {
        return document.documentElement.lang === "ar" ? translations1.ar[text] || text : text;
    }

    function translateText(text) {
    const translations1 = {
        // Area Calculations
        "Area Calculations": "حساب المساحة",
        "Select Shape:": "اختر الشكل:",
        "Square": "مربع",
        "Rectangle": "مستطيل",
        "Triangle": "مثلث",
        "Circle": "دائرة",
        "Side Length:": "طول الضلع:",
        "Length:": "الطول:",
        "Width:": "العرض:",
        "Base:": "القاعدة:",
        "Height:": "الارتفاع:",
        "Radius:": "نصف القطر:",
        "Calculate Area": "احسب المساحة",
        "Reset Values": "إعادة القيم",
        "Area:": "المساحة:",
    
        // Perimeter Calculations
        "Perimeter Calculations": "حساب المحيط",
        "Side Length (Perimeter):": "طول الضلع (محيط):",
        "Length (Perimeter):": "الطول (محيط):",
        "Width (Perimeter):": "العرض (محيط):",
        "Side 1:": "الضلع الأول:",
        "Side 2:": "الضلع الثاني:",
        "Side 3:": "الضلع الثالث:",
        "Calculate Perimeter": "احسب المحيط",
        "Perimeter:": "المحيط:",
    
        // Volume Calculations
        "Volume Calculations": "حساب الحجم",
        "Cube": "مكعب",
        "Side Length (Volume):": "طول الضلع (حجم):",
        "Calculate Volume": "احسب الحجم",
        "Reset Values (Volume)": "إعادة القيم (حجم)",
        "Volume:": "الحجم:"
    }
        return document.documentElement.lang === "ar" ? translations1[text] || text : text;

};

    function showPerimeterInputs() {
        const shape = document.getElementById("perimeterShape").value;
        const perimeterInputs = document.getElementById("perimeterInputs");
        perimeterInputs.innerHTML = ""; // Clear previous inputs
    
        if (shape === "square") {
            perimeterInputs.innerHTML = `
                <label for="sidePerimeter">${translateText("Side Length:")}</label>
                <input type="number" id="sidePerimeter" required>
            `;
        } else if (shape === "rectangle") {
            perimeterInputs.innerHTML = `
                <label for="lengthPerimeter">${translateText("Length:")}</label>
                <input type="number" id="lengthPerimeter" required>
                <label for="widthPerimeter">${translateText("Width:")}</label>
                <input type="number" id="widthPerimeter" required>
            `;
        } else if (shape === "triangle") {
            perimeterInputs.innerHTML = `
                <label for="side1">${translateText("Side 1:")}</label>
                <input type="number" id="side1" required>
                <label for="side2">${translateText("Side 2:")}</label>
                <input type="number" id="side2" required>
                <label for="side3">${translateText("Side 3:")}</label>
                <input type="number" id="side3" required>
            `;
        }
    }

    function calculatePerimeter() {
        const shape = document.getElementById("perimeterShape").value;
        let perimeter;
    
        if (shape === "square") {
            const side = parseFloat(document.getElementById("sidePerimeter").value);
            perimeter = 4 * side;
        } else if (shape === "rectangle") {
            const length = parseFloat(document.getElementById("lengthPerimeter").value);
            const width = parseFloat(document.getElementById("widthPerimeter").value);
            perimeter = 2 * (length + width);
        } else if (shape === "triangle") {
            const side1 = parseFloat(document.getElementById("side1").value);
            const side2 = parseFloat(document.getElementById("side2").value);
            const side3 = parseFloat(document.getElementById("side3").value);
            perimeter = side1 + side2 + side3;
        }
    
        document.getElementById("perimeterResult").innerText = `${translateText("Perimeter:")} ${perimeter.toFixed(2)}`;
    }

    function showVolumeInputs() {
        const shape = document.getElementById("volumeShape").value;
        const volumeInputs = document.getElementById("volumeInputs");
        volumeInputs.innerHTML = ""; // Clear previous inputs
    
        if (shape === "cube") {
            volumeInputs.innerHTML = `
                <label for="sideVolume">${translateText("Side Length:")}</label>
                <input type="number" id="sideVolume" required>
            `;
        }
    }

    function calculateVolume() {
        const shape = document.getElementById("volumeShape").value;
        let volume;
    
        if (shape === "cube") {
            const side = parseFloat(document.getElementById("sideVolume").value);
            volume = Math.pow(side, 3);
        }
    
        document.getElementById("volumeResult").innerText = `${translateText("Volume:")} ${volume.toFixed(2)}`;
    }

function resetForm(formId, inputsId, resultId) {
    document.getElementById(formId).reset();
    document.getElementById(inputsId).innerHTML = "";
    document.getElementById(resultId).innerText = "";
}
