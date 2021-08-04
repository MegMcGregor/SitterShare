import { getToken } from "./authManager";

const baseUrl = '/api/parentSitter'

export const getCurrentUsersBabysitters = () => {
    return getToken().then((token) => {

        return fetch(`${baseUrl}/GetMyBabysitterList`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(resp => {
            if (resp.ok) {
                return resp.json();
            } else {
                throw new Error("An unknown error occurred while trying to get your Sitter List.");
            }
        });
    });
};

export const getUsersBabysitterById = (id) => {
    return getToken().then((token) => {

        return fetch(`${baseUrl}/${id}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(resp => {
            if (resp.ok) {
                return resp.json();
            } else {
                throw new Error("An unknown error occurred while trying to get post details.");
            }
        });
    });
};

export const addNewSitterConnection = (newParentSitterConnection) => {

    return getToken().then((token) => {
        return fetch(`${baseUrl}`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newParentSitterConnection)
        })
    });
};

export const deleteSitterFromMyList = (babysitterId) => {
    return getToken().then((token) => {

        return fetch(`${baseUrl}/${babysitterId}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

    })
};
