import React from 'react';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';
import { formatAbbreviateNumber } from '../util/util';

// Component Tooltip tùy chỉnh để hiển thị giống ảnh mẫu
const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        const data = payload[0].payload; // Đây là object chứa displayName, items, totalAmount...

        return (
            <div className="bg-white p-4 border border-gray-100 shadow-2xl rounded-xl outline-none min-w-[200px]">
                <div className="flex justify-between items-center mb-1">
                    <p className="text-sm font-bold text-gray-800">{data.month}</p>
                </div>

                <div className="border-t border-gray-100 my-2"></div>

                {/* HIỂN THỊ DISPLAY NAME Ở ĐÂY */}
                <p className="text-xs font-semibold text-gray-500 mb-1">
                    {data.displayName}
                </p>

                <p className="text-lg font-bold text-purple-700 mb-3">
                    {data.totalAmount.toLocaleString('vi-VN')}₫
                </p>

                {/* HIỂN THỊ CHI TIẾT CÁC LABEL CON */}
                <div className="space-y-1.5 bg-gray-50 p-2 rounded-lg">
                    <p className="text-[10px] uppercase font-bold text-gray-400">Breakdown:</p>
                    {data.items.map((item, index) => (
                        <div key={index} className="flex justify-between gap-4 text-[11px]">
                            <span className="text-gray-600">• {item.name}</span>
                            <span className="font-bold text-gray-800">{item.amount.toLocaleString('vi-VN')}₫</span>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
    return null;
};

const CustomLineChart = ({ data }) => {
    if (!data || data.length === 0) return null;

    return (
        <ResponsiveContainer width="100%" height="100%">
            <AreaChart
                data={data}
                accessibilityLayer={false} // QUAN TRỌNG 1: Tắt lớp hỗ trợ truy cập gây ra viền focus
                style={{ outline: 'none' }} // QUAN TRỌNG 2: Xóa viền SVG
                margin={{ top: 10, right: 10, left: 30, bottom: 30 }}
            >
                <defs>
                    {/* Đổ bóng Gradient tím */}
                    <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.2} />
                        <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0} />
                    </linearGradient>
                </defs>

                {/* Lưới ngang mờ */}
                <CartesianGrid strokeDasharray="0" vertical={false} stroke="#f3f4f6" />

                <XAxis
                    dataKey="month"  /* Khớp với biến 'month' trong util.js */
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#9ca3af', fontSize: 12 }}
                    dy={10}
                    padding={{ left: 20, right: 20 }}
                />

                <YAxis
                    width={70}
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#9ca3af', fontSize: 12 }}
                    tickFormatter={(val) => formatAbbreviateNumber(val)}
                />

                <Tooltip content={<CustomTooltip />} />

                <Area
                    type="monotone"
                    dataKey="totalAmount" /* Khớp với biến 'totalAmount' trong util.js */
                    stroke="#8B5CF6"
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#colorIncome)"
                    dot={{ r: 4, fill: '#8B5CF6', strokeWidth: 2, stroke: '#fff' }}
                    activeDot={{ r: 6, strokeWidth: 0, outline: 'none' }}
                />
            </AreaChart>
        </ResponsiveContainer>
    );
};

export default CustomLineChart;