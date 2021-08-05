import { getToken } from "./authManager";

const baseUrl = '/api/friendship'

export const getCurrentUsersFriends = () => {
    return getToken().then((token) => {

        return fetch(`${baseUrl}/GetMyFriendList`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(resp => {
            if (resp.ok) {
                return resp.json();
            } else {
                throw new Error("An unknown error occurred while trying to get your Friend List.");
            }
        });
    });
};

export const getNetworkSitters = () => {
    return getToken().then((token) => {

        return fetch(`${baseUrl}/GetSittersInMyNetwork`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(resp => {
            if (resp.ok) {
                return resp.json();
            } else {
                throw new Error("An unknown error occurred while trying to get your network of babysitters.");
            }
        });
    });
};

export const addFriendship = (FriendConnection) => {

    return getToken().then((token) => {
        return fetch(`${baseUrl}`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(FriendConnection)
        })
    });
};

export const removeFriend = (id) => {
    return getToken().then((token) => {

        return fetch(`${baseUrl}/${id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

    })
};




