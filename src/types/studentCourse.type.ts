export interface TOfferedCourse {
    _id: string
    semesterRegistration: string
    academicSemester: string
    academicFaculty: string
    academicDepartment: string
    course: Course
    maxCapacity: number
    faculty: string
    section: number
    days: string[]
    startTime: string
    endTime: string
    createdAt: string
    updatedAt: string
  }
  
  export interface Course {
    _id: string
    title: string
    prefix: string
    code: number
    credits: number
    preRequisiteCourse:any[]
    isDeleted: boolean
    __v: number
  }
