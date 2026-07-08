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

