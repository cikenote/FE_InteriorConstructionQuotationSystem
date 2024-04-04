import { useEffect, useState } from "react";
import DashboardAPI from "../../../api/dashboard";

const Dashboard = () => {
  const [productCount, setProductCount] = useState(null);
  const [userCount, setUserCount] = useState(null);
  const [categoryCount, setCategoryCount] = useState(null);
  const [contractCount, setContractCount] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productCountData = await DashboardAPI.getProductCount();
        setProductCount(productCountData);

        const userCountData = await DashboardAPI.getUserCount();
        setUserCount(userCountData);

        const categoryCountData = await DashboardAPI.getCategoryCount();
        setCategoryCount(categoryCountData);

        const contractCountData = await DashboardAPI.getContractCount();
        setContractCount(contractCountData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <h2>Product Count: {productCount}</h2>
        <h2>User Count: {userCount}</h2>
        <h2>Category Count: {categoryCount}</h2>
        <h2>Contract Count: {contractCount}</h2>
      </div>
    </div>
  );
};

export default Dashboard;
