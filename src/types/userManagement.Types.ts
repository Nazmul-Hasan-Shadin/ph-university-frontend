export interface TStudent {
    _id: string
    id: string
    user: TUser
    name: TName
    gender: string
    dateOfBirth: string
    email: string
    contactNumber: string
    emergencyContactNo: string
    bloodGroup: string
    presentAddress: string
    permanentAddress: string
    guardian: TGuardian
    localGuardian: TLocalGuardian
    profileImg: string
    admissionSemister: TAdmissionSemister
    academicDeparment: TAcademicDeparment
    academicFaculty: TAcademicFaculty
    isDeleted: boolean
  }
  
  export interface TUser {
    _id: string
    id: string
    email: string
    role: string
    needPasswordChange: boolean
    status: string
    isDeleted: boolean
    createdAt: string
    updatedAt: string
    __v: number
  }
  
  export interface TName {
    firstName: string
    middleName: string
    lastName: string
    _id: string
  }
  
  export interface TGuardian {
    fatherName: string
    fatherOccupation: string
    fatherContactNo: string
    motherName: string
    motherContactNo: string
    motherOccupation: string
    _id: string
  }
  
  export interface TLocalGuardian {
    name: string
    occupation: string
    contactNo: string
    address: string
    _id: string
  }
  
  export interface TAdmissionSemister {
    _id: string
    name: string
    year: string
    code: string
    startMonth: string
    endMonth: string
    createdAt: string
    updatedAt: string
    __v: number
  }
  
  export interface TAcademicDeparment {
    _id: string
    name: string
    academicFaculty: string
    createdAt: string
    updatedAt: string
    __v: number
  }
  
  export interface TAcademicFaculty {
    _id: string
    name: string
    createdAt: string
    updatedAt: string
    __v: number
  }
  