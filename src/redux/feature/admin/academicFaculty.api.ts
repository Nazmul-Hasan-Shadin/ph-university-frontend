import { baseApi } from "../../api/baseApi";

const academicFacultyApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllFaculty: builder.query({
      query: () => ({
        url: "/academic-faculties",
        method: "GET",
      }),
    }),

    createAcademicFaculty: builder.mutation({
      query: (data) => ({
        url:'/academic-faculties/create-academic-faculty',
        method:'POST',
       body:data
      }),
    }),
  }),
});

export const { useGetAllFacultyQuery ,useCreateAcademicFacultyMutation} =academicFacultyApi;
