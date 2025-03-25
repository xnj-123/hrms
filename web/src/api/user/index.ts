import request from "@/utils/request";

enum API {
    USER_GETUSERLIST = "/user/getUserCode",
}

export const getUserCode = (keyword: string) => request.post(API.USER_GETUSERLIST+`?keyword=${keyword}`);

