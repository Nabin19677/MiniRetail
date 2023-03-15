
import { customAlphabet } from 'nanoid'

export const generateCIFNumber = (customer) => {
    const nanoid = customAlphabet('1234567890', 11)
    return 'R'+nanoid(10)
}