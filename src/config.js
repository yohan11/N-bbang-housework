const host = {
  SCHEME: "https://",
  DOMAIN: "nbbang.kr",
};

const createUrl = (path) => `${host.SCHEME}${host.DOMAIN}/${path}`;

const api = {
  // api, auth, notify 3개 path로 구분
  API_HOST: createUrl("api"),
  AUTH_HOST: createUrl("auth"),
  NOTIFY_HOST: createUrl("notify"),
  // 각 상황별 api
  KAKAO_LOGIN_API: createUrl("auth/KAKAO/loginPage"),
  NAVER_LOGIN_API: createUrl("auth/NAVER/loginPage"),
  USER_INFO_API: createUrl("auth/info"),
  GROUP_INFO_API: createUrl("api/group/info"),
  GROUP_INFO_GET_API: createUrl("api/group/info/list"),
  TODO_GET_API: createUrl("api/housework/todo/"),
  HOUSEWORK_CATEGORY_GET_API: createUrl("api/housework/category/"),
  HOUSEWORK_MANAGER_GET_API: createUrl("api/group/member/"),
  ADD_WORK_POST_API: createUrl("api/housework/"),
};

const generateTokenApiUrl = (platform, code, state) => {
  return `${api.AUTH_HOST}/${platform}/login?code=${code}&state=${state}`;
};

export { api, generateTokenApiUrl };
