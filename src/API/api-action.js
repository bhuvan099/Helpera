import { getAuthToken } from "../Auth/Auth";

const token=getAuthToken();
const authToken="Bearer "+token;