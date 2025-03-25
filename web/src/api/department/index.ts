import request from "@/utils/request";

enum API {
    DEPARTMENT_FINDALL = '/department/findAll',
    DEPARTMENT_CREATE = '/department/create',
    DEPARTMENT_DELETE = '/department/delete',
    DEPARTMENT_EDIT = '/department/edit',
    DEPARTMENT_DETAIL = '/department/detail',
}

export const departmentFindAll = (param:any) => request.post(API.DEPARTMENT_FINDALL, param);

export const departmentDelete = (id:number) => request.delete(API.DEPARTMENT_DELETE + `/${id}`)

export const departmentAdd = (param:any) => request.post(API.DEPARTMENT_CREATE,param)

export const departmentEdit = (id:number,param:any) => request.post(API.DEPARTMENT_EDIT + `/${id}`,param)

export const departmentDetail = () => request.get(API.DEPARTMENT_DETAIL)
