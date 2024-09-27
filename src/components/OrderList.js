import React, { useEffect, useState } from "react";
import { DataGrid } from "devextreme-react/data-grid";

const OrderList = ({ userId }) => {
	const [orders, setOrders] = useState([]);

	useEffect(() => {
		const fetchOrders = async () => {
			if (userId) {
				const response = await fetch(`API_ENDPOINT/users/${userId}/orders`);
				const data = await response.json();
				setOrders(data.orders);
			}
		};

		fetchOrders();
	}, [userId]);

	return <DataGrid dataSource={orders} columns={[{ dataField: "orderId" }, { dataField: "status" }]} />;
};

export default OrderList;
