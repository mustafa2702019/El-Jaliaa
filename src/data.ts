import { Department, Announcement, Teacher, Assignment, Grade, Message, PortalStudent, GalleryGroup } from './types';

export const DEPARTMENTS: Department[] = [
  {
    id: 'kindergarten',
    name: 'Kindergarten & Preschool',
    arabicName: 'مرحلة رياض الأطفال',
    iconName: 'Baby',
    gradeRange: 'Ages 3 - 5',
    gradeRangeAr: 'الأعمار من ٣ إلى ٥ سنوات',
    curriculum: 'Activity-Based & Bilingual (English & Arabic)',
    curriculumAr: 'تعليم قائم على الأنشطة وثنائي اللغة بالكامل',
    focus: 'Social-emotional development, motor skills, basic language phonics, Quran memorization, and creative play.',
    focusAr: 'التركيز على التطور الاجتماعي والعاطفي، المهارات الحركية، صوتيات اللغة الأساسية، تحفيظ القرآن، واللعب الابتكاري.',
    subjects: ['English Phonics', 'Arabic Letters', 'Islamic Stories & Ethos', 'Creative Arts', 'Elementary Mathematics', 'Physical Coordination'],
    subjectsAr: ['صوتيات اللغة الإنجليزية', 'الحروف الأبجدية والخط العربي', 'القصص والآداب الإسلامية', 'الفنون والتلوين الابتكاري', 'مبادئ الرياضيات المبسطة', 'التناسق والتربية البدنية'],
    headTeacher: {
      name: 'Ustazah Fatima Osman',
      nameAr: 'الأستاذة فاطمة عثمان',
      role: 'Head of Kindergarten',
      roleAr: 'مشرفة مرحلة رياض الأطفال',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
      quote: 'We focus on creating a warm, family-like environment where child curiosity is celebrated and core values are naturally integrated.',
      quoteAr: 'نركز كامل طاقتنا على إنشاء بيئة تربوية دافئة ومحفزة تشبه ترابط الأسرة، حيث نحتفي بفضول الأطفال ونغرس القيم الفاضلة بشكل طبيعي ومحبب.'
    }
  },
  {
    id: 'primary',
    name: 'Primary School (Grades 1-6)',
    arabicName: 'المرحلة الابتدائية',
    iconName: 'BookOpen',
    gradeRange: 'Grades 1 - 6',
    gradeRangeAr: 'الصفوف من الأول إلى السادس',
    curriculum: 'Sudanese National Curriculum + English Enrichment',
    curriculumAr: 'المنهج الوطني السوداني بالإضافة للمنهج الإنجليزي الإثرائي',
    focus: 'Strong foundational literacy, rigorous mathematical skills, scientific inquiry, and robust character-building.',
    focusAr: 'التأسيس المتين لمهارات القراءة والكتابة واللغويات، المهارات الرياضية والحسابية الصارمة، والتفكير العلمي وبناء الشخصية المتوازنة.',
    subjects: ['Arabic Language & Literature', 'Mathematics', 'General Science', 'Islamic / Christian Religious Studies', 'English Language (Special Pathway)', 'Social Studies (History & Geography)'],
    subjectsAr: ['اللغة العربية وآدابها', 'الرياضيات المنهجية', 'العلوم العامة والبيئة', 'التربية الدينية (الإسلامية / المسيحية)', 'اللغة الإنجليزية (المسار المتقدم)', 'الدراسات الاجتماعية (التاريخ والجغرافيا)'],
    headTeacher: {
      name: 'Mr. Mohamed Al-Hadi',
      nameAr: 'الأستاذ محمد الهادي',
      role: 'Head of Primary Education',
      roleAr: 'مدير المرحلة الابتدائية',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400',
      quote: 'Primary school is where the discipline of study meets the curiosity of childhood. We build learners who are respectful, focused, and cooperative.',
      quoteAr: 'المرحلة الابتدائية هي المحطة الفاصلة حيث يلتقي الانضباط الدراسي بفضول الطفولة. نحن نعمل على إعداد وتأسيس طلاب محترمين، متعاونين، ومحبين للتعلم.'
    }
  },
  {
    id: 'middle',
    name: 'Middle School (Grades 7-9)',
    arabicName: 'المرحلة المتوسطة',
    iconName: 'Compass',
    gradeRange: 'Grades 7 - 9',
    gradeRangeAr: 'الصفوف من السابع إلى التاسع',
    curriculum: 'Advanced Sudanese Curriculum with Bilingual Sciences',
    curriculumAr: 'المنهج السوداني المتقدم مع تدريس العلوم باللغتين',
    focus: 'Transition from rote learning to analytical thinking, scientific experiments, and moral leadership.',
    focusAr: 'الانتقال المنهجي من الحفظ والتلقين إلى التفكير النقدي والتحليلي، إجراء التجارب المخبرية العملية، وبناء المبادئ القيادية والأخلاقية.',
    subjects: ['Arabic Syntax & Composition', 'Advanced Mathematics', 'Physics & Chemistry (Bilingual)', 'Biology', 'English Literature', 'Arab & African History', 'Geography & Environmental Science', 'Information Technology'],
    subjectsAr: ['النحو والصرف والتعبير العربي', 'الرياضيات المتقدمة', 'الفيزياء والكيمياء (ثنائية اللغة)', 'علم الأحياء والوراثة', 'الأدب الإنجليزي وتعبيراته', 'التاريخ العربي والأفريقي القديم', 'الجغرافيا والعلوم البيئية', 'تكنولوجيا المعلومات والحوسبة'],
    headTeacher: {
      name: 'Dr. Tariq Al-Bashir',
      nameAr: 'الدكتور طارق البشير',
      role: 'Director of Middle School',
      roleAr: 'موجه ومسؤول المرحلة المتوسطة',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400',
      quote: 'We guide students during their most transformative years. Discipline is not about rules, but about cultivating self-respect and community responsibility.',
      quoteAr: 'نوجه طلابنا ونرعاهم خلال أكثر سنوات نموهم تحولاً وأهمية. الانضباط لدينا ليس مجرد فرض قوانين جامدة، بل هو غرس احترام الذات والمسؤولية المجتمعية.'
    }
  },
  {
    id: 'high',
    name: 'High School (Grades 10-12)',
    arabicName: 'المرحلة الثانوية',
    iconName: 'GraduationCap',
    gradeRange: 'Grades 10 - 12',
    gradeRangeAr: 'الصفوف من العاشر إلى الثاني عشر',
    curriculum: 'Academic Sudanese School Certificate (Scientific & Literary Tracks)',
    curriculumAr: 'شهادة الثانوية السودانية الرسمية (المسارين العلمي والأدبي)',
    focus: 'Rigorous preparation for university entrance exams, leadership, independent research, and civic service.',
    focusAr: 'التحضير والتأهيل الأكاديمي الصارم لامتحانات الشهادة الثانوية والقبول الجامعي، القيادة الإيجابية، البحث العلمي المستقل، والخدمة المجتمعية.',
    subjects: ['Pure & Applied Mathematics', 'Advanced Physics', 'Advanced Chemistry', 'English Language & IELTS Prep', 'Arabic Classical Literature', 'French Language', 'Civic Education & Leadership', 'Computer Science & Coding'],
    subjectsAr: ['الرياضيات البحتة والتطبيقية', 'الفيزياء المتقدمة والكهربية', 'الكيمياء العضوية والتحليلية', 'اللغة الإنجليزية والتحضير لـ IELTS', 'الأدب العربي البليغ والبلاغة', 'اللغة الفرنسية الكلاسيكية', 'التربية الوطنية وتنمية القيادة', 'علوم الحاسوب وهندسة البرمجيات'],
    headTeacher: {
      name: 'Professor Amna Al-Mahi',
      nameAr: 'البروفيسور آمنة الماحي',
      role: 'Principal & High School Coordinator',
      roleAr: 'مديرة المدرسة ومنسقة المرحلة الثانوية',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400',
      quote: 'Our high school graduates consistently score in the top percentiles nationwide. We instil a sense of high integrity and global leadership in each student.',
      quoteAr: 'يحقق خريجو المرحلة الثانوية لدينا باستمرار أعلى الدرجات والترتيب على المستوى القومي. نحن نحرص على غرس قيم النزاهة العالية والتطلع للقيادة العالمية في وجدان كل طالب وطالبة.'
    }
  }
];

export const INITIAL_ANNOUNCEMENTS: Announcement[] = [
  {
    id: 'a1',
    title: 'Admissions Open for Academic Year 2026-2027',
    titleAr: 'فتح باب القبول والتسجيل للعام الأكاديمي ٢٠٢٦ - ٢٠٢٧ م',
    category: 'Academic',
    categoryAr: 'أكاديمي',
    date: '2026-07-01',
    summary: 'The registration window for new students (Kindergarten through Grade 12) is officially open. Limited slots available.',
    summaryAr: 'تم فتح باب التسجيل والقبول للطلاب الجدد من مرحلة رياض الأطفال وحتى الصف الثاني عشر رسمياً. المقاعد محدودة.',
    content: 'We are pleased to welcome applications for the upcoming 2026-2027 school year. Parents can fill out the online admission form or schedule a tour of our Al-Ajami campus. We offer a balanced tuition plan with generous sibling discounts of up to 15% to support our community families.',
    contentAr: 'يسعدنا أن نعلن عن استقبال طلبات الالتحاق للعام الدراسي القادم ٢٠٢٦ - ٢٠٢٧ م. يرجى من أولياء الأمور تعبئة طلب القبول الإلكتروني أو تنسيق موعد لزيارة مبنى المدرسة بحي العجمي. نوفر تسهيلات ميسرة في السداد مع تقديم خصومات خاصة للأخوة تصل إلى ١٥٪ لدعم الأسر في مجتمعنا.',
    tags: ['Admissions', 'Enrollment', 'Registration'],
    tagsAr: ['القبول والتسجيل', 'تسجيل جديد', 'المستندات']
  },
  {
    id: 'a2',
    title: 'Sudanese Heritage & Cultural Day Celebrations',
    titleAr: 'الاحتفال بيوم التراث والثقافة السودانية السنوي',
    category: 'Community',
    categoryAr: 'المجتمع',
    date: '2026-07-15',
    summary: 'Join us for our annual cultural day celebrating Sudanese folklore, music, traditional crafts, culinary exhibits, and historic poetry.',
    summaryAr: 'شاركونا احتفالاتنا باليوم الثقافي السنوي لإحياء الفولكلور والموسيقى السودانية، الحرف التقليدية، ومعارض المأكولات، والشعر الكلاسيكي.',
    content: 'Our school community is excited to announce the Sudanese Cultural Day under the theme "Our Identity, Our Strength." Students will present traditional dances, a live marketplace of traditional crafts, a gallery of history, and authentic culinary dishes made by our parent community. All families are warmly invited to join.',
    contentAr: 'تتشرف إدارة مدرسة الجالية السودانية بدعوتكم لحضور اليوم الثقافي السوداني السنوي تحت شعار "هويتنا، قوتنا". سيقدم الطلاب عروضاً من الرقصات الشعبية، وبازاراً مخصصاً للأعمال والمنتجات اليدوية التراثية، ومعرضاً لتاريخ بلادنا العريق، بالإضافة للمأكولات السودانية الأصيلة بإشراف مجتمعي كامل. الدعوة عامة لكل الأسر والمهتمين.',
    tags: ['Cultural Day', 'Community Event', 'Heritage'],
    tagsAr: ['اليوم الثقافي', 'فعاليات مجتمعية', 'التراث والوطن']
  },
  {
    id: 'a3',
    title: 'High School Certificate Prep & Intensive Revision Seminars',
    titleAr: 'حصص المراجعة المكثفة لطلاب الشهادة الثانوية السودانية',
    category: 'Urgent',
    categoryAr: 'عاجل',
    date: '2026-07-10',
    summary: 'Mandatory revision schedules released for Grade 12 students sitting the Sudanese National Certificate exams.',
    summaryAr: 'تم إصدار جداول وجلسات المراجعة الأكاديمية الإلزامية لطلاب الصف الثاني عشر المقبلين على امتحانات الشهادة الثانوية السودانية.',
    content: 'In preparation for the National Certificate exams, our faculty is hosting intensive revision sessions every Saturday from 9:00 AM to 1:00 PM. These sessions cover mathematics, physics, and Arabic classical text analysis, focusing on previous year questions and mock grading papers. Attendance is crucial for academic success.',
    contentAr: 'في إطار دعم وتأهيل طلابنا لامتحانات الشهادة الثانوية الموقرة، تقيم المدرسة حصص مراجعة مكثفة إلزامية في عطلة نهاية الأسبوع (السبت من ٩:٠٠ صباحاً وحتى ١:٠٠ ظهراً). تغطي هذه الحصص مقررات الرياضيات البحتة، الفيزياء، والنحو والبلاغة العربية مع مراجعة كاملة للامتحانات المنهجية السابقة. الحضور إلزامي وهام لضمان النجاح والتفوق.',
    tags: ['Revision', 'Exams', 'Grade 12'],
    tagsAr: ['حصص مراجعة', 'امتحانات الشهادة', 'الصف الثالث ثانوي']
  },
  {
    id: 'a4',
    title: 'Science & Robotics Exhibition 2026',
    titleAr: 'معرض العلوم والابتكار والربوتات السنوي ٢٠٢٦ م',
    category: 'Event',
    categoryAr: 'فعالية',
    date: '2026-07-28',
    summary: 'Students from middle and high school will exhibit innovative science projects, mechanical models, and coding projects.',
    summaryAr: 'يقدم طلاب المرحلتين المتوسطة والثانوية ابتكاراتهم في مجالات المشاريع البيئية، النماذج الميكانيكية، ومشاريع البرمجة الذكية.',
    content: 'This year’s science exhibition celebrates environmental innovation. Our junior scientists will demonstrate automatic irrigation sensors, eco-friendly water purifiers, and educational robot code designed in our computer labs. Industry guests and university judges will present awards for outstanding scientific inquiry.',
    contentAr: 'يأتي معرض العلوم لهذا العام تحت شعار "الابتكار من أجل البيئة والتنمية". سيعرض علماؤنا الصغار مشاريع متميزة مثل حساسات الري التلقائي الذكي، مصافي المياه الصديقة للبيئة باستخدام الفحم النشط، ونماذج الروبوت البرمجية التي تم تطويرها في مختبرات الحاسوب لدينا. ستشرف على تحكيم المشاريع لجنة من أساتذة الجامعات والمهندسين لتقديم الجوائز للمشاريع المتميزة.',
    tags: ['Exhibition', 'Robotics', 'Science'],
    tagsAr: ['معرض العلوم', 'الروبوتات', 'البرمجة الذكية']
  }
];

export const TEACHERS: Teacher[] = [
  { id: 't1', name: 'Ustazah Fatima Osman', nameAr: 'الأستاذة فاطمة عثمان', role: 'Head of Kindergarten', roleAr: 'مشرفة رياض الأطفال', department: 'Kindergarten', departmentAr: 'رياض الأطفال', availableTimes: ['Monday 09:00 AM', 'Wednesday 11:00 AM', 'Thursday 01:00 PM'], availableTimesAr: ['الإثنين ٠٩:٠٠ صباحاً', 'الأربعاء ١١:٠٠ صباحاً', 'الخميس ٠١:٠٠ ظهراً'] },
  { id: 't2', name: 'Mr. Mohamed Al-Hadi', nameAr: 'الأستاذ محمد الهادي', role: 'Math Specialist', roleAr: 'أخصائي ومدرس الرياضيات', department: 'Primary', departmentAr: 'المرحلة الابتدائية', availableTimes: ['Sunday 10:00 AM', 'Tuesday 12:00 PM', 'Thursday 10:00 AM'], availableTimesAr: ['الأحد ١٠:٠٠ صباحاً', 'الثلاثاء ١٢:٠٠ ظهراً', 'الخميس ١٠:٠٠ صباحاً'] },
  { id: 't3', name: 'Dr. Tariq Al-Bashir', nameAr: 'الدكتور طارق البشير', role: 'Physics & General Science Teacher', roleAr: 'مدرس الفيزياء والعلوم العامة', department: 'Middle School', departmentAr: 'المرحلة المتوسطة', availableTimes: ['Monday 11:00 AM', 'Wednesday 09:00 AM', 'Thursday 02:00 PM'], availableTimesAr: ['الإثنين ١١:٠٠ صباحاً', 'الأربعاء ٠٩:٠٠ صباحاً', 'الخميس ٠٢:٠٠ ظهراً'] },
  { id: 't4', name: 'Professor Amna Al-Mahi', nameAr: 'البروفيسور آمنة الماحي', role: 'Senior Arabic & Classical Literature Teacher', roleAr: 'معلم أول اللغة العربية والبلاغة الكلاسيكية', department: 'High School', departmentAr: 'المرحلة الثانوية', availableTimes: ['Sunday 01:00 PM', 'Tuesday 02:00 PM', 'Wednesday 10:00 AM'], availableTimesAr: ['الأحد ٠١:٠٠ ظهراً', 'الثلاثاء ٠٢:٠٠ ظهراً', 'الأربعاء ١٠:٠٠ صباحاً'] },
  { id: 't5', name: 'Sheikh Khalid Ahmed', nameAr: 'الشيخ خالد أحمد', role: 'Quran Recitation & Islamic Morals', roleAr: 'مدرس تجويد القرآن والآداب الإسلامية', department: 'All Levels', departmentAr: 'جميع المراحل', availableTimes: ['Monday 10:00 AM', 'Tuesday 09:00 AM', 'Thursday 11:00 AM'], availableTimesAr: ['الإثنين ١٠:٠٠ صباحاً', 'الثلاثاء ٠٩:٠٠ صباحاً', 'الخميس ١١:٠٠ صباحاً'] },
  { id: 't6', name: 'Mrs. Sarah Harrison', nameAr: 'السيدة سارة هاريسون', role: 'Bilingual English Pathway Coordinator', roleAr: 'منسقة مسار اللغة الإنجليزية ثنائي اللغة', department: 'Middle/High', departmentAr: 'المرحلتين المتوسطة والثانوية', availableTimes: ['Sunday 09:00 AM', 'Wednesday 01:00 PM', 'Thursday 09:00 AM'], availableTimesAr: ['الأحد ٠٩:٠٠ صباحاً', 'الأربعاء ٠١:٠٠ ظهراً', 'الخميس ٠٩:٠٠ صباحاً'] }
];

export const MOCK_STUDENT: PortalStudent = {
  name: 'Yousif Bakri Al-Amin',
  nameAr: 'يوسف بكري الأمين',
  gradeLevel: 'Grade 11 (Scientific Track)',
  gradeLevelAr: 'الصف الحادي عشر (المسار العلمي المتقدم)',
  idNumber: 'SCS-2025-4491',
  nationality: 'Sudanese',
  nationalityAr: 'سوداني الجنسية',
  attendanceRate: 97.4,
  meritPoints: 240,
  gpa: 3.82
};

export const INITIAL_ASSIGNMENTS: Assignment[] = [
  { id: 'as1', title: 'Calculus - Limits & Derivatives Review', titleAr: 'حساب التفاضل - مراجعة النهايات والمشتقات الرياضية', subject: 'Pure Mathematics', subjectAr: 'الرياضيات البحتة', dueDate: '2026-07-08', status: 'Pending', statusAr: 'قيد الحل المبدئي' },
  { id: 'as2', title: 'Classic Poem Recitation: "Al-Mutanabbi"', titleAr: 'تسميع وتحليل قصيدة كلاسيكية لأبي الطيب المتنبي', subject: 'Arabic Literature', subjectAr: 'الأدب العربي والبلاغة', dueDate: '2026-07-04', status: 'Graded', statusAr: 'تم التقييم وحفظ الدرجة', score: '19/20' },
  { id: 'as3', title: 'Lab Report: Specific Heat Capacity of Metals', titleAr: 'تقرير المختبر الميداني: السعة الحرارية النوعية للمعادن', subject: 'Physics Lab', subjectAr: 'مختبر الفيزياء العملي', dueDate: '2026-07-12', status: 'Submitted', statusAr: 'تم التقديم إلكترونياً' },
  { id: 'as4', title: 'Essay: The Impact of Nile Agriculture on Heritage', titleAr: 'بحث تعبيري: أثر الزراعة النيلية على استقرار التراث والحضارة', subject: 'Social History', subjectAr: 'التاريخ والدراسات الاجتماعية', dueDate: '2026-07-06', status: 'Graded', statusAr: 'تم التقييم وحفظ الدرجة', score: '9.5/10' }
];

export const INITIAL_GRADES: Grade[] = [
  { subject: 'Arabic Grammar & Syntax', subjectAr: 'النحو والصرف والقواعد الإملائية', midterm: 27, final: 65, participation: 10, total: 102, grade: 'A' }, // out of 110
  { subject: 'Pure & Applied Mathematics', subjectAr: 'الرياضيات البحتة والتطبيقات الهندسية', midterm: 28, final: 68, participation: 9, total: 105, grade: 'A' },
  { subject: 'Physics & Thermodynamics', subjectAr: 'الفيزياء والديناميكا الحرارية والميكانيكا', midterm: 23, final: 56, participation: 8, total: 87, grade: 'B' },
  { subject: 'English Language & Literature', subjectAr: 'اللغة الإنجليزية وآدابها والتعبير المقالي', midterm: 29, final: 67, participation: 10, total: 106, grade: 'A' },
  { subject: 'Islamic Studies & Philosophy', subjectAr: 'التربية والثقافة الإسلامية والتوحيد والفلسفة', midterm: 25, final: 58, participation: 10, total: 93, grade: 'A' },
  { subject: 'Computer Programming (Python)', subjectAr: 'علوم الحاسوب وهندسة البرمجيات (بلغة بايثون)', midterm: 22, final: 52, participation: 9, total: 83, grade: 'B' }
];

export const INITIAL_MESSAGES: Message[] = [
  {
    id: 'm1',
    sender: 'Professor Amna Al-Mahi',
    senderAr: 'البروفيسور آمنة الماحي',
    role: 'School Principal',
    roleAr: 'مديرة المدرسة',
    subject: 'Academic Performance & Midterm Guidance',
    subjectAr: 'التحصيل الأكاديمي المتميز ودرجات نصف العام',
    date: '2026-07-03',
    preview: 'Congratulations on your excellent progress. Your latest mathematics test scores are exceptional...',
    previewAr: 'نهنئكم على هذا التقدم المتميز الباهر. نتائج امتحاناتكم الأخيرة في الرياضيات المتقدمة مبهرة واستثنائية...',
    content: 'Dear Yousif, I wanted to personally commend you on your outstanding score in the Advanced Math midterm. You scored 28/30, which represents the second-highest grade in Grade 11 Scientific. Your study group leaders are doing a wonderful job. Keep maintaining this exemplary discipline and helpfulness towards your peers.',
    contentAr: 'عزيزي يوسف، أود أن أتوجه إليك بشكر وتقدير شخصي مني ومن إدارة المدرسة على النتيجة الباهرة والتفوق الذي أحرزته في امتحان منتصف العام لمادة الرياضيات المتقدمة. لقد حصلت على ٢٨ من أصل ٣٠ درجة، وهي ثاني أعلى علامة مسجلة في الصف الحادي عشر العلمي بالمدرسة لهذا العام. مجموعات المذاكرة التضامنية التي تساهم بها تقوم بعمل جليل. استمر في إظهار هذا الانضباط الأخلاقي ومساندة زملائك كما عهدناك دائماً.',
    read: false
  },
  {
    id: 'm2',
    sender: 'Dr. Tariq Al-Bashir',
    senderAr: 'الدكتور طارق البشير',
    role: 'Science Dept Coordinator',
    roleAr: 'منسق وموجه قسم العلوم العامة',
    subject: 'Robotics Team Selection & Physics Project',
    subjectAr: 'اختيار فريق الروبوتات والمشروع الفيزيائي البيئي للمشاركة',
    date: '2026-07-01',
    preview: 'We have approved your project "Eco-friendly Water Purifier Model" for the upcoming Science Fair...',
    previewAr: 'لقد وافقنا رسمياً على نموذج مشروعكم البيئي لتنقية المياه للمشاركة في معرض العلوم السنوي الموقر...',
    content: 'Hi Yousif, this is to confirm that your project "Eco-friendly Water Purifier Model using Natural Charcoal Filter" has been accepted and allocated Table 14 in the primary hall. You will have access to the physics lab after 2:30 PM this week to calibrate the electric pumps. Highly disciplined progress, well done!',
    contentAr: 'مرحباً يوسف، نرسل لك هذا التأكيد الإداري لنعلمك بأن مشروعك المبتكر "نموذج مصفي المياه الصديق للبيئة باستخدام الفحم النباتي الطبيعي" قد تمت الموافقة عليه وتخصيص الطاولة رقم ١٤ بقاعة العرض الرئيسية بالمدرسة. يمكنك استخدام مختبر الفيزياء المدرسي بعد الساعة ٢:٣٠ ظهراً طيلة هذا الأسبوع لضبط المضخات والأجهزة. تقدم وانضباط رائع تشكر عليه، واصل بالتوفيق!',
    read: true
  },
  {
    id: 'm3',
    sender: 'Dr. Yasmin Soliman',
    senderAr: 'الدكتورة ياسمين سليمان',
    role: 'School Health Unit',
    roleAr: 'مسؤولة الوحدة الصحية المدرسية',
    subject: 'Annual Vaccination & Health Clearance',
    subjectAr: 'فحص وتحديث الكارت الصحي السنوي للطلاب واللقاحات للوقاية',
    date: '2026-06-25',
    preview: 'This is a friendly reminder to submit your signed health clearance card from the Ministry of Health...',
    previewAr: 'نذكركم بلطف بوجوب تقديم الكارت الصحي والتلقيحات المحدثة المعتمدة للوقاية والسلامة...',
    content: 'Dear Parents, this is a reminder that all Grade 11 students must submit their updated physical vaccination card by the end of next week. You can upload a scan of it inside the portal or deliver it to the school health office on Sunday morning. Thank you for keeping our community safe and healthy.',
    contentAr: 'السادة أولياء الأمور الكرام، نذكركم بأهمية تسليم كارت التطعيم الطبي السنوي المحدث والموقع لطلاب الصف الحادي عشر لضمان إتمام الملفات الصحية قبل نهاية الأسبوع القادم. يمكنكم رفع صورة ممسوحة ضوئياً عبر هذه البوابة الأكاديمية أو تسليم الكارت يدوياً لعيادة المدرسة صباح يوم الأحد. نشكر تعاونكم وحرصكم الدائم على صحة وسلامة مجتمعنا المدرسي.',
    read: true
  }
];

// Class definition to manage Student Gallery groups
// Easy to edit, duplicate, and copy-paste.
export class StudentGalleryItem implements GalleryGroup {
  id: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  images: string[];

  constructor(id: string, title: string, titleAr: string, description: string, descriptionAr: string, images: string[]) {
    this.id = id;
    this.title = title;
    this.titleAr = titleAr;
    this.description = description;
    this.descriptionAr = descriptionAr;
    this.images = images;
  }
}

// Editable Student Gallery Groups
// Feel free to copy and paste instances of 'new StudentGalleryItem(...)' below to add more categories and photos!
export const STUDENT_GALLERY_GROUPS: GalleryGroup[] = [
  new StudentGalleryItem(
    'g1',
    'Student Laboratory Experiments',
    'تجارب الطلاب في المختبرات العلمية المتقدمة',
    'Our middle and high school students actively conducting hands-on chemistry and physics experiments in our fully equipped advanced laboratories, developing real scientific analytical skills.',
    'طلاب المرحلتين المتوسطة والثانوية يجرون التجارب العملية في الكيمياء والفيزياء داخل مختبراتنا المجهزة بالكامل لبناء مهارات البحث العلمي والتحليل التطبيقي.',
    [
      '/src/assets/images/school_activities_lab_1783244909917.jpg',
      'https://images.unsplash.com/photo-1562774053-f5a02f68995b?auto=format&fit=crop&q=80&w=600'
    ]
  ),
  new StudentGalleryItem(
    'g2',
    'Sudanese Cultural Heritage Celebrations',
    'مهرجانات يوم التراث والثقافة السودانية بالمدرسة',
    'Beautiful moments of our students celebrating Sudanese culture, showcasing regional traditional folklore, authentic clothing, custom historic presentations, and artistic exhibits.',
    'لقطات متميزة من احتفال طلابنا بيوم التراث والثقافة السودانية بالمدرسة، مستعرضين الأزياء السودانية العريقة، الفولكلور الشعبي، والمجسمات والمشغولات التراثية واليدوية.',
    [
      'https://images.unsplash.com/photo-1544924497-5f212797e857?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600'
    ]
  ),
  new StudentGalleryItem(
    'g3',
    'Modern Learning Resource Library',
    'مركز مصادر التعلم والبحث المدرسي الحديث',
    'An interactive study environment equipped with scientific reference literature and research resources for active group collaboration.',
    'بيئة دراسية تفاعلية مجهزة بمصادر التعلم والبحث ومؤلفات مراجع المنهج الوطني السوداني لتطوير قدرات المطالعة الفردية والتعاون الجماعي.',
    [
      '/src/assets/images/school_library_collab_1783244895072.jpg'
    ]
  ),
  new StudentGalleryItem(
    'g4',
    'Sports Training & Group Competitions',
    'اليوم الرياضي والتدريب البدني الفعال للبراعم والناشئين',
    'Students participating in physical fitness drills and cooperative football matches on our dedicated sports pitches, building leadership and health habits.',
    'نشاطات طلابنا الحركية والتدريبية خلال الأيام الرياضية والبطولات الجماعية الودية على الملاعب المخصصة لتعزيز المبادئ القيادية، اللياقة البدنية والعمل الجماعي.',
    [
      'https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?auto=format&fit=crop&q=80&w=600'
    ]
  )
];

