import { TResponsRedux, TSemester } from "../../../types";
import { baseApi } from "../../api/baseApi";

const courseManageMentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addRegisterSemester: builder.mutation({
      query: (data) => ({
        url: "/semester-registrations/create-semester-registration",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["semester"],
    }),
    getAllRegesterdSemester: builder.query({
      query: (args) => {
        // const params = new URLSearchParams();
        // if (args) {
        //   console.log(args);

        //   args.forEach((item: TQueryParma) => {
        //     return params.append(item.name, item.value as string);
        //   });
        // }

        return {
          url: `/semester-registrations`,
          method: "GET",
          // params: params,
        };
      },

      providesTags: ["semester"],
      transformResponse: (response: TResponsRedux<TSemester[]>) => {
        return {
          data: response.data,
          meta: response?.meta,
        };
      },
    }),

    updateRegisterSemesterStatus: builder.mutation({
      query: (args) => ({
        url: `/semester-registrations/${args.id}`,
        method: "PATCH",
        body: args.data,
      }),
      invalidatesTags: ["semester"],
    }),
    getAllCourses: builder.query({
      query: (args) => {
        // const params = new URLSearchParams();
        // if (args) {
        //   console.log(args);

        //   args.forEach((item: TQueryParma) => {
        //     return params.append(item.name, item.value as string);
        //   });
        // }

        return {
          url: `/courses`,
          method: "GET",
          // params: params,
        };
      },

      providesTags: ["courses"],
      transformResponse: (response: TResponsRedux<any>) => {
        return {
          data: response.data,
          meta: response?.meta,
        };
      },
    }),
    addCourse: builder.mutation({
      query: (data) => {
        console.log(data, "ih");

        return {
          url: `/courses/create-course`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["courses"],
    }),

    addFaculties: builder.mutation({
      query: (args) => {
        return {
          url: `/courses/${args.courseId}/assign-faculties`,
          method: "PUT",
          body: args.data,
        };
      },
      invalidatesTags: ["courses"],
    }),
    getCourseFaculty: builder.query({
      query: (args) => {
        console.log(args,'iam ars');
        
        return {
          url: `/courses/${args}/get-faculties`,
          method: "GET",
        };
      },
    }),

    createOfferedCourse: builder.mutation({
      query: (data) => ({
        url: `offered-courses/create-offered-course`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["courses"],
    }),
  }),
});

export const {
  useAddRegisterSemesterMutation,
  useGetAllRegesterdSemesterQuery,
  useUpdateRegisterSemesterStatusMutation,
  useGetAllCoursesQuery,
  useAddCourseMutation,
  useAddFacultiesMutation,
  useGetCourseFacultyQuery,
  useCreateOfferedCourseMutation
} = courseManageMentApi;
