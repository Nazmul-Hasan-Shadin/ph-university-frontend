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

      transformResponse: (resoponse: TResponsRedux<TOfferedCourse>) => {
        return {
          data: resoponse.data,
          meta: resoponse.meta,
        };
      },
    }),
  }),
});

export const { useGetAllOfferedCoursesQuery } = studentCourseApi;
