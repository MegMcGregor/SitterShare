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

export const SearchForFriendsByName = (string) => {
    return getToken().then((token) => {
        return fetch(baseUrl + '/SearchForParentsByName?q=' + string, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }).then((res) => {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error("An unknown error occurred while trying to search for friends.");
            }
        });
    });
}

export const getAllParents = () => {
    return getToken().then((token) => {

        return fetch(`${baseUrl}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(resp => {
            if (resp.ok) {
                return resp.json();
            } else {
                throw new Error("An unknown error occurred while trying to get post.");
            }
        });
    });
};
