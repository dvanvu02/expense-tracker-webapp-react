import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { addThousandsSeparator } from "../util/util";

const CustomPieChart = ({
    data,
    label,
    totalAmount,
    colors
}) => {
    return (
        <div className="w-full flex flex-col items-center">

            <div className="w-full max-w-[320px] h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            dataKey="amount"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            innerRadius={120}     // 👈 độ rỗng bên trong
                            outerRadius={140}    // 👈 kích thước chart
                            paddingAngle={5}
                        >
                            {data.map((entry, index) => (
                                <Cell
                                    key={index}
                                    fill={colors[index % colors.length]}
                                />
                            ))}

                            <text
                                x="50%"
                                y="45%"
                                textAnchor="middle"
                                dominantBaseline="middle"
                                className="fill-gray-500 text-sm"
                            >
                                {label}
                            </text>

                            <text
                                x="50%"
                                y="58%"
                                textAnchor="middle"
                                dominantBaseline="middle"
                                className="fill-black text-2xl font-semibold"
                            >
                                {totalAmount}
                            </text>
                        </Pie>

                        <Tooltip
                            formatter={(value) => `${addThousandsSeparator(value)}₫`}
                        />
                    </PieChart>
                </ResponsiveContainer>
            </div>

            <div className="flex justify-center gap-6 mt-4 text-sm">
                {data.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                        <span
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: colors[index] }}
                        ></span>
                        <span>{item.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CustomPieChart;