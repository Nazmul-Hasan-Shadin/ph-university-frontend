import { TAcademicSemister } from "../../../types/academicManagement.type";
import { TQueryParma, TResponsRedux } from "../../../types/global.type";

import { baseApi } from "../../api/baseApi";

const academicManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSemester: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          console.log(args);

          args.forEach((item: TQueryParma) => {
            return params.append(item.name, item.value as string);
          });
        }

        return {
          url: `/academic-semister`,
          method: "GET",
          params: params,
        };
      },
      transformResponse: (response: TResponsRedux<TAcademicSemister[]>) => {
        return {
          data: response.data,
          meta: response?.meta,
        };
      },
    }),
    addAcademicSemester: builder.mutation({
      query: (data) => ({
        url: "/academic-semister/create-academic-semister",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetAllSemesterQuery, useAddAcademicSemesterMutation } =
  academicManagementApi;
