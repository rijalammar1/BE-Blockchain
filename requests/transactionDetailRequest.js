import { body } from "express-validator"

// berfungsi untuk mevalidasi transaksi detail
export const validateAddTransactionDetail = [
  body("transactionCode").isString(),
  body("price").isNumeric(),
  body("token").isString(),
  body("createdAt").isNumeric(),
]
