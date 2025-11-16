import { api } from "./client";
import type { Credentials } from "../types";

export const login = (credentials: Credentials) => api.post('/auth/login', credentials);