import { getToken } from "./authManager";

const baseUrl = '/api/babysitter'

export const getAllBabysitters = () => {
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
                throw new Error("An unknown error occurred while trying to get babysitters.");
            }
        });
    });
};

export const getBabysitterById = (id) => {
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
                throw new Error("An unknown error occurred while trying to get this sitter.");
            }
        });
    });
};