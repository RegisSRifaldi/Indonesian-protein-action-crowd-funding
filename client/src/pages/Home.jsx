import React, { useState, useEffect } from "react";

import { useStateContext } from "../context";
import { DisplayCampaign } from "../components";
import { daysLeft } from "../utils";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);

  const { address, contract, getCampaigns } = useStateContext();

  useEffect(() => {
    const fetchCampaigns = async () => {
      setIsLoading(true);
      const data = await getCampaigns();
      const campaignsWithDays = data.map((campaign) => ({
        ...campaign,
        days: daysLeft(campaign.deadline),
      }));
      setCampaigns(campaignsWithDays);
      setIsLoading(false);
    };

    if (contract) fetchCampaigns();
  }, [address, contract]);

  const filteredCampaigns = campaigns.filter((campaign) => campaign.days > 0);

  return (
    <DisplayCampaign
      title="All Campaigns"
      isLoading={isLoading}
      campaigns={filteredCampaigns}
    />
  );
};

export default Home;
