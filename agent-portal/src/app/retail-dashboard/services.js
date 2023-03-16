import { fetch } from "@utils/httpUtil"


export const fetchCustomerDetailById = (id) => {
    return fetch(`retail/customer/${id}`)
}