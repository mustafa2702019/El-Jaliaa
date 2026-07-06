export interface Announcement {
  id: string;
  title: string;
  titleAr?: string;
  category: 'Event' | 'Academic' | 'Community' | 'Urgent';
  categoryAr?: string;
  date: string;
  summary: string;
  summaryAr?: string;
  content: string;
  contentAr?: string;
  tags: string[];
  tagsAr?: string[];
}

export interface Department {
  id: string;
  name: string;
  arabicName: string;
  iconName: string;
  gradeRange: string;
  gradeRangeAr?: string;
  curriculum: string;
  curriculumAr?: string;
  focus: string;
  focusAr?: string;
  subjects: string[];
  subjectsAr?: string[];
  headTeacher: {
    name: string;
    nameAr?: string;
    role: string;
    roleAr?: string;
    image: string;
    quote: string;
    quoteAr?: string;
  };
}

export interface Teacher {
  id: string;
  name: string;
  nameAr?: string;
  role: string;
  roleAr?: string;
  department: string;
  departmentAr?: string;
  availableTimes: string[];
  availableTimesAr?: string[];
}

export interface Booking {
  id: string;
  parentName: string;
  studentName: string;
  teacherId: string;
  teacherName: string;
  timeSlot: string;
  topic: string;
  status: 'Confirmed' | 'Pending';
  date: string;
}

export interface Assignment {
  id: string;
  title: string;
  titleAr?: string;
  subject: string;
  subjectAr?: string;
  dueDate: string;
  status: 'Submitted' | 'Graded' | 'Pending';
  statusAr?: string;
  score?: string;
}

export interface Grade {
  subject: string;
  subjectAr?: string;
  midterm: number;
  final: number;
  participation: number;
  total: number;
  grade: 'A' | 'B' | 'C' | 'D' | 'F';
}

export interface Message {
  id: string;
  sender: string;
  senderAr?: string;
  role: string;
  roleAr?: string;
  subject: string;
  subjectAr?: string;
  date: string;
  preview: string;
  previewAr?: string;
  content: string;
  contentAr?: string;
  read: boolean;
}

export interface PortalStudent {
  name: string;
  nameAr?: string;
  gradeLevel: string;
  gradeLevelAr?: string;
  idNumber: string;
  nationality: string;
  nationalityAr?: string;
  attendanceRate: number;
  meritPoints: number;
  gpa: number;
}

export interface GalleryGroup {
  id: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  images: string[];
}
