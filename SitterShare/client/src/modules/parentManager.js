import { getToken } from "./authManager";

const baseUrl = '/api/parent'

export const getCurrentUser = () => {
    return getToken().then((token) => {

        return fetch(`${baseUrl}/{ParentFirebaseUid}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(resp => {
            if (resp.ok) {
                return resp.json();
            } else {
                throw new Error("An unknown error occurred while trying to get user details.");
            }
        });
    });
};