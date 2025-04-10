import React from "react";

const KnowTeams = ({ members, onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-2xl shadow-xl w-[90%] max-w-3xl max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">Name List</h2>
                    <button
                        className="text-gray-500 hover:text-red-500 text-lg"
                        onClick={onClose}
                    >
                        ✕
                    </button>
                </div>
                <table className="w-full border border-gray-300 text-sm text-left">
                    <thead className="bg-gray-100 sticky top-0 z-10">
                        <tr>
                            <th className="p-2 border">S.No.</th>
                            <th className="p-2 border">Name</th>
                            <th className="p-2 border">Roll No.</th>
                        </tr>
                    </thead>
                    <tbody>
                        {members.map((data, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                                <td className="p-2 border">{index + 1}</td>
                                <td className="p-2 border">{data.name}</td>
                                <td className="p-2 border">{data.rollNo}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default KnowTeams; 
