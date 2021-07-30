import { getToken } from "./authManager";

const baseUrl = '/api/parentFriend'

export const getCurrentUsersFriends = () => {
    return getToken().then((token) => {

        return fetch(`${baseUrl}/GetMyFriendist`, {
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
