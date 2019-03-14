import httpClient from "../utils/http-client";
import {
    testInterface,
} from "../service.config";

export async function getTestData(id) {
    return await httpClient.request(testInterface, {
        id,
    });
}

export default {
    getTestData,
};
