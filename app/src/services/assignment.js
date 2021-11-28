import axios from "axios";


const API_URL = process.env.REACT_APP_BACKEND_URL + "/assignment";

export function getAssignments(courseId) {
  return axios.get(API_URL + '/' + courseId);
}

export function createAssignment({ courseId, name, weight }) {
    return axios.post(API_URL + '/' + courseId, { name, weight });
}

export function updateAssignmentOrder({ courseId, firstIndex, secondIndex }) {
    return axios.post(API_URL + '/order/' + courseId, { firstIndex, secondIndex });
}

export function updateAssignment({ id, name, weight }) {
    return axios.post(API_URL + '/' + id, { name, weight });
}

export function deleteAssignment({ id }) {
    return axios.delete(API_URL + '/' + id);
}