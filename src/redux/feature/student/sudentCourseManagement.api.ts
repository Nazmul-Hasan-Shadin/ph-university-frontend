import { TQueryParma, TResponsRedux } from "../../../types";
import { TOfferedCourse } from "../../../types/studentCourse.type";
import { baseApi } from "../../api/baseApi";

const studentCourseApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllOfferedCourses: builder.query({
      query: (args) => {
        console.log(args);
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TQueryParma) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: "/offered-courses/my-offered-courses",
          method: "GET",
          params: params,
        };
      },

      providesTags: ["offeredCourse"],
      transformResponse: (resoponse: TResponsRedux<TOfferedCourse>) => {
        return {
          data: resoponse.data,
          meta: resoponse.meta,
        };
      },
    }),

    enrolCourse: builder.mutation({
      query: (data) => ({
        url: "/enrolled-course/create-enrolled-course",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["offeredCourse"],
    }),

    getMyEnrolledCourses: builder.query({
      query: (args) => {
        console.log(args);
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TQueryParma) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: "/enrolled-course/my-enrolled-courses",
          method: "GET",
          params: params,
        };
      },

    
      transformResponse: (response: TResponsRedux<any>) => {
        return {
          data:response.data,
          meta: response.meta,
        };
      },
    }),
  }),
});

export const {
  useGetAllOfferedCoursesQuery,
  useEnrolCourseMutation,
  useGetMyEnrolledCoursesQuery,
} = studentCourseApi;
