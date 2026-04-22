export const addThousandsSeparator = (num) => {
    if (num == null || isNaN(num)) return "";

    // // Convert number to string to handle decimals
    // const numStr = num.toString();
    // const parts = numStr.split('.'); // Split into integer and fractional parts

    // let integerPart = parts[0];
    // let fractionalPart = parts[1];

    // // Regex for Indian numbering system
    // // It handles the first three digits, then every two digits
    // const lastThree = integerPart.substring(integerPart.length - 3);
    // const otherNumbers = integerPart.substring(0, integerPart.length - 3);

    // if (otherNumbers !== '') {
    //     // Apply comma after every two digits for the 'ohterNumbers' part
    //     const formattedOtherNumbers = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, '');
    //     integerPart = formattedOtherNumbers + ',' + lastThree;
    // } else {
    //     integerPart = lastThree; // No change if less than 4 digits
    // }

    // // Combine integer and fractional parts
    // return fractionalPart ? `${integerPart}.${fractionalPart}` : integerPart;
    return Number(num).toLocaleString('vi-VN');
};

// Hàm rút gọn số tiền: 1.000 -> 1K, 1.000.000 -> 1M (hoặc 1Tr)
export const formatAbbreviateNumber = (num) => {
    if (num == null || isNaN(num)) return "0";

    const THRESHOLD = 999999999;

    if (num < THRESHOLD) {
        return Number(num).toLocaleString('vi-VN');
    }

    const si = [
        { value: 1e9, symbol: "B" }
    ];

    const item = si.find(i => num >= i.value);
    if (item) {
        // Lấy 1 chữ số thập phân nếu cần, ví dụ 1.2M
        const res = (num / item.value).toFixed(1).replace(/\.0$/, "");
        return res + item.symbol;
    }
    return num.toLocaleString('vi-VN');
};

export const prepareIncomeLineChartData = (transactions) => {
    if (!transactions || transactions.length === 0) return [];

    const grouped = {};

    transactions.forEach((item) => {
        const dateObj = new Date(item.date);
        const key = dateObj.toISOString().split("T")[0];

        if (!grouped[key]) {
            grouped[key] = {
                date: key,
                totalAmount: 0,
                items: [],
                month: formatDateLabel(dateObj),
            };
        }

        grouped[key].totalAmount += item.amount || 0;
        grouped[key].items.push({
            id: item.id,
            name: item.title || item.name,
            amount: item.amount
        });
    });

    return Object.values(grouped).map(group => {
        // Tạo nhãn hiển thị thông minh
        const displayLabel = group.items.length > 1
            ? `${group.items.length} Transactions`
            : group.items[0].name;

        return {
            ...group,
            displayName: displayLabel // Thêm trường này để Tooltip dễ dùng
        };
    }).sort((a, b) => new Date(a.date) - new Date(b.date));
};

export const prepareExpenseLineChartData = (transactions) => {
    if (!transactions || transactions.length === 0) return [];

    const grouped = {};

    transactions.forEach((item) => {
        const dateObj = new Date(item.date);
        const key = dateObj.toISOString().split("T")[0];

        if (!grouped[key]) {
            grouped[key] = {
                date: key,
                totalAmount: 0,
                items: [],
                month: formatDateLabel(dateObj),
            };
        }

        grouped[key].totalAmount += item.amount || 0;
        grouped[key].items.push({
            id: item.id,
            name: item.title || item.name,
            amount: item.amount
        });
    });

    return Object.values(grouped).map(group => {
        // Tạo nhãn hiển thị thông minh
        const displayLabel = group.items.length > 1
            ? `${group.items.length} Transactions`
            : group.items[0].name;

        return {
            ...group,
            displayName: displayLabel // Thêm trường này để Tooltip dễ dùng
        };
    }).sort((a, b) => new Date(a.date) - new Date(b.date));
};

// Helper format "12th Jul"
const formatDateLabel = (date) => {
    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "short" });

    return `${day}${getOrdinal(day)} ${month}`;
};


// Helper lấy st, nd, rd, th
const getOrdinal = (n) => {
    if (n > 3 && n < 21) return "th";
    switch (n % 10) {
        case 1: return "st";
        case 2: return "nd";
        case 3: return "rd";
        default: return "th";
    }
};