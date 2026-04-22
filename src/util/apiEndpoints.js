export const BASE_URL = "https://expense-tracker-api-vdng.onrender.com/api/v1.0";
// export const BASE_URL = "http://localhost:8080/api/v1.0"
const CLOUDINARY_CLOUD_NAME = "dj4ypklld"

export const API_ENDPOINTS = {
    REGISTER: "/register",
    LOGIN: "/login",

    GET_USER_INFO: "/profile",

    GET_ALL_CATEGORIES: "/categories",
    ADD_CATEGORY: "/categories",
    UPDATE_CATEGORY: (categoryId) => `/categories/${categoryId}`,
    CATEGORY_BY_TYPE: (type) => `/categories/${type}`,

    GET_ALL_INCOMES: "/incomes",
    ADD_INCOME: "/incomes",
    DELETE_INCOME: (incomeId) => `/incomes/${incomeId}`,
    INCOME_EXCEL_DOWNLOAD: "excel/download/income",
    INCOME_PDF_DOWNLOAD: "pdf/download/income",
    EMAIL_INCOME: "/email/income-pdf",

    GET_ALL_EXPENSES: "/expenses",
    ADD_EXPENSE: "/expenses",
    DELETE_EXPENSE: (expenseId) => `/expenses/${expenseId}`,
    EXPENSE_EXCEL_DOWNLOAD: "excel/download/expense",
    EXPENSE_PDF_DOWNLOAD: "pdf/download/expense",
    EMAIL_EXPENSE: "/email/expense-pdf",

    APPLY_FILTERS: "/filter",

    DASHBOARD_DATA: "/dashboard",

    UPLOAD_IMAGE: `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`
}