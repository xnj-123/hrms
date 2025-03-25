import request from "@/utils/request";

enum API {
    GET_COMPANY_INFO = '/getCompanyInfo'
}

export const reqGetCompanyInfo = () => request.get(API.GET_COMPANY_INFO);