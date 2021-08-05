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

export const getParentById = (id) => {
    return getToken().then((token) => {
        return fetch(`${baseUrl}/ById/${id}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(resp => {
            if (resp.ok) {
                return resp.json();
            } else {
                throw new Error("An unknown error occurred while trying to get this user.");
            }
        });
    });
};

export const updateParentProfile = (parent) => {
    return getToken().then((token) => {

        return fetch(`${baseUrl}/${parent.id}`, {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(parent)
        }).then((res) => {
            if (!res.ok) {
                window.alert('You are unable to edit this profile.');
            }
        })

    });
};