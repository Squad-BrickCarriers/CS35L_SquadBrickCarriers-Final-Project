export const LoginStart = (userCredential) => ({
    type = "LOGIN_START",
});

export const LoginSuccess = (user) => ({
    type = "LOGIN_Success",
    payload: user,
});

export const LoginFailure = (user) => ({
    type = "LOGIN_Failure",
    payload: error,
});