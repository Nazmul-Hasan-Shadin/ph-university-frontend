import { TQueryParma, TResponsRedux } from "../../../types";
import { TOfferedCourse } from "../../../types/studentCourse.type";
import { baseApi } from "../../api/baseApi";

const facultyCourseApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllFacultyCourses: builder.query({
      query: (args) => {
        console.log(args);
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TQueryParma) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: "/",
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

    // enrolCourse: builder.mutation({
    //   query: (data) => ({
    //     url: "/enrolled-course/create-enrolled-course",
    //     method: "POST",
    //     body: data,
    //   }),
    //   invalidatesTags: ["offeredCourse"],
    // }),


  }),
});

export const {
useGetAllFacultyCoursesQuery
} = facultyCourseApi;
