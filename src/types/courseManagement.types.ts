import { TAcademicSemister } from "./academicManagement.type"

export interface TSemester {
    _id: string
    academicSemester: TAcademicSemister
    status: string
    startDate: string
    endDate: string
    minCredit: number
    maxCredit: number
    createdAt: string
    updatedAt: string
  }
  

  