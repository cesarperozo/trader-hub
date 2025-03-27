import axios from "axios";
import { defaultConfig } from "../config/config";

const api = axios.create({ ...defaultConfig });

export default api;
