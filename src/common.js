export const getAuthorizationHeader = () => {
  return {
    'Authorization': `Bearer ${getAccessToken()} ${getRefreshToken()}`,
    'Content-Type': 'application/json',
  };
}

export const getAccessToken = () => {
  return sessionStorage.getItem("accessToken");
}

export const getRefreshToken = () => {
  return sessionStorage.getItem("refreshToken");
}
