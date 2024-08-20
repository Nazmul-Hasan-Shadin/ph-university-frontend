import { TQueryParma, TResponsRedux } from "../../../types";
import { baseApi } from "../../api/baseApi";

const userManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addStudent: builder.mutation({
      query: (data) => {
        return {
          url: "/users/create-student",
          method: "POST",

          body: data,
        };
      },
    }),
    getAllStudents: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          console.log(args,'iam args');

          args.forEach((item: TQueryParma) => {
            return params.append(item.name, item.value as string);
          });
        }

        return {
          url: `/students`,
          method: "GET",
          params: params,
        };
      },
      transformResponse: (response: TResponsRedux<any>) => {
        return {
          data: response.data,
          meta: response?.meta,
        };
      },
    }),
    getAllFaculties: builder.query({
      query: () => {
        return {
          url: `/faculties`,
          method: "GET",
        };
      },
      transformResponse: (response: TResponsRedux<any>) => {
        return {
          data: response.data,
          meta: response?.meta,
        };
      },
    }),

    changePassword: builder.mutation({
      query: (data) => {
        return {
          url: `/auth/change-password`,
          method: "POST",
          body:data
        };
      },
      transformResponse: (response: TResponsRedux<any>) => {
        return {
          data: response.data,
          meta: response?.meta,
        };
      },
    }),
  }),
});

export const { useAddStudentMutation ,useGetAllStudentsQuery,useGetAllFacultiesQuery,useChangePasswordMutation} = userManagementApi;
